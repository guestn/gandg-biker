// threejs.org/license
(function(l,pa){"object"===typeof exports&&"undefined"!==typeof module?pa(exports):"function"===typeof define&&define.amd?define(["exports"],pa):pa(l.THREE=l.THREE||{})})(this,function(l){function pa(){}function D(a,b){this.x=a||0;this.y=b||0}function ea(a,b,c,d,e,f,g,h,m,k){Object.defineProperty(this,"id",{value:Ze++});this.uuid=N.generateUUID();this.name="";this.image=void 0!==a?a:ea.DEFAULT_IMAGE;this.mipmaps=[];this.mapping=void 0!==b?b:ea.DEFAULT_MAPPING;this.wrapS=void 0!==c?c:1001;this.wrapT=
void 0!==d?d:1001;this.magFilter=void 0!==e?e:1006;this.minFilter=void 0!==f?f:1008;this.anisotropy=void 0!==m?m:1;this.format=void 0!==g?g:1023;this.type=void 0!==h?h:1009;this.offset=new D(0,0);this.repeat=new D(1,1);this.generateMipmaps=!0;this.premultiplyAlpha=!1;this.flipY=!0;this.unpackAlignment=4;this.encoding=void 0!==k?k:3E3;this.version=0;this.onUpdate=null}function fa(a,b,c,d){this.x=a||0;this.y=b||0;this.z=c||0;this.w=void 0!==d?d:1}function Ya(a,b,c){this.uuid=N.generateUUID();this.width=
a;this.height=b;this.scissor=new fa(0,0,a,b);this.scissorTest=!1;this.viewport=new fa(0,0,a,b);c=c||{};void 0===c.minFilter&&(c.minFilter=1006);this.texture=new ea(void 0,void 0,c.wrapS,c.wrapT,c.magFilter,c.minFilter,c.format,c.type,c.anisotropy,c.encoding);this.depthBuffer=void 0!==c.depthBuffer?c.depthBuffer:!0;this.stencilBuffer=void 0!==c.stencilBuffer?c.stencilBuffer:!0;this.depthTexture=void 0!==c.depthTexture?c.depthTexture:null}function Gb(a,b,c){Ya.call(this,a,b,c);this.activeMipMapLevel=
this.activeCubeFace=0}function ca(a,b,c,d){this._x=a||0;this._y=b||0;this._z=c||0;this._w=void 0!==d?d:1}function q(a,b,c){this.x=a||0;this.y=b||0;this.z=c||0}function S(){this.elements=new Float32Array([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]);0<arguments.length&&void 0}function Za(a,b,c,d,e,f,g,h,m,k){a=void 0!==a?a:[];ea.call(this,a,void 0!==b?b:301,c,d,e,f,g,h,m,k);this.flipY=!1}function Hb(a,b,c){var d=a[0];if(0>=
d||0<d)return a;var e=b*c,f=Be[e];void 0===f&&(f=new Float32Array(e),Be[e]=f);if(0!==b)for(d.toArray(f,0),d=1,e=0;d!==b;++d)e+=c,a[d].toArray(f,e);return f}function Ce(a,b){var c=De[b];void 0===c&&(c=new Int32Array(b),De[b]=c);for(var d=0;d!==b;++d)c[d]=a.allocTextureUnit();return c}function $e(a,b){a.uniform1f(this.addr,b)}function af(a,b){a.uniform1i(this.addr,b)}function bf(a,b){void 0===b.x?a.uniform2fv(this.addr,b):a.uniform2f(this.addr,b.x,b.y)}function cf(a,b){void 0!==b.x?a.uniform3f(this.addr,
b.x,b.y,b.z):void 0!==b.r?a.uniform3f(this.addr,b.r,b.g,b.b):a.uniform3fv(this.addr,b)}function df(a,b){void 0===b.x?a.uniform4fv(this.addr,b):a.uniform4f(this.addr,b.x,b.y,b.z,b.w)}function ef(a,b){a.uniformMatrix2fv(this.addr,!1,b.elements||b)}function ff(a,b){a.uniformMatrix3fv(this.addr,!1,b.elements||b)}function gf(a,b){a.uniformMatrix4fv(this.addr,!1,b.elements||b)}function hf(a,b,c){var d=c.allocTextureUnit();a.uniform1i(this.addr,d);c.setTexture2D(b||Ee,d)}function jf(a,b,c){var d=c.allocTextureUnit();
a.uniform1i(this.addr,d);c.setTextureCube(b||Fe,d)}function Ge(a,b){a.uniform2iv(this.addr,b)}function He(a,b){a.uniform3iv(this.addr,b)}function Ie(a,b){a.uniform4iv(this.addr,b)}function kf(a){switch(a){case 5126:return $e;case 35664:return bf;case 35665:return cf;case 35666:return df;case 35674:return ef;case 35675:return ff;case 35676:return gf;case 35678:return hf;case 35680:return jf;case 5124:case 35670:return af;case 35667:case 35671:return Ge;case 35668:case 35672:return He;case 35669:case 35673:return Ie}}
function lf(a,b){a.uniform1fv(this.addr,b)}function mf(a,b){a.uniform1iv(this.addr,b)}function nf(a,b){a.uniform2fv(this.addr,Hb(b,this.size,2))}function of(a,b){a.uniform3fv(this.addr,Hb(b,this.size,3))}function pf(a,b){a.uniform4fv(this.addr,Hb(b,this.size,4))}function qf(a,b){a.uniformMatrix2fv(this.addr,!1,Hb(b,this.size,4))}function rf(a,b){a.uniformMatrix3fv(this.addr,!1,Hb(b,this.size,9))}function sf(a,b){a.uniformMatrix4fv(this.addr,!1,Hb(b,this.size,16))}function tf(a,b,c){var d=b.length,
e=Ce(c,d);a.uniform1iv(this.addr,e);for(a=0;a!==d;++a)c.setTexture2D(b[a]||Ee,e[a])}function uf(a,b,c){var d=b.length,e=Ce(c,d);a.uniform1iv(this.addr,e);for(a=0;a!==d;++a)c.setTextureCube(b[a]||Fe,e[a])}function vf(a){switch(a){case 5126:return lf;case 35664:return nf;case 35665:return of;case 35666:return pf;case 35674:return qf;case 35675:return rf;case 35676:return sf;case 35678:return tf;case 35680:return uf;case 5124:case 35670:return mf;case 35667:case 35671:return Ge;case 35668:case 35672:return He;
case 35669:case 35673:return Ie}}function wf(a,b,c){this.id=a;this.addr=c;this.setValue=kf(b.type)}function xf(a,b,c){this.id=a;this.addr=c;this.size=b.size;this.setValue=vf(b.type)}function Je(a){this.id=a;this.seq=[];this.map={}}function $a(a,b,c){this.seq=[];this.map={};this.renderer=c;c=a.getProgramParameter(b,a.ACTIVE_UNIFORMS);for(var d=0;d<c;++d){var e=a.getActiveUniform(b,d),f=a.getUniformLocation(b,e.name),g=this,h=e.name,m=h.length;for(Rd.lastIndex=0;;){var k=Rd.exec(h),t=Rd.lastIndex,p=
k[1],n=k[3];"]"===k[2]&&(p|=0);if(void 0===n||"["===n&&t+2===m){h=g;e=void 0===n?new wf(p,e,f):new xf(p,e,f);h.seq.push(e);h.map[e.id]=e;break}else n=g.map[p],void 0===n&&(n=new Je(p),p=g,g=n,p.seq.push(g),p.map[g.id]=g),g=n}}}function J(a,b,c){return void 0===b&&void 0===c?this.set(a):this.setRGB(a,b,c)}function eb(a,b,c,d,e,f,g,h,m,k,t,p){ea.call(this,null,f,g,h,m,k,d,e,t,p);this.image={data:a,width:b,height:c};this.magFilter=void 0!==m?m:1003;this.minFilter=void 0!==k?k:1003;this.flipY=this.generateMipmaps=
!1;this.unpackAlignment=1}function sc(a,b){this.min=void 0!==a?a:new D(Infinity,Infinity);this.max=void 0!==b?b:new D(-Infinity,-Infinity)}function yf(a,b){var c,d,e,f,g,h,m,k,t,p,n=a.context,u=a.state,l,r,A,w,y,K;this.render=function(v,E,L){if(0!==b.length){v=new q;var C=L.w/L.z,F=.5*L.z,da=.5*L.w,H=16/L.w,aa=new D(H*C,H),Da=new q(1,1,0),fb=new D(1,1),Sd=new sc;Sd.min.set(L.x,L.y);Sd.max.set(L.x+(L.z-16),L.y+(L.w-16));if(void 0===w){var H=new Float32Array([-1,-1,0,0,1,-1,1,0,1,1,1,1,-1,1,0,1]),Q=
new Uint16Array([0,1,2,0,2,3]);l=n.createBuffer();r=n.createBuffer();n.bindBuffer(n.ARRAY_BUFFER,l);n.bufferData(n.ARRAY_BUFFER,H,n.STATIC_DRAW);n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,r);n.bufferData(n.ELEMENT_ARRAY_BUFFER,Q,n.STATIC_DRAW);y=n.createTexture();K=n.createTexture();u.bindTexture(n.TEXTURE_2D,y);n.texImage2D(n.TEXTURE_2D,0,n.RGB,16,16,0,n.RGB,n.UNSIGNED_BYTE,null);n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE);n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE);
n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MAG_FILTER,n.NEAREST);n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.NEAREST);u.bindTexture(n.TEXTURE_2D,K);n.texImage2D(n.TEXTURE_2D,0,n.RGBA,16,16,0,n.RGBA,n.UNSIGNED_BYTE,null);n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE);n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE);n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MAG_FILTER,n.NEAREST);n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.NEAREST);var H=A={vertexShader:"uniform lowp int renderType;\nuniform vec3 screenPosition;\nuniform vec2 scale;\nuniform float rotation;\nuniform sampler2D occlusionMap;\nattribute vec2 position;\nattribute vec2 uv;\nvarying vec2 vUV;\nvarying float vVisibility;\nvoid main() {\nvUV = uv;\nvec2 pos = position;\nif ( renderType == 2 ) {\nvec4 visibility = texture2D( occlusionMap, vec2( 0.1, 0.1 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.5, 0.1 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.9, 0.1 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.9, 0.5 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.9, 0.9 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.5, 0.9 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.1, 0.9 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.1, 0.5 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.5, 0.5 ) );\nvVisibility =        visibility.r / 9.0;\nvVisibility *= 1.0 - visibility.g / 9.0;\nvVisibility *=       visibility.b / 9.0;\nvVisibility *= 1.0 - visibility.a / 9.0;\npos.x = cos( rotation ) * position.x - sin( rotation ) * position.y;\npos.y = sin( rotation ) * position.x + cos( rotation ) * position.y;\n}\ngl_Position = vec4( ( pos * scale + screenPosition.xy ).xy, screenPosition.z, 1.0 );\n}",
fragmentShader:"uniform lowp int renderType;\nuniform sampler2D map;\nuniform float opacity;\nuniform vec3 color;\nvarying vec2 vUV;\nvarying float vVisibility;\nvoid main() {\nif ( renderType == 0 ) {\ngl_FragColor = vec4( 1.0, 0.0, 1.0, 0.0 );\n} else if ( renderType == 1 ) {\ngl_FragColor = texture2D( map, vUV );\n} else {\nvec4 texture = texture2D( map, vUV );\ntexture.a *= opacity * vVisibility;\ngl_FragColor = texture;\ngl_FragColor.rgb *= color;\n}\n}"},Q=n.createProgram(),M=n.createShader(n.FRAGMENT_SHADER),
O=n.createShader(n.VERTEX_SHADER),P="precision "+a.getPrecision()+" float;\n";n.shaderSource(M,P+H.fragmentShader);n.shaderSource(O,P+H.vertexShader);n.compileShader(M);n.compileShader(O);n.attachShader(Q,M);n.attachShader(Q,O);n.linkProgram(Q);w=Q;t=n.getAttribLocation(w,"position");p=n.getAttribLocation(w,"uv");c=n.getUniformLocation(w,"renderType");d=n.getUniformLocation(w,"map");e=n.getUniformLocation(w,"occlusionMap");f=n.getUniformLocation(w,"opacity");g=n.getUniformLocation(w,"color");h=n.getUniformLocation(w,
"scale");m=n.getUniformLocation(w,"rotation");k=n.getUniformLocation(w,"screenPosition")}n.useProgram(w);u.initAttributes();u.enableAttribute(t);u.enableAttribute(p);u.disableUnusedAttributes();n.uniform1i(e,0);n.uniform1i(d,1);n.bindBuffer(n.ARRAY_BUFFER,l);n.vertexAttribPointer(t,2,n.FLOAT,!1,16,0);n.vertexAttribPointer(p,2,n.FLOAT,!1,16,8);n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,r);u.disable(n.CULL_FACE);u.setDepthWrite(!1);Q=0;for(M=b.length;Q<M;Q++)if(H=16/L.w,aa.set(H*C,H),O=b[Q],v.set(O.matrixWorld.elements[12],
O.matrixWorld.elements[13],O.matrixWorld.elements[14]),v.applyMatrix4(E.matrixWorldInverse),v.applyMatrix4(E.projectionMatrix),Da.copy(v),fb.x=L.x+Da.x*F+F-8,fb.y=L.y+Da.y*da+da-8,!0===Sd.containsPoint(fb)){u.activeTexture(n.TEXTURE0);u.bindTexture(n.TEXTURE_2D,null);u.activeTexture(n.TEXTURE1);u.bindTexture(n.TEXTURE_2D,y);n.copyTexImage2D(n.TEXTURE_2D,0,n.RGB,fb.x,fb.y,16,16,0);n.uniform1i(c,0);n.uniform2f(h,aa.x,aa.y);n.uniform3f(k,Da.x,Da.y,Da.z);u.disable(n.BLEND);u.enable(n.DEPTH_TEST);n.drawElements(n.TRIANGLES,
6,n.UNSIGNED_SHORT,0);u.activeTexture(n.TEXTURE0);u.bindTexture(n.TEXTURE_2D,K);n.copyTexImage2D(n.TEXTURE_2D,0,n.RGBA,fb.x,fb.y,16,16,0);n.uniform1i(c,1);u.disable(n.DEPTH_TEST);u.activeTexture(n.TEXTURE1);u.bindTexture(n.TEXTURE_2D,y);n.drawElements(n.TRIANGLES,6,n.UNSIGNED_SHORT,0);O.positionScreen.copy(Da);O.customUpdateCallback?O.customUpdateCallback(O):O.updateLensFlares();n.uniform1i(c,2);u.enable(n.BLEND);for(var P=0,wa=O.lensFlares.length;P<wa;P++){var W=O.lensFlares[P];.001<W.opacity&&.001<
W.scale&&(Da.x=W.x,Da.y=W.y,Da.z=W.z,H=W.size*W.scale/L.w,aa.x=H*C,aa.y=H,n.uniform3f(k,Da.x,Da.y,Da.z),n.uniform2f(h,aa.x,aa.y),n.uniform1f(m,W.rotation),n.uniform1f(f,W.opacity),n.uniform3f(g,W.color.r,W.color.g,W.color.b),u.setBlending(W.blending,W.blendEquation,W.blendSrc,W.blendDst),a.setTexture2D(W.texture,1),n.drawElements(n.TRIANGLES,6,n.UNSIGNED_SHORT,0))}}u.enable(n.CULL_FACE);u.enable(n.DEPTH_TEST);u.setDepthWrite(!0);a.resetGLState()}}}function zf(a,b){var c,d,e,f,g,h,m,k,t,p,n,u,l,r,
A,w,y;function K(a,b){return a.renderOrder!==b.renderOrder?a.renderOrder-b.renderOrder:a.z!==b.z?b.z-a.z:b.id-a.id}var v=a.context,E=a.state,L,C,F,da,H=new q,aa=new ca,Da=new q;this.render=function(q,D){if(0!==b.length){if(void 0===F){var Q=new Float32Array([-.5,-.5,0,0,.5,-.5,1,0,.5,.5,1,1,-.5,.5,0,1]),M=new Uint16Array([0,1,2,0,2,3]);L=v.createBuffer();C=v.createBuffer();v.bindBuffer(v.ARRAY_BUFFER,L);v.bufferData(v.ARRAY_BUFFER,Q,v.STATIC_DRAW);v.bindBuffer(v.ELEMENT_ARRAY_BUFFER,C);v.bufferData(v.ELEMENT_ARRAY_BUFFER,
M,v.STATIC_DRAW);var Q=v.createProgram(),M=v.createShader(v.VERTEX_SHADER),O=v.createShader(v.FRAGMENT_SHADER);v.shaderSource(M,["precision "+a.getPrecision()+" float;","uniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nuniform float rotation;\nuniform vec2 scale;\nuniform vec2 uvOffset;\nuniform vec2 uvScale;\nattribute vec2 position;\nattribute vec2 uv;\nvarying vec2 vUV;\nvoid main() {\nvUV = uvOffset + uv * uvScale;\nvec2 alignedPosition = position * scale;\nvec2 rotatedPosition;\nrotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;\nrotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;\nvec4 finalPosition;\nfinalPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );\nfinalPosition.xy += rotatedPosition;\nfinalPosition = projectionMatrix * finalPosition;\ngl_Position = finalPosition;\n}"].join("\n"));
v.shaderSource(O,["precision "+a.getPrecision()+" float;","uniform vec3 color;\nuniform sampler2D map;\nuniform float opacity;\nuniform int fogType;\nuniform vec3 fogColor;\nuniform float fogDensity;\nuniform float fogNear;\nuniform float fogFar;\nuniform float alphaTest;\nvarying vec2 vUV;\nvoid main() {\nvec4 texture = texture2D( map, vUV );\nif ( texture.a < alphaTest ) discard;\ngl_FragColor = vec4( color * texture.xyz, texture.a * opacity );\nif ( fogType > 0 ) {\nfloat depth = gl_FragCoord.z / gl_FragCoord.w;\nfloat fogFactor = 0.0;\nif ( fogType == 1 ) {\nfogFactor = smoothstep( fogNear, fogFar, depth );\n} else {\nconst float LOG2 = 1.442695;\nfogFactor = exp2( - fogDensity * fogDensity * depth * depth * LOG2 );\nfogFactor = 1.0 - clamp( fogFactor, 0.0, 1.0 );\n}\ngl_FragColor = mix( gl_FragColor, vec4( fogColor, gl_FragColor.w ), fogFactor );\n}\n}"].join("\n"));
v.compileShader(M);v.compileShader(O);v.attachShader(Q,M);v.attachShader(Q,O);v.linkProgram(Q);F=Q;w=v.getAttribLocation(F,"position");y=v.getAttribLocation(F,"uv");c=v.getUniformLocation(F,"uvOffset");d=v.getUniformLocation(F,"uvScale");e=v.getUniformLocation(F,"rotation");f=v.getUniformLocation(F,"scale");g=v.getUniformLocation(F,"color");h=v.getUniformLocation(F,"map");m=v.getUniformLocation(F,"opacity");k=v.getUniformLocation(F,"modelViewMatrix");t=v.getUniformLocation(F,"projectionMatrix");p=
v.getUniformLocation(F,"fogType");n=v.getUniformLocation(F,"fogDensity");u=v.getUniformLocation(F,"fogNear");l=v.getUniformLocation(F,"fogFar");r=v.getUniformLocation(F,"fogColor");A=v.getUniformLocation(F,"alphaTest");Q=document.createElementNS("http://www.w3.org/1999/xhtml","canvas");Q.width=8;Q.height=8;M=Q.getContext("2d");M.fillStyle="white";M.fillRect(0,0,8,8);da=new ea(Q);da.needsUpdate=!0}v.useProgram(F);E.initAttributes();E.enableAttribute(w);E.enableAttribute(y);E.disableUnusedAttributes();
E.disable(v.CULL_FACE);E.enable(v.BLEND);v.bindBuffer(v.ARRAY_BUFFER,L);v.vertexAttribPointer(w,2,v.FLOAT,!1,16,0);v.vertexAttribPointer(y,2,v.FLOAT,!1,16,8);v.bindBuffer(v.ELEMENT_ARRAY_BUFFER,C);v.uniformMatrix4fv(t,!1,D.projectionMatrix.elements);E.activeTexture(v.TEXTURE0);v.uniform1i(h,0);M=Q=0;(O=q.fog)?(v.uniform3f(r,O.color.r,O.color.g,O.color.b),O.isFog?(v.uniform1f(u,O.near),v.uniform1f(l,O.far),v.uniform1i(p,1),M=Q=1):O.isFogExp2&&(v.uniform1f(n,O.density),v.uniform1i(p,2),M=Q=2)):(v.uniform1i(p,
0),M=Q=0);for(var O=0,P=b.length;O<P;O++){var wa=b[O];wa.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,wa.matrixWorld);wa.z=-wa.modelViewMatrix.elements[14]}b.sort(K);for(var W=[],O=0,P=b.length;O<P;O++){var wa=b[O],x=wa.material;!1!==x.visible&&(v.uniform1f(A,x.alphaTest),v.uniformMatrix4fv(k,!1,wa.modelViewMatrix.elements),wa.matrixWorld.decompose(H,aa,Da),W[0]=Da.x,W[1]=Da.y,wa=0,q.fog&&x.fog&&(wa=M),Q!==wa&&(v.uniform1i(p,wa),Q=wa),null!==x.map?(v.uniform2f(c,x.map.offset.x,x.map.offset.y),
v.uniform2f(d,x.map.repeat.x,x.map.repeat.y)):(v.uniform2f(c,0,0),v.uniform2f(d,1,1)),v.uniform1f(m,x.opacity),v.uniform3f(g,x.color.r,x.color.g,x.color.b),v.uniform1f(e,x.rotation),v.uniform2fv(f,W),E.setBlending(x.blending,x.blendEquation,x.blendSrc,x.blendDst),E.setDepthTest(x.depthTest),E.setDepthWrite(x.depthWrite),x.map?a.setTexture2D(x.map,0):a.setTexture2D(da,0),v.drawElements(v.TRIANGLES,6,v.UNSIGNED_SHORT,0))}E.enable(v.CULL_FACE);a.resetGLState()}}}function X(){Object.defineProperty(this,
"id",{value:Af++});this.uuid=N.generateUUID();this.name="";this.type="Material";this.lights=this.fog=!0;this.blending=1;this.side=0;this.shading=2;this.vertexColors=0;this.opacity=1;this.transparent=!1;this.blendSrc=204;this.blendDst=205;this.blendEquation=100;this.blendEquationAlpha=this.blendDstAlpha=this.blendSrcAlpha=null;this.depthFunc=3;this.depthWrite=this.depthTest=!0;this.clippingPlanes=null;this.clipShadows=this.clipIntersection=!1;this.colorWrite=!0;this.precision=null;this.polygonOffset=
!1;this.alphaTest=this.polygonOffsetUnits=this.polygonOffsetFactor=0;this.premultipliedAlpha=!1;this.overdraw=0;this._needsUpdate=this.visible=!0}function Ha(a){X.call(this);this.type="ShaderMaterial";this.defines={};this.uniforms={};this.vertexShader="void main() {\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}";this.fragmentShader="void main() {\n\tgl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );\n}";this.linewidth=1;this.wireframe=!1;this.wireframeLinewidth=1;this.morphNormals=
this.morphTargets=this.skinning=this.clipping=this.lights=this.fog=!1;this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1};this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]};this.index0AttributeName=void 0;void 0!==a&&(void 0!==a.attributes&&void 0,this.setValues(a))}function ab(a){X.call(this);this.type="MeshDepthMaterial";this.depthPacking=3200;this.morphTargets=
this.skinning=!1;this.displacementMap=this.alphaMap=this.map=null;this.displacementScale=1;this.displacementBias=0;this.wireframe=!1;this.wireframeLinewidth=1;this.lights=this.fog=!1;this.setValues(a)}function Pa(a,b){this.min=void 0!==a?a:new q(Infinity,Infinity,Infinity);this.max=void 0!==b?b:new q(-Infinity,-Infinity,-Infinity)}function Na(a,b){this.center=void 0!==a?a:new q;this.radius=void 0!==b?b:0}function ya(){this.elements=new Float32Array([1,0,0,0,1,0,0,0,1]);0<arguments.length&&void 0}
function la(a,b){this.normal=void 0!==a?a:new q(1,0,0);this.constant=void 0!==b?b:0}function tc(a,b,c,d,e,f){this.planes=[void 0!==a?a:new la,void 0!==b?b:new la,void 0!==c?c:new la,void 0!==d?d:new la,void 0!==e?e:new la,void 0!==f?f:new la]}function Ke(a,b,c,d){function e(b,c,d,e){var f=b.geometry,g;g=A;var h=b.customDepthMaterial;d&&(g=w,h=b.customDistanceMaterial);h?g=h:(h=!1,c.morphTargets&&(f&&f.isBufferGeometry?h=f.morphAttributes&&f.morphAttributes.position&&0<f.morphAttributes.position.length:
f&&f.isGeometry&&(h=f.morphTargets&&0<f.morphTargets.length)),b=b.isSkinnedMesh&&c.skinning,f=0,h&&(f|=1),b&&(f|=2),g=g[f]);a.localClippingEnabled&&!0===c.clipShadows&&0!==c.clippingPlanes.length&&(f=g.uuid,h=c.uuid,b=y[f],void 0===b&&(b={},y[f]=b),f=b[h],void 0===f&&(f=g.clone(),b[h]=f),g=f);g.visible=c.visible;g.wireframe=c.wireframe;h=c.side;aa.renderSingleSided&&2==h&&(h=0);aa.renderReverseSided&&(0===h?h=1:1===h&&(h=0));g.side=h;g.clipShadows=c.clipShadows;g.clippingPlanes=c.clippingPlanes;g.wireframeLinewidth=
c.wireframeLinewidth;g.linewidth=c.linewidth;d&&void 0!==g.uniforms.lightPos&&g.uniforms.lightPos.value.copy(e);return g}function f(a,b,c){if(!1!==a.visible){0!==(a.layers.mask&b.layers.mask)&&(a.isMesh||a.isLine||a.isPoints)&&a.castShadow&&(!1===a.frustumCulled||!0===m.intersectsObject(a))&&!0===a.material.visible&&(a.modelViewMatrix.multiplyMatrices(c.matrixWorldInverse,a.matrixWorld),r.push(a));a=a.children;for(var d=0,e=a.length;d<e;d++)f(a[d],b,c)}}var g=a.context,h=a.state,m=new tc,k=new S,
t=b.shadows,p=new D,n=new D(d.maxTextureSize,d.maxTextureSize),u=new q,l=new q,r=[],A=Array(4),w=Array(4),y={},K=[new q(1,0,0),new q(-1,0,0),new q(0,0,1),new q(0,0,-1),new q(0,1,0),new q(0,-1,0)],v=[new q(0,1,0),new q(0,1,0),new q(0,1,0),new q(0,1,0),new q(0,0,1),new q(0,0,-1)],E=[new fa,new fa,new fa,new fa,new fa,new fa];b=new ab;b.depthPacking=3201;b.clipping=!0;d=bb.distanceRGBA;for(var L=Ja.clone(d.uniforms),C=0;4!==C;++C){var F=0!==(C&1),da=0!==(C&2),H=b.clone();H.morphTargets=F;H.skinning=
da;A[C]=H;F=new Ha({defines:{USE_SHADOWMAP:""},uniforms:L,vertexShader:d.vertexShader,fragmentShader:d.fragmentShader,morphTargets:F,skinning:da,clipping:!0});w[C]=F}var aa=this;this.enabled=!1;this.autoUpdate=!0;this.needsUpdate=!1;this.type=1;this.renderSingleSided=this.renderReverseSided=!0;this.render=function(b,d){if(!1!==aa.enabled&&(!1!==aa.autoUpdate||!1!==aa.needsUpdate)&&0!==t.length){h.buffers.color.setClear(1,1,1,1);h.disable(g.BLEND);h.setDepthTest(!0);h.setScissorTest(!1);for(var y,
q,A=0,C=t.length;A<C;A++){var w=t[A],L=w.shadow;if(void 0===L)void 0;else{var F=L.camera;p.copy(L.mapSize);p.min(n);if(w&&w.isPointLight){y=6;q=!0;var H=p.x,da=p.y;E[0].set(2*H,da,H,da);E[1].set(0,da,H,da);E[2].set(3*H,da,H,da);E[3].set(H,da,H,da);E[4].set(3*H,0,H,da);E[5].set(H,0,H,da);p.x*=4;p.y*=2}else y=1,q=!1;null===L.map&&(L.map=new Ya(p.x,p.y,{minFilter:1003,magFilter:1003,format:1023}),F.updateProjectionMatrix());L.isSpotLightShadow&&L.update(w);
L&&L.isRectAreaLightShadow&&L.update(w);H=L.map;L=L.matrix;l.setFromMatrixPosition(w.matrixWorld);F.position.copy(l);a.setRenderTarget(H);a.clear();for(H=0;H<y;H++){q?(u.copy(F.position),u.add(K[H]),F.up.copy(v[H]),F.lookAt(u),h.viewport(E[H])):(u.setFromMatrixPosition(w.target.matrixWorld),F.lookAt(u));F.updateMatrixWorld();F.matrixWorldInverse.getInverse(F.matrixWorld);L.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1);L.multiply(F.projectionMatrix);L.multiply(F.matrixWorldInverse);k.multiplyMatrices(F.projectionMatrix,
F.matrixWorldInverse);m.setFromMatrix(k);r.length=0;f(b,d,F);for(var da=0,x=r.length;da<x;da++){var D=r[da],Td=c.update(D),Sa=D.material;if(Sa&&Sa.isMultiMaterial)for(var Le=Td.groups,Sa=Sa.materials,z=0,Ea=Le.length;z<Ea;z++){var I=Le[z],J=Sa[I.materialIndex];!0===J.visible&&(J=e(D,J,q,l),a.renderBufferDirect(F,null,Td,J,D,I))}else J=e(D,Sa,q,l),a.renderBufferDirect(F,null,Td,J,D,null)}}}}y=a.getClearColor();q=a.getClearAlpha();a.setClearColor(y,q);aa.needsUpdate=!1}}}function cb(a,b){this.origin=
void 0!==a?a:new q;this.direction=void 0!==b?b:new q}function db(a,b,c,d){this._x=a||0;this._y=b||0;this._z=c||0;this._order=d||db.DefaultOrder}function nd(){this.mask=1}function x(){Object.defineProperty(this,"id",{value:Bf++});this.uuid=N.generateUUID();this.name="";this.type="Object3D";this.parent=null;this.children=[];this.up=x.DefaultUp.clone();var a=new q,b=new db,c=new ca,d=new q(1,1,1);b.onChange(function(){c.setFromEuler(b,!1)});c.onChange(function(){b.setFromQuaternion(c,void 0,!1)});Object.defineProperties(this,
{position:{enumerable:!0,value:a},rotation:{enumerable:!0,value:b},quaternion:{enumerable:!0,value:c},scale:{enumerable:!0,value:d},modelViewMatrix:{value:new S},normalMatrix:{value:new ya}});this.matrix=new S;this.matrixWorld=new S;this.matrixAutoUpdate=x.DefaultMatrixAutoUpdate;this.matrixWorldNeedsUpdate=!1;this.layers=new nd;this.visible=!0;this.receiveShadow=this.castShadow=!1;this.frustumCulled=!0;this.renderOrder=0;this.userData={};this.onBeforeRender=function(){};this.onAfterRender=function(){}}
function hb(a,b){this.start=void 0!==a?a:new q;this.end=void 0!==b?b:new q}function za(a,b,c){this.a=void 0!==a?a:new q;this.b=void 0!==b?b:new q;this.c=void 0!==c?c:new q}function ha(a,b,c,d,e,f){this.a=a;this.b=b;this.c=c;this.normal=d&&d.isVector3?d:new q;this.vertexNormals=Array.isArray(d)?d:[];this.color=e&&e.isColor?e:new J;this.vertexColors=Array.isArray(e)?e:[];this.materialIndex=void 0!==f?f:0}function Ka(a){X.call(this);this.type="MeshBasicMaterial";this.color=new J(16777215);this.lightMap=
this.map=null;this.lightMapIntensity=1;this.aoMap=null;this.aoMapIntensity=1;this.envMap=this.alphaMap=this.specularMap=null;this.combine=0;this.reflectivity=1;this.refractionRatio=.98;this.wireframe=!1;this.wireframeLinewidth=1;this.wireframeLinejoin=this.wireframeLinecap="round";this.lights=this.morphTargets=this.skinning=!1;this.setValues(a)}function U(a,b,c){if(Array.isArray(a))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.uuid=N.generateUUID();this.array=a;
this.itemSize=b;this.count=void 0!==a?a.length/b:0;this.normalized=!0===c;this.dynamic=!1;this.updateRange={offset:0,count:-1};this.onUploadCallback=function(){};this.version=0}function uc(a,b){U.call(this,new Int8Array(a),b)}function vc(a,b){U.call(this,new Uint8Array(a),b)}function wc(a,b){U.call(this,new Uint8ClampedArray(a),b)}function xc(a,b){U.call(this,new Int16Array(a),b)}function ib(a,b){U.call(this,new Uint16Array(a),b)}function yc(a,b){U.call(this,new Int32Array(a),b)}function jb(a,b){U.call(this,
new Uint32Array(a),b)}function z(a,b){U.call(this,new Float32Array(a),b)}function zc(a,b){U.call(this,new Float64Array(a),b)}function Me(){this.indices=[];this.vertices=[];this.normals=[];this.colors=[];this.uvs=[];this.uvs2=[];this.groups=[];this.morphTargets={};this.skinWeights=[];this.skinIndices=[];this.boundingSphere=this.boundingBox=null;this.groupsNeedUpdate=this.uvsNeedUpdate=this.colorsNeedUpdate=this.normalsNeedUpdate=this.verticesNeedUpdate=!1}function Ud(a){for(var b=a.length,c=-Infinity;b--;)a[b]>
c&&(c=a[b]);return c}function T(){Object.defineProperty(this,"id",{value:Vd++});this.uuid=N.generateUUID();this.name="";this.type="Geometry";this.vertices=[];this.colors=[];this.faces=[];this.faceVertexUvs=[[]];this.morphTargets=[];this.morphNormals=[];this.skinWeights=[];this.skinIndices=[];this.lineDistances=[];this.boundingSphere=this.boundingBox=null;this.groupsNeedUpdate=this.lineDistancesNeedUpdate=this.colorsNeedUpdate=this.normalsNeedUpdate=this.uvsNeedUpdate=this.verticesNeedUpdate=this.elementsNeedUpdate=
!1}function I(){Object.defineProperty(this,"id",{value:Vd++});this.uuid=N.generateUUID();this.name="";this.type="BufferGeometry";this.index=null;this.attributes={};this.morphAttributes={};this.groups=[];this.boundingSphere=this.boundingBox=null;this.drawRange={start:0,count:Infinity}}function Aa(a,b){x.call(this);this.type="Mesh";this.geometry=void 0!==a?a:new I;this.material=void 0!==b?b:new Ka({color:16777215*Math.random()});this.drawMode=0;this.updateMorphTargets()}function Ib(a,b,c,d,e,f){T.call(this);
this.type="BoxGeometry";this.parameters={width:a,height:b,depth:c,widthSegments:d,heightSegments:e,depthSegments:f};this.fromBufferGeometry(new kb(a,b,c,d,e,f));this.mergeVertices()}function kb(a,b,c,d,e,f){function g(a,b,c,d,e,f,g,l,L,C,F){var da=f/L,H=g/C,aa=f/2,x=g/2,D=l/2;g=L+1;var z=C+1,Q=f=0,M,O,P=new q;for(O=0;O<z;O++){var J=O*H-x;for(M=0;M<g;M++)P[a]=(M*da-aa)*d,P[b]=J*e,P[c]=D,k.push(P.x,P.y,P.z),P[a]=0,P[b]=0,P[c]=0<l?1:-1,t.push(P.x,P.y,P.z),p.push(M/L),p.push(1-O/C),f+=1}for(O=0;O<C;O++)for(M=
0;M<L;M++)a=n+M+g*(O+1),b=n+(M+1)+g*(O+1),c=n+(M+1)+g*O,m.push(n+M+g*O,a,c),m.push(a,b,c),Q+=6;h.addGroup(u,Q,F);u+=Q;n+=f}I.call(this);this.type="BoxBufferGeometry";this.parameters={width:a,height:b,depth:c,widthSegments:d,heightSegments:e,depthSegments:f};var h=this;d=Math.floor(d)||1;e=Math.floor(e)||1;f=Math.floor(f)||1;var m=[],k=[],t=[],p=[],n=0,u=0;g("z","y","x",-1,-1,c,b,a,f,e,0);g("z","y","x",1,-1,c,b,-a,f,e,1);g("x","z","y",1,1,a,c,b,d,f,2);g("x","z","y",1,-1,a,c,-b,d,f,3);g("x","y","z",
1,-1,a,b,c,d,e,4);g("x","y","z",-1,-1,a,b,-c,d,e,5);this.setIndex(m);this.addAttribute("position",new z(k,3));this.addAttribute("normal",new z(t,3));this.addAttribute("uv",new z(p,2))}function Ac(a,b,c,d){T.call(this);this.type="PlaneGeometry";this.parameters={width:a,height:b,widthSegments:c,heightSegments:d};this.fromBufferGeometry(new lb(a,b,c,d))}function lb(a,b,c,d){I.call(this);this.type="PlaneBufferGeometry";this.parameters={width:a,height:b,widthSegments:c,heightSegments:d};var e=a/2,f=b/
2;c=Math.floor(c)||1;d=Math.floor(d)||1;var g=c+1,h=d+1,m=a/c,k=b/d,t=[],p=[],n=[],u=[];for(a=0;a<h;a++){var l=a*k-f;for(b=0;b<g;b++)p.push(b*m-e,-l,0),n.push(0,0,1),u.push(b/c),u.push(1-a/d)}for(a=0;a<d;a++)for(b=0;b<c;b++)e=b+g*(a+1),f=b+1+g*(a+1),h=b+1+g*a,t.push(b+g*a,e,h),t.push(e,f,h);this.setIndex(t);this.addAttribute("position",new z(p,3));this.addAttribute("normal",new z(n,3));this.addAttribute("uv",new z(u,2))}function ra(){x.call(this);this.type="Camera";this.matrixWorldInverse=new S;this.projectionMatrix=
new S}function Fa(a,b,c,d){ra.call(this);this.type="PerspectiveCamera";this.fov=void 0!==a?a:50;this.zoom=1;this.near=void 0!==c?c:.1;this.far=void 0!==d?d:2E3;this.focus=10;this.aspect=void 0!==b?b:1;this.view=null;this.filmGauge=35;this.filmOffset=0;this.updateProjectionMatrix()}function Jb(a,b,c,d,e,f){ra.call(this);this.type="OrthographicCamera";this.zoom=1;this.view=null;this.left=a;this.right=b;this.top=c;this.bottom=d;this.near=void 0!==e?e:.1;this.far=void 0!==f?f:2E3;this.updateProjectionMatrix()}
function Cf(a,b,c){var d,e,f;return{setMode:function(a){d=a},setIndex:function(c){c.array instanceof Uint32Array&&b.get("OES_element_index_uint")?(e=a.UNSIGNED_INT,f=4):c.array instanceof Uint16Array?(e=a.UNSIGNED_SHORT,f=2):(e=a.UNSIGNED_BYTE,f=1)},render:function(b,h){a.drawElements(d,h,e,b*f);c.calls++;c.vertices+=h;d===a.TRIANGLES&&(c.faces+=h/3)},renderInstances:function(g,h,m){var k=b.get("ANGLE_instanced_arrays");null===k?void 0:
(k.drawElementsInstancedANGLE(d,m,e,h*f,g.maxInstancedCount),c.calls++,c.vertices+=m*g.maxInstancedCount,d===a.TRIANGLES&&(c.faces+=g.maxInstancedCount*m/3))}}}function Df(a,b,c){var d;return{setMode:function(a){d=a},render:function(b,f){a.drawArrays(d,b,f);c.calls++;c.vertices+=f;d===a.TRIANGLES&&(c.faces+=f/3)},renderInstances:function(e){var f=b.get("ANGLE_instanced_arrays");if(null===f)void 0;
else{var g=e.attributes.position,g=g.isInterleavedBufferAttribute?g.data.count:g.count;f.drawArraysInstancedANGLE(d,0,g,e.maxInstancedCount);c.calls++;c.vertices+=g*e.maxInstancedCount;d===a.TRIANGLES&&(c.faces+=e.maxInstancedCount*g/3)}}}}function Ef(){var a={};return{get:function(b){if(void 0!==a[b.id])return a[b.id];var c;switch(b.type){case "DirectionalLight":c={direction:new q,color:new J,shadow:!1,shadowBias:0,shadowRadius:1,shadowMapSize:new D};break;case "SpotLight":c={position:new q,direction:new q,
color:new J,distance:0,coneCos:0,penumbraCos:0,decay:0,shadow:!1,shadowBias:0,shadowRadius:1,shadowMapSize:new D};break;case "PointLight":c={position:new q,color:new J,distance:0,decay:0,shadow:!1,shadowBias:0,shadowRadius:1,shadowMapSize:new D};break;case "HemisphereLight":c={direction:new q,skyColor:new J,groundColor:new J};break;case "RectAreaLight":c={color:new J,position:new q,halfWidth:new q,halfHeight:new q}}return a[b.id]=c}}}function Ff(a){a=a.split("\n");for(var b=0;b<a.length;b++)a[b]=
b+1+": "+a[b];return a.join("\n")}function Ne(a,b,c){var d=a.createShader(b);a.shaderSource(d,c);a.compileShader(d);!1===a.getShaderParameter(d,a.COMPILE_STATUS)&&void 0;""!==a.getShaderInfoLog(d)&&void 0;return d}function Oe(a){switch(a){case 3E3:return["Linear","( value )"];case 3001:return["sRGB","( value )"];case 3002:return["RGBE",
"( value )"];case 3004:return["RGBM","( value, 7.0 )"];case 3005:return["RGBM","( value, 16.0 )"];case 3006:return["RGBD","( value, 256.0 )"];case 3007:return["Gamma","( value, float( GAMMA_FACTOR ) )"];default:throw Error("unsupported encoding: "+a);}}function Wd(a,b){var c=Oe(b);return"vec4 "+a+"( vec4 value ) { return "+c[0]+"ToLinear"+c[1]+"; }"}function Gf(a,b){var c=Oe(b);return"vec4 "+a+"( vec4 value ) { return LinearTo"+c[0]+c[1]+"; }"}function Hf(a,b){var c;switch(b){case 1:c="Linear";break;
case 2:c="Reinhard";break;case 3:c="Uncharted2";break;case 4:c="OptimizedCineon";break;default:throw Error("unsupported toneMapping: "+b);}return"vec3 "+a+"( vec3 color ) { return "+c+"ToneMapping( color ); }"}function If(a,b,c){a=a||{};return[a.derivatives||b.envMapCubeUV||b.bumpMap||b.normalMap||b.flatShading?"#extension GL_OES_standard_derivatives : enable":"",(a.fragDepth||b.logarithmicDepthBuffer)&&c.get("EXT_frag_depth")?"#extension GL_EXT_frag_depth : enable":"",a.drawBuffers&&c.get("WEBGL_draw_buffers")?
"#extension GL_EXT_draw_buffers : require":"",(a.shaderTextureLOD||b.envMap)&&c.get("EXT_shader_texture_lod")?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Bc).join("\n")}function Jf(a){var b=[],c;for(c in a){var d=a[c];!1!==d&&b.push("#define "+c+" "+d)}return b.join("\n")}function Bc(a){return""!==a}function Pe(a,b){return a.replace(/NUM_DIR_LIGHTS/g,b.numDirLights).replace(/NUM_SPOT_LIGHTS/g,b.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,b.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,
b.numPointLights).replace(/NUM_HEMI_LIGHTS/g,b.numHemiLights)}function Xd(a){return a.replace(/#include +<([\w\d.]+)>/g,function(a,c){var d=Z[c];if(void 0===d)throw Error("Can not resolve #include <"+c+">");return Xd(d)})}function Qe(a){return a.replace(/for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,function(a,c,d,e){a="";for(c=parseInt(c);c<parseInt(d);c++)a+=e.replace(/\[ i \]/g,"[ "+c+" ]");return a})}function Kf(a,b,c,d){var e=a.context,f=c.extensions,g=c.defines,h=c.__webglShader.vertexShader,
m=c.__webglShader.fragmentShader,k="SHADOWMAP_TYPE_BASIC";1===d.shadowMapType?k="SHADOWMAP_TYPE_PCF":2===d.shadowMapType&&(k="SHADOWMAP_TYPE_PCF_SOFT");var t="ENVMAP_TYPE_CUBE",p="ENVMAP_MODE_REFLECTION",n="ENVMAP_BLENDING_MULTIPLY";if(d.envMap){switch(c.envMap.mapping){case 301:case 302:t="ENVMAP_TYPE_CUBE";break;case 306:case 307:t="ENVMAP_TYPE_CUBE_UV";break;case 303:case 304:t="ENVMAP_TYPE_EQUIREC";break;case 305:t="ENVMAP_TYPE_SPHERE"}switch(c.envMap.mapping){case 302:case 304:p="ENVMAP_MODE_REFRACTION"}switch(c.combine){case 0:n=
"ENVMAP_BLENDING_MULTIPLY";break;case 1:n="ENVMAP_BLENDING_MIX";break;case 2:n="ENVMAP_BLENDING_ADD"}}var u=0<a.gammaFactor?a.gammaFactor:1,f=If(f,d,a.extensions),l=Jf(g),r=e.createProgram();c.isRawShaderMaterial?(g=[l,"\n"].filter(Bc).join("\n"),k=[f,l,"\n"].filter(Bc).join("\n")):(g=["precision "+d.precision+" float;","precision "+d.precision+" int;","#define SHADER_NAME "+c.__webglShader.name,l,d.supportsVertexTextures?"#define VERTEX_TEXTURES":"","#define GAMMA_FACTOR "+u,"#define MAX_BONES "+
d.maxBones,d.useFog&&d.fog?"#define USE_FOG":"",d.useFog&&d.fogExp?"#define FOG_EXP2":"",d.map?"#define USE_MAP":"",d.envMap?"#define USE_ENVMAP":"",d.envMap?"#define "+p:"",d.lightMap?"#define USE_LIGHTMAP":"",d.aoMap?"#define USE_AOMAP":"",d.emissiveMap?"#define USE_EMISSIVEMAP":"",d.bumpMap?"#define USE_BUMPMAP":"",d.normalMap?"#define USE_NORMALMAP":"",d.displacementMap&&d.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",d.specularMap?"#define USE_SPECULARMAP":"",d.roughnessMap?"#define USE_ROUGHNESSMAP":
"",d.metalnessMap?"#define USE_METALNESSMAP":"",d.alphaMap?"#define USE_ALPHAMAP":"",d.vertexColors?"#define USE_COLOR":"",d.flatShading?"#define FLAT_SHADED":"",d.skinning?"#define USE_SKINNING":"",d.useVertexTexture?"#define BONE_TEXTURE":"",d.morphTargets?"#define USE_MORPHTARGETS":"",d.morphNormals&&!1===d.flatShading?"#define USE_MORPHNORMALS":"",d.doubleSided?"#define DOUBLE_SIDED":"",d.flipSided?"#define FLIP_SIDED":"","#define NUM_CLIPPING_PLANES "+d.numClippingPlanes,d.shadowMapEnabled?"#define USE_SHADOWMAP":
"",d.shadowMapEnabled?"#define "+k:"",d.sizeAttenuation?"#define USE_SIZEATTENUATION":"",d.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",d.logarithmicDepthBuffer&&a.extensions.get("EXT_frag_depth")?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_COLOR",
"\tattribute vec3 color;","#endif","#ifdef USE_MORPHTARGETS","\tattribute vec3 morphTarget0;","\tattribute vec3 morphTarget1;","\tattribute vec3 morphTarget2;","\tattribute vec3 morphTarget3;","\t#ifdef USE_MORPHNORMALS","\t\tattribute vec3 morphNormal0;","\t\tattribute vec3 morphNormal1;","\t\tattribute vec3 morphNormal2;","\t\tattribute vec3 morphNormal3;","\t#else","\t\tattribute vec3 morphTarget4;","\t\tattribute vec3 morphTarget5;","\t\tattribute vec3 morphTarget6;","\t\tattribute vec3 morphTarget7;",
"\t#endif","#endif","#ifdef USE_SKINNING","\tattribute vec4 skinIndex;","\tattribute vec4 skinWeight;","#endif","\n"].filter(Bc).join("\n"),k=[f,"precision "+d.precision+" float;","precision "+d.precision+" int;","#define SHADER_NAME "+c.__webglShader.name,l,d.alphaTest?"#define ALPHATEST "+d.alphaTest:"","#define GAMMA_FACTOR "+u,d.useFog&&d.fog?"#define USE_FOG":"",d.useFog&&d.fogExp?"#define FOG_EXP2":"",d.map?"#define USE_MAP":"",d.envMap?"#define USE_ENVMAP":"",d.envMap?"#define "+t:"",d.envMap?
"#define "+p:"",d.envMap?"#define "+n:"",d.lightMap?"#define USE_LIGHTMAP":"",d.aoMap?"#define USE_AOMAP":"",d.emissiveMap?"#define USE_EMISSIVEMAP":"",d.bumpMap?"#define USE_BUMPMAP":"",d.normalMap?"#define USE_NORMALMAP":"",d.specularMap?"#define USE_SPECULARMAP":"",d.roughnessMap?"#define USE_ROUGHNESSMAP":"",d.metalnessMap?"#define USE_METALNESSMAP":"",d.alphaMap?"#define USE_ALPHAMAP":"",d.vertexColors?"#define USE_COLOR":"",d.gradientMap?"#define USE_GRADIENTMAP":"",d.flatShading?"#define FLAT_SHADED":
"",d.doubleSided?"#define DOUBLE_SIDED":"",d.flipSided?"#define FLIP_SIDED":"","#define NUM_CLIPPING_PLANES "+d.numClippingPlanes,"#define UNION_CLIPPING_PLANES "+(d.numClippingPlanes-d.numClipIntersection),d.shadowMapEnabled?"#define USE_SHADOWMAP":"",d.shadowMapEnabled?"#define "+k:"",d.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",d.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",d.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",d.logarithmicDepthBuffer&&a.extensions.get("EXT_frag_depth")?
"#define USE_LOGDEPTHBUF_EXT":"",d.envMap&&a.extensions.get("EXT_shader_texture_lod")?"#define TEXTURE_LOD_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;",0!==d.toneMapping?"#define TONE_MAPPING":"",0!==d.toneMapping?Z.tonemapping_pars_fragment:"",0!==d.toneMapping?Hf("toneMapping",d.toneMapping):"",d.outputEncoding||d.mapEncoding||d.envMapEncoding||d.emissiveMapEncoding?Z.encodings_pars_fragment:"",d.mapEncoding?Wd("mapTexelToLinear",d.mapEncoding):"",d.envMapEncoding?Wd("envMapTexelToLinear",
d.envMapEncoding):"",d.emissiveMapEncoding?Wd("emissiveMapTexelToLinear",d.emissiveMapEncoding):"",d.outputEncoding?Gf("linearToOutputTexel",d.outputEncoding):"",d.depthPacking?"#define DEPTH_PACKING "+c.depthPacking:"","\n"].filter(Bc).join("\n"));h=Xd(h,d);h=Pe(h,d);m=Xd(m,d);m=Pe(m,d);c.isShaderMaterial||(h=Qe(h),m=Qe(m));m=k+m;h=Ne(e,e.VERTEX_SHADER,g+h);m=Ne(e,e.FRAGMENT_SHADER,m);e.attachShader(r,h);e.attachShader(r,m);void 0!==c.index0AttributeName?e.bindAttribLocation(r,0,c.index0AttributeName):
!0===d.morphTargets&&e.bindAttribLocation(r,0,"position");e.linkProgram(r);d=e.getProgramInfoLog(r);t=e.getShaderInfoLog(h);p=e.getShaderInfoLog(m);u=n=!0;if(!1===e.getProgramParameter(r,e.LINK_STATUS))n=!1,void 0;else if(""!==d)void 0;else if(""===t||""===p)u=!1;u&&(this.diagnostics={runnable:n,
material:c,programLog:d,vertexShader:{log:t,prefix:g},fragmentShader:{log:p,prefix:k}});e.deleteShader(h);e.deleteShader(m);var q;this.getUniforms=function(){void 0===q&&(q=new $a(e,r,a));return q};var w;this.getAttributes=function(){if(void 0===w){for(var a={},b=e.getProgramParameter(r,e.ACTIVE_ATTRIBUTES),c=0;c<b;c++){var d=e.getActiveAttrib(r,c).name;a[d]=e.getAttribLocation(r,d)}w=a}return w};this.destroy=function(){e.deleteProgram(r);this.program=void 0};Object.defineProperties(this,{uniforms:{get:function(){void 0;
return this.getUniforms()}},attributes:{get:function(){void 0;return this.getAttributes()}}});this.id=Lf++;this.code=b;this.usedTimes=1;this.program=r;this.vertexShader=h;this.fragmentShader=m;return this}function Mf(a,b){function c(a,b){var c;a?a.isTexture?c=a.encoding:a.isWebGLRenderTarget&&(void 0,c=
a.texture.encoding):c=3E3;3E3===c&&b&&(c=3007);return c}var d=[],e={MeshDepthMaterial:"depth",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"phong",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points"},f="precision supportsVertexTextures map mapEncoding envMap envMapMode envMapEncoding lightMap aoMap emissiveMap emissiveMapEncoding bumpMap normalMap displacementMap specularMap roughnessMap metalnessMap gradientMap alphaMap combine vertexColors fog useFog fogExp flatShading sizeAttenuation logarithmicDepthBuffer skinning maxBones useVertexTexture morphTargets morphNormals maxMorphTargets maxMorphNormals premultipliedAlpha numDirLights numPointLights numSpotLights numHemiLights numRectAreaLights shadowMapEnabled shadowMapType toneMapping physicallyCorrectLights alphaTest doubleSided flipSided numClippingPlanes numClipIntersection depthPacking".split(" ");
this.getParameters=function(d,f,m,k,t,p){var n=e[d.type],u;b.floatVertexTextures&&p&&p.skeleton&&p.skeleton.useVertexTexture?u=1024:(u=Math.floor((b.maxVertexUniforms-20)/4),void 0!==p&&p&&p.isSkinnedMesh&&(u=Math.min(p.skeleton.bones.length,u),u<p.skeleton.bones.length&&void 0));var l=a.getPrecision();null!==d.precision&&(l=b.getMaxPrecision(d.precision),l!==d.precision&&
void 0);var r=a.getCurrentRenderTarget();return{shaderID:n,precision:l,supportsVertexTextures:b.vertexTextures,outputEncoding:c(r?r.texture:null,a.gammaOutput),map:!!d.map,mapEncoding:c(d.map,a.gammaInput),envMap:!!d.envMap,envMapMode:d.envMap&&d.envMap.mapping,envMapEncoding:c(d.envMap,a.gammaInput),envMapCubeUV:!!d.envMap&&(306===d.envMap.mapping||307===d.envMap.mapping),lightMap:!!d.lightMap,aoMap:!!d.aoMap,
emissiveMap:!!d.emissiveMap,emissiveMapEncoding:c(d.emissiveMap,a.gammaInput),bumpMap:!!d.bumpMap,normalMap:!!d.normalMap,displacementMap:!!d.displacementMap,roughnessMap:!!d.roughnessMap,metalnessMap:!!d.metalnessMap,specularMap:!!d.specularMap,alphaMap:!!d.alphaMap,gradientMap:!!d.gradientMap,combine:d.combine,vertexColors:d.vertexColors,fog:!!m,useFog:d.fog,fogExp:m&&m.isFogExp2,flatShading:1===d.shading,sizeAttenuation:d.sizeAttenuation,logarithmicDepthBuffer:b.logarithmicDepthBuffer,skinning:d.skinning,
maxBones:u,useVertexTexture:b.floatVertexTextures&&p&&p.skeleton&&p.skeleton.useVertexTexture,morphTargets:d.morphTargets,morphNormals:d.morphNormals,maxMorphTargets:a.maxMorphTargets,maxMorphNormals:a.maxMorphNormals,numDirLights:f.directional.length,numPointLights:f.point.length,numSpotLights:f.spot.length,numRectAreaLights:f.rectArea.length,numHemiLights:f.hemi.length,numClippingPlanes:k,numClipIntersection:t,shadowMapEnabled:a.shadowMap.enabled&&p.receiveShadow&&0<f.shadows.length,shadowMapType:a.shadowMap.type,
toneMapping:a.toneMapping,physicallyCorrectLights:a.physicallyCorrectLights,premultipliedAlpha:d.premultipliedAlpha,alphaTest:d.alphaTest,doubleSided:2===d.side,flipSided:1===d.side,depthPacking:void 0!==d.depthPacking?d.depthPacking:!1}};this.getProgramCode=function(a,b){var c=[];b.shaderID?c.push(b.shaderID):(c.push(a.fragmentShader),c.push(a.vertexShader));if(void 0!==a.defines)for(var d in a.defines)c.push(d),c.push(a.defines[d]);for(d=0;d<f.length;d++)c.push(b[f[d]]);return c.join()};this.acquireProgram=
function(b,c,e){for(var f,t=0,p=d.length;t<p;t++){var n=d[t];if(n.code===e){f=n;++f.usedTimes;break}}void 0===f&&(f=new Kf(a,e,b,c),d.push(f));return f};this.releaseProgram=function(a){if(0===--a.usedTimes){var b=d.indexOf(a);d[b]=d[d.length-1];d.pop();a.destroy()}};this.programs=d}function Nf(a,b,c){function d(a){var h=a.target;a=f[h.id];null!==a.index&&e(a.index);var m=a.attributes,k;for(k in m)e(m[k]);h.removeEventListener("dispose",d);delete f[h.id];k=b.get(h);k.wireframe&&e(k.wireframe);b["delete"](h);
h=b.get(a);h.wireframe&&e(h.wireframe);b["delete"](a);c.memory.geometries--}function e(c){var d;d=c.isInterleavedBufferAttribute?b.get(c.data).__webglBuffer:b.get(c).__webglBuffer;void 0!==d&&(a.deleteBuffer(d),c.isInterleavedBufferAttribute?b["delete"](c.data):b["delete"](c))}var f={};return{get:function(a){var b=a.geometry;if(void 0!==f[b.id])return f[b.id];b.addEventListener("dispose",d);var e;b.isBufferGeometry?e=b:b.isGeometry&&(void 0===b._bufferGeometry&&(b._bufferGeometry=(new I).setFromObject(a)),
e=b._bufferGeometry);f[b.id]=e;c.memory.geometries++;return e}}}function Of(a,b,c){function d(c,d){var e=c.isInterleavedBufferAttribute?c.data:c,m=b.get(e);if(void 0===m.__webglBuffer){m.__webglBuffer=a.createBuffer();a.bindBuffer(d,m.__webglBuffer);a.bufferData(d,e.array,e.dynamic?a.DYNAMIC_DRAW:a.STATIC_DRAW);var k=a.FLOAT,t=e.array;t instanceof Float32Array?k=a.FLOAT:t instanceof Float64Array?void 0:t instanceof Uint16Array?k=a.UNSIGNED_SHORT:
t instanceof Int16Array?k=a.SHORT:t instanceof Uint32Array?k=a.UNSIGNED_INT:t instanceof Int32Array?k=a.INT:t instanceof Int8Array?k=a.BYTE:t instanceof Uint8Array&&(k=a.UNSIGNED_BYTE);m.bytesPerElement=t.BYTES_PER_ELEMENT;m.type=k;m.version=e.version;e.onUploadCallback()}else m.version!==e.version&&(a.bindBuffer(d,m.__webglBuffer),!1===e.dynamic?a.bufferData(d,e.array,a.STATIC_DRAW):-1===e.updateRange.count?a.bufferSubData(d,0,e.array):0===e.updateRange.count?void 0:
(a.bufferSubData(d,e.updateRange.offset*e.array.BYTES_PER_ELEMENT,e.array.subarray(e.updateRange.offset,e.updateRange.offset+e.updateRange.count)),e.updateRange.count=0),m.version=e.version)}var e=new Nf(a,b,c);return{getAttributeBuffer:function(a){return a.isInterleavedBufferAttribute?b.get(a.data).__webglBuffer:b.get(a).__webglBuffer},getAttributeProperties:function(a){return a.isInterleavedBufferAttribute?b.get(a.data):b.get(a)},getWireframeAttribute:function(c){var e=b.get(c);if(void 0!==e.wireframe)return e.wireframe;
var h=[],m=c.index;c=c.attributes;if(null!==m){m=m.array;c=0;for(var k=m.length;c<k;c+=3){var t=m[c+0],p=m[c+1],n=m[c+2];h.push(t,p,p,n,n,t)}}else for(m=c.position.array,c=0,k=m.length/3-1;c<k;c+=3)t=c+0,p=c+1,n=c+2,h.push(t,p,p,n,n,t);h=new (65535<Ud(h)?jb:ib)(h,1);d(h,a.ELEMENT_ARRAY_BUFFER);return e.wireframe=h},update:function(b){var c=e.get(b);b.geometry.isGeometry&&c.updateFromObject(b);b=c.index;var h=c.attributes;null!==b&&d(b,a.ELEMENT_ARRAY_BUFFER);for(var m in h)d(h[m],a.ARRAY_BUFFER);
b=c.morphAttributes;for(m in b)for(var h=b[m],k=0,t=h.length;k<t;k++)d(h[k],a.ARRAY_BUFFER);return c}}}function Pf(a,b,c,d,e,f,g){function h(a,b){if(a.width>b||a.height>b){var c=b/Math.max(a.width,a.height),d=document.createElementNS("http://www.w3.org/1999/xhtml","canvas");d.width=Math.floor(a.width*c);d.height=Math.floor(a.height*c);d.getContext("2d").drawImage(a,0,0,a.width,a.height,0,0,d.width,d.height);void 0;return d}return a}function m(a){return N.isPowerOfTwo(a.width)&&N.isPowerOfTwo(a.height)}function k(b){return 1003===b||1004===b||1005===b?a.NEAREST:a.LINEAR}function t(b){b=b.target;b.removeEventListener("dispose",t);a:{var c=d.get(b);if(b.image&&c.__image__webglTextureCube)a.deleteTexture(c.__image__webglTextureCube);else{if(void 0===c.__webglInit)break a;a.deleteTexture(c.__webglTexture)}d["delete"](b)}q.textures--}function p(b){b=b.target;b.removeEventListener("dispose",
p);var c=d.get(b),e=d.get(b.texture);if(b){void 0!==e.__webglTexture&&a.deleteTexture(e.__webglTexture);b.depthTexture&&b.depthTexture.dispose();if(b.isWebGLRenderTargetCube)for(e=0;6>e;e++)a.deleteFramebuffer(c.__webglFramebuffer[e]),c.__webglDepthbuffer&&a.deleteRenderbuffer(c.__webglDepthbuffer[e]);else a.deleteFramebuffer(c.__webglFramebuffer),c.__webglDepthbuffer&&a.deleteRenderbuffer(c.__webglDepthbuffer);d["delete"](b.texture);d["delete"](b)}q.textures--}function n(b,g){var k=d.get(b);if(0<
b.version&&k.__version!==b.version){var n=b.image;if(void 0===n)void 0;else if(!1===n.complete)void 0;else{void 0===k.__webglInit&&(k.__webglInit=!0,b.addEventListener("dispose",t),k.__webglTexture=a.createTexture(),q.textures++);c.activeTexture(a.TEXTURE0+g);c.bindTexture(a.TEXTURE_2D,k.__webglTexture);a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,
b.flipY);a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha);a.pixelStorei(a.UNPACK_ALIGNMENT,b.unpackAlignment);var p=h(b.image,e.maxTextureSize);if((1001!==b.wrapS||1001!==b.wrapT||1003!==b.minFilter&&1006!==b.minFilter)&&!1===m(p))if(n=p,n instanceof HTMLImageElement||n instanceof HTMLCanvasElement){var l=document.createElementNS("http://www.w3.org/1999/xhtml","canvas");l.width=N.nearestPowerOfTwo(n.width);l.height=N.nearestPowerOfTwo(n.height);l.getContext("2d").drawImage(n,0,0,
l.width,l.height);void 0;p=l}else p=n;var n=m(p),l=f(b.format),G=f(b.type);u(a.TEXTURE_2D,b,n);var r=b.mipmaps;if(b.isDepthTexture){r=a.DEPTH_COMPONENT;if(1015===b.type){if(!w)throw Error("Float Depth Texture only supported in WebGL2.0");r=a.DEPTH_COMPONENT32F}else w&&(r=a.DEPTH_COMPONENT16);1026===b.format&&r===a.DEPTH_COMPONENT&&1012!==b.type&&1014!==b.type&&(void 0,
b.type=1012,G=f(b.type));1027===b.format&&(r=a.DEPTH_STENCIL,1020!==b.type&&(void 0,b.type=1020,G=f(b.type)));c.texImage2D(a.TEXTURE_2D,0,r,p.width,p.height,0,l,G,null)}else if(b.isDataTexture)if(0<r.length&&n){for(var H=0,aa=r.length;H<aa;H++)p=r[H],c.texImage2D(a.TEXTURE_2D,H,l,p.width,p.height,0,l,G,p.data);b.generateMipmaps=!1}else c.texImage2D(a.TEXTURE_2D,0,l,p.width,p.height,0,l,G,p.data);else if(b.isCompressedTexture)for(H=
0,aa=r.length;H<aa;H++)p=r[H],1023!==b.format&&1022!==b.format?-1<c.getCompressedTextureFormats().indexOf(l)?c.compressedTexImage2D(a.TEXTURE_2D,H,l,p.width,p.height,0,p.data):void 0:c.texImage2D(a.TEXTURE_2D,H,l,p.width,p.height,0,l,G,p.data);else if(0<r.length&&n){H=0;for(aa=r.length;H<aa;H++)p=r[H],c.texImage2D(a.TEXTURE_2D,H,l,l,G,p);b.generateMipmaps=!1}else c.texImage2D(a.TEXTURE_2D,0,l,l,
G,p);b.generateMipmaps&&n&&a.generateMipmap(a.TEXTURE_2D);k.__version=b.version;if(b.onUpdate)b.onUpdate(b);return}}c.activeTexture(a.TEXTURE0+g);c.bindTexture(a.TEXTURE_2D,k.__webglTexture)}function u(c,g,h){h?(a.texParameteri(c,a.TEXTURE_WRAP_S,f(g.wrapS)),a.texParameteri(c,a.TEXTURE_WRAP_T,f(g.wrapT)),a.texParameteri(c,a.TEXTURE_MAG_FILTER,f(g.magFilter)),a.texParameteri(c,a.TEXTURE_MIN_FILTER,f(g.minFilter))):(a.texParameteri(c,a.TEXTURE_WRAP_S,a.CLAMP_TO_EDGE),a.texParameteri(c,a.TEXTURE_WRAP_T,
a.CLAMP_TO_EDGE),1001===g.wrapS&&1001===g.wrapT||void 0,a.texParameteri(c,a.TEXTURE_MAG_FILTER,k(g.magFilter)),a.texParameteri(c,a.TEXTURE_MIN_FILTER,k(g.minFilter)),1003!==g.minFilter&&1006!==g.minFilter&&void 0);!(h=b.get("EXT_texture_filter_anisotropic"))||
1015===g.type&&null===b.get("OES_texture_float_linear")||1016===g.type&&null===b.get("OES_texture_half_float_linear")||!(1<g.anisotropy||d.get(g).__currentAnisotropy)||(a.texParameterf(c,h.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,e.getMaxAnisotropy())),d.get(g).__currentAnisotropy=g.anisotropy)}function l(b,e,g,h){var m=f(e.texture.format),k=f(e.texture.type);c.texImage2D(h,0,m,e.width,e.height,0,m,k,null);a.bindFramebuffer(a.FRAMEBUFFER,b);a.framebufferTexture2D(a.FRAMEBUFFER,g,h,d.get(e.texture).__webglTexture,
0);a.bindFramebuffer(a.FRAMEBUFFER,null)}function r(b,c){a.bindRenderbuffer(a.RENDERBUFFER,b);c.depthBuffer&&!c.stencilBuffer?(a.renderbufferStorage(a.RENDERBUFFER,a.DEPTH_COMPONENT16,c.width,c.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.RENDERBUFFER,b)):c.depthBuffer&&c.stencilBuffer?(a.renderbufferStorage(a.RENDERBUFFER,a.DEPTH_STENCIL,c.width,c.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.RENDERBUFFER,b)):a.renderbufferStorage(a.RENDERBUFFER,
a.RGBA4,c.width,c.height);a.bindRenderbuffer(a.RENDERBUFFER,null)}var q=g.memory,w="undefined"!==typeof WebGL2RenderingContext&&a instanceof WebGL2RenderingContext;this.setTexture2D=n;this.setTextureCube=function(b,g){var k=d.get(b);if(6===b.image.length)if(0<b.version&&k.__version!==b.version){k.__image__webglTextureCube||(b.addEventListener("dispose",t),k.__image__webglTextureCube=a.createTexture(),q.textures++);c.activeTexture(a.TEXTURE0+g);c.bindTexture(a.TEXTURE_CUBE_MAP,k.__image__webglTextureCube);
a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,b.flipY);for(var n=b&&b.isCompressedTexture,p=b.image[0]&&b.image[0].isDataTexture,l=[],r=0;6>r;r++)l[r]=n||p?p?b.image[r].image:b.image[r]:h(b.image[r],e.maxCubemapSize);var G=m(l[0]),w=f(b.format),aa=f(b.type);u(a.TEXTURE_CUBE_MAP,b,G);for(r=0;6>r;r++)if(n)for(var x,D=l[r].mipmaps,z=0,Q=D.length;z<Q;z++)x=D[z],1023!==b.format&&1022!==b.format?-1<c.getCompressedTextureFormats().indexOf(w)?c.compressedTexImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+r,z,w,x.width,x.height,
0,x.data):void 0:c.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+r,z,w,x.width,x.height,0,w,aa,x.data);else p?c.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+r,0,w,l[r].width,l[r].height,0,w,aa,l[r].data):c.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+r,0,w,w,aa,l[r]);b.generateMipmaps&&G&&a.generateMipmap(a.TEXTURE_CUBE_MAP);k.__version=b.version;if(b.onUpdate)b.onUpdate(b)}else c.activeTexture(a.TEXTURE0+
g),c.bindTexture(a.TEXTURE_CUBE_MAP,k.__image__webglTextureCube)};this.setTextureCubeDynamic=function(b,e){c.activeTexture(a.TEXTURE0+e);c.bindTexture(a.TEXTURE_CUBE_MAP,d.get(b).__webglTexture)};this.setupRenderTarget=function(b){var e=d.get(b),f=d.get(b.texture);b.addEventListener("dispose",p);f.__webglTexture=a.createTexture();q.textures++;var g=!0===b.isWebGLRenderTargetCube,h=m(b);if(g){e.__webglFramebuffer=[];for(var k=0;6>k;k++)e.__webglFramebuffer[k]=a.createFramebuffer()}else e.__webglFramebuffer=
a.createFramebuffer();if(g){c.bindTexture(a.TEXTURE_CUBE_MAP,f.__webglTexture);u(a.TEXTURE_CUBE_MAP,b.texture,h);for(k=0;6>k;k++)l(e.__webglFramebuffer[k],b,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+k);b.texture.generateMipmaps&&h&&a.generateMipmap(a.TEXTURE_CUBE_MAP);c.bindTexture(a.TEXTURE_CUBE_MAP,null)}else c.bindTexture(a.TEXTURE_2D,f.__webglTexture),u(a.TEXTURE_2D,b.texture,h),l(e.__webglFramebuffer,b,a.COLOR_ATTACHMENT0,a.TEXTURE_2D),b.texture.generateMipmaps&&h&&a.generateMipmap(a.TEXTURE_2D),
c.bindTexture(a.TEXTURE_2D,null);if(b.depthBuffer){e=d.get(b);f=!0===b.isWebGLRenderTargetCube;if(b.depthTexture){if(f)throw Error("target.depthTexture not supported in Cube render targets");if(b&&b.isWebGLRenderTargetCube)throw Error("Depth Texture with cube render targets is not supported!");a.bindFramebuffer(a.FRAMEBUFFER,e.__webglFramebuffer);if(!b.depthTexture||!b.depthTexture.isDepthTexture)throw Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");d.get(b.depthTexture).__webglTexture&&
b.depthTexture.image.width===b.width&&b.depthTexture.image.height===b.height||(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0);n(b.depthTexture,0);e=d.get(b.depthTexture).__webglTexture;if(1026===b.depthTexture.format)a.framebufferTexture2D(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.TEXTURE_2D,e,0);else if(1027===b.depthTexture.format)a.framebufferTexture2D(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.TEXTURE_2D,e,0);else throw Error("Unknown depthTexture format");
}else if(f)for(e.__webglDepthbuffer=[],f=0;6>f;f++)a.bindFramebuffer(a.FRAMEBUFFER,e.__webglFramebuffer[f]),e.__webglDepthbuffer[f]=a.createRenderbuffer(),r(e.__webglDepthbuffer[f],b);else a.bindFramebuffer(a.FRAMEBUFFER,e.__webglFramebuffer),e.__webglDepthbuffer=a.createRenderbuffer(),r(e.__webglDepthbuffer,b);a.bindFramebuffer(a.FRAMEBUFFER,null)}};this.updateRenderTargetMipmap=function(b){var e=b.texture;e.generateMipmaps&&m(b)&&1003!==e.minFilter&&1006!==e.minFilter&&(b=b&&b.isWebGLRenderTargetCube?
a.TEXTURE_CUBE_MAP:a.TEXTURE_2D,e=d.get(e).__webglTexture,c.bindTexture(b,e),a.generateMipmap(b),c.bindTexture(b,null))}}function Qf(){var a={};return{get:function(b){b=b.uuid;var c=a[b];void 0===c&&(c={},a[b]=c);return c},"delete":function(b){delete a[b.uuid]},clear:function(){a={}}}}function Rf(a,b,c){function d(b,c,d){var e=new Uint8Array(4),f=a.createTexture();a.bindTexture(b,f);a.texParameteri(b,a.TEXTURE_MIN_FILTER,a.NEAREST);a.texParameteri(b,a.TEXTURE_MAG_FILTER,a.NEAREST);for(b=0;b<d;b++)a.texImage2D(c+
b,0,a.RGBA,1,1,0,a.RGBA,a.UNSIGNED_BYTE,e);return f}function e(b){!0!==y[b]&&(a.enable(b),y[b]=!0)}function f(b){!1!==y[b]&&(a.disable(b),y[b]=!1)}function g(b,d,g,h,m,k,n,t){0!==b?e(a.BLEND):f(a.BLEND);if(b!==v||t!==x)2===b?t?(a.blendEquationSeparate(a.FUNC_ADD,a.FUNC_ADD),a.blendFuncSeparate(a.ONE,a.ONE,a.ONE,a.ONE)):(a.blendEquation(a.FUNC_ADD),a.blendFunc(a.SRC_ALPHA,a.ONE)):3===b?t?(a.blendEquationSeparate(a.FUNC_ADD,a.FUNC_ADD),a.blendFuncSeparate(a.ZERO,a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ONE_MINUS_SRC_ALPHA)):
(a.blendEquation(a.FUNC_ADD),a.blendFunc(a.ZERO,a.ONE_MINUS_SRC_COLOR)):4===b?t?(a.blendEquationSeparate(a.FUNC_ADD,a.FUNC_ADD),a.blendFuncSeparate(a.ZERO,a.SRC_COLOR,a.ZERO,a.SRC_ALPHA)):(a.blendEquation(a.FUNC_ADD),a.blendFunc(a.ZERO,a.SRC_COLOR)):t?(a.blendEquationSeparate(a.FUNC_ADD,a.FUNC_ADD),a.blendFuncSeparate(a.ONE,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA)):(a.blendEquationSeparate(a.FUNC_ADD,a.FUNC_ADD),a.blendFuncSeparate(a.SRC_ALPHA,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA)),
v=b,x=t;if(5===b){m=m||d;k=k||g;n=n||h;if(d!==E||m!==F)a.blendEquationSeparate(c(d),c(m)),E=d,F=m;if(g!==L||h!==C||k!==da||n!==H)a.blendFuncSeparate(c(g),c(h),c(k),c(n)),L=g,C=h,da=k,H=n}else H=da=F=C=L=E=null}function h(a){n.setFunc(a)}function m(b){D!==b&&(b?a.frontFace(a.CW):a.frontFace(a.CCW),D=b)}function k(b){0!==b?(e(a.CULL_FACE),b!==z&&(1===b?a.cullFace(a.BACK):2===b?a.cullFace(a.FRONT):a.cullFace(a.FRONT_AND_BACK))):f(a.CULL_FACE);z=b}function t(b){void 0===b&&(b=a.TEXTURE0+P-1);W!==b&&(a.activeTexture(b),
W=b)}var p=new function(){var b=!1,c=new fa,d=null,e=new fa;return{setMask:function(c){d===c||b||(a.colorMask(c,c,c,c),d=c)},setLocked:function(a){b=a},setClear:function(b,d,f,g,h){!0===h&&(b*=g,d*=g,f*=g);c.set(b,d,f,g);!1===e.equals(c)&&(a.clearColor(b,d,f,g),e.copy(c))},reset:function(){b=!1;d=null;e.set(0,0,0,1)}}},n=new function(){var b=!1,c=null,d=null,g=null;return{setTest:function(b){b?e(a.DEPTH_TEST):f(a.DEPTH_TEST)},setMask:function(d){c===d||b||(a.depthMask(d),c=d)},setFunc:function(b){if(d!==
b){if(b)switch(b){case 0:a.depthFunc(a.NEVER);break;case 1:a.depthFunc(a.ALWAYS);break;case 2:a.depthFunc(a.LESS);break;case 3:a.depthFunc(a.LEQUAL);break;case 4:a.depthFunc(a.EQUAL);break;case 5:a.depthFunc(a.GEQUAL);break;case 6:a.depthFunc(a.GREATER);break;case 7:a.depthFunc(a.NOTEQUAL);break;default:a.depthFunc(a.LEQUAL)}else a.depthFunc(a.LEQUAL);d=b}},setLocked:function(a){b=a},setClear:function(b){g!==b&&(a.clearDepth(b),g=b)},reset:function(){b=!1;g=d=c=null}}},u=new function(){var b=!1,c=
null,d=null,g=null,h=null,m=null,k=null,n=null,t=null;return{setTest:function(b){b?e(a.STENCIL_TEST):f(a.STENCIL_TEST)},setMask:function(d){c===d||b||(a.stencilMask(d),c=d)},setFunc:function(b,c,e){if(d!==b||g!==c||h!==e)a.stencilFunc(b,c,e),d=b,g=c,h=e},setOp:function(b,c,d){if(m!==b||k!==c||n!==d)a.stencilOp(b,c,d),m=b,k=c,n=d},setLocked:function(a){b=a},setClear:function(b){t!==b&&(a.clearStencil(b),t=b)},reset:function(){b=!1;t=n=k=m=h=g=d=c=null}}},l=a.getParameter(a.MAX_VERTEX_ATTRIBS),r=new Uint8Array(l),
q=new Uint8Array(l),w=new Uint8Array(l),y={},K=null,v=null,E=null,L=null,C=null,F=null,da=null,H=null,x=!1,D=null,z=null,J=null,Q=null,M=null,O=null,P=a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS),l=parseFloat(/^WebGL\ ([0-9])/.exec(a.getParameter(a.VERSION))[1]),I=1<=parseFloat(l),W=null,S={},R=new fa,T=new fa,N={};N[a.TEXTURE_2D]=d(a.TEXTURE_2D,a.TEXTURE_2D,1);N[a.TEXTURE_CUBE_MAP]=d(a.TEXTURE_CUBE_MAP,a.TEXTURE_CUBE_MAP_POSITIVE_X,6);return{buffers:{color:p,depth:n,stencil:u},init:function(){p.setClear(0,
0,0,1);n.setClear(1);u.setClear(0);e(a.DEPTH_TEST);h(3);m(!1);k(1);e(a.CULL_FACE);e(a.BLEND);g(1)},initAttributes:function(){for(var a=0,b=r.length;a<b;a++)r[a]=0},enableAttribute:function(c){r[c]=1;0===q[c]&&(a.enableVertexAttribArray(c),q[c]=1);0!==w[c]&&(b.get("ANGLE_instanced_arrays").vertexAttribDivisorANGLE(c,0),w[c]=0)},enableAttributeAndDivisor:function(b,c,d){r[b]=1;0===q[b]&&(a.enableVertexAttribArray(b),q[b]=1);w[b]!==c&&(d.vertexAttribDivisorANGLE(b,c),w[b]=c)},disableUnusedAttributes:function(){for(var b=
0,c=q.length;b!==c;++b)q[b]!==r[b]&&(a.disableVertexAttribArray(b),q[b]=0)},enable:e,disable:f,getCompressedTextureFormats:function(){if(null===K&&(K=[],b.get("WEBGL_compressed_texture_pvrtc")||b.get("WEBGL_compressed_texture_s3tc")||b.get("WEBGL_compressed_texture_etc1")))for(var c=a.getParameter(a.COMPRESSED_TEXTURE_FORMATS),d=0;d<c.length;d++)K.push(c[d]);return K},setBlending:g,setColorWrite:function(a){p.setMask(a)},setDepthTest:function(a){n.setTest(a)},setDepthWrite:function(a){n.setMask(a)},
setDepthFunc:h,setStencilTest:function(a){u.setTest(a)},setStencilWrite:function(a){u.setMask(a)},setStencilFunc:function(a,b,c){u.setFunc(a,b,c)},setStencilOp:function(a,b,c){u.setOp(a,b,c)},setFlipSided:m,setCullFace:k,setLineWidth:function(b){b!==J&&(I&&a.lineWidth(b),J=b)},setPolygonOffset:function(b,c,d){if(b){if(e(a.POLYGON_OFFSET_FILL),Q!==c||M!==d)a.polygonOffset(c,d),Q=c,M=d}else f(a.POLYGON_OFFSET_FILL)},getScissorTest:function(){return O},setScissorTest:function(b){(O=b)?e(a.SCISSOR_TEST):
f(a.SCISSOR_TEST)},activeTexture:t,bindTexture:function(b,c){null===W&&t();var d=S[W];void 0===d&&(d={type:void 0,texture:void 0},S[W]=d);if(d.type!==b||d.texture!==c)a.bindTexture(b,c||N[b]),d.type=b,d.texture=c},compressedTexImage2D:function(){try{a.compressedTexImage2D.apply(a,arguments)}catch(b){void 0}},texImage2D:function(){try{a.texImage2D.apply(a,arguments)}catch(b){void 0}},scissor:function(b){!1===R.equals(b)&&(a.scissor(b.x,b.y,b.z,b.w),R.copy(b))},viewport:function(b){!1===
T.equals(b)&&(a.viewport(b.x,b.y,b.z,b.w),T.copy(b))},reset:function(){for(var b=0;b<q.length;b++)1===q[b]&&(a.disableVertexAttribArray(b),q[b]=0);y={};W=K=null;S={};z=D=v=null;p.reset();n.reset();u.reset()}}}function Sf(a,b,c){function d(b){if("highp"===b){if(0<a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.HIGH_FLOAT).precision&&0<a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.HIGH_FLOAT).precision)return"highp";b="mediump"}return"mediump"===b&&0<a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.MEDIUM_FLOAT).precision&&
0<a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.MEDIUM_FLOAT).precision?"mediump":"lowp"}var e,f=void 0!==c.precision?c.precision:"highp",g=d(f);g!==f&&(void 0,f=g);c=!0===c.logarithmicDepthBuffer&&!!b.get("EXT_frag_depth");var g=a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS),h=a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=a.getParameter(a.MAX_TEXTURE_SIZE),k=a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE),t=a.getParameter(a.MAX_VERTEX_ATTRIBS),
p=a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS),n=a.getParameter(a.MAX_VARYING_VECTORS),u=a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS),l=0<h,r=!!b.get("OES_texture_float");return{getMaxAnisotropy:function(){if(void 0!==e)return e;var c=b.get("EXT_texture_filter_anisotropic");return e=null!==c?a.getParameter(c.MAX_TEXTURE_MAX_ANISOTROPY_EXT):0},getMaxPrecision:d,precision:f,logarithmicDepthBuffer:c,maxTextures:g,maxVertexTextures:h,maxTextureSize:m,maxCubemapSize:k,maxAttributes:t,maxVertexUniforms:p,
maxVaryings:n,maxFragmentUniforms:u,vertexTextures:l,floatFragmentTextures:r,floatVertexTextures:l&&r}}function Tf(a){var b={};return{get:function(c){if(void 0!==b[c])return b[c];var d;switch(c){case "WEBGL_depth_texture":d=a.getExtension("WEBGL_depth_texture")||a.getExtension("MOZ_WEBGL_depth_texture")||a.getExtension("WEBKIT_WEBGL_depth_texture");break;case "EXT_texture_filter_anisotropic":d=a.getExtension("EXT_texture_filter_anisotropic")||a.getExtension("MOZ_EXT_texture_filter_anisotropic")||
a.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case "WEBGL_compressed_texture_s3tc":d=a.getExtension("WEBGL_compressed_texture_s3tc")||a.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case "WEBGL_compressed_texture_pvrtc":d=a.getExtension("WEBGL_compressed_texture_pvrtc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;case "WEBGL_compressed_texture_etc1":d=a.getExtension("WEBGL_compressed_texture_etc1");
break;default:d=a.getExtension(c)}null===d&&void 0;return b[c]=d}}}function Uf(){function a(){k.value!==d&&(k.value=d,k.needsUpdate=0<e);c.numPlanes=e;c.numIntersection=0}function b(a,b,d,e){var f=null!==a?a.length:0,g=null;if(0!==f){g=k.value;if(!0!==e||null===g){e=d+4*f;b=b.matrixWorldInverse;m.getNormalMatrix(b);if(null===g||g.length<e)g=new Float32Array(e);for(e=0;e!==f;++e,d+=4)h.copy(a[e]).applyMatrix4(b,m),h.normal.toArray(g,d),g[d+
3]=h.constant}k.value=g;k.needsUpdate=!0}c.numPlanes=f;return g}var c=this,d=null,e=0,f=!1,g=!1,h=new la,m=new ya,k={value:null,needsUpdate:!1};this.uniform=k;this.numIntersection=this.numPlanes=0;this.init=function(a,c,g){var h=0!==a.length||c||0!==e||f;f=c;d=b(a,g,0);e=a.length;return h};this.beginShadows=function(){g=!0;b(null)};this.endShadows=function(){g=!1;a()};this.setState=function(c,h,m,l,G,r){if(!f||null===c||0===c.length||g&&!m)g?b(null):a();else{m=g?0:e;var q=4*m,w=G.clippingState||null;
k.value=w;w=b(c,l,q,r);for(c=0;c!==q;++c)w[c]=d[c];G.clippingState=w;this.numIntersection=h?this.numPlanes:0;this.numPlanes+=m}}}function Yd(a){function b(){Y.init();Y.scissor(X.copy(ga).multiplyScalar(Ra));Y.viewport(Z.copy(ia).multiplyScalar(Ra));Y.buffers.color.setClear(Ea.r,Ea.g,Ea.b,gb,F)}function c(){U=wa=null;V="";R=-1;Y.reset()}function d(a){a.preventDefault();c();b();ha.clear()}function e(a){a=a.target;a.removeEventListener("dispose",e);f(a);ha["delete"](a)}function f(a){var b=ha.get(a).program;
a.program=void 0;void 0!==b&&ya.releaseProgram(b)}function g(a,b){return Math.abs(b[0])-Math.abs(a[0])}function h(a,b){return a.object.renderOrder!==b.object.renderOrder?a.object.renderOrder-b.object.renderOrder:a.material.program&&b.material.program&&a.material.program!==b.material.program?a.material.program.id-b.material.program.id:a.material.id!==b.material.id?a.material.id-b.material.id:a.z!==b.z?a.z-b.z:a.id-b.id}function m(a,b){return a.object.renderOrder!==b.object.renderOrder?a.object.renderOrder-
b.object.renderOrder:a.z!==b.z?b.z-a.z:a.id-b.id}function k(a,b,c,d,e){var f;c.transparent?(d=z,f=++T):(d=aa,f=++D);f=d[f];void 0!==f?(f.id=a.id,f.object=a,f.geometry=b,f.material=c,f.z=Ga.z,f.group=e):(f={id:a.id,object:a,geometry:b,material:c,z:Ga.z,group:e},d.push(f))}function t(a){if(!ma.intersectsSphere(a))return!1;var b=ca.numPlanes;if(0===b)return!0;var c=P.clippingPlanes,d=a.center;a=-a.radius;var e=0;do if(c[e].distanceToPoint(d)<a)return!1;while(++e!==b);return!0}function p(a,b){if(!1!==
a.visible){if(0!==(a.layers.mask&b.layers.mask))if(a.isLight)H.push(a);else if(a.isSprite){var c;(c=!1===a.frustumCulled)||(na.center.set(0,0,0),na.radius=.7071067811865476,na.applyMatrix4(a.matrixWorld),c=!0===t(na));c&&M.push(a)}else if(a.isLensFlare)O.push(a);else if(a.isImmediateRenderObject)!0===P.sortObjects&&(Ga.setFromMatrixPosition(a.matrixWorld),Ga.applyMatrix4(ua)),k(a,null,a.material,Ga.z,null);else if(a.isMesh||a.isLine||a.isPoints)if(a.isSkinnedMesh&&a.skeleton.update(),(c=!1===a.frustumCulled)||
(c=a.geometry,null===c.boundingSphere&&c.computeBoundingSphere(),na.copy(c.boundingSphere).applyMatrix4(a.matrixWorld),c=!0===t(na)),c){var d=a.material;if(!0===d.visible)if(!0===P.sortObjects&&(Ga.setFromMatrixPosition(a.matrixWorld),Ga.applyMatrix4(ua)),c=qa.update(a),d.isMultiMaterial)for(var e=c.groups,f=d.materials,d=0,g=e.length;d<g;d++){var h=e[d],m=f[h.materialIndex];!0===m.visible&&k(a,c,m,Ga.z,h)}else k(a,c,d,Ga.z,null)}c=a.children;d=0;for(g=c.length;d<g;d++)p(c[d],b)}}function n(a,b,c,
d){for(var e=0,f=a.length;e<f;e++){var g=a[e],h=g.object,m=g.geometry,k=void 0===d?g.material:d,g=g.group;h.modelViewMatrix.multiplyMatrices(c.matrixWorldInverse,h.matrixWorld);h.normalMatrix.getNormalMatrix(h.modelViewMatrix);h.onBeforeRender(P,b,c,m,k,g);if(h.isImmediateRenderObject){l(k);var n=G(c,b.fog,k,h);V="";h.render(function(a){P.renderBufferImmediate(a,n,k)})}else P.renderBufferDirect(c,b.fog,m,k,h,g);h.onAfterRender(P,b,c,m,k,g)}}function l(a){2===a.side?Y.disable(B.CULL_FACE):Y.enable(B.CULL_FACE);
Y.setFlipSided(1===a.side);!0===a.transparent?Y.setBlending(a.blending,a.blendEquation,a.blendSrc,a.blendDst,a.blendEquationAlpha,a.blendSrcAlpha,a.blendDstAlpha,a.premultipliedAlpha):Y.setBlending(0);Y.setDepthFunc(a.depthFunc);Y.setDepthTest(a.depthTest);Y.setDepthWrite(a.depthWrite);Y.setColorWrite(a.colorWrite);Y.setPolygonOffset(a.polygonOffset,a.polygonOffsetFactor,a.polygonOffsetUnits)}function G(a,b,c,d){ea=0;var g=ha.get(c);oa&&(ra||a!==U)&&ca.setState(c.clippingPlanes,c.clipIntersection,
c.clipShadows,a,g,a===U&&c.id===R);!1===c.needsUpdate&&(void 0===g.program?c.needsUpdate=!0:c.fog&&g.fog!==b?c.needsUpdate=!0:c.lights&&g.lightsHash!==ba.hash?c.needsUpdate=!0:void 0===g.numClippingPlanes||g.numClippingPlanes===ca.numPlanes&&g.numIntersection===ca.numIntersection||(c.needsUpdate=!0));if(c.needsUpdate){a:{var h=ha.get(c),m=ya.getParameters(c,ba,b,ca.numPlanes,ca.numIntersection,d),k=ya.getProgramCode(c,m),n=h.program,t=!0;if(void 0===n)c.addEventListener("dispose",e);else if(n.code!==
k)f(c);else if(void 0!==m.shaderID)break a;else t=!1;t&&(m.shaderID?(n=bb[m.shaderID],h.__webglShader={name:c.type,uniforms:Ja.clone(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader}):h.__webglShader={name:c.type,uniforms:c.uniforms,vertexShader:c.vertexShader,fragmentShader:c.fragmentShader},c.__webglShader=h.__webglShader,n=ya.acquireProgram(c,m,k),h.program=n,c.program=n);m=n.getAttributes();if(c.morphTargets)for(k=c.numSupportedMorphTargets=0;k<P.maxMorphTargets;k++)0<=
m["morphTarget"+k]&&c.numSupportedMorphTargets++;if(c.morphNormals)for(k=c.numSupportedMorphNormals=0;k<P.maxMorphNormals;k++)0<=m["morphNormal"+k]&&c.numSupportedMorphNormals++;m=h.__webglShader.uniforms;if(!c.isShaderMaterial&&!c.isRawShaderMaterial||!0===c.clipping)h.numClippingPlanes=ca.numPlanes,h.numIntersection=ca.numIntersection,m.clippingPlanes=ca.uniform;h.fog=b;h.lightsHash=ba.hash;c.lights&&(m.ambientLightColor.value=ba.ambient,m.directionalLights.value=ba.directional,m.spotLights.value=
ba.spot,m.rectAreaLights.value=ba.rectArea,m.pointLights.value=ba.point,m.hemisphereLights.value=ba.hemi,m.directionalShadowMap.value=ba.directionalShadowMap,m.directionalShadowMatrix.value=ba.directionalShadowMatrix,m.spotShadowMap.value=ba.spotShadowMap,m.spotShadowMatrix.value=ba.spotShadowMatrix,m.pointShadowMap.value=ba.pointShadowMap,m.pointShadowMatrix.value=ba.pointShadowMatrix);k=h.program.getUniforms();m=$a.seqWithValue(k.seq,m);h.uniformsList=m}c.needsUpdate=!1}var p=!1,t=n=!1,h=g.program,
m=h.getUniforms(),k=g.__webglShader.uniforms;h.id!==wa&&(B.useProgram(h.program),wa=h.id,t=n=p=!0);c.id!==R&&(R=c.id,n=!0);if(p||a!==U){m.set(B,a,"projectionMatrix");la.logarithmicDepthBuffer&&m.setValue(B,"logDepthBufFC",2/(Math.log(a.far+1)/Math.LN2));a!==U&&(U=a,t=n=!0);if(c.isShaderMaterial||c.isMeshPhongMaterial||c.isMeshStandardMaterial||c.envMap)p=m.map.cameraPosition,void 0!==p&&p.setValue(B,Ga.setFromMatrixPosition(a.matrixWorld));(c.isMeshPhongMaterial||c.isMeshLambertMaterial||c.isMeshBasicMaterial||
c.isMeshStandardMaterial||c.isShaderMaterial||c.skinning)&&m.setValue(B,"viewMatrix",a.matrixWorldInverse);m.set(B,P,"toneMappingExposure");m.set(B,P,"toneMappingWhitePoint")}c.skinning&&(m.setOptional(B,d,"bindMatrix"),m.setOptional(B,d,"bindMatrixInverse"),a=d.skeleton)&&(la.floatVertexTextures&&a.useVertexTexture?(m.set(B,a,"boneTexture"),m.set(B,a,"boneTextureWidth"),m.set(B,a,"boneTextureHeight")):m.setOptional(B,a,"boneMatrices"));if(n){c.lights&&(a=t,k.ambientLightColor.needsUpdate=a,k.directionalLights.needsUpdate=
a,k.pointLights.needsUpdate=a,k.spotLights.needsUpdate=a,k.rectAreaLights.needsUpdate=a,k.hemisphereLights.needsUpdate=a);b&&c.fog&&(k.fogColor.value=b.color,b.isFog?(k.fogNear.value=b.near,k.fogFar.value=b.far):b.isFogExp2&&(k.fogDensity.value=b.density));if(c.isMeshBasicMaterial||c.isMeshLambertMaterial||c.isMeshPhongMaterial||c.isMeshStandardMaterial||c.isMeshNormalMaterial||c.isMeshDepthMaterial){k.opacity.value=c.opacity;k.diffuse.value=c.color;c.emissive&&k.emissive.value.copy(c.emissive).multiplyScalar(c.emissiveIntensity);
k.map.value=c.map;k.specularMap.value=c.specularMap;k.alphaMap.value=c.alphaMap;c.lightMap&&(k.lightMap.value=c.lightMap,k.lightMapIntensity.value=c.lightMapIntensity);c.aoMap&&(k.aoMap.value=c.aoMap,k.aoMapIntensity.value=c.aoMapIntensity);var l;c.map?l=c.map:c.specularMap?l=c.specularMap:c.displacementMap?l=c.displacementMap:c.normalMap?l=c.normalMap:c.bumpMap?l=c.bumpMap:c.roughnessMap?l=c.roughnessMap:c.metalnessMap?l=c.metalnessMap:c.alphaMap?l=c.alphaMap:c.emissiveMap&&(l=c.emissiveMap);void 0!==
l&&(l.isWebGLRenderTarget&&(l=l.texture),b=l.offset,l=l.repeat,k.offsetRepeat.value.set(b.x,b.y,l.x,l.y));k.envMap.value=c.envMap;k.flipEnvMap.value=c.envMap&&c.envMap.isCubeTexture?-1:1;k.reflectivity.value=c.reflectivity;k.refractionRatio.value=c.refractionRatio}c.isLineBasicMaterial?(k.diffuse.value=c.color,k.opacity.value=c.opacity):c.isLineDashedMaterial?(k.diffuse.value=c.color,k.opacity.value=c.opacity,k.dashSize.value=c.dashSize,k.totalSize.value=c.dashSize+c.gapSize,k.scale.value=c.scale):
c.isPointsMaterial?(k.diffuse.value=c.color,k.opacity.value=c.opacity,k.size.value=c.size*Ra,k.scale.value=.5*Cc,k.map.value=c.map,null!==c.map&&(l=c.map.offset,c=c.map.repeat,k.offsetRepeat.value.set(l.x,l.y,c.x,c.y))):c.isMeshLambertMaterial?c.emissiveMap&&(k.emissiveMap.value=c.emissiveMap):c.isMeshToonMaterial?(r(k,c),c.gradientMap&&(k.gradientMap.value=c.gradientMap)):c.isMeshPhongMaterial?r(k,c):c.isMeshPhysicalMaterial?(k.clearCoat.value=c.clearCoat,k.clearCoatRoughness.value=c.clearCoatRoughness,
A(k,c)):c.isMeshStandardMaterial?A(k,c):c.isMeshDepthMaterial?c.displacementMap&&(k.displacementMap.value=c.displacementMap,k.displacementScale.value=c.displacementScale,k.displacementBias.value=c.displacementBias):c.isMeshNormalMaterial&&(c.bumpMap&&(k.bumpMap.value=c.bumpMap,k.bumpScale.value=c.bumpScale),c.normalMap&&(k.normalMap.value=c.normalMap,k.normalScale.value.copy(c.normalScale)),c.displacementMap&&(k.displacementMap.value=c.displacementMap,k.displacementScale.value=c.displacementScale,
k.displacementBias.value=c.displacementBias));void 0!==k.ltcMat&&(k.ltcMat.value=THREE.UniformsLib.LTC_MAT_TEXTURE);void 0!==k.ltcMag&&(k.ltcMag.value=THREE.UniformsLib.LTC_MAG_TEXTURE);$a.upload(B,g.uniformsList,k,P)}m.set(B,d,"modelViewMatrix");m.set(B,d,"normalMatrix");m.setValue(B,"modelMatrix",d.matrixWorld);return h}function r(a,b){a.specular.value=b.specular;a.shininess.value=Math.max(b.shininess,1E-4);b.emissiveMap&&(a.emissiveMap.value=b.emissiveMap);b.bumpMap&&(a.bumpMap.value=b.bumpMap,
a.bumpScale.value=b.bumpScale);b.normalMap&&(a.normalMap.value=b.normalMap,a.normalScale.value.copy(b.normalScale));b.displacementMap&&(a.displacementMap.value=b.displacementMap,a.displacementScale.value=b.displacementScale,a.displacementBias.value=b.displacementBias)}function A(a,b){a.roughness.value=b.roughness;a.metalness.value=b.metalness;b.roughnessMap&&(a.roughnessMap.value=b.roughnessMap);b.metalnessMap&&(a.metalnessMap.value=b.metalnessMap);b.emissiveMap&&(a.emissiveMap.value=b.emissiveMap);
b.bumpMap&&(a.bumpMap.value=b.bumpMap,a.bumpScale.value=b.bumpScale);b.normalMap&&(a.normalMap.value=b.normalMap,a.normalScale.value.copy(b.normalScale));b.displacementMap&&(a.displacementMap.value=b.displacementMap,a.displacementScale.value=b.displacementScale,a.displacementBias.value=b.displacementBias);b.envMap&&(a.envMapIntensity.value=b.envMapIntensity)}function w(a){var b;if(1E3===a)return B.REPEAT;if(1001===a)return B.CLAMP_TO_EDGE;if(1002===a)return B.MIRRORED_REPEAT;if(1003===a)return B.NEAREST;
if(1004===a)return B.NEAREST_MIPMAP_NEAREST;if(1005===a)return B.NEAREST_MIPMAP_LINEAR;if(1006===a)return B.LINEAR;if(1007===a)return B.LINEAR_MIPMAP_NEAREST;if(1008===a)return B.LINEAR_MIPMAP_LINEAR;if(1009===a)return B.UNSIGNED_BYTE;if(1017===a)return B.UNSIGNED_SHORT_4_4_4_4;if(1018===a)return B.UNSIGNED_SHORT_5_5_5_1;if(1019===a)return B.UNSIGNED_SHORT_5_6_5;if(1010===a)return B.BYTE;if(1011===a)return B.SHORT;if(1012===a)return B.UNSIGNED_SHORT;if(1013===a)return B.INT;if(1014===a)return B.UNSIGNED_INT;
if(1015===a)return B.FLOAT;if(1016===a&&(b=ja.get("OES_texture_half_float"),null!==b))return b.HALF_FLOAT_OES;if(1021===a)return B.ALPHA;if(1022===a)return B.RGB;if(1023===a)return B.RGBA;if(1024===a)return B.LUMINANCE;if(1025===a)return B.LUMINANCE_ALPHA;if(1026===a)return B.DEPTH_COMPONENT;if(1027===a)return B.DEPTH_STENCIL;if(100===a)return B.FUNC_ADD;if(101===a)return B.FUNC_SUBTRACT;if(102===a)return B.FUNC_REVERSE_SUBTRACT;if(200===a)return B.ZERO;if(201===a)return B.ONE;if(202===a)return B.SRC_COLOR;
if(203===a)return B.ONE_MINUS_SRC_COLOR;if(204===a)return B.SRC_ALPHA;if(205===a)return B.ONE_MINUS_SRC_ALPHA;if(206===a)return B.DST_ALPHA;if(207===a)return B.ONE_MINUS_DST_ALPHA;if(208===a)return B.DST_COLOR;if(209===a)return B.ONE_MINUS_DST_COLOR;if(210===a)return B.SRC_ALPHA_SATURATE;if(2001===a||2002===a||2003===a||2004===a)if(b=ja.get("WEBGL_compressed_texture_s3tc"),null!==b){if(2001===a)return b.COMPRESSED_RGB_S3TC_DXT1_EXT;if(2002===a)return b.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(2003===a)return b.COMPRESSED_RGBA_S3TC_DXT3_EXT;
if(2004===a)return b.COMPRESSED_RGBA_S3TC_DXT5_EXT}if(2100===a||2101===a||2102===a||2103===a)if(b=ja.get("WEBGL_compressed_texture_pvrtc"),null!==b){if(2100===a)return b.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(2101===a)return b.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(2102===a)return b.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(2103===a)return b.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}if(2151===a&&(b=ja.get("WEBGL_compressed_texture_etc1"),null!==b))return b.COMPRESSED_RGB_ETC1_WEBGL;if(103===a||104===a)if(b=ja.get("EXT_blend_minmax"),
null!==b){if(103===a)return b.MIN_EXT;if(104===a)return b.MAX_EXT}return 1020===a&&(b=ja.get("WEBGL_depth_texture"),null!==b)?b.UNSIGNED_INT_24_8_WEBGL:0}void 0;a=a||{};var y=void 0!==a.canvas?a.canvas:document.createElementNS("http://www.w3.org/1999/xhtml","canvas"),K=void 0!==a.context?a.context:null,v=void 0!==a.alpha?a.alpha:!1,E=void 0!==a.depth?a.depth:!0,L=void 0!==a.stencil?a.stencil:!0,C=void 0!==a.antialias?a.antialias:!1,F=void 0!==a.premultipliedAlpha?
a.premultipliedAlpha:!0,x=void 0!==a.preserveDrawingBuffer?a.preserveDrawingBuffer:!1,H=[],aa=[],D=-1,z=[],T=-1,Q=new Float32Array(8),M=[],O=[];this.domElement=y;this.context=null;this.sortObjects=this.autoClearStencil=this.autoClearDepth=this.autoClearColor=this.autoClear=!0;this.clippingPlanes=[];this.localClippingEnabled=!1;this.gammaFactor=2;this.physicallyCorrectLights=this.gammaOutput=this.gammaInput=!1;this.toneMappingWhitePoint=this.toneMappingExposure=this.toneMapping=1;this.maxMorphTargets=
8;this.maxMorphNormals=4;var P=this,wa=null,W=null,N=null,R=-1,V="",U=null,X=new fa,Sa=null,Z=new fa,ea=0,Ea=new J(0),gb=0,md=y.width,Cc=y.height,Ra=1,ga=new fa(0,0,md,Cc),ka=!1,ia=new fa(0,0,md,Cc),ma=new tc,ca=new Uf,oa=!1,ra=!1,na=new Na,ua=new S,Ga=new q,Ba=new S,xa=new S,ba={hash:"",ambient:[0,0,0],directional:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],point:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],shadows:[]},pa={calls:0,
vertices:0,faces:0,points:0};this.info={render:pa,memory:{geometries:0,textures:0},programs:null};var B;try{v={alpha:v,depth:E,stencil:L,antialias:C,premultipliedAlpha:F,preserveDrawingBuffer:x};B=K||y.getContext("webgl",v)||y.getContext("experimental-webgl",v);if(null===B){if(null!==y.getContext("webgl"))throw"Error creating WebGL context with your selected attributes.";throw"Error creating WebGL context.";}void 0===B.getShaderPrecisionFormat&&(B.getShaderPrecisionFormat=function(){return{rangeMin:1,
rangeMax:1,precision:1}});y.addEventListener("webglcontextlost",d,!1)}catch(Vf){void 0}var ja=new Tf(B);ja.get("WEBGL_depth_texture");ja.get("OES_texture_float");ja.get("OES_texture_float_linear");ja.get("OES_texture_half_float");ja.get("OES_texture_half_float_linear");ja.get("OES_standard_derivatives");ja.get("ANGLE_instanced_arrays");ja.get("OES_element_index_uint")&&(I.MaxIndex=4294967296);var la=new Sf(B,ja,a),Y=new Rf(B,ja,w),ha=new Qf,ta=new Pf(B,ja,Y,ha,la,
w,this.info),qa=new Of(B,ha,this.info),ya=new Mf(this,la),za=new Ef;this.info.programs=ya.programs;var La=new Df(B,ja,pa),Oa=new Cf(B,ja,pa),Ia,Ca,sa,va;b();this.context=B;this.capabilities=la;this.extensions=ja;this.properties=ha;this.state=Y;var Ma=new Ke(this,ba,qa,la);this.shadowMap=Ma;var Pa=new zf(this,M),Qa=new yf(this,O);this.getContext=function(){return B};this.getContextAttributes=function(){return B.getContextAttributes()};this.forceContextLoss=function(){ja.get("WEBGL_lose_context").loseContext()};
this.getMaxAnisotropy=function(){return la.getMaxAnisotropy()};this.getPrecision=function(){return la.precision};this.getPixelRatio=function(){return Ra};this.setPixelRatio=function(a){void 0!==a&&(Ra=a,this.setSize(ia.z,ia.w,!1))};this.getSize=function(){return{width:md,height:Cc}};this.setSize=function(a,b,c){md=a;Cc=b;y.width=a*Ra;y.height=b*Ra;!1!==c&&(y.style.width=a+"px",y.style.height=b+"px");this.setViewport(0,0,a,b)};this.setViewport=function(a,b,c,d){Y.viewport(ia.set(a,b,c,d))};this.setScissor=
function(a,b,c,d){Y.scissor(ga.set(a,b,c,d))};this.setScissorTest=function(a){Y.setScissorTest(ka=a)};this.getClearColor=function(){return Ea};this.setClearColor=function(a,b){Ea.set(a);gb=void 0!==b?b:1;Y.buffers.color.setClear(Ea.r,Ea.g,Ea.b,gb,F)};this.getClearAlpha=function(){return gb};this.setClearAlpha=function(a){gb=a;Y.buffers.color.setClear(Ea.r,Ea.g,Ea.b,gb,F)};this.clear=function(a,b,c){var d=0;if(void 0===a||a)d|=B.COLOR_BUFFER_BIT;if(void 0===b||b)d|=B.DEPTH_BUFFER_BIT;if(void 0===c||
c)d|=B.STENCIL_BUFFER_BIT;B.clear(d)};this.clearColor=function(){this.clear(!0,!1,!1)};this.clearDepth=function(){this.clear(!1,!0,!1)};this.clearStencil=function(){this.clear(!1,!1,!0)};this.clearTarget=function(a,b,c,d){this.setRenderTarget(a);this.clear(b,c,d)};this.resetGLState=c;this.dispose=function(){z=[];T=-1;aa=[];D=-1;y.removeEventListener("webglcontextlost",d,!1)};this.renderBufferImmediate=function(a,b,c){Y.initAttributes();var d=ha.get(a);a.hasPositions&&!d.position&&(d.position=B.createBuffer());
a.hasNormals&&!d.normal&&(d.normal=B.createBuffer());a.hasUvs&&!d.uv&&(d.uv=B.createBuffer());a.hasColors&&!d.color&&(d.color=B.createBuffer());b=b.getAttributes();a.hasPositions&&(B.bindBuffer(B.ARRAY_BUFFER,d.position),B.bufferData(B.ARRAY_BUFFER,a.positionArray,B.DYNAMIC_DRAW),Y.enableAttribute(b.position),B.vertexAttribPointer(b.position,3,B.FLOAT,!1,0,0));if(a.hasNormals){B.bindBuffer(B.ARRAY_BUFFER,d.normal);if(!c.isMeshPhongMaterial&&!c.isMeshStandardMaterial&&!c.isMeshNormalMaterial&&1===
c.shading)for(var e=0,f=3*a.count;e<f;e+=9){var g=a.normalArray,h=(g[e+0]+g[e+3]+g[e+6])/3,m=(g[e+1]+g[e+4]+g[e+7])/3,k=(g[e+2]+g[e+5]+g[e+8])/3;g[e+0]=h;g[e+1]=m;g[e+2]=k;g[e+3]=h;g[e+4]=m;g[e+5]=k;g[e+6]=h;g[e+7]=m;g[e+8]=k}B.bufferData(B.ARRAY_BUFFER,a.normalArray,B.DYNAMIC_DRAW);Y.enableAttribute(b.normal);B.vertexAttribPointer(b.normal,3,B.FLOAT,!1,0,0)}a.hasUvs&&c.map&&(B.bindBuffer(B.ARRAY_BUFFER,d.uv),B.bufferData(B.ARRAY_BUFFER,a.uvArray,B.DYNAMIC_DRAW),Y.enableAttribute(b.uv),B.vertexAttribPointer(b.uv,
2,B.FLOAT,!1,0,0));a.hasColors&&0!==c.vertexColors&&(B.bindBuffer(B.ARRAY_BUFFER,d.color),B.bufferData(B.ARRAY_BUFFER,a.colorArray,B.DYNAMIC_DRAW),Y.enableAttribute(b.color),B.vertexAttribPointer(b.color,3,B.FLOAT,!1,0,0));Y.disableUnusedAttributes();B.drawArrays(B.TRIANGLES,0,a.count);a.count=0};this.renderBufferDirect=function(a,b,c,d,e,f){l(d);var h=G(a,b,d,e),m=!1;a=c.id+"_"+h.id+"_"+d.wireframe;a!==V&&(V=a,m=!0);b=e.morphTargetInfluences;if(void 0!==b){var k=[];a=0;for(var n=b.length;a<n;a++)m=
b[a],k.push([m,a]);k.sort(g);8<k.length&&(k.length=8);var t=c.morphAttributes;a=0;for(n=k.length;a<n;a++)m=k[a],Q[a]=m[0],0!==m[0]?(b=m[1],!0===d.morphTargets&&t.position&&c.addAttribute("morphTarget"+a,t.position[b]),!0===d.morphNormals&&t.normal&&c.addAttribute("morphNormal"+a,t.normal[b])):(!0===d.morphTargets&&c.removeAttribute("morphTarget"+a),!0===d.morphNormals&&c.removeAttribute("morphNormal"+a));a=k.length;for(b=Q.length;a<b;a++)Q[a]=0;h.getUniforms().setValue(B,"morphTargetInfluences",Q);
m=!0}b=c.index;n=c.attributes.position;k=1;!0===d.wireframe&&(b=qa.getWireframeAttribute(c),k=2);null!==b?(a=Oa,a.setIndex(b)):a=La;if(m){a:{var m=void 0,p;if(c&&c.isInstancedBufferGeometry&&(p=ja.get("ANGLE_instanced_arrays"),null===p)){void 0;break a}void 0===m&&(m=0);Y.initAttributes();var t=c.attributes,h=h.getAttributes(),r=d.defaultAttributeValues,
q;for(q in h){var y=h[q];if(0<=y){var v=t[q];if(void 0!==v){var w=v.normalized,A=v.itemSize,K=qa.getAttributeProperties(v),C=K.__webglBuffer,L=K.type,K=K.bytesPerElement;if(v.isInterleavedBufferAttribute){var F=v.data,E=F.stride,v=v.offset;F&&F.isInstancedInterleavedBuffer?(Y.enableAttributeAndDivisor(y,F.meshPerAttribute,p),void 0===c.maxInstancedCount&&(c.maxInstancedCount=F.meshPerAttribute*F.count)):Y.enableAttribute(y);B.bindBuffer(B.ARRAY_BUFFER,C);B.vertexAttribPointer(y,A,L,w,E*K,(m*E+v)*
K)}else v.isInstancedBufferAttribute?(Y.enableAttributeAndDivisor(y,v.meshPerAttribute,p),void 0===c.maxInstancedCount&&(c.maxInstancedCount=v.meshPerAttribute*v.count)):Y.enableAttribute(y),B.bindBuffer(B.ARRAY_BUFFER,C),B.vertexAttribPointer(y,A,L,w,0,m*A*K)}else if(void 0!==r&&(w=r[q],void 0!==w))switch(w.length){case 2:B.vertexAttrib2fv(y,w);break;case 3:B.vertexAttrib3fv(y,w);break;case 4:B.vertexAttrib4fv(y,w);break;default:B.vertexAttrib1fv(y,w)}}}Y.disableUnusedAttributes()}null!==b&&B.bindBuffer(B.ELEMENT_ARRAY_BUFFER,
qa.getAttributeBuffer(b))}p=0;null!==b?p=b.count:void 0!==n&&(p=n.count);b=c.drawRange.start*k;n=null!==f?f.start*k:0;q=Math.max(b,n);f=Math.max(0,Math.min(p,b+c.drawRange.count*k,n+(null!==f?f.count*k:Infinity))-1-q+1);if(0!==f){if(e.isMesh)if(!0===d.wireframe)Y.setLineWidth(d.wireframeLinewidth*(null===W?Ra:1)),a.setMode(B.LINES);else switch(e.drawMode){case 0:a.setMode(B.TRIANGLES);break;case 1:a.setMode(B.TRIANGLE_STRIP);break;case 2:a.setMode(B.TRIANGLE_FAN)}else e.isLine?(d=d.linewidth,void 0===
d&&(d=1),Y.setLineWidth(d*(null===W?Ra:1)),e.isLineSegments?a.setMode(B.LINES):a.setMode(B.LINE_STRIP)):e.isPoints&&a.setMode(B.POINTS);c&&c.isInstancedBufferGeometry?0<c.maxInstancedCount&&a.renderInstances(c,q,f):a.render(q,f)}};this.render=function(a,b,c,d){if(void 0!==b&&!0!==b.isCamera)void 0;else{V="";R=-1;U=null;!0===a.autoUpdate&&a.updateMatrixWorld();null===b.parent&&b.updateMatrixWorld();b.matrixWorldInverse.getInverse(b.matrixWorld);
ua.multiplyMatrices(b.projectionMatrix,b.matrixWorldInverse);ma.setFromMatrix(ua);H.length=0;T=D=-1;M.length=0;O.length=0;ra=this.localClippingEnabled;oa=ca.init(this.clippingPlanes,ra,b);p(a,b);aa.length=D+1;z.length=T+1;!0===P.sortObjects&&(aa.sort(h),z.sort(m));oa&&ca.beginShadows();for(var e=H,f=0,g=0,k=e.length;g<k;g++){var t=e[g];t.castShadow&&(ba.shadows[f++]=t)}ba.shadows.length=f;Ma.render(a,b);for(var e=H,l=t=0,u=0,r,G,q,y,v=b.matrixWorldInverse,w=0,A=0,K=0,C=0,L=0,f=0,g=e.length;f<g;f++)if(k=
e[f],r=k.color,G=k.intensity,q=k.distance,y=k.shadow&&k.shadow.map?k.shadow.map.texture:null,k.isAmbientLight)t+=r.r*G,l+=r.g*G,u+=r.b*G;else if(k.isDirectionalLight){var E=za.get(k);E.color.copy(k.color).multiplyScalar(k.intensity);E.direction.setFromMatrixPosition(k.matrixWorld);Ga.setFromMatrixPosition(k.target.matrixWorld);E.direction.sub(Ga);E.direction.transformDirection(v);if(E.shadow=k.castShadow)E.shadowBias=k.shadow.bias,E.shadowRadius=k.shadow.radius,E.shadowMapSize=k.shadow.mapSize;ba.directionalShadowMap[w]=
y;ba.directionalShadowMatrix[w]=k.shadow.matrix;ba.directional[w++]=E}else if(k.isSpotLight){E=za.get(k);E.position.setFromMatrixPosition(k.matrixWorld);E.position.applyMatrix4(v);E.color.copy(r).multiplyScalar(G);E.distance=q;E.direction.setFromMatrixPosition(k.matrixWorld);Ga.setFromMatrixPosition(k.target.matrixWorld);E.direction.sub(Ga);E.direction.transformDirection(v);E.coneCos=Math.cos(k.angle);E.penumbraCos=Math.cos(k.angle*(1-k.penumbra));E.decay=0===k.distance?0:k.decay;if(E.shadow=k.castShadow)E.shadowBias=
k.shadow.bias,E.shadowRadius=k.shadow.radius,E.shadowMapSize=k.shadow.mapSize;ba.spotShadowMap[K]=y;ba.spotShadowMatrix[K]=k.shadow.matrix;ba.spot[K++]=E}else if(k.isRectAreaLight)E=za.get(k),E.color.copy(r).multiplyScalar(G/(k.width*k.height)),E.position.setFromMatrixPosition(k.matrixWorld),E.position.applyMatrix4(v),xa.identity(),Ba.copy(k.matrixWorld),Ba.premultiply(v),xa.extractRotation(Ba),E.halfWidth.set(.5*k.width,0,0),E.halfHeight.set(0,.5*k.height,0),E.halfWidth.applyMatrix4(xa),E.halfHeight.applyMatrix4(xa),
ba.rectArea[C++]=E;else if(k.isPointLight){E=za.get(k);E.position.setFromMatrixPosition(k.matrixWorld);E.position.applyMatrix4(v);E.color.copy(k.color).multiplyScalar(k.intensity);E.distance=k.distance;E.decay=0===k.distance?0:k.decay;if(E.shadow=k.castShadow)E.shadowBias=k.shadow.bias,E.shadowRadius=k.shadow.radius,E.shadowMapSize=k.shadow.mapSize;ba.pointShadowMap[A]=y;void 0===ba.pointShadowMatrix[A]&&(ba.pointShadowMatrix[A]=new S);Ga.setFromMatrixPosition(k.matrixWorld).negate();ba.pointShadowMatrix[A].identity().setPosition(Ga);
ba.point[A++]=E}else k.isHemisphereLight&&(E=za.get(k),E.direction.setFromMatrixPosition(k.matrixWorld),E.direction.transformDirection(v),E.direction.normalize(),E.skyColor.copy(k.color).multiplyScalar(G),E.groundColor.copy(k.groundColor).multiplyScalar(G),ba.hemi[L++]=E);ba.ambient[0]=t;ba.ambient[1]=l;ba.ambient[2]=u;ba.directional.length=w;ba.spot.length=K;ba.rectArea.length=C;ba.point.length=A;ba.hemi.length=L;ba.hash=w+","+A+","+K+","+C+","+L+","+ba.shadows.length;oa&&ca.endShadows();pa.calls=
0;pa.vertices=0;pa.faces=0;pa.points=0;void 0===c&&(c=null);this.setRenderTarget(c);e=a.background;null===e?Y.buffers.color.setClear(Ea.r,Ea.g,Ea.b,gb,F):e&&e.isColor&&(Y.buffers.color.setClear(e.r,e.g,e.b,1,F),d=!0);(this.autoClear||d)&&this.clear(this.autoClearColor,this.autoClearDepth,this.autoClearStencil);e&&e.isCubeTexture?(void 0===sa&&(sa=new Fa,va=new Aa(new kb(5,5,5),new Ha({uniforms:bb.cube.uniforms,vertexShader:bb.cube.vertexShader,fragmentShader:bb.cube.fragmentShader,side:1,depthTest:!1,
depthWrite:!1,fog:!1}))),sa.projectionMatrix.copy(b.projectionMatrix),sa.matrixWorld.extractRotation(b.matrixWorld),sa.matrixWorldInverse.getInverse(sa.matrixWorld),va.material.uniforms.tCube.value=e,va.modelViewMatrix.multiplyMatrices(sa.matrixWorldInverse,va.matrixWorld),qa.update(va),P.renderBufferDirect(sa,null,va.geometry,va.material,va,null)):e&&e.isTexture&&(void 0===Ia&&(Ia=new Jb(-1,1,1,-1,0,1),Ca=new Aa(new lb(2,2),new Ka({depthTest:!1,depthWrite:!1,fog:!1}))),Ca.material.map=e,qa.update(Ca),
P.renderBufferDirect(Ia,null,Ca.geometry,Ca.material,Ca,null));a.overrideMaterial?(d=a.overrideMaterial,n(aa,a,b,d),n(z,a,b,d)):(Y.setBlending(0),n(aa,a,b),n(z,a,b));Pa.render(a,b);Qa.render(a,b,Z);c&&ta.updateRenderTargetMipmap(c);Y.setDepthTest(!0);Y.setDepthWrite(!0);Y.setColorWrite(!0)}};this.setFaceCulling=function(a,b){Y.setCullFace(a);Y.setFlipSided(0===b)};this.allocTextureUnit=function(){var a=ea;a>=la.maxTextures&&void 0;ea+=1;return a};this.setTexture2D=function(){var a=!1;return function(b,c){b&&b.isWebGLRenderTarget&&(a||(void 0,a=!0),b=b.texture);ta.setTexture2D(b,c)}}();this.setTexture=function(){var a=!1;return function(b,c){a||(void 0,a=!0);ta.setTexture2D(b,c)}}();this.setTextureCube=function(){var a=
!1;return function(b,c){b&&b.isWebGLRenderTargetCube&&(a||(void 0,a=!0),b=b.texture);b&&b.isCubeTexture||Array.isArray(b.image)&&6===b.image.length?ta.setTextureCube(b,c):ta.setTextureCubeDynamic(b,c)}}();this.getCurrentRenderTarget=function(){return W};this.setRenderTarget=function(a){(W=a)&&void 0===ha.get(a).__webglFramebuffer&&ta.setupRenderTarget(a);var b=a&&a.isWebGLRenderTargetCube,
c;a?(c=ha.get(a),c=b?c.__webglFramebuffer[a.activeCubeFace]:c.__webglFramebuffer,X.copy(a.scissor),Sa=a.scissorTest,Z.copy(a.viewport)):(c=null,X.copy(ga).multiplyScalar(Ra),Sa=ka,Z.copy(ia).multiplyScalar(Ra));N!==c&&(B.bindFramebuffer(B.FRAMEBUFFER,c),N=c);Y.scissor(X);Y.setScissorTest(Sa);Y.viewport(Z);b&&(b=ha.get(a.texture),B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+a.activeCubeFace,b.__webglTexture,a.activeMipMapLevel))};this.readRenderTargetPixels=
function(a,b,c,d,e,f){if(!1===(a&&a.isWebGLRenderTarget))void 0;else{var g=ha.get(a).__webglFramebuffer;if(g){var h=!1;g!==N&&(B.bindFramebuffer(B.FRAMEBUFFER,g),h=!0);try{var k=a.texture,m=k.format,n=k.type;1023!==m&&w(m)!==B.getParameter(B.IMPLEMENTATION_COLOR_READ_FORMAT)?void 0:1009===
n||w(n)===B.getParameter(B.IMPLEMENTATION_COLOR_READ_TYPE)||1015===n&&(ja.get("OES_texture_float")||ja.get("WEBGL_color_buffer_float"))||1016===n&&ja.get("EXT_color_buffer_half_float")?B.checkFramebufferStatus(B.FRAMEBUFFER)===B.FRAMEBUFFER_COMPLETE?0<=b&&b<=a.width-d&&0<=c&&c<=a.height-e&&B.readPixels(b,c,d,e,w(m),w(n),f):void 0:void 0}finally{h&&
B.bindFramebuffer(B.FRAMEBUFFER,N)}}}}}function Kb(a,b){this.name="";this.color=new J(a);this.density=void 0!==b?b:2.5E-4}function Lb(a,b,c){this.name="";this.color=new J(a);this.near=void 0!==b?b:1;this.far=void 0!==c?c:1E3}function mb(){x.call(this);this.type="Scene";this.overrideMaterial=this.fog=this.background=null;this.autoUpdate=!0}function Zd(a,b,c,d,e){x.call(this);this.lensFlares=[];this.positionScreen=new q;this.customUpdateCallback=void 0;void 0!==a&&this.add(a,b,c,d,e)}function nb(a){X.call(this);
this.type="SpriteMaterial";this.color=new J(16777215);this.map=null;this.rotation=0;this.lights=this.fog=!1;this.setValues(a)}function Dc(a){x.call(this);this.type="Sprite";this.material=void 0!==a?a:new nb}function Ec(){x.call(this);this.type="LOD";Object.defineProperties(this,{levels:{enumerable:!0,value:[]}})}function od(a,b,c){this.useVertexTexture=void 0!==c?c:!0;this.identityMatrix=new S;a=a||[];this.bones=a.slice(0);this.useVertexTexture?(a=Math.sqrt(4*this.bones.length),a=N.nextPowerOfTwo(Math.ceil(a)),
this.boneTextureHeight=this.boneTextureWidth=a=Math.max(a,4),this.boneMatrices=new Float32Array(this.boneTextureWidth*this.boneTextureHeight*4),this.boneTexture=new eb(this.boneMatrices,this.boneTextureWidth,this.boneTextureHeight,1023,1015)):this.boneMatrices=new Float32Array(16*this.bones.length);if(void 0===b)this.calculateInverses();else if(this.bones.length===b.length)this.boneInverses=b.slice(0);else for(void 0,this.boneInverses=[],b=
0,a=this.bones.length;b<a;b++)this.boneInverses.push(new S)}function pd(){x.call(this);this.type="Bone"}function qd(a,b,c){Aa.call(this,a,b);this.type="SkinnedMesh";this.bindMode="attached";this.bindMatrix=new S;this.bindMatrixInverse=new S;a=[];if(this.geometry&&void 0!==this.geometry.bones){for(var d,e=0,f=this.geometry.bones.length;e<f;++e)d=this.geometry.bones[e],b=new pd,a.push(b),b.name=d.name,b.position.fromArray(d.pos),b.quaternion.fromArray(d.rotq),void 0!==d.scl&&b.scale.fromArray(d.scl);
e=0;for(f=this.geometry.bones.length;e<f;++e)d=this.geometry.bones[e],-1!==d.parent&&null!==d.parent&&void 0!==a[d.parent]?a[d.parent].add(a[e]):this.add(a[e])}this.normalizeSkinWeights();this.updateMatrixWorld(!0);this.bind(new od(a,void 0,c),this.matrixWorld)}function ia(a){X.call(this);this.type="LineBasicMaterial";this.color=new J(16777215);this.linewidth=1;this.linejoin=this.linecap="round";this.lights=!1;this.setValues(a)}function Ua(a,b,c){if(1===c)return void 0,
new ga(a,b);x.call(this);this.type="Line";this.geometry=void 0!==a?a:new I;this.material=void 0!==b?b:new ia({color:16777215*Math.random()})}function ga(a,b){Ua.call(this,a,b);this.type="LineSegments"}function Oa(a){X.call(this);this.type="PointsMaterial";this.color=new J(16777215);this.map=null;this.size=1;this.sizeAttenuation=!0;this.lights=!1;this.setValues(a)}function Mb(a,b){x.call(this);this.type="Points";this.geometry=void 0!==a?a:new I;this.material=void 0!==b?b:new Oa({color:16777215*Math.random()})}
function Fc(){x.call(this);this.type="Group"}function rd(a,b,c,d,e,f,g,h,m){function k(){requestAnimationFrame(k);a.readyState>=a.HAVE_CURRENT_DATA&&(t.needsUpdate=!0)}ea.call(this,a,b,c,d,e,f,g,h,m);this.generateMipmaps=!1;var t=this;k()}function Nb(a,b,c,d,e,f,g,h,m,k,t,p){ea.call(this,null,f,g,h,m,k,d,e,t,p);this.image={width:b,height:c};this.mipmaps=a;this.generateMipmaps=this.flipY=!1}function sd(a,b,c,d,e,f,g,h,m){ea.call(this,a,b,c,d,e,f,g,h,m);this.needsUpdate=!0}function Gc(a,b,c,d,e,f,g,
h,m,k){k=void 0!==k?k:1026;if(1026!==k&&1027!==k)throw Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");void 0===c&&1026===k&&(c=1012);void 0===c&&1027===k&&(c=1020);ea.call(this,null,d,e,f,g,h,k,c,m);this.image={width:a,height:b};this.magFilter=void 0!==g?g:1003;this.minFilter=void 0!==h?h:1003;this.generateMipmaps=this.flipY=!1}function Ob(a){function b(a,b){return a-b}I.call(this);this.type="WireframeGeometry";var c=[],d,e,f,g,h=[0,0],m={},k,t=["a","b",
"c"];if(a&&a.isGeometry){var p=a.faces;d=0;for(f=p.length;d<f;d++){var n=p[d];for(e=0;3>e;e++)h[0]=n[t[e]],h[1]=n[t[(e+1)%3]],h.sort(b),k=h.toString(),void 0===m[k]&&(m[k]={index1:h[0],index2:h[1]})}for(k in m)d=m[k],t=a.vertices[d.index1],c.push(t.x,t.y,t.z),t=a.vertices[d.index2],c.push(t.x,t.y,t.z)}else if(a&&a.isBufferGeometry){var l,t=new q;if(null!==a.index){p=a.attributes.position;n=a.index;l=a.groups;0===l.length&&a.addGroup(0,n.count);a=0;for(g=l.length;a<g;++a)for(d=l[a],e=d.start,f=d.count,
d=e,f=e+f;d<f;d+=3)for(e=0;3>e;e++)h[0]=n.getX(d+e),h[1]=n.getX(d+(e+1)%3),h.sort(b),k=h.toString(),void 0===m[k]&&(m[k]={index1:h[0],index2:h[1]});for(k in m)d=m[k],t.fromBufferAttribute(p,d.index1),c.push(t.x,t.y,t.z),t.fromBufferAttribute(p,d.index2),c.push(t.x,t.y,t.z)}else for(p=a.attributes.position,d=0,f=p.count/3;d<f;d++)for(e=0;3>e;e++)m=3*d+e,t.fromBufferAttribute(p,m),c.push(t.x,t.y,t.z),m=3*d+(e+1)%3,t.fromBufferAttribute(p,m),c.push(t.x,t.y,t.z)}this.addAttribute("position",new z(c,3))}
function Hc(a,b,c){T.call(this);this.type="ParametricGeometry";this.parameters={func:a,slices:b,stacks:c};this.fromBufferGeometry(new Pb(a,b,c));this.mergeVertices()}function Pb(a,b,c){I.call(this);this.type="ParametricBufferGeometry";this.parameters={func:a,slices:b,stacks:c};var d=[],e=[],f=[],g,h,m=b+1;for(g=0;g<=c;g++){var k=g/c;for(h=0;h<=b;h++){var t=h/b,p=a(t,k);e.push(p.x,p.y,p.z);f.push(t,k)}}for(g=0;g<c;g++)for(h=0;h<b;h++)a=g*m+h+1,k=(g+1)*m+h+1,t=(g+1)*m+h,d.push(g*m+h,a,t),d.push(a,k,
t);this.setIndex(d);this.addAttribute("position",new z(e,3));this.addAttribute("uv",new z(f,2));this.computeVertexNormals()}function Ic(a,b,c,d){T.call(this);this.type="PolyhedronGeometry";this.parameters={vertices:a,indices:b,radius:c,detail:d};this.fromBufferGeometry(new Ba(a,b,c,d));this.mergeVertices()}function Ba(a,b,c,d){function e(a){h.push(a.x,a.y,a.z)}function f(b,c){var d=3*b;c.x=a[d+0];c.y=a[d+1];c.z=a[d+2]}function g(a,b,c,d){0>d&&1===a.x&&(m[b]=a.x-1);0===c.x&&0===c.z&&(m[b]=d/2/Math.PI+
.5)}I.call(this);this.type="PolyhedronBufferGeometry";this.parameters={vertices:a,indices:b,radius:c,detail:d};c=c||1;var h=[],m=[];(function(a){for(var c=new q,d=new q,g=new q,h=0;h<b.length;h+=3){f(b[h+0],c);f(b[h+1],d);f(b[h+2],g);var m=c,l=d,A=g,w=Math.pow(2,a),y=[],K,v;for(K=0;K<=w;K++){y[K]=[];var E=m.clone().lerp(A,K/w),L=l.clone().lerp(A,K/w),C=w-K;for(v=0;v<=C;v++)y[K][v]=0===v&&K===w?E:E.clone().lerp(L,v/C)}for(K=0;K<w;K++)for(v=0;v<2*(w-K)-1;v++)m=Math.floor(v/2),0===v%2?(e(y[K][m+1]),
e(y[K+1][m]),e(y[K][m])):(e(y[K][m+1]),e(y[K+1][m+1]),e(y[K+1][m]))}})(d||0);(function(a){for(var b=new q,c=0;c<h.length;c+=3)b.x=h[c+0],b.y=h[c+1],b.z=h[c+2],b.normalize().multiplyScalar(a),h[c+0]=b.x,h[c+1]=b.y,h[c+2]=b.z})(c);(function(){for(var a=new q,b=0;b<h.length;b+=3)a.x=h[b+0],a.y=h[b+1],a.z=h[b+2],m.push(Math.atan2(a.z,-a.x)/2/Math.PI+.5,1-(Math.atan2(-a.y,Math.sqrt(a.x*a.x+a.z*a.z))/Math.PI+.5));for(var a=new q,b=new q,c=new q,d=new q,e=new D,f=new D,l=new D,A=0,w=0;A<h.length;A+=9,w+=
6){a.set(h[A+0],h[A+1],h[A+2]);b.set(h[A+3],h[A+4],h[A+5]);c.set(h[A+6],h[A+7],h[A+8]);e.set(m[w+0],m[w+1]);f.set(m[w+2],m[w+3]);l.set(m[w+4],m[w+5]);d.copy(a).add(b).add(c).divideScalar(3);var y=Math.atan2(d.z,-d.x);g(e,w+0,a,y);g(f,w+2,b,y);g(l,w+4,c,y)}for(a=0;a<m.length;a+=6)b=m[a+0],c=m[a+2],d=m[a+4],e=Math.min(b,c,d),.9<Math.max(b,c,d)&&.1>e&&(.2>b&&(m[a+0]+=1),.2>c&&(m[a+2]+=1),.2>d&&(m[a+4]+=1))})();this.addAttribute("position",new z(h,3));this.addAttribute("normal",new z(h.slice(),3));this.addAttribute("uv",
new z(m,2));this.normalizeNormals()}function Jc(a,b){T.call(this);this.type="TetrahedronGeometry";this.parameters={radius:a,detail:b};this.fromBufferGeometry(new Qb(a,b));this.mergeVertices()}function Qb(a,b){Ba.call(this,[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],[2,1,0,0,3,2,1,3,0,2,3,1],a,b);this.type="TetrahedronBufferGeometry";this.parameters={radius:a,detail:b}}function Kc(a,b){T.call(this);this.type="OctahedronGeometry";this.parameters={radius:a,detail:b};this.fromBufferGeometry(new ob(a,b));this.mergeVertices()}
function ob(a,b){Ba.call(this,[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],a,b);this.type="OctahedronBufferGeometry";this.parameters={radius:a,detail:b}}function Lc(a,b){T.call(this);this.type="IcosahedronGeometry";this.parameters={radius:a,detail:b};this.fromBufferGeometry(new Rb(a,b));this.mergeVertices()}function Rb(a,b){var c=(1+Math.sqrt(5))/2;Ba.call(this,[-1,c,0,1,c,0,-1,-c,0,1,-c,0,0,-1,c,0,1,c,0,-1,-c,0,1,-c,c,0,-1,c,0,1,-c,0,-1,-c,0,1],[0,11,
5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],a,b);this.type="IcosahedronBufferGeometry";this.parameters={radius:a,detail:b}}function Mc(a,b){T.call(this);this.type="DodecahedronGeometry";this.parameters={radius:a,detail:b};this.fromBufferGeometry(new Sb(a,b));this.mergeVertices()}function Sb(a,b){var c=(1+Math.sqrt(5))/2,d=1/c;Ba.call(this,[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-d,-c,0,-d,c,0,
d,-c,0,d,c,-d,-c,0,-d,c,0,d,-c,0,d,c,0,-c,0,-d,c,0,-d,-c,0,d,c,0,d],[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9],a,b);this.type="DodecahedronBufferGeometry";this.parameters={radius:a,detail:b}}function Nc(a,b,c,d,e,f){T.call(this);this.type="TubeGeometry";this.parameters={path:a,
tubularSegments:b,radius:c,radialSegments:d,closed:e};void 0!==f&&void 0;a=new Tb(a,b,c,d,e);this.tangents=a.tangents;this.normals=a.normals;this.binormals=a.binormals;this.fromBufferGeometry(a);this.mergeVertices()}function Tb(a,b,c,d,e){function f(e){var f=a.getPointAt(e/b),k=g.normals[e];e=g.binormals[e];for(p=0;p<=d;p++){var t=p/d*Math.PI*2,r=Math.sin(t),t=-Math.cos(t);m.x=t*k.x+r*e.x;m.y=t*k.y+r*e.y;m.z=t*k.z+r*e.z;m.normalize();l.push(m.x,
m.y,m.z);h.x=f.x+c*m.x;h.y=f.y+c*m.y;h.z=f.z+c*m.z;n.push(h.x,h.y,h.z)}}I.call(this);this.type="TubeBufferGeometry";this.parameters={path:a,tubularSegments:b,radius:c,radialSegments:d,closed:e};b=b||64;c=c||1;d=d||8;e=e||!1;var g=a.computeFrenetFrames(b,e);this.tangents=g.tangents;this.normals=g.normals;this.binormals=g.binormals;var h=new q,m=new q,k=new D,t,p,n=[],l=[],G=[],r=[];for(t=0;t<b;t++)f(t);f(!1===e?b:0);for(t=0;t<=b;t++)for(p=0;p<=d;p++)k.x=t/b,k.y=p/d,G.push(k.x,k.y);(function(){for(p=
1;p<=b;p++)for(t=1;t<=d;t++){var a=(d+1)*p+(t-1),c=(d+1)*p+t,e=(d+1)*(p-1)+t;r.push((d+1)*(p-1)+(t-1),a,e);r.push(a,c,e)}})();this.setIndex(r);this.addAttribute("position",new z(n,3));this.addAttribute("normal",new z(l,3));this.addAttribute("uv",new z(G,2))}function Oc(a,b,c,d,e,f,g){T.call(this);this.type="TorusKnotGeometry";this.parameters={radius:a,tube:b,tubularSegments:c,radialSegments:d,p:e,q:f};void 0!==g&&void 0;
this.fromBufferGeometry(new Ub(a,b,c,d,e,f));this.mergeVertices()}function Ub(a,b,c,d,e,f){function g(a,b,c,d,e){var f=Math.sin(a);b=c/b*a;c=Math.cos(b);e.x=d*(2+c)*.5*Math.cos(a);e.y=d*(2+c)*f*.5;e.z=d*Math.sin(b)*.5}I.call(this);this.type="TorusKnotBufferGeometry";this.parameters={radius:a,tube:b,tubularSegments:c,radialSegments:d,p:e,q:f};a=a||100;b=b||40;c=Math.floor(c)||64;d=Math.floor(d)||8;e=e||2;f=f||3;var h=[],m=[],k=[],t=[],p,n,l=new q,G=new q;new D;var r=new q,A=new q,w=new q,y=new q,K=
new q;for(p=0;p<=c;++p)for(n=p/c*e*Math.PI*2,g(n,e,f,a,r),g(n+.01,e,f,a,A),y.subVectors(A,r),K.addVectors(A,r),w.crossVectors(y,K),K.crossVectors(w,y),w.normalize(),K.normalize(),n=0;n<=d;++n){var v=n/d*Math.PI*2,E=-b*Math.cos(v),v=b*Math.sin(v);l.x=r.x+(E*K.x+v*w.x);l.y=r.y+(E*K.y+v*w.y);l.z=r.z+(E*K.z+v*w.z);m.push(l.x,l.y,l.z);G.subVectors(l,r).normalize();k.push(G.x,G.y,G.z);t.push(p/c);t.push(n/d)}for(n=1;n<=c;n++)for(p=1;p<=d;p++)a=(d+1)*n+(p-1),b=(d+1)*n+p,e=(d+1)*(n-1)+p,h.push((d+1)*(n-1)+
(p-1),a,e),h.push(a,b,e);this.setIndex(h);this.addAttribute("position",new z(m,3));this.addAttribute("normal",new z(k,3));this.addAttribute("uv",new z(t,2))}function Pc(a,b,c,d,e){T.call(this);this.type="TorusGeometry";this.parameters={radius:a,tube:b,radialSegments:c,tubularSegments:d,arc:e};this.fromBufferGeometry(new Vb(a,b,c,d,e))}function Vb(a,b,c,d,e){I.call(this);this.type="TorusBufferGeometry";this.parameters={radius:a,tube:b,radialSegments:c,tubularSegments:d,arc:e};a=a||100;b=b||40;c=Math.floor(c)||
8;d=Math.floor(d)||6;e=e||2*Math.PI;var f=[],g=[],h=[],m=[],k=new q,t=new q,p=new q,n,l;for(n=0;n<=c;n++)for(l=0;l<=d;l++){var G=l/d*e,r=n/c*Math.PI*2;t.x=(a+b*Math.cos(r))*Math.cos(G);t.y=(a+b*Math.cos(r))*Math.sin(G);t.z=b*Math.sin(r);g.push(t.x,t.y,t.z);k.x=a*Math.cos(G);k.y=a*Math.sin(G);p.subVectors(t,k).normalize();h.push(p.x,p.y,p.z);m.push(l/d);m.push(n/c)}for(n=1;n<=c;n++)for(l=1;l<=d;l++)a=(d+1)*(n-1)+l-1,b=(d+1)*(n-1)+l,e=(d+1)*n+l,f.push((d+1)*n+l-1,a,e),f.push(a,b,e);this.setIndex(f);
this.addAttribute("position",new z(g,3));this.addAttribute("normal",new z(h,3));this.addAttribute("uv",new z(m,2))}function La(a,b){"undefined"!==typeof a&&(T.call(this),this.type="ExtrudeGeometry",a=Array.isArray(a)?a:[a],this.addShapeList(a,b),this.computeFaceNormals())}function Qc(a,b){b=b||{};var c=b.font;if(!1===(c&&c.isFont))return void 0,new T;c=c.generateShapes(a,b.size,b.curveSegments);b.amount=void 0!==b.height?
b.height:50;void 0===b.bevelThickness&&(b.bevelThickness=10);void 0===b.bevelSize&&(b.bevelSize=8);void 0===b.bevelEnabled&&(b.bevelEnabled=!1);La.call(this,c,b);this.type="TextGeometry"}function Rc(a,b,c,d,e,f,g){T.call(this);this.type="SphereGeometry";this.parameters={radius:a,widthSegments:b,heightSegments:c,phiStart:d,phiLength:e,thetaStart:f,thetaLength:g};this.fromBufferGeometry(new pb(a,b,c,d,e,f,g))}function pb(a,b,c,d,e,f,g){I.call(this);this.type="SphereBufferGeometry";this.parameters={radius:a,
widthSegments:b,heightSegments:c,phiStart:d,phiLength:e,thetaStart:f,thetaLength:g};a=a||50;b=Math.max(3,Math.floor(b)||8);c=Math.max(2,Math.floor(c)||6);d=void 0!==d?d:0;e=void 0!==e?e:2*Math.PI;f=void 0!==f?f:0;g=void 0!==g?g:Math.PI;var h=f+g,m,k,t=0,p=[],n=new q,l=new q,G=[],r=[],A=[],w=[];for(k=0;k<=c;k++){var y=[],K=k/c;for(m=0;m<=b;m++){var v=m/b;n.x=-a*Math.cos(d+v*e)*Math.sin(f+K*g);n.y=a*Math.cos(f+K*g);n.z=a*Math.sin(d+v*e)*Math.sin(f+K*g);r.push(n.x,n.y,n.z);l.set(n.x,n.y,n.z).normalize();
A.push(l.x,l.y,l.z);w.push(v,1-K);y.push(t++)}p.push(y)}for(k=0;k<c;k++)for(m=0;m<b;m++)a=p[k][m+1],d=p[k][m],e=p[k+1][m],g=p[k+1][m+1],(0!==k||0<f)&&G.push(a,d,g),(k!==c-1||h<Math.PI)&&G.push(d,e,g);this.setIndex(G);this.addAttribute("position",new z(r,3));this.addAttribute("normal",new z(A,3));this.addAttribute("uv",new z(w,2))}function Sc(a,b,c,d,e,f){T.call(this);this.type="RingGeometry";this.parameters={innerRadius:a,outerRadius:b,thetaSegments:c,phiSegments:d,thetaStart:e,thetaLength:f};this.fromBufferGeometry(new Wb(a,
b,c,d,e,f))}function Wb(a,b,c,d,e,f){I.call(this);this.type="RingBufferGeometry";this.parameters={innerRadius:a,outerRadius:b,thetaSegments:c,phiSegments:d,thetaStart:e,thetaLength:f};a=a||20;b=b||50;e=void 0!==e?e:0;f=void 0!==f?f:2*Math.PI;c=void 0!==c?Math.max(3,c):8;d=void 0!==d?Math.max(1,d):1;var g=[],h=[],m=[],k=[],t=a,p=(b-a)/d,n=new q,l=new D,G,r;for(G=0;G<=d;G++){for(r=0;r<=c;r++)a=e+r/c*f,n.x=t*Math.cos(a),n.y=t*Math.sin(a),h.push(n.x,n.y,n.z),m.push(0,0,1),l.x=(n.x/b+1)/2,l.y=(n.y/b+1)/
2,k.push(l.x,l.y);t+=p}for(G=0;G<d;G++)for(b=G*(c+1),r=0;r<c;r++)a=r+b,e=a+c+1,f=a+c+2,t=a+1,g.push(a,e,t),g.push(e,f,t);this.setIndex(g);this.addAttribute("position",new z(h,3));this.addAttribute("normal",new z(m,3));this.addAttribute("uv",new z(k,2))}function Tc(a,b,c,d){T.call(this);this.type="LatheGeometry";this.parameters={points:a,segments:b,phiStart:c,phiLength:d};this.fromBufferGeometry(new Xb(a,b,c,d));this.mergeVertices()}function Xb(a,b,c,d){I.call(this);this.type="LatheBufferGeometry";
this.parameters={points:a,segments:b,phiStart:c,phiLength:d};b=Math.floor(b)||12;c=c||0;d=d||2*Math.PI;d=N.clamp(d,0,2*Math.PI);var e=[],f=[],g=[],h=1/b,m=new q,k=new D,t,p;for(t=0;t<=b;t++){p=c+t*h*d;var n=Math.sin(p),l=Math.cos(p);for(p=0;p<=a.length-1;p++)m.x=a[p].x*n,m.y=a[p].y,m.z=a[p].x*l,f.push(m.x,m.y,m.z),k.x=t/b,k.y=p/(a.length-1),g.push(k.x,k.y)}for(t=0;t<b;t++)for(p=0;p<a.length-1;p++)c=p+t*a.length,h=c+a.length,m=c+a.length+1,k=c+1,e.push(c,h,k),e.push(h,m,k);this.setIndex(e);this.addAttribute("position",
new z(f,3));this.addAttribute("uv",new z(g,2));this.computeVertexNormals();if(d===2*Math.PI)for(d=this.attributes.normal.array,e=new q,f=new q,g=new q,c=b*a.length*3,p=t=0;t<a.length;t++,p+=3)e.x=d[p+0],e.y=d[p+1],e.z=d[p+2],f.x=d[c+p+0],f.y=d[c+p+1],f.z=d[c+p+2],g.addVectors(e,f).normalize(),d[p+0]=d[c+p+0]=g.x,d[p+1]=d[c+p+1]=g.y,d[p+2]=d[c+p+2]=g.z}function Yb(a,b){T.call(this);this.type="ShapeGeometry";"object"===typeof b&&(void 0,
b=b.curveSegments);this.parameters={shapes:a,curveSegments:b};this.fromBufferGeometry(new Zb(a,b));this.mergeVertices()}function Zb(a,b){function c(a){var c,h,k=e.length/3;a=a.extractPoints(b);var l=a.shape,r=a.holes;if(!1===Ia.isClockWise(l))for(l=l.reverse(),a=0,c=r.length;a<c;a++)h=r[a],!0===Ia.isClockWise(h)&&(r[a]=h.reverse());var q=Ia.triangulateShape(l,r);a=0;for(c=r.length;a<c;a++)h=r[a],l=l.concat(h);a=0;for(c=l.length;a<c;a++)h=l[a],e.push(h.x,h.y,0),f.push(0,0,1),g.push(h.x,h.y);a=0;for(c=
q.length;a<c;a++)l=q[a],d.push(l[0]+k,l[1]+k,l[2]+k),m+=3}I.call(this);this.type="ShapeBufferGeometry";this.parameters={shapes:a,curveSegments:b};b=b||12;var d=[],e=[],f=[],g=[],h=0,m=0;if(!1===Array.isArray(a))c(a);else for(var k=0;k<a.length;k++)c(a[k]),this.addGroup(h,m,k),h+=m,m=0;this.setIndex(d);this.addAttribute("position",new z(e,3));this.addAttribute("normal",new z(f,3));this.addAttribute("uv",new z(g,2))}function $b(a,b){function c(a,b){return a-b}I.call(this);this.type="EdgesGeometry";
this.parameters={thresholdAngle:b};var d=[],e=Math.cos(N.DEG2RAD*(void 0!==b?b:1)),f=[0,0],g={},h,m=["a","b","c"],k;a.isBufferGeometry?(k=new T,k.fromBufferGeometry(a)):k=a.clone();k.mergeVertices();k.computeFaceNormals();var t=k.vertices;k=k.faces;for(var p=0,n=k.length;p<n;p++)for(var l=k[p],q=0;3>q;q++)f[0]=l[m[q]],f[1]=l[m[(q+1)%3]],f.sort(c),h=f.toString(),void 0===g[h]?g[h]={index1:f[0],index2:f[1],face1:p,face2:void 0}:g[h].face2=p;for(h in g)if(f=g[h],void 0===f.face2||k[f.face1].normal.dot(k[f.face2].normal)<=
e)m=t[f.index1],d.push(m.x,m.y,m.z),m=t[f.index2],d.push(m.x,m.y,m.z);this.addAttribute("position",new z(d,3))}function qb(a,b,c,d,e,f,g,h){T.call(this);this.type="CylinderGeometry";this.parameters={radiusTop:a,radiusBottom:b,height:c,radialSegments:d,heightSegments:e,openEnded:f,thetaStart:g,thetaLength:h};this.fromBufferGeometry(new Va(a,b,c,d,e,f,g,h));this.mergeVertices()}function Va(a,b,c,d,e,f,g,h){function m(c){var e,f,m,r=new D,C=new q,F=0,x=!0===c?a:b,H=!0===c?1:-1;f=G;for(e=1;e<=d;e++)p.push(0,
A*H,0),n.push(0,H,0),l.push(.5,.5),G++;m=G;for(e=0;e<=d;e++){var aa=e/d*h+g,z=Math.cos(aa),aa=Math.sin(aa);C.x=x*aa;C.y=A*H;C.z=x*z;p.push(C.x,C.y,C.z);n.push(0,H,0);r.x=.5*z+.5;r.y=.5*aa*H+.5;l.push(r.x,r.y);G++}for(e=0;e<d;e++)r=f+e,C=m+e,!0===c?t.push(C,C+1,r):t.push(C+1,C,r),F+=3;k.addGroup(w,F,!0===c?1:2);w+=F}I.call(this);this.type="CylinderBufferGeometry";this.parameters={radiusTop:a,radiusBottom:b,height:c,radialSegments:d,heightSegments:e,openEnded:f,thetaStart:g,thetaLength:h};var k=this;
a=void 0!==a?a:20;b=void 0!==b?b:20;c=void 0!==c?c:100;d=Math.floor(d)||8;e=Math.floor(e)||1;f=void 0!==f?f:!1;g=void 0!==g?g:0;h=void 0!==h?h:2*Math.PI;var t=[],p=[],n=[],l=[],G=0,r=[],A=c/2,w=0;(function(){var f,m,v=new q,E=new q,L=0,C=(b-a)/c;for(m=0;m<=e;m++){var F=[],x=m/e,H=x*(b-a)+a;for(f=0;f<=d;f++){var D=f/d,z=D*h+g,J=Math.sin(z),z=Math.cos(z);E.x=H*J;E.y=-x*c+A;E.z=H*z;p.push(E.x,E.y,E.z);v.set(J,C,z).normalize();n.push(v.x,v.y,v.z);l.push(D,1-x);F.push(G++)}r.push(F)}for(f=0;f<d;f++)for(m=
0;m<e;m++)v=r[m+1][f],E=r[m+1][f+1],C=r[m][f+1],t.push(r[m][f],v,C),t.push(v,E,C),L+=6;k.addGroup(w,L,0);w+=L})();!1===f&&(0<a&&m(!0),0<b&&m(!1));this.setIndex(t);this.addAttribute("position",new z(p,3));this.addAttribute("normal",new z(n,3));this.addAttribute("uv",new z(l,2))}function Uc(a,b,c,d,e,f,g){qb.call(this,0,a,b,c,d,e,f,g);this.type="ConeGeometry";this.parameters={radius:a,height:b,radialSegments:c,heightSegments:d,openEnded:e,thetaStart:f,thetaLength:g}}function Vc(a,b,c,d,e,f,g){Va.call(this,
0,a,b,c,d,e,f,g);this.type="ConeBufferGeometry";this.parameters={radius:a,height:b,radialSegments:c,heightSegments:d,openEnded:e,thetaStart:f,thetaLength:g}}function Wc(a,b,c,d){T.call(this);this.type="CircleGeometry";this.parameters={radius:a,segments:b,thetaStart:c,thetaLength:d};this.fromBufferGeometry(new ac(a,b,c,d))}function ac(a,b,c,d){I.call(this);this.type="CircleBufferGeometry";this.parameters={radius:a,segments:b,thetaStart:c,thetaLength:d};a=a||50;b=void 0!==b?Math.max(3,b):8;c=void 0!==
c?c:0;d=void 0!==d?d:2*Math.PI;var e=[],f=[],g=[],h=[],m,k,t=new q,p=new D;f.push(0,0,0);g.push(0,0,1);h.push(.5,.5);k=0;for(m=3;k<=b;k++,m+=3){var n=c+k/b*d;t.x=a*Math.cos(n);t.y=a*Math.sin(n);f.push(t.x,t.y,t.z);g.push(0,0,1);p.x=(f[m]/a+1)/2;p.y=(f[m+1]/a+1)/2;h.push(p.x,p.y)}for(m=1;m<=b;m++)e.push(m,m+1,0);this.setIndex(e);this.addAttribute("position",new z(f,3));this.addAttribute("normal",new z(g,3));this.addAttribute("uv",new z(h,2))}function bc(){Ha.call(this,{uniforms:Ja.merge([V.lights,
{opacity:{value:1}}]),vertexShader:Z.shadow_vert,fragmentShader:Z.shadow_frag});this.transparent=this.lights=!0;Object.defineProperties(this,{opacity:{enumerable:!0,get:function(){return this.uniforms.opacity.value},set:function(a){this.uniforms.opacity.value=a}}})}function cc(a){Ha.call(this,a);this.type="RawShaderMaterial"}function Xc(a){this.uuid=N.generateUUID();this.type="MultiMaterial";this.materials=Array.isArray(a)?a:[];this.visible=!0}function Qa(a){X.call(this);this.defines={STANDARD:""};
this.type="MeshStandardMaterial";this.color=new J(16777215);this.metalness=this.roughness=.5;this.lightMap=this.map=null;this.lightMapIntensity=1;this.aoMap=null;this.aoMapIntensity=1;this.emissive=new J(0);this.emissiveIntensity=1;this.bumpMap=this.emissiveMap=null;this.bumpScale=1;this.normalMap=null;this.normalScale=new D(1,1);this.displacementMap=null;this.displacementScale=1;this.displacementBias=0;this.envMap=this.alphaMap=this.metalnessMap=this.roughnessMap=null;this.envMapIntensity=1;this.refractionRatio=
.98;this.wireframe=!1;this.wireframeLinewidth=1;this.wireframeLinejoin=this.wireframeLinecap="round";this.morphNormals=this.morphTargets=this.skinning=!1;this.setValues(a)}function rb(a){Qa.call(this);this.defines={PHYSICAL:""};this.type="MeshPhysicalMaterial";this.reflectivity=.5;this.clearCoatRoughness=this.clearCoat=0;this.setValues(a)}function Ca(a){X.call(this);this.type="MeshPhongMaterial";this.color=new J(16777215);this.specular=new J(1118481);this.shininess=30;this.lightMap=this.map=null;
this.lightMapIntensity=1;this.aoMap=null;this.aoMapIntensity=1;this.emissive=new J(0);this.emissiveIntensity=1;this.bumpMap=this.emissiveMap=null;this.bumpScale=1;this.normalMap=null;this.normalScale=new D(1,1);this.displacementMap=null;this.displacementScale=1;this.displacementBias=0;this.envMap=this.alphaMap=this.specularMap=null;this.combine=0;this.reflectivity=1;this.refractionRatio=.98;this.wireframe=!1;this.wireframeLinewidth=1;this.wireframeLinejoin=this.wireframeLinecap="round";this.morphNormals=
this.morphTargets=this.skinning=!1;this.setValues(a)}function sb(a){Ca.call(this);this.defines={TOON:""};this.type="MeshToonMaterial";this.gradientMap=null;this.setValues(a)}function tb(a){X.call(this,a);this.type="MeshNormalMaterial";this.bumpMap=null;this.bumpScale=1;this.normalMap=null;this.normalScale=new D(1,1);this.displacementMap=null;this.displacementScale=1;this.displacementBias=0;this.wireframe=!1;this.wireframeLinewidth=1;this.morphNormals=this.morphTargets=this.skinning=this.lights=this.fog=
!1;this.setValues(a)}function ub(a){X.call(this);this.type="MeshLambertMaterial";this.color=new J(16777215);this.lightMap=this.map=null;this.lightMapIntensity=1;this.aoMap=null;this.aoMapIntensity=1;this.emissive=new J(0);this.emissiveIntensity=1;this.envMap=this.alphaMap=this.specularMap=this.emissiveMap=null;this.combine=0;this.reflectivity=1;this.refractionRatio=.98;this.wireframe=!1;this.wireframeLinewidth=1;this.wireframeLinejoin=this.wireframeLinecap="round";this.morphNormals=this.morphTargets=
this.skinning=!1;this.setValues(a)}function vb(a){X.call(this);this.type="LineDashedMaterial";this.color=new J(16777215);this.scale=this.linewidth=1;this.dashSize=3;this.gapSize=1;this.lights=!1;this.setValues(a)}function $d(a,b,c){var d=this,e=!1,f=0,g=0;this.onStart=void 0;this.onLoad=a;this.onProgress=b;this.onError=c;this.itemStart=function(a){g++;if(!1===e&&void 0!==d.onStart)d.onStart(a,f,g);e=!0};this.itemEnd=function(a){f++;if(void 0!==d.onProgress)d.onProgress(a,f,g);if(f===g&&(e=!1,void 0!==
d.onLoad))d.onLoad()};this.itemError=function(a){if(void 0!==d.onError)d.onError(a)}}function sa(a){this.manager=void 0!==a?a:ta}function Re(a){this.manager=void 0!==a?a:ta;this._parser=null}function ae(a){this.manager=void 0!==a?a:ta;this._parser=null}function Yc(a){this.manager=void 0!==a?a:ta}function be(a){this.manager=void 0!==a?a:ta}function td(a){this.manager=void 0!==a?a:ta}function ma(a,b){x.call(this);this.type="Light";this.color=new J(a);this.intensity=void 0!==b?b:1;this.receiveShadow=
void 0}function ud(a,b,c){ma.call(this,a,c);this.type="HemisphereLight";this.castShadow=void 0;this.position.copy(x.DefaultUp);this.updateMatrix();this.groundColor=new J(b)}function wb(a){this.camera=a;this.bias=0;this.radius=1;this.mapSize=new D(512,512);this.map=null;this.matrix=new S}function vd(){wb.call(this,new Fa(50,1,.5,500))}function wd(a,b,c,d,e,f){ma.call(this,a,b);this.type="SpotLight";this.position.copy(x.DefaultUp);this.updateMatrix();this.target=new x;Object.defineProperty(this,"power",
{get:function(){return this.intensity*Math.PI},set:function(a){this.intensity=a/Math.PI}});this.distance=void 0!==c?c:0;this.angle=void 0!==d?d:Math.PI/3;this.penumbra=void 0!==e?e:0;this.decay=void 0!==f?f:1;this.shadow=new vd}function xd(a,b,c,d){ma.call(this,a,b);this.type="PointLight";Object.defineProperty(this,"power",{get:function(){return 4*this.intensity*Math.PI},set:function(a){this.intensity=a/(4*Math.PI)}});this.distance=void 0!==c?c:0;this.decay=void 0!==d?d:1;this.shadow=new wb(new Fa(90,
1,.5,500))}function yd(){wb.call(this,new Jb(-5,5,5,-5,.5,500))}function zd(a,b){ma.call(this,a,b);this.type="DirectionalLight";this.position.copy(x.DefaultUp);this.updateMatrix();this.target=new x;this.shadow=new yd}function Ad(a,b){ma.call(this,a,b);this.type="AmbientLight";this.castShadow=void 0}function xa(a,b,c,d){this.parameterPositions=a;this._cachedIndex=0;this.resultBuffer=void 0!==d?d:new b.constructor(c);this.sampleValues=b;this.valueSize=c}function Bd(a,b,c,d){xa.call(this,a,b,c,d);this._offsetNext=
this._weightNext=this._offsetPrev=this._weightPrev=-0}function Zc(a,b,c,d){xa.call(this,a,b,c,d)}function Cd(a,b,c,d){xa.call(this,a,b,c,d)}function xb(a,b,c,d){if(void 0===a)throw Error("track name is undefined");if(void 0===b||0===b.length)throw Error("no keyframes in track named "+a);this.name=a;this.times=na.convertArray(b,this.TimeBufferType);this.values=na.convertArray(c,this.ValueBufferType);this.setInterpolation(d||this.DefaultInterpolation);this.validate();this.optimize()}function dc(a,b,
c,d){xb.call(this,a,b,c,d)}function Dd(a,b,c,d){xa.call(this,a,b,c,d)}function $c(a,b,c,d){xb.call(this,a,b,c,d)}function ec(a,b,c,d){xb.call(this,a,b,c,d)}function Ed(a,b,c,d){xb.call(this,a,b,c,d)}function Fd(a,b,c){xb.call(this,a,b,c)}function Gd(a,b,c,d){xb.call(this,a,b,c,d)}function yb(a,b,c,d){xb.apply(this,arguments)}function qa(a,b,c){this.name=a;this.tracks=c;this.duration=void 0!==b?b:-1;this.uuid=N.generateUUID();0>this.duration&&this.resetDuration();this.optimize()}function Hd(a){this.manager=
void 0!==a?a:ta;this.textures={}}function ce(a){this.manager=void 0!==a?a:ta}function zb(){this.onLoadStart=function(){};this.onLoadProgress=function(){};this.onLoadComplete=function(){}}function de(a){"boolean"===typeof a&&(void 0,a=void 0);this.manager=void 0!==a?a:ta;this.withCredentials=!1}function Se(a){this.manager=void 0!==a?a:ta;this.texturePath=""}function Te(a,b,c,d,e){b=.5*(d-b);e=.5*(e-c);var f=a*a;return(2*
c-2*d+b+e)*a*f+(-3*c+3*d-2*b-e)*f+b*a+c}function Ab(a,b,c,d){var e=1-a;return e*e*b+2*(1-a)*a*c+a*a*d}function Bb(a,b,c,d,e){var f=1-a,g=1-a;return f*f*f*b+3*g*g*a*c+3*(1-a)*a*a*d+a*a*a*e}function ua(){}function Ta(a,b){this.v1=a;this.v2=b}function ad(){this.curves=[];this.autoClose=!1}function Wa(a,b,c,d,e,f,g,h){this.aX=a;this.aY=b;this.xRadius=c;this.yRadius=d;this.aStartAngle=e;this.aEndAngle=f;this.aClockwise=g;this.aRotation=h||0}function Cb(a){this.points=void 0===a?[]:a}function fc(a,b,c,
d){this.v0=a;this.v1=b;this.v2=c;this.v3=d}function gc(a,b,c){this.v0=a;this.v1=b;this.v2=c}function bd(a){ad.call(this);this.currentPoint=new D;a&&this.fromPoints(a)}function Db(){bd.apply(this,arguments);this.holes=[]}function ee(){this.subPaths=[];this.currentPath=null}function fe(a){this.data=a}function Ue(a){this.manager=void 0!==a?a:ta}function ge(a){this.manager=void 0!==a?a:ta}function he(a,b,c,d){ma.call(this,a,b);this.type="RectAreaLight";this.position.set(0,1,0);this.updateMatrix();this.width=
void 0!==c?c:10;this.height=void 0!==d?d:10}function Ve(){this.type="StereoCamera";this.aspect=1;this.eyeSep=.064;this.cameraL=new Fa;this.cameraL.layers.enable(1);this.cameraL.matrixAutoUpdate=!1;this.cameraR=new Fa;this.cameraR.layers.enable(2);this.cameraR.matrixAutoUpdate=!1}function Id(a,b,c){x.call(this);this.type="CubeCamera";var d=new Fa(90,1,a,b);d.up.set(0,-1,0);d.lookAt(new q(1,0,0));this.add(d);var e=new Fa(90,1,a,b);e.up.set(0,-1,0);e.lookAt(new q(-1,0,0));this.add(e);var f=new Fa(90,
1,a,b);f.up.set(0,0,1);f.lookAt(new q(0,1,0));this.add(f);var g=new Fa(90,1,a,b);g.up.set(0,0,-1);g.lookAt(new q(0,-1,0));this.add(g);var h=new Fa(90,1,a,b);h.up.set(0,-1,0);h.lookAt(new q(0,0,1));this.add(h);var m=new Fa(90,1,a,b);m.up.set(0,-1,0);m.lookAt(new q(0,0,-1));this.add(m);this.renderTarget=new Gb(c,c,{format:1022,magFilter:1006,minFilter:1006});this.updateCubeMap=function(a,b){null===this.parent&&this.updateMatrixWorld();var c=this.renderTarget,n=c.texture.generateMipmaps;c.texture.generateMipmaps=
!1;c.activeCubeFace=0;a.render(b,d,c);c.activeCubeFace=1;a.render(b,e,c);c.activeCubeFace=2;a.render(b,f,c);c.activeCubeFace=3;a.render(b,g,c);c.activeCubeFace=4;a.render(b,h,c);c.texture.generateMipmaps=n;c.activeCubeFace=5;a.render(b,m,c);a.setRenderTarget(null)}}function ie(){x.call(this);this.type="AudioListener";this.context=je.getContext();this.gain=this.context.createGain();this.gain.connect(this.context.destination);this.filter=null}function hc(a){x.call(this);this.type="Audio";this.context=
a.context;this.gain=this.context.createGain();this.gain.connect(a.getInput());this.autoplay=!1;this.buffer=null;this.loop=!1;this.startTime=0;this.playbackRate=1;this.isPlaying=!1;this.hasPlaybackControl=!0;this.sourceType="empty";this.filters=[]}function ke(a){hc.call(this,a);this.panner=this.context.createPanner();this.panner.connect(this.gain)}function le(a,b){this.analyser=a.context.createAnalyser();this.analyser.fftSize=void 0!==b?b:2048;this.data=new Uint8Array(this.analyser.frequencyBinCount);
a.getOutput().connect(this.analyser)}function Jd(a,b,c){this.binding=a;this.valueSize=c;a=Float64Array;switch(b){case "quaternion":b=this._slerp;break;case "string":case "bool":a=Array;b=this._select;break;default:b=this._lerp}this.buffer=new a(4*c);this._mixBufferRegion=b;this.referenceCount=this.useCount=this.cumulativeWeight=0}function ka(a,b,c){this.path=b;this.parsedPath=c||ka.parseTrackName(b);this.node=ka.findNode(a,this.parsedPath.nodeName)||a;this.rootNode=a}function me(a){this.uuid=N.generateUUID();
this._objects=Array.prototype.slice.call(arguments);this.nCachedObjects_=0;var b={};this._indicesByUUID=b;for(var c=0,d=arguments.length;c!==d;++c)b[arguments[c].uuid]=c;this._paths=[];this._parsedPaths=[];this._bindings=[];this._bindingsIndicesByPath={};var e=this;this.stats={objects:{get total(){return e._objects.length},get inUse(){return this.total-e.nCachedObjects_}},get bindingsPerObject(){return e._bindings.length}}}function ne(a,b,c){this._mixer=a;this._clip=b;this._localRoot=c||null;a=b.tracks;
b=a.length;c=Array(b);for(var d={endingStart:2400,endingEnd:2400},e=0;e!==b;++e){var f=a[e].createInterpolant(null);c[e]=f;f.settings=d}this._interpolantSettings=d;this._interpolants=c;this._propertyBindings=Array(b);this._weightInterpolant=this._timeScaleInterpolant=this._byClipCacheIndex=this._cacheIndex=null;this.loop=2201;this._loopCount=-1;this._startTime=null;this.time=0;this._effectiveWeight=this.weight=this._effectiveTimeScale=this.timeScale=1;this.repetitions=Infinity;this.paused=!1;this.enabled=
!0;this.clampWhenFinished=!1;this.zeroSlopeAtEnd=this.zeroSlopeAtStart=!0}function cd(a){this._root=a;this._initMemoryManager();this.time=this._accuIndex=0;this.timeScale=1}function Kd(a,b){"string"===typeof a&&(void 0,a=b);this.value=a}function Eb(){I.call(this);this.type="InstancedBufferGeometry";this.maxInstancedCount=void 0}function oe(a,b,c,d){this.uuid=N.generateUUID();this.data=a;this.itemSize=b;this.offset=c;this.normalized=!0===
d}function ic(a,b){this.uuid=N.generateUUID();this.array=a;this.stride=b;this.count=void 0!==a?a.length/b:0;this.dynamic=!1;this.updateRange={offset:0,count:-1};this.onUploadCallback=function(){};this.version=0}function jc(a,b,c){ic.call(this,a,b);this.meshPerAttribute=c||1}function kc(a,b,c){U.call(this,a,b);this.meshPerAttribute=c||1}function pe(a,b,c,d){this.ray=new cb(a,b);this.near=c||0;this.far=d||Infinity;this.params={Mesh:{},Line:{},LOD:{},Points:{threshold:1},Sprite:{}};Object.defineProperties(this.params,
{PointCloud:{get:function(){void 0;return this.Points}}})}function We(a,b){return a.distance-b.distance}function qe(a,b,c,d){if(!1!==a.visible&&(a.raycast(b,c),!0===d)){a=a.children;d=0;for(var e=a.length;d<e;d++)qe(a[d],b,c,!0)}}function re(a){this.autoStart=void 0!==a?a:!0;this.elapsedTime=this.oldTime=this.startTime=0;this.running=!1}function se(a,b,c){this.radius=void 0!==a?a:1;this.phi=void 0!==b?b:0;this.theta=void 0!==
c?c:0;return this}function te(a,b,c){this.radius=void 0!==a?a:1;this.theta=void 0!==b?b:0;this.y=void 0!==c?c:0;return this}function oa(a,b){Aa.call(this,a,b);this.animationsMap={};this.animationsList=[];var c=this.geometry.morphTargets.length;this.createAnimation("__default",0,c-1,c/1);this.setAnimationWeight("__default",1)}function dd(a){x.call(this);this.material=a;this.render=function(a){}}function ed(a,b,c,d){this.object=a;this.size=void 0!==b?b:1;a=void 0!==c?c:16711680;d=void 0!==d?d:1;b=0;
(c=this.object.geometry)&&c.isGeometry?b=3*c.faces.length:c&&c.isBufferGeometry&&(b=c.attributes.normal.count);c=new I;b=new z(6*b,3);c.addAttribute("position",b);ga.call(this,c,new ia({color:a,linewidth:d}));this.matrixAutoUpdate=!1;this.update()}function lc(a){x.call(this);this.light=a;this.light.updateMatrixWorld();this.matrix=a.matrixWorld;this.matrixAutoUpdate=!1;a=new I;for(var b=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1],c=0,d=1;32>c;c++,d++){var e=c/32*Math.PI*2,f=d/32*
Math.PI*2;b.push(Math.cos(e),Math.sin(e),1,Math.cos(f),Math.sin(f),1)}a.addAttribute("position",new z(b,3));b=new ia({fog:!1});this.cone=new ga(a,b);this.add(this.cone);this.update()}function mc(a){this.bones=this.getBoneList(a);for(var b=new I,c=[],d=[],e=new J(0,0,1),f=new J(0,1,0),g=0;g<this.bones.length;g++){var h=this.bones[g];h.parent&&h.parent.isBone&&(c.push(0,0,0),c.push(0,0,0),d.push(e.r,e.g,e.b),d.push(f.r,f.g,f.b))}b.addAttribute("position",new z(c,3));b.addAttribute("color",new z(d,3));
c=new ia({vertexColors:2,depthTest:!1,depthWrite:!1,transparent:!0});ga.call(this,b,c);this.root=a;this.matrix=a.matrixWorld;this.matrixAutoUpdate=!1;this.update()}function nc(a,b){this.light=a;this.light.updateMatrixWorld();var c=new pb(b,4,2),d=new Ka({wireframe:!0,fog:!1});d.color.copy(this.light.color).multiplyScalar(this.light.intensity);Aa.call(this,c,d);this.matrix=this.light.matrixWorld;this.matrixAutoUpdate=!1}function oc(a){x.call(this);this.light=a;this.light.updateMatrixWorld();var b=
new Ka({color:a.color,fog:!1});a=new Ka({color:a.color,fog:!1,wireframe:!0});var c=new I;c.addAttribute("position",new U(new Float32Array(18),3));this.add(new Aa(c,b));this.add(new Aa(c,a));this.update()}function pc(a,b){x.call(this);this.light=a;this.light.updateMatrixWorld();this.matrix=a.matrixWorld;this.matrixAutoUpdate=!1;var c=new ob(b);c.rotateY(.5*Math.PI);var d=new Ka({vertexColors:2,wireframe:!0}),e=c.getAttribute("position"),e=new Float32Array(3*e.count);c.addAttribute("color",new U(e,
3));this.add(new Aa(c,d));this.update()}function fd(a,b,c,d){a=a||10;b=b||10;c=new J(void 0!==c?c:4473924);d=new J(void 0!==d?d:8947848);var e=b/2,f=a/b,g=a/2;a=[];for(var h=[],m=0,k=0,t=-g;m<=b;m++,t+=f){a.push(-g,0,t,g,0,t);a.push(t,0,-g,t,0,g);var l=m===e?c:d;l.toArray(h,k);k+=3;l.toArray(h,k);k+=3;l.toArray(h,k);k+=3;l.toArray(h,k);k+=3}b=new I;b.addAttribute("position",new z(a,3));b.addAttribute("color",new z(h,3));c=new ia({vertexColors:2});ga.call(this,b,c)}function Ld(a,b,c,d,e,f){a=a||10;
b=b||16;c=c||8;d=d||64;e=new J(void 0!==e?e:4473924);f=new J(void 0!==f?f:8947848);var g=[],h=[],m,k,t,l,n;for(t=0;t<=b;t++)k=t/b*2*Math.PI,m=Math.sin(k)*a,k=Math.cos(k)*a,g.push(0,0,0),g.push(m,0,k),n=t&1?e:f,h.push(n.r,n.g,n.b),h.push(n.r,n.g,n.b);for(t=0;t<=c;t++)for(n=t&1?e:f,l=a-a/c*t,b=0;b<d;b++)k=b/d*2*Math.PI,m=Math.sin(k)*l,k=Math.cos(k)*l,g.push(m,0,k),h.push(n.r,n.g,n.b),k=(b+1)/d*2*Math.PI,m=Math.sin(k)*l,k=Math.cos(k)*l,g.push(m,0,k),h.push(n.r,n.g,n.b);a=new I;a.addAttribute("position",
new z(g,3));a.addAttribute("color",new z(h,3));g=new ia({vertexColors:2});ga.call(this,a,g)}function gd(a,b,c,d){this.object=a;this.size=void 0!==b?b:1;a=void 0!==c?c:16776960;d=void 0!==d?d:1;b=0;(c=this.object.geometry)&&c.isGeometry?b=c.faces.length:void 0;c=new I;b=new z(6*b,3);c.addAttribute("position",b);ga.call(this,c,new ia({color:a,linewidth:d}));this.matrixAutoUpdate=!1;this.update()}
function qc(a,b){x.call(this);this.light=a;this.light.updateMatrixWorld();this.matrix=a.matrixWorld;this.matrixAutoUpdate=!1;void 0===b&&(b=1);var c=new I;c.addAttribute("position",new z([-b,b,0,b,b,0,b,-b,0,-b,-b,0,-b,b,0],3));var d=new ia({fog:!1});this.add(new Ua(c,d));c=new I;c.addAttribute("position",new z([0,0,0,0,0,1],3));this.add(new Ua(c,d));this.update()}function hd(a){function b(a,b,d){c(a,d);c(b,d)}function c(a,b){f.push(0,0,0);g.push(b.r,b.g,b.b);void 0===h[a]&&(h[a]=[]);h[a].push(f.length/
3-1)}var d=new I,e=new ia({color:16777215,vertexColors:1}),f=[],g=[],h={},m=new J(16755200),k=new J(16711680),l=new J(43775),p=new J(16777215),n=new J(3355443);b("n1","n2",m);b("n2","n4",m);b("n4","n3",m);b("n3","n1",m);b("f1","f2",m);b("f2","f4",m);b("f4","f3",m);b("f3","f1",m);b("n1","f1",m);b("n2","f2",m);b("n3","f3",m);b("n4","f4",m);b("p","n1",k);b("p","n2",k);b("p","n3",k);b("p","n4",k);b("u1","u2",l);b("u2","u3",l);b("u3","u1",l);b("c","t",p);b("p","c",n);b("cn1","cn2",n);b("cn3","cn4",n);
b("cf1","cf2",n);b("cf3","cf4",n);d.addAttribute("position",new z(f,3));d.addAttribute("color",new z(g,3));ga.call(this,d,e);this.camera=a;this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix();this.matrix=a.matrixWorld;this.matrixAutoUpdate=!1;this.pointMap=h;this.update()}function rc(a,b){void 0===b&&(b=16776960);var c=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),d=new Float32Array(24),e=new I;e.setIndex(new U(c,1));e.addAttribute("position",new U(d,3));ga.call(this,
e,new ia({color:b}));void 0!==a&&this.update(a)}function Fb(a,b,c,d,e,f){x.call(this);void 0===d&&(d=16776960);void 0===c&&(c=1);void 0===e&&(e=.2*c);void 0===f&&(f=.2*e);void 0===Md&&(Md=new I,Md.addAttribute("position",new z([0,0,0,0,1,0],3)),ue=new Va(0,.5,1,5,1),ue.translate(0,-.5,0));this.position.copy(b);this.line=new Ua(Md,new ia({color:d}));this.line.matrixAutoUpdate=!1;this.add(this.line);this.cone=new Aa(ue,new Ka({color:d}));this.cone.matrixAutoUpdate=!1;this.add(this.cone);this.setDirection(a);
this.setLength(c,e,f)}function Nd(a){a=a||1;var b=[0,0,0,a,0,0,0,0,0,0,a,0,0,0,0,0,0,a];a=new I;a.addAttribute("position",new z(b,3));a.addAttribute("color",new z([1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],3));b=new ia({vertexColors:2});ga.call(this,a,b)}function ve(){var a=0,b=0,c=0,d=0;return{initCatmullRom:function(e,f,g,h,m){e=m*(g-e);h=m*(h-f);a=f;b=e;c=-3*f+3*g-2*e-h;d=2*f-2*g+e+h},initNonuniformCatmullRom:function(e,f,g,h,m,k,l){e=((f-e)/m-(g-e)/(m+k)+(g-f)/k)*k;h=((g-f)/k-(h-f)/(k+l)+(h-g)/
l)*k;a=f;b=e;c=-3*f+3*g-2*e-h;d=2*f-2*g+e+h},calc:function(e){var f=e*e;return a+b*e+c*f+d*f*e}}}function va(a){this.points=a||[];this.closed=!1}function id(a,b,c,d){this.v0=a;this.v1=b;this.v2=c;this.v3=d}function jd(a,b,c){this.v0=a;this.v1=b;this.v2=c}function kd(a,b){this.v1=a;this.v2=b}function Od(a,b,c,d,e,f){Wa.call(this,a,b,c,c,d,e,f)}function Xe(a){void 0;va.call(this,a);this.type="catmullrom";this.closed=
!0}function Ye(a){void 0;va.call(this,a);this.type="catmullrom"}function we(a){void 0;va.call(this,a);this.type="catmullrom"}void 0===Number.EPSILON&&(Number.EPSILON=Math.pow(2,-52));void 0===Math.sign&&(Math.sign=function(a){return 0>a?-1:0<a?1:+a});void 0===Function.prototype.name&&Object.defineProperty(Function.prototype,"name",{get:function(){return this.toString().match(/^\s*function\s*([^\(\s]*)/)[1]}});
void 0===Object.assign&&function(){Object.assign=function(a){if(void 0===a||null===a)throw new TypeError("Cannot convert undefined or null to object");for(var b=Object(a),c=1;c<arguments.length;c++){var d=arguments[c];if(void 0!==d&&null!==d)for(var e in d)Object.prototype.hasOwnProperty.call(d,e)&&(b[e]=d[e])}return b}}();pa.prototype={addEventListener:function(a,b){void 0===this._listeners&&(this._listeners={});var c=this._listeners;void 0===c[a]&&(c[a]=[]);-1===c[a].indexOf(b)&&c[a].push(b)},hasEventListener:function(a,
b){if(void 0===this._listeners)return!1;var c=this._listeners;return void 0!==c[a]&&-1!==c[a].indexOf(b)},removeEventListener:function(a,b){if(void 0!==this._listeners){var c=this._listeners[a];if(void 0!==c){var d=c.indexOf(b);-1!==d&&c.splice(d,1)}}},dispatchEvent:function(a){if(void 0!==this._listeners){var b=this._listeners[a.type];if(void 0!==b){a.target=this;var c=[],d,e=b.length;for(d=0;d<e;d++)c[d]=b[d];for(d=0;d<e;d++)c[d].call(this,a)}}}};var N={DEG2RAD:Math.PI/180,RAD2DEG:180/Math.PI,generateUUID:function(){var a=
"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""),b=Array(36),c=0,d;return function(){for(var e=0;36>e;e++)8===e||13===e||18===e||23===e?b[e]="-":14===e?b[e]="4":(2>=c&&(c=33554432+16777216*Math.random()|0),d=c&15,c>>=4,b[e]=a[19===e?d&3|8:d]);return b.join("")}}(),clamp:function(a,b,c){return Math.max(b,Math.min(c,a))},euclideanModulo:function(a,b){return(a%b+b)%b},mapLinear:function(a,b,c,d,e){return d+(a-b)*(e-d)/(c-b)},lerp:function(a,b,c){return(1-c)*a+c*b},smoothstep:function(a,
b,c){if(a<=b)return 0;if(a>=c)return 1;a=(a-b)/(c-b);return a*a*(3-2*a)},smootherstep:function(a,b,c){if(a<=b)return 0;if(a>=c)return 1;a=(a-b)/(c-b);return a*a*a*(a*(6*a-15)+10)},randInt:function(a,b){return a+Math.floor(Math.random()*(b-a+1))},randFloat:function(a,b){return a+Math.random()*(b-a)},randFloatSpread:function(a){return a*(.5-Math.random())},degToRad:function(a){return a*N.DEG2RAD},radToDeg:function(a){return a*N.RAD2DEG},isPowerOfTwo:function(a){return 0===(a&a-1)&&0!==a},nearestPowerOfTwo:function(a){return Math.pow(2,
Math.round(Math.log(a)/Math.LN2))},nextPowerOfTwo:function(a){a--;a|=a>>1;a|=a>>2;a|=a>>4;a|=a>>8;a|=a>>16;a++;return a}};D.prototype={constructor:D,isVector2:!0,get width(){return this.x},set width(a){this.x=a},get height(){return this.y},set height(a){this.y=a},set:function(a,b){this.x=a;this.y=b;return this},setScalar:function(a){this.y=this.x=a;return this},setX:function(a){this.x=a;return this},setY:function(a){this.y=a;return this},setComponent:function(a,b){switch(a){case 0:this.x=b;break;
case 1:this.y=b;break;default:throw Error("index is out of range: "+a);}return this},getComponent:function(a){switch(a){case 0:return this.x;case 1:return this.y;default:throw Error("index is out of range: "+a);}},clone:function(){return new this.constructor(this.x,this.y)},copy:function(a){this.x=a.x;this.y=a.y;return this},add:function(a,b){if(void 0!==b)return void 0,this.addVectors(a,b);this.x+=a.x;
this.y+=a.y;return this},addScalar:function(a){this.x+=a;this.y+=a;return this},addVectors:function(a,b){this.x=a.x+b.x;this.y=a.y+b.y;return this},addScaledVector:function(a,b){this.x+=a.x*b;this.y+=a.y*b;return this},sub:function(a,b){if(void 0!==b)return void 0,this.subVectors(a,b);this.x-=a.x;this.y-=a.y;return this},subScalar:function(a){this.x-=a;this.y-=a;return this},subVectors:function(a,b){this.x=
a.x-b.x;this.y=a.y-b.y;return this},multiply:function(a){this.x*=a.x;this.y*=a.y;return this},multiplyScalar:function(a){isFinite(a)?(this.x*=a,this.y*=a):this.y=this.x=0;return this},divide:function(a){this.x/=a.x;this.y/=a.y;return this},divideScalar:function(a){return this.multiplyScalar(1/a)},min:function(a){this.x=Math.min(this.x,a.x);this.y=Math.min(this.y,a.y);return this},max:function(a){this.x=Math.max(this.x,a.x);this.y=Math.max(this.y,a.y);return this},clamp:function(a,b){this.x=Math.max(a.x,
Math.min(b.x,this.x));this.y=Math.max(a.y,Math.min(b.y,this.y));return this},clampScalar:function(){var a,b;return function(c,d){void 0===a&&(a=new D,b=new D);a.set(c,c);b.set(d,d);return this.clamp(a,b)}}(),clampLength:function(a,b){var c=this.length();return this.multiplyScalar(Math.max(a,Math.min(b,c))/c)},floor:function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this},ceil:function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this},round:function(){this.x=Math.round(this.x);
this.y=Math.round(this.y);return this},roundToZero:function(){this.x=0>this.x?Math.ceil(this.x):Math.floor(this.x);this.y=0>this.y?Math.ceil(this.y):Math.floor(this.y);return this},negate:function(){this.x=-this.x;this.y=-this.y;return this},dot:function(a){return this.x*a.x+this.y*a.y},lengthSq:function(){return this.x*this.x+this.y*this.y},length:function(){return Math.sqrt(this.x*this.x+this.y*this.y)},lengthManhattan:function(){return Math.abs(this.x)+Math.abs(this.y)},normalize:function(){return this.divideScalar(this.length())},
angle:function(){var a=Math.atan2(this.y,this.x);0>a&&(a+=2*Math.PI);return a},distanceTo:function(a){return Math.sqrt(this.distanceToSquared(a))},distanceToSquared:function(a){var b=this.x-a.x;a=this.y-a.y;return b*b+a*a},distanceToManhattan:function(a){return Math.abs(this.x-a.x)+Math.abs(this.y-a.y)},setLength:function(a){return this.multiplyScalar(a/this.length())},lerp:function(a,b){this.x+=(a.x-this.x)*b;this.y+=(a.y-this.y)*b;return this},lerpVectors:function(a,b,c){return this.subVectors(b,
a).multiplyScalar(c).add(a)},equals:function(a){return a.x===this.x&&a.y===this.y},fromArray:function(a,b){void 0===b&&(b=0);this.x=a[b];this.y=a[b+1];return this},toArray:function(a,b){void 0===a&&(a=[]);void 0===b&&(b=0);a[b]=this.x;a[b+1]=this.y;return a},fromBufferAttribute:function(a,b,c){void 0!==c&&void 0;this.x=a.getX(b);this.y=a.getY(b);return this},rotateAround:function(a,b){var c=Math.cos(b),d=Math.sin(b),e=this.x-
a.x,f=this.y-a.y;this.x=e*c-f*d+a.x;this.y=e*d+f*c+a.y;return this}};var Ze=0;ea.DEFAULT_IMAGE=void 0;ea.DEFAULT_MAPPING=300;ea.prototype={constructor:ea,isTexture:!0,set needsUpdate(a){!0===a&&this.version++},clone:function(){return(new this.constructor).copy(this)},copy:function(a){this.image=a.image;this.mipmaps=a.mipmaps.slice(0);this.mapping=a.mapping;this.wrapS=a.wrapS;this.wrapT=a.wrapT;this.magFilter=a.magFilter;this.minFilter=a.minFilter;this.anisotropy=a.anisotropy;this.format=a.format;
this.type=a.type;this.offset.copy(a.offset);this.repeat.copy(a.repeat);this.generateMipmaps=a.generateMipmaps;this.premultiplyAlpha=a.premultiplyAlpha;this.flipY=a.flipY;this.unpackAlignment=a.unpackAlignment;this.encoding=a.encoding;return this},toJSON:function(a){if(void 0!==a.textures[this.uuid])return a.textures[this.uuid];var b={metadata:{version:4.4,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,
this.offset.y],wrap:[this.wrapS,this.wrapT],minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY};if(void 0!==this.image){var c=this.image;void 0===c.uuid&&(c.uuid=N.generateUUID());if(void 0===a.images[c.uuid]){var d=a.images,e=c.uuid,f=c.uuid,g;void 0!==c.toDataURL?g=c:(g=document.createElementNS("http://www.w3.org/1999/xhtml","canvas"),g.width=c.width,g.height=c.height,g.getContext("2d").drawImage(c,0,0,c.width,c.height));g=2048<g.width||2048<g.height?g.toDataURL("image/jpeg",
.6):g.toDataURL("image/png");d[e]={uuid:f,url:g}}b.image=c.uuid}return a.textures[this.uuid]=b},dispose:function(){this.dispatchEvent({type:"dispose"})},transformUv:function(a){if(300===this.mapping){a.multiply(this.repeat);a.add(this.offset);if(0>a.x||1<a.x)switch(this.wrapS){case 1E3:a.x-=Math.floor(a.x);break;case 1001:a.x=0>a.x?0:1;break;case 1002:a.x=1===Math.abs(Math.floor(a.x)%2)?Math.ceil(a.x)-a.x:a.x-Math.floor(a.x)}if(0>a.y||1<a.y)switch(this.wrapT){case 1E3:a.y-=Math.floor(a.y);break;case 1001:a.y=
0>a.y?0:1;break;case 1002:a.y=1===Math.abs(Math.floor(a.y)%2)?Math.ceil(a.y)-a.y:a.y-Math.floor(a.y)}this.flipY&&(a.y=1-a.y)}}};Object.assign(ea.prototype,pa.prototype);fa.prototype={constructor:fa,isVector4:!0,set:function(a,b,c,d){this.x=a;this.y=b;this.z=c;this.w=d;return this},setScalar:function(a){this.w=this.z=this.y=this.x=a;return this},setX:function(a){this.x=a;return this},setY:function(a){this.y=a;return this},setZ:function(a){this.z=a;return this},setW:function(a){this.w=a;return this},
setComponent:function(a,b){switch(a){case 0:this.x=b;break;case 1:this.y=b;break;case 2:this.z=b;break;case 3:this.w=b;break;default:throw Error("index is out of range: "+a);}return this},getComponent:function(a){switch(a){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error("index is out of range: "+a);}},clone:function(){return new this.constructor(this.x,this.y,this.z,this.w)},copy:function(a){this.x=a.x;this.y=a.y;this.z=a.z;this.w=void 0!==a.w?
a.w:1;return this},add:function(a,b){if(void 0!==b)return void 0,this.addVectors(a,b);this.x+=a.x;this.y+=a.y;this.z+=a.z;this.w+=a.w;return this},addScalar:function(a){this.x+=a;this.y+=a;this.z+=a;this.w+=a;return this},addVectors:function(a,b){this.x=a.x+b.x;this.y=a.y+b.y;this.z=a.z+b.z;this.w=a.w+b.w;return this},addScaledVector:function(a,b){this.x+=a.x*b;this.y+=a.y*b;this.z+=a.z*b;this.w+=a.w*b;
return this},sub:function(a,b){if(void 0!==b)return void 0,this.subVectors(a,b);this.x-=a.x;this.y-=a.y;this.z-=a.z;this.w-=a.w;return this},subScalar:function(a){this.x-=a;this.y-=a;this.z-=a;this.w-=a;return this},subVectors:function(a,b){this.x=a.x-b.x;this.y=a.y-b.y;this.z=a.z-b.z;this.w=a.w-b.w;return this},multiplyScalar:function(a){isFinite(a)?(this.x*=a,this.y*=a,this.z*=a,this.w*=a):this.w=this.z=
this.y=this.x=0;return this},applyMatrix4:function(a){var b=this.x,c=this.y,d=this.z,e=this.w;a=a.elements;this.x=a[0]*b+a[4]*c+a[8]*d+a[12]*e;this.y=a[1]*b+a[5]*c+a[9]*d+a[13]*e;this.z=a[2]*b+a[6]*c+a[10]*d+a[14]*e;this.w=a[3]*b+a[7]*c+a[11]*d+a[15]*e;return this},divideScalar:function(a){return this.multiplyScalar(1/a)},setAxisAngleFromQuaternion:function(a){this.w=2*Math.acos(a.w);var b=Math.sqrt(1-a.w*a.w);1E-4>b?(this.x=1,this.z=this.y=0):(this.x=a.x/b,this.y=a.y/b,this.z=a.z/b);return this},
setAxisAngleFromRotationMatrix:function(a){var b,c,d;a=a.elements;var e=a[0];d=a[4];var f=a[8],g=a[1],h=a[5],m=a[9];c=a[2];b=a[6];var k=a[10];if(.01>Math.abs(d-g)&&.01>Math.abs(f-c)&&.01>Math.abs(m-b)){if(.1>Math.abs(d+g)&&.1>Math.abs(f+c)&&.1>Math.abs(m+b)&&.1>Math.abs(e+h+k-3))return this.set(1,0,0,0),this;a=Math.PI;e=(e+1)/2;h=(h+1)/2;k=(k+1)/2;d=(d+g)/4;f=(f+c)/4;m=(m+b)/4;e>h&&e>k?.01>e?(b=0,d=c=.707106781):(b=Math.sqrt(e),c=d/b,d=f/b):h>k?.01>h?(b=.707106781,c=0,d=.707106781):(c=Math.sqrt(h),
b=d/c,d=m/c):.01>k?(c=b=.707106781,d=0):(d=Math.sqrt(k),b=f/d,c=m/d);this.set(b,c,d,a);return this}a=Math.sqrt((b-m)*(b-m)+(f-c)*(f-c)+(g-d)*(g-d));.001>Math.abs(a)&&(a=1);this.x=(b-m)/a;this.y=(f-c)/a;this.z=(g-d)/a;this.w=Math.acos((e+h+k-1)/2);return this},min:function(a){this.x=Math.min(this.x,a.x);this.y=Math.min(this.y,a.y);this.z=Math.min(this.z,a.z);this.w=Math.min(this.w,a.w);return this},max:function(a){this.x=Math.max(this.x,a.x);this.y=Math.max(this.y,a.y);this.z=Math.max(this.z,a.z);
this.w=Math.max(this.w,a.w);return this},clamp:function(a,b){this.x=Math.max(a.x,Math.min(b.x,this.x));this.y=Math.max(a.y,Math.min(b.y,this.y));this.z=Math.max(a.z,Math.min(b.z,this.z));this.w=Math.max(a.w,Math.min(b.w,this.w));return this},clampScalar:function(){var a,b;return function(c,d){void 0===a&&(a=new fa,b=new fa);a.set(c,c,c,c);b.set(d,d,d,d);return this.clamp(a,b)}}(),floor:function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);this.z=Math.floor(this.z);this.w=Math.floor(this.w);
return this},ceil:function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);this.z=Math.ceil(this.z);this.w=Math.ceil(this.w);return this},round:function(){this.x=Math.round(this.x);this.y=Math.round(this.y);this.z=Math.round(this.z);this.w=Math.round(this.w);return this},roundToZero:function(){this.x=0>this.x?Math.ceil(this.x):Math.floor(this.x);this.y=0>this.y?Math.ceil(this.y):Math.floor(this.y);this.z=0>this.z?Math.ceil(this.z):Math.floor(this.z);this.w=0>this.w?Math.ceil(this.w):Math.floor(this.w);
return this},negate:function(){this.x=-this.x;this.y=-this.y;this.z=-this.z;this.w=-this.w;return this},dot:function(a){return this.x*a.x+this.y*a.y+this.z*a.z+this.w*a.w},lengthSq:function(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w},length:function(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)},lengthManhattan:function(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)},normalize:function(){return this.divideScalar(this.length())},
setLength:function(a){return this.multiplyScalar(a/this.length())},lerp:function(a,b){this.x+=(a.x-this.x)*b;this.y+=(a.y-this.y)*b;this.z+=(a.z-this.z)*b;this.w+=(a.w-this.w)*b;return this},lerpVectors:function(a,b,c){return this.subVectors(b,a).multiplyScalar(c).add(a)},equals:function(a){return a.x===this.x&&a.y===this.y&&a.z===this.z&&a.w===this.w},fromArray:function(a,b){void 0===b&&(b=0);this.x=a[b];this.y=a[b+1];this.z=a[b+2];this.w=a[b+3];return this},toArray:function(a,b){void 0===a&&(a=
[]);void 0===b&&(b=0);a[b]=this.x;a[b+1]=this.y;a[b+2]=this.z;a[b+3]=this.w;return a},fromBufferAttribute:function(a,b,c){void 0!==c&&void 0;this.x=a.getX(b);this.y=a.getY(b);this.z=a.getZ(b);this.w=a.getW(b);return this}};Ya.prototype={constructor:Ya,isWebGLRenderTarget:!0,setSize:function(a,b){if(this.width!==a||this.height!==b)this.width=a,this.height=b,this.dispose();this.viewport.set(0,0,a,b);this.scissor.set(0,0,a,
b)},clone:function(){return(new this.constructor).copy(this)},copy:function(a){this.width=a.width;this.height=a.height;this.viewport.copy(a.viewport);this.texture=a.texture.clone();this.depthBuffer=a.depthBuffer;this.stencilBuffer=a.stencilBuffer;this.depthTexture=a.depthTexture;return this},dispose:function(){this.dispatchEvent({type:"dispose"})}};Object.assign(Ya.prototype,pa.prototype);Gb.prototype=Object.create(Ya.prototype);Gb.prototype.constructor=Gb;Gb.prototype.isWebGLRenderTargetCube=!0;
ca.prototype={constructor:ca,get x(){return this._x},set x(a){this._x=a;this.onChangeCallback()},get y(){return this._y},set y(a){this._y=a;this.onChangeCallback()},get z(){return this._z},set z(a){this._z=a;this.onChangeCallback()},get w(){return this._w},set w(a){this._w=a;this.onChangeCallback()},set:function(a,b,c,d){this._x=a;this._y=b;this._z=c;this._w=d;this.onChangeCallback();return this},clone:function(){return new this.constructor(this._x,this._y,this._z,this._w)},copy:function(a){this._x=
a.x;this._y=a.y;this._z=a.z;this._w=a.w;this.onChangeCallback();return this},setFromEuler:function(a,b){if(!1===(a&&a.isEuler))throw Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");var c=Math.cos(a._x/2),d=Math.cos(a._y/2),e=Math.cos(a._z/2),f=Math.sin(a._x/2),g=Math.sin(a._y/2),h=Math.sin(a._z/2),m=a.order;"XYZ"===m?(this._x=f*d*e+c*g*h,this._y=c*g*e-f*d*h,this._z=c*d*h+f*g*e,this._w=c*d*e-f*g*h):"YXZ"===m?(this._x=f*d*e+c*g*h,this._y=c*g*
e-f*d*h,this._z=c*d*h-f*g*e,this._w=c*d*e+f*g*h):"ZXY"===m?(this._x=f*d*e-c*g*h,this._y=c*g*e+f*d*h,this._z=c*d*h+f*g*e,this._w=c*d*e-f*g*h):"ZYX"===m?(this._x=f*d*e-c*g*h,this._y=c*g*e+f*d*h,this._z=c*d*h-f*g*e,this._w=c*d*e+f*g*h):"YZX"===m?(this._x=f*d*e+c*g*h,this._y=c*g*e+f*d*h,this._z=c*d*h-f*g*e,this._w=c*d*e-f*g*h):"XZY"===m&&(this._x=f*d*e-c*g*h,this._y=c*g*e-f*d*h,this._z=c*d*h+f*g*e,this._w=c*d*e+f*g*h);if(!1!==b)this.onChangeCallback();return this},setFromAxisAngle:function(a,b){var c=
b/2,d=Math.sin(c);this._x=a.x*d;this._y=a.y*d;this._z=a.z*d;this._w=Math.cos(c);this.onChangeCallback();return this},setFromRotationMatrix:function(a){var b=a.elements,c=b[0];a=b[4];var d=b[8],e=b[1],f=b[5],g=b[9],h=b[2],m=b[6],b=b[10],k=c+f+b;0<k?(c=.5/Math.sqrt(k+1),this._w=.25/c,this._x=(m-g)*c,this._y=(d-h)*c,this._z=(e-a)*c):c>f&&c>b?(c=2*Math.sqrt(1+c-f-b),this._w=(m-g)/c,this._x=.25*c,this._y=(a+e)/c,this._z=(d+h)/c):f>b?(c=2*Math.sqrt(1+f-c-b),this._w=(d-h)/c,this._x=(a+e)/c,this._y=.25*c,
this._z=(g+m)/c):(c=2*Math.sqrt(1+b-c-f),this._w=(e-a)/c,this._x=(d+h)/c,this._y=(g+m)/c,this._z=.25*c);this.onChangeCallback();return this},setFromUnitVectors:function(){var a,b;return function(c,d){void 0===a&&(a=new q);b=c.dot(d)+1;1E-6>b?(b=0,Math.abs(c.x)>Math.abs(c.z)?a.set(-c.y,c.x,0):a.set(0,-c.z,c.y)):a.crossVectors(c,d);this._x=a.x;this._y=a.y;this._z=a.z;this._w=b;return this.normalize()}}(),inverse:function(){return this.conjugate().normalize()},conjugate:function(){this._x*=-1;this._y*=
-1;this._z*=-1;this.onChangeCallback();return this},dot:function(a){return this._x*a._x+this._y*a._y+this._z*a._z+this._w*a._w},lengthSq:function(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w},length:function(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)},normalize:function(){var a=this.length();0===a?(this._z=this._y=this._x=0,this._w=1):(a=1/a,this._x*=a,this._y*=a,this._z*=a,this._w*=a);this.onChangeCallback();return this},multiply:function(a,
b){return void 0!==b?(void 0,this.multiplyQuaternions(a,b)):this.multiplyQuaternions(this,a)},premultiply:function(a){return this.multiplyQuaternions(a,this)},multiplyQuaternions:function(a,b){var c=a._x,d=a._y,e=a._z,f=a._w,g=b._x,h=b._y,m=b._z,k=b._w;this._x=c*k+f*g+d*m-e*h;this._y=d*k+f*h+e*g-c*m;this._z=e*k+f*m+c*h-d*g;this._w=f*k-c*g-d*h-e*m;this.onChangeCallback();return this},slerp:function(a,
b){if(0===b)return this;if(1===b)return this.copy(a);var c=this._x,d=this._y,e=this._z,f=this._w,g=f*a._w+c*a._x+d*a._y+e*a._z;0>g?(this._w=-a._w,this._x=-a._x,this._y=-a._y,this._z=-a._z,g=-g):this.copy(a);if(1<=g)return this._w=f,this._x=c,this._y=d,this._z=e,this;var h=Math.sqrt(1-g*g);if(.001>Math.abs(h))return this._w=.5*(f+this._w),this._x=.5*(c+this._x),this._y=.5*(d+this._y),this._z=.5*(e+this._z),this;var m=Math.atan2(h,g),g=Math.sin((1-b)*m)/h,h=Math.sin(b*m)/h;this._w=f*g+this._w*h;this._x=
c*g+this._x*h;this._y=d*g+this._y*h;this._z=e*g+this._z*h;this.onChangeCallback();return this},equals:function(a){return a._x===this._x&&a._y===this._y&&a._z===this._z&&a._w===this._w},fromArray:function(a,b){void 0===b&&(b=0);this._x=a[b];this._y=a[b+1];this._z=a[b+2];this._w=a[b+3];this.onChangeCallback();return this},toArray:function(a,b){void 0===a&&(a=[]);void 0===b&&(b=0);a[b]=this._x;a[b+1]=this._y;a[b+2]=this._z;a[b+3]=this._w;return a},onChange:function(a){this.onChangeCallback=a;return this},
onChangeCallback:function(){}};Object.assign(ca,{slerp:function(a,b,c,d){return c.copy(a).slerp(b,d)},slerpFlat:function(a,b,c,d,e,f,g){var h=c[d+0],m=c[d+1],k=c[d+2];c=c[d+3];d=e[f+0];var l=e[f+1],p=e[f+2];e=e[f+3];if(c!==e||h!==d||m!==l||k!==p){f=1-g;var n=h*d+m*l+k*p+c*e,u=0<=n?1:-1,q=1-n*n;q>Number.EPSILON&&(q=Math.sqrt(q),n=Math.atan2(q,n*u),f=Math.sin(f*n)/q,g=Math.sin(g*n)/q);u*=g;h=h*f+d*u;m=m*f+l*u;k=k*f+p*u;c=c*f+e*u;f===1-g&&(g=1/Math.sqrt(h*h+m*m+k*k+c*c),h*=g,m*=g,k*=g,c*=g)}a[b]=h;a[b+
1]=m;a[b+2]=k;a[b+3]=c}});q.prototype={constructor:q,isVector3:!0,set:function(a,b,c){this.x=a;this.y=b;this.z=c;return this},setScalar:function(a){this.z=this.y=this.x=a;return this},setX:function(a){this.x=a;return this},setY:function(a){this.y=a;return this},setZ:function(a){this.z=a;return this},setComponent:function(a,b){switch(a){case 0:this.x=b;break;case 1:this.y=b;break;case 2:this.z=b;break;default:throw Error("index is out of range: "+a);}return this},getComponent:function(a){switch(a){case 0:return this.x;
case 1:return this.y;case 2:return this.z;default:throw Error("index is out of range: "+a);}},clone:function(){return new this.constructor(this.x,this.y,this.z)},copy:function(a){this.x=a.x;this.y=a.y;this.z=a.z;return this},add:function(a,b){if(void 0!==b)return void 0,this.addVectors(a,b);this.x+=a.x;this.y+=a.y;this.z+=a.z;return this},addScalar:function(a){this.x+=a;this.y+=a;this.z+=a;return this},
addVectors:function(a,b){this.x=a.x+b.x;this.y=a.y+b.y;this.z=a.z+b.z;return this},addScaledVector:function(a,b){this.x+=a.x*b;this.y+=a.y*b;this.z+=a.z*b;return this},sub:function(a,b){if(void 0!==b)return void 0,this.subVectors(a,b);this.x-=a.x;this.y-=a.y;this.z-=a.z;return this},subScalar:function(a){this.x-=a;this.y-=a;this.z-=a;return this},subVectors:function(a,b){this.x=a.x-b.x;this.y=a.y-b.y;this.z=
a.z-b.z;return this},multiply:function(a,b){if(void 0!==b)return void 0,this.multiplyVectors(a,b);this.x*=a.x;this.y*=a.y;this.z*=a.z;return this},multiplyScalar:function(a){isFinite(a)?(this.x*=a,this.y*=a,this.z*=a):this.z=this.y=this.x=0;return this},multiplyVectors:function(a,b){this.x=a.x*b.x;this.y=a.y*b.y;this.z=a.z*b.z;return this},applyEuler:function(){var a;return function(b){!1===(b&&
b.isEuler)&&void 0;void 0===a&&(a=new ca);return this.applyQuaternion(a.setFromEuler(b))}}(),applyAxisAngle:function(){var a;return function(b,c){void 0===a&&(a=new ca);return this.applyQuaternion(a.setFromAxisAngle(b,c))}}(),applyMatrix3:function(a){var b=this.x,c=this.y,d=this.z;a=a.elements;this.x=a[0]*b+a[3]*c+a[6]*d;this.y=a[1]*b+a[4]*c+a[7]*d;this.z=a[2]*b+a[5]*c+a[8]*d;return this},applyMatrix4:function(a){var b=
this.x,c=this.y,d=this.z;a=a.elements;this.x=a[0]*b+a[4]*c+a[8]*d+a[12];this.y=a[1]*b+a[5]*c+a[9]*d+a[13];this.z=a[2]*b+a[6]*c+a[10]*d+a[14];return this.divideScalar(a[3]*b+a[7]*c+a[11]*d+a[15])},applyQuaternion:function(a){var b=this.x,c=this.y,d=this.z,e=a.x,f=a.y,g=a.z;a=a.w;var h=a*b+f*d-g*c,m=a*c+g*b-e*d,k=a*d+e*c-f*b,b=-e*b-f*c-g*d;this.x=h*a+b*-e+m*-g-k*-f;this.y=m*a+b*-f+k*-e-h*-g;this.z=k*a+b*-g+h*-f-m*-e;return this},project:function(){var a;return function(b){void 0===a&&(a=new S);a.multiplyMatrices(b.projectionMatrix,
a.getInverse(b.matrixWorld));return this.applyMatrix4(a)}}(),unproject:function(){var a;return function(b){void 0===a&&(a=new S);a.multiplyMatrices(b.matrixWorld,a.getInverse(b.projectionMatrix));return this.applyMatrix4(a)}}(),transformDirection:function(a){var b=this.x,c=this.y,d=this.z;a=a.elements;this.x=a[0]*b+a[4]*c+a[8]*d;this.y=a[1]*b+a[5]*c+a[9]*d;this.z=a[2]*b+a[6]*c+a[10]*d;return this.normalize()},divide:function(a){this.x/=a.x;this.y/=a.y;this.z/=a.z;return this},divideScalar:function(a){return this.multiplyScalar(1/
a)},min:function(a){this.x=Math.min(this.x,a.x);this.y=Math.min(this.y,a.y);this.z=Math.min(this.z,a.z);return this},max:function(a){this.x=Math.max(this.x,a.x);this.y=Math.max(this.y,a.y);this.z=Math.max(this.z,a.z);return this},clamp:function(a,b){this.x=Math.max(a.x,Math.min(b.x,this.x));this.y=Math.max(a.y,Math.min(b.y,this.y));this.z=Math.max(a.z,Math.min(b.z,this.z));return this},clampScalar:function(){var a,b;return function(c,d){void 0===a&&(a=new q,b=new q);a.set(c,c,c);b.set(d,d,d);return this.clamp(a,
b)}}(),clampLength:function(a,b){var c=this.length();return this.multiplyScalar(Math.max(a,Math.min(b,c))/c)},floor:function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);this.z=Math.floor(this.z);return this},ceil:function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);this.z=Math.ceil(this.z);return this},round:function(){this.x=Math.round(this.x);this.y=Math.round(this.y);this.z=Math.round(this.z);return this},roundToZero:function(){this.x=0>this.x?Math.ceil(this.x):Math.floor(this.x);
this.y=0>this.y?Math.ceil(this.y):Math.floor(this.y);this.z=0>this.z?Math.ceil(this.z):Math.floor(this.z);return this},negate:function(){this.x=-this.x;this.y=-this.y;this.z=-this.z;return this},dot:function(a){return this.x*a.x+this.y*a.y+this.z*a.z},lengthSq:function(){return this.x*this.x+this.y*this.y+this.z*this.z},length:function(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)},lengthManhattan:function(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)},normalize:function(){return this.divideScalar(this.length())},
setLength:function(a){return this.multiplyScalar(a/this.length())},lerp:function(a,b){this.x+=(a.x-this.x)*b;this.y+=(a.y-this.y)*b;this.z+=(a.z-this.z)*b;return this},lerpVectors:function(a,b,c){return this.subVectors(b,a).multiplyScalar(c).add(a)},cross:function(a,b){if(void 0!==b)return void 0,this.crossVectors(a,b);var c=this.x,d=this.y,e=this.z;this.x=d*a.z-e*a.y;this.y=e*a.x-c*a.z;this.z=c*a.y-
d*a.x;return this},crossVectors:function(a,b){var c=a.x,d=a.y,e=a.z,f=b.x,g=b.y,h=b.z;this.x=d*h-e*g;this.y=e*f-c*h;this.z=c*g-d*f;return this},projectOnVector:function(a){var b=a.dot(this)/a.lengthSq();return this.copy(a).multiplyScalar(b)},projectOnPlane:function(){var a;return function(b){void 0===a&&(a=new q);a.copy(this).projectOnVector(b);return this.sub(a)}}(),reflect:function(){var a;return function(b){void 0===a&&(a=new q);return this.sub(a.copy(b).multiplyScalar(2*this.dot(b)))}}(),angleTo:function(a){a=
this.dot(a)/Math.sqrt(this.lengthSq()*a.lengthSq());return Math.acos(N.clamp(a,-1,1))},distanceTo:function(a){return Math.sqrt(this.distanceToSquared(a))},distanceToSquared:function(a){var b=this.x-a.x,c=this.y-a.y;a=this.z-a.z;return b*b+c*c+a*a},distanceToManhattan:function(a){return Math.abs(this.x-a.x)+Math.abs(this.y-a.y)+Math.abs(this.z-a.z)},setFromSpherical:function(a){var b=Math.sin(a.phi)*a.radius;this.x=b*Math.sin(a.theta);this.y=Math.cos(a.phi)*a.radius;this.z=b*Math.cos(a.theta);return this},
setFromCylindrical:function(a){this.x=a.radius*Math.sin(a.theta);this.y=a.y;this.z=a.radius*Math.cos(a.theta);return this},setFromMatrixPosition:function(a){return this.setFromMatrixColumn(a,3)},setFromMatrixScale:function(a){var b=this.setFromMatrixColumn(a,0).length(),c=this.setFromMatrixColumn(a,1).length();a=this.setFromMatrixColumn(a,2).length();this.x=b;this.y=c;this.z=a;return this},setFromMatrixColumn:function(a,b){if("number"===typeof a){void 0;
var c=a;a=b;b=c}return this.fromArray(a.elements,4*b)},equals:function(a){return a.x===this.x&&a.y===this.y&&a.z===this.z},fromArray:function(a,b){void 0===b&&(b=0);this.x=a[b];this.y=a[b+1];this.z=a[b+2];return this},toArray:function(a,b){void 0===a&&(a=[]);void 0===b&&(b=0);a[b]=this.x;a[b+1]=this.y;a[b+2]=this.z;return a},fromBufferAttribute:function(a,b,c){void 0!==c&&void 0;this.x=a.getX(b);this.y=a.getY(b);this.z=a.getZ(b);
return this}};S.prototype={constructor:S,isMatrix4:!0,set:function(a,b,c,d,e,f,g,h,m,k,l,p,n,u,q,r){var A=this.elements;A[0]=a;A[4]=b;A[8]=c;A[12]=d;A[1]=e;A[5]=f;A[9]=g;A[13]=h;A[2]=m;A[6]=k;A[10]=l;A[14]=p;A[3]=n;A[7]=u;A[11]=q;A[15]=r;return this},identity:function(){this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1);return this},clone:function(){return(new S).fromArray(this.elements)},copy:function(a){this.elements.set(a.elements);return this},copyPosition:function(a){var b=this.elements;a=a.elements;
b[12]=a[12];b[13]=a[13];b[14]=a[14];return this},extractBasis:function(a,b,c){a.setFromMatrixColumn(this,0);b.setFromMatrixColumn(this,1);c.setFromMatrixColumn(this,2);return this},makeBasis:function(a,b,c){this.set(a.x,b.x,c.x,0,a.y,b.y,c.y,0,a.z,b.z,c.z,0,0,0,0,1);return this},extractRotation:function(){var a;return function(b){void 0===a&&(a=new q);var c=this.elements,d=b.elements,e=1/a.setFromMatrixColumn(b,0).length(),f=1/a.setFromMatrixColumn(b,1).length();b=1/a.setFromMatrixColumn(b,2).length();
c[0]=d[0]*e;c[1]=d[1]*e;c[2]=d[2]*e;c[4]=d[4]*f;c[5]=d[5]*f;c[6]=d[6]*f;c[8]=d[8]*b;c[9]=d[9]*b;c[10]=d[10]*b;return this}}(),makeRotationFromEuler:function(a){!1===(a&&a.isEuler)&&void 0;var b=this.elements,c=a.x,d=a.y,e=a.z,f=Math.cos(c),c=Math.sin(c),g=Math.cos(d),d=Math.sin(d),h=Math.cos(e),e=Math.sin(e);if("XYZ"===a.order){a=f*h;var m=f*e,k=c*h,l=c*e;b[0]=g*h;b[4]=-g*e;b[8]=d;b[1]=m+
k*d;b[5]=a-l*d;b[9]=-c*g;b[2]=l-a*d;b[6]=k+m*d;b[10]=f*g}else"YXZ"===a.order?(a=g*h,m=g*e,k=d*h,l=d*e,b[0]=a+l*c,b[4]=k*c-m,b[8]=f*d,b[1]=f*e,b[5]=f*h,b[9]=-c,b[2]=m*c-k,b[6]=l+a*c,b[10]=f*g):"ZXY"===a.order?(a=g*h,m=g*e,k=d*h,l=d*e,b[0]=a-l*c,b[4]=-f*e,b[8]=k+m*c,b[1]=m+k*c,b[5]=f*h,b[9]=l-a*c,b[2]=-f*d,b[6]=c,b[10]=f*g):"ZYX"===a.order?(a=f*h,m=f*e,k=c*h,l=c*e,b[0]=g*h,b[4]=k*d-m,b[8]=a*d+l,b[1]=g*e,b[5]=l*d+a,b[9]=m*d-k,b[2]=-d,b[6]=c*g,b[10]=f*g):"YZX"===a.order?(a=f*g,m=f*d,k=c*g,l=c*d,b[0]=
g*h,b[4]=l-a*e,b[8]=k*e+m,b[1]=e,b[5]=f*h,b[9]=-c*h,b[2]=-d*h,b[6]=m*e+k,b[10]=a-l*e):"XZY"===a.order&&(a=f*g,m=f*d,k=c*g,l=c*d,b[0]=g*h,b[4]=-e,b[8]=d*h,b[1]=a*e+l,b[5]=f*h,b[9]=m*e-k,b[2]=k*e-m,b[6]=c*h,b[10]=l*e+a);b[3]=0;b[7]=0;b[11]=0;b[12]=0;b[13]=0;b[14]=0;b[15]=1;return this},makeRotationFromQuaternion:function(a){var b=this.elements,c=a.x,d=a.y,e=a.z,f=a.w,g=c+c,h=d+d,m=e+e;a=c*g;var k=c*h,c=c*m,l=d*h,d=d*m,e=e*m,g=f*g,h=f*h,f=f*m;b[0]=1-(l+e);b[4]=k-f;b[8]=c+h;b[1]=k+f;b[5]=1-(a+e);b[9]=
d-g;b[2]=c-h;b[6]=d+g;b[10]=1-(a+l);b[3]=0;b[7]=0;b[11]=0;b[12]=0;b[13]=0;b[14]=0;b[15]=1;return this},lookAt:function(){var a,b,c;return function(d,e,f){void 0===a&&(a=new q,b=new q,c=new q);var g=this.elements;c.subVectors(d,e).normalize();0===c.lengthSq()&&(c.z=1);a.crossVectors(f,c).normalize();0===a.lengthSq()&&(c.z+=1E-4,a.crossVectors(f,c).normalize());b.crossVectors(c,a);g[0]=a.x;g[4]=b.x;g[8]=c.x;g[1]=a.y;g[5]=b.y;g[9]=c.y;g[2]=a.z;g[6]=b.z;g[10]=c.z;return this}}(),multiply:function(a,b){return void 0!==
b?(void 0,this.multiplyMatrices(a,b)):this.multiplyMatrices(this,a)},premultiply:function(a){return this.multiplyMatrices(a,this)},multiplyMatrices:function(a,b){var c=a.elements,d=b.elements,e=this.elements,f=c[0],g=c[4],h=c[8],m=c[12],k=c[1],l=c[5],p=c[9],n=c[13],u=c[2],q=c[6],r=c[10],A=c[14],w=c[3],y=c[7],K=c[11],c=c[15],v=d[0],E=d[4],L=d[8],C=d[12],F=d[1],x=d[5],H=d[9],D=d[13],z=d[2],J=d[6],
I=d[10],Q=d[14],M=d[3],O=d[7],P=d[11],d=d[15];e[0]=f*v+g*F+h*z+m*M;e[4]=f*E+g*x+h*J+m*O;e[8]=f*L+g*H+h*I+m*P;e[12]=f*C+g*D+h*Q+m*d;e[1]=k*v+l*F+p*z+n*M;e[5]=k*E+l*x+p*J+n*O;e[9]=k*L+l*H+p*I+n*P;e[13]=k*C+l*D+p*Q+n*d;e[2]=u*v+q*F+r*z+A*M;e[6]=u*E+q*x+r*J+A*O;e[10]=u*L+q*H+r*I+A*P;e[14]=u*C+q*D+r*Q+A*d;e[3]=w*v+y*F+K*z+c*M;e[7]=w*E+y*x+K*J+c*O;e[11]=w*L+y*H+K*I+c*P;e[15]=w*C+y*D+K*Q+c*d;return this},multiplyToArray:function(a,b,c){var d=this.elements;this.multiplyMatrices(a,b);c[0]=d[0];c[1]=d[1];c[2]=
d[2];c[3]=d[3];c[4]=d[4];c[5]=d[5];c[6]=d[6];c[7]=d[7];c[8]=d[8];c[9]=d[9];c[10]=d[10];c[11]=d[11];c[12]=d[12];c[13]=d[13];c[14]=d[14];c[15]=d[15];return this},multiplyScalar:function(a){var b=this.elements;b[0]*=a;b[4]*=a;b[8]*=a;b[12]*=a;b[1]*=a;b[5]*=a;b[9]*=a;b[13]*=a;b[2]*=a;b[6]*=a;b[10]*=a;b[14]*=a;b[3]*=a;b[7]*=a;b[11]*=a;b[15]*=a;return this},applyToBufferAttribute:function(){var a;return function(b){void 0===a&&(a=new q);for(var c=0,d=b.count;c<d;c++)a.x=b.getX(c),a.y=b.getY(c),a.z=b.getZ(c),
a.applyMatrix4(this),b.setXYZ(c,a.x,a.y,a.z);return b}}(),determinant:function(){var a=this.elements,b=a[0],c=a[4],d=a[8],e=a[12],f=a[1],g=a[5],h=a[9],m=a[13],k=a[2],l=a[6],p=a[10],n=a[14];return a[3]*(+e*h*l-d*m*l-e*g*p+c*m*p+d*g*n-c*h*n)+a[7]*(+b*h*n-b*m*p+e*f*p-d*f*n+d*m*k-e*h*k)+a[11]*(+b*m*l-b*g*n-e*f*l+c*f*n+e*g*k-c*m*k)+a[15]*(-d*g*k-b*h*l+b*g*p+d*f*l-c*f*p+c*h*k)},transpose:function(){var a=this.elements,b;b=a[1];a[1]=a[4];a[4]=b;b=a[2];a[2]=a[8];a[8]=b;b=a[6];a[6]=a[9];a[9]=b;b=a[3];a[3]=
a[12];a[12]=b;b=a[7];a[7]=a[13];a[13]=b;b=a[11];a[11]=a[14];a[14]=b;return this},setPosition:function(a){var b=this.elements;b[12]=a.x;b[13]=a.y;b[14]=a.z;return this},getInverse:function(a,b){var c=this.elements,d=a.elements,e=d[0],f=d[1],g=d[2],h=d[3],m=d[4],k=d[5],l=d[6],p=d[7],n=d[8],u=d[9],q=d[10],r=d[11],A=d[12],w=d[13],y=d[14],d=d[15],K=u*y*p-w*q*p+w*l*r-k*y*r-u*l*d+k*q*d,v=A*q*p-n*y*p-A*l*r+m*y*r+n*l*d-m*q*d,E=n*w*p-A*u*p+A*k*r-m*w*r-n*k*d+m*u*d,L=A*u*l-n*w*l-A*k*q+m*w*q+n*k*y-m*u*y,C=e*K+
f*v+g*E+h*L;if(0===C){if(!0===b)throw Error("THREE.Matrix4.getInverse(): can't invert matrix, determinant is 0");void 0;return this.identity()}C=1/C;c[0]=K*C;c[1]=(w*q*h-u*y*h-w*g*r+f*y*r+u*g*d-f*q*d)*C;c[2]=(k*y*h-w*l*h+w*g*p-f*y*p-k*g*d+f*l*d)*C;c[3]=(u*l*h-k*q*h-u*g*p+f*q*p+k*g*r-f*l*r)*C;c[4]=v*C;c[5]=(n*y*h-A*q*h+A*g*r-e*y*r-n*g*d+e*q*d)*C;c[6]=(A*l*h-m*y*h-A*g*p+e*y*p+m*g*d-e*l*d)*C;c[7]=(m*q*h-n*l*h+n*g*p-e*q*p-m*g*
r+e*l*r)*C;c[8]=E*C;c[9]=(A*u*h-n*w*h-A*f*r+e*w*r+n*f*d-e*u*d)*C;c[10]=(m*w*h-A*k*h+A*f*p-e*w*p-m*f*d+e*k*d)*C;c[11]=(n*k*h-m*u*h-n*f*p+e*u*p+m*f*r-e*k*r)*C;c[12]=L*C;c[13]=(n*w*g-A*u*g+A*f*q-e*w*q-n*f*y+e*u*y)*C;c[14]=(A*k*g-m*w*g-A*f*l+e*w*l+m*f*y-e*k*y)*C;c[15]=(m*u*g-n*k*g+n*f*l-e*u*l-m*f*q+e*k*q)*C;return this},scale:function(a){var b=this.elements,c=a.x,d=a.y;a=a.z;b[0]*=c;b[4]*=d;b[8]*=a;b[1]*=c;b[5]*=d;b[9]*=a;b[2]*=c;b[6]*=d;b[10]*=a;b[3]*=c;b[7]*=d;b[11]*=a;return this},getMaxScaleOnAxis:function(){var a=
this.elements;return Math.sqrt(Math.max(a[0]*a[0]+a[1]*a[1]+a[2]*a[2],a[4]*a[4]+a[5]*a[5]+a[6]*a[6],a[8]*a[8]+a[9]*a[9]+a[10]*a[10]))},makeTranslation:function(a,b,c){this.set(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1);return this},makeRotationX:function(a){var b=Math.cos(a);a=Math.sin(a);this.set(1,0,0,0,0,b,-a,0,0,a,b,0,0,0,0,1);return this},makeRotationY:function(a){var b=Math.cos(a);a=Math.sin(a);this.set(b,0,a,0,0,1,0,0,-a,0,b,0,0,0,0,1);return this},makeRotationZ:function(a){var b=Math.cos(a);a=Math.sin(a);
this.set(b,-a,0,0,a,b,0,0,0,0,1,0,0,0,0,1);return this},makeRotationAxis:function(a,b){var c=Math.cos(b),d=Math.sin(b),e=1-c,f=a.x,g=a.y,h=a.z,m=e*f,k=e*g;this.set(m*f+c,m*g-d*h,m*h+d*g,0,m*g+d*h,k*g+c,k*h-d*f,0,m*h-d*g,k*h+d*f,e*h*h+c,0,0,0,0,1);return this},makeScale:function(a,b,c){this.set(a,0,0,0,0,b,0,0,0,0,c,0,0,0,0,1);return this},makeShear:function(a,b,c){this.set(1,b,c,0,a,1,c,0,a,b,1,0,0,0,0,1);return this},compose:function(a,b,c){this.makeRotationFromQuaternion(b);this.scale(c);this.setPosition(a);
return this},decompose:function(){var a,b;return function(c,d,e){void 0===a&&(a=new q,b=new S);var f=this.elements,g=a.set(f[0],f[1],f[2]).length(),h=a.set(f[4],f[5],f[6]).length(),m=a.set(f[8],f[9],f[10]).length();0>this.determinant()&&(g=-g);c.x=f[12];c.y=f[13];c.z=f[14];b.elements.set(this.elements);c=1/g;var f=1/h,k=1/m;b.elements[0]*=c;b.elements[1]*=c;b.elements[2]*=c;b.elements[4]*=f;b.elements[5]*=f;b.elements[6]*=f;b.elements[8]*=k;b.elements[9]*=k;b.elements[10]*=k;d.setFromRotationMatrix(b);
e.x=g;e.y=h;e.z=m;return this}}(),makePerspective:function(a,b,c,d,e,f){void 0===f&&void 0;var g=this.elements;g[0]=2*e/(b-a);g[4]=0;g[8]=(b+a)/(b-a);g[12]=0;g[1]=0;g[5]=2*e/(c-d);g[9]=(c+d)/(c-d);g[13]=0;g[2]=0;g[6]=0;g[10]=-(f+e)/(f-e);g[14]=-2*f*e/(f-e);g[3]=0;g[7]=0;g[11]=-1;g[15]=0;return this},makeOrthographic:function(a,b,c,d,e,f){var g=this.elements,h=1/(b-a),m=1/(c-d),k=1/(f-e);g[0]=
2*h;g[4]=0;g[8]=0;g[12]=-((b+a)*h);g[1]=0;g[5]=2*m;g[9]=0;g[13]=-((c+d)*m);g[2]=0;g[6]=0;g[10]=-2*k;g[14]=-((f+e)*k);g[3]=0;g[7]=0;g[11]=0;g[15]=1;return this},equals:function(a){var b=this.elements;a=a.elements;for(var c=0;16>c;c++)if(b[c]!==a[c])return!1;return!0},fromArray:function(a,b){void 0===b&&(b=0);for(var c=0;16>c;c++)this.elements[c]=a[c+b];return this},toArray:function(a,b){void 0===a&&(a=[]);void 0===b&&(b=0);var c=this.elements;a[b]=c[0];a[b+1]=c[1];a[b+2]=c[2];a[b+3]=c[3];a[b+4]=c[4];
a[b+5]=c[5];a[b+6]=c[6];a[b+7]=c[7];a[b+8]=c[8];a[b+9]=c[9];a[b+10]=c[10];a[b+11]=c[11];a[b+12]=c[12];a[b+13]=c[13];a[b+14]=c[14];a[b+15]=c[15];return a}};Za.prototype=Object.create(ea.prototype);Za.prototype.constructor=Za;Za.prototype.isCubeTexture=!0;Object.defineProperty(Za.prototype,"images",{get:function(){return this.image},set:function(a){this.image=a}});var Ee=new ea,Fe=new Za,Be=[],De=[];Je.prototype.setValue=function(a,b){for(var c=this.seq,d=0,e=c.length;d!==e;++d){var f=c[d];f.setValue(a,
b[f.id])}};var Rd=/([\w\d_]+)(\])?(\[|\.)?/g;$a.prototype.setValue=function(a,b,c){b=this.map[b];void 0!==b&&b.setValue(a,c,this.renderer)};$a.prototype.set=function(a,b,c){var d=this.map[c];void 0!==d&&d.setValue(a,b[c],this.renderer)};$a.prototype.setOptional=function(a,b,c){b=b[c];void 0!==b&&this.setValue(a,c,b)};$a.upload=function(a,b,c,d){for(var e=0,f=b.length;e!==f;++e){var g=b[e],h=c[g.id];!1!==h.needsUpdate&&g.setValue(a,h.value,d)}};$a.seqWithValue=function(a,b){for(var c=[],d=0,e=a.length;d!==
e;++d){var f=a[d];f.id in b&&c.push(f)}return c};var Ja={merge:function(a){for(var b={},c=0;c<a.length;c++){var d=this.clone(a[c]),e;for(e in d)b[e]=d[e]}return b},clone:function(a){var b={},c;for(c in a){b[c]={};for(var d in a[c]){var e=a[c][d];e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture)?b[c][d]=e.clone():Array.isArray(e)?b[c][d]=e.slice():b[c][d]=e}}return b}},Z={alphamap_fragment:"#ifdef USE_ALPHAMAP\n\tdiffuseColor.a *= texture2D( alphaMap, vUv ).g;\n#endif\n",
alphamap_pars_fragment:"#ifdef USE_ALPHAMAP\n\tuniform sampler2D alphaMap;\n#endif\n",alphatest_fragment:"#ifdef ALPHATEST\n\tif ( diffuseColor.a < ALPHATEST ) discard;\n#endif\n",aomap_fragment:"#ifdef USE_AOMAP\n\tfloat ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;\n\treflectedLight.indirectDiffuse *= ambientOcclusion;\n\t#if defined( USE_ENVMAP ) && defined( PHYSICAL )\n\t\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\t\treflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.specularRoughness );\n\t#endif\n#endif\n",
aomap_pars_fragment:"#ifdef USE_AOMAP\n\tuniform sampler2D aoMap;\n\tuniform float aoMapIntensity;\n#endif",begin_vertex:"\nvec3 transformed = vec3( position );\n",beginnormal_vertex:"\nvec3 objectNormal = vec3( normal );\n",bsdfs:"float punctualLightIntensityToIrradianceFactor( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {\n\t\tif( decayExponent > 0.0 ) {\n#if defined ( PHYSICALLY_CORRECT_LIGHTS )\n\t\t\tfloat distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );\n\t\t\tfloat maxDistanceCutoffFactor = pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );\n\t\t\treturn distanceFalloff * maxDistanceCutoffFactor;\n#else\n\t\t\treturn pow( saturate( -lightDistance / cutoffDistance + 1.0 ), decayExponent );\n#endif\n\t\t}\n\t\treturn 1.0;\n}\nvec3 BRDF_Diffuse_Lambert( const in vec3 diffuseColor ) {\n\treturn RECIPROCAL_PI * diffuseColor;\n}\nvec3 F_Schlick( const in vec3 specularColor, const in float dotLH ) {\n\tfloat fresnel = exp2( ( -5.55473 * dotLH - 6.98316 ) * dotLH );\n\treturn ( 1.0 - specularColor ) * fresnel + specularColor;\n}\nfloat G_GGX_Smith( const in float alpha, const in float dotNL, const in float dotNV ) {\n\tfloat a2 = pow2( alpha );\n\tfloat gl = dotNL + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\tfloat gv = dotNV + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\treturn 1.0 / ( gl * gv );\n}\nfloat G_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {\n\tfloat a2 = pow2( alpha );\n\tfloat gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\tfloat gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\treturn 0.5 / max( gv + gl, EPSILON );\n}\nfloat D_GGX( const in float alpha, const in float dotNH ) {\n\tfloat a2 = pow2( alpha );\n\tfloat denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;\n\treturn RECIPROCAL_PI * a2 / pow2( denom );\n}\nvec3 BRDF_Specular_GGX( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float roughness ) {\n\tfloat alpha = pow2( roughness );\n\tvec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );\n\tfloat dotNL = saturate( dot( geometry.normal, incidentLight.direction ) );\n\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\tfloat dotNH = saturate( dot( geometry.normal, halfDir ) );\n\tfloat dotLH = saturate( dot( incidentLight.direction, halfDir ) );\n\tvec3 F = F_Schlick( specularColor, dotLH );\n\tfloat G = G_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n\tfloat D = D_GGX( alpha, dotNH );\n\treturn F * ( G * D );\n}\nvec2 ltcTextureCoords( const in GeometricContext geometry, const in float roughness ) {\n\tconst float LUT_SIZE  = 64.0;\n\tconst float LUT_SCALE = (LUT_SIZE - 1.0)/LUT_SIZE;\n\tconst float LUT_BIAS  = 0.5/LUT_SIZE;\n\tvec3 N = geometry.normal;\n\tvec3 V = geometry.viewDir;\n\tvec3 P = geometry.position;\n\tfloat theta = acos( dot( N, V ) );\n\tvec2 uv = vec2(\n\t\tsqrt( saturate( roughness ) ),\n\t\tsaturate( theta / ( 0.5 * PI ) ) );\n\tuv = uv * LUT_SCALE + LUT_BIAS;\n\treturn uv;\n}\nvoid clipQuadToHorizon( inout vec3 L[5], out int n ) {\n\tint config = 0;\n\tif ( L[0].z > 0.0 ) config += 1;\n\tif ( L[1].z > 0.0 ) config += 2;\n\tif ( L[2].z > 0.0 ) config += 4;\n\tif ( L[3].z > 0.0 ) config += 8;\n\tn = 0;\n\tif ( config == 0 ) {\n\t} else if ( config == 1 ) {\n\t\tn = 3;\n\t\tL[1] = -L[1].z * L[0] + L[0].z * L[1];\n\t\tL[2] = -L[3].z * L[0] + L[0].z * L[3];\n\t} else if ( config == 2 ) {\n\t\tn = 3;\n\t\tL[0] = -L[0].z * L[1] + L[1].z * L[0];\n\t\tL[2] = -L[2].z * L[1] + L[1].z * L[2];\n\t} else if ( config == 3 ) {\n\t\tn = 4;\n\t\tL[2] = -L[2].z * L[1] + L[1].z * L[2];\n\t\tL[3] = -L[3].z * L[0] + L[0].z * L[3];\n\t} else if ( config == 4 ) {\n\t\tn = 3;\n\t\tL[0] = -L[3].z * L[2] + L[2].z * L[3];\n\t\tL[1] = -L[1].z * L[2] + L[2].z * L[1];\n\t} else if ( config == 5 ) {\n\t\tn = 0;\n\t} else if ( config == 6 ) {\n\t\tn = 4;\n\t\tL[0] = -L[0].z * L[1] + L[1].z * L[0];\n\t\tL[3] = -L[3].z * L[2] + L[2].z * L[3];\n\t} else if ( config == 7 ) {\n\t\tn = 5;\n\t\tL[4] = -L[3].z * L[0] + L[0].z * L[3];\n\t\tL[3] = -L[3].z * L[2] + L[2].z * L[3];\n\t} else if ( config == 8 ) {\n\t\tn = 3;\n\t\tL[0] = -L[0].z * L[3] + L[3].z * L[0];\n\t\tL[1] = -L[2].z * L[3] + L[3].z * L[2];\n\t\tL[2] =  L[3];\n\t} else if ( config == 9 ) {\n\t\tn = 4;\n\t\tL[1] = -L[1].z * L[0] + L[0].z * L[1];\n\t\tL[2] = -L[2].z * L[3] + L[3].z * L[2];\n\t} else if ( config == 10 ) {\n\t\tn = 0;\n\t} else if ( config == 11 ) {\n\t\tn = 5;\n\t\tL[4] = L[3];\n\t\tL[3] = -L[2].z * L[3] + L[3].z * L[2];\n\t\tL[2] = -L[2].z * L[1] + L[1].z * L[2];\n\t} else if ( config == 12 ) {\n\t\tn = 4;\n\t\tL[1] = -L[1].z * L[2] + L[2].z * L[1];\n\t\tL[0] = -L[0].z * L[3] + L[3].z * L[0];\n\t} else if ( config == 13 ) {\n\t\tn = 5;\n\t\tL[4] = L[3];\n\t\tL[3] = L[2];\n\t\tL[2] = -L[1].z * L[2] + L[2].z * L[1];\n\t\tL[1] = -L[1].z * L[0] + L[0].z * L[1];\n\t} else if ( config == 14 ) {\n\t\tn = 5;\n\t\tL[4] = -L[0].z * L[3] + L[3].z * L[0];\n\t\tL[0] = -L[0].z * L[1] + L[1].z * L[0];\n\t} else if ( config == 15 ) {\n\t\tn = 4;\n\t}\n\tif ( n == 3 )\n\t\tL[3] = L[0];\n\tif ( n == 4 )\n\t\tL[4] = L[0];\n}\nfloat integrateLtcBrdfOverRectEdge( vec3 v1, vec3 v2 ) {\n\tfloat cosTheta = dot( v1, v2 );\n\tfloat theta = acos( cosTheta );\n\tfloat res = cross( v1, v2 ).z * ( ( theta > 0.001 ) ? theta / sin( theta ) : 1.0 );\n\treturn res;\n}\nvoid initRectPoints( const in vec3 pos, const in vec3 halfWidth, const in vec3 halfHeight, out vec3 rectPoints[4] ) {\n\trectPoints[0] = pos - halfWidth - halfHeight;\n\trectPoints[1] = pos + halfWidth - halfHeight;\n\trectPoints[2] = pos + halfWidth + halfHeight;\n\trectPoints[3] = pos - halfWidth + halfHeight;\n}\nvec3 integrateLtcBrdfOverRect( const in GeometricContext geometry, const in mat3 brdfMat, const in vec3 rectPoints[4] ) {\n\tvec3 N = geometry.normal;\n\tvec3 V = geometry.viewDir;\n\tvec3 P = geometry.position;\n\tvec3 T1, T2;\n\tT1 = normalize(V - N * dot( V, N ));\n\tT2 = - cross( N, T1 );\n\tmat3 brdfWrtSurface = brdfMat * transpose( mat3( T1, T2, N ) );\n\tvec3 clippedRect[5];\n\tclippedRect[0] = brdfWrtSurface * ( rectPoints[0] - P );\n\tclippedRect[1] = brdfWrtSurface * ( rectPoints[1] - P );\n\tclippedRect[2] = brdfWrtSurface * ( rectPoints[2] - P );\n\tclippedRect[3] = brdfWrtSurface * ( rectPoints[3] - P );\n\tint n;\n\tclipQuadToHorizon(clippedRect, n);\n\tif ( n == 0 )\n\t\treturn vec3( 0, 0, 0 );\n\tclippedRect[0] = normalize( clippedRect[0] );\n\tclippedRect[1] = normalize( clippedRect[1] );\n\tclippedRect[2] = normalize( clippedRect[2] );\n\tclippedRect[3] = normalize( clippedRect[3] );\n\tclippedRect[4] = normalize( clippedRect[4] );\n\tfloat sum = 0.0;\n\tsum += integrateLtcBrdfOverRectEdge( clippedRect[0], clippedRect[1] );\n\tsum += integrateLtcBrdfOverRectEdge( clippedRect[1], clippedRect[2] );\n\tsum += integrateLtcBrdfOverRectEdge( clippedRect[2], clippedRect[3] );\n\tif (n >= 4)\n\t\tsum += integrateLtcBrdfOverRectEdge( clippedRect[3], clippedRect[4] );\n\tif (n == 5)\n\t\tsum += integrateLtcBrdfOverRectEdge( clippedRect[4], clippedRect[0] );\n\tsum = max( 0.0, sum );\n\tvec3 Lo_i = vec3( sum, sum, sum );\n\treturn Lo_i;\n}\nvec3 Rect_Area_Light_Specular_Reflectance(\n\t\tconst in GeometricContext geometry,\n\t\tconst in vec3 lightPos, const in vec3 lightHalfWidth, const in vec3 lightHalfHeight,\n\t\tconst in float roughness,\n\t\tconst in sampler2D ltcMat, const in sampler2D ltcMag ) {\n\tvec3 rectPoints[4];\n\tinitRectPoints( lightPos, lightHalfWidth, lightHalfHeight, rectPoints );\n\tvec2 uv = ltcTextureCoords( geometry, roughness );\n\tvec4 brdfLtcApproxParams, t;\n\tbrdfLtcApproxParams = texture2D( ltcMat, uv );\n\tt = texture2D( ltcMat, uv );\n\tfloat brdfLtcScalar = texture2D( ltcMag, uv ).a;\n\tmat3 brdfLtcApproxMat = mat3(\n\t\tvec3(   1,   0, t.y ),\n\t\tvec3(   0, t.z,   0 ),\n\t\tvec3( t.w,   0, t.x )\n\t);\n\tvec3 specularReflectance = integrateLtcBrdfOverRect( geometry, brdfLtcApproxMat, rectPoints );\n\tspecularReflectance *= brdfLtcScalar;\n\treturn specularReflectance;\n}\nvec3 Rect_Area_Light_Diffuse_Reflectance(\n\t\tconst in GeometricContext geometry,\n\t\tconst in vec3 lightPos, const in vec3 lightHalfWidth, const in vec3 lightHalfHeight ) {\n\tvec3 rectPoints[4];\n\tinitRectPoints( lightPos, lightHalfWidth, lightHalfHeight, rectPoints );\n\tmat3 diffuseBrdfMat = mat3(1);\n\tvec3 diffuseReflectance = integrateLtcBrdfOverRect( geometry, diffuseBrdfMat, rectPoints );\n\treturn diffuseReflectance;\n}\nvec3 BRDF_Specular_GGX_Environment( const in GeometricContext geometry, const in vec3 specularColor, const in float roughness ) {\n\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\tconst vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );\n\tconst vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );\n\tvec4 r = roughness * c0 + c1;\n\tfloat a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;\n\tvec2 AB = vec2( -1.04, 1.04 ) * a004 + r.zw;\n\treturn specularColor * AB.x + AB.y;\n}\nfloat G_BlinnPhong_Implicit( ) {\n\treturn 0.25;\n}\nfloat D_BlinnPhong( const in float shininess, const in float dotNH ) {\n\treturn RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );\n}\nvec3 BRDF_Specular_BlinnPhong( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float shininess ) {\n\tvec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );\n\tfloat dotNH = saturate( dot( geometry.normal, halfDir ) );\n\tfloat dotLH = saturate( dot( incidentLight.direction, halfDir ) );\n\tvec3 F = F_Schlick( specularColor, dotLH );\n\tfloat G = G_BlinnPhong_Implicit( );\n\tfloat D = D_BlinnPhong( shininess, dotNH );\n\treturn F * ( G * D );\n}\nfloat GGXRoughnessToBlinnExponent( const in float ggxRoughness ) {\n\treturn ( 2.0 / pow2( ggxRoughness + 0.0001 ) - 2.0 );\n}\nfloat BlinnExponentToGGXRoughness( const in float blinnExponent ) {\n\treturn sqrt( 2.0 / ( blinnExponent + 2.0 ) );\n}\n",
bumpmap_pars_fragment:"#ifdef USE_BUMPMAP\n\tuniform sampler2D bumpMap;\n\tuniform float bumpScale;\n\tvec2 dHdxy_fwd() {\n\t\tvec2 dSTdx = dFdx( vUv );\n\t\tvec2 dSTdy = dFdy( vUv );\n\t\tfloat Hll = bumpScale * texture2D( bumpMap, vUv ).x;\n\t\tfloat dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;\n\t\tfloat dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;\n\t\treturn vec2( dBx, dBy );\n\t}\n\tvec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy ) {\n\t\tvec3 vSigmaX = dFdx( surf_pos );\n\t\tvec3 vSigmaY = dFdy( surf_pos );\n\t\tvec3 vN = surf_norm;\n\t\tvec3 R1 = cross( vSigmaY, vN );\n\t\tvec3 R2 = cross( vN, vSigmaX );\n\t\tfloat fDet = dot( vSigmaX, R1 );\n\t\tvec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\n\t\treturn normalize( abs( fDet ) * surf_norm - vGrad );\n\t}\n#endif\n",
clipping_planes_fragment:"#if NUM_CLIPPING_PLANES > 0\n\tfor ( int i = 0; i < UNION_CLIPPING_PLANES; ++ i ) {\n\t\tvec4 plane = clippingPlanes[ i ];\n\t\tif ( dot( vViewPosition, plane.xyz ) > plane.w ) discard;\n\t}\n\t\t\n\t#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES\n\t\tbool clipped = true;\n\t\tfor ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; ++ i ) {\n\t\t\tvec4 plane = clippingPlanes[ i ];\n\t\t\tclipped = ( dot( vViewPosition, plane.xyz ) > plane.w ) && clipped;\n\t\t}\n\t\tif ( clipped ) discard;\n\t\n\t#endif\n#endif\n",
clipping_planes_pars_fragment:"#if NUM_CLIPPING_PLANES > 0\n\t#if ! defined( PHYSICAL ) && ! defined( PHONG )\n\t\tvarying vec3 vViewPosition;\n\t#endif\n\tuniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];\n#endif\n",clipping_planes_pars_vertex:"#if NUM_CLIPPING_PLANES > 0 && ! defined( PHYSICAL ) && ! defined( PHONG )\n\tvarying vec3 vViewPosition;\n#endif\n",clipping_planes_vertex:"#if NUM_CLIPPING_PLANES > 0 && ! defined( PHYSICAL ) && ! defined( PHONG )\n\tvViewPosition = - mvPosition.xyz;\n#endif\n",
color_fragment:"#ifdef USE_COLOR\n\tdiffuseColor.rgb *= vColor;\n#endif",color_pars_fragment:"#ifdef USE_COLOR\n\tvarying vec3 vColor;\n#endif\n",color_pars_vertex:"#ifdef USE_COLOR\n\tvarying vec3 vColor;\n#endif",color_vertex:"#ifdef USE_COLOR\n\tvColor.xyz = color.xyz;\n#endif",common:"#define PI 3.14159265359\n#define PI2 6.28318530718\n#define PI_HALF 1.5707963267949\n#define RECIPROCAL_PI 0.31830988618\n#define RECIPROCAL_PI2 0.15915494\n#define LOG2 1.442695\n#define EPSILON 1e-6\n#define saturate(a) clamp( a, 0.0, 1.0 )\n#define whiteCompliment(a) ( 1.0 - saturate( a ) )\nfloat pow2( const in float x ) { return x*x; }\nfloat pow3( const in float x ) { return x*x*x; }\nfloat pow4( const in float x ) { float x2 = x*x; return x2*x2; }\nfloat average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }\nhighp float rand( const in vec2 uv ) {\n\tconst highp float a = 12.9898, b = 78.233, c = 43758.5453;\n\thighp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );\n\treturn fract(sin(sn) * c);\n}\nstruct IncidentLight {\n\tvec3 color;\n\tvec3 direction;\n\tbool visible;\n};\nstruct ReflectedLight {\n\tvec3 directDiffuse;\n\tvec3 directSpecular;\n\tvec3 indirectDiffuse;\n\tvec3 indirectSpecular;\n};\nstruct GeometricContext {\n\tvec3 position;\n\tvec3 normal;\n\tvec3 viewDir;\n};\nvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n}\nvec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );\n}\nvec3 projectOnPlane(in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\tfloat distance = dot( planeNormal, point - pointOnPlane );\n\treturn - distance * planeNormal + point;\n}\nfloat sideOfPlane( in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\treturn sign( dot( point - pointOnPlane, planeNormal ) );\n}\nvec3 linePlaneIntersect( in vec3 pointOnLine, in vec3 lineDirection, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\treturn lineDirection * ( dot( planeNormal, pointOnPlane - pointOnLine ) / dot( planeNormal, lineDirection ) ) + pointOnLine;\n}\nmat3 transpose( const in mat3 v ) {\n\tmat3 tmp;\n\ttmp[0] = vec3(v[0].x, v[1].x, v[2].x);\n\ttmp[1] = vec3(v[0].y, v[1].y, v[2].y);\n\ttmp[2] = vec3(v[0].z, v[1].z, v[2].z);\n\treturn tmp;\n}\n",
cube_uv_reflection_fragment:"#ifdef ENVMAP_TYPE_CUBE_UV\n#define cubeUV_textureSize (1024.0)\nint getFaceFromDirection(vec3 direction) {\n\tvec3 absDirection = abs(direction);\n\tint face = -1;\n\tif( absDirection.x > absDirection.z ) {\n\t\tif(absDirection.x > absDirection.y )\n\t\t\tface = direction.x > 0.0 ? 0 : 3;\n\t\telse\n\t\t\tface = direction.y > 0.0 ? 1 : 4;\n\t}\n\telse {\n\t\tif(absDirection.z > absDirection.y )\n\t\t\tface = direction.z > 0.0 ? 2 : 5;\n\t\telse\n\t\t\tface = direction.y > 0.0 ? 1 : 4;\n\t}\n\treturn face;\n}\n#define cubeUV_maxLods1  (log2(cubeUV_textureSize*0.25) - 1.0)\n#define cubeUV_rangeClamp (exp2((6.0 - 1.0) * 2.0))\nvec2 MipLevelInfo( vec3 vec, float roughnessLevel, float roughness ) {\n\tfloat scale = exp2(cubeUV_maxLods1 - roughnessLevel);\n\tfloat dxRoughness = dFdx(roughness);\n\tfloat dyRoughness = dFdy(roughness);\n\tvec3 dx = dFdx( vec * scale * dxRoughness );\n\tvec3 dy = dFdy( vec * scale * dyRoughness );\n\tfloat d = max( dot( dx, dx ), dot( dy, dy ) );\n\td = clamp(d, 1.0, cubeUV_rangeClamp);\n\tfloat mipLevel = 0.5 * log2(d);\n\treturn vec2(floor(mipLevel), fract(mipLevel));\n}\n#define cubeUV_maxLods2 (log2(cubeUV_textureSize*0.25) - 2.0)\n#define cubeUV_rcpTextureSize (1.0 / cubeUV_textureSize)\nvec2 getCubeUV(vec3 direction, float roughnessLevel, float mipLevel) {\n\tmipLevel = roughnessLevel > cubeUV_maxLods2 - 3.0 ? 0.0 : mipLevel;\n\tfloat a = 16.0 * cubeUV_rcpTextureSize;\n\tvec2 exp2_packed = exp2( vec2( roughnessLevel, mipLevel ) );\n\tvec2 rcp_exp2_packed = vec2( 1.0 ) / exp2_packed;\n\tfloat powScale = exp2_packed.x * exp2_packed.y;\n\tfloat scale = rcp_exp2_packed.x * rcp_exp2_packed.y * 0.25;\n\tfloat mipOffset = 0.75*(1.0 - rcp_exp2_packed.y) * rcp_exp2_packed.x;\n\tbool bRes = mipLevel == 0.0;\n\tscale =  bRes && (scale < a) ? a : scale;\n\tvec3 r;\n\tvec2 offset;\n\tint face = getFaceFromDirection(direction);\n\tfloat rcpPowScale = 1.0 / powScale;\n\tif( face == 0) {\n\t\tr = vec3(direction.x, -direction.z, direction.y);\n\t\toffset = vec2(0.0+mipOffset,0.75 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? a : offset.y;\n\t}\n\telse if( face == 1) {\n\t\tr = vec3(direction.y, direction.x, direction.z);\n\t\toffset = vec2(scale+mipOffset, 0.75 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? a : offset.y;\n\t}\n\telse if( face == 2) {\n\t\tr = vec3(direction.z, direction.x, direction.y);\n\t\toffset = vec2(2.0*scale+mipOffset, 0.75 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? a : offset.y;\n\t}\n\telse if( face == 3) {\n\t\tr = vec3(direction.x, direction.z, direction.y);\n\t\toffset = vec2(0.0+mipOffset,0.5 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? 0.0 : offset.y;\n\t}\n\telse if( face == 4) {\n\t\tr = vec3(direction.y, direction.x, -direction.z);\n\t\toffset = vec2(scale+mipOffset, 0.5 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? 0.0 : offset.y;\n\t}\n\telse {\n\t\tr = vec3(direction.z, -direction.x, direction.y);\n\t\toffset = vec2(2.0*scale+mipOffset, 0.5 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? 0.0 : offset.y;\n\t}\n\tr = normalize(r);\n\tfloat texelOffset = 0.5 * cubeUV_rcpTextureSize;\n\tvec2 s = ( r.yz / abs( r.x ) + vec2( 1.0 ) ) * 0.5;\n\tvec2 base = offset + vec2( texelOffset );\n\treturn base + s * ( scale - 2.0 * texelOffset );\n}\n#define cubeUV_maxLods3 (log2(cubeUV_textureSize*0.25) - 3.0)\nvec4 textureCubeUV(vec3 reflectedDirection, float roughness ) {\n\tfloat roughnessVal = roughness* cubeUV_maxLods3;\n\tfloat r1 = floor(roughnessVal);\n\tfloat r2 = r1 + 1.0;\n\tfloat t = fract(roughnessVal);\n\tvec2 mipInfo = MipLevelInfo(reflectedDirection, r1, roughness);\n\tfloat s = mipInfo.y;\n\tfloat level0 = mipInfo.x;\n\tfloat level1 = level0 + 1.0;\n\tlevel1 = level1 > 5.0 ? 5.0 : level1;\n\tlevel0 += min( floor( s + 0.5 ), 5.0 );\n\tvec2 uv_10 = getCubeUV(reflectedDirection, r1, level0);\n\tvec4 color10 = envMapTexelToLinear(texture2D(envMap, uv_10));\n\tvec2 uv_20 = getCubeUV(reflectedDirection, r2, level0);\n\tvec4 color20 = envMapTexelToLinear(texture2D(envMap, uv_20));\n\tvec4 result = mix(color10, color20, t);\n\treturn vec4(result.rgb, 1.0);\n}\n#endif\n",
defaultnormal_vertex:"#ifdef FLIP_SIDED\n\tobjectNormal = -objectNormal;\n#endif\nvec3 transformedNormal = normalMatrix * objectNormal;\n",displacementmap_pars_vertex:"#ifdef USE_DISPLACEMENTMAP\n\tuniform sampler2D displacementMap;\n\tuniform float displacementScale;\n\tuniform float displacementBias;\n#endif\n",displacementmap_vertex:"#ifdef USE_DISPLACEMENTMAP\n\ttransformed += normal * ( texture2D( displacementMap, uv ).x * displacementScale + displacementBias );\n#endif\n",emissivemap_fragment:"#ifdef USE_EMISSIVEMAP\n\tvec4 emissiveColor = texture2D( emissiveMap, vUv );\n\temissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;\n\ttotalEmissiveRadiance *= emissiveColor.rgb;\n#endif\n",
emissivemap_pars_fragment:"#ifdef USE_EMISSIVEMAP\n\tuniform sampler2D emissiveMap;\n#endif\n",encodings_fragment:"  gl_FragColor = linearToOutputTexel( gl_FragColor );\n",encodings_pars_fragment:"\nvec4 LinearToLinear( in vec4 value ) {\n\treturn value;\n}\nvec4 GammaToLinear( in vec4 value, in float gammaFactor ) {\n\treturn vec4( pow( value.xyz, vec3( gammaFactor ) ), value.w );\n}\nvec4 LinearToGamma( in vec4 value, in float gammaFactor ) {\n\treturn vec4( pow( value.xyz, vec3( 1.0 / gammaFactor ) ), value.w );\n}\nvec4 sRGBToLinear( in vec4 value ) {\n\treturn vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.w );\n}\nvec4 LinearTosRGB( in vec4 value ) {\n\treturn vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.w );\n}\nvec4 RGBEToLinear( in vec4 value ) {\n\treturn vec4( value.rgb * exp2( value.a * 255.0 - 128.0 ), 1.0 );\n}\nvec4 LinearToRGBE( in vec4 value ) {\n\tfloat maxComponent = max( max( value.r, value.g ), value.b );\n\tfloat fExp = clamp( ceil( log2( maxComponent ) ), -128.0, 127.0 );\n\treturn vec4( value.rgb / exp2( fExp ), ( fExp + 128.0 ) / 255.0 );\n}\nvec4 RGBMToLinear( in vec4 value, in float maxRange ) {\n\treturn vec4( value.xyz * value.w * maxRange, 1.0 );\n}\nvec4 LinearToRGBM( in vec4 value, in float maxRange ) {\n\tfloat maxRGB = max( value.x, max( value.g, value.b ) );\n\tfloat M      = clamp( maxRGB / maxRange, 0.0, 1.0 );\n\tM            = ceil( M * 255.0 ) / 255.0;\n\treturn vec4( value.rgb / ( M * maxRange ), M );\n}\nvec4 RGBDToLinear( in vec4 value, in float maxRange ) {\n\treturn vec4( value.rgb * ( ( maxRange / 255.0 ) / value.a ), 1.0 );\n}\nvec4 LinearToRGBD( in vec4 value, in float maxRange ) {\n\tfloat maxRGB = max( value.x, max( value.g, value.b ) );\n\tfloat D      = max( maxRange / maxRGB, 1.0 );\n\tD            = min( floor( D ) / 255.0, 1.0 );\n\treturn vec4( value.rgb * ( D * ( 255.0 / maxRange ) ), D );\n}\nconst mat3 cLogLuvM = mat3( 0.2209, 0.3390, 0.4184, 0.1138, 0.6780, 0.7319, 0.0102, 0.1130, 0.2969 );\nvec4 LinearToLogLuv( in vec4 value )  {\n\tvec3 Xp_Y_XYZp = value.rgb * cLogLuvM;\n\tXp_Y_XYZp = max(Xp_Y_XYZp, vec3(1e-6, 1e-6, 1e-6));\n\tvec4 vResult;\n\tvResult.xy = Xp_Y_XYZp.xy / Xp_Y_XYZp.z;\n\tfloat Le = 2.0 * log2(Xp_Y_XYZp.y) + 127.0;\n\tvResult.w = fract(Le);\n\tvResult.z = (Le - (floor(vResult.w*255.0))/255.0)/255.0;\n\treturn vResult;\n}\nconst mat3 cLogLuvInverseM = mat3( 6.0014, -2.7008, -1.7996, -1.3320, 3.1029, -5.7721, 0.3008, -1.0882, 5.6268 );\nvec4 LogLuvToLinear( in vec4 value ) {\n\tfloat Le = value.z * 255.0 + value.w;\n\tvec3 Xp_Y_XYZp;\n\tXp_Y_XYZp.y = exp2((Le - 127.0) / 2.0);\n\tXp_Y_XYZp.z = Xp_Y_XYZp.y / value.y;\n\tXp_Y_XYZp.x = value.x * Xp_Y_XYZp.z;\n\tvec3 vRGB = Xp_Y_XYZp.rgb * cLogLuvInverseM;\n\treturn vec4( max(vRGB, 0.0), 1.0 );\n}\n",
envmap_fragment:"#ifdef USE_ENVMAP\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\t\tvec3 cameraToVertex = normalize( vWorldPosition - cameraPosition );\n\t\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvec3 reflectVec = reflect( cameraToVertex, worldNormal );\n\t\t#else\n\t\t\tvec3 reflectVec = refract( cameraToVertex, worldNormal, refractionRatio );\n\t\t#endif\n\t#else\n\t\tvec3 reflectVec = vReflect;\n\t#endif\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tvec4 envColor = textureCube( envMap, flipNormal * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n\t#elif defined( ENVMAP_TYPE_EQUIREC )\n\t\tvec2 sampleUV;\n\t\tsampleUV.y = saturate( flipNormal * reflectVec.y * 0.5 + 0.5 );\n\t\tsampleUV.x = atan( flipNormal * reflectVec.z, flipNormal * reflectVec.x ) * RECIPROCAL_PI2 + 0.5;\n\t\tvec4 envColor = texture2D( envMap, sampleUV );\n\t#elif defined( ENVMAP_TYPE_SPHERE )\n\t\tvec3 reflectView = flipNormal * normalize( ( viewMatrix * vec4( reflectVec, 0.0 ) ).xyz + vec3( 0.0, 0.0, 1.0 ) );\n\t\tvec4 envColor = texture2D( envMap, reflectView.xy * 0.5 + 0.5 );\n\t#else\n\t\tvec4 envColor = vec4( 0.0 );\n\t#endif\n\tenvColor = envMapTexelToLinear( envColor );\n\t#ifdef ENVMAP_BLENDING_MULTIPLY\n\t\toutgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_MIX )\n\t\toutgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_ADD )\n\t\toutgoingLight += envColor.xyz * specularStrength * reflectivity;\n\t#endif\n#endif\n",
envmap_pars_fragment:"#if defined( USE_ENVMAP ) || defined( PHYSICAL )\n\tuniform float reflectivity;\n\tuniform float envMapIntensity;\n#endif\n#ifdef USE_ENVMAP\n\t#if ! defined( PHYSICAL ) && ( defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) )\n\t\tvarying vec3 vWorldPosition;\n\t#endif\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tuniform samplerCube envMap;\n\t#else\n\t\tuniform sampler2D envMap;\n\t#endif\n\tuniform float flipEnvMap;\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( PHYSICAL )\n\t\tuniform float refractionRatio;\n\t#else\n\t\tvarying vec3 vReflect;\n\t#endif\n#endif\n",
envmap_pars_vertex:"#ifdef USE_ENVMAP\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\t\tvarying vec3 vWorldPosition;\n\t#else\n\t\tvarying vec3 vReflect;\n\t\tuniform float refractionRatio;\n\t#endif\n#endif\n",envmap_vertex:"#ifdef USE_ENVMAP\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\t\tvWorldPosition = worldPosition.xyz;\n\t#else\n\t\tvec3 cameraToVertex = normalize( worldPosition.xyz - cameraPosition );\n\t\tvec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvReflect = reflect( cameraToVertex, worldNormal );\n\t\t#else\n\t\t\tvReflect = refract( cameraToVertex, worldNormal, refractionRatio );\n\t\t#endif\n\t#endif\n#endif\n",
fog_vertex:"\n#ifdef USE_FOG\nfogDepth = -mvPosition.z;\n#endif",fog_pars_vertex:"#ifdef USE_FOG\n  varying float fogDepth;\n#endif\n",fog_fragment:"#ifdef USE_FOG\n\t#ifdef FOG_EXP2\n\t\tfloat fogFactor = whiteCompliment( exp2( - fogDensity * fogDensity * fogDepth * fogDepth * LOG2 ) );\n\t#else\n\t\tfloat fogFactor = smoothstep( fogNear, fogFar, fogDepth );\n\t#endif\n\tgl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );\n#endif\n",fog_pars_fragment:"#ifdef USE_FOG\n\tuniform vec3 fogColor;\n\tvarying float fogDepth;\n\t#ifdef FOG_EXP2\n\t\tuniform float fogDensity;\n\t#else\n\t\tuniform float fogNear;\n\t\tuniform float fogFar;\n\t#endif\n#endif\n",
gradientmap_pars_fragment:"#ifdef TOON\n\tuniform sampler2D gradientMap;\n\tvec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {\n\t\tfloat dotNL = dot( normal, lightDirection );\n\t\tvec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );\n\t\t#ifdef USE_GRADIENTMAP\n\t\t\treturn texture2D( gradientMap, coord ).rgb;\n\t\t#else\n\t\t\treturn ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );\n\t\t#endif\n\t}\n#endif\n",lightmap_fragment:"#ifdef USE_LIGHTMAP\n\treflectedLight.indirectDiffuse += PI * texture2D( lightMap, vUv2 ).xyz * lightMapIntensity;\n#endif\n",
lightmap_pars_fragment:"#ifdef USE_LIGHTMAP\n\tuniform sampler2D lightMap;\n\tuniform float lightMapIntensity;\n#endif",lights_lambert_vertex:"vec3 diffuse = vec3( 1.0 );\nGeometricContext geometry;\ngeometry.position = mvPosition.xyz;\ngeometry.normal = normalize( transformedNormal );\ngeometry.viewDir = normalize( -mvPosition.xyz );\nGeometricContext backGeometry;\nbackGeometry.position = geometry.position;\nbackGeometry.normal = -geometry.normal;\nbackGeometry.viewDir = geometry.viewDir;\nvLightFront = vec3( 0.0 );\n#ifdef DOUBLE_SIDED\n\tvLightBack = vec3( 0.0 );\n#endif\nIncidentLight directLight;\nfloat dotNL;\nvec3 directLightColor_Diffuse;\n#if NUM_POINT_LIGHTS > 0\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tgetPointDirectLightIrradiance( pointLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tgetSpotDirectLightIrradiance( spotLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n#endif\n#if NUM_DIR_LIGHTS > 0\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tgetDirectionalDirectLightIrradiance( directionalLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n#endif\n#if NUM_HEMI_LIGHTS > 0\n\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\t\tvLightFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry );\n\t\t#endif\n\t}\n#endif\n",
lights_pars:"uniform vec3 ambientLightColor;\nvec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {\n\tvec3 irradiance = ambientLightColor;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\treturn irradiance;\n}\n#if NUM_DIR_LIGHTS > 0\n\tstruct DirectionalLight {\n\t\tvec3 direction;\n\t\tvec3 color;\n\t\tint shadow;\n\t\tfloat shadowBias;\n\t\tfloat shadowRadius;\n\t\tvec2 shadowMapSize;\n\t};\n\tuniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];\n\tvoid getDirectionalDirectLightIrradiance( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n\t\tdirectLight.color = directionalLight.color;\n\t\tdirectLight.direction = directionalLight.direction;\n\t\tdirectLight.visible = true;\n\t}\n#endif\n#if NUM_POINT_LIGHTS > 0\n\tstruct PointLight {\n\t\tvec3 position;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t\tint shadow;\n\t\tfloat shadowBias;\n\t\tfloat shadowRadius;\n\t\tvec2 shadowMapSize;\n\t};\n\tuniform PointLight pointLights[ NUM_POINT_LIGHTS ];\n\tvoid getPointDirectLightIrradiance( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n\t\tvec3 lVector = pointLight.position - geometry.position;\n\t\tdirectLight.direction = normalize( lVector );\n\t\tfloat lightDistance = length( lVector );\n\t\tdirectLight.color = pointLight.color;\n\t\tdirectLight.color *= punctualLightIntensityToIrradianceFactor( lightDistance, pointLight.distance, pointLight.decay );\n\t\tdirectLight.visible = ( directLight.color != vec3( 0.0 ) );\n\t}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n\tstruct SpotLight {\n\t\tvec3 position;\n\t\tvec3 direction;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t\tfloat coneCos;\n\t\tfloat penumbraCos;\n\t\tint shadow;\n\t\tfloat shadowBias;\n\t\tfloat shadowRadius;\n\t\tvec2 shadowMapSize;\n\t};\n\tuniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];\n\tvoid getSpotDirectLightIrradiance( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight directLight  ) {\n\t\tvec3 lVector = spotLight.position - geometry.position;\n\t\tdirectLight.direction = normalize( lVector );\n\t\tfloat lightDistance = length( lVector );\n\t\tfloat angleCos = dot( directLight.direction, spotLight.direction );\n\t\tif ( angleCos > spotLight.coneCos ) {\n\t\t\tfloat spotEffect = smoothstep( spotLight.coneCos, spotLight.penumbraCos, angleCos );\n\t\t\tdirectLight.color = spotLight.color;\n\t\t\tdirectLight.color *= spotEffect * punctualLightIntensityToIrradianceFactor( lightDistance, spotLight.distance, spotLight.decay );\n\t\t\tdirectLight.visible = true;\n\t\t} else {\n\t\t\tdirectLight.color = vec3( 0.0 );\n\t\t\tdirectLight.visible = false;\n\t\t}\n\t}\n#endif\n#if NUM_RECT_AREA_LIGHTS > 0\n\tstruct RectAreaLight {\n\t\tvec3 color;\n\t\tvec3 position;\n\t\tvec3 halfWidth;\n\t\tvec3 halfHeight;\n\t};\n\tuniform sampler2D ltcMat;\tuniform sampler2D ltcMag;\n\tuniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];\n#endif\n#if NUM_HEMI_LIGHTS > 0\n\tstruct HemisphereLight {\n\t\tvec3 direction;\n\t\tvec3 skyColor;\n\t\tvec3 groundColor;\n\t};\n\tuniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];\n\tvec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in GeometricContext geometry ) {\n\t\tfloat dotNL = dot( geometry.normal, hemiLight.direction );\n\t\tfloat hemiDiffuseWeight = 0.5 * dotNL + 0.5;\n\t\tvec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tirradiance *= PI;\n\t\t#endif\n\t\treturn irradiance;\n\t}\n#endif\n#if defined( USE_ENVMAP ) && defined( PHYSICAL )\n\tvec3 getLightProbeIndirectIrradiance( const in GeometricContext geometry, const in int maxMIPLevel ) {\n\t\tvec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );\n\t\t#ifdef ENVMAP_TYPE_CUBE\n\t\t\tvec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = textureCubeLodEXT( envMap, queryVec, float( maxMIPLevel ) );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = textureCube( envMap, queryVec, float( maxMIPLevel ) );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\t\tvec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );\n\t\t\tvec4 envMapColor = textureCubeUV( queryVec, 1.0 );\n\t\t#else\n\t\t\tvec4 envMapColor = vec4( 0.0 );\n\t\t#endif\n\t\treturn PI * envMapColor.rgb * envMapIntensity;\n\t}\n\tfloat getSpecularMIPLevel( const in float blinnShininessExponent, const in int maxMIPLevel ) {\n\t\tfloat maxMIPLevelScalar = float( maxMIPLevel );\n\t\tfloat desiredMIPLevel = maxMIPLevelScalar - 0.79248 - 0.5 * log2( pow2( blinnShininessExponent ) + 1.0 );\n\t\treturn clamp( desiredMIPLevel, 0.0, maxMIPLevelScalar );\n\t}\n\tvec3 getLightProbeIndirectRadiance( const in GeometricContext geometry, const in float blinnShininessExponent, const in int maxMIPLevel ) {\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvec3 reflectVec = reflect( -geometry.viewDir, geometry.normal );\n\t\t#else\n\t\t\tvec3 reflectVec = refract( -geometry.viewDir, geometry.normal, refractionRatio );\n\t\t#endif\n\t\treflectVec = inverseTransformDirection( reflectVec, viewMatrix );\n\t\tfloat specularMIPLevel = getSpecularMIPLevel( blinnShininessExponent, maxMIPLevel );\n\t\t#ifdef ENVMAP_TYPE_CUBE\n\t\t\tvec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = textureCubeLodEXT( envMap, queryReflectVec, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = textureCube( envMap, queryReflectVec, specularMIPLevel );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\t\tvec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );\n\t\t\tvec4 envMapColor = textureCubeUV(queryReflectVec, BlinnExponentToGGXRoughness(blinnShininessExponent));\n\t\t#elif defined( ENVMAP_TYPE_EQUIREC )\n\t\t\tvec2 sampleUV;\n\t\t\tsampleUV.y = saturate( reflectVec.y * 0.5 + 0.5 );\n\t\t\tsampleUV.x = atan( reflectVec.z, reflectVec.x ) * RECIPROCAL_PI2 + 0.5;\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = texture2DLodEXT( envMap, sampleUV, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = texture2D( envMap, sampleUV, specularMIPLevel );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_SPHERE )\n\t\t\tvec3 reflectView = normalize( ( viewMatrix * vec4( reflectVec, 0.0 ) ).xyz + vec3( 0.0,0.0,1.0 ) );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = texture2DLodEXT( envMap, reflectView.xy * 0.5 + 0.5, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = texture2D( envMap, reflectView.xy * 0.5 + 0.5, specularMIPLevel );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#endif\n\t\treturn envMapColor.rgb * envMapIntensity;\n\t}\n#endif\n",
lights_phong_fragment:"BlinnPhongMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularColor = specular;\nmaterial.specularShininess = shininess;\nmaterial.specularStrength = specularStrength;\n",lights_phong_pars_fragment:"varying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\nstruct BlinnPhongMaterial {\n\tvec3\tdiffuseColor;\n\tvec3\tspecularColor;\n\tfloat\tspecularShininess;\n\tfloat\tspecularStrength;\n};\n#if NUM_RECT_AREA_LIGHTS > 0\n\tvoid RE_Direct_RectArea_BlinnPhong( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\t\tvec3 matDiffColor = material.diffuseColor;\n\t\tvec3 matSpecColor = material.specularColor;\n\t\tvec3 lightColor   = rectAreaLight.color;\n\t\tfloat roughness = BlinnExponentToGGXRoughness( material.specularShininess );\n\t\tvec3 spec = Rect_Area_Light_Specular_Reflectance(\n\t\t\t\tgeometry,\n\t\t\t\trectAreaLight.position, rectAreaLight.halfWidth, rectAreaLight.halfHeight,\n\t\t\t\troughness,\n\t\t\t\tltcMat, ltcMag );\n\t\tvec3 diff = Rect_Area_Light_Diffuse_Reflectance(\n\t\t\t\tgeometry,\n\t\t\t\trectAreaLight.position, rectAreaLight.halfWidth, rectAreaLight.halfHeight );\n\t\treflectedLight.directSpecular += lightColor * matSpecColor * spec / PI2;\n\t\treflectedLight.directDiffuse  += lightColor * matDiffColor * diff / PI2;\n\t}\n#endif\nvoid RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\t#ifdef TOON\n\t\tvec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;\n\t#else\n\t\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\t\tvec3 irradiance = dotNL * directLight.color;\n\t#endif\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\treflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n\treflectedLight.directSpecular += irradiance * BRDF_Specular_BlinnPhong( directLight, geometry, material.specularColor, material.specularShininess ) * material.specularStrength;\n}\nvoid RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\n#define RE_Direct\t\t\t\tRE_Direct_BlinnPhong\n#define RE_Direct_RectArea\t\tRE_Direct_RectArea_BlinnPhong\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_BlinnPhong\n#define Material_LightProbeLOD( material )\t(0)\n",
lights_physical_fragment:"PhysicalMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );\nmaterial.specularRoughness = clamp( roughnessFactor, 0.04, 1.0 );\n#ifdef STANDARD\n\tmaterial.specularColor = mix( vec3( DEFAULT_SPECULAR_COEFFICIENT ), diffuseColor.rgb, metalnessFactor );\n#else\n\tmaterial.specularColor = mix( vec3( MAXIMUM_SPECULAR_COEFFICIENT * pow2( reflectivity ) ), diffuseColor.rgb, metalnessFactor );\n\tmaterial.clearCoat = saturate( clearCoat );\tmaterial.clearCoatRoughness = clamp( clearCoatRoughness, 0.04, 1.0 );\n#endif\n",
lights_physical_pars_fragment:"struct PhysicalMaterial {\n\tvec3\tdiffuseColor;\n\tfloat\tspecularRoughness;\n\tvec3\tspecularColor;\n\t#ifndef STANDARD\n\t\tfloat clearCoat;\n\t\tfloat clearCoatRoughness;\n\t#endif\n};\n#define MAXIMUM_SPECULAR_COEFFICIENT 0.16\n#define DEFAULT_SPECULAR_COEFFICIENT 0.04\nfloat clearCoatDHRApprox( const in float roughness, const in float dotNL ) {\n\treturn DEFAULT_SPECULAR_COEFFICIENT + ( 1.0 - DEFAULT_SPECULAR_COEFFICIENT ) * ( pow( 1.0 - dotNL, 5.0 ) * pow( 1.0 - roughness, 2.0 ) );\n}\n#if NUM_RECT_AREA_LIGHTS > 0\n\tvoid RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\t\tvec3 matDiffColor = material.diffuseColor;\n\t\tvec3 matSpecColor = material.specularColor;\n\t\tvec3 lightColor   = rectAreaLight.color;\n\t\tfloat roughness = material.specularRoughness;\n\t\tvec3 spec = Rect_Area_Light_Specular_Reflectance(\n\t\t\t\tgeometry,\n\t\t\t\trectAreaLight.position, rectAreaLight.halfWidth, rectAreaLight.halfHeight,\n\t\t\t\troughness,\n\t\t\t\tltcMat, ltcMag );\n\t\tvec3 diff = Rect_Area_Light_Diffuse_Reflectance(\n\t\t\t\tgeometry,\n\t\t\t\trectAreaLight.position, rectAreaLight.halfWidth, rectAreaLight.halfHeight );\n\t\treflectedLight.directSpecular += lightColor * matSpecColor * spec;\n\t\treflectedLight.directDiffuse  += lightColor * matDiffColor * diff;\n\t}\n#endif\nvoid RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\t#ifndef STANDARD\n\t\tfloat clearCoatDHR = material.clearCoat * clearCoatDHRApprox( material.clearCoatRoughness, dotNL );\n\t#else\n\t\tfloat clearCoatDHR = 0.0;\n\t#endif\n\treflectedLight.directSpecular += ( 1.0 - clearCoatDHR ) * irradiance * BRDF_Specular_GGX( directLight, geometry, material.specularColor, material.specularRoughness );\n\treflectedLight.directDiffuse += ( 1.0 - clearCoatDHR ) * irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n\t#ifndef STANDARD\n\t\treflectedLight.directSpecular += irradiance * material.clearCoat * BRDF_Specular_GGX( directLight, geometry, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearCoatRoughness );\n\t#endif\n}\nvoid RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 clearCoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\t#ifndef STANDARD\n\t\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\t\tfloat dotNL = dotNV;\n\t\tfloat clearCoatDHR = material.clearCoat * clearCoatDHRApprox( material.clearCoatRoughness, dotNL );\n\t#else\n\t\tfloat clearCoatDHR = 0.0;\n\t#endif\n\treflectedLight.indirectSpecular += ( 1.0 - clearCoatDHR ) * radiance * BRDF_Specular_GGX_Environment( geometry, material.specularColor, material.specularRoughness );\n\t#ifndef STANDARD\n\t\treflectedLight.indirectSpecular += clearCoatRadiance * material.clearCoat * BRDF_Specular_GGX_Environment( geometry, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearCoatRoughness );\n\t#endif\n}\n#define RE_Direct\t\t\t\tRE_Direct_Physical\n#define RE_Direct_RectArea\t\tRE_Direct_RectArea_Physical\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Physical\n#define RE_IndirectSpecular\t\tRE_IndirectSpecular_Physical\n#define Material_BlinnShininessExponent( material )   GGXRoughnessToBlinnExponent( material.specularRoughness )\n#define Material_ClearCoat_BlinnShininessExponent( material )   GGXRoughnessToBlinnExponent( material.clearCoatRoughness )\nfloat computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {\n\treturn saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );\n}\n",
lights_template:"\nGeometricContext geometry;\ngeometry.position = - vViewPosition;\ngeometry.normal = normal;\ngeometry.viewDir = normalize( vViewPosition );\nIncidentLight directLight;\n#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )\n\tPointLight pointLight;\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tpointLight = pointLights[ i ];\n\t\tgetPointDirectLightIrradiance( pointLight, geometry, directLight );\n\t\t#ifdef USE_SHADOWMAP\n\t\tdirectLight.color *= all( bvec2( pointLight.shadow, directLight.visible ) ) ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )\n\tSpotLight spotLight;\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tspotLight = spotLights[ i ];\n\t\tgetSpotDirectLightIrradiance( spotLight, geometry, directLight );\n\t\t#ifdef USE_SHADOWMAP\n\t\tdirectLight.color *= all( bvec2( spotLight.shadow, directLight.visible ) ) ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )\n\tDirectionalLight directionalLight;\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tdirectionalLight = directionalLights[ i ];\n\t\tgetDirectionalDirectLightIrradiance( directionalLight, geometry, directLight );\n\t\t#ifdef USE_SHADOWMAP\n\t\tdirectLight.color *= all( bvec2( directionalLight.shadow, directLight.visible ) ) ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )\n\tRectAreaLight rectAreaLight;\n\tfor ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {\n\t\trectAreaLight = rectAreaLights[ i ];\n\t\tRE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if defined( RE_IndirectDiffuse )\n\tvec3 irradiance = getAmbientLightIrradiance( ambientLightColor );\n\t#ifdef USE_LIGHTMAP\n\t\tvec3 lightMapIrradiance = texture2D( lightMap, vUv2 ).xyz * lightMapIntensity;\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tlightMapIrradiance *= PI;\n\t\t#endif\n\t\tirradiance += lightMapIrradiance;\n\t#endif\n\t#if ( NUM_HEMI_LIGHTS > 0 )\n\t\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\t\t\tirradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );\n\t\t}\n\t#endif\n\t#if defined( USE_ENVMAP ) && defined( PHYSICAL ) && defined( ENVMAP_TYPE_CUBE_UV )\n\t\tirradiance += getLightProbeIndirectIrradiance( geometry, 8 );\n\t#endif\n\tRE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );\n#endif\n#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )\n\tvec3 radiance = getLightProbeIndirectRadiance( geometry, Material_BlinnShininessExponent( material ), 8 );\n\t#ifndef STANDARD\n\t\tvec3 clearCoatRadiance = getLightProbeIndirectRadiance( geometry, Material_ClearCoat_BlinnShininessExponent( material ), 8 );\n\t#else\n\t\tvec3 clearCoatRadiance = vec3( 0.0 );\n\t#endif\n\tRE_IndirectSpecular( radiance, clearCoatRadiance, geometry, material, reflectedLight );\n#endif\n",
logdepthbuf_fragment:"#if defined(USE_LOGDEPTHBUF) && defined(USE_LOGDEPTHBUF_EXT)\n\tgl_FragDepthEXT = log2(vFragDepth) * logDepthBufFC * 0.5;\n#endif",logdepthbuf_pars_fragment:"#ifdef USE_LOGDEPTHBUF\n\tuniform float logDepthBufFC;\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvarying float vFragDepth;\n\t#endif\n#endif\n",logdepthbuf_pars_vertex:"#ifdef USE_LOGDEPTHBUF\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvarying float vFragDepth;\n\t#endif\n\tuniform float logDepthBufFC;\n#endif",logdepthbuf_vertex:"#ifdef USE_LOGDEPTHBUF\n\tgl_Position.z = log2(max( EPSILON, gl_Position.w + 1.0 )) * logDepthBufFC;\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvFragDepth = 1.0 + gl_Position.w;\n\t#else\n\t\tgl_Position.z = (gl_Position.z - 1.0) * gl_Position.w;\n\t#endif\n#endif\n",
map_fragment:"#ifdef USE_MAP\n\tvec4 texelColor = texture2D( map, vUv );\n\ttexelColor = mapTexelToLinear( texelColor );\n\tdiffuseColor *= texelColor;\n#endif\n",map_pars_fragment:"#ifdef USE_MAP\n\tuniform sampler2D map;\n#endif\n",map_particle_fragment:"#ifdef USE_MAP\n\tvec4 mapTexel = texture2D( map, vec2( gl_PointCoord.x, 1.0 - gl_PointCoord.y ) * offsetRepeat.zw + offsetRepeat.xy );\n\tdiffuseColor *= mapTexelToLinear( mapTexel );\n#endif\n",map_particle_pars_fragment:"#ifdef USE_MAP\n\tuniform vec4 offsetRepeat;\n\tuniform sampler2D map;\n#endif\n",
metalnessmap_fragment:"float metalnessFactor = metalness;\n#ifdef USE_METALNESSMAP\n\tvec4 texelMetalness = texture2D( metalnessMap, vUv );\n\tmetalnessFactor *= texelMetalness.r;\n#endif\n",metalnessmap_pars_fragment:"#ifdef USE_METALNESSMAP\n\tuniform sampler2D metalnessMap;\n#endif",morphnormal_vertex:"#ifdef USE_MORPHNORMALS\n\tobjectNormal += ( morphNormal0 - normal ) * morphTargetInfluences[ 0 ];\n\tobjectNormal += ( morphNormal1 - normal ) * morphTargetInfluences[ 1 ];\n\tobjectNormal += ( morphNormal2 - normal ) * morphTargetInfluences[ 2 ];\n\tobjectNormal += ( morphNormal3 - normal ) * morphTargetInfluences[ 3 ];\n#endif\n",
morphtarget_pars_vertex:"#ifdef USE_MORPHTARGETS\n\t#ifndef USE_MORPHNORMALS\n\tuniform float morphTargetInfluences[ 8 ];\n\t#else\n\tuniform float morphTargetInfluences[ 4 ];\n\t#endif\n#endif",morphtarget_vertex:"#ifdef USE_MORPHTARGETS\n\ttransformed += ( morphTarget0 - position ) * morphTargetInfluences[ 0 ];\n\ttransformed += ( morphTarget1 - position ) * morphTargetInfluences[ 1 ];\n\ttransformed += ( morphTarget2 - position ) * morphTargetInfluences[ 2 ];\n\ttransformed += ( morphTarget3 - position ) * morphTargetInfluences[ 3 ];\n\t#ifndef USE_MORPHNORMALS\n\ttransformed += ( morphTarget4 - position ) * morphTargetInfluences[ 4 ];\n\ttransformed += ( morphTarget5 - position ) * morphTargetInfluences[ 5 ];\n\ttransformed += ( morphTarget6 - position ) * morphTargetInfluences[ 6 ];\n\ttransformed += ( morphTarget7 - position ) * morphTargetInfluences[ 7 ];\n\t#endif\n#endif\n",
normal_flip:"#ifdef DOUBLE_SIDED\n\tfloat flipNormal = ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n#else\n\tfloat flipNormal = 1.0;\n#endif\n",normal_fragment:"#ifdef FLAT_SHADED\n\tvec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );\n\tvec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );\n\tvec3 normal = normalize( cross( fdx, fdy ) );\n#else\n\tvec3 normal = normalize( vNormal ) * flipNormal;\n#endif\n#ifdef USE_NORMALMAP\n\tnormal = perturbNormal2Arb( -vViewPosition, normal );\n#elif defined( USE_BUMPMAP )\n\tnormal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd() );\n#endif\n",
normalmap_pars_fragment:"#ifdef USE_NORMALMAP\n\tuniform sampler2D normalMap;\n\tuniform vec2 normalScale;\n\tvec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm ) {\n\t\tvec3 q0 = dFdx( eye_pos.xyz );\n\t\tvec3 q1 = dFdy( eye_pos.xyz );\n\t\tvec2 st0 = dFdx( vUv.st );\n\t\tvec2 st1 = dFdy( vUv.st );\n\t\tvec3 S = normalize( q0 * st1.t - q1 * st0.t );\n\t\tvec3 T = normalize( -q0 * st1.s + q1 * st0.s );\n\t\tvec3 N = normalize( surf_norm );\n\t\tvec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\t\tmapN.xy = normalScale * mapN.xy;\n\t\tmat3 tsn = mat3( S, T, N );\n\t\treturn normalize( tsn * mapN );\n\t}\n#endif\n",
packing:"vec3 packNormalToRGB( const in vec3 normal ) {\n\treturn normalize( normal ) * 0.5 + 0.5;\n}\nvec3 unpackRGBToNormal( const in vec3 rgb ) {\n\treturn 1.0 - 2.0 * rgb.xyz;\n}\nconst float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;\nconst vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256.,  256. );\nconst vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );\nconst float ShiftRight8 = 1. / 256.;\nvec4 packDepthToRGBA( const in float v ) {\n\tvec4 r = vec4( fract( v * PackFactors ), v );\n\tr.yzw -= r.xyz * ShiftRight8;\treturn r * PackUpscale;\n}\nfloat unpackRGBAToDepth( const in vec4 v ) {\n\treturn dot( v, UnpackFactors );\n}\nfloat viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn ( viewZ + near ) / ( near - far );\n}\nfloat orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {\n\treturn linearClipZ * ( near - far ) - near;\n}\nfloat viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn (( near + viewZ ) * far ) / (( far - near ) * viewZ );\n}\nfloat perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {\n\treturn ( near * far ) / ( ( far - near ) * invClipZ - far );\n}\n",
premultiplied_alpha_fragment:"#ifdef PREMULTIPLIED_ALPHA\n\tgl_FragColor.rgb *= gl_FragColor.a;\n#endif\n",project_vertex:"#ifdef USE_SKINNING\n\tvec4 mvPosition = modelViewMatrix * skinned;\n#else\n\tvec4 mvPosition = modelViewMatrix * vec4( transformed, 1.0 );\n#endif\ngl_Position = projectionMatrix * mvPosition;\n",roughnessmap_fragment:"float roughnessFactor = roughness;\n#ifdef USE_ROUGHNESSMAP\n\tvec4 texelRoughness = texture2D( roughnessMap, vUv );\n\troughnessFactor *= texelRoughness.r;\n#endif\n",
roughnessmap_pars_fragment:"#ifdef USE_ROUGHNESSMAP\n\tuniform sampler2D roughnessMap;\n#endif",shadowmap_pars_fragment:"#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHTS > 0\n\t\tuniform sampler2D directionalShadowMap[ NUM_DIR_LIGHTS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHTS ];\n\t#endif\n\t#if NUM_SPOT_LIGHTS > 0\n\t\tuniform sampler2D spotShadowMap[ NUM_SPOT_LIGHTS ];\n\t\tvarying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHTS ];\n\t#endif\n\t#if NUM_POINT_LIGHTS > 0\n\t\tuniform sampler2D pointShadowMap[ NUM_POINT_LIGHTS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHTS ];\n\t#endif\n\tfloat texture2DCompare( sampler2D depths, vec2 uv, float compare ) {\n\t\treturn step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );\n\t}\n\tfloat texture2DShadowLerp( sampler2D depths, vec2 size, vec2 uv, float compare ) {\n\t\tconst vec2 offset = vec2( 0.0, 1.0 );\n\t\tvec2 texelSize = vec2( 1.0 ) / size;\n\t\tvec2 centroidUV = floor( uv * size + 0.5 ) / size;\n\t\tfloat lb = texture2DCompare( depths, centroidUV + texelSize * offset.xx, compare );\n\t\tfloat lt = texture2DCompare( depths, centroidUV + texelSize * offset.xy, compare );\n\t\tfloat rb = texture2DCompare( depths, centroidUV + texelSize * offset.yx, compare );\n\t\tfloat rt = texture2DCompare( depths, centroidUV + texelSize * offset.yy, compare );\n\t\tvec2 f = fract( uv * size + 0.5 );\n\t\tfloat a = mix( lb, lt, f.y );\n\t\tfloat b = mix( rb, rt, f.y );\n\t\tfloat c = mix( a, b, f.x );\n\t\treturn c;\n\t}\n\tfloat getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n\t\tshadowCoord.xyz /= shadowCoord.w;\n\t\tshadowCoord.z += shadowBias;\n\t\tbvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );\n\t\tbool inFrustum = all( inFrustumVec );\n\t\tbvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );\n\t\tbool frustumTest = all( frustumTestVec );\n\t\tif ( frustumTest ) {\n\t\t#if defined( SHADOWMAP_TYPE_PCF )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx0 = - texelSize.x * shadowRadius;\n\t\t\tfloat dy0 = - texelSize.y * shadowRadius;\n\t\t\tfloat dx1 = + texelSize.x * shadowRadius;\n\t\t\tfloat dy1 = + texelSize.y * shadowRadius;\n\t\t\treturn (\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#elif defined( SHADOWMAP_TYPE_PCF_SOFT )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx0 = - texelSize.x * shadowRadius;\n\t\t\tfloat dy0 = - texelSize.y * shadowRadius;\n\t\t\tfloat dx1 = + texelSize.x * shadowRadius;\n\t\t\tfloat dy1 = + texelSize.y * shadowRadius;\n\t\t\treturn (\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy, shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#else\n\t\t\treturn texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );\n\t\t#endif\n\t\t}\n\t\treturn 1.0;\n\t}\n\tvec2 cubeToUV( vec3 v, float texelSizeY ) {\n\t\tvec3 absV = abs( v );\n\t\tfloat scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );\n\t\tabsV *= scaleToCube;\n\t\tv *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );\n\t\tvec2 planar = v.xy;\n\t\tfloat almostATexel = 1.5 * texelSizeY;\n\t\tfloat almostOne = 1.0 - almostATexel;\n\t\tif ( absV.z >= almostOne ) {\n\t\t\tif ( v.z > 0.0 )\n\t\t\t\tplanar.x = 4.0 - v.x;\n\t\t} else if ( absV.x >= almostOne ) {\n\t\t\tfloat signX = sign( v.x );\n\t\t\tplanar.x = v.z * signX + 2.0 * signX;\n\t\t} else if ( absV.y >= almostOne ) {\n\t\t\tfloat signY = sign( v.y );\n\t\t\tplanar.x = v.x + 2.0 * signY + 2.0;\n\t\t\tplanar.y = v.z * signY - 2.0;\n\t\t}\n\t\treturn vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );\n\t}\n\tfloat getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n\t\tvec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );\n\t\tvec3 lightToPosition = shadowCoord.xyz;\n\t\tvec3 bd3D = normalize( lightToPosition );\n\t\tfloat dp = ( length( lightToPosition ) - shadowBias ) / 1000.0;\n\t\t#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT )\n\t\t\tvec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;\n\t\t\treturn (\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#else\n\t\t\treturn texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );\n\t\t#endif\n\t}\n#endif\n",
shadowmap_pars_vertex:"#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHTS > 0\n\t\tuniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHTS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHTS ];\n\t#endif\n\t#if NUM_SPOT_LIGHTS > 0\n\t\tuniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHTS ];\n\t\tvarying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHTS ];\n\t#endif\n\t#if NUM_POINT_LIGHTS > 0\n\t\tuniform mat4 pointShadowMatrix[ NUM_POINT_LIGHTS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHTS ];\n\t#endif\n#endif\n",
shadowmap_vertex:"#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHTS > 0\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tvDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * worldPosition;\n\t}\n\t#endif\n\t#if NUM_SPOT_LIGHTS > 0\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tvSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * worldPosition;\n\t}\n\t#endif\n\t#if NUM_POINT_LIGHTS > 0\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tvPointShadowCoord[ i ] = pointShadowMatrix[ i ] * worldPosition;\n\t}\n\t#endif\n#endif\n",
shadowmask_pars_fragment:"float getShadowMask() {\n\tfloat shadow = 1.0;\n\t#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHTS > 0\n\tDirectionalLight directionalLight;\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tdirectionalLight = directionalLights[ i ];\n\t\tshadow *= bool( directionalLight.shadow ) ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t}\n\t#endif\n\t#if NUM_SPOT_LIGHTS > 0\n\tSpotLight spotLight;\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tspotLight = spotLights[ i ];\n\t\tshadow *= bool( spotLight.shadow ) ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n\t}\n\t#endif\n\t#if NUM_POINT_LIGHTS > 0\n\tPointLight pointLight;\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tpointLight = pointLights[ i ];\n\t\tshadow *= bool( pointLight.shadow ) ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ] ) : 1.0;\n\t}\n\t#endif\n\t#endif\n\treturn shadow;\n}\n",
skinbase_vertex:"#ifdef USE_SKINNING\n\tmat4 boneMatX = getBoneMatrix( skinIndex.x );\n\tmat4 boneMatY = getBoneMatrix( skinIndex.y );\n\tmat4 boneMatZ = getBoneMatrix( skinIndex.z );\n\tmat4 boneMatW = getBoneMatrix( skinIndex.w );\n#endif",skinning_pars_vertex:"#ifdef USE_SKINNING\n\tuniform mat4 bindMatrix;\n\tuniform mat4 bindMatrixInverse;\n\t#ifdef BONE_TEXTURE\n\t\tuniform sampler2D boneTexture;\n\t\tuniform int boneTextureWidth;\n\t\tuniform int boneTextureHeight;\n\t\tmat4 getBoneMatrix( const in float i ) {\n\t\t\tfloat j = i * 4.0;\n\t\t\tfloat x = mod( j, float( boneTextureWidth ) );\n\t\t\tfloat y = floor( j / float( boneTextureWidth ) );\n\t\t\tfloat dx = 1.0 / float( boneTextureWidth );\n\t\t\tfloat dy = 1.0 / float( boneTextureHeight );\n\t\t\ty = dy * ( y + 0.5 );\n\t\t\tvec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );\n\t\t\tvec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );\n\t\t\tvec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );\n\t\t\tvec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );\n\t\t\tmat4 bone = mat4( v1, v2, v3, v4 );\n\t\t\treturn bone;\n\t\t}\n\t#else\n\t\tuniform mat4 boneMatrices[ MAX_BONES ];\n\t\tmat4 getBoneMatrix( const in float i ) {\n\t\t\tmat4 bone = boneMatrices[ int(i) ];\n\t\t\treturn bone;\n\t\t}\n\t#endif\n#endif\n",
skinning_vertex:"#ifdef USE_SKINNING\n\tvec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );\n\tvec4 skinned = vec4( 0.0 );\n\tskinned += boneMatX * skinVertex * skinWeight.x;\n\tskinned += boneMatY * skinVertex * skinWeight.y;\n\tskinned += boneMatZ * skinVertex * skinWeight.z;\n\tskinned += boneMatW * skinVertex * skinWeight.w;\n\tskinned  = bindMatrixInverse * skinned;\n#endif\n",skinnormal_vertex:"#ifdef USE_SKINNING\n\tmat4 skinMatrix = mat4( 0.0 );\n\tskinMatrix += skinWeight.x * boneMatX;\n\tskinMatrix += skinWeight.y * boneMatY;\n\tskinMatrix += skinWeight.z * boneMatZ;\n\tskinMatrix += skinWeight.w * boneMatW;\n\tskinMatrix  = bindMatrixInverse * skinMatrix * bindMatrix;\n\tobjectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;\n#endif\n",
specularmap_fragment:"float specularStrength;\n#ifdef USE_SPECULARMAP\n\tvec4 texelSpecular = texture2D( specularMap, vUv );\n\tspecularStrength = texelSpecular.r;\n#else\n\tspecularStrength = 1.0;\n#endif",specularmap_pars_fragment:"#ifdef USE_SPECULARMAP\n\tuniform sampler2D specularMap;\n#endif",tonemapping_fragment:"#if defined( TONE_MAPPING )\n  gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );\n#endif\n",tonemapping_pars_fragment:"#define saturate(a) clamp( a, 0.0, 1.0 )\nuniform float toneMappingExposure;\nuniform float toneMappingWhitePoint;\nvec3 LinearToneMapping( vec3 color ) {\n\treturn toneMappingExposure * color;\n}\nvec3 ReinhardToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\treturn saturate( color / ( vec3( 1.0 ) + color ) );\n}\n#define Uncharted2Helper( x ) max( ( ( x * ( 0.15 * x + 0.10 * 0.50 ) + 0.20 * 0.02 ) / ( x * ( 0.15 * x + 0.50 ) + 0.20 * 0.30 ) ) - 0.02 / 0.30, vec3( 0.0 ) )\nvec3 Uncharted2ToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\treturn saturate( Uncharted2Helper( color ) / Uncharted2Helper( vec3( toneMappingWhitePoint ) ) );\n}\nvec3 OptimizedCineonToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\tcolor = max( vec3( 0.0 ), color - 0.004 );\n\treturn pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );\n}\n",
uv_pars_fragment:"#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP ) || defined( USE_ROUGHNESSMAP ) || defined( USE_METALNESSMAP )\n\tvarying vec2 vUv;\n#endif",uv_pars_vertex:"#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP ) || defined( USE_ROUGHNESSMAP ) || defined( USE_METALNESSMAP )\n\tvarying vec2 vUv;\n\tuniform vec4 offsetRepeat;\n#endif\n",
uv_vertex:"#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP ) || defined( USE_ROUGHNESSMAP ) || defined( USE_METALNESSMAP )\n\tvUv = uv * offsetRepeat.zw + offsetRepeat.xy;\n#endif",uv2_pars_fragment:"#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tvarying vec2 vUv2;\n#endif",uv2_pars_vertex:"#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tattribute vec2 uv2;\n\tvarying vec2 vUv2;\n#endif",
uv2_vertex:"#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tvUv2 = uv2;\n#endif",worldpos_vertex:"#if defined( USE_ENVMAP ) || defined( PHONG ) || defined( PHYSICAL ) || defined( LAMBERT ) || defined ( USE_SHADOWMAP )\n\t#ifdef USE_SKINNING\n\t\tvec4 worldPosition = modelMatrix * skinned;\n\t#else\n\t\tvec4 worldPosition = modelMatrix * vec4( transformed, 1.0 );\n\t#endif\n#endif\n",cube_frag:"uniform samplerCube tCube;\nuniform float tFlip;\nuniform float opacity;\nvarying vec3 vWorldPosition;\n#include <common>\nvoid main() {\n\tgl_FragColor = textureCube( tCube, vec3( tFlip * vWorldPosition.x, vWorldPosition.yz ) );\n\tgl_FragColor.a *= opacity;\n}\n",
cube_vert:"varying vec3 vWorldPosition;\n#include <common>\nvoid main() {\n\tvWorldPosition = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n}\n",depth_frag:"#if DEPTH_PACKING == 3200\n\tuniform float opacity;\n#endif\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( 1.0 );\n\t#if DEPTH_PACKING == 3200\n\t\tdiffuseColor.a = opacity;\n\t#endif\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <logdepthbuf_fragment>\n\t#if DEPTH_PACKING == 3200\n\t\tgl_FragColor = vec4( vec3( gl_FragCoord.z ), opacity );\n\t#elif DEPTH_PACKING == 3201\n\t\tgl_FragColor = packDepthToRGBA( gl_FragCoord.z );\n\t#endif\n}\n",
depth_vert:"#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <skinbase_vertex>\n\t#include <begin_vertex>\n\t#include <displacementmap_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n}\n",
distanceRGBA_frag:"uniform vec3 lightPos;\nvarying vec4 vWorldPosition;\n#include <common>\n#include <packing>\n#include <clipping_planes_pars_fragment>\nvoid main () {\n\t#include <clipping_planes_fragment>\n\tgl_FragColor = packDepthToRGBA( length( vWorldPosition.xyz - lightPos.xyz ) / 1000.0 );\n}\n",distanceRGBA_vert:"varying vec4 vWorldPosition;\n#include <common>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <skinbase_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <clipping_planes_vertex>\n\tvWorldPosition = worldPosition;\n}\n",
equirect_frag:"uniform sampler2D tEquirect;\nuniform float tFlip;\nvarying vec3 vWorldPosition;\n#include <common>\nvoid main() {\n\tvec3 direction = normalize( vWorldPosition );\n\tvec2 sampleUV;\n\tsampleUV.y = saturate( tFlip * direction.y * -0.5 + 0.5 );\n\tsampleUV.x = atan( direction.z, direction.x ) * RECIPROCAL_PI2 + 0.5;\n\tgl_FragColor = texture2D( tEquirect, sampleUV );\n}\n",equirect_vert:"varying vec3 vWorldPosition;\n#include <common>\nvoid main() {\n\tvWorldPosition = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n}\n",
linedashed_frag:"uniform vec3 diffuse;\nuniform float opacity;\nuniform float dashSize;\nuniform float totalSize;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tif ( mod( vLineDistance, totalSize ) > dashSize ) {\n\t\tdiscard;\n\t}\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <color_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}\n",
linedashed_vert:"uniform float scale;\nattribute float lineDistance;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <color_vertex>\n\tvLineDistance = scale * lineDistance;\n\tvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\n\tgl_Position = projectionMatrix * mvPosition;\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n}\n",
meshbasic_frag:"uniform vec3 diffuse;\nuniform float opacity;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\t#ifdef USE_LIGHTMAP\n\t\treflectedLight.indirectDiffuse += texture2D( lightMap, vUv2 ).xyz * lightMapIntensity;\n\t#else\n\t\treflectedLight.indirectDiffuse += vec3( 1.0 );\n\t#endif\n\t#include <aomap_fragment>\n\treflectedLight.indirectDiffuse *= diffuseColor.rgb;\n\tvec3 outgoingLight = reflectedLight.indirectDiffuse;\n\t#include <normal_flip>\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}\n",
meshbasic_vert:"#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_ENVMAP\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <worldpos_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <envmap_vertex>\n\t#include <fog_vertex>\n}\n",
meshlambert_frag:"uniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\nvarying vec3 vLightFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n#endif\n#include <common>\n#include <packing>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <bsdfs>\n#include <lights_pars>\n#include <fog_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <emissivemap_fragment>\n\treflectedLight.indirectDiffuse = getAmbientLightIrradiance( ambientLightColor );\n\t#include <lightmap_fragment>\n\treflectedLight.indirectDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb );\n\t#ifdef DOUBLE_SIDED\n\t\treflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;\n\t#else\n\t\treflectedLight.directDiffuse = vLightFront;\n\t#endif\n\treflectedLight.directDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb ) * getShadowMask();\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n\t#include <normal_flip>\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}\n",
meshlambert_vert:"#define LAMBERT\nvarying vec3 vLightFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <bsdfs>\n#include <lights_pars>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <lights_lambert_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}\n",
meshphong_frag:"#define PHONG\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <gradientmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars>\n#include <lights_phong_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <normal_flip>\n\t#include <normal_fragment>\n\t#include <emissivemap_fragment>\n\t#include <lights_phong_fragment>\n\t#include <lights_template>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}\n",
meshphong_vert:"#define PHONG\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n#endif\n\t#include <begin_vertex>\n\t#include <displacementmap_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}\n",
meshphysical_frag:"#define PHYSICAL\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float roughness;\nuniform float metalness;\nuniform float opacity;\n#ifndef STANDARD\n\tuniform float clearCoat;\n\tuniform float clearCoatRoughness;\n#endif\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <packing>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <cube_uv_reflection_fragment>\n#include <lights_pars>\n#include <lights_physical_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <roughnessmap_pars_fragment>\n#include <metalnessmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <roughnessmap_fragment>\n\t#include <metalnessmap_fragment>\n\t#include <normal_flip>\n\t#include <normal_fragment>\n\t#include <emissivemap_fragment>\n\t#include <lights_physical_fragment>\n\t#include <lights_template>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}\n",
meshphysical_vert:"#define PHYSICAL\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n#endif\n\t#include <begin_vertex>\n\t#include <displacementmap_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}\n",
normal_frag:"#define NORMAL\nuniform float opacity;\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP )\n\tvarying vec3 vViewPosition;\n#endif\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <packing>\n#include <uv_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\nvoid main() {\n\t#include <logdepthbuf_fragment>\n\t#include <normal_flip>\n\t#include <normal_fragment>\n\tgl_FragColor = vec4( packNormalToRGB( normal ), opacity );\n}\n",
normal_vert:"#define NORMAL\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP )\n\tvarying vec3 vViewPosition;\n#endif\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n#endif\n\t#include <begin_vertex>\n\t#include <displacementmap_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP )\n\tvViewPosition = - mvPosition.xyz;\n#endif\n}\n",
points_frag:"uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <color_pars_fragment>\n#include <map_particle_pars_fragment>\n#include <fog_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_particle_fragment>\n\t#include <color_fragment>\n\t#include <alphatest_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}\n",
points_vert:"uniform float size;\nuniform float scale;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <color_vertex>\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\t#ifdef USE_SIZEATTENUATION\n\t\tgl_PointSize = size * ( scale / - mvPosition.z );\n\t#else\n\t\tgl_PointSize = size;\n\t#endif\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}\n",
shadow_frag:"uniform float opacity;\n#include <common>\n#include <packing>\n#include <bsdfs>\n#include <lights_pars>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\nvoid main() {\n\tgl_FragColor = vec4( 0.0, 0.0, 0.0, opacity * ( 1.0 - getShadowMask() ) );\n}\n",shadow_vert:"#include <shadowmap_pars_vertex>\nvoid main() {\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n}\n"};J.prototype={constructor:J,
isColor:!0,r:1,g:1,b:1,set:function(a){a&&a.isColor?this.copy(a):"number"===typeof a?this.setHex(a):"string"===typeof a&&this.setStyle(a);return this},setScalar:function(a){this.b=this.g=this.r=a;return this},setHex:function(a){a=Math.floor(a);this.r=(a>>16&255)/255;this.g=(a>>8&255)/255;this.b=(a&255)/255;return this},setRGB:function(a,b,c){this.r=a;this.g=b;this.b=c;return this},setHSL:function(){function a(a,c,d){0>d&&(d+=1);1<d&&--d;return d<1/6?a+6*(c-a)*d:.5>d?c:d<2/3?a+6*(c-a)*(2/3-d):a}return function(b,
c,d){b=N.euclideanModulo(b,1);c=N.clamp(c,0,1);d=N.clamp(d,0,1);0===c?this.r=this.g=this.b=d:(c=.5>=d?d*(1+c):d+c-d*c,d=2*d-c,this.r=a(d,c,b+1/3),this.g=a(d,c,b),this.b=a(d,c,b-1/3));return this}}(),setStyle:function(a){function b(b){void 0!==b&&1>parseFloat(b)&&void 0}var c;if(c=/^((?:rgb|hsl)a?)\(\s*([^\)]*)\)/.exec(a)){var d=c[2];switch(c[1]){case "rgb":case "rgba":if(c=/^(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(d))return this.r=
Math.min(255,parseInt(c[1],10))/255,this.g=Math.min(255,parseInt(c[2],10))/255,this.b=Math.min(255,parseInt(c[3],10))/255,b(c[5]),this;if(c=/^(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(d))return this.r=Math.min(100,parseInt(c[1],10))/100,this.g=Math.min(100,parseInt(c[2],10))/100,this.b=Math.min(100,parseInt(c[3],10))/100,b(c[5]),this;break;case "hsl":case "hsla":if(c=/^([0-9]*\.?[0-9]+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(d)){var d=parseFloat(c[1])/
360,e=parseInt(c[2],10)/100,f=parseInt(c[3],10)/100;b(c[5]);return this.setHSL(d,e,f)}}}else if(c=/^\#([A-Fa-f0-9]+)$/.exec(a)){c=c[1];d=c.length;if(3===d)return this.r=parseInt(c.charAt(0)+c.charAt(0),16)/255,this.g=parseInt(c.charAt(1)+c.charAt(1),16)/255,this.b=parseInt(c.charAt(2)+c.charAt(2),16)/255,this;if(6===d)return this.r=parseInt(c.charAt(0)+c.charAt(1),16)/255,this.g=parseInt(c.charAt(2)+c.charAt(3),16)/255,this.b=parseInt(c.charAt(4)+c.charAt(5),16)/255,this}a&&0<a.length&&(c=Wf[a],void 0!==
c?this.setHex(c):void 0);return this},clone:function(){return new this.constructor(this.r,this.g,this.b)},copy:function(a){this.r=a.r;this.g=a.g;this.b=a.b;return this},copyGammaToLinear:function(a,b){void 0===b&&(b=2);this.r=Math.pow(a.r,b);this.g=Math.pow(a.g,b);this.b=Math.pow(a.b,b);return this},copyLinearToGamma:function(a,b){void 0===b&&(b=2);var c=0<b?1/b:1;this.r=Math.pow(a.r,c);this.g=Math.pow(a.g,c);this.b=Math.pow(a.b,c);return this},convertGammaToLinear:function(){var a=
this.r,b=this.g,c=this.b;this.r=a*a;this.g=b*b;this.b=c*c;return this},convertLinearToGamma:function(){this.r=Math.sqrt(this.r);this.g=Math.sqrt(this.g);this.b=Math.sqrt(this.b);return this},getHex:function(){return 255*this.r<<16^255*this.g<<8^255*this.b<<0},getHexString:function(){return("000000"+this.getHex().toString(16)).slice(-6)},getHSL:function(a){a=a||{h:0,s:0,l:0};var b=this.r,c=this.g,d=this.b,e=Math.max(b,c,d),f=Math.min(b,c,d),g,h=(f+e)/2;if(f===e)f=g=0;else{var m=e-f,f=.5>=h?m/(e+f):
m/(2-e-f);switch(e){case b:g=(c-d)/m+(c<d?6:0);break;case c:g=(d-b)/m+2;break;case d:g=(b-c)/m+4}g/=6}a.h=g;a.s=f;a.l=h;return a},getStyle:function(){return"rgb("+(255*this.r|0)+","+(255*this.g|0)+","+(255*this.b|0)+")"},offsetHSL:function(a,b,c){var d=this.getHSL();d.h+=a;d.s+=b;d.l+=c;this.setHSL(d.h,d.s,d.l);return this},add:function(a){this.r+=a.r;this.g+=a.g;this.b+=a.b;return this},addColors:function(a,b){this.r=a.r+b.r;this.g=a.g+b.g;this.b=a.b+b.b;return this},addScalar:function(a){this.r+=
a;this.g+=a;this.b+=a;return this},sub:function(a){this.r=Math.max(0,this.r-a.r);this.g=Math.max(0,this.g-a.g);this.b=Math.max(0,this.b-a.b);return this},multiply:function(a){this.r*=a.r;this.g*=a.g;this.b*=a.b;return this},multiplyScalar:function(a){this.r*=a;this.g*=a;this.b*=a;return this},lerp:function(a,b){this.r+=(a.r-this.r)*b;this.g+=(a.g-this.g)*b;this.b+=(a.b-this.b)*b;return this},equals:function(a){return a.r===this.r&&a.g===this.g&&a.b===this.b},fromArray:function(a,b){void 0===b&&(b=
0);this.r=a[b];this.g=a[b+1];this.b=a[b+2];return this},toArray:function(a,b){void 0===a&&(a=[]);void 0===b&&(b=0);a[b]=this.r;a[b+1]=this.g;a[b+2]=this.b;return a},toJSON:function(){return this.getHex()}};var Wf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,
cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,
floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,
lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,
moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,
silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};eb.prototype=Object.create(ea.prototype);eb.prototype.constructor=eb;eb.prototype.isDataTexture=!0;var V={common:{diffuse:{value:new J(15658734)},opacity:{value:1},map:{value:null},offsetRepeat:{value:new fa(0,
0,1,1)},specularMap:{value:null},alphaMap:{value:null},envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new D(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},
roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:2.5E-4},fogNear:{value:1},fogFar:{value:2E3},fogColor:{value:new J(16777215)}},lights:{ambientLightColor:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{},shadow:{},shadowBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},
direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{},shadow:{},shadowBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{},shadow:{},shadowBias:{},shadowRadius:{},shadowMapSize:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},
width:{},height:{}}}},points:{diffuse:{value:new J(15658734)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},offsetRepeat:{value:new fa(0,0,1,1)}}},bb={basic:{uniforms:Ja.merge([V.common,V.aomap,V.lightmap,V.fog]),vertexShader:Z.meshbasic_vert,fragmentShader:Z.meshbasic_frag},lambert:{uniforms:Ja.merge([V.common,V.aomap,V.lightmap,V.emissivemap,V.fog,V.lights,{emissive:{value:new J(0)}}]),vertexShader:Z.meshlambert_vert,fragmentShader:Z.meshlambert_frag},phong:{uniforms:Ja.merge([V.common,
V.aomap,V.lightmap,V.emissivemap,V.bumpmap,V.normalmap,V.displacementmap,V.gradientmap,V.fog,V.lights,{emissive:{value:new J(0)},specular:{value:new J(1118481)},shininess:{value:30}}]),vertexShader:Z.meshphong_vert,fragmentShader:Z.meshphong_frag},standard:{uniforms:Ja.merge([V.common,V.aomap,V.lightmap,V.emissivemap,V.bumpmap,V.normalmap,V.displacementmap,V.roughnessmap,V.metalnessmap,V.fog,V.lights,{emissive:{value:new J(0)},roughness:{value:.5},metalness:{value:0},envMapIntensity:{value:1}}]),
vertexShader:Z.meshphysical_vert,fragmentShader:Z.meshphysical_frag},points:{uniforms:Ja.merge([V.points,V.fog]),vertexShader:Z.points_vert,fragmentShader:Z.points_frag},dashed:{uniforms:Ja.merge([V.common,V.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Z.linedashed_vert,fragmentShader:Z.linedashed_frag},depth:{uniforms:Ja.merge([V.common,V.displacementmap]),vertexShader:Z.depth_vert,fragmentShader:Z.depth_frag},normal:{uniforms:Ja.merge([V.common,V.bumpmap,V.normalmap,
V.displacementmap,{opacity:{value:1}}]),vertexShader:Z.normal_vert,fragmentShader:Z.normal_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Z.cube_vert,fragmentShader:Z.cube_frag},equirect:{uniforms:{tEquirect:{value:null},tFlip:{value:-1}},vertexShader:Z.equirect_vert,fragmentShader:Z.equirect_frag},distanceRGBA:{uniforms:{lightPos:{value:new q}},vertexShader:Z.distanceRGBA_vert,fragmentShader:Z.distanceRGBA_frag}};bb.physical={uniforms:Ja.merge([bb.standard.uniforms,
{clearCoat:{value:0},clearCoatRoughness:{value:0}}]),vertexShader:Z.meshphysical_vert,fragmentShader:Z.meshphysical_frag};sc.prototype={constructor:sc,set:function(a,b){this.min.copy(a);this.max.copy(b);return this},setFromPoints:function(a){this.makeEmpty();for(var b=0,c=a.length;b<c;b++)this.expandByPoint(a[b]);return this},setFromCenterAndSize:function(){var a=new D;return function(b,c){var d=a.copy(c).multiplyScalar(.5);this.min.copy(b).sub(d);this.max.copy(b).add(d);return this}}(),clone:function(){return(new this.constructor).copy(this)},
copy:function(a){this.min.copy(a.min);this.max.copy(a.max);return this},makeEmpty:function(){this.min.x=this.min.y=Infinity;this.max.x=this.max.y=-Infinity;return this},isEmpty:function(){return this.max.x<this.min.x||this.max.y<this.min.y},getCenter:function(a){a=a||new D;return this.isEmpty()?a.set(0,0):a.addVectors(this.min,this.max).multiplyScalar(.5)},getSize:function(a){a=a||new D;return this.isEmpty()?a.set(0,0):a.subVectors(this.max,this.min)},expandByPoint:function(a){this.min.min(a);this.max.max(a);
return this},expandByVector:function(a){this.min.sub(a);this.max.add(a);return this},expandByScalar:function(a){this.min.addScalar(-a);this.max.addScalar(a);return this},containsPoint:function(a){return a.x<this.min.x||a.x>this.max.x||a.y<this.min.y||a.y>this.max.y?!1:!0},containsBox:function(a){return this.min.x<=a.min.x&&a.max.x<=this.max.x&&this.min.y<=a.min.y&&a.max.y<=this.max.y},getParameter:function(a,b){return(b||new D).set((a.x-this.min.x)/(this.max.x-this.min.x),(a.y-this.min.y)/(this.max.y-
this.min.y))},intersectsBox:function(a){return a.max.x<this.min.x||a.min.x>this.max.x||a.max.y<this.min.y||a.min.y>this.max.y?!1:!0},clampPoint:function(a,b){return(b||new D).copy(a).clamp(this.min,this.max)},distanceToPoint:function(){var a=new D;return function(b){return a.copy(b).clamp(this.min,this.max).sub(b).length()}}(),intersect:function(a){this.min.max(a.min);this.max.min(a.max);return this},union:function(a){this.min.min(a.min);this.max.max(a.max);return this},translate:function(a){this.min.add(a);
this.max.add(a);return this},equals:function(a){return a.min.equals(this.min)&&a.max.equals(this.max)}};var Af=0;X.prototype={constructor:X,isMaterial:!0,get needsUpdate(){return this._needsUpdate},set needsUpdate(a){!0===a&&this.update();this._needsUpdate=a},setValues:function(a){if(void 0!==a)for(var b in a){var c=a[b];if(void 0===c)void 0;else{var d=this[b];void 0===d?void 0:
d&&d.isColor?d.set(c):d&&d.isVector3&&c&&c.isVector3?d.copy(c):this[b]="overdraw"===b?Number(c):c}}},toJSON:function(a){function b(a){var b=[],c;for(c in a){var d=a[c];delete d.metadata;b.push(d)}return b}var c=void 0===a;c&&(a={textures:{},images:{}});var d={metadata:{version:4.4,type:"Material",generator:"Material.toJSON"}};d.uuid=this.uuid;d.type=this.type;""!==this.name&&(d.name=this.name);this.color&&this.color.isColor&&(d.color=this.color.getHex());void 0!==this.roughness&&(d.roughness=this.roughness);
void 0!==this.metalness&&(d.metalness=this.metalness);this.emissive&&this.emissive.isColor&&(d.emissive=this.emissive.getHex());this.specular&&this.specular.isColor&&(d.specular=this.specular.getHex());void 0!==this.shininess&&(d.shininess=this.shininess);void 0!==this.clearCoat&&(d.clearCoat=this.clearCoat);void 0!==this.clearCoatRoughness&&(d.clearCoatRoughness=this.clearCoatRoughness);this.map&&this.map.isTexture&&(d.map=this.map.toJSON(a).uuid);this.alphaMap&&this.alphaMap.isTexture&&(d.alphaMap=
this.alphaMap.toJSON(a).uuid);this.lightMap&&this.lightMap.isTexture&&(d.lightMap=this.lightMap.toJSON(a).uuid);this.bumpMap&&this.bumpMap.isTexture&&(d.bumpMap=this.bumpMap.toJSON(a).uuid,d.bumpScale=this.bumpScale);this.normalMap&&this.normalMap.isTexture&&(d.normalMap=this.normalMap.toJSON(a).uuid,d.normalScale=this.normalScale.toArray());this.displacementMap&&this.displacementMap.isTexture&&(d.displacementMap=this.displacementMap.toJSON(a).uuid,d.displacementScale=this.displacementScale,d.displacementBias=
this.displacementBias);this.roughnessMap&&this.roughnessMap.isTexture&&(d.roughnessMap=this.roughnessMap.toJSON(a).uuid);this.metalnessMap&&this.metalnessMap.isTexture&&(d.metalnessMap=this.metalnessMap.toJSON(a).uuid);this.emissiveMap&&this.emissiveMap.isTexture&&(d.emissiveMap=this.emissiveMap.toJSON(a).uuid);this.specularMap&&this.specularMap.isTexture&&(d.specularMap=this.specularMap.toJSON(a).uuid);this.envMap&&this.envMap.isTexture&&(d.envMap=this.envMap.toJSON(a).uuid,d.reflectivity=this.reflectivity);
this.gradientMap&&this.gradientMap.isTexture&&(d.gradientMap=this.gradientMap.toJSON(a).uuid);void 0!==this.size&&(d.size=this.size);void 0!==this.sizeAttenuation&&(d.sizeAttenuation=this.sizeAttenuation);1!==this.blending&&(d.blending=this.blending);2!==this.shading&&(d.shading=this.shading);0!==this.side&&(d.side=this.side);0!==this.vertexColors&&(d.vertexColors=this.vertexColors);1>this.opacity&&(d.opacity=this.opacity);!0===this.transparent&&(d.transparent=this.transparent);d.depthFunc=this.depthFunc;
d.depthTest=this.depthTest;d.depthWrite=this.depthWrite;0<this.alphaTest&&(d.alphaTest=this.alphaTest);!0===this.premultipliedAlpha&&(d.premultipliedAlpha=this.premultipliedAlpha);!0===this.wireframe&&(d.wireframe=this.wireframe);1<this.wireframeLinewidth&&(d.wireframeLinewidth=this.wireframeLinewidth);"round"!==this.wireframeLinecap&&(d.wireframeLinecap=this.wireframeLinecap);"round"!==this.wireframeLinejoin&&(d.wireframeLinejoin=this.wireframeLinejoin);d.skinning=this.skinning;d.morphTargets=this.morphTargets;
c&&(c=b(a.textures),a=b(a.images),0<c.length&&(d.textures=c),0<a.length&&(d.images=a));return d},clone:function(){return(new this.constructor).copy(this)},copy:function(a){this.name=a.name;this.fog=a.fog;this.lights=a.lights;this.blending=a.blending;this.side=a.side;this.shading=a.shading;this.vertexColors=a.vertexColors;this.opacity=a.opacity;this.transparent=a.transparent;this.blendSrc=a.blendSrc;this.blendDst=a.blendDst;this.blendEquation=a.blendEquation;this.blendSrcAlpha=a.blendSrcAlpha;this.blendDstAlpha=
a.blendDstAlpha;this.blendEquationAlpha=a.blendEquationAlpha;this.depthFunc=a.depthFunc;this.depthTest=a.depthTest;this.depthWrite=a.depthWrite;this.colorWrite=a.colorWrite;this.precision=a.precision;this.polygonOffset=a.polygonOffset;this.polygonOffsetFactor=a.polygonOffsetFactor;this.polygonOffsetUnits=a.polygonOffsetUnits;this.alphaTest=a.alphaTest;this.premultipliedAlpha=a.premultipliedAlpha;this.overdraw=a.overdraw;this.visible=a.visible;this.clipShadows=a.clipShadows;this.clipIntersection=a.clipIntersection;
a=a.clippingPlanes;var b=null;if(null!==a)for(var c=a.length,b=Array(c),d=0;d!==c;++d)b[d]=a[d].clone();this.clippingPlanes=b;return this},update:function(){this.dispatchEvent({type:"update"})},dispose:function(){this.dispatchEvent({type:"dispose"})}};Object.assign(X.prototype,pa.prototype);Ha.prototype=Object.create(X.prototype);Ha.prototype.constructor=Ha;Ha.prototype.isShaderMaterial=!0;Ha.prototype.copy=function(a){X.prototype.copy.call(this,a);this.fragmentShader=a.fragmentShader;this.vertexShader=
a.vertexShader;this.uniforms=Ja.clone(a.uniforms);this.defines=a.defines;this.wireframe=a.wireframe;this.wireframeLinewidth=a.wireframeLinewidth;this.lights=a.lights;this.clipping=a.clipping;this.skinning=a.skinning;this.morphTargets=a.morphTargets;this.morphNormals=a.morphNormals;this.extensions=a.extensions;return this};Ha.prototype.toJSON=function(a){a=X.prototype.toJSON.call(this,a);a.uniforms=this.uniforms;a.vertexShader=this.vertexShader;a.fragmentShader=this.fragmentShader;return a};ab.prototype=
Object.create(X.prototype);ab.prototype.constructor=ab;ab.prototype.isMeshDepthMaterial=!0;ab.prototype.copy=function(a){X.prototype.copy.call(this,a);this.depthPacking=a.depthPacking;this.skinning=a.skinning;this.morphTargets=a.morphTargets;this.map=a.map;this.alphaMap=a.alphaMap;this.displacementMap=a.displacementMap;this.displacementScale=a.displacementScale;this.displacementBias=a.displacementBias;this.wireframe=a.wireframe;this.wireframeLinewidth=a.wireframeLinewidth;return this};Pa.prototype=
{constructor:Pa,isBox3:!0,set:function(a,b){this.min.copy(a);this.max.copy(b);return this},setFromArray:function(a){for(var b=Infinity,c=Infinity,d=Infinity,e=-Infinity,f=-Infinity,g=-Infinity,h=0,m=a.length;h<m;h+=3){var k=a[h],l=a[h+1],p=a[h+2];k<b&&(b=k);l<c&&(c=l);p<d&&(d=p);k>e&&(e=k);l>f&&(f=l);p>g&&(g=p)}this.min.set(b,c,d);this.max.set(e,f,g);return this},setFromBufferAttribute:function(a){for(var b=Infinity,c=Infinity,d=Infinity,e=-Infinity,f=-Infinity,g=-Infinity,h=0,m=a.count;h<m;h++){var k=
a.getX(h),l=a.getY(h),p=a.getZ(h);k<b&&(b=k);l<c&&(c=l);p<d&&(d=p);k>e&&(e=k);l>f&&(f=l);p>g&&(g=p)}this.min.set(b,c,d);this.max.set(e,f,g);return this},setFromPoints:function(a){this.makeEmpty();for(var b=0,c=a.length;b<c;b++)this.expandByPoint(a[b]);return this},setFromCenterAndSize:function(){var a=new q;return function(b,c){var d=a.copy(c).multiplyScalar(.5);this.min.copy(b).sub(d);this.max.copy(b).add(d);return this}}(),setFromObject:function(a){this.makeEmpty();return this.expandByObject(a)},
clone:function(){return(new this.constructor).copy(this)},copy:function(a){this.min.copy(a.min);this.max.copy(a.max);return this},makeEmpty:function(){this.min.x=this.min.y=this.min.z=Infinity;this.max.x=this.max.y=this.max.z=-Infinity;return this},isEmpty:function(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z},getCenter:function(a){a=a||new q;return this.isEmpty()?a.set(0,0,0):a.addVectors(this.min,this.max).multiplyScalar(.5)},getSize:function(a){a=a||new q;return this.isEmpty()?
a.set(0,0,0):a.subVectors(this.max,this.min)},expandByPoint:function(a){this.min.min(a);this.max.max(a);return this},expandByVector:function(a){this.min.sub(a);this.max.add(a);return this},expandByScalar:function(a){this.min.addScalar(-a);this.max.addScalar(a);return this},expandByObject:function(){var a=new q;return function(b){var c=this;b.updateMatrixWorld(!0);b.traverse(function(b){var e,f;e=b.geometry;if(void 0!==e)if(e.isGeometry){var g=e.vertices;e=0;for(f=g.length;e<f;e++)a.copy(g[e]),a.applyMatrix4(b.matrixWorld),
c.expandByPoint(a)}else if(e.isBufferGeometry&&(g=e.attributes.position,void 0!==g))for(e=0,f=g.count;e<f;e++)a.fromBufferAttribute(g,e).applyMatrix4(b.matrixWorld),c.expandByPoint(a)});return this}}(),containsPoint:function(a){return a.x<this.min.x||a.x>this.max.x||a.y<this.min.y||a.y>this.max.y||a.z<this.min.z||a.z>this.max.z?!1:!0},containsBox:function(a){return this.min.x<=a.min.x&&a.max.x<=this.max.x&&this.min.y<=a.min.y&&a.max.y<=this.max.y&&this.min.z<=a.min.z&&a.max.z<=this.max.z},getParameter:function(a,
b){return(b||new q).set((a.x-this.min.x)/(this.max.x-this.min.x),(a.y-this.min.y)/(this.max.y-this.min.y),(a.z-this.min.z)/(this.max.z-this.min.z))},intersectsBox:function(a){return a.max.x<this.min.x||a.min.x>this.max.x||a.max.y<this.min.y||a.min.y>this.max.y||a.max.z<this.min.z||a.min.z>this.max.z?!1:!0},intersectsSphere:function(){var a;return function(b){void 0===a&&(a=new q);this.clampPoint(b.center,a);return a.distanceToSquared(b.center)<=b.radius*b.radius}}(),intersectsPlane:function(a){var b,
c;0<a.normal.x?(b=a.normal.x*this.min.x,c=a.normal.x*this.max.x):(b=a.normal.x*this.max.x,c=a.normal.x*this.min.x);0<a.normal.y?(b+=a.normal.y*this.min.y,c+=a.normal.y*this.max.y):(b+=a.normal.y*this.max.y,c+=a.normal.y*this.min.y);0<a.normal.z?(b+=a.normal.z*this.min.z,c+=a.normal.z*this.max.z):(b+=a.normal.z*this.max.z,c+=a.normal.z*this.min.z);return b<=a.constant&&c>=a.constant},clampPoint:function(a,b){return(b||new q).copy(a).clamp(this.min,this.max)},distanceToPoint:function(){var a=new q;
return function(b){return a.copy(b).clamp(this.min,this.max).sub(b).length()}}(),getBoundingSphere:function(){var a=new q;return function(b){b=b||new Na;this.getCenter(b.center);b.radius=.5*this.getSize(a).length();return b}}(),intersect:function(a){this.min.max(a.min);this.max.min(a.max);this.isEmpty()&&this.makeEmpty();return this},union:function(a){this.min.min(a.min);this.max.max(a.max);return this},applyMatrix4:function(){var a=[new q,new q,new q,new q,new q,new q,new q,new q];return function(b){if(this.isEmpty())return this;
a[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(b);a[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(b);a[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(b);a[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(b);a[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(b);a[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(b);a[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(b);a[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(b);this.setFromPoints(a);return this}}(),
translate:function(a){this.min.add(a);this.max.add(a);return this},equals:function(a){return a.min.equals(this.min)&&a.max.equals(this.max)}};Na.prototype={constructor:Na,set:function(a,b){this.center.copy(a);this.radius=b;return this},setFromPoints:function(){var a;return function(b,c){void 0===a&&(a=new Pa);var d=this.center;void 0!==c?d.copy(c):a.setFromPoints(b).getCenter(d);for(var e=0,f=0,g=b.length;f<g;f++)e=Math.max(e,d.distanceToSquared(b[f]));this.radius=Math.sqrt(e);return this}}(),clone:function(){return(new this.constructor).copy(this)},
copy:function(a){this.center.copy(a.center);this.radius=a.radius;return this},empty:function(){return 0>=this.radius},containsPoint:function(a){return a.distanceToSquared(this.center)<=this.radius*this.radius},distanceToPoint:function(a){return a.distanceTo(this.center)-this.radius},intersectsSphere:function(a){var b=this.radius+a.radius;return a.center.distanceToSquared(this.center)<=b*b},intersectsBox:function(a){return a.intersectsSphere(this)},intersectsPlane:function(a){return Math.abs(this.center.dot(a.normal)-
a.constant)<=this.radius},clampPoint:function(a,b){var c=this.center.distanceToSquared(a),d=b||new q;d.copy(a);c>this.radius*this.radius&&(d.sub(this.center).normalize(),d.multiplyScalar(this.radius).add(this.center));return d},getBoundingBox:function(a){a=a||new Pa;a.set(this.center,this.center);a.expandByScalar(this.radius);return a},applyMatrix4:function(a){this.center.applyMatrix4(a);this.radius*=a.getMaxScaleOnAxis();return this},translate:function(a){this.center.add(a);return this},equals:function(a){return a.center.equals(this.center)&&
a.radius===this.radius}};ya.prototype={constructor:ya,isMatrix3:!0,set:function(a,b,c,d,e,f,g,h,m){var k=this.elements;k[0]=a;k[1]=d;k[2]=g;k[3]=b;k[4]=e;k[5]=h;k[6]=c;k[7]=f;k[8]=m;return this},identity:function(){this.set(1,0,0,0,1,0,0,0,1);return this},clone:function(){return(new this.constructor).fromArray(this.elements)},copy:function(a){a=a.elements;this.set(a[0],a[3],a[6],a[1],a[4],a[7],a[2],a[5],a[8]);return this},setFromMatrix4:function(a){a=a.elements;this.set(a[0],a[4],a[8],a[1],a[5],a[9],
a[2],a[6],a[10]);return this},applyToBufferAttribute:function(){var a;return function(b){void 0===a&&(a=new q);for(var c=0,d=b.count;c<d;c++)a.x=b.getX(c),a.y=b.getY(c),a.z=b.getZ(c),a.applyMatrix3(this),b.setXYZ(c,a.x,a.y,a.z);return b}}(),multiplyScalar:function(a){var b=this.elements;b[0]*=a;b[3]*=a;b[6]*=a;b[1]*=a;b[4]*=a;b[7]*=a;b[2]*=a;b[5]*=a;b[8]*=a;return this},determinant:function(){var a=this.elements,b=a[0],c=a[1],d=a[2],e=a[3],f=a[4],g=a[5],h=a[6],m=a[7],a=a[8];return b*f*a-b*g*m-c*e*
a+c*g*h+d*e*m-d*f*h},getInverse:function(a,b){a&&a.isMatrix4&&void 0;var c=a.elements,d=this.elements,e=c[0],f=c[1],g=c[2],h=c[3],m=c[4],k=c[5],l=c[6],p=c[7],c=c[8],n=c*m-k*p,u=k*l-c*h,q=p*h-m*l,r=e*n+f*u+g*q;if(0===r){if(!0===b)throw Error("THREE.Matrix3.getInverse(): can't invert matrix, determinant is 0");void 0;return this.identity()}r=1/r;d[0]=n*r;
d[1]=(g*p-c*f)*r;d[2]=(k*f-g*m)*r;d[3]=u*r;d[4]=(c*e-g*l)*r;d[5]=(g*h-k*e)*r;d[6]=q*r;d[7]=(f*l-p*e)*r;d[8]=(m*e-f*h)*r;return this},transpose:function(){var a,b=this.elements;a=b[1];b[1]=b[3];b[3]=a;a=b[2];b[2]=b[6];b[6]=a;a=b[5];b[5]=b[7];b[7]=a;return this},getNormalMatrix:function(a){return this.setFromMatrix4(a).getInverse(this).transpose()},transposeIntoArray:function(a){var b=this.elements;a[0]=b[0];a[1]=b[3];a[2]=b[6];a[3]=b[1];a[4]=b[4];a[5]=b[7];a[6]=b[2];a[7]=b[5];a[8]=b[8];return this},
fromArray:function(a,b){void 0===b&&(b=0);for(var c=0;9>c;c++)this.elements[c]=a[c+b];return this},toArray:function(a,b){void 0===a&&(a=[]);void 0===b&&(b=0);var c=this.elements;a[b]=c[0];a[b+1]=c[1];a[b+2]=c[2];a[b+3]=c[3];a[b+4]=c[4];a[b+5]=c[5];a[b+6]=c[6];a[b+7]=c[7];a[b+8]=c[8];return a}};la.prototype={constructor:la,set:function(a,b){this.normal.copy(a);this.constant=b;return this},setComponents:function(a,b,c,d){this.normal.set(a,b,c);this.constant=d;return this},setFromNormalAndCoplanarPoint:function(a,
b){this.normal.copy(a);this.constant=-b.dot(this.normal);return this},setFromCoplanarPoints:function(){var a=new q,b=new q;return function(c,d,e){d=a.subVectors(e,d).cross(b.subVectors(c,d)).normalize();this.setFromNormalAndCoplanarPoint(d,c);return this}}(),clone:function(){return(new this.constructor).copy(this)},copy:function(a){this.normal.copy(a.normal);this.constant=a.constant;return this},normalize:function(){var a=1/this.normal.length();this.normal.multiplyScalar(a);this.constant*=a;return this},
negate:function(){this.constant*=-1;this.normal.negate();return this},distanceToPoint:function(a){return this.normal.dot(a)+this.constant},distanceToSphere:function(a){return this.distanceToPoint(a.center)-a.radius},projectPoint:function(a,b){return this.orthoPoint(a,b).sub(a).negate()},orthoPoint:function(a,b){var c=this.distanceToPoint(a);return(b||new q).copy(this.normal).multiplyScalar(c)},intersectLine:function(){var a=new q;return function(b,c){var d=c||new q,e=b.delta(a),f=this.normal.dot(e);
if(0===f){if(0===this.distanceToPoint(b.start))return d.copy(b.start)}else return f=-(b.start.dot(this.normal)+this.constant)/f,0>f||1<f?void 0:d.copy(e).multiplyScalar(f).add(b.start)}}(),intersectsLine:function(a){var b=this.distanceToPoint(a.start);a=this.distanceToPoint(a.end);return 0>b&&0<a||0>a&&0<b},intersectsBox:function(a){return a.intersectsPlane(this)},intersectsSphere:function(a){return a.intersectsPlane(this)},coplanarPoint:function(a){return(a||new q).copy(this.normal).multiplyScalar(-this.constant)},
applyMatrix4:function(){var a=new q,b=new ya;return function(c,d){var e=this.coplanarPoint(a).applyMatrix4(c),f=d||b.getNormalMatrix(c),f=this.normal.applyMatrix3(f).normalize();this.constant=-e.dot(f);return this}}(),translate:function(a){this.constant-=a.dot(this.normal);return this},equals:function(a){return a.normal.equals(this.normal)&&a.constant===this.constant}};tc.prototype={constructor:tc,set:function(a,b,c,d,e,f){var g=this.planes;g[0].copy(a);g[1].copy(b);g[2].copy(c);g[3].copy(d);g[4].copy(e);
g[5].copy(f);return this},clone:function(){return(new this.constructor).copy(this)},copy:function(a){for(var b=this.planes,c=0;6>c;c++)b[c].copy(a.planes[c]);return this},setFromMatrix:function(a){var b=this.planes,c=a.elements;a=c[0];var d=c[1],e=c[2],f=c[3],g=c[4],h=c[5],m=c[6],k=c[7],l=c[8],p=c[9],n=c[10],u=c[11],q=c[12],r=c[13],A=c[14],c=c[15];b[0].setComponents(f-a,k-g,u-l,c-q).normalize();b[1].setComponents(f+a,k+g,u+l,c+q).normalize();b[2].setComponents(f+d,k+h,u+p,c+r).normalize();b[3].setComponents(f-
d,k-h,u-p,c-r).normalize();b[4].setComponents(f-e,k-m,u-n,c-A).normalize();b[5].setComponents(f+e,k+m,u+n,c+A).normalize();return this},intersectsObject:function(){var a=new Na;return function(b){var c=b.geometry;null===c.boundingSphere&&c.computeBoundingSphere();a.copy(c.boundingSphere).applyMatrix4(b.matrixWorld);return this.intersectsSphere(a)}}(),intersectsSprite:function(){var a=new Na;return function(b){a.center.set(0,0,0);a.radius=.7071067811865476;a.applyMatrix4(b.matrixWorld);return this.intersectsSphere(a)}}(),
intersectsSphere:function(a){var b=this.planes,c=a.center;a=-a.radius;for(var d=0;6>d;d++)if(b[d].distanceToPoint(c)<a)return!1;return!0},intersectsBox:function(){var a=new q,b=new q;return function(c){for(var d=this.planes,e=0;6>e;e++){var f=d[e];a.x=0<f.normal.x?c.min.x:c.max.x;b.x=0<f.normal.x?c.max.x:c.min.x;a.y=0<f.normal.y?c.min.y:c.max.y;b.y=0<f.normal.y?c.max.y:c.min.y;a.z=0<f.normal.z?c.min.z:c.max.z;b.z=0<f.normal.z?c.max.z:c.min.z;var g=f.distanceToPoint(a),f=f.distanceToPoint(b);if(0>
g&&0>f)return!1}return!0}}(),containsPoint:function(a){for(var b=this.planes,c=0;6>c;c++)if(0>b[c].distanceToPoint(a))return!1;return!0}};cb.prototype={constructor:cb,set:function(a,b){this.origin.copy(a);this.direction.copy(b);return this},clone:function(){return(new this.constructor).copy(this)},copy:function(a){this.origin.copy(a.origin);this.direction.copy(a.direction);return this},at:function(a,b){return(b||new q).copy(this.direction).multiplyScalar(a).add(this.origin)},lookAt:function(a){this.direction.copy(a).sub(this.origin).normalize();
return this},recast:function(){var a=new q;return function(b){this.origin.copy(this.at(b,a));return this}}(),closestPointToPoint:function(a,b){var c=b||new q;c.subVectors(a,this.origin);var d=c.dot(this.direction);return 0>d?c.copy(this.origin):c.copy(this.direction).multiplyScalar(d).add(this.origin)},distanceToPoint:function(a){return Math.sqrt(this.distanceSqToPoint(a))},distanceSqToPoint:function(){var a=new q;return function(b){var c=a.subVectors(b,this.origin).dot(this.direction);if(0>c)return this.origin.distanceToSquared(b);
a.copy(this.direction).multiplyScalar(c).add(this.origin);return a.distanceToSquared(b)}}(),distanceSqToSegment:function(){var a=new q,b=new q,c=new q;return function(d,e,f,g){a.copy(d).add(e).multiplyScalar(.5);b.copy(e).sub(d).normalize();c.copy(this.origin).sub(a);var h=.5*d.distanceTo(e),m=-this.direction.dot(b),k=c.dot(this.direction),l=-c.dot(b),p=c.lengthSq(),n=Math.abs(1-m*m),u;0<n?(d=m*l-k,e=m*k-l,u=h*n,0<=d?e>=-u?e<=u?(h=1/n,d*=h,e*=h,m=d*(d+m*e+2*k)+e*(m*d+e+2*l)+p):(e=h,d=Math.max(0,-(m*
e+k)),m=-d*d+e*(e+2*l)+p):(e=-h,d=Math.max(0,-(m*e+k)),m=-d*d+e*(e+2*l)+p):e<=-u?(d=Math.max(0,-(-m*h+k)),e=0<d?-h:Math.min(Math.max(-h,-l),h),m=-d*d+e*(e+2*l)+p):e<=u?(d=0,e=Math.min(Math.max(-h,-l),h),m=e*(e+2*l)+p):(d=Math.max(0,-(m*h+k)),e=0<d?h:Math.min(Math.max(-h,-l),h),m=-d*d+e*(e+2*l)+p)):(e=0<m?-h:h,d=Math.max(0,-(m*e+k)),m=-d*d+e*(e+2*l)+p);f&&f.copy(this.direction).multiplyScalar(d).add(this.origin);g&&g.copy(b).multiplyScalar(e).add(a);return m}}(),intersectSphere:function(){var a=new q;
return function(b,c){a.subVectors(b.center,this.origin);var d=a.dot(this.direction),e=a.dot(a)-d*d,f=b.radius*b.radius;if(e>f)return null;f=Math.sqrt(f-e);e=d-f;d+=f;return 0>e&&0>d?null:0>e?this.at(d,c):this.at(e,c)}}(),intersectsSphere:function(a){return this.distanceToPoint(a.center)<=a.radius},distanceToPlane:function(a){var b=a.normal.dot(this.direction);if(0===b)return 0===a.distanceToPoint(this.origin)?0:null;a=-(this.origin.dot(a.normal)+a.constant)/b;return 0<=a?a:null},intersectPlane:function(a,
b){var c=this.distanceToPlane(a);return null===c?null:this.at(c,b)},intersectsPlane:function(a){var b=a.distanceToPoint(this.origin);return 0===b||0>a.normal.dot(this.direction)*b?!0:!1},intersectBox:function(a,b){var c,d,e,f,g;d=1/this.direction.x;f=1/this.direction.y;g=1/this.direction.z;var h=this.origin;0<=d?(c=(a.min.x-h.x)*d,d*=a.max.x-h.x):(c=(a.max.x-h.x)*d,d*=a.min.x-h.x);0<=f?(e=(a.min.y-h.y)*f,f*=a.max.y-h.y):(e=(a.max.y-h.y)*f,f*=a.min.y-h.y);if(c>f||e>d)return null;if(e>c||c!==c)c=e;
if(f<d||d!==d)d=f;0<=g?(e=(a.min.z-h.z)*g,g*=a.max.z-h.z):(e=(a.max.z-h.z)*g,g*=a.min.z-h.z);if(c>g||e>d)return null;if(e>c||c!==c)c=e;if(g<d||d!==d)d=g;return 0>d?null:this.at(0<=c?c:d,b)},intersectsBox:function(){var a=new q;return function(b){return null!==this.intersectBox(b,a)}}(),intersectTriangle:function(){var a=new q,b=new q,c=new q,d=new q;return function(e,f,g,h,m){b.subVectors(f,e);c.subVectors(g,e);d.crossVectors(b,c);f=this.direction.dot(d);if(0<f){if(h)return null;h=1}else if(0>f)h=
-1,f=-f;else return null;a.subVectors(this.origin,e);e=h*this.direction.dot(c.crossVectors(a,c));if(0>e)return null;g=h*this.direction.dot(b.cross(a));if(0>g||e+g>f)return null;e=-h*a.dot(d);return 0>e?null:this.at(e/f,m)}}(),applyMatrix4:function(a){this.direction.add(this.origin).applyMatrix4(a);this.origin.applyMatrix4(a);this.direction.sub(this.origin);this.direction.normalize();return this},equals:function(a){return a.origin.equals(this.origin)&&a.direction.equals(this.direction)}};db.RotationOrders=
"XYZ YZX ZXY XZY YXZ ZYX".split(" ");db.DefaultOrder="XYZ";db.prototype={constructor:db,isEuler:!0,get x(){return this._x},set x(a){this._x=a;this.onChangeCallback()},get y(){return this._y},set y(a){this._y=a;this.onChangeCallback()},get z(){return this._z},set z(a){this._z=a;this.onChangeCallback()},get order(){return this._order},set order(a){this._order=a;this.onChangeCallback()},set:function(a,b,c,d){this._x=a;this._y=b;this._z=c;this._order=d||this._order;this.onChangeCallback();return this},
clone:function(){return new this.constructor(this._x,this._y,this._z,this._order)},copy:function(a){this._x=a._x;this._y=a._y;this._z=a._z;this._order=a._order;this.onChangeCallback();return this},setFromRotationMatrix:function(a,b,c){var d=N.clamp,e=a.elements;a=e[0];var f=e[4],g=e[8],h=e[1],m=e[5],k=e[9],l=e[2],p=e[6],e=e[10];b=b||this._order;"XYZ"===b?(this._y=Math.asin(d(g,-1,1)),.99999>Math.abs(g)?(this._x=Math.atan2(-k,e),this._z=Math.atan2(-f,a)):(this._x=Math.atan2(p,m),this._z=0)):"YXZ"===
b?(this._x=Math.asin(-d(k,-1,1)),.99999>Math.abs(k)?(this._y=Math.atan2(g,e),this._z=Math.atan2(h,m)):(this._y=Math.atan2(-l,a),this._z=0)):"ZXY"===b?(this._x=Math.asin(d(p,-1,1)),.99999>Math.abs(p)?(this._y=Math.atan2(-l,e),this._z=Math.atan2(-f,m)):(this._y=0,this._z=Math.atan2(h,a))):"ZYX"===b?(this._y=Math.asin(-d(l,-1,1)),.99999>Math.abs(l)?(this._x=Math.atan2(p,e),this._z=Math.atan2(h,a)):(this._x=0,this._z=Math.atan2(-f,m))):"YZX"===b?(this._z=Math.asin(d(h,-1,1)),.99999>Math.abs(h)?(this._x=
Math.atan2(-k,m),this._y=Math.atan2(-l,a)):(this._x=0,this._y=Math.atan2(g,e))):"XZY"===b?(this._z=Math.asin(-d(f,-1,1)),.99999>Math.abs(f)?(this._x=Math.atan2(p,m),this._y=Math.atan2(g,a)):(this._x=Math.atan2(-k,e),this._y=0)):void 0;this._order=b;if(!1!==c)this.onChangeCallback();return this},setFromQuaternion:function(){var a;return function(b,c,d){void 0===a&&(a=new S);a.makeRotationFromQuaternion(b);return this.setFromRotationMatrix(a,
c,d)}}(),setFromVector3:function(a,b){return this.set(a.x,a.y,a.z,b||this._order)},reorder:function(){var a=new ca;return function(b){a.setFromEuler(this);return this.setFromQuaternion(a,b)}}(),equals:function(a){return a._x===this._x&&a._y===this._y&&a._z===this._z&&a._order===this._order},fromArray:function(a){this._x=a[0];this._y=a[1];this._z=a[2];void 0!==a[3]&&(this._order=a[3]);this.onChangeCallback();return this},toArray:function(a,b){void 0===a&&(a=[]);void 0===b&&(b=0);a[b]=this._x;a[b+1]=
this._y;a[b+2]=this._z;a[b+3]=this._order;return a},toVector3:function(a){return a?a.set(this._x,this._y,this._z):new q(this._x,this._y,this._z)},onChange:function(a){this.onChangeCallback=a;return this},onChangeCallback:function(){}};nd.prototype={constructor:nd,set:function(a){this.mask=1<<a},enable:function(a){this.mask|=1<<a},toggle:function(a){this.mask^=1<<a},disable:function(a){this.mask&=~(1<<a)},test:function(a){return 0!==(this.mask&a.mask)}};var Bf=0;x.DefaultUp=new q(0,1,0);x.DefaultMatrixAutoUpdate=
!0;x.prototype={constructor:x,isObject3D:!0,applyMatrix:function(a){this.matrix.multiplyMatrices(a,this.matrix);this.matrix.decompose(this.position,this.quaternion,this.scale)},setRotationFromAxisAngle:function(a,b){this.quaternion.setFromAxisAngle(a,b)},setRotationFromEuler:function(a){this.quaternion.setFromEuler(a,!0)},setRotationFromMatrix:function(a){this.quaternion.setFromRotationMatrix(a)},setRotationFromQuaternion:function(a){this.quaternion.copy(a)},rotateOnAxis:function(){var a=new ca;return function(b,
c){a.setFromAxisAngle(b,c);this.quaternion.multiply(a);return this}}(),rotateX:function(){var a=new q(1,0,0);return function(b){return this.rotateOnAxis(a,b)}}(),rotateY:function(){var a=new q(0,1,0);return function(b){return this.rotateOnAxis(a,b)}}(),rotateZ:function(){var a=new q(0,0,1);return function(b){return this.rotateOnAxis(a,b)}}(),translateOnAxis:function(){var a=new q;return function(b,c){a.copy(b).applyQuaternion(this.quaternion);this.position.add(a.multiplyScalar(c));return this}}(),
translateX:function(){var a=new q(1,0,0);return function(b){return this.translateOnAxis(a,b)}}(),translateY:function(){var a=new q(0,1,0);return function(b){return this.translateOnAxis(a,b)}}(),translateZ:function(){var a=new q(0,0,1);return function(b){return this.translateOnAxis(a,b)}}(),localToWorld:function(a){return a.applyMatrix4(this.matrixWorld)},worldToLocal:function(){var a=new S;return function(b){return b.applyMatrix4(a.getInverse(this.matrixWorld))}}(),lookAt:function(){var a=new S;return function(b){a.lookAt(b,
this.position,this.up);this.quaternion.setFromRotationMatrix(a)}}(),add:function(a){if(1<arguments.length){for(var b=0;b<arguments.length;b++)this.add(arguments[b]);return this}if(a===this)return void 0,this;a&&a.isObject3D?(null!==a.parent&&a.parent.remove(a),a.parent=this,a.dispatchEvent({type:"added"}),this.children.push(a)):void 0;return this},remove:function(a){if(1<
arguments.length)for(var b=0;b<arguments.length;b++)this.remove(arguments[b]);b=this.children.indexOf(a);-1!==b&&(a.parent=null,a.dispatchEvent({type:"removed"}),this.children.splice(b,1))},getObjectById:function(a){return this.getObjectByProperty("id",a)},getObjectByName:function(a){return this.getObjectByProperty("name",a)},getObjectByProperty:function(a,b){if(this[a]===b)return this;for(var c=0,d=this.children.length;c<d;c++){var e=this.children[c].getObjectByProperty(a,b);if(void 0!==e)return e}},
getWorldPosition:function(a){a=a||new q;this.updateMatrixWorld(!0);return a.setFromMatrixPosition(this.matrixWorld)},getWorldQuaternion:function(){var a=new q,b=new q;return function(c){c=c||new ca;this.updateMatrixWorld(!0);this.matrixWorld.decompose(a,c,b);return c}}(),getWorldRotation:function(){var a=new ca;return function(b){b=b||new db;this.getWorldQuaternion(a);return b.setFromQuaternion(a,this.rotation.order,!1)}}(),getWorldScale:function(){var a=new q,b=new ca;return function(c){c=c||new q;
this.updateMatrixWorld(!0);this.matrixWorld.decompose(a,b,c);return c}}(),getWorldDirection:function(){var a=new ca;return function(b){b=b||new q;this.getWorldQuaternion(a);return b.set(0,0,1).applyQuaternion(a)}}(),raycast:function(){},traverse:function(a){a(this);for(var b=this.children,c=0,d=b.length;c<d;c++)b[c].traverse(a)},traverseVisible:function(a){if(!1!==this.visible){a(this);for(var b=this.children,c=0,d=b.length;c<d;c++)b[c].traverseVisible(a)}},traverseAncestors:function(a){var b=this.parent;
null!==b&&(a(b),b.traverseAncestors(a))},updateMatrix:function(){this.matrix.compose(this.position,this.quaternion,this.scale);this.matrixWorldNeedsUpdate=!0},updateMatrixWorld:function(a){!0===this.matrixAutoUpdate&&this.updateMatrix();if(!0===this.matrixWorldNeedsUpdate||!0===a)null===this.parent?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,a=!0;for(var b=this.children,c=0,d=b.length;c<d;c++)b[c].updateMatrixWorld(a)},
toJSON:function(a){function b(a){var b=[],c;for(c in a){var d=a[c];delete d.metadata;b.push(d)}return b}var c=void 0===a||""===a,d={};c&&(a={geometries:{},materials:{},textures:{},images:{}},d.metadata={version:4.4,type:"Object",generator:"Object3D.toJSON"});var e={};e.uuid=this.uuid;e.type=this.type;""!==this.name&&(e.name=this.name);"{}"!==JSON.stringify(this.userData)&&(e.userData=this.userData);!0===this.castShadow&&(e.castShadow=!0);!0===this.receiveShadow&&(e.receiveShadow=!0);!1===this.visible&&
(e.visible=!1);e.matrix=this.matrix.toArray();void 0!==this.geometry&&(void 0===a.geometries[this.geometry.uuid]&&(a.geometries[this.geometry.uuid]=this.geometry.toJSON(a)),e.geometry=this.geometry.uuid);void 0!==this.material&&(void 0===a.materials[this.material.uuid]&&(a.materials[this.material.uuid]=this.material.toJSON(a)),e.material=this.material.uuid);if(0<this.children.length){e.children=[];for(var f=0;f<this.children.length;f++)e.children.push(this.children[f].toJSON(a).object)}if(c){var c=
b(a.geometries),f=b(a.materials),g=b(a.textures);a=b(a.images);0<c.length&&(d.geometries=c);0<f.length&&(d.materials=f);0<g.length&&(d.textures=g);0<a.length&&(d.images=a)}d.object=e;return d},clone:function(a){return(new this.constructor).copy(this,a)},copy:function(a,b){void 0===b&&(b=!0);this.name=a.name;this.up.copy(a.up);this.position.copy(a.position);this.quaternion.copy(a.quaternion);this.scale.copy(a.scale);this.matrix.copy(a.matrix);this.matrixWorld.copy(a.matrixWorld);this.matrixAutoUpdate=
a.matrixAutoUpdate;this.matrixWorldNeedsUpdate=a.matrixWorldNeedsUpdate;this.layers.mask=a.layers.mask;this.visible=a.visible;this.castShadow=a.castShadow;this.receiveShadow=a.receiveShadow;this.frustumCulled=a.frustumCulled;this.renderOrder=a.renderOrder;this.userData=JSON.parse(JSON.stringify(a.userData));if(!0===b)for(var c=0;c<a.children.length;c++)this.add(a.children[c].clone());return this}};Object.assign(x.prototype,pa.prototype);hb.prototype={constructor:hb,set:function(a,b){this.start.copy(a);
this.end.copy(b);return this},clone:function(){return(new this.constructor).copy(this)},copy:function(a){this.start.copy(a.start);this.end.copy(a.end);return this},getCenter:function(a){return(a||new q).addVectors(this.start,this.end).multiplyScalar(.5)},delta:function(a){return(a||new q).subVectors(this.end,this.start)},distanceSq:function(){return this.start.distanceToSquared(this.end)},distance:function(){return this.start.distanceTo(this.end)},at:function(a,b){var c=b||new q;return this.delta(c).multiplyScalar(a).add(this.start)},
closestPointToPointParameter:function(){var a=new q,b=new q;return function(c,d){a.subVectors(c,this.start);b.subVectors(this.end,this.start);var e=b.dot(b),e=b.dot(a)/e;d&&(e=N.clamp(e,0,1));return e}}(),closestPointToPoint:function(a,b,c){a=this.closestPointToPointParameter(a,b);c=c||new q;return this.delta(c).multiplyScalar(a).add(this.start)},applyMatrix4:function(a){this.start.applyMatrix4(a);this.end.applyMatrix4(a);return this},equals:function(a){return a.start.equals(this.start)&&a.end.equals(this.end)}};
za.normal=function(){var a=new q;return function(b,c,d,e){e=e||new q;e.subVectors(d,c);a.subVectors(b,c);e.cross(a);b=e.lengthSq();return 0<b?e.multiplyScalar(1/Math.sqrt(b)):e.set(0,0,0)}}();za.barycoordFromPoint=function(){var a=new q,b=new q,c=new q;return function(d,e,f,g,h){a.subVectors(g,e);b.subVectors(f,e);c.subVectors(d,e);d=a.dot(a);e=a.dot(b);f=a.dot(c);var m=b.dot(b);g=b.dot(c);var k=d*m-e*e;h=h||new q;if(0===k)return h.set(-2,-1,-1);k=1/k;m=(m*f-e*g)*k;d=(d*g-e*f)*k;return h.set(1-m-
d,d,m)}}();za.containsPoint=function(){var a=new q;return function(b,c,d,e){b=za.barycoordFromPoint(b,c,d,e,a);return 0<=b.x&&0<=b.y&&1>=b.x+b.y}}();za.prototype={constructor:za,set:function(a,b,c){this.a.copy(a);this.b.copy(b);this.c.copy(c);return this},setFromPointsAndIndices:function(a,b,c,d){this.a.copy(a[b]);this.b.copy(a[c]);this.c.copy(a[d]);return this},clone:function(){return(new this.constructor).copy(this)},copy:function(a){this.a.copy(a.a);this.b.copy(a.b);this.c.copy(a.c);return this},
area:function(){var a=new q,b=new q;return function(){a.subVectors(this.c,this.b);b.subVectors(this.a,this.b);return.5*a.cross(b).length()}}(),midpoint:function(a){return(a||new q).addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)},normal:function(a){return za.normal(this.a,this.b,this.c,a)},plane:function(a){return(a||new la).setFromCoplanarPoints(this.a,this.b,this.c)},barycoordFromPoint:function(a,b){return za.barycoordFromPoint(a,this.a,this.b,this.c,b)},containsPoint:function(a){return za.containsPoint(a,
this.a,this.b,this.c)},closestPointToPoint:function(){var a,b,c,d;return function(e,f){void 0===a&&(a=new la,b=[new hb,new hb,new hb],c=new q,d=new q);var g=f||new q,h=Infinity;a.setFromCoplanarPoints(this.a,this.b,this.c);a.projectPoint(e,c);if(!0===this.containsPoint(c))g.copy(c);else{b[0].set(this.a,this.b);b[1].set(this.b,this.c);b[2].set(this.c,this.a);for(var m=0;m<b.length;m++){b[m].closestPointToPoint(c,!0,d);var k=c.distanceToSquared(d);k<h&&(h=k,g.copy(d))}}return g}}(),equals:function(a){return a.a.equals(this.a)&&
a.b.equals(this.b)&&a.c.equals(this.c)}};ha.prototype={constructor:ha,clone:function(){return(new this.constructor).copy(this)},copy:function(a){this.a=a.a;this.b=a.b;this.c=a.c;this.normal.copy(a.normal);this.color.copy(a.color);this.materialIndex=a.materialIndex;for(var b=0,c=a.vertexNormals.length;b<c;b++)this.vertexNormals[b]=a.vertexNormals[b].clone();b=0;for(c=a.vertexColors.length;b<c;b++)this.vertexColors[b]=a.vertexColors[b].clone();return this}};Ka.prototype=Object.create(X.prototype);Ka.prototype.constructor=
Ka;Ka.prototype.isMeshBasicMaterial=!0;Ka.prototype.copy=function(a){X.prototype.copy.call(this,a);this.color.copy(a.color);this.map=a.map;this.lightMap=a.lightMap;this.lightMapIntensity=a.lightMapIntensity;this.aoMap=a.aoMap;this.aoMapIntensity=a.aoMapIntensity;this.specularMap=a.specularMap;this.alphaMap=a.alphaMap;this.envMap=a.envMap;this.combine=a.combine;this.reflectivity=a.reflectivity;this.refractionRatio=a.refractionRatio;this.wireframe=a.wireframe;this.wireframeLinewidth=a.wireframeLinewidth;
this.wireframeLinecap=a.wireframeLinecap;this.wireframeLinejoin=a.wireframeLinejoin;this.skinning=a.skinning;this.morphTargets=a.morphTargets;return this};U.prototype={constructor:U,isBufferAttribute:!0,set needsUpdate(a){!0===a&&this.version++},setArray:function(a){if(Array.isArray(a))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.count=void 0!==a?a.length/this.itemSize:0;this.array=a},setDynamic:function(a){this.dynamic=a;return this},copy:function(a){this.array=
new a.array.constructor(a.array);this.itemSize=a.itemSize;this.count=a.count;this.normalized=a.normalized;this.dynamic=a.dynamic;return this},copyAt:function(a,b,c){a*=this.itemSize;c*=b.itemSize;for(var d=0,e=this.itemSize;d<e;d++)this.array[a+d]=b.array[c+d];return this},copyArray:function(a){this.array.set(a);return this},copyColorsArray:function(a){for(var b=this.array,c=0,d=0,e=a.length;d<e;d++){var f=a[d];void 0===f&&(void 0,f=new J);b[c++]=f.r;b[c++]=f.g;b[c++]=f.b}return this},copyIndicesArray:function(a){for(var b=this.array,c=0,d=0,e=a.length;d<e;d++){var f=a[d];b[c++]=f.a;b[c++]=f.b;b[c++]=f.c}return this},copyVector2sArray:function(a){for(var b=this.array,c=0,d=0,e=a.length;d<e;d++){var f=a[d];void 0===f&&(void 0,f=new D);b[c++]=f.x;b[c++]=f.y}return this},copyVector3sArray:function(a){for(var b=this.array,c=0,d=0,e=a.length;d<e;d++){var f=
a[d];void 0===f&&(void 0,f=new q);b[c++]=f.x;b[c++]=f.y;b[c++]=f.z}return this},copyVector4sArray:function(a){for(var b=this.array,c=0,d=0,e=a.length;d<e;d++){var f=a[d];void 0===f&&(void 0,f=new fa);b[c++]=f.x;b[c++]=f.y;b[c++]=f.z;b[c++]=f.w}return this},set:function(a,b){void 0===b&&(b=0);this.array.set(a,b);return this},getX:function(a){return this.array[a*
this.itemSize]},setX:function(a,b){this.array[a*this.itemSize]=b;return this},getY:function(a){return this.array[a*this.itemSize+1]},setY:function(a,b){this.array[a*this.itemSize+1]=b;return this},getZ:function(a){return this.array[a*this.itemSize+2]},setZ:function(a,b){this.array[a*this.itemSize+2]=b;return this},getW:function(a){return this.array[a*this.itemSize+3]},setW:function(a,b){this.array[a*this.itemSize+3]=b;return this},setXY:function(a,b,c){a*=this.itemSize;this.array[a+0]=b;this.array[a+
1]=c;return this},setXYZ:function(a,b,c,d){a*=this.itemSize;this.array[a+0]=b;this.array[a+1]=c;this.array[a+2]=d;return this},setXYZW:function(a,b,c,d,e){a*=this.itemSize;this.array[a+0]=b;this.array[a+1]=c;this.array[a+2]=d;this.array[a+3]=e;return this},onUpload:function(a){this.onUploadCallback=a;return this},clone:function(){return(new this.constructor(this.array,this.itemSize)).copy(this)}};uc.prototype=Object.create(U.prototype);uc.prototype.constructor=uc;vc.prototype=Object.create(U.prototype);
vc.prototype.constructor=vc;wc.prototype=Object.create(U.prototype);wc.prototype.constructor=wc;xc.prototype=Object.create(U.prototype);xc.prototype.constructor=xc;ib.prototype=Object.create(U.prototype);ib.prototype.constructor=ib;yc.prototype=Object.create(U.prototype);yc.prototype.constructor=yc;jb.prototype=Object.create(U.prototype);jb.prototype.constructor=jb;z.prototype=Object.create(U.prototype);z.prototype.constructor=z;zc.prototype=Object.create(U.prototype);zc.prototype.constructor=zc;
Object.assign(Me.prototype,{computeGroups:function(a){var b,c=[],d=void 0;a=a.faces;for(var e=0;e<a.length;e++){var f=a[e];f.materialIndex!==d&&(d=f.materialIndex,void 0!==b&&(b.count=3*e-b.start,c.push(b)),b={start:3*e,materialIndex:d})}void 0!==b&&(b.count=3*e-b.start,c.push(b));this.groups=c},fromGeometry:function(a){var b=a.faces,c=a.vertices,d=a.faceVertexUvs,e=d[0]&&0<d[0].length,f=d[1]&&0<d[1].length,g=a.morphTargets,h=g.length,m;if(0<h){m=[];for(var k=0;k<h;k++)m[k]=[];this.morphTargets.position=
m}var l=a.morphNormals,p=l.length,n;if(0<p){n=[];for(k=0;k<p;k++)n[k]=[];this.morphTargets.normal=n}for(var u=a.skinIndices,q=a.skinWeights,r=u.length===c.length,A=q.length===c.length,k=0;k<b.length;k++){var w=b[k];this.vertices.push(c[w.a],c[w.b],c[w.c]);var y=w.vertexNormals;3===y.length?this.normals.push(y[0],y[1],y[2]):(y=w.normal,this.normals.push(y,y,y));y=w.vertexColors;3===y.length?this.colors.push(y[0],y[1],y[2]):(y=w.color,this.colors.push(y,y,y));!0===e&&(y=d[0][k],void 0!==y?this.uvs.push(y[0],
y[1],y[2]):(void 0,this.uvs.push(new D,new D,new D)));!0===f&&(y=d[1][k],void 0!==y?this.uvs2.push(y[0],y[1],y[2]):(void 0,this.uvs2.push(new D,new D,new D)));for(y=0;y<h;y++){var K=g[y].vertices;m[y].push(K[w.a],K[w.b],K[w.c])}for(y=0;y<p;y++)K=l[y].vertexNormals[k],n[y].push(K.a,K.b,K.c);r&&this.skinIndices.push(u[w.a],u[w.b],u[w.c]);A&&this.skinWeights.push(q[w.a],
q[w.b],q[w.c])}this.computeGroups(a);this.verticesNeedUpdate=a.verticesNeedUpdate;this.normalsNeedUpdate=a.normalsNeedUpdate;this.colorsNeedUpdate=a.colorsNeedUpdate;this.uvsNeedUpdate=a.uvsNeedUpdate;this.groupsNeedUpdate=a.groupsNeedUpdate;return this}});var Vd=0;T.prototype={constructor:T,isGeometry:!0,applyMatrix:function(a){for(var b=(new ya).getNormalMatrix(a),c=0,d=this.vertices.length;c<d;c++)this.vertices[c].applyMatrix4(a);c=0;for(d=this.faces.length;c<d;c++){a=this.faces[c];a.normal.applyMatrix3(b).normalize();
for(var e=0,f=a.vertexNormals.length;e<f;e++)a.vertexNormals[e].applyMatrix3(b).normalize()}null!==this.boundingBox&&this.computeBoundingBox();null!==this.boundingSphere&&this.computeBoundingSphere();this.normalsNeedUpdate=this.verticesNeedUpdate=!0;return this},rotateX:function(){var a;return function(b){void 0===a&&(a=new S);a.makeRotationX(b);this.applyMatrix(a);return this}}(),rotateY:function(){var a;return function(b){void 0===a&&(a=new S);a.makeRotationY(b);this.applyMatrix(a);return this}}(),
rotateZ:function(){var a;return function(b){void 0===a&&(a=new S);a.makeRotationZ(b);this.applyMatrix(a);return this}}(),translate:function(){var a;return function(b,c,d){void 0===a&&(a=new S);a.makeTranslation(b,c,d);this.applyMatrix(a);return this}}(),scale:function(){var a;return function(b,c,d){void 0===a&&(a=new S);a.makeScale(b,c,d);this.applyMatrix(a);return this}}(),lookAt:function(){var a;return function(b){void 0===a&&(a=new x);a.lookAt(b);a.updateMatrix();this.applyMatrix(a.matrix)}}(),
fromBufferGeometry:function(a){function b(a,b,d,e){var f=void 0!==g?[l[a].clone(),l[b].clone(),l[d].clone()]:[],u=void 0!==h?[c.colors[a].clone(),c.colors[b].clone(),c.colors[d].clone()]:[];e=new ha(a,b,d,f,u,e);c.faces.push(e);void 0!==m&&c.faceVertexUvs[0].push([p[a].clone(),p[b].clone(),p[d].clone()]);void 0!==k&&c.faceVertexUvs[1].push([n[a].clone(),n[b].clone(),n[d].clone()])}var c=this,d=null!==a.index?a.index.array:void 0,e=a.attributes,f=e.position.array,g=void 0!==e.normal?e.normal.array:
void 0,h=void 0!==e.color?e.color.array:void 0,m=void 0!==e.uv?e.uv.array:void 0,k=void 0!==e.uv2?e.uv2.array:void 0;void 0!==k&&(this.faceVertexUvs[1]=[]);for(var l=[],p=[],n=[],u=e=0;e<f.length;e+=3,u+=2)c.vertices.push(new q(f[e],f[e+1],f[e+2])),void 0!==g&&l.push(new q(g[e],g[e+1],g[e+2])),void 0!==h&&c.colors.push(new J(h[e],h[e+1],h[e+2])),void 0!==m&&p.push(new D(m[u],m[u+1])),void 0!==k&&n.push(new D(k[u],k[u+1]));if(void 0!==d)if(f=a.groups,0<f.length)for(e=0;e<f.length;e++)for(var G=f[e],
r=G.start,A=G.count,u=r,r=r+A;u<r;u+=3)b(d[u],d[u+1],d[u+2],G.materialIndex);else for(e=0;e<d.length;e+=3)b(d[e],d[e+1],d[e+2]);else for(e=0;e<f.length/3;e+=3)b(e,e+1,e+2);this.computeFaceNormals();null!==a.boundingBox&&(this.boundingBox=a.boundingBox.clone());null!==a.boundingSphere&&(this.boundingSphere=a.boundingSphere.clone());return this},center:function(){this.computeBoundingBox();var a=this.boundingBox.getCenter().negate();this.translate(a.x,a.y,a.z);return a},normalize:function(){this.computeBoundingSphere();
var a=this.boundingSphere.center,b=this.boundingSphere.radius,b=0===b?1:1/b,c=new S;c.set(b,0,0,-b*a.x,0,b,0,-b*a.y,0,0,b,-b*a.z,0,0,0,1);this.applyMatrix(c);return this},computeFaceNormals:function(){for(var a=new q,b=new q,c=0,d=this.faces.length;c<d;c++){var e=this.faces[c],f=this.vertices[e.a],g=this.vertices[e.b];a.subVectors(this.vertices[e.c],g);b.subVectors(f,g);a.cross(b);a.normalize();e.normal.copy(a)}},computeVertexNormals:function(a){void 0===a&&(a=!0);var b,c,d;d=Array(this.vertices.length);
b=0;for(c=this.vertices.length;b<c;b++)d[b]=new q;if(a){var e,f,g,h=new q,m=new q;a=0;for(b=this.faces.length;a<b;a++)c=this.faces[a],e=this.vertices[c.a],f=this.vertices[c.b],g=this.vertices[c.c],h.subVectors(g,f),m.subVectors(e,f),h.cross(m),d[c.a].add(h),d[c.b].add(h),d[c.c].add(h)}else for(this.computeFaceNormals(),a=0,b=this.faces.length;a<b;a++)c=this.faces[a],d[c.a].add(c.normal),d[c.b].add(c.normal),d[c.c].add(c.normal);b=0;for(c=this.vertices.length;b<c;b++)d[b].normalize();a=0;for(b=this.faces.length;a<
b;a++)c=this.faces[a],e=c.vertexNormals,3===e.length?(e[0].copy(d[c.a]),e[1].copy(d[c.b]),e[2].copy(d[c.c])):(e[0]=d[c.a].clone(),e[1]=d[c.b].clone(),e[2]=d[c.c].clone());0<this.faces.length&&(this.normalsNeedUpdate=!0)},computeFlatVertexNormals:function(){var a,b,c;this.computeFaceNormals();a=0;for(b=this.faces.length;a<b;a++){c=this.faces[a];var d=c.vertexNormals;3===d.length?(d[0].copy(c.normal),d[1].copy(c.normal),d[2].copy(c.normal)):(d[0]=c.normal.clone(),d[1]=c.normal.clone(),d[2]=c.normal.clone())}0<
this.faces.length&&(this.normalsNeedUpdate=!0)},computeMorphNormals:function(){var a,b,c,d,e;c=0;for(d=this.faces.length;c<d;c++)for(e=this.faces[c],e.__originalFaceNormal?e.__originalFaceNormal.copy(e.normal):e.__originalFaceNormal=e.normal.clone(),e.__originalVertexNormals||(e.__originalVertexNormals=[]),a=0,b=e.vertexNormals.length;a<b;a++)e.__originalVertexNormals[a]?e.__originalVertexNormals[a].copy(e.vertexNormals[a]):e.__originalVertexNormals[a]=e.vertexNormals[a].clone();var f=new T;f.faces=
this.faces;a=0;for(b=this.morphTargets.length;a<b;a++){if(!this.morphNormals[a]){this.morphNormals[a]={};this.morphNormals[a].faceNormals=[];this.morphNormals[a].vertexNormals=[];e=this.morphNormals[a].faceNormals;var g=this.morphNormals[a].vertexNormals,h,m;c=0;for(d=this.faces.length;c<d;c++)h=new q,m={a:new q,b:new q,c:new q},e.push(h),g.push(m)}g=this.morphNormals[a];f.vertices=this.morphTargets[a].vertices;f.computeFaceNormals();f.computeVertexNormals();c=0;for(d=this.faces.length;c<d;c++)e=
this.faces[c],h=g.faceNormals[c],m=g.vertexNormals[c],h.copy(e.normal),m.a.copy(e.vertexNormals[0]),m.b.copy(e.vertexNormals[1]),m.c.copy(e.vertexNormals[2])}c=0;for(d=this.faces.length;c<d;c++)e=this.faces[c],e.normal=e.__originalFaceNormal,e.vertexNormals=e.__originalVertexNormals},computeLineDistances:function(){for(var a=0,b=this.vertices,c=0,d=b.length;c<d;c++)0<c&&(a+=b[c].distanceTo(b[c-1])),this.lineDistances[c]=a},computeBoundingBox:function(){null===this.boundingBox&&(this.boundingBox=new Pa);
this.boundingBox.setFromPoints(this.vertices)},computeBoundingSphere:function(){null===this.boundingSphere&&(this.boundingSphere=new Na);this.boundingSphere.setFromPoints(this.vertices)},merge:function(a,b,c){if(!1===(a&&a.isGeometry))void 0;else{var d,e=this.vertices.length,f=this.vertices,g=a.vertices,h=this.faces,m=a.faces,k=this.faceVertexUvs[0],l=a.faceVertexUvs[0],p=this.colors,n=a.colors;void 0===c&&(c=0);void 0!==
b&&(d=(new ya).getNormalMatrix(b));a=0;for(var u=g.length;a<u;a++){var q=g[a].clone();void 0!==b&&q.applyMatrix4(b);f.push(q)}a=0;for(u=n.length;a<u;a++)p.push(n[a].clone());a=0;for(u=m.length;a<u;a++){var g=m[a],r=g.vertexNormals,n=g.vertexColors,p=new ha(g.a+e,g.b+e,g.c+e);p.normal.copy(g.normal);void 0!==d&&p.normal.applyMatrix3(d).normalize();b=0;for(f=r.length;b<f;b++)q=r[b].clone(),void 0!==d&&q.applyMatrix3(d).normalize(),p.vertexNormals.push(q);p.color.copy(g.color);b=0;for(f=n.length;b<f;b++)q=
n[b],p.vertexColors.push(q.clone());p.materialIndex=g.materialIndex+c;h.push(p)}a=0;for(u=l.length;a<u;a++)if(c=l[a],d=[],void 0!==c){b=0;for(f=c.length;b<f;b++)d.push(c[b].clone());k.push(d)}}},mergeMesh:function(a){!1===(a&&a.isMesh)?void 0:(a.matrixAutoUpdate&&a.updateMatrix(),this.merge(a.geometry,a.matrix))},mergeVertices:function(){var a={},b=[],c=[],d,e=Math.pow(10,4),f,g;f=0;for(g=this.vertices.length;f<g;f++)d=this.vertices[f],
d=Math.round(d.x*e)+"_"+Math.round(d.y*e)+"_"+Math.round(d.z*e),void 0===a[d]?(a[d]=f,b.push(this.vertices[f]),c[f]=b.length-1):c[f]=c[a[d]];a=[];f=0;for(g=this.faces.length;f<g;f++)for(e=this.faces[f],e.a=c[e.a],e.b=c[e.b],e.c=c[e.c],e=[e.a,e.b,e.c],d=0;3>d;d++)if(e[d]===e[(d+1)%3]){a.push(f);break}for(f=a.length-1;0<=f;f--)for(e=a[f],this.faces.splice(e,1),c=0,g=this.faceVertexUvs.length;c<g;c++)this.faceVertexUvs[c].splice(e,1);f=this.vertices.length-b.length;this.vertices=b;return f},sortFacesByMaterialIndex:function(){for(var a=
this.faces,b=a.length,c=0;c<b;c++)a[c]._id=c;a.sort(function(a,b){return a.materialIndex-b.materialIndex});var d=this.faceVertexUvs[0],e=this.faceVertexUvs[1],f,g;d&&d.length===b&&(f=[]);e&&e.length===b&&(g=[]);for(c=0;c<b;c++){var h=a[c]._id;f&&f.push(d[h]);g&&g.push(e[h])}f&&(this.faceVertexUvs[0]=f);g&&(this.faceVertexUvs[1]=g)},toJSON:function(){function a(a,b,c){return c?a|1<<b:a&~(1<<b)}function b(a){var b=a.x.toString()+a.y.toString()+a.z.toString();if(void 0!==k[b])return k[b];k[b]=m.length/
3;m.push(a.x,a.y,a.z);return k[b]}function c(a){var b=a.r.toString()+a.g.toString()+a.b.toString();if(void 0!==p[b])return p[b];p[b]=l.length;l.push(a.getHex());return p[b]}function d(a){var b=a.x.toString()+a.y.toString();if(void 0!==u[b])return u[b];u[b]=n.length/2;n.push(a.x,a.y);return u[b]}var e={metadata:{version:4.4,type:"Geometry",generator:"Geometry.toJSON"}};e.uuid=this.uuid;e.type=this.type;""!==this.name&&(e.name=this.name);if(void 0!==this.parameters){var f=this.parameters,g;for(g in f)void 0!==
f[g]&&(e[g]=f[g]);return e}f=[];for(g=0;g<this.vertices.length;g++){var h=this.vertices[g];f.push(h.x,h.y,h.z)}var h=[],m=[],k={},l=[],p={},n=[],u={};for(g=0;g<this.faces.length;g++){var q=this.faces[g],r=void 0!==this.faceVertexUvs[0][g],A=0<q.normal.length(),w=0<q.vertexNormals.length,y=1!==q.color.r||1!==q.color.g||1!==q.color.b,K=0<q.vertexColors.length,v=0,v=a(v,0,0),v=a(v,1,!0),v=a(v,2,!1),v=a(v,3,r),v=a(v,4,A),v=a(v,5,w),v=a(v,6,y),v=a(v,7,K);h.push(v);h.push(q.a,q.b,q.c);h.push(q.materialIndex);
r&&(r=this.faceVertexUvs[0][g],h.push(d(r[0]),d(r[1]),d(r[2])));A&&h.push(b(q.normal));w&&(A=q.vertexNormals,h.push(b(A[0]),b(A[1]),b(A[2])));y&&h.push(c(q.color));K&&(q=q.vertexColors,h.push(c(q[0]),c(q[1]),c(q[2])))}e.data={};e.data.vertices=f;e.data.normals=m;0<l.length&&(e.data.colors=l);0<n.length&&(e.data.uvs=[n]);e.data.faces=h;return e},clone:function(){return(new T).copy(this)},copy:function(a){var b,c,d,e,f,g;this.vertices=[];this.colors=[];this.faces=[];this.faceVertexUvs=[[]];this.morphTargets=
[];this.morphNormals=[];this.skinWeights=[];this.skinIndices=[];this.lineDistances=[];this.boundingSphere=this.boundingBox=null;this.name=a.name;d=a.vertices;b=0;for(c=d.length;b<c;b++)this.vertices.push(d[b].clone());d=a.colors;b=0;for(c=d.length;b<c;b++)this.colors.push(d[b].clone());d=a.faces;b=0;for(c=d.length;b<c;b++)this.faces.push(d[b].clone());b=0;for(c=a.faceVertexUvs.length;b<c;b++){var h=a.faceVertexUvs[b];void 0===this.faceVertexUvs[b]&&(this.faceVertexUvs[b]=[]);d=0;for(e=h.length;d<
e;d++){var m=h[d],k=[];f=0;for(g=m.length;f<g;f++)k.push(m[f].clone());this.faceVertexUvs[b].push(k)}}f=a.morphTargets;b=0;for(c=f.length;b<c;b++){g={};g.name=f[b].name;if(void 0!==f[b].vertices)for(g.vertices=[],d=0,e=f[b].vertices.length;d<e;d++)g.vertices.push(f[b].vertices[d].clone());if(void 0!==f[b].normals)for(g.normals=[],d=0,e=f[b].normals.length;d<e;d++)g.normals.push(f[b].normals[d].clone());this.morphTargets.push(g)}f=a.morphNormals;b=0;for(c=f.length;b<c;b++){g={};if(void 0!==f[b].vertexNormals)for(g.vertexNormals=
[],d=0,e=f[b].vertexNormals.length;d<e;d++)h=f[b].vertexNormals[d],m={},m.a=h.a.clone(),m.b=h.b.clone(),m.c=h.c.clone(),g.vertexNormals.push(m);if(void 0!==f[b].faceNormals)for(g.faceNormals=[],d=0,e=f[b].faceNormals.length;d<e;d++)g.faceNormals.push(f[b].faceNormals[d].clone());this.morphNormals.push(g)}d=a.skinWeights;b=0;for(c=d.length;b<c;b++)this.skinWeights.push(d[b].clone());d=a.skinIndices;b=0;for(c=d.length;b<c;b++)this.skinIndices.push(d[b].clone());d=a.lineDistances;b=0;for(c=d.length;b<
c;b++)this.lineDistances.push(d[b]);b=a.boundingBox;null!==b&&(this.boundingBox=b.clone());b=a.boundingSphere;null!==b&&(this.boundingSphere=b.clone());this.elementsNeedUpdate=a.elementsNeedUpdate;this.verticesNeedUpdate=a.verticesNeedUpdate;this.uvsNeedUpdate=a.uvsNeedUpdate;this.normalsNeedUpdate=a.normalsNeedUpdate;this.colorsNeedUpdate=a.colorsNeedUpdate;this.lineDistancesNeedUpdate=a.lineDistancesNeedUpdate;this.groupsNeedUpdate=a.groupsNeedUpdate;return this},dispose:function(){this.dispatchEvent({type:"dispose"})}};
Object.assign(T.prototype,pa.prototype);I.prototype={constructor:I,isBufferGeometry:!0,getIndex:function(){return this.index},setIndex:function(a){Array.isArray(a)?this.index=new (65535<Ud(a)?jb:ib)(a,1):this.index=a},addAttribute:function(a,b,c){if(!1===(b&&b.isBufferAttribute)&&!1===(b&&b.isInterleavedBufferAttribute))void 0,this.addAttribute(a,new U(b,c));else if("index"===a)void 0,
this.setIndex(b);else return this.attributes[a]=b,this},getAttribute:function(a){return this.attributes[a]},removeAttribute:function(a){delete this.attributes[a];return this},addGroup:function(a,b,c){this.groups.push({start:a,count:b,materialIndex:void 0!==c?c:0})},clearGroups:function(){this.groups=[]},setDrawRange:function(a,b){this.drawRange.start=a;this.drawRange.count=b},applyMatrix:function(a){var b=this.attributes.position;void 0!==b&&(a.applyToBufferAttribute(b),b.needsUpdate=!0);b=this.attributes.normal;
void 0!==b&&((new ya).getNormalMatrix(a).applyToBufferAttribute(b),b.needsUpdate=!0);null!==this.boundingBox&&this.computeBoundingBox();null!==this.boundingSphere&&this.computeBoundingSphere();return this},rotateX:function(){var a;return function(b){void 0===a&&(a=new S);a.makeRotationX(b);this.applyMatrix(a);return this}}(),rotateY:function(){var a;return function(b){void 0===a&&(a=new S);a.makeRotationY(b);this.applyMatrix(a);return this}}(),rotateZ:function(){var a;return function(b){void 0===
a&&(a=new S);a.makeRotationZ(b);this.applyMatrix(a);return this}}(),translate:function(){var a;return function(b,c,d){void 0===a&&(a=new S);a.makeTranslation(b,c,d);this.applyMatrix(a);return this}}(),scale:function(){var a;return function(b,c,d){void 0===a&&(a=new S);a.makeScale(b,c,d);this.applyMatrix(a);return this}}(),lookAt:function(){var a;return function(b){void 0===a&&(a=new x);a.lookAt(b);a.updateMatrix();this.applyMatrix(a.matrix)}}(),center:function(){this.computeBoundingBox();var a=this.boundingBox.getCenter().negate();
this.translate(a.x,a.y,a.z);return a},setFromObject:function(a){var b=a.geometry;if(a.isPoints||a.isLine){a=new z(3*b.vertices.length,3);var c=new z(3*b.colors.length,3);this.addAttribute("position",a.copyVector3sArray(b.vertices));this.addAttribute("color",c.copyColorsArray(b.colors));b.lineDistances&&b.lineDistances.length===b.vertices.length&&(a=new z(b.lineDistances.length,1),this.addAttribute("lineDistance",a.copyArray(b.lineDistances)));null!==b.boundingSphere&&(this.boundingSphere=b.boundingSphere.clone());
null!==b.boundingBox&&(this.boundingBox=b.boundingBox.clone())}else a.isMesh&&b&&b.isGeometry&&this.fromGeometry(b);return this},updateFromObject:function(a){var b=a.geometry;if(a.isMesh){var c=b.__directGeometry;!0===b.elementsNeedUpdate&&(c=void 0,b.elementsNeedUpdate=!1);if(void 0===c)return this.fromGeometry(b);c.verticesNeedUpdate=b.verticesNeedUpdate;c.normalsNeedUpdate=b.normalsNeedUpdate;c.colorsNeedUpdate=b.colorsNeedUpdate;c.uvsNeedUpdate=b.uvsNeedUpdate;c.groupsNeedUpdate=b.groupsNeedUpdate;
b.verticesNeedUpdate=!1;b.normalsNeedUpdate=!1;b.colorsNeedUpdate=!1;b.uvsNeedUpdate=!1;b.groupsNeedUpdate=!1;b=c}!0===b.verticesNeedUpdate&&(c=this.attributes.position,void 0!==c&&(c.copyVector3sArray(b.vertices),c.needsUpdate=!0),b.verticesNeedUpdate=!1);!0===b.normalsNeedUpdate&&(c=this.attributes.normal,void 0!==c&&(c.copyVector3sArray(b.normals),c.needsUpdate=!0),b.normalsNeedUpdate=!1);!0===b.colorsNeedUpdate&&(c=this.attributes.color,void 0!==c&&(c.copyColorsArray(b.colors),c.needsUpdate=!0),
b.colorsNeedUpdate=!1);b.uvsNeedUpdate&&(c=this.attributes.uv,void 0!==c&&(c.copyVector2sArray(b.uvs),c.needsUpdate=!0),b.uvsNeedUpdate=!1);b.lineDistancesNeedUpdate&&(c=this.attributes.lineDistance,void 0!==c&&(c.copyArray(b.lineDistances),c.needsUpdate=!0),b.lineDistancesNeedUpdate=!1);b.groupsNeedUpdate&&(b.computeGroups(a.geometry),this.groups=b.groups,b.groupsNeedUpdate=!1);return this},fromGeometry:function(a){a.__directGeometry=(new Me).fromGeometry(a);return this.fromDirectGeometry(a.__directGeometry)},
fromDirectGeometry:function(a){var b=new Float32Array(3*a.vertices.length);this.addAttribute("position",(new U(b,3)).copyVector3sArray(a.vertices));0<a.normals.length&&(b=new Float32Array(3*a.normals.length),this.addAttribute("normal",(new U(b,3)).copyVector3sArray(a.normals)));0<a.colors.length&&(b=new Float32Array(3*a.colors.length),this.addAttribute("color",(new U(b,3)).copyColorsArray(a.colors)));0<a.uvs.length&&(b=new Float32Array(2*a.uvs.length),this.addAttribute("uv",(new U(b,2)).copyVector2sArray(a.uvs)));
0<a.uvs2.length&&(b=new Float32Array(2*a.uvs2.length),this.addAttribute("uv2",(new U(b,2)).copyVector2sArray(a.uvs2)));0<a.indices.length&&(b=new (65535<Ud(a.indices)?Uint32Array:Uint16Array)(3*a.indices.length),this.setIndex((new U(b,1)).copyIndicesArray(a.indices)));this.groups=a.groups;for(var c in a.morphTargets){for(var b=[],d=a.morphTargets[c],e=0,f=d.length;e<f;e++){var g=d[e],h=new z(3*g.length,3);b.push(h.copyVector3sArray(g))}this.morphAttributes[c]=b}0<a.skinIndices.length&&(c=new z(4*
a.skinIndices.length,4),this.addAttribute("skinIndex",c.copyVector4sArray(a.skinIndices)));0<a.skinWeights.length&&(c=new z(4*a.skinWeights.length,4),this.addAttribute("skinWeight",c.copyVector4sArray(a.skinWeights)));null!==a.boundingSphere&&(this.boundingSphere=a.boundingSphere.clone());null!==a.boundingBox&&(this.boundingBox=a.boundingBox.clone());return this},computeBoundingBox:function(){null===this.boundingBox&&(this.boundingBox=new Pa);var a=this.attributes.position;void 0!==a?this.boundingBox.setFromBufferAttribute(a):
this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&void 0},computeBoundingSphere:function(){var a=new Pa,b=new q;return function(){null===this.boundingSphere&&(this.boundingSphere=new Na);var c=this.attributes.position;if(c){var d=this.boundingSphere.center;a.setFromBufferAttribute(c);
a.getCenter(d);for(var e=0,f=0,g=c.count;f<g;f++)b.x=c.getX(f),b.y=c.getY(f),b.z=c.getZ(f),e=Math.max(e,d.distanceToSquared(b));this.boundingSphere.radius=Math.sqrt(e);isNaN(this.boundingSphere.radius)&&void 0}}}(),computeFaceNormals:function(){},computeVertexNormals:function(){var a=this.index,b=this.attributes,c=this.groups;if(b.position){var d=b.position.array;
if(void 0===b.normal)this.addAttribute("normal",new U(new Float32Array(d.length),3));else for(var e=b.normal.array,f=0,g=e.length;f<g;f++)e[f]=0;var e=b.normal.array,h,m,k,l=new q,p=new q,n=new q,u=new q,G=new q;if(a){a=a.array;0===c.length&&this.addGroup(0,a.length);for(var r=0,A=c.length;r<A;++r)for(f=c[r],g=f.start,h=f.count,f=g,g+=h;f<g;f+=3)h=3*a[f+0],m=3*a[f+1],k=3*a[f+2],l.fromArray(d,h),p.fromArray(d,m),n.fromArray(d,k),u.subVectors(n,p),G.subVectors(l,p),u.cross(G),e[h]+=u.x,e[h+1]+=u.y,
e[h+2]+=u.z,e[m]+=u.x,e[m+1]+=u.y,e[m+2]+=u.z,e[k]+=u.x,e[k+1]+=u.y,e[k+2]+=u.z}else for(f=0,g=d.length;f<g;f+=9)l.fromArray(d,f),p.fromArray(d,f+3),n.fromArray(d,f+6),u.subVectors(n,p),G.subVectors(l,p),u.cross(G),e[f]=u.x,e[f+1]=u.y,e[f+2]=u.z,e[f+3]=u.x,e[f+4]=u.y,e[f+5]=u.z,e[f+6]=u.x,e[f+7]=u.y,e[f+8]=u.z;this.normalizeNormals();b.normal.needsUpdate=!0}},merge:function(a,b){if(!1===(a&&a.isBufferGeometry))void 0;else{void 0===b&&(b=0);var c=this.attributes,d;for(d in c)if(void 0!==a.attributes[d])for(var e=c[d].array,f=a.attributes[d],g=f.array,h=0,f=f.itemSize*b;h<g.length;h++,f++)e[f]=g[h];return this}},normalizeNormals:function(){for(var a=this.attributes.normal.array,b,c,d,e=0,f=a.length;e<f;e+=3)b=a[e],c=a[e+1],d=a[e+2],b=1/Math.sqrt(b*b+c*c+d*d),a[e]*=b,a[e+1]*=b,a[e+2]*=b},toNonIndexed:function(){if(null===this.index)return void 0,
this;var a=new I,b=this.index.array,c=this.attributes,d;for(d in c){for(var e=c[d],f=e.array,e=e.itemSize,g=new f.constructor(b.length*e),h,m=0,k=0,l=b.length;k<l;k++){h=b[k]*e;for(var p=0;p<e;p++)g[m++]=f[h++]}a.addAttribute(d,new U(g,e))}return a},toJSON:function(){var a={metadata:{version:4.4,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};a.uuid=this.uuid;a.type=this.type;""!==this.name&&(a.name=this.name);if(void 0!==this.parameters){var b=this.parameters,c;for(c in b)void 0!==b[c]&&
(a[c]=b[c]);return a}a.data={attributes:{}};var d=this.index;null!==d&&(b=Array.prototype.slice.call(d.array),a.data.index={type:d.array.constructor.name,array:b});d=this.attributes;for(c in d){var e=d[c],b=Array.prototype.slice.call(e.array);a.data.attributes[c]={itemSize:e.itemSize,type:e.array.constructor.name,array:b,normalized:e.normalized}}c=this.groups;0<c.length&&(a.data.groups=JSON.parse(JSON.stringify(c)));c=this.boundingSphere;null!==c&&(a.data.boundingSphere={center:c.center.toArray(),
radius:c.radius});return a},clone:function(){return(new I).copy(this)},copy:function(a){var b,c,d;this.index=null;this.attributes={};this.morphAttributes={};this.groups=[];this.boundingSphere=this.boundingBox=null;this.name=a.name;c=a.index;null!==c&&this.setIndex(c.clone());c=a.attributes;for(b in c)this.addAttribute(b,c[b].clone());var e=a.morphAttributes;for(b in e){var f=[],g=e[b];c=0;for(d=g.length;c<d;c++)f.push(g[c].clone());this.morphAttributes[b]=f}b=a.groups;c=0;for(d=b.length;c<d;c++)e=
b[c],this.addGroup(e.start,e.count,e.materialIndex);b=a.boundingBox;null!==b&&(this.boundingBox=b.clone());b=a.boundingSphere;null!==b&&(this.boundingSphere=b.clone());this.drawRange.start=a.drawRange.start;this.drawRange.count=a.drawRange.count;return this},dispose:function(){this.dispatchEvent({type:"dispose"})}};I.MaxIndex=65535;Object.assign(I.prototype,pa.prototype);Aa.prototype=Object.assign(Object.create(x.prototype),{constructor:Aa,isMesh:!0,setDrawMode:function(a){this.drawMode=a},copy:function(a){x.prototype.copy.call(this,
a);this.drawMode=a.drawMode;return this},updateMorphTargets:function(){var a=this.geometry.morphTargets;if(void 0!==a&&0<a.length){this.morphTargetInfluences=[];this.morphTargetDictionary={};for(var b=0,c=a.length;b<c;b++)this.morphTargetInfluences.push(0),this.morphTargetDictionary[a[b].name]=b}},raycast:function(){function a(a,b,c,d,e,f,g){za.barycoordFromPoint(a,b,c,d,r);e.multiplyScalar(r.x);f.multiplyScalar(r.y);g.multiplyScalar(r.z);e.add(f).add(g);return e.clone()}function b(a,b,c,d,e,f,g){var h=
a.material;if(null===(1===h.side?c.intersectTriangle(f,e,d,!0,g):c.intersectTriangle(d,e,f,2!==h.side,g)))return null;w.copy(g);w.applyMatrix4(a.matrixWorld);c=b.ray.origin.distanceTo(w);return c<b.near||c>b.far?null:{distance:c,point:w.clone(),object:a}}function c(c,d,e,f,k,l,p,t){g.fromBufferAttribute(f,l);h.fromBufferAttribute(f,p);m.fromBufferAttribute(f,t);if(c=b(c,d,e,g,h,m,A))k&&(n.fromBufferAttribute(k,l),u.fromBufferAttribute(k,p),G.fromBufferAttribute(k,t),c.uv=a(A,g,h,m,n,u,G)),c.face=
new ha(l,p,t,za.normal(g,h,m)),c.faceIndex=l;return c}var d=new S,e=new cb,f=new Na,g=new q,h=new q,m=new q,k=new q,l=new q,p=new q,n=new D,u=new D,G=new D,r=new q,A=new q,w=new q;return function(q,r){var v=this.geometry,w=this.material,L=this.matrixWorld;if(void 0!==w&&(null===v.boundingSphere&&v.computeBoundingSphere(),f.copy(v.boundingSphere),f.applyMatrix4(L),!1!==q.ray.intersectsSphere(f)&&(d.getInverse(L),e.copy(q.ray).applyMatrix4(d),null===v.boundingBox||!1!==e.intersectsBox(v.boundingBox)))){var C;
if(v.isBufferGeometry){var F,x,w=v.index,H=v.attributes.position,L=v.attributes.uv,D,z;if(null!==w)for(D=0,z=w.count;D<z;D+=3){if(v=w.getX(D),F=w.getX(D+1),x=w.getX(D+2),C=c(this,q,e,H,L,v,F,x))C.faceIndex=Math.floor(D/3),r.push(C)}else for(D=0,z=H.count;D<z;D+=3)if(v=D,F=D+1,x=D+2,C=c(this,q,e,H,L,v,F,x))C.index=v,r.push(C)}else if(v.isGeometry){var J,I,L=w&&w.isMultiMaterial;D=!0===L?w.materials:null;z=v.vertices;F=v.faces;x=v.faceVertexUvs[0];0<x.length&&(H=x);for(var Q=0,M=F.length;Q<M;Q++){var O=
F[Q];C=!0===L?D[O.materialIndex]:w;if(void 0!==C){x=z[O.a];J=z[O.b];I=z[O.c];if(!0===C.morphTargets){C=v.morphTargets;var P=this.morphTargetInfluences;g.set(0,0,0);h.set(0,0,0);m.set(0,0,0);for(var T=0,W=C.length;T<W;T++){var S=P[T];if(0!==S){var R=C[T].vertices;g.addScaledVector(k.subVectors(R[O.a],x),S);h.addScaledVector(l.subVectors(R[O.b],J),S);m.addScaledVector(p.subVectors(R[O.c],I),S)}}g.add(x);h.add(J);m.add(I);x=g;J=h;I=m}if(C=b(this,q,e,x,J,I,A))H&&(P=H[Q],n.copy(P[0]),u.copy(P[1]),G.copy(P[2]),
C.uv=a(A,x,J,I,n,u,G)),C.face=O,C.faceIndex=Q,r.push(C)}}}}}}(),clone:function(){return(new this.constructor(this.geometry,this.material)).copy(this)}});Ib.prototype=Object.create(T.prototype);Ib.prototype.constructor=Ib;kb.prototype=Object.create(I.prototype);kb.prototype.constructor=kb;Ac.prototype=Object.create(T.prototype);Ac.prototype.constructor=Ac;lb.prototype=Object.create(I.prototype);lb.prototype.constructor=lb;ra.prototype=Object.create(x.prototype);ra.prototype.constructor=ra;ra.prototype.isCamera=
!0;ra.prototype.getWorldDirection=function(){var a=new ca;return function(b){b=b||new q;this.getWorldQuaternion(a);return b.set(0,0,-1).applyQuaternion(a)}}();ra.prototype.lookAt=function(){var a=new S;return function(b){a.lookAt(this.position,b,this.up);this.quaternion.setFromRotationMatrix(a)}}();ra.prototype.clone=function(){return(new this.constructor).copy(this)};ra.prototype.copy=function(a){x.prototype.copy.call(this,a);this.matrixWorldInverse.copy(a.matrixWorldInverse);this.projectionMatrix.copy(a.projectionMatrix);
return this};Fa.prototype=Object.assign(Object.create(ra.prototype),{constructor:Fa,isPerspectiveCamera:!0,copy:function(a){ra.prototype.copy.call(this,a);this.fov=a.fov;this.zoom=a.zoom;this.near=a.near;this.far=a.far;this.focus=a.focus;this.aspect=a.aspect;this.view=null===a.view?null:Object.assign({},a.view);this.filmGauge=a.filmGauge;this.filmOffset=a.filmOffset;return this},setFocalLength:function(a){a=.5*this.getFilmHeight()/a;this.fov=2*N.RAD2DEG*Math.atan(a);this.updateProjectionMatrix()},
getFocalLength:function(){var a=Math.tan(.5*N.DEG2RAD*this.fov);return.5*this.getFilmHeight()/a},getEffectiveFOV:function(){return 2*N.RAD2DEG*Math.atan(Math.tan(.5*N.DEG2RAD*this.fov)/this.zoom)},getFilmWidth:function(){return this.filmGauge*Math.min(this.aspect,1)},getFilmHeight:function(){return this.filmGauge/Math.max(this.aspect,1)},setViewOffset:function(a,b,c,d,e,f){this.aspect=a/b;this.view={fullWidth:a,fullHeight:b,offsetX:c,offsetY:d,width:e,height:f};this.updateProjectionMatrix()},clearViewOffset:function(){this.view=
null;this.updateProjectionMatrix()},updateProjectionMatrix:function(){var a=this.near,b=a*Math.tan(.5*N.DEG2RAD*this.fov)/this.zoom,c=2*b,d=this.aspect*c,e=-.5*d,f=this.view;if(null!==f)var g=f.fullWidth,h=f.fullHeight,e=e+f.offsetX*d/g,b=b-f.offsetY*c/h,d=f.width/g*d,c=f.height/h*c;f=this.filmOffset;0!==f&&(e+=a*f/this.getFilmWidth());this.projectionMatrix.makePerspective(e,e+d,b,b-c,a,this.far)},toJSON:function(a){a=x.prototype.toJSON.call(this,a);a.object.fov=this.fov;a.object.zoom=this.zoom;a.object.near=
this.near;a.object.far=this.far;a.object.focus=this.focus;a.object.aspect=this.aspect;null!==this.view&&(a.object.view=Object.assign({},this.view));a.object.filmGauge=this.filmGauge;a.object.filmOffset=this.filmOffset;return a}});Jb.prototype=Object.assign(Object.create(ra.prototype),{constructor:Jb,isOrthographicCamera:!0,copy:function(a){ra.prototype.copy.call(this,a);this.left=a.left;this.right=a.right;this.top=a.top;this.bottom=a.bottom;this.near=a.near;this.far=a.far;this.zoom=a.zoom;this.view=
null===a.view?null:Object.assign({},a.view);return this},setViewOffset:function(a,b,c,d,e,f){this.view={fullWidth:a,fullHeight:b,offsetX:c,offsetY:d,width:e,height:f};this.updateProjectionMatrix()},clearViewOffset:function(){this.view=null;this.updateProjectionMatrix()},updateProjectionMatrix:function(){var a=(this.right-this.left)/(2*this.zoom),b=(this.top-this.bottom)/(2*this.zoom),c=(this.right+this.left)/2,d=(this.top+this.bottom)/2,e=c-a,c=c+a,a=d+b,b=d-b;if(null!==this.view)var c=this.zoom/
(this.view.width/this.view.fullWidth),b=this.zoom/(this.view.height/this.view.fullHeight),f=(this.right-this.left)/this.view.width,d=(this.top-this.bottom)/this.view.height,e=e+this.view.offsetX/c*f,c=e+this.view.width/c*f,a=a-this.view.offsetY/b*d,b=a-this.view.height/b*d;this.projectionMatrix.makeOrthographic(e,c,a,b,this.near,this.far)},toJSON:function(a){a=x.prototype.toJSON.call(this,a);a.object.zoom=this.zoom;a.object.left=this.left;a.object.right=this.right;a.object.top=this.top;a.object.bottom=
this.bottom;a.object.near=this.near;a.object.far=this.far;null!==this.view&&(a.object.view=Object.assign({},this.view));return a}});var Lf=0;Kb.prototype.isFogExp2=!0;Kb.prototype.clone=function(){return new Kb(this.color.getHex(),this.density)};Kb.prototype.toJSON=function(a){return{type:"FogExp2",color:this.color.getHex(),density:this.density}};Lb.prototype.isFog=!0;Lb.prototype.clone=function(){return new Lb(this.color.getHex(),this.near,this.far)};Lb.prototype.toJSON=function(a){return{type:"Fog",
color:this.color.getHex(),near:this.near,far:this.far}};mb.prototype=Object.create(x.prototype);mb.prototype.constructor=mb;mb.prototype.copy=function(a,b){x.prototype.copy.call(this,a,b);null!==a.background&&(this.background=a.background.clone());null!==a.fog&&(this.fog=a.fog.clone());null!==a.overrideMaterial&&(this.overrideMaterial=a.overrideMaterial.clone());this.autoUpdate=a.autoUpdate;this.matrixAutoUpdate=a.matrixAutoUpdate;return this};mb.prototype.toJSON=function(a){var b=x.prototype.toJSON.call(this,
a);null!==this.background&&(b.object.background=this.background.toJSON(a));null!==this.fog&&(b.object.fog=this.fog.toJSON());return b};Zd.prototype=Object.assign(Object.create(x.prototype),{constructor:Zd,isLensFlare:!0,copy:function(a){x.prototype.copy.call(this,a);this.positionScreen.copy(a.positionScreen);this.customUpdateCallback=a.customUpdateCallback;for(var b=0,c=a.lensFlares.length;b<c;b++)this.lensFlares.push(a.lensFlares[b]);return this},add:function(a,b,c,d,e,f){void 0===b&&(b=-1);void 0===
c&&(c=0);void 0===f&&(f=1);void 0===e&&(e=new J(16777215));void 0===d&&(d=1);c=Math.min(c,Math.max(0,c));this.lensFlares.push({texture:a,size:b,distance:c,x:0,y:0,z:0,scale:1,rotation:0,opacity:f,color:e,blending:d})},updateLensFlares:function(){var a,b=this.lensFlares.length,c,d=2*-this.positionScreen.x,e=2*-this.positionScreen.y;for(a=0;a<b;a++)c=this.lensFlares[a],c.x=this.positionScreen.x+d*c.distance,c.y=this.positionScreen.y+e*c.distance,c.wantedRotation=c.x*Math.PI*.25,c.rotation+=.25*(c.wantedRotation-
c.rotation)}});nb.prototype=Object.create(X.prototype);nb.prototype.constructor=nb;nb.prototype.copy=function(a){X.prototype.copy.call(this,a);this.color.copy(a.color);this.map=a.map;this.rotation=a.rotation;return this};Dc.prototype=Object.assign(Object.create(x.prototype),{constructor:Dc,isSprite:!0,raycast:function(){var a=new q;return function(b,c){a.setFromMatrixPosition(this.matrixWorld);var d=b.ray.distanceSqToPoint(a);d>this.scale.x*this.scale.y/4||c.push({distance:Math.sqrt(d),point:this.position,
face:null,object:this})}}(),clone:function(){return(new this.constructor(this.material)).copy(this)}});Ec.prototype=Object.assign(Object.create(x.prototype),{constructor:Ec,copy:function(a){x.prototype.copy.call(this,a,!1);a=a.levels;for(var b=0,c=a.length;b<c;b++){var d=a[b];this.addLevel(d.object.clone(),d.distance)}return this},addLevel:function(a,b){void 0===b&&(b=0);b=Math.abs(b);for(var c=this.levels,d=0;d<c.length&&!(b<c[d].distance);d++);c.splice(d,0,{distance:b,object:a});this.add(a)},getObjectForDistance:function(a){for(var b=
this.levels,c=1,d=b.length;c<d&&!(a<b[c].distance);c++);return b[c-1].object},raycast:function(){var a=new q;return function(b,c){a.setFromMatrixPosition(this.matrixWorld);var d=b.ray.origin.distanceTo(a);this.getObjectForDistance(d).raycast(b,c)}}(),update:function(){var a=new q,b=new q;return function(c){var d=this.levels;if(1<d.length){a.setFromMatrixPosition(c.matrixWorld);b.setFromMatrixPosition(this.matrixWorld);c=a.distanceTo(b);d[0].object.visible=!0;for(var e=1,f=d.length;e<f;e++)if(c>=d[e].distance)d[e-
1].object.visible=!1,d[e].object.visible=!0;else break;for(;e<f;e++)d[e].object.visible=!1}}}(),toJSON:function(a){a=x.prototype.toJSON.call(this,a);a.object.levels=[];for(var b=this.levels,c=0,d=b.length;c<d;c++){var e=b[c];a.object.levels.push({object:e.object.uuid,distance:e.distance})}return a}});Object.assign(od.prototype,{calculateInverses:function(){this.boneInverses=[];for(var a=0,b=this.bones.length;a<b;a++){var c=new S;this.bones[a]&&c.getInverse(this.bones[a].matrixWorld);this.boneInverses.push(c)}},
pose:function(){for(var a,b=0,c=this.bones.length;b<c;b++)(a=this.bones[b])&&a.matrixWorld.getInverse(this.boneInverses[b]);b=0;for(c=this.bones.length;b<c;b++)if(a=this.bones[b])a.parent&&a.parent.isBone?(a.matrix.getInverse(a.parent.matrixWorld),a.matrix.multiply(a.matrixWorld)):a.matrix.copy(a.matrixWorld),a.matrix.decompose(a.position,a.quaternion,a.scale)},update:function(){var a=new S;return function(){for(var b=0,c=this.bones.length;b<c;b++)a.multiplyMatrices(this.bones[b]?this.bones[b].matrixWorld:
this.identityMatrix,this.boneInverses[b]),a.toArray(this.boneMatrices,16*b);this.useVertexTexture&&(this.boneTexture.needsUpdate=!0)}}(),clone:function(){return new od(this.bones,this.boneInverses,this.useVertexTexture)}});pd.prototype=Object.assign(Object.create(x.prototype),{constructor:pd,isBone:!0});qd.prototype=Object.assign(Object.create(Aa.prototype),{constructor:qd,isSkinnedMesh:!0,bind:function(a,b){this.skeleton=a;void 0===b&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),
b=this.matrixWorld);this.bindMatrix.copy(b);this.bindMatrixInverse.getInverse(b)},pose:function(){this.skeleton.pose()},normalizeSkinWeights:function(){if(this.geometry&&this.geometry.isGeometry)for(var a=0;a<this.geometry.skinWeights.length;a++){var b=this.geometry.skinWeights[a],c=1/b.lengthManhattan();Infinity!==c?b.multiplyScalar(c):b.set(1,0,0,0)}else if(this.geometry&&this.geometry.isBufferGeometry)for(var b=new fa,d=this.geometry.attributes.skinWeight,a=0;a<d.count;a++)b.x=d.getX(a),b.y=d.getY(a),
b.z=d.getZ(a),b.w=d.getW(a),c=1/b.lengthManhattan(),Infinity!==c?b.multiplyScalar(c):b.set(1,0,0,0),d.setXYZW(a,b.x,b.y,b.z,b.w)},updateMatrixWorld:function(a){Aa.prototype.updateMatrixWorld.call(this,!0);"attached"===this.bindMode?this.bindMatrixInverse.getInverse(this.matrixWorld):"detached"===this.bindMode?this.bindMatrixInverse.getInverse(this.bindMatrix):void 0},clone:function(){return(new this.constructor(this.geometry,this.material,
this.skeleton.useVertexTexture)).copy(this)}});ia.prototype=Object.create(X.prototype);ia.prototype.constructor=ia;ia.prototype.isLineBasicMaterial=!0;ia.prototype.copy=function(a){X.prototype.copy.call(this,a);this.color.copy(a.color);this.linewidth=a.linewidth;this.linecap=a.linecap;this.linejoin=a.linejoin;return this};Ua.prototype=Object.assign(Object.create(x.prototype),{constructor:Ua,isLine:!0,raycast:function(){var a=new S,b=new cb,c=new Na;return function(d,e){var f=d.linePrecision,f=f*f,
g=this.geometry,h=this.matrixWorld;null===g.boundingSphere&&g.computeBoundingSphere();c.copy(g.boundingSphere);c.applyMatrix4(h);if(!1!==d.ray.intersectsSphere(c)){a.getInverse(h);b.copy(d.ray).applyMatrix4(a);var m=new q,k=new q,h=new q,l=new q,p=this&&this.isLineSegments?2:1;if(g.isBufferGeometry){var n=g.index,u=g.attributes.position.array;if(null!==n)for(var n=n.array,g=0,G=n.length-1;g<G;g+=p){var r=n[g+1];m.fromArray(u,3*n[g]);k.fromArray(u,3*r);r=b.distanceSqToSegment(m,k,l,h);r>f||(l.applyMatrix4(this.matrixWorld),
r=d.ray.origin.distanceTo(l),r<d.near||r>d.far||e.push({distance:r,point:h.clone().applyMatrix4(this.matrixWorld),index:g,face:null,faceIndex:null,object:this}))}else for(g=0,G=u.length/3-1;g<G;g+=p)m.fromArray(u,3*g),k.fromArray(u,3*g+3),r=b.distanceSqToSegment(m,k,l,h),r>f||(l.applyMatrix4(this.matrixWorld),r=d.ray.origin.distanceTo(l),r<d.near||r>d.far||e.push({distance:r,point:h.clone().applyMatrix4(this.matrixWorld),index:g,face:null,faceIndex:null,object:this}))}else if(g.isGeometry)for(m=g.vertices,
k=m.length,g=0;g<k-1;g+=p)r=b.distanceSqToSegment(m[g],m[g+1],l,h),r>f||(l.applyMatrix4(this.matrixWorld),r=d.ray.origin.distanceTo(l),r<d.near||r>d.far||e.push({distance:r,point:h.clone().applyMatrix4(this.matrixWorld),index:g,face:null,faceIndex:null,object:this}))}}}(),clone:function(){return(new this.constructor(this.geometry,this.material)).copy(this)}});ga.prototype=Object.assign(Object.create(Ua.prototype),{constructor:ga,isLineSegments:!0});Oa.prototype=Object.create(X.prototype);Oa.prototype.constructor=
Oa;Oa.prototype.isPointsMaterial=!0;Oa.prototype.copy=function(a){X.prototype.copy.call(this,a);this.color.copy(a.color);this.map=a.map;this.size=a.size;this.sizeAttenuation=a.sizeAttenuation;return this};Mb.prototype=Object.assign(Object.create(x.prototype),{constructor:Mb,isPoints:!0,raycast:function(){var a=new S,b=new cb,c=new Na;return function(d,e){function f(a,c){var f=b.distanceSqToPoint(a);if(f<l){var h=b.closestPointToPoint(a);h.applyMatrix4(m);var k=d.ray.origin.distanceTo(h);k<d.near||
k>d.far||e.push({distance:k,distanceToRay:Math.sqrt(f),point:h.clone(),index:c,face:null,object:g})}}var g=this,h=this.geometry,m=this.matrixWorld,k=d.params.Points.threshold;null===h.boundingSphere&&h.computeBoundingSphere();c.copy(h.boundingSphere);c.applyMatrix4(m);if(!1!==d.ray.intersectsSphere(c)){a.getInverse(m);b.copy(d.ray).applyMatrix4(a);var k=k/((this.scale.x+this.scale.y+this.scale.z)/3),l=k*k,k=new q;if(h.isBufferGeometry){var p=h.index,h=h.attributes.position.array;if(null!==p)for(var n=
p.array,p=0,u=n.length;p<u;p++){var G=n[p];k.fromArray(h,3*G);f(k,G)}else for(p=0,n=h.length/3;p<n;p++)k.fromArray(h,3*p),f(k,p)}else for(k=h.vertices,p=0,n=k.length;p<n;p++)f(k[p],p)}}}(),clone:function(){return(new this.constructor(this.geometry,this.material)).copy(this)}});Fc.prototype=Object.assign(Object.create(x.prototype),{constructor:Fc});rd.prototype=Object.create(ea.prototype);rd.prototype.constructor=rd;Nb.prototype=Object.create(ea.prototype);Nb.prototype.constructor=Nb;Nb.prototype.isCompressedTexture=
!0;sd.prototype=Object.create(ea.prototype);sd.prototype.constructor=sd;Gc.prototype=Object.create(ea.prototype);Gc.prototype.constructor=Gc;Gc.prototype.isDepthTexture=!0;Ob.prototype=Object.create(I.prototype);Ob.prototype.constructor=Ob;Hc.prototype=Object.create(T.prototype);Hc.prototype.constructor=Hc;Pb.prototype=Object.create(I.prototype);Pb.prototype.constructor=Pb;Ic.prototype=Object.create(T.prototype);Ic.prototype.constructor=Ic;Ba.prototype=Object.create(I.prototype);Ba.prototype.constructor=
Ba;Jc.prototype=Object.create(T.prototype);Jc.prototype.constructor=Jc;Qb.prototype=Object.create(Ba.prototype);Qb.prototype.constructor=Qb;Kc.prototype=Object.create(T.prototype);Kc.prototype.constructor=Kc;ob.prototype=Object.create(Ba.prototype);ob.prototype.constructor=ob;Lc.prototype=Object.create(T.prototype);Lc.prototype.constructor=Lc;Rb.prototype=Object.create(Ba.prototype);Rb.prototype.constructor=Rb;Mc.prototype=Object.create(T.prototype);Mc.prototype.constructor=Mc;Sb.prototype=Object.create(Ba.prototype);
Sb.prototype.constructor=Sb;Nc.prototype=Object.create(T.prototype);Nc.prototype.constructor=Nc;Tb.prototype=Object.create(I.prototype);Tb.prototype.constructor=Tb;Oc.prototype=Object.create(T.prototype);Oc.prototype.constructor=Oc;Ub.prototype=Object.create(I.prototype);Ub.prototype.constructor=Ub;Pc.prototype=Object.create(T.prototype);Pc.prototype.constructor=Pc;Vb.prototype=Object.create(I.prototype);Vb.prototype.constructor=Vb;var Ia={area:function(a){for(var b=a.length,c=0,d=b-1,e=0;e<b;d=e++)c+=
a[d].x*a[e].y-a[e].x*a[d].y;return.5*c},triangulate:function(){return function(a,b){var c=a.length;if(3>c)return null;var d=[],e=[],f=[],g,h,m;if(0<Ia.area(a))for(h=0;h<c;h++)e[h]=h;else for(h=0;h<c;h++)e[h]=c-1-h;var k=2*c;for(h=c-1;2<c;){if(0>=k--){void 0;break}g=h;c<=g&&(g=0);h=g+1;c<=h&&(h=0);m=h+1;c<=m&&(m=0);var l;a:{var p,n,q,G,r,A,w,y;p=a[e[g]].x;n=a[e[g]].y;q=a[e[h]].x;G=a[e[h]].y;r=a[e[m]].x;A=a[e[m]].y;if(0>=(q-
p)*(A-n)-(G-n)*(r-p))l=!1;else{var K,v,E,x,C,F,D,H,z,J;K=r-q;v=A-G;E=p-r;x=n-A;C=q-p;F=G-n;for(l=0;l<c;l++)if(w=a[e[l]].x,y=a[e[l]].y,!(w===p&&y===n||w===q&&y===G||w===r&&y===A)&&(D=w-p,H=y-n,z=w-q,J=y-G,w-=r,y-=A,z=K*J-v*z,D=C*H-F*D,H=E*y-x*w,z>=-Number.EPSILON&&H>=-Number.EPSILON&&D>=-Number.EPSILON)){l=!1;break a}l=!0}}if(l){d.push([a[e[g]],a[e[h]],a[e[m]]]);f.push([e[g],e[h],e[m]]);g=h;for(m=h+1;m<c;g++,m++)e[g]=e[m];c--;k=2*c}}return b?f:d}}(),triangulateShape:function(a,b){function c(a){var b=
a.length;2<b&&a[b-1].equals(a[0])&&a.pop()}function d(a,b,c){return a.x!==b.x?a.x<b.x?a.x<=c.x&&c.x<=b.x:b.x<=c.x&&c.x<=a.x:a.y<b.y?a.y<=c.y&&c.y<=b.y:b.y<=c.y&&c.y<=a.y}function e(a,b,c,e,f){var g=b.x-a.x,h=b.y-a.y,k=e.x-c.x,m=e.y-c.y,l=a.x-c.x,n=a.y-c.y,p=h*k-g*m,t=h*l-g*n;if(Math.abs(p)>Number.EPSILON){if(0<p){if(0>t||t>p)return[];k=m*l-k*n;if(0>k||k>p)return[]}else{if(0<t||t<p)return[];k=m*l-k*n;if(0<k||k<p)return[]}if(0===k)return!f||0!==t&&t!==p?[a]:[];if(k===p)return!f||0!==t&&t!==p?[b]:[];
if(0===t)return[c];if(t===p)return[e];f=k/p;return[{x:a.x+f*g,y:a.y+f*h}]}if(0!==t||m*l!==k*n)return[];h=0===g&&0===h;k=0===k&&0===m;if(h&&k)return a.x!==c.x||a.y!==c.y?[]:[a];if(h)return d(c,e,a)?[a]:[];if(k)return d(a,b,c)?[c]:[];0!==g?(a.x<b.x?(g=a,k=a.x,h=b,a=b.x):(g=b,k=b.x,h=a,a=a.x),c.x<e.x?(b=c,p=c.x,m=e,c=e.x):(b=e,p=e.x,m=c,c=c.x)):(a.y<b.y?(g=a,k=a.y,h=b,a=b.y):(g=b,k=b.y,h=a,a=a.y),c.y<e.y?(b=c,p=c.y,m=e,c=e.y):(b=e,p=e.y,m=c,c=c.y));return k<=p?a<p?[]:a===p?f?[]:[b]:a<=c?[b,h]:[b,m]:
k>c?[]:k===c?f?[]:[g]:a<=c?[g,h]:[g,m]}function f(a,b,c,d){var e=b.x-a.x,f=b.y-a.y;b=c.x-a.x;c=c.y-a.y;var g=d.x-a.x;d=d.y-a.y;a=e*c-f*b;e=e*d-f*g;return Math.abs(a)>Number.EPSILON?(b=g*c-d*b,0<a?0<=e&&0<=b:0<=e||0<=b):0<e}c(a);b.forEach(c);var g,h,m,k,l,p={};m=a.concat();g=0;for(h=b.length;g<h;g++)Array.prototype.push.apply(m,b[g]);g=0;for(h=m.length;g<h;g++)l=m[g].x+":"+m[g].y,void 0!==p[l]&&void 0,p[l]=g;g=function(a,b){function c(a,b){var d=h.length-
1,e=a-1;0>e&&(e=d);var g=a+1;g>d&&(g=0);d=f(h[a],h[e],h[g],k[b]);if(!d)return!1;d=k.length-1;e=b-1;0>e&&(e=d);g=b+1;g>d&&(g=0);return(d=f(k[b],k[e],k[g],h[a]))?!0:!1}function d(a,b){var c,f;for(c=0;c<h.length;c++)if(f=c+1,f%=h.length,f=e(a,b,h[c],h[f],!0),0<f.length)return!0;return!1}function g(a,c){var d,f,h,k;for(d=0;d<m.length;d++)for(f=b[m[d]],h=0;h<f.length;h++)if(k=h+1,k%=f.length,k=e(a,c,f[h],f[k],!0),0<k.length)return!0;return!1}var h=a.concat(),k,m=[],l,n,p,t,q,x=[],D,z,J,I=0;for(l=b.length;I<
l;I++)m.push(I);D=0;for(var Q=2*m.length;0<m.length;){Q--;if(0>Q){void 0;break}for(n=D;n<h.length;n++){p=h[n];l=-1;for(I=0;I<m.length;I++)if(t=m[I],q=p.x+":"+p.y+":"+t,void 0===x[q]){k=b[t];for(z=0;z<k.length;z++)if(t=k[z],c(n,z)&&!d(p,t)&&!g(p,t)){l=z;m.splice(I,1);D=h.slice(0,n+1);t=h.slice(n);z=k.slice(l);J=k.slice(0,l+1);h=D.concat(z).concat(J).concat(t);D=n;break}if(0<=l)break;x[q]=!0}if(0<=l)break}}return h}(a,b);var n=
Ia.triangulate(g,!1);g=0;for(h=n.length;g<h;g++)for(k=n[g],m=0;3>m;m++)l=k[m].x+":"+k[m].y,l=p[l],void 0!==l&&(k[m]=l);return n.concat()},isClockWise:function(a){return 0>Ia.area(a)}};La.prototype=Object.create(T.prototype);La.prototype.constructor=La;La.prototype.addShapeList=function(a,b){for(var c=a.length,d=0;d<c;d++)this.addShape(a[d],b)};La.prototype.addShape=function(a,b){function c(a,b,c){b||void 0;return b.clone().multiplyScalar(c).add(a)}
function d(a,b,c){var d,e,f;e=a.x-b.x;f=a.y-b.y;d=c.x-a.x;var g=c.y-a.y,h=e*e+f*f;if(Math.abs(e*g-f*d)>Number.EPSILON){var k=Math.sqrt(h),m=Math.sqrt(d*d+g*g),h=b.x-f/k;b=b.y+e/k;g=((c.x-g/m-h)*g-(c.y+d/m-b)*d)/(e*g-f*d);d=h+e*g-a.x;e=b+f*g-a.y;f=d*d+e*e;if(2>=f)return new D(d,e);f=Math.sqrt(f/2)}else a=!1,e>Number.EPSILON?d>Number.EPSILON&&(a=!0):e<-Number.EPSILON?d<-Number.EPSILON&&(a=!0):Math.sign(f)===Math.sign(g)&&(a=!0),a?(d=-f,f=Math.sqrt(h)):(d=e,e=f,f=Math.sqrt(h/2));return new D(d/f,e/f)}
function e(a,b){var c,d;for(R=a.length;0<=--R;){c=R;d=R-1;0>d&&(d=a.length-1);var e,f=u+2*l;for(e=0;e<f;e++){var g=U*e,h=U*(e+1),k=b+c+g,g=b+d+g,m=b+d+h,h=b+c+h,k=k+H,g=g+H,m=m+H,h=h+H;J.faces.push(new ha(k,g,h,null,null,1));J.faces.push(new ha(g,m,h,null,null,1));k=w.generateSideWallUV(J,k,g,m,h);J.faceVertexUvs[0].push([k[0],k[1],k[3]]);J.faceVertexUvs[0].push([k[1],k[2],k[3]])}}}function f(a,b,c){J.vertices.push(new q(a,b,c))}function g(a,b,c){a+=H;b+=H;c+=H;J.faces.push(new ha(a,b,c,null,null,
0));a=w.generateTopUV(J,a,b,c);J.faceVertexUvs[0].push(a)}var h=void 0!==b.amount?b.amount:100,m=void 0!==b.bevelThickness?b.bevelThickness:6,k=void 0!==b.bevelSize?b.bevelSize:m-2,l=void 0!==b.bevelSegments?b.bevelSegments:3,p=void 0!==b.bevelEnabled?b.bevelEnabled:!0,n=void 0!==b.curveSegments?b.curveSegments:12,u=void 0!==b.steps?b.steps:1,G=b.extrudePath,r,A=!1,w=void 0!==b.UVGenerator?b.UVGenerator:La.WorldUVGenerator,y,x,v,E;G&&(r=G.getSpacedPoints(u),A=!0,p=!1,y=void 0!==b.frames?b.frames:
G.computeFrenetFrames(u,!1),x=new q,v=new q,E=new q);p||(k=m=l=0);var z,C,F,J=this,H=this.vertices.length,G=a.extractPoints(n),n=G.shape,I=G.holes;if(G=!Ia.isClockWise(n)){n=n.reverse();C=0;for(F=I.length;C<F;C++)z=I[C],Ia.isClockWise(z)&&(I[C]=z.reverse());G=!1}var T=Ia.triangulateShape(n,I),S=n;C=0;for(F=I.length;C<F;C++)z=I[C],n=n.concat(z);var N,Q,M,O,P,U=n.length,W,V=T.length,G=[],R=0;M=S.length;N=M-1;for(Q=R+1;R<M;R++,N++,Q++)N===M&&(N=0),Q===M&&(Q=0),G[R]=d(S[R],S[N],S[Q]);var X=[],Z,ca=G.concat();
C=0;for(F=I.length;C<F;C++){z=I[C];Z=[];R=0;M=z.length;N=M-1;for(Q=R+1;R<M;R++,N++,Q++)N===M&&(N=0),Q===M&&(Q=0),Z[R]=d(z[R],z[N],z[Q]);X.push(Z);ca=ca.concat(Z)}for(N=0;N<l;N++){M=N/l;O=m*Math.cos(M*Math.PI/2);Q=k*Math.sin(M*Math.PI/2);R=0;for(M=S.length;R<M;R++)P=c(S[R],G[R],Q),f(P.x,P.y,-O);C=0;for(F=I.length;C<F;C++)for(z=I[C],Z=X[C],R=0,M=z.length;R<M;R++)P=c(z[R],Z[R],Q),f(P.x,P.y,-O)}Q=k;for(R=0;R<U;R++)P=p?c(n[R],ca[R],Q):n[R],A?(v.copy(y.normals[0]).multiplyScalar(P.x),x.copy(y.binormals[0]).multiplyScalar(P.y),
E.copy(r[0]).add(v).add(x),f(E.x,E.y,E.z)):f(P.x,P.y,0);for(M=1;M<=u;M++)for(R=0;R<U;R++)P=p?c(n[R],ca[R],Q):n[R],A?(v.copy(y.normals[M]).multiplyScalar(P.x),x.copy(y.binormals[M]).multiplyScalar(P.y),E.copy(r[M]).add(v).add(x),f(E.x,E.y,E.z)):f(P.x,P.y,h/u*M);for(N=l-1;0<=N;N--){M=N/l;O=m*Math.cos(M*Math.PI/2);Q=k*Math.sin(M*Math.PI/2);R=0;for(M=S.length;R<M;R++)P=c(S[R],G[R],Q),f(P.x,P.y,h+O);C=0;for(F=I.length;C<F;C++)for(z=I[C],Z=X[C],R=0,M=z.length;R<M;R++)P=c(z[R],Z[R],Q),A?f(P.x,P.y+r[u-1].y,
r[u-1].x+O):f(P.x,P.y,h+O)}(function(){if(p){var a=0*U;for(R=0;R<V;R++)W=T[R],g(W[2]+a,W[1]+a,W[0]+a);a=U*(u+2*l);for(R=0;R<V;R++)W=T[R],g(W[0]+a,W[1]+a,W[2]+a)}else{for(R=0;R<V;R++)W=T[R],g(W[2],W[1],W[0]);for(R=0;R<V;R++)W=T[R],g(W[0]+U*u,W[1]+U*u,W[2]+U*u)}})();(function(){var a=0;e(S,a);a+=S.length;C=0;for(F=I.length;C<F;C++)z=I[C],e(z,a),a+=z.length})()};La.WorldUVGenerator={generateTopUV:function(a,b,c,d){a=a.vertices;b=a[b];c=a[c];d=a[d];return[new D(b.x,b.y),new D(c.x,c.y),new D(d.x,d.y)]},
generateSideWallUV:function(a,b,c,d,e){a=a.vertices;b=a[b];c=a[c];d=a[d];e=a[e];return.01>Math.abs(b.y-c.y)?[new D(b.x,1-b.z),new D(c.x,1-c.z),new D(d.x,1-d.z),new D(e.x,1-e.z)]:[new D(b.y,1-b.z),new D(c.y,1-c.z),new D(d.y,1-d.z),new D(e.y,1-e.z)]}};Qc.prototype=Object.create(La.prototype);Qc.prototype.constructor=Qc;Rc.prototype=Object.create(T.prototype);Rc.prototype.constructor=Rc;pb.prototype=Object.create(I.prototype);pb.prototype.constructor=pb;Sc.prototype=Object.create(T.prototype);Sc.prototype.constructor=
Sc;Wb.prototype=Object.create(I.prototype);Wb.prototype.constructor=Wb;Tc.prototype=Object.create(T.prototype);Tc.prototype.constructor=Tc;Xb.prototype=Object.create(I.prototype);Xb.prototype.constructor=Xb;Yb.prototype=Object.create(T.prototype);Yb.prototype.constructor=Yb;Zb.prototype=Object.create(I.prototype);Zb.prototype.constructor=Zb;$b.prototype=Object.create(I.prototype);$b.prototype.constructor=$b;qb.prototype=Object.create(T.prototype);qb.prototype.constructor=qb;Va.prototype=Object.create(I.prototype);
Va.prototype.constructor=Va;Uc.prototype=Object.create(qb.prototype);Uc.prototype.constructor=Uc;Vc.prototype=Object.create(Va.prototype);Vc.prototype.constructor=Vc;Wc.prototype=Object.create(T.prototype);Wc.prototype.constructor=Wc;ac.prototype=Object.create(I.prototype);ac.prototype.constructor=ac;var Ma=Object.freeze({WireframeGeometry:Ob,ParametricGeometry:Hc,ParametricBufferGeometry:Pb,TetrahedronGeometry:Jc,TetrahedronBufferGeometry:Qb,OctahedronGeometry:Kc,OctahedronBufferGeometry:ob,IcosahedronGeometry:Lc,
IcosahedronBufferGeometry:Rb,DodecahedronGeometry:Mc,DodecahedronBufferGeometry:Sb,PolyhedronGeometry:Ic,PolyhedronBufferGeometry:Ba,TubeGeometry:Nc,TubeBufferGeometry:Tb,TorusKnotGeometry:Oc,TorusKnotBufferGeometry:Ub,TorusGeometry:Pc,TorusBufferGeometry:Vb,TextGeometry:Qc,SphereGeometry:Rc,SphereBufferGeometry:pb,RingGeometry:Sc,RingBufferGeometry:Wb,PlaneGeometry:Ac,PlaneBufferGeometry:lb,LatheGeometry:Tc,LatheBufferGeometry:Xb,ShapeGeometry:Yb,ShapeBufferGeometry:Zb,ExtrudeGeometry:La,EdgesGeometry:$b,
ConeGeometry:Uc,ConeBufferGeometry:Vc,CylinderGeometry:qb,CylinderBufferGeometry:Va,CircleGeometry:Wc,CircleBufferGeometry:ac,BoxGeometry:Ib,BoxBufferGeometry:kb});bc.prototype=Object.create(Ha.prototype);bc.prototype.constructor=bc;bc.prototype.isShadowMaterial=!0;cc.prototype=Object.create(Ha.prototype);cc.prototype.constructor=cc;cc.prototype.isRawShaderMaterial=!0;Xc.prototype={constructor:Xc,isMultiMaterial:!0,toJSON:function(a){for(var b={metadata:{version:4.2,type:"material",generator:"MaterialExporter"},
uuid:this.uuid,type:this.type,materials:[]},c=this.materials,d=0,e=c.length;d<e;d++){var f=c[d].toJSON(a);delete f.metadata;b.materials.push(f)}b.visible=this.visible;return b},clone:function(){for(var a=new this.constructor,b=0;b<this.materials.length;b++)a.materials.push(this.materials[b].clone());a.visible=this.visible;return a}};Qa.prototype=Object.create(X.prototype);Qa.prototype.constructor=Qa;Qa.prototype.isMeshStandardMaterial=!0;Qa.prototype.copy=function(a){X.prototype.copy.call(this,a);
this.defines={STANDARD:""};this.color.copy(a.color);this.roughness=a.roughness;this.metalness=a.metalness;this.map=a.map;this.lightMap=a.lightMap;this.lightMapIntensity=a.lightMapIntensity;this.aoMap=a.aoMap;this.aoMapIntensity=a.aoMapIntensity;this.emissive.copy(a.emissive);this.emissiveMap=a.emissiveMap;this.emissiveIntensity=a.emissiveIntensity;this.bumpMap=a.bumpMap;this.bumpScale=a.bumpScale;this.normalMap=a.normalMap;this.normalScale.copy(a.normalScale);this.displacementMap=a.displacementMap;
this.displacementScale=a.displacementScale;this.displacementBias=a.displacementBias;this.roughnessMap=a.roughnessMap;this.metalnessMap=a.metalnessMap;this.alphaMap=a.alphaMap;this.envMap=a.envMap;this.envMapIntensity=a.envMapIntensity;this.refractionRatio=a.refractionRatio;this.wireframe=a.wireframe;this.wireframeLinewidth=a.wireframeLinewidth;this.wireframeLinecap=a.wireframeLinecap;this.wireframeLinejoin=a.wireframeLinejoin;this.skinning=a.skinning;this.morphTargets=a.morphTargets;this.morphNormals=
a.morphNormals;return this};rb.prototype=Object.create(Qa.prototype);rb.prototype.constructor=rb;rb.prototype.isMeshPhysicalMaterial=!0;rb.prototype.copy=function(a){Qa.prototype.copy.call(this,a);this.defines={PHYSICAL:""};this.reflectivity=a.reflectivity;this.clearCoat=a.clearCoat;this.clearCoatRoughness=a.clearCoatRoughness;return this};Ca.prototype=Object.create(X.prototype);Ca.prototype.constructor=Ca;Ca.prototype.isMeshPhongMaterial=!0;Ca.prototype.copy=function(a){X.prototype.copy.call(this,
a);this.color.copy(a.color);this.specular.copy(a.specular);this.shininess=a.shininess;this.map=a.map;this.lightMap=a.lightMap;this.lightMapIntensity=a.lightMapIntensity;this.aoMap=a.aoMap;this.aoMapIntensity=a.aoMapIntensity;this.emissive.copy(a.emissive);this.emissiveMap=a.emissiveMap;this.emissiveIntensity=a.emissiveIntensity;this.bumpMap=a.bumpMap;this.bumpScale=a.bumpScale;this.normalMap=a.normalMap;this.normalScale.copy(a.normalScale);this.displacementMap=a.displacementMap;this.displacementScale=
a.displacementScale;this.displacementBias=a.displacementBias;this.specularMap=a.specularMap;this.alphaMap=a.alphaMap;this.envMap=a.envMap;this.combine=a.combine;this.reflectivity=a.reflectivity;this.refractionRatio=a.refractionRatio;this.wireframe=a.wireframe;this.wireframeLinewidth=a.wireframeLinewidth;this.wireframeLinecap=a.wireframeLinecap;this.wireframeLinejoin=a.wireframeLinejoin;this.skinning=a.skinning;this.morphTargets=a.morphTargets;this.morphNormals=a.morphNormals;return this};sb.prototype=
Object.create(Ca.prototype);sb.prototype.constructor=sb;sb.prototype.isMeshToonMaterial=!0;sb.prototype.copy=function(a){Ca.prototype.copy.call(this,a);this.gradientMap=a.gradientMap;return this};tb.prototype=Object.create(X.prototype);tb.prototype.constructor=tb;tb.prototype.isMeshNormalMaterial=!0;tb.prototype.copy=function(a){X.prototype.copy.call(this,a);this.bumpMap=a.bumpMap;this.bumpScale=a.bumpScale;this.normalMap=a.normalMap;this.normalScale.copy(a.normalScale);this.displacementMap=a.displacementMap;
this.displacementScale=a.displacementScale;this.displacementBias=a.displacementBias;this.wireframe=a.wireframe;this.wireframeLinewidth=a.wireframeLinewidth;this.skinning=a.skinning;this.morphTargets=a.morphTargets;this.morphNormals=a.morphNormals;return this};ub.prototype=Object.create(X.prototype);ub.prototype.constructor=ub;ub.prototype.isMeshLambertMaterial=!0;ub.prototype.copy=function(a){X.prototype.copy.call(this,a);this.color.copy(a.color);this.map=a.map;this.lightMap=a.lightMap;this.lightMapIntensity=
a.lightMapIntensity;this.aoMap=a.aoMap;this.aoMapIntensity=a.aoMapIntensity;this.emissive.copy(a.emissive);this.emissiveMap=a.emissiveMap;this.emissiveIntensity=a.emissiveIntensity;this.specularMap=a.specularMap;this.alphaMap=a.alphaMap;this.envMap=a.envMap;this.combine=a.combine;this.reflectivity=a.reflectivity;this.refractionRatio=a.refractionRatio;this.wireframe=a.wireframe;this.wireframeLinewidth=a.wireframeLinewidth;this.wireframeLinecap=a.wireframeLinecap;this.wireframeLinejoin=a.wireframeLinejoin;
this.skinning=a.skinning;this.morphTargets=a.morphTargets;this.morphNormals=a.morphNormals;return this};vb.prototype=Object.create(X.prototype);vb.prototype.constructor=vb;vb.prototype.isLineDashedMaterial=!0;vb.prototype.copy=function(a){X.prototype.copy.call(this,a);this.color.copy(a.color);this.linewidth=a.linewidth;this.scale=a.scale;this.dashSize=a.dashSize;this.gapSize=a.gapSize;return this};var Xf=Object.freeze({ShadowMaterial:bc,SpriteMaterial:nb,RawShaderMaterial:cc,ShaderMaterial:Ha,PointsMaterial:Oa,
MultiMaterial:Xc,MeshPhysicalMaterial:rb,MeshStandardMaterial:Qa,MeshPhongMaterial:Ca,MeshToonMaterial:sb,MeshNormalMaterial:tb,MeshLambertMaterial:ub,MeshDepthMaterial:ab,MeshBasicMaterial:Ka,LineDashedMaterial:vb,LineBasicMaterial:ia,Material:X}),ld={enabled:!1,files:{},add:function(a,b){!1!==this.enabled&&(this.files[a]=b)},get:function(a){if(!1!==this.enabled)return this.files[a]},remove:function(a){delete this.files[a]},clear:function(){this.files={}}},ta=new $d;Object.assign(sa.prototype,{load:function(a,
b,c,d){void 0===a&&(a="");void 0!==this.path&&(a=this.path+a);var e=this,f=ld.get(a);if(void 0!==f)return e.manager.itemStart(a),setTimeout(function(){b&&b(f);e.manager.itemEnd(a)},0),f;var g=a.match(/^data:(.*?)(;base64)?,(.*)$/);if(g){var h=g[1],m=!!g[2],g=g[3],g=window.decodeURIComponent(g);m&&(g=window.atob(g));try{var k,l=(this.responseType||"").toLowerCase();switch(l){case "arraybuffer":case "blob":k=new ArrayBuffer(g.length);for(var p=new Uint8Array(k),m=0;m<g.length;m++)p[m]=g.charCodeAt(m);
"blob"===l&&(k=new Blob([k],{type:h}));break;case "document":k=(new DOMParser).parseFromString(g,h);break;case "json":k=JSON.parse(g);break;default:k=g}window.setTimeout(function(){b&&b(k);e.manager.itemEnd(a)},0)}catch(q){window.setTimeout(function(){d&&d(q);e.manager.itemError(a)},0)}}else{var n=new XMLHttpRequest;n.open("GET",a,!0);n.addEventListener("load",function(c){var f=c.target.response;ld.add(a,f);200===this.status?(b&&b(f),e.manager.itemEnd(a)):0===this.status?(void 0,
b&&b(f),e.manager.itemEnd(a)):(d&&d(c),e.manager.itemError(a))},!1);void 0!==c&&n.addEventListener("progress",function(a){c(a)},!1);n.addEventListener("error",function(b){d&&d(b);e.manager.itemError(a)},!1);void 0!==this.responseType&&(n.responseType=this.responseType);void 0!==this.withCredentials&&(n.withCredentials=this.withCredentials);n.overrideMimeType&&n.overrideMimeType(void 0!==this.mimeType?this.mimeType:"text/plain");n.send(null)}e.manager.itemStart(a);return n},setPath:function(a){this.path=
a;return this},setResponseType:function(a){this.responseType=a;return this},setWithCredentials:function(a){this.withCredentials=a;return this},setMimeType:function(a){this.mimeType=a;return this}});Object.assign(Re.prototype,{load:function(a,b,c,d){function e(e){m.load(a[e],function(a){a=f._parser(a,!0);g[e]={width:a.width,height:a.height,format:a.format,mipmaps:a.mipmaps};k+=1;6===k&&(1===a.mipmapCount&&(h.minFilter=1006),h.format=a.format,h.needsUpdate=!0,b&&b(h))},c,d)}var f=this,g=[],h=new Nb;
h.image=g;var m=new sa(this.manager);m.setPath(this.path);m.setResponseType("arraybuffer");if(Array.isArray(a))for(var k=0,l=0,p=a.length;l<p;++l)e(l);else m.load(a,function(a){a=f._parser(a,!0);if(a.isCubemap)for(var c=a.mipmaps.length/a.mipmapCount,d=0;d<c;d++){g[d]={mipmaps:[]};for(var e=0;e<a.mipmapCount;e++)g[d].mipmaps.push(a.mipmaps[d*a.mipmapCount+e]),g[d].format=a.format,g[d].width=a.width,g[d].height=a.height}else h.image.width=a.width,h.image.height=a.height,h.mipmaps=a.mipmaps;1===a.mipmapCount&&
(h.minFilter=1006);h.format=a.format;h.needsUpdate=!0;b&&b(h)},c,d);return h},setPath:function(a){this.path=a;return this}});Object.assign(ae.prototype,{load:function(a,b,c,d){var e=this,f=new eb,g=new sa(this.manager);g.setResponseType("arraybuffer");g.load(a,function(a){if(a=e._parser(a))void 0!==a.image?f.image=a.image:void 0!==a.data&&(f.image.width=a.width,f.image.height=a.height,f.image.data=a.data),f.wrapS=void 0!==a.wrapS?a.wrapS:1001,f.wrapT=void 0!==a.wrapT?a.wrapT:1001,f.magFilter=void 0!==
a.magFilter?a.magFilter:1006,f.minFilter=void 0!==a.minFilter?a.minFilter:1008,f.anisotropy=void 0!==a.anisotropy?a.anisotropy:1,void 0!==a.format&&(f.format=a.format),void 0!==a.type&&(f.type=a.type),void 0!==a.mipmaps&&(f.mipmaps=a.mipmaps),1===a.mipmapCount&&(f.minFilter=1006),f.needsUpdate=!0,b&&b(f,a)},c,d);return f}});Object.assign(Yc.prototype,{load:function(a,b,c,d){void 0===a&&(a="");void 0!==this.path&&(a=this.path+a);var e=this,f=ld.get(a);if(void 0!==f)return e.manager.itemStart(a),setTimeout(function(){b&&
b(f);e.manager.itemEnd(a)},0),f;c=document.createElementNS("http://www.w3.org/1999/xhtml","img");c.addEventListener("load",function(){ld.add(a,this);b&&b(this);e.manager.itemEnd(a)},!1);c.addEventListener("error",function(b){d&&d(b);e.manager.itemError(a)},!1);void 0!==this.crossOrigin&&(c.crossOrigin=this.crossOrigin);e.manager.itemStart(a);c.src=a;return c},setCrossOrigin:function(a){this.crossOrigin=a;return this},setPath:function(a){this.path=a;return this}});Object.assign(be.prototype,{load:function(a,
b,c,d){function e(c){g.load(a[c],function(a){f.images[c]=a;h++;6===h&&(f.needsUpdate=!0,b&&b(f))},void 0,d)}var f=new Za,g=new Yc(this.manager);g.setCrossOrigin(this.crossOrigin);g.setPath(this.path);var h=0;for(c=0;c<a.length;++c)e(c);return f},setCrossOrigin:function(a){this.crossOrigin=a;return this},setPath:function(a){this.path=a;return this}});Object.assign(td.prototype,{load:function(a,b,c,d){var e=new ea,f=new Yc(this.manager);f.setCrossOrigin(this.crossOrigin);f.setPath(this.path);f.load(a,
function(c){var d=0<a.search(/\.(jpg|jpeg)$/)||0===a.search(/^data\:image\/jpeg/);e.format=d?1022:1023;e.image=c;e.needsUpdate=!0;void 0!==b&&b(e)},c,d);return e},setCrossOrigin:function(a){this.crossOrigin=a;return this},setPath:function(a){this.path=a;return this}});ma.prototype=Object.assign(Object.create(x.prototype),{constructor:ma,isLight:!0,copy:function(a){x.prototype.copy.call(this,a);this.color.copy(a.color);this.intensity=a.intensity;return this},toJSON:function(a){a=x.prototype.toJSON.call(this,
a);a.object.color=this.color.getHex();a.object.intensity=this.intensity;void 0!==this.groundColor&&(a.object.groundColor=this.groundColor.getHex());void 0!==this.distance&&(a.object.distance=this.distance);void 0!==this.angle&&(a.object.angle=this.angle);void 0!==this.decay&&(a.object.decay=this.decay);void 0!==this.penumbra&&(a.object.penumbra=this.penumbra);void 0!==this.shadow&&(a.object.shadow=this.shadow.toJSON());return a}});ud.prototype=Object.assign(Object.create(ma.prototype),{constructor:ud,
isHemisphereLight:!0,copy:function(a){ma.prototype.copy.call(this,a);this.groundColor.copy(a.groundColor);return this}});Object.assign(wb.prototype,{copy:function(a){this.camera=a.camera.clone();this.bias=a.bias;this.radius=a.radius;this.mapSize.copy(a.mapSize);return this},clone:function(){return(new this.constructor).copy(this)},toJSON:function(){var a={};0!==this.bias&&(a.bias=this.bias);1!==this.radius&&(a.radius=this.radius);if(512!==this.mapSize.x||512!==this.mapSize.y)a.mapSize=this.mapSize.toArray();
a.camera=this.camera.toJSON(!1).object;delete a.camera.matrix;return a}});vd.prototype=Object.assign(Object.create(wb.prototype),{constructor:vd,isSpotLightShadow:!0,update:function(a){var b=2*N.RAD2DEG*a.angle,c=this.mapSize.width/this.mapSize.height;a=a.distance||500;var d=this.camera;if(b!==d.fov||c!==d.aspect||a!==d.far)d.fov=b,d.aspect=c,d.far=a,d.updateProjectionMatrix()}});wd.prototype=Object.assign(Object.create(ma.prototype),{constructor:wd,isSpotLight:!0,copy:function(a){ma.prototype.copy.call(this,
a);this.distance=a.distance;this.angle=a.angle;this.penumbra=a.penumbra;this.decay=a.decay;this.target=a.target.clone();this.shadow=a.shadow.clone();return this}});xd.prototype=Object.assign(Object.create(ma.prototype),{constructor:xd,isPointLight:!0,copy:function(a){ma.prototype.copy.call(this,a);this.distance=a.distance;this.decay=a.decay;this.shadow=a.shadow.clone();return this}});yd.prototype=Object.assign(Object.create(wb.prototype),{constructor:yd});zd.prototype=Object.assign(Object.create(ma.prototype),
{constructor:zd,isDirectionalLight:!0,copy:function(a){ma.prototype.copy.call(this,a);this.target=a.target.clone();this.shadow=a.shadow.clone();return this}});Ad.prototype=Object.assign(Object.create(ma.prototype),{constructor:Ad,isAmbientLight:!0});var na={arraySlice:function(a,b,c){return na.isTypedArray(a)?new a.constructor(a.subarray(b,c)):a.slice(b,c)},convertArray:function(a,b,c){return!a||!c&&a.constructor===b?a:"number"===typeof b.BYTES_PER_ELEMENT?new b(a):Array.prototype.slice.call(a)},
isTypedArray:function(a){return ArrayBuffer.isView(a)&&!(a instanceof DataView)},getKeyframeOrder:function(a){for(var b=a.length,c=Array(b),d=0;d!==b;++d)c[d]=d;c.sort(function(b,c){return a[b]-a[c]});return c},sortedArray:function(a,b,c){for(var d=a.length,e=new a.constructor(d),f=0,g=0;g!==d;++f)for(var h=c[f]*b,m=0;m!==b;++m)e[g++]=a[h+m];return e},flattenJSON:function(a,b,c,d){for(var e=1,f=a[0];void 0!==f&&void 0===f[d];)f=a[e++];if(void 0!==f){var g=f[d];if(void 0!==g)if(Array.isArray(g)){do g=
f[d],void 0!==g&&(b.push(f.time),c.push.apply(c,g)),f=a[e++];while(void 0!==f)}else if(void 0!==g.toArray){do g=f[d],void 0!==g&&(b.push(f.time),g.toArray(c,c.length)),f=a[e++];while(void 0!==f)}else{do g=f[d],void 0!==g&&(b.push(f.time),c.push(g)),f=a[e++];while(void 0!==f)}}}};xa.prototype={constructor:xa,evaluate:function(a){var b=this.parameterPositions,c=this._cachedIndex,d=b[c],e=b[c-1];a:{b:{c:{d:if(!(a<d)){for(var f=c+2;;){if(void 0===d){if(a<e)break d;this._cachedIndex=c=b.length;return this.afterEnd_(c-
1,a,e)}if(c===f)break;e=d;d=b[++c];if(a<d)break b}d=b.length;break c}if(a>=e)break a;else{f=b[1];a<f&&(c=2,e=f);for(f=c-2;;){if(void 0===e)return this._cachedIndex=0,this.beforeStart_(0,a,d);if(c===f)break;d=e;e=b[--c-1];if(a>=e)break b}d=c;c=0}}for(;c<d;)e=c+d>>>1,a<b[e]?d=e:c=e+1;d=b[c];e=b[c-1];if(void 0===e)return this._cachedIndex=0,this.beforeStart_(0,a,d);if(void 0===d)return this._cachedIndex=c=b.length,this.afterEnd_(c-1,e,a)}this._cachedIndex=c;this.intervalChanged_(c,e,d)}return this.interpolate_(c,
e,a,d)},settings:null,DefaultSettings_:{},getSettings_:function(){return this.settings||this.DefaultSettings_},copySampleValue_:function(a){var b=this.resultBuffer,c=this.sampleValues,d=this.valueSize;a*=d;for(var e=0;e!==d;++e)b[e]=c[a+e];return b},interpolate_:function(a,b,c,d){throw Error("call to abstract method");},intervalChanged_:function(a,b,c){}};Object.assign(xa.prototype,{beforeStart_:xa.prototype.copySampleValue_,afterEnd_:xa.prototype.copySampleValue_});Bd.prototype=Object.assign(Object.create(xa.prototype),
{constructor:Bd,DefaultSettings_:{endingStart:2400,endingEnd:2400},intervalChanged_:function(a,b,c){var d=this.parameterPositions,e=a-2,f=a+1,g=d[e],h=d[f];if(void 0===g)switch(this.getSettings_().endingStart){case 2401:e=a;g=2*b-c;break;case 2402:e=d.length-2;g=b+d[e]-d[e+1];break;default:e=a,g=c}if(void 0===h)switch(this.getSettings_().endingEnd){case 2401:f=a;h=2*c-b;break;case 2402:f=1;h=c+d[1]-d[0];break;default:f=a-1,h=b}a=.5*(c-b);d=this.valueSize;this._weightPrev=a/(b-g);this._weightNext=
a/(h-c);this._offsetPrev=e*d;this._offsetNext=f*d},interpolate_:function(a,b,c,d){var e=this.resultBuffer,f=this.sampleValues,g=this.valueSize;a*=g;var h=a-g,m=this._offsetPrev,k=this._offsetNext,l=this._weightPrev,p=this._weightNext,n=(c-b)/(d-b);c=n*n;d=c*n;b=-l*d+2*l*c-l*n;l=(1+l)*d+(-1.5-2*l)*c+(-.5+l)*n+1;n=(-1-p)*d+(1.5+p)*c+.5*n;p=p*d-p*c;for(c=0;c!==g;++c)e[c]=b*f[m+c]+l*f[h+c]+n*f[a+c]+p*f[k+c];return e}});Zc.prototype=Object.assign(Object.create(xa.prototype),{constructor:Zc,interpolate_:function(a,
b,c,d){var e=this.resultBuffer,f=this.sampleValues,g=this.valueSize;a*=g;var h=a-g;b=(c-b)/(d-b);c=1-b;for(d=0;d!==g;++d)e[d]=f[h+d]*c+f[a+d]*b;return e}});Cd.prototype=Object.assign(Object.create(xa.prototype),{constructor:Cd,interpolate_:function(a,b,c,d){return this.copySampleValue_(a-1)}});var Xa;Xa={TimeBufferType:Float32Array,ValueBufferType:Float32Array,DefaultInterpolation:2301,InterpolantFactoryMethodDiscrete:function(a){return new Cd(this.times,this.values,this.getValueSize(),a)},InterpolantFactoryMethodLinear:function(a){return new Zc(this.times,
this.values,this.getValueSize(),a)},InterpolantFactoryMethodSmooth:function(a){return new Bd(this.times,this.values,this.getValueSize(),a)},setInterpolation:function(a){var b;switch(a){case 2300:b=this.InterpolantFactoryMethodDiscrete;break;case 2301:b=this.InterpolantFactoryMethodLinear;break;case 2302:b=this.InterpolantFactoryMethodSmooth}if(void 0===b){b="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(void 0===this.createInterpolant)if(a!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);
else throw Error(b);void 0}else this.createInterpolant=b},getInterpolation:function(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return 2300;case this.InterpolantFactoryMethodLinear:return 2301;case this.InterpolantFactoryMethodSmooth:return 2302}},getValueSize:function(){return this.values.length/this.times.length},shift:function(a){if(0!==a)for(var b=this.times,c=0,d=b.length;c!==d;++c)b[c]+=a;return this},scale:function(a){if(1!==a)for(var b=this.times,c=
0,d=b.length;c!==d;++c)b[c]*=a;return this},trim:function(a,b){for(var c=this.times,d=c.length,e=0,f=d-1;e!==d&&c[e]<a;)++e;for(;-1!==f&&c[f]>b;)--f;++f;if(0!==e||f!==d)e>=f&&(f=Math.max(f,1),e=f-1),d=this.getValueSize(),this.times=na.arraySlice(c,e,f),this.values=na.arraySlice(this.values,e*d,f*d);return this},validate:function(){var a=!0,b=this.getValueSize();0!==b-Math.floor(b)&&(void 0,a=!1);var c=this.times,b=this.values,d=c.length;0===d&&(void 0,a=!1);for(var e=null,f=0;f!==d;f++){var g=c[f];if("number"===typeof g&&isNaN(g)){void 0;a=!1;break}if(null!==e&&e>g){void 0;a=!1;break}e=g}if(void 0!==b&&na.isTypedArray(b))for(f=0,c=b.length;f!==c;++f)if(d=b[f],isNaN(d)){void 0;a=!1;break}return a},optimize:function(){for(var a=this.times,b=this.values,c=this.getValueSize(),d=2302===this.getInterpolation(),e=1,
f=a.length-1,g=1;g<f;++g){var h=!1,m=a[g];if(m!==a[g+1]&&(1!==g||m!==m[0]))if(d)h=!0;else for(var k=g*c,l=k-c,p=k+c,m=0;m!==c;++m){var n=b[k+m];if(n!==b[l+m]||n!==b[p+m]){h=!0;break}}if(h){if(g!==e)for(a[e]=a[g],h=g*c,k=e*c,m=0;m!==c;++m)b[k+m]=b[h+m];++e}}if(0<f){a[e]=a[f];h=f*c;k=e*c;for(m=0;m!==c;++m)b[k+m]=b[h+m];++e}e!==a.length&&(this.times=na.arraySlice(a,0,e),this.values=na.arraySlice(b,0,e*c));return this}};dc.prototype=Object.assign(Object.create(Xa),{constructor:dc,ValueTypeName:"vector"});
Dd.prototype=Object.assign(Object.create(xa.prototype),{constructor:Dd,interpolate_:function(a,b,c,d){var e=this.resultBuffer,f=this.sampleValues,g=this.valueSize;a*=g;b=(c-b)/(d-b);for(c=a+g;a!==c;a+=4)ca.slerpFlat(e,0,f,a-g,f,a,b);return e}});$c.prototype=Object.assign(Object.create(Xa),{constructor:$c,ValueTypeName:"quaternion",DefaultInterpolation:2301,InterpolantFactoryMethodLinear:function(a){return new Dd(this.times,this.values,this.getValueSize(),a)},InterpolantFactoryMethodSmooth:void 0});
ec.prototype=Object.assign(Object.create(Xa),{constructor:ec,ValueTypeName:"number"});Ed.prototype=Object.assign(Object.create(Xa),{constructor:Ed,ValueTypeName:"string",ValueBufferType:Array,DefaultInterpolation:2300,InterpolantFactoryMethodLinear:void 0,InterpolantFactoryMethodSmooth:void 0});Fd.prototype=Object.assign(Object.create(Xa),{constructor:Fd,ValueTypeName:"bool",ValueBufferType:Array,DefaultInterpolation:2300,InterpolantFactoryMethodLinear:void 0,InterpolantFactoryMethodSmooth:void 0});
Gd.prototype=Object.assign(Object.create(Xa),{constructor:Gd,ValueTypeName:"color"});yb.prototype=Xa;Xa.constructor=yb;Object.assign(yb,{parse:function(a){if(void 0===a.type)throw Error("track type undefined, can not parse");var b=yb._getTrackTypeForValueTypeName(a.type);if(void 0===a.times){var c=[],d=[];na.flattenJSON(a.keys,c,d,"value");a.times=c;a.values=d}return void 0!==b.parse?b.parse(a):new b(a.name,a.times,a.values,a.interpolation)},toJSON:function(a){var b=a.constructor;if(void 0!==b.toJSON)b=
b.toJSON(a);else{var b={name:a.name,times:na.convertArray(a.times,Array),values:na.convertArray(a.values,Array)},c=a.getInterpolation();c!==a.DefaultInterpolation&&(b.interpolation=c)}b.type=a.ValueTypeName;return b},_getTrackTypeForValueTypeName:function(a){switch(a.toLowerCase()){case "scalar":case "double":case "float":case "number":case "integer":return ec;case "vector":case "vector2":case "vector3":case "vector4":return dc;case "color":return Gd;case "quaternion":return $c;case "bool":case "boolean":return Fd;
case "string":return Ed}throw Error("Unsupported typeName: "+a);}});qa.prototype={constructor:qa,resetDuration:function(){for(var a=0,b=0,c=this.tracks.length;b!==c;++b)var d=this.tracks[b],a=Math.max(a,d.times[d.times.length-1]);this.duration=a},trim:function(){for(var a=0;a<this.tracks.length;a++)this.tracks[a].trim(0,this.duration);return this},optimize:function(){for(var a=0;a<this.tracks.length;a++)this.tracks[a].optimize();return this}};Object.assign(qa,{parse:function(a){for(var b=[],c=a.tracks,
d=1/(a.fps||1),e=0,f=c.length;e!==f;++e)b.push(yb.parse(c[e]).scale(d));return new qa(a.name,a.duration,b)},toJSON:function(a){var b=[],c=a.tracks;a={name:a.name,duration:a.duration,tracks:b};for(var d=0,e=c.length;d!==e;++d)b.push(yb.toJSON(c[d]));return a},CreateFromMorphTargetSequence:function(a,b,c,d){for(var e=b.length,f=[],g=0;g<e;g++){var h=[],m=[];h.push((g+e-1)%e,g,(g+1)%e);m.push(0,1,0);var k=na.getKeyframeOrder(h),h=na.sortedArray(h,1,k),m=na.sortedArray(m,1,k);d||0!==h[0]||(h.push(e),
m.push(m[0]));f.push((new ec(".morphTargetInfluences["+b[g].name+"]",h,m)).scale(1/c))}return new qa(a,-1,f)},findByName:function(a,b){var c=a;Array.isArray(a)||(c=a.geometry&&a.geometry.animations||a.animations);for(var d=0;d<c.length;d++)if(c[d].name===b)return c[d];return null},CreateClipsFromMorphTargetSequences:function(a,b,c){for(var d={},e=/^([\w-]*?)([\d]+)$/,f=0,g=a.length;f<g;f++){var h=a[f],m=h.name.match(e);if(m&&1<m.length){var k=m[1];(m=d[k])||(d[k]=m=[]);m.push(h)}}a=[];for(k in d)a.push(qa.CreateFromMorphTargetSequence(k,
d[k],b,c));return a},parseAnimation:function(a,b){if(!a)return void 0,null;for(var c=function(a,b,c,d,e){if(0!==c.length){var f=[],g=[];na.flattenJSON(c,f,g,d);0!==f.length&&e.push(new a(b,f,g))}},d=[],e=a.name||"default",f=a.length||-1,g=a.fps||30,h=a.hierarchy||[],m=0;m<h.length;m++){var k=h[m].keys;if(k&&0!==k.length)if(k[0].morphTargets){for(var f={},l=0;l<k.length;l++)if(k[l].morphTargets)for(var p=0;p<k[l].morphTargets.length;p++)f[k[l].morphTargets[p]]=
-1;for(var n in f){for(var q=[],G=[],p=0;p!==k[l].morphTargets.length;++p){var r=k[l];q.push(r.time);G.push(r.morphTarget===n?1:0)}d.push(new ec(".morphTargetInfluence["+n+"]",q,G))}f=f.length*(g||1)}else l=".bones["+b[m].name+"]",c(dc,l+".position",k,"pos",d),c($c,l+".quaternion",k,"rot",d),c(dc,l+".scale",k,"scl",d)}return 0===d.length?null:new qa(e,f,d)}});Object.assign(Hd.prototype,{load:function(a,b,c,d){var e=this;(new sa(e.manager)).load(a,function(a){b(e.parse(JSON.parse(a)))},c,d)},setTextures:function(a){this.textures=
a},parse:function(a){function b(a){void 0===c[a]&&void 0;return c[a]}var c=this.textures,d=new Xf[a.type];void 0!==a.uuid&&(d.uuid=a.uuid);void 0!==a.name&&(d.name=a.name);void 0!==a.color&&d.color.setHex(a.color);void 0!==a.roughness&&(d.roughness=a.roughness);void 0!==a.metalness&&(d.metalness=a.metalness);void 0!==a.emissive&&d.emissive.setHex(a.emissive);void 0!==a.specular&&d.specular.setHex(a.specular);void 0!==a.shininess&&(d.shininess=a.shininess);
void 0!==a.clearCoat&&(d.clearCoat=a.clearCoat);void 0!==a.clearCoatRoughness&&(d.clearCoatRoughness=a.clearCoatRoughness);void 0!==a.uniforms&&(d.uniforms=a.uniforms);void 0!==a.vertexShader&&(d.vertexShader=a.vertexShader);void 0!==a.fragmentShader&&(d.fragmentShader=a.fragmentShader);void 0!==a.vertexColors&&(d.vertexColors=a.vertexColors);void 0!==a.fog&&(d.fog=a.fog);void 0!==a.shading&&(d.shading=a.shading);void 0!==a.blending&&(d.blending=a.blending);void 0!==a.side&&(d.side=a.side);void 0!==
a.opacity&&(d.opacity=a.opacity);void 0!==a.transparent&&(d.transparent=a.transparent);void 0!==a.alphaTest&&(d.alphaTest=a.alphaTest);void 0!==a.depthTest&&(d.depthTest=a.depthTest);void 0!==a.depthWrite&&(d.depthWrite=a.depthWrite);void 0!==a.colorWrite&&(d.colorWrite=a.colorWrite);void 0!==a.wireframe&&(d.wireframe=a.wireframe);void 0!==a.wireframeLinewidth&&(d.wireframeLinewidth=a.wireframeLinewidth);void 0!==a.wireframeLinecap&&(d.wireframeLinecap=a.wireframeLinecap);void 0!==a.wireframeLinejoin&&
(d.wireframeLinejoin=a.wireframeLinejoin);void 0!==a.skinning&&(d.skinning=a.skinning);void 0!==a.morphTargets&&(d.morphTargets=a.morphTargets);void 0!==a.size&&(d.size=a.size);void 0!==a.sizeAttenuation&&(d.sizeAttenuation=a.sizeAttenuation);void 0!==a.map&&(d.map=b(a.map));void 0!==a.alphaMap&&(d.alphaMap=b(a.alphaMap),d.transparent=!0);void 0!==a.bumpMap&&(d.bumpMap=b(a.bumpMap));void 0!==a.bumpScale&&(d.bumpScale=a.bumpScale);void 0!==a.normalMap&&(d.normalMap=b(a.normalMap));if(void 0!==a.normalScale){var e=
a.normalScale;!1===Array.isArray(e)&&(e=[e,e]);d.normalScale=(new D).fromArray(e)}void 0!==a.displacementMap&&(d.displacementMap=b(a.displacementMap));void 0!==a.displacementScale&&(d.displacementScale=a.displacementScale);void 0!==a.displacementBias&&(d.displacementBias=a.displacementBias);void 0!==a.roughnessMap&&(d.roughnessMap=b(a.roughnessMap));void 0!==a.metalnessMap&&(d.metalnessMap=b(a.metalnessMap));void 0!==a.emissiveMap&&(d.emissiveMap=b(a.emissiveMap));void 0!==a.emissiveIntensity&&(d.emissiveIntensity=
a.emissiveIntensity);void 0!==a.specularMap&&(d.specularMap=b(a.specularMap));void 0!==a.envMap&&(d.envMap=b(a.envMap));void 0!==a.reflectivity&&(d.reflectivity=a.reflectivity);void 0!==a.lightMap&&(d.lightMap=b(a.lightMap));void 0!==a.lightMapIntensity&&(d.lightMapIntensity=a.lightMapIntensity);void 0!==a.aoMap&&(d.aoMap=b(a.aoMap));void 0!==a.aoMapIntensity&&(d.aoMapIntensity=a.aoMapIntensity);void 0!==a.gradientMap&&(d.gradientMap=b(a.gradientMap));if(void 0!==a.materials)for(var e=0,f=a.materials.length;e<
f;e++)d.materials.push(this.parse(a.materials[e]));return d}});Object.assign(ce.prototype,{load:function(a,b,c,d){var e=this;(new sa(e.manager)).load(a,function(a){b(e.parse(JSON.parse(a)))},c,d)},parse:function(a){var b=new I,c=a.data.index,d={Int8Array:Int8Array,Uint8Array:Uint8Array,Uint8ClampedArray:Uint8ClampedArray,Int16Array:Int16Array,Uint16Array:Uint16Array,Int32Array:Int32Array,Uint32Array:Uint32Array,Float32Array:Float32Array,Float64Array:Float64Array};void 0!==c&&(c=new d[c.type](c.array),
b.setIndex(new U(c,1)));var e=a.data.attributes,f;for(f in e){var g=e[f],c=new d[g.type](g.array);b.addAttribute(f,new U(c,g.itemSize,g.normalized))}d=a.data.groups||a.data.drawcalls||a.data.offsets;if(void 0!==d)for(f=0,c=d.length;f!==c;++f)e=d[f],b.addGroup(e.start,e.count,e.materialIndex);a=a.data.boundingSphere;void 0!==a&&(d=new q,void 0!==a.center&&d.fromArray(a.center),b.boundingSphere=new Na(d,a.radius));return b}});zb.prototype={constructor:zb,crossOrigin:void 0,extractUrlBase:function(a){a=
a.split("/");if(1===a.length)return"./";a.pop();return a.join("/")+"/"},initMaterials:function(a,b,c){for(var d=[],e=0;e<a.length;++e)d[e]=this.createMaterial(a[e],b,c);return d},createMaterial:function(){var a={NoBlending:0,NormalBlending:1,AdditiveBlending:2,SubtractiveBlending:3,MultiplyBlending:4,CustomBlending:5},b,c,d;return function(e,f,g){function h(a,b,d,e,h){a=f+a;var k=zb.Handlers.get(a);null!==k?a=k.load(a):(c.setCrossOrigin(g),a=c.load(a));void 0!==b&&(a.repeat.fromArray(b),1!==b[0]&&
(a.wrapS=1E3),1!==b[1]&&(a.wrapT=1E3));void 0!==d&&a.offset.fromArray(d);void 0!==e&&("repeat"===e[0]&&(a.wrapS=1E3),"mirror"===e[0]&&(a.wrapS=1002),"repeat"===e[1]&&(a.wrapT=1E3),"mirror"===e[1]&&(a.wrapT=1002));void 0!==h&&(a.anisotropy=h);b=N.generateUUID();m[b]=a;return b}void 0===b&&(b=new J);void 0===c&&(c=new td);void 0===d&&(d=new Hd);var m={},k={uuid:N.generateUUID(),type:"MeshLambertMaterial"},l;for(l in e){var p=e[l];switch(l){case "DbgColor":case "DbgIndex":case "opticalDensity":case "illumination":break;
case "DbgName":k.name=p;break;case "blending":k.blending=a[p];break;case "colorAmbient":case "mapAmbient":void 0;break;case "colorDiffuse":k.color=b.fromArray(p).getHex();break;case "colorSpecular":k.specular=b.fromArray(p).getHex();break;case "colorEmissive":k.emissive=b.fromArray(p).getHex();break;case "specularCoef":k.shininess=p;break;case "shading":"basic"===p.toLowerCase()&&(k.type="MeshBasicMaterial");"phong"===p.toLowerCase()&&
(k.type="MeshPhongMaterial");"standard"===p.toLowerCase()&&(k.type="MeshStandardMaterial");break;case "mapDiffuse":k.map=h(p,e.mapDiffuseRepeat,e.mapDiffuseOffset,e.mapDiffuseWrap,e.mapDiffuseAnisotropy);break;case "mapDiffuseRepeat":case "mapDiffuseOffset":case "mapDiffuseWrap":case "mapDiffuseAnisotropy":break;case "mapEmissive":k.emissiveMap=h(p,e.mapEmissiveRepeat,e.mapEmissiveOffset,e.mapEmissiveWrap,e.mapEmissiveAnisotropy);break;case "mapEmissiveRepeat":case "mapEmissiveOffset":case "mapEmissiveWrap":case "mapEmissiveAnisotropy":break;
case "mapLight":k.lightMap=h(p,e.mapLightRepeat,e.mapLightOffset,e.mapLightWrap,e.mapLightAnisotropy);break;case "mapLightRepeat":case "mapLightOffset":case "mapLightWrap":case "mapLightAnisotropy":break;case "mapAO":k.aoMap=h(p,e.mapAORepeat,e.mapAOOffset,e.mapAOWrap,e.mapAOAnisotropy);break;case "mapAORepeat":case "mapAOOffset":case "mapAOWrap":case "mapAOAnisotropy":break;case "mapBump":k.bumpMap=h(p,e.mapBumpRepeat,e.mapBumpOffset,e.mapBumpWrap,e.mapBumpAnisotropy);break;case "mapBumpScale":k.bumpScale=
p;break;case "mapBumpRepeat":case "mapBumpOffset":case "mapBumpWrap":case "mapBumpAnisotropy":break;case "mapNormal":k.normalMap=h(p,e.mapNormalRepeat,e.mapNormalOffset,e.mapNormalWrap,e.mapNormalAnisotropy);break;case "mapNormalFactor":k.normalScale=[p,p];break;case "mapNormalRepeat":case "mapNormalOffset":case "mapNormalWrap":case "mapNormalAnisotropy":break;case "mapSpecular":k.specularMap=h(p,e.mapSpecularRepeat,e.mapSpecularOffset,e.mapSpecularWrap,e.mapSpecularAnisotropy);break;case "mapSpecularRepeat":case "mapSpecularOffset":case "mapSpecularWrap":case "mapSpecularAnisotropy":break;
case "mapMetalness":k.metalnessMap=h(p,e.mapMetalnessRepeat,e.mapMetalnessOffset,e.mapMetalnessWrap,e.mapMetalnessAnisotropy);break;case "mapMetalnessRepeat":case "mapMetalnessOffset":case "mapMetalnessWrap":case "mapMetalnessAnisotropy":break;case "mapRoughness":k.roughnessMap=h(p,e.mapRoughnessRepeat,e.mapRoughnessOffset,e.mapRoughnessWrap,e.mapRoughnessAnisotropy);break;case "mapRoughnessRepeat":case "mapRoughnessOffset":case "mapRoughnessWrap":case "mapRoughnessAnisotropy":break;case "mapAlpha":k.alphaMap=
h(p,e.mapAlphaRepeat,e.mapAlphaOffset,e.mapAlphaWrap,e.mapAlphaAnisotropy);break;case "mapAlphaRepeat":case "mapAlphaOffset":case "mapAlphaWrap":case "mapAlphaAnisotropy":break;case "flipSided":k.side=1;break;case "doubleSided":k.side=2;break;case "transparency":void 0;k.opacity=p;break;case "depthTest":case "depthWrite":case "colorWrite":case "opacity":case "reflectivity":case "transparent":case "visible":case "wireframe":k[l]=
p;break;case "vertexColors":!0===p&&(k.vertexColors=2);"face"===p&&(k.vertexColors=1);break;default:void 0}}"MeshBasicMaterial"===k.type&&delete k.emissive;"MeshPhongMaterial"!==k.type&&delete k.specular;1>k.opacity&&(k.transparent=!0);d.setTextures(m);return d.parse(k)}}()};zb.Handlers={handlers:[],add:function(a,b){this.handlers.push(a,b)},get:function(a){for(var b=this.handlers,c=0,d=b.length;c<d;c+=2){var e=b[c+1];if(b[c].test(a))return e}return null}};
Object.assign(de.prototype,{load:function(a,b,c,d){var e=this,f=this.texturePath&&"string"===typeof this.texturePath?this.texturePath:zb.prototype.extractUrlBase(a),g=new sa(this.manager);g.setWithCredentials(this.withCredentials);g.load(a,function(c){c=JSON.parse(c);var d=c.metadata;if(void 0!==d&&(d=d.type,void 0!==d)){if("object"===d.toLowerCase()){void 0;return}if("scene"===d.toLowerCase()){void 0;return}}c=e.parse(c,f);b(c.geometry,c.materials)},c,d)},setTexturePath:function(a){this.texturePath=a},parse:function(a,b){var c=new T,d=void 0!==a.scale?1/a.scale:1;(function(b){var d,g,h,m,k,l,p,n,u,G,r,A,w,y=a.faces;l=a.vertices;var x=a.normals,v=a.colors,z=0;if(void 0!==a.uvs){for(d=0;d<a.uvs.length;d++)a.uvs[d].length&&z++;for(d=0;d<z;d++)c.faceVertexUvs[d]=[]}m=0;for(k=l.length;m<k;)d=new q,d.x=l[m++]*b,d.y=l[m++]*b,d.z=l[m++]*b,c.vertices.push(d);
m=0;for(k=y.length;m<k;)if(b=y[m++],u=b&1,h=b&2,d=b&8,p=b&16,G=b&32,l=b&64,b&=128,u){u=new ha;u.a=y[m];u.b=y[m+1];u.c=y[m+3];r=new ha;r.a=y[m+1];r.b=y[m+2];r.c=y[m+3];m+=4;h&&(h=y[m++],u.materialIndex=h,r.materialIndex=h);h=c.faces.length;if(d)for(d=0;d<z;d++)for(A=a.uvs[d],c.faceVertexUvs[d][h]=[],c.faceVertexUvs[d][h+1]=[],g=0;4>g;g++)n=y[m++],w=A[2*n],n=A[2*n+1],w=new D(w,n),2!==g&&c.faceVertexUvs[d][h].push(w),0!==g&&c.faceVertexUvs[d][h+1].push(w);p&&(p=3*y[m++],u.normal.set(x[p++],x[p++],x[p]),
r.normal.copy(u.normal));if(G)for(d=0;4>d;d++)p=3*y[m++],G=new q(x[p++],x[p++],x[p]),2!==d&&u.vertexNormals.push(G),0!==d&&r.vertexNormals.push(G);l&&(l=y[m++],l=v[l],u.color.setHex(l),r.color.setHex(l));if(b)for(d=0;4>d;d++)l=y[m++],l=v[l],2!==d&&u.vertexColors.push(new J(l)),0!==d&&r.vertexColors.push(new J(l));c.faces.push(u);c.faces.push(r)}else{u=new ha;u.a=y[m++];u.b=y[m++];u.c=y[m++];h&&(h=y[m++],u.materialIndex=h);h=c.faces.length;if(d)for(d=0;d<z;d++)for(A=a.uvs[d],c.faceVertexUvs[d][h]=
[],g=0;3>g;g++)n=y[m++],w=A[2*n],n=A[2*n+1],w=new D(w,n),c.faceVertexUvs[d][h].push(w);p&&(p=3*y[m++],u.normal.set(x[p++],x[p++],x[p]));if(G)for(d=0;3>d;d++)p=3*y[m++],G=new q(x[p++],x[p++],x[p]),u.vertexNormals.push(G);l&&(l=y[m++],u.color.setHex(v[l]));if(b)for(d=0;3>d;d++)l=y[m++],u.vertexColors.push(new J(v[l]));c.faces.push(u)}})(d);(function(){var b=void 0!==a.influencesPerVertex?a.influencesPerVertex:2;if(a.skinWeights)for(var d=0,g=a.skinWeights.length;d<g;d+=b)c.skinWeights.push(new fa(a.skinWeights[d],
1<b?a.skinWeights[d+1]:0,2<b?a.skinWeights[d+2]:0,3<b?a.skinWeights[d+3]:0));if(a.skinIndices)for(d=0,g=a.skinIndices.length;d<g;d+=b)c.skinIndices.push(new fa(a.skinIndices[d],1<b?a.skinIndices[d+1]:0,2<b?a.skinIndices[d+2]:0,3<b?a.skinIndices[d+3]:0));c.bones=a.bones;c.bones&&0<c.bones.length&&(c.skinWeights.length!==c.skinIndices.length||c.skinIndices.length!==c.vertices.length)&&void 0})();(function(b){if(void 0!==a.morphTargets)for(var d=0,g=a.morphTargets.length;d<g;d++){c.morphTargets[d]={};c.morphTargets[d].name=a.morphTargets[d].name;c.morphTargets[d].vertices=[];for(var h=c.morphTargets[d].vertices,m=a.morphTargets[d].vertices,k=0,l=m.length;k<l;k+=3){var p=new q;p.x=m[k]*b;p.y=m[k+1]*b;p.z=m[k+2]*b;h.push(p)}}if(void 0!==a.morphColors&&0<a.morphColors.length)for(void 0,
b=c.faces,h=a.morphColors[0].colors,d=0,g=b.length;d<g;d++)b[d].color.fromArray(h,3*d)})(d);(function(){var b=[],d=[];void 0!==a.animation&&d.push(a.animation);void 0!==a.animations&&(a.animations.length?d=d.concat(a.animations):d.push(a.animations));for(var g=0;g<d.length;g++){var h=qa.parseAnimation(d[g],c.bones);h&&b.push(h)}c.morphTargets&&(d=qa.CreateClipsFromMorphTargetSequences(c.morphTargets,10),b=b.concat(d));0<b.length&&(c.animations=b)})();c.computeFaceNormals();c.computeBoundingSphere();
if(void 0===a.materials||0===a.materials.length)return{geometry:c};d=zb.prototype.initMaterials(a.materials,b,this.crossOrigin);return{geometry:c,materials:d}}});Object.assign(Se.prototype,{load:function(a,b,c,d){""===this.texturePath&&(this.texturePath=a.substring(0,a.lastIndexOf("/")+1));var e=this;(new sa(e.manager)).load(a,function(c){var g=null;try{g=JSON.parse(c)}catch(h){void 0!==d&&d(h);void 0;return}c=g.metadata;void 0===c||void 0===
c.type||"geometry"===c.type.toLowerCase()?void 0:e.parse(g,b)},c,d)},setTexturePath:function(a){this.texturePath=a},setCrossOrigin:function(a){this.crossOrigin=a},parse:function(a,b){var c=this.parseGeometries(a.geometries),d=this.parseImages(a.images,function(){void 0!==b&&b(e)}),d=this.parseTextures(a.textures,d),d=this.parseMaterials(a.materials,d),e=this.parseObject(a.object,c,d);a.animations&&(e.animations=this.parseAnimations(a.animations));
void 0!==a.images&&0!==a.images.length||void 0===b||b(e);return e},parseGeometries:function(a){var b={};if(void 0!==a)for(var c=new de,d=new ce,e=0,f=a.length;e<f;e++){var g,h=a[e];switch(h.type){case "PlaneGeometry":case "PlaneBufferGeometry":g=new Ma[h.type](h.width,h.height,h.widthSegments,h.heightSegments);break;case "BoxGeometry":case "BoxBufferGeometry":case "CubeGeometry":g=new Ma[h.type](h.width,h.height,h.depth,h.widthSegments,h.heightSegments,h.depthSegments);break;case "CircleGeometry":case "CircleBufferGeometry":g=
new Ma[h.type](h.radius,h.segments,h.thetaStart,h.thetaLength);break;case "CylinderGeometry":case "CylinderBufferGeometry":g=new Ma[h.type](h.radiusTop,h.radiusBottom,h.height,h.radialSegments,h.heightSegments,h.openEnded,h.thetaStart,h.thetaLength);break;case "ConeGeometry":case "ConeBufferGeometry":g=new Ma[h.type](h.radius,h.height,h.radialSegments,h.heightSegments,h.openEnded,h.thetaStart,h.thetaLength);break;case "SphereGeometry":case "SphereBufferGeometry":g=new Ma[h.type](h.radius,h.widthSegments,
h.heightSegments,h.phiStart,h.phiLength,h.thetaStart,h.thetaLength);break;case "DodecahedronGeometry":case "IcosahedronGeometry":case "OctahedronGeometry":case "TetrahedronGeometry":g=new Ma[h.type](h.radius,h.detail);break;case "RingGeometry":case "RingBufferGeometry":g=new Ma[h.type](h.innerRadius,h.outerRadius,h.thetaSegments,h.phiSegments,h.thetaStart,h.thetaLength);break;case "TorusGeometry":case "TorusBufferGeometry":g=new Ma[h.type](h.radius,h.tube,h.radialSegments,h.tubularSegments,h.arc);
break;case "TorusKnotGeometry":case "TorusKnotBufferGeometry":g=new Ma[h.type](h.radius,h.tube,h.tubularSegments,h.radialSegments,h.p,h.q);break;case "LatheGeometry":case "LatheBufferGeometry":g=new Ma[h.type](h.points,h.segments,h.phiStart,h.phiLength);break;case "BufferGeometry":g=d.parse(h);break;case "Geometry":g=c.parse(h.data,this.texturePath).geometry;break;default:void 0;continue}g.uuid=h.uuid;void 0!==h.name&&(g.name=h.name);
b[h.uuid]=g}return b},parseMaterials:function(a,b){var c={};if(void 0!==a){var d=new Hd;d.setTextures(b);for(var e=0,f=a.length;e<f;e++){var g=d.parse(a[e]);c[g.uuid]=g}}return c},parseAnimations:function(a){for(var b=[],c=0;c<a.length;c++){var d=qa.parse(a[c]);b.push(d)}return b},parseImages:function(a,b){function c(a){d.manager.itemStart(a);return g.load(a,function(){d.manager.itemEnd(a)},void 0,function(){d.manager.itemError(a)})}var d=this,e={};if(void 0!==a&&0<a.length){var f=new $d(b),g=new Yc(f);
g.setCrossOrigin(this.crossOrigin);for(var f=0,h=a.length;f<h;f++){var m=a[f],k=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(m.url)?m.url:d.texturePath+m.url;e[m.uuid]=c(k)}}return e},parseTextures:function(a,b){function c(a,b){if("number"===typeof a)return a;void 0;return b[a]}var d={UVMapping:300,CubeReflectionMapping:301,CubeRefractionMapping:302,EquirectangularReflectionMapping:303,EquirectangularRefractionMapping:304,SphericalReflectionMapping:305,
CubeUVReflectionMapping:306,CubeUVRefractionMapping:307},e={RepeatWrapping:1E3,ClampToEdgeWrapping:1001,MirroredRepeatWrapping:1002},f={NearestFilter:1003,NearestMipMapNearestFilter:1004,NearestMipMapLinearFilter:1005,LinearFilter:1006,LinearMipMapNearestFilter:1007,LinearMipMapLinearFilter:1008},g={};if(void 0!==a)for(var h=0,m=a.length;h<m;h++){var k=a[h];void 0===k.image&&void 0;void 0===b[k.image]&&void 0;var l=new ea(b[k.image]);l.needsUpdate=!0;l.uuid=k.uuid;void 0!==k.name&&(l.name=k.name);void 0!==k.mapping&&(l.mapping=c(k.mapping,d));void 0!==k.offset&&l.offset.fromArray(k.offset);void 0!==k.repeat&&l.repeat.fromArray(k.repeat);void 0!==k.wrap&&(l.wrapS=c(k.wrap[0],e),l.wrapT=c(k.wrap[1],e));void 0!==k.minFilter&&(l.minFilter=c(k.minFilter,f));void 0!==k.magFilter&&(l.magFilter=c(k.magFilter,f));void 0!==k.anisotropy&&(l.anisotropy=k.anisotropy);void 0!==k.flipY&&(l.flipY=k.flipY);g[k.uuid]=
l}return g},parseObject:function(){var a=new S;return function(b,c,d){function e(a){void 0===c[a]&&void 0;return c[a]}function f(a){if(void 0!==a)return void 0===d[a]&&void 0,d[a]}var g;switch(b.type){case "Scene":g=new mb;void 0!==b.background&&Number.isInteger(b.background)&&(g.background=new J(b.background));void 0!==b.fog&&("Fog"===b.fog.type?g.fog=new Lb(b.fog.color,b.fog.near,b.fog.far):"FogExp2"===
b.fog.type&&(g.fog=new Kb(b.fog.color,b.fog.density)));break;case "PerspectiveCamera":g=new Fa(b.fov,b.aspect,b.near,b.far);void 0!==b.focus&&(g.focus=b.focus);void 0!==b.zoom&&(g.zoom=b.zoom);void 0!==b.filmGauge&&(g.filmGauge=b.filmGauge);void 0!==b.filmOffset&&(g.filmOffset=b.filmOffset);void 0!==b.view&&(g.view=Object.assign({},b.view));break;case "OrthographicCamera":g=new Jb(b.left,b.right,b.top,b.bottom,b.near,b.far);break;case "AmbientLight":g=new Ad(b.color,b.intensity);break;case "DirectionalLight":g=
new zd(b.color,b.intensity);break;case "PointLight":g=new xd(b.color,b.intensity,b.distance,b.decay);break;case "SpotLight":g=new wd(b.color,b.intensity,b.distance,b.angle,b.penumbra,b.decay);break;case "HemisphereLight":g=new ud(b.color,b.groundColor,b.intensity);break;case "Mesh":g=e(b.geometry);var h=f(b.material);g=g.bones&&0<g.bones.length?new qd(g,h):new Aa(g,h);break;case "LOD":g=new Ec;break;case "Line":g=new Ua(e(b.geometry),f(b.material),b.mode);break;case "LineSegments":g=new ga(e(b.geometry),
f(b.material));break;case "PointCloud":case "Points":g=new Mb(e(b.geometry),f(b.material));break;case "Sprite":g=new Dc(f(b.material));break;case "Group":g=new Fc;break;case "SkinnedMesh":void 0;default:g=new x}g.uuid=b.uuid;void 0!==b.name&&(g.name=b.name);void 0!==b.matrix?(a.fromArray(b.matrix),a.decompose(g.position,g.quaternion,g.scale)):(void 0!==b.position&&g.position.fromArray(b.position),
void 0!==b.rotation&&g.rotation.fromArray(b.rotation),void 0!==b.quaternion&&g.quaternion.fromArray(b.quaternion),void 0!==b.scale&&g.scale.fromArray(b.scale));void 0!==b.castShadow&&(g.castShadow=b.castShadow);void 0!==b.receiveShadow&&(g.receiveShadow=b.receiveShadow);b.shadow&&(void 0!==b.shadow.bias&&(g.shadow.bias=b.shadow.bias),void 0!==b.shadow.radius&&(g.shadow.radius=b.shadow.radius),void 0!==b.shadow.mapSize&&g.shadow.mapSize.fromArray(b.shadow.mapSize),void 0!==b.shadow.camera&&(g.shadow.camera=
this.parseObject(b.shadow.camera)));void 0!==b.visible&&(g.visible=b.visible);void 0!==b.userData&&(g.userData=b.userData);if(void 0!==b.children)for(var m in b.children)g.add(this.parseObject(b.children[m],c,d));if("LOD"===b.type)for(b=b.levels,h=0;h<b.length;h++){var k=b[h];m=g.getObjectByProperty("uuid",k.object);void 0!==m&&g.addLevel(m,k.distance)}return g}}()});ua.prototype={constructor:ua,getPoint:function(a){void 0;return null},getPointAt:function(a){a=
this.getUtoTmapping(a);return this.getPoint(a)},getPoints:function(a){isNaN(a)&&(a=5);for(var b=[],c=0;c<=a;c++)b.push(this.getPoint(c/a));return b},getSpacedPoints:function(a){isNaN(a)&&(a=5);for(var b=[],c=0;c<=a;c++)b.push(this.getPointAt(c/a));return b},getLength:function(){var a=this.getLengths();return a[a.length-1]},getLengths:function(a){isNaN(a)&&(a=this.__arcLengthDivisions?this.__arcLengthDivisions:200);if(this.cacheArcLengths&&this.cacheArcLengths.length===a+1&&!this.needsUpdate)return this.cacheArcLengths;
this.needsUpdate=!1;var b=[],c,d=this.getPoint(0),e,f=0;b.push(0);for(e=1;e<=a;e++)c=this.getPoint(e/a),f+=c.distanceTo(d),b.push(f),d=c;return this.cacheArcLengths=b},updateArcLengths:function(){this.needsUpdate=!0;this.getLengths()},getUtoTmapping:function(a,b){var c=this.getLengths(),d,e=c.length,f;f=b?b:a*c[e-1];for(var g=0,h=e-1,m;g<=h;)if(d=Math.floor(g+(h-g)/2),m=c[d]-f,0>m)g=d+1;else if(0<m)h=d-1;else{h=d;break}d=h;if(c[d]===f)return d/(e-1);g=c[d];return(d+(f-g)/(c[d+1]-g))/(e-1)},getTangent:function(a){var b=
a-1E-4;a+=1E-4;0>b&&(b=0);1<a&&(a=1);b=this.getPoint(b);return this.getPoint(a).clone().sub(b).normalize()},getTangentAt:function(a){a=this.getUtoTmapping(a);return this.getTangent(a)},computeFrenetFrames:function(a,b){var c=new q,d=[],e=[],f=[],g=new q,h=new S,m,k;for(m=0;m<=a;m++)k=m/a,d[m]=this.getTangentAt(k),d[m].normalize();e[0]=new q;f[0]=new q;m=Number.MAX_VALUE;k=Math.abs(d[0].x);var l=Math.abs(d[0].y),p=Math.abs(d[0].z);k<=m&&(m=k,c.set(1,0,0));l<=m&&(m=l,c.set(0,1,0));p<=m&&c.set(0,0,1);
g.crossVectors(d[0],c).normalize();e[0].crossVectors(d[0],g);f[0].crossVectors(d[0],e[0]);for(m=1;m<=a;m++)e[m]=e[m-1].clone(),f[m]=f[m-1].clone(),g.crossVectors(d[m-1],d[m]),g.length()>Number.EPSILON&&(g.normalize(),c=Math.acos(N.clamp(d[m-1].dot(d[m]),-1,1)),e[m].applyMatrix4(h.makeRotationAxis(g,c))),f[m].crossVectors(d[m],e[m]);if(!0===b)for(c=Math.acos(N.clamp(e[0].dot(e[a]),-1,1)),c/=a,0<d[0].dot(g.crossVectors(e[0],e[a]))&&(c=-c),m=1;m<=a;m++)e[m].applyMatrix4(h.makeRotationAxis(d[m],c*m)),
f[m].crossVectors(d[m],e[m]);return{tangents:d,normals:e,binormals:f}}};Ta.prototype=Object.create(ua.prototype);Ta.prototype.constructor=Ta;Ta.prototype.isLineCurve=!0;Ta.prototype.getPoint=function(a){if(1===a)return this.v2.clone();var b=this.v2.clone().sub(this.v1);b.multiplyScalar(a).add(this.v1);return b};Ta.prototype.getPointAt=function(a){return this.getPoint(a)};Ta.prototype.getTangent=function(a){return this.v2.clone().sub(this.v1).normalize()};ad.prototype=Object.assign(Object.create(ua.prototype),
{constructor:ad,add:function(a){this.curves.push(a)},closePath:function(){var a=this.curves[0].getPoint(0),b=this.curves[this.curves.length-1].getPoint(1);a.equals(b)||this.curves.push(new Ta(b,a))},getPoint:function(a){var b=a*this.getLength(),c=this.getCurveLengths();for(a=0;a<c.length;){if(c[a]>=b)return b=c[a]-b,a=this.curves[a],c=a.getLength(),a.getPointAt(0===c?0:1-b/c);a++}return null},getLength:function(){var a=this.getCurveLengths();return a[a.length-1]},updateArcLengths:function(){this.needsUpdate=
!0;this.cacheLengths=null;this.getLengths()},getCurveLengths:function(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;for(var a=[],b=0,c=0,d=this.curves.length;c<d;c++)b+=this.curves[c].getLength(),a.push(b);return this.cacheLengths=a},getSpacedPoints:function(a){isNaN(a)&&(a=40);for(var b=[],c=0;c<=a;c++)b.push(this.getPoint(c/a));this.autoClose&&b.push(b[0]);return b},getPoints:function(a){a=a||12;for(var b=[],c,d=0,e=this.curves;d<e.length;d++)for(var f=
e[d],f=f.getPoints(f&&f.isEllipseCurve?2*a:f&&f.isLineCurve?1:f&&f.isSplineCurve?a*f.points.length:a),g=0;g<f.length;g++){var h=f[g];c&&c.equals(h)||(b.push(h),c=h)}this.autoClose&&1<b.length&&!b[b.length-1].equals(b[0])&&b.push(b[0]);return b},createPointsGeometry:function(a){a=this.getPoints(a);return this.createGeometry(a)},createSpacedPointsGeometry:function(a){a=this.getSpacedPoints(a);return this.createGeometry(a)},createGeometry:function(a){for(var b=new T,c=0,d=a.length;c<d;c++){var e=a[c];
b.vertices.push(new q(e.x,e.y,e.z||0))}return b}});Wa.prototype=Object.create(ua.prototype);Wa.prototype.constructor=Wa;Wa.prototype.isEllipseCurve=!0;Wa.prototype.getPoint=function(a){for(var b=2*Math.PI,c=this.aEndAngle-this.aStartAngle,d=Math.abs(c)<Number.EPSILON;0>c;)c+=b;for(;c>b;)c-=b;c<Number.EPSILON&&(c=d?0:b);!0!==this.aClockwise||d||(c=c===b?-b:c-b);b=this.aStartAngle+a*c;a=this.aX+this.xRadius*Math.cos(b);var e=this.aY+this.yRadius*Math.sin(b);0!==this.aRotation&&(b=Math.cos(this.aRotation),
c=Math.sin(this.aRotation),d=a-this.aX,e-=this.aY,a=d*b-e*c+this.aX,e=d*c+e*b+this.aY);return new D(a,e)};Cb.prototype=Object.create(ua.prototype);Cb.prototype.constructor=Cb;Cb.prototype.isSplineCurve=!0;Cb.prototype.getPoint=function(a){var b=this.points,c=(b.length-1)*a;a=Math.floor(c);var c=c-a,d=b[0===a?a:a-1],e=b[a],f=b[a>b.length-2?b.length-1:a+1],b=b[a>b.length-3?b.length-1:a+2];return new D(Te(c,d.x,e.x,f.x,b.x),Te(c,d.y,e.y,f.y,b.y))};fc.prototype=Object.create(ua.prototype);fc.prototype.constructor=
fc;fc.prototype.getPoint=function(a){var b=this.v0,c=this.v1,d=this.v2,e=this.v3;return new D(Bb(a,b.x,c.x,d.x,e.x),Bb(a,b.y,c.y,d.y,e.y))};gc.prototype=Object.create(ua.prototype);gc.prototype.constructor=gc;gc.prototype.getPoint=function(a){var b=this.v0,c=this.v1,d=this.v2;return new D(Ab(a,b.x,c.x,d.x),Ab(a,b.y,c.y,d.y))};var xe=Object.assign(Object.create(ad.prototype),{fromPoints:function(a){this.moveTo(a[0].x,a[0].y);for(var b=1,c=a.length;b<c;b++)this.lineTo(a[b].x,a[b].y)},moveTo:function(a,
b){this.currentPoint.set(a,b)},lineTo:function(a,b){var c=new Ta(this.currentPoint.clone(),new D(a,b));this.curves.push(c);this.currentPoint.set(a,b)},quadraticCurveTo:function(a,b,c,d){a=new gc(this.currentPoint.clone(),new D(a,b),new D(c,d));this.curves.push(a);this.currentPoint.set(c,d)},bezierCurveTo:function(a,b,c,d,e,f){a=new fc(this.currentPoint.clone(),new D(a,b),new D(c,d),new D(e,f));this.curves.push(a);this.currentPoint.set(e,f)},splineThru:function(a){var b=[this.currentPoint.clone()].concat(a),
b=new Cb(b);this.curves.push(b);this.currentPoint.copy(a[a.length-1])},arc:function(a,b,c,d,e,f){this.absarc(a+this.currentPoint.x,b+this.currentPoint.y,c,d,e,f)},absarc:function(a,b,c,d,e,f){this.absellipse(a,b,c,c,d,e,f)},ellipse:function(a,b,c,d,e,f,g,h){this.absellipse(a+this.currentPoint.x,b+this.currentPoint.y,c,d,e,f,g,h)},absellipse:function(a,b,c,d,e,f,g,h){a=new Wa(a,b,c,d,e,f,g,h);0<this.curves.length&&(b=a.getPoint(0),b.equals(this.currentPoint)||this.lineTo(b.x,b.y));this.curves.push(a);
a=a.getPoint(1);this.currentPoint.copy(a)}});bd.prototype=xe;xe.constructor=bd;Db.prototype=Object.assign(Object.create(xe),{constructor:Db,getPointsHoles:function(a){for(var b=[],c=0,d=this.holes.length;c<d;c++)b[c]=this.holes[c].getPoints(a);return b},extractAllPoints:function(a){return{shape:this.getPoints(a),holes:this.getPointsHoles(a)}},extractPoints:function(a){return this.extractAllPoints(a)}});ee.prototype={moveTo:function(a,b){this.currentPath=new bd;this.subPaths.push(this.currentPath);
this.currentPath.moveTo(a,b)},lineTo:function(a,b){this.currentPath.lineTo(a,b)},quadraticCurveTo:function(a,b,c,d){this.currentPath.quadraticCurveTo(a,b,c,d)},bezierCurveTo:function(a,b,c,d,e,f){this.currentPath.bezierCurveTo(a,b,c,d,e,f)},splineThru:function(a){this.currentPath.splineThru(a)},toShapes:function(a,b){function c(a){for(var b=[],c=0,d=a.length;c<d;c++){var e=a[c],f=new Db;f.curves=e.curves;b.push(f)}return b}function d(a,b){for(var c=b.length,d=!1,e=c-1,f=0;f<c;e=f++){var g=b[e],h=
b[f],k=h.x-g.x,m=h.y-g.y;if(Math.abs(m)>Number.EPSILON){if(0>m&&(g=b[f],k=-k,h=b[e],m=-m),!(a.y<g.y||a.y>h.y))if(a.y===g.y){if(a.x===g.x)return!0}else{e=m*(a.x-g.x)-k*(a.y-g.y);if(0===e)return!0;0>e||(d=!d)}}else if(a.y===g.y&&(h.x<=a.x&&a.x<=g.x||g.x<=a.x&&a.x<=h.x))return!0}return d}var e=Ia.isClockWise,f=this.subPaths;if(0===f.length)return[];if(!0===b)return c(f);var g,h,m,k=[];if(1===f.length)return h=f[0],m=new Db,m.curves=h.curves,k.push(m),k;var l=!e(f[0].getPoints()),l=a?!l:l;m=[];var p=
[],n=[],q=0,x;p[q]=void 0;n[q]=[];for(var r=0,A=f.length;r<A;r++)h=f[r],x=h.getPoints(),g=e(x),(g=a?!g:g)?(!l&&p[q]&&q++,p[q]={s:new Db,p:x},p[q].s.curves=h.curves,l&&q++,n[q]=[]):n[q].push({h:h,p:x[0]});if(!p[0])return c(f);if(1<p.length){r=!1;h=[];e=0;for(f=p.length;e<f;e++)m[e]=[];e=0;for(f=p.length;e<f;e++)for(g=n[e],l=0;l<g.length;l++){q=g[l];x=!0;for(A=0;A<p.length;A++)d(q.p,p[A].p)&&(e!==A&&h.push({froms:e,tos:A,hole:l}),x?(x=!1,m[A].push(q)):r=!0);x&&m[e].push(q)}0<h.length&&(r||(n=m))}r=
0;for(e=p.length;r<e;r++)for(m=p[r].s,k.push(m),h=n[r],f=0,g=h.length;f<g;f++)m.holes.push(h[f].h);return k}};Object.assign(fe.prototype,{isFont:!0,generateShapes:function(a,b,c){void 0===b&&(b=100);void 0===c&&(c=4);var d=this.data;a=String(a).split("");var e=b/d.resolution,f=(d.boundingBox.yMax-d.boundingBox.yMin+d.underlineThickness)*e,g=0,h=0;b=[];for(var m=0;m<a.length;m++){var k=a[m];if("\n"===k)g=0,h-=f;else{var l;l=e;var p=g,n=h;if(k=d.glyphs[k]||d.glyphs["?"]){var q=new ee,x=[],r,A,w,y,z,
v,D,I;if(k.o)for(var C=k._cachedOutline||(k._cachedOutline=k.o.split(" ")),F=0,J=C.length;F<J;)switch(C[F++]){case "m":r=C[F++]*l+p;A=C[F++]*l+n;q.moveTo(r,A);break;case "l":r=C[F++]*l+p;A=C[F++]*l+n;q.lineTo(r,A);break;case "q":r=C[F++]*l+p;A=C[F++]*l+n;z=C[F++]*l+p;v=C[F++]*l+n;q.quadraticCurveTo(z,v,r,A);if(y=x[x.length-1]){w=y.x;y=y.y;for(var H=1;H<=c;H++){var N=H/c;Ab(N,w,z,r);Ab(N,y,v,A)}}break;case "b":if(r=C[F++]*l+p,A=C[F++]*l+n,z=C[F++]*l+p,v=C[F++]*l+n,D=C[F++]*l+p,I=C[F++]*l+n,q.bezierCurveTo(z,
v,D,I,r,A),y=x[x.length-1])for(w=y.x,y=y.y,H=1;H<=c;H++)N=H/c,Bb(N,w,z,D,r),Bb(N,y,v,I,A)}l={offsetX:k.ha*l,path:q}}else l=void 0;g+=l.offsetX;b.push(l.path)}}c=[];d=0;for(a=b.length;d<a;d++)Array.prototype.push.apply(c,b[d].toShapes());return c}});Object.assign(Ue.prototype,{load:function(a,b,c,d){var e=this;(new sa(this.manager)).load(a,function(a){var c;try{c=JSON.parse(a)}catch(d){void 0,c=JSON.parse(a.substring(65,
a.length-2))}a=e.parse(c);b&&b(a)},c,d)},parse:function(a){return new fe(a)}});var Pd,je={getContext:function(){void 0===Pd&&(Pd=new (window.AudioContext||window.webkitAudioContext));return Pd},setContext:function(a){Pd=a}};Object.assign(ge.prototype,{load:function(a,b,c,d){var e=new sa(this.manager);e.setResponseType("arraybuffer");e.load(a,function(a){je.getContext().decodeAudioData(a,function(a){b(a)})},c,d)}});he.prototype=Object.assign(Object.create(ma.prototype),{constructor:he,isRectAreaLight:!0,
copy:function(a){ma.prototype.copy.call(this,a);this.width=a.width;this.height=a.height;return this}});Object.assign(Ve.prototype,{update:function(){var a,b,c,d,e,f,g,h=new S,m=new S;return function(k){if(a!==this||b!==k.focus||c!==k.fov||d!==k.aspect*this.aspect||e!==k.near||f!==k.far||g!==k.zoom){a=this;b=k.focus;c=k.fov;d=k.aspect*this.aspect;e=k.near;f=k.far;g=k.zoom;var l=k.projectionMatrix.clone(),p=this.eyeSep/2,n=p*e/b,q=e*Math.tan(N.DEG2RAD*c*.5)/g,x;m.elements[12]=-p;h.elements[12]=p;p=
-q*d+n;x=q*d+n;l.elements[0]=2*e/(x-p);l.elements[8]=(x+p)/(x-p);this.cameraL.projectionMatrix.copy(l);p=-q*d-n;x=q*d-n;l.elements[0]=2*e/(x-p);l.elements[8]=(x+p)/(x-p);this.cameraR.projectionMatrix.copy(l)}this.cameraL.matrixWorld.copy(k.matrixWorld).multiply(m);this.cameraR.matrixWorld.copy(k.matrixWorld).multiply(h)}}()});Id.prototype=Object.create(x.prototype);Id.prototype.constructor=Id;ie.prototype=Object.assign(Object.create(x.prototype),{constructor:ie,getInput:function(){return this.gain},
removeFilter:function(){null!==this.filter&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null)},getFilter:function(){return this.filter},setFilter:function(a){null!==this.filter?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination);this.filter=a;this.gain.connect(this.filter);this.filter.connect(this.context.destination)},getMasterVolume:function(){return this.gain.gain.value},
setMasterVolume:function(a){this.gain.gain.value=a},updateMatrixWorld:function(){var a=new q,b=new ca,c=new q,d=new q;return function(e){x.prototype.updateMatrixWorld.call(this,e);e=this.context.listener;var f=this.up;this.matrixWorld.decompose(a,b,c);d.set(0,0,-1).applyQuaternion(b);e.positionX?(e.positionX.setValueAtTime(a.x,this.context.currentTime),e.positionY.setValueAtTime(a.y,this.context.currentTime),e.positionZ.setValueAtTime(a.z,this.context.currentTime),e.forwardX.setValueAtTime(d.x,this.context.currentTime),
e.forwardY.setValueAtTime(d.y,this.context.currentTime),e.forwardZ.setValueAtTime(d.z,this.context.currentTime),e.upX.setValueAtTime(f.x,this.context.currentTime),e.upY.setValueAtTime(f.y,this.context.currentTime),e.upZ.setValueAtTime(f.z,this.context.currentTime)):(e.setPosition(a.x,a.y,a.z),e.setOrientation(d.x,d.y,d.z,f.x,f.y,f.z))}}()});hc.prototype=Object.assign(Object.create(x.prototype),{constructor:hc,getOutput:function(){return this.gain},setNodeSource:function(a){this.hasPlaybackControl=
!1;this.sourceType="audioNode";this.source=a;this.connect();return this},setBuffer:function(a){this.buffer=a;this.sourceType="buffer";this.autoplay&&this.play();return this},play:function(){if(!0===this.isPlaying)void 0;else if(!1===this.hasPlaybackControl)void 0;else{var a=this.context.createBufferSource();a.buffer=this.buffer;a.loop=this.loop;a.onended=this.onEnded.bind(this);a.playbackRate.setValueAtTime(this.playbackRate,
this.startTime);a.start(0,this.startTime);this.isPlaying=!0;this.source=a;return this.connect()}},pause:function(){if(!1===this.hasPlaybackControl)void 0;else return this.source.stop(),this.startTime=this.context.currentTime,this.isPlaying=!1,this},stop:function(){if(!1===this.hasPlaybackControl)void 0;else return this.source.stop(),this.startTime=0,this.isPlaying=!1,this},connect:function(){if(0<
this.filters.length){this.source.connect(this.filters[0]);for(var a=1,b=this.filters.length;a<b;a++)this.filters[a-1].connect(this.filters[a]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this},disconnect:function(){if(0<this.filters.length){this.source.disconnect(this.filters[0]);for(var a=1,b=this.filters.length;a<b;a++)this.filters[a-1].disconnect(this.filters[a]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());
return this},getFilters:function(){return this.filters},setFilters:function(a){a||(a=[]);!0===this.isPlaying?(this.disconnect(),this.filters=a,this.connect()):this.filters=a;return this},getFilter:function(){return this.getFilters()[0]},setFilter:function(a){return this.setFilters(a?[a]:[])},setPlaybackRate:function(a){if(!1===this.hasPlaybackControl)void 0;else return this.playbackRate=a,!0===this.isPlaying&&this.source.playbackRate.setValueAtTime(this.playbackRate,
this.context.currentTime),this},getPlaybackRate:function(){return this.playbackRate},onEnded:function(){this.isPlaying=!1},getLoop:function(){return!1===this.hasPlaybackControl?(void 0,!1):this.loop},setLoop:function(a){if(!1===this.hasPlaybackControl)void 0;else return this.loop=a,!0===this.isPlaying&&(this.source.loop=this.loop),this},getVolume:function(){return this.gain.gain.value},
setVolume:function(a){this.gain.gain.value=a;return this}});ke.prototype=Object.assign(Object.create(hc.prototype),{constructor:ke,getOutput:function(){return this.panner},getRefDistance:function(){return this.panner.refDistance},setRefDistance:function(a){this.panner.refDistance=a},getRolloffFactor:function(){return this.panner.rolloffFactor},setRolloffFactor:function(a){this.panner.rolloffFactor=a},getDistanceModel:function(){return this.panner.distanceModel},setDistanceModel:function(a){this.panner.distanceModel=
a},getMaxDistance:function(){return this.panner.maxDistance},setMaxDistance:function(a){this.panner.maxDistance=a},updateMatrixWorld:function(){var a=new q;return function(b){x.prototype.updateMatrixWorld.call(this,b);a.setFromMatrixPosition(this.matrixWorld);this.panner.setPosition(a.x,a.y,a.z)}}()});Object.assign(le.prototype,{getFrequencyData:function(){this.analyser.getByteFrequencyData(this.data);return this.data},getAverageFrequency:function(){for(var a=0,b=this.getFrequencyData(),c=0;c<b.length;c++)a+=
b[c];return a/b.length}});Jd.prototype={constructor:Jd,accumulate:function(a,b){var c=this.buffer,d=this.valueSize,e=a*d+d,f=this.cumulativeWeight;if(0===f){for(f=0;f!==d;++f)c[e+f]=c[f];f=b}else f+=b,this._mixBufferRegion(c,e,0,b/f,d);this.cumulativeWeight=f},apply:function(a){var b=this.valueSize,c=this.buffer;a=a*b+b;var d=this.cumulativeWeight,e=this.binding;this.cumulativeWeight=0;1>d&&this._mixBufferRegion(c,a,3*b,1-d,b);for(var d=b,f=b+b;d!==f;++d)if(c[d]!==c[d+b]){e.setValue(c,a);break}},
saveOriginalState:function(){var a=this.buffer,b=this.valueSize,c=3*b;this.binding.getValue(a,c);for(var d=b;d!==c;++d)a[d]=a[c+d%b];this.cumulativeWeight=0},restoreOriginalState:function(){this.binding.setValue(this.buffer,3*this.valueSize)},_select:function(a,b,c,d,e){if(.5<=d)for(d=0;d!==e;++d)a[b+d]=a[c+d]},_slerp:function(a,b,c,d,e){ca.slerpFlat(a,b,a,b,a,c,d)},_lerp:function(a,b,c,d,e){for(var f=1-d,g=0;g!==e;++g){var h=b+g;a[h]=a[h]*f+a[c+g]*d}}};ka.prototype={constructor:ka,getValue:function(a,
b){this.bind();this.getValue(a,b)},setValue:function(a,b){this.bind();this.setValue(a,b)},bind:function(){var a=this.node,b=this.parsedPath,c=b.objectName,d=b.propertyName,e=b.propertyIndex;a||(this.node=a=ka.findNode(this.rootNode,b.nodeName)||this.rootNode);this.getValue=this._getValue_unavailable;this.setValue=this._setValue_unavailable;if(a){if(c){var f=b.objectIndex;switch(c){case "materials":if(!a.material){void 0;return}if(!a.material.materials){void 0;return}a=a.material.materials;break;case "bones":if(!a.skeleton){void 0;return}a=a.skeleton.bones;for(c=0;c<a.length;c++)if(a[c].name===f){f=c;break}break;default:if(void 0===a[c]){void 0;return}a=a[c]}if(void 0!==f){if(void 0===a[f]){void 0;return}a=a[f]}}f=a[d];if(void 0===f)void 0;else{b=this.Versioning.None;void 0!==a.needsUpdate?(b=this.Versioning.NeedsUpdate,this.targetObject=a):void 0!==a.matrixWorldNeedsUpdate&&(b=this.Versioning.MatrixWorldNeedsUpdate,this.targetObject=a);c=this.BindingType.Direct;if(void 0!==e){if("morphTargetInfluences"===d){if(!a.geometry){void 0;return}if(!a.geometry.morphTargets){void 0;return}for(c=0;c<this.node.geometry.morphTargets.length;c++)if(a.geometry.morphTargets[c].name===e){e=c;break}}c=this.BindingType.ArrayElement;this.resolvedProperty=f;this.propertyIndex=e}else void 0!==f.fromArray&&void 0!==f.toArray?(c=this.BindingType.HasFromToArray,this.resolvedProperty=f):void 0!==f.length?(c=this.BindingType.EntireArray,this.resolvedProperty=f):this.propertyName=d;this.getValue=this.GetterByBindingType[c];this.setValue=this.SetterByBindingTypeAndVersioning[c][b]}}else void 0},unbind:function(){this.node=null;this.getValue=this._getValue_unbound;this.setValue=this._setValue_unbound}};Object.assign(ka.prototype,{_getValue_unavailable:function(){},_setValue_unavailable:function(){},_getValue_unbound:ka.prototype.getValue,_setValue_unbound:ka.prototype.setValue,BindingType:{Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Versioning:{None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},GetterByBindingType:[function(a,b){a[b]=this.node[this.propertyName]},
function(a,b){for(var c=this.resolvedProperty,d=0,e=c.length;d!==e;++d)a[b++]=c[d]},function(a,b){a[b]=this.resolvedProperty[this.propertyIndex]},function(a,b){this.resolvedProperty.toArray(a,b)}],SetterByBindingTypeAndVersioning:[[function(a,b){this.node[this.propertyName]=a[b]},function(a,b){this.node[this.propertyName]=a[b];this.targetObject.needsUpdate=!0},function(a,b){this.node[this.propertyName]=a[b];this.targetObject.matrixWorldNeedsUpdate=!0}],[function(a,b){for(var c=this.resolvedProperty,
d=0,e=c.length;d!==e;++d)c[d]=a[b++]},function(a,b){for(var c=this.resolvedProperty,d=0,e=c.length;d!==e;++d)c[d]=a[b++];this.targetObject.needsUpdate=!0},function(a,b){for(var c=this.resolvedProperty,d=0,e=c.length;d!==e;++d)c[d]=a[b++];this.targetObject.matrixWorldNeedsUpdate=!0}],[function(a,b){this.resolvedProperty[this.propertyIndex]=a[b]},function(a,b){this.resolvedProperty[this.propertyIndex]=a[b];this.targetObject.needsUpdate=!0},function(a,b){this.resolvedProperty[this.propertyIndex]=a[b];
this.targetObject.matrixWorldNeedsUpdate=!0}],[function(a,b){this.resolvedProperty.fromArray(a,b)},function(a,b){this.resolvedProperty.fromArray(a,b);this.targetObject.needsUpdate=!0},function(a,b){this.resolvedProperty.fromArray(a,b);this.targetObject.matrixWorldNeedsUpdate=!0}]]});ka.Composite=function(a,b,c){c=c||ka.parseTrackName(b);this._targetGroup=a;this._bindings=a.subscribe_(b,c)};ka.Composite.prototype={constructor:ka.Composite,getValue:function(a,b){this.bind();var c=this._bindings[this._targetGroup.nCachedObjects_];
void 0!==c&&c.getValue(a,b)},setValue:function(a,b){for(var c=this._bindings,d=this._targetGroup.nCachedObjects_,e=c.length;d!==e;++d)c[d].setValue(a,b)},bind:function(){for(var a=this._bindings,b=this._targetGroup.nCachedObjects_,c=a.length;b!==c;++b)a[b].bind()},unbind:function(){for(var a=this._bindings,b=this._targetGroup.nCachedObjects_,c=a.length;b!==c;++b)a[b].unbind()}};ka.create=function(a,b,c){return a&&a.isAnimationObjectGroup?new ka.Composite(a,b,c):new ka(a,b,c)};ka.parseTrackName=function(a){var b=
/^((?:[\w-]+[\/:])*)([\w-]+)?(?:\.([\w-]+)(?:\[(.+)\])?)?\.([\w-]+)(?:\[(.+)\])?$/.exec(a);if(!b)throw Error("cannot parse trackName at all: "+a);b={nodeName:b[2],objectName:b[3],objectIndex:b[4],propertyName:b[5],propertyIndex:b[6]};if(null===b.propertyName||0===b.propertyName.length)throw Error("can not parse propertyName from trackName: "+a);return b};ka.findNode=function(a,b){if(!b||""===b||"root"===b||"."===b||-1===b||b===a.name||b===a.uuid)return a;if(a.skeleton){var c=function(a){for(var c=
0;c<a.bones.length;c++){var d=a.bones[c];if(d.name===b)return d}return null}(a.skeleton);if(c)return c}if(a.children){var d=function(a){for(var c=0;c<a.length;c++){var g=a[c];if(g.name===b||g.uuid===b||(g=d(g.children)))return g}return null};if(c=d(a.children))return c}return null};me.prototype={constructor:me,isAnimationObjectGroup:!0,add:function(a){for(var b=this._objects,c=b.length,d=this.nCachedObjects_,e=this._indicesByUUID,f=this._paths,g=this._parsedPaths,h=this._bindings,m=h.length,k=0,l=
arguments.length;k!==l;++k){var p=arguments[k],n=p.uuid,q=e[n];if(void 0===q){q=c++;e[n]=q;b.push(p);for(var n=0,x=m;n!==x;++n)h[n].push(new ka(p,f[n],g[n]))}else if(q<d){var r=--d,x=b[r];e[x.uuid]=q;b[q]=x;e[n]=r;b[r]=p;n=0;for(x=m;n!==x;++n){var z=h[n],w=z[q];z[q]=z[r];void 0===w&&(w=new ka(p,f[n],g[n]));z[r]=w}}else void 0!==b[q]&&void 0}this.nCachedObjects_=d},remove:function(a){for(var b=
this._objects,c=this.nCachedObjects_,d=this._indicesByUUID,e=this._bindings,f=e.length,g=0,h=arguments.length;g!==h;++g){var m=arguments[g],k=m.uuid,l=d[k];if(void 0!==l&&l>=c){var p=c++,n=b[p];d[n.uuid]=l;b[l]=n;d[k]=p;b[p]=m;m=0;for(k=f;m!==k;++m){var n=e[m],q=n[l];n[l]=n[p];n[p]=q}}}this.nCachedObjects_=c},uncache:function(a){for(var b=this._objects,c=b.length,d=this.nCachedObjects_,e=this._indicesByUUID,f=this._bindings,g=f.length,h=0,m=arguments.length;h!==m;++h){var k=arguments[h].uuid,l=e[k];
if(void 0!==l)if(delete e[k],l<d){var k=--d,p=b[k],n=--c,q=b[n];e[p.uuid]=l;b[l]=p;e[q.uuid]=k;b[k]=q;b.pop();p=0;for(q=g;p!==q;++p){var x=f[p],r=x[n];x[l]=x[k];x[k]=r;x.pop()}}else for(n=--c,q=b[n],e[q.uuid]=l,b[l]=q,b.pop(),p=0,q=g;p!==q;++p)x=f[p],x[l]=x[n],x.pop()}this.nCachedObjects_=d},subscribe_:function(a,b){var c=this._bindingsIndicesByPath,d=c[a],e=this._bindings;if(void 0!==d)return e[d];var f=this._paths,g=this._parsedPaths,h=this._objects,l=this.nCachedObjects_,k=Array(h.length),d=e.length;
c[a]=d;f.push(a);g.push(b);e.push(k);c=l;for(d=h.length;c!==d;++c)k[c]=new ka(h[c],a,b);return k},unsubscribe_:function(a){var b=this._bindingsIndicesByPath,c=b[a];if(void 0!==c){var d=this._paths,e=this._parsedPaths,f=this._bindings,g=f.length-1,h=f[g];b[a[g]]=c;f[c]=h;f.pop();e[c]=e[g];e.pop();d[c]=d[g];d.pop()}}};ne.prototype={constructor:ne,play:function(){this._mixer._activateAction(this);return this},stop:function(){this._mixer._deactivateAction(this);return this.reset()},reset:function(){this.paused=
!1;this.enabled=!0;this.time=0;this._loopCount=-1;this._startTime=null;return this.stopFading().stopWarping()},isRunning:function(){return this.enabled&&!this.paused&&0!==this.timeScale&&null===this._startTime&&this._mixer._isActiveAction(this)},isScheduled:function(){return this._mixer._isActiveAction(this)},startAt:function(a){this._startTime=a;return this},setLoop:function(a,b){this.loop=a;this.repetitions=b;return this},setEffectiveWeight:function(a){this.weight=a;this._effectiveWeight=this.enabled?
a:0;return this.stopFading()},getEffectiveWeight:function(){return this._effectiveWeight},fadeIn:function(a){return this._scheduleFading(a,0,1)},fadeOut:function(a){return this._scheduleFading(a,1,0)},crossFadeFrom:function(a,b,c){a.fadeOut(b);this.fadeIn(b);if(c){c=this._clip.duration;var d=a._clip.duration,e=c/d;a.warp(1,d/c,b);this.warp(e,1,b)}return this},crossFadeTo:function(a,b,c){return a.crossFadeFrom(this,b,c)},stopFading:function(){var a=this._weightInterpolant;null!==a&&(this._weightInterpolant=
null,this._mixer._takeBackControlInterpolant(a));return this},setEffectiveTimeScale:function(a){this.timeScale=a;this._effectiveTimeScale=this.paused?0:a;return this.stopWarping()},getEffectiveTimeScale:function(){return this._effectiveTimeScale},setDuration:function(a){this.timeScale=this._clip.duration/a;return this.stopWarping()},syncWith:function(a){this.time=a.time;this.timeScale=a.timeScale;return this.stopWarping()},halt:function(a){return this.warp(this._effectiveTimeScale,0,a)},warp:function(a,
b,c){var d=this._mixer,e=d.time,f=this._timeScaleInterpolant,g=this.timeScale;null===f&&(this._timeScaleInterpolant=f=d._lendControlInterpolant());d=f.parameterPositions;f=f.sampleValues;d[0]=e;d[1]=e+c;f[0]=a/g;f[1]=b/g;return this},stopWarping:function(){var a=this._timeScaleInterpolant;null!==a&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(a));return this},getMixer:function(){return this._mixer},getClip:function(){return this._clip},getRoot:function(){return this._localRoot||
this._mixer._root},_update:function(a,b,c,d){var e=this._startTime;if(null!==e){b=(a-e)*c;if(0>b||0===c)return;this._startTime=null;b*=c}b*=this._updateTimeScale(a);c=this._updateTime(b);a=this._updateWeight(a);if(0<a){b=this._interpolants;for(var e=this._propertyBindings,f=0,g=b.length;f!==g;++f)b[f].evaluate(c),e[f].accumulate(d,a)}},_updateWeight:function(a){var b=0;if(this.enabled){var b=this.weight,c=this._weightInterpolant;if(null!==c){var d=c.evaluate(a)[0],b=b*d;a>c.parameterPositions[1]&&
(this.stopFading(),0===d&&(this.enabled=!1))}}return this._effectiveWeight=b},_updateTimeScale:function(a){var b=0;if(!this.paused){var b=this.timeScale,c=this._timeScaleInterpolant;if(null!==c){var d=c.evaluate(a)[0],b=b*d;a>c.parameterPositions[1]&&(this.stopWarping(),0===b?this.paused=!0:this.timeScale=b)}}return this._effectiveTimeScale=b},_updateTime:function(a){var b=this.time+a;if(0===a)return b;var c=this._clip.duration,d=this.loop,e=this._loopCount;if(2200===d)a:{if(-1===e&&(this._loopCount=
0,this._setEndings(!0,!0,!1)),b>=c)b=c;else if(0>b)b=0;else break a;this.clampWhenFinished?this.paused=!0:this.enabled=!1;this._mixer.dispatchEvent({type:"finished",action:this,direction:0>a?-1:1})}else{d=2202===d;-1===e&&(0<=a?(e=0,this._setEndings(!0,0===this.repetitions,d)):this._setEndings(0===this.repetitions,!0,d));if(b>=c||0>b){var f=Math.floor(b/c),b=b-c*f,e=e+Math.abs(f),g=this.repetitions-e;0>g?(this.clampWhenFinished?this.paused=!0:this.enabled=!1,b=0<a?c:0,this._mixer.dispatchEvent({type:"finished",
action:this,direction:0<a?1:-1})):(0===g?(a=0>a,this._setEndings(a,!a,d)):this._setEndings(!1,!1,d),this._loopCount=e,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:f}))}if(d&&1===(e&1))return this.time=b,c-b}return this.time=b},_setEndings:function(a,b,c){var d=this._interpolantSettings;c?(d.endingStart=2401,d.endingEnd=2401):(d.endingStart=a?this.zeroSlopeAtStart?2401:2400:2402,d.endingEnd=b?this.zeroSlopeAtEnd?2401:2400:2402)},_scheduleFading:function(a,b,c){var d=this._mixer,e=d.time,
f=this._weightInterpolant;null===f&&(this._weightInterpolant=f=d._lendControlInterpolant());d=f.parameterPositions;f=f.sampleValues;d[0]=e;f[0]=b;d[1]=e+a;f[1]=c;return this}};cd.prototype={constructor:cd,clipAction:function(a,b){var c=b||this._root,d=c.uuid,e="string"===typeof a?qa.findByName(c,a):a,c=null!==e?e.uuid:a,f=this._actionsByClip[c],g=null;if(void 0!==f){g=f.actionByRoot[d];if(void 0!==g)return g;g=f.knownActions[0];null===e&&(e=g._clip)}if(null===e)return null;e=new ne(this,e,b);this._bindAction(e,
g);this._addInactiveAction(e,c,d);return e},existingAction:function(a,b){var c=b||this._root,d=c.uuid,c="string"===typeof a?qa.findByName(c,a):a,c=this._actionsByClip[c?c.uuid:a];return void 0!==c?c.actionByRoot[d]||null:null},stopAllAction:function(){for(var a=this._actions,b=this._nActiveActions,c=this._bindings,d=this._nActiveBindings,e=this._nActiveBindings=this._nActiveActions=0;e!==b;++e)a[e].reset();for(e=0;e!==d;++e)c[e].useCount=0;return this},update:function(a){a*=this.timeScale;for(var b=
this._actions,c=this._nActiveActions,d=this.time+=a,e=Math.sign(a),f=this._accuIndex^=1,g=0;g!==c;++g){var h=b[g];h.enabled&&h._update(d,a,e,f)}a=this._bindings;b=this._nActiveBindings;for(g=0;g!==b;++g)a[g].apply(f);return this},getRoot:function(){return this._root},uncacheClip:function(a){var b=this._actions;a=a.uuid;var c=this._actionsByClip,d=c[a];if(void 0!==d){for(var d=d.knownActions,e=0,f=d.length;e!==f;++e){var g=d[e];this._deactivateAction(g);var h=g._cacheIndex,l=b[b.length-1];g._cacheIndex=
null;g._byClipCacheIndex=null;l._cacheIndex=h;b[h]=l;b.pop();this._removeInactiveBindingsForAction(g)}delete c[a]}},uncacheRoot:function(a){a=a.uuid;var b=this._actionsByClip,c;for(c in b){var d=b[c].actionByRoot[a];void 0!==d&&(this._deactivateAction(d),this._removeInactiveAction(d))}c=this._bindingsByRootAndName[a];if(void 0!==c)for(var e in c)a=c[e],a.restoreOriginalState(),this._removeInactiveBinding(a)},uncacheAction:function(a,b){var c=this.existingAction(a,b);null!==c&&(this._deactivateAction(c),
this._removeInactiveAction(c))}};Object.assign(cd.prototype,{_bindAction:function(a,b){var c=a._localRoot||this._root,d=a._clip.tracks,e=d.length,f=a._propertyBindings,g=a._interpolants,h=c.uuid,l=this._bindingsByRootAndName,k=l[h];void 0===k&&(k={},l[h]=k);for(l=0;l!==e;++l){var q=d[l],p=q.name,n=k[p];if(void 0===n){n=f[l];if(void 0!==n){null===n._cacheIndex&&(++n.referenceCount,this._addInactiveBinding(n,h,p));continue}n=new Jd(ka.create(c,p,b&&b._propertyBindings[l].binding.parsedPath),q.ValueTypeName,
q.getValueSize());++n.referenceCount;this._addInactiveBinding(n,h,p)}f[l]=n;g[l].resultBuffer=n.buffer}},_activateAction:function(a){if(!this._isActiveAction(a)){if(null===a._cacheIndex){var b=(a._localRoot||this._root).uuid,c=a._clip.uuid,d=this._actionsByClip[c];this._bindAction(a,d&&d.knownActions[0]);this._addInactiveAction(a,c,b)}b=a._propertyBindings;c=0;for(d=b.length;c!==d;++c){var e=b[c];0===e.useCount++&&(this._lendBinding(e),e.saveOriginalState())}this._lendAction(a)}},_deactivateAction:function(a){if(this._isActiveAction(a)){for(var b=
a._propertyBindings,c=0,d=b.length;c!==d;++c){var e=b[c];0===--e.useCount&&(e.restoreOriginalState(),this._takeBackBinding(e))}this._takeBackAction(a)}},_initMemoryManager:function(){this._actions=[];this._nActiveActions=0;this._actionsByClip={};this._bindings=[];this._nActiveBindings=0;this._bindingsByRootAndName={};this._controlInterpolants=[];this._nActiveControlInterpolants=0;var a=this;this.stats={actions:{get total(){return a._actions.length},get inUse(){return a._nActiveActions}},bindings:{get total(){return a._bindings.length},
get inUse(){return a._nActiveBindings}},controlInterpolants:{get total(){return a._controlInterpolants.length},get inUse(){return a._nActiveControlInterpolants}}}},_isActiveAction:function(a){a=a._cacheIndex;return null!==a&&a<this._nActiveActions},_addInactiveAction:function(a,b,c){var d=this._actions,e=this._actionsByClip,f=e[b];void 0===f?(f={knownActions:[a],actionByRoot:{}},a._byClipCacheIndex=0,e[b]=f):(b=f.knownActions,a._byClipCacheIndex=b.length,b.push(a));a._cacheIndex=d.length;d.push(a);
f.actionByRoot[c]=a},_removeInactiveAction:function(a){var b=this._actions,c=b[b.length-1],d=a._cacheIndex;c._cacheIndex=d;b[d]=c;b.pop();a._cacheIndex=null;var c=a._clip.uuid,d=this._actionsByClip,e=d[c],f=e.knownActions,g=f[f.length-1],h=a._byClipCacheIndex;g._byClipCacheIndex=h;f[h]=g;f.pop();a._byClipCacheIndex=null;delete e.actionByRoot[(b._localRoot||this._root).uuid];0===f.length&&delete d[c];this._removeInactiveBindingsForAction(a)},_removeInactiveBindingsForAction:function(a){a=a._propertyBindings;
for(var b=0,c=a.length;b!==c;++b){var d=a[b];0===--d.referenceCount&&this._removeInactiveBinding(d)}},_lendAction:function(a){var b=this._actions,c=a._cacheIndex,d=this._nActiveActions++,e=b[d];a._cacheIndex=d;b[d]=a;e._cacheIndex=c;b[c]=e},_takeBackAction:function(a){var b=this._actions,c=a._cacheIndex,d=--this._nActiveActions,e=b[d];a._cacheIndex=d;b[d]=a;e._cacheIndex=c;b[c]=e},_addInactiveBinding:function(a,b,c){var d=this._bindingsByRootAndName,e=d[b],f=this._bindings;void 0===e&&(e={},d[b]=
e);e[c]=a;a._cacheIndex=f.length;f.push(a)},_removeInactiveBinding:function(a){var b=this._bindings,c=a.binding,d=c.rootNode.uuid,c=c.path,e=this._bindingsByRootAndName,f=e[d],g=b[b.length-1];a=a._cacheIndex;g._cacheIndex=a;b[a]=g;b.pop();delete f[c];a:{for(var h in f)break a;delete e[d]}},_lendBinding:function(a){var b=this._bindings,c=a._cacheIndex,d=this._nActiveBindings++,e=b[d];a._cacheIndex=d;b[d]=a;e._cacheIndex=c;b[c]=e},_takeBackBinding:function(a){var b=this._bindings,c=a._cacheIndex,d=
--this._nActiveBindings,e=b[d];a._cacheIndex=d;b[d]=a;e._cacheIndex=c;b[c]=e},_lendControlInterpolant:function(){var a=this._controlInterpolants,b=this._nActiveControlInterpolants++,c=a[b];void 0===c&&(c=new Zc(new Float32Array(2),new Float32Array(2),1,this._controlInterpolantsResultBuffer),c.__cacheIndex=b,a[b]=c);return c},_takeBackControlInterpolant:function(a){var b=this._controlInterpolants,c=a.__cacheIndex,d=--this._nActiveControlInterpolants,e=b[d];a.__cacheIndex=d;b[d]=a;e.__cacheIndex=c;
b[c]=e},_controlInterpolantsResultBuffer:new Float32Array(1)});Object.assign(cd.prototype,pa.prototype);Kd.prototype.clone=function(){return new Kd(void 0===this.value.clone?this.value:this.value.clone())};Eb.prototype=Object.create(I.prototype);Eb.prototype.constructor=Eb;Eb.prototype.isInstancedBufferGeometry=!0;Eb.prototype.addGroup=function(a,b,c){this.groups.push({start:a,count:b,materialIndex:c})};Eb.prototype.copy=function(a){var b=a.index;null!==b&&this.setIndex(b.clone());var b=a.attributes,
c;for(c in b)this.addAttribute(c,b[c].clone());a=a.groups;c=0;for(b=a.length;c<b;c++){var d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}return this};oe.prototype={constructor:oe,isInterleavedBufferAttribute:!0,get count(){return this.data.count},get array(){return this.data.array},setX:function(a,b){this.data.array[a*this.data.stride+this.offset]=b;return this},setY:function(a,b){this.data.array[a*this.data.stride+this.offset+1]=b;return this},setZ:function(a,b){this.data.array[a*this.data.stride+
this.offset+2]=b;return this},setW:function(a,b){this.data.array[a*this.data.stride+this.offset+3]=b;return this},getX:function(a){return this.data.array[a*this.data.stride+this.offset]},getY:function(a){return this.data.array[a*this.data.stride+this.offset+1]},getZ:function(a){return this.data.array[a*this.data.stride+this.offset+2]},getW:function(a){return this.data.array[a*this.data.stride+this.offset+3]},setXY:function(a,b,c){a=a*this.data.stride+this.offset;this.data.array[a+0]=b;this.data.array[a+
1]=c;return this},setXYZ:function(a,b,c,d){a=a*this.data.stride+this.offset;this.data.array[a+0]=b;this.data.array[a+1]=c;this.data.array[a+2]=d;return this},setXYZW:function(a,b,c,d,e){a=a*this.data.stride+this.offset;this.data.array[a+0]=b;this.data.array[a+1]=c;this.data.array[a+2]=d;this.data.array[a+3]=e;return this}};ic.prototype={constructor:ic,isInterleavedBuffer:!0,set needsUpdate(a){!0===a&&this.version++},setArray:function(a){if(Array.isArray(a))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
this.count=void 0!==a?a.length/this.stride:0;this.array=a},setDynamic:function(a){this.dynamic=a;return this},copy:function(a){this.array=new a.array.constructor(a.array);this.count=a.count;this.stride=a.stride;this.dynamic=a.dynamic;return this},copyAt:function(a,b,c){a*=this.stride;c*=b.stride;for(var d=0,e=this.stride;d<e;d++)this.array[a+d]=b.array[c+d];return this},set:function(a,b){void 0===b&&(b=0);this.array.set(a,b);return this},clone:function(){return(new this.constructor).copy(this)},onUpload:function(a){this.onUploadCallback=
a;return this}};jc.prototype=Object.create(ic.prototype);jc.prototype.constructor=jc;jc.prototype.isInstancedInterleavedBuffer=!0;jc.prototype.copy=function(a){ic.prototype.copy.call(this,a);this.meshPerAttribute=a.meshPerAttribute;return this};kc.prototype=Object.create(U.prototype);kc.prototype.constructor=kc;kc.prototype.isInstancedBufferAttribute=!0;kc.prototype.copy=function(a){U.prototype.copy.call(this,a);this.meshPerAttribute=a.meshPerAttribute;return this};pe.prototype={constructor:pe,linePrecision:1,
set:function(a,b){this.ray.set(a,b)},setFromCamera:function(a,b){b&&b.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(b.matrixWorld),this.ray.direction.set(a.x,a.y,.5).unproject(b).sub(this.ray.origin).normalize()):b&&b.isOrthographicCamera?(this.ray.origin.set(a.x,a.y,(b.near+b.far)/(b.near-b.far)).unproject(b),this.ray.direction.set(0,0,-1).transformDirection(b.matrixWorld)):void 0},intersectObject:function(a,b){var c=[];qe(a,this,c,
b);c.sort(We);return c},intersectObjects:function(a,b){var c=[];if(!1===Array.isArray(a))return void 0,c;for(var d=0,e=a.length;d<e;d++)qe(a[d],this,c,b);c.sort(We);return c}};re.prototype={constructor:re,start:function(){this.oldTime=this.startTime=(performance||Date).now();this.elapsedTime=0;this.running=!0},stop:function(){this.getElapsedTime();this.running=!1},getElapsedTime:function(){this.getDelta();return this.elapsedTime},
getDelta:function(){var a=0;this.autoStart&&!this.running&&this.start();if(this.running){var b=(performance||Date).now(),a=(b-this.oldTime)/1E3;this.oldTime=b;this.elapsedTime+=a}return a}};se.prototype={constructor:se,set:function(a,b,c){this.radius=a;this.phi=b;this.theta=c;return this},clone:function(){return(new this.constructor).copy(this)},copy:function(a){this.radius=a.radius;this.phi=a.phi;this.theta=a.theta;return this},makeSafe:function(){this.phi=Math.max(1E-6,Math.min(Math.PI-1E-6,this.phi));
return this},setFromVector3:function(a){this.radius=a.length();0===this.radius?this.phi=this.theta=0:(this.theta=Math.atan2(a.x,a.z),this.phi=Math.acos(N.clamp(a.y/this.radius,-1,1)));return this}};te.prototype={constructor:te,set:function(a,b,c){this.radius=a;this.theta=b;this.y=c;return this},clone:function(){return(new this.constructor).copy(this)},copy:function(a){this.radius=a.radius;this.theta=a.theta;this.y=a.y;return this},setFromVector3:function(a){this.radius=Math.sqrt(a.x*a.x+a.z*a.z);
this.theta=Math.atan2(a.x,a.z);this.y=a.y;return this}};oa.prototype=Object.create(Aa.prototype);oa.prototype.constructor=oa;oa.prototype.createAnimation=function(a,b,c,d){b={start:b,end:c,length:c-b+1,fps:d,duration:(c-b)/d,lastFrame:0,currentFrame:0,active:!1,time:0,direction:1,weight:1,directionBackwards:!1,mirroredLoop:!1};this.animationsMap[a]=b;this.animationsList.push(b)};oa.prototype.autoCreateAnimations=function(a){for(var b=/([a-z]+)_?(\d+)/i,c,d={},e=this.geometry,f=0,g=e.morphTargets.length;f<
g;f++){var h=e.morphTargets[f].name.match(b);if(h&&1<h.length){var l=h[1];d[l]||(d[l]={start:Infinity,end:-Infinity});h=d[l];f<h.start&&(h.start=f);f>h.end&&(h.end=f);c||(c=l)}}for(l in d)h=d[l],this.createAnimation(l,h.start,h.end,a);this.firstAnimation=c};oa.prototype.setAnimationDirectionForward=function(a){if(a=this.animationsMap[a])a.direction=1,a.directionBackwards=!1};oa.prototype.setAnimationDirectionBackward=function(a){if(a=this.animationsMap[a])a.direction=-1,a.directionBackwards=!0};oa.prototype.setAnimationFPS=
function(a,b){var c=this.animationsMap[a];c&&(c.fps=b,c.duration=(c.end-c.start)/c.fps)};oa.prototype.setAnimationDuration=function(a,b){var c=this.animationsMap[a];c&&(c.duration=b,c.fps=(c.end-c.start)/c.duration)};oa.prototype.setAnimationWeight=function(a,b){var c=this.animationsMap[a];c&&(c.weight=b)};oa.prototype.setAnimationTime=function(a,b){var c=this.animationsMap[a];c&&(c.time=b)};oa.prototype.getAnimationTime=function(a){var b=0;if(a=this.animationsMap[a])b=a.time;return b};oa.prototype.getAnimationDuration=
function(a){var b=-1;if(a=this.animationsMap[a])b=a.duration;return b};oa.prototype.playAnimation=function(a){var b=this.animationsMap[a];b?(b.time=0,b.active=!0):void 0};oa.prototype.stopAnimation=function(a){if(a=this.animationsMap[a])a.active=!1};oa.prototype.update=function(a){for(var b=0,c=this.animationsList.length;b<c;b++){var d=this.animationsList[b];if(d.active){var e=d.duration/d.length;d.time+=d.direction*a;if(d.mirroredLoop){if(d.time>
d.duration||0>d.time)d.direction*=-1,d.time>d.duration&&(d.time=d.duration,d.directionBackwards=!0),0>d.time&&(d.time=0,d.directionBackwards=!1)}else d.time%=d.duration,0>d.time&&(d.time+=d.duration);var f=d.start+N.clamp(Math.floor(d.time/e),0,d.length-1),g=d.weight;f!==d.currentFrame&&(this.morphTargetInfluences[d.lastFrame]=0,this.morphTargetInfluences[d.currentFrame]=1*g,this.morphTargetInfluences[f]=0,d.lastFrame=d.currentFrame,d.currentFrame=f);e=d.time%e/e;d.directionBackwards&&(e=1-e);d.currentFrame!==
d.lastFrame?(this.morphTargetInfluences[d.currentFrame]=e*g,this.morphTargetInfluences[d.lastFrame]=(1-e)*g):this.morphTargetInfluences[d.currentFrame]=g}}};dd.prototype=Object.create(x.prototype);dd.prototype.constructor=dd;dd.prototype.isImmediateRenderObject=!0;ed.prototype=Object.create(ga.prototype);ed.prototype.constructor=ed;ed.prototype.update=function(){var a=new q,b=new q,c=new ya;return function(){var d=["a","b","c"];this.object.updateMatrixWorld(!0);c.getNormalMatrix(this.object.matrixWorld);
var e=this.object.matrixWorld,f=this.geometry.attributes.position,g=this.object.geometry;if(g&&g.isGeometry)for(var h=g.vertices,l=g.faces,k=g=0,q=l.length;k<q;k++)for(var p=l[k],n=0,u=p.vertexNormals.length;n<u;n++){var x=p.vertexNormals[n];a.copy(h[p[d[n]]]).applyMatrix4(e);b.copy(x).applyMatrix3(c).normalize().multiplyScalar(this.size).add(a);f.setXYZ(g,a.x,a.y,a.z);g+=1;f.setXYZ(g,b.x,b.y,b.z);g+=1}else if(g&&g.isBufferGeometry)for(d=g.attributes.position,h=g.attributes.normal,n=g=0,u=d.count;n<
u;n++)a.set(d.getX(n),d.getY(n),d.getZ(n)).applyMatrix4(e),b.set(h.getX(n),h.getY(n),h.getZ(n)),b.applyMatrix3(c).normalize().multiplyScalar(this.size).add(a),f.setXYZ(g,a.x,a.y,a.z),g+=1,f.setXYZ(g,b.x,b.y,b.z),g+=1;f.needsUpdate=!0;return this}}();lc.prototype=Object.create(x.prototype);lc.prototype.constructor=lc;lc.prototype.dispose=function(){this.cone.geometry.dispose();this.cone.material.dispose()};lc.prototype.update=function(){var a=new q,b=new q;return function(){var c=this.light.distance?
this.light.distance:1E3,d=c*Math.tan(this.light.angle);this.cone.scale.set(d,d,c);a.setFromMatrixPosition(this.light.matrixWorld);b.setFromMatrixPosition(this.light.target.matrixWorld);this.cone.lookAt(b.sub(a));this.cone.material.color.copy(this.light.color).multiplyScalar(this.light.intensity)}}();mc.prototype=Object.create(ga.prototype);mc.prototype.constructor=mc;mc.prototype.getBoneList=function(a){var b=[];a&&a.isBone&&b.push(a);for(var c=0;c<a.children.length;c++)b.push.apply(b,this.getBoneList(a.children[c]));
return b};mc.prototype.update=function(){var a=new q,b=new S,c=new S;return function(){var d=this.geometry,e=d.getAttribute("position");c.getInverse(this.root.matrixWorld);for(var f=0,g=0;f<this.bones.length;f++){var h=this.bones[f];h.parent&&h.parent.isBone&&(b.multiplyMatrices(c,h.matrixWorld),a.setFromMatrixPosition(b),e.setXYZ(g,a.x,a.y,a.z),b.multiplyMatrices(c,h.parent.matrixWorld),a.setFromMatrixPosition(b),e.setXYZ(g+1,a.x,a.y,a.z),g+=2)}d.getAttribute("position").needsUpdate=!0}}();nc.prototype=
Object.create(Aa.prototype);nc.prototype.constructor=nc;nc.prototype.dispose=function(){this.geometry.dispose();this.material.dispose()};nc.prototype.update=function(){this.material.color.copy(this.light.color).multiplyScalar(this.light.intensity)};oc.prototype=Object.create(x.prototype);oc.prototype.constructor=oc;oc.prototype.dispose=function(){this.children[0].geometry.dispose();this.children[0].material.dispose();this.children[1].geometry.dispose();this.children[1].material.dispose()};oc.prototype.update=
function(){var a=new q,b=new q;return function(){var c=this.children[0],d=this.children[1];if(this.light.target){a.setFromMatrixPosition(this.light.matrixWorld);b.setFromMatrixPosition(this.light.target.matrixWorld);var e=b.clone().sub(a);c.lookAt(e);d.lookAt(e)}c.material.color.copy(this.light.color).multiplyScalar(this.light.intensity);d.material.color.copy(this.light.color).multiplyScalar(this.light.intensity);var d=.5*this.light.width,e=.5*this.light.height,c=c.geometry.getAttribute("position"),
f=c.array;f[0]=d;f[1]=-e;f[2]=0;f[3]=d;f[4]=e;f[5]=0;f[6]=-d;f[7]=e;f[8]=0;f[9]=-d;f[10]=e;f[11]=0;f[12]=-d;f[13]=-e;f[14]=0;f[15]=d;f[16]=-e;f[17]=0;c.needsUpdate=!0}}();pc.prototype=Object.create(x.prototype);pc.prototype.constructor=pc;pc.prototype.dispose=function(){this.children[0].geometry.dispose();this.children[0].material.dispose()};pc.prototype.update=function(){var a=new q,b=new J,c=new J;return function(){var d=this.children[0],e=d.geometry.getAttribute("color");b.copy(this.light.color).multiplyScalar(this.light.intensity);
c.copy(this.light.groundColor).multiplyScalar(this.light.intensity);for(var f=0,g=e.count;f<g;f++){var h=f<g/2?b:c;e.setXYZ(f,h.r,h.g,h.b)}d.lookAt(a.setFromMatrixPosition(this.light.matrixWorld).negate());e.needsUpdate=!0}}();fd.prototype=Object.create(ga.prototype);fd.prototype.constructor=fd;Ld.prototype=Object.create(ga.prototype);Ld.prototype.constructor=Ld;gd.prototype=Object.create(ga.prototype);gd.prototype.constructor=gd;gd.prototype.update=function(){var a=new q,b=new q,c=new ya;return function(){this.object.updateMatrixWorld(!0);
c.getNormalMatrix(this.object.matrixWorld);for(var d=this.object.matrixWorld,e=this.geometry.attributes.position,f=this.object.geometry,g=f.vertices,f=f.faces,h=0,l=0,k=f.length;l<k;l++){var q=f[l],p=q.normal;a.copy(g[q.a]).add(g[q.b]).add(g[q.c]).divideScalar(3).applyMatrix4(d);b.copy(p).applyMatrix3(c).normalize().multiplyScalar(this.size).add(a);e.setXYZ(h,a.x,a.y,a.z);h+=1;e.setXYZ(h,b.x,b.y,b.z);h+=1}e.needsUpdate=!0;return this}}();qc.prototype=Object.create(x.prototype);qc.prototype.constructor=
qc;qc.prototype.dispose=function(){var a=this.children[0],b=this.children[1];a.geometry.dispose();a.material.dispose();b.geometry.dispose();b.material.dispose()};qc.prototype.update=function(){var a=new q,b=new q,c=new q;return function(){a.setFromMatrixPosition(this.light.matrixWorld);b.setFromMatrixPosition(this.light.target.matrixWorld);c.subVectors(b,a);var d=this.children[0],e=this.children[1];d.lookAt(c);d.material.color.copy(this.light.color).multiplyScalar(this.light.intensity);e.lookAt(c);
e.scale.z=c.length()}}();hd.prototype=Object.create(ga.prototype);hd.prototype.constructor=hd;hd.prototype.update=function(){function a(a,g,h,l){d.set(g,h,l).unproject(e);a=c[a];if(void 0!==a)for(g=b.getAttribute("position"),h=0,l=a.length;h<l;h++)g.setXYZ(a[h],d.x,d.y,d.z)}var b,c,d=new q,e=new ra;return function(){b=this.geometry;c=this.pointMap;e.projectionMatrix.copy(this.camera.projectionMatrix);a("c",0,0,-1);a("t",0,0,1);a("n1",-1,-1,-1);a("n2",1,-1,-1);a("n3",-1,1,-1);a("n4",1,1,-1);a("f1",
-1,-1,1);a("f2",1,-1,1);a("f3",-1,1,1);a("f4",1,1,1);a("u1",.7,1.1,-1);a("u2",-.7,1.1,-1);a("u3",0,2,-1);a("cf1",-1,0,1);a("cf2",1,0,1);a("cf3",0,-1,1);a("cf4",0,1,1);a("cn1",-1,0,-1);a("cn2",1,0,-1);a("cn3",0,-1,-1);a("cn4",0,1,-1);b.getAttribute("position").needsUpdate=!0}}();rc.prototype=Object.create(ga.prototype);rc.prototype.constructor=rc;rc.prototype.update=function(){var a=new Pa;return function(b){b&&b.isBox3?a.copy(b):a.setFromObject(b);if(!a.isEmpty()){b=a.min;var c=a.max,d=this.geometry.attributes.position,
e=d.array;e[0]=c.x;e[1]=c.y;e[2]=c.z;e[3]=b.x;e[4]=c.y;e[5]=c.z;e[6]=b.x;e[7]=b.y;e[8]=c.z;e[9]=c.x;e[10]=b.y;e[11]=c.z;e[12]=c.x;e[13]=c.y;e[14]=b.z;e[15]=b.x;e[16]=c.y;e[17]=b.z;e[18]=b.x;e[19]=b.y;e[20]=b.z;e[21]=c.x;e[22]=b.y;e[23]=b.z;d.needsUpdate=!0;this.geometry.computeBoundingSphere()}}}();var Md,ue;Fb.prototype=Object.create(x.prototype);Fb.prototype.constructor=Fb;Fb.prototype.setDirection=function(){var a=new q,b;return function(c){.99999<c.y?this.quaternion.set(0,0,0,1):-.99999>c.y?this.quaternion.set(1,
0,0,0):(a.set(c.z,0,-c.x).normalize(),b=Math.acos(c.y),this.quaternion.setFromAxisAngle(a,b))}}();Fb.prototype.setLength=function(a,b,c){void 0===b&&(b=.2*a);void 0===c&&(c=.2*b);this.line.scale.set(1,Math.max(0,a-b),1);this.line.updateMatrix();this.cone.scale.set(c,b,c);this.cone.position.y=a;this.cone.updateMatrix()};Fb.prototype.setColor=function(a){this.line.material.color.copy(a);this.cone.material.color.copy(a)};Nd.prototype=Object.create(ga.prototype);Nd.prototype.constructor=Nd;var Qd=new q,
ye=new ve,ze=new ve,Ae=new ve;va.prototype=Object.create(ua.prototype);va.prototype.constructor=va;va.prototype.getPoint=function(a){var b=this.points,c=b.length;2>c&&void 0;a*=c-(this.closed?0:1);var d=Math.floor(a);a-=d;this.closed?d+=0<d?0:(Math.floor(Math.abs(d)/b.length)+1)*b.length:0===a&&d===c-1&&(d=c-2,a=1);var e,f,g;this.closed||0<d?e=b[(d-1)%c]:(Qd.subVectors(b[0],b[1]).add(b[0]),e=Qd);f=b[d%c];g=b[(d+1)%c];this.closed||d+2<c?b=b[(d+2)%c]:(Qd.subVectors(b[c-
1],b[c-2]).add(b[c-1]),b=Qd);if(void 0===this.type||"centripetal"===this.type||"chordal"===this.type){var h="chordal"===this.type?.5:.25,c=Math.pow(e.distanceToSquared(f),h),d=Math.pow(f.distanceToSquared(g),h),h=Math.pow(g.distanceToSquared(b),h);1E-4>d&&(d=1);1E-4>c&&(c=d);1E-4>h&&(h=d);ye.initNonuniformCatmullRom(e.x,f.x,g.x,b.x,c,d,h);ze.initNonuniformCatmullRom(e.y,f.y,g.y,b.y,c,d,h);Ae.initNonuniformCatmullRom(e.z,f.z,g.z,b.z,c,d,h)}else"catmullrom"===this.type&&(c=void 0!==this.tension?this.tension:
.5,ye.initCatmullRom(e.x,f.x,g.x,b.x,c),ze.initCatmullRom(e.y,f.y,g.y,b.y,c),Ae.initCatmullRom(e.z,f.z,g.z,b.z,c));return new q(ye.calc(a),ze.calc(a),Ae.calc(a))};id.prototype=Object.create(ua.prototype);id.prototype.constructor=id;id.prototype.getPoint=function(a){var b=this.v0,c=this.v1,d=this.v2,e=this.v3;return new q(Bb(a,b.x,c.x,d.x,e.x),Bb(a,b.y,c.y,d.y,e.y),Bb(a,b.z,c.z,d.z,e.z))};jd.prototype=Object.create(ua.prototype);jd.prototype.constructor=jd;jd.prototype.getPoint=function(a){var b=this.v0,
c=this.v1,d=this.v2;return new q(Ab(a,b.x,c.x,d.x),Ab(a,b.y,c.y,d.y),Ab(a,b.z,c.z,d.z))};kd.prototype=Object.create(ua.prototype);kd.prototype.constructor=kd;kd.prototype.getPoint=function(a){if(1===a)return this.v2.clone();var b=new q;b.subVectors(this.v2,this.v1);b.multiplyScalar(a);b.add(this.v1);return b};Od.prototype=Object.create(Wa.prototype);Od.prototype.constructor=Od;ua.create=function(a,b){void 0;a.prototype=Object.create(ua.prototype);a.prototype.constructor=
a;a.prototype.getPoint=b;return a};Xe.prototype=Object.create(va.prototype);Ye.prototype=Object.create(va.prototype);we.prototype=Object.create(va.prototype);Object.assign(we.prototype,{initFromArray:function(a){void 0},getControlPointsArray:function(a){void 0},reparametrizeByArcLength:function(a){void 0}});
fd.prototype.setColors=function(){void 0};Object.assign(sc.prototype,{center:function(a){void 0;return this.getCenter(a)},empty:function(){void 0;return this.isEmpty()},isIntersectionBox:function(a){void 0;
return this.intersectsBox(a)},size:function(a){void 0;return this.getSize(a)}});Object.assign(Pa.prototype,{center:function(a){void 0;return this.getCenter(a)},empty:function(){void 0;return this.isEmpty()},isIntersectionBox:function(a){void 0;
return this.intersectsBox(a)},isIntersectionSphere:function(a){void 0;return this.intersectsSphere(a)},size:function(a){void 0;return this.getSize(a)}});hb.prototype.center=function(a){void 0;return this.getCenter(a)};N.random16=function(){void 0;
return Math.random()};Object.assign(ya.prototype,{flattenToArrayOffset:function(a,b){void 0;return this.toArray(a,b)},multiplyVector3:function(a){void 0;return a.applyMatrix3(this)},multiplyVector3Array:function(a){void 0;
return this.applyToVector3Array(a)},applyToBuffer:function(a,b,c){void 0;return this.applyToBufferAttribute(a)},applyToVector3Array:function(a,b,c){void 0}});Object.assign(S.prototype,{extractPosition:function(a){void 0;return this.copyPosition(a)},
flattenToArrayOffset:function(a,b){void 0;return this.toArray(a,b)},getPosition:function(){var a;return function(){void 0===a&&(a=new q);void 0;return a.setFromMatrixColumn(this,3)}}(),setRotationFromQuaternion:function(a){void 0;
return this.makeRotationFromQuaternion(a)},multiplyVector3:function(a){void 0;return a.applyMatrix4(this)},multiplyVector4:function(a){void 0;return a.applyMatrix4(this)},multiplyVector3Array:function(a){void 0;
return this.applyToVector3Array(a)},rotateAxis:function(a){void 0;a.transformDirection(this)},crossVector:function(a){void 0;return a.applyMatrix4(this)},translate:function(){void 0},rotateX:function(){void 0},
rotateY:function(){void 0},rotateZ:function(){void 0},rotateByAxis:function(){void 0},applyToBuffer:function(a,b,c){void 0;return this.applyToBufferAttribute(a)},applyToVector3Array:function(a,b,c){void 0},
makeFrustum:function(a,b,c,d,e,f){void 0;return this.makePerspective(a,b,d,c,e,f)}});la.prototype.isIntersectionLine=function(a){void 0;return this.intersectsLine(a)};ca.prototype.multiplyVector3=function(a){void 0;
return a.applyQuaternion(this)};Object.assign(cb.prototype,{isIntersectionBox:function(a){void 0;return this.intersectsBox(a)},isIntersectionPlane:function(a){void 0;return this.intersectsPlane(a)},isIntersectionSphere:function(a){void 0;return this.intersectsSphere(a)}});
Object.assign(Db.prototype,{extrude:function(a){void 0;return new La(this,a)},makeGeometry:function(a){void 0;return new Yb(this,a)}});Object.assign(D.prototype,{fromAttribute:function(a,b,c){void 0;return this.fromBufferAttribute(a,b,c)}});Object.assign(q.prototype,
{setEulerFromRotationMatrix:function(){void 0},setEulerFromQuaternion:function(){void 0},getPositionFromMatrix:function(a){void 0;return this.setFromMatrixPosition(a)},getScaleFromMatrix:function(a){void 0;
return this.setFromMatrixScale(a)},getColumnFromMatrix:function(a,b){void 0;return this.setFromMatrixColumn(b,a)},applyProjection:function(a){void 0;return this.applyMatrix4(a)},fromAttribute:function(a,b,c){void 0;return this.fromBufferAttribute(a,
b,c)}});Object.assign(fa.prototype,{fromAttribute:function(a,b,c){void 0;return this.fromBufferAttribute(a,b,c)}});T.prototype.computeTangents=function(){void 0};Object.assign(x.prototype,{getChildByName:function(a){void 0;return this.getObjectByName(a)},renderDepth:function(){void 0},
translate:function(a,b){void 0;return this.translateOnAxis(b,a)}});Object.defineProperties(x.prototype,{eulerOrder:{get:function(){void 0;return this.rotation.order},set:function(a){void 0;this.rotation.order=a}},useQuaternion:{get:function(){void 0},
set:function(){void 0}}});Object.defineProperties(Ec.prototype,{objects:{get:function(){void 0;return this.levels}}});Fa.prototype.setLens=function(a,b){void 0;void 0!==b&&(this.filmGauge=b);this.setFocalLength(a)};Object.defineProperties(ma.prototype,
{onlyShadow:{set:function(){void 0}},shadowCameraFov:{set:function(a){void 0;this.shadow.camera.fov=a}},shadowCameraLeft:{set:function(a){void 0;this.shadow.camera.left=a}},shadowCameraRight:{set:function(a){void 0;this.shadow.camera.right=a}},shadowCameraTop:{set:function(a){void 0;
this.shadow.camera.top=a}},shadowCameraBottom:{set:function(a){void 0;this.shadow.camera.bottom=a}},shadowCameraNear:{set:function(a){void 0;this.shadow.camera.near=a}},shadowCameraFar:{set:function(a){void 0;this.shadow.camera.far=a}},shadowCameraVisible:{set:function(){void 0}},
shadowBias:{set:function(a){void 0;this.shadow.bias=a}},shadowDarkness:{set:function(){void 0}},shadowMapWidth:{set:function(a){void 0;this.shadow.mapSize.width=a}},shadowMapHeight:{set:function(a){void 0;this.shadow.mapSize.height=a}}});Object.defineProperties(U.prototype,
{length:{get:function(){void 0;return this.array.length}}});Object.assign(I.prototype,{addIndex:function(a){void 0;this.setIndex(a)},addDrawCall:function(a,b,c){void 0!==c&&void 0;void 0;this.addGroup(a,
b)},clearDrawCalls:function(){void 0;this.clearGroups()},computeTangents:function(){void 0},computeOffsets:function(){void 0}});Object.defineProperties(I.prototype,{drawcalls:{get:function(){void 0;return this.groups}},offsets:{get:function(){void 0;
return this.groups}}});Object.defineProperties(Kd.prototype,{dynamic:{set:function(){void 0}},onUpdate:{value:function(){void 0;return this}}});Object.defineProperties(X.prototype,{wrapAround:{get:function(){void 0},set:function(){void 0}},wrapRGB:{get:function(){void 0;return new J}}});Object.defineProperties(Ca.prototype,{metal:{get:function(){void 0;return!1},set:function(){void 0}}});Object.defineProperties(Ha.prototype,{derivatives:{get:function(){void 0;
return this.extensions.derivatives},set:function(a){void 0;this.extensions.derivatives=a}}});Object.assign(Yd.prototype,{supportsFloatTextures:function(){void 0;return this.extensions.get("OES_texture_float")},supportsHalfFloatTextures:function(){void 0;
return this.extensions.get("OES_texture_half_float")},supportsStandardDerivatives:function(){void 0;return this.extensions.get("OES_standard_derivatives")},supportsCompressedTextureS3TC:function(){void 0;return this.extensions.get("WEBGL_compressed_texture_s3tc")},
supportsCompressedTexturePVRTC:function(){void 0;return this.extensions.get("WEBGL_compressed_texture_pvrtc")},supportsBlendMinMax:function(){void 0;return this.extensions.get("EXT_blend_minmax")},supportsVertexTextures:function(){void 0;
return this.capabilities.vertexTextures},supportsInstancedArrays:function(){void 0;return this.extensions.get("ANGLE_instanced_arrays")},enableScissorTest:function(a){void 0;this.setScissorTest(a)},initMaterial:function(){void 0},addPrePlugin:function(){void 0},
addPostPlugin:function(){void 0},updateShadowMap:function(){void 0}});Object.defineProperties(Yd.prototype,{shadowMapEnabled:{get:function(){return this.shadowMap.enabled},set:function(a){void 0;this.shadowMap.enabled=a}},shadowMapType:{get:function(){return this.shadowMap.type},set:function(a){void 0;
this.shadowMap.type=a}},shadowMapCullFace:{get:function(){return this.shadowMap.cullFace},set:function(a){void 0;this.shadowMap.cullFace=a}}});Object.defineProperties(Ke.prototype,{cullFace:{get:function(){return this.renderReverseSided?2:1},set:function(a){a=1!==a;void 0;this.renderReverseSided=a}}});Object.defineProperties(Ya.prototype,
{wrapS:{get:function(){void 0;return this.texture.wrapS},set:function(a){void 0;this.texture.wrapS=a}},wrapT:{get:function(){void 0;return this.texture.wrapT},set:function(a){void 0;this.texture.wrapT=a}},magFilter:{get:function(){void 0;
return this.texture.magFilter},set:function(a){void 0;this.texture.magFilter=a}},minFilter:{get:function(){void 0;return this.texture.minFilter},set:function(a){void 0;this.texture.minFilter=a}},anisotropy:{get:function(){void 0;
return this.texture.anisotropy},set:function(a){void 0;this.texture.anisotropy=a}},offset:{get:function(){void 0;return this.texture.offset},set:function(a){void 0;this.texture.offset=a}},repeat:{get:function(){void 0;return this.texture.repeat},
set:function(a){void 0;this.texture.repeat=a}},format:{get:function(){void 0;return this.texture.format},set:function(a){void 0;this.texture.format=a}},type:{get:function(){void 0;return this.texture.type},set:function(a){void 0;
this.texture.type=a}},generateMipmaps:{get:function(){void 0;return this.texture.generateMipmaps},set:function(a){void 0;this.texture.generateMipmaps=a}}});hc.prototype.load=function(a){void 0;var b=this;(new ge).load(a,function(a){b.setBuffer(a)});return this};
le.prototype.getData=function(){void 0;return this.getFrequencyData()};l.WebGLRenderTargetCube=Gb;l.WebGLRenderTarget=Ya;l.WebGLRenderer=Yd;l.ShaderLib=bb;l.UniformsLib=V;l.UniformsUtils=Ja;l.ShaderChunk=Z;l.FogExp2=Kb;l.Fog=Lb;l.Scene=mb;l.LensFlare=Zd;l.Sprite=Dc;l.LOD=Ec;l.SkinnedMesh=qd;l.Skeleton=od;l.Bone=pd;l.Mesh=Aa;l.LineSegments=ga;l.Line=Ua;l.Points=Mb;l.Group=Fc;l.VideoTexture=rd;l.DataTexture=eb;l.CompressedTexture=
Nb;l.CubeTexture=Za;l.CanvasTexture=sd;l.DepthTexture=Gc;l.Texture=ea;l.CompressedTextureLoader=Re;l.DataTextureLoader=ae;l.CubeTextureLoader=be;l.TextureLoader=td;l.ObjectLoader=Se;l.MaterialLoader=Hd;l.BufferGeometryLoader=ce;l.DefaultLoadingManager=ta;l.LoadingManager=$d;l.JSONLoader=de;l.ImageLoader=Yc;l.FontLoader=Ue;l.FileLoader=sa;l.Loader=zb;l.Cache=ld;l.AudioLoader=ge;l.SpotLightShadow=vd;l.SpotLight=wd;l.PointLight=xd;l.RectAreaLight=he;l.HemisphereLight=ud;l.DirectionalLightShadow=yd;l.DirectionalLight=
zd;l.AmbientLight=Ad;l.LightShadow=wb;l.Light=ma;l.StereoCamera=Ve;l.PerspectiveCamera=Fa;l.OrthographicCamera=Jb;l.CubeCamera=Id;l.Camera=ra;l.AudioListener=ie;l.PositionalAudio=ke;l.AudioContext=je;l.AudioAnalyser=le;l.Audio=hc;l.VectorKeyframeTrack=dc;l.StringKeyframeTrack=Ed;l.QuaternionKeyframeTrack=$c;l.NumberKeyframeTrack=ec;l.ColorKeyframeTrack=Gd;l.BooleanKeyframeTrack=Fd;l.PropertyMixer=Jd;l.PropertyBinding=ka;l.KeyframeTrack=yb;l.AnimationUtils=na;l.AnimationObjectGroup=me;l.AnimationMixer=
cd;l.AnimationClip=qa;l.Uniform=Kd;l.InstancedBufferGeometry=Eb;l.BufferGeometry=I;l.GeometryIdCount=function(){return Vd++};l.Geometry=T;l.InterleavedBufferAttribute=oe;l.InstancedInterleavedBuffer=jc;l.InterleavedBuffer=ic;l.InstancedBufferAttribute=kc;l.Face3=ha;l.Object3D=x;l.Raycaster=pe;l.Layers=nd;l.EventDispatcher=pa;l.Clock=re;l.QuaternionLinearInterpolant=Dd;l.LinearInterpolant=Zc;l.DiscreteInterpolant=Cd;l.CubicInterpolant=Bd;l.Interpolant=xa;l.Triangle=za;l.Math=N;l.Spherical=se;l.Cylindrical=
te;l.Plane=la;l.Frustum=tc;l.Sphere=Na;l.Ray=cb;l.Matrix4=S;l.Matrix3=ya;l.Box3=Pa;l.Box2=sc;l.Line3=hb;l.Euler=db;l.Vector4=fa;l.Vector3=q;l.Vector2=D;l.Quaternion=ca;l.Color=J;l.MorphBlendMesh=oa;l.ImmediateRenderObject=dd;l.VertexNormalsHelper=ed;l.SpotLightHelper=lc;l.SkeletonHelper=mc;l.PointLightHelper=nc;l.RectAreaLightHelper=oc;l.HemisphereLightHelper=pc;l.GridHelper=fd;l.PolarGridHelper=Ld;l.FaceNormalsHelper=gd;l.DirectionalLightHelper=qc;l.CameraHelper=hd;l.BoxHelper=rc;l.ArrowHelper=Fb;
l.AxisHelper=Nd;l.CatmullRomCurve3=va;l.CubicBezierCurve3=id;l.QuadraticBezierCurve3=jd;l.LineCurve3=kd;l.ArcCurve=Od;l.EllipseCurve=Wa;l.SplineCurve=Cb;l.CubicBezierCurve=fc;l.QuadraticBezierCurve=gc;l.LineCurve=Ta;l.Shape=Db;l.Path=bd;l.ShapePath=ee;l.Font=fe;l.CurvePath=ad;l.Curve=ua;l.ShapeUtils=Ia;l.SceneUtils={createMultiMaterialObject:function(a,b){for(var c=new Fc,d=0,e=b.length;d<e;d++)c.add(new Aa(a,b[d]));return c},detach:function(a,b,c){a.applyMatrix(b.matrixWorld);b.remove(a);c.add(a)},
attach:function(a,b,c){var d=new S;d.getInverse(c.matrixWorld);a.applyMatrix(d);b.remove(a);c.add(a)}};l.WireframeGeometry=Ob;l.ParametricGeometry=Hc;l.ParametricBufferGeometry=Pb;l.TetrahedronGeometry=Jc;l.TetrahedronBufferGeometry=Qb;l.OctahedronGeometry=Kc;l.OctahedronBufferGeometry=ob;l.IcosahedronGeometry=Lc;l.IcosahedronBufferGeometry=Rb;l.DodecahedronGeometry=Mc;l.DodecahedronBufferGeometry=Sb;l.PolyhedronGeometry=Ic;l.PolyhedronBufferGeometry=Ba;l.TubeGeometry=Nc;l.TubeBufferGeometry=Tb;l.TorusKnotGeometry=
Oc;l.TorusKnotBufferGeometry=Ub;l.TorusGeometry=Pc;l.TorusBufferGeometry=Vb;l.TextGeometry=Qc;l.SphereGeometry=Rc;l.SphereBufferGeometry=pb;l.RingGeometry=Sc;l.RingBufferGeometry=Wb;l.PlaneGeometry=Ac;l.PlaneBufferGeometry=lb;l.LatheGeometry=Tc;l.LatheBufferGeometry=Xb;l.ShapeGeometry=Yb;l.ShapeBufferGeometry=Zb;l.ExtrudeGeometry=La;l.EdgesGeometry=$b;l.ConeGeometry=Uc;l.ConeBufferGeometry=Vc;l.CylinderGeometry=qb;l.CylinderBufferGeometry=Va;l.CircleGeometry=Wc;l.CircleBufferGeometry=ac;l.BoxGeometry=
Ib;l.BoxBufferGeometry=kb;l.ShadowMaterial=bc;l.SpriteMaterial=nb;l.RawShaderMaterial=cc;l.ShaderMaterial=Ha;l.PointsMaterial=Oa;l.MultiMaterial=Xc;l.MeshPhysicalMaterial=rb;l.MeshStandardMaterial=Qa;l.MeshPhongMaterial=Ca;l.MeshToonMaterial=sb;l.MeshNormalMaterial=tb;l.MeshLambertMaterial=ub;l.MeshDepthMaterial=ab;l.MeshBasicMaterial=Ka;l.LineDashedMaterial=vb;l.LineBasicMaterial=ia;l.Material=X;l.Float64BufferAttribute=zc;l.Float32BufferAttribute=z;l.Uint32BufferAttribute=jb;l.Int32BufferAttribute=
yc;l.Uint16BufferAttribute=ib;l.Int16BufferAttribute=xc;l.Uint8ClampedBufferAttribute=wc;l.Uint8BufferAttribute=vc;l.Int8BufferAttribute=uc;l.BufferAttribute=U;l.REVISION="84";l.MOUSE={LEFT:0,MIDDLE:1,RIGHT:2};l.CullFaceNone=0;l.CullFaceBack=1;l.CullFaceFront=2;l.CullFaceFrontBack=3;l.FrontFaceDirectionCW=0;l.FrontFaceDirectionCCW=1;l.BasicShadowMap=0;l.PCFShadowMap=1;l.PCFSoftShadowMap=2;l.FrontSide=0;l.BackSide=1;l.DoubleSide=2;l.FlatShading=1;l.SmoothShading=2;l.NoColors=0;l.FaceColors=1;l.VertexColors=
2;l.NoBlending=0;l.NormalBlending=1;l.AdditiveBlending=2;l.SubtractiveBlending=3;l.MultiplyBlending=4;l.CustomBlending=5;l.AddEquation=100;l.SubtractEquation=101;l.ReverseSubtractEquation=102;l.MinEquation=103;l.MaxEquation=104;l.ZeroFactor=200;l.OneFactor=201;l.SrcColorFactor=202;l.OneMinusSrcColorFactor=203;l.SrcAlphaFactor=204;l.OneMinusSrcAlphaFactor=205;l.DstAlphaFactor=206;l.OneMinusDstAlphaFactor=207;l.DstColorFactor=208;l.OneMinusDstColorFactor=209;l.SrcAlphaSaturateFactor=210;l.NeverDepth=
0;l.AlwaysDepth=1;l.LessDepth=2;l.LessEqualDepth=3;l.EqualDepth=4;l.GreaterEqualDepth=5;l.GreaterDepth=6;l.NotEqualDepth=7;l.MultiplyOperation=0;l.MixOperation=1;l.AddOperation=2;l.NoToneMapping=0;l.LinearToneMapping=1;l.ReinhardToneMapping=2;l.Uncharted2ToneMapping=3;l.CineonToneMapping=4;l.UVMapping=300;l.CubeReflectionMapping=301;l.CubeRefractionMapping=302;l.EquirectangularReflectionMapping=303;l.EquirectangularRefractionMapping=304;l.SphericalReflectionMapping=305;l.CubeUVReflectionMapping=306;
l.CubeUVRefractionMapping=307;l.RepeatWrapping=1E3;l.ClampToEdgeWrapping=1001;l.MirroredRepeatWrapping=1002;l.NearestFilter=1003;l.NearestMipMapNearestFilter=1004;l.NearestMipMapLinearFilter=1005;l.LinearFilter=1006;l.LinearMipMapNearestFilter=1007;l.LinearMipMapLinearFilter=1008;l.UnsignedByteType=1009;l.ByteType=1010;l.ShortType=1011;l.UnsignedShortType=1012;l.IntType=1013;l.UnsignedIntType=1014;l.FloatType=1015;l.HalfFloatType=1016;l.UnsignedShort4444Type=1017;l.UnsignedShort5551Type=1018;l.UnsignedShort565Type=
1019;l.UnsignedInt248Type=1020;l.AlphaFormat=1021;l.RGBFormat=1022;l.RGBAFormat=1023;l.LuminanceFormat=1024;l.LuminanceAlphaFormat=1025;l.RGBEFormat=1023;l.DepthFormat=1026;l.DepthStencilFormat=1027;l.RGB_S3TC_DXT1_Format=2001;l.RGBA_S3TC_DXT1_Format=2002;l.RGBA_S3TC_DXT3_Format=2003;l.RGBA_S3TC_DXT5_Format=2004;l.RGB_PVRTC_4BPPV1_Format=2100;l.RGB_PVRTC_2BPPV1_Format=2101;l.RGBA_PVRTC_4BPPV1_Format=2102;l.RGBA_PVRTC_2BPPV1_Format=2103;l.RGB_ETC1_Format=2151;l.LoopOnce=2200;l.LoopRepeat=2201;l.LoopPingPong=
2202;l.InterpolateDiscrete=2300;l.InterpolateLinear=2301;l.InterpolateSmooth=2302;l.ZeroCurvatureEnding=2400;l.ZeroSlopeEnding=2401;l.WrapAroundEnding=2402;l.TrianglesDrawMode=0;l.TriangleStripDrawMode=1;l.TriangleFanDrawMode=2;l.LinearEncoding=3E3;l.sRGBEncoding=3001;l.GammaEncoding=3007;l.RGBEEncoding=3002;l.LogLuvEncoding=3003;l.RGBM7Encoding=3004;l.RGBM16Encoding=3005;l.RGBDEncoding=3006;l.BasicDepthPacking=3200;l.RGBADepthPacking=3201;l.CubeGeometry=Ib;l.Face4=function(a,b,c,d,e,f,g){void 0;
return new ha(a,b,c,e,f,g)};l.LineStrip=0;l.LinePieces=1;l.MeshFaceMaterial=function(a){void 0;return new Xc(a)};l.PointCloud=function(a,b){void 0;return new Mb(a,b)};l.Particle=function(a){void 0;return new Dc(a)};l.ParticleSystem=function(a,b){void 0;
return new Mb(a,b)};l.PointCloudMaterial=function(a){void 0;return new Oa(a)};l.ParticleBasicMaterial=function(a){void 0;return new Oa(a)};l.ParticleSystemMaterial=function(a){void 0;return new Oa(a)};l.Vertex=function(a,b,c){void 0;
return new q(a,b,c)};l.DynamicBufferAttribute=function(a,b){void 0;return(new U(a,b)).setDynamic(!0)};l.Int8Attribute=function(a,b){void 0;return new uc(a,b)};l.Uint8Attribute=function(a,b){void 0;return new vc(a,
b)};l.Uint8ClampedAttribute=function(a,b){void 0;return new wc(a,b)};l.Int16Attribute=function(a,b){void 0;return new xc(a,b)};l.Uint16Attribute=function(a,b){void 0;return new ib(a,b)};l.Int32Attribute=
function(a,b){void 0;return new yc(a,b)};l.Uint32Attribute=function(a,b){void 0;return new jb(a,b)};l.Float32Attribute=function(a,b){void 0;return new z(a,b)};l.Float64Attribute=function(a,b){void 0;
return new zc(a,b)};l.ClosedSplineCurve3=Xe;l.SplineCurve3=Ye;l.Spline=we;l.BoundingBoxHelper=function(a,b){void 0;return new rc(a,b)};l.EdgesHelper=function(a,b){void 0;return new ga(new $b(a.geometry),new ia({color:void 0!==b?b:16777215}))};l.WireframeHelper=function(a,b){void 0;
return new ga(new Ob(a.geometry),new ia({color:void 0!==b?b:16777215}))};l.XHRLoader=function(a){void 0;return new sa(a)};l.BinaryTextureLoader=function(a){void 0;return new ae(a)};l.GeometryUtils={merge:function(a,b,c){void 0;
var d;b.isMesh&&(b.matrixAutoUpdate&&b.updateMatrix(),d=b.matrix,b=b.geometry);a.merge(b,d,c)},center:function(a){void 0;return a.center()}};l.ImageUtils={crossOrigin:void 0,loadTexture:function(a,b,c,d){void 0;var e=new td;e.setCrossOrigin(this.crossOrigin);a=e.load(a,c,void 0,d);b&&(a.mapping=b);return a},
loadTextureCube:function(a,b,c,d){void 0;var e=new be;e.setCrossOrigin(this.crossOrigin);a=e.load(a,c,void 0,d);b&&(a.mapping=b);return a},loadCompressedTexture:function(){void 0},loadCompressedTextureCube:function(){void 0}};
l.Projector=function(){void 0;this.projectVector=function(a,b){void 0;a.project(b)};this.unprojectVector=function(a,b){void 0;a.unproject(b)};this.pickingRay=function(){void 0}};l.CanvasRenderer=function(){void 0;
this.domElement=document.createElementNS("http://www.w3.org/1999/xhtml","canvas");this.clear=function(){};this.render=function(){};this.setClearColor=function(){};this.setSize=function(){}};Object.defineProperty(l,"__esModule",{value:!0})});

THREE.OBJLoader=function(a){this.manager=void 0!==a?a:THREE.DefaultLoadingManager,this.materials=null,this.regexp={vertex_pattern:/^v\s+([\d|\.|\+|\-|e|E]+)\s+([\d|\.|\+|\-|e|E]+)\s+([\d|\.|\+|\-|e|E]+)/,normal_pattern:/^vn\s+([\d|\.|\+|\-|e|E]+)\s+([\d|\.|\+|\-|e|E]+)\s+([\d|\.|\+|\-|e|E]+)/,uv_pattern:/^vt\s+([\d|\.|\+|\-|e|E]+)\s+([\d|\.|\+|\-|e|E]+)/,face_vertex:/^f\s+(-?\d+)\s+(-?\d+)\s+(-?\d+)(?:\s+(-?\d+))?/,face_vertex_uv:/^f\s+(-?\d+)\/(-?\d+)\s+(-?\d+)\/(-?\d+)\s+(-?\d+)\/(-?\d+)(?:\s+(-?\d+)\/(-?\d+))?/,face_vertex_uv_normal:/^f\s+(-?\d+)\/(-?\d+)\/(-?\d+)\s+(-?\d+)\/(-?\d+)\/(-?\d+)\s+(-?\d+)\/(-?\d+)\/(-?\d+)(?:\s+(-?\d+)\/(-?\d+)\/(-?\d+))?/,face_vertex_normal:/^f\s+(-?\d+)\/\/(-?\d+)\s+(-?\d+)\/\/(-?\d+)\s+(-?\d+)\/\/(-?\d+)(?:\s+(-?\d+)\/\/(-?\d+))?/,object_pattern:/^[og]\s*(.+)?/,smoothing_pattern:/^s\s+(\d+|on|off)/,material_library_pattern:/^mtllib /,material_use_pattern:/^usemtl /}},THREE.OBJLoader.prototype={constructor:THREE.OBJLoader,load:function(a,b,c,d){var e=this,f=new THREE.FileLoader(e.manager);f.setPath(this.path),f.load(a,function(a){b(e.parse(a))},c,d)},setPath:function(a){this.path=a},setMaterials:function(a){this.materials=a},_createParserState:function(){var a={objects:[],object:{},vertices:[],normals:[],uvs:[],materialLibraries:[],startObject:function(a,b){if(this.object&&this.object.fromDeclaration===!1)return this.object.name=a,void(this.object.fromDeclaration=b!==!1);var c=this.object&&"function"==typeof this.object.currentMaterial?this.object.currentMaterial():void 0;if(this.object&&"function"==typeof this.object._finalize&&this.object._finalize(!0),this.object={name:a||"",fromDeclaration:b!==!1,geometry:{vertices:[],normals:[],uvs:[]},materials:[],smooth:!0,startMaterial:function(a,b){var c=this._finalize(!1);c&&(c.inherited||c.groupCount<=0)&&this.materials.splice(c.index,1);var d={index:this.materials.length,name:a||"",mtllib:Array.isArray(b)&&b.length>0?b[b.length-1]:"",smooth:void 0!==c?c.smooth:this.smooth,groupStart:void 0!==c?c.groupEnd:0,groupEnd:-1,groupCount:-1,inherited:!1,clone:function(a){var b={index:"number"==typeof a?a:this.index,name:this.name,mtllib:this.mtllib,smooth:this.smooth,groupStart:0,groupEnd:-1,groupCount:-1,inherited:!1};return b.clone=this.clone.bind(b),b}};return this.materials.push(d),d},currentMaterial:function(){if(this.materials.length>0)return this.materials[this.materials.length-1]},_finalize:function(a){var b=this.currentMaterial();if(b&&b.groupEnd===-1&&(b.groupEnd=this.geometry.vertices.length/3,b.groupCount=b.groupEnd-b.groupStart,b.inherited=!1),a&&this.materials.length>1)for(var c=this.materials.length-1;c>=0;c--)this.materials[c].groupCount<=0&&this.materials.splice(c,1);return a&&0===this.materials.length&&this.materials.push({name:"",smooth:this.smooth}),b}},c&&c.name&&"function"==typeof c.clone){var d=c.clone(0);d.inherited=!0,this.object.materials.push(d)}this.objects.push(this.object)},finalize:function(){this.object&&"function"==typeof this.object._finalize&&this.object._finalize(!0)},parseVertexIndex:function(a,b){var c=parseInt(a,10);return 3*(c>=0?c-1:c+b/3)},parseNormalIndex:function(a,b){var c=parseInt(a,10);return 3*(c>=0?c-1:c+b/3)},parseUVIndex:function(a,b){var c=parseInt(a,10);return 2*(c>=0?c-1:c+b/2)},addVertex:function(a,b,c){var d=this.vertices,e=this.object.geometry.vertices;e.push(d[a+0]),e.push(d[a+1]),e.push(d[a+2]),e.push(d[b+0]),e.push(d[b+1]),e.push(d[b+2]),e.push(d[c+0]),e.push(d[c+1]),e.push(d[c+2])},addVertexLine:function(a){var b=this.vertices,c=this.object.geometry.vertices;c.push(b[a+0]),c.push(b[a+1]),c.push(b[a+2])},addNormal:function(a,b,c){var d=this.normals,e=this.object.geometry.normals;e.push(d[a+0]),e.push(d[a+1]),e.push(d[a+2]),e.push(d[b+0]),e.push(d[b+1]),e.push(d[b+2]),e.push(d[c+0]),e.push(d[c+1]),e.push(d[c+2])},addUV:function(a,b,c){var d=this.uvs,e=this.object.geometry.uvs;e.push(d[a+0]),e.push(d[a+1]),e.push(d[b+0]),e.push(d[b+1]),e.push(d[c+0]),e.push(d[c+1])},addUVLine:function(a){var b=this.uvs,c=this.object.geometry.uvs;c.push(b[a+0]),c.push(b[a+1])},addFace:function(a,b,c,d,e,f,g,h,i,j,k,l){var q,m=this.vertices.length,n=this.parseVertexIndex(a,m),o=this.parseVertexIndex(b,m),p=this.parseVertexIndex(c,m);if(void 0===d?this.addVertex(n,o,p):(q=this.parseVertexIndex(d,m),this.addVertex(n,o,q),this.addVertex(o,p,q)),void 0!==e){var r=this.uvs.length;n=this.parseUVIndex(e,r),o=this.parseUVIndex(f,r),p=this.parseUVIndex(g,r),void 0===d?this.addUV(n,o,p):(q=this.parseUVIndex(h,r),this.addUV(n,o,q),this.addUV(o,p,q))}if(void 0!==i){var s=this.normals.length;n=this.parseNormalIndex(i,s),o=i===j?n:this.parseNormalIndex(j,s),p=i===k?n:this.parseNormalIndex(k,s),void 0===d?this.addNormal(n,o,p):(q=this.parseNormalIndex(l,s),this.addNormal(n,o,q),this.addNormal(o,p,q))}},addLineGeometry:function(a,b){this.object.geometry.type="Line";for(var c=this.vertices.length,d=this.uvs.length,e=0,f=a.length;e<f;e++)this.addVertexLine(this.parseVertexIndex(a[e],c));for(var g=0,f=b.length;g<f;g++)this.addUVLine(this.parseUVIndex(b[g],d))}};return a.startObject("",!1),a},parse:function(a){void 0;var b=this._createParserState();a.indexOf("\r\n")!==-1&&(a=a.replace(/\r\n/g,"\n")),a.indexOf("\\\n")!==-1&&(a=a.replace(/\\\n/g,""));for(var c=a.split("\n"),d="",e="",f="",g=0,h=[],i="function"==typeof"".trimLeft,j=0,k=c.length;j<k;j++)if(d=c[j],d=i?d.trimLeft():d.trim(),g=d.length,0!==g&&(e=d.charAt(0),"#"!==e))if("v"===e)if(f=d.charAt(1)," "===f&&null!==(h=this.regexp.vertex_pattern.exec(d)))b.vertices.push(parseFloat(h[1]),parseFloat(h[2]),parseFloat(h[3]));else if("n"===f&&null!==(h=this.regexp.normal_pattern.exec(d)))b.normals.push(parseFloat(h[1]),parseFloat(h[2]),parseFloat(h[3]));else{if("t"!==f||null===(h=this.regexp.uv_pattern.exec(d)))throw new Error("Unexpected vertex/normal/uv line: '"+d+"'");b.uvs.push(parseFloat(h[1]),parseFloat(h[2]))}else if("f"===e)if(null!==(h=this.regexp.face_vertex_uv_normal.exec(d)))b.addFace(h[1],h[4],h[7],h[10],h[2],h[5],h[8],h[11],h[3],h[6],h[9],h[12]);else if(null!==(h=this.regexp.face_vertex_uv.exec(d)))b.addFace(h[1],h[3],h[5],h[7],h[2],h[4],h[6],h[8]);else if(null!==(h=this.regexp.face_vertex_normal.exec(d)))b.addFace(h[1],h[3],h[5],h[7],void 0,void 0,void 0,void 0,h[2],h[4],h[6],h[8]);else{if(null===(h=this.regexp.face_vertex.exec(d)))throw new Error("Unexpected face line: '"+d+"'");b.addFace(h[1],h[2],h[3],h[4])}else if("l"===e){var l=d.substring(1).trim().split(" "),m=[],n=[];if(d.indexOf("/")===-1)m=l;else for(var o=0,p=l.length;o<p;o++){var q=l[o].split("/");""!==q[0]&&m.push(q[0]),""!==q[1]&&n.push(q[1])}b.addLineGeometry(m,n)}else if(null!==(h=this.regexp.object_pattern.exec(d))){var r=(" "+h[0].substr(1).trim()).substr(1);b.startObject(r)}else if(this.regexp.material_use_pattern.test(d))b.object.startMaterial(d.substring(7).trim(),b.materialLibraries);else if(this.regexp.material_library_pattern.test(d))b.materialLibraries.push(d.substring(7).trim());else{if(null===(h=this.regexp.smoothing_pattern.exec(d))){if("\0"===d)continue;throw new Error("Unexpected line: '"+d+"'")}var s=h[1].trim().toLowerCase();b.object.smooth="1"===s||"on"===s;var t=b.object.currentMaterial();t&&(t.smooth=b.object.smooth)}b.finalize();var u=new THREE.Group;u.materialLibraries=[].concat(b.materialLibraries);for(var j=0,k=b.objects.length;j<k;j++){var v=b.objects[j],w=v.geometry,x=v.materials,y="Line"===w.type;if(0!==w.vertices.length){var z=new THREE.BufferGeometry;z.addAttribute("position",new THREE.BufferAttribute(new Float32Array(w.vertices),3)),w.normals.length>0?z.addAttribute("normal",new THREE.BufferAttribute(new Float32Array(w.normals),3)):z.computeVertexNormals(),w.uvs.length>0&&z.addAttribute("uv",new THREE.BufferAttribute(new Float32Array(w.uvs),2));for(var A=[],B=0,C=x.length;B<C;B++){var D=x[B],t=void 0;if(null!==this.materials&&(t=this.materials.create(D.name),y&&t&&!(t instanceof THREE.LineBasicMaterial))){var E=new THREE.LineBasicMaterial;E.copy(t),t=E}t||(t=y?new THREE.LineBasicMaterial:new THREE.MeshPhongMaterial,t.name=D.name),t.shading=D.smooth?THREE.SmoothShading:THREE.FlatShading,A.push(t)}var F;if(A.length>1){for(var B=0,C=x.length;B<C;B++){var D=x[B];z.addGroup(D.groupStart,D.groupCount,B)}var G=new THREE.MultiMaterial(A);F=y?new THREE.LineSegments(z,G):new THREE.Mesh(z,G)}else F=y?new THREE.LineSegments(z,A[0]):new THREE.Mesh(z,A[0]);F.name=v.name,u.add(F)}}return void 0,u}};


var textureLoader = new THREE.TextureLoader()

var flim_noise = textureLoader.load("assets/images/Seamless-RoadTexture.jpg");

flim_noise.wrapS = THREE.RepeatWrapping;
flim_noise.wrapT = THREE.RepeatWrapping;

var alphaMap = textureLoader.load("assets/images/ridge-alpha.png");
alphaMap.wrapS = THREE.RepeatWrapping;
alphaMap.wrapT = THREE.RepeatWrapping;

THREE.RoadShader = {
	transparent: true,
	fog: true,
	uniforms: {
	"tDiffuse": { type: "t", value: null },
	"tNoise": { type: "t", value: flim_noise },
	"tAlpha": { type: "t", value: alphaMap },
	"uTime": { type: "f", value: 0.0 },
	"fogColor":    { type: "c", value: 0xffffff },
	"fogNear":     { type: "f", value: 0 },
	"fogFar":      { type: "f", value: 50 }
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
		"uniform sampler2D tNoise;",
		"uniform float uTime;",

		"varying vec2 vUv;",
		//"varying vec3 vEye;",


		"void main() {",


			"float phase = 1. * abs( sin( uTime * .0001 ) );",
			"vec4 tex = texture2D( tNoise, vec2(vUv.x, vUv.y *12. - (uTime * .00035)));",


			"gl_FragColor = vec4(vec3(tex.r * 1.0,tex.g * 1.0,tex.b * 1.0), 1.0);",


		"}"

	].join("\n")

};



THREE.SEMShader = {
	uniforms:
	{
				'tNormal': { type: 't', value:null},
				'tMatCap': { type: 't', value: textureLoader.load('assets/images/flathorizon-matcap.png')},
				'noise': { type: 'f', value: .04 },
				'repeat': { type: 'v2', value: new THREE.Vector2( 4, 4) },
				'useNormal': { type: 'f', value: 0. },
				'useRim': { type: 'f', value: 1. },
				'rimPower': { type: 'f', value: 10 },
				'useScreen': { type: 'f', value: 1. },
				'normalScale': { type: 'f', value: 1. },
				'normalRepeat': { type: 'f', value: 1. }
			},

	vertexShader: [

		"attribute vec4 tangent;",

		"uniform float time;",
		"uniform vec2 repeat;",
		"uniform float useNormal;",
		"uniform float useRim;",
		"varying vec2 vUv;",
		"varying vec3 vTangent;",
		"varying vec3 vBinormal;",
		"varying vec3 vNormal;",
		"varying vec3 vEye;",
		"varying vec3 vU;",
		"varying vec2 vN;",

		"void main() {",

			"vU = normalize( vec3( modelViewMatrix * vec4( position, 1.0 ) ) );",

			"if( useNormal == 0. ) {",
			"	vec3 n = normalize( normalMatrix * normal );",
			"	vec3 r = reflect( vU, n );",
			"	float m = 2.0 * sqrt( r.x * r.x + r.y * r.y + ( r.z + 1.0 ) * ( r.z+1.0 ) );",
			"	vN = vec2( r.x / m + 0.5,  r.y / m + 0.5 );",
			"} else {",
			"	vN = vec2( 0. );",
			"}",

			"vUv = repeat * uv;",
			"gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );",

			"vNormal = normalize( normalMatrix * normal );",
			"if( useNormal == 1. ) {",
			"	vTangent = normalize( normalMatrix * tangent.xyz );",
			"	vBinormal = normalize( cross( vNormal, vTangent ) * tangent.w );",
			"} else {",
			"	vTangent = vec3( 0. );",
			"	vBinormal = vec3( 0. );",
			"}",

			"if( useRim > 0. ) {",

			"} else {",
			"	vEye = vec3( 0. );",
			"}",

		"}"
	].join("\n"),

	fragmentShader: [

		"uniform float time;",
		"uniform sampler2D tNormal;",
		"uniform sampler2D tMatCap;",
		"uniform float noise;",
		"uniform float useNormal;",
		"uniform float useRim;",
		"uniform float rimPower;",
		"uniform float useScreen;",
		"uniform float normalScale;",
		"uniform float normalRepeat;",

		"varying vec2 vUv;",
		"varying vec3 vTangent;",
		"varying vec3 vBinormal;",
		"varying vec3 vNormal;",
		"varying vec3 vEye;",
		"varying vec3 vU;",
		"varying vec2 vN;",

		"float random(vec3 scale,float seed){return fract(sin(dot(gl_FragCoord.xyz+seed,scale))*43758.5453+seed);}",

		"void main() {",

		"	vec3 finalNormal = vNormal;",
		"	vec2 calculatedNormal = vN;",


		"	if( useNormal == 1. ) {",
		"		vec3 normalTex = texture2D( tNormal, vUv * normalRepeat ).xyz * 2.0 - 1.0;",
		"		normalTex.xy *= normalScale;",
		"		normalTex.y *= -1.;",
		"		normalTex = normalize( normalTex );",
		"		mat3 tsb = mat3( normalize( vTangent ), normalize( vBinormal ), normalize( vNormal ) );",
		"		finalNormal = tsb * normalTex;",

		"		vec3 r = reflect( vU, normalize( finalNormal ) );",
		"		float m = 2.0 * sqrt( r.x * r.x + r.y * r.y + ( r.z + 1.0 ) * ( r.z+1.0 ) );",
		"		calculatedNormal = vec2( r.x / m + 0.5,  r.y / m + 0.5 );",
		"	}",

		"	vec3 base = texture2D( tMatCap, calculatedNormal ).rgb;",

		// rim lighting

		"	if( useRim > 0. ) {",
		"		float f = rimPower * abs( dot( vNormal, normalize( vEye ) ) );",
		"		f = useRim * ( 1. - smoothstep( 0.0, 1., f ) );",
		"				base += vec3( f );",
		"		}",

		// screen blending

		"	if( useScreen == 1. ) {",
		"		base = vec3( 1. ) - ( vec3( 1. ) - base ) * ( vec3( 1. ) - base );",
		"	}",

		// noise

		"	base += noise * ( .5 - random( vec3( 1. ), length( gl_FragCoord ) ) );",

		"	gl_FragColor = vec4( base, 1. );",

		"}"
	].join("\n")
}

/*
 * A speed-improved perlin and simplex noise algorithms for 2D.
 *
 * Based on example code by Stefan Gustavson (stegu@itn.liu.se).
 * Optimisations by Peter Eastman (peastman@drizzle.stanford.edu).
 * Better rank ordering method by Stefan Gustavson in 2012.
 * Converted to Javascript by Joseph Gentle.
 *
 * Version 2012-03-09
 *
 * This code was placed in the public domain by its original author,
 * Stefan Gustavson. You may use it as you see fit, but
 * attribution is appreciated.
 *
 */

;(function(global){
  var module = global.noise = {};

  function Grad(x, y, z) {
    this.x = x; this.y = y; this.z = z;
  }
  
  Grad.prototype.dot2 = function(x, y) {
    return this.x*x + this.y*y;
  };

  Grad.prototype.dot3 = function(x, y, z) {
    return this.x*x + this.y*y + this.z*z;
  };

  var grad3 = [new Grad(1,1,0),new Grad(-1,1,0),new Grad(1,-1,0),new Grad(-1,-1,0),
               new Grad(1,0,1),new Grad(-1,0,1),new Grad(1,0,-1),new Grad(-1,0,-1),
               new Grad(0,1,1),new Grad(0,-1,1),new Grad(0,1,-1),new Grad(0,-1,-1)];

  var p = [151,160,137,91,90,15,
  131,13,201,95,96,53,194,233,7,225,140,36,103,30,69,142,8,99,37,240,21,10,23,
  190, 6,148,247,120,234,75,0,26,197,62,94,252,219,203,117,35,11,32,57,177,33,
  88,237,149,56,87,174,20,125,136,171,168, 68,175,74,165,71,134,139,48,27,166,
  77,146,158,231,83,111,229,122,60,211,133,230,220,105,92,41,55,46,245,40,244,
  102,143,54, 65,25,63,161, 1,216,80,73,209,76,132,187,208, 89,18,169,200,196,
  135,130,116,188,159,86,164,100,109,198,173,186, 3,64,52,217,226,250,124,123,
  5,202,38,147,118,126,255,82,85,212,207,206,59,227,47,16,58,17,182,189,28,42,
  223,183,170,213,119,248,152, 2,44,154,163, 70,221,153,101,155,167, 43,172,9,
  129,22,39,253, 19,98,108,110,79,113,224,232,178,185, 112,104,218,246,97,228,
  251,34,242,193,238,210,144,12,191,179,162,241, 81,51,145,235,249,14,239,107,
  49,192,214, 31,181,199,106,157,184, 84,204,176,115,121,50,45,127, 4,150,254,
  138,236,205,93,222,114,67,29,24,72,243,141,128,195,78,66,215,61,156,180];
  // To remove the need for index wrapping, double the permutation table length
  var perm = new Array(512);
  var gradP = new Array(512);

  // This isn't a very good seeding function, but it works ok. It supports 2^16
  // different seed values. Write something better if you need more seeds.
  module.seed = function(seed) {
    if(seed > 0 && seed < 1) {
      // Scale the seed out
      seed *= 65536;
    }

    seed = Math.floor(seed);
    if(seed < 256) {
      seed |= seed << 8;
    }

    for(var i = 0; i < 256; i++) {
      var v;
      if (i & 1) {
        v = p[i] ^ (seed & 255);
      } else {
        v = p[i] ^ ((seed>>8) & 255);
      }

      perm[i] = perm[i + 256] = v;
      gradP[i] = gradP[i + 256] = grad3[v % 12];
    }
  };

  module.seed(0);

  /*
  for(var i=0; i<256; i++) {
    perm[i] = perm[i + 256] = p[i];
    gradP[i] = gradP[i + 256] = grad3[perm[i] % 12];
  }*/

  // Skewing and unskewing factors for 2, 3, and 4 dimensions
  var F2 = 0.5*(Math.sqrt(3)-1);
  var G2 = (3-Math.sqrt(3))/6;

  var F3 = 1/3;
  var G3 = 1/6;

  // 2D simplex noise
  module.simplex2 = function(xin, yin) {
    var n0, n1, n2; // Noise contributions from the three corners
    // Skew the input space to determine which simplex cell we're in
    var s = (xin+yin)*F2; // Hairy factor for 2D
    var i = Math.floor(xin+s);
    var j = Math.floor(yin+s);
    var t = (i+j)*G2;
    var x0 = xin-i+t; // The x,y distances from the cell origin, unskewed.
    var y0 = yin-j+t;
    // For the 2D case, the simplex shape is an equilateral triangle.
    // Determine which simplex we are in.
    var i1, j1; // Offsets for second (middle) corner of simplex in (i,j) coords
    if(x0>y0) { // lower triangle, XY order: (0,0)->(1,0)->(1,1)
      i1=1; j1=0;
    } else {    // upper triangle, YX order: (0,0)->(0,1)->(1,1)
      i1=0; j1=1;
    }
    // A step of (1,0) in (i,j) means a step of (1-c,-c) in (x,y), and
    // a step of (0,1) in (i,j) means a step of (-c,1-c) in (x,y), where
    // c = (3-sqrt(3))/6
    var x1 = x0 - i1 + G2; // Offsets for middle corner in (x,y) unskewed coords
    var y1 = y0 - j1 + G2;
    var x2 = x0 - 1 + 2 * G2; // Offsets for last corner in (x,y) unskewed coords
    var y2 = y0 - 1 + 2 * G2;
    // Work out the hashed gradient indices of the three simplex corners
    i &= 255;
    j &= 255;
    var gi0 = gradP[i+perm[j]];
    var gi1 = gradP[i+i1+perm[j+j1]];
    var gi2 = gradP[i+1+perm[j+1]];
    // Calculate the contribution from the three corners
    var t0 = 0.5 - x0*x0-y0*y0;
    if(t0<0) {
      n0 = 0;
    } else {
      t0 *= t0;
      n0 = t0 * t0 * gi0.dot2(x0, y0);  // (x,y) of grad3 used for 2D gradient
    }
    var t1 = 0.5 - x1*x1-y1*y1;
    if(t1<0) {
      n1 = 0;
    } else {
      t1 *= t1;
      n1 = t1 * t1 * gi1.dot2(x1, y1);
    }
    var t2 = 0.5 - x2*x2-y2*y2;
    if(t2<0) {
      n2 = 0;
    } else {
      t2 *= t2;
      n2 = t2 * t2 * gi2.dot2(x2, y2);
    }
    // Add contributions from each corner to get the final noise value.
    // The result is scaled to return values in the interval [-1,1].
    return 70 * (n0 + n1 + n2);
  };

  // 3D simplex noise
  module.simplex3 = function(xin, yin, zin) {
    var n0, n1, n2, n3; // Noise contributions from the four corners

    // Skew the input space to determine which simplex cell we're in
    var s = (xin+yin+zin)*F3; // Hairy factor for 2D
    var i = Math.floor(xin+s);
    var j = Math.floor(yin+s);
    var k = Math.floor(zin+s);

    var t = (i+j+k)*G3;
    var x0 = xin-i+t; // The x,y distances from the cell origin, unskewed.
    var y0 = yin-j+t;
    var z0 = zin-k+t;

    // For the 3D case, the simplex shape is a slightly irregular tetrahedron.
    // Determine which simplex we are in.
    var i1, j1, k1; // Offsets for second corner of simplex in (i,j,k) coords
    var i2, j2, k2; // Offsets for third corner of simplex in (i,j,k) coords
    if(x0 >= y0) {
      if(y0 >= z0)      { i1=1; j1=0; k1=0; i2=1; j2=1; k2=0; }
      else if(x0 >= z0) { i1=1; j1=0; k1=0; i2=1; j2=0; k2=1; }
      else              { i1=0; j1=0; k1=1; i2=1; j2=0; k2=1; }
    } else {
      if(y0 < z0)      { i1=0; j1=0; k1=1; i2=0; j2=1; k2=1; }
      else if(x0 < z0) { i1=0; j1=1; k1=0; i2=0; j2=1; k2=1; }
      else             { i1=0; j1=1; k1=0; i2=1; j2=1; k2=0; }
    }
    // A step of (1,0,0) in (i,j,k) means a step of (1-c,-c,-c) in (x,y,z),
    // a step of (0,1,0) in (i,j,k) means a step of (-c,1-c,-c) in (x,y,z), and
    // a step of (0,0,1) in (i,j,k) means a step of (-c,-c,1-c) in (x,y,z), where
    // c = 1/6.
    var x1 = x0 - i1 + G3; // Offsets for second corner
    var y1 = y0 - j1 + G3;
    var z1 = z0 - k1 + G3;

    var x2 = x0 - i2 + 2 * G3; // Offsets for third corner
    var y2 = y0 - j2 + 2 * G3;
    var z2 = z0 - k2 + 2 * G3;

    var x3 = x0 - 1 + 3 * G3; // Offsets for fourth corner
    var y3 = y0 - 1 + 3 * G3;
    var z3 = z0 - 1 + 3 * G3;

    // Work out the hashed gradient indices of the four simplex corners
    i &= 255;
    j &= 255;
    k &= 255;
    var gi0 = gradP[i+   perm[j+   perm[k   ]]];
    var gi1 = gradP[i+i1+perm[j+j1+perm[k+k1]]];
    var gi2 = gradP[i+i2+perm[j+j2+perm[k+k2]]];
    var gi3 = gradP[i+ 1+perm[j+ 1+perm[k+ 1]]];

    // Calculate the contribution from the four corners
    var t0 = 0.6 - x0*x0 - y0*y0 - z0*z0;
    if(t0<0) {
      n0 = 0;
    } else {
      t0 *= t0;
      n0 = t0 * t0 * gi0.dot3(x0, y0, z0);  // (x,y) of grad3 used for 2D gradient
    }
    var t1 = 0.6 - x1*x1 - y1*y1 - z1*z1;
    if(t1<0) {
      n1 = 0;
    } else {
      t1 *= t1;
      n1 = t1 * t1 * gi1.dot3(x1, y1, z1);
    }
    var t2 = 0.6 - x2*x2 - y2*y2 - z2*z2;
    if(t2<0) {
      n2 = 0;
    } else {
      t2 *= t2;
      n2 = t2 * t2 * gi2.dot3(x2, y2, z2);
    }
    var t3 = 0.6 - x3*x3 - y3*y3 - z3*z3;
    if(t3<0) {
      n3 = 0;
    } else {
      t3 *= t3;
      n3 = t3 * t3 * gi3.dot3(x3, y3, z3);
    }
    // Add contributions from each corner to get the final noise value.
    // The result is scaled to return values in the interval [-1,1].
    return 32 * (n0 + n1 + n2 + n3);

  };

  // ##### Perlin noise stuff

  function fade(t) {
    return t*t*t*(t*(t*6-15)+10);
  }

  function lerp(a, b, t) {
    return (1-t)*a + t*b;
  }

  // 2D Perlin Noise
  module.perlin2 = function(x, y) {
    // Find unit grid cell containing point
    var X = Math.floor(x), Y = Math.floor(y);
    // Get relative xy coordinates of point within that cell
    x = x - X; y = y - Y;
    // Wrap the integer cells at 255 (smaller integer period can be introduced here)
    X = X & 255; Y = Y & 255;

    // Calculate noise contributions from each of the four corners
    var n00 = gradP[X+perm[Y]].dot2(x, y);
    var n01 = gradP[X+perm[Y+1]].dot2(x, y-1);
    var n10 = gradP[X+1+perm[Y]].dot2(x-1, y);
    var n11 = gradP[X+1+perm[Y+1]].dot2(x-1, y-1);

    // Compute the fade curve value for x
    var u = fade(x);

    // Interpolate the four results
    return lerp(
        lerp(n00, n10, u),
        lerp(n01, n11, u),
       fade(y));
  };

  // 3D Perlin Noise
  module.perlin3 = function(x, y, z) {
    // Find unit grid cell containing point
    var X = Math.floor(x), Y = Math.floor(y), Z = Math.floor(z);
    // Get relative xyz coordinates of point within that cell
    x = x - X; y = y - Y; z = z - Z;
    // Wrap the integer cells at 255 (smaller integer period can be introduced here)
    X = X & 255; Y = Y & 255; Z = Z & 255;

    // Calculate noise contributions from each of the eight corners
    var n000 = gradP[X+  perm[Y+  perm[Z  ]]].dot3(x,   y,     z);
    var n001 = gradP[X+  perm[Y+  perm[Z+1]]].dot3(x,   y,   z-1);
    var n010 = gradP[X+  perm[Y+1+perm[Z  ]]].dot3(x,   y-1,   z);
    var n011 = gradP[X+  perm[Y+1+perm[Z+1]]].dot3(x,   y-1, z-1);
    var n100 = gradP[X+1+perm[Y+  perm[Z  ]]].dot3(x-1,   y,   z);
    var n101 = gradP[X+1+perm[Y+  perm[Z+1]]].dot3(x-1,   y, z-1);
    var n110 = gradP[X+1+perm[Y+1+perm[Z  ]]].dot3(x-1, y-1,   z);
    var n111 = gradP[X+1+perm[Y+1+perm[Z+1]]].dot3(x-1, y-1, z-1);

    // Compute the fade curve value for x, y, z
    var u = fade(x);
    var v = fade(y);
    var w = fade(z);

    // Interpolate
    return lerp(
        lerp(
          lerp(n000, n100, u),
          lerp(n001, n101, u), w),
        lerp(
          lerp(n010, n110, u),
          lerp(n011, n111, u), w),
       v);
  };

})(this);

/**
 * @author alteredq / http://alteredqualia.com/
 */

THREE.EffectComposer = function ( renderer, renderTarget ) {

	this.renderer = renderer;

	if ( renderTarget === undefined ) {

		var parameters = {
			minFilter: THREE.LinearFilter,
			magFilter: THREE.LinearFilter,
			format: THREE.RGBAFormat,
			stencilBuffer: false
		};
		var size = renderer.getSize();
		renderTarget = new THREE.WebGLRenderTarget( size.width, size.height, parameters );

	}

	this.renderTarget1 = renderTarget;
	this.renderTarget2 = renderTarget.clone();

	this.writeBuffer = this.renderTarget1;
	this.readBuffer = this.renderTarget2;

	this.passes = [];

	if ( THREE.CopyShader === undefined )
		void 0;

	this.copyPass = new THREE.ShaderPass( THREE.CopyShader );

};

Object.assign( THREE.EffectComposer.prototype, {

	swapBuffers: function() {

		var tmp = this.readBuffer;
		this.readBuffer = this.writeBuffer;
		this.writeBuffer = tmp;

	},

	addPass: function ( pass ) {

		this.passes.push( pass );

		var size = this.renderer.getSize();
		pass.setSize( size.width, size.height );

	},

	insertPass: function ( pass, index ) {

		this.passes.splice( index, 0, pass );

	},

	render: function ( delta ) {

		var maskActive = false;

		var pass, i, il = this.passes.length;

		for ( i = 0; i < il; i ++ ) {

			pass = this.passes[ i ];

			if ( pass.enabled === false ) continue;

			pass.render( this.renderer, this.writeBuffer, this.readBuffer, delta, maskActive );

			if ( pass.needsSwap ) {

				if ( maskActive ) {

					var context = this.renderer.context;

					context.stencilFunc( context.NOTEQUAL, 1, 0xffffffff );

					this.copyPass.render( this.renderer, this.writeBuffer, this.readBuffer, delta );

					context.stencilFunc( context.EQUAL, 1, 0xffffffff );

				}

				this.swapBuffers();

			}

			if ( THREE.MaskPass !== undefined ) {

				if ( pass instanceof THREE.MaskPass ) {

					maskActive = true;

				} else if ( pass instanceof THREE.ClearMaskPass ) {

					maskActive = false;

				}

			}

		}

	},

	reset: function ( renderTarget ) {

		if ( renderTarget === undefined ) {

			var size = this.renderer.getSize();

			renderTarget = this.renderTarget1.clone();
			renderTarget.setSize( size.width, size.height );

		}

		this.renderTarget1.dispose();
		this.renderTarget2.dispose();
		this.renderTarget1 = renderTarget;
		this.renderTarget2 = renderTarget.clone();

		this.writeBuffer = this.renderTarget1;
		this.readBuffer = this.renderTarget2;

	},

	setSize: function ( width, height ) {

		this.renderTarget1.setSize( width, height );
		this.renderTarget2.setSize( width, height );

		for ( var i = 0; i < this.passes.length; i ++ ) {

			this.passes[i].setSize( width, height );

		}

	}

} );


THREE.Pass = function () {

	// if set to true, the pass is processed by the composer
	this.enabled = true;

	// if set to true, the pass indicates to swap read and write buffer after rendering
	this.needsSwap = true;

	// if set to true, the pass clears its buffer before rendering
	this.clear = false;

	// if set to true, the result of the pass is rendered to screen
	this.renderToScreen = false;

};

Object.assign( THREE.Pass.prototype, {

	setSize: function( width, height ) {},

	render: function ( renderer, writeBuffer, readBuffer, delta, maskActive ) {

		void 0;

	}

} );

/**
 * @author alteredq / http://alteredqualia.com/
 */

THREE.RenderPass = function ( scene, camera, overrideMaterial, clearColor, clearAlpha ) {

	THREE.Pass.call( this );

	this.scene = scene;
	this.camera = camera;

	this.overrideMaterial = overrideMaterial;

	this.clearColor = clearColor;
	this.clearAlpha = ( clearAlpha !== undefined ) ? clearAlpha : 0;

	this.clear = true;
	this.clearDepth = false;
	this.needsSwap = false;

};

THREE.RenderPass.prototype = Object.assign( Object.create( THREE.Pass.prototype ), {

	constructor: THREE.RenderPass,

	render: function ( renderer, writeBuffer, readBuffer, delta, maskActive ) {

		var oldAutoClear = renderer.autoClear;
		renderer.autoClear = false;

		this.scene.overrideMaterial = this.overrideMaterial;

		var oldClearColor, oldClearAlpha;

		if ( this.clearColor ) {

			oldClearColor = renderer.getClearColor().getHex();
			oldClearAlpha = renderer.getClearAlpha();

			renderer.setClearColor( this.clearColor, this.clearAlpha );

		}

		if ( this.clearDepth ) {

			renderer.clearDepth();

		}

		renderer.render( this.scene, this.camera, this.renderToScreen ? null : readBuffer, this.clear );

		if ( this.clearColor ) {

			renderer.setClearColor( oldClearColor, oldClearAlpha );

		}

		this.scene.overrideMaterial = null;
		renderer.autoClear = oldAutoClear;
	}

} );

/**
 * @author alteredq / http://alteredqualia.com/
 */

THREE.ShaderPass = function ( shader, textureID ) {

	THREE.Pass.call( this );

	this.textureID = ( textureID !== undefined ) ? textureID : "tDiffuse";

	if ( shader instanceof THREE.ShaderMaterial ) {

		this.uniforms = shader.uniforms;

		this.material = shader;

	} else if ( shader ) {

		this.uniforms = THREE.UniformsUtils.clone( shader.uniforms );

		this.material = new THREE.ShaderMaterial( {

			defines: shader.defines || {},
			uniforms: this.uniforms,
			vertexShader: shader.vertexShader,
			fragmentShader: shader.fragmentShader

		} );

	}

	this.camera = new THREE.OrthographicCamera( - 1, 1, 1, - 1, 0, 1 );
	this.scene = new THREE.Scene();

	this.quad = new THREE.Mesh( new THREE.PlaneBufferGeometry( 2, 2 ), null );
	this.quad.frustumCulled = false; // Avoid getting clipped
	this.scene.add( this.quad );

};

THREE.ShaderPass.prototype = Object.assign( Object.create( THREE.Pass.prototype ), {

	constructor: THREE.ShaderPass,

	render: function( renderer, writeBuffer, readBuffer, delta, maskActive ) {

		if ( this.uniforms[ this.textureID ] ) {

			this.uniforms[ this.textureID ].value = readBuffer.texture;

		}

		this.quad.material = this.material;

		if ( this.renderToScreen ) {

			renderer.render( this.scene, this.camera );

		} else {

			renderer.render( this.scene, this.camera, writeBuffer, this.clear );

		}

	}

} );

/**
 * @author alteredq / http://alteredqualia.com/
 */

THREE.SavePass = function ( renderTarget ) {

	THREE.Pass.call( this );

	if ( THREE.CopyShader === undefined )
		void 0;

	var shader = THREE.CopyShader;

	this.textureID = "tDiffuse";

	this.uniforms = THREE.UniformsUtils.clone( shader.uniforms );

	this.material = new THREE.ShaderMaterial( {

		uniforms: this.uniforms,
		vertexShader: shader.vertexShader,
		fragmentShader: shader.fragmentShader

	} );

	this.renderTarget = renderTarget;

	if ( this.renderTarget === undefined ) {

		this.renderTargetParameters = { minFilter: THREE.LinearFilter, magFilter: THREE.LinearFilter, format: THREE.RGBFormat, stencilBuffer: false };
		this.renderTarget = new THREE.WebGLRenderTarget( window.innerWidth, window.innerHeight, this.renderTargetParameters );

	}

	this.needsSwap = false;

	this.camera = new THREE.OrthographicCamera( - 1, 1, 1, - 1, 0, 1 );
	this.scene  = new THREE.Scene();

	this.quad = new THREE.Mesh( new THREE.PlaneBufferGeometry( 2, 2 ), null );
	this.quad.frustumCulled = false; // Avoid getting clipped
	this.scene.add( this.quad );

};

THREE.SavePass.prototype = Object.assign( Object.create( THREE.Pass.prototype ), {

	constructor: THREE.SavePass,

	render: function ( renderer, writeBuffer, readBuffer, delta, maskActive ) {

		if ( this.uniforms[ this.textureID ] ) {

			this.uniforms[ this.textureID ].value = readBuffer.texture;

		}

		this.quad.material = this.material;

		renderer.render( this.scene, this.camera, this.renderTarget, this.clear );

	}

} );

/**
 * @author alteredq / http://alteredqualia.com/
 *
 * Full-screen textured quad shader
 */

THREE.CopyShader = {

	uniforms: {

		"tDiffuse": { value: null },
		"opacity":  { value: 1.0 }

	},

	vertexShader: [

		"varying vec2 vUv;",

		"void main() {",

			"vUv = uv;",
			"gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );",

		"}"

	].join( "\n" ),

	fragmentShader: [

		"uniform float opacity;",

		"uniform sampler2D tDiffuse;",

		"varying vec2 vUv;",

		"void main() {",

			"vec4 texel = texture2D( tDiffuse, vUv );",
			"gl_FragColor = opacity * texel;",

		"}"

	].join( "\n" )

};

/**
 * @author alteredq / http://alteredqualia.com/
 *
 * Vignette shader
 * based on PaintEffect postprocess from ro.me
 * http://code.google.com/p/3-dreams-of-black/source/browse/deploy/js/effects/PaintEffect.js
 */

THREE.VignetteShader = {

	uniforms: {

		"tDiffuse": { type: "t", value: null },
		"offset":   { type: "f", value: 1.0 },
		"darkness": { type: "f", value: 1.0 }

	},

	vertexShader: [

		"varying vec2 vUv;",

		"void main() {",

			"vUv = uv;",
			"gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );",

		"}"

	].join("\n"),

	fragmentShader: [

		"uniform float offset;",
		"uniform float darkness;",

		"uniform sampler2D tDiffuse;",

		"varying vec2 vUv;",

		"void main() {",

			// Eskil's vignette

			"vec4 texel = texture2D( tDiffuse, vUv );",
			"vec2 uv = ( vUv - vec2( 0.5 ) ) * vec2( offset );",
			"gl_FragColor = vec4( mix( texel.rgb, vec3( 1.0 - darkness ), dot( uv, uv ) ), texel.a );",

			/*
			// alternative version from glfx.js
			// this one makes more "dusty" look (as opposed to "burned")

			"vec4 color = texture2D( tDiffuse, vUv );",
			"float dist = distance( vUv, vec2( 0.5 ) );",
			"color.rgb *= smoothstep( 0.8, offset * 0.799, dist *( darkness + offset ) );",
			"gl_FragColor = color;",
			*/

		"}"

	].join("\n")

};



THREE.GrainShader = {

	uniforms: {

		"tDiffuse":   { value: null },
		"time":       { value: 0.0 },
		"nIntensity": { value: 0.5 },
		"sIntensity": { value: 0.05 },
		"sCount":     { value: 4096 },
		"grayscale":  { value: 1 }

	},

	vertexShader: [

		"varying vec2 vUv;",

		"void main() {",

			"vUv = uv;",
			"gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );",

		"}"

	].join( "\n" ),

	fragmentShader: [

		"#include <common>",

		// control parameter
		"uniform float time;",

		"uniform bool grayscale;",

		// noise effect intensity value (0 = no effect, 1 = full effect)
		"uniform float nIntensity;",

		// scanlines effect intensity value (0 = no effect, 1 = full effect)
		"uniform float sIntensity;",

		// scanlines effect count value (0 = no effect, 4096 = full effect)
		"uniform float sCount;",

		"uniform sampler2D tDiffuse;",

		"varying vec2 vUv;",

		"void main() {",

			// sample the source
			"vec4 cTextureScreen = texture2D( tDiffuse, vUv );",

			// make some noise
			"float dx = rand( vUv + 0.43 );",

			// add noise
			"vec3 cResult = cTextureScreen.rgb + 0.2 * cTextureScreen.rgb * dx - 0.1;",//cTextureScreen.rgb * clamp( -0.1 + dx, 0.0, 0.3 );",

			// // get us a sine and cosine
			// "vec2 sc = vec2( sin( vUv.y * sCount ), cos( vUv.y * sCount ) );",
			//
			// // add scanlines
			// "cResult += cTextureScreen.rgb * vec3( sc.x, sc.y, sc.x ) * sIntensity;",
			//
			// // interpolate between source and result by intensity
			// "cResult = cTextureScreen.rgb + clamp( nIntensity, 0.0,1.0 ) * ( cResult - cTextureScreen.rgb );",
			//
			// // convert to grayscale if desired
			// "if( grayscale ) {",
			//
			// 	"cResult = vec3( cResult.r * 0.3 + cResult.g * 0.59 + cResult.b * 0.11 );",
			//
			// "}",

			"gl_FragColor =  vec4( cResult, cTextureScreen.a );",

		"}"

	].join( "\n" )

};



THREE.GrainPass = function ( noiseIntensity, scanlinesIntensity, scanlinesCount, grayscale ) {

	THREE.Pass.call( this );

	if ( THREE.GrainShader === undefined )
		void 0;

	var shader = THREE.GrainShader;

	this.uniforms = THREE.UniformsUtils.clone( shader.uniforms );

	this.material = new THREE.ShaderMaterial( {

		uniforms: this.uniforms,
		vertexShader: shader.vertexShader,
		fragmentShader: shader.fragmentShader

	} );

	if ( grayscale !== undefined )	this.uniforms.grayscale.value = grayscale;
	if ( noiseIntensity !== undefined ) this.uniforms.nIntensity.value = noiseIntensity;
	if ( scanlinesIntensity !== undefined ) this.uniforms.sIntensity.value = scanlinesIntensity;
	if ( scanlinesCount !== undefined ) this.uniforms.sCount.value = scanlinesCount;

	this.camera = new THREE.OrthographicCamera( - 1, 1, 1, - 1, 0, 1 );
	this.scene  = new THREE.Scene();

	this.quad = new THREE.Mesh( new THREE.PlaneBufferGeometry( 2, 2 ), null );
	this.quad.frustumCulled = false; // Avoid getting clipped
	this.scene.add( this.quad );

};

THREE.GrainPass.prototype = Object.assign( Object.create( THREE.Pass.prototype ), {

	constructor: THREE.GrainPass,

	render: function ( renderer, writeBuffer, readBuffer, delta, maskActive ) {

		this.uniforms[ "tDiffuse" ].value = readBuffer.texture;
		this.uniforms[ "time" ].value += delta;

		this.quad.material = this.material;

		if ( this.renderToScreen ) {

			renderer.render( this.scene, this.camera );

		} else {

			renderer.render( this.scene, this.camera, writeBuffer, this.clear );

		}

	}

} );

/*
 2017 Julian Garnier
 Released under the MIT license
*/
var $jscomp$this=this;
(function(v,p){"function"===typeof define&&define.amd?define([],p):"object"===typeof module&&module.exports?module.exports=p():v.anime=p()})(this,function(){function v(a){if(!g.col(a))try{return document.querySelectorAll(a)}catch(b){}}function p(a){return a.reduce(function(a,d){return a.concat(g.arr(d)?p(d):d)},[])}function w(a){if(g.arr(a))return a;g.str(a)&&(a=v(a)||a);return a instanceof NodeList||a instanceof HTMLCollection?[].slice.call(a):[a]}function F(a,b){return a.some(function(a){return a===b})}
function A(a){var b={},d;for(d in a)b[d]=a[d];return b}function G(a,b){var d=A(a),c;for(c in a)d[c]=b.hasOwnProperty(c)?b[c]:a[c];return d}function B(a,b){var d=A(a),c;for(c in b)d[c]=g.und(a[c])?b[c]:a[c];return d}function S(a){a=a.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,function(a,b,d,h){return b+b+d+d+h+h});var b=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(a);a=parseInt(b[1],16);var d=parseInt(b[2],16),b=parseInt(b[3],16);return"rgb("+a+","+d+","+b+")"}function T(a){function b(a,b,c){0>
c&&(c+=1);1<c&&--c;return c<1/6?a+6*(b-a)*c:.5>c?b:c<2/3?a+(b-a)*(2/3-c)*6:a}var d=/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(a);a=parseInt(d[1])/360;var c=parseInt(d[2])/100,d=parseInt(d[3])/100;if(0==c)c=d=a=d;else{var e=.5>d?d*(1+c):d+c-d*c,l=2*d-e,c=b(l,e,a+1/3),d=b(l,e,a);a=b(l,e,a-1/3)}return"rgb("+255*c+","+255*d+","+255*a+")"}function x(a){if(a=/([\+\-]?[0-9#\.]+)(%|px|pt|em|rem|in|cm|mm|ex|pc|vw|vh|deg|rad|turn)?/.exec(a))return a[2]}function U(a){if(-1<a.indexOf("translate"))return"px";
if(-1<a.indexOf("rotate")||-1<a.indexOf("skew"))return"deg"}function H(a,b){return g.fnc(a)?a(b.target,b.id,b.total):a}function C(a,b){if(b in a.style)return getComputedStyle(a).getPropertyValue(b.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase())||"0"}function I(a,b){if(g.dom(a)&&F(V,b))return"transform";if(g.dom(a)&&(a.getAttribute(b)||g.svg(a)&&a[b]))return"attribute";if(g.dom(a)&&"transform"!==b&&C(a,b))return"css";if(null!=a[b])return"object"}function W(a,b){var d=U(b),d=-1<b.indexOf("scale")?
1:0+d;a=a.style.transform;if(!a)return d;for(var c=[],e=[],l=[],h=/(\w+)\((.+?)\)/g;c=h.exec(a);)e.push(c[1]),l.push(c[2]);a=l.filter(function(a,c){return e[c]===b});return a.length?a[0]:d}function J(a,b){switch(I(a,b)){case "transform":return W(a,b);case "css":return C(a,b);case "attribute":return a.getAttribute(b)}return a[b]||0}function K(a,b){var d=/^(\*=|\+=|-=)/.exec(a);if(!d)return a;b=parseFloat(b);a=parseFloat(a.replace(d[0],""));switch(d[0][0]){case "+":return b+a;case "-":return b-a;case "*":return b*
a}}function D(a){return g.obj(a)&&a.hasOwnProperty("totalLength")}function X(a,b){function d(c){c=void 0===c?0:c;return a.el.getPointAtLength(1<=b+c?b+c:0)}var c=d(),e=d(-1),l=d(1);switch(a.property){case "x":return c.x;case "y":return c.y;case "angle":return 180*Math.atan2(l.y-e.y,l.x-e.x)/Math.PI}}function L(a,b){var d=/-?\d*\.?\d+/g;a=D(a)?a.totalLength:a;if(g.col(a))b=g.rgb(a)?a:g.hex(a)?S(a):g.hsl(a)?T(a):void 0;else{var c=x(a);a=c?a.substr(0,a.length-c.length):a;b=b?a+b:a}b+="";return{original:b,
numbers:b.match(d)?b.match(d).map(Number):[0],strings:b.split(d)}}function Y(a,b){return b.reduce(function(b,c,e){return b+a[e-1]+c})}function M(a){return(a?p(g.arr(a)?a.map(w):w(a)):[]).filter(function(a,d,c){return c.indexOf(a)===d})}function Z(a){var b=M(a);return b.map(function(a,c){return{target:a,id:c,total:b.length}})}function aa(a,b){var d=A(b);if(g.arr(a)){var c=a.length;2!==c||g.obj(a[0])?g.fnc(b.duration)||(d.duration=b.duration/c):a={value:a}}return w(a).map(function(a,c){c=c?0:b.delay;
a=g.obj(a)&&!D(a)?a:{value:a};g.und(a.delay)&&(a.delay=c);return a}).map(function(a){return B(a,d)})}function ba(a,b){var d={},c;for(c in a){var e=H(a[c],b);g.arr(e)&&(e=e.map(function(a){return H(a,b)}),1===e.length&&(e=e[0]));d[c]=e}d.duration=parseFloat(d.duration);d.delay=parseFloat(d.delay);return d}function ca(a){return g.arr(a)?y.apply(this,a):N[a]}function da(a,b){var d;return a.tweens.map(function(c){c=ba(c,b);var e=c.value,l=J(b.target,a.name),h=d?d.to.original:l,h=g.arr(e)?e[0]:h,m=K(g.arr(e)?
e[1]:e,h),l=x(m)||x(h)||x(l);c.isPath=D(e);c.from=L(h,l);c.to=L(m,l);c.start=d?d.end:a.offset;c.end=c.start+c.delay+c.duration;c.easing=ca(c.easing);c.elasticity=(1E3-Math.min(Math.max(c.elasticity,1),999))/1E3;g.col(c.from.original)&&(c.round=1);return d=c})}function ea(a,b){return p(a.map(function(a){return b.map(function(b){var c=I(a.target,b.name);if(c){var d=da(b,a);b={type:c,property:b.name,animatable:a,tweens:d,duration:d[d.length-1].end,delay:d[0].delay}}else b=void 0;return b})})).filter(function(a){return!g.und(a)})}
function O(a,b,d){var c="delay"===a?Math.min:Math.max;return b.length?c.apply(Math,b.map(function(b){return b[a]})):d[a]}function fa(a){var b=G(ga,a),d=G(ha,a),c=Z(a.targets),e=[],g=B(b,d),h;for(h in a)g.hasOwnProperty(h)||"targets"===h||e.push({name:h,offset:g.offset,tweens:aa(a[h],d)});a=ea(c,e);return B(b,{children:[],animatables:c,animations:a,duration:O("duration",a,d),delay:O("delay",a,d)})}function n(a){function b(){return window.Promise&&new Promise(function(a){return Q=a})}function d(a){return f.reversed?
f.duration-a:a}function c(a){for(var b=0,c={},d=f.animations,e={};b<d.length;){var g=d[b],h=g.animatable,m=g.tweens;e.tween=m.filter(function(b){return a<b.end})[0]||m[m.length-1];e.isPath$1=e.tween.isPath;e.round=e.tween.round;e.eased=e.tween.easing(Math.min(Math.max(a-e.tween.start-e.tween.delay,0),e.tween.duration)/e.tween.duration,e.tween.elasticity);m=Y(e.tween.to.numbers.map(function(a){return function(b,c){c=a.isPath$1?0:a.tween.from.numbers[c];b=c+a.eased*(b-c);a.isPath$1&&(b=X(a.tween.value,
b));a.round&&(b=Math.round(b*a.round)/a.round);return b}}(e)),e.tween.to.strings);ia[g.type](h.target,g.property,m,c,h.id);g.currentValue=m;b++;e={isPath$1:e.isPath$1,tween:e.tween,eased:e.eased,round:e.round}}if(c)for(var k in c)E||(E=C(document.body,"transform")?"transform":"-webkit-transform"),f.animatables[k].target.style[E]=c[k].join(" ");f.currentTime=a;f.progress=a/f.duration*100}function e(a){if(f[a])f[a](f)}function g(){f.remaining&&!0!==f.remaining&&f.remaining--}function h(a){var h=f.duration,
l=f.offset,n=f.delay,P=f.currentTime,q=f.reversed,r=d(a),r=Math.min(Math.max(r,0),h);if(f.children){var p=f.children;if(r>=f.currentTime)for(var u=0;u<p.length;u++)p[u].seek(r);else for(u=p.length;u--;)p[u].seek(r)}r>l&&r<h?(c(r),!f.began&&r>=n&&(f.began=!0,e("begin")),e("run")):(r<=l&&0!==P&&(c(0),q&&g()),r>=h&&P!==h&&(c(h),q||g()));a>=h&&(f.remaining?(t=m,"alternate"===f.direction&&(f.reversed=!f.reversed)):(f.pause(),"Promise"in window&&(Q(),R=b()),f.completed||(f.completed=!0,e("complete"))),
k=0);e("update")}a=void 0===a?{}:a;var m,t,k=0,Q=null,R=b(),f=fa(a);f.reset=function(){var a=f.direction,b=f.loop;f.currentTime=0;f.progress=0;f.paused=!0;f.began=!1;f.completed=!1;f.reversed="reverse"===a;f.remaining="alternate"===a&&1===b?2:b;for(a=f.children.length;a--;)b=f.children[a],b.seek(b.offset),b.reset()};f.tick=function(a){m=a;t||(t=m);h((k+m-t)*n.speed)};f.seek=function(a){h(d(a))};f.pause=function(){var a=q.indexOf(f);-1<a&&q.splice(a,1);f.paused=!0};f.play=function(){f.paused&&(f.paused=
!1,t=0,k=d(f.currentTime),q.push(f),z||ja())};f.reverse=function(){f.reversed=!f.reversed;t=0;k=d(f.currentTime)};f.restart=function(){f.pause();f.reset();f.play()};f.finished=R;f.reset();f.autoplay&&f.play();return f}var ga={update:void 0,begin:void 0,run:void 0,complete:void 0,loop:1,direction:"normal",autoplay:!0,offset:0},ha={duration:1E3,delay:0,easing:"easeOutElastic",elasticity:500,round:0},V="translateX translateY translateZ rotate rotateX rotateY rotateZ scale scaleX scaleY scaleZ skewX skewY".split(" "),
E,g={arr:function(a){return Array.isArray(a)},obj:function(a){return-1<Object.prototype.toString.call(a).indexOf("Object")},svg:function(a){return a instanceof SVGElement},dom:function(a){return a.nodeType||g.svg(a)},str:function(a){return"string"===typeof a},fnc:function(a){return"function"===typeof a},und:function(a){return"undefined"===typeof a},hex:function(a){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(a)},rgb:function(a){return/^rgb/.test(a)},hsl:function(a){return/^hsl/.test(a)},col:function(a){return g.hex(a)||
g.rgb(a)||g.hsl(a)}},y=function(){function a(a,d,c){return(((1-3*c+3*d)*a+(3*c-6*d))*a+3*d)*a}return function(b,d,c,e){if(0<=b&&1>=b&&0<=c&&1>=c){var g=new Float32Array(11);if(b!==d||c!==e)for(var h=0;11>h;++h)g[h]=a(.1*h,b,c);return function(h){if(b===d&&c===e)return h;if(0===h)return 0;if(1===h)return 1;for(var m=0,k=1;10!==k&&g[k]<=h;++k)m+=.1;--k;var k=m+(h-g[k])/(g[k+1]-g[k])*.1,l=3*(1-3*c+3*b)*k*k+2*(3*c-6*b)*k+3*b;if(.001<=l){for(m=0;4>m;++m){l=3*(1-3*c+3*b)*k*k+2*(3*c-6*b)*k+3*b;if(0===l)break;
var n=a(k,b,c)-h,k=k-n/l}h=k}else if(0===l)h=k;else{var k=m,m=m+.1,f=0;do n=k+(m-k)/2,l=a(n,b,c)-h,0<l?m=n:k=n;while(1e-7<Math.abs(l)&&10>++f);h=n}return a(h,d,e)}}}}(),N=function(){function a(a,b){return 0===a||1===a?a:-Math.pow(2,10*(a-1))*Math.sin(2*(a-1-b/(2*Math.PI)*Math.asin(1))*Math.PI/b)}var b="Quad Cubic Quart Quint Sine Expo Circ Back Elastic".split(" "),d={In:[[.55,.085,.68,.53],[.55,.055,.675,.19],[.895,.03,.685,.22],[.755,.05,.855,.06],[.47,0,.745,.715],[.95,.05,.795,.035],[.6,.04,.98,
.335],[.6,-.28,.735,.045],a],Out:[[.25,.46,.45,.94],[.215,.61,.355,1],[.165,.84,.44,1],[.23,1,.32,1],[.39,.575,.565,1],[.19,1,.22,1],[.075,.82,.165,1],[.175,.885,.32,1.275],function(b,c){return 1-a(1-b,c)}],InOut:[[.455,.03,.515,.955],[.645,.045,.355,1],[.77,0,.175,1],[.86,0,.07,1],[.445,.05,.55,.95],[1,0,0,1],[.785,.135,.15,.86],[.68,-.55,.265,1.55],function(b,c){return.5>b?a(2*b,c)/2:1-a(-2*b+2,c)/2}]},c={linear:y(.25,.25,.75,.75)},e={},l;for(l in d)e.type=l,d[e.type].forEach(function(a){return function(d,
e){c["ease"+a.type+b[e]]=g.fnc(d)?d:y.apply($jscomp$this,d)}}(e)),e={type:e.type};return c}(),ia={css:function(a,b,d){return a.style[b]=d},attribute:function(a,b,d){return a.setAttribute(b,d)},object:function(a,b,d){return a[b]=d},transform:function(a,b,d,c,e){c[e]||(c[e]=[]);c[e].push(b+"("+d+")")}},q=[],z=0,ja=function(){function a(){z=requestAnimationFrame(b)}function b(b){var c=q.length;if(c){for(var d=0;d<c;)q[d]&&q[d].tick(b),d++;a()}else cancelAnimationFrame(z),z=0}return a}();n.version="2.0.2";
n.speed=1;n.running=q;n.remove=function(a){a=M(a);for(var b=q.length;b--;)for(var d=q[b],c=d.animations,e=c.length;e--;)F(a,c[e].animatable.target)&&(c.splice(e,1),c.length||d.pause())};n.getValue=J;n.path=function(a,b){var d=g.str(a)?v(a)[0]:a,c=b||100;return function(a){return{el:d,property:a,totalLength:d.getTotalLength()*(c/100)}}};n.setDashoffset=function(a){var b=a.getTotalLength();a.setAttribute("stroke-dasharray",b);return b};n.bezier=y;n.easings=N;n.timeline=function(a){var b=n(a);b.pause();
b.duration=0;b.add=function(a){b.children.forEach(function(a){a.began=!0;a.completed=!0});w(a).forEach(function(a){var c=b.duration,d=a.offset;a.autoplay=!1;a.offset=g.und(d)?c:K(d,c);b.seek(a.offset);a=n(a);a.duration>c&&(b.duration=a.duration);a.began=!0;b.children.push(a)});b.reset();b.seek(0);b.autoplay&&b.restart();return b};return b};n.random=function(a,b){return Math.floor(Math.random()*(b-a+1))+a};return n});
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
		void 0
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
			void 0

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
		void 0
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


// elements //

var menuItems = document.querySelectorAll('a');
var menuPage = document.getElementById('menu')
var menuButton = document.querySelector('.menu-button');
var slider = document.querySelector('#portfolio')
var figures = document.querySelectorAll('figure');
var article = document.querySelector('#article-content')
var statusMessage = document.getElementById('statusMessage');
var firstFormInput = document.getElementById('input-name')
var allFormInputs = document.querySelectorAll('input, textarea')

var menuActive = false;

var menuAnimDuration = 1000;



// menu-opening/closing //

var menuMorphing = anime({
  targets: '#menu-expander #morpher',
	d: [
  	{value: "M21.065,91.559L12.447,86.319L6.546,81.279L0,80.529L0,100L24.32,100L23.48,94.925L21.065,91.559Z"},
		{value:"M33.539,67.615L24.32,60.597L10.254,62.929L0,47.865L0,100L69.593,100L37.564,83.119L33.539,67.615Z" },
		{value:"M83.714,47.865L62.342,47.865L32.271,37.204L0,7.396L0,100L94.785,100L90.704,60.385L83.714,47.865Z" },
		{value:"M82.863,28.993L61.74,10.1L34.796,0L0,0L0,100L100,100L100,59.242L82.863,28.993Z" },
		{value:"M100,0L82.991,0L69.593,0L0,0L0,100L100,100L100,59.242L100,0Z" }
  ],
  opacity: [
	 	{value:0.3},
	  {value:0.4},
		{value:0.6},
	  {value:0.8},
	  {value:0.9} 
  ],
  easing: 'easeInQuad',
  duration: menuAnimDuration,
  loop: false,
  autoplay: false,
  direction: 'alternate',
})

menuButton.addEventListener('click', onMenuButtonClick)

function onMenuButtonClick() {
	if (menuActive) {
		menuMorphing.play();
		menuMorphing.reverse() 
	} else {
		menuMorphing.play();
	}
	
	menuMorphing.complete = function() { 
		menuActive = !menuActive;

	};
	
  document.body.classList.toggle('menu-active')
  window.history.pushState(null, document.title, '/');
  menuPage.className = 'active-starter';
 
	void 0
}





// nav-menu //


for (var i=0; i<menuItems.length; i++) {
	void 0
	menuItems[i].addEventListener('click', onNavClick, false)
}

function onNavClick(e) {
	//console.log(e.target.className);
	//e.preventDefault();

	if (e.target.className.includes('internal-link')) {
		e.preventDefault();
		void 0
		var pageName = e.target.pathname.slice(1);
		menuPage.className = 'active-' + pageName;
		window.history.pushState(null, document.title, '/' + pageName);
	
		// reset stuff:
		if (pageName == 'contact') resetForm(true)
	} else {
		return false;
	}
	
}







// portfolio //


for (var i=0; i<figures.length; i++) {
  figures[i].addEventListener('click', focus)
}

function focus(e){
  var sel = e.target.id || e.target.parentNode.id
  sel = sel.split('-').pop()
  void 0
    slider.classList = 'active-'+sel;
  for (var i=0; i < figures.length; i++) {
    figures[i].classList='';
  }
  figures[sel-1].classList = 'active';
  void 0
  article.innerHTML = figures[sel-1].childNodes[5].innerHTML;
}
 
 
 
 
 
 
  
  
  
// form //

document.getElementById('sendForm').addEventListener('click', function(e) {
	e.preventDefault();
	void 0


	var inputName = document.getElementById("input-name").value;
	var inputEmail = document.getElementById("input-email").value;
	var inputMsg = document.getElementById("input-message").value;

	if (inputName=='' ||inputEmail==''||inputMsg=='') {
		statusMessage.classList.remove('hidden')
		statusMessage.innerHTML = 'Please complete all the fields';
		return false;
	}
	
	$.ajax({
    url: 'https://formspree.io/' + 'nicholas.guest' + '@' + 'gmail' + '.' + 'com', 
    method: 'POST',
    data: {
	    'Name': inputName,
	    'Email' : inputEmail,
	    'Message' : inputMsg
		},
    dataType: 'json',
    beforeSend: function(resp) {
	    void 0
	    statusMessage.classList.remove('hidden')
			statusMessage.innerHTML = 'Message Sending ...';
  	},
		success: function(resp) {
			void 0
			statusMessage.classList.remove('hidden')
			statusMessage.innerHTML = 'Thanks! We will respond shortly';
			inputName = inputEmail = inputMsg = '';
			resetForm(false);
  	},
		error: function(resp) {
							void 0
	    statusMessage.classList.remove('hidden');
			statusMessage.innerHTML = 'Unfortunately something went wrong- please try again';

  	}	
  });
  
  return false;

})

statusMessage.addEventListener('click', function(e) {
  statusMessage.classList.add('hidden');
})


function resetForm(statusHidden) {
	//firstFormInput.focus();
	for (var i=0; i<allFormInputs.length; i++) {
		allFormInputs[i].value = '';
	}
	if (statusHidden) statusMessage.classList.add('hidden');
}


var u = 'guestn'
var p = 'zl1381newbie'
var a = 'nicholas.guest@gmail.com'
var s = 'subject line'
var b = 'this is a test';
var f = 'nicholas.guest@gmail.com'

var str = 'api_user='+u+'&api_key='+p+'&to='+a+'&toname=Destination&subject='+a+'&text='+b+'&from='+f;


function sendMail() {

  var url = "//api.sendgrid.com/api/blocks.get.json";
  var url = url+str;
  //var xhr = new XMLHttpRequest();


  var request = new XMLHttpRequest();
  if("withCredentials" in request) {
   // Firefox 3.5 and Safari 4
   request.open('POST', url, true);

   request.setRequestHeader('Access-Control-Allow-Origin', '*');

   request.setRequestHeader('Access-Control-Allow-Methods', 'GET');


   request.onreadystatechange = handler;
   request.send();
   //xhr.send(params);

  } else if (XDomainRequest) {
   // IE8
   var xdr = new XDomainRequest();
   xdr.open("post", url);
   xdr.send();
  }


  //xhr.open("POST", url, true);

  //Send the proper header information along with the request
  //xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
}

var sendButton = document.getElementById('send');
//sendButton.addEventListener('click',sendMail)

function handler() {
  void 0
}

  //
  //
  // var request = new XMLHttpRequest();
  // if("withCredentials" in request) {
  //  // Firefox 3.5 and Safari 4
  //  request.open('POST', url, true);
  //  request.onreadystatechange = handler;
  //  request.send();
  // } else if (XDomainRequest) {
  //  // IE8
  //  var xdr = new XDomainRequest();
  //  xdr.open("post", url);
  //  xdr.send();
  // }

/*! jQuery v2.1.1 -css,-css/addGetHookIf,-css/curCSS,-css/defaultDisplay,-css/hiddenVisibleSelectors,-css/support,-css/swap,-css/var/cssExpand,-css/var/getStyles,-css/var/isHidden,-css/var/rmargin,-css/var/rnumnonpx,-effects,-effects/Tween,-effects/animatedSelector,-dimensions,-offset,-deprecated,-event-alias,-wrap | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l=a.document,m="2.1.1 -css,-css/addGetHookIf,-css/curCSS,-css/defaultDisplay,-css/hiddenVisibleSelectors,-css/support,-css/swap,-css/var/cssExpand,-css/var/getStyles,-css/var/isHidden,-css/var/rmargin,-css/var/rnumnonpx,-effects,-effects/Tween,-effects/animatedSelector,-dimensions,-offset,-deprecated,-event-alias,-wrap",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return n.each(this,a,b)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(n.isPlainObject(d)||(e=n.isArray(d)))?(e?(e=!1,f=c&&n.isArray(c)?c:[]):f=c&&n.isPlainObject(c)?c:{},g[b]=n.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){return!n.isArray(a)&&a-parseFloat(a)>=0},isPlainObject:function(a){return"object"!==n.type(a)||a.nodeType||n.isWindow(a)?!1:a.constructor&&!j.call(a.constructor.prototype,"isPrototypeOf")?!1:!0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=n.trim(a),a&&(1===a.indexOf("use strict")?(b=l.createElement("script"),b.text=a,l.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=s(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:g.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=s(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(c=a[b],b=a,a=c),n.isFunction(a)?(e=d.call(arguments,2),f=function(){return a.apply(b||this,e.concat(d.call(arguments)))},f.guid=a.guid=a.guid||n.guid++,f):void 0},now:Date.now,support:k}),n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=a.document.documentElement,u,v=t.matches||t.webkitMatchesSelector||t.mozMatchesSelector||t.oMatchesSelector||t.msMatchesSelector,w=function(a,b){if(a===b)return u=!0,0;var c=b.compareDocumentPosition&&a.compareDocumentPosition&&a.compareDocumentPosition(b);return c?1&c?a===l||n.contains(l,a)?-1:b===l||n.contains(l,b)?1:0:4&c?-1:1:a.compareDocumentPosition?-1:1};n.extend({find:function(a,b,c,d){var e,f,g=0;if(c=c||[],b=b||l,!a||"string"!=typeof a)return c;if(1!==(f=b.nodeType)&&9!==f)return[];if(d)while(e=d[g++])n.find.matchesSelector(e,a)&&c.push(e);else n.merge(c,b.querySelectorAll(a));return c},unique:function(a){var b,c=[],d=0,e=0;if(u=!1,a.sort(w),u){while(b=a[d++])b===a[d]&&(e=c.push(d));while(e--)a.splice(c[e],1)}return a},text:function(a){var b,c="",d=0,e=a.nodeType;if(e){if(1===e||9===e||11===e)return a.textContent;if(3===e||4===e)return a.nodeValue}else while(b=a[d++])c+=n.text(b);return c},contains:function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!c.contains(d))},isXMLDoc:function(a){return"HTML"!==(a.ownerDocument||a).documentElement.nodeName},expr:{attrHandle:{},match:{bool:/^(?:checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)$/i,needsContext:/^[\x20\t\r\n\f]*[>+~]/}}}),n.extend(n.find,{matches:function(a,b){return n.find(a,null,null,b)},matchesSelector:function(a,b){return v.call(a,b)},attr:function(a,b){return a.getAttribute(b)}});var x=n.expr.match.needsContext,y=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,z=/^.[^:#\[\.,]*$/;function A(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(z.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return g.call(b,a)>=0!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;c>b;b++)if(n.contains(e[b],this))return!0}));for(b=0;c>b;b++)n.find(a,e[b],d);return d=this.pushStack(c>1?n.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(A(this,a||[],!1))},not:function(a){return this.pushStack(A(this,a||[],!0))},is:function(a){return!!A(this,"string"==typeof a&&x.test(a)?n(a):a||[],!1).length}});var B,C=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,D=n.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:C.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||B).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:l,!0)),y.test(c[1])&&n.isPlainObject(b))for(c in b)n.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}return d=l.getElementById(c[2]),d&&d.parentNode&&(this.length=1,this[0]=d),this.context=l,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof B.ready?B.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};D.prototype=n.fn,B=n(l);var E=/^(?:parents|prev(?:Until|All))/,F={children:!0,contents:!0,next:!0,prev:!0};n.extend({dir:function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),n.fn.extend({has:function(a){var b=n(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(n.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=x.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.unique(f):f)},index:function(a){return a?"string"==typeof a?g.call(n(a),this[0]):g.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.unique(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function G(a,b){while((a=a[b])&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return n.dir(a,"parentNode")},parentsUntil:function(a,b,c){return n.dir(a,"parentNode",c)},next:function(a){return G(a,"nextSibling")},prev:function(a){return G(a,"previousSibling")},nextAll:function(a){return n.dir(a,"nextSibling")},prevAll:function(a){return n.dir(a,"previousSibling")},nextUntil:function(a,b,c){return n.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return n.dir(a,"previousSibling",c)},siblings:function(a){return n.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return n.sibling(a.firstChild)},contents:function(a){return a.contentDocument||n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(F[a]||n.unique(e),E.test(a)&&e.reverse()),this.pushStack(e)}});var H=/\S+/g,I={};function J(a){var b=I[a]={};return n.each(a.match(H)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?I[a]||J(a):n.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(b=a.memory&&l,c=!0,g=e||0,e=0,f=h.length,d=!0;h&&f>g;g++)if(h[g].apply(l[0],l[1])===!1&&a.stopOnFalse){b=!1;break}d=!1,h&&(i?i.length&&j(i.shift()):b?h=[]:k.disable())},k={add:function(){if(h){var c=h.length;!function g(b){n.each(b,function(b,c){var d=n.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&g(c)})}(arguments),d?f=h.length:b&&(e=c,j(b))}return this},remove:function(){return h&&n.each(arguments,function(a,b){var c;while((c=n.inArray(b,h,c))>-1)h.splice(c,1),d&&(f>=c&&f--,g>=c&&g--)}),this},has:function(a){return a?n.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],f=0,this},disable:function(){return h=i=b=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,b||k.disable(),this},locked:function(){return!i},fireWith:function(a,b){return!h||c&&!i||(b=b||[],b=[a,b.slice?b.slice():b],d?i.push(b):j(b)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!c}};return k},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&n.isFunction(a.promise)?e:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var K;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(K.resolveWith(l,[n]),n.fn.triggerHandler&&(n(l).triggerHandler("ready"),n(l).off("ready"))))}});function L(){l.removeEventListener("DOMContentLoaded",L,!1),a.removeEventListener("load",L,!1),n.ready()}n.ready.promise=function(b){return K||(K=n.Deferred(),"complete"===l.readyState?setTimeout(n.ready):(l.addEventListener("DOMContentLoaded",L,!1),a.addEventListener("load",L,!1))),K.promise(b)},n.ready.promise();var M=n.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)n.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f};n.acceptData=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function N(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=n.expando+Math.random()}N.uid=1,N.accepts=n.acceptData,N.prototype={key:function(a){if(!N.accepts(a))return 0;var b={},c=a[this.expando];if(!c){c=N.uid++;try{b[this.expando]={value:c},Object.defineProperties(a,b)}catch(d){b[this.expando]=c,n.extend(a,b)}}return this.cache[c]||(this.cache[c]={}),c},set:function(a,b,c){var d,e=this.key(a),f=this.cache[e];if("string"==typeof b)f[b]=c;else if(n.isEmptyObject(f))n.extend(this.cache[e],b);else for(d in b)f[d]=b[d];return f},get:function(a,b){var c=this.cache[this.key(a)];return void 0===b?c:c[b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,n.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=this.key(a),g=this.cache[f];if(void 0===b)this.cache[f]={};else{n.isArray(b)?d=b.concat(b.map(n.camelCase)):(e=n.camelCase(b),b in g?d=[b,e]:(d=e,d=d in g?[d]:d.match(H)||[])),c=d.length;while(c--)delete g[d[c]]}},hasData:function(a){return!n.isEmptyObject(this.cache[a[this.expando]]||{})},discard:function(a){a[this.expando]&&delete this.cache[a[this.expando]]}};var O=new N,P=new N,Q=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,R=/([A-Z])/g;function S(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(R,"-$1").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:Q.test(c)?n.parseJSON(c):c}catch(e){}P.set(a,b,c)}else c=void 0;return c}n.extend({hasData:function(a){return P.hasData(a)||O.hasData(a)},data:function(a,b,c){return P.access(a,b,c)},removeData:function(a,b){P.remove(a,b)},_data:function(a,b,c){return O.access(a,b,c)},_removeData:function(a,b){O.remove(a,b)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=P.get(f),1===f.nodeType&&!O.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),S(f,d,e[d])));O.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){P.set(this,a)}):M(this,function(b){var c,d=n.camelCase(a);if(f&&void 0===b){if(c=P.get(f,a),void 0!==c)return c;if(c=P.get(f,d),void 0!==c)return c;if(c=S(f,d,void 0),void 0!==c)return c}else this.each(function(){var c=P.get(this,d);P.set(this,d,b),-1!==a.indexOf("-")&&void 0!==c&&P.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){P.remove(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=O.get(a,b),c&&(!d||n.isArray(c)?d=O.access(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return O.get(a,c)||O.access(a,c,{empty:n.Callbacks("once memory").add(function(){O.remove(a,[b+"queue",c])})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=O.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var T=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,U=/^(?:checkbox|radio)$/i;!function(){var a=l.createDocumentFragment(),b=a.appendChild(l.createElement("div")),c=l.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var V="undefined";k.focusinBubbles="onfocusin"in a;var W=/^key/,X=/^(?:mouse|pointer|contextmenu)|click/,Y=/^(?:focusinfocus|focusoutblur)$/,Z=/^([^.]*)(?:\.(.+)|)$/;function $(){return!0}function _(){return!1}function ab(){try{return l.activeElement}catch(a){}}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=O.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=n.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return typeof n!==V&&n.event.triggered!==b.type?n.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(H)||[""],j=b.length;while(j--)h=Z.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o&&(l=n.event.special[o]||{},o=(e?l.delegateType:l.bindType)||o,l=n.event.special[o]||{},k=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[o])||(m=i[o]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(o,g,!1)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),n.event.global[o]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=O.hasData(a)&&O.get(a);if(r&&(i=r.events)){b=(b||"").match(H)||[""],j=b.length;while(j--)if(h=Z.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=i[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete i[o])}else for(o in i)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(i)&&(delete r.handle,O.remove(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,m,o,p=[d||l],q=j.call(b,"type")?b.type:b,r=j.call(b,"namespace")?b.namespace.split("."):[];if(g=h=d=d||l,3!==d.nodeType&&8!==d.nodeType&&!Y.test(q+n.event.triggered)&&(q.indexOf(".")>=0&&(r=q.split("."),q=r.shift(),r.sort()),k=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=r.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:n.makeArray(c,[b]),o=n.event.special[q]||{},e||!o.trigger||o.trigger.apply(d,c)!==!1)){if(!e&&!o.noBubble&&!n.isWindow(d)){for(i=o.delegateType||q,Y.test(i+q)||(g=g.parentNode);g;g=g.parentNode)p.push(g),h=g;h===(d.ownerDocument||l)&&p.push(h.defaultView||h.parentWindow||a)}f=0;while((g=p[f++])&&!b.isPropagationStopped())b.type=f>1?i:o.bindType||q,m=(O.get(g,"events")||{})[b.type]&&O.get(g,"handle"),m&&m.apply(g,c),m=k&&g[k],m&&m.apply&&n.acceptData(g)&&(b.result=m.apply(g,c),b.result===!1&&b.preventDefault());return b.type=q,e||b.isDefaultPrevented()||o._default&&o._default.apply(p.pop(),c)!==!1||!n.acceptData(d)||k&&n.isFunction(d[q])&&!n.isWindow(d)&&(h=d[k],h&&(d[k]=null),n.event.triggered=q,d[q](),n.event.triggered=void 0,h&&(d[k]=h)),b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(O.get(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(g.namespace))&&(a.handleObj=g,a.data=g.data,e=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(a.result=e)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!==this;i=i.parentNode||this)if(i.disabled!==!0||"click"!==a.type){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>=0:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||l,d=c.documentElement,e=c.body,a.pageX=b.clientX+(d&&d.scrollLeft||e&&e.scrollLeft||0)-(d&&d.clientLeft||e&&e.clientLeft||0),a.pageY=b.clientY+(d&&d.scrollTop||e&&e.scrollTop||0)-(d&&d.clientTop||e&&e.clientTop||0)),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},fix:function(a){if(a[n.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=X.test(e)?this.mouseHooks:W.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new n.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=l),3===a.target.nodeType&&(a.target=a.target.parentNode),g.filter?g.filter(a,f):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==ab()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===ab()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&n.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=n.extend(new n.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?n.event.trigger(e,null,b):n.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?$:_):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={isDefaultPrevented:_,isPropagationStopped:_,isImmediatePropagationStopped:_,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=$,a&&a.preventDefault&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=$,a&&a.stopPropagation&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=$,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!n.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.focusinBubbles||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a),!0)};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=O.access(d,b);e||d.addEventListener(a,c,!0),O.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=O.access(d,b)-1;e?O.access(d,b,e):(d.removeEventListener(a,c,!0),O.remove(d,b))}}}),n.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(g in a)this.on(g,b,c,a[g],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=_;else if(!d)return this;return 1===e&&(f=d,d=function(a){return n().off(a),f.apply(this,arguments)},d.guid=f.guid||(f.guid=n.guid++)),this.each(function(){n.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=_),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}});var bb=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,cb=/<([\w:]+)/,db=/<|&#?\w+;/,eb=/<(?:script|style|link)/i,fb=/checked\s*(?:[^=]|=\s*.checked.)/i,gb=/^$|\/(?:java|ecma)script/i,hb=/^true\/(.*)/,ib=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,jb={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};jb.optgroup=jb.option,jb.tbody=jb.tfoot=jb.colgroup=jb.caption=jb.thead,jb.th=jb.td;function kb(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function lb(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function mb(a){var b=hb.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function nb(a,b){for(var c=0,d=a.length;d>c;c++)O.set(a[c],"globalEval",!b||O.get(b[c],"globalEval"))}function ob(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(O.hasData(a)&&(f=O.access(a),g=O.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)n.event.add(b,e,j[e][c])}P.hasData(a)&&(h=P.access(a),i=n.extend({},h),P.set(b,i))}}function pb(a,b){var c=a.getElementsByTagName?a.getElementsByTagName(b||"*"):a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&n.nodeName(a,b)?n.merge([a],c):c}function qb(a,b){var c=b.nodeName.toLowerCase();"input"===c&&U.test(a.type)?b.checked=a.checked:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}n.extend({clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=n.contains(a.ownerDocument,a);if(!(k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(g=pb(h),f=pb(a),d=0,e=f.length;e>d;d++)qb(f[d],g[d]);if(b)if(c)for(f=f||pb(a),g=g||pb(h),d=0,e=f.length;e>d;d++)ob(f[d],g[d]);else ob(a,h);return g=pb(h,"script"),g.length>0&&nb(g,!i&&pb(a,"script")),h},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,k=b.createDocumentFragment(),l=[],m=0,o=a.length;o>m;m++)if(e=a[m],e||0===e)if("object"===n.type(e))n.merge(l,e.nodeType?[e]:e);else if(db.test(e)){f=f||k.appendChild(b.createElement("div")),g=(cb.exec(e)||["",""])[1].toLowerCase(),h=jb[g]||jb._default,f.innerHTML=h[1]+e.replace(bb,"<$1></$2>")+h[2],j=h[0];while(j--)f=f.lastChild;n.merge(l,f.childNodes),f=k.firstChild,f.textContent=""}else l.push(b.createTextNode(e));k.textContent="",m=0;while(e=l[m++])if((!d||-1===n.inArray(e,d))&&(i=n.contains(e.ownerDocument,e),f=pb(k.appendChild(e),"script"),i&&nb(f),c)){j=0;while(e=f[j++])gb.test(e.type||"")&&c.push(e)}return k},cleanData:function(a){for(var b,c,d,e,f=n.event.special,g=0;void 0!==(c=a[g]);g++){if(n.acceptData(c)&&(e=c[O.expando],e&&(b=O.cache[e]))){if(b.events)for(d in b.events)f[d]?n.event.remove(c,d):n.removeEvent(c,d,b.handle);O.cache[e]&&delete O.cache[e]}delete P.cache[c[P.expando]]}}}),n.fn.extend({text:function(a){return M(this,function(a){return void 0===a?n.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=a)})},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=kb(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=kb(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?n.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||n.cleanData(pb(c)),c.parentNode&&(b&&n.contains(c.ownerDocument,c)&&nb(pb(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(n.cleanData(pb(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return M(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!eb.test(a)&&!jb[(cb.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(bb,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(pb(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,n.cleanData(pb(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,m=this,o=l-1,p=a[0],q=n.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&fb.test(p))return this.each(function(c){var d=m.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(c=n.buildFragment(a,this[0].ownerDocument,!1,this),d=c.firstChild,1===c.childNodes.length&&(c=d),d)){for(f=n.map(pb(c,"script"),lb),g=f.length;l>j;j++)h=c,j!==o&&(h=n.clone(h,!0,!0),g&&n.merge(f,pb(h,"script"))),b.call(this[j],h,j);
if(g)for(i=f[f.length-1].ownerDocument,n.map(f,mb),j=0;g>j;j++)h=f[j],gb.test(h.type||"")&&!O.access(h,"globalEval")&&n.contains(i,h)&&(h.src?n._evalUrl&&n._evalUrl(h.src):n.globalEval(h.textContent.replace(ib,"")))}return this}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=[],e=n(a),g=e.length-1,h=0;g>=h;h++)c=h===g?this:this.clone(!0),n(e[h])[b](c),f.apply(d,c.get());return this.pushStack(d)}}),n.fn.delay=function(a,b){return a=n.fx?n.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a=l.createElement("input"),b=l.createElement("select"),c=b.appendChild(l.createElement("option"));a.type="checkbox",k.checkOn=""!==a.value,k.optSelected=c.selected,b.disabled=!0,k.optDisabled=!c.disabled,a=l.createElement("input"),a.value="t",a.type="radio",k.radioValue="t"===a.value}();var rb,sb,tb=n.expr.attrHandle;n.fn.extend({attr:function(a,b){return M(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===V?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),d=n.attrHooks[b]||(n.expr.match.bool.test(b)?sb:rb)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=n.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void n.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(H);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),sb={set:function(a,b,c){return b===!1?n.removeAttr(a,c):a.setAttribute(c,c),c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=tb[b]||n.find.attr;tb[b]=function(a,b,d){var e,f;return d||(f=tb[b],tb[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,tb[b]=f),e}});var ub=/^(?:input|select|textarea|button)$/i;n.fn.extend({prop:function(a,b){return M(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[n.propFix[a]||a]})}}),n.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!n.isXMLDoc(a),f&&(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){return a.hasAttribute("tabindex")||ub.test(a.nodeName)||a.href?a.tabIndex:-1}}}}),k.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this});var vb=/[\t\r\n\f]/g;n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h="string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(H)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(vb," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=n.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0===arguments.length||"string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(H)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(vb," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?n.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(n.isFunction(a)?function(c){n(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=n(this),f=a.match(H)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===V||"boolean"===c)&&(this.className&&O.set(this,"__className__",this.className),this.className=this.className||a===!1?"":O.get(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(vb," ").indexOf(b)>=0)return!0;return!1}});var wb=/\r/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(wb,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=n.inArray(d.value,f)>=0)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>=0:void 0}},k.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var xb=n.now(),yb=/\?/;n.parseJSON=function(a){return JSON.parse(a+"")},n.parseXML=function(a){var b,c;if(!a||"string"!=typeof a)return null;try{c=new DOMParser,b=c.parseFromString(a,"text/xml")}catch(d){b=void 0}return(!b||b.getElementsByTagName("parsererror").length)&&n.error("Invalid XML: "+a),b};var zb,Ab,Bb=/#.*$/,Cb=/([?&])_=[^&]*/,Db=/^(.*?):[ \t]*([^\r\n]*)$/gm,Eb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Fb=/^(?:GET|HEAD)$/,Gb=/^\/\//,Hb=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,Ib={},Jb={},Kb="*/".concat("*");try{Ab=location.href}catch(Lb){Ab=l.createElement("a"),Ab.href="",Ab=Ab.href}zb=Hb.exec(Ab.toLowerCase())||[];function Mb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(H)||[];if(n.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Nb(a,b,c,d){var e={},f=a===Jb;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Ob(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&n.extend(!0,a,d),a}function Pb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Qb(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Ab,type:"GET",isLocal:Eb.test(zb[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Kb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Ob(Ob(a,n.ajaxSettings),b):Ob(n.ajaxSettings,a)},ajaxPrefilter:Mb(Ib),ajaxTransport:Mb(Jb),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=n.ajaxSetup({},b),l=k.context||k,m=k.context&&(l.nodeType||l.jquery)?n(l):n.event,o=n.Deferred(),p=n.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!f){f={};while(b=Db.exec(e))f[b[1].toLowerCase()]=b[2]}b=f[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?e:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return c&&c.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||Ab)+"").replace(Bb,"").replace(Gb,zb[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=n.trim(k.dataType||"*").toLowerCase().match(H)||[""],null==k.crossDomain&&(h=Hb.exec(k.url.toLowerCase()),k.crossDomain=!(!h||h[1]===zb[1]&&h[2]===zb[2]&&(h[3]||("http:"===h[1]?"80":"443"))===(zb[3]||("http:"===zb[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=n.param(k.data,k.traditional)),Nb(Ib,k,b,v),2===t)return v;i=k.global,i&&0===n.active++&&n.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!Fb.test(k.type),d=k.url,k.hasContent||(k.data&&(d=k.url+=(yb.test(d)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=Cb.test(d)?d.replace(Cb,"$1_="+xb++):d+(yb.test(d)?"&":"?")+"_="+xb++)),k.ifModified&&(n.lastModified[d]&&v.setRequestHeader("If-Modified-Since",n.lastModified[d]),n.etag[d]&&v.setRequestHeader("If-None-Match",n.etag[d])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+Kb+"; q=0.01":""):k.accepts["*"]);for(j in k.headers)v.setRequestHeader(j,k.headers[j]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(j in{success:1,error:1,complete:1})v[j](k[j]);if(c=Nb(Jb,k,b,v)){v.readyState=1,i&&m.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,c.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,f,h){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),c=void 0,e=h||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,f&&(u=Pb(k,v,f)),u=Qb(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(n.lastModified[d]=w),w=v.getResponseHeader("etag"),w&&(n.etag[d]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,i&&m.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),i&&(m.trigger("ajaxComplete",[v,k]),--n.active||n.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})};var Rb=/%20/g,Sb=/\[\]$/,Tb=/\r?\n/g,Ub=/^(?:submit|button|image|reset|file)$/i,Vb=/^(?:input|select|textarea|keygen)/i;function Wb(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||Sb.test(a)?d(a,e):Wb(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Wb(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Wb(c,a[c],b,e);return d.join("&").replace(Rb,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&Vb.test(this.nodeName)&&!Ub.test(a)&&(this.checked||!U.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(Tb,"\r\n")}}):{name:b.name,value:c.replace(Tb,"\r\n")}}).get()}}),n.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(a){}};var Xb=0,Yb={},Zb={0:200,1223:204},$b=n.ajaxSettings.xhr();a.ActiveXObject&&n(a).on("unload",function(){for(var a in Yb)Yb[a]()}),k.cors=!!$b&&"withCredentials"in $b,k.ajax=$b=!!$b,n.ajaxTransport(function(a){var b;return k.cors||$b&&!a.crossDomain?{send:function(c,d){var e,f=a.xhr(),g=++Xb;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)f.setRequestHeader(e,c[e]);b=function(a){return function(){b&&(delete Yb[g],b=f.onload=f.onerror=null,"abort"===a?f.abort():"error"===a?d(f.status,f.statusText):d(Zb[f.status]||f.status,f.statusText,"string"==typeof f.responseText?{text:f.responseText}:void 0,f.getAllResponseHeaders()))}},f.onload=b(),f.onerror=b("error"),b=Yb[g]=b("abort");try{f.send(a.hasContent&&a.data||null)}catch(h){if(b)throw h}},abort:function(){b&&b()}}:void 0}),n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(d,e){b=n("<script>").prop({async:!0,charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&e("error"===a.type?404:200,a.type)}),l.head.appendChild(b[0])},abort:function(){c&&c()}}}});var _b=[],ac=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=_b.pop()||n.expando+"_"+xb++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(ac.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&ac.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(ac,"$1"+e):b.jsonp!==!1&&(b.url+=(yb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,_b.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||l;var d=y.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=n.buildFragment([a],b,e),e&&e.length&&n(e).remove(),n.merge([],d.childNodes))};var bc=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&bc)return bc.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=n.trim(a.slice(h)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e,dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,f||[a.responseText,b,a])}),this},"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var cc=a.jQuery,dc=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=dc),b&&a.jQuery===n&&(a.jQuery=cc),n},typeof b===V&&(a.jQuery=a.$=n),n});
//# sourceMappingURL=jquery.min.map