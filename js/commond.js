$(document).ready(function(){$("header").removeClass("header_fixed"),$(window).scroll(function(){$(this).scrollTop()>20?$("header").addClass("header_fixed"):$("header").removeClass("header_fixed")}),$(".burger").click(function(){$(this).next().slideToggle()}),$(".burger").click(function(){$(this).toggleClass("open")}),$(".nav").on("click","a",function(a){a.preventDefault();var e=$(this).attr("href"),o=$(e).offset().top;$("body,html").animate({scrollTop:o},2e3),$(".burger").hasClass("open")&&($(".burger").removeClass("open"),$(".nav").css("display","none"),$(document).mouseup(function(a){var e=$(".nav");e.is(a.target)||0!==e.has(a.target).length||($(".burger").removeClass("open"),$(".nav").css("display","none"))}))}),$("span .fa-search").click(function(){$(".search").slideToggle()}),$(".search").submit(function(a){$(".thank-you-message").css("display","inline-block"),$(".search").css("display","none"),a.preventDefault(),$("span .fa-search").click(function(){$(".thank-you-message").css("display","none"),$(".search").css("display","inline-block")})}),$(".scroll").click(function(a){a.preventDefault();var e=$(this).attr("href"),o=$(e).offset().top;$("html, body").animate({scrollTop:o},1e3)}),$(".web_carousel").owlCarousel({items:1,loop:!0,autoplay:!0,autoplayTimeout:2e4,nav:!0,navText:['<i class="fa fa-angle-left" ></i>','<i class="fa fa-angle-right"></i>']}),$(".project_carousel").owlCarousel({items:1,dots:!0,autoplay:!0,autoplayTimeout:5e3,loop:!0}),$(".do_carousel").owlCarousel({items:1,dots:!0,autoplay:!0,autoplayTimeout:4e3,loop:!0}),$(".do_carousel_2").owlCarousel({items:1,dots:!0,autoplay:!0,autoplayTimeout:4e3,loop:!0}),$(".feedback_carousel").owlCarousel({items:1,loop:!0,autoplay:!0,autoplayTimeout:1e4,nav:!0,navText:['<i class="fa fa-angle-left" ></i>','<i class="fa fa-angle-right"></i>']}),$(window).scroll(function(){$(this).scrollTop()>$(this).height()?$(".top").addClass("active"):$(".top").removeClass("active")}),$(".top").click(function(){$("html, body").stop().animate({scrollTop:0},"slow","swing")}),$(".js-overlay-campaign").fadeIn(),$(".js-overlay-campaign").addClass("disabled"),$(".js-close-campaign").click(function(){$(".js-overlay-campaign").fadeOut()}),$(document).mouseup(function(a){var e=$(".js-popup-campaign");a.target!=e[0]&&0===e.has(a.target).length&&$(".js-overlay-campaign").fadeOut()}),$(window).on("load",function(){setTimeout(function(){if($(".js-overlay-campaign").hasClass("disabled"))return!1;$(".js-overlay-campaign").fadeIn()},1e4)}),$(".popup_form").click(function(a){a.preventDefault(),$("#form").slideToggle(),$(document).mouseup(function(a){var e=$("#form");a.target!=e[0]&&0===e.has(a.target).length&&$("#form").fadeOut()})}),$("#form").submit(function(a){$(".thank-you-message-form").css("display","block"),$("#form").css("display","none"),a.preventDefault()}),$("#form").find("input, textarea").on("keyup blur focus",function(a){var e=$(this),o=e.prev("label");"keyup"===a.type?""===e.val()?o.removeClass("active highlight"):o.addClass("active highlight"):"blur"===a.type?""===e.val()?o.removeClass("active highlight"):o.removeClass("highlight"):"focus"===a.type&&(""===e.val()?o.removeClass("highlight"):""!==e.val()&&o.addClass("highlight"))}),$(".tab a").on("click",function(a){a.preventDefault(),$(this).parent().addClass("active"),$(this).parent().siblings().removeClass("active"),target=$(this).attr("href"),$(".tab-content > div").not(target).hide(),$(target).fadeIn(600)}),$(".js-overlay-campaign").fadeIn(),$(".js-overlay-campaign").addClass("disabled"),$(".js-close-campaign").click(function(){$(".js-overlay-campaign").fadeOut()}),$(document).mouseup(function(a){var e=$(".js-popup-campaign");a.target!=e[0]&&0===e.has(a.target).length&&$(".js-overlay-campaign").fadeOut()}),$(window).on("load",function(){setTimeout(function(){if($(".js-overlay-campaign").hasClass("disabled"))return!1;$(".js-overlay-campaign").fadeIn()},1e4)})});
