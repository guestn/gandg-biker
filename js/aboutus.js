
var Boid = function() {

	var vector = new THREE.Vector3(),
	_acceleration, _width = 500, _height = 500, _depth = 500, _goal, _neighborhoodRadius = 1000,
	_maxSpeed = 0.5, _maxSteerForce = 0.01, _avoidWalls = false;

	this.position = new THREE.Vector3();
	this.velocity = new THREE.Vector3();
	_acceleration = new THREE.Vector3();

	this.setGoal = function ( target ) {

		_goal = target;

	};

	this.setAvoidWalls = function ( value ) {

		_avoidWalls = value;

	};

	this.setWorldSize = function ( width, height, depth ) {

		_width = width;
		_height = height;
		_depth = depth;

	};

	this.run = function ( boids ) {

		if ( _avoidWalls ) {

			vector.set( - _width, this.position.y, this.position.z );
			vector = this.avoid( vector );
			vector.multiplyScalar( 5 );
			_acceleration.add( vector );

			vector.set( _width, this.position.y, this.position.z );
			vector = this.avoid( vector );
			vector.multiplyScalar( 5 );
			_acceleration.add( vector );

			vector.set( this.position.x, - _height, this.position.z );
			vector = this.avoid( vector );
			vector.multiplyScalar( 5 );
			_acceleration.add( vector );

			vector.set( this.position.x, _height, this.position.z );
			vector = this.avoid( vector );
			vector.multiplyScalar( 5 );
			_acceleration.add( vector );

			vector.set( this.position.x, this.position.y, - _depth );
			vector = this.avoid( vector );
			vector.multiplyScalar( 5 );
			_acceleration.add( vector );

			vector.set( this.position.x, this.position.y, _depth );
			vector = this.avoid( vector );
			vector.multiplyScalar( 5 );
			_acceleration.add( vector );

		}/* else {

			this.checkBounds();

		}
		*/

		if ( Math.random() > 0.95 ) {

			this.flock( boids );

		}

		this.move();

	};

	this.flock = function ( boids ) {

		if ( _goal ) {

			_acceleration.add( this.reach( _goal, 0.01 ) );

		}

		_acceleration.add( this.alignment( boids ) );
		_acceleration.add( this.cohesion( boids ) );
		_acceleration.add( this.separation( boids ) );

	};

	this.move = function () {

		this.velocity.add( _acceleration );

		var l = this.velocity.length();

		if ( l > _maxSpeed ) {

			this.velocity.divideScalar( l / _maxSpeed );

		}

		this.position.add( this.velocity );
		_acceleration.set( 0, 0, 0 );

	};

	this.checkBounds = function () {

		if ( this.position.x >   _width ) this.position.x = - _width;
		if ( this.position.x < - _width ) this.position.x =   _width;
		if ( this.position.y >   _height ) this.position.y = - _height;
		if ( this.position.y < - _height ) this.position.y =  _height;
		if ( this.position.z >  _depth ) this.position.z = - _depth;
		if ( this.position.z < - _depth ) this.position.z =  _depth;

	};

	//

	this.avoid = function ( target ) {

		var steer = new THREE.Vector3();

		steer.copy( this.position );
		steer.sub( target );

		steer.multiplyScalar( 1 / this.position.distanceToSquared( target ) );

		return steer;

	};

	this.repulse = function ( target ) {

		var distance = this.position.distanceTo( target );

		if ( distance < 150 ) {

			var steer = new THREE.Vector3();

			steer.subVectors( this.position, target );
			steer.multiplyScalar( 0.5 / distance );

			_acceleration.add( steer );

		}

	};

	this.reach = function ( target, amount ) {

		var steer = new THREE.Vector3();

		steer.subVectors( target, this.position );
		steer.multiplyScalar( amount );

		return steer;

	};

	this.alignment = function ( boids ) {

		var boid, velSum = new THREE.Vector3(),
		count = 0;

		for ( var i = 0, il = boids.length; i < il; i++ ) {

			if ( Math.random() > 0.6 ) continue;

			boid = boids[ i ];

			distance = boid.position.distanceTo( this.position );

			if ( distance > 0 && distance <= _neighborhoodRadius ) {

				velSum.add( boid.velocity );
				count++;

			}

		}

		if ( count > 0 ) {

			velSum.divideScalar( count );

			var l = velSum.length();

			if ( l > _maxSteerForce ) {

				velSum.divideScalar( l / _maxSteerForce );

			}

		}

		return velSum;

	};

	this.cohesion = function ( boids ) {

		var boid, distance,
		posSum = new THREE.Vector3(),
		steer = new THREE.Vector3(),
		count = 0;

		for ( var i = 0, il = boids.length; i < il; i ++ ) {

			if ( Math.random() > 0.6 ) continue;

			boid = boids[ i ];
			distance = boid.position.distanceTo( this.position );

			if ( distance > 0 && distance <= _neighborhoodRadius ) {

				posSum.add( boid.position );
				count++;

			}

		}

		if ( count > 0 ) {

			posSum.divideScalar( count );

		}

		steer.subVectors( posSum, this.position );

		var l = steer.length();

		if ( l > _maxSteerForce ) {

			steer.divideScalar( l / _maxSteerForce );

		}

		return steer;

	};

	this.separation = function ( boids ) {

		var boid, distance,
		posSum = new THREE.Vector3(),
		repulse = new THREE.Vector3();

		for ( var i = 0, il = boids.length; i < il; i ++ ) {

			if ( Math.random() > 0.6 ) continue;

			boid = boids[ i ];
			distance = boid.position.distanceTo( this.position );

			if ( distance > 0 && distance <= _neighborhoodRadius ) {

				repulse.subVectors( this.position, boid.position );
				repulse.normalize();
				repulse.divideScalar( distance );
				posSum.add( repulse );

			}

		}

		return posSum;

	}

}



var  createButterfly = function() {

var wingGeo = new THREE.Geometry();
var wingVertices = [
	new THREE.Vector3(0,2.6,0),
	new THREE.Vector3(2.3,0,0),
	new THREE.Vector3(5.2,0.8,0),
	new THREE.Vector3(7,5,0),
	new THREE.Vector3(5.6,5.3,0),
	new THREE.Vector3(8,10,0),
	new THREE.Vector3(4.8,9.9,0),
	new THREE.Vector3(0,5.8,0)
]


for (var i = 0; i < wingVertices.length; i++) {
	wingGeo.vertices.push(wingVertices[i]);
}
wingGeo.faces.push( new THREE.Face3( 0,1,2) );
wingGeo.faces.push( new THREE.Face3( 0,2,3) );
wingGeo.faces.push( new THREE.Face3( 0,3,4) );
wingGeo.faces.push( new THREE.Face3( 0,4,5) );
wingGeo.faces.push( new THREE.Face3( 0,5,6) );
wingGeo.faces.push( new THREE.Face3( 0,6,7) );

wingGeo.computeFaceNormals();
wingGeo.verticesNeedUpdate = true


return wingGeo

}


var SCREEN_WIDTH = window.innerWidth,
SCREEN_HEIGHT = window.innerHeight,
SCREEN_WIDTH_HALF = SCREEN_WIDTH  / 2,
SCREEN_HEIGHT_HALF = SCREEN_HEIGHT / 2;

var cameraB, sceneB, rendererB, containerB, butterflies, butterfly;

var boid, boids;

var stats, controls;
var params = {
  boidCount: 200,
  scale: 20,
  velocity: 0.0001
}
initButterflies();
animateButterflies();



function initButterflies() {
	containerB = document.getElementById('butterfly-container');

	cameraB = new THREE.PerspectiveCamera( 100, containerB.offsetWidth / containerB.offsetHeight, 1, 5000 );
	//cameraB.position.set(0,150,350);
					cameraB.position.set(0,100,200);



	sceneB = new THREE.Scene();

	butterflies = [];
	boids = [];

	var velocityScale = 0.01;

	for ( var i = 0; i < params.boidCount; i ++ ) {

		boid = boids[ i ] = new Boid();
		boid.position.x = Math.random() * params.scale - params.scale/2;
		boid.position.y = Math.random() * params.scale - params.scale/2;
		boid.position.z = Math.random() * params.scale - params.scale/2;
		boid.velocity.x = velocityScale * (Math.random() * params.velocity - params.velocity/2);
		boid.velocity.y = velocityScale * (Math.random() * params.velocity - params.velocity/2);
		boid.velocity.z = velocityScale * (Math.random() * params.velocity - params.velocity/2);
		boid.setAvoidWalls( true );
		boid.setWorldSize( 400, 400, 400 );
    boid.neighborhoodRadius = 5;


		var butterfly = butterflies[i] = new THREE.Object3D();

		var wing1 = new THREE.Mesh(createButterfly(), new THREE.MeshBasicMaterial(
			{ color: 0xff00ff, side: THREE.DoubleSide })
		);
		var wing2= new THREE.Mesh(createButterfly(), new THREE.MeshBasicMaterial(
			{ color: 0xff00ff, side: THREE.DoubleSide })
		);
		wing2.scale.x = -1;

		butterfly.add(wing1)
		butterfly.add(wing2)



		butterfly.phase = Math.floor( Math.random() * 62.83 );
		sceneB.add( butterfly );


	}

	
	var loader = new THREE.JSONLoader();
	loader.load('assets/objects/man2-lowpoly.json',function(geometry){
		var man = new THREE.Mesh(geometry, new THREE.MeshPhongMaterial({color: 0xffffff, emissive: 0x222222}))
		man.scale.setScalar(50);
		man.position.set(0,0,0)
		man.rotation.set(0, Math.PI,0)
		sceneB.add(man)
	})
	


	rendererB = new THREE.WebGLRenderer({alpha:true});
	rendererB.setClearColor( 0x111111,0 );
	rendererB.setPixelRatio( window.devicePixelRatio );
	rendererB.setSize( containerB.offsetWidth, containerB.offsetHeight );

	document.addEventListener( 'mousemove', onDocumentMouseMoveB, false );
	//document.body.appendChild( renderer.domElement );

	containerB.appendChild( rendererB.domElement );



	//

	var light = new THREE.DirectionalLight()
	light.position.set(1,1,5)
	sceneB.add(light)

	//

	window.addEventListener( 'resize', onWindowResizeB, false );

}

function onWindowResizeB() {

	cameraB.aspect = containerB.offsetWidth / containerB.offsetHeight;
	cameraB.updateProjectionMatrix();

	rendererB.setSize( containerB.offsetWidth, containerB.offsetHeight );

}

function onDocumentMouseMoveB( event ) {
	var vector = new THREE.Vector3( event.clientX - containerB.offsetWidth/2, - event.clientY + containerB.offsetHeight/2, 0 );

	for ( var i = 0, il = boids.length; i < il; i++ ) {
		boid = boids[ i ];
		vector.z = boid.position.z;
		boid.repulse( vector );
	}
}

//

function animateButterflies() {

	requestAnimationFrame( animateButterflies );

	renderButterflies();

}
var timer = 0;
function renderButterflies() {

	timer++;

	for ( var i = 0, il = butterflies.length; i < il; i++ ) {

		boid = boids[ i ];
		boid.run( boids );

		butterfly = butterflies[ i ];
		butterfly.position.copy( boids[ i ].position );

		color = butterfly.children[0].material.color;// = butterfly.children[1].material.color;
		//color.r = color.g = color.b = ( 500 - butterfly.position.z ) / 1000;
		color.r = ( 500 - butterfly.position.z ) / 1000;
		color.g = ( 500 - butterfly.position.y ) / 1000;
		color.b = ( 500 - butterfly.position.x ) / 1000;

		butterfly.children[1].material.color.r = color.r + 0.1;
		butterfly.children[1].material.color.g = color.g + 0.1;
		butterfly.children[1].material.color.b = color.b + 0.1;

		var random = Math.random()*0.01;
		random = 0;
		//console.log(timer)

		butterfly.children[0].rotation.y = 0.75 * Math.cos( timer * 0.2 + butterfly.phase);
		butterfly.children[1].rotation.y  =  -0.75 *Math.cos( timer * 0.2 + butterfly.phase);


		butterfly.rotation.z = 0.5 * Math.asin( boid.velocity.y / boid.velocity.length() );
 	}
 //	cameraB.lookAt(0,-150,50)
	rendererB.render( sceneB, cameraB );

}

