	var controls;

	var container;
	var material;
	var camera, cameraTarget, scene, renderer;
	var bird, seals;

	var splineCamera, cameraEye, tube;
	var binormal = new THREE.Vector3();
	var normal = new THREE.Vector3();

	var firstPass = true;

	var composer, composerBeckmann;

	var SCREEN_WIDTH = window.innerWidth;
	var SCREEN_HEIGHT = window.innerHeight;
	var mouseX = 0, mouseY = 0;

	window.addEventListener( 'load', init );

	function init(map, rockMap) {
		
	//--------------- SOUNDS ---------------------//
	
	
	
	
	
		soundControl = document.querySelector('.sound-control'),
		audio = document.querySelector('audio'),
	audio.volume = 0.6;

		function playPauseAudio() {
			if(audio.paused) {
				soundControl.classList.remove('noAnim');
				audio.play();
			} else {
				soundControl.classList.add('noAnim');
				audio.pause();
			}
		}

		soundControl.addEventListener('click', playPauseAudio)

	//--------------- CONTAINER ---------------------//


		container = document.createElement( 'div' );
		document.body.appendChild( container );


	//--------------- CAMERA ---------------------//

		camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 35000 );

		camera.position.set( -1000, 500, 2000 );

		cameraTarget = new THREE.Vector3( -50,0,0 );


	//--------------- SCENE ---------------------//

		scene = new THREE.Scene();


	//--------------- RENDERER ---------------------//


		renderer = new THREE.WebGLRenderer({ antialias:false, alpha:true });
		renderer.shadowMap.enabled = true;

		if (scene.fog) {
			renderer.setClearColor( scene.fog.color, 0.1 );
		}

		renderer.setPixelRatio(window.devicePixelRatio);
		renderer.setSize(window.innerWidth, window.innerHeight);
		container.appendChild(renderer.domElement);


	//--------------- LIGHTS ---------------------//


		scene.add( new THREE.AmbientLight( 0xaaaaaa ) );

		var dLight	= new THREE.DirectionalLight( 0xffffff, 1 );

		var d = 1000;
		dLight.shadow.camera.left = -d;
		dLight.shadow.camera.right = d;
		dLight.shadow.camera.top = d;
		dLight.shadow.camera.bottom = -d;
		dLight.shadow.camera.near = 1;
		dLight.shadow.camera.far = 2000;
		dLight.shadow.camera.fov = 50;
		dLight.shadow.bias = 0.0001;
		dLight.shadow.mapSize.width = 1024;
		dLight.shadow.mapSize.height = 1024;

		dLight.castShadow = true;
		dLight.shadow.darkness = 0.1;
		dLight.position.set(500,240,-350);
		dLight.position.normalize();

		dLight.target.position.set( 0, 0, 0 );

		dLight.shadow.camera.position.set( 0, 100, -40 );
		scene.add(dLight.target);

		scene.add(dLight);

		var pLight = new THREE.DirectionalLight(0xffffff);
		pLight.position.set(0,-1,0);
		scene.add(pLight);

	//--------------- MATERIALS ---------------------//

		var textureLoader = new THREE.TextureLoader();

		var basicMaterial = new THREE.MeshBasicMaterial({color: 0xaaccff})

		var material = new THREE.MeshPhongMaterial( {
			color: 0xffffff,
			specular: 0x111111,
			shininess: 1,
			blending: THREE.MultiplyBlending
		});

		var mattBlackMaterial = new THREE.MeshStandardMaterial( {
			color: 0x333333,
			specular: 0x111111,
			shininess: 100,
			metal: true,
		});

		var wireframeMaterial = new THREE.MeshPhongMaterial({
	    color		: 0xddd7cc,
	    wireframe:true,
	    wireframeLinewidth: 2,
	  });

		var lampScreen = textureLoader.load('dubheartach.html-assets/lampScreen.png' ,function(map) {
			map.wrapS = THREE.RepeatWrapping;
			map.wrapT = THREE.RepeatWrapping;
			map.repeat.set(15,4);
		})

		var lampScreenMaterial = new THREE.MeshPhongMaterial({
			color: 0xffffff,
			map: lampScreen,
			transparent: true,
			opacity: 0.2
		})

		var railingAlpha = textureLoader.load('dubheartach.html-assets/railing-ALPHA.png' ,function(map) {
			map.wrapS = THREE.RepeatWrapping;
			map.repeat.set(30,1);
		})

		var railingMaterial = new THREE.MeshPhongMaterial({
			color: 0xffffff,
			map: railingAlpha,
			transparent: true,
		})

		var sealMap = textureLoader.load( "dubheartach.html-assets/sealmap.jpg", function( map ) {
			map.wrapS = THREE.RepeatWrapping;
			map.wrapT = THREE.RepeatWrapping;
			map.anisotropy = 4;
			map.offset.set( 0.5, 0.4);
			map.repeat.set( 1, 0.4);
		})
		var sealMaterial = new THREE.MeshPhongMaterial({
			map: sealMap,
			color: 0xffffff,
		})

		var gridAlpha = textureLoader.load('dubheartach.html-assets/railing-ALPHA.png' ,function(map) {
			map.wrapS = THREE.RepeatWrapping;
			map.wrapT = THREE.RepeatWrapping;
			map.repeat.set(5,15);
			map.mapping = THREE.CubeReflectionMapping;

		})

		var gridMaterial = new THREE.MeshPhongMaterial({
			color: 0xffffff,
			map: gridAlpha,
			transparent: true,
		})


		renderer.autoClear = false;

		// BECKMANN

		var effectBeckmann = new THREE.ShaderPass( THREE.ShaderSkin[ "beckmann" ] );
		var effectCopy = new THREE.ShaderPass( THREE.CopyShader );

		effectCopy.renderToScreen = true;

		var pars = { minFilter: THREE.LinearFilter, magFilter: THREE.LinearFilter, format: THREE.RGBFormat, stencilBuffer: false };
		var rtwidth = 512, rtheight = 512;

		composerBeckmann = new THREE.EffectComposer( renderer, new THREE.WebGLRenderTarget( rtwidth, rtheight, pars ) );
		composerBeckmann.addPass( effectBeckmann );
		composerBeckmann.addPass( effectCopy );

    var mapHeight = textureLoader.load( "dubheartach.html-assets/rock-NORMAL.jpg" );
		var mapHeight = textureLoader.load( "dubheartach.html-assets/paper.jpg" );

		mapHeight.anisotropy = 4;
		mapHeight.repeat.set(10,10)

		var mapSpecular = textureLoader.load( "dubheartach.html-assets/ground-SPEC.jpg" );
		mapSpecular.anisotropy = 4;
		mapSpecular.wrapS = mapSpecular.wrapT = THREE.RepeatWrapping;
		mapSpecular.format = THREE.RGBFormat;

    var mapColor = textureLoader.load("dubheartach.html-assets/lighthouse-terrain.jpg")
		mapColor.anisotropy = 4;
		mapColor.wrapS = mapColor.wrapT = THREE.RepeatWrapping;
		mapColor.format = THREE.RGBFormat;

		var shader = THREE.ShaderSkin[ "skinSimple" ];

		var fragmentShader = shader.fragmentShader;
		var vertexShader = shader.vertexShader;

		var uniforms = THREE.UniformsUtils.clone( shader.uniforms );

		uniforms[ "enableBump" ].value = true;
		uniforms[ "enableSpecular" ].value = true;

		uniforms[ "tBeckmann" ].value = composerBeckmann.renderTarget1.texture;
		uniforms[ "tDiffuse" ].value = mapColor;

		uniforms[ "bumpMap" ].value = mapHeight;
		uniforms[ "specularMap" ].value = mapSpecular;

		uniforms[ "diffuse" ].value.setHex( 0xffffff );
		uniforms[ "specular" ].value.setHex( 0x000000 );

		uniforms[ "uRoughness" ].value = 0.0;
		uniforms[ "uSpecularBrightness" ].value = 10;

		uniforms[ "bumpScale" ].value = 100;

		var groundMaterial = new THREE.ShaderMaterial({
			fragmentShader: fragmentShader,
			vertexShader: vertexShader,
			uniforms: uniforms,
			lights: true
		});
		groundMaterial.extensions.derivatives = true;

	// STONEBRICK texture

		mapColor = textureLoader.load("dubheartach.html-assets/lighthouse-stone.jpg")
		mapColor.anisotropy = 4;
		mapColor.wrapS = mapColor.wrapT = THREE.RepeatWrapping;
		mapColor.format = THREE.RGBFormat;

		var mapHeight = textureLoader.load( "dubheartach.html-assets/lighthouse-BUMP.jpg" );
		mapHeight.anisotropy = 4;
		mapHeight.wrapS = mapHeight.wrapT = THREE.RepeatWrapping;
		mapHeight.format = THREE.RGBFormat;

		//for stone- clone the uniforms into new object and edit relevant;
		var uniformsStone = THREE.UniformsUtils.clone( shader.uniforms );
		uniformsStone[ "enableBump" ].value = true;
		uniformsStone[ "bumpScale" ].value = 0.5;
		uniformsStone[ "tDiffuse" ].value = mapColor;
		uniformsStone[ "bumpMap" ].value = mapHeight;


		var stoneMaterial = new THREE.ShaderMaterial({
			fragmentShader: fragmentShader,
			vertexShader: vertexShader,
			uniforms: uniformsStone,
			lights: true
		});



	//--------------- OBJECTS ---------------------//

	/////////////// SUN

		var sphereGeo = new THREE.SphereBufferGeometry(100,16,8);
		var sun = new THREE.Mesh(sphereGeo,new THREE.MeshBasicMaterial({color:0xdddddd}))
		sun.position.set(5000,1600,-3500);
		scene.add(sun);


		/////////////// WATER

		var textureLoader = new THREE.TextureLoader();
		var waterNormals = textureLoader.load('//jbouny.github.io/ocean/assets/img/waternormals.jpg');
		waterNormals.wrapS = waterNormals.wrapT = THREE.RepeatWrapping;

		// Create the water effect
		water = new THREE.Water(renderer, camera, scene, {
			textureWidth: 256,
			textureHeight: 256,
			waterNormals: waterNormals,
			alpha: 	1.0,
			sunDirection: dLight.position.normalize(),
			sunColor: 0xffffee,
			waterColor: 0x001e0f,
			waterColor: 0x00265f,
			betaVersion: 0,
			side: THREE.DoubleSide
		});
		var meshMirror = new THREE.Mesh(
	new THREE.CircleBufferGeometry( 7900, 32 ),
			//new THREE.PlaneBufferGeometry(10010,10010,1,1),
			water.material
		);
		meshMirror.add(water);
		meshMirror.rotation.x = - Math.PI * 0.5;
		meshMirror.position.y = 25;
		scene.add(meshMirror);


		/////////////// GROUND

		function getTerrainPixelData(){
			var img = document.getElementById('heightmap');
			var canvas = document.createElement('canvas');
			canvas.id = 'heightmapCanvas';
			document.body.appendChild(canvas);

			canvas.width = img.width;
			canvas.height = img.height;
			canvas.getContext('2d').drawImage(img, 0, 0, img.width, img.height);

			var data = canvas.getContext('2d').getImageData(0,0, img.width,img.height).data;
			var normPixels = []
			//data.unshift(0);
			var dataArr = new Array(data)
			for (var i = 0, n = data.length; i < n; i += 4) {
		 // get the average value of R, G and B.

		 		normPixels.push((data[i] + data[i+1] + data[i+2])/3);
			}

			return normPixels;
		}

		function addGround() {
			var numSegments = 127;

			var geometry = new THREE.PlaneGeometry(1200, 1200, numSegments, numSegments+1);
			var terrain = getTerrainPixelData();

	   // if you have 100 segments, the image must have 101 pixels.
			for (var i = 0, l = geometry.vertices.length; i < l; i++) {
				var terrainValue = terrain[i] / 255;
				geometry.vertices[i].z = geometry.vertices[i].z + terrainValue * 	100 ;
			}

			geometry.computeFaceNormals();
			geometry.computeVertexNormals();

			var plane = new THREE.Mesh(geometry, groundMaterial);

			plane.position.set(-100,0,100);
			plane.rotation.set(-Math.PI/2,0,0)
			plane.castShadow = true;
			plane.receiveShadow = true;
			scene.add(plane)


	 	}

		addGround();
/////////////// SKYBOX

		function loadSkyBox() {
			var cubeMap = new THREE.CubeTextureLoader().load([
			  'dubheartach.html-assets/skybox/3.jpg',
			  'dubheartach.html-assets/skybox/1.jpg',
			  'dubheartach.html-assets/skybox/roof.jpg',
				'dubheartach.html-assets/skybox/roof.jpg',
			  'dubheartach.html-assets/skybox/2.jpg',
			  'dubheartach.html-assets/skybox/4.jpg'
			]);
			cubeMap.format = THREE.RGBFormat;

			var skyShader = THREE.ShaderLib['cube'];
			skyShader.uniforms['tCube'].value = cubeMap;

			var skyBoxMaterial = new THREE.ShaderMaterial({
			  fragmentShader: skyShader.fragmentShader,
			  vertexShader: skyShader.vertexShader,
			  uniforms: skyShader.uniforms,
			  depthWrite: false,
			  side: THREE.BackSide
			});

			var skybox = new THREE.Mesh(
			  new THREE.BoxGeometry(20000, 200000, 20000),
			  skyBoxMaterial
			);
			skybox.rotation.set(0, Math.PI/2,0);

			skybox.position.set(0,1900,0)

			scene.add(skybox);

			// skybox roof


			var planeGeo = new THREE.PlaneBufferGeometry( 10000, 10000, 1, 1 );

			var plane = new THREE.Mesh(planeGeo, new THREE.MeshBasicMaterial({color: 0x888888}));
			plane.material.side = THREE.DoubleSide;
			plane.rotation.set( -Math.PI/2, 0, 0 );
			plane.position.set( 0, 3000, 90 );
			plane.receiveShadow = true;
			//scene.add( plane );

		}

	loadSkyBox()



/////////////// LIGHTHOUSE

		var profileLampScreen = [517.0, 147.0, 517.0, 176.0]
		var profileLight = [516.0, 147.0, 516.0, 176.0]
		var profileCap = [499.1, 119.1, 504.0, 119.1, 504.0, 123.0, 502.0, 123.0, 502.0, 126.0, 506.0, 126.0, 506.0, 130.0, 510.0, 133.0, 514.0, 138.0, 516.0, 143.0, 516.5, 147.0]
		var profileStone2 = [ 525.5, 196.0, 531.6, 196.0, 531.6, 206.7, 528.0, 208.0, 525.5, 210.8, 523.8, 215.0, 523.5, 220.0, 528.0, 307.0, 537.0, 400.0, 544.0, 449.0, 551.9, 492.9]
		var profileStone1 =	[516.1, 176.0, 523.0, 176.0, 523.0, 181.0, 525.5, 181.0, 525.5, 196.0]
		var profileRailing =	[531, 186.0, 531.0, 196.0];

		var lighthouse = new THREE.Object3D();

		var test = []
		function createLathe(pointsArr, mat, side) {
			var points = []
			for ( var i = 0; i < pointsArr.length; i += 2 ) {
				//console.log(test.toString());

				points.push( new THREE.Vector2(pointsArr[i]-500, pointsArr[i+1]-374));

			}
		//	console.log(mat);
			var profileGeo = new THREE.LatheBufferGeometry(points,24);
			var lathe = new THREE.Mesh( profileGeo, mat );
			lathe.material.side = (side) ? THREE.DoubleSide : THREE.FrontSide;
			lathe.receiveShadow = true;
			lathe.castShadow = true;
			scene.add(lathe);
			lighthouse.add(lathe);

		}
		lighthouse.rotation.set(0,0,-Math.PI);
		lighthouse.position.set(0,219,0);

		scene.add(lighthouse)
		createLathe(profileLampScreen, lampScreenMaterial);

		createLathe(profileLight, new THREE.MeshBasicMaterial({color: 0xffffff}));
		createLathe(profileCap, mattBlackMaterial, false)
		createLathe(profileRailing, railingMaterial, true)
		createLathe(profileStone1, stoneMaterial, false);
		createLathe(profileStone2, stoneMaterial, false)

		var platform = new THREE.Object3D();

		var platformBaseGeo = new THREE.BoxBufferGeometry(15,0.5,28);
		var platformBase = new THREE.Mesh(platformBaseGeo,gridMaterial);				//platform.material.map.repeat.y =1
		platform.add(platformBase);

		var platformFrontGeo = new THREE.BoxBufferGeometry(10,0.5,28);
		var platformFront = new THREE.Mesh(platformFrontGeo,gridMaterial);
		platformFront.rotation.set(0,0,-Math.PI/2)
		platformFront.position.set(-7.5,5,0)				//platform.material.map.repeat.y =1			//platform.material.map.repeat.y =1
		platform.add(platformFront);

		var platformSide = new THREE.Mesh(platformFrontGeo,gridMaterial);
		platformSide.rotation.set(0,-Math.PI/2,-Math.PI/2)
		platformSide.position.set(6.5,5,14)				//platform.material.map.repeat.y =1			//platform.material.map.repeat.y =1
		platform.add(platformSide);

		var platformSide2 = platformSide.clone();
		platformSide.position.set(6.5,5,-14)				//platform.material.map.repeat.y =1			//platform.material.map.repeat.y =1

		platform.add(platformSide2);

		platform.rotation.set(0,Math.PI/2.9,0)
		platform.position.set(-21,192.5, 39);
		platform.castShadow = true;
		platform.receiveShadow = true;

		for (var i=0; i<platform.children.length; i++) {
			platform.children.castShadow = true;
			platform.children.receiveShadow = true;
		}
		console.log(platform)

		scene.add(platform);


		function createSeals() {
			var pointsArr = [51.39, 99.52,40.86, 58.97,36.50, 35.28,32.90, 24.83,27.40, 15.33,14.25, 4.69,0,1]
			var points = []
			for ( var i = 0; i < pointsArr.length; i += 2 ) {
				points.push( new THREE.Vector2(pointsArr[i], pointsArr[i+1]));
			}
		//	console.log(mat);
			seals = new THREE.Object3D()
			var profileGeo = new THREE.LatheBufferGeometry(points,24);

			for (var i; i <20; i++) {
				var seal = new THREE.Mesh( profileGeo, sealMaterial );
				seal.material.side = THREE.DoubleSide;//: THREE.FrontSide;
				seal.scale.multiplyScalar(0.1);
				seal.position.set(200+Math.random()*1000,30,200+Math.random()*1000)
				seal.rotation.z= Math.PI;
				seals.add(seal);
			}
			scene.add(seals)
		}
		createSeals();

		/////////////// HELI

		ObjMtlLoad('dubheartach.html-assets/helicopter.obj', 'dubheartach.html-assets/helicopter.mtl', 10, [-230,100,90], [-0, 0, 0], true, false)


	//--------------- CONTROLS ---------------------//

		controls = new THREE.OrbitControls( camera );

		controls.maxDistance = 5000.0;
		controls.minDistance = 1000.0;

		controls.maxPolarAngle = Math.PI/2.05;
		console.log(controls)

		//controls.noPan = true;
		//controls.noZoom = true;

	//--------------- EVENT LISTENERS --------------//

		window.addEventListener( 'resize', onWindowResize, false )
		controls.addEventListener( 'change', render );

		createBird()

		addSpline();
		followPath();

		animate();

	}

	//--------------- POSTPROCESSING --------------//


	//--------------- FNS -------------------------//

	function ObjMtlLoad(objFile, mtlFile, scale, position, rotation, castShadow, receiveShadow) {
		var object;
		var mtlLoader = new THREE.MTLLoader();
		mtlLoader.setBaseUrl( '/' );
		mtlLoader.setPath( '' );
		mtlLoader.load( mtlFile, function( materials ) {
			materials.preload();
			materials.side = THREE.DoubleSide;

			var objLoader = new THREE.OBJLoader();
			objLoader.setMaterials( materials );
			objLoader.setPath( '' );
			objLoader.load( objFile, function ( object ) {
				var number = 0;

				object.traverse( function ( child ) {
					if ( child instanceof THREE.Mesh ) {
						child.castShadow = true;
					}
				});
				object.rotation.set(rotation[0],rotation[1],rotation[2]);
				object.scale.set(scale, scale, scale);
				object.position.set(position[0],position[1],position[2]);

				scene.add( object );
			});
		});

	}


	function onWindowResize() {

		camera.aspect = window.innerWidth / window.innerHeight;
		camera.updateProjectionMatrix();

		renderer.setSize( window.innerWidth, window.innerHeight );

	}

	function onDocumentMouseMove(event) {

		mouseX = ( event.clientX - windowHalfX );
		mouseY = ( event.clientY - windowHalfY );

	}

	function addSpline() {

		THREE.Curves.HeartCurve = THREE.Curve.create(

			function( s ) {

				this.scale = ( s === undefined ) ? 3 : s;

			},

			function( t ) {

				t *= 2 * Math.PI;

				var tx = 16 * Math.pow( Math.sin( t ), 3 );
				var tz = (13 * Math.cos( t ) - 5 * Math.cos( 2 * t ) - 2 * Math.cos( 3 * t ) - Math.cos( 4 * t )),
				ty = 0.5;

				return new THREE.Vector3( tx, ty, tz ).multiplyScalar( this.scale );

			}

		);


		var segments = 100;
		var closed2 = true;

		var radiusSegments = 3;


		var extrudePath = new THREE.Curves.HeartCurve( 100 );

		console.log(extrudePath)
		tube = new THREE.TubeBufferGeometry( extrudePath, segments, 2, radiusSegments, closed2 );
		var tubeSolid = new THREE.Mesh(tube, material);

	}
	function createBird() {

		var wingGeo = new THREE.Geometry();
		var wingVertices = [
			new THREE.Vector3(0,0,0),
			new THREE.Vector3(0,0,1),
			new THREE.Vector3(3,0.5,0.2),
			new THREE.Vector3(3,0.5,.8),
			new THREE.Vector3(5,0.25,.3),
		]

		for (var i = 0; i < wingVertices.length; i++) {
			wingGeo.vertices.push(wingVertices[i]);
		}
		wingGeo.faces.push( new THREE.Face3( 0,1,2) );
		wingGeo.faces.push( new THREE.Face3( 1,2,3) );
		wingGeo.faces.push( new THREE.Face3( 2,3,4) );
		wingGeo.computeFaceNormals();

		lWing = new THREE.Mesh( wingGeo, new THREE.MeshPhongMaterial({color: 0xaaaaaa}) );
		lWing.material.side = THREE.DoubleSide;
		scene.add(lWing);
		rWing = new THREE.Mesh( wingGeo.clone(), new THREE.MeshPhongMaterial({color: 0xaaaaaa}) );
		rWing.scale.set(-1,1,1)
		rWing.rotation.z = 0.5;
		rWing.material.side = THREE.DoubleSide;
		scene.add(rWing);


		var bodyGeo = new THREE.Geometry();
		var bodyVertices = [
			new THREE.Vector3(0,0,1),
			new THREE.Vector3(0,-0.5,1.5),
			new THREE.Vector3(0,0,-1),
			new THREE.Vector3(0,0,-0.25),
			new THREE.Vector3(0.3,0,-1),
			new THREE.Vector3(-0.3,0,-1),
		]
		for (var i = 0; i < bodyVertices.length; i++) {
			bodyGeo.vertices.push(bodyVertices[i]);
		}
		bodyGeo.faces.push( new THREE.Face3( 3,4,5) );
		bodyGeo.faces.push( new THREE.Face3( 0,1,2) );

		bodyGeo.computeFaceNormals();

		body = new THREE.Mesh( bodyGeo, new THREE.MeshPhongMaterial({color: 0x666666}) );
		body.material.side = THREE.DoubleSide;
		scene.add(body);

		bird = new THREE.Object3D();
		bird.add(body)
		bird.add(lWing)
		bird.add(rWing)
		bird.scale.multiplyScalar(5)
		scene.add(bird);

	}

	function followPath() {

		splineCamera = new THREE.PerspectiveCamera( 84, window.innerWidth / window.innerHeight, 5, 10000 );
		console.log(splineCamera)
		splineCamera.rotation.set(0,0,0);
		cameraEye = new THREE.Mesh( new THREE.SphereGeometry( 5 ), new THREE.MeshBasicMaterial( { color: 0xdddddd } ) );

	}

	function animate() {

		requestAnimationFrame( animate );
		water.render();
		render();
	}

	function render() {
		// water
		var timer = Date.now() * 0.0005;
		water.material.uniforms.time.value += 1.0 / 60.0;

	 	//bird
		bird.children[1].rotation.z = 0.5 * Math.cos(timer*20);
		bird.children[2].rotation.z = -0.5 * Math.cos(timer*20);
		bird.position.y = 300  -0.15 * Math.cos(timer*15-Math.PI/2);
		bird.position.x = -400 * Math.cos(timer*0.5);
		bird.position.z = 600 * Math.sin(timer*0.5);
		bird.rotation.y = timer*0.5

		//seals
		seals.position.y = 0 +  0.75*Math.cos(timer*7.5);

		camera.lookAt( cameraTarget );


		if (document.getElementById('boatTrip').checked) {

			var looptime = 100;
			var t = ( timer % looptime ) / looptime;

			var pos = tube.parameters.path.getPointAt( t );
			pos.multiplyScalar( 1 );


			// // interpolation
			var segments = tube.tangents.length;
			var pickt = t * segments;
			var pick = Math.floor( pickt );
			var pickNext = ( pick + 1 ) % segments;

			binormal.subVectors( tube.binormals[ pickNext ], tube.binormals[ pick ] );
			binormal.multiplyScalar( pickt - pick ).add( tube.binormals[ pick ] );


			var dir = tube.parameters.path.getTangentAt( t );

			var offset = 1; //15

			pos.add( normal.clone().multiplyScalar( offset ) );

			splineCamera.position.copy( pos );

			cameraEye.position.copy( pos );

			splineCamera.lookAt(new THREE.Vector3(0,0,0))

			water.camera = splineCamera
			renderer.render( scene, splineCamera );

		} else {
      water.camera = camera

			if ( firstPass ) {

				composerBeckmann.render();
				firstPass = false;

			}
			renderer.render( scene, camera );

		}


	}
