//# sourceMappingURL=_ex.js.map
window._?(_.fn.myPlugin=function(a){console.log("myPlugin: "+a)},_.fn.equalHeight=function(){tallest=0;this.each(function(){thisHeight=_(this).height();thisHeight>tallest&&(tallest=thisHeight)});this.each(function(){_(this).height(tallest)})},_.fn.isExtra=function(){console.log("in-a-function-function-call-thing-test")},_.fn.loadExtra=function(){this.isExtra()},_("wrapper").myPlugin("WDGWV.com"),_("wrapper").loadExtra()):alert("MISSING SOMETHING!");