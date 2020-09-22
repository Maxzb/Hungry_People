@@include('libs/parallax.min.js')
@@include('libs/slick.min.js')
@@include('libs/jquery.maskedinput.min.js')
@@include('libs/fancybox.min.js')

$(document).ready(function () {
	$('.hamburger').on('click', function() {
		$('.hamburger').toggleClass('is-active');
		$('.mob-menu').toggleClass('menu-active');
		$('.mob-menu').toggleClass('mob-menu-overflow');
		$('.mob-menu__circle').toggleClass('mob-menu__circle--transform');
		$('body').toggleClass('scroll');
	});



	// SLICK-SLIDER

	$(".specialties-slider").slick({
		arrows: false,
		dots: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		adaptiveHeight: true,
		autoplay: true,
		autoplaySpeed: 3500,
		appendDots: $('.specialties-slider_dots')
		/* speed:1000, */
		/* responsive:[
			{
				breakpoint: 768,
				settings: {
					slidesToShow:2
				}
			},
			{
				breakpoint: 550,
				settings: {
					slidesToShow:1
				}
			}
		] */
	});

	//ПЛАВНОЕ ПЕРЕМЕЩЕНИЕ К ЯКОРЯМ
	$(document).ready(function() {
		$('.menu').on("click", "a", function (e) {
			e.preventDefault();
			//забираем идентификатор с атрибута href
			var id = $(this).attr('href'),
				//узнаем высоту от начала страницы до блока на который ссылается якорь
				top = $(id).position().top;
			//анимируем переход на расстояние
			$('body, html').animate({scrollTop: top}, 600);
			$('.hamburger').toggleClass('is-active');
			$('.mob-menu').toggleClass('menu-active');
			$('.mob-menu__circle').toggleClass('mob-menu__circle--transform');
			$('body').removeClass('scroll');
			$('.mob-menu').toggleClass('mob-menu-overflow');
		});
	});

	// МАСКА ДЛЯ ТЕЛЕФОНА
	$(function () {
		$("#tel").mask('+40 999 999 999', {
			autoclear: false
		});
	});

	// СТИЛИЗАЦИЯ СКРОЛА
	/* $(".inner-block__order-list").mCustomScrollbar({}); */

	//DELICIOUS MENU
	$('.soupe-link').on("click", function(e) {
      e.preventDefault();
      $('.delicious-menu-block__block').removeClass('active_menu');
      $('.soupe_menu').addClass('active_menu');
      $('.menu-link').css('color', '#000');
      $('.soupe-link').css('color', '#e8c300');
   });

	$('.pizza-link').on("click", function(e) {
      e.preventDefault();
      $('.delicious-menu-block__block').removeClass('active_menu');
      $('.pizza_menu').addClass('active_menu');
      $('.menu-link').css('color', '#000');
      $('.pizza-link').css('color', '#e8c300');   
   });
	$('.pasta-link').on("click", function(e) {
      e.preventDefault();
      $('.delicious-menu-block__block').removeClass('active_menu');
      $('.pasta_menu').addClass('active_menu');
      $('.menu-link').css('color', '#000');
      $('.pasta-link').css('color', '#e8c300');   
   });
	$('.desert-link').on("click", function(e) {
      e.preventDefault();
      $('.delicious-menu-block__block').removeClass('active_menu');
      $('.desert_menu').addClass('active_menu');
      $('.menu-link').css('color', '#000');
      $('.desert-link').css('color', '#e8c300');   
   });
	$('.wine-link').on("click", function(e) {
      e.preventDefault();
      $('.delicious-menu-block__block').removeClass('active_menu');
      $('.wine_menu').addClass('active_menu');
      $('.menu-link').css('color', '#000');
      $('.wine-link').css('color', '#e8c300');   
   });
	$('.beer-link').on("click", function(e) {
      e.preventDefault();
      $('.delicious-menu-block__block').removeClass('active_menu');
      $('.beer_menu').addClass('active_menu');
      $('.menu-link').css('color', '#000');
      $('.beer-link').css('color', '#e8c300');   
   });
	$('.drinks-link').on("click", function(e) {
      e.preventDefault();
      $('.delicious-menu-block__block').removeClass('active_menu');
      $('.drinks_menu').addClass('active_menu');
      $('.menu-link').css('color', '#000');
      $('.drinks-link').css('color', '#e8c300');   
   });

	const a = 5;
	const c = 10;

	function babel() {
		return a + c;
	}
	console.log(babel());
});