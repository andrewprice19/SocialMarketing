Do(function(){var b=$(window);var a={gap:260};$.fn.lazyImage=function(h){h=$.extend({},a,h);var k=this;var g=$("img",k).filter(function(l,m){return !!this.getAttribute("data-lazy")});function e(l){if("ratioSrc" in h){return h.ratioSrc(l,window.devicePixelRatio)}return l}var c={};function i(){var l=b.scrollTop()+b.height()+(h.gap||0);g.each(function(n,p){var o=$(p);var q=e(o.data("lazy"));if(q in c){return p.src=q}var m=o.offset().top;if(l>m){p.src=q;c[q]=p}else{return false}});d()}function d(){for(var m in c){var n=c[m];var l=-1;g.each(function(o){if(this===n){l=o;return false}});if(l!==-1){g=g.slice(0,l).add(g.slice(l+1));delete c[m]}}}i();var j=0;var f=function(l){if(!g.length){return b.unbind("scroll",f)}clearTimeout(j);j=setTimeout(i,80)};b.scroll(f)}});