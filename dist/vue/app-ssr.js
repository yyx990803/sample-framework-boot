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
 * Build: 2016-12-14T19:06:45.990Z
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
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.Vue=t();}(commonjsGlobal,function(){"use strict";function e(e){return null==e?"":"object"==typeof e?JSON.stringify(e,null,2):String(e)}function t(e){var t=parseFloat(e,10);return t||0===t?t:e}function n(e,t){for(var n=Object.create(null),r=e.split(","),i=0;i<r.length;i++)n[r[i]]=!0;return t?function(e){return n[e.toLowerCase()]}:function(e){return n[e]}}function r(e,t){if(e.length){var n=e.indexOf(t);if(n>-1)return e.splice(n,1)}}function i(e,t){return Xr.call(e,t)}function a(e){return"string"==typeof e||"number"==typeof e}function o(e){var t=Object.create(null);return function(n){var r=t[n];return r||(t[n]=e(n))}}function s(e,t){function n(n){var r=arguments.length;return r?r>1?e.apply(t,arguments):e.call(t,n):e.call(t)}return n._length=e.length,n}function c(e,t){t=t||0;for(var n=e.length-t,r=new Array(n);n--;)r[n]=e[n+t];return r}function l(e,t){for(var n in t)e[n]=t[n];return e}function u(e){return null!==e&&"object"==typeof e}function f(e){return ai.call(e)===oi}function d(e){for(var t={},n=0;n<e.length;n++)e[n]&&l(t,e[n]);return t}function p(){}function v(e){return e.reduce(function(e,t){return e.concat(t.staticKeys||[])},[]).join(",")}function h(e,t){return e==t||!(!u(e)||!u(t))&&JSON.stringify(e)===JSON.stringify(t)}function m(e,t){for(var n=0;n<e.length;n++)if(h(e[n],t))return n;return-1}function g(e){var t=(e+"").charCodeAt(0);return 36===t||95===t}function y(e,t,n,r){Object.defineProperty(e,t,{value:n,enumerable:!!r,writable:!0,configurable:!0});}function _(e){if(!ui.test(e)){var t=e.split(".");return function(e){for(var n=0;n<t.length;n++){if(!e)return;e=e[t[n]];}return e}}}function b(e){return/native code/.test(e.toString())}function $(e){ki.target&&Ai.push(ki.target),ki.target=e;}function w(){ki.target=Ai.pop();}function x(e,t){e.__proto__=t;}function C(e,t,n){for(var r=0,i=n.length;r<i;r++){var a=n[r];y(e,a,t[a]);}}function k(e,t){if(u(e)){var n;return i(e,"__ob__")&&e.__ob__ instanceof ji?n=e.__ob__:Ei.shouldConvert&&!_i()&&(Array.isArray(e)||f(e))&&Object.isExtensible(e)&&!e._isVue&&(n=new ji(e)),t&&n&&n.vmCount++,n}}function A(e,t,n,r){var i=new ki,a=Object.getOwnPropertyDescriptor(e,t);if(!a||a.configurable!==!1){var o=a&&a.get,s=a&&a.set,c=k(n);Object.defineProperty(e,t,{enumerable:!0,configurable:!0,get:function(){var t=o?o.call(e):n;return ki.target&&(i.depend(),c&&c.dep.depend(),Array.isArray(t)&&T(t)),t},set:function(t){var r=o?o.call(e):n;t===r||t!==t&&r!==r||(s?s.call(e,t):n=t,c=k(t),i.notify());}});}}function O(e,t,n){if(Array.isArray(e))return e.length=Math.max(e.length,t),e.splice(t,1,n),n;if(i(e,t))return void(e[t]=n);var r=e.__ob__;if(!(e._isVue||r&&r.vmCount))return r?(A(r.value,t,n),r.dep.notify(),n):void(e[t]=n)}function S(e,t){var n=e.__ob__;e._isVue||n&&n.vmCount||i(e,t)&&(delete e[t],n&&n.dep.notify());}function T(e){for(var t=void 0,n=0,r=e.length;n<r;n++)t=e[n],t&&t.__ob__&&t.__ob__.dep.depend(),Array.isArray(t)&&T(t);}function E(e,t){if(!t)return e;for(var n,r,a,o=Object.keys(t),s=0;s<o.length;s++)n=o[s],r=e[n],a=t[n],i(e,n)?f(r)&&f(a)&&E(r,a):O(e,n,a);return e}function j(e,t){return t?e?e.concat(t):Array.isArray(t)?t:[t]:e}function N(e,t){var n=Object.create(e||null);return t?l(n,t):n}function L(e){var t=e.props;if(t){var n,r,i,a={};if(Array.isArray(t))for(n=t.length;n--;)r=t[n],"string"==typeof r&&(i=ti(r),a[i]={type:null});else if(f(t))for(var o in t)r=t[o],i=ti(o),a[i]=f(r)?r:{type:r};e.props=a;}}function D(e){var t=e.directives;if(t)for(var n in t){var r=t[n];"function"==typeof r&&(t[n]={bind:r,update:r});}}function M(e,t,n){function r(r){var i=Ni[r]||Li;u[r]=i(e[r],t[r],n,r);}L(t),D(t);var a=t.extends;if(a&&(e="function"==typeof a?M(e,a.options,n):M(e,a,n)),t.mixins)for(var o=0,s=t.mixins.length;o<s;o++){var c=t.mixins[o];c.prototype instanceof Be&&(c=c.options),e=M(e,c,n);}var l,u={};for(l in e)r(l);for(l in t)i(e,l)||r(l);return u}function P(e,t,n,r){if("string"==typeof n){var a=e[t];if(i(a,n))return a[n];var o=ti(n);if(i(a,o))return a[o];var s=ni(o);if(i(a,s))return a[s];var c=a[n]||a[o]||a[s];return c}}function R(e,t,n,r){var a=t[e],o=!i(n,e),s=n[e];if(H(a.type)&&(o&&!i(a,"default")?s=!1:""!==s&&s!==ii(e)||(s=!0)),void 0===s){s=I(r,a,e);var c=Ei.shouldConvert;Ei.shouldConvert=!0,k(s),Ei.shouldConvert=c;}return s}function I(e,t,n){if(i(t,"default")){var r=t.default;return u(r),e&&e.$options.propsData&&void 0===e.$options.propsData[n]&&void 0!==e[n]?e[n]:"function"==typeof r&&t.type!==Function?r.call(e):r}}function F(e){var t=e&&e.toString().match(/^\s*function (\w+)/);return t&&t[1]}function H(e){if(!Array.isArray(e))return"Boolean"===F(e);for(var t=0,n=e.length;t<n;t++)if("Boolean"===F(e[t]))return!0;return!1}function U(){Mi.length=0,Pi={},Ri=Ii=!1;}function B(){for(Ii=!0,Mi.sort(function(e,t){return e.id-t.id}),Fi=0;Fi<Mi.length;Fi++){var e=Mi[Fi],t=e.id;Pi[t]=null,e.run();}bi&&li.devtools&&bi.emit("flush"),U();}function z(e){var t=e.id;if(null==Pi[t]){if(Pi[t]=!0,Ii){for(var n=Mi.length-1;n>=0&&Mi[n].id>e.id;)n--;Mi.splice(Math.max(n,Fi)+1,0,e);}else Mi.push(e);Ri||(Ri=!0,$i(B));}}function V(e){zi.clear(),J(e,zi);}function J(e,t){var n,r,i=Array.isArray(e);if((i||u(e))&&Object.isExtensible(e)){if(e.__ob__){var a=e.__ob__.dep.id;if(t.has(a))return;t.add(a);}if(i)for(n=e.length;n--;)J(e[n],t);else for(r=Object.keys(e),n=r.length;n--;)J(e[r[n]],t);}}function K(e){e._watchers=[];var t=e.$options;t.props&&q(e,t.props),t.methods&&Y(e,t.methods),t.data?W(e):k(e._data={},!0),t.computed&&Z(e,t.computed),t.watch&&Q(e,t.watch);}function q(e,t){var n=e.$options.propsData||{},r=e.$options._propKeys=Object.keys(t),i=!e.$parent;Ei.shouldConvert=i;for(var a=function(i){var a=r[i];A(e,a,R(a,t,n,e));},o=0;o<r.length;o++)a(o);Ei.shouldConvert=!0;}function W(e){var t=e.$options.data;t=e._data="function"==typeof t?t.call(e):t||{},f(t)||(t={});for(var n=Object.keys(t),r=e.$options.props,a=n.length;a--;)r&&i(r,n[a])||te(e,n[a]);k(t,!0);}function Z(e,t){for(var n in t){var r=t[n];"function"==typeof r?(Vi.get=G(r,e),Vi.set=p):(Vi.get=r.get?r.cache!==!1?G(r.get,e):s(r.get,e):p,Vi.set=r.set?s(r.set,e):p),Object.defineProperty(e,n,Vi);}}function G(e,t){var n=new Ui(t,e,p,{lazy:!0});return function(){return n.dirty&&n.evaluate(),ki.target&&n.depend(),n.value}}function Y(e,t){for(var n in t)e[n]=null==t[n]?p:s(t[n],e);}function Q(e,t){for(var n in t){var r=t[n];if(Array.isArray(r))for(var i=0;i<r.length;i++)X(e,n,r[i]);else X(e,n,r);}}function X(e,t,n){var r;f(n)&&(r=n,n=n.handler),"string"==typeof n&&(n=e[n]),e.$watch(t,n,r);}function ee(e){var t={};t.get=function(){return this._data},Object.defineProperty(e.prototype,"$data",t),e.prototype.$set=O,e.prototype.$delete=S,e.prototype.$watch=function(e,t,n){var r=this;n=n||{},n.user=!0;var i=new Ui(r,e,t,n);return n.immediate&&t.call(r,i.value),function(){i.teardown();}};}function te(e,t){g(t)||Object.defineProperty(e,t,{configurable:!0,enumerable:!0,get:function(){return e._data[t]},set:function(n){e._data[t]=n;}});}function ne(e){return new Ji(void 0,void 0,void 0,String(e))}function re(e){var t=new Ji(e.tag,e.data,e.children,e.text,e.elm,e.context,e.componentOptions);return t.ns=e.ns,t.isStatic=e.isStatic,t.key=e.key,t.isCloned=!0,t}function ie(e){for(var t=new Array(e.length),n=0;n<e.length;n++)t[n]=re(e[n]);return t}function ae(e,t,n,r){r+=t;var i=e.__injected||(e.__injected={});if(!i[r]){i[r]=!0;var a=e[t];a?e[t]=function(){a.apply(this,arguments),n.apply(this,arguments);}:e[t]=n;}}function oe(e,t,n,r,i){var a,o,s,c,l,u,f;for(a in e)if(o=e[a],s=t[a],o)if(s){if(o!==s)if(Array.isArray(s)){s.length=o.length;for(var d=0;d<s.length;d++)s[d]=o[d];e[a]=s;}else s.fn=o,e[a]=s;}else f="~"===a.charAt(0),l=f?a.slice(1):a,u="!"===l.charAt(0),l=u?l.slice(1):l,Array.isArray(o)?n(l,o.invoker=se(o),f,u):(o.invoker||(c=o,o=e[a]={},o.fn=c,o.invoker=ce(o)),n(l,o.invoker,f,u));else;for(a in t)e[a]||(f="~"===a.charAt(0),l=f?a.slice(1):a,u="!"===l.charAt(0),l=u?l.slice(1):l,r(l,t[a].invoker,u));}function se(e){return function(t){for(var n=arguments,r=1===arguments.length,i=0;i<e.length;i++)r?e[i](t):e[i].apply(null,n);}}function ce(e){return function(t){var n=1===arguments.length;n?e.fn(t):e.fn.apply(null,arguments);}}function le(e){for(var t=0;t<e.length;t++)if(Array.isArray(e[t]))return Array.prototype.concat.apply([],e);return e}function ue(e){return a(e)?[ne(e)]:Array.isArray(e)?fe(e):void 0}function fe(e,t){var n,r,i,o=[];for(n=0;n<e.length;n++)r=e[n],null!=r&&"boolean"!=typeof r&&(i=o[o.length-1],Array.isArray(r)?o.push.apply(o,fe(r,(t||"")+"_"+n)):a(r)?i&&i.text?i.text+=String(r):""!==r&&o.push(ne(r)):r.text&&i&&i.text?o[o.length-1]=ne(i.text+r.text):(r.tag&&null==r.key&&null!=t&&(r.key="__vlist"+t+"_"+n+"__"),o.push(r)));return o}function de(e){return e&&e.filter(function(e){return e&&e.componentOptions})[0]}function pe(e){e._events=Object.create(null),e._hasHookEvent=!1;var t=e.$options._parentListeners;t&&me(e,t);}function ve(e,t,n){n?Bi.$once(e,t):Bi.$on(e,t);}function he(e,t){Bi.$off(e,t);}function me(e,t,n){Bi=e,oe(t,n||{},ve,he,e);}function ge(e){var t=/^hook:/;e.prototype.$on=function(e,n){var r=this;return(r._events[e]||(r._events[e]=[])).push(n),t.test(e)&&(r._hasHookEvent=!0),r},e.prototype.$once=function(e,t){function n(){r.$off(e,n),t.apply(r,arguments);}var r=this;return n.fn=t,r.$on(e,n),r},e.prototype.$off=function(e,t){var n=this;if(!arguments.length)return n._events=Object.create(null),n;var r=n._events[e];if(!r)return n;if(1===arguments.length)return n._events[e]=null,n;for(var i,a=r.length;a--;)if(i=r[a],i===t||i.fn===t){r.splice(a,1);break}return n},e.prototype.$emit=function(e){var t=this,n=t._events[e];if(n){n=n.length>1?c(n):n;for(var r=c(arguments,1),i=0,a=n.length;i<a;i++)n[i].apply(t,r);}return t};}function ye(e){var t=e.$options,n=t.parent;if(n&&!t.abstract){for(;n.$options.abstract&&n.$parent;)n=n.$parent;n.$children.push(e);}e.$parent=n,e.$root=n?n.$root:e,e.$children=[],e.$refs={},e._watcher=null,e._inactive=!1,e._isMounted=!1,e._isDestroyed=!1,e._isBeingDestroyed=!1;}function _e(e){e.prototype._mount=function(e,t){var n=this;return n.$el=e,n.$options.render||(n.$options.render=Ki),be(n,"beforeMount"),n._watcher=new Ui(n,function(){n._update(n._render(),t);},p),t=!1,null==n.$vnode&&(n._isMounted=!0,be(n,"mounted")),n},e.prototype._update=function(e,t){var n=this;n._isMounted&&be(n,"beforeUpdate");var r=n.$el,i=n._vnode,a=qi;qi=n,n._vnode=e,i?n.$el=n.__patch__(i,e):n.$el=n.__patch__(n.$el,e,t,!1,n.$options._parentElm,n.$options._refElm),qi=a,r&&(r.__vue__=null),n.$el&&(n.$el.__vue__=n),n.$vnode&&n.$parent&&n.$vnode===n.$parent._vnode&&(n.$parent.$el=n.$el),n._isMounted&&be(n,"updated");},e.prototype._updateFromParent=function(e,t,n,r){var i=this,a=!(!i.$options._renderChildren&&!r);if(i.$options._parentVnode=n,i.$vnode=n,i._vnode&&(i._vnode.parent=n),i.$options._renderChildren=r,e&&i.$options.props){Ei.shouldConvert=!1;for(var o=i.$options._propKeys||[],s=0;s<o.length;s++){var c=o[s];i[c]=R(c,i.$options.props,e,i);}Ei.shouldConvert=!0,i.$options.propsData=e;}if(t){var l=i.$options._parentListeners;i.$options._parentListeners=t,me(i,t,l);}a&&(i.$slots=Ie(r,n.context),i.$forceUpdate());},e.prototype.$forceUpdate=function(){var e=this;e._watcher&&e._watcher.update();},e.prototype.$destroy=function(){var e=this;if(!e._isBeingDestroyed){be(e,"beforeDestroy"),e._isBeingDestroyed=!0;var t=e.$parent;!t||t._isBeingDestroyed||e.$options.abstract||r(t.$children,e),e._watcher&&e._watcher.teardown();for(var n=e._watchers.length;n--;)e._watchers[n].teardown();e._data.__ob__&&e._data.__ob__.vmCount--,e._isDestroyed=!0,be(e,"destroyed"),e.$off(),e.$el&&(e.$el.__vue__=null),e.__patch__(e._vnode,null);}};}function be(e,t){var n=e.$options[t];if(n)for(var r=0,i=n.length;r<i;r++)n[r].call(e);e._hasHookEvent&&e.$emit("hook:"+t);}function $e(e,t,n,r,i){if(e){var a=n.$options._base;if(u(e)&&(e=a.extend(e)),"function"==typeof e){if(!e.cid)if(e.resolved)e=e.resolved;else if(e=Se(e,a,function(){n.$forceUpdate();}),!e)return;Ue(e),t=t||{};var o=Te(t,e);if(e.options.functional)return we(e,o,t,n,r);var s=t.on;t.on=t.nativeOn,e.options.abstract&&(t={}),je(t);var c=e.options.name||i,l=new Ji("vue-component-"+e.cid+(c?"-"+c:""),t,void 0,void 0,void 0,n,{Ctor:e,propsData:o,listeners:s,tag:i,children:r});return l}}}function we(e,t,n,r,i){var a={},o=e.options.props;if(o)for(var s in o)a[s]=R(s,o,t);var c=Object.create(r),l=function(e,t,n,r){return Le(c,e,t,n,r,!0)},u=e.options.render.call(null,l,{props:a,data:n,parent:r,children:i,slots:function(){return Ie(i,r)}});return u instanceof Ji&&(u.functionalContext=r,n.slot&&((u.data||(u.data={})).slot=n.slot)),u}function xe(e,t,n,r){var i=e.componentOptions,a={_isComponent:!0,parent:t,propsData:i.propsData,_componentTag:i.tag,_parentVnode:e,_parentListeners:i.listeners,_renderChildren:i.children,_parentElm:n||null,_refElm:r||null},o=e.data.inlineTemplate;return o&&(a.render=o.render,a.staticRenderFns=o.staticRenderFns),new i.Ctor(a)}function Ce(e,t,n,r){if(!e.child||e.child._isDestroyed){var i=e.child=xe(e,qi,n,r);i.$mount(t?e.elm:void 0,t);}else if(e.data.keepAlive){var a=e;ke(a,a);}}function ke(e,t){var n=t.componentOptions,r=t.child=e.child;r._updateFromParent(n.propsData,n.listeners,t,n.children);}function Ae(e){e.child._isMounted||(e.child._isMounted=!0,be(e.child,"mounted")),e.data.keepAlive&&(e.child._inactive=!1,be(e.child,"activated"));}function Oe(e){e.child._isDestroyed||(e.data.keepAlive?(e.child._inactive=!0,be(e.child,"deactivated")):e.child.$destroy());}function Se(e,t,n){if(!e.requested){e.requested=!0;var r=e.pendingCallbacks=[n],i=!0,a=function(n){if(u(n)&&(n=t.extend(n)),e.resolved=n,!i)for(var a=0,o=r.length;a<o;a++)r[a](n);},o=function(e){},s=e(a,o);return s&&"function"==typeof s.then&&!e.resolved&&s.then(a,o),i=!1,e.resolved}e.pendingCallbacks.push(n);}function Te(e,t){var n=t.options.props;if(n){var r={},i=e.attrs,a=e.props,o=e.domProps;if(i||a||o)for(var s in n){var c=ii(s);Ee(r,a,s,c,!0)||Ee(r,i,s,c)||Ee(r,o,s,c);}return r}}function Ee(e,t,n,r,a){if(t){if(i(t,n))return e[n]=t[n],a||delete t[n],!0;if(i(t,r))return e[n]=t[r],a||delete t[r],!0}return!1}function je(e){e.hook||(e.hook={});for(var t=0;t<Zi.length;t++){var n=Zi[t],r=e.hook[n],i=Wi[n];e.hook[n]=r?Ne(i,r):i;}}function Ne(e,t){return function(n,r,i,a){e(n,r,i,a),t(n,r,i,a);}}function Le(e,t,n,r,i,o){return(Array.isArray(n)||a(n))&&(i=r,r=n,n=void 0),o&&(i=Yi),De(e,t,n,r,i)}function De(e,t,n,r,i){if(n&&n.__ob__)return Ki();if(!t)return Ki();Array.isArray(r)&&"function"==typeof r[0]&&(n=n||{},n.scopedSlots={default:r[0]},r.length=0),i===Yi?r=ue(r):i===Gi&&(r=le(r));var a,o;if("string"==typeof t){var s;o=li.getTagNamespace(t),a=li.isReservedTag(t)?new Ji(li.parsePlatformTagName(t),n,r,void 0,void 0,e):(s=P(e.$options,"components",t))?$e(s,n,e,r,t):new Ji(t,n,r,void 0,void 0,e);}else a=$e(t,n,e,r);return a?(o&&Me(a,o),a):Ki()}function Me(e,t){if(e.ns=t,"foreignObject"!==e.tag&&e.children)for(var n=0,r=e.children.length;n<r;n++){var i=e.children[n];i.tag&&!i.ns&&Me(i,t);}}function Pe(e){e.$vnode=null,e._vnode=null,e._staticTrees=null;var t=e.$options._parentVnode,n=t&&t.context;e.$slots=Ie(e.$options._renderChildren,n),e.$scopedSlots={},e._c=function(t,n,r,i){return Le(e,t,n,r,i,!1)},e.$createElement=function(t,n,r,i){return Le(e,t,n,r,i,!0)},e.$options.el&&e.$mount(e.$options.el);}function Re(n){function r(e,t,n){if(Array.isArray(e))for(var r=0;r<e.length;r++)e[r]&&"string"!=typeof e[r]&&i(e[r],t+"_"+r,n);else i(e,t,n);}function i(e,t,n){e.isStatic=!0,e.key=t,e.isOnce=n;}n.prototype.$nextTick=function(e){return $i(e,this)},n.prototype._render=function(){var e=this,t=e.$options,n=t.render,r=t.staticRenderFns,i=t._parentVnode;if(e._isMounted)for(var a in e.$slots)e.$slots[a]=ie(e.$slots[a]);i&&i.data.scopedSlots&&(e.$scopedSlots=i.data.scopedSlots),r&&!e._staticTrees&&(e._staticTrees=[]),e.$vnode=i;var o;try{o=n.call(e._renderProxy,e.$createElement);}catch(t){if(!li.errorHandler)throw t;li.errorHandler.call(null,t,e),o=e._vnode;}return o instanceof Ji||(o=Ki()),o.parent=i,o},n.prototype._s=e,n.prototype._v=ne,n.prototype._n=t,n.prototype._e=Ki,n.prototype._q=h,n.prototype._i=m,n.prototype._m=function(e,t){var n=this._staticTrees[e];return n&&!t?Array.isArray(n)?ie(n):re(n):(n=this._staticTrees[e]=this.$options.staticRenderFns[e].call(this._renderProxy),r(n,"__static__"+e,!1),n)},n.prototype._o=function(e,t,n){return r(e,"__once__"+t+(n?"_"+n:""),!0),e},n.prototype._f=function(e){return P(this.$options,"filters",e,!0)||ci},n.prototype._l=function(e,t){var n,r,i,a,o;if(Array.isArray(e))for(n=new Array(e.length),r=0,i=e.length;r<i;r++)n[r]=t(e[r],r);else if("number"==typeof e)for(n=new Array(e),r=0;r<e;r++)n[r]=t(r+1,r);else if(u(e))for(a=Object.keys(e),n=new Array(a.length),r=0,i=a.length;r<i;r++)o=a[r],n[r]=t(e[o],o,r);return n},n.prototype._t=function(e,t,n){var r=this.$scopedSlots[e];if(r)return r(n||{})||t;var i=this.$slots[e];return i||t},n.prototype._b=function(e,t,n,r){if(n)if(u(n)){Array.isArray(n)&&(n=d(n));for(var i in n)if("class"===i||"style"===i)e[i]=n[i];else{var a=r||li.mustUseProp(t,i)?e.domProps||(e.domProps={}):e.attrs||(e.attrs={});a[i]=n[i];}}else;return e},n.prototype._k=function(e,t,n){var r=li.keyCodes[t]||n;return Array.isArray(r)?r.indexOf(e)===-1:r!==e};}function Ie(e,t){var n={};if(!e)return n;for(var r,i,a=[],o=0,s=e.length;o<s;o++)if(i=e[o],(i.context===t||i.functionalContext===t)&&i.data&&(r=i.data.slot)){var c=n[r]||(n[r]=[]);"template"===i.tag?c.push.apply(c,i.children):c.push(i);}else a.push(i);return a.length&&(1!==a.length||" "!==a[0].text&&!a[0].isComment)&&(n.default=a),n}function Fe(e){e.prototype._init=function(e){var t=this;t._uid=Qi++,t._isVue=!0,e&&e._isComponent?He(t,e):t.$options=M(Ue(t.constructor),e||{},t),t._renderProxy=t,t._self=t,ye(t),pe(t),be(t,"beforeCreate"),K(t),be(t,"created"),Pe(t);};}function He(e,t){var n=e.$options=Object.create(e.constructor.options);n.parent=t.parent,n.propsData=t.propsData,n._parentVnode=t._parentVnode,n._parentListeners=t._parentListeners,n._renderChildren=t._renderChildren,n._componentTag=t._componentTag,n._parentElm=t._parentElm,n._refElm=t._refElm,t.render&&(n.render=t.render,n.staticRenderFns=t.staticRenderFns);}function Ue(e){var t=e.options;if(e.super){var n=e.super.options,r=e.superOptions,i=e.extendOptions;n!==r&&(e.superOptions=n,i.render=t.render,i.staticRenderFns=t.staticRenderFns,i._scopeId=t._scopeId,t=e.options=M(n,i),t.name&&(t.components[t.name]=e));}return t}function Be(e){this._init(e);}function ze(e){e.use=function(e){if(!e.installed){var t=c(arguments,1);return t.unshift(this),"function"==typeof e.install?e.install.apply(e,t):e.apply(null,t),e.installed=!0,this}};}function Ve(e){e.mixin=function(e){this.options=M(this.options,e);};}function Je(e){e.cid=0;var t=1;e.extend=function(e){e=e||{};var n=this,r=n.cid,i=e._Ctor||(e._Ctor={});if(i[r])return i[r];var a=e.name||n.options.name,o=function(e){this._init(e);};return o.prototype=Object.create(n.prototype),o.prototype.constructor=o,o.cid=t++,o.options=M(n.options,e),o.super=n,o.extend=n.extend,o.mixin=n.mixin,o.use=n.use,li._assetTypes.forEach(function(e){o[e]=n[e];}),a&&(o.options.components[a]=o),o.superOptions=n.options,o.extendOptions=e,i[r]=o,o};}function Ke(e){li._assetTypes.forEach(function(t){e[t]=function(e,n){return n?("component"===t&&f(n)&&(n.name=n.name||e,n=this.options._base.extend(n)),"directive"===t&&"function"==typeof n&&(n={bind:n,update:n}),this.options[t+"s"][e]=n,n):this.options[t+"s"][e]};});}function qe(e,t){return"string"==typeof e?e.split(",").indexOf(t)>-1:e.test(t)}function We(e){var t={};t.get=function(){return li},Object.defineProperty(e,"config",t),e.util=Di,e.set=O,e.delete=S,e.nextTick=$i,e.options=Object.create(null),li._assetTypes.forEach(function(t){e.options[t+"s"]=Object.create(null);}),e.options._base=e,l(e.options.components,ta),ze(e),Ve(e),Je(e),Ke(e);}function Ze(e){for(var t=e.data,n=e,r=e;r.child;)r=r.child._vnode,r.data&&(t=Ge(r.data,t));for(;n=n.parent;)n.data&&(t=Ge(t,n.data));return Ye(t)}function Ge(e,t){return{staticClass:Qe(e.staticClass,t.staticClass),class:e.class?[e.class,t.class]:t.class}}function Ye(e){var t=e.class,n=e.staticClass;return n||t?Qe(n,Xe(t)):""}function Qe(e,t){return e?t?e+" "+t:e:t||""}function Xe(e){var t="";if(!e)return t;if("string"==typeof e)return e;if(Array.isArray(e)){for(var n,r=0,i=e.length;r<i;r++)e[r]&&(n=Xe(e[r]))&&(t+=n+" ");return t.slice(0,-1)}if(u(e)){for(var a in e)e[a]&&(t+=a+" ");return t.slice(0,-1)}return t}function et(e){return va(e)?"svg":"math"===e?"math":void 0}function tt(e){if(!di)return!0;if(ma(e))return!1;if(e=e.toLowerCase(),null!=ga[e])return ga[e];var t=document.createElement(e);return e.indexOf("-")>-1?ga[e]=t.constructor===window.HTMLUnknownElement||t.constructor===window.HTMLElement:ga[e]=/HTMLUnknownElement/.test(t.toString())}function nt(e){if("string"==typeof e){if(e=document.querySelector(e),!e)return document.createElement("div")}return e}function rt(e,t){var n=document.createElement(e);return"select"!==e?n:(t.data&&t.data.attrs&&"multiple"in t.data.attrs&&n.setAttribute("multiple","multiple"),n)}function it(e,t){return document.createElementNS(da[e],t)}function at(e){return document.createTextNode(e)}function ot(e){return document.createComment(e)}function st(e,t,n){e.insertBefore(t,n);}function ct(e,t){e.removeChild(t);}function lt(e,t){e.appendChild(t);}function ut(e){return e.parentNode}function ft(e){return e.nextSibling}function dt(e){return e.tagName}function pt(e,t){e.textContent=t;}function vt(e,t,n){e.setAttribute(t,n);}function ht(e,t){var n=e.data.ref;if(n){var i=e.context,a=e.child||e.elm,o=i.$refs;t?Array.isArray(o[n])?r(o[n],a):o[n]===a&&(o[n]=void 0):e.data.refInFor?Array.isArray(o[n])&&o[n].indexOf(a)<0?o[n].push(a):o[n]=[a]:o[n]=a;}}function mt(e){return null==e}function gt(e){return null!=e}function yt(e,t){return e.key===t.key&&e.tag===t.tag&&e.isComment===t.isComment&&!e.data==!t.data}function _t(e,t,n){var r,i,a={};for(r=t;r<=n;++r)i=e[r].key,gt(i)&&(a[i]=r);return a}function bt(e){function t(e){return new Ji(O.tagName(e).toLowerCase(),{},[],void 0,e)}function r(e,t){function n(){0===--n.listeners&&i(e);}return n.listeners=t,n}function i(e){var t=O.parentNode(e);t&&O.removeChild(t,e);}function o(e,t,n,r,i){if(e.isRootInsert=!i,!s(e,t,n,r)){var a=e.data,o=e.children,c=e.tag;gt(c)?(e.elm=e.ns?O.createElementNS(e.ns,c):O.createElement(c,e),v(e),u(e,o,t),gt(a)&&d(e,t),l(n,e.elm,r)):e.isComment?(e.elm=O.createComment(e.text),l(n,e.elm,r)):(e.elm=O.createTextNode(e.text),l(n,e.elm,r));}}function s(e,t,n,r){var i=e.data;if(gt(i)){var a=gt(e.child)&&i.keepAlive;if(gt(i=i.hook)&&gt(i=i.init)&&i(e,!1,n,r),gt(e.child))return p(e,t),a&&c(e,t,n,r),!0}}function c(e,t,n,r){for(var i,a=e;a.child;)if(a=a.child._vnode,gt(i=a.data)&&gt(i=i.transition)){for(i=0;i<k.activate.length;++i)k.activate[i](ba,a);t.push(a);break}l(n,e.elm,r);}function l(e,t,n){e&&(n?O.insertBefore(e,t,n):O.appendChild(e,t));}function u(e,t,n){if(Array.isArray(t))for(var r=0;r<t.length;++r)o(t[r],n,e.elm,null,!0);else a(e.text)&&O.appendChild(e.elm,O.createTextNode(e.text));}function f(e){for(;e.child;)e=e.child._vnode;return gt(e.tag)}function d(e,t){for(var n=0;n<k.create.length;++n)k.create[n](ba,e);x=e.data.hook,gt(x)&&(x.create&&x.create(ba,e),x.insert&&t.push(e));}function p(e,t){e.data.pendingInsert&&t.push.apply(t,e.data.pendingInsert),e.elm=e.child.$el,f(e)?(d(e,t),v(e)):(ht(e),t.push(e));}function v(e){var t;gt(t=e.context)&&gt(t=t.$options._scopeId)&&O.setAttribute(e.elm,t,""),gt(t=qi)&&t!==e.context&&gt(t=t.$options._scopeId)&&O.setAttribute(e.elm,t,"");}function h(e,t,n,r,i,a){for(;r<=i;++r)o(n[r],a,e,t);}function m(e){var t,n,r=e.data;if(gt(r))for(gt(t=r.hook)&&gt(t=t.destroy)&&t(e),t=0;t<k.destroy.length;++t)k.destroy[t](e);if(gt(t=e.children))for(n=0;n<e.children.length;++n)m(e.children[n]);}function g(e,t,n,r){for(;n<=r;++n){var i=t[n];gt(i)&&(gt(i.tag)?(y(i),m(i)):O.removeChild(e,i.elm));}}function y(e,t){if(t||gt(e.data)){var n=k.remove.length+1;for(t?t.listeners+=n:t=r(e.elm,n),gt(x=e.child)&&gt(x=x._vnode)&&gt(x.data)&&y(x,t),x=0;x<k.remove.length;++x)k.remove[x](e,t);gt(x=e.data.hook)&&gt(x=x.remove)?x(e,t):t();}else i(e.elm);}function _(e,t,n,r,i){for(var a,s,c,l,u=0,f=0,d=t.length-1,p=t[0],v=t[d],m=n.length-1,y=n[0],_=n[m],$=!i;u<=d&&f<=m;)mt(p)?p=t[++u]:mt(v)?v=t[--d]:yt(p,y)?(b(p,y,r),p=t[++u],y=n[++f]):yt(v,_)?(b(v,_,r),v=t[--d],_=n[--m]):yt(p,_)?(b(p,_,r),$&&O.insertBefore(e,p.elm,O.nextSibling(v.elm)),p=t[++u],_=n[--m]):yt(v,y)?(b(v,y,r),$&&O.insertBefore(e,v.elm,p.elm),v=t[--d],y=n[++f]):(mt(a)&&(a=_t(t,u,d)),s=gt(y.key)?a[y.key]:null,mt(s)?(o(y,r,e,p.elm),y=n[++f]):(c=t[s],yt(c,y)?(b(c,y,r),t[s]=void 0,$&&O.insertBefore(e,y.elm,p.elm),y=n[++f]):(o(y,r,e,p.elm),y=n[++f])));u>d?(l=mt(n[m+1])?null:n[m+1].elm,h(e,l,n,f,m,r)):f>m&&g(e,t,u,d);}function b(e,t,n,r){if(e!==t){if(t.isStatic&&e.isStatic&&t.key===e.key&&(t.isCloned||t.isOnce))return t.elm=e.elm,void(t.child=e.child);var i,a=t.data,o=gt(a);o&&gt(i=a.hook)&&gt(i=i.prepatch)&&i(e,t);var s=t.elm=e.elm,c=e.children,l=t.children;if(o&&f(t)){for(i=0;i<k.update.length;++i)k.update[i](e,t);gt(i=a.hook)&&gt(i=i.update)&&i(e,t);}mt(t.text)?gt(c)&&gt(l)?c!==l&&_(s,c,l,n,r):gt(l)?(gt(e.text)&&O.setTextContent(s,""),h(s,null,l,0,l.length-1,n)):gt(c)?g(s,c,0,c.length-1):gt(e.text)&&O.setTextContent(s,""):e.text!==t.text&&O.setTextContent(s,t.text),o&&gt(i=a.hook)&&gt(i=i.postpatch)&&i(e,t);}}function $(e,t,n){if(n&&e.parent)e.parent.data.pendingInsert=t;else for(var r=0;r<t.length;++r)t[r].data.hook.insert(t[r]);}function w(e,t,n){t.elm=e;var r=t.tag,i=t.data,a=t.children;if(gt(i)&&(gt(x=i.hook)&&gt(x=x.init)&&x(t,!0),gt(x=t.child)))return p(t,n),!0;if(gt(r)){if(gt(a))if(e.hasChildNodes()){for(var o=!0,s=e.firstChild,c=0;c<a.length;c++){if(!s||!w(s,a[c],n)){o=!1;break}s=s.nextSibling;}if(!o||s)return!1}else u(t,a,n);if(gt(i))for(var l in i)if(!S(l)){d(t,n);break}}return!0}var x,C,k={},A=e.modules,O=e.nodeOps;for(x=0;x<$a.length;++x)for(k[$a[x]]=[],C=0;C<A.length;++C)void 0!==A[C][$a[x]]&&k[$a[x]].push(A[C][$a[x]]);var S=n("attrs,style,class,staticClass,staticStyle,key");return function(e,n,r,i,a,s){if(!n)return void(e&&m(e));var c,l,u=!1,d=[];if(e){var p=gt(e.nodeType);if(!p&&yt(e,n))b(e,n,d,i);else{if(p){if(1===e.nodeType&&e.hasAttribute("server-rendered")&&(e.removeAttribute("server-rendered"),r=!0),r&&w(e,n,d))return $(n,d,!0),e;e=t(e);}if(c=e.elm,l=O.parentNode(c),o(n,d,l,O.nextSibling(c)),n.parent){for(var v=n.parent;v;)v.elm=n.elm,v=v.parent;if(f(n))for(var h=0;h<k.create.length;++h)k.create[h](ba,n.parent);}null!==l?g(l,[e],0,0):gt(e.tag)&&m(e);}}else u=!0,o(n,d,a,s);return $(n,d,u),n.elm}}function $t(e,t){(e.data.directives||t.data.directives)&&wt(e,t);}function wt(e,t){var n,r,i,a=e===ba,o=xt(e.data.directives,e.context),s=xt(t.data.directives,t.context),c=[],l=[];for(n in s)r=o[n],i=s[n],r?(i.oldValue=r.value,kt(i,"update",t,e),i.def&&i.def.componentUpdated&&l.push(i)):(kt(i,"bind",t,e),i.def&&i.def.inserted&&c.push(i));if(c.length){var u=function(){for(var n=0;n<c.length;n++)kt(c[n],"inserted",t,e);};a?ae(t.data.hook||(t.data.hook={}),"insert",u,"dir-insert"):u();}if(l.length&&ae(t.data.hook||(t.data.hook={}),"postpatch",function(){for(var n=0;n<l.length;n++)kt(l[n],"componentUpdated",t,e);},"dir-postpatch"),!a)for(n in o)s[n]||kt(o[n],"unbind",e);}function xt(e,t){var n=Object.create(null);if(!e)return n;var r,i;for(r=0;r<e.length;r++)i=e[r],i.modifiers||(i.modifiers=xa),n[Ct(i)]=i,i.def=P(t.$options,"directives",i.name,!0);return n}function Ct(e){return e.rawName||e.name+"."+Object.keys(e.modifiers||{}).join(".")}function kt(e,t,n,r){var i=e.def&&e.def[t];i&&i(n.elm,e,n,r);}function At(e,t){if(e.data.attrs||t.data.attrs){var n,r,i,a=t.elm,o=e.data.attrs||{},s=t.data.attrs||{};s.__ob__&&(s=t.data.attrs=l({},s));for(n in s)r=s[n],i=o[n],i!==r&&Ot(a,n,r);hi&&s.value!==o.value&&Ot(a,"value",s.value);for(n in o)null==s[n]&&(la(n)?a.removeAttributeNS(ca,ua(n)):oa(n)||a.removeAttribute(n));}}function Ot(e,t,n){sa(t)?fa(n)?e.removeAttribute(t):e.setAttribute(t,t):oa(t)?e.setAttribute(t,fa(n)||"false"===n?"false":"true"):la(t)?fa(n)?e.removeAttributeNS(ca,ua(t)):e.setAttributeNS(ca,t,n):fa(n)?e.removeAttribute(t):e.setAttribute(t,n);}function St(e,t){var n=t.elm,r=t.data,i=e.data;if(r.staticClass||r.class||i&&(i.staticClass||i.class)){var a=Ze(t),o=n._transitionClasses;o&&(a=Qe(a,Xe(o))),a!==n._prevClass&&(n.setAttribute("class",a),n._prevClass=a);}}function Tt(e,t,n,r){if(n){var i=t;t=function(n){Et(e,t,r),1===arguments.length?i(n):i.apply(null,arguments);};}na.addEventListener(e,t,r);}function Et(e,t,n){na.removeEventListener(e,t,n);}function jt(e,t){if(e.data.on||t.data.on){var n=t.data.on||{},r=e.data.on||{};na=t.elm,oe(n,r,Tt,Et,t.context);}}function Nt(e,t){if(e.data.domProps||t.data.domProps){var n,r,i=t.elm,a=e.data.domProps||{},o=t.data.domProps||{};o.__ob__&&(o=t.data.domProps=l({},o));for(n in a)null==o[n]&&(i[n]="");for(n in o)if(r=o[n],"textContent"!==n&&"innerHTML"!==n||(t.children&&(t.children.length=0),r!==a[n]))if("value"===n){i._value=r;var s=null==r?"":String(r);!i.composing&&(document.activeElement!==i&&i.value!==s||Lt(t,s))&&(i.value=s);}else i[n]=r;}}function Lt(e,n){var r=e.elm.value,i=e.elm._vModifiers;return i&&i.number||"number"===e.elm.type?t(r)!==t(n):i&&i.trim?r.trim()!==n.trim():r!==n}function Dt(e){var t=Mt(e.style);return e.staticStyle?l(e.staticStyle,t):t}function Mt(e){return Array.isArray(e)?d(e):"string"==typeof e?Ta(e):e}function Pt(e,t){var n,r={};if(t)for(var i=e;i.child;)i=i.child._vnode,i.data&&(n=Dt(i.data))&&l(r,n);(n=Dt(e.data))&&l(r,n);for(var a=e;a=a.parent;)a.data&&(n=Dt(a.data))&&l(r,n);return r}function Rt(e,t){var n=t.data,r=e.data;if(n.staticStyle||n.style||r.staticStyle||r.style){var i,a,o=t.elm,s=e.data.staticStyle,c=e.data.style||{},u=s||c,f=Mt(t.data.style)||{};t.data.style=f.__ob__?l({},f):f;var d=Pt(t,!0);for(a in u)null==d[a]&&Na(o,a,"");for(a in d)i=d[a],i!==u[a]&&Na(o,a,null==i?"":i);}}function It(e,t){if(t&&t.trim())if(e.classList)t.indexOf(" ")>-1?t.split(/\s+/).forEach(function(t){return e.classList.add(t)}):e.classList.add(t);else{var n=" "+e.getAttribute("class")+" ";n.indexOf(" "+t+" ")<0&&e.setAttribute("class",(n+t).trim());}}function Ft(e,t){if(t&&t.trim())if(e.classList)t.indexOf(" ")>-1?t.split(/\s+/).forEach(function(t){return e.classList.remove(t)}):e.classList.remove(t);else{for(var n=" "+e.getAttribute("class")+" ",r=" "+t+" ";n.indexOf(r)>=0;)n=n.replace(r," ");e.setAttribute("class",n.trim());}}function Ht(e){za(function(){za(e);});}function Ut(e,t){(e._transitionClasses||(e._transitionClasses=[])).push(t),It(e,t);}function Bt(e,t){e._transitionClasses&&r(e._transitionClasses,t),Ft(e,t);}function zt(e,t,n){var r=Vt(e,t),i=r.type,a=r.timeout,o=r.propCount;if(!i)return n();var s=i===Ra?Ha:Ba,c=0,l=function(){e.removeEventListener(s,u),n();},u=function(t){t.target===e&&++c>=o&&l();};setTimeout(function(){c<o&&l();},a+1),e.addEventListener(s,u);}function Vt(e,t){var n,r=window.getComputedStyle(e),i=r[Fa+"Delay"].split(", "),a=r[Fa+"Duration"].split(", "),o=Jt(i,a),s=r[Ua+"Delay"].split(", "),c=r[Ua+"Duration"].split(", "),l=Jt(s,c),u=0,f=0;t===Ra?o>0&&(n=Ra,u=o,f=a.length):t===Ia?l>0&&(n=Ia,u=l,f=c.length):(u=Math.max(o,l),n=u>0?o>l?Ra:Ia:null,f=n?n===Ra?a.length:c.length:0);var d=n===Ra&&Va.test(r[Fa+"Property"]);return{type:n,timeout:u,propCount:f,hasTransform:d}}function Jt(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max.apply(null,t.map(function(t,n){return Kt(t)+Kt(e[n])}))}function Kt(e){return 1e3*Number(e.slice(0,-1))}function qt(e,t){var n=e.elm;n._leaveCb&&(n._leaveCb.cancelled=!0,n._leaveCb());var r=Zt(e.data.transition);if(r&&!n._enterCb&&1===n.nodeType){for(var i=r.css,a=r.type,o=r.enterClass,s=r.enterActiveClass,c=r.appearClass,l=r.appearActiveClass,u=r.beforeEnter,f=r.enter,d=r.afterEnter,p=r.enterCancelled,v=r.beforeAppear,h=r.appear,m=r.afterAppear,g=r.appearCancelled,y=qi,_=qi.$vnode;_&&_.parent;)_=_.parent,y=_.context;var b=!y._isMounted||!e.isRootInsert;if(!b||h||""===h){var $=b?c:o,w=b?l:s,x=b?v||u:u,C=b&&"function"==typeof h?h:f,k=b?m||d:d,A=b?g||p:p,O=i!==!1&&!hi,S=C&&(C._length||C.length)>1,T=n._enterCb=Gt(function(){
O&&Bt(n,w),T.cancelled?(O&&Bt(n,$),A&&A(n)):k&&k(n),n._enterCb=null;});e.data.show||ae(e.data.hook||(e.data.hook={}),"insert",function(){var t=n.parentNode,r=t&&t._pending&&t._pending[e.key];r&&r.context===e.context&&r.tag===e.tag&&r.elm._leaveCb&&r.elm._leaveCb(),C&&C(n,T);},"transition-insert"),x&&x(n),O&&(Ut(n,$),Ut(n,w),Ht(function(){Bt(n,$),T.cancelled||S||zt(n,a,T);})),e.data.show&&(t&&t(),C&&C(n,T)),O||S||T();}}}function Wt(e,t){function n(){m.cancelled||(e.data.show||((r.parentNode._pending||(r.parentNode._pending={}))[e.key]=e),l&&l(r),v&&(Ut(r,s),Ut(r,c),Ht(function(){Bt(r,s),m.cancelled||h||zt(r,o,m);})),u&&u(r,m),v||h||m());}var r=e.elm;r._enterCb&&(r._enterCb.cancelled=!0,r._enterCb());var i=Zt(e.data.transition);if(!i)return t();if(!r._leaveCb&&1===r.nodeType){var a=i.css,o=i.type,s=i.leaveClass,c=i.leaveActiveClass,l=i.beforeLeave,u=i.leave,f=i.afterLeave,d=i.leaveCancelled,p=i.delayLeave,v=a!==!1&&!hi,h=u&&(u._length||u.length)>1,m=r._leaveCb=Gt(function(){r.parentNode&&r.parentNode._pending&&(r.parentNode._pending[e.key]=null),v&&Bt(r,c),m.cancelled?(v&&Bt(r,s),d&&d(r)):(t(),f&&f(r)),r._leaveCb=null;});p?p(n):n();}}function Zt(e){if(e){if("object"==typeof e){var t={};return e.css!==!1&&l(t,Ja(e.name||"v")),l(t,e),t}return"string"==typeof e?Ja(e):void 0}}function Gt(e){var t=!1;return function(){t||(t=!0,e());}}function Yt(e,t){t.data.show||qt(t);}function Qt(e,t,n){var r=t.value,i=e.multiple;if(!i||Array.isArray(r)){for(var a,o,s=0,c=e.options.length;s<c;s++)if(o=e.options[s],i)a=m(r,en(o))>-1,o.selected!==a&&(o.selected=a);else if(h(en(o),r))return void(e.selectedIndex!==s&&(e.selectedIndex=s));i||(e.selectedIndex=-1);}}function Xt(e,t){for(var n=0,r=t.length;n<r;n++)if(h(en(t[n]),e))return!1;return!0}function en(e){return"_value"in e?e._value:e.value}function tn(e){e.target.composing=!0;}function nn(e){e.target.composing=!1,rn(e.target,"input");}function rn(e,t){var n=document.createEvent("HTMLEvents");n.initEvent(t,!0,!0),e.dispatchEvent(n);}function an(e){return!e.child||e.data&&e.data.transition?e:an(e.child._vnode)}function on(e){var t=e&&e.componentOptions;return t&&t.Ctor.options.abstract?on(de(t.children)):e}function sn(e){var t={},n=e.$options;for(var r in n.propsData)t[r]=e[r];var i=n._parentListeners;for(var a in i)t[ti(a)]=i[a].fn;return t}function cn(e,t){return/\d-keep-alive$/.test(t.tag)?e("keep-alive"):null}function ln(e){for(;e=e.parent;)if(e.data.transition)return!0}function un(e){e.elm._moveCb&&e.elm._moveCb(),e.elm._enterCb&&e.elm._enterCb();}function fn(e){e.data.newPos=e.elm.getBoundingClientRect();}function dn(e){var t=e.data.pos,n=e.data.newPos,r=t.left-n.left,i=t.top-n.top;if(r||i){e.data.moved=!0;var a=e.elm.style;a.transform=a.WebkitTransform="translate("+r+"px,"+i+"px)",a.transitionDuration="0s";}}function pn(e,t){var n=document.createElement("div");return n.innerHTML='<div a="'+e+'">',n.innerHTML.indexOf(t)>0}function vn(e){return io=io||document.createElement("div"),io.innerHTML=e,io.textContent}function hn(e,t){return t&&(e=e.replace(es,"\n")),e.replace(Qo,"<").replace(Xo,">").replace(ts,"&").replace(ns,'"')}function mn(e,t){function n(t){f+=t,e=e.substring(t);}function r(){var t=e.match(mo);if(t){var r={tagName:t[1],attrs:[],start:f};n(t[0].length);for(var i,a;!(i=e.match(go))&&(a=e.match(po));)n(a[0].length),r.attrs.push(a);if(i)return r.unarySlash=i[1],n(i[0].length),r.end=f,r}}function i(e){var n=e.tagName,r=e.unarySlash;l&&("p"===s&&co(n)&&a("",s),so(n)&&s===n&&a("",n));for(var i=u(n)||"html"===n&&"head"===s||!!r,o=e.attrs.length,f=new Array(o),d=0;d<o;d++){var p=e.attrs[d];wo&&p[0].indexOf('""')===-1&&(""===p[3]&&delete p[3],""===p[4]&&delete p[4],""===p[5]&&delete p[5]);var v=p[3]||p[4]||p[5]||"";f[d]={name:p[1],value:hn(v,t.shouldDecodeNewlines)};}i||(c.push({tag:n,attrs:f}),s=n,r=""),t.start&&t.start(n,f,i,e.start,e.end);}function a(e,n,r,i){var a;if(null==r&&(r=f),null==i&&(i=f),n){var o=n.toLowerCase();for(a=c.length-1;a>=0&&c[a].tag.toLowerCase()!==o;a--);}else a=0;if(a>=0){for(var l=c.length-1;l>=a;l--)t.end&&t.end(c[l].tag,r,i);c.length=a,s=a&&c[a-1].tag;}else"br"===n.toLowerCase()?t.start&&t.start(n,[],!0,r,i):"p"===n.toLowerCase()&&(t.start&&t.start(n,[],!1,r,i),t.end&&t.end(n,r,i));}for(var o,s,c=[],l=t.expectHTML,u=t.isUnaryTag||si,f=0;e;){if(o=e,s&&Go(s,t.sfc,c)){var d=s.toLowerCase(),p=Yo[d]||(Yo[d]=new RegExp("([\\s\\S]*?)(</"+d+"[^>]*>)","i")),v=0,h=e.replace(p,function(e,n,r){return v=r.length,"script"!==d&&"style"!==d&&"noscript"!==d&&(n=n.replace(/<!--([\s\S]*?)-->/g,"$1").replace(/<!\[CDATA\[([\s\S]*?)]]>/g,"$1")),t.chars&&t.chars(n),""});f+=e.length-h.length,e=h,a("</"+d+">",d,f-v,f);}else{var m=e.indexOf("<");if(0===m){if(bo.test(e)){var g=e.indexOf("-->");if(g>=0){n(g+3);continue}}if($o.test(e)){var y=e.indexOf("]>");if(y>=0){n(y+2);continue}}var _=e.match(_o);if(_){n(_[0].length);continue}var b=e.match(yo);if(b){var $=f;n(b[0].length),a(b[0],b[1],$,f);continue}var w=r();if(w){i(w);continue}}var x=void 0,C=void 0,k=void 0;if(m>0){for(C=e.slice(m);!(yo.test(C)||mo.test(C)||bo.test(C)||$o.test(C)||(k=C.indexOf("<",1),k<0));)m+=k,C=e.slice(m);x=e.substring(0,m),n(m);}m<0&&(x=e,e=""),t.chars&&x&&t.chars(x);}if(e===o&&t.chars){t.chars(e);break}}a();}function gn(e){function t(){(o||(o=[])).push(e.slice(v,i).trim()),v=i+1;}var n,r,i,a,o,s=!1,c=!1,l=!1,u=!1,f=0,d=0,p=0,v=0;for(i=0;i<e.length;i++)if(r=n,n=e.charCodeAt(i),s)39===n&&92!==r&&(s=!1);else if(c)34===n&&92!==r&&(c=!1);else if(l)96===n&&92!==r&&(l=!1);else if(u)47===n&&92!==r&&(u=!1);else if(124!==n||124===e.charCodeAt(i+1)||124===e.charCodeAt(i-1)||f||d||p){switch(n){case 34:c=!0;break;case 39:s=!0;break;case 96:l=!0;break;case 40:p++;break;case 41:p--;break;case 91:d++;break;case 93:d--;break;case 123:f++;break;case 125:f--;}if(47===n){for(var h=i-1,m=void 0;h>=0&&(m=e.charAt(h)," "===m);h--);m&&/[\w$]/.test(m)||(u=!0);}}else void 0===a?(v=i+1,a=e.slice(0,i).trim()):t();if(void 0===a?a=e.slice(0,i).trim():0!==v&&t(),o)for(i=0;i<o.length;i++)a=yn(a,o[i]);return a}function yn(e,t){var n=t.indexOf("(");if(n<0)return'_f("'+t+'")('+e+")";var r=t.slice(0,n),i=t.slice(n+1);return'_f("'+r+'")('+e+","+i}function _n(e,t){var n=t?as(t):rs;if(n.test(e)){for(var r,i,a=[],o=n.lastIndex=0;r=n.exec(e);){i=r.index,i>o&&a.push(JSON.stringify(e.slice(o,i)));var s=gn(r[1].trim());a.push("_s("+s+")"),o=i+r[0].length;}return o<e.length&&a.push(JSON.stringify(e.slice(o))),a.join("+")}}function bn(e){console.error("[Vue parser]: "+e);}function $n(e,t){return e?e.map(function(e){return e[t]}).filter(function(e){return e}):[]}function wn(e,t,n){(e.props||(e.props=[])).push({name:t,value:n});}function xn(e,t,n){(e.attrs||(e.attrs=[])).push({name:t,value:n});}function Cn(e,t,n,r,i,a){(e.directives||(e.directives=[])).push({name:t,rawName:n,value:r,arg:i,modifiers:a});}function kn(e,t,n,r,i){r&&r.capture&&(delete r.capture,t="!"+t),r&&r.once&&(delete r.once,t="~"+t);var a;r&&r.native?(delete r.native,a=e.nativeEvents||(e.nativeEvents={})):a=e.events||(e.events={});var o={value:n,modifiers:r},s=a[t];Array.isArray(s)?i?s.unshift(o):s.push(o):s?a[t]=i?[o,s]:[s,o]:a[t]=o;}function An(e,t,n){var r=On(e,":"+t)||On(e,"v-bind:"+t);if(null!=r)return gn(r);if(n!==!1){var i=On(e,t);if(null!=i)return JSON.stringify(i)}}function On(e,t){var n;if(null!=(n=e.attrsMap[t]))for(var r=e.attrsList,i=0,a=r.length;i<a;i++)if(r[i].name===t){r.splice(i,1);break}return n}function Sn(e){if(Co=e,xo=Co.length,Ao=Oo=So=0,e.indexOf("[")<0||e.lastIndexOf("]")<xo-1)return{exp:e,idx:null};for(;!En();)ko=Tn(),jn(ko)?Ln(ko):91===ko&&Nn(ko);return{exp:e.substring(0,Oo),idx:e.substring(Oo+1,So)}}function Tn(){return Co.charCodeAt(++Ao)}function En(){return Ao>=xo}function jn(e){return 34===e||39===e}function Nn(e){var t=1;for(Oo=Ao;!En();)if(e=Tn(),jn(e))Ln(e);else if(91===e&&t++,93===e&&t--,0===t){So=Ao;break}}function Ln(e){for(var t=e;!En()&&(e=Tn(),e!==t););}function Dn(e,t){To=t.warn||bn,Eo=t.getTagNamespace||si,jo=t.mustUseProp||si,No=t.isPreTag||si,Lo=$n(t.modules,"preTransformNode"),Do=$n(t.modules,"transformNode"),Mo=$n(t.modules,"postTransformNode"),Po=t.delimiters;var n,r,i=[],a=t.preserveWhitespace!==!1,o=!1,s=!1;return mn(e,{expectHTML:t.expectHTML,isUnaryTag:t.isUnaryTag,shouldDecodeNewlines:t.shouldDecodeNewlines,start:function(e,a,c){function l(e){}var u=r&&r.ns||Eo(e);vi&&"svg"===u&&(a=Qn(a));var f={type:1,tag:e,attrsList:a,attrsMap:Zn(a),parent:r,children:[]};u&&(f.ns=u),Yn(f)&&!_i()&&(f.forbidden=!0);for(var d=0;d<Lo.length;d++)Lo[d](f,t);if(o||(Mn(f),f.pre&&(o=!0)),No(f.tag)&&(s=!0),o)Pn(f);else{Fn(f),Hn(f),zn(f),Rn(f),f.plain=!f.key&&!a.length,In(f),Vn(f),Jn(f);for(var p=0;p<Do.length;p++)Do[p](f,t);Kn(f);}if(n?i.length||n.if&&(f.elseif||f.else)&&(l(f),Bn(n,{exp:f.elseif,block:f})):(n=f,l(n)),r&&!f.forbidden)if(f.elseif||f.else)Un(f,r);else if(f.slotScope){r.plain=!1;var v=f.slotTarget||"default";(r.scopedSlots||(r.scopedSlots={}))[v]=f;}else r.children.push(f),f.parent=r;c||(r=f,i.push(f));for(var h=0;h<Mo.length;h++)Mo[h](f,t);},end:function(){var e=i[i.length-1],t=e.children[e.children.length-1];t&&3===t.type&&" "===t.text&&e.children.pop(),i.length-=1,r=i[i.length-1],e.pre&&(o=!1),No(e.tag)&&(s=!1);},chars:function(e){if(r&&(!vi||"textarea"!==r.tag||r.attrsMap.placeholder!==e)&&(e=s||e.trim()?ps(e):a&&r.children.length?" ":"")){var t;!o&&" "!==e&&(t=_n(e,Po))?r.children.push({type:2,expression:t,text:e}):r.children.push({type:3,text:e});}}}),n}function Mn(e){null!=On(e,"v-pre")&&(e.pre=!0);}function Pn(e){var t=e.attrsList.length;if(t)for(var n=e.attrs=new Array(t),r=0;r<t;r++)n[r]={name:e.attrsList[r].name,value:JSON.stringify(e.attrsList[r].value)};else e.pre||(e.plain=!0);}function Rn(e){var t=An(e,"key");t&&(e.key=t);}function In(e){var t=An(e,"ref");t&&(e.ref=t,e.refInFor=qn(e));}function Fn(e){var t;if(t=On(e,"v-for")){var n=t.match(ss);if(!n)return;e.for=n[2].trim();var r=n[1].trim(),i=r.match(cs);i?(e.alias=i[1].trim(),e.iterator1=i[2].trim(),i[3]&&(e.iterator2=i[3].trim())):e.alias=r;}}function Hn(e){var t=On(e,"v-if");if(t)e.if=t,Bn(e,{exp:t,block:e});else{null!=On(e,"v-else")&&(e.else=!0);var n=On(e,"v-else-if");n&&(e.elseif=n);}}function Un(e,t){var n=Gn(t.children);n&&n.if&&Bn(n,{exp:e.elseif,block:e});}function Bn(e,t){e.ifConditions||(e.ifConditions=[]),e.ifConditions.push(t);}function zn(e){var t=On(e,"v-once");null!=t&&(e.once=!0);}function Vn(e){if("slot"===e.tag)e.slotName=An(e,"name");else{var t=An(e,"slot");t&&(e.slotTarget='""'===t?'"default"':t),"template"===e.tag&&(e.slotScope=On(e,"scope"));}}function Jn(e){var t;(t=An(e,"is"))&&(e.component=t),null!=On(e,"inline-template")&&(e.inlineTemplate=!0);}function Kn(e){var t,n,r,i,a,o,s,c,l=e.attrsList;for(t=0,n=l.length;t<n;t++)if(r=i=l[t].name,a=l[t].value,os.test(r))if(e.hasBindings=!0,s=Wn(r),s&&(r=r.replace(ds,"")),ls.test(r))r=r.replace(ls,""),a=gn(a),c=!1,s&&(s.prop&&(c=!0,r=ti(r),"innerHtml"===r&&(r="innerHTML")),s.camel&&(r=ti(r))),c||jo(e.tag,r)?wn(e,r,a):xn(e,r,a);else if(us.test(r))r=r.replace(us,""),kn(e,r,a,s);else{r=r.replace(os,"");var u=r.match(fs);u&&(o=u[1])&&(r=r.slice(0,-(o.length+1))),Cn(e,r,i,a,o,s);}else xn(e,r,JSON.stringify(a));}function qn(e){for(var t=e;t;){if(void 0!==t.for)return!0;t=t.parent;}return!1}function Wn(e){var t=e.match(ds);if(t){var n={};return t.forEach(function(e){n[e.slice(1)]=!0;}),n}}function Zn(e){for(var t={},n=0,r=e.length;n<r;n++)t[e[n].name]=e[n].value;return t}function Gn(e){for(var t=e.length;t--;)if(e[t].tag)return e[t]}function Yn(e){return"style"===e.tag||"script"===e.tag&&(!e.attrsMap.type||"text/javascript"===e.attrsMap.type)}function Qn(e){for(var t=[],n=0;n<e.length;n++){var r=e[n];vs.test(r.name)||(r.name=r.name.replace(hs,""),t.push(r));}return t}function Xn(e,t){e&&(Ro=ms(t.staticKeys||""),Io=t.isReservedTag||si,tr(e),nr(e,!1));}function er(e){return n("type,tag,attrsList,attrsMap,plain,parent,children,attrs"+(e?","+e:""))}function tr(e){if(e.static=ir(e),1===e.type){if(!Io(e.tag)&&"slot"!==e.tag&&null==e.attrsMap["inline-template"])return;for(var t=0,n=e.children.length;t<n;t++){var r=e.children[t];tr(r),r.static||(e.static=!1);}}}function nr(e,t){if(1===e.type){if((e.static||e.once)&&(e.staticInFor=t),e.static&&e.children.length&&(1!==e.children.length||3!==e.children[0].type))return void(e.staticRoot=!0);if(e.staticRoot=!1,e.children)for(var n=0,r=e.children.length;n<r;n++)nr(e.children[n],t||!!e.for);e.ifConditions&&rr(e.ifConditions,t);}}function rr(e,t){for(var n=1,r=e.length;n<r;n++)nr(e[n].block,t);}function ir(e){return 2!==e.type&&(3===e.type||!(!e.pre&&(e.hasBindings||e.if||e.for||Qr(e.tag)||!Io(e.tag)||ar(e)||!Object.keys(e).every(Ro))))}function ar(e){for(;e.parent;){if(e=e.parent,"template"!==e.tag)return!1;if(e.for)return!0}return!1}function or(e,t){var n=t?"nativeOn:{":"on:{";for(var r in e)n+='"'+r+'":'+sr(r,e[r])+",";return n.slice(0,-1)+"}"}function sr(e,t){if(t){if(Array.isArray(t))return"["+t.map(function(t){return sr(e,t)}).join(",")+"]";if(t.modifiers){var n="",r=[];for(var i in t.modifiers)bs[i]?n+=bs[i]:r.push(i);r.length&&(n=cr(r)+n);var a=ys.test(t.value)?t.value+"($event)":t.value;return"function($event){"+n+a+"}"}return gs.test(t.value)||ys.test(t.value)?t.value:"function($event){"+t.value+"}"}return"function(){}"}function cr(e){return"if("+e.map(lr).join("&&")+")return;"}function lr(e){var t=parseInt(e,10);if(t)return"$event.keyCode!=="+t;var n=_s[e];return"_k($event.keyCode,"+JSON.stringify(e)+(n?","+JSON.stringify(n):"")+")"}function ur(e,t){e.wrapData=function(n){return"_b("+n+",'"+e.tag+"',"+t.value+(t.modifiers&&t.modifiers.prop?",true":"")+")"};}function fr(e,t){var n=Vo,r=Vo=[],i=Jo;Jo=0,Ko=t,Fo=t.warn||bn,Ho=$n(t.modules,"transformCode"),Uo=$n(t.modules,"genData"),Bo=t.directives||{},zo=t.isReservedTag||si;var a=e?dr(e):'_c("div")';return Vo=n,Jo=i,{render:"with(this){return "+a+"}",staticRenderFns:r}}function dr(e){if(e.staticRoot&&!e.staticProcessed)return pr(e);if(e.once&&!e.onceProcessed)return vr(e);if(e.for&&!e.forProcessed)return gr(e);if(e.if&&!e.ifProcessed)return hr(e);if("template"!==e.tag||e.slotTarget){if("slot"===e.tag)return Tr(e);var t;if(e.component)t=Er(e.component,e);else{var n=e.plain?void 0:yr(e),r=e.inlineTemplate?null:xr(e,!0);t="_c('"+e.tag+"'"+(n?","+n:"")+(r?","+r:"")+")";}for(var i=0;i<Ho.length;i++)t=Ho[i](e,t);return t}return xr(e)||"void 0"}function pr(e){return e.staticProcessed=!0,Vo.push("with(this){return "+dr(e)+"}"),"_m("+(Vo.length-1)+(e.staticInFor?",true":"")+")"}function vr(e){if(e.onceProcessed=!0,e.if&&!e.ifProcessed)return hr(e);if(e.staticInFor){for(var t="",n=e.parent;n;){if(n.for){t=n.key;break}n=n.parent;}return t?"_o("+dr(e)+","+Jo++ +(t?","+t:"")+")":dr(e)}return pr(e)}function hr(e){return e.ifProcessed=!0,mr(e.ifConditions.slice())}function mr(e){function t(e){return e.once?vr(e):dr(e)}if(!e.length)return"_e()";var n=e.shift();return n.exp?"("+n.exp+")?"+t(n.block)+":"+mr(e):""+t(n.block)}function gr(e){var t=e.for,n=e.alias,r=e.iterator1?","+e.iterator1:"",i=e.iterator2?","+e.iterator2:"";return e.forProcessed=!0,"_l(("+t+"),function("+n+r+i+"){return "+dr(e)+"})"}function yr(e){var t="{",n=_r(e);n&&(t+=n+","),e.key&&(t+="key:"+e.key+","),e.ref&&(t+="ref:"+e.ref+","),e.refInFor&&(t+="refInFor:true,"),e.pre&&(t+="pre:true,"),e.component&&(t+='tag:"'+e.tag+'",');for(var r=0;r<Uo.length;r++)t+=Uo[r](e);if(e.attrs&&(t+="attrs:{"+jr(e.attrs)+"},"),e.props&&(t+="domProps:{"+jr(e.props)+"},"),e.events&&(t+=or(e.events)+","),e.nativeEvents&&(t+=or(e.nativeEvents,!0)+","),e.slotTarget&&(t+="slot:"+e.slotTarget+","),e.scopedSlots&&(t+=$r(e.scopedSlots)+","),e.inlineTemplate){var i=br(e);i&&(t+=i+",");}return t=t.replace(/,$/,"")+"}",e.wrapData&&(t=e.wrapData(t)),t}function _r(e){var t=e.directives;if(t){var n,r,i,a,o="directives:[",s=!1;for(n=0,r=t.length;n<r;n++){i=t[n],a=!0;var c=Bo[i.name]||$s[i.name];c&&(a=!!c(e,i,Fo)),a&&(s=!0,o+='{name:"'+i.name+'",rawName:"'+i.rawName+'"'+(i.value?",value:("+i.value+"),expression:"+JSON.stringify(i.value):"")+(i.arg?',arg:"'+i.arg+'"':"")+(i.modifiers?",modifiers:"+JSON.stringify(i.modifiers):"")+"},");}return s?o.slice(0,-1)+"]":void 0}}function br(e){var t=e.children[0];if(1===t.type){var n=fr(t,Ko);return"inlineTemplate:{render:function(){"+n.render+"},staticRenderFns:["+n.staticRenderFns.map(function(e){return"function(){"+e+"}"}).join(",")+"]}"}}function $r(e){return"scopedSlots:{"+Object.keys(e).map(function(t){return wr(t,e[t])}).join(",")+"}"}function wr(e,t){return e+":function("+String(t.attrsMap.scope)+"){return "+("template"===t.tag?xr(t)||"void 0":dr(t))+"}"}function xr(e,t){var n=e.children;if(n.length){var r=n[0];if(1===n.length&&r.for&&"template"!==r.tag&&"slot"!==r.tag)return dr(r);var i=Cr(n);return"["+n.map(Or).join(",")+"]"+(t&&i?","+i:"")}}function Cr(e){for(var t=0;t<e.length;t++){var n=e[t];if(kr(n)||n.if&&n.ifConditions.some(function(e){return kr(e.block)}))return 2;if(Ar(n)||n.if&&n.ifConditions.some(function(e){return Ar(e.block)}))return 1}return 0}function kr(e){return e.for||"template"===e.tag||"slot"===e.tag}function Ar(e){return 1===e.type&&!zo(e.tag)}function Or(e){return 1===e.type?dr(e):Sr(e)}function Sr(e){return"_v("+(2===e.type?e.expression:Nr(JSON.stringify(e.text)))+")"}function Tr(e){var t=e.slotName||'"default"',n=xr(e);return"_t("+t+(n?","+n:"")+(e.attrs?(n?"":",null")+",{"+e.attrs.map(function(e){return ti(e.name)+":"+e.value}).join(",")+"}":"")+")"}function Er(e,t){var n=t.inlineTemplate?null:xr(t,!0);return"_c("+e+","+yr(t)+(n?","+n:"")+")"}function jr(e){for(var t="",n=0;n<e.length;n++){var r=e[n];t+='"'+r.name+'":'+Nr(r.value)+",";}return t.slice(0,-1)}function Nr(e){return e.replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029")}function Lr(e,t){var n=Dn(e.trim(),t);Xn(n,t);var r=fr(n,t);return{ast:n,render:r.render,staticRenderFns:r.staticRenderFns}}function Dr(e,t){var n=(t.warn||bn,On(e,"class"));n&&(e.staticClass=JSON.stringify(n));var r=An(e,"class",!1);r&&(e.classBinding=r);}function Mr(e){var t="";return e.staticClass&&(t+="staticClass:"+e.staticClass+","),e.classBinding&&(t+="class:"+e.classBinding+","),t}function Pr(e,t){var n=(t.warn||bn,On(e,"style"));n&&(e.staticStyle=JSON.stringify(Ta(n)));var r=An(e,"style",!1);r&&(e.styleBinding=r);}function Rr(e){var t="";return e.staticStyle&&(t+="staticStyle:"+e.staticStyle+","),e.styleBinding&&(t+="style:("+e.styleBinding+"),"),t}function Ir(e,t,n){qo=n;var r=t.value,i=t.modifiers,a=e.tag,o=e.attrsMap.type;return"select"===a?Br(e,r,i):"input"===a&&"checkbox"===o?Fr(e,r,i):"input"===a&&"radio"===o?Hr(e,r,i):Ur(e,r,i),!0}function Fr(e,t,n){var r=n&&n.number,i=An(e,"value")||"null",a=An(e,"true-value")||"true",o=An(e,"false-value")||"false";wn(e,"checked","Array.isArray("+t+")?_i("+t+","+i+")>-1:_q("+t+","+a+")"),kn(e,"change","var $$a="+t+",$$el=$event.target,$$c=$$el.checked?("+a+"):("+o+");if(Array.isArray($$a)){var $$v="+(r?"_n("+i+")":i)+",$$i=_i($$a,$$v);if($$c){$$i<0&&("+t+"=$$a.concat($$v))}else{$$i>-1&&("+t+"=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}}else{"+t+"=$$c}",null,!0);}function Hr(e,t,n){var r=n&&n.number,i=An(e,"value")||"null";i=r?"_n("+i+")":i,wn(e,"checked","_q("+t+","+i+")"),kn(e,"change",zr(t,i),null,!0);}function Ur(e,t,n){var r=e.attrsMap.type,i=n||{},a=i.lazy,o=i.number,s=i.trim,c=a||vi&&"range"===r?"change":"input",l=!a&&"range"!==r,u="input"===e.tag||"textarea"===e.tag,f=u?"$event.target.value"+(s?".trim()":""):s?"(typeof $event === 'string' ? $event.trim() : $event)":"$event";f=o||"number"===r?"_n("+f+")":f;var d=zr(t,f);u&&l&&(d="if($event.target.composing)return;"+d),wn(e,"value",u?"_s("+t+")":"("+t+")"),kn(e,c,d,null,!0),(s||o||"number"===r)&&kn(e,"blur","$forceUpdate()");}function Br(e,t,n){var r=n&&n.number,i='Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return '+(r?"_n(val)":"val")+"})"+(null==e.attrsMap.multiple?"[0]":""),a=zr(t,i);kn(e,"change",a,null,!0);}function zr(e,t){var n=Sn(e);return null===n.idx?e+"="+t:"var $$exp = "+n.exp+", $$idx = "+n.idx+";if (!Array.isArray($$exp)){"+e+"="+t+"}else{$$exp.splice($$idx, 1, "+t+")}"}function Vr(e,t){t.value&&wn(e,"textContent","_s("+t.value+")");}function Jr(e,t){t.value&&wn(e,"innerHTML","_s("+t.value+")");}function Kr(e,t){return t=t?l(l({},Os),t):Os,Lr(e,t)}function qr(e,t,n){var r=(t&&t.warn||xi,t&&t.delimiters?String(t.delimiters)+e:e);if(As[r])return As[r];var i={},a=Kr(e,t);i.render=Wr(a.render);var o=a.staticRenderFns.length;i.staticRenderFns=new Array(o);for(var s=0;s<o;s++)i.staticRenderFns[s]=Wr(a.staticRenderFns[s]);return As[r]=i}function Wr(e){try{return new Function(e)}catch(e){return p}}function Zr(e){if(e.outerHTML)return e.outerHTML;var t=document.createElement("div");return t.appendChild(e.cloneNode(!0)),t.innerHTML}var Gr,Yr,Qr=n("slot,component",!0),Xr=Object.prototype.hasOwnProperty,ei=/-(\w)/g,ti=o(function(e){return e.replace(ei,function(e,t){return t?t.toUpperCase():""})}),ni=o(function(e){return e.charAt(0).toUpperCase()+e.slice(1)}),ri=/([^-])([A-Z])/g,ii=o(function(e){return e.replace(ri,"$1-$2").replace(ri,"$1-$2").toLowerCase()}),ai=Object.prototype.toString,oi="[object Object]",si=function(){return!1},ci=function(e){return e},li={optionMergeStrategies:Object.create(null),silent:!1,devtools:!1,errorHandler:null,ignoredElements:null,keyCodes:Object.create(null),isReservedTag:si,isUnknownElement:si,getTagNamespace:p,parsePlatformTagName:ci,mustUseProp:si,_assetTypes:["component","directive","filter"],_lifecycleHooks:["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated"],_maxUpdateCount:100},ui=/[^\w.$]/,fi="__proto__"in{},di="undefined"!=typeof window,pi=di&&window.navigator.userAgent.toLowerCase(),vi=pi&&/msie|trident/.test(pi),hi=pi&&pi.indexOf("msie 9.0")>0,mi=pi&&pi.indexOf("edge/")>0,gi=pi&&pi.indexOf("android")>0,yi=pi&&/iphone|ipad|ipod|ios/.test(pi),_i=function(){return void 0===Gr&&(Gr=!di&&"undefined"!=typeof commonjsGlobal&&"server"===commonjsGlobal.process.env.VUE_ENV),Gr},bi=di&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__,$i=function(){function e(){r=!1;var e=n.slice(0);n.length=0;for(var t=0;t<e.length;t++)e[t]();}var t,n=[],r=!1;if("undefined"!=typeof Promise&&b(Promise)){var i=Promise.resolve(),a=function(e){console.error(e);};t=function(){i.then(e).catch(a),yi&&setTimeout(p);};}else if("undefined"==typeof MutationObserver||!b(MutationObserver)&&"[object MutationObserverConstructor]"!==MutationObserver.toString())t=function(){setTimeout(e,0);};else{var o=1,s=new MutationObserver(e),c=document.createTextNode(String(o));s.observe(c,{characterData:!0}),t=function(){o=(o+1)%2,c.data=String(o);};}return function(e,i){var a;if(n.push(function(){e&&e.call(i),a&&a(i);}),r||(r=!0,t()),!e&&"undefined"!=typeof Promise)return new Promise(function(e){a=e;})}}();Yr="undefined"!=typeof Set&&b(Set)?Set:function(){function e(){this.set=Object.create(null);}return e.prototype.has=function(e){return this.set[e]===!0},e.prototype.add=function(e){this.set[e]=!0;},e.prototype.clear=function(){this.set=Object.create(null);},e}();var wi,xi=p,Ci=0,ki=function(){this.id=Ci++,this.subs=[];};ki.prototype.addSub=function(e){this.subs.push(e);},ki.prototype.removeSub=function(e){r(this.subs,e);},ki.prototype.depend=function(){ki.target&&ki.target.addDep(this);},ki.prototype.notify=function(){for(var e=this.subs.slice(),t=0,n=e.length;t<n;t++)e[t].update();},ki.target=null;var Ai=[],Oi=Array.prototype,Si=Object.create(Oi);["push","pop","shift","unshift","splice","sort","reverse"].forEach(function(e){var t=Oi[e];y(Si,e,function(){for(var n=arguments,r=arguments.length,i=new Array(r);r--;)i[r]=n[r];var a,o=t.apply(this,i),s=this.__ob__;switch(e){case"push":a=i;break;case"unshift":a=i;break;case"splice":a=i.slice(2);}return a&&s.observeArray(a),s.dep.notify(),o});});var Ti=Object.getOwnPropertyNames(Si),Ei={shouldConvert:!0,isSettingProps:!1},ji=function(e){if(this.value=e,this.dep=new ki,this.vmCount=0,y(e,"__ob__",this),Array.isArray(e)){var t=fi?x:C;t(e,Si,Ti),this.observeArray(e);}else this.walk(e);};ji.prototype.walk=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)A(e,t[n],e[t[n]]);},ji.prototype.observeArray=function(e){for(var t=0,n=e.length;t<n;t++)k(e[t]);};var Ni=li.optionMergeStrategies;Ni.data=function(e,t,n){return n?e||t?function(){var r="function"==typeof t?t.call(n):t,i="function"==typeof e?e.call(n):void 0;return r?E(r,i):i}:void 0:t?"function"!=typeof t?e:e?function(){return E(t.call(this),e.call(this))}:t:e},li._lifecycleHooks.forEach(function(e){Ni[e]=j;}),li._assetTypes.forEach(function(e){Ni[e+"s"]=N;}),Ni.watch=function(e,t){if(!t)return e;if(!e)return t;var n={};l(n,e);for(var r in t){var i=n[r],a=t[r];i&&!Array.isArray(i)&&(i=[i]),n[r]=i?i.concat(a):[a];}return n},Ni.props=Ni.methods=Ni.computed=function(e,t){if(!t)return e;if(!e)return t;var n=Object.create(null);return l(n,e),l(n,t),n};var Li=function(e,t){return void 0===t?e:t},Di=Object.freeze({defineReactive:A,_toString:e,toNumber:t,makeMap:n,isBuiltInTag:Qr,remove:r,hasOwn:i,isPrimitive:a,cached:o,camelize:ti,capitalize:ni,hyphenate:ii,bind:s,toArray:c,extend:l,isObject:u,isPlainObject:f,toObject:d,noop:p,no:si,identity:ci,genStaticKeys:v,looseEqual:h,looseIndexOf:m,isReserved:g,def:y,parsePath:_,hasProto:fi,inBrowser:di,UA:pi,isIE:vi,isIE9:hi,isEdge:mi,isAndroid:gi,isIOS:yi,isServerRendering:_i,devtools:bi,nextTick:$i,get _Set(){return Yr},mergeOptions:M,resolveAsset:P,warn:xi,formatComponentName:wi,validateProp:R}),Mi=[],Pi={},Ri=!1,Ii=!1,Fi=0,Hi=0,Ui=function(e,t,n,r){this.vm=e,e._watchers.push(this),r?(this.deep=!!r.deep,this.user=!!r.user,this.lazy=!!r.lazy,this.sync=!!r.sync):this.deep=this.user=this.lazy=this.sync=!1,this.cb=n,this.id=++Hi,this.active=!0,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new Yr,this.newDepIds=new Yr,this.expression="","function"==typeof t?this.getter=t:(this.getter=_(t),this.getter||(this.getter=function(){})),this.value=this.lazy?void 0:this.get();};Ui.prototype.get=function(){$(this);var e=this.getter.call(this.vm,this.vm);return this.deep&&V(e),w(),this.cleanupDeps(),e},Ui.prototype.addDep=function(e){var t=e.id;this.newDepIds.has(t)||(this.newDepIds.add(t),this.newDeps.push(e),this.depIds.has(t)||e.addSub(this));},Ui.prototype.cleanupDeps=function(){for(var e=this,t=this.deps.length;t--;){var n=e.deps[t];e.newDepIds.has(n.id)||n.removeSub(e);}var r=this.depIds;this.depIds=this.newDepIds,this.newDepIds=r,this.newDepIds.clear(),r=this.deps,this.deps=this.newDeps,this.newDeps=r,this.newDeps.length=0;},Ui.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():z(this);},Ui.prototype.run=function(){if(this.active){var e=this.get();if(e!==this.value||u(e)||this.deep){var t=this.value;if(this.value=e,this.user)try{this.cb.call(this.vm,e,t);}catch(e){if(!li.errorHandler)throw e;li.errorHandler.call(null,e,this.vm);}else this.cb.call(this.vm,e,t);}}},Ui.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1;},Ui.prototype.depend=function(){for(var e=this,t=this.deps.length;t--;)e.deps[t].depend();},Ui.prototype.teardown=function(){var e=this;if(this.active){this.vm._isBeingDestroyed||this.vm._vForRemoving||r(this.vm._watchers,this);for(var t=this.deps.length;t--;)e.deps[t].removeSub(e);this.active=!1;}};var Bi,zi=new Yr,Vi={enumerable:!0,configurable:!0,get:p,set:p},Ji=function(e,t,n,r,i,a,o){this.tag=e,this.data=t,this.children=n,this.text=r,this.elm=i,this.ns=void 0,this.context=a,this.functionalContext=void 0,this.key=t&&t.key,this.componentOptions=o,this.child=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1;},Ki=function(){var e=new Ji;return e.text="",e.isComment=!0,e},qi=null,Wi={init:Ce,prepatch:ke,insert:Ae,destroy:Oe},Zi=Object.keys(Wi),Gi=1,Yi=2,Qi=0;Fe(Be),ee(Be),ge(Be),_e(Be),Re(Be);var Xi=[String,RegExp],ea={name:"keep-alive",abstract:!0,props:{include:Xi,exclude:Xi},created:function(){this.cache=Object.create(null);},render:function(){var e=de(this.$slots.default);if(e&&e.componentOptions){var t=e.componentOptions,n=t.Ctor.options.name||t.tag;if(n&&(this.include&&!qe(this.include,n)||this.exclude&&qe(this.exclude,n)))return e;var r=null==e.key?t.Ctor.cid+(t.tag?"::"+t.tag:""):e.key;this.cache[r]?e.child=this.cache[r].child:this.cache[r]=e,e.data.keepAlive=!0;}return e},destroyed:function(){var e=this;for(var t in this.cache){var n=e.cache[t];be(n.child,"deactivated"),n.child.$destroy();}}},ta={KeepAlive:ea};We(Be),Object.defineProperty(Be.prototype,"$isServer",{get:_i}),Be.version="2.1.6";var na,ra,ia=n("input,textarea,option,select"),aa=function(e,t){return"value"===t&&ia(e)||"selected"===t&&"option"===e||"checked"===t&&"input"===e||"muted"===t&&"video"===e},oa=n("contenteditable,draggable,spellcheck"),sa=n("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,translate,truespeed,typemustmatch,visible"),ca="http://www.w3.org/1999/xlink",la=function(e){return":"===e.charAt(5)&&"xlink"===e.slice(0,5)},ua=function(e){return la(e)?e.slice(6,e.length):""},fa=function(e){return null==e||e===!1},da={svg:"http://www.w3.org/2000/svg",math:"http://www.w3.org/1998/Math/MathML"},pa=n("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template"),va=n("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view",!0),ha=function(e){return"pre"===e},ma=function(e){return pa(e)||va(e)},ga=Object.create(null),ya=Object.freeze({createElement:rt,createElementNS:it,createTextNode:at,createComment:ot,insertBefore:st,removeChild:ct,appendChild:lt,parentNode:ut,nextSibling:ft,tagName:dt,setTextContent:pt,setAttribute:vt}),_a={create:function(e,t){ht(t);},update:function(e,t){e.data.ref!==t.data.ref&&(ht(e,!0),ht(t));},destroy:function(e){ht(e,!0);}},ba=new Ji("",{},[]),$a=["create","activate","update","remove","destroy"],wa={create:$t,update:$t,destroy:function(e){$t(e,ba);}},xa=Object.create(null),Ca=[_a,wa],ka={create:At,update:At},Aa={create:St,update:St},Oa={create:jt,update:jt},Sa={create:Nt,update:Nt},Ta=o(function(e){var t={},n=/;(?![^(]*\))/g,r=/:(.+)/;return e.split(n).forEach(function(e){if(e){var n=e.split(r);n.length>1&&(t[n[0].trim()]=n[1].trim());}}),t}),Ea=/^--/,ja=/\s*!important$/,Na=function(e,t,n){Ea.test(t)?e.style.setProperty(t,n):ja.test(n)?e.style.setProperty(t,n.replace(ja,""),"important"):e.style[Da(t)]=n;},La=["Webkit","Moz","ms"],Da=o(function(e){if(ra=ra||document.createElement("div"),e=ti(e),"filter"!==e&&e in ra.style)return e;for(var t=e.charAt(0).toUpperCase()+e.slice(1),n=0;n<La.length;n++){var r=La[n]+t;if(r in ra.style)return r}}),Ma={create:Rt,update:Rt},Pa=di&&!hi,Ra="transition",Ia="animation",Fa="transition",Ha="transitionend",Ua="animation",Ba="animationend";Pa&&(void 0===window.ontransitionend&&void 0!==window.onwebkittransitionend&&(Fa="WebkitTransition",Ha="webkitTransitionEnd"),void 0===window.onanimationend&&void 0!==window.onwebkitanimationend&&(Ua="WebkitAnimation",Ba="webkitAnimationEnd"));var za=di&&window.requestAnimationFrame||setTimeout,Va=/\b(transform|all)(,|$)/,Ja=o(function(e){return{enterClass:e+"-enter",leaveClass:e+"-leave",appearClass:e+"-enter",enterActiveClass:e+"-enter-active",leaveActiveClass:e+"-leave-active",
appearActiveClass:e+"-enter-active"}}),Ka=di?{create:Yt,activate:Yt,remove:function(e,t){e.data.show?t():Wt(e,t);}}:{},qa=[ka,Aa,Oa,Sa,Ma,Ka],Wa=qa.concat(Ca),Za=bt({nodeOps:ya,modules:Wa});hi&&document.addEventListener("selectionchange",function(){var e=document.activeElement;e&&e.vmodel&&rn(e,"input");});var Ga={inserted:function(e,t,n){if("select"===n.tag){var r=function(){Qt(e,t,n.context);};r(),(vi||mi)&&setTimeout(r,0);}else"textarea"!==n.tag&&"text"!==e.type||(e._vModifiers=t.modifiers,t.modifiers.lazy||(gi||(e.addEventListener("compositionstart",tn),e.addEventListener("compositionend",nn)),hi&&(e.vmodel=!0)));},componentUpdated:function(e,t,n){if("select"===n.tag){Qt(e,t,n.context);var r=e.multiple?t.value.some(function(t){return Xt(t,e.options)}):t.value!==t.oldValue&&Xt(t.value,e.options);r&&rn(e,"change");}}},Ya={bind:function(e,t,n){var r=t.value;n=an(n);var i=n.data&&n.data.transition,a=e.__vOriginalDisplay="none"===e.style.display?"":e.style.display;r&&i&&!hi?(n.data.show=!0,qt(n,function(){e.style.display=a;})):e.style.display=r?a:"none";},update:function(e,t,n){var r=t.value,i=t.oldValue;if(r!==i){n=an(n);var a=n.data&&n.data.transition;a&&!hi?(n.data.show=!0,r?qt(n,function(){e.style.display=e.__vOriginalDisplay;}):Wt(n,function(){e.style.display="none";})):e.style.display=r?e.__vOriginalDisplay:"none";}}},Qa={model:Ga,show:Ya},Xa={name:String,appear:Boolean,css:Boolean,mode:String,type:String,enterClass:String,leaveClass:String,enterActiveClass:String,leaveActiveClass:String,appearClass:String,appearActiveClass:String},eo={name:"transition",props:Xa,abstract:!0,render:function(e){var t=this,n=this.$slots.default;if(n&&(n=n.filter(function(e){return e.tag}),n.length)){var r=this.mode,i=n[0];if(ln(this.$vnode))return i;var a=on(i);if(!a)return i;if(this._leaving)return cn(e,i);var o=a.key=null==a.key||a.isStatic?"__v"+(a.tag+this._uid)+"__":a.key,s=(a.data||(a.data={})).transition=sn(this),c=this._vnode,u=on(c);if(a.data.directives&&a.data.directives.some(function(e){return"show"===e.name})&&(a.data.show=!0),u&&u.data&&u.key!==o){var f=u.data.transition=l({},s);if("out-in"===r)return this._leaving=!0,ae(f,"afterLeave",function(){t._leaving=!1,t.$forceUpdate();},o),cn(e,i);if("in-out"===r){var d,p=function(){d();};ae(s,"afterEnter",p,o),ae(s,"enterCancelled",p,o),ae(f,"delayLeave",function(e){d=e;},o);}}return i}}},to=l({tag:String,moveClass:String},Xa);delete to.mode;var no={props:to,render:function(e){for(var t=this.tag||this.$vnode.data.tag||"span",n=Object.create(null),r=this.prevChildren=this.children,i=this.$slots.default||[],a=this.children=[],o=sn(this),s=0;s<i.length;s++){var c=i[s];c.tag&&null!=c.key&&0!==String(c.key).indexOf("__vlist")&&(a.push(c),n[c.key]=c,(c.data||(c.data={})).transition=o);}if(r){for(var l=[],u=[],f=0;f<r.length;f++){var d=r[f];d.data.transition=o,d.data.pos=d.elm.getBoundingClientRect(),n[d.key]?l.push(d):u.push(d);}this.kept=e(t,null,l),this.removed=u;}return e(t,null,a)},beforeUpdate:function(){this.__patch__(this._vnode,this.kept,!1,!0),this._vnode=this.kept;},updated:function(){var e=this.prevChildren,t=this.moveClass||(this.name||"v")+"-move";if(e.length&&this.hasMove(e[0].elm,t)){e.forEach(un),e.forEach(fn),e.forEach(dn);document.body.offsetHeight;e.forEach(function(e){if(e.data.moved){var n=e.elm,r=n.style;Ut(n,t),r.transform=r.WebkitTransform=r.transitionDuration="",n.addEventListener(Ha,n._moveCb=function e(r){r&&!/transform$/.test(r.propertyName)||(n.removeEventListener(Ha,e),n._moveCb=null,Bt(n,t));});}});}},methods:{hasMove:function(e,t){if(!Pa)return!1;if(null!=this._hasMove)return this._hasMove;Ut(e,t);var n=Vt(e);return Bt(e,t),this._hasMove=n.hasTransform}}},ro={Transition:eo,TransitionGroup:no};Be.config.isUnknownElement=tt,Be.config.isReservedTag=ma,Be.config.getTagNamespace=et,Be.config.mustUseProp=aa,l(Be.options.directives,Qa),l(Be.options.components,ro),Be.prototype.__patch__=di?Za:p,Be.prototype.$mount=function(e,t){return e=e&&di?nt(e):void 0,this._mount(e,t)},setTimeout(function(){li.devtools&&bi&&bi.emit("init",Be);},0);var io,ao=!!di&&pn("\n","&#10;"),oo=n("area,base,br,col,embed,frame,hr,img,input,isindex,keygen,link,meta,param,source,track,wbr",!0),so=n("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source",!0),co=n("address,article,aside,base,blockquote,body,caption,col,colgroup,dd,details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,title,tr,track",!0),lo=/([^\s"'<>\/=]+)/,uo=/(?:=)/,fo=[/"([^"]*)"+/.source,/'([^']*)'+/.source,/([^\s"'=<>`]+)/.source],po=new RegExp("^\\s*"+lo.source+"(?:\\s*("+uo.source+")\\s*(?:"+fo.join("|")+"))?"),vo="[a-zA-Z_][\\w\\-\\.]*",ho="((?:"+vo+"\\:)?"+vo+")",mo=new RegExp("^<"+ho),go=/^\s*(\/?)>/,yo=new RegExp("^<\\/"+ho+"[^>]*>"),_o=/^<!DOCTYPE [^>]+>/i,bo=/^<!--/,$o=/^<!\[/,wo=!1;"x".replace(/x(.)?/g,function(e,t){wo=""===t;});var xo,Co,ko,Ao,Oo,So,To,Eo,jo,No,Lo,Do,Mo,Po,Ro,Io,Fo,Ho,Uo,Bo,zo,Vo,Jo,Ko,qo,Wo=n("script,style",!0),Zo=function(e){return"lang"===e.name&&"html"!==e.value},Go=function(e,t,n){return!!Wo(e)||!(!t||1!==n.length)&&!("template"===e&&!n[0].attrs.some(Zo))},Yo={},Qo=/&lt;/g,Xo=/&gt;/g,es=/&#10;/g,ts=/&amp;/g,ns=/&quot;/g,rs=/\{\{((?:.|\n)+?)\}\}/g,is=/[-.*+?^${}()|[\]\/\\]/g,as=o(function(e){var t=e[0].replace(is,"\\$&"),n=e[1].replace(is,"\\$&");return new RegExp(t+"((?:.|\\n)+?)"+n,"g")}),os=/^v-|^@|^:/,ss=/(.*?)\s+(?:in|of)\s+(.*)/,cs=/\((\{[^}]*\}|[^,]*),([^,]*)(?:,([^,]*))?\)/,ls=/^:|^v-bind:/,us=/^@|^v-on:/,fs=/:(.*)$/,ds=/\.[^.]+/g,ps=o(vn),vs=/^xmlns:NS\d+/,hs=/^NS\d+:/,ms=o(er),gs=/^\s*([\w$_]+|\([^)]*?\))\s*=>|^function\s*\(/,ys=/^\s*[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['.*?']|\[".*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*\s*$/,_s={esc:27,tab:9,enter:13,space:32,up:38,left:37,right:39,down:40,delete:[8,46]},bs={stop:"$event.stopPropagation();",prevent:"$event.preventDefault();",self:"if($event.target !== $event.currentTarget)return;",ctrl:"if(!$event.ctrlKey)return;",shift:"if(!$event.shiftKey)return;",alt:"if(!$event.altKey)return;",meta:"if(!$event.metaKey)return;"},$s={bind:ur,cloak:p},ws={staticKeys:["staticClass"],transformNode:Dr,genData:Mr},xs={staticKeys:["staticStyle"],transformNode:Pr,genData:Rr},Cs=[ws,xs],ks={model:Ir,text:Vr,html:Jr},As=Object.create(null),Os={expectHTML:!0,modules:Cs,staticKeys:v(Cs),directives:ks,isReservedTag:ma,isUnaryTag:oo,mustUseProp:aa,getTagNamespace:et,isPreTag:ha},Ss=o(function(e){var t=nt(e);return t&&t.innerHTML}),Ts=Be.prototype.$mount;return Be.prototype.$mount=function(e,t){if(e=e&&nt(e),e===document.body||e===document.documentElement)return this;var n=this.$options;if(!n.render){var r=n.template;if(r)if("string"==typeof r)"#"===r.charAt(0)&&(r=Ss(r));else{if(!r.nodeType)return this;r=r.innerHTML;}else e&&(r=Zr(e));if(r){var i=qr(r,{warn:xi,shouldDecodeNewlines:ao,delimiters:n.delimiters},this),a=i.render,o=i.staticRenderFns;n.render=a,n.staticRenderFns=o;}}return Ts.call(this,e,t)},Be.compile=qr,Be});
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

const hasIRC = typeof requestIdleCallback !== 'undefined';

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
render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._c;return _c('div',{staticClass:"post__comment"},[_c('h2',{staticClass:"post__comment-author"},[_vm._v(_vm._s(_vm.comment.username)+" wrote")]),_vm._v(" "),_c('p',{staticClass:"post__comment-text"},[_vm._v("\n    "+_vm._s(_vm.comment.text)+"\n  ")]),_vm._v(" "),_c('vote-buttons',{attrs:{"score":_vm.comment.score},on:{"upvote":function($event){_vm.comment.score++;},"downvote":function($event){_vm.comment.score--;}}})],1)},
staticRenderFns: [],
  props: ['comment'],
  mixins: null,
  components: { VoteButtons }
};

var App = {
render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._c;return _c('section',{staticClass:"post"},[_c('h1',{staticClass:"post__title"},[_vm._v("A post about priorities and scheduling")]),_vm._v(" "),_c('a',{staticClass:"post__link",attrs:{"href":"#"}},[_vm._v("http://example.com/post")]),_vm._v(" "),_vm._m(0),_vm._v(" "),_c('section',{staticClass:"post__comments"},[_c('h1',[_vm._v("Comments")]),_vm._v(" "),_vm._l((_vm.commentData),function(comment){return _c('comment',{attrs:{"comment":comment}})})],2)])},
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
