$(document).ready(function(){if(!window.jazzy.docset){var linkToHash=$('a[href="'+ window.location.hash+'"]');linkToHash.trigger("click");}});$(".x-instance-method").click(function(){if(window.jazzy.docset){return;}
var link=$(this);var animationDuration=300;var tokenOffset="15px";var original=link.css('marginLeft')==tokenOffset;link.animate({'margin-left':original?"0px":tokenOffset},animationDuration);$content=link.parent().parent().next();$content.slideToggle(animationDuration);});