//# sourceMappingURL=_.js.map
(function(e){e._lastObj=null;e._modLoaded=[];e._eventStore=[];var h=function(a){return new m(a)},m=function(a){var c="undefined"!==typeof exports||"undefined"===typeof a?[]:-1===a.indexOf(">")?document.querySelectorAll(a):[];this.length=c.length;this.param=a;this.version="0.1.0b";this.revision="r171107";this.fullversion=this.version+this.revision;this.isBeta=this.version.match(/b/g);this.isCompiled=!1;this.isStable=!this.isBeta&&!this.isAlpha;this.ScriptRX="<script[^>]*>([\\S\\s]*?)\x3c/script\\s*>";
this.JSONRX="/^/*-secure-([sS]*)*/s*$/";this.nodeJS="undefined"!==typeof exports;this.emoij={nerd:"\ud83e\udd13",smilie:"\ud83d\ude03",dsmilie:"\ud83d\ude00",heart:"\u2764\ufe0f",brokenheart:"\ud83d\udc94"};this.objectclass={"[object Boolean]":"boolean","[object Number":"number","[object String":"string","[object Function]":"function","[object Array]":"array","[object Date]":"date","[object RegExp]":"regexp","[object Object]":"object","[object Error]":"error"};this.cconsole={reset:{start:"\u001b[0m",
stop:"\u001b[0m"},bold:{start:"\u001b[1m",stop:"\u001b[22m"},dim:{start:"\u001b[2m",stop:"\u001b[22m"},italic:{start:"\u001b[3m",stop:"\u001b[23m"},underline:{start:"\u001b[4m",stop:"\u001b[24m"},inverse:{start:"\u001b[7m",stop:"\u001b[27m"},hidden:{start:"\u001b[8m",stop:"\u001b[28m"},strikethrough:{start:"\u001b[9m",stop:"\u001b[29m"},color:{standard:"\u001b[39m",black:"\u001b[30m",red:"\u001b[31m",green:"\u001b[32m",yellow:"\u001b[33m",blue:"\u001b[34m",magenta:"\u001b[35m",cyan:"\u001b[36m",white:"\u001b[37m",
gray:"\u001b[90m"},background:{standard:"\u001b[49m",black:"\u001b[40m",red:"\u001b[41m",green:"\u001b[42m",yellow:"\u001b[43m",blue:"\u001b[44m",magenta:"\u001b[45m",cyan:"\u001b[46m",white:"\u001b[47m"}};a=this.nodeJS?{userAgent:"Node.js Node.js Node.js",maxTouchPoints:0,msMaxTouchPoints:0}:navigator;var b="Chrome"===a.userAgent.split(" ")[a.userAgent.split(" ").length-2].split("/")[0]?a.userAgent.split(" ")[a.userAgent.split(" ").length-2].split("/")[0]:a.userAgent.split(" ")[a.userAgent.split(" ").length-
1].split("/")[0];this.browser={ie:-1!==a.userAgent.indexOf("Trident"),firefox:"Firefox"===b,safari:"Safari"===b,opera:"OPR"===b,edge:"Edge"===b,chrome:"Chrome"===b,userAgent:a.userAgent,supportTouch:"ontouchstart"in e||0<a.maxTouchPoints||0<a.msMaxTouchPoints};this.getBrowser=b;this.innerHTML=1==this.length?c[0].innerHTML:null;for(a=0;a<this.length;a++)this[a]=c[a],e._lastObj=c[a];return this};h.fn=m.prototype={_:function(a){return this[a]},emulatejQuery:function(){e.$=e._;e._$=e._;e.jQuery=e._;return e._jQuery=
e._},$:function(a){this.nodeJS?"TEST"!==a&&console.log("Thanks for using '_.js'!\n"+decodeURIComponent("%F0%9F%92%99")):(e.alert("Hi"),e.confirm("Did you know that i'm not jQuery?")?e.alert("Why did you even try this?"):e.alert("Nope, i'm not jQuery"),e.alert("Thanks for using '_.js'!\n"+decodeURIComponent("%F0%9F%92%99")))},extend:function(){var a,c,b,d,e,g=arguments[0]||{},k=1,l=arguments.length,h=!1;"boolean"===typeof g&&(h=g,g=arguments[k]||{},k++);"object"===typeof g||this.isFunction(g)||(g=
{});k===l&&(g=this,k--);for(;k<l;k++)if(null!=(e=arguments[k]))for(d in e)a=g[d],b=e[d],g!==b&&(h&&b&&(this.isPlainObject(b)||(c=this.isArray(b)))?(c?(c=!1,a=a&&this.isArray(a)?a:[]):a=a&&this.isPlainObject(a)?a:{},g[d]=this.extend(h,a,b)):void 0!==b&&(g[d]=b));return g},isArray:function(a){return(this.nodeJS?!1:a.isArray)||"array"===this.type(a)},getCookie:function(a){if(this.nodeJS)return!1;var c=document.cookie.indexOf(a+"="),b=c+a.length+1;if(!c&&a!==document.cookie.substring(0,a.length)||-1===
c)return null;a=document.cookie.indexOf(";",b);-1===a&&(a=document.cookie.length);return unescape(document.cookie.substring(b,a))},setCookie:function(a,c,b,d,f,g){if(this.nodeJS)return!1;if(!f){var k=e.location.hostname,k=f.split(".");f=".";for(var l=1;l<k.lenth;l++)f+=k[l]}k=new Date;k.setTime(k.getTime());"string"!==typeof b&&(b=1);"string"!==typeof d&&(d="/");"boolean"!==typeof g&&(g=!1);b&&(b*=864E5);k=new Date(k.getTime()+b);document.cookie=a+"="+escape(c)+(b?";expires="+k.toGMTString():"")+
(d?";path="+d:"")+(f?";domain="+f:"")+(g?";secure":"");return null},deleteCookie:function(a,c,b){if(this.nodeJS)return!1;if(this.getCookie(a)){if(!b){c=e.location.hostname;c=b.split(".");b=".";for(var d=1;d<c.lenth;d++)b+=c[d]}document.cookie=a+"=;expires=Thu, 01-Jan-1970 00:00:01 GMT";return!0}return!1},toggle:function(){if(this.nodeJS)return!1;for(var a=this.length;a--;)this[a].style.display="none"!==this[a].style.display?"none":"";return null},on:function(a,c){if(this.nodeJS)return!1;var b=this.length;
if("function"===typeof c)for(;b--;)this[b].addEventListener(a,c),e._eventStore.push([e._eventStore.length+1,this[b],a,c]);else for(;b--;){var d=[],f;for(f in e._eventStore)f=e._eventStore[f],this[b]===f[1]&&a===f[2]?f[1].removeEventListener(f[2],f[3]):d.push(f);e._eventStore=d}return null},noop:function(){},supportTouch:function(){return this.nodeJS?!1:"ontouchstart"in window||0<navigator.maxTouchPoints||0<navigator.msMaxTouchPoints},appendTo:function(a){if(this.nodeJS)return!1;"body"===a?document.body.innerHTML+=
this.param:"head"===a?document.head.innerHTML+=this.param:"."===a.substr(0,1)||"#"===a.substr(0,1)?h(a).html(this.param,!0):this._error("appendTo");return null},_error:function(a,c){"#IGNORE#ME"!==a&&("undefined"===typeof c?console.error("_.js Error: Invalid usage of function"):console.error("_.js Error: "+c),this.startsWith(a,"#")?console.error("Please see: https://github.com/wdg/_.js/wiki/module_"+a.substr(1)):this.isBeta?console.error("Please see: https://github.com/wdg/_.js/wiki/flbeta_function_"+
a):console.error("Please see: https://github.com/wdg/_.js/wiki/function_"+a));return null},deprecated:function(a,c,b,d){console.warn(this.format("\u26a0\ufe0f  function '%s' is deprecated since v%s %s\n               this function will be removed in v%s %s\n%s",a,c,"(https://github.com/wdg/_.js/wiki/changed_in_"+c.replace(/(\.|b|a)/g,"")+")",b,"(https://github.com/wdg/_.js/wiki/changed_in_"+b.replace(/(\.|b|a)/g,"")+")","undefined"===typeof d?"\n There's no alternative for "+a:"\nAlternative: _."+
d+"(...) See https://github.com/wdg/_.js/wiki/"+(this.isBeta?"flbeta_":"")+"function_"+d+" for more information"));return null},error:function(a){if(this.nodeJS)console.error(a);else throw Error(a);},isFunction:function(a){return"function"===this.type(a)},type:function(a){return null==a?a+"":"object"===typeof a||"function"===typeof a?this.objectclass[Object.prototype.toString.call(a)]||"object":typeof a},escapeForRegex:function(a){return a.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,"\\$1").replace(/\x08/g,
"\\x08")},isPlainObject:function(a){var c,b={}.hasOwnProperty;if(!a||"object"!==this.type(a)||a.nodeType)return!1;try{if(a.constructor&&!b.call(a,"constructor")&&!b.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(d){return!1}if({}.ownLast)for(c in a)return b.call(a,c);for(c in a);return void 0===c||b.call(a,c)},require:function(a,c,b){if(!this.nodeJS)if("object"===typeof a)for(b=a.length-1;0<=b;b--)if(-1===e._modLoaded.indexOf(a[b])){e._modLoaded.push(a[b]);a[b].match(/\.js/g)||(a[b]+=
".js");this.startsWith(a[b],"_")&&!this.isLocal()&&(a[b]="https://raw.githubusercontent.com/wdg/_.js/master/latest/modules/"+a[b].toLowerCase());var d=document.createElement("script");d.type="text/javascript";d.src=a[b];1===b&&(d.onreadystatechange="",d.onload=setTimeout(function(a){h._copy_js();a()},10,c));document.head.appendChild(d)}else h._copy_js(),c();else"string"===typeof a?-1===e._modLoaded.indexOf(a)?(e._modLoaded.push(a),a.match(/\.js/g)||(a+=".js"),this.startsWith(a,"_")&&!this.isLocal()&&
(a="https://raw.githubusercontent.com/wdg/_.js/master/latest/modules/"+a.toLowerCase()),b=document.createElement("script"),b.type="text/javascript",b.src=a,b.onreadystatechange="",b.onload=setTimeout(function(a){h._copy_js();a()},10,c),document.head.appendChild(b)):(h._copy_js(),c()):console.error("Please use only a array, or a string.");return null},format:function(){var a=arguments,c=1;return a[0].replace(/%((%)|s|d)/g,function(b){var d=null;if(b[2])d=b[2];else{d=a[c];switch(b){case "%d":d=parseFloat(d),
isNaN(d)&&(d=0)}c++}return d})},html:function(a,c){if(this.nodeJS)return!1;for(var b=this.length;b--;){e._lastObj=this[b];if("undefined"===typeof a)return this[b].innerHTML;this[b].innerHTML="undefined"===typeof c?a:this[b].innerHTML+a}return this},framebreak:function(){this.nodeJS||e.top.location===e.location||(e.top.location.href=document.location.href);return!1},ajaxPOST:function(a,c){if(!this.nodeJS)for(var b=this.length;b--;){e._lastObj=this[b];var d,f=this[b];d=e.XMLHttpRequest?new e.XMLHttpRequest:
new e.ActiveXObject("Microsoft.XMLHTTP");var g=new FormData(a);d.open("POST",a.action,!0);d.upload.onprogress=function(a){a.lengthComputable&&console.log("Progress = "+a.loaded/a.total*100+"%")};d.onreadystatechange=function(){if(4===d.readyState&&200===d.status){f.innerHTML=d.responseText;for(var a=f.getElementsByTagName("script"),b=0,c=a.length;b<c;b++)eval(a[b].innerHTML);a=f.getElementsByTagName("form");b=0;for(c=a.length;b<c;b++)"post"===a[b].method.toLowerCase()&&a[b].setAttribute("onsubmit",
"event.preventDefault();_('."+f.className+"').ajaxPOST(this);")}};d.send(g)}return!1},ajax:function(a,c){if(this.nodeJS)return this._NodeAjaxHelper(a,function(a){return a});for(var b=this.length;b--;){e._lastObj=this[b];var d,f=this[b];d=e.XMLHttpRequest?new e.XMLHttpRequest:new e.ActiveXObject("Microsoft.XMLHTTP");d.onreadystatechange=function(){if(4===d.readyState&&200===d.status){f.innerHTML=d.responseText;for(var a=f.getElementsByTagName("script"),b=0,c=a.length;b<c;b++)eval(a[b].innerHTML);a=
f.getElementsByTagName("form");b=0;for(c=a.length;b<c;b++)"post"===a[b].method.toLowerCase()&&a[b].setAttribute("onsubmit","event.preventDefault();_('."+f.className+"').ajaxPOST(this);")}};d.open("GET",a,!0);d.send()}console.error("No return!");return!1},_NodeAjaxHelper:function(a,c){if(-1<a.toLowerCase().indexOf("https://"))require("https").get(a,function(a){a.setEncoding("utf8");var d="";-1<[301,302].indexOf(a.statusCode)&&c(this.ajax(a.headers.location));a.on("data",function(a){d+=a});a.on("end",
function(){c(d)})}).on("error",function(a){console.error(a);c(!1)});else require("http").get(a,function(a){a.setEncoding("utf8");var d="";200!==a.statusCode&&console.error("Request Failed.\nStatus Code: "+a.statusCode);a.on("data",function(a){d+=a});a.on("end",function(){c(d)})}).on("error",function(a){console.error("Got error: "+a.message);c(!1)});return!1},noConflict:function(){"object"===typeof p&&(e._=p);return h},requireSSL:function(){this.nodeJS||"https:"===e.location.protocol||"file:"===e.location.protocol||
e.location.href.match(/(localhost|127\.0\.0\.1|::1)/g)||(e.location.href="https:"+e.location.href.substring(e.location.protocol.length))},isUndefined:function(a){return"undefined"===typeof a},isEmpty:function(a){return""===a},isBlank:function(a){return/^\s*$/.test(a)},getFileSize:function(a,c){if(!this.nodeJS)for(var b=this.length;b--;){var d;d=e.XMLHttpRequest?new e.XMLHttpRequest:new e.ActiveXObject("Microsoft.XMLHTTP");d.open("HEAD",a,!0);d.onreadystatechange=function(){4===d.readyState&&(200===
d.status?"function"===typeof c?c(d.getResponseHeader("Content-Length")/1024):h(c).html(d.getResponseHeader("Content-Length")/1024):"function"===typeof c?c("Error while getting filesize"):h(c).html("Error while getting filesize"))};d.send(null)}return null},stripTags:function(){if(!this.nodeJS)for(var a=this.length;a--;)e._lastObj=this[a],this[a].innerHTML=this[a].innerHTML.replace(/<\w+(\s+("[^"]*"|'[^']*'|[^>])+)?>|<\/\w+>/gi,"");return this.nodeJS?!1:null},stripScripts:function(){if(!this.nodeJS)for(var a=
this.length;a--;)e._lastObj=this[a],this[a].innerHTML=this[a].innerHTML.replace(new RegExp(this.ScriptRX,"img"),"");return this.nodeJS?!1:null},css:function(a,c){if(this.nodeJS)return!1;for(var b=this.length;b--;){e._lastObj=this[b];if(this.isUndefined(c))return this[b].style.cssText;for(var d=this[b].style.cssText.split(";"),f="",g=!1,k=0,h="";k<d.length;)this.startsWith(a,d[k])?(h=d[k].split(":"),f=f+h[0]+": "+c+"; ",g=!0):f=f+d[k]+"; ",k++;this[b].style.cssText=g?this[b].style.cssText+a+":"+c+
";":f;return this}},escapeHTML:function(a){return a.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")},unescapeHTML:function(a){return a.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&")},toArray:function(a){if("string"===typeof a)return a.split("");var c=[],b;for(b in a)a.hasOwnProperty(b)&&c.push(a[b]);return c},runTest:function(a,c){return"function"!==typeof a?String(a)===String(c):String(a())===String(c)},includes:function(a,c){return-1<String(a).indexOf(c)},startsWith:function(a,
c){return 0===a.lastIndexOf(c,0)},isLocal:function(){return this.nodeJS?!0:"file:"!==e.location.protocol?e.location.href.match(/(file:\/\/|localhost|127\.0\.0\.1|::1)/g)?!0:!1:!0},endsWith:function(a,c){var b=a.length-c.length;return 0<=b&&a.indexOf(c,b)===b},capitalize:function(a){return a.charAt(0).toUpperCase()+a.substring(1).toLowerCase()},camelize:function(a){return a.replace(/-+(.)?/g,function(a,b){return b?b.toUpperCase():""})},scrollToBottom:function(){if(this.nodeJS)return!1;for(var a=this.length;a--;)e._lastObj=
this[a],this[a].scrollTop=this[a].scrollHeight;return!0},scrollToTop:function(){if(this.nodeJS)return!1;for(var a=this.length;a--;)e._lastObj=this[a],this[a].scrollTop=0;return!0},map:function(a,c){for(var b=[],d=0;d<a.length;d++){var e=c(d,a[d]);if("undefined"===typeof e)h.error("ERROR WHILE MAPPING");else if("string"===typeof e[0])for(var g=0;g<e.length;g++)b.push(e[g]);else b.push(c(d,a[d]))}return b},each:function(a,c){var b=[],d=0,e;for(e in a)a.hasOwnProperty(e)&&(isNaN(e)?b.push(c(e,a[e])):
(b.push(c(d,a[e])),d++));return b},merge:function(){for(var a={},c,b=0;b<arguments.length;b++)for(c in arguments[b])arguments[b].hasOwnProperty(c)&&(a[c]=arguments[b][c]);return a},clearScreen:function(){this.nodeJS?process.stdout.write("\u001bc"):console.warn("_.clearScreen() is only for CLi")},oneLineUp:function(){this.nodeJS?process.stdout.write("\r\u001b[K"):console.warn("_.clearScreen() is only for CLi")},truncate:function(a,c){if(this.nodeJS)return!1;for(var b=this.length;b--;)e._lastObj=this[b],
a=a||30,c=this.isUndefined(c)?"...":c,this[b].innerHTML=this[b].innerHTML.length>a?this[b].innerHTML.substring(0,a)+c:String(this[b].innerHTML);return!0},DOMEval:function(a,c){c=c||document;var b=c.createElement("script");b.text=a;c.head.appendChild(b).parentNode.removeChild(b)},infinitescroll:function(a){for(var c=this.length;c--;)this[c].addEventListener("scroll",function(b){console.log(this.scrollHeight);this.scrollTop+this.clientHeight+250>=this.scrollHeight&&("function"===typeof a?a():h._error("infinitescroll"))})},
_copy_js:function(){var a=new m,c;for(c in a)h[c]=a[c];return null}};var q=new m,n;for(n in q)h[n]=q[n];if(void 0!==e._){console.log("[_.JS Warning] We have overwritten self._!");var p=e._}e._=h;e._s=h;"undefined"!==typeof exports&&(module.exports=h);return h})("undefined"===typeof exports?window:module.exports);if("undefined"===typeof exports&&"undefined"!==typeof document.createEvent){var _JSLoaded=document.createEvent("CustomEvent");_JSLoaded.initEvent("_.jsLoaded",!0,!0,{});window.dispatchEvent(_JSLoaded)};
