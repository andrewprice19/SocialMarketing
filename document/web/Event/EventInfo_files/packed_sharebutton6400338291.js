try{document.execCommand("BackgroundImageCache",false,true)}catch(err){}(function(){var a=function(){var c=document.body,p=$("head")[0],i="#db-div-sharing",h="bn-sharing",f="bn-sharing-on",b=decodeURIComponent,m=encodeURIComponent,d=window.location.href,o=$("h1").text()||"",k=$("#mainpic img"),n=k.length?k[0].src:"",l=function(q){return q.replace(/\\/g,"\\\\").replace(/\'/g,"\\'").replace(/\"/g,"&#34;").replace(/%/g,m("%25"))},j=".bn-sharing{padding-right:10px;background-image: url(http://t.douban.com/pics/a1.png) !important; background-repeat: no-repeat !important; background-position: 100% -19px !important;*display:inline-block;}a.bn-sharing:hover{text-decoration:underline;} .bn-sharing-on{background-position:100% 4px !important;position:relative !important;z-index:1 !important;}#db-div-sharing{position:absolute;width:100px;*margin-top:-2px;}#db-div-sharing .bd{border:1px solid #aaa;background:#fff;padding:10px 0 0 10px;}#db-div-sharing .bd li{line-height:17px;margin-bottom:10px;}#db-div-sharing .hd{position:absolute;height:24px;*line-height:21px;overflow:hidden;right:0;top:-24px;padding:0 5px;border:1px solid #aaa;border-bottom:none;background:#fff;}.rec-ren,.rec-sin,.rec-kx,.rec-msn,.rec-qq,.rec-tx,.rec-sohu{padding-left:20px;background:url(http://t.douban.com/pics/a3a.png) no-repeat 0 0;}.rec-ren{background-position:0 -90px;}.rec-sin{background-position:0 -30px;}.rec-msn{background-position:0 -60px;}.rec-kx{background-position:0 -120px;}.rec-tx{background-position:0 -150px;}.rec-sohu{background-position:0 -180px;}",e=function(R,A,u,J,s){var C=J||"";var y=s||"";var z="http://www.douban.com/link2?type=redir&vendor=bshare_renren&url=",D="http://www.douban.com/link2?type=redir&vendor=bshare_kx&url=",P="http://www.douban.com/link2?type=redir&vendor=bshare_sina&url=",K="http://www.douban.com/link2?type=redir&vendor=bshare_msn&url=",I="http://www.douban.com/link2?type=redir&vendor=bshare_qq&url=",E="http://www.douban.com/link2?type=redir&vendor=bshare_tx&url=",N="http://www.douban.com/link2?type=redir&vendor=bshare_sohu&url=",t="人人网",F="开心网",x="新浪微博",O="MSN",L="QQ空间",G="腾讯微博",q="搜狐微博",M=z+m("http://www.connect.renren.com/share/sharer?url="+m(A)),Q=D+m("http://www.kaixin001.com/repaste/bshare.php?rtitle="+m(m(R))+"&rcontent=&rurl="+m(A)),B="javascript:void((function(s,d,e,r,l,p,t,z,c){var%20f='http://v.t.sina.com.cn/share/share.php?appkey=3015934887',u=z||d.location,p=['&url=',e(u),'&title=',e(t||d.title),'&source=',e(r),'&sourceUrl=',e(l),'&content=',c||'gb2312','&pic=',e(p||'')].join('');function%20a(){var%20_url='"+P+"'+e([f,p].join(''));if(!window.open(_url,'mb',['toolbar=0,status=0,resizable=1,width=600,height=460,left=',(s.width-600)/2,',top=',(s.height-460)/2].join('')))u.href=_url;};if(/Firefox/.test(navigator.userAgent))setTimeout(a,0);else%20a();})(screen,document,encodeURIComponent,'','','"+l(u)+"','"+l(C||R)+"','"+l(A)+"','utf-8'));",H=K+"http://profile.live.com/badge?url="+m(A)+"&title="+m(R)+"&wa="+m("wsignin1.0"),w=I+m("http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url="+m(A)),r="javascript:void((function(){var f='"+l(y||R)+"';var c='"+A+"';var e=encodeURI('1459b2ac3d2345d2a17396eec5ad3bd7');var b=encodeURI('"+u+"');var a='';var d='http://v.t.qq.com/share/share.php?url='+c+'&appkey='+e+'&site='+a+'&pic='+b+'&title='+f;window.open('"+E+"' + encodeURIComponent(d),'','width=700, height=680, top=0, left=0, toolbar=no, menubar=no, scrollbars=no, location=yes, resizable=no, status=no')})());",v="javascript:void((function(s,d,e,r,l,p,t,z,c){var f='http://t.sohu.com/third/post.jsp?',u=z||d.location,p=['&url=',e(u),'&title=',e(t||d.title),'&content=',c||'gb2312','&pic=',e(p||'')].join('');function%20a(){if(!window.open('"+N+"' + e([f,p].join('')),'mb',['toolbar=0,status=0,resizable=1,width=660,height=470,left=',(s.width-660)/2,',top=',(s.height-470)/2].join('')))u.href=[f,p].join('');};if(/Firefox/.test(navigator.userAgent))setTimeout(a,0);else%20a();})(screen,document,encodeURIComponent,'','','','"+l(R)+"','"+l(A)+"','utf-8'));";return'<div class="hd">&nbsp;</div> <div class="bd"> <ul> <li class="rec-ren"> <a target="_blank" href="'+M+'">'+t+'</a> </li> <li class="rec-sin"> <a href="'+B+'">'+x+'</a> </li> <li class="rec-kx"> <a target="_blank" href="'+Q+'">'+F+'</a> </li> <li class="rec-msn"> <a target="_blank" href="'+H+'">'+O+'</a> </li> <li class="rec-qq"> <a target="_blank" href="'+w+'">'+L+'</a> </li> <li class="rec-tx"> <a href="'+r+'">'+G+'</a> </li> <li class="rec-sohu"> <a href="'+v+'">'+q+"</a> </li></ul> </div>"},g=function(){if($("#css-share-button")[0]){return}var q=document.createElement("style");q.type="text/css";q.id="css-share-button";if(q.styleSheet){q.styleSheet.cssText=j}else{q.appendChild(document.createTextNode(j))}try{p.appendChild(q);css=true}catch(r){}};g();$("."+h).live("mouseover",function(q){var r=$(q.target).offset()});$(c).click(function(w){var r=$(w.target),x,q,z=[],y,v,u,t;if(!r.hasClass(h)){$("."+f).removeClass(f);$(i).hide();if(r[0].tagName.toLowerCase()==="a"&&r.parent().hasClass("rec-ren")){w.preventDefault();window.open(r[0].href,"sharer","toolbar=0,status=0,width=550,height=400,left="+(screen.width-550)/2+",top="+(screen.height-500)/2)}return}w.preventDefault();w.stopPropagation();$("."+f).removeClass(f);if(r.hasClass(f)){$("."+f).removeClass(f);$(i).hide();return}else{r.addClass(f);x=r.offset();q=$(i);if(q.length===0){$(c).append('<div id="db-div-sharing"></div>');q=$(i)}if(r.hasClass("in-list")){y=r.closest(".ctsh").find("h3 a:eq(0)");if(y.length===0){v=r.attr("data-title")||o}else{v=r.attr("data-title")||y.text()}}else{v=r.attr("data-title")||o}u=r.attr("data-url")||d;t=r.attr("data-pic")||n;sina_title=r.attr("data-sina")||v;qq_title=r.attr("data-qq")||v;q.html(e(v,u,t,sina_title,qq_title));q.find(".hd").css("width",r[0].offsetWidth+"px");q.css("top",(x.top+24-4)+"px").css("left",(x.left-q.width()+r.width()+16)+"px");q.find(".hd a").addClass(f);q.show()}});$(window).bind("resize",function(){$("."+f).removeClass(f);$(i).hide()})};if(typeof(Do)!=="undefined"){Do(function(){a()})}else{$(function(){a()})}})();