//# sourceMappingURL=_multimedia.js.map
if(window._){var players={},video="video",audio="audio",MMActive="",MMTime=0,MMLTime=0,MMisSeek=!1;_.fn.multimedia=function(a){for(var e=this.length;e--;){var f={mp3:"audio",ogg:"ERROR",wav:"audio",mp4:"video",webm:"video"},g={mp3:"audio/mpeg",ogg:"audio/ogg",wav:"audio/wav",webm:"audio/webm"},h={mp4:"video/mp4",ogg:"video/ogg",webm:"video/webm"},c={autoplay:!0,controls:!1,visible:!1,default:!0,type:"ERROR"};if("object"==typeof a){if(this.isUndefined(a.file)){console.error("Need a file!");console.error("Please see: https://github.com/wesdegroot/_.js/wiki/module_multimedia");
break}else"undefined"!=typeof a.options?(c.type="undefined"!=typeof a.options.type?a.options.type:f[a.file.substr(a.file.indexOf(".")+1)],"undefined"!=typeof a.options.autoplay&&(c.autoplay=a.options.autoplay),"undefined"!=typeof a.options.controls&&(c.controls=a.options.controls),"undefined"!=typeof a.options.visible&&(c.visible=a.options.visible),c["default"]=!1):c.type=f[a.file.substr(a.file.indexOf(".")+1)],"ERROR"==c.type&&(console.error("File extension is .ogg!, we can't detect if it is a audio or a video file. sorry."),
console.error("Please see: https://github.com/wesdegroot/_.js/wiki/module_multimedia"));this[e].innerHTML="";if(!this.isUndefined(a.before))if("object"==typeof a.before)console.error("Not yet supported :("),console.error("Please see: https://github.com/wesdegroot/_.js/wiki/module_multimedia");else{var b=document.createElement(f[a.before.substr(a.before.indexOf(".")+1)]);b.setAttribute("preload","auto");b.setAttribute("height","100%");b.setAttribute("width","100%");b.setAttribute("style","width:100%;height:100%;");
b.setAttribute("id","MMFirst");b.autobuffer=!0;var d=document.createElement("source");d.type="video"!=c.type?g[a.before.substr(a.before.indexOf(".")+1)]:h[a.before.substr(a.before.indexOf(".")+1)];d.src=a.before;b.appendChild(d);b.load();c.autoplay&&b.play();window.MMActive=b;b.addEventListener("seeking",function(a){window.MMisSeek=!0;this.currentTime>window.MMLTime&&(this.currentTime=window.MMLTime);window.MMisSeek=!1});b.addEventListener("timeupdate",function(a){window.MMisSeek||(window.MMLTime=
window.MMTime,window.MMTime=this.currentTime)});b.addEventListener("ended",function(){this.pause();this.style.visibility="hidden";this.style.display="none";document.getElementById("MMMain").style.visibility="";document.getElementById("MMMain").style.display="block";document.getElementById("MMMain").play();window.MMActive=document.getElementById("MMMain");window.MMTime=0});this[e].appendChild(b);window.players=this.merge(window.players,{before:{file:a.before,html:b,options:c}})}b=document.createElement(c.type);
c.controls&&b.setAttribute("controls","yes");b.setAttribute("preload","auto");b.setAttribute("height","100%");b.setAttribute("width","100%");this.isUndefined(a.before)?b.setAttribute("style","width:100%;height:100%;"):b.setAttribute("style","visibility:hidden;display:none;width:100%;height:100%;");b.setAttribute("id","MMMain");this.isUndefined(a.before)&&(window.MMActive=b);c.autoplay&&this.isUndefined(a.before)&&b.play();b.autobuffer=!0;d=document.createElement("source");d.type="video"!=c.type?g[a.file.substr(a.file.indexOf(".")+
1)]:h[a.file.substr(a.file.indexOf(".")+1)];d.src=a.file;b.appendChild(d);b.load();this.isUndefined(a.after)?b.addEventListener("ended",function(){this.pause()}):b.addEventListener("ended",function(){this.pause();this.style.visibility="hidden";this.style.display="none";document.getElementById("MMAfter").style.visibility="";document.getElementById("MMAfter").style.display="block";document.getElementById("MMAfter").play();window.MMActive=document.getElementById("MMAfter");window.MMTime=0});this[e].appendChild(b);
window.players=this.merge(window.players,{main:{file:a.file,html:b,options:c}});this.isUndefined(a.after)||("object"==typeof a.after?(console.error("Not yet supported :("),console.error("Please see: https://github.com/wesdegroot/_.js/wiki/module_multimedia")):(b=document.createElement(f[a.after.substr(a.after.indexOf(".")+1)]),b.setAttribute("preload","auto"),b.setAttribute("height","100%"),b.setAttribute("width","100%"),b.setAttribute("style","visibility:hidden;display:none;width:100%;height:100%;"),
b.setAttribute("id","MMAfter"),b.autobuffer=!0,d=document.createElement("source"),d.type="video"!=c.type?g[a.after.substr(a.after.indexOf(".")+1)]:h[a.after.substr(a.after.indexOf(".")+1)],d.src=a.after,b.appendChild(d),b.load(),b.addEventListener("seeking",function(a){window.MMisSeek=!0;this.currentTime>window.MMLTime&&(this.currentTime=window.MMLTime);window.MMisSeek=!1}),b.addEventListener("timeupdate",function(a){window.MMisSeek||(window.MMLTime=window.MMTime,window.MMTime=this.currentTime)}),
b.addEventListener("ended",function(){this.pause();window.MMTime=0}),this[e].appendChild(b),window.players=this.merge(window.players,{after:{file:a.after,html:b,options:c}})));console.log(window.players)}else console.error("Please see: https://github.com/wesdegroot/_.js/wiki/module_multimedia")}};_.fn.mmPlayer_start=function(a){window.MMActive.play()}}else alert("MISSING SOMETHING!");