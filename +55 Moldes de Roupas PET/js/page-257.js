!function(t,e,i){t((function(){t('a[href^="#"]').on("click",(function(i){if("1"===t(this).attr("data-op3-smooth-scroll")){let o=this.hash;t("html, body").animate({scrollTop:t(o).offset().top},1500,(function(){e.location.hash=o})),i.preventDefault()}}))}))}(jQuery,window,document),function(t,e,i){"use strict";t(i).ready((function(){var i=t('[data-op3-element-type="video"]'),a=i.find("iframe");a.ready((function(){t('[data-op3-element-type="video"] .op3-video-image-overlay').on("click",o)})),t(e).on("beforeunload",(function(){a.each((function(){var e=t(this).attr("src");e&&(e=e.replace("autoplay=1","autoplay=0"),t(this).attr("src",e))}))}));var s=t('[data-op3-video-sticky="1"]');if(i.attr("data-op3-video-sticky-active","0"),e.IntersectionObserver&&s.length>0){var n=function(t){t.css("height",t.height()+"px"),t.attr("data-op3-video-sticky-active","1"),setTimeout((function(){var e=t.find(".op3-video-wrapper");"fixed"===e.css("position")&&t.find(".op3-video-image-overlay").css({height:e.height(),"max-width":e.width(),left:e.css("left"),right:e.css("right"),top:e.css("top"),bottom:e.css("bottom")}).attr("data-op3-video-sticky-position",e.attr("data-op3-video-sticky-position")).find(".op3-icon").css("font-size","70px")}))},c=function(t){t.css("height","auto"),t.attr("data-op3-video-sticky-active","0"),setTimeout((function(){t.find(".op3-video-image-overlay").css({height:"","max-width":"",left:"",right:"",top:"",bottom:""}).removeAttr("data-op3-video-sticky-position").find(".op3-icon").css("font-size","")}))};OP3.StickyVideo={},OP3.StickyVideo.observer=new IntersectionObserver((function(e,i){e.forEach((function(e){e.isIntersecting||e.boundingClientRect.y>0?c(t(e.target)):"1"!==t(e.target).attr("data-op3-video-sticky-closed")&&n(t(e.target))}))})),s.each((function(){if("1"===t(this).attr("data-op3-video-sticky-close")){var e=t(this),i=e.closest(".op3-element").find(".op3-video-image-overlay");t('<button class="op3-video-sticky-close embed-video-facade-disabled"></button>').appendTo(i.length?i:e)}OP3.StickyVideo.observer.observe(t(this).parent().get(0))})),t(e).on("resize",(function(){s.each((function(){var e=t(this).parent();"0"!==e.attr("data-op3-video-sticky-active")&&(c(e),n(e))}))})),t(".op3-video-sticky-close").on("click",(function(e){var i=t(this).closest(".op3-element");i.attr("data-op3-video-sticky-closed","1"),c(i);var o=i.find("iframe");if(o.length>0){var a=o.attr("src");a&&(o.attr("src",""),o.attr("data-src",a),a=a.replace(/([\?&])autoplay=[01]/,"$1autplay=0"),o.attr("src",a),o.removeAttr("data-src"))}var s=i.find("video");s.length>0&&s.get(0).pause(),e.preventDefault()}))}i.each((function(){var e=t(this),i=e.find(".op3-video-image-overlay");e.find('.op3-video-wrapper[data-op3-video-autoplay="1"]').length>0&&i.is(":visible")&&i.css("display","none")}))})),t("video[data-op3-video-selfhosted]").each((function(e){var o=this;o.autoplay&&o.paused&&t(i).one("touchstart",(function(){o.play()}))}));var o=function(e){if(!t(e.target).closest(".op3-video-sticky-close").length){var i=t(this).parent().find("iframe");if(t(this).addClass("op3-video-image-overlay-disabled").find(".op3-icon").css("display","none"),t(this).find(".op3-video-sticky-close").appendTo(t(this).closest(".op3-element").find('[data-op3-video-sticky="1"]')),!t(this).is(".embed-video-facade-interact"))if(i.length>0){var o=i.attr("src");o=-1!==o.indexOf("autoplay=0")?o.replace("autoplay=0","autoplay=1"):o+=(o.indexOf("?")>-1?"&":"?")+"autoplay=1",i.attr("src",o)}else{var a=t(this).parent().find("video");a.length>0&&a.get(0).play()}}}}(jQuery,window,document);