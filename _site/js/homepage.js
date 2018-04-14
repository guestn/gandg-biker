var progress = document.querySelector('#progressScreen');
var progressBar = document.createElement('div');

progress.appendChild(progressBar);

var manager = new THREE.LoadingManager();
manager.onProgress = function ( item, loaded, total ) {
  progressBar.style.width = (loaded / total * 100) + '%';
};
manager.onLoad = function () {
	setTimeout(function() {document.body.classList.add('loaded')},500)
}


	var controls
	var debug = true;
	var pr = window.devicePixelRatio

	var container, stats;
	var material, basicMaterial, mirrorMaterial, brownMaterial, blackMaterial, treeMaterial, purpleMaterial, shadowMaterial, bgMaterial, roadMaterial;
	var camera, cameraTarget, scene, renderer;
	var roadside1, roadside2, flareChain, floor, floor2;

	var SCREEN_WIDTH = window.innerWidth;
	var SCREEN_HEIGHT = window.innerHeight;
	var mouseX = 0, mouseY = 0;

	var clock = new THREE.Clock();

	init();

	function init() {

		container = document.createElement( 'div' );
		document.body.appendChild( container );


	//--------------- CAMERA ---------------------//

		camera = new THREE.PerspectiveCamera( 120, window.innerWidth / window.innerHeight, 0.1, 1000 );
		camera.position.set( 0, 2.0,4.95);

		cameraTarget = new THREE.Vector3( 0, 1, 2 );
		camera.lookAt(cameraTarget)


	//--------------- SCENE ---------------------//


		scene = new THREE.Scene();
		scene.fog = new THREE.Fog( 0xffffff, 0, 1155 );



	//--------------- RENDERER ---------------------//


		renderer = new THREE.WebGLRenderer({ antialias:false, alpha:true });

		renderer.setClearColor( 0xffffff, 0);

		renderer.setPixelRatio(pr);
		renderer.setSize(window.innerWidth, window.innerHeight);
		container.appendChild(renderer.domElement);



	//--------------- LIGHTS ---------------------//


		scene.add( new THREE.AmbientLight( 0x808080 ) );

		var dLight	= new THREE.DirectionalLight( 0xfa94a4, 1.0 );
		dLight.position.set(20,10,60);
		dLight.target.position.set( 0, 0, 0 );
		scene.add(dLight);

		var dLight2	= new THREE.DirectionalLight( 0xfa94a4, 1.0 );
		dLight2.position.set(200,200,60);
		dLight2.target.position.set( 0, 0, 0 );
		scene.add(dLight2);

	//--------------- MATERIALS ---------------------//

	var textureLoader = new THREE.TextureLoader();

		material = new THREE.MeshPhongMaterial( {
			shading: THREE.FlatShading,
			color: 0xaaaaaa,
			//specular: 0x333333,
			shininess: 30,
			//side: THREE.DoubleSide
			//emissive: 0xaaaaaa
		});

		greenMaterial = new THREE.MeshPhongMaterial( {
			shading: THREE.FlatShading,
		//	color: 0x45671d,
			color: 0x396050,
			specular: 0xfa94a4,
			shininess: 10,
			side: THREE.DoubleSide
			//emissive: 0xaaaaaa
		});

		treeMaterial = new THREE.MeshPhongMaterial( {
			shading: THREE.FlatShading,
		//	color: 0x45671d,
			color: 0x396450,
			//specular: 0xfa94a4,
			shininess: 10,
			side: THREE.DoubleSide
			//emissive: 0xaaaaaa
		});

		brownMaterial = new THREE.MeshPhongMaterial( {
			shading: THREE.FlatShading,
			//color: 0x273011,
			color: 0x445551,

			specular: 0x121012,
			shininess: 124,
			side: THREE.DoubleSide
		});
		blackMaterial = new THREE.MeshPhongMaterial( {
			shading: THREE.FlatShading,
			color: 0x111111,
			specular: 0x221100,
			shininess: 10,
			side: THREE.DoubleSide
		});
		purpleMaterial = new THREE.MeshPhongMaterial( {
			shading: THREE.FlatShading,
			color: 0x916150,
			specular: 0xfa94a4,
			shininess: 100,
			side: THREE.DoubleSide
		});
		basicMaterial = new THREE.MeshBasicMaterial({color: 0xffff00})
		shadowMaterial = new THREE.MeshBasicMaterial({
			color: 0x000000,
			transparent: true,
			opacity: 0.3
		})
/*
		flareMaterial = new THREE.MeshPhongMaterial({
			color: 0xffffff,
			shininess:100,
			transparent: true,
		//	opacity: 0.7,
			map: textureLoader.load('assets/images/lensflare.png'),
			emissive: 0xffffff,
			emissiveIntensity: 100
		})
		flareMaterial2 = new THREE.MeshPhongMaterial({
			color: 0xffffff,
			shininess:100,
			transparent: true,
			map: textureLoader.load('assets/images/lensflare2.png'),
			//emissive: 0xffffff,
			emissiveIntensity: 100
		})
*/


		bgMaterial = new THREE.MeshBasicMaterial({
			map: textureLoader.load('assets/images/mountain-bg3.jpg'),
			alphaMap: textureLoader.load('assets/images/mountain-bg3-alpha.jpg'),
			transparent: true,

		})

		roadMaterial = new THREE.ShaderMaterial( THREE.RoadShader )
    roadMaterial.needsUpdate = true;
    roadMaterial.uniforms.tNoise.needsUpdate = true;
    roadMaterial.uniforms.uTime.needsUpdate = true

		mirrorMaterial = new THREE.ShaderMaterial( THREE.SEMShader);
		mirrorMaterial.side = THREE.DoubleSide;

	//--------------- OBJECTS ---------------------//


		var roadGeo = new THREE.PlaneBufferGeometry( 8, 1000 );
		var road = new THREE.Mesh(roadGeo, roadMaterial);
		road.material.side = THREE.DoubleSide;
		road.rotation.set( -Math.PI/2, 0, 0 );
		road.position.set( 0, -1, 0 );
		scene.add( road );

		var subFloorGeo = new THREE.PlaneBufferGeometry( 1000, 1000 );
		var subFloor = new THREE.Mesh(subFloorGeo, greenMaterial);
		subFloor.rotation.set( -Math.PI/2, 0, 0 );
		subFloor.position.set( 0, -10, 0 );
		scene.add( subFloor );

		var bgGeo = new THREE.PlaneBufferGeometry( 3000, 800 )
		var bg = new THREE.Mesh(bgGeo, bgMaterial);
		bg.position.set( 0, 150, -400 );
		scene.add(bg)

		roadSide1 = new THREE.Object3D();

		var noiseScale = 4;
    var size = 10;
    var height = 0.06;
    //
    floor = new THREE.Mesh(
        new THREE.ParametricBufferGeometry(function(u, v) {
            var x = u - 0.5;
            var y = v - 0.5;
            return new THREE.Vector3(x, y, noise.simplex2(x * noiseScale, y * noiseScale * 4) * height);
        }, 24, 48),
        greenMaterial
    );
		console.log('floor',floor)
    floor.rotation.set( -Math.PI/2, 0, 0 );
    floor.position.set( 0, -4, 0 );
    floor.scale.set( 100,200,50);

		roadSide2 = new THREE.Object3D();

		floor2 = new THREE.Mesh(
        new THREE.ParametricBufferGeometry(function(u, v) {
            var x = u - 0.5;
            var y = v - 0.5;
            return new THREE.Vector3(x, y, noise.simplex2(x * noiseScale, y * noiseScale * 4) * height);
        }, 24, 48),
        greenMaterial
    );
    floor2.rotation.set( -Math.PI/2, 0, 0 );
    floor2.position.set( 0, -4, 00);
    floor2.scale.set( 100,200,50);

		BikerObjLoad('assets/objects/biker2.obj', null, 0.5, [0,1,4], [0,0,0], false, false)

		TreeObjLoad('assets/objects/lowPolyTree.obj', null, 0.5, [0,0,0], [0,0,0], false, false)

		roadSide1.add( floor );
		roadSide2.add( floor2 );
		roadSide2.position.z = 200;

		scene.add(roadSide2)
		scene.add(roadSide1)

/*
		var flare1geo = new THREE.CircleBufferGeometry( 1, 7 );

		flareChain =  new THREE.Object3D();
		for (var i=0;i<5; i++) {
			var flareGeo = flare1geo.clone();
			flare = new THREE.Mesh(flareGeo, flareMaterial2);
			flare.scale.setScalar(i/2+0.5 + Math.random()*2)
			flare.position.set(0, 0, -i*7 + (Math.random()*2))
			flare.rotation.set(0,-Math.PI/3,0)
			flareChain.add(flare);
		}

		flareChain.position.set(-1,3,2)
		flareChain.rotation.set(0,Math.PI/3,0)
		console.log(flareChain)
		scene.add(flareChain);
*/


	//--------------- STATS ---------------------//


	//--------------- CONTROLS ---------------------//

		//controls = new THREE.OrbitControls( camera );


	//--------------- EVENT LISTENERS --------------//

		window.addEventListener( 'resize', onWindowResize, false )
		window.addEventListener( 'mousemove', onDocumentMouseMove, false )
		window.addEventListener('deviceorientation', onDeviceOrientationChanged, false);


		setupGrain()
		animate();

	}

	//--------------- FNS -------------------------//

	function BikerObjLoad(objFile, mtlFile, scale, position, rotation, castShadow, receiveShadow) {

		var objLoader = new THREE.OBJLoader(manager);
		objLoader.setPath( '' );
		objLoader.load( objFile, function ( object ) {
			var number = 0;

			object.traverse( function ( child ) {
				if ( child instanceof THREE.Mesh ) {

				}
			});
			object.rotation.set(rotation[0],rotation[1],rotation[2]);
			object.scale.set(scale, scale, scale);
			object.position.set(position[0],position[1],position[2]);
			console.log(object)

			object.children[10].material = material; //face
			object.children[9].material = object.children[14].material = mirrorMaterial
			object.children[1].material  = object.children[7].material = object.children[2].material = object.children[13].material= object.children[3].material = blackMaterial
			object.children[12].material = object.children[13].material = blackMaterial //glasses
			object.children[8].material = object.children[5].material = object.children[15].material = brownMaterial
			object.children[4].material = purpleMaterial // tank
			object.children[0].material = shadowMaterial // shadow
			scene.add( object );
		});

	}

	function TreeObjLoad(objFile, mtlFile, scale, position, rotation, castShadow, receiveShadow) {

		var objLoader = new THREE.OBJLoader(manager);
		objLoader.setPath( '' );
		objLoader.load( objFile, function ( object ) {

			object.traverse( function ( child ) {
				if ( child instanceof THREE.Mesh ) {

					if (typeof scene != "undefined") {
						for (var i=0; i<300; i++) {

						var newChild = new THREE.Mesh(child.geometry.clone(), treeMaterial);
						var x  = (2 * (i % 2 -0.5)) * (4.5 + (Math.random())*20)
						var y = -2.5
						var z = i*4 + (Math.random()-0.5) * 3

						newChild.position.set(x,y,z);
						roadSide1.add( newChild );
						roadSide2.add( newChild.clone())
					}
				}


				}
			});

			});

	}

	function setupGrain() {
		composer = new THREE.EffectComposer( renderer );
		composer.setSize( window.innerWidth*window.devicePixelRatio, window.innerHeight*window.devicePixelRatio )
		composer.addPass( new THREE.RenderPass( scene, camera ) );


		var shaderVignette = THREE.VignetteShader;
		var grainShader = THREE.GrainShader;
		var effectVignette = new THREE.ShaderPass( shaderVignette );
		var effectGrain = new THREE.GrainPass( 1.0, 0.05, 256, false );


		composer.addPass(effectGrain);

		//larger values = darker closer to center
		//	darkness < 1  => lighter edges
		effectVignette.uniforms[ "offset" ].value = 1;
		effectVignette.uniforms[ "darkness" ].value = 1;
		effectVignette.renderToScreen = true;

		composer.addPass(effectVignette);
		effectVignette.renderToScreen = true;
		console.log(composer)
		shaderActive = "vignette";
	}




	function onWindowResize() {

		camera.aspect = window.innerWidth / window.innerHeight;
		camera.updateProjectionMatrix();

		renderer.setSize( window.innerWidth, window.innerHeight );

		composer.setSize( pr * window.innerWidth, pr * window.innerHeight );

	}

	function onDocumentMouseMove(event) {

		mouseX = ( event.clientX - SCREEN_WIDTH/2 )/SCREEN_WIDTH;
		mouseY = ( event.clientY - SCREEN_HEIGHT/2 )/SCREEN_HEIGHT;

	}
	
	
	function onDeviceOrientationChanged(eventData) {
		
    var x = eventData.beta;
    var y = eventData.gamma; // -90/90 straight ahead. -0.1 down, 0.1 up
    var z = eventData.alpha;
    
    

		if (y < 89 && y > -89) {
			mouseX = -y/150
		} else if (y > 89) {
			mouseX = 0.5
		} else {
			mouseX = -0.5
		}
		

		if (x > 0 && x < 90) {
			mouseY = (x-45)/90
			
		}

	}

	function animate() {

		requestAnimationFrame( animate );
		render();
	}

	function render() {

		var projectionMatrixInverse = new THREE.Matrix4();

		var timer = Date.now();
    var elapsed = clock.getElapsedTime()*1000;

    roadMaterial.uniforms['uTime'].value = elapsed;

		roadSide1.position.z -= 0.8
		roadSide2.position.z -= 0.8


		if (roadSide1.position.z < -300) {
			roadSide1.position.z += 400;
		}
		if (roadSide2.position.z < -300) {
			roadSide2.position.z += 400;
		}
		
		var flareRot = Math.PI/3 - 3*mouseX
/*

		flareChain.rotation.y = flareRot;

		for (var i=0; i<flareChain.children.length; i++) {
			flareChain.children[i].rotation.y = -flareRot
			flareChain.children[i].material.opacity = mouseX+0.5
		}
*/

		var shoogle = 0.01//0.05;

		camera.lookAt( cameraTarget );
		camera.position.x = shoogle  *(Math.random()-0.5) + Math.cos(Math.PI * (mouseX -0.5)) // reduce rate of change at the edges
		camera.position.y = 1.3 + shoogle *2 *(Math.random()-0.5) + Math.cos(Math.PI * (mouseY -0.5))/1.5
		camera.rotation.z = mouseX/300 * Math.PI/5


		//renderer.render( scene, camera ); // no composer effects

		composer.render();

	}

