(self.webpackChunkgatsby_starter_lander=self.webpackChunkgatsby_starter_lander||[]).push([[351],{8163:function(t,e,o){var r;"undefined"!=typeof self&&self,r=function(t){return function(t){var e={};function o(r){if(e[r])return e[r].exports;var l=e[r]={i:r,l:!1,exports:{}};return t[r].call(l.exports,l,l.exports,o),l.l=!0,l.exports}return o.m=t,o.c=e,o.d=function(t,e,r){o.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:r})},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=0)}([function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r,l=o(1),n=(r=l)&&r.__esModule?r:{default:r};e.default=n.default},function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r,l=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(t[r]=o[r])}return t},n=function(){function t(t,e){for(var o=0;o<e.length;o++){var r=e[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,o,r){return o&&t(e.prototype,o),r&&t(e,r),e}}(),i=o(2),s=(r=i)&&r.__esModule?r:{default:r},c=function(t){function e(t){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var o=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return o.smoothScroll=o.smoothScroll.bind(o),o}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),n(e,[{key:"componentDidMount",value:function(){o(3).polyfill()}},{key:"smoothScroll",value:function(t){var e=this;t.preventDefault();var o=function(){return 0};void 0!==this.props.offset&&(o=this.props.offset&&this.props.offset.constructor&&this.props.offset.apply?this.props.offset:function(){return parseInt(e.props.offset)});var r=t.currentTarget.getAttribute("href").slice(1),l=document.getElementById(r).getBoundingClientRect().top+window.pageYOffset;window.scroll({top:l-o(),behavior:"smooth"}),this.props.onClick&&this.props.onClick(t)}},{key:"render",value:function(){var t=this.props,e=(t.offset,function(t,e){var o={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(o[r]=t[r]);return o}(t,["offset"]));return s.default.createElement("a",l({},e,{onClick:this.smoothScroll}))}}]),e}(i.Component);e.default=c},function(e,o){e.exports=t},function(t,e,o){!function(){"use strict";t.exports={polyfill:function(){var t=window,e=document;if(!("scrollBehavior"in e.documentElement.style)||!0===t.__forceSmoothScrollPolyfill__){var o,r=t.HTMLElement||t.Element,l={scroll:t.scroll||t.scrollTo,scrollBy:t.scrollBy,elementScroll:r.prototype.scroll||s,scrollIntoView:r.prototype.scrollIntoView},n=t.performance&&t.performance.now?t.performance.now.bind(t.performance):Date.now,i=(o=t.navigator.userAgent,new RegExp(["MSIE ","Trident/","Edge/"].join("|")).test(o)?1:0);t.scroll=t.scrollTo=function(){void 0!==arguments[0]&&(!0!==c(arguments[0])?h.call(t,e.body,void 0!==arguments[0].left?~~arguments[0].left:t.scrollX||t.pageXOffset,void 0!==arguments[0].top?~~arguments[0].top:t.scrollY||t.pageYOffset):l.scroll.call(t,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:t.scrollX||t.pageXOffset,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:t.scrollY||t.pageYOffset))},t.scrollBy=function(){void 0!==arguments[0]&&(c(arguments[0])?l.scrollBy.call(t,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:0,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:0):h.call(t,e.body,~~arguments[0].left+(t.scrollX||t.pageXOffset),~~arguments[0].top+(t.scrollY||t.pageYOffset)))},r.prototype.scroll=r.prototype.scrollTo=function(){if(void 0!==arguments[0])if(!0!==c(arguments[0])){var t=arguments[0].left,e=arguments[0].top;h.call(this,this,void 0===t?this.scrollLeft:~~t,void 0===e?this.scrollTop:~~e)}else{if("number"==typeof arguments[0]&&void 0===arguments[1])throw new SyntaxError("Value could not be converted");l.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left:"object"!=typeof arguments[0]?~~arguments[0]:this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top:void 0!==arguments[1]?~~arguments[1]:this.scrollTop)}},r.prototype.scrollBy=function(){void 0!==arguments[0]&&(!0!==c(arguments[0])?this.scroll({left:~~arguments[0].left+this.scrollLeft,top:~~arguments[0].top+this.scrollTop,behavior:arguments[0].behavior}):l.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left+this.scrollLeft:~~arguments[0]+this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top+this.scrollTop:~~arguments[1]+this.scrollTop))},r.prototype.scrollIntoView=function(){if(!0!==c(arguments[0])){var o=p(this),r=o.getBoundingClientRect(),n=this.getBoundingClientRect();o!==e.body?(h.call(this,o,o.scrollLeft+n.left-r.left,o.scrollTop+n.top-r.top),"fixed"!==t.getComputedStyle(o).position&&t.scrollBy({left:r.left,top:r.top,behavior:"smooth"})):t.scrollBy({left:n.left,top:n.top,behavior:"smooth"})}else l.scrollIntoView.call(this,void 0===arguments[0]||arguments[0])}}function s(t,e){this.scrollLeft=t,this.scrollTop=e}function c(t){if(null===t||"object"!=typeof t||void 0===t.behavior||"auto"===t.behavior||"instant"===t.behavior)return!0;if("object"==typeof t&&"smooth"===t.behavior)return!1;throw new TypeError("behavior member of ScrollOptions "+t.behavior+" is not a valid value for enumeration ScrollBehavior.")}function a(t,e){return"Y"===e?t.clientHeight+i<t.scrollHeight:"X"===e?t.clientWidth+i<t.scrollWidth:void 0}function f(e,o){var r=t.getComputedStyle(e,null)["overflow"+o];return"auto"===r||"scroll"===r}function u(t){var e=a(t,"Y")&&f(t,"Y"),o=a(t,"X")&&f(t,"X");return e||o}function p(t){var o;do{o=(t=t.parentNode)===e.body}while(!1===o&&!1===u(t));return o=null,t}function d(e){var o,r,l,i,s=(n()-e.startTime)/468;i=s=s>1?1:s,o=.5*(1-Math.cos(Math.PI*i)),r=e.startX+(e.x-e.startX)*o,l=e.startY+(e.y-e.startY)*o,e.method.call(e.scrollable,r,l),r===e.x&&l===e.y||t.requestAnimationFrame(d.bind(t,e))}function h(o,r,i){var c,a,f,u,p=n();o===e.body?(c=t,a=t.scrollX||t.pageXOffset,f=t.scrollY||t.pageYOffset,u=l.scroll):(c=o,a=o.scrollLeft,f=o.scrollTop,u=s),d({scrollable:c,method:u,startTime:p,startX:a,startY:f,x:r,y:i})}}}}()}])},t.exports=r(o(7294))},7004:function(t,e,o){"use strict";o(7294);var r=o(3431),l={default:"py-3 px-8",lg:"py-4 px-12",xl:"py-5 px-16 text-lg"};e.Z=function(t){var e=t.children,o=t.className,n=void 0===o?"":o,i=t.size,s=t.href,c=void 0===s?null:s,a=t.click,f=void 0===a?function(){}:a;return c?(0,r.tZ)("a",{href:c,className:"\n  "+(l[i]||l.default)+"\n  "+n+"\n  bg-primary-default\n  hover:bg-primary-darker\n  rounded\n  text-white\n  hover:text-white\n"},e):(0,r.tZ)("button",{type:"button",className:"\n        "+(l[i]||l.default)+"\n        "+n+"\n        bg-primary-default\n        hover:bg-primary-darker\n        rounded\n        text-white\n    ",onClick:f},e)}},2813:function(t,e,o){"use strict";o.d(e,{Z:function(){return s}});var r=o(7294),l=(o(8163),o(7004)),n=o(3431),i=function(){return(0,n.tZ)("header",{className:"z-10 sticky top-0 bg-white shadow"},(0,n.tZ)("div",{className:"container flex flex-row justify-between items-center mx-auto py-4 px-8"},(0,n.tZ)("div",{className:"bg-black w-12 mr-3 text-white p-2 items-center text-2xl"},"£T"),(0,n.tZ)("div",{className:"hidden md:block"},"Totnes Pound"),(0,n.tZ)("div",{className:"flex items-right space-x-4"},(0,n.tZ)(l.Z,{className:"text-sm",href:"#get-involved"},"Get involved"))))},s=function(t){var e=t.children;return(0,n.tZ)(r.Fragment,null,(0,n.tZ)(i,null),(0,n.tZ)("main",{className:"text-gray-900"},e))}}}]);
//# sourceMappingURL=commons-5a06e5c84822366c9490.js.map