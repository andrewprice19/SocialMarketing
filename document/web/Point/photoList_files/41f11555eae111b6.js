
    Do(function() {
      // 不再提醒
      Douban.init_delete_reply_notify=function(b){var a=function(g){g.preventDefault();var c=$(g.target);var h=c[0].href.split("#")[1];$.get("/j/accounts/remove_notify?id="+h);var d=c.closest(".item-req");if($.contains($(".top-nav-reminder")[0],d[0])){d=d.parent();var f=d.siblings().length;d.fadeOut(function(){d.remove()});if(f===0){d.closest(".bd").find(".no-new-notis").show()}}else{d.fadeOut()}};if(b.type==="click"){a(b)}else{$(b).click(a)}};
      Douban.init_discard_notify=function(b){var a=function(i){i.preventDefault();var c="/j/notification/discard";var f=$(i.target);var d=f[0].name;$.post_withck(c,{id:d},function(e){},"json");var g=f.closest(".item-req");if($.contains($(".top-nav-reminder")[0],g[0])){g=g.parent();var h=g.siblings().length;g.fadeOut(function(){g.remove()});if(h===0){g.closest(".bd").find(".no-new-notis").show()}}else{g.fadeOut()}};if(b.type==="click"){a(b)}else{$(b).click(a)}};
      var notimenu = $('#top-nav-notimenu');
      notimenu.bind('moreitem:show', function() {
        $.ajax({
          url: 'http://www.douban.com/j/notification/nav_pop',
          data: { ck: get_cookie('ck'),
                  k: '35665461:af8bd506e29a943f0839dab97c71d46da17b216c'
                },
          dataType: 'jsonp',
          success: function(e) {
            if (e.r) {
              return;
            }
            notimenu.html(e.s);
            if (e.n === 0) {
              $('#db-global-nav .top-nav-reminder .num').remove();
            } else {
              $('#db-global-nav .top-nav-reminder .num span').html(e.n);
            }
            if (window.load_event_monitor) {
              load_event_monitor($('#db-global-nav'));
            }
          }
        });
      });
    });
    
Do(function(){
  var popup;var nav=$("#db-global-nav");var more=nav.find(".bn-more");nav.delegate(".bn-more, .top-nav-reminder .lnk-remind","click",function(c){c.preventDefault();var a=$(this);var b=a.parent();if(popup){popup.parent().removeClass("more-active");if($.contains(b[0],popup[0])){popup=null;return false}}b.addClass("more-active");popup=b.find(".more-items");popup.trigger("moreitem:show");return false});$(document).click(function(a){if($(a.target).closest(".more-items").length){return}if(popup){popup.parent().removeClass("more-active");popup=null}});
});

Do(function(){
  var nav = $('#db-nav-sns');
  var inp=$("#inp-query"),label=inp.closest(".nav-search").find("label");if(inp.val()!==""){label.hide()}inp.parent().click(function(){inp.focus();label.hide()}).end().focusin(function(){label.hide()}).focusout(function(){if($.trim(this.value)===""){label.show()}else{label.hide()}}).keydown(function(){label.hide()});nav.find(".lnk-more, .lnk-account").click(function(b){b.preventDefault();var d,a=$(this),c=a.hasClass("lnk-more")?$("#db-productions"):$("#db-usr-setting");if(!c.data("init")){d=a.offset();c.css({"margin-left":(d.left-$(window).width()/2-c.width()+a.width()+parseInt(a.css("padding-right"),10))+"px",left:"50%",top:d.top+a.height()+"px"});c.data("init",1);c.hide();$("body").click(function(g){var f=$(g.target);if(f.hasClass("lnk-more")||f.hasClass("lnk-account")||f.closest("#db-usr-setting").length||f.closest("#db-productions").length){return}c.hide()})}if(c.css("display")==="none"){$(".dropdown").hide();c.show()}else{$(".dropdown").hide()}});
});

var tagsug_src = "http://img3.douban.com/js/lib/packed_tagsug7410784192.js";
window.Do=window.Do||function(a){typeof a=="function"&&setTimeout(a,0)};Do.add_js=function add_js(b){var a=document.createElement("script");a.src=b;document.getElementsByTagName("head")[0].appendChild(a)};Do.add_css=function add_css(c,b){var a=document.createElement("link");a.rel="stylesheet";a.href=c;document.getElementsByTagName("head")[0].appendChild(a)};Do.check_js=function check_js(a,c){var b=a();if(b){c(b)}else{setTimeout(function(){check_js(a,c)},33)}};Do(function(){var a=$("#inp-query,#search_text");a.one("focus",function(){Do.add_js(tagsug_src);Do.check_js(function(){return $.fn.tagsug&&window.Mustache},function(){a.tagsug({max:8,useUid:true,tips:"@某人，直达其个人主页"});var b=a._tagsug_api[0];b.on("choose",function(d,c){window.location="/people/"+c+"/"});a.tagsug({wordLimit:30,url:"",max:null,haltLink:false,customData:{cls:"sug-quick-search",items:[{name_cn:"图书",url:"http://book.douban.com/subject_search?cat=1003&search_text="},{name_cn:"电影",url:"http://movie.douban.com/subject_search?cat=1002&search_text="},{name_cn:"音乐",url:"http://music.douban.com/subject_search?cat=1001&search_text="},{name_cn:"同城活动",url:"http://www.douban.com/event/search?search_text="}]},listTmpl:'<ul class="{{cls}}">{{#items}}<li><a href="{{url}}{{q}}">搜索 <b>{{q}}</b> 的{{name_cn}}</a></li>{{/items}}</ul>',leadChar:"%",tips:null})})})});

    Do(function(){
    var cache_url = cache_url || {};
    (function(u){ if(cache_url[u]){ return; } cache_url[u] = true; Do(function(){ $.getScript(u);}); })('http://img3.douban.com/js/lib/packed_sharebutton6925783327.js');});
    