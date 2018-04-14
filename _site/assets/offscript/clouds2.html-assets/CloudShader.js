
var flim_noise = new THREE.TextureLoader().load("clouds2.html-assets/seamless-perlin-noise-medium.jpg");

flim_noise.wrapS = THREE.RepeatWrapping;
flim_noise.wrapT = THREE.RepeatWrapping;

var alphaMap = new THREE.TextureLoader().load("clouds2.html-assets/ridge-alpha.png");
alphaMap.wrapS = THREE.RepeatWrapping;
alphaMap.wrapT = THREE.RepeatWrapping;

THREE.CloudLayerShader = {
	transparent: true,
	fog: true,
	uniforms: {
		"tDiffuse": { type: "t", value: null },
		"tNoise": { type: "t", value: flim_noise },
		"tAlpha": { type: "t", value: alphaMap },
		"uTime": { type: "f", value: 0.0 },
	},

	vertexShader: [

		"varying vec2 vUv;",
		//"varying vec3 vEye;",

		"void main() {",

			"vUv = uv;",
			"gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );",
			//"vEye = ( modelViewMatrix * vec4( position, 1.0 ) ).xyz;",

		"}"

	].join("\n"),

	fragmentShader: [

		"uniform sampler2D tDiffuse;",
		"uniform sampler2D tAlpha;",
		"uniform sampler2D tNoise;",
		"uniform float uTime;",

		"varying vec2 vUv;",
		//"varying vec3 vEye;",


		"void main() {",


			"float phase = 1. * abs( sin( uTime * .0001 ) );",
			"vec4 tex = texture2D( tNoise, vec2(vUv.x * 1. + (uTime * .000035), vUv.y *2. +.5));",
			"vec4 texAlpha = texture2D(tAlpha, vec2(vUv.x*1., vUv.y*1.) - 1.);",
			"vec4 finalAlpha = vec4(tex.r - 0.4) * texAlpha * 2.;",

			"gl_FragColor = vec4(vec3(tex.r * 1.0,tex.r * 1.0,tex.r * 1.03), finalAlpha*0.95);",


		"}"

	].join("\n")

};
