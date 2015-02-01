(function(c){c.flexslider=function(h,m,t){var a=c(h);a.vars=c.extend({},c.flexslider.defaults,m);var f=a.vars.namespace,u=window.navigator&&window.navigator.msPointerEnabled&&window.MSGesture,v=("ontouchstart"in window||u||window.DocumentTouch&&document instanceof DocumentTouch)&&a.vars.touch,s="click"+a.vars.eventNamespace+" touchend"+a.vars.eventNamespace+" MSPointerUp"+a.vars.eventNamespace,l="",w,p="vertical"===a.vars.direction,n=a.vars.reverse,k=0<a.vars.itemWidth,q="fade"===a.vars.animation, r=""!==a.vars.asNavFor,g={};t="undefined"!==typeof t?t++:0;c.data(h,"flexslider",a);g={init:function(){a.id=t;a.animating=!1;a.currentSlide=parseInt(a.vars.startAt?a.vars.startAt:0,10);isNaN(a.currentSlide)&&(a.currentSlide=0);a.animatingTo=a.currentSlide;a.atEnd=0===a.currentSlide||a.currentSlide===a.last;a.containerSelector=a.vars.selector.substr(0,a.vars.selector.search(" "));a.slides=c(a.vars.selector,a);a.container=c(a.containerSelector,a);a.count=a.slides.length;a.syncExists=0<c(a.vars.sync).length; "slide"===a.vars.animation&&(a.vars.animation="swing");a.prop=p?"top":"marginLeft";a.args={};a.manualPause=!1;a.stopped=!1;a.started=!1;a.startTimeout=null;a.transitions=!a.vars.video&&!q&&a.vars.useCSS&&function(){var b=document.createElement("div"),d=["perspectiveProperty","WebkitPerspective","MozPerspective","OPerspective","msPerspective"],e;for(e in d)if(void 0!==b.style[d[e]])return a.pfx=d[e].replace("Perspective","").toLowerCase(),a.prop="-"+a.pfx+"-transform",!0;return!1}();""!==a.vars.controlsContainer&& (a.controlsContainer=0<c(a.vars.controlsContainer).length&&c(a.vars.controlsContainer));""!==a.vars.manualControls&&(a.manualControls=0<c(a.vars.manualControls).length&&c(a.vars.manualControls));a.vars.randomize&&(a.slides.sort(function(){return Math.round(Math.random())-.5}),a.container.empty().append(a.slides));a.doMath();a.setup("init");a.vars.controlNav&&g.controlNav.setup();a.vars.directionNav&&g.directionNav.setup();a.vars.keyboard&&(1===c(a.containerSelector).length||a.vars.multipleKeyboard)&& c(document).bind("keyup"+a.vars.eventNamespace+"-"+a.id,function(b){b=b.keyCode;a.animating||39!==b&&37!==b||(b=39===b?a.getTarget("next"):37===b?a.getTarget("prev"):!1,a.flexAnimate(b,a.vars.pauseOnAction))});a.vars.mousewheel&&a.bind("mousewheel"+a.vars.eventNamespace,function(b,d,e,c){b.preventDefault();b=0>d?a.getTarget("next"):a.getTarget("prev");a.flexAnimate(b,a.vars.pauseOnAction)});a.vars.pausePlay&&g.pausePlay.setup();a.vars.slideshow&&a.vars.pauseInvisible&&g.pauseInvisible.init();a.vars.slideshow&& (a.vars.pauseOnHover&&a.hover(function(){a.manualPlay||a.manualPause||a.pause()},function(){a.manualPause||a.manualPlay||a.stopped||a.play()}),a.vars.pauseInvisible&&g.pauseInvisible.isHidden()||(0<a.vars.initDelay?a.startTimeout=setTimeout(a.play,a.vars.initDelay):a.play()));r&&g.asNav.setup();v&&a.vars.touch&&g.touch();(!q||q&&a.vars.smoothHeight)&&c(window).bind("resize"+a.vars.eventNamespace+"-"+a.id+" orientationchange"+a.vars.eventNamespace+"-"+a.id+" focus"+a.vars.eventNamespace+"-"+a.id,g.resize); a.find("img").attr("draggable","false");setTimeout(function(){a.vars.start(a)},200)},asNav:{setup:function(){a.asNav=!0;a.animatingTo=Math.floor(a.currentSlide/a.move);a.currentItem=a.currentSlide;a.slides.removeClass(f+"active-slide").eq(a.currentItem).addClass(f+"active-slide");if(u)h._slider=a,a.slides.each(function(){this._gesture=new MSGesture;this._gesture.target=this;this.addEventListener("MSPointerDown",function(a){a.preventDefault();a.currentTarget._gesture&&a.currentTarget._gesture.addPointer(a.pointerId)}, !1);this.addEventListener("MSGestureTap",function(b){b.preventDefault();b=c(this);var d=b.index();c(a.vars.asNavFor).data("flexslider").animating||b.hasClass("active")||(a.direction=a.currentItem<d?"next":"prev",a.flexAnimate(d,a.vars.pauseOnAction,!1,!0,!0))})});else a.slides.on(s,function(b){b.preventDefault();b=c(this);var d=b.index();0>=b.offset().left-c(a).scrollLeft()&&b.hasClass(f+"active-slide")?a.flexAnimate(a.getTarget("prev"),!0):c(a.vars.asNavFor).data("flexslider").animating||b.hasClass(f+ "active-slide")||(a.direction=a.currentItem<d?"next":"prev",a.flexAnimate(d,a.vars.pauseOnAction,!1,!0,!0))})}},controlNav:{setup:function(){a.manualControls?g.controlNav.setupManual():g.controlNav.setupPaging()},setupPaging:function(){var b=1,d,e;a.controlNavScaffold=c('<ol class="'+f+"control-nav "+f+("thumbnails"===a.vars.controlNav?"control-thumbs":"control-paging")+'"></ol>');if(1<a.pagingCount)for(var h=0;h<a.pagingCount;h++)e=a.slides.eq(h),d="thumbnails"===a.vars.controlNav?'<img src="'+e.attr("data-thumb")+ '"/>':"<a>"+b+"</a>","thumbnails"===a.vars.controlNav&&!0===a.vars.thumbCaptions&&(e=e.attr("data-thumbcaption"),""!=e&&void 0!=e&&(d+='<span class="'+f+'caption">'+e+"</span>")),a.controlNavScaffold.append("<li>"+d+"</li>"),b++;a.controlsContainer?c(a.controlsContainer).append(a.controlNavScaffold):a.append(a.controlNavScaffold);g.controlNav.set();g.controlNav.active();a.controlNavScaffold.delegate("a, img",s,function(b){b.preventDefault();if(""===l||l===b.type){var d=c(this),e=a.controlNav.index(d); d.hasClass(f+"active")||(a.direction=e>a.currentSlide?"next":"prev",a.flexAnimate(e,a.vars.pauseOnAction))}""===l&&(l=b.type);g.setToClearWatchedEvent()})},setupManual:function(){a.controlNav=a.manualControls;g.controlNav.active();a.controlNav.bind(s,function(b){b.preventDefault();if(""===l||l===b.type){var d=c(this),e=a.controlNav.index(d);d.hasClass(f+"active")||(e>a.currentSlide?a.direction="next":a.direction="prev",a.flexAnimate(e,a.vars.pauseOnAction))}""===l&&(l=b.type);g.setToClearWatchedEvent()})}, set:function(){a.controlNav=c("."+f+"control-nav li "+("thumbnails"===a.vars.controlNav?"img":"a"),a.controlsContainer?a.controlsContainer:a)},active:function(){a.controlNav.removeClass(f+"active").eq(a.animatingTo).addClass(f+"active")},update:function(b,d){1<a.pagingCount&&"add"===b?a.controlNavScaffold.append(c("<li><a>"+a.count+"</a></li>")):1===a.pagingCount?a.controlNavScaffold.find("li").remove():a.controlNav.eq(d).closest("li").remove();g.controlNav.set();1<a.pagingCount&&a.pagingCount!== a.controlNav.length?a.update(d,b):g.controlNav.active()}},directionNav:{setup:function(){var b=c('<ul class="'+f+'direction-nav"><li><a class="'+f+'prev" href="#">'+a.vars.prevText+'</a></li><li><a class="'+f+'next" href="#">'+a.vars.nextText+"</a></li></ul>");a.controlsContainer?(c(a.controlsContainer).append(b),a.directionNav=c("."+f+"direction-nav li a",a.controlsContainer)):(a.append(b),a.directionNav=c("."+f+"direction-nav li a",a));g.directionNav.update();a.directionNav.bind(s,function(b){b.preventDefault(); var e;if(""===l||l===b.type)e=c(this).hasClass(f+"next")?a.getTarget("next"):a.getTarget("prev"),a.flexAnimate(e,a.vars.pauseOnAction);""===l&&(l=b.type);g.setToClearWatchedEvent()})},update:function(){var b=f+"disabled";1===a.pagingCount?a.directionNav.addClass(b).attr("tabindex","-1"):a.vars.animationLoop?a.directionNav.removeClass(b).removeAttr("tabindex"):0===a.animatingTo?a.directionNav.removeClass(b).filter("."+f+"prev").addClass(b).attr("tabindex","-1"):a.animatingTo===a.last?a.directionNav.removeClass(b).filter("."+ f+"next").addClass(b).attr("tabindex","-1"):a.directionNav.removeClass(b).removeAttr("tabindex")}},pausePlay:{setup:function(){var b=c('<div class="'+f+'pauseplay"><a></a></div>');a.controlsContainer?(a.controlsContainer.append(b),a.pausePlay=c("."+f+"pauseplay a",a.controlsContainer)):(a.append(b),a.pausePlay=c("."+f+"pauseplay a",a));g.pausePlay.update(a.vars.slideshow?f+"pause":f+"play");a.pausePlay.bind(s,function(b){b.preventDefault();if(""===l||l===b.type)c(this).hasClass(f+"pause")?(a.manualPause= !0,a.manualPlay=!1,a.pause()):(a.manualPause=!1,a.manualPlay=!0,a.play());""===l&&(l=b.type);g.setToClearWatchedEvent()})},update:function(b){"play"===b?a.pausePlay.removeClass(f+"pause").addClass(f+"play").html(a.vars.playText):a.pausePlay.removeClass(f+"play").addClass(f+"pause").html(a.vars.pauseText)}},touch:function(){var b,d,e,c,g=!1,f=0;u&&(h.style.msTouchAction="none",h._gesture=new MSGesture,h._gesture.target=h,h.addEventListener("MSPointerDown",function(e){e.stopPropagation();a.animating? e.preventDefault():(a.pause(),h._gesture.addPointer(e.pointerId),f=0,d=p?a.h:a.w,c=Number(new Date),b=k&&n&&a.animatingTo===a.last?0:k&&n?a.limit-(a.itemW+a.vars.itemMargin)*a.move*a.animatingTo:k&&a.currentSlide===a.last?a.limit:k?(a.itemW+a.vars.itemMargin)*a.move*a.currentSlide:n?(a.last-a.currentSlide+a.cloneOffset)*d:(a.currentSlide+a.cloneOffset)*d)},!1),h._slider=a,h.addEventListener("MSGestureChange",function(a){a.stopPropagation();var k=a.target._slider;if(k){var l=-a.translationX,n=-a.translationY; e=f+=p?n:l;g=p?Math.abs(f)<Math.abs(-l):Math.abs(f)<Math.abs(-n);if(a.detail===a.MSGESTURE_FLAG_INERTIA)setImmediate(function(){h._gesture.stop()});else if(!g||500<Number(new Date)-c)a.preventDefault(),!q&&k.transitions&&(k.vars.animationLoop||(e=f/(0===k.currentSlide&&0>f||k.currentSlide===k.last&&0<f?Math.abs(f)/d+2:1)),k.setProps(b+e,"setTouch"))}},!1),h.addEventListener("MSGestureEnd",function(a){a.stopPropagation();if(a=a.target._slider){if(a.animatingTo===a.currentSlide&&!g&&null!==e){var h= n?-e:e,k=0<h?a.getTarget("next"):a.getTarget("prev");a.canAdvance(k)&&(550>Number(new Date)-c&&50<Math.abs(h)||Math.abs(h)>d/2)?a.flexAnimate(k,a.vars.pauseOnAction):q||a.flexAnimate(a.currentSlide,a.vars.pauseOnAction,!0)}b=e=null;f=0}},!1))},resize:function(){!a.animating&&a.is(":visible")&&(k||a.doMath(),q?g.smoothHeight():k?(a.slides.width(a.computedW),a.update(a.pagingCount),a.setProps()):p?(a.viewport.height(a.h),a.setProps(a.h,"setTotal")):(a.vars.smoothHeight&&g.smoothHeight(),a.newSlides.width(a.computedW), a.setProps(a.computedW,"setTotal")))},smoothHeight:function(b){if(!p||q){var d=q?a:a.viewport;b?d.animate({height:a.slides.eq(a.animatingTo).height()},b):d.height(a.slides.eq(a.animatingTo).height())}},sync:function(b){var d=c(a.vars.sync).data("flexslider"),e=a.animatingTo;switch(b){case "animate":d.flexAnimate(e,a.vars.pauseOnAction,!1,!0);break;case "play":d.playing||d.asNav||d.play();break;case "pause":d.pause()}},uniqueID:function(a){a.find("[id]").each(function(){var a=c(this);a.attr("id",a.attr("id")+ "_clone")});return a},pauseInvisible:{visProp:null,init:function(){var b=["webkit","moz","ms","o"];if("hidden"in document)return"hidden";for(var d=0;d<b.length;d++)b[d]+"Hidden"in document&&(g.pauseInvisible.visProp=b[d]+"Hidden");g.pauseInvisible.visProp&&(b=g.pauseInvisible.visProp.replace(/[H|h]idden/,"")+"visibilitychange",document.addEventListener(b,function(){g.pauseInvisible.isHidden()?a.startTimeout?clearTimeout(a.startTimeout):a.pause():a.started?a.play():0<a.vars.initDelay?setTimeout(a.play, a.vars.initDelay):a.play()}))},isHidden:function(){return document[g.pauseInvisible.visProp]||!1}},setToClearWatchedEvent:function(){clearTimeout(w);w=setTimeout(function(){l=""},3E3)}};a.flexAnimate=function(b,d,e,h,l){a.vars.animationLoop||b===a.currentSlide||(a.direction=b>a.currentSlide?"next":"prev");r&&1===a.pagingCount&&(a.direction=a.currentItem<b?"next":"prev");if(!a.animating&&(a.canAdvance(b,l)||e)&&a.is(":visible")){if(r&&h)if(e=c(a.vars.asNavFor).data("flexslider"),a.atEnd=0===b||b=== a.count-1,e.flexAnimate(b,!0,!1,!0,l),a.direction=a.currentItem<b?"next":"prev",e.direction=a.direction,Math.ceil((b+1)/a.visible)-1!==a.currentSlide&&0!==b)a.currentItem=b,a.slides.removeClass(f+"active-slide").eq(b).addClass(f+"active-slide"),b=Math.floor(b/a.visible);else return a.currentItem=b,a.slides.removeClass(f+"active-slide").eq(b).addClass(f+"active-slide"),!1;a.animating=!0;a.animatingTo=b;d&&a.pause();a.vars.before(a);a.syncExists&&!l&&g.sync("animate");a.vars.controlNav&&g.controlNav.active(); k||a.slides.removeClass(f+"active-slide").eq(b).addClass(f+"active-slide");a.atEnd=0===b||b===a.last;a.vars.directionNav&&g.directionNav.update();b===a.last&&(a.vars.end(a),a.vars.animationLoop||a.pause());if(q)v?(a.slides.eq(a.currentSlide).css({opacity:0,zIndex:1}),a.slides.eq(b).css({opacity:1,zIndex:2}),a.wrapup(m)):(a.slides.eq(a.currentSlide).css({zIndex:1}).animate({opacity:0},a.vars.animationSpeed,a.vars.easing),a.slides.eq(b).css({zIndex:2}).animate({opacity:1},a.vars.animationSpeed,a.vars.easing, a.wrapup));else{var m=p?a.slides.filter(":first").height():a.computedW;k?(b=a.vars.itemMargin,b=(a.itemW+b)*a.move*a.animatingTo,b=b>a.limit&&1!==a.visible?a.limit:b):b=0===a.currentSlide&&b===a.count-1&&a.vars.animationLoop&&"next"!==a.direction?n?(a.count+a.cloneOffset)*m:0:a.currentSlide===a.last&&0===b&&a.vars.animationLoop&&"prev"!==a.direction?n?0:(a.count+1)*m:n?(a.count-1-b+a.cloneOffset)*m:(b+a.cloneOffset)*m;a.setProps(b,"",a.vars.animationSpeed);a.transitions?(a.vars.animationLoop&&a.atEnd|| (a.animating=!1,a.currentSlide=a.animatingTo),a.container.unbind("webkitTransitionEnd"+a.vars.eventNamespace+" transitionend"+a.vars.eventNamespace),a.container.bind("webkitTransitionEnd"+a.vars.eventNamespace+" transitionend"+a.vars.eventNamespace,function(){a.wrapup(m)})):a.container.animate(a.args,a.vars.animationSpeed,a.vars.easing,function(){a.wrapup(m)})}a.vars.smoothHeight&&g.smoothHeight(a.vars.animationSpeed)}};a.wrapup=function(b){q||k||(0===a.currentSlide&&a.animatingTo===a.last&&a.vars.animationLoop? a.setProps(b,"jumpEnd"):a.currentSlide===a.last&&0===a.animatingTo&&a.vars.animationLoop&&a.setProps(b,"jumpStart"));a.animating=!1;a.currentSlide=a.animatingTo;a.vars.after(a)};a.animateSlides=function(){a.animating||a.flexAnimate(a.getTarget("next"))};a.pause=function(){clearInterval(a.animatedSlides);a.animatedSlides=null;a.playing=!1;a.vars.pausePlay&&g.pausePlay.update("play");a.syncExists&&g.sync("pause")};a.play=function(){a.playing&&clearInterval(a.animatedSlides);a.animatedSlides=a.animatedSlides|| setInterval(a.animateSlides,a.vars.slideshowSpeed);a.started=a.playing=!0;a.vars.pausePlay&&g.pausePlay.update("pause");a.syncExists&&g.sync("play")};a.stop=function(){a.pause();a.stopped=!0};a.canAdvance=function(b,d){var e=r?a.pagingCount-1:a.last;return d?!0:r&&a.currentItem===a.count-1&&0===b&&"prev"===a.direction?!0:r&&0===a.currentItem&&b===a.pagingCount-1&&"next"!==a.direction?!1:b!==a.currentSlide||r?a.vars.animationLoop?!0:a.atEnd&&0===a.currentSlide&&b===e&&"next"!==a.direction?!1:a.atEnd&& a.currentSlide===e&&0===b&&"next"===a.direction?!1:!0:!1};a.getTarget=function(b){a.direction=b;return"next"===b?a.currentSlide===a.last?0:a.currentSlide+1:0===a.currentSlide?a.last:a.currentSlide-1};a.setProps=function(b,d,e){var c=function(){var c=b?b:(a.itemW+a.vars.itemMargin)*a.move*a.animatingTo;return-1*function(){if(k)return"setTouch"===d?b:n&&a.animatingTo===a.last?0:n?a.limit-(a.itemW+a.vars.itemMargin)*a.move*a.animatingTo:a.animatingTo===a.last?a.limit:c;switch(d){case "setTotal":return n? (a.count-1-a.currentSlide+a.cloneOffset)*b:(a.currentSlide+a.cloneOffset)*b;case "setTouch":return b;case "jumpEnd":return n?b:a.count*b;case "jumpStart":return n?a.count*b:b;default:return b}}()+"px"}();a.transitions&&(c=p?"translate3d(0,"+c+",0)":"translate3d("+c+",0,0)",e=void 0!==e?e/1E3+"s":"0s",a.container.css("-"+a.pfx+"-transition-duration",e),a.container.css("transition-duration",e));a.args[a.prop]=c;(a.transitions||void 0===e)&&a.container.css(a.args);a.container.css("transform",c)};a.setup= function(b){if(q)a.slides.css({width:"100%","float":"left",marginRight:"-100%",position:"relative"}),"init"===b&&(v?a.slides.css({opacity:0,display:"block",webkitTransition:"opacity "+a.vars.animationSpeed/1E3+"s ease",zIndex:1}).eq(a.currentSlide).css({opacity:1,zIndex:2}):a.slides.css({opacity:0,display:"block",zIndex:1}).eq(a.currentSlide).css({zIndex:2}).animate({opacity:1},a.vars.animationSpeed,a.vars.easing)),a.vars.smoothHeight&&g.smoothHeight();else{var d,e;"init"===b&&(a.viewport=c('<div class="'+ f+'viewport"></div>').css({overflow:"hidden",position:"relative"}).appendTo(a).append(a.container),a.cloneCount=0,a.cloneOffset=0,n&&(e=c.makeArray(a.slides).reverse(),a.slides=c(e),a.container.empty().append(a.slides)));a.vars.animationLoop&&!k&&(a.cloneCount=2,a.cloneOffset=1,"init"!==b&&a.container.find(".clone").remove(),g.uniqueID(a.slides.first().clone().addClass("clone").attr("aria-hidden","true")).appendTo(a.container),g.uniqueID(a.slides.last().clone().addClass("clone").attr("aria-hidden", "true")).prependTo(a.container));a.newSlides=c(a.vars.selector,a);d=n?a.count-1-a.currentSlide+a.cloneOffset:a.currentSlide+a.cloneOffset;p&&!k?(a.container.height(200*(a.count+a.cloneCount)+"%").css("position","absolute").width("100%"),setTimeout(function(){a.newSlides.css({display:"block"});a.doMath();a.viewport.height(a.h);a.setProps(d*a.h,"init")},"init"===b?100:0)):(a.container.width(200*(a.count+a.cloneCount)+"%"),a.setProps(d*a.computedW,"init"),setTimeout(function(){a.doMath();a.newSlides.css({width:a.computedW, "float":"left",display:"block"});a.vars.smoothHeight&&g.smoothHeight()},"init"===b?100:0))}k||a.slides.removeClass(f+"active-slide").eq(a.currentSlide).addClass(f+"active-slide");a.vars.init(a)};a.doMath=function(){var b=a.slides.first(),d=a.vars.itemMargin,c=a.vars.minItems,f=a.vars.maxItems;a.w=void 0===a.viewport?a.width():a.viewport.width();a.h=b.height();a.boxPadding=b.outerWidth()-b.width();k?(a.itemT=a.vars.itemWidth+d,a.minW=c?c*a.itemT:a.w,a.maxW=f?f*a.itemT-d:a.w,a.itemW=a.minW>a.w?(a.w- d*(c-1))/c:a.maxW<a.w?(a.w-d*(f-1))/f:a.vars.itemWidth>a.w?a.w:a.vars.itemWidth,a.visible=Math.floor(a.w/a.itemW),a.move=0<a.vars.move&&a.vars.move<a.visible?a.vars.move:a.visible,a.pagingCount=Math.ceil((a.count-a.visible)/a.move+1),a.last=a.pagingCount-1,a.limit=1===a.pagingCount?0:a.vars.itemWidth>a.w?a.itemW*(a.count-1)+d*(a.count-1):(a.itemW+d)*a.count-a.w-d):(a.itemW=a.w,a.pagingCount=a.count,a.last=a.count-1);a.computedW=a.itemW-a.boxPadding};a.update=function(b,d){a.doMath();k||(b<a.currentSlide? a.currentSlide+=1:b<=a.currentSlide&&0!==b&&(a.currentSlide-=1),a.animatingTo=a.currentSlide);if(a.vars.controlNav&&!a.manualControls)if("add"===d&&!k||a.pagingCount>a.controlNav.length)g.controlNav.update("add");else if("remove"===d&&!k||a.pagingCount<a.controlNav.length)k&&a.currentSlide>a.last&&(a.currentSlide-=1,a.animatingTo-=1),g.controlNav.update("remove",a.last);a.vars.directionNav&&g.directionNav.update()};a.addSlide=function(b,d){var e=c(b);a.count+=1;a.last=a.count-1;p&&n?void 0!==d?a.slides.eq(a.count- d).after(e):a.container.prepend(e):void 0!==d?a.slides.eq(d).before(e):a.container.append(e);a.update(d,"add");a.slides=c(a.vars.selector+":not(.clone)",a);a.setup();a.vars.added(a)};a.removeSlide=function(b){var d=isNaN(b)?a.slides.index(c(b)):b;a.count-=1;a.last=a.count-1;isNaN(b)?c(b,a.slides).remove():p&&n?a.slides.eq(a.last).remove():a.slides.eq(b).remove();a.doMath();a.update(d,"remove");a.slides=c(a.vars.selector+":not(.clone)",a);a.setup();a.vars.removed(a)};a.destroy=function(){var b="."+ a.vars.namespace;a.vars.controlNav&&a.controlNav.closest(b+"control-nav").remove();a.vars.directionNav&&a.directionNav.closest(b+"direction-nav").remove();a.vars.pausePlay&&a.pausePlay.closest(b+"pauseplay").remove();a.find(".clone").remove();a.unbind(a.vars.eventNamespace);"fade"!=a.vars.animation&&a.container.unwrap();a.container.removeAttr("style");a.container.unbind(a.vars.eventNamespace);a.slides.removeAttr("style");a.slides.filter(b+"active-slide").removeClass(a.vars.namespace+"active-slide"); a.slides.unbind(a.vars.eventNamespace);c(document).unbind(a.vars.eventNamespace+"-"+a.id);c(window).unbind(a.vars.eventNamespace+"-"+a.id);a.stop();a.removeData("flexslider")};g.init()};c(window).blur(function(c){focused=!1}).focus(function(c){focused=!0});c.flexslider.defaults={namespace:"flex-",eventNamespace:".flexslider",selector:".slides > li",animation:"fade",easing:"swing",direction:"horizontal",reverse:!1,animationLoop:!0,smoothHeight:!1,startAt:0,slideshow:!0,slideshowSpeed:7E3,animationSpeed:600, initDelay:0,randomize:!1,thumbCaptions:!1,pauseOnAction:!0,pauseOnHover:!1,pauseInvisible:!0,useCSS:!0,touch:!0,video:!1,controlNav:!0,directionNav:!0,prevText:"",nextText:"",keyboard:!0,multipleKeyboard:!1,mousewheel:!1,pausePlay:!1,pauseText:"Pause",playText:"Play",controlsContainer:"",manualControls:"",sync:"",asNavFor:"",itemWidth:0,itemMargin:0,minItems:1,maxItems:0,move:0,allowOneSlide:!0,start:function(){},before:function(){},after:function(){},end:function(){},added:function(){},removed:function(){}, init:function(){}};var x=0;c.fn.flexslider=function(h){void 0===h&&(h={});if("object"===typeof h)return this.each(function(){var m=c(this),a=m.find(h.selector?h.selector:".slides > li");1===a.length&&!0===h.allowOneSlide||0===a.length?(a.fadeIn(400),h.start&&h.start(m)):void 0===m.data("flexslider")&&new c.flexslider(this,h,x++)});var m=c(this).data("flexslider");switch(h){case "play":m.play();break;case "pause":m.pause();break;case "stop":m.stop();break;case "next":m.flexAnimate(m.getTarget("next"), !0);break;case "prev":case "previous":m.flexAnimate(m.getTarget("prev"),!0);break;case "destroy":m.destroy();break;default:"number"===typeof h&&m.flexAnimate(h,!0)}}})(jQuery);