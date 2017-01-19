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
 * Build: 2017-01-19T20:34:19.094Z
 */
var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};





function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var vue_min$1 = createCommonjsModule(function (module, exports) {
/*!
 * Vue.js v2.1.8
 * (c) 2014-2016 Evan You
 * Released under the MIT License.
 */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.Vue=t();}(commonjsGlobal,function(){"use strict";function e(e){return null==e?"":"object"==typeof e?JSON.stringify(e,null,2):String(e)}function t(e){var t=parseFloat(e,10);return t||0===t?t:e}function n(e,t){for(var n=Object.create(null),r=e.split(","),i=0;i<r.length;i++)n[r[i]]=!0;return t?function(e){return n[e.toLowerCase()]}:function(e){return n[e]}}function r(e,t){if(e.length){var n=e.indexOf(t);if(n>-1)return e.splice(n,1)}}function i(e,t){return ni.call(e,t)}function a(e){return"string"==typeof e||"number"==typeof e}function o(e){var t=Object.create(null);return function(n){var r=t[n];return r||(t[n]=e(n))}}function s(e,t){function n(n){var r=arguments.length;return r?r>1?e.apply(t,arguments):e.call(t,n):e.call(t)}return n._length=e.length,n}function c(e,t){t=t||0;for(var n=e.length-t,r=new Array(n);n--;)r[n]=e[n+t];return r}function l(e,t){for(var n in t)e[n]=t[n];return e}function u(e){return null!==e&&"object"==typeof e}function f(e){return ci.call(e)===li}function d(e){for(var t={},n=0;n<e.length;n++)e[n]&&l(t,e[n]);return t}function p(){}function v(e){return e.reduce(function(e,t){return e.concat(t.staticKeys||[])},[]).join(",")}function h(e,t){var n=u(e),r=u(t);return n&&r?JSON.stringify(e)===JSON.stringify(t):!n&&!r&&String(e)===String(t)}function m(e,t){for(var n=0;n<e.length;n++)if(h(e[n],t))return n;return-1}function g(e){var t=(e+"").charCodeAt(0);return 36===t||95===t}function y(e,t,n,r){Object.defineProperty(e,t,{value:n,enumerable:!!r,writable:!0,configurable:!0});}function _(e){if(!pi.test(e)){var t=e.split(".");return function(e){for(var n=0;n<t.length;n++){if(!e)return;e=e[t[n]];}return e}}}function b(e){return/native code/.test(e.toString())}function $(e){Si.target&&Ti.push(Si.target),Si.target=e;}function w(){Si.target=Ti.pop();}function C(e,t){e.__proto__=t;}function x(e,t,n){for(var r=0,i=n.length;r<i;r++){var a=n[r];y(e,a,t[a]);}}function k(e,t){if(u(e)){var n;return i(e,"__ob__")&&e.__ob__ instanceof Di?n=e.__ob__:Li.shouldConvert&&!wi()&&(Array.isArray(e)||f(e))&&Object.isExtensible(e)&&!e._isVue&&(n=new Di(e)),t&&n&&n.vmCount++,n}}function A(e,t,n,r){var i=new Si,a=Object.getOwnPropertyDescriptor(e,t);if(!a||a.configurable!==!1){var o=a&&a.get,s=a&&a.set,c=k(n);Object.defineProperty(e,t,{enumerable:!0,configurable:!0,get:function(){var t=o?o.call(e):n;return Si.target&&(i.depend(),c&&c.dep.depend(),Array.isArray(t)&&T(t)),t},set:function(t){var r=o?o.call(e):n;t===r||t!==t&&r!==r||(s?s.call(e,t):n=t,c=k(t),i.notify());}});}}function O(e,t,n){if(Array.isArray(e))return e.length=Math.max(e.length,t),e.splice(t,1,n),n;if(i(e,t))return void(e[t]=n);var r=e.__ob__;if(!(e._isVue||r&&r.vmCount))return r?(A(r.value,t,n),r.dep.notify(),n):void(e[t]=n)}function S(e,t){var n=e.__ob__;e._isVue||n&&n.vmCount||i(e,t)&&(delete e[t],n&&n.dep.notify());}function T(e){for(var t=void 0,n=0,r=e.length;n<r;n++)t=e[n],t&&t.__ob__&&t.__ob__.dep.depend(),Array.isArray(t)&&T(t);}function E(e,t){if(!t)return e;for(var n,r,a,o=Object.keys(t),s=0;s<o.length;s++)n=o[s],r=e[n],a=t[n],i(e,n)?f(r)&&f(a)&&E(r,a):O(e,n,a);return e}function j(e,t){return t?e?e.concat(t):Array.isArray(t)?t:[t]:e}function N(e,t){var n=Object.create(e||null);return t?l(n,t):n}function L(e){var t=e.props;if(t){var n,r,i,a={};if(Array.isArray(t))for(n=t.length;n--;)r=t[n],"string"==typeof r&&(i=ii(r),a[i]={type:null});else if(f(t))for(var o in t)r=t[o],i=ii(o),a[i]=f(r)?r:{type:r};e.props=a;}}function D(e){var t=e.directives;if(t)for(var n in t){var r=t[n];"function"==typeof r&&(t[n]={bind:r,update:r});}}function M(e,t,n){function r(r){var i=Mi[r]||Pi;u[r]=i(e[r],t[r],n,r);}L(t),D(t);var a=t.extends;if(a&&(e="function"==typeof a?M(e,a.options,n):M(e,a,n)),t.mixins)for(var o=0,s=t.mixins.length;o<s;o++){var c=t.mixins[o];c.prototype instanceof Be&&(c=c.options),e=M(e,c,n);}var l,u={};for(l in e)r(l);for(l in t)i(e,l)||r(l);return u}function P(e,t,n,r){if("string"==typeof n){var a=e[t];if(i(a,n))return a[n];var o=ii(n);if(i(a,o))return a[o];var s=ai(o);if(i(a,s))return a[s];var c=a[n]||a[o]||a[s];return c}}function R(e,t,n,r){var a=t[e],o=!i(n,e),s=n[e];if(H(Boolean,a.type)&&(o&&!i(a,"default")?s=!1:H(String,a.type)||""!==s&&s!==si(e)||(s=!0)),void 0===s){s=I(r,a,e);var c=Li.shouldConvert;Li.shouldConvert=!0,k(s),Li.shouldConvert=c;}return s}function I(e,t,n){if(i(t,"default")){var r=t.default;return u(r),e&&e.$options.propsData&&void 0===e.$options.propsData[n]&&void 0!==e[n]?e[n]:"function"==typeof r&&t.type!==Function?r.call(e):r}}function F(e){var t=e&&e.toString().match(/^\s*function (\w+)/);return t&&t[1]}function H(e,t){if(!Array.isArray(t))return F(t)===F(e);for(var n=0,r=t.length;n<r;n++)if(F(t[n])===F(e))return!0;return!1}function U(){Ii.length=0,Fi={},Hi=Ui=!1;}function B(){for(Ui=!0,Ii.sort(function(e,t){return e.id-t.id}),Bi=0;Bi<Ii.length;Bi++){var e=Ii[Bi],t=e.id;Fi[t]=null,e.run();}Ci&&di.devtools&&Ci.emit("flush"),U();}function z(e){var t=e.id;if(null==Fi[t]){if(Fi[t]=!0,Ui){for(var n=Ii.length-1;n>=0&&Ii[n].id>e.id;)n--;Ii.splice(Math.max(n,Bi)+1,0,e);}else Ii.push(e);Hi||(Hi=!0,xi(B));}}function V(e){Ki.clear(),J(e,Ki);}function J(e,t){var n,r,i=Array.isArray(e);if((i||u(e))&&Object.isExtensible(e)){if(e.__ob__){var a=e.__ob__.dep.id;if(t.has(a))return;t.add(a);}if(i)for(n=e.length;n--;)J(e[n],t);else for(r=Object.keys(e),n=r.length;n--;)J(e[r[n]],t);}}function K(e){e._watchers=[];var t=e.$options;t.props&&q(e,t.props),t.methods&&Y(e,t.methods),t.data?W(e):k(e._data={},!0),t.computed&&Z(e,t.computed),t.watch&&Q(e,t.watch);}function q(e,t){var n=e.$options.propsData||{},r=e.$options._propKeys=Object.keys(t),i=!e.$parent;Li.shouldConvert=i;for(var a=function(i){var a=r[i];A(e,a,R(a,t,n,e));},o=0;o<r.length;o++)a(o);Li.shouldConvert=!0;}function W(e){var t=e.$options.data;t=e._data="function"==typeof t?t.call(e):t||{},f(t)||(t={});for(var n=Object.keys(t),r=e.$options.props,a=n.length;a--;)r&&i(r,n[a])||te(e,n[a]);k(t,!0);}function Z(e,t){for(var n in t){var r=t[n];"function"==typeof r?(qi.get=G(r,e),qi.set=p):(qi.get=r.get?r.cache!==!1?G(r.get,e):s(r.get,e):p,qi.set=r.set?s(r.set,e):p),Object.defineProperty(e,n,qi);}}function G(e,t){var n=new Vi(t,e,p,{lazy:!0});return function(){return n.dirty&&n.evaluate(),Si.target&&n.depend(),n.value}}function Y(e,t){for(var n in t)e[n]=null==t[n]?p:s(t[n],e);}function Q(e,t){for(var n in t){var r=t[n];if(Array.isArray(r))for(var i=0;i<r.length;i++)X(e,n,r[i]);else X(e,n,r);}}function X(e,t,n){var r;f(n)&&(r=n,n=n.handler),"string"==typeof n&&(n=e[n]),e.$watch(t,n,r);}function ee(e){var t={};t.get=function(){return this._data},Object.defineProperty(e.prototype,"$data",t),e.prototype.$set=O,e.prototype.$delete=S,e.prototype.$watch=function(e,t,n){var r=this;n=n||{},n.user=!0;var i=new Vi(r,e,t,n);return n.immediate&&t.call(r,i.value),function(){i.teardown();}};}function te(e,t){g(t)||Object.defineProperty(e,t,{configurable:!0,enumerable:!0,get:function(){return e._data[t]},set:function(n){e._data[t]=n;}});}function ne(e){return new Wi(void 0,void 0,void 0,String(e))}function re(e){var t=new Wi(e.tag,e.data,e.children,e.text,e.elm,e.context,e.componentOptions);return t.ns=e.ns,t.isStatic=e.isStatic,t.key=e.key,t.isCloned=!0,t}function ie(e){for(var t=new Array(e.length),n=0;n<e.length;n++)t[n]=re(e[n]);return t}function ae(e,t,n,r){r+=t;var i=e.__injected||(e.__injected={});if(!i[r]){i[r]=!0;var a=e[t];a?e[t]=function(){a.apply(this,arguments),n.apply(this,arguments);}:e[t]=n;}}function oe(e,t,n,r,i){var a,o,s,c,l,u,f;for(a in e)if(o=e[a],s=t[a],o)if(s){if(o!==s)if(Array.isArray(s)){s.length=o.length;for(var d=0;d<s.length;d++)s[d]=o[d];e[a]=s;}else s.fn=o,e[a]=s;}else f="~"===a.charAt(0),l=f?a.slice(1):a,u="!"===l.charAt(0),l=u?l.slice(1):l,Array.isArray(o)?n(l,o.invoker=se(o),f,u):(o.invoker||(c=o,o=e[a]={},o.fn=c,o.invoker=ce(o)),n(l,o.invoker,f,u));else;for(a in t)e[a]||(f="~"===a.charAt(0),l=f?a.slice(1):a,u="!"===l.charAt(0),l=u?l.slice(1):l,r(l,t[a].invoker,u));}function se(e){return function(t){for(var n=arguments,r=1===arguments.length,i=0;i<e.length;i++)r?e[i](t):e[i].apply(null,n);}}function ce(e){return function(t){var n=1===arguments.length;n?e.fn(t):e.fn.apply(null,arguments);}}function le(e){for(var t=0;t<e.length;t++)if(Array.isArray(e[t]))return Array.prototype.concat.apply([],e);return e}function ue(e){return a(e)?[ne(e)]:Array.isArray(e)?fe(e):void 0}function fe(e,t){var n,r,i,o=[];for(n=0;n<e.length;n++)r=e[n],null!=r&&"boolean"!=typeof r&&(i=o[o.length-1],Array.isArray(r)?o.push.apply(o,fe(r,(t||"")+"_"+n)):a(r)?i&&i.text?i.text+=String(r):""!==r&&o.push(ne(r)):r.text&&i&&i.text?o[o.length-1]=ne(i.text+r.text):(r.tag&&null==r.key&&null!=t&&(r.key="__vlist"+t+"_"+n+"__"),o.push(r)));return o}function de(e){return e&&e.filter(function(e){return e&&e.componentOptions})[0]}function pe(e){e._events=Object.create(null),e._hasHookEvent=!1;var t=e.$options._parentListeners;t&&me(e,t);}function ve(e,t,n){n?Ji.$once(e,t):Ji.$on(e,t);}function he(e,t){Ji.$off(e,t);}function me(e,t,n){Ji=e,oe(t,n||{},ve,he,e);}function ge(e){var t=/^hook:/;e.prototype.$on=function(e,n){var r=this;return(r._events[e]||(r._events[e]=[])).push(n),t.test(e)&&(r._hasHookEvent=!0),r},e.prototype.$once=function(e,t){function n(){r.$off(e,n),t.apply(r,arguments);}var r=this;return n.fn=t,r.$on(e,n),r},e.prototype.$off=function(e,t){var n=this;if(!arguments.length)return n._events=Object.create(null),n;var r=n._events[e];if(!r)return n;if(1===arguments.length)return n._events[e]=null,n;for(var i,a=r.length;a--;)if(i=r[a],i===t||i.fn===t){r.splice(a,1);break}return n},e.prototype.$emit=function(e){var t=this,n=t._events[e];if(n){n=n.length>1?c(n):n;for(var r=c(arguments,1),i=0,a=n.length;i<a;i++)n[i].apply(t,r);}return t};}function ye(e){var t=e.$options,n=t.parent;if(n&&!t.abstract){for(;n.$options.abstract&&n.$parent;)n=n.$parent;n.$children.push(e);}e.$parent=n,e.$root=n?n.$root:e,e.$children=[],e.$refs={},e._watcher=null,e._inactive=!1,e._isMounted=!1,e._isDestroyed=!1,e._isBeingDestroyed=!1;}function _e(e){e.prototype._mount=function(e,t){var n=this;return n.$el=e,n.$options.render||(n.$options.render=Zi),be(n,"beforeMount"),n._watcher=new Vi(n,function(){n._update(n._render(),t);},p),t=!1,null==n.$vnode&&(n._isMounted=!0,be(n,"mounted")),n},e.prototype._update=function(e,t){var n=this;n._isMounted&&be(n,"beforeUpdate");var r=n.$el,i=n._vnode,a=Gi;Gi=n,n._vnode=e,i?n.$el=n.__patch__(i,e):n.$el=n.__patch__(n.$el,e,t,!1,n.$options._parentElm,n.$options._refElm),Gi=a,r&&(r.__vue__=null),n.$el&&(n.$el.__vue__=n),n.$vnode&&n.$parent&&n.$vnode===n.$parent._vnode&&(n.$parent.$el=n.$el),n._isMounted&&be(n,"updated");},e.prototype._updateFromParent=function(e,t,n,r){var i=this,a=!(!i.$options._renderChildren&&!r);if(i.$options._parentVnode=n,i.$vnode=n,i._vnode&&(i._vnode.parent=n),i.$options._renderChildren=r,e&&i.$options.props){Li.shouldConvert=!1;for(var o=i.$options._propKeys||[],s=0;s<o.length;s++){var c=o[s];i[c]=R(c,i.$options.props,e,i);}Li.shouldConvert=!0,i.$options.propsData=e;}if(t){var l=i.$options._parentListeners;i.$options._parentListeners=t,me(i,t,l);}a&&(i.$slots=Ie(r,n.context),i.$forceUpdate());},e.prototype.$forceUpdate=function(){var e=this;e._watcher&&e._watcher.update();},e.prototype.$destroy=function(){var e=this;if(!e._isBeingDestroyed){be(e,"beforeDestroy"),e._isBeingDestroyed=!0;var t=e.$parent;!t||t._isBeingDestroyed||e.$options.abstract||r(t.$children,e),e._watcher&&e._watcher.teardown();for(var n=e._watchers.length;n--;)e._watchers[n].teardown();e._data.__ob__&&e._data.__ob__.vmCount--,e._isDestroyed=!0,be(e,"destroyed"),e.$off(),e.$el&&(e.$el.__vue__=null),e.__patch__(e._vnode,null);}};}function be(e,t){var n=e.$options[t];if(n)for(var r=0,i=n.length;r<i;r++)n[r].call(e);e._hasHookEvent&&e.$emit("hook:"+t);}function $e(e,t,n,r,i){if(e){var a=n.$options._base;if(u(e)&&(e=a.extend(e)),"function"==typeof e){if(!e.cid)if(e.resolved)e=e.resolved;else if(e=Se(e,a,function(){n.$forceUpdate();}),!e)return;Ue(e),t=t||{};var o=Te(t,e);if(e.options.functional)return we(e,o,t,n,r);var s=t.on;t.on=t.nativeOn,e.options.abstract&&(t={}),je(t);var c=e.options.name||i,l=new Wi("vue-component-"+e.cid+(c?"-"+c:""),t,void 0,void 0,void 0,n,{Ctor:e,propsData:o,listeners:s,tag:i,children:r});return l}}}function we(e,t,n,r,i){var a={},o=e.options.props;if(o)for(var s in o)a[s]=R(s,o,t);var c=Object.create(r),l=function(e,t,n,r){return Le(c,e,t,n,r,!0)},u=e.options.render.call(null,l,{props:a,data:n,parent:r,children:i,slots:function(){return Ie(i,r)}});return u instanceof Wi&&(u.functionalContext=r,n.slot&&((u.data||(u.data={})).slot=n.slot)),u}function Ce(e,t,n,r){var i=e.componentOptions,a={_isComponent:!0,parent:t,propsData:i.propsData,_componentTag:i.tag,_parentVnode:e,_parentListeners:i.listeners,_renderChildren:i.children,_parentElm:n||null,_refElm:r||null},o=e.data.inlineTemplate;return o&&(a.render=o.render,a.staticRenderFns=o.staticRenderFns),new i.Ctor(a)}function xe(e,t,n,r){if(!e.child||e.child._isDestroyed){var i=e.child=Ce(e,Gi,n,r);i.$mount(t?e.elm:void 0,t);}else if(e.data.keepAlive){var a=e;ke(a,a);}}function ke(e,t){var n=t.componentOptions,r=t.child=e.child;r._updateFromParent(n.propsData,n.listeners,t,n.children);}function Ae(e){e.child._isMounted||(e.child._isMounted=!0,be(e.child,"mounted")),e.data.keepAlive&&(e.child._inactive=!1,be(e.child,"activated"));}function Oe(e){e.child._isDestroyed||(e.data.keepAlive?(e.child._inactive=!0,be(e.child,"deactivated")):e.child.$destroy());}function Se(e,t,n){if(!e.requested){e.requested=!0;var r=e.pendingCallbacks=[n],i=!0,a=function(n){if(u(n)&&(n=t.extend(n)),e.resolved=n,!i)for(var a=0,o=r.length;a<o;a++)r[a](n);},o=function(e){},s=e(a,o);return s&&"function"==typeof s.then&&!e.resolved&&s.then(a,o),i=!1,e.resolved}e.pendingCallbacks.push(n);}function Te(e,t){var n=t.options.props;if(n){var r={},i=e.attrs,a=e.props,o=e.domProps;if(i||a||o)for(var s in n){var c=si(s);Ee(r,a,s,c,!0)||Ee(r,i,s,c)||Ee(r,o,s,c);}return r}}function Ee(e,t,n,r,a){if(t){if(i(t,n))return e[n]=t[n],a||delete t[n],!0;if(i(t,r))return e[n]=t[r],a||delete t[r],!0}return!1}function je(e){e.hook||(e.hook={});for(var t=0;t<Qi.length;t++){var n=Qi[t],r=e.hook[n],i=Yi[n];e.hook[n]=r?Ne(i,r):i;}}function Ne(e,t){return function(n,r,i,a){e(n,r,i,a),t(n,r,i,a);}}function Le(e,t,n,r,i,o){return(Array.isArray(n)||a(n))&&(i=r,r=n,n=void 0),o&&(i=ea),De(e,t,n,r,i)}function De(e,t,n,r,i){if(n&&n.__ob__)return Zi();if(!t)return Zi();Array.isArray(r)&&"function"==typeof r[0]&&(n=n||{},n.scopedSlots={default:r[0]},r.length=0),i===ea?r=ue(r):i===Xi&&(r=le(r));var a,o;if("string"==typeof t){var s;o=di.getTagNamespace(t),a=di.isReservedTag(t)?new Wi(di.parsePlatformTagName(t),n,r,void 0,void 0,e):(s=P(e.$options,"components",t))?$e(s,n,e,r,t):new Wi(t,n,r,void 0,void 0,e);}else a=$e(t,n,e,r);return a?(o&&Me(a,o),a):Zi()}function Me(e,t){if(e.ns=t,"foreignObject"!==e.tag&&e.children)for(var n=0,r=e.children.length;n<r;n++){var i=e.children[n];i.tag&&!i.ns&&Me(i,t);}}function Pe(e){e.$vnode=null,e._vnode=null,e._staticTrees=null;var t=e.$options._parentVnode,n=t&&t.context;e.$slots=Ie(e.$options._renderChildren,n),e.$scopedSlots={},e._c=function(t,n,r,i){return Le(e,t,n,r,i,!1)},e.$createElement=function(t,n,r,i){return Le(e,t,n,r,i,!0)},e.$options.el&&e.$mount(e.$options.el);}function Re(n){function r(e,t,n){if(Array.isArray(e))for(var r=0;r<e.length;r++)e[r]&&"string"!=typeof e[r]&&i(e[r],t+"_"+r,n);else i(e,t,n);}function i(e,t,n){e.isStatic=!0,e.key=t,e.isOnce=n;}n.prototype.$nextTick=function(e){return xi(e,this)},n.prototype._render=function(){var e=this,t=e.$options,n=t.render,r=t.staticRenderFns,i=t._parentVnode;if(e._isMounted)for(var a in e.$slots)e.$slots[a]=ie(e.$slots[a]);i&&i.data.scopedSlots&&(e.$scopedSlots=i.data.scopedSlots),r&&!e._staticTrees&&(e._staticTrees=[]),e.$vnode=i;var o;try{o=n.call(e._renderProxy,e.$createElement);}catch(t){if(!di.errorHandler)throw t;di.errorHandler.call(null,t,e),o=e._vnode;}return o instanceof Wi||(o=Zi()),o.parent=i,o},n.prototype._s=e,n.prototype._v=ne,n.prototype._n=t,n.prototype._e=Zi,n.prototype._q=h,n.prototype._i=m,n.prototype._m=function(e,t){var n=this._staticTrees[e];return n&&!t?Array.isArray(n)?ie(n):re(n):(n=this._staticTrees[e]=this.$options.staticRenderFns[e].call(this._renderProxy),r(n,"__static__"+e,!1),n)},n.prototype._o=function(e,t,n){return r(e,"__once__"+t+(n?"_"+n:""),!0),e},n.prototype._f=function(e){return P(this.$options,"filters",e,!0)||fi},n.prototype._l=function(e,t){var n,r,i,a,o;if(Array.isArray(e)||"string"==typeof e)for(n=new Array(e.length),r=0,i=e.length;r<i;r++)n[r]=t(e[r],r);else if("number"==typeof e)for(n=new Array(e),r=0;r<e;r++)n[r]=t(r+1,r);else if(u(e))for(a=Object.keys(e),n=new Array(a.length),r=0,i=a.length;r<i;r++)o=a[r],n[r]=t(e[o],o,r);return n},n.prototype._t=function(e,t,n,r){var i=this.$scopedSlots[e];if(i)return n=n||{},r&&l(n,r),i(n)||t;var a=this.$slots[e];return a||t},n.prototype._b=function(e,t,n,r){if(n)if(u(n)){Array.isArray(n)&&(n=d(n));for(var i in n)if("class"===i||"style"===i)e[i]=n[i];else{var a=r||di.mustUseProp(t,i)?e.domProps||(e.domProps={}):e.attrs||(e.attrs={});a[i]=n[i];}}else;return e},n.prototype._k=function(e,t,n){var r=di.keyCodes[t]||n;return Array.isArray(r)?r.indexOf(e)===-1:r!==e};}function Ie(e,t){var n={};if(!e)return n;for(var r,i,a=[],o=0,s=e.length;o<s;o++)if(i=e[o],(i.context===t||i.functionalContext===t)&&i.data&&(r=i.data.slot)){var c=n[r]||(n[r]=[]);"template"===i.tag?c.push.apply(c,i.children):c.push(i);}else a.push(i);return a.length&&(1!==a.length||" "!==a[0].text&&!a[0].isComment)&&(n.default=a),n}function Fe(e){e.prototype._init=function(e){var t=this;t._uid=ta++,t._isVue=!0,e&&e._isComponent?He(t,e):t.$options=M(Ue(t.constructor),e||{},t),t._renderProxy=t,t._self=t,ye(t),pe(t),be(t,"beforeCreate"),K(t),be(t,"created"),Pe(t);};}function He(e,t){var n=e.$options=Object.create(e.constructor.options);n.parent=t.parent,n.propsData=t.propsData,n._parentVnode=t._parentVnode,n._parentListeners=t._parentListeners,n._renderChildren=t._renderChildren,n._componentTag=t._componentTag,n._parentElm=t._parentElm,n._refElm=t._refElm,t.render&&(n.render=t.render,n.staticRenderFns=t.staticRenderFns);}function Ue(e){var t=e.options;if(e.super){var n=e.super.options,r=e.superOptions,i=e.extendOptions;n!==r&&(e.superOptions=n,i.render=t.render,i.staticRenderFns=t.staticRenderFns,i._scopeId=t._scopeId,t=e.options=M(n,i),t.name&&(t.components[t.name]=e));}return t}function Be(e){this._init(e);}function ze(e){e.use=function(e){if(!e.installed){var t=c(arguments,1);return t.unshift(this),"function"==typeof e.install?e.install.apply(e,t):e.apply(null,t),e.installed=!0,this}};}function Ve(e){e.mixin=function(e){this.options=M(this.options,e);};}function Je(e){e.cid=0;var t=1;e.extend=function(e){e=e||{};var n=this,r=n.cid,i=e._Ctor||(e._Ctor={});if(i[r])return i[r];var a=e.name||n.options.name,o=function(e){this._init(e);};return o.prototype=Object.create(n.prototype),o.prototype.constructor=o,o.cid=t++,o.options=M(n.options,e),o.super=n,o.extend=n.extend,o.mixin=n.mixin,o.use=n.use,di._assetTypes.forEach(function(e){o[e]=n[e];}),a&&(o.options.components[a]=o),o.superOptions=n.options,o.extendOptions=e,i[r]=o,o};}function Ke(e){di._assetTypes.forEach(function(t){e[t]=function(e,n){return n?("component"===t&&f(n)&&(n.name=n.name||e,n=this.options._base.extend(n)),"directive"===t&&"function"==typeof n&&(n={bind:n,update:n}),this.options[t+"s"][e]=n,n):this.options[t+"s"][e]};});}function qe(e,t){return"string"==typeof e?e.split(",").indexOf(t)>-1:e.test(t)}function We(e){var t={};t.get=function(){return di},Object.defineProperty(e,"config",t),e.util=Ri,e.set=O,e.delete=S,e.nextTick=xi,e.options=Object.create(null),di._assetTypes.forEach(function(t){e.options[t+"s"]=Object.create(null);}),e.options._base=e,l(e.options.components,ia),ze(e),Ve(e),Je(e),Ke(e);}function Ze(e){for(var t=e.data,n=e,r=e;r.child;)r=r.child._vnode,r.data&&(t=Ge(r.data,t));for(;n=n.parent;)n.data&&(t=Ge(t,n.data));return Ye(t)}function Ge(e,t){return{staticClass:Qe(e.staticClass,t.staticClass),class:e.class?[e.class,t.class]:t.class}}function Ye(e){var t=e.class,n=e.staticClass;return n||t?Qe(n,Xe(t)):""}function Qe(e,t){return e?t?e+" "+t:e:t||""}function Xe(e){var t="";if(!e)return t;if("string"==typeof e)return e;if(Array.isArray(e)){for(var n,r=0,i=e.length;r<i;r++)e[r]&&(n=Xe(e[r]))&&(t+=n+" ");return t.slice(0,-1)}if(u(e)){for(var a in e)e[a]&&(t+=a+" ");return t.slice(0,-1)}return t}function et(e){return ga(e)?"svg":"math"===e?"math":void 0}function tt(e){if(!hi)return!0;if(_a(e))return!1;if(e=e.toLowerCase(),null!=ba[e])return ba[e];var t=document.createElement(e);return e.indexOf("-")>-1?ba[e]=t.constructor===window.HTMLUnknownElement||t.constructor===window.HTMLElement:ba[e]=/HTMLUnknownElement/.test(t.toString())}function nt(e){if("string"==typeof e){if(e=document.querySelector(e),!e)return document.createElement("div")}return e}function rt(e,t){var n=document.createElement(e);return"select"!==e?n:(t.data&&t.data.attrs&&"multiple"in t.data.attrs&&n.setAttribute("multiple","multiple"),n)}function it(e,t){return document.createElementNS(ha[e],t)}function at(e){return document.createTextNode(e)}function ot(e){return document.createComment(e)}function st(e,t,n){e.insertBefore(t,n);}function ct(e,t){e.removeChild(t);}function lt(e,t){e.appendChild(t);}function ut(e){return e.parentNode}function ft(e){return e.nextSibling}function dt(e){return e.tagName}function pt(e,t){e.textContent=t;}function vt(e,t,n){e.setAttribute(t,n);}function ht(e,t){var n=e.data.ref;if(n){var i=e.context,a=e.child||e.elm,o=i.$refs;t?Array.isArray(o[n])?r(o[n],a):o[n]===a&&(o[n]=void 0):e.data.refInFor?Array.isArray(o[n])&&o[n].indexOf(a)<0?o[n].push(a):o[n]=[a]:o[n]=a;}}function mt(e){return null==e}function gt(e){return null!=e}function yt(e,t){return e.key===t.key&&e.tag===t.tag&&e.isComment===t.isComment&&!e.data==!t.data}function _t(e,t,n){var r,i,a={};for(r=t;r<=n;++r)i=e[r].key,gt(i)&&(a[i]=r);return a}function bt(e){function t(e){return new Wi(O.tagName(e).toLowerCase(),{},[],void 0,e)}function r(e,t){function n(){0===--n.listeners&&i(e);}return n.listeners=t,n}function i(e){var t=O.parentNode(e);t&&O.removeChild(t,e);}function o(e,t,n,r,i){if(e.isRootInsert=!i,!s(e,t,n,r)){var a=e.data,o=e.children,c=e.tag;gt(c)?(e.elm=e.ns?O.createElementNS(e.ns,c):O.createElement(c,e),v(e),u(e,o,t),gt(a)&&d(e,t),l(n,e.elm,r)):e.isComment?(e.elm=O.createComment(e.text),l(n,e.elm,r)):(e.elm=O.createTextNode(e.text),l(n,e.elm,r));}}function s(e,t,n,r){var i=e.data;if(gt(i)){var a=gt(e.child)&&i.keepAlive;if(gt(i=i.hook)&&gt(i=i.init)&&i(e,!1,n,r),gt(e.child))return p(e,t),a&&c(e,t,n,r),!0}}function c(e,t,n,r){for(var i,a=e;a.child;)if(a=a.child._vnode,gt(i=a.data)&&gt(i=i.transition)){for(i=0;i<k.activate.length;++i)k.activate[i](Ca,a);t.push(a);break}l(n,e.elm,r);}function l(e,t,n){e&&(n?O.insertBefore(e,t,n):O.appendChild(e,t));}function u(e,t,n){if(Array.isArray(t))for(var r=0;r<t.length;++r)o(t[r],n,e.elm,null,!0);else a(e.text)&&O.appendChild(e.elm,O.createTextNode(e.text));}function f(e){for(;e.child;)e=e.child._vnode;return gt(e.tag)}function d(e,t){for(var n=0;n<k.create.length;++n)k.create[n](Ca,e);C=e.data.hook,gt(C)&&(C.create&&C.create(Ca,e),C.insert&&t.push(e));}function p(e,t){e.data.pendingInsert&&t.push.apply(t,e.data.pendingInsert),e.elm=e.child.$el,f(e)?(d(e,t),v(e)):(ht(e),t.push(e));}function v(e){var t;gt(t=e.context)&&gt(t=t.$options._scopeId)&&O.setAttribute(e.elm,t,""),gt(t=Gi)&&t!==e.context&&gt(t=t.$options._scopeId)&&O.setAttribute(e.elm,t,"");}function h(e,t,n,r,i,a){for(;r<=i;++r)o(n[r],a,e,t);}function m(e){var t,n,r=e.data;if(gt(r))for(gt(t=r.hook)&&gt(t=t.destroy)&&t(e),t=0;t<k.destroy.length;++t)k.destroy[t](e);if(gt(t=e.children))for(n=0;n<e.children.length;++n)m(e.children[n]);}function g(e,t,n,r){for(;n<=r;++n){var a=t[n];gt(a)&&(gt(a.tag)?(y(a),m(a)):i(a.elm));}}function y(e,t){if(t||gt(e.data)){var n=k.remove.length+1;for(t?t.listeners+=n:t=r(e.elm,n),gt(C=e.child)&&gt(C=C._vnode)&&gt(C.data)&&y(C,t),C=0;C<k.remove.length;++C)k.remove[C](e,t);gt(C=e.data.hook)&&gt(C=C.remove)?C(e,t):t();}else i(e.elm);}function _(e,t,n,r,i){for(var a,s,c,l,u=0,f=0,d=t.length-1,p=t[0],v=t[d],m=n.length-1,y=n[0],_=n[m],$=!i;u<=d&&f<=m;)mt(p)?p=t[++u]:mt(v)?v=t[--d]:yt(p,y)?(b(p,y,r),p=t[++u],y=n[++f]):yt(v,_)?(b(v,_,r),v=t[--d],_=n[--m]):yt(p,_)?(b(p,_,r),$&&O.insertBefore(e,p.elm,O.nextSibling(v.elm)),p=t[++u],_=n[--m]):yt(v,y)?(b(v,y,r),$&&O.insertBefore(e,v.elm,p.elm),v=t[--d],y=n[++f]):(mt(a)&&(a=_t(t,u,d)),s=gt(y.key)?a[y.key]:null,mt(s)?(o(y,r,e,p.elm),y=n[++f]):(c=t[s],yt(c,y)?(b(c,y,r),t[s]=void 0,$&&O.insertBefore(e,y.elm,p.elm),y=n[++f]):(o(y,r,e,p.elm),y=n[++f])));u>d?(l=mt(n[m+1])?null:n[m+1].elm,h(e,l,n,f,m,r)):f>m&&g(e,t,u,d);}function b(e,t,n,r){if(e!==t){if(t.isStatic&&e.isStatic&&t.key===e.key&&(t.isCloned||t.isOnce))return t.elm=e.elm,void(t.child=e.child);var i,a=t.data,o=gt(a);o&&gt(i=a.hook)&&gt(i=i.prepatch)&&i(e,t);var s=t.elm=e.elm,c=e.children,l=t.children;if(o&&f(t)){for(i=0;i<k.update.length;++i)k.update[i](e,t);gt(i=a.hook)&&gt(i=i.update)&&i(e,t);}mt(t.text)?gt(c)&&gt(l)?c!==l&&_(s,c,l,n,r):gt(l)?(gt(e.text)&&O.setTextContent(s,""),h(s,null,l,0,l.length-1,n)):gt(c)?g(s,c,0,c.length-1):gt(e.text)&&O.setTextContent(s,""):e.text!==t.text&&O.setTextContent(s,t.text),o&&gt(i=a.hook)&&gt(i=i.postpatch)&&i(e,t);}}function $(e,t,n){if(n&&e.parent)e.parent.data.pendingInsert=t;else for(var r=0;r<t.length;++r)t[r].data.hook.insert(t[r]);}function w(e,t,n){t.elm=e;var r=t.tag,i=t.data,a=t.children;if(gt(i)&&(gt(C=i.hook)&&gt(C=C.init)&&C(t,!0),gt(C=t.child)))return p(t,n),!0;if(gt(r)){if(gt(a))if(e.hasChildNodes()){for(var o=!0,s=e.firstChild,c=0;c<a.length;c++){if(!s||!w(s,a[c],n)){o=!1;break}s=s.nextSibling;}if(!o||s)return!1}else u(t,a,n);if(gt(i))for(var l in i)if(!S(l)){d(t,n);break}}else e.data!==t.text&&(e.data=t.text);return!0}var C,x,k={},A=e.modules,O=e.nodeOps;for(C=0;C<xa.length;++C)for(k[xa[C]]=[],x=0;x<A.length;++x)void 0!==A[x][xa[C]]&&k[xa[C]].push(A[x][xa[C]]);var S=n("attrs,style,class,staticClass,staticStyle,key");return function(e,n,r,i,a,s){if(!n)return void(e&&m(e));var c,l,u=!1,d=[];if(e){var p=gt(e.nodeType);if(!p&&yt(e,n))b(e,n,d,i);else{if(p){if(1===e.nodeType&&e.hasAttribute("server-rendered")&&(e.removeAttribute("server-rendered"),r=!0),r&&w(e,n,d))return $(n,d,!0),e;e=t(e);}if(c=e.elm,l=O.parentNode(c),o(n,d,l,O.nextSibling(c)),n.parent){for(var v=n.parent;v;)v.elm=n.elm,v=v.parent;if(f(n))for(var h=0;h<k.create.length;++h)k.create[h](Ca,n.parent);}null!==l?g(l,[e],0,0):gt(e.tag)&&m(e);}}else u=!0,o(n,d,a,s);return $(n,d,u),n.elm}}function $t(e,t){(e.data.directives||t.data.directives)&&wt(e,t);}function wt(e,t){var n,r,i,a=e===Ca,o=t===Ca,s=Ct(e.data.directives,e.context),c=Ct(t.data.directives,t.context),l=[],u=[];for(n in c)r=s[n],i=c[n],r?(i.oldValue=r.value,kt(i,"update",t,e),i.def&&i.def.componentUpdated&&u.push(i)):(kt(i,"bind",t,e),i.def&&i.def.inserted&&l.push(i));if(l.length){var f=function(){for(var n=0;n<l.length;n++)kt(l[n],"inserted",t,e);};a?ae(t.data.hook||(t.data.hook={}),"insert",f,"dir-insert"):f();}if(u.length&&ae(t.data.hook||(t.data.hook={}),"postpatch",function(){for(var n=0;n<u.length;n++)kt(u[n],"componentUpdated",t,e);},"dir-postpatch"),!a)for(n in s)c[n]||kt(s[n],"unbind",e,e,o);}function Ct(e,t){var n=Object.create(null);if(!e)return n;var r,i;for(r=0;r<e.length;r++)i=e[r],i.modifiers||(i.modifiers=Aa),n[xt(i)]=i,i.def=P(t.$options,"directives",i.name,!0);return n}function xt(e){return e.rawName||e.name+"."+Object.keys(e.modifiers||{}).join(".")}function kt(e,t,n,r,i){var a=e.def&&e.def[t];a&&a(n.elm,e,n,r,i);}function At(e,t){if(e.data.attrs||t.data.attrs){var n,r,i,a=t.elm,o=e.data.attrs||{},s=t.data.attrs||{};s.__ob__&&(s=t.data.attrs=l({},s));for(n in s)r=s[n],i=o[n],i!==r&&Ot(a,n,r);yi&&s.value!==o.value&&Ot(a,"value",s.value);for(n in o)null==s[n]&&(da(n)?a.removeAttributeNS(fa,pa(n)):la(n)||a.removeAttribute(n));}}function Ot(e,t,n){ua(t)?va(n)?e.removeAttribute(t):e.setAttribute(t,t):la(t)?e.setAttribute(t,va(n)||"false"===n?"false":"true"):da(t)?va(n)?e.removeAttributeNS(fa,pa(t)):e.setAttributeNS(fa,t,n):va(n)?e.removeAttribute(t):e.setAttribute(t,n);}function St(e,t){var n=t.elm,r=t.data,i=e.data;if(r.staticClass||r.class||i&&(i.staticClass||i.class)){var a=Ze(t),o=n._transitionClasses;o&&(a=Qe(a,Xe(o))),a!==n._prevClass&&(n.setAttribute("class",a),n._prevClass=a);}}function Tt(e,t,n,r){if(n){var i=t;t=function(n){Et(e,t,r),1===arguments.length?i(n):i.apply(null,arguments);};}aa.addEventListener(e,t,r);}function Et(e,t,n){aa.removeEventListener(e,t,n);}function jt(e,t){if(e.data.on||t.data.on){var n=t.data.on||{},r=e.data.on||{};aa=t.elm,oe(n,r,Tt,Et,t.context);}}function Nt(e,t){if(e.data.domProps||t.data.domProps){var n,r,i=t.elm,a=e.data.domProps||{},o=t.data.domProps||{};o.__ob__&&(o=t.data.domProps=l({},o));for(n in a)null==o[n]&&(i[n]="");for(n in o)if(r=o[n],("textContent"!==n&&"innerHTML"!==n||(t.children&&(t.children.length=0),r!==a[n]))&&("checked"!==n||Dt(i,r)))if("value"===n){i._value=r;var s=null==r?"":String(r);Lt(i,t,s)&&(i.value=s);}else i[n]=r;}}function Lt(e,t,n){return!(e.composing||"option"!==t.tag&&!Dt(e,n)&&!Mt(t,n))}function Dt(e,t){return document.activeElement!==e&&e.value!==t}function Mt(e,n){var r=e.elm.value,i=e.elm._vModifiers;return i&&i.number||"number"===e.elm.type?t(r)!==t(n):i&&i.trim?r.trim()!==n.trim():r!==n}function Pt(e){var t=Rt(e.style);return e.staticStyle?l(e.staticStyle,t):t}function Rt(e){return Array.isArray(e)?d(e):"string"==typeof e?Na(e):e}function It(e,t){var n,r={};if(t)for(var i=e;i.child;)i=i.child._vnode,i.data&&(n=Pt(i.data))&&l(r,n);(n=Pt(e.data))&&l(r,n);for(var a=e;a=a.parent;)a.data&&(n=Pt(a.data))&&l(r,n);return r}function Ft(e,t){var n=t.data,r=e.data;if(n.staticStyle||n.style||r.staticStyle||r.style){var i,a,o=t.elm,s=e.data.staticStyle,c=e.data.style||{},u=s||c,f=Rt(t.data.style)||{};t.data.style=f.__ob__?l({},f):f;var d=It(t,!0);for(a in u)null==d[a]&&Ma(o,a,"");for(a in d)i=d[a],i!==u[a]&&Ma(o,a,null==i?"":i);}}function Ht(e,t){if(t&&t.trim())if(e.classList)t.indexOf(" ")>-1?t.split(/\s+/).forEach(function(t){return e.classList.add(t)}):e.classList.add(t);else{var n=" "+e.getAttribute("class")+" ";n.indexOf(" "+t+" ")<0&&e.setAttribute("class",(n+t).trim());}}function Ut(e,t){if(t&&t.trim())if(e.classList)t.indexOf(" ")>-1?t.split(/\s+/).forEach(function(t){return e.classList.remove(t)}):e.classList.remove(t);else{for(var n=" "+e.getAttribute("class")+" ",r=" "+t+" ";n.indexOf(r)>=0;)n=n.replace(r," ");e.setAttribute("class",n.trim());}}function Bt(e){Ka(function(){Ka(e);});}function zt(e,t){(e._transitionClasses||(e._transitionClasses=[])).push(t),Ht(e,t);}function Vt(e,t){e._transitionClasses&&r(e._transitionClasses,t),Ut(e,t);}function Jt(e,t,n){var r=Kt(e,t),i=r.type,a=r.timeout,o=r.propCount;if(!i)return n();var s=i===Ha?za:Ja,c=0,l=function(){e.removeEventListener(s,u),n();},u=function(t){t.target===e&&++c>=o&&l();};setTimeout(function(){c<o&&l();},a+1),e.addEventListener(s,u);}function Kt(e,t){var n,r=window.getComputedStyle(e),i=r[Ba+"Delay"].split(", "),a=r[Ba+"Duration"].split(", "),o=qt(i,a),s=r[Va+"Delay"].split(", "),c=r[Va+"Duration"].split(", "),l=qt(s,c),u=0,f=0;t===Ha?o>0&&(n=Ha,u=o,f=a.length):t===Ua?l>0&&(n=Ua,u=l,f=c.length):(u=Math.max(o,l),n=u>0?o>l?Ha:Ua:null,f=n?n===Ha?a.length:c.length:0);var d=n===Ha&&qa.test(r[Ba+"Property"]);return{type:n,timeout:u,propCount:f,hasTransform:d}}function qt(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max.apply(null,t.map(function(t,n){return Wt(t)+Wt(e[n])}))}function Wt(e){return 1e3*Number(e.slice(0,-1))}function Zt(e,t){var n=e.elm;n._leaveCb&&(n._leaveCb.cancelled=!0,n._leaveCb());var r=Yt(e.data.transition);if(r&&!n._enterCb&&1===n.nodeType){for(var i=r.css,a=r.type,o=r.enterClass,s=r.enterToClass,c=r.enterActiveClass,l=r.appearClass,u=r.appearToClass,f=r.appearActiveClass,d=r.beforeEnter,p=r.enter,v=r.afterEnter,h=r.enterCancelled,m=r.beforeAppear,g=r.appear,y=r.afterAppear,_=r.appearCancelled,b=Gi,$=Gi.$vnode;$&&$.parent;)$=$.parent,
b=$.context;var w=!b._isMounted||!e.isRootInsert;if(!w||g||""===g){var C=w?l:o,x=w?f:c,k=w?u:s,A=w?m||d:d,O=w&&"function"==typeof g?g:p,S=w?y||v:v,T=w?_||h:h,E=i!==!1&&!yi,j=O&&(O._length||O.length)>1,N=n._enterCb=Qt(function(){E&&(Vt(n,k),Vt(n,x)),N.cancelled?(E&&Vt(n,C),T&&T(n)):S&&S(n),n._enterCb=null;});e.data.show||ae(e.data.hook||(e.data.hook={}),"insert",function(){var t=n.parentNode,r=t&&t._pending&&t._pending[e.key];r&&r.context===e.context&&r.tag===e.tag&&r.elm._leaveCb&&r.elm._leaveCb(),O&&O(n,N);},"transition-insert"),A&&A(n),E&&(zt(n,C),zt(n,x),Bt(function(){zt(n,k),Vt(n,C),N.cancelled||j||Jt(n,a,N);})),e.data.show&&(t&&t(),O&&O(n,N)),E||j||N();}}}function Gt(e,t){function n(){g.cancelled||(e.data.show||((r.parentNode._pending||(r.parentNode._pending={}))[e.key]=e),u&&u(r),h&&(zt(r,s),zt(r,l),Bt(function(){zt(r,c),Vt(r,s),g.cancelled||m||Jt(r,o,g);})),f&&f(r,g),h||m||g());}var r=e.elm;r._enterCb&&(r._enterCb.cancelled=!0,r._enterCb());var i=Yt(e.data.transition);if(!i)return t();if(!r._leaveCb&&1===r.nodeType){var a=i.css,o=i.type,s=i.leaveClass,c=i.leaveToClass,l=i.leaveActiveClass,u=i.beforeLeave,f=i.leave,d=i.afterLeave,p=i.leaveCancelled,v=i.delayLeave,h=a!==!1&&!yi,m=f&&(f._length||f.length)>1,g=r._leaveCb=Qt(function(){r.parentNode&&r.parentNode._pending&&(r.parentNode._pending[e.key]=null),h&&(Vt(r,c),Vt(r,l)),g.cancelled?(h&&Vt(r,s),p&&p(r)):(t(),d&&d(r)),r._leaveCb=null;});v?v(n):n();}}function Yt(e){if(e){if("object"==typeof e){var t={};return e.css!==!1&&l(t,Wa(e.name||"v")),l(t,e),t}return"string"==typeof e?Wa(e):void 0}}function Qt(e){var t=!1;return function(){t||(t=!0,e());}}function Xt(e,t){t.data.show||Zt(t);}function en(e,t,n){var r=t.value,i=e.multiple;if(!i||Array.isArray(r)){for(var a,o,s=0,c=e.options.length;s<c;s++)if(o=e.options[s],i)a=m(r,nn(o))>-1,o.selected!==a&&(o.selected=a);else if(h(nn(o),r))return void(e.selectedIndex!==s&&(e.selectedIndex=s));i||(e.selectedIndex=-1);}}function tn(e,t){for(var n=0,r=t.length;n<r;n++)if(h(nn(t[n]),e))return!1;return!0}function nn(e){return"_value"in e?e._value:e.value}function rn(e){e.target.composing=!0;}function an(e){e.target.composing=!1,on(e.target,"input");}function on(e,t){var n=document.createEvent("HTMLEvents");n.initEvent(t,!0,!0),e.dispatchEvent(n);}function sn(e){return!e.child||e.data&&e.data.transition?e:sn(e.child._vnode)}function cn(e){var t=e&&e.componentOptions;return t&&t.Ctor.options.abstract?cn(de(t.children)):e}function ln(e){var t={},n=e.$options;for(var r in n.propsData)t[r]=e[r];var i=n._parentListeners;for(var a in i)t[ii(a)]=i[a].fn;return t}function un(e,t){return/\d-keep-alive$/.test(t.tag)?e("keep-alive"):null}function fn(e){for(;e=e.parent;)if(e.data.transition)return!0}function dn(e,t){return t.key===e.key&&t.tag===e.tag}function pn(e){e.elm._moveCb&&e.elm._moveCb(),e.elm._enterCb&&e.elm._enterCb();}function vn(e){e.data.newPos=e.elm.getBoundingClientRect();}function hn(e){var t=e.data.pos,n=e.data.newPos,r=t.left-n.left,i=t.top-n.top;if(r||i){e.data.moved=!0;var a=e.elm.style;a.transform=a.WebkitTransform="translate("+r+"px,"+i+"px)",a.transitionDuration="0s";}}function mn(e,t){var n=document.createElement("div");return n.innerHTML='<div a="'+e+'">',n.innerHTML.indexOf(t)>0}function gn(e){return so=so||document.createElement("div"),so.innerHTML=e,so.textContent}function yn(e,t){return t&&(e=e.replace(rs,"\n")),e.replace(ts,"<").replace(ns,">").replace(is,"&").replace(as,'"')}function _n(e,t){function n(t){f+=t,e=e.substring(t);}function r(){var t=e.match(_o);if(t){var r={tagName:t[1],attrs:[],start:f};n(t[0].length);for(var i,a;!(i=e.match(bo))&&(a=e.match(mo));)n(a[0].length),r.attrs.push(a);if(i)return r.unarySlash=i[1],n(i[0].length),r.end=f,r}}function i(e){var n=e.tagName,r=e.unarySlash;l&&("p"===s&&fo(n)&&a("",s),uo(n)&&s===n&&a("",n));for(var i=u(n)||"html"===n&&"head"===s||!!r,o=e.attrs.length,f=new Array(o),d=0;d<o;d++){var p=e.attrs[d];ko&&p[0].indexOf('""')===-1&&(""===p[3]&&delete p[3],""===p[4]&&delete p[4],""===p[5]&&delete p[5]);var v=p[3]||p[4]||p[5]||"";f[d]={name:p[1],value:yn(v,t.shouldDecodeNewlines)};}i||(c.push({tag:n,attrs:f}),s=n,r=""),t.start&&t.start(n,f,i,e.start,e.end);}function a(e,n,r,i){var a;if(null==r&&(r=f),null==i&&(i=f),n){var o=n.toLowerCase();for(a=c.length-1;a>=0&&c[a].tag.toLowerCase()!==o;a--);}else a=0;if(a>=0){for(var l=c.length-1;l>=a;l--)t.end&&t.end(c[l].tag,r,i);c.length=a,s=a&&c[a-1].tag;}else"br"===n.toLowerCase()?t.start&&t.start(n,[],!0,r,i):"p"===n.toLowerCase()&&(t.start&&t.start(n,[],!1,r,i),t.end&&t.end(n,r,i));}for(var o,s,c=[],l=t.expectHTML,u=t.isUnaryTag||ui,f=0;e;){if(o=e,s&&Xo(s,t.sfc,c)){var d=s.toLowerCase(),p=es[d]||(es[d]=new RegExp("([\\s\\S]*?)(</"+d+"[^>]*>)","i")),v=0,h=e.replace(p,function(e,n,r){return v=r.length,"script"!==d&&"style"!==d&&"noscript"!==d&&(n=n.replace(/<!--([\s\S]*?)-->/g,"$1").replace(/<!\[CDATA\[([\s\S]*?)]]>/g,"$1")),t.chars&&t.chars(n),""});f+=e.length-h.length,e=h,a("</"+d+">",d,f-v,f);}else{var m=e.indexOf("<");if(0===m){if(Co.test(e)){var g=e.indexOf("-->");if(g>=0){n(g+3);continue}}if(xo.test(e)){var y=e.indexOf("]>");if(y>=0){n(y+2);continue}}var _=e.match(wo);if(_){n(_[0].length);continue}var b=e.match($o);if(b){var $=f;n(b[0].length),a(b[0],b[1],$,f);continue}var w=r();if(w){i(w);continue}}var C=void 0,x=void 0,k=void 0;if(m>0){for(x=e.slice(m);!($o.test(x)||_o.test(x)||Co.test(x)||xo.test(x)||(k=x.indexOf("<",1),k<0));)m+=k,x=e.slice(m);C=e.substring(0,m),n(m);}m<0&&(C=e,e=""),t.chars&&C&&t.chars(C);}if(e===o&&t.chars){t.chars(e);break}}a();}function bn(e){function t(){(o||(o=[])).push(e.slice(v,i).trim()),v=i+1;}var n,r,i,a,o,s=!1,c=!1,l=!1,u=!1,f=0,d=0,p=0,v=0;for(i=0;i<e.length;i++)if(r=n,n=e.charCodeAt(i),s)39===n&&92!==r&&(s=!1);else if(c)34===n&&92!==r&&(c=!1);else if(l)96===n&&92!==r&&(l=!1);else if(u)47===n&&92!==r&&(u=!1);else if(124!==n||124===e.charCodeAt(i+1)||124===e.charCodeAt(i-1)||f||d||p){switch(n){case 34:c=!0;break;case 39:s=!0;break;case 96:l=!0;break;case 40:p++;break;case 41:p--;break;case 91:d++;break;case 93:d--;break;case 123:f++;break;case 125:f--;}if(47===n){for(var h=i-1,m=void 0;h>=0&&(m=e.charAt(h)," "===m);h--);m&&/[\w$]/.test(m)||(u=!0);}}else void 0===a?(v=i+1,a=e.slice(0,i).trim()):t();if(void 0===a?a=e.slice(0,i).trim():0!==v&&t(),o)for(i=0;i<o.length;i++)a=$n(a,o[i]);return a}function $n(e,t){var n=t.indexOf("(");if(n<0)return'_f("'+t+'")('+e+")";var r=t.slice(0,n),i=t.slice(n+1);return'_f("'+r+'")('+e+","+i}function wn(e,t){var n=t?cs(t):os;if(n.test(e)){for(var r,i,a=[],o=n.lastIndex=0;r=n.exec(e);){i=r.index,i>o&&a.push(JSON.stringify(e.slice(o,i)));var s=bn(r[1].trim());a.push("_s("+s+")"),o=i+r[0].length;}return o<e.length&&a.push(JSON.stringify(e.slice(o))),a.join("+")}}function Cn(e){console.error("[Vue parser]: "+e);}function xn(e,t){return e?e.map(function(e){return e[t]}).filter(function(e){return e}):[]}function kn(e,t,n){(e.props||(e.props=[])).push({name:t,value:n});}function An(e,t,n){(e.attrs||(e.attrs=[])).push({name:t,value:n});}function On(e,t,n,r,i,a){(e.directives||(e.directives=[])).push({name:t,rawName:n,value:r,arg:i,modifiers:a});}function Sn(e,t,n,r,i){r&&r.capture&&(delete r.capture,t="!"+t),r&&r.once&&(delete r.once,t="~"+t);var a;r&&r.native?(delete r.native,a=e.nativeEvents||(e.nativeEvents={})):a=e.events||(e.events={});var o={value:n,modifiers:r},s=a[t];Array.isArray(s)?i?s.unshift(o):s.push(o):s?a[t]=i?[o,s]:[s,o]:a[t]=o;}function Tn(e,t,n){var r=En(e,":"+t)||En(e,"v-bind:"+t);if(null!=r)return bn(r);if(n!==!1){var i=En(e,t);if(null!=i)return JSON.stringify(i)}}function En(e,t){var n;if(null!=(n=e.attrsMap[t]))for(var r=e.attrsList,i=0,a=r.length;i<a;i++)if(r[i].name===t){r.splice(i,1);break}return n}function jn(e){if(Oo=e,Ao=Oo.length,To=Eo=jo=0,e.indexOf("[")<0||e.lastIndexOf("]")<Ao-1)return{exp:e,idx:null};for(;!Ln();)So=Nn(),Dn(So)?Pn(So):91===So&&Mn(So);return{exp:e.substring(0,Eo),idx:e.substring(Eo+1,jo)}}function Nn(){return Oo.charCodeAt(++To)}function Ln(){return To>=Ao}function Dn(e){return 34===e||39===e}function Mn(e){var t=1;for(Eo=To;!Ln();)if(e=Nn(),Dn(e))Pn(e);else if(91===e&&t++,93===e&&t--,0===t){jo=To;break}}function Pn(e){for(var t=e;!Ln()&&(e=Nn(),e!==t););}function Rn(e,t){No=t.warn||Cn,Lo=t.getTagNamespace||ui,Do=t.mustUseProp||ui,Mo=t.isPreTag||ui,Po=xn(t.modules,"preTransformNode"),Ro=xn(t.modules,"transformNode"),Io=xn(t.modules,"postTransformNode"),Fo=t.delimiters;var n,r,i=[],a=t.preserveWhitespace!==!1,o=!1,s=!1;return _n(e,{expectHTML:t.expectHTML,isUnaryTag:t.isUnaryTag,shouldDecodeNewlines:t.shouldDecodeNewlines,start:function(e,a,c){function l(e){}var u=r&&r.ns||Lo(e);gi&&"svg"===u&&(a=tr(a));var f={type:1,tag:e,attrsList:a,attrsMap:Xn(a),parent:r,children:[]};u&&(f.ns=u),er(f)&&!wi()&&(f.forbidden=!0);for(var d=0;d<Po.length;d++)Po[d](f,t);if(o||(In(f),f.pre&&(o=!0)),Mo(f.tag)&&(s=!0),o)Fn(f);else{Bn(f),zn(f),qn(f),Hn(f),f.plain=!f.key&&!a.length,Un(f),Wn(f),Zn(f);for(var p=0;p<Ro.length;p++)Ro[p](f,t);Gn(f);}if(n?i.length||n.if&&(f.elseif||f.else)&&(l(f),Kn(n,{exp:f.elseif,block:f})):(n=f,l(n)),r&&!f.forbidden)if(f.elseif||f.else)Vn(f,r);else if(f.slotScope){r.plain=!1;var v=f.slotTarget||"default";(r.scopedSlots||(r.scopedSlots={}))[v]=f;}else r.children.push(f),f.parent=r;c||(r=f,i.push(f));for(var h=0;h<Io.length;h++)Io[h](f,t);},end:function(){var e=i[i.length-1],t=e.children[e.children.length-1];t&&3===t.type&&" "===t.text&&e.children.pop(),i.length-=1,r=i[i.length-1],e.pre&&(o=!1),Mo(e.tag)&&(s=!1);},chars:function(e){if(r&&(!gi||"textarea"!==r.tag||r.attrsMap.placeholder!==e)){var t=r.children;if(e=s||e.trim()?ms(e):a&&t.length?" ":""){var n;!o&&" "!==e&&(n=wn(e,Fo))?t.push({type:2,expression:n,text:e}):" "===e&&" "===t[t.length-1].text||r.children.push({type:3,text:e});}}}}),n}function In(e){null!=En(e,"v-pre")&&(e.pre=!0);}function Fn(e){var t=e.attrsList.length;if(t)for(var n=e.attrs=new Array(t),r=0;r<t;r++)n[r]={name:e.attrsList[r].name,value:JSON.stringify(e.attrsList[r].value)};else e.pre||(e.plain=!0);}function Hn(e){var t=Tn(e,"key");t&&(e.key=t);}function Un(e){var t=Tn(e,"ref");t&&(e.ref=t,e.refInFor=Yn(e));}function Bn(e){var t;if(t=En(e,"v-for")){var n=t.match(us);if(!n)return;e.for=n[2].trim();var r=n[1].trim(),i=r.match(fs);i?(e.alias=i[1].trim(),e.iterator1=i[2].trim(),i[3]&&(e.iterator2=i[3].trim())):e.alias=r;}}function zn(e){var t=En(e,"v-if");if(t)e.if=t,Kn(e,{exp:t,block:e});else{null!=En(e,"v-else")&&(e.else=!0);var n=En(e,"v-else-if");n&&(e.elseif=n);}}function Vn(e,t){var n=Jn(t.children);n&&n.if&&Kn(n,{exp:e.elseif,block:e});}function Jn(e){for(var t=e.length;t--;){if(1===e[t].type)return e[t];e.pop();}}function Kn(e,t){e.ifConditions||(e.ifConditions=[]),e.ifConditions.push(t);}function qn(e){var t=En(e,"v-once");null!=t&&(e.once=!0);}function Wn(e){if("slot"===e.tag)e.slotName=Tn(e,"name");else{var t=Tn(e,"slot");t&&(e.slotTarget='""'===t?'"default"':t),"template"===e.tag&&(e.slotScope=En(e,"scope"));}}function Zn(e){var t;(t=Tn(e,"is"))&&(e.component=t),null!=En(e,"inline-template")&&(e.inlineTemplate=!0);}function Gn(e){var t,n,r,i,a,o,s,c,l=e.attrsList;for(t=0,n=l.length;t<n;t++)if(r=i=l[t].name,a=l[t].value,ls.test(r))if(e.hasBindings=!0,s=Qn(r),s&&(r=r.replace(hs,"")),ds.test(r))r=r.replace(ds,""),a=bn(a),c=!1,s&&(s.prop&&(c=!0,r=ii(r),"innerHtml"===r&&(r="innerHTML")),s.camel&&(r=ii(r))),c||Do(e.tag,r)?kn(e,r,a):An(e,r,a);else if(ps.test(r))r=r.replace(ps,""),Sn(e,r,a,s);else{r=r.replace(ls,"");var u=r.match(vs);u&&(o=u[1])&&(r=r.slice(0,-(o.length+1))),On(e,r,i,a,o,s);}else An(e,r,JSON.stringify(a)),Do(e.tag,r)&&("value"===r?kn(e,r,JSON.stringify(a)):kn(e,r,"true"));}function Yn(e){for(var t=e;t;){if(void 0!==t.for)return!0;t=t.parent;}return!1}function Qn(e){var t=e.match(hs);if(t){var n={};return t.forEach(function(e){n[e.slice(1)]=!0;}),n}}function Xn(e){for(var t={},n=0,r=e.length;n<r;n++)t[e[n].name]=e[n].value;return t}function er(e){return"style"===e.tag||"script"===e.tag&&(!e.attrsMap.type||"text/javascript"===e.attrsMap.type)}function tr(e){for(var t=[],n=0;n<e.length;n++){var r=e[n];gs.test(r.name)||(r.name=r.name.replace(ys,""),t.push(r));}return t}function nr(e,t){e&&(Ho=_s(t.staticKeys||""),Uo=t.isReservedTag||ui,ir(e),ar(e,!1));}function rr(e){return n("type,tag,attrsList,attrsMap,plain,parent,children,attrs"+(e?","+e:""))}function ir(e){if(e.static=sr(e),1===e.type){if(!Uo(e.tag)&&"slot"!==e.tag&&null==e.attrsMap["inline-template"])return;for(var t=0,n=e.children.length;t<n;t++){var r=e.children[t];ir(r),r.static||(e.static=!1);}}}function ar(e,t){if(1===e.type){if((e.static||e.once)&&(e.staticInFor=t),e.static&&e.children.length&&(1!==e.children.length||3!==e.children[0].type))return void(e.staticRoot=!0);if(e.staticRoot=!1,e.children)for(var n=0,r=e.children.length;n<r;n++)ar(e.children[n],t||!!e.for);e.ifConditions&&or(e.ifConditions,t);}}function or(e,t){for(var n=1,r=e.length;n<r;n++)ar(e[n].block,t);}function sr(e){return 2!==e.type&&(3===e.type||!(!e.pre&&(e.hasBindings||e.if||e.for||ti(e.tag)||!Uo(e.tag)||cr(e)||!Object.keys(e).every(Ho))))}function cr(e){for(;e.parent;){if(e=e.parent,"template"!==e.tag)return!1;if(e.for)return!0}return!1}function lr(e,t){var n=t?"nativeOn:{":"on:{";for(var r in e)n+='"'+r+'":'+ur(r,e[r])+",";return n.slice(0,-1)+"}"}function ur(e,t){if(t){if(Array.isArray(t))return"["+t.map(function(t){return ur(e,t)}).join(",")+"]";if(t.modifiers){var n="",r=[];for(var i in t.modifiers)Cs[i]?n+=Cs[i]:r.push(i);r.length&&(n=fr(r)+n);var a=$s.test(t.value)?t.value+"($event)":t.value;return"function($event){"+n+a+"}"}return bs.test(t.value)||$s.test(t.value)?t.value:"function($event){"+t.value+"}"}return"function(){}"}function fr(e){return"if("+e.map(dr).join("&&")+")return;"}function dr(e){var t=parseInt(e,10);if(t)return"$event.keyCode!=="+t;var n=ws[e];return"_k($event.keyCode,"+JSON.stringify(e)+(n?","+JSON.stringify(n):"")+")"}function pr(e,t){e.wrapData=function(n){return"_b("+n+",'"+e.tag+"',"+t.value+(t.modifiers&&t.modifiers.prop?",true":"")+")"};}function vr(e,t){var n=qo,r=qo=[],i=Wo;Wo=0,Zo=t,Bo=t.warn||Cn,zo=xn(t.modules,"transformCode"),Vo=xn(t.modules,"genData"),Jo=t.directives||{},Ko=t.isReservedTag||ui;var a=e?hr(e):'_c("div")';return qo=n,Wo=i,{render:"with(this){return "+a+"}",staticRenderFns:r}}function hr(e){if(e.staticRoot&&!e.staticProcessed)return mr(e);if(e.once&&!e.onceProcessed)return gr(e);if(e.for&&!e.forProcessed)return br(e);if(e.if&&!e.ifProcessed)return yr(e);if("template"!==e.tag||e.slotTarget){if("slot"===e.tag)return Nr(e);var t;if(e.component)t=Lr(e.component,e);else{var n=e.plain?void 0:$r(e),r=e.inlineTemplate?null:Ar(e,!0);t="_c('"+e.tag+"'"+(n?","+n:"")+(r?","+r:"")+")";}for(var i=0;i<zo.length;i++)t=zo[i](e,t);return t}return Ar(e)||"void 0"}function mr(e){return e.staticProcessed=!0,qo.push("with(this){return "+hr(e)+"}"),"_m("+(qo.length-1)+(e.staticInFor?",true":"")+")"}function gr(e){if(e.onceProcessed=!0,e.if&&!e.ifProcessed)return yr(e);if(e.staticInFor){for(var t="",n=e.parent;n;){if(n.for){t=n.key;break}n=n.parent;}return t?"_o("+hr(e)+","+Wo++ +(t?","+t:"")+")":hr(e)}return mr(e)}function yr(e){return e.ifProcessed=!0,_r(e.ifConditions.slice())}function _r(e){function t(e){return e.once?gr(e):hr(e)}if(!e.length)return"_e()";var n=e.shift();return n.exp?"("+n.exp+")?"+t(n.block)+":"+_r(e):""+t(n.block)}function br(e){var t=e.for,n=e.alias,r=e.iterator1?","+e.iterator1:"",i=e.iterator2?","+e.iterator2:"";return e.forProcessed=!0,"_l(("+t+"),function("+n+r+i+"){return "+hr(e)+"})"}function $r(e){var t="{",n=wr(e);n&&(t+=n+","),e.key&&(t+="key:"+e.key+","),e.ref&&(t+="ref:"+e.ref+","),e.refInFor&&(t+="refInFor:true,"),e.pre&&(t+="pre:true,"),e.component&&(t+='tag:"'+e.tag+'",');for(var r=0;r<Vo.length;r++)t+=Vo[r](e);if(e.attrs&&(t+="attrs:{"+Dr(e.attrs)+"},"),e.props&&(t+="domProps:{"+Dr(e.props)+"},"),e.events&&(t+=lr(e.events)+","),e.nativeEvents&&(t+=lr(e.nativeEvents,!0)+","),e.slotTarget&&(t+="slot:"+e.slotTarget+","),e.scopedSlots&&(t+=xr(e.scopedSlots)+","),e.inlineTemplate){var i=Cr(e);i&&(t+=i+",");}return t=t.replace(/,$/,"")+"}",e.wrapData&&(t=e.wrapData(t)),t}function wr(e){var t=e.directives;if(t){var n,r,i,a,o="directives:[",s=!1;for(n=0,r=t.length;n<r;n++){i=t[n],a=!0;var c=Jo[i.name]||xs[i.name];c&&(a=!!c(e,i,Bo)),a&&(s=!0,o+='{name:"'+i.name+'",rawName:"'+i.rawName+'"'+(i.value?",value:("+i.value+"),expression:"+JSON.stringify(i.value):"")+(i.arg?',arg:"'+i.arg+'"':"")+(i.modifiers?",modifiers:"+JSON.stringify(i.modifiers):"")+"},");}return s?o.slice(0,-1)+"]":void 0}}function Cr(e){var t=e.children[0];if(1===t.type){var n=vr(t,Zo);return"inlineTemplate:{render:function(){"+n.render+"},staticRenderFns:["+n.staticRenderFns.map(function(e){return"function(){"+e+"}"}).join(",")+"]}"}}function xr(e){return"scopedSlots:{"+Object.keys(e).map(function(t){return kr(t,e[t])}).join(",")+"}"}function kr(e,t){return e+":function("+String(t.attrsMap.scope)+"){return "+("template"===t.tag?Ar(t)||"void 0":hr(t))+"}"}function Ar(e,t){var n=e.children;if(n.length){var r=n[0];if(1===n.length&&r.for&&"template"!==r.tag&&"slot"!==r.tag)return hr(r);var i=Or(n);return"["+n.map(Er).join(",")+"]"+(t&&i?","+i:"")}}function Or(e){for(var t=0,n=0;n<e.length;n++){var r=e[n];if(Sr(r)||r.if&&r.ifConditions.some(function(e){return Sr(e.block)})){t=2;break}(Tr(r)||r.if&&r.ifConditions.some(function(e){return Tr(e.block)}))&&(t=1);}return t}function Sr(e){return e.for||"template"===e.tag||"slot"===e.tag}function Tr(e){return 1===e.type&&!Ko(e.tag)}function Er(e){return 1===e.type?hr(e):jr(e)}function jr(e){return"_v("+(2===e.type?e.expression:Mr(JSON.stringify(e.text)))+")"}function Nr(e){var t=e.slotName||'"default"',n=Ar(e),r="_t("+t+(n?","+n:""),i=e.attrs&&"{"+e.attrs.map(function(e){return ii(e.name)+":"+e.value}).join(",")+"}",a=e.attrsMap["v-bind"];return!i&&!a||n||(r+=",null"),i&&(r+=","+i),a&&(r+=(i?"":",null")+","+a),r+")"}function Lr(e,t){var n=t.inlineTemplate?null:Ar(t,!0);return"_c("+e+","+$r(t)+(n?","+n:"")+")"}function Dr(e){for(var t="",n=0;n<e.length;n++){var r=e[n];t+='"'+r.name+'":'+Mr(r.value)+",";}return t.slice(0,-1)}function Mr(e){return e.replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029")}function Pr(e,t){var n=Rn(e.trim(),t);nr(n,t);var r=vr(n,t);return{ast:n,render:r.render,staticRenderFns:r.staticRenderFns}}function Rr(e,t){var n=(t.warn||Cn,En(e,"class"));n&&(e.staticClass=JSON.stringify(n));var r=Tn(e,"class",!1);r&&(e.classBinding=r);}function Ir(e){var t="";return e.staticClass&&(t+="staticClass:"+e.staticClass+","),e.classBinding&&(t+="class:"+e.classBinding+","),t}function Fr(e,t){var n=(t.warn||Cn,En(e,"style"));n&&(e.staticStyle=JSON.stringify(Na(n)));var r=Tn(e,"style",!1);r&&(e.styleBinding=r);}function Hr(e){var t="";return e.staticStyle&&(t+="staticStyle:"+e.staticStyle+","),e.styleBinding&&(t+="style:("+e.styleBinding+"),"),t}function Ur(e,t,n){Go=n;var r=t.value,i=t.modifiers,a=e.tag,o=e.attrsMap.type;return"select"===a?Jr(e,r,i):"input"===a&&"checkbox"===o?Br(e,r,i):"input"===a&&"radio"===o?zr(e,r,i):Vr(e,r,i),!0}function Br(e,t,n){var r=n&&n.number,i=Tn(e,"value")||"null",a=Tn(e,"true-value")||"true",o=Tn(e,"false-value")||"false";kn(e,"checked","Array.isArray("+t+")?_i("+t+","+i+")>-1"+("true"===a?":("+t+")":":_q("+t+","+a+")")),Sn(e,"change","var $$a="+t+",$$el=$event.target,$$c=$$el.checked?("+a+"):("+o+");if(Array.isArray($$a)){var $$v="+(r?"_n("+i+")":i)+",$$i=_i($$a,$$v);if($$c){$$i<0&&("+t+"=$$a.concat($$v))}else{$$i>-1&&("+t+"=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}}else{"+t+"=$$c}",null,!0);}function zr(e,t,n){var r=n&&n.number,i=Tn(e,"value")||"null";i=r?"_n("+i+")":i,kn(e,"checked","_q("+t+","+i+")"),Sn(e,"change",Kr(t,i),null,!0);}function Vr(e,t,n){var r=e.attrsMap.type,i=n||{},a=i.lazy,o=i.number,s=i.trim,c=a||gi&&"range"===r?"change":"input",l=!a&&"range"!==r,u="input"===e.tag||"textarea"===e.tag,f=u?"$event.target.value"+(s?".trim()":""):s?"(typeof $event === 'string' ? $event.trim() : $event)":"$event";f=o||"number"===r?"_n("+f+")":f;var d=Kr(t,f);u&&l&&(d="if($event.target.composing)return;"+d),kn(e,"value",u?"_s("+t+")":"("+t+")"),Sn(e,c,d,null,!0),(s||o||"number"===r)&&Sn(e,"blur","$forceUpdate()");}function Jr(e,t,n){var r=n&&n.number,i='Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return '+(r?"_n(val)":"val")+"})"+(null==e.attrsMap.multiple?"[0]":""),a=Kr(t,i);Sn(e,"change",a,null,!0);}function Kr(e,t){var n=jn(e);return null===n.idx?e+"="+t:"var $$exp = "+n.exp+", $$idx = "+n.idx+";if (!Array.isArray($$exp)){"+e+"="+t+"}else{$$exp.splice($$idx, 1, "+t+")}"}function qr(e,t){t.value&&kn(e,"textContent","_s("+t.value+")");}function Wr(e,t){t.value&&kn(e,"innerHTML","_s("+t.value+")");}function Zr(e,t){return t=t?l(l({},Es),t):Es,Pr(e,t)}function Gr(e,t,n){var r=(t&&t.warn||Ai,t&&t.delimiters?String(t.delimiters)+e:e);if(Ts[r])return Ts[r];var i={},a=Zr(e,t);i.render=Yr(a.render);var o=a.staticRenderFns.length;i.staticRenderFns=new Array(o);for(var s=0;s<o;s++)i.staticRenderFns[s]=Yr(a.staticRenderFns[s]);return Ts[r]=i}function Yr(e){try{return new Function(e)}catch(e){return p}}function Qr(e){if(e.outerHTML)return e.outerHTML;var t=document.createElement("div");return t.appendChild(e.cloneNode(!0)),t.innerHTML}var Xr,ei,ti=n("slot,component",!0),ni=Object.prototype.hasOwnProperty,ri=/-(\w)/g,ii=o(function(e){return e.replace(ri,function(e,t){return t?t.toUpperCase():""})}),ai=o(function(e){return e.charAt(0).toUpperCase()+e.slice(1)}),oi=/([^-])([A-Z])/g,si=o(function(e){return e.replace(oi,"$1-$2").replace(oi,"$1-$2").toLowerCase()}),ci=Object.prototype.toString,li="[object Object]",ui=function(){return!1},fi=function(e){return e},di={optionMergeStrategies:Object.create(null),silent:!1,devtools:!1,errorHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:ui,isUnknownElement:ui,getTagNamespace:p,parsePlatformTagName:fi,mustUseProp:ui,_assetTypes:["component","directive","filter"],_lifecycleHooks:["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated"],_maxUpdateCount:100},pi=/[^\w.$]/,vi="__proto__"in{},hi="undefined"!=typeof window,mi=hi&&window.navigator.userAgent.toLowerCase(),gi=mi&&/msie|trident/.test(mi),yi=mi&&mi.indexOf("msie 9.0")>0,_i=mi&&mi.indexOf("edge/")>0,bi=mi&&mi.indexOf("android")>0,$i=mi&&/iphone|ipad|ipod|ios/.test(mi),wi=function(){return void 0===Xr&&(Xr=!hi&&"undefined"!=typeof commonjsGlobal&&"server"===commonjsGlobal.process.env.VUE_ENV),Xr},Ci=hi&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__,xi=function(){function e(){r=!1;var e=n.slice(0);n.length=0;for(var t=0;t<e.length;t++)e[t]();}var t,n=[],r=!1;if("undefined"!=typeof Promise&&b(Promise)){var i=Promise.resolve(),a=function(e){console.error(e);};t=function(){i.then(e).catch(a),$i&&setTimeout(p);};}else if("undefined"==typeof MutationObserver||!b(MutationObserver)&&"[object MutationObserverConstructor]"!==MutationObserver.toString())t=function(){setTimeout(e,0);};else{var o=1,s=new MutationObserver(e),c=document.createTextNode(String(o));s.observe(c,{characterData:!0}),t=function(){o=(o+1)%2,c.data=String(o);};}return function(e,i){var a;if(n.push(function(){e&&e.call(i),a&&a(i);}),r||(r=!0,t()),!e&&"undefined"!=typeof Promise)return new Promise(function(e){a=e;})}}();ei="undefined"!=typeof Set&&b(Set)?Set:function(){function e(){this.set=Object.create(null);}return e.prototype.has=function(e){return this.set[e]===!0},e.prototype.add=function(e){this.set[e]=!0;},e.prototype.clear=function(){this.set=Object.create(null);},e}();var ki,Ai=p,Oi=0,Si=function(){this.id=Oi++,this.subs=[];};Si.prototype.addSub=function(e){this.subs.push(e);},Si.prototype.removeSub=function(e){r(this.subs,e);},Si.prototype.depend=function(){Si.target&&Si.target.addDep(this);},Si.prototype.notify=function(){for(var e=this.subs.slice(),t=0,n=e.length;t<n;t++)e[t].update();},Si.target=null;var Ti=[],Ei=Array.prototype,ji=Object.create(Ei);["push","pop","shift","unshift","splice","sort","reverse"].forEach(function(e){var t=Ei[e];y(ji,e,function(){for(var n=arguments,r=arguments.length,i=new Array(r);r--;)i[r]=n[r];var a,o=t.apply(this,i),s=this.__ob__;switch(e){case"push":a=i;break;case"unshift":a=i;break;case"splice":a=i.slice(2);}return a&&s.observeArray(a),s.dep.notify(),o});});var Ni=Object.getOwnPropertyNames(ji),Li={shouldConvert:!0,isSettingProps:!1},Di=function(e){if(this.value=e,this.dep=new Si,this.vmCount=0,y(e,"__ob__",this),Array.isArray(e)){var t=vi?C:x;t(e,ji,Ni),this.observeArray(e);}else this.walk(e);};Di.prototype.walk=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)A(e,t[n],e[t[n]]);},Di.prototype.observeArray=function(e){for(var t=0,n=e.length;t<n;t++)k(e[t]);};var Mi=di.optionMergeStrategies;Mi.data=function(e,t,n){return n?e||t?function(){var r="function"==typeof t?t.call(n):t,i="function"==typeof e?e.call(n):void 0;return r?E(r,i):i}:void 0:t?"function"!=typeof t?e:e?function(){return E(t.call(this),e.call(this))}:t:e},di._lifecycleHooks.forEach(function(e){Mi[e]=j;}),di._assetTypes.forEach(function(e){Mi[e+"s"]=N;}),Mi.watch=function(e,t){if(!t)return e;if(!e)return t;var n={};l(n,e);for(var r in t){var i=n[r],a=t[r];i&&!Array.isArray(i)&&(i=[i]),n[r]=i?i.concat(a):[a];}return n},Mi.props=Mi.methods=Mi.computed=function(e,t){if(!t)return e;if(!e)return t;var n=Object.create(null);return l(n,e),l(n,t),n};var Pi=function(e,t){return void 0===t?e:t},Ri=Object.freeze({defineReactive:A,_toString:e,toNumber:t,makeMap:n,isBuiltInTag:ti,remove:r,hasOwn:i,isPrimitive:a,cached:o,camelize:ii,capitalize:ai,hyphenate:si,bind:s,toArray:c,extend:l,isObject:u,isPlainObject:f,toObject:d,noop:p,no:ui,identity:fi,genStaticKeys:v,looseEqual:h,looseIndexOf:m,isReserved:g,def:y,parsePath:_,hasProto:vi,inBrowser:hi,UA:mi,isIE:gi,isIE9:yi,isEdge:_i,isAndroid:bi,isIOS:$i,isServerRendering:wi,devtools:Ci,nextTick:xi,get _Set(){return ei},mergeOptions:M,resolveAsset:P,warn:Ai,formatComponentName:ki,validateProp:R}),Ii=[],Fi={},Hi=!1,Ui=!1,Bi=0,zi=0,Vi=function(e,t,n,r){this.vm=e,e._watchers.push(this),r?(this.deep=!!r.deep,this.user=!!r.user,this.lazy=!!r.lazy,this.sync=!!r.sync):this.deep=this.user=this.lazy=this.sync=!1,this.cb=n,this.id=++zi,this.active=!0,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new ei,this.newDepIds=new ei,this.expression="","function"==typeof t?this.getter=t:(this.getter=_(t),this.getter||(this.getter=function(){})),this.value=this.lazy?void 0:this.get();};Vi.prototype.get=function(){$(this);var e=this.getter.call(this.vm,this.vm);return this.deep&&V(e),w(),this.cleanupDeps(),e},Vi.prototype.addDep=function(e){var t=e.id;this.newDepIds.has(t)||(this.newDepIds.add(t),this.newDeps.push(e),this.depIds.has(t)||e.addSub(this));},Vi.prototype.cleanupDeps=function(){for(var e=this,t=this.deps.length;t--;){var n=e.deps[t];e.newDepIds.has(n.id)||n.removeSub(e);}var r=this.depIds;this.depIds=this.newDepIds,this.newDepIds=r,this.newDepIds.clear(),r=this.deps,this.deps=this.newDeps,this.newDeps=r,this.newDeps.length=0;},Vi.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():z(this);},Vi.prototype.run=function(){if(this.active){var e=this.get();if(e!==this.value||u(e)||this.deep){var t=this.value;if(this.value=e,this.user)try{this.cb.call(this.vm,e,t);}catch(e){if(!di.errorHandler)throw e;di.errorHandler.call(null,e,this.vm);}else this.cb.call(this.vm,e,t);}}},Vi.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1;},Vi.prototype.depend=function(){for(var e=this,t=this.deps.length;t--;)e.deps[t].depend();},Vi.prototype.teardown=function(){var e=this;if(this.active){this.vm._isBeingDestroyed||r(this.vm._watchers,this);for(var t=this.deps.length;t--;)e.deps[t].removeSub(e);this.active=!1;}};var Ji,Ki=new ei,qi={enumerable:!0,configurable:!0,get:p,set:p},Wi=function(e,t,n,r,i,a,o){this.tag=e,this.data=t,this.children=n,this.text=r,this.elm=i,this.ns=void 0,this.context=a,this.functionalContext=void 0,this.key=t&&t.key,this.componentOptions=o,this.child=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1;},Zi=function(){var e=new Wi;return e.text="",e.isComment=!0,e},Gi=null,Yi={init:xe,prepatch:ke,insert:Ae,destroy:Oe},Qi=Object.keys(Yi),Xi=1,ea=2,ta=0;Fe(Be),ee(Be),ge(Be),_e(Be),Re(Be);var na=[String,RegExp],ra={name:"keep-alive",abstract:!0,props:{include:na,exclude:na},created:function(){this.cache=Object.create(null);},render:function(){var e=de(this.$slots.default);if(e&&e.componentOptions){var t=e.componentOptions,n=t.Ctor.options.name||t.tag;if(n&&(this.include&&!qe(this.include,n)||this.exclude&&qe(this.exclude,n)))return e;var r=null==e.key?t.Ctor.cid+(t.tag?"::"+t.tag:""):e.key;this.cache[r]?e.child=this.cache[r].child:this.cache[r]=e,e.data.keepAlive=!0;}return e},destroyed:function(){var e=this;for(var t in this.cache){var n=e.cache[t];be(n.child,"deactivated"),n.child.$destroy();}}},ia={KeepAlive:ra};We(Be),Object.defineProperty(Be.prototype,"$isServer",{get:wi}),Be.version="2.1.8";var aa,oa,sa=n("input,textarea,option,select"),ca=function(e,t){return"value"===t&&sa(e)||"selected"===t&&"option"===e||"checked"===t&&"input"===e||"muted"===t&&"video"===e},la=n("contenteditable,draggable,spellcheck"),ua=n("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,translate,truespeed,typemustmatch,visible"),fa="http://www.w3.org/1999/xlink",da=function(e){return":"===e.charAt(5)&&"xlink"===e.slice(0,5)},pa=function(e){return da(e)?e.slice(6,e.length):""},va=function(e){return null==e||e===!1},ha={svg:"http://www.w3.org/2000/svg",math:"http://www.w3.org/1998/Math/MathML"},ma=n("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template"),ga=n("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view",!0),ya=function(e){return"pre"===e},_a=function(e){return ma(e)||ga(e)},ba=Object.create(null),$a=Object.freeze({createElement:rt,createElementNS:it,createTextNode:at,createComment:ot,insertBefore:st,removeChild:ct,appendChild:lt,parentNode:ut,nextSibling:ft,tagName:dt,setTextContent:pt,setAttribute:vt}),wa={create:function(e,t){ht(t);},update:function(e,t){e.data.ref!==t.data.ref&&(ht(e,!0),ht(t));},destroy:function(e){ht(e,!0);}},Ca=new Wi("",{},[]),xa=["create","activate","update","remove","destroy"],ka={create:$t,update:$t,destroy:function(e){$t(e,Ca);}},Aa=Object.create(null),Oa=[wa,ka],Sa={create:At,update:At},Ta={create:St,update:St},Ea={create:jt,update:jt},ja={create:Nt,update:Nt},Na=o(function(e){var t={},n=/;(?![^(]*\))/g,r=/:(.+)/;return e.split(n).forEach(function(e){if(e){var n=e.split(r);n.length>1&&(t[n[0].trim()]=n[1].trim());}}),t}),La=/^--/,Da=/\s*!important$/,Ma=function(e,t,n){La.test(t)?e.style.setProperty(t,n):Da.test(n)?e.style.setProperty(t,n.replace(Da,""),"important"):e.style[Ra(t)]=n;},Pa=["Webkit","Moz","ms"],Ra=o(function(e){if(oa=oa||document.createElement("div"),e=ii(e),"filter"!==e&&e in oa.style)return e;for(var t=e.charAt(0).toUpperCase()+e.slice(1),n=0;n<Pa.length;n++){var r=Pa[n]+t;if(r in oa.style)return r}}),Ia={create:Ft,update:Ft},Fa=hi&&!yi,Ha="transition",Ua="animation",Ba="transition",za="transitionend",Va="animation",Ja="animationend";
Fa&&(void 0===window.ontransitionend&&void 0!==window.onwebkittransitionend&&(Ba="WebkitTransition",za="webkitTransitionEnd"),void 0===window.onanimationend&&void 0!==window.onwebkitanimationend&&(Va="WebkitAnimation",Ja="webkitAnimationEnd"));var Ka=hi&&window.requestAnimationFrame||setTimeout,qa=/\b(transform|all)(,|$)/,Wa=o(function(e){return{enterClass:e+"-enter",leaveClass:e+"-leave",appearClass:e+"-enter",enterToClass:e+"-enter-to",leaveToClass:e+"-leave-to",appearToClass:e+"-enter-to",enterActiveClass:e+"-enter-active",leaveActiveClass:e+"-leave-active",appearActiveClass:e+"-enter-active"}}),Za=hi?{create:Xt,activate:Xt,remove:function(e,t){e.data.show?t():Gt(e,t);}}:{},Ga=[Sa,Ta,Ea,ja,Ia,Za],Ya=Ga.concat(Oa),Qa=bt({nodeOps:$a,modules:Ya});yi&&document.addEventListener("selectionchange",function(){var e=document.activeElement;e&&e.vmodel&&on(e,"input");});var Xa={inserted:function(e,t,n){if("select"===n.tag){var r=function(){en(e,t,n.context);};r(),(gi||_i)&&setTimeout(r,0);}else"textarea"!==n.tag&&"text"!==e.type||(e._vModifiers=t.modifiers,t.modifiers.lazy||(bi||(e.addEventListener("compositionstart",rn),e.addEventListener("compositionend",an)),yi&&(e.vmodel=!0)));},componentUpdated:function(e,t,n){if("select"===n.tag){en(e,t,n.context);var r=e.multiple?t.value.some(function(t){return tn(t,e.options)}):t.value!==t.oldValue&&tn(t.value,e.options);r&&on(e,"change");}}},eo={bind:function(e,t,n){var r=t.value;n=sn(n);var i=n.data&&n.data.transition,a=e.__vOriginalDisplay="none"===e.style.display?"":e.style.display;r&&i&&!yi?(n.data.show=!0,Zt(n,function(){e.style.display=a;})):e.style.display=r?a:"none";},update:function(e,t,n){var r=t.value,i=t.oldValue;if(r!==i){n=sn(n);var a=n.data&&n.data.transition;a&&!yi?(n.data.show=!0,r?Zt(n,function(){e.style.display=e.__vOriginalDisplay;}):Gt(n,function(){e.style.display="none";})):e.style.display=r?e.__vOriginalDisplay:"none";}},unbind:function(e,t,n,r,i){i||(e.style.display=e.__vOriginalDisplay);}},to={model:Xa,show:eo},no={name:String,appear:Boolean,css:Boolean,mode:String,type:String,enterClass:String,leaveClass:String,enterToClass:String,leaveToClass:String,enterActiveClass:String,leaveActiveClass:String,appearClass:String,appearActiveClass:String,appearToClass:String},ro={name:"transition",props:no,abstract:!0,render:function(e){var t=this,n=this.$slots.default;if(n&&(n=n.filter(function(e){return e.tag}),n.length)){var r=this.mode,i=n[0];if(fn(this.$vnode))return i;var a=cn(i);if(!a)return i;if(this._leaving)return un(e,i);var o=a.key=null==a.key||a.isStatic?"__v"+(a.tag+this._uid)+"__":a.key,s=(a.data||(a.data={})).transition=ln(this),c=this._vnode,u=cn(c);if(a.data.directives&&a.data.directives.some(function(e){return"show"===e.name})&&(a.data.show=!0),u&&u.data&&!dn(a,u)){var f=u&&(u.data.transition=l({},s));if("out-in"===r)return this._leaving=!0,ae(f,"afterLeave",function(){t._leaving=!1,t.$forceUpdate();},o),un(e,i);if("in-out"===r){var d,p=function(){d();};ae(s,"afterEnter",p,o),ae(s,"enterCancelled",p,o),ae(f,"delayLeave",function(e){d=e;},o);}}return i}}},io=l({tag:String,moveClass:String},no);delete io.mode;var ao={props:io,render:function(e){for(var t=this.tag||this.$vnode.data.tag||"span",n=Object.create(null),r=this.prevChildren=this.children,i=this.$slots.default||[],a=this.children=[],o=ln(this),s=0;s<i.length;s++){var c=i[s];c.tag&&null!=c.key&&0!==String(c.key).indexOf("__vlist")&&(a.push(c),n[c.key]=c,(c.data||(c.data={})).transition=o);}if(r){for(var l=[],u=[],f=0;f<r.length;f++){var d=r[f];d.data.transition=o,d.data.pos=d.elm.getBoundingClientRect(),n[d.key]?l.push(d):u.push(d);}this.kept=e(t,null,l),this.removed=u;}return e(t,null,a)},beforeUpdate:function(){this.__patch__(this._vnode,this.kept,!1,!0),this._vnode=this.kept;},updated:function(){var e=this.prevChildren,t=this.moveClass||(this.name||"v")+"-move";if(e.length&&this.hasMove(e[0].elm,t)){e.forEach(pn),e.forEach(vn),e.forEach(hn);document.body.offsetHeight;e.forEach(function(e){if(e.data.moved){var n=e.elm,r=n.style;zt(n,t),r.transform=r.WebkitTransform=r.transitionDuration="",n.addEventListener(za,n._moveCb=function e(r){r&&!/transform$/.test(r.propertyName)||(n.removeEventListener(za,e),n._moveCb=null,Vt(n,t));});}});}},methods:{hasMove:function(e,t){if(!Fa)return!1;if(null!=this._hasMove)return this._hasMove;zt(e,t);var n=Kt(e);return Vt(e,t),this._hasMove=n.hasTransform}}},oo={Transition:ro,TransitionGroup:ao};Be.config.isUnknownElement=tt,Be.config.isReservedTag=_a,Be.config.getTagNamespace=et,Be.config.mustUseProp=ca,l(Be.options.directives,to),l(Be.options.components,oo),Be.prototype.__patch__=hi?Qa:p,Be.prototype.$mount=function(e,t){return e=e&&hi?nt(e):void 0,this._mount(e,t)},setTimeout(function(){di.devtools&&Ci&&Ci.emit("init",Be);},0);var so,co=!!hi&&mn("\n","&#10;"),lo=n("area,base,br,col,embed,frame,hr,img,input,isindex,keygen,link,meta,param,source,track,wbr",!0),uo=n("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source",!0),fo=n("address,article,aside,base,blockquote,body,caption,col,colgroup,dd,details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,title,tr,track",!0),po=/([^\s"'<>\/=]+)/,vo=/(?:=)/,ho=[/"([^"]*)"+/.source,/'([^']*)'+/.source,/([^\s"'=<>`]+)/.source],mo=new RegExp("^\\s*"+po.source+"(?:\\s*("+vo.source+")\\s*(?:"+ho.join("|")+"))?"),go="[a-zA-Z_][\\w\\-\\.]*",yo="((?:"+go+"\\:)?"+go+")",_o=new RegExp("^<"+yo),bo=/^\s*(\/?)>/,$o=new RegExp("^<\\/"+yo+"[^>]*>"),wo=/^<!DOCTYPE [^>]+>/i,Co=/^<!--/,xo=/^<!\[/,ko=!1;"x".replace(/x(.)?/g,function(e,t){ko=""===t;});var Ao,Oo,So,To,Eo,jo,No,Lo,Do,Mo,Po,Ro,Io,Fo,Ho,Uo,Bo,zo,Vo,Jo,Ko,qo,Wo,Zo,Go,Yo=n("script,style",!0),Qo=function(e){return"lang"===e.name&&"html"!==e.value},Xo=function(e,t,n){return!!Yo(e)||!(!t||1!==n.length)&&!("template"===e&&!n[0].attrs.some(Qo))},es={},ts=/&lt;/g,ns=/&gt;/g,rs=/&#10;/g,is=/&amp;/g,as=/&quot;/g,os=/\{\{((?:.|\n)+?)\}\}/g,ss=/[-.*+?^${}()|[\]\/\\]/g,cs=o(function(e){var t=e[0].replace(ss,"\\$&"),n=e[1].replace(ss,"\\$&");return new RegExp(t+"((?:.|\\n)+?)"+n,"g")}),ls=/^v-|^@|^:/,us=/(.*?)\s+(?:in|of)\s+(.*)/,fs=/\((\{[^}]*\}|[^,]*),([^,]*)(?:,([^,]*))?\)/,ds=/^:|^v-bind:/,ps=/^@|^v-on:/,vs=/:(.*)$/,hs=/\.[^.]+/g,ms=o(gn),gs=/^xmlns:NS\d+/,ys=/^NS\d+:/,_s=o(rr),bs=/^\s*([\w$_]+|\([^)]*?\))\s*=>|^function\s*\(/,$s=/^\s*[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['.*?']|\[".*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*\s*$/,ws={esc:27,tab:9,enter:13,space:32,up:38,left:37,right:39,down:40,delete:[8,46]},Cs={stop:"$event.stopPropagation();",prevent:"$event.preventDefault();",self:"if($event.target !== $event.currentTarget)return;",ctrl:"if(!$event.ctrlKey)return;",shift:"if(!$event.shiftKey)return;",alt:"if(!$event.altKey)return;",meta:"if(!$event.metaKey)return;"},xs={bind:pr,cloak:p},ks={staticKeys:["staticClass"],transformNode:Rr,genData:Ir},As={staticKeys:["staticStyle"],transformNode:Fr,genData:Hr},Os=[ks,As],Ss={model:Ur,text:qr,html:Wr},Ts=Object.create(null),Es={expectHTML:!0,modules:Os,staticKeys:v(Os),directives:Ss,isReservedTag:_a,isUnaryTag:lo,mustUseProp:ca,getTagNamespace:et,isPreTag:ya},js=o(function(e){var t=nt(e);return t&&t.innerHTML}),Ns=Be.prototype.$mount;return Be.prototype.$mount=function(e,t){if(e=e&&nt(e),e===document.body||e===document.documentElement)return this;var n=this.$options;if(!n.render){var r=n.template;if(r)if("string"==typeof r)"#"===r.charAt(0)&&(r=js(r));else{if(!r.nodeType)return this;r=r.innerHTML;}else e&&(r=Qr(e));if(r){var i=Gr(r,{warn:Ai,shouldDecodeNewlines:co,delimiters:n.delimiters},this),a=i.render,o=i.staticRenderFns;n.render=a,n.staticRenderFns=o;}}return Ns.call(this,e,t)},Be.compile=Gr,Be});
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

var VoteButtons = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"post__vote-buttons"},[_c('button',{staticClass:"post__vote-down",on:{"click":function($event){_vm.$emit('downvote');}}},[_vm._v("-")]),_vm._v(" "),_c('span',{staticClass:"post__vote-score"},[_vm._v(_vm._s(_vm._f("format")(_vm.score)))]),_vm._v(" "),_c('button',{staticClass:"post__vote-up",on:{"click":function($event){_vm.$emit('upvote');}}},[_vm._v("+")])])},staticRenderFns: [],
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

var Comments = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"post__comments"},[_c('h1',[_vm._v("Comments")]),_vm._l((_vm.comments),function(comment){return _c('div',{staticClass:"post__comment"},[_c('h2',{staticClass:"post__comment-author"},[_vm._v(_vm._s(comment.username)+" wrote")]),_c('p',{staticClass:"post__comment-text"},[_vm._v(_vm._s(comment.text))]),_c('vote-buttons',{attrs:{"score":comment.score},on:{"upvote":function($event){comment.score++;},"downvote":function($event){comment.score--;}}})],1)})],2)},staticRenderFns: [],
  props: ['comments'],
  components: { VoteButtons }
};

var App = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"post"},[_c('h1',{staticClass:"post__title"},[_vm._v("A post about priorities and scheduling")]),_c('a',{staticClass:"post__link",attrs:{"href":"#"}},[_vm._v("http://example.com/post")]),_vm._m(0),_c('comments',{attrs:{"comments":_vm.commentData}})],1)},staticRenderFns: [function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"post__description"},[_c('p',[_vm._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed orci mauris, euismod quis imperdiet eu, lacinia in leo. Mauris in orci sit amet eros finibus molestie. Vivamus laoreet, nibh eget ultrices consequat, leo mauris suscipit libero, eget feugiat enim turpis ac neque. Nam venenatis dolor ac posuere rhoncus.")]),_c('p',[_vm._v("In eget finibus sapien, sit amet tempus augue. Pellentesque eu interdum nulla, sit amet dictum turpis. Sed ut lorem quis purus aliquet egestas. Nulla id risus ex. Morbi et lacinia risus. Integer eget ornare arcu. Donec purus est, dignissim a ante a, lacinia placerat massa. Donec quis lacinia lorem.")])])}],
  components: { Comments },
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
