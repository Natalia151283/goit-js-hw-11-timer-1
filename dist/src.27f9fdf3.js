parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"iMte":[function(require,module,exports) {

},{}],"fx60":[function(require,module,exports) {

},{"../style.css":"iMte"}],"Focm":[function(require,module,exports) {
"use strict";function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function r(e,r,a){return r&&t(e.prototype,r),a&&t(e,a),e}require("./scss/main.scss");var a=document.querySelector("#timer-1"),n=function(){function t(r){var a=r.selector,n=r.targetDate;e(this,t),this.targetDate=n,this.selector=document.querySelector(a),this.start()}return r(t,[{key:"start",value:function(){var e=this;this.isActive||(this.isActive=!0,this.intervalId=setInterval(function(){var t=Date.now(),r=e.targetDate-t,a=e.getTime(r);console.log(a),e.selector.querySelector('span[data-value="days"]').textContent=a.days,e.selector.querySelector('span[data-value="hours"]').textContent=a.hours,e.selector.querySelector('span[data-value="mins"]').textContent=a.mins,e.selector.querySelector('span[data-value="secs"]').textContent=a.secs},1e3))}},{key:"getTime",value:function(e){return{days:this.pad(Math.floor(e/864e5)),hours:this.pad(Math.floor(e%864e5/36e5)),mins:this.pad(Math.floor(e%36e5/6e4)),secs:this.pad(Math.floor(e%6e4/1e3))}}},{key:"pad",value:function(e){return String(e).padStart(2,"0")}}]),t}();new n({selector:"#timer-1",targetDate:new Date("Jul 17, 2021")});
},{"./scss/main.scss":"fx60"}]},{},["Focm"], null)
//# sourceMappingURL=/goit-js-hw-11-timer/src.27f9fdf3.js.map