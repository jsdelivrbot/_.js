//# sourceMappingURL=ar.js.map
//# sourceMappingURL=ar.js.map
(function(d){d._lastObj=null;d._modLoaded=[];d._eventStore=[];var h=function(a){return new l(a)},l=function(a){var c="undefined"!==typeof exports||"undefined"===typeof a?[]:-1===a.indexOf(">")?document.querySelectorAll(a):[];this.length=c.length;this.param=a;this.version="0.0.8b";this.revision="r161103";this.fullversion=this.version+this.revision;this.isBeta=this.version.match(/b/g);this.isAlpha=this.version.match(/a/g);this.isCompiled=!1;this.isStable=!this.isBeta&&!this.isAlpha;this.ScriptRX="<script[^>]*>([\\S\\s]*?)\x3c/script\\s*>";
this.JSONRX="/^/*-secure-([sS]*)*/s*$/";this.nodeJS="undefined"!==typeof exports;this.emoij={nerd:"\ud83e\udd13",smilie:"\ud83d\ude03",dsmilie:"\ud83d\ude00",heart:"\u2764\ufe0f",brokenheart:"\ud83d\udc94"};this.objectclass={"[object Boolean]":"boolean","[object Number":"number","[object String":"string","[object Function]":"function","[object Array]":"array","[object Date]":"date","[object RegExp]":"regexp","[object Object]":"object","[object Error]":"error"};this.cconsole={reset:{start:"\u001b[0m",
stop:"\u001b[0m"},bold:{start:"\u001b[1m",stop:"\u001b[22m"},dim:{start:"\u001b[2m",stop:"\u001b[22m"},italic:{start:"\u001b[3m",stop:"\u001b[23m"},underline:{start:"\u001b[4m",stop:"\u001b[24m"},inverse:{start:"\u001b[7m",stop:"\u001b[27m"},hidden:{start:"\u001b[8m",stop:"\u001b[28m"},strikethrough:{start:"\u001b[9m",stop:"\u001b[29m"},color:{standard:"\u001b[39m",black:"\u001b[30m",red:"\u001b[31m",green:"\u001b[32m",yellow:"\u001b[33m",blue:"\u001b[34m",magenta:"\u001b[35m",cyan:"\u001b[36m",white:"\u001b[37m",
gray:"\u001b[90m"},background:{standard:"\u001b[49m",black:"\u001b[40m",red:"\u001b[41m",green:"\u001b[42m",yellow:"\u001b[43m",blue:"\u001b[44m",magenta:"\u001b[45m",cyan:"\u001b[46m",white:"\u001b[47m"}};a=this.nodeJS?{userAgent:"Node.js Node.js Node.js",maxTouchPoints:0,msMaxTouchPoints:0}:navigator;var b="Chrome"===a.userAgent.split(" ")[a.userAgent.split(" ").length-2].split("/")[0]?a.userAgent.split(" ")[a.userAgent.split(" ").length-2].split("/")[0]:a.userAgent.split(" ")[a.userAgent.split(" ").length-
1].split("/")[0];this.browser={ie:-1!==a.userAgent.indexOf("Trident"),firefox:"Firefox"===b,safari:"Safari"===b,opera:"OPR"===b,edge:"Edge"===b,chrome:"Chrome"===b,userAgent:a.userAgent,supportTouch:"ontouchstart"in d||0<a.maxTouchPoints||0<a.msMaxTouchPoints};this.getBrowser=b;for(a=0;a<this.length;a++)this[a]=c[a],d._lastObj=c[a];return this};h.fn=l.prototype={_:function(a){return this[a]},emulatejQuery:function(){d.$=d._;d._$=d._;d.jQuery=d._;return d._jQuery=d._},$:function(a){this.nodeJS?"TEST"!==
a&&console.log("Thanks for using '_.js'!\n"+decodeURIComponent("%F0%9F%92%99")):(d.alert("Hi"),d.confirm("Did you know that i'm not jQuery?")?d.alert("Why did you even try this?"):d.alert("Nope, i'm not jQuery"),d.alert("Thanks for using '_.js'!\n"+decodeURIComponent("%F0%9F%92%99")))},extend:function(){var a,c,b,e,d,f=arguments[0]||{},k=1,n=arguments.length,h=!1;"boolean"===typeof f&&(h=f,f=arguments[k]||{},k++);"object"===typeof f||this.isFunction(f)||(f={});k===n&&(f=this,k--);for(;k<n;k++)if(null!=
(d=arguments[k]))for(e in d)a=f[e],b=d[e],f!==b&&(h&&b&&(this.isPlainObject(b)||(c=this.isArray(b)))?(c?(c=!1,a=a&&this.isArray(a)?a:[]):a=a&&this.isPlainObject(a)?a:{},f[e]=this.extend(h,a,b)):void 0!==b&&(f[e]=b));return f},isArray:function(a){return(this.nodeJS?!1:a.isArray)||"array"===this.type(a)},getCookie:function(a){if(this.nodeJS)return!1;var c=document.cookie.indexOf(a+"="),b=c+a.length+1;if(!c&&a!==document.cookie.substring(0,a.length)||-1===c)return null;a=document.cookie.indexOf(";",
b);-1===a&&(a=document.cookie.length);return unescape(document.cookie.substring(b,a))},setCookie:function(a,c){if(this.nodeJS)return!1;if(!e)for(var b=d.location.hostname,b=e.split("."),e=".",g=1;g<b.lenth;g++)e+=b[g];b=new Date;b.setTime(b.getTime());if("string"!==typeof f)var f=1;if("string"!==typeof k)var k="/";if("boolean"!==typeof h)var h=!1;f&&(f*=864E5);b=new Date(b.getTime()+f);document.cookie=a+"="+escape(c)+(f?";expires="+b.toGMTString():"")+(k?";path="+k:"")+(e?";domain="+e:"")+(h?";secure":
"");return null},deleteCookie:function(a){if(this.nodeJS)return!1;if(this.getCookie(a)){if(!b)for(var c=d.location.hostname,c=b.split("."),b=".",e=1;e<c.lenth;e++)b+=c[e];document.cookie=a+"=;expires=Thu, 01-Jan-1970 00:00:01 GMT";return!0}return!1},toggle:function(){if(this.nodeJS)return!1;for(var a=this.length;a--;)this[a].style.display="none"!==this[a].style.display?"none":"";return null},on:function(a,c){if(this.nodeJS)return!1;var b=this.length;if("function"===typeof c)for(;b--;)this[b].addEventListener(a,
c),d._eventStore.push([d._eventStore.length+1,this[b],a,c]);else for(;b--;){var e=[],g;for(g in d._eventStore)g=d._eventStore[g],this[b]===g[1]&&a===g[2]?g[1].removeEventListener(g[2],g[3]):e.push(g);d._eventStore=e}return null},noop:function(){},supportTouch:function(){return this.nodeJS?!1:"ontouchstart"in window||0<navigator.maxTouchPoints||0<navigator.msMaxTouchPoints},appendTo:function(a){if(this.nodeJS)return!1;"body"===a?document.body.innerHTML+=this.param:"head"===a?document.head.innerHTML+=
this.param:"."===a.substr(0,1)||"#"===a.substr(0,1)?h(a).html(this.param,!0):this._error("appendTo");return null},_error:function(a,c){"#IGNORE#ME"!==a&&("undefined"===typeof c?console.error("_.js Error: Invalid usage of function"):console.error("_.js Error: "+c),this.startsWith(a,"#")?console.error("Please see: https://github.com/wdg/_.js/wiki/module_"+a.substr(1)):this.isBeta?console.error("Please see: https://github.com/wdg/_.js/wiki/flbeta_function_"+a):console.error("Please see: https://github.com/wdg/_.js/wiki/function_"+
a));return null},deprecated:function(a,c,b,e){console.warn(this.format("\u26a0\ufe0f  function '%s' is deprecated since v%s %s\n               this function will be removed in v%s %s\n%s",a,c,"(https://github.com/wdg/_.js/wiki/changed_in_"+c.replace(/(\.|b|a)/g,"")+")",b,"(https://github.com/wdg/_.js/wiki/changed_in_"+b.replace(/(\.|b|a)/g,"")+")","undefined"===typeof e?"\n There's no alternative for "+a:"\nAlternative: _."+e+"(...) See https://github.com/wdg/_.js/wiki/"+(this.isBeta?"flbeta_":"")+
"function_"+e+" for more information"));return null},error:function(a){throw Error(a);},isFunction:function(a){return"function"===this.type(a)},type:function(a){return null==a?a+"":"object"===typeof a||"function"===typeof a?this.objectclass[Object.prototype.toString.call(a)]||"object":typeof a},escapeForRegex:function(a){return a.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,"\\$1").replace(/\x08/g,"\\x08")},isPlainObject:function(a){var c,b={}.hasOwnProperty;if(!a||"object"!==this.type(a)||a.nodeType)return!1;
try{if(a.constructor&&!b.call(a,"constructor")&&!b.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(e){return!1}if({}.ownLast)for(c in a)return b.call(a,c);for(c in a);return void 0===c||b.call(a,c)},require:function(a,c,b){if(!this.nodeJS)if("undefined"===typeof b&&(b=!1),"object"===typeof a)for(var e=a.length-1;0<=e;e--)if(-1===d._modLoaded.indexOf(a[e])){d._modLoaded.push(a[e]);a[e].match(/\.js/g)||(a[e]+=".js");this.startsWith(a[e],"_")&&!b&&(a[e]="https://raw.githubusercontent.com/wdg/_.js/master/latest/modules/"+
a[e].toLowerCase());var g=document.createElement("script");g.type="text/javascript";g.src=a[e];1===e&&(f.onreadystatechange="",f.onload=setTimeout(function(a){h._copy_js();a()},10,c));document.head.appendChild(g)}else h._copy_js(),c();else if("string"===typeof a)if(-1===d._modLoaded.indexOf(a)){d._modLoaded.push(a);a.match(/\.js/g)||(a+=".js");this.startsWith(a,"_")&&!b&&(a="https://raw.githubusercontent.com/wdg/_.js/master/latest/modules/"+a.toLowerCase());var f=document.createElement("script");
f.type="text/javascript";f.src=a;f.onreadystatechange="";f.onload=setTimeout(function(a){h._copy_js();a()},10,c);document.head.appendChild(f)}else h._copy_js(),c();else console.error("Please use only a array, or a string.");return null},format:function(){var a=arguments,c=1;return a[0].replace(/%((%)|s|d)/g,function(b){var e=null;if(b[2])e=b[2];else{e=a[c];switch(b){case "%d":e=parseFloat(e),isNaN(e)&&(e=0)}c++}return e})},hide:function(){this.deprecated("hide","0.0.8","0.1.0","toggle");if(this.nodeJS)return!1;
for(var a=this.length;a--;)d._lastObj=this[a],this[a].style.display="none";return this},html:function(a,c){if(this.nodeJS)return!1;for(var b=this.length;b--;){d._lastObj=this[b];if("undefined"===typeof a)return this[b].innerHTML;this[b].innerHTML="undefined"===typeof c?a:this[b].innerHTML+a}return this},show:function(){this.deprecated("show","0.0.8","0.1.0","toggle");if(this.nodeJS)return!1;for(var a=this.length;a--;)d._lastObj=this[a],this[a].style.display="block";return this},framebreak:function(){this.nodeJS||
d.top.location===d.location||(d.top.location.href=document.location.href);return!1},ajaxPOST:function(a,c){if(!this.nodeJS)for(var b=this.length;b--;){d._lastObj=this[b];var e,g=this[b];e=d.XMLHttpRequest?new d.XMLHttpRequest:new d.ActiveXObject("Microsoft.XMLHTTP");var f=new FormData(a);e.open("POST",a.action,!0);e.upload.onprogress=function(a){a.lengthComputable&&console.log("Progress = "+a.loaded/a.total*100+"%")};e.onreadystatechange=function(){if(4===e.readyState&&200===e.status){g.innerHTML=
e.responseText;for(var a=g.getElementsByTagName("script"),b=0,c=a.length;b<c;b++)eval(a[b].innerHTML);a=g.getElementsByTagName("form");b=0;for(c=a.length;b<c;b++)"post"===a[b].method.toLowerCase()&&a[b].setAttribute("onsubmit","event.preventDefault();_('."+g.className+"').ajaxPOST(this);")}};e.send(f)}return!1},ajax:function(a,c){if(!this.nodeJS)for(var b=this.length;b--;){d._lastObj=this[b];var e,g=this[b];e=d.XMLHttpRequest?new d.XMLHttpRequest:new d.ActiveXObject("Microsoft.XMLHTTP");e.onreadystatechange=
function(){if(4===e.readyState&&200===e.status){g.innerHTML=e.responseText;for(var a=g.getElementsByTagName("script"),b=0,c=a.length;b<c;b++)eval(a[b].innerHTML);a=g.getElementsByTagName("form");b=0;for(c=a.length;b<c;b++)"post"===a[b].method.toLowerCase()&&a[b].setAttribute("onsubmit","event.preventDefault();_('."+g.className+"').ajaxPOST(this);")}};e.open("GET",a,!0);e.send()}return!1},noConflict:function(){"object"===typeof p&&(d._=p);return h},isLocal:function(){return this.nodeJS?!0:"file:"!==
d.location.protocol?d.location.href.match(/(localhost|127\.0\.0\.1|::1)/g)?!0:!1:!0},requireSSL:function(){this.nodeJS||"https:"===d.location.protocol||"file:"===d.location.protocol||d.location.href.match(/(localhost|127\.0\.0\.1|::1)/g)||(d.location.href="https:"+d.location.href.substring(d.location.protocol.length))},loadExtension:function(a,c){this.deprecated("loadExtension","0.0.4","0.1.0","require");return this.require(a,c)},isUndefined:function(a){return"undefined"===typeof a},isEmpty:function(a){return""===
a},isBlank:function(a){return/^\s*$/.test(a)},getFileSize:function(a,c){if(!this.nodeJS)for(var b=this.length;b--;){var e;e=d.XMLHttpRequest?new d.XMLHttpRequest:new d.ActiveXObject("Microsoft.XMLHTTP");e.open("HEAD",a,!0);e.onreadystatechange=function(){4===e.readyState&&(200===e.status?"function"===typeof c?c(e.getResponseHeader("Content-Length")/1024):h(c).html(e.getResponseHeader("Content-Length")/1024):"function"===typeof c?c("Error while getting filesize"):h(c).html("Error while getting filesize"))};
e.send(null)}return null},stripTags:function(){if(!this.nodeJS)for(var a=this.length;a--;)d._lastObj=this[a],this[a].innerHTML=this[a].innerHTML.replace(/<\w+(\s+("[^"]*"|'[^']*'|[^>])+)?>|<\/\w+>/gi,"");return this.nodeJS?!1:null},stripScripts:function(){if(!this.nodeJS)for(var a=this.length;a--;)d._lastObj=this[a],this[a].innerHTML=this[a].innerHTML.replace(new RegExp(this.ScriptRX,"img"),"");return this.nodeJS?!1:null},css:function(a,c){if(this.nodeJS)return!1;for(var b=this.length;b--;){d._lastObj=
this[b];if(this.isUndefined(c))return d.getComputedStyle(this[b]).getPropertyValue(a);a.replace(/-/g,"");this[b].setAttribute("style",a+":"+c+";");return this}},escapeHTML:function(a){return a.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")},unescapeHTML:function(a){return a.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&")},toArray:function(a){if("string"===typeof a)return a.split("");var c=[],b;for(b in a)a.hasOwnProperty(b)&&c.push(a[b]);return c},runTest:function(a,
c){return"function"!==typeof a?String(a)===String(c):String(a())===String(c)},includes:function(a,c){return-1<String(a).indexOf(c)},startsWith:function(a,c){return 0===a.lastIndexOf(c,0)},endsWith:function(a,c){var b=a.length-c.length;return 0<=b&&a.indexOf(c,b)===b},capitalize:function(a){return a.charAt(0).toUpperCase()+a.substring(1).toLowerCase()},camelize:function(a){return a.replace(/-+(.)?/g,function(a,b){return b?b.toUpperCase():""})},scrollToBottom:function(){if(this.nodeJS)return!1;for(var a=
this.length;a--;)d._lastObj=this[a],this[a].scrollTop=this[a].scrollHeight;return!0},scrollToTop:function(){if(this.nodeJS)return!1;for(var a=this.length;a--;)d._lastObj=this[a],this[a].scrollTop=0;return!0},map:function(a,c){for(var b=[],e=0;e<a.length;e++){var d=c(e,a[e]);"undefined"===typeof d&&h.error("ERROR WHILE MAPPING");if("string"===typeof d[0])for(var f=0;f<d.length;f++)b.push(d[f]);else b.push(c(e,a[e]))}return b},each:function(a,c){var b=[],e=0,d;for(d in a)a.hasOwnProperty(d)&&(isNaN(d)?
b.push(c(d,a[d])):(b.push(c(e,a[d])),e++));return b},merge:function(){for(var a={},c,b=0;b<arguments.length;b++)for(c in arguments[b])arguments[b].hasOwnProperty(c)&&(a[c]=arguments[b][c]);return a},clearScreen:function(){this.nodeJS?process.stdout.write("\u001bc"):console.warn("_.clearScreen() is only for CLi")},oneLineUp:function(){this.nodeJS?process.stdout.write("\r\u001b[K"):console.warn("_.clearScreen() is only for CLi")},truncate:function(a,c){if(!this.nodeJS){for(var b=this.length;b--;)d._lastObj=
this[b],a=a||30,c=this.isUndefined(c)?"...":c,this[b].innerHTML=this[b].innerHTML.length>a?this[b].innerHTML.substring(0,a)+c:String(this[b].innerHTML);return!0}},_copy_js:function(){var a=new l,c;for(c in a)h[c]=a[c];return null}};var q=new l,m;for(m in q)h[m]=q[m];if(void 0!==d._){console.log("[_.JS Warning] We have overwritten self._!");var p=d._}d._=h;d._s=h;"undefined"!==typeof exports&&(module.exports=h);return h})("undefined"===typeof exports?window:module.exports);
if("undefined"===typeof exports&&"undefined"!==typeof document.createEvent){var _JSLoaded=document.createEvent("CustomEvent");_JSLoaded.initEvent("_.jsLoaded",!0,!0,{});window.dispatchEvent(_JSLoaded)};
