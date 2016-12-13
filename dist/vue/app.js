/*!
 *
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * Build: 2016-12-13T23:08:53.999Z
 */
var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};





function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var vue_min$1 = createCommonjsModule(function (module, exports) {
/*!
 * Vue.js v2.1.6
 * (c) 2014-2016 Evan You
 * Released under the MIT License.
 */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.Vue=t();}(commonjsGlobal,function(){"use strict";function e(e){return null==e?"":"object"==typeof e?JSON.stringify(e,null,2):String(e)}function t(e){var t=parseFloat(e,10);return t||0===t?t:e}function n(e,t){for(var n=Object.create(null),r=e.split(","),i=0;i<r.length;i++)n[r[i]]=!0;return t?function(e){return n[e.toLowerCase()]}:function(e){return n[e]}}function r(e,t){if(e.length){var n=e.indexOf(t);if(n>-1)return e.splice(n,1)}}function i(e,t){return Wr.call(e,t)}function o(e){return"string"==typeof e||"number"==typeof e}function a(e){var t=Object.create(null);return function(n){var r=t[n];return r||(t[n]=e(n))}}function s(e,t){function n(n){var r=arguments.length;return r?r>1?e.apply(t,arguments):e.call(t,n):e.call(t)}return n._length=e.length,n}function c(e,t){t=t||0;for(var n=e.length-t,r=new Array(n);n--;)r[n]=e[n+t];return r}function l(e,t){for(var n in t)e[n]=t[n];return e}function u(e){return null!==e&&"object"==typeof e}function f(e){return ei.call(e)===ti}function d(e){for(var t={},n=0;n<e.length;n++)e[n]&&l(t,e[n]);return t}function p(){}function v(e){return e.reduce(function(e,t){return e.concat(t.staticKeys||[])},[]).join(",")}function h(e,t){return e==t||!(!u(e)||!u(t))&&JSON.stringify(e)===JSON.stringify(t)}function m(e,t){for(var n=0;n<e.length;n++)if(h(e[n],t))return n;return-1}function g(e){var t=(e+"").charCodeAt(0);return 36===t||95===t}function y(e,t,n,r){Object.defineProperty(e,t,{value:n,enumerable:!!r,writable:!0,configurable:!0});}function _(e){if(!oi.test(e)){var t=e.split(".");return function(e){for(var n=0;n<t.length;n++){if(!e)return;e=e[t[n]];}return e}}}function b(e){return/native code/.test(e.toString())}function $(e){bi.target&&$i.push(bi.target),bi.target=e;}function w(){bi.target=$i.pop();}function x(e,t){e.__proto__=t;}function C(e,t,n){for(var r=0,i=n.length;r<i;r++){var o=n[r];y(e,o,t[o]);}}function k(e){if(u(e)){var t;return i(e,"__ob__")&&e.__ob__ instanceof Ai?t=e.__ob__:ki.shouldConvert&&!vi()&&(Array.isArray(e)||f(e))&&Object.isExtensible(e)&&!e._isVue&&(t=new Ai(e)),t}}function A(e,t,n,r){var i=new bi,o=Object.getOwnPropertyDescriptor(e,t);if(!o||o.configurable!==!1){var a=o&&o.get,s=o&&o.set,c=k(n);Object.defineProperty(e,t,{enumerable:!0,configurable:!0,get:function(){var t=a?a.call(e):n;return bi.target&&(i.depend(),c&&c.dep.depend(),Array.isArray(t)&&T(t)),t},set:function(t){var r=a?a.call(e):n;t===r||t!==t&&r!==r||(s?s.call(e,t):n=t,c=k(t),i.notify());}});}}function O(e,t,n){if(Array.isArray(e))return e.length=Math.max(e.length,t),e.splice(t,1,n),n;if(i(e,t))return void(e[t]=n);var r=e.__ob__;if(!(e._isVue||r&&r.vmCount))return r?(A(r.value,t,n),r.dep.notify(),n):void(e[t]=n)}function S(e,t){var n=e.__ob__;e._isVue||n&&n.vmCount||i(e,t)&&(delete e[t],n&&n.dep.notify());}function T(e){for(var t=void 0,n=0,r=e.length;n<r;n++)t=e[n],t&&t.__ob__&&t.__ob__.dep.depend(),Array.isArray(t)&&T(t);}function E(e,t){if(!t)return e;for(var n,r,o,a=Object.keys(t),s=0;s<a.length;s++)n=a[s],r=e[n],o=t[n],i(e,n)?f(r)&&f(o)&&E(r,o):O(e,n,o);return e}function j(e,t){return t?e?e.concat(t):Array.isArray(t)?t:[t]:e}function N(e,t){var n=Object.create(e||null);return t?l(n,t):n}function L(e){var t=e.props;if(t){var n,r,i,o={};if(Array.isArray(t))for(n=t.length;n--;)r=t[n],"string"==typeof r&&(i=Gr(r),o[i]={type:null});else if(f(t))for(var a in t)r=t[a],i=Gr(a),o[i]=f(r)?r:{type:r};e.props=o;}}function D(e){var t=e.directives;if(t)for(var n in t){var r=t[n];"function"==typeof r&&(t[n]={bind:r,update:r});}}function M(e,t,n){function r(r){var i=Oi[r]||Si;u[r]=i(e[r],t[r],n,r);}L(t),D(t);var o=t.extends;if(o&&(e="function"==typeof o?M(e,o.options,n):M(e,o,n)),t.mixins)for(var a=0,s=t.mixins.length;a<s;a++){var c=t.mixins[a];c.prototype instanceof Re&&(c=c.options),e=M(e,c,n);}var l,u={};for(l in e)r(l);for(l in t)i(e,l)||r(l);return u}function P(e,t,n,r){if("string"==typeof n){var o=e[t];if(i(o,n))return o[n];var a=Gr(n);if(i(o,a))return o[a];var s=Yr(a);if(i(o,s))return o[s];var c=o[n]||o[a]||o[s];return c}}function I(e,t,n,r){var o=t[e],a=!i(n,e),s=n[e];if(U(o.type)&&(a&&!i(o,"default")?s=!1:""!==s&&s!==Xr(e)||(s=!0)),void 0===s){s=R(r,o,e);var c=ki.shouldConvert;ki.shouldConvert=!0,k(s),ki.shouldConvert=c;}return s}function R(e,t,n){if(i(t,"default")){var r=t.default;return u(r),e&&e.$options.propsData&&void 0===e.$options.propsData[n]&&void 0!==e[n]?e[n]:"function"==typeof r&&t.type!==Function?r.call(e):r}}function F(e){var t=e&&e.toString().match(/^\s*function (\w+)/);return t&&t[1]}function U(e){if(!Array.isArray(e))return"Boolean"===F(e);for(var t=0,n=e.length;t<n;t++)if("Boolean"===F(e[t]))return!0;return!1}function H(){Ei.length=0,ji={},Ni=Li=!1;}function B(){for(Li=!0,Ei.sort(function(e,t){return e.id-t.id}),Di=0;Di<Ei.length;Di++){var e=Ei[Di],t=e.id;ji[t]=null,e.run();}hi&&ii.devtools&&hi.emit("flush"),H();}function V(e){var t=e.id;if(null==ji[t]){if(ji[t]=!0,Li){for(var n=Ei.length-1;n>=0&&Ei[n].id>e.id;)n--;Ei.splice(Math.max(n,Di)+1,0,e);}else Ei.push(e);Ni||(Ni=!0,mi(B));}}function z(e){Ii.clear(),q(e,Ii);}function q(e,t){var n,r,i=Array.isArray(e);if((i||u(e))&&Object.isExtensible(e)){if(e.__ob__){var o=e.__ob__.dep.id;if(t.has(o))return;t.add(o);}if(i)for(n=e.length;n--;)q(e[n],t);else for(r=Object.keys(e),n=r.length;n--;)q(e[r[n]],t);}}function J(e){e._watchers=[],K(e),Y(e),W(e),Z(e),Q(e);}function K(e){var t=e.$options.props;if(t){var n=e.$options.propsData||{},r=e.$options._propKeys=Object.keys(t),i=!e.$parent;ki.shouldConvert=i;for(var o=function(i){var o=r[i];A(e,o,I(o,t,n,e));},a=0;a<r.length;a++)o(a);ki.shouldConvert=!0;}}function W(e){var t=e.$options.data;t=e._data="function"==typeof t?t.call(e):t||{},f(t)||(t={});for(var n=Object.keys(t),r=e.$options.props,o=n.length;o--;)r&&i(r,n[o])||te(e,n[o]);k(t),t.__ob__&&t.__ob__.vmCount++;}function Z(e){var t=e.$options.computed;if(t)for(var n in t){var r=t[n];"function"==typeof r?(Ri.get=G(r,e),Ri.set=p):(Ri.get=r.get?r.cache!==!1?G(r.get,e):s(r.get,e):p,Ri.set=r.set?s(r.set,e):p),Object.defineProperty(e,n,Ri);}}function G(e,t){var n=new Pi(t,e,p,{lazy:!0});return function(){return n.dirty&&n.evaluate(),bi.target&&n.depend(),n.value}}function Y(e){var t=e.$options.methods;if(t)for(var n in t)e[n]=null==t[n]?p:s(t[n],e);}function Q(e){var t=e.$options.watch;if(t)for(var n in t){var r=t[n];if(Array.isArray(r))for(var i=0;i<r.length;i++)X(e,n,r[i]);else X(e,n,r);}}function X(e,t,n){var r;f(n)&&(r=n,n=n.handler),"string"==typeof n&&(n=e[n]),e.$watch(t,n,r);}function ee(e){var t={};t.get=function(){return this._data},Object.defineProperty(e.prototype,"$data",t),e.prototype.$set=O,e.prototype.$delete=S,e.prototype.$watch=function(e,t,n){var r=this;n=n||{},n.user=!0;var i=new Pi(r,e,t,n);return n.immediate&&t.call(r,i.value),function(){i.teardown();}};}function te(e,t){g(t)||Object.defineProperty(e,t,{configurable:!0,enumerable:!0,get:function(){return e._data[t]},set:function(n){e._data[t]=n;}});}function ne(e){return new Fi(void 0,void 0,void 0,String(e))}function re(e){var t=new Fi(e.tag,e.data,e.children,e.text,e.elm,e.context,e.componentOptions);return t.ns=e.ns,t.isStatic=e.isStatic,t.key=e.key,t.isCloned=!0,t}function ie(e){for(var t=new Array(e.length),n=0;n<e.length;n++)t[n]=re(e[n]);return t}function oe(e){var t=e.$options,n=t.parent;if(n&&!t.abstract){for(;n.$options.abstract&&n.$parent;)n=n.$parent;n.$children.push(e);}e.$parent=n,e.$root=n?n.$root:e,e.$children=[],e.$refs={},e._watcher=null,e._inactive=!1,e._isMounted=!1,e._isDestroyed=!1,e._isBeingDestroyed=!1;}function ae(e){e.prototype._mount=function(e,t){var n=this;return n.$el=e,n.$options.render||(n.$options.render=Ui),se(n,"beforeMount"),n._watcher=new Pi(n,function(){n._update(n._render(),t);},p),t=!1,null==n.$vnode&&(n._isMounted=!0,se(n,"mounted")),n},e.prototype._update=function(e,t){var n=this;n._isMounted&&se(n,"beforeUpdate");var r=n.$el,i=n._vnode,o=Hi;Hi=n,n._vnode=e,i?n.$el=n.__patch__(i,e):n.$el=n.__patch__(n.$el,e,t,!1,n.$options._parentElm,n.$options._refElm),Hi=o,r&&(r.__vue__=null),n.$el&&(n.$el.__vue__=n),n.$vnode&&n.$parent&&n.$vnode===n.$parent._vnode&&(n.$parent.$el=n.$el),n._isMounted&&se(n,"updated");},e.prototype._updateFromParent=function(e,t,n,r){var i=this,o=!(!i.$options._renderChildren&&!r);if(i.$options._parentVnode=n,i.$vnode=n,i._vnode&&(i._vnode.parent=n),i.$options._renderChildren=r,e&&i.$options.props){ki.shouldConvert=!1;for(var a=i.$options._propKeys||[],s=0;s<a.length;s++){var c=a[s];i[c]=I(c,i.$options.props,e,i);}ki.shouldConvert=!0,i.$options.propsData=e;}if(t){var l=i.$options._parentListeners;i.$options._parentListeners=t,i._updateListeners(t,l);}o&&(i.$slots=Ne(r,n.context),i.$forceUpdate());},e.prototype.$forceUpdate=function(){var e=this;e._watcher&&e._watcher.update();},e.prototype.$destroy=function(){var e=this;if(!e._isBeingDestroyed){se(e,"beforeDestroy"),e._isBeingDestroyed=!0;var t=e.$parent;!t||t._isBeingDestroyed||e.$options.abstract||r(t.$children,e),e._watcher&&e._watcher.teardown();for(var n=e._watchers.length;n--;)e._watchers[n].teardown();e._data.__ob__&&e._data.__ob__.vmCount--,e._isDestroyed=!0,se(e,"destroyed"),e.$off(),e.$el&&(e.$el.__vue__=null),e.__patch__(e._vnode,null);}};}function se(e,t){var n=e.$options[t];if(n)for(var r=0,i=n.length;r<i;r++)n[r].call(e);e.$emit("hook:"+t);}function ce(e,t,n,r,i){if(e){var o=n.$options._base;if(u(e)&&(e=o.extend(e)),"function"==typeof e){if(!e.cid)if(e.resolved)e=e.resolved;else if(e=he(e,o,function(){n.$forceUpdate();}),!e)return;Ie(e),t=t||{};var a=me(t,e);if(e.options.functional)return le(e,a,t,n,r);var s=t.on;t.on=t.nativeOn,e.options.abstract&&(t={}),ye(t);var c=e.options.name||i,l=new Fi("vue-component-"+e.cid+(c?"-"+c:""),t,void 0,void 0,void 0,n,{Ctor:e,propsData:a,listeners:s,tag:i,children:r});return l}}}function le(e,t,n,r,i){var o={},a=e.options.props;if(a)for(var s in a)o[s]=I(s,a,t);var c=Object.create(r),l=function(e,t,n,r){return Oe(c,e,t,n,r,!0)},u=e.options.render.call(null,l,{props:o,data:n,parent:r,children:i,slots:function(){return Ne(i,r)}});return u instanceof Fi&&(u.functionalContext=r,n.slot&&((u.data||(u.data={})).slot=n.slot)),u}function ue(e,t,n,r){var i=e.componentOptions,o={_isComponent:!0,parent:t,propsData:i.propsData,_componentTag:i.tag,_parentVnode:e,_parentListeners:i.listeners,_renderChildren:i.children,_parentElm:n||null,_refElm:r||null},a=e.data.inlineTemplate;return a&&(o.render=a.render,o.staticRenderFns=a.staticRenderFns),new i.Ctor(o)}function fe(e,t,n,r){if(!e.child||e.child._isDestroyed){var i=e.child=ue(e,Hi,n,r);i.$mount(t?e.elm:void 0,t);}else if(e.data.keepAlive){var o=e;de(o,o);}}function de(e,t){var n=t.componentOptions,r=t.child=e.child;r._updateFromParent(n.propsData,n.listeners,t,n.children);}function pe(e){e.child._isMounted||(e.child._isMounted=!0,se(e.child,"mounted")),e.data.keepAlive&&(e.child._inactive=!1,se(e.child,"activated"));}function ve(e){e.child._isDestroyed||(e.data.keepAlive?(e.child._inactive=!0,se(e.child,"deactivated")):e.child.$destroy());}function he(e,t,n){if(!e.requested){e.requested=!0;var r=e.pendingCallbacks=[n],i=!0,o=function(n){if(u(n)&&(n=t.extend(n)),e.resolved=n,!i)for(var o=0,a=r.length;o<a;o++)r[o](n);},a=function(e){},s=e(o,a);return s&&"function"==typeof s.then&&!e.resolved&&s.then(o,a),i=!1,e.resolved}e.pendingCallbacks.push(n);}function me(e,t){var n=t.options.props;if(n){var r={},i=e.attrs,o=e.props,a=e.domProps;if(i||o||a)for(var s in n){var c=Xr(s);ge(r,o,s,c,!0)||ge(r,i,s,c)||ge(r,a,s,c);}return r}}function ge(e,t,n,r,o){if(t){if(i(t,n))return e[n]=t[n],o||delete t[n],!0;if(i(t,r))return e[n]=t[r],o||delete t[r],!0}return!1}function ye(e){e.hook||(e.hook={});for(var t=0;t<Vi.length;t++){var n=Vi[t],r=e.hook[n],i=Bi[n];e.hook[n]=r?_e(i,r):i;}}function _e(e,t){return function(n,r,i,o){e(n,r,i,o),t(n,r,i,o);}}function be(e,t,n,r){r+=t;var i=e.__injected||(e.__injected={});if(!i[r]){i[r]=!0;var o=e[t];o?e[t]=function(){o.apply(this,arguments),n.apply(this,arguments);}:e[t]=n;}}function $e(e,t,n,r,i){var o,a,s,c,l,u,f;for(o in e)if(a=e[o],s=t[o],a)if(s){if(a!==s)if(Array.isArray(s)){s.length=a.length;for(var d=0;d<s.length;d++)s[d]=a[d];e[o]=s;}else s.fn=a,e[o]=s;}else f="~"===o.charAt(0),l=f?o.slice(1):o,u="!"===l.charAt(0),l=u?l.slice(1):l,Array.isArray(a)?n(l,a.invoker=we(a),f,u):(a.invoker||(c=a,a=e[o]={},a.fn=c,a.invoker=xe(a)),n(l,a.invoker,f,u));else;for(o in t)e[o]||(f="~"===o.charAt(0),l=f?o.slice(1):o,u="!"===l.charAt(0),l=u?l.slice(1):l,r(l,t[o].invoker,u));}function we(e){return function(t){for(var n=arguments,r=1===arguments.length,i=0;i<e.length;i++)r?e[i](t):e[i].apply(null,n);}}function xe(e){return function(t){var n=1===arguments.length;n?e.fn(t):e.fn.apply(null,arguments);}}function Ce(e){return o(e)?[ne(e)]:Array.isArray(e)?ke(e):void 0}function ke(e,t){var n,r,i,a=[];for(n=0;n<e.length;n++)r=e[n],null!=r&&"boolean"!=typeof r&&(i=a[a.length-1],Array.isArray(r)?a.push.apply(a,ke(r,(t||"")+"_"+n)):o(r)?i&&i.text?i.text+=String(r):""!==r&&a.push(ne(r)):r.text&&i&&i.text?a[a.length-1]=ne(i.text+r.text):(r.tag&&null==r.key&&null!=t&&(r.key="__vlist"+t+"_"+n+"__"),a.push(r)));return a}function Ae(e){return e&&e.filter(function(e){return e&&e.componentOptions})[0]}function Oe(e,t,n,r,i,a){return(Array.isArray(n)||o(n))&&(i=r,r=n,n=void 0),a&&(i=!0),Se(e,t,n,r,i)}function Se(e,t,n,r,i){if(n&&n.__ob__)return Ui();if(!t)return Ui();Array.isArray(r)&&"function"==typeof r[0]&&(n=n||{},n.scopedSlots={default:r[0]},r.length=0),i&&(r=Ce(r));var o,a;if("string"==typeof t){var s;a=ii.getTagNamespace(t),ii.isReservedTag(t)?o=new Fi(ii.parsePlatformTagName(t),n,r,void 0,void 0,e):(s=P(e.$options,"components",t))?o=ce(s,n,e,r,t):(a="foreignObject"===t?"xhtml":a,o=new Fi(t,n,r,void 0,void 0,e));}else o=ce(t,n,e,r);return o?(a&&Te(o,a),o):Ui()}function Te(e,t){if(e.ns=t,e.children)for(var n=0,r=e.children.length;n<r;n++){var i=e.children[n];i.tag&&!i.ns&&Te(i,t);}}function Ee(e){e.$vnode=null,e._vnode=null,e._staticTrees=null;var t=e.$options._parentVnode,n=t&&t.context;e.$slots=Ne(e.$options._renderChildren,n),e.$scopedSlots={},e._c=function(t,n,r,i){return Oe(e,t,n,r,i,!1)},e.$createElement=function(t,n,r,i){return Oe(e,t,n,r,i,!0)},e.$options.el&&e.$mount(e.$options.el);}function je(n){function r(e,t,n){if(Array.isArray(e))for(var r=0;r<e.length;r++)e[r]&&"string"!=typeof e[r]&&i(e[r],t+"_"+r,n);else i(e,t,n);}function i(e,t,n){e.isStatic=!0,e.key=t,e.isOnce=n;}n.prototype.$nextTick=function(e){return mi(e,this)},n.prototype._render=function(){var e=this,t=e.$options,n=t.render,r=t.staticRenderFns,i=t._parentVnode;if(e._isMounted)for(var o in e.$slots)e.$slots[o]=ie(e.$slots[o]);i&&i.data.scopedSlots&&(e.$scopedSlots=i.data.scopedSlots),r&&!e._staticTrees&&(e._staticTrees=[]),e.$vnode=i;var a;try{a=n.call(e._renderProxy,e.$createElement);}catch(t){if(!ii.errorHandler)throw t;ii.errorHandler.call(null,t,e),a=e._vnode;}return a instanceof Fi||(a=Ui()),a.parent=i,a},n.prototype._s=e,n.prototype._v=ne,n.prototype._n=t,n.prototype._e=Ui,n.prototype._q=h,n.prototype._i=m,n.prototype._m=function(e,t){var n=this._staticTrees[e];return n&&!t?Array.isArray(n)?ie(n):re(n):(n=this._staticTrees[e]=this.$options.staticRenderFns[e].call(this._renderProxy),r(n,"__static__"+e,!1),n)},n.prototype._o=function(e,t,n){return r(e,"__once__"+t+(n?"_"+n:""),!0),e},n.prototype._f=function(e){return P(this.$options,"filters",e,!0)||ri},n.prototype._l=function(e,t){var n,r,i,o,a;if(Array.isArray(e))for(n=new Array(e.length),r=0,i=e.length;r<i;r++)n[r]=t(e[r],r);else if("number"==typeof e)for(n=new Array(e),r=0;r<e;r++)n[r]=t(r+1,r);else if(u(e))for(o=Object.keys(e),n=new Array(o.length),r=0,i=o.length;r<i;r++)a=o[r],n[r]=t(e[a],a,r);return n},n.prototype._t=function(e,t,n){var r=this.$scopedSlots[e];if(r)return r(n||{})||t;var i=this.$slots[e];return i||t},n.prototype._b=function(e,t,n,r){if(n)if(u(n)){Array.isArray(n)&&(n=d(n));for(var i in n)if("class"===i||"style"===i)e[i]=n[i];else{var o=r||ii.mustUseProp(t,i)?e.domProps||(e.domProps={}):e.attrs||(e.attrs={});o[i]=n[i];}}else;return e},n.prototype._k=function(e,t,n){var r=ii.keyCodes[t]||n;return Array.isArray(r)?r.indexOf(e)===-1:r!==e};}function Ne(e,t){var n={};if(!e)return n;for(var r,i,o=[],a=0,s=e.length;a<s;a++)if(i=e[a],(i.context===t||i.functionalContext===t)&&i.data&&(r=i.data.slot)){var c=n[r]||(n[r]=[]);"template"===i.tag?c.push.apply(c,i.children):c.push(i);}else o.push(i);return o.length&&(1!==o.length||" "!==o[0].text&&!o[0].isComment)&&(n.default=o),n}function Le(e){e._events=Object.create(null);var t=e.$options._parentListeners,n=function(t,n,r){r?e.$once(t,n):e.$on(t,n);},r=s(e.$off,e);e._updateListeners=function(t,i){$e(t,i||{},n,r,e);},t&&e._updateListeners(t);}function De(e){e.prototype.$on=function(e,t){var n=this;return(n._events[e]||(n._events[e]=[])).push(t),n},e.prototype.$once=function(e,t){function n(){r.$off(e,n),t.apply(r,arguments);}var r=this;return n.fn=t,r.$on(e,n),r},e.prototype.$off=function(e,t){var n=this;if(!arguments.length)return n._events=Object.create(null),n;var r=n._events[e];if(!r)return n;if(1===arguments.length)return n._events[e]=null,n;for(var i,o=r.length;o--;)if(i=r[o],i===t||i.fn===t){r.splice(o,1);break}return n},e.prototype.$emit=function(e){var t=this,n=t._events[e];if(n){n=n.length>1?c(n):n;for(var r=c(arguments,1),i=0,o=n.length;i<o;i++)n[i].apply(t,r);}return t};}function Me(e){e.prototype._init=function(e){var t=this;t._uid=zi++,t._isVue=!0,e&&e._isComponent?Pe(t,e):t.$options=M(Ie(t.constructor),e||{},t),t._renderProxy=t,t._self=t,oe(t),Le(t),se(t,"beforeCreate"),J(t),se(t,"created"),Ee(t);};}function Pe(e,t){var n=e.$options=Object.create(e.constructor.options);n.parent=t.parent,n.propsData=t.propsData,n._parentVnode=t._parentVnode,n._parentListeners=t._parentListeners,n._renderChildren=t._renderChildren,n._componentTag=t._componentTag,n._parentElm=t._parentElm,n._refElm=t._refElm,t.render&&(n.render=t.render,n.staticRenderFns=t.staticRenderFns);}function Ie(e){var t=e.options;if(e.super){var n=e.super.options,r=e.superOptions,i=e.extendOptions;n!==r&&(e.superOptions=n,i.render=t.render,i.staticRenderFns=t.staticRenderFns,i._scopeId=t._scopeId,t=e.options=M(n,i),t.name&&(t.components[t.name]=e));}return t}function Re(e){this._init(e);}function Fe(e){e.use=function(e){if(!e.installed){var t=c(arguments,1);return t.unshift(this),"function"==typeof e.install?e.install.apply(e,t):e.apply(null,t),e.installed=!0,this}};}function Ue(e){e.mixin=function(e){this.options=M(this.options,e);};}function He(e){e.cid=0;var t=1;e.extend=function(e){e=e||{};var n=this,r=n.cid,i=e._Ctor||(e._Ctor={});if(i[r])return i[r];var o=e.name||n.options.name,a=function(e){this._init(e);};return a.prototype=Object.create(n.prototype),a.prototype.constructor=a,a.cid=t++,a.options=M(n.options,e),a.super=n,a.extend=n.extend,a.mixin=n.mixin,a.use=n.use,ii._assetTypes.forEach(function(e){a[e]=n[e];}),o&&(a.options.components[o]=a),a.superOptions=n.options,a.extendOptions=e,i[r]=a,a};}function Be(e){ii._assetTypes.forEach(function(t){e[t]=function(e,n){return n?("component"===t&&f(n)&&(n.name=n.name||e,n=this.options._base.extend(n)),"directive"===t&&"function"==typeof n&&(n={bind:n,update:n}),this.options[t+"s"][e]=n,n):this.options[t+"s"][e]};});}function Ve(e,t){return"string"==typeof e?e.split(",").indexOf(t)>-1:e.test(t)}function ze(e){var t={};t.get=function(){return ii},Object.defineProperty(e,"config",t),e.util=Ti,e.set=O,e.delete=S,e.nextTick=mi,e.options=Object.create(null),ii._assetTypes.forEach(function(t){e.options[t+"s"]=Object.create(null);}),e.options._base=e,l(e.options.components,Ki),Fe(e),Ue(e),He(e),Be(e);}function qe(e){for(var t=e.data,n=e,r=e;r.child;)r=r.child._vnode,r.data&&(t=Je(r.data,t));for(;n=n.parent;)n.data&&(t=Je(t,n.data));return Ke(t)}function Je(e,t){return{staticClass:We(e.staticClass,t.staticClass),class:e.class?[e.class,t.class]:t.class}}function Ke(e){var t=e.class,n=e.staticClass;return n||t?We(n,Ze(t)):""}function We(e,t){return e?t?e+" "+t:e:t||""}function Ze(e){var t="";if(!e)return t;if("string"==typeof e)return e;if(Array.isArray(e)){for(var n,r=0,i=e.length;r<i;r++)e[r]&&(n=Ze(e[r]))&&(t+=n+" ");return t.slice(0,-1)}if(u(e)){for(var o in e)e[o]&&(t+=o+" ");return t.slice(0,-1)}return t}function Ge(e){return ao(e)?"svg":"math"===e?"math":void 0}function Ye(e){if(!si)return!0;if(co(e))return!1;if(e=e.toLowerCase(),null!=lo[e])return lo[e];var t=document.createElement(e);return e.indexOf("-")>-1?lo[e]=t.constructor===window.HTMLUnknownElement||t.constructor===window.HTMLElement:lo[e]=/HTMLUnknownElement/.test(t.toString())}function Qe(e){if("string"==typeof e){if(e=document.querySelector(e),!e)return document.createElement("div")}return e}function Xe(e,t){var n=document.createElement(e);return"select"!==e?n:(t.data&&t.data.attrs&&"multiple"in t.data.attrs&&n.setAttribute("multiple","multiple"),n)}function et(e,t){return document.createElementNS(io[e],t)}function tt(e){return document.createTextNode(e)}function nt(e){return document.createComment(e)}function rt(e,t,n){e.insertBefore(t,n);}function it(e,t){e.removeChild(t);}function ot(e,t){e.appendChild(t);}function at(e){return e.parentNode}function st(e){return e.nextSibling}function ct(e){return e.tagName}function lt(e,t){e.textContent=t;}function ut(e,t,n){e.setAttribute(t,n);}function ft(e,t){var n=e.data.ref;if(n){var i=e.context,o=e.child||e.elm,a=i.$refs;t?Array.isArray(a[n])?r(a[n],o):a[n]===o&&(a[n]=void 0):e.data.refInFor?Array.isArray(a[n])&&a[n].indexOf(o)<0?a[n].push(o):a[n]=[o]:a[n]=o;}}function dt(e){return null==e}function pt(e){return null!=e}function vt(e,t){return e.key===t.key&&e.tag===t.tag&&e.isComment===t.isComment&&!e.data==!t.data}function ht(e,t,n){var r,i,o={};for(r=t;r<=n;++r)i=e[r].key,pt(i)&&(o[i]=r);return o}function mt(e){function t(e){return new Fi(S.tagName(e).toLowerCase(),{},[],void 0,e)}function r(e,t){function n(){0===--n.listeners&&i(e);}return n.listeners=t,n}function i(e){var t=S.parentNode(e);t&&S.removeChild(t,e);}function a(e,t,n,r,i){if(e.isRootInsert=!i,pt(e.componentOptions))return void(vo&&e.componentOptions.Ctor.options.bootAsync?requestIdleCallback(function(){s(e,t,n,r);}):s(e,t,n,r));var o=e.data,a=e.children,c=e.tag;pt(c)?(e.elm=e.ns?S.createElementNS(e.ns,c):S.createElement(c,e),v(e),u(e,a,t),pt(o)&&d(e,t),l(n,e.elm,r)):e.isComment?(e.elm=S.createComment(e.text),l(n,e.elm,r)):(e.elm=S.createTextNode(e.text),l(n,e.elm,r));}function s(e,t,n,r){var i=pt(e.child)&&e.data.keepAlive;e.data.hook.init(e,!1,n,r),p(e,t),i&&c(e,t,n,r);}function c(e,t,n,r){for(var i,o=e;o.child;)if(o=o.child._vnode,pt(i=o.data)&&pt(i=i.transition)){for(i=0;i<A.activate.length;++i)A.activate[i](po,o);t.push(o);break}l(n,e.elm,r);}function l(e,t,n){e&&(n?S.insertBefore(e,t,n):S.appendChild(e,t));}function u(e,t,n){if(Array.isArray(t))for(var r=0;r<t.length;++r)a(t[r],n,e.elm,null,!0);else o(e.text)&&S.appendChild(e.elm,S.createTextNode(e.text));}function f(e){for(;e.child;)e=e.child._vnode;return pt(e.tag)}function d(e,t){for(var n=0;n<A.create.length;++n)A.create[n](po,e);C=e.data.hook,pt(C)&&(C.create&&C.create(po,e),C.insert&&t.push(e));}function p(e,t){e.data.pendingInsert&&t.push.apply(t,e.data.pendingInsert),e.elm=e.child.$el,f(e)?(d(e,t),v(e)):(ft(e),t.push(e));}function v(e){var t;pt(t=e.context)&&pt(t=t.$options._scopeId)&&S.setAttribute(e.elm,t,""),pt(t=Hi)&&t!==e.context&&pt(t=t.$options._scopeId)&&S.setAttribute(e.elm,t,"");}function h(e,t,n,r,i,o){for(;r<=i;++r)a(n[r],o,e,t);}function m(e){var t,n,r=e.data;if(pt(r))for(pt(t=r.hook)&&pt(t=t.destroy)&&t(e),t=0;t<A.destroy.length;++t)A.destroy[t](e);if(pt(t=e.children))for(n=0;n<e.children.length;++n)m(e.children[n]);}function g(e,t,n,r){for(;n<=r;++n){var i=t[n];pt(i)&&(pt(i.tag)?(y(i),m(i)):S.removeChild(e,i.elm));}}function y(e,t){if(t||pt(e.data)){var n=A.remove.length+1;for(t?t.listeners+=n:t=r(e.elm,n),pt(C=e.child)&&pt(C=C._vnode)&&pt(C.data)&&y(C,t),C=0;C<A.remove.length;++C)A.remove[C](e,t);pt(C=e.data.hook)&&pt(C=C.remove)?C(e,t):t();}else i(e.elm);}function _(e,t,n,r,i){for(var o,s,c,l,u=0,f=0,d=t.length-1,p=t[0],v=t[d],m=n.length-1,y=n[0],_=n[m],$=!i;u<=d&&f<=m;)dt(p)?p=t[++u]:dt(v)?v=t[--d]:vt(p,y)?(b(p,y,r),p=t[++u],y=n[++f]):vt(v,_)?(b(v,_,r),v=t[--d],_=n[--m]):vt(p,_)?(b(p,_,r),$&&S.insertBefore(e,p.elm,S.nextSibling(v.elm)),p=t[++u],_=n[--m]):vt(v,y)?(b(v,y,r),$&&S.insertBefore(e,v.elm,p.elm),v=t[--d],y=n[++f]):(dt(o)&&(o=ht(t,u,d)),s=pt(y.key)?o[y.key]:null,dt(s)?(a(y,r,e,p.elm),y=n[++f]):(c=t[s],vt(c,y)?(b(c,y,r),t[s]=void 0,$&&S.insertBefore(e,y.elm,p.elm),y=n[++f]):(a(y,r,e,p.elm),y=n[++f])));u>d?(l=dt(n[m+1])?null:n[m+1].elm,h(e,l,n,f,m,r)):f>m&&g(e,t,u,d);}function b(e,t,n,r){if(e!==t){if(t.isStatic&&e.isStatic&&t.key===e.key&&(t.isCloned||t.isOnce))return t.elm=e.elm,void(t.child=e.child);var i,o=t.data,a=pt(o);a&&pt(i=o.hook)&&pt(i=i.prepatch)&&i(e,t);var s=t.elm=e.elm,c=e.children,l=t.children;if(a&&f(t)){for(i=0;i<A.update.length;++i)A.update[i](e,t);pt(i=o.hook)&&pt(i=i.update)&&i(e,t);}dt(t.text)?pt(c)&&pt(l)?c!==l&&_(s,c,l,n,r):pt(l)?(pt(e.text)&&S.setTextContent(s,""),h(s,null,l,0,l.length-1,n)):pt(c)?g(s,c,0,c.length-1):pt(e.text)&&S.setTextContent(s,""):e.text!==t.text&&S.setTextContent(s,t.text),a&&pt(i=o.hook)&&pt(i=i.postpatch)&&i(e,t);}}function $(e,t,n){if(n&&e.parent)e.parent.data.pendingInsert=t;else for(var r=0;r<t.length;++r)t[r].data.hook.insert(t[r]);}function w(e,t,n){t.elm=e;var r=t.tag,i=t.data,o=t.children;if(pt(t.componentOptions))return vo&&t.componentOptions.Ctor.options.bootAsync?requestIdleCallback(function(){x(t,n);}):x(t,n),!0;if(pt(r)){if(pt(o))if(e.hasChildNodes()){for(var a=!0,s=e.firstChild,c=0;c<o.length;c++){if(!s||!w(s,o[c],n)){a=!1;break}s=s.nextSibling;}if(!a||s)return!1}else u(t,o,n);if(pt(i))for(var l in i)if(!T(l)){d(t,n);break}}return!0}function x(e,t){e.data.hook.init(e,!0),p(e,t);}var C,k,A={},O=e.modules,S=e.nodeOps;for(C=0;C<ho.length;++C)for(A[ho[C]]=[],k=0;k<O.length;++k)void 0!==O[k][ho[C]]&&A[ho[C]].push(O[k][ho[C]]);var T=n("attrs,style,class,staticClass,staticStyle,key");return function(e,n,r,i,o,s){if(!n)return void(e&&m(e));var c,l,u=!1,d=[];if(e){var p=pt(e.nodeType);if(!p&&vt(e,n))b(e,n,d,i);else{if(p){if(1===e.nodeType&&e.hasAttribute("server-rendered")&&(e.removeAttribute("server-rendered"),r=!0),r&&w(e,n,d))return $(n,d,!0),e;e=t(e);}if(c=e.elm,l=S.parentNode(c),a(n,d,l,S.nextSibling(c)),n.parent){for(var v=n.parent;v;)v.elm=n.elm,v=v.parent;if(f(n))for(var h=0;h<A.create.length;++h)A.create[h](po,n.parent);}null!==l?g(l,[e],0,0):pt(e.tag)&&m(e);}}else u=!0,a(n,d,o,s);return $(n,d,u),n.elm}}function gt(e,t){(e.data.directives||t.data.directives)&&yt(e,t);}function yt(e,t){var n,r,i,o=e===po,a=_t(e.data.directives,e.context),s=_t(t.data.directives,t.context),c=[],l=[];for(n in s)r=a[n],i=s[n],r?(i.oldValue=r.value,$t(i,"update",t,e),i.def&&i.def.componentUpdated&&l.push(i)):($t(i,"bind",t,e),i.def&&i.def.inserted&&c.push(i));if(c.length){var u=function(){for(var n=0;n<c.length;n++)$t(c[n],"inserted",t,e);};o?be(t.data.hook||(t.data.hook={}),"insert",u,"dir-insert"):u();}if(l.length&&be(t.data.hook||(t.data.hook={}),"postpatch",function(){for(var n=0;n<l.length;n++)$t(l[n],"componentUpdated",t,e);},"dir-postpatch"),!o)for(n in a)s[n]||$t(a[n],"unbind",e);}function _t(e,t){var n=Object.create(null);if(!e)return n;var r,i;for(r=0;r<e.length;r++)i=e[r],i.modifiers||(i.modifiers=go),n[bt(i)]=i,i.def=P(t.$options,"directives",i.name,!0);return n}function bt(e){return e.rawName||e.name+"."+Object.keys(e.modifiers||{}).join(".")}function $t(e,t,n,r){var i=e.def&&e.def[t];i&&i(n.elm,e,n,r);}function wt(e,t){if(e.data.attrs||t.data.attrs){var n,r,i,o=t.elm,a=e.data.attrs||{},s=t.data.attrs||{};s.__ob__&&(s=t.data.attrs=l({},s));for(n in s)r=s[n],i=a[n],i!==r&&xt(o,n,r);ui&&s.value!==a.value&&xt(o,"value",s.value);for(n in a)null==s[n]&&(to(n)?o.removeAttributeNS(eo,no(n)):Qi(n)||o.removeAttribute(n));}}function xt(e,t,n){Xi(t)?ro(n)?e.removeAttribute(t):e.setAttribute(t,t):Qi(t)?e.setAttribute(t,ro(n)||"false"===n?"false":"true"):to(t)?ro(n)?e.removeAttributeNS(eo,no(t)):e.setAttributeNS(eo,t,n):ro(n)?e.removeAttribute(t):e.setAttribute(t,n);}function Ct(e,t){var n=t.elm,r=t.data,i=e.data;if(r.staticClass||r.class||i&&(i.staticClass||i.class)){var o=qe(t),a=n._transitionClasses;a&&(o=We(o,Ze(a))),o!==n._prevClass&&(n.setAttribute("class",o),n._prevClass=o);}}function kt(e,t,n,r){if(n){var i=t;t=function(n){At(e,t,r),1===arguments.length?i(n):i.apply(null,arguments);};}Wi.addEventListener(e,t,r);}function At(e,t,n){Wi.removeEventListener(e,t,n);}function Ot(e,t){if(e.data.on||t.data.on){var n=t.data.on||{},r=e.data.on||{};Wi=t.elm,$e(n,r,kt,At,t.context);}}function St(e,t){if(e.data.domProps||t.data.domProps){var n,r,i=t.elm,o=e.data.domProps||{},a=t.data.domProps||{};a.__ob__&&(a=t.data.domProps=l({},a));for(n in o)null==a[n]&&(i[n]="");for(n in a)if(r=a[n],"textContent"!==n&&"innerHTML"!==n||(t.children&&(t.children.length=0),r!==o[n]))if("value"===n){i._value=r;var s=null==r?"":String(r);!i.composing&&(document.activeElement!==i&&i.value!==s||Tt(t,s))&&(i.value=s);}else i[n]=r;}}function Tt(e,n){var r=e.elm.value,i=e.elm._vModifiers;return i&&i.number||"number"===e.elm.type?t(r)!==t(n):i&&i.trim?r.trim()!==n.trim():r!==n}function Et(e){var t=jt(e.style);return e.staticStyle?l(e.staticStyle,t):t}function jt(e){return Array.isArray(e)?d(e):"string"==typeof e?xo(e):e}function Nt(e,t){var n,r={};if(t)for(var i=e;i.child;)i=i.child._vnode,i.data&&(n=Et(i.data))&&l(r,n);(n=Et(e.data))&&l(r,n);for(var o=e;o=o.parent;)o.data&&(n=Et(o.data))&&l(r,n);return r}function Lt(e,t){var n=t.data,r=e.data;if(n.staticStyle||n.style||r.staticStyle||r.style){var i,o,a=t.elm,s=e.data.staticStyle,c=e.data.style||{},u=s||c,f=jt(t.data.style)||{};t.data.style=f.__ob__?l({},f):f;var d=Nt(t,!0);for(o in u)null==d[o]&&Ao(a,o,"");for(o in d)i=d[o],i!==u[o]&&Ao(a,o,null==i?"":i);}}function Dt(e,t){if(t&&t.trim())if(e.classList)t.indexOf(" ")>-1?t.split(/\s+/).forEach(function(t){return e.classList.add(t)}):e.classList.add(t);else{var n=" "+e.getAttribute("class")+" ";n.indexOf(" "+t+" ")<0&&e.setAttribute("class",(n+t).trim());}}function Mt(e,t){if(t&&t.trim())if(e.classList)t.indexOf(" ")>-1?t.split(/\s+/).forEach(function(t){return e.classList.remove(t)}):e.classList.remove(t);else{for(var n=" "+e.getAttribute("class")+" ",r=" "+t+" ";n.indexOf(r)>=0;)n=n.replace(r," ");e.setAttribute("class",n.trim());}}function Pt(e){Io(function(){Io(e);});}function It(e,t){(e._transitionClasses||(e._transitionClasses=[])).push(t),Dt(e,t);}function Rt(e,t){e._transitionClasses&&r(e._transitionClasses,t),Mt(e,t);}function Ft(e,t,n){var r=Ut(e,t),i=r.type,o=r.timeout,a=r.propCount;if(!i)return n();var s=i===jo?Do:Po,c=0,l=function(){e.removeEventListener(s,u),n();},u=function(t){t.target===e&&++c>=a&&l();};setTimeout(function(){c<a&&l();},o+1),e.addEventListener(s,u);}function Ut(e,t){var n,r=window.getComputedStyle(e),i=r[Lo+"Delay"].split(", "),o=r[Lo+"Duration"].split(", "),a=Ht(i,o),s=r[Mo+"Delay"].split(", "),c=r[Mo+"Duration"].split(", "),l=Ht(s,c),u=0,f=0;t===jo?a>0&&(n=jo,u=a,f=o.length):t===No?l>0&&(n=No,u=l,f=c.length):(u=Math.max(a,l),n=u>0?a>l?jo:No:null,f=n?n===jo?o.length:c.length:0);var d=n===jo&&Ro.test(r[Lo+"Property"]);return{type:n,timeout:u,propCount:f,hasTransform:d}}function Ht(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max.apply(null,t.map(function(t,n){return Bt(t)+Bt(e[n])}))}function Bt(e){return 1e3*Number(e.slice(0,-1))}function Vt(e,t){var n=e.elm;n._leaveCb&&(n._leaveCb.cancelled=!0,n._leaveCb());var r=qt(e.data.transition);if(r&&!n._enterCb&&1===n.nodeType){for(var i=r.css,o=r.type,a=r.enterClass,s=r.enterActiveClass,c=r.appearClass,l=r.appearActiveClass,u=r.beforeEnter,f=r.enter,d=r.afterEnter,p=r.enterCancelled,v=r.beforeAppear,h=r.appear,m=r.afterAppear,g=r.appearCancelled,y=Hi,_=Hi.$vnode;_&&_.parent;)_=_.parent,y=_.context;var b=!y._isMounted||!e.isRootInsert;if(!b||h||""===h){var $=b?c:a,w=b?l:s,x=b?v||u:u,C=b&&"function"==typeof h?h:f,k=b?m||d:d,A=b?g||p:p,O=i!==!1&&!ui,S=C&&(C._length||C.length)>1,T=n._enterCb=Jt(function(){
O&&Rt(n,w),T.cancelled?(O&&Rt(n,$),A&&A(n)):k&&k(n),n._enterCb=null;});e.data.show||be(e.data.hook||(e.data.hook={}),"insert",function(){var t=n.parentNode,r=t&&t._pending&&t._pending[e.key];r&&r.context===e.context&&r.tag===e.tag&&r.elm._leaveCb&&r.elm._leaveCb(),C&&C(n,T);},"transition-insert"),x&&x(n),O&&(It(n,$),It(n,w),Pt(function(){Rt(n,$),T.cancelled||S||Ft(n,o,T);})),e.data.show&&(t&&t(),C&&C(n,T)),O||S||T();}}}function zt(e,t){function n(){m.cancelled||(e.data.show||((r.parentNode._pending||(r.parentNode._pending={}))[e.key]=e),l&&l(r),v&&(It(r,s),It(r,c),Pt(function(){Rt(r,s),m.cancelled||h||Ft(r,a,m);})),u&&u(r,m),v||h||m());}var r=e.elm;r._enterCb&&(r._enterCb.cancelled=!0,r._enterCb());var i=qt(e.data.transition);if(!i)return t();if(!r._leaveCb&&1===r.nodeType){var o=i.css,a=i.type,s=i.leaveClass,c=i.leaveActiveClass,l=i.beforeLeave,u=i.leave,f=i.afterLeave,d=i.leaveCancelled,p=i.delayLeave,v=o!==!1&&!ui,h=u&&(u._length||u.length)>1,m=r._leaveCb=Jt(function(){r.parentNode&&r.parentNode._pending&&(r.parentNode._pending[e.key]=null),v&&Rt(r,c),m.cancelled?(v&&Rt(r,s),d&&d(r)):(t(),f&&f(r)),r._leaveCb=null;});p?p(n):n();}}function qt(e){if(e){if("object"==typeof e){var t={};return e.css!==!1&&l(t,Fo(e.name||"v")),l(t,e),t}return"string"==typeof e?Fo(e):void 0}}function Jt(e){var t=!1;return function(){t||(t=!0,e());}}function Kt(e,t){t.data.show||Vt(t);}function Wt(e,t,n){var r=t.value,i=e.multiple;if(!i||Array.isArray(r)){for(var o,a,s=0,c=e.options.length;s<c;s++)if(a=e.options[s],i)o=m(r,Gt(a))>-1,a.selected!==o&&(a.selected=o);else if(h(Gt(a),r))return void(e.selectedIndex!==s&&(e.selectedIndex=s));i||(e.selectedIndex=-1);}}function Zt(e,t){for(var n=0,r=t.length;n<r;n++)if(h(Gt(t[n]),e))return!1;return!0}function Gt(e){return"_value"in e?e._value:e.value}function Yt(e){e.target.composing=!0;}function Qt(e){e.target.composing=!1,Xt(e.target,"input");}function Xt(e,t){var n=document.createEvent("HTMLEvents");n.initEvent(t,!0,!0),e.dispatchEvent(n);}function en(e){return!e.child||e.data&&e.data.transition?e:en(e.child._vnode)}function tn(e){var t=e&&e.componentOptions;return t&&t.Ctor.options.abstract?tn(Ae(t.children)):e}function nn(e){var t={},n=e.$options;for(var r in n.propsData)t[r]=e[r];var i=n._parentListeners;for(var o in i)t[Gr(o)]=i[o].fn;return t}function rn(e,t){return/\d-keep-alive$/.test(t.tag)?e("keep-alive"):null}function on(e){for(;e=e.parent;)if(e.data.transition)return!0}function an(e){e.elm._moveCb&&e.elm._moveCb(),e.elm._enterCb&&e.elm._enterCb();}function sn(e){e.data.newPos=e.elm.getBoundingClientRect();}function cn(e){var t=e.data.pos,n=e.data.newPos,r=t.left-n.left,i=t.top-n.top;if(r||i){e.data.moved=!0;var o=e.elm.style;o.transform=o.WebkitTransform="translate("+r+"px,"+i+"px)",o.transitionDuration="0s";}}function ln(e,t){var n=document.createElement("div");return n.innerHTML='<div a="'+e+'">',n.innerHTML.indexOf(t)>0}function un(e){return Qo=Qo||document.createElement("div"),Qo.innerHTML=e,Qo.textContent}function fn(e,t){return t&&(e=e.replace(Ja,"\n")),e.replace(za,"<").replace(qa,">").replace(Ka,"&").replace(Wa,'"')}function dn(e,t){function n(t){f+=t,e=e.substring(t);}function r(){var t=e.match(la);if(t){var r={tagName:t[1],attrs:[],start:f};n(t[0].length);for(var i,o;!(i=e.match(ua))&&(o=e.match(aa));)n(o[0].length),r.attrs.push(o);if(i)return r.unarySlash=i[1],n(i[0].length),r.end=f,r}}function i(e){var n=e.tagName,r=e.unarySlash;l&&("p"===s&&na(n)&&o("",s),ta(n)&&s===n&&o("",n));for(var i=u(n)||"html"===n&&"head"===s||!!r,a=e.attrs.length,f=new Array(a),d=0;d<a;d++){var p=e.attrs[d];ha&&p[0].indexOf('""')===-1&&(""===p[3]&&delete p[3],""===p[4]&&delete p[4],""===p[5]&&delete p[5]);var v=p[3]||p[4]||p[5]||"";f[d]={name:p[1],value:fn(v,t.shouldDecodeNewlines)};}i||(c.push({tag:n,attrs:f}),s=n,r=""),t.start&&t.start(n,f,i,e.start,e.end);}function o(e,n,r,i){var o;if(null==r&&(r=f),null==i&&(i=f),n){var a=n.toLowerCase();for(o=c.length-1;o>=0&&c[o].tag.toLowerCase()!==a;o--);}else o=0;if(o>=0){for(var l=c.length-1;l>=o;l--)t.end&&t.end(c[l].tag,r,i);c.length=o,s=o&&c[o-1].tag;}else"br"===n.toLowerCase()?t.start&&t.start(n,[],!0,r,i):"p"===n.toLowerCase()&&(t.start&&t.start(n,[],!1,r,i),t.end&&t.end(n,r,i));}for(var a,s,c=[],l=t.expectHTML,u=t.isUnaryTag||ni,f=0;e;){if(a=e,s&&Ba(s,t.sfc,c)){var d=s.toLowerCase(),p=Va[d]||(Va[d]=new RegExp("([\\s\\S]*?)(</"+d+"[^>]*>)","i")),v=0,h=e.replace(p,function(e,n,r){return v=r.length,"script"!==d&&"style"!==d&&"noscript"!==d&&(n=n.replace(/<!--([\s\S]*?)-->/g,"$1").replace(/<!\[CDATA\[([\s\S]*?)]]>/g,"$1")),t.chars&&t.chars(n),""});f+=e.length-h.length,e=h,o("</"+d+">",d,f-v,f);}else{var m=e.indexOf("<");if(0===m){if(pa.test(e)){var g=e.indexOf("-->");if(g>=0){n(g+3);continue}}if(va.test(e)){var y=e.indexOf("]>");if(y>=0){n(y+2);continue}}var _=e.match(da);if(_){n(_[0].length);continue}var b=e.match(fa);if(b){var $=f;n(b[0].length),o(b[0],b[1],$,f);continue}var w=r();if(w){i(w);continue}}var x=void 0,C=void 0,k=void 0;if(m>0){for(C=e.slice(m);!(fa.test(C)||la.test(C)||pa.test(C)||va.test(C)||(k=C.indexOf("<",1),k<0));)m+=k,C=e.slice(m);x=e.substring(0,m),n(m);}m<0&&(x=e,e=""),t.chars&&x&&t.chars(x);}if(e===a&&t.chars){t.chars(e);break}}o();}function pn(e){function t(){(a||(a=[])).push(e.slice(v,i).trim()),v=i+1;}var n,r,i,o,a,s=!1,c=!1,l=!1,u=!1,f=0,d=0,p=0,v=0;for(i=0;i<e.length;i++)if(r=n,n=e.charCodeAt(i),s)39===n&&92!==r&&(s=!1);else if(c)34===n&&92!==r&&(c=!1);else if(l)96===n&&92!==r&&(l=!1);else if(u)47===n&&92!==r&&(u=!1);else if(124!==n||124===e.charCodeAt(i+1)||124===e.charCodeAt(i-1)||f||d||p){switch(n){case 34:c=!0;break;case 39:s=!0;break;case 96:l=!0;break;case 40:p++;break;case 41:p--;break;case 91:d++;break;case 93:d--;break;case 123:f++;break;case 125:f--;}if(47===n){for(var h=i-1,m=void 0;h>=0&&(m=e.charAt(h)," "===m);h--);m&&/[\w$]/.test(m)||(u=!0);}}else void 0===o?(v=i+1,o=e.slice(0,i).trim()):t();if(void 0===o?o=e.slice(0,i).trim():0!==v&&t(),a)for(i=0;i<a.length;i++)o=vn(o,a[i]);return o}function vn(e,t){var n=t.indexOf("(");if(n<0)return'_f("'+t+'")('+e+")";var r=t.slice(0,n),i=t.slice(n+1);return'_f("'+r+'")('+e+","+i}function hn(e,t){var n=t?Ya(t):Za;if(n.test(e)){for(var r,i,o=[],a=n.lastIndex=0;r=n.exec(e);){i=r.index,i>a&&o.push(JSON.stringify(e.slice(a,i)));var s=pn(r[1].trim());o.push("_s("+s+")"),a=i+r[0].length;}return a<e.length&&o.push(JSON.stringify(e.slice(a))),o.join("+")}}function mn(e){console.error("[Vue parser]: "+e);}function gn(e,t){return e?e.map(function(e){return e[t]}).filter(function(e){return e}):[]}function yn(e,t,n){(e.props||(e.props=[])).push({name:t,value:n});}function _n(e,t,n){(e.attrs||(e.attrs=[])).push({name:t,value:n});}function bn(e,t,n,r,i,o){(e.directives||(e.directives=[])).push({name:t,rawName:n,value:r,arg:i,modifiers:o});}function $n(e,t,n,r,i){r&&r.capture&&(delete r.capture,t="!"+t),r&&r.once&&(delete r.once,t="~"+t);var o;r&&r.native?(delete r.native,o=e.nativeEvents||(e.nativeEvents={})):o=e.events||(e.events={});var a={value:n,modifiers:r},s=o[t];Array.isArray(s)?i?s.unshift(a):s.push(a):s?o[t]=i?[a,s]:[s,a]:o[t]=a;}function wn(e,t,n){var r=xn(e,":"+t)||xn(e,"v-bind:"+t);if(null!=r)return pn(r);if(n!==!1){var i=xn(e,t);if(null!=i)return JSON.stringify(i)}}function xn(e,t){var n;if(null!=(n=e.attrsMap[t]))for(var r=e.attrsList,i=0,o=r.length;i<o;i++)if(r[i].name===t){r.splice(i,1);break}return n}function Cn(e){if(ga=e,ma=ga.length,_a=ba=$a=0,e.indexOf("[")<0||e.lastIndexOf("]")<ma-1)return{exp:e,idx:null};for(;!An();)ya=kn(),On(ya)?Tn(ya):91===ya&&Sn(ya);return{exp:e.substring(0,ba),idx:e.substring(ba+1,$a)}}function kn(){return ga.charCodeAt(++_a)}function An(){return _a>=ma}function On(e){return 34===e||39===e}function Sn(e){var t=1;for(ba=_a;!An();)if(e=kn(),On(e))Tn(e);else if(91===e&&t++,93===e&&t--,0===t){$a=_a;break}}function Tn(e){for(var t=e;!An()&&(e=kn(),e!==t););}function En(e,t){wa=t.warn||mn,xa=t.getTagNamespace||ni,Ca=t.mustUseProp||ni,ka=t.isPreTag||ni,Aa=gn(t.modules,"preTransformNode"),Oa=gn(t.modules,"transformNode"),Sa=gn(t.modules,"postTransformNode"),Ta=t.delimiters;var n,r,i=[],o=t.preserveWhitespace!==!1,a=!1,s=!1;return dn(e,{expectHTML:t.expectHTML,isUnaryTag:t.isUnaryTag,shouldDecodeNewlines:t.shouldDecodeNewlines,start:function(e,o,c){function l(e){}var u=r&&r.ns||xa(e);li&&"svg"===u&&(o=Wn(o));var f={type:1,tag:e,attrsList:o,attrsMap:qn(o),parent:r,children:[]};u&&(f.ns=u),Kn(f)&&!vi()&&(f.forbidden=!0);for(var d=0;d<Aa.length;d++)Aa[d](f,t);if(a||(jn(f),f.pre&&(a=!0)),ka(f.tag)&&(s=!0),a)Nn(f);else{Mn(f),Pn(f),Fn(f),Ln(f),f.plain=!f.key&&!o.length,Dn(f),Un(f),Hn(f);for(var p=0;p<Oa.length;p++)Oa[p](f,t);Bn(f);}if(n?i.length||n.if&&(f.elseif||f.else)&&(l(f),Rn(n,{exp:f.elseif,block:f})):(n=f,l(n)),r&&!f.forbidden)if(f.elseif||f.else)In(f,r);else if(f.slotScope){r.plain=!1;var v=f.slotTarget||"default";(r.scopedSlots||(r.scopedSlots={}))[v]=f;}else r.children.push(f),f.parent=r;c||(r=f,i.push(f));for(var h=0;h<Sa.length;h++)Sa[h](f,t);},end:function(){var e=i[i.length-1],t=e.children[e.children.length-1];t&&3===t.type&&" "===t.text&&e.children.pop(),i.length-=1,r=i[i.length-1],e.pre&&(a=!1),ka(e.tag)&&(s=!1);},chars:function(e){if(r&&(!li||"textarea"!==r.tag||r.attrsMap.placeholder!==e)&&(e=s||e.trim()?os(e):o&&r.children.length?" ":"")){var t;!a&&" "!==e&&(t=hn(e,Ta))?r.children.push({type:2,expression:t,text:e}):r.children.push({type:3,text:e});}}}),n}function jn(e){null!=xn(e,"v-pre")&&(e.pre=!0);}function Nn(e){var t=e.attrsList.length;if(t)for(var n=e.attrs=new Array(t),r=0;r<t;r++)n[r]={name:e.attrsList[r].name,value:JSON.stringify(e.attrsList[r].value)};else e.pre||(e.plain=!0);}function Ln(e){var t=wn(e,"key");t&&(e.key=t);}function Dn(e){var t=wn(e,"ref");t&&(e.ref=t,e.refInFor=Vn(e));}function Mn(e){var t;if(t=xn(e,"v-for")){var n=t.match(Xa);if(!n)return;e.for=n[2].trim();var r=n[1].trim(),i=r.match(es);i?(e.alias=i[1].trim(),e.iterator1=i[2].trim(),i[3]&&(e.iterator2=i[3].trim())):e.alias=r;}}function Pn(e){var t=xn(e,"v-if");if(t)e.if=t,Rn(e,{exp:t,block:e});else{null!=xn(e,"v-else")&&(e.else=!0);var n=xn(e,"v-else-if");n&&(e.elseif=n);}}function In(e,t){var n=Jn(t.children);n&&n.if&&Rn(n,{exp:e.elseif,block:e});}function Rn(e,t){e.ifConditions||(e.ifConditions=[]),e.ifConditions.push(t);}function Fn(e){var t=xn(e,"v-once");null!=t&&(e.once=!0);}function Un(e){if("slot"===e.tag)e.slotName=wn(e,"name");else{var t=wn(e,"slot");t&&(e.slotTarget='""'===t?'"default"':t),"template"===e.tag&&(e.slotScope=xn(e,"scope"));}}function Hn(e){var t;(t=wn(e,"is"))&&(e.component=t),null!=xn(e,"inline-template")&&(e.inlineTemplate=!0);}function Bn(e){var t,n,r,i,o,a,s,c,l=e.attrsList;for(t=0,n=l.length;t<n;t++)if(r=i=l[t].name,o=l[t].value,Qa.test(r))if(e.hasBindings=!0,s=zn(r),s&&(r=r.replace(is,"")),ts.test(r))r=r.replace(ts,""),o=pn(o),c=!1,s&&(s.prop&&(c=!0,r=Gr(r),"innerHtml"===r&&(r="innerHTML")),s.camel&&(r=Gr(r))),c||Ca(e.tag,r)?yn(e,r,o):_n(e,r,o);else if(ns.test(r))r=r.replace(ns,""),$n(e,r,o,s);else{r=r.replace(Qa,"");var u=r.match(rs);u&&(a=u[1])&&(r=r.slice(0,-(a.length+1))),bn(e,r,i,o,a,s);}else _n(e,r,JSON.stringify(o));}function Vn(e){for(var t=e;t;){if(void 0!==t.for)return!0;t=t.parent;}return!1}function zn(e){var t=e.match(is);if(t){var n={};return t.forEach(function(e){n[e.slice(1)]=!0;}),n}}function qn(e){for(var t={},n=0,r=e.length;n<r;n++)t[e[n].name]=e[n].value;return t}function Jn(e){for(var t=e.length;t--;)if(e[t].tag)return e[t]}function Kn(e){return"style"===e.tag||"script"===e.tag&&(!e.attrsMap.type||"text/javascript"===e.attrsMap.type)}function Wn(e){for(var t=[],n=0;n<e.length;n++){var r=e[n];as.test(r.name)||(r.name=r.name.replace(ss,""),t.push(r));}return t}function Zn(e,t){e&&(Ea=cs(t.staticKeys||""),ja=t.isReservedTag||ni,Yn(e),Qn(e,!1));}function Gn(e){return n("type,tag,attrsList,attrsMap,plain,parent,children,attrs"+(e?","+e:""))}function Yn(e){if(e.static=er(e),1===e.type){if(!ja(e.tag)&&"slot"!==e.tag&&null==e.attrsMap["inline-template"])return;for(var t=0,n=e.children.length;t<n;t++){var r=e.children[t];Yn(r),r.static||(e.static=!1);}}}function Qn(e,t){if(1===e.type){if((e.static||e.once)&&(e.staticInFor=t),e.static&&e.children.length&&(1!==e.children.length||3!==e.children[0].type))return void(e.staticRoot=!0);if(e.staticRoot=!1,e.children)for(var n=0,r=e.children.length;n<r;n++)Qn(e.children[n],t||!!e.for);e.ifConditions&&Xn(e.ifConditions,t);}}function Xn(e,t){for(var n=1,r=e.length;n<r;n++)Qn(e[n].block,t);}function er(e){return 2!==e.type&&(3===e.type||!(!e.pre&&(e.hasBindings||e.if||e.for||Kr(e.tag)||!ja(e.tag)||tr(e)||!Object.keys(e).every(Ea))))}function tr(e){for(;e.parent;){if(e=e.parent,"template"!==e.tag)return!1;if(e.for)return!0}return!1}function nr(e,t){var n=t?"nativeOn:{":"on:{";for(var r in e)n+='"'+r+'":'+rr(r,e[r])+",";return n.slice(0,-1)+"}"}function rr(e,t){if(t){if(Array.isArray(t))return"["+t.map(function(t){return rr(e,t)}).join(",")+"]";if(t.modifiers){var n="",r=[];for(var i in t.modifiers)ds[i]?n+=ds[i]:r.push(i);r.length&&(n=ir(r)+n);var o=us.test(t.value)?t.value+"($event)":t.value;return"function($event){"+n+o+"}"}return ls.test(t.value)||us.test(t.value)?t.value:"function($event){"+t.value+"}"}return"function(){}"}function ir(e){return"if("+e.map(or).join("&&")+")return;"}function or(e){var t=parseInt(e,10);if(t)return"$event.keyCode!=="+t;var n=fs[e];return"_k($event.keyCode,"+JSON.stringify(e)+(n?","+JSON.stringify(n):"")+")"}function ar(e,t){e.wrapData=function(n){return"_b("+n+",'"+e.tag+"',"+t.value+(t.modifiers&&t.modifiers.prop?",true":"")+")"};}function sr(e,t){var n=Pa,r=Pa=[],i=Ia;Ia=0,Ra=t,Na=t.warn||mn,La=gn(t.modules,"transformCode"),Da=gn(t.modules,"genData"),Ma=t.directives||{};var o=e?cr(e):'_c("div")';return Pa=n,Ia=i,{render:"with(this){return "+o+"}",staticRenderFns:r}}function cr(e){if(e.staticRoot&&!e.staticProcessed)return lr(e);if(e.once&&!e.onceProcessed)return ur(e);if(e.for&&!e.forProcessed)return pr(e);if(e.if&&!e.ifProcessed)return fr(e);if("template"!==e.tag||e.slotTarget){if("slot"===e.tag)return Cr(e);var t;if(e.component)t=kr(e.component,e);else{var n=e.plain?void 0:vr(e),r=e.inlineTemplate?null:_r(e,!0);t="_c('"+e.tag+"'"+(n?","+n:"")+(r?","+r:"")+")";}for(var i=0;i<La.length;i++)t=La[i](e,t);return t}return _r(e)||"void 0"}function lr(e){return e.staticProcessed=!0,Pa.push("with(this){return "+cr(e)+"}"),"_m("+(Pa.length-1)+(e.staticInFor?",true":"")+")"}function ur(e){if(e.onceProcessed=!0,e.if&&!e.ifProcessed)return fr(e);if(e.staticInFor){for(var t="",n=e.parent;n;){if(n.for){t=n.key;break}n=n.parent;}return t?"_o("+cr(e)+","+Ia++ +(t?","+t:"")+")":cr(e)}return lr(e)}function fr(e){return e.ifProcessed=!0,dr(e.ifConditions.slice())}function dr(e){function t(e){return e.once?ur(e):cr(e)}if(!e.length)return"_e()";var n=e.shift();return n.exp?"("+n.exp+")?"+t(n.block)+":"+dr(e):""+t(n.block)}function pr(e){var t=e.for,n=e.alias,r=e.iterator1?","+e.iterator1:"",i=e.iterator2?","+e.iterator2:"";return e.forProcessed=!0,"_l(("+t+"),function("+n+r+i+"){return "+cr(e)+"})"}function vr(e){var t="{",n=hr(e);n&&(t+=n+","),e.key&&(t+="key:"+e.key+","),e.ref&&(t+="ref:"+e.ref+","),e.refInFor&&(t+="refInFor:true,"),e.pre&&(t+="pre:true,"),e.component&&(t+='tag:"'+e.tag+'",');for(var r=0;r<Da.length;r++)t+=Da[r](e);if(e.attrs&&(t+="attrs:{"+Ar(e.attrs)+"},"),e.props&&(t+="domProps:{"+Ar(e.props)+"},"),e.events&&(t+=nr(e.events)+","),e.nativeEvents&&(t+=nr(e.nativeEvents,!0)+","),e.slotTarget&&(t+="slot:"+e.slotTarget+","),e.scopedSlots&&(t+=gr(e.scopedSlots)+","),e.inlineTemplate){var i=mr(e);i&&(t+=i+",");}return t=t.replace(/,$/,"")+"}",e.wrapData&&(t=e.wrapData(t)),t}function hr(e){var t=e.directives;if(t){var n,r,i,o,a="directives:[",s=!1;for(n=0,r=t.length;n<r;n++){i=t[n],o=!0;var c=Ma[i.name]||ps[i.name];c&&(o=!!c(e,i,Na)),o&&(s=!0,a+='{name:"'+i.name+'",rawName:"'+i.rawName+'"'+(i.value?",value:("+i.value+"),expression:"+JSON.stringify(i.value):"")+(i.arg?',arg:"'+i.arg+'"':"")+(i.modifiers?",modifiers:"+JSON.stringify(i.modifiers):"")+"},");}return s?a.slice(0,-1)+"]":void 0}}function mr(e){var t=e.children[0];if(1===t.type){var n=sr(t,Ra);return"inlineTemplate:{render:function(){"+n.render+"},staticRenderFns:["+n.staticRenderFns.map(function(e){return"function(){"+e+"}"}).join(",")+"]}"}}function gr(e){return"scopedSlots:{"+Object.keys(e).map(function(t){return yr(t,e[t])}).join(",")+"}"}function yr(e,t){return e+":function("+String(t.attrsMap.scope)+"){return "+("template"===t.tag?_r(t)||"void 0":cr(t))+"}"}function _r(e,t){var n=e.children;if(n.length){var r=n[0];return 1===n.length&&r.for&&"template"!==r.tag&&"slot"!==r.tag?cr(r):"["+n.map(wr).join(",")+"]"+(t?br(n)?"":",true":"")}}function br(e){for(var t=0;t<e.length;t++){var n=e[t];if($r(n)||n.if&&n.ifConditions.some(function(e){return $r(e.block)}))return!1}return!0}function $r(e){return e.for||"template"===e.tag||"slot"===e.tag}function wr(e){return 1===e.type?cr(e):xr(e)}function xr(e){return"_v("+(2===e.type?e.expression:Or(JSON.stringify(e.text)))+")"}function Cr(e){var t=e.slotName||'"default"',n=_r(e);return"_t("+t+(n?","+n:"")+(e.attrs?(n?"":",null")+",{"+e.attrs.map(function(e){return Gr(e.name)+":"+e.value}).join(",")+"}":"")+")"}function kr(e,t){var n=t.inlineTemplate?null:_r(t,!0);return"_c("+e+","+vr(t)+(n?","+n:"")+")"}function Ar(e){for(var t="",n=0;n<e.length;n++){var r=e[n];t+='"'+r.name+'":'+Or(r.value)+",";}return t.slice(0,-1)}function Or(e){return e.replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029")}function Sr(e,t){var n=En(e.trim(),t);Zn(n,t);var r=sr(n,t);return{ast:n,render:r.render,staticRenderFns:r.staticRenderFns}}function Tr(e,t){var n=(t.warn||mn,xn(e,"class"));n&&(e.staticClass=JSON.stringify(n));var r=wn(e,"class",!1);r&&(e.classBinding=r);}function Er(e){var t="";return e.staticClass&&(t+="staticClass:"+e.staticClass+","),e.classBinding&&(t+="class:"+e.classBinding+","),t}function jr(e,t){var n=(t.warn||mn,xn(e,"style"));n&&(e.staticStyle=JSON.stringify(xo(n)));var r=wn(e,"style",!1);r&&(e.styleBinding=r);}function Nr(e){var t="";return e.staticStyle&&(t+="staticStyle:"+e.staticStyle+","),e.styleBinding&&(t+="style:("+e.styleBinding+"),"),t}function Lr(e,t,n){Fa=n;var r=t.value,i=t.modifiers,o=e.tag,a=e.attrsMap.type;return"select"===o?Ir(e,r,i):"input"===o&&"checkbox"===a?Dr(e,r,i):"input"===o&&"radio"===a?Mr(e,r,i):Pr(e,r,i),!0}function Dr(e,t,n){var r=n&&n.number,i=wn(e,"value")||"null",o=wn(e,"true-value")||"true",a=wn(e,"false-value")||"false";yn(e,"checked","Array.isArray("+t+")?_i("+t+","+i+")>-1:_q("+t+","+o+")"),$n(e,"change","var $$a="+t+",$$el=$event.target,$$c=$$el.checked?("+o+"):("+a+");if(Array.isArray($$a)){var $$v="+(r?"_n("+i+")":i)+",$$i=_i($$a,$$v);if($$c){$$i<0&&("+t+"=$$a.concat($$v))}else{$$i>-1&&("+t+"=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}}else{"+t+"=$$c}",null,!0);}function Mr(e,t,n){var r=n&&n.number,i=wn(e,"value")||"null";i=r?"_n("+i+")":i,yn(e,"checked","_q("+t+","+i+")"),$n(e,"change",Rr(t,i),null,!0);}function Pr(e,t,n){var r=e.attrsMap.type,i=n||{},o=i.lazy,a=i.number,s=i.trim,c=o||li&&"range"===r?"change":"input",l=!o&&"range"!==r,u="input"===e.tag||"textarea"===e.tag,f=u?"$event.target.value"+(s?".trim()":""):s?"(typeof $event === 'string' ? $event.trim() : $event)":"$event";f=a||"number"===r?"_n("+f+")":f;var d=Rr(t,f);u&&l&&(d="if($event.target.composing)return;"+d),yn(e,"value",u?"_s("+t+")":"("+t+")"),$n(e,c,d,null,!0),(s||a||"number"===r)&&$n(e,"blur","$forceUpdate()");}function Ir(e,t,n){var r=n&&n.number,i='Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return '+(r?"_n(val)":"val")+"})"+(null==e.attrsMap.multiple?"[0]":""),o=Rr(t,i);$n(e,"change",o,null,!0);}function Rr(e,t){var n=Cn(e);return null===n.idx?e+"="+t:"var $$exp = "+n.exp+", $$idx = "+n.idx+";if (!Array.isArray($$exp)){"+e+"="+t+"}else{$$exp.splice($$idx, 1, "+t+")}"}function Fr(e,t){t.value&&yn(e,"textContent","_s("+t.value+")");}function Ur(e,t){t.value&&yn(e,"innerHTML","_s("+t.value+")");}function Hr(e,t){return t=t?l(l({},_s),t):_s,Sr(e,t)}function Br(e,t,n){var r=(t&&t.warn||yi,t&&t.delimiters?String(t.delimiters)+e:e);if(ys[r])return ys[r];var i={},o=Hr(e,t);i.render=Vr(o.render);var a=o.staticRenderFns.length;i.staticRenderFns=new Array(a);for(var s=0;s<a;s++)i.staticRenderFns[s]=Vr(o.staticRenderFns[s]);return ys[r]=i}function Vr(e){try{return new Function(e)}catch(e){return p}}function zr(e){if(e.outerHTML)return e.outerHTML;var t=document.createElement("div");return t.appendChild(e.cloneNode(!0)),t.innerHTML}var qr,Jr,Kr=n("slot,component",!0),Wr=Object.prototype.hasOwnProperty,Zr=/-(\w)/g,Gr=a(function(e){return e.replace(Zr,function(e,t){return t?t.toUpperCase():""})}),Yr=a(function(e){return e.charAt(0).toUpperCase()+e.slice(1)}),Qr=/([^-])([A-Z])/g,Xr=a(function(e){return e.replace(Qr,"$1-$2").replace(Qr,"$1-$2").toLowerCase()}),ei=Object.prototype.toString,ti="[object Object]",ni=function(){return!1},ri=function(e){return e},ii={optionMergeStrategies:Object.create(null),silent:!1,devtools:!1,errorHandler:null,ignoredElements:null,keyCodes:Object.create(null),isReservedTag:ni,isUnknownElement:ni,getTagNamespace:p,parsePlatformTagName:ri,mustUseProp:ni,_assetTypes:["component","directive","filter"],_lifecycleHooks:["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated"],_maxUpdateCount:100},oi=/[^\w.$]/,ai="__proto__"in{},si="undefined"!=typeof window,ci=si&&window.navigator.userAgent.toLowerCase(),li=ci&&/msie|trident/.test(ci),ui=ci&&ci.indexOf("msie 9.0")>0,fi=ci&&ci.indexOf("edge/")>0,di=ci&&ci.indexOf("android")>0,pi=ci&&/iphone|ipad|ipod|ios/.test(ci),vi=function(){return void 0===qr&&(qr=!si&&"undefined"!=typeof commonjsGlobal&&"server"===commonjsGlobal.process.env.VUE_ENV),qr},hi=si&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__,mi=function(){function e(){r=!1;var e=n.slice(0);n.length=0;for(var t=0;t<e.length;t++)e[t]();}var t,n=[],r=!1;if("undefined"!=typeof Promise&&b(Promise)){var i=Promise.resolve(),o=function(e){console.error(e);};t=function(){i.then(e).catch(o),pi&&setTimeout(p);};}else if("undefined"==typeof MutationObserver||!b(MutationObserver)&&"[object MutationObserverConstructor]"!==MutationObserver.toString())t=function(){setTimeout(e,0);};else{var a=1,s=new MutationObserver(e),c=document.createTextNode(String(a));s.observe(c,{characterData:!0}),t=function(){a=(a+1)%2,c.data=String(a);};}return function(e,i){var o;if(n.push(function(){e&&e.call(i),o&&o(i);}),r||(r=!0,t()),!e&&"undefined"!=typeof Promise)return new Promise(function(e){o=e;})}}();Jr="undefined"!=typeof Set&&b(Set)?Set:function(){function e(){this.set=Object.create(null);}return e.prototype.has=function(e){return this.set[e]===!0},e.prototype.add=function(e){this.set[e]=!0;},e.prototype.clear=function(){this.set=Object.create(null);},e}();var gi,yi=p,_i=0,bi=function(){this.id=_i++,this.subs=[];};bi.prototype.addSub=function(e){this.subs.push(e);},bi.prototype.removeSub=function(e){r(this.subs,e);},bi.prototype.depend=function(){bi.target&&bi.target.addDep(this);},bi.prototype.notify=function(){for(var e=this.subs.slice(),t=0,n=e.length;t<n;t++)e[t].update();},bi.target=null;var $i=[],wi=Array.prototype,xi=Object.create(wi);["push","pop","shift","unshift","splice","sort","reverse"].forEach(function(e){var t=wi[e];y(xi,e,function(){for(var n=arguments,r=arguments.length,i=new Array(r);r--;)i[r]=n[r];var o,a=t.apply(this,i),s=this.__ob__;switch(e){case"push":o=i;break;case"unshift":o=i;break;case"splice":o=i.slice(2);}return o&&s.observeArray(o),s.dep.notify(),a});});var Ci=Object.getOwnPropertyNames(xi),ki={shouldConvert:!0,isSettingProps:!1},Ai=function(e){if(this.value=e,this.dep=new bi,this.vmCount=0,y(e,"__ob__",this),Array.isArray(e)){var t=ai?x:C;t(e,xi,Ci),this.observeArray(e);}else this.walk(e);};Ai.prototype.walk=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)A(e,t[n],e[t[n]]);},Ai.prototype.observeArray=function(e){for(var t=0,n=e.length;t<n;t++)k(e[t]);};var Oi=ii.optionMergeStrategies;Oi.data=function(e,t,n){return n?e||t?function(){var r="function"==typeof t?t.call(n):t,i="function"==typeof e?e.call(n):void 0;return r?E(r,i):i}:void 0:t?"function"!=typeof t?e:e?function(){return E(t.call(this),e.call(this))}:t:e},ii._lifecycleHooks.forEach(function(e){Oi[e]=j;}),ii._assetTypes.forEach(function(e){Oi[e+"s"]=N;}),Oi.watch=function(e,t){if(!t)return e;if(!e)return t;var n={};l(n,e);for(var r in t){var i=n[r],o=t[r];i&&!Array.isArray(i)&&(i=[i]),n[r]=i?i.concat(o):[o];}return n},Oi.props=Oi.methods=Oi.computed=function(e,t){if(!t)return e;if(!e)return t;var n=Object.create(null);return l(n,e),l(n,t),n};var Si=function(e,t){return void 0===t?e:t},Ti=Object.freeze({defineReactive:A,_toString:e,toNumber:t,makeMap:n,isBuiltInTag:Kr,remove:r,hasOwn:i,isPrimitive:o,cached:a,camelize:Gr,capitalize:Yr,hyphenate:Xr,bind:s,toArray:c,extend:l,isObject:u,isPlainObject:f,toObject:d,noop:p,no:ni,identity:ri,genStaticKeys:v,looseEqual:h,looseIndexOf:m,isReserved:g,def:y,parsePath:_,hasProto:ai,inBrowser:si,UA:ci,isIE:li,isIE9:ui,isEdge:fi,isAndroid:di,isIOS:pi,isServerRendering:vi,devtools:hi,nextTick:mi,get _Set(){return Jr},mergeOptions:M,resolveAsset:P,warn:yi,formatComponentName:gi,validateProp:I}),Ei=[],ji={},Ni=!1,Li=!1,Di=0,Mi=0,Pi=function(e,t,n,r){void 0===r&&(r={}),this.vm=e,e._watchers.push(this),this.deep=!!r.deep,this.user=!!r.user,this.lazy=!!r.lazy,this.sync=!!r.sync,this.expression=t.toString(),this.cb=n,this.id=++Mi,this.active=!0,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new Jr,this.newDepIds=new Jr,"function"==typeof t?this.getter=t:(this.getter=_(t),this.getter||(this.getter=function(){})),this.value=this.lazy?void 0:this.get();};Pi.prototype.get=function(){$(this);var e=this.getter.call(this.vm,this.vm);return this.deep&&z(e),w(),this.cleanupDeps(),e},Pi.prototype.addDep=function(e){var t=e.id;this.newDepIds.has(t)||(this.newDepIds.add(t),this.newDeps.push(e),this.depIds.has(t)||e.addSub(this));},Pi.prototype.cleanupDeps=function(){for(var e=this,t=this.deps.length;t--;){var n=e.deps[t];e.newDepIds.has(n.id)||n.removeSub(e);}var r=this.depIds;this.depIds=this.newDepIds,this.newDepIds=r,this.newDepIds.clear(),r=this.deps,this.deps=this.newDeps,this.newDeps=r,this.newDeps.length=0;},Pi.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():V(this);},Pi.prototype.run=function(){if(this.active){var e=this.get();if(e!==this.value||u(e)||this.deep){var t=this.value;if(this.value=e,this.user)try{this.cb.call(this.vm,e,t);}catch(e){if(!ii.errorHandler)throw e;ii.errorHandler.call(null,e,this.vm);}else this.cb.call(this.vm,e,t);}}},Pi.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1;},Pi.prototype.depend=function(){for(var e=this,t=this.deps.length;t--;)e.deps[t].depend();},Pi.prototype.teardown=function(){var e=this;if(this.active){this.vm._isBeingDestroyed||this.vm._vForRemoving||r(this.vm._watchers,this);for(var t=this.deps.length;t--;)e.deps[t].removeSub(e);this.active=!1;}};var Ii=new Jr,Ri={enumerable:!0,configurable:!0,get:p,set:p},Fi=function(e,t,n,r,i,o,a){this.tag=e,this.data=t,this.children=n,this.text=r,this.elm=i,this.ns=void 0,this.context=o,this.functionalContext=void 0,this.key=t&&t.key,this.componentOptions=a,this.child=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1;},Ui=function(){var e=new Fi;return e.text="",e.isComment=!0,e},Hi=null,Bi={init:fe,prepatch:de,insert:pe,destroy:ve},Vi=Object.keys(Bi),zi=0;Me(Re),ee(Re),De(Re),ae(Re),je(Re);var qi=[String,RegExp],Ji={name:"keep-alive",abstract:!0,props:{include:qi,exclude:qi},created:function(){this.cache=Object.create(null);},render:function(){var e=Ae(this.$slots.default);if(e&&e.componentOptions){var t=e.componentOptions,n=t.Ctor.options.name||t.tag;if(n&&(this.include&&!Ve(this.include,n)||this.exclude&&Ve(this.exclude,n)))return e;var r=null==e.key?t.Ctor.cid+(t.tag?"::"+t.tag:""):e.key;this.cache[r]?e.child=this.cache[r].child:this.cache[r]=e,e.data.keepAlive=!0;}return e},destroyed:function(){var e=this;for(var t in this.cache){var n=e.cache[t];se(n.child,"deactivated"),n.child.$destroy();}}},Ki={KeepAlive:Ji};ze(Re),Object.defineProperty(Re.prototype,"$isServer",{get:vi}),Re.version="2.1.6";var Wi,Zi,Gi=n("input,textarea,option,select"),Yi=function(e,t){return"value"===t&&Gi(e)||"selected"===t&&"option"===e||"checked"===t&&"input"===e||"muted"===t&&"video"===e},Qi=n("contenteditable,draggable,spellcheck"),Xi=n("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,translate,truespeed,typemustmatch,visible"),eo="http://www.w3.org/1999/xlink",to=function(e){return":"===e.charAt(5)&&"xlink"===e.slice(0,5)},no=function(e){return to(e)?e.slice(6,e.length):""},ro=function(e){return null==e||e===!1},io={svg:"http://www.w3.org/2000/svg",math:"http://www.w3.org/1998/Math/MathML",xhtml:"http://www.w3.org/1999/xhtml"},oo=n("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template"),ao=n("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view",!0),so=function(e){return"pre"===e},co=function(e){return oo(e)||ao(e)},lo=Object.create(null),uo=Object.freeze({createElement:Xe,createElementNS:et,createTextNode:tt,createComment:nt,insertBefore:rt,removeChild:it,appendChild:ot,parentNode:at,nextSibling:st,tagName:ct,setTextContent:lt,setAttribute:ut}),fo={create:function(e,t){ft(t);},update:function(e,t){e.data.ref!==t.data.ref&&(ft(e,!0),ft(t));},destroy:function(e){ft(e,!0);}},po=new Fi("",{},[]),vo="undefined"!=typeof requestIdleCallback,ho=["create","activate","update","remove","destroy"],mo={create:gt,update:gt,destroy:function(e){gt(e,po);}},go=Object.create(null),yo=[fo,mo],_o={create:wt,update:wt},bo={create:Ct,update:Ct},$o={create:Ot,update:Ot},wo={create:St,update:St},xo=a(function(e){var t={},n=/;(?![^(]*\))/g,r=/:(.+)/;return e.split(n).forEach(function(e){if(e){var n=e.split(r);n.length>1&&(t[n[0].trim()]=n[1].trim());}}),t}),Co=/^--/,ko=/\s*!important$/,Ao=function(e,t,n){Co.test(t)?e.style.setProperty(t,n):ko.test(n)?e.style.setProperty(t,n.replace(ko,""),"important"):e.style[So(t)]=n;},Oo=["Webkit","Moz","ms"],So=a(function(e){if(Zi=Zi||document.createElement("div"),e=Gr(e),"filter"!==e&&e in Zi.style)return e;for(var t=e.charAt(0).toUpperCase()+e.slice(1),n=0;n<Oo.length;n++){var r=Oo[n]+t;if(r in Zi.style)return r}}),To={create:Lt,update:Lt},Eo=si&&!ui,jo="transition",No="animation",Lo="transition",Do="transitionend",Mo="animation",Po="animationend";Eo&&(void 0===window.ontransitionend&&void 0!==window.onwebkittransitionend&&(Lo="WebkitTransition",Do="webkitTransitionEnd"),void 0===window.onanimationend&&void 0!==window.onwebkitanimationend&&(Mo="WebkitAnimation",Po="webkitAnimationEnd"));var Io=si&&window.requestAnimationFrame||setTimeout,Ro=/\b(transform|all)(,|$)/,Fo=a(function(e){return{enterClass:e+"-enter",leaveClass:e+"-leave",appearClass:e+"-enter",enterActiveClass:e+"-enter-active",leaveActiveClass:e+"-leave-active",appearActiveClass:e+"-enter-active"}}),Uo=si?{create:Kt,activate:Kt,remove:function(e,t){
e.data.show?t():zt(e,t);}}:{},Ho=[_o,bo,$o,wo,To,Uo],Bo=Ho.concat(yo),Vo=mt({nodeOps:uo,modules:Bo});ui&&document.addEventListener("selectionchange",function(){var e=document.activeElement;e&&e.vmodel&&Xt(e,"input");});var zo={inserted:function(e,t,n){if("select"===n.tag){var r=function(){Wt(e,t,n.context);};r(),(li||fi)&&setTimeout(r,0);}else"textarea"!==n.tag&&"text"!==e.type||(e._vModifiers=t.modifiers,t.modifiers.lazy||(di||(e.addEventListener("compositionstart",Yt),e.addEventListener("compositionend",Qt)),ui&&(e.vmodel=!0)));},componentUpdated:function(e,t,n){if("select"===n.tag){Wt(e,t,n.context);var r=e.multiple?t.value.some(function(t){return Zt(t,e.options)}):t.value!==t.oldValue&&Zt(t.value,e.options);r&&Xt(e,"change");}}},qo={bind:function(e,t,n){var r=t.value;n=en(n);var i=n.data&&n.data.transition,o=e.__vOriginalDisplay="none"===e.style.display?"":e.style.display;r&&i&&!ui?(n.data.show=!0,Vt(n,function(){e.style.display=o;})):e.style.display=r?o:"none";},update:function(e,t,n){var r=t.value,i=t.oldValue;if(r!==i){n=en(n);var o=n.data&&n.data.transition;o&&!ui?(n.data.show=!0,r?Vt(n,function(){e.style.display=e.__vOriginalDisplay;}):zt(n,function(){e.style.display="none";})):e.style.display=r?e.__vOriginalDisplay:"none";}}},Jo={model:zo,show:qo},Ko={name:String,appear:Boolean,css:Boolean,mode:String,type:String,enterClass:String,leaveClass:String,enterActiveClass:String,leaveActiveClass:String,appearClass:String,appearActiveClass:String},Wo={name:"transition",props:Ko,abstract:!0,render:function(e){var t=this,n=this.$slots.default;if(n&&(n=n.filter(function(e){return e.tag}),n.length)){var r=this.mode,i=n[0];if(on(this.$vnode))return i;var o=tn(i);if(!o)return i;if(this._leaving)return rn(e,i);var a=o.key=null==o.key||o.isStatic?"__v"+(o.tag+this._uid)+"__":o.key,s=(o.data||(o.data={})).transition=nn(this),c=this._vnode,u=tn(c);if(o.data.directives&&o.data.directives.some(function(e){return"show"===e.name})&&(o.data.show=!0),u&&u.data&&u.key!==a){var f=u.data.transition=l({},s);if("out-in"===r)return this._leaving=!0,be(f,"afterLeave",function(){t._leaving=!1,t.$forceUpdate();},a),rn(e,i);if("in-out"===r){var d,p=function(){d();};be(s,"afterEnter",p,a),be(s,"enterCancelled",p,a),be(f,"delayLeave",function(e){d=e;},a);}}return i}}},Zo=l({tag:String,moveClass:String},Ko);delete Zo.mode;var Go={props:Zo,render:function(e){for(var t=this.tag||this.$vnode.data.tag||"span",n=Object.create(null),r=this.prevChildren=this.children,i=this.$slots.default||[],o=this.children=[],a=nn(this),s=0;s<i.length;s++){var c=i[s];c.tag&&null!=c.key&&0!==String(c.key).indexOf("__vlist")&&(o.push(c),n[c.key]=c,(c.data||(c.data={})).transition=a);}if(r){for(var l=[],u=[],f=0;f<r.length;f++){var d=r[f];d.data.transition=a,d.data.pos=d.elm.getBoundingClientRect(),n[d.key]?l.push(d):u.push(d);}this.kept=e(t,null,l),this.removed=u;}return e(t,null,o)},beforeUpdate:function(){this.__patch__(this._vnode,this.kept,!1,!0),this._vnode=this.kept;},updated:function(){var e=this.prevChildren,t=this.moveClass||(this.name||"v")+"-move";if(e.length&&this.hasMove(e[0].elm,t)){e.forEach(an),e.forEach(sn),e.forEach(cn);document.body.offsetHeight;e.forEach(function(e){if(e.data.moved){var n=e.elm,r=n.style;It(n,t),r.transform=r.WebkitTransform=r.transitionDuration="",n.addEventListener(Do,n._moveCb=function e(r){r&&!/transform$/.test(r.propertyName)||(n.removeEventListener(Do,e),n._moveCb=null,Rt(n,t));});}});}},methods:{hasMove:function(e,t){if(!Eo)return!1;if(null!=this._hasMove)return this._hasMove;It(e,t);var n=Ut(e);return Rt(e,t),this._hasMove=n.hasTransform}}},Yo={Transition:Wo,TransitionGroup:Go};Re.config.isUnknownElement=Ye,Re.config.isReservedTag=co,Re.config.getTagNamespace=Ge,Re.config.mustUseProp=Yi,l(Re.options.directives,Jo),l(Re.options.components,Yo),Re.prototype.__patch__=si?Vo:p,Re.prototype.$mount=function(e,t){return e=e&&si?Qe(e):void 0,this._mount(e,t)},setTimeout(function(){ii.devtools&&hi&&hi.emit("init",Re);},0);var Qo,Xo=!!si&&ln("\n","&#10;"),ea=n("area,base,br,col,embed,frame,hr,img,input,isindex,keygen,link,meta,param,source,track,wbr",!0),ta=n("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source",!0),na=n("address,article,aside,base,blockquote,body,caption,col,colgroup,dd,details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,title,tr,track",!0),ra=/([^\s"'<>\/=]+)/,ia=/(?:=)/,oa=[/"([^"]*)"+/.source,/'([^']*)'+/.source,/([^\s"'=<>`]+)/.source],aa=new RegExp("^\\s*"+ra.source+"(?:\\s*("+ia.source+")\\s*(?:"+oa.join("|")+"))?"),sa="[a-zA-Z_][\\w\\-\\.]*",ca="((?:"+sa+"\\:)?"+sa+")",la=new RegExp("^<"+ca),ua=/^\s*(\/?)>/,fa=new RegExp("^<\\/"+ca+"[^>]*>"),da=/^<!DOCTYPE [^>]+>/i,pa=/^<!--/,va=/^<!\[/,ha=!1;"x".replace(/x(.)?/g,function(e,t){ha=""===t;});var ma,ga,ya,_a,ba,$a,wa,xa,Ca,ka,Aa,Oa,Sa,Ta,Ea,ja,Na,La,Da,Ma,Pa,Ia,Ra,Fa,Ua=n("script,style",!0),Ha=function(e){return"lang"===e.name&&"html"!==e.value},Ba=function(e,t,n){return!!Ua(e)||!(!t||1!==n.length)&&!("template"===e&&!n[0].attrs.some(Ha))},Va={},za=/&lt;/g,qa=/&gt;/g,Ja=/&#10;/g,Ka=/&amp;/g,Wa=/&quot;/g,Za=/\{\{((?:.|\n)+?)\}\}/g,Ga=/[-.*+?^${}()|[\]\/\\]/g,Ya=a(function(e){var t=e[0].replace(Ga,"\\$&"),n=e[1].replace(Ga,"\\$&");return new RegExp(t+"((?:.|\\n)+?)"+n,"g")}),Qa=/^v-|^@|^:/,Xa=/(.*?)\s+(?:in|of)\s+(.*)/,es=/\((\{[^}]*\}|[^,]*),([^,]*)(?:,([^,]*))?\)/,ts=/^:|^v-bind:/,ns=/^@|^v-on:/,rs=/:(.*)$/,is=/\.[^.]+/g,os=a(un),as=/^xmlns:NS\d+/,ss=/^NS\d+:/,cs=a(Gn),ls=/^\s*([\w$_]+|\([^)]*?\))\s*=>|^function\s*\(/,us=/^\s*[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['.*?']|\[".*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*\s*$/,fs={esc:27,tab:9,enter:13,space:32,up:38,left:37,right:39,down:40,delete:[8,46]},ds={stop:"$event.stopPropagation();",prevent:"$event.preventDefault();",self:"if($event.target !== $event.currentTarget)return;",ctrl:"if(!$event.ctrlKey)return;",shift:"if(!$event.shiftKey)return;",alt:"if(!$event.altKey)return;",meta:"if(!$event.metaKey)return;"},ps={bind:ar,cloak:p},vs={staticKeys:["staticClass"],transformNode:Tr,genData:Er},hs={staticKeys:["staticStyle"],transformNode:jr,genData:Nr},ms=[vs,hs],gs={model:Lr,text:Fr,html:Ur},ys=Object.create(null),_s={expectHTML:!0,modules:ms,staticKeys:v(ms),directives:gs,isReservedTag:co,isUnaryTag:ea,mustUseProp:Yi,getTagNamespace:Ge,isPreTag:so},bs=a(function(e){var t=Qe(e);return t&&t.innerHTML}),$s=Re.prototype.$mount;return Re.prototype.$mount=function(e,t){if(e=e&&Qe(e),e===document.body||e===document.documentElement)return this;var n=this.$options;if(!n.render){var r=n.template;if(r)if("string"==typeof r)"#"===r.charAt(0)&&(r=bs(r));else{if(!r.nodeType)return this;r=r.innerHTML;}else e&&(r=zr(e));if(r){var i=Br(r,{warn:yi,shouldDecodeNewlines:Xo,delimiters:n.delimiters},this),o=i.render,a=i.staticRenderFns;n.render=o,n.staticRenderFns=a;}}return $s.call(this,e,t)},Re.compile=Br,Re});
});

/*!
 *
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var commentData = [
  {
    "username": "@username_9",
    "score": 499,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_83",
    "score": 498,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_322",
    "score": 496,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_146",
    "score": 495,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_55",
    "score": 495,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_276",
    "score": 495,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_36",
    "score": 494,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_396",
    "score": 492,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_126",
    "score": 491,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_413",
    "score": 490,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_496",
    "score": 489,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_461",
    "score": 488,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_249",
    "score": 488,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_119",
    "score": 488,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_332",
    "score": 487,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_251",
    "score": 486,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_443",
    "score": 480,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_196",
    "score": 479,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_30",
    "score": 477,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_64",
    "score": 476,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_411",
    "score": 475,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_195",
    "score": 464,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_462",
    "score": 463,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_468",
    "score": 460,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_482",
    "score": 457,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_154",
    "score": 455,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_169",
    "score": 454,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_92",
    "score": 453,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_25",
    "score": 449,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_31",
    "score": 447,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_8",
    "score": 441,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_82",
    "score": 438,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_475",
    "score": 438,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_210",
    "score": 435,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_290",
    "score": 429,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_184",
    "score": 426,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_480",
    "score": 406,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_270",
    "score": 406,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_487",
    "score": 405,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_412",
    "score": 405,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_22",
    "score": 402,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_418",
    "score": 401,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_388",
    "score": 400,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_34",
    "score": 399,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_257",
    "score": 399,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_362",
    "score": 397,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_408",
    "score": 396,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_235",
    "score": 396,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_75",
    "score": 395,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_293",
    "score": 394,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_1",
    "score": 393,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_68",
    "score": 392,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_181",
    "score": 384,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_479",
    "score": 383,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_37",
    "score": 380,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_337",
    "score": 379,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_295",
    "score": 378,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_11",
    "score": 376,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_191",
    "score": 375,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_69",
    "score": 373,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_449",
    "score": 372,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_437",
    "score": 367,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_143",
    "score": 367,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_185",
    "score": 366,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_307",
    "score": 364,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_47",
    "score": 362,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_453",
    "score": 361,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_26",
    "score": 360,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_2",
    "score": 356,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_422",
    "score": 354,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_279",
    "score": 353,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_63",
    "score": 350,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_182",
    "score": 345,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_100",
    "score": 343,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_194",
    "score": 341,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_311",
    "score": 340,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_217",
    "score": 337,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_330",
    "score": 336,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_424",
    "score": 334,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_16",
    "score": 332,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_264",
    "score": 331,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_125",
    "score": 329,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_248",
    "score": 327,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_345",
    "score": 326,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_353",
    "score": 322,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_228",
    "score": 321,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_240",
    "score": 319,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_159",
    "score": 319,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_59",
    "score": 317,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_166",
    "score": 307,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_231",
    "score": 304,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_344",
    "score": 297,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_492",
    "score": 292,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_286",
    "score": 290,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_343",
    "score": 285,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_386",
    "score": 283,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_28",
    "score": 281,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_234",
    "score": 281,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_117",
    "score": 278,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_180",
    "score": 275,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_77",
    "score": 274,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_484",
    "score": 272,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_124",
    "score": 272,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_378",
    "score": 272,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_361",
    "score": 271,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_160",
    "score": 269,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_208",
    "score": 267,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_306",
    "score": 266,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_488",
    "score": 264,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_433",
    "score": 262,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_483",
    "score": 260,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_116",
    "score": 257,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_409",
    "score": 253,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_156",
    "score": 253,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_368",
    "score": 252,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_278",
    "score": 252,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_98",
    "score": 251,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_370",
    "score": 250,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_227",
    "score": 248,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_435",
    "score": 246,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_266",
    "score": 243,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_140",
    "score": 241,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_246",
    "score": 241,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_456",
    "score": 238,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_189",
    "score": 235,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_376",
    "score": 232,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_198",
    "score": 231,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_214",
    "score": 231,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_405",
    "score": 231,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_393",
    "score": 229,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_4",
    "score": 227,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_440",
    "score": 226,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_135",
    "score": 226,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_225",
    "score": 224,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_112",
    "score": 223,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_38",
    "score": 223,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_62",
    "score": 219,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_174",
    "score": 218,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_226",
    "score": 214,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_338",
    "score": 211,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_401",
    "score": 210,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_12",
    "score": 203,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_494",
    "score": 202,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_399",
    "score": 202,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_416",
    "score": 200,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_319",
    "score": 199,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_430",
    "score": 198,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_383",
    "score": 196,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_139",
    "score": 194,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_425",
    "score": 188,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_187",
    "score": 185,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_209",
    "score": 185,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_318",
    "score": 184,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_104",
    "score": 182,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_305",
    "score": 181,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_359",
    "score": 181,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_263",
    "score": 181,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_221",
    "score": 180,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_499",
    "score": 178,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_441",
    "score": 175,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_175",
    "score": 175,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_163",
    "score": 172,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_410",
    "score": 172,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_238",
    "score": 170,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_325",
    "score": 170,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_302",
    "score": 168,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_309",
    "score": 168,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_491",
    "score": 165,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_340",
    "score": 164,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_177",
    "score": 163,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_429",
    "score": 163,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_360",
    "score": 161,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_351",
    "score": 161,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_273",
    "score": 159,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_239",
    "score": 158,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_32",
    "score": 157,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_213",
    "score": 155,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_218",
    "score": 153,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_76",
    "score": 149,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_303",
    "score": 148,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_341",
    "score": 148,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_327",
    "score": 147,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_101",
    "score": 144,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_103",
    "score": 144,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_19",
    "score": 143,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_138",
    "score": 142,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_97",
    "score": 142,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_434",
    "score": 141,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_385",
    "score": 141,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_118",
    "score": 141,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_254",
    "score": 138,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_33",
    "score": 127,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_199",
    "score": 127,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_165",
    "score": 125,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_212",
    "score": 123,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_67",
    "score": 121,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_277",
    "score": 112,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_183",
    "score": 110,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_247",
    "score": 108,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_197",
    "score": 105,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_6",
    "score": 105,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_71",
    "score": 103,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_51",
    "score": 98,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_334",
    "score": 95,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_463",
    "score": 93,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_466",
    "score": 92,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_50",
    "score": 90,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_10",
    "score": 90,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_45",
    "score": 88,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_364",
    "score": 86,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_316",
    "score": 81,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_269",
    "score": 80,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_173",
    "score": 71,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_7",
    "score": 70,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_280",
    "score": 67,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_442",
    "score": 65,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_220",
    "score": 65,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_107",
    "score": 65,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_467",
    "score": 64,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_129",
    "score": 62,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_21",
    "score": 62,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_308",
    "score": 61,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_384",
    "score": 55,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_145",
    "score": 52,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_448",
    "score": 52,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_455",
    "score": 50,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_23",
    "score": 50,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_438",
    "score": 47,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_363",
    "score": 46,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_380",
    "score": 46,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_24",
    "score": 42,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_397",
    "score": 41,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_84",
    "score": 39,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_53",
    "score": 37,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_73",
    "score": 31,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_95",
    "score": 28,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_436",
    "score": 28,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_457",
    "score": 26,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_93",
    "score": 18,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_158",
    "score": 18,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_342",
    "score": 17,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_471",
    "score": 16,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_375",
    "score": 15,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_365",
    "score": 10,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_172",
    "score": 9,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_141",
    "score": 8,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_300",
    "score": 5,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_29",
    "score": 5,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_58",
    "score": 4,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_285",
    "score": 1,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_20",
    "score": -4,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_486",
    "score": -6,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_426",
    "score": -7,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_329",
    "score": -13,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_80",
    "score": -13,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_373",
    "score": -13,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_0",
    "score": -24,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_493",
    "score": -24,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_241",
    "score": -25,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_390",
    "score": -28,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_133",
    "score": -28,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_382",
    "score": -30,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_113",
    "score": -31,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_61",
    "score": -31,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_427",
    "score": -32,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_74",
    "score": -33,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_348",
    "score": -38,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_179",
    "score": -39,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_149",
    "score": -39,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_65",
    "score": -39,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_70",
    "score": -40,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_211",
    "score": -41,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_148",
    "score": -44,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_178",
    "score": -44,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_161",
    "score": -47,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_452",
    "score": -50,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_42",
    "score": -50,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_190",
    "score": -58,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_272",
    "score": -60,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_317",
    "score": -61,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_60",
    "score": -67,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_144",
    "score": -69,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_432",
    "score": -71,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_205",
    "score": -71,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_374",
    "score": -73,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_223",
    "score": -73,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_478",
    "score": -75,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_88",
    "score": -76,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_326",
    "score": -77,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_369",
    "score": -79,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_49",
    "score": -81,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_451",
    "score": -81,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_447",
    "score": -82,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_287",
    "score": -84,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_123",
    "score": -86,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_414",
    "score": -87,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_450",
    "score": -88,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_109",
    "score": -88,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_420",
    "score": -89,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_394",
    "score": -89,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_267",
    "score": -91,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_15",
    "score": -94,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_90",
    "score": -94,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_192",
    "score": -94,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_147",
    "score": -95,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_3",
    "score": -96,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_497",
    "score": -97,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_202",
    "score": -99,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_335",
    "score": -100,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_43",
    "score": -100,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_41",
    "score": -101,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_296",
    "score": -103,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_56",
    "score": -103,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_89",
    "score": -106,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_219",
    "score": -107,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_297",
    "score": -108,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_470",
    "score": -108,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_323",
    "score": -109,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_357",
    "score": -110,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_206",
    "score": -115,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_446",
    "score": -116,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_477",
    "score": -117,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_347",
    "score": -118,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_168",
    "score": -119,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_358",
    "score": -120,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_419",
    "score": -121,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_87",
    "score": -122,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_465",
    "score": -125,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_431",
    "score": -127,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_200",
    "score": -134,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_215",
    "score": -136,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_258",
    "score": -138,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_230",
    "score": -140,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_86",
    "score": -142,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_366",
    "score": -142,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_288",
    "score": -143,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_481",
    "score": -144,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_473",
    "score": -144,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_310",
    "score": -145,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_102",
    "score": -146,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_110",
    "score": -146,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_398",
    "score": -147,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_355",
    "score": -148,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_162",
    "score": -148,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_79",
    "score": -153,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_72",
    "score": -155,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_315",
    "score": -156,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_142",
    "score": -157,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_152",
    "score": -162,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_407",
    "score": -162,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_115",
    "score": -163,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_78",
    "score": -164,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_91",
    "score": -164,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_320",
    "score": -165,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_44",
    "score": -166,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_283",
    "score": -167,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_464",
    "score": -168,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_404",
    "score": -169,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_428",
    "score": -171,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_35",
    "score": -173,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_469",
    "score": -176,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_489",
    "score": -178,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_265",
    "score": -181,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_454",
    "score": -183,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_271",
    "score": -183,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_255",
    "score": -183,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_39",
    "score": -185,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_222",
    "score": -186,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_155",
    "score": -186,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_377",
    "score": -188,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_371",
    "score": -188,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_17",
    "score": -188,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_291",
    "score": -190,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_137",
    "score": -192,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_417",
    "score": -195,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_245",
    "score": -196,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_66",
    "score": -198,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_201",
    "score": -198,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_81",
    "score": -201,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_274",
    "score": -202,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_372",
    "score": -215,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_193",
    "score": -216,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_216",
    "score": -216,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_96",
    "score": -216,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_460",
    "score": -218,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_232",
    "score": -219,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_170",
    "score": -220,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_128",
    "score": -224,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_188",
    "score": -224,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_111",
    "score": -226,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_314",
    "score": -230,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_400",
    "score": -232,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_490",
    "score": -239,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_176",
    "score": -243,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_127",
    "score": -243,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_94",
    "score": -255,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_304",
    "score": -256,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_346",
    "score": -258,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_252",
    "score": -259,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_472",
    "score": -266,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_106",
    "score": -267,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_289",
    "score": -268,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_415",
    "score": -269,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_157",
    "score": -273,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_13",
    "score": -274,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_121",
    "score": -277,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_262",
    "score": -278,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_224",
    "score": -279,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_131",
    "score": -280,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_292",
    "score": -284,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_268",
    "score": -285,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_27",
    "score": -286,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_46",
    "score": -289,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_298",
    "score": -291,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_354",
    "score": -291,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_204",
    "score": -293,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_275",
    "score": -294,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_406",
    "score": -295,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_495",
    "score": -296,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_132",
    "score": -299,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_381",
    "score": -300,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_313",
    "score": -301,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_260",
    "score": -303,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_259",
    "score": -305,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_57",
    "score": -306,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_244",
    "score": -310,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_150",
    "score": -320,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_122",
    "score": -321,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_48",
    "score": -322,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_458",
    "score": -325,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_324",
    "score": -329,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_350",
    "score": -333,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_421",
    "score": -334,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_167",
    "score": -335,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_321",
    "score": -335,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_299",
    "score": -342,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_403",
    "score": -352,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_237",
    "score": -353,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_445",
    "score": -357,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_52",
    "score": -357,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_186",
    "score": -358,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_242",
    "score": -359,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_498",
    "score": -360,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_474",
    "score": -361,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_153",
    "score": -364,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_136",
    "score": -365,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_402",
    "score": -373,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_18",
    "score": -374,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_261",
    "score": -375,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_284",
    "score": -379,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_40",
    "score": -380,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_367",
    "score": -381,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_395",
    "score": -382,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_459",
    "score": -388,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_85",
    "score": -393,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_207",
    "score": -399,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_423",
    "score": -402,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_391",
    "score": -403,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_105",
    "score": -405,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_339",
    "score": -406,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_243",
    "score": -407,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_108",
    "score": -410,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_5",
    "score": -413,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_392",
    "score": -414,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_114",
    "score": -417,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_389",
    "score": -419,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_281",
    "score": -419,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_256",
    "score": -420,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_439",
    "score": -423,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_14",
    "score": -425,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_120",
    "score": -431,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_336",
    "score": -434,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_151",
    "score": -435,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_282",
    "score": -436,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_294",
    "score": -440,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_387",
    "score": -441,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_352",
    "score": -442,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_328",
    "score": -444,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_203",
    "score": -444,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_444",
    "score": -449,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_229",
    "score": -450,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_331",
    "score": -451,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_333",
    "score": -458,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_356",
    "score": -459,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_476",
    "score": -464,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_171",
    "score": -465,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_485",
    "score": -466,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_236",
    "score": -467,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_250",
    "score": -468,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_312",
    "score": -469,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_253",
    "score": -475,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_164",
    "score": -476,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_130",
    "score": -478,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_349",
    "score": -482,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_379",
    "score": -482,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_54",
    "score": -484,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_99",
    "score": -485,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_233",
    "score": -490,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_134",
    "score": -495,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  },
  {
    "username": "@username_301",
    "score": -499,
    "text": "In eu est eu quam rhoncus vestibulum at non lectus. Proin non libero efficitur, semper lorem hendrerit, venenatis purus. Aliquam rhoncus, velit et rutrum tempor, nibh nulla scelerisque leo, vitae laoreet libero eros ac nisi."
  }
];

var VoteButtons = {
render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._c;return _c('div',{staticClass:"post__vote-buttons"},[_c('button',{staticClass:"post__vote-down",on:{"click":function($event){_vm.$emit('downvote');}}},[_vm._v("-")]),_vm._v(" "),_c('span',{staticClass:"post__vote-score"},[_vm._v(_vm._s(_vm._f("format")(_vm.score)))]),_vm._v(" "),_c('button',{staticClass:"post__vote-up",on:{"click":function($event){_vm.$emit('upvote');}}},[_vm._v("+")])])},
staticRenderFns: [],
  props: ['score'],
  filters: {
    format (score) {
      if (score === 0) {
        return '0';
      }

      if (score > 0) {
        return `+${score}`;
      }

      return score.toString();
    }
  }
};

var Comment = {
render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._c;return _c('div',{staticClass:"post__comment"},[_c('h2',{staticClass:"post__comment-author"},[_vm._v(_vm._s(_vm.comment.username)+" wrote")]),_vm._v(" "),_c('p',{staticClass:"post__comment-text"},[_vm._v("\n    "+_vm._s(_vm.comment.text)+"\n  ")]),_vm._v(" "),_c('vote-buttons',{attrs:{"score":_vm.comment.score},on:{"upvote":function($event){_vm.comment.score++;},"downvote":function($event){_vm.comment.score--;}}})])},
staticRenderFns: [],
  props: ['comment'],
  bootAsync: true,
  components: { VoteButtons }
};

var App = {
render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._c;return _c('section',{staticClass:"post"},[_c('h1',{staticClass:"post__title"},[_vm._v("A post about priorities and scheduling")]),_vm._v(" "),_c('a',{staticClass:"post__link",attrs:{"href":"#"}},[_vm._v("http://example.com/post")]),_vm._v(" "),_vm._m(0),_vm._v(" "),_c('section',{staticClass:"post__comments"},[_c('h1',[_vm._v("Comments")]),_vm._v(" "),_vm._l((_vm.commentData),function(comment){return _c('comment',{attrs:{"comment":comment}})})],true)])},
staticRenderFns: [function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._c;return _c('div',{staticClass:"post__description"},[_c('p',[_vm._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed orci mauris, euismod quis imperdiet eu, lacinia in leo. Mauris in orci sit amet eros finibus molestie. Vivamus laoreet, nibh eget ultrices consequat, leo mauris suscipit libero, eget feugiat enim turpis ac neque. Nam venenatis dolor ac posuere rhoncus.")]),_vm._v(" "),_c('p',[_vm._v("In eget finibus sapien, sit amet tempus augue. Pellentesque eu interdum nulla, sit amet dictum turpis. Sed ut lorem quis purus aliquet egestas. Nulla id risus ex. Morbi et lacinia risus. Integer eget ornare arcu. Donec purus est, dignissim a ante a, lacinia placerat massa. Donec quis lacinia lorem.")])])}],
  components: { Comment },
  data: () => ({ commentData })
};

const app = new vue_min$1({
  render: h => h(App)
});

if (typeof window !== 'undefined') {
  app.$mount('.post');
} else {
  module.exports = app;
}
