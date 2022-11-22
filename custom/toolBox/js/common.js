$(function () {
	if ($(window).width() < 768) {
		$(".menu .con").removeClass("content");
	}
	//默认状态
	if ($(window).width() > 768) {

		if ($(window).scrollTop() > 10) {
			$(".header").addClass("add");
		} else {
			$(".header").removeClass("add");
		}

		//滚动的时候
		$(window).scroll(function () {
			if ($(window).scrollTop() > 10) {
				$(".header").addClass("add");
			} else {
				$(".header").removeClass("add");
			}

		});
	} else {
		if ($(window).scrollTop() > 10) {
			$(".header").addClass("add");
		} else {
			$(".header").addClass("add");
		}
		$(window).scroll(function () {
			if ($(window).scrollTop() > 10) {
				$(".header").addClass("add");
			} else {
				$(".header").addClass("add");
			}

		});
	}

	//窗口改变大小 
	$(window).on('resize', function () {
		if ($(window).width() > 768) {
			if ($(window).scrollTop() > 10) {
				$(".header").addClass("add");
			} else {
				$(".header").removeClass("add");
			}

			//滚动的时候
			$(window).scroll(function () {
				if ($(window).scrollTop() > 10) {
					$(".header").addClass("add");
				} else {
					$(".header").removeClass("add");
				}

			});
		} else {
			if ($(window).scrollTop() > 10) {
				$(".header").addClass("add");
			} else {
				$(".header").addClass("add");
			}

			$(window).scroll(function () {
				if ($(window).scrollTop() > 10) {
					$(".header").addClass("add");
				} else {
					$(".header").addClass("add");
				}

			});

		}
	});

	//底部二维码
	//$(".footer dt").hover( function(){$(this).find(".hidebox").fadeIn()},function(){$(this).find(".hidebox").hide()}) 
	$(".footer dt .b2").click(function () {
		$(this).parent().find(".hidebox").fadeIn();
		$(".mark").fadeIn();
	})

	$(".mark").click(function () {
		$(this).hide();
		$(".hidebox").hide();
	})
	/*$(document).bind("click",function(e){
	   var target  = $(e.target);
	   if(target.closest(".hidebox").length == 0){
	   $(".hidebox").hide();
	   };
	   e.stopPropagation();
	   })*/

});


//返回顶部
$(function () {
	$(window).scroll(function () {
		if ($(window).scrollTop() > 120) {
			$("#side-bar .gotop").fadeIn();
		}
		else {
			$("#side-bar .gotop").fadeOut();
		}
	});
	$("#side-bar .gotop").click(function () {
		$('html,body').animate({ 'scrollTop': 0 }, 500);
	});


});
//tab切换
; (function ($) {
	$.fn.tabso = function (options) {
		var opts = $.extend({}, $.fn.tabso.defaults, options);

		return this.each(function (i) {
			var _this = $(this);
			var $menus = _this.children(opts.menuChildSel);
			var $container = $(opts.cntSelect).eq(i);

			if (!$container) return;

			if (opts.tabStyle == "move" || opts.tabStyle == "move-fade" || opts.tabStyle == "move-animate") {
				var step = 0;
				if (opts.direction == "left") {
					step = $container.children().children(opts.cntChildSel).outerWidth(true);
				} else {
					step = $container.children().children(opts.cntChildSel).outerHeight(true);
				}
			}

			if (opts.tabStyle == "move-animate") { var animateArgu = new Object(); }

			$menus[opts.tabEvent](function () {
				var index = $menus.index($(this));
				$(this).addClass(opts.onStyle)
					.siblings().removeClass(opts.onStyle);
				switch (opts.tabStyle) {
					case "fade":
						if (!($container.children(opts.cntChildSel).eq(index).is(":animated"))) {
							$container.children(opts.cntChildSel).eq(index).siblings().css("display", "none")
								.end().stop(true, true).fadeIn(opts.aniSpeed);
						}
						break;
					case "move":
						$container.children(opts.cntChildSel).css(opts.direction, -step * index + "px");
						break;
					case "move-fade":
						if ($container.children(opts.cntChildSel).css(opts.direction) == -step * index + "px") break;
						$container.children(opts.cntChildSel).stop(true).css("opacity", 0).css(opts.direction, -step * index + "px").animate({ "opacity": 1 }, opts.aniSpeed);
						break;
					case "move-animate":
						animateArgu[opts.direction] = -step * index + "px";
						$container.children(opts.cntChildSel).stop(true).animate(animateArgu, opts.aniSpeed, opts.aniMethod);
						break;
					default:
						$container.children(opts.cntChildSel).eq(index).css("display", "block")
							.siblings().css("display", "none");
				}

			});

			$menus.eq(0)[opts.tabEvent]();

		});
	};

	$.fn.tabso.defaults = {
		cntSelect: ".content_wrap",
		tabEvent: "mouseover",
		tabStyle: "normal",
		direction: "top",
		aniMethod: "swing",
		aniSpeed: "fast",
		onStyle: "current",
		menuChildSel: "*",
		cntChildSel: "*"
	};

})(jQuery);

//微信弹出
$(document).ready(function ($) {
	$('.weixinbt').click(function () {
		$('.ladaybox').show();
		$('.ladaybox').height($(document).height());
		$('.popover1').slideDown(200);
	})
	$('.close').click(function () {
		$('.ladaybox').hide();
		$('.popover1').slideUp(200);

	})

	$('.addadreed').click(function () {
		var oLogin = $('.publicbox');
		oLogin.css('left', ($(window).width() - oLogin.outerWidth()) / 2);
		oLogin.css('top', ($(window).height() - oLogin.outerHeight()) / 2 + $(window).scrollTop());

		oLogin.fadeIn();
		$('.ladaybox').show();
		$('.ladaybox').height($(document).height());

		$('.publicbox .close,.ladaybox').click(function () {
			oLogin.fadeOut();
			$('.ladaybox').hide();
		});

		$(window).on('resize scroll', function () {
			oLogin.css('left', ($(window).width() - oLogin.outerWidth()) / 2);
			oLogin.css('top', ($(window).height() - oLogin.outerHeight()) / 2 + $(window).scrollTop());
		});
	});
})

$(function () {
	$(".qqbox .close").click(function () {
		$(".qqbox").fadeOut();
	})
})

