var App=function(){"use strict";function e(){}function t(e){return e()}function n(){return Object.create(null)}function o(e){e.forEach(t)}function i(e){return"function"==typeof e}function r(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function c(e,t){e.appendChild(t)}function l(e,t,n){e.insertBefore(t,n||null)}function s(e){e.parentNode.removeChild(e)}function a(e){return document.createElement(e)}function d(e){return document.createTextNode(e)}function u(){return d(" ")}function p(){return d("")}function f(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function m(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function h(e,t,n,o){e.style.setProperty(t,n,o?"important":"")}let y;function b(e){y=e}function g(e){(function(){if(!y)throw new Error("Function called outside component initialization");return y})().$$.on_mount.push(e)}const v=[],$=[],x=[],w=[],T=Promise.resolve();let k=!1;function _(e){x.push(e)}let L=!1;const z=new Set;function A(){if(!L){L=!0;do{for(let e=0;e<v.length;e+=1){const t=v[e];b(t),C(t.$$)}for(b(null),v.length=0;$.length;)$.pop()();for(let e=0;e<x.length;e+=1){const t=x[e];z.has(t)||(z.add(t),t())}x.length=0}while(v.length);for(;w.length;)w.pop()();k=!1,L=!1,z.clear()}}function C(e){if(null!==e.fragment){e.update(),o(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(_)}}const E=new Set;let N;function P(){N={r:0,c:[],p:N}}function j(){N.r||o(N.c),N=N.p}function B(e,t){e&&e.i&&(E.delete(e),e.i(t))}function M(e,t,n,o){if(e&&e.o){if(E.has(e))return;E.add(e),N.c.push((()=>{E.delete(e),o&&(n&&e.d(1),o())})),e.o(t)}}function O(e){e&&e.c()}function S(e,n,r){const{fragment:c,on_mount:l,on_destroy:s,after_update:a}=e.$$;c&&c.m(n,r),_((()=>{const n=l.map(t).filter(i);s?s.push(...n):o(n),e.$$.on_mount=[]})),a.forEach(_)}function R(e,t){const n=e.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function q(e,t){-1===e.$$.dirty[0]&&(v.push(e),k||(k=!0,T.then(A)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function F(t,i,r,c,l,a,d=[-1]){const u=y;b(t);const p=t.$$={fragment:null,ctx:null,props:a,update:e,not_equal:l,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:n(),dirty:d,skip_bound:!1};let f=!1;if(p.ctx=r?r(t,i.props||{},((e,n,...o)=>{const i=o.length?o[0]:n;return p.ctx&&l(p.ctx[e],p.ctx[e]=i)&&(!p.skip_bound&&p.bound[e]&&p.bound[e](i),f&&q(t,e)),n})):[],p.update(),f=!0,o(p.before_update),p.fragment=!!c&&c(p.ctx),i.target){if(i.hydrate){const e=function(e){return Array.from(e.childNodes)}(i.target);p.fragment&&p.fragment.l(e),e.forEach(s)}else p.fragment&&p.fragment.c();i.intro&&B(t.$$.fragment),S(t,i.target,i.anchor),A()}b(u)}class H{$destroy(){R(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function I(t){let n;return{c(){n=a("div"),n.innerHTML='<i class="close icon" style="top: 1rem; right: 1rem; color: rgb(255, 255, 255); font-size: 25px;"></i> \n     <div class="ui card" style="z-index: -2;"><div class="image"><div style="display: none; width: 100%; height: 345px; position: absolute; z-index: 26; background: black; text-align: center; align-items: center; place-content: center; flex-wrap: wrap;"><span class="ui header" style="color: white; font-style: normal; padding-top: 5rem; padding-left: 10px; padding-right: 10px; font-size: large; width: 100%; font-weight: 300;">Reenrollment will delete all previous voice, face, and video enrollments.\n              Proceed?</span> \n              <div><i class="ic icon arrow circle left arrowButton"></i> \n                 <i class="ic icons icon arrow circle right arrowButton"></i></div></div> \n           <div style="display: none; width: 100%; height: 345px; position: absolute; z-index: 26; background: black; text-align: center; align-items: center; place-content: center; flex-wrap: wrap;"><h4 style="margin-bottom: 7%; font-weight: normal; max-width: 80%; color: white; font-style: normal;">Please move closer to the camera. You&#39;ll be performing a predetermined number of liveness challenges. A few examples of the challenges could be the following:</h4> \n              <img src="" style="width: 70%;"/> \n              <a class="ui basic label" style="color: rgb(0, 0, 0); position: absolute; bottom: 0px;">Skip</a></div> \n           <div style="position: relative; justify-content: center; display: flex; min-height: 365px; width: 100%;"><div style="display: flex; position: absolute; min-height: 345px; width: 100%; z-index: 1; background: rgba(0, 0, 0, 0.5); opacity: 1;"></div> \n              <canvas width="460" height="345" class="viCanvas" style="position: absolute; top: 6%; z-index: 2;"></canvas> \n              <button class="small ui inverted basic button viReadyButton" style="position: absolute; bottom: 0%; z-index: 8; margin: auto; font-weight: 600; display: inline-block; opacity: 1;">Click to begin<i class="chevron circle right icon"></i></button> \n              <canvas class="viImageCanvas" height="480" width="640" style="top: 6%; width: 100%; position: absolute; opacity: 1;"></canvas></div> \n           <video id="videoLiveness" autoplay="" playsinline=""></video></div> \n        <div class="content" style="bottom: 3.5em; z-index: 6; position: relative; padding: 0px; background-color: black; text-align: center;"><a class="ui header" style="color: rgb(46, 204, 113); height: 2em;"><span style="font-style: normal; max-width: 300px; color: rgb(255, 255, 255);"></span></a></div> \n        <div class="extra content" style="background-color: rgb(0, 0, 0);"><a href="https://voiceit.io" target="_blank"><img id="powered-by" src=""/></a></div></div>',f(n,"class","viModal ui modal transition visible active"),h(n,"max-width","460px"),h(n,"min-width","460px"),h(n,"overflow","hidden"),h(n,"margin-bottom","8%"),h(n,"background","transparent")},m(e,t){l(e,n,t)},p:e,i:e,o:e,d(e){e&&s(n)}}}class Y extends H{constructor(e){super(),F(this,e,null,I,r,{})}}function D(t){let n,o;return{c(){n=a("p"),o=d(t[4]),f(n,"class","svelte-1hbybwa")},m(e,t){l(e,n,t),c(n,o)},p(e,t){16&t&&m(o,e[4])},i:e,o:e,d(e){e&&s(n)}}}function G(e){let t,n,o,i;const r=[K,J],c=[];function a(e,t){return"voice"===e[0]&&"verification"===e[1]?0:1}return t=a(e),n=c[t]=r[t](e),{c(){n.c(),o=p()},m(e,n){c[t].m(e,n),l(e,o,n),i=!0},p(e,i){let l=t;t=a(e),t===l?c[t].p(e,i):(P(),M(c[l],1,1,(()=>{c[l]=null})),j(),n=c[t],n?n.p(e,i):(n=c[t]=r[t](e),n.c()),B(n,1),n.m(o.parentNode,o))},i(e){i||(B(n),i=!0)},o(e){M(n),i=!1},d(e){c[t].d(e),e&&s(o)}}}function J(t){let n,o,i,r,p,h,y,b,g,v,$,x,w;return{c(){n=a("h1"),n.textContent="The following combination has not been implemented yet",o=u(),i=a("p"),r=d("biometricType: "),p=d(t[0]),h=u(),y=a("p"),b=d("callType: "),g=d(t[1]),v=u(),$=a("p"),x=d("doLiveness: "),w=d(t[2]),f(i,"class","svelte-1hbybwa"),f(y,"class","svelte-1hbybwa"),f($,"class","svelte-1hbybwa")},m(e,t){l(e,n,t),l(e,o,t),l(e,i,t),c(i,r),c(i,p),l(e,h,t),l(e,y,t),c(y,b),c(y,g),l(e,v,t),l(e,$,t),c($,x),c($,w)},p(e,t){1&t&&m(p,e[0]),2&t&&m(g,e[1]),4&t&&m(w,e[2])},i:e,o:e,d(e){e&&s(n),e&&s(o),e&&s(i),e&&s(h),e&&s(y),e&&s(v),e&&s($)}}}function K(t){let n,o;return n=new Y({}),{c(){O(n.$$.fragment)},m(e,t){S(n,e,t),o=!0},p:e,i(e){o||(B(n.$$.fragment,e),o=!0)},o(e){M(n.$$.fragment,e),o=!1},d(e){R(n,e)}}}function Q(e){let t,n,o,i;const r=[G,D],c=[];function a(e,t){return e[3]?1:0}return t=a(e),n=c[t]=r[t](e),{c(){n.c(),o=p()},m(e,n){c[t].m(e,n),l(e,o,n),i=!0},p(e,[i]){let l=t;t=a(e),t===l?c[t].p(e,i):(P(),M(c[l],1,1,(()=>{c[l]=null})),j(),n=c[t],n?n.p(e,i):(n=c[t]=r[t](e),n.c()),B(n,1),n.m(o.parentNode,o))},i(e){i||(B(n),i=!0)},o(e){M(n),i=!1},d(e){c[t].d(e),e&&s(o)}}}function U(e,t,n){let{biometricType:o}=t,{callType:i}=t,{doLiveness:r}=t,c=!1,l="";return g((async()=>"voice"!==o&&"face"!==o&&"video"!==o?(n(3,c=!0),void n(4,l='biometricType must be of type "voice", "face", or "video".')):"enrollment"!==i&&"verification"!==i?(n(3,c=!0),void n(4,l='callType must be of type "enrollment" or "verification".')):void 0===r||"boolean"!=typeof r?(n(3,c=!0),void n(4,l='Please pass prop "doLiveness" of type boolean.')):void 0)),e.$$set=e=>{"biometricType"in e&&n(0,o=e.biometricType),"callType"in e&&n(1,i=e.callType),"doLiveness"in e&&n(2,r=e.doLiveness)},[o,i,r,c,l]}class V extends H{constructor(e){super(),F(this,e,U,Q,r,{biometricType:0,callType:1,doLiveness:2})}}function W(e){let t,n;return t=new V({props:{biometricType:e[0],callType:e[1],doLiveness:e[2]}}),{c(){O(t.$$.fragment)},m(e,o){S(t,e,o),n=!0},p(e,[n]){const o={};1&n&&(o.biometricType=e[0]),2&n&&(o.callType=e[1]),4&n&&(o.doLiveness=e[2]),t.$set(o)},i(e){n||(B(t.$$.fragment,e),n=!0)},o(e){M(t.$$.fragment,e),n=!1},d(e){R(t,e)}}}function X(e,t,n){let{biometricType:o}=t,{callType:i}=t,{doLiveness:r}=t;return e.$$set=e=>{"biometricType"in e&&n(0,o=e.biometricType),"callType"in e&&n(1,i=e.callType),"doLiveness"in e&&n(2,r=e.doLiveness)},[o,i,r]}return class extends H{constructor(e){super(),F(this,e,X,W,r,{biometricType:0,callType:1,doLiveness:2})}}}();
//# sourceMappingURL=voiceit2.js.map
