
Do(function(){
  
  var noti_ids = {"0": "444882108", "num": 1};
  var noti_api = 'http://www.douban.com/j/notification/read_notis';

  // 不再提醒
  Douban.init_delete_reply_notify=function(b){var a=function(g){g.preventDefault();var c=$(g.target);var h=c[0].href.split("#")[1];$.get("/j/accounts/remove_notify?id="+h);var d=c.closest(".item-req");if($.contains($(".top-nav-reminder")[0],d[0])){d=d.parent();var f=d.siblings().length;d.fadeOut(function(){d.remove()});if(f===0){d.closest(".bd").find(".no-new-notis").show()}}else{d.fadeOut()}};if(b.type==="click"){a(b)}else{$(b).click(a)}};
  Douban.init_discard_notify=function(b){var a=function(i){i.preventDefault();var c="/j/notification/discard";var f=$(i.target);var d=f[0].name;$.post_withck(c,{id:d},function(e){},"json");var g=f.closest(".item-req");if($.contains($(".top-nav-reminder")[0],g[0])){g=g.parent();var h=g.siblings().length;g.fadeOut(function(){g.remove()});if(h===0){g.closest(".bd").find(".no-new-notis").show()}}else{g.fadeOut()}};if(b.type==="click"){a(b)}else{$(b).click(a)}};
  if (window.load_event_monitor) {
    load_event_monitor($('#db-global-nav'));
  }
  (function(b){var e=document;var a=[];var d=function(h,f,j,p,g){var q=g.createElement("form");var l,r,m,o;var n=function(i,s){var k=g.createElement("input");k.type="hidden";k.name=i;k.value=s;return k};q.target=p;q.action=h;q.method=f;for(l in j){if(j.hasOwnProperty(l)){r=j[l];if(typeof r==="object"&&Object.prototype.toString.call(r).search(/array/i)){m=r.length;while(m--){o=n(l,r[m]);q.appendChild(o)}}o=n(l,r);q.appendChild(o)}}return q};var c=function(){a.push(0);return"_xpost_iframe_"+a.length};b.xPost=function(h,j){var k=c();var i;var g;var f;if("ActiveXObject" in window){f=new ActiveXObject("htmlfile");f.open();f.write('<html><body><iframe id="xpost-proxy-iframe'+k+'"></iframe></body></html>');f.close();g=f.getElementById("xpost-proxy-iframe"+k);g.contentWindow.name=k;i=d(h,"post",j,k,f);f.body.appendChild(i);f=f.body}else{g=e.createElement("iframe");g.width=0;g.name=k;g.height=0;g.style.position="absolute";g.style.visibility="hidden";g.src="javascript:false;";f=e.body;f.appendChild(g);i=d(h,"post",j,k,e);f.appendChild(i)}g.onload=function(){};i.submit()}})(jQuery);var popup;var nav=$("#db-global-nav");var more=nav.find(".bn-more");nav.delegate(".bn-more, .top-nav-reminder .lnk-remind","click",function(f){f.preventDefault();var c=$(this);var d=c.parent();if(popup){popup.parent().removeClass("more-active");if($.contains(d[0],popup[0])){popup=null;return false}}d.addClass("more-active");popup=d.find(".more-items");if(c.hasClass("lnk-remind")&&noti_ids.num){var a=nav.find(".top-nav-reminder .num");var b=(a.find("span").text()|0)-noti_ids.num;b=b<=0?0:b;if(b===0){a.hide()}else{a.find("span").text(b)}noti_ids.num=0;$.xPost(noti_api,$.extend({ck:get_cookie("ck")},noti_ids))}return false});$(document).click(function(a){if($(a.target).closest(".more-items").length){return}if(popup){popup.parent().removeClass("more-active");popup=null}});
});

Do(function(){
  var nav = $('#db-nav-location');
  var inp=$("#inp-query"),label=inp.closest(".nav-search").find("label");if(inp.val()!==""){label.hide()}inp.parent().click(function(){inp.focus();label.hide()}).end().focusin(function(){label.hide()}).focusout(function(){if($.trim(this.value)===""){label.show()}else{label.hide()}}).keydown(function(){label.hide()});nav.find(".lnk-more, .lnk-account").click(function(b){b.preventDefault();var d,a=$(this),c=a.hasClass("lnk-more")?$("#db-productions"):$("#db-usr-setting");if(!c.data("init")){d=a.offset();c.css({"margin-left":(d.left-$(window).width()/2-c.width()+a.width()+parseInt(a.css("padding-right"),10))+"px",left:"50%",top:d.top+a.height()+"px"});c.data("init",1);c.hide();$("body").click(function(g){var f=$(g.target);if(f.hasClass("lnk-more")||f.hasClass("lnk-account")||f.closest("#db-usr-setting").length||f.closest("#db-productions").length){return}c.hide()})}if(c.css("display")==="none"){$(".dropdown").hide();c.show()}else{$(".dropdown").hide()}});
  var b=$(document.body);var list=$("#db-nav-location-list");var lnk=$("#db-nav-location .label");lnk.click(function(a){b.toggleClass("locs-shown");if(b.hasClass("locs-shown")){var c=lnk.offset();list.css({display:"block","margin-left":-1*($(window).width()/2-c.left),top:c.top+32})}else{list.hide()}return false});b.click(function(){b.removeClass("locs-shown");list.hide()});
});

    Do(function() {
      var dlg;
      $('body').delegate('.sync-cal', 'click', function(e) {
        e.preventDefault();
        if (dlg) {
          dlg.open();
        } else {
          Do('dialog', function() {
            dlg = dui.Dialog({
              cls: 'win-sync-tip',
              title: '添加活动到 Google 日历',
              width: 380,
              content: $('#html-sync-cal')
            }, true);
            dlg.open();
            dlg.node.delegate('a', 'click', function() {
              dlg.close();
            });
          });
        }
      });
    });
  
;Do(function(){
    $('#unfoldDescHook').click(function(e){
        e.preventDefault();
        $('#edesc_s').hide();
        $('#edesc_f').show();
    });
    $('#foldDescHook').click(function(e){
        e.preventDefault();
        $('#edesc_f').hide();
        $('#edesc_s').show();
    })
})

    Do.add('lazyimage',{path: 'http://img3.douban.com/js/loc/lib/packed_lazy_image5348123665.js', type:'js'});
    Do('lazyimage', function() {
      $('.events-list').lazyImage({
        ratioSrc: function(src, ratio) {
          if (ratio >= 1.5) {
            if (src.indexOf('small') !== -1) {
              return src.replace('small', 'median');
            }
            return src.replace('median', 'large');
          }
          return src;
        }
      });
    });
  
  Do.add('google.map', { type: 'js', path: 'http://maps.google.com/maps/api/js?language=zh-CN&sensor=false&callback=init_map' });
  function init_map() {}

Do(function(){var a;$(".member_photo li").hover(function(){$this=$(this);a=setTimeout(function(){$this.find(".member-tip").fadeIn("fast");clearTimeout(a)},200)},function(){if(a){clearTimeout(a)}$(this).find(".member-tip").fadeOut("fast")})});
