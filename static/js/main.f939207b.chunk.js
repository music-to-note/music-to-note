(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{233:function(e,t,n){e.exports=n(428)},238:function(e,t,n){},239:function(e,t,n){},241:function(e,t,n){},374:function(e,t,n){},428:function(e,t,n){"use strict";n.r(t);var a=n(2),o=n.n(a),c=n(48),r=n.n(c),i=(n(238),n(31)),l=n(32),u=n(34),s=n(33),d=n(35),h=(n(239),n(89)),p=n.n(h),m=n(36),f=n(131),b=n.n(f),v=n(132),y=n.n(v),E=(n(241),{backgroundColor:"#bbbbee",margin:"10px"}),k=new FormData,B="http://httprelay.io/link/h53f",g=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(n=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(o)))).readFile=function(){var e=document.getElementById("upload-audio");k.set("audio",e.files[0],e.value)},n.upload=function(){fetch(B,{method:"POST",body:k}).then(function(e){p()("Uploaded!","File has been uploaded!","success"),n.props.uploadCallback('X:1\nT: Cooley\'s\nM: 4/4\nL: 1/8\nR: reel\nK: Emin\nD2|:"Em"EB{c}BA B2 EB|~B2 AB dBAG|')})},n.record=function(){p()("Recorded!","Audio has been recorded!","success")},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement(m.a,{className:"button-holder"},o.a.createElement(m.b,{style:E,onClick:this.record},o.a.createElement(b.a,null)),o.a.createElement("label",null,o.a.createElement(m.b,{style:E,onClick:this.upload},o.a.createElement(y.a,null)),o.a.createElement("input",{type:"file",id:"upload-audio",onChange:this.readFile})))}}]),t}(a.Component),j=n(133),w=n.n(j),O=(n(374),function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(n=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(o)))).options={viewportHorizontal:!0,responsive:"resize"},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidUpdate",value:function(e){w.a.renderAbc("sheet",e.tune,this.options)}},{key:"render",value:function(){return o.a.createElement("div",{id:"sheet"})}}]),t}(a.Component)),A=n(90);A.initializeApp({apiKey:"AIzaSyDk8JlKOhj0xAc8HM5Q9gDwvybpQta90D4",authDomain:"hacktech2019-233403.firebaseapp.com",databaseURL:"https://hacktech2019-233403.firebaseio.com",projectId:"hacktech2019-233403",storageBucket:"hacktech2019-233403.appspot.com",messagingSenderId:"1080115241329"});var C=A.database(),D={19600:" G ",20765:" ^G ",22000:" A ",23308:" ^A ",24694:" B ",26163:" c ",27718:" ^c ",29366:" d ",31113:" ^d ",32963:" e ",34923:" f ",36999:" ^f ",39200:" g ",41530:" ^g ",44000:" a ",46616:" ^a ",49388:" b ",52325:" c' ",55437:" ^c' ",58733:" d' ",62225:" ^d' ",65925:" e' ",69846:" f' "};function I(e){for(var t=0,n=Object.keys(D),a=0;a<n.length;a++){if(!(e>n[a]))return n[a]-e<e-t?D[n[a]]:D[t];t=n[a]}}var M=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(n=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(o)))).state={music:'X:1\nT: Example\nM: 4/4\nL: 1/8\nR: reel\nK: C\nD2|:"Em"EB{c}BA B2 EB|~B2 AB dBAG'},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;C.ref().child("note").on("value",function(t){e.setState(function(e){return{music:e.music+I(100*t.val())}})})}},{key:"render",value:function(){return o.a.createElement("div",{className:"app"},o.a.createElement(m.c,{variant:"h2"},"Music 2 Note"),o.a.createElement(g,null),o.a.createElement(O,{tune:this.state.music}))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(M,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[233,1,2]]]);
//# sourceMappingURL=main.f939207b.chunk.js.map