$(document).ready(function () {
	$('.hamburger').on('click', function () {
		$('.hamburger').toggleClass('is-active');
		$('.mob-menu').toggleClass('menu-active');
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
	$(function () {
		$('.menu').on("click", "a", function (event) {
			event.preventDefault();
			//забираем идентификатор с атрибута href
			var id = $(this).attr('href'),
				//узнаем высоту от начала страницы до блока на который ссылается якорь
				top = $(id).position().top;
			//анимируем переход на расстояние
			$('body, html').animate({scrollTop: top}, 600);
			$('.hamburger').toggleClass('is-active');
			$('.mob-menu').toggleClass('menu-active');
			$('.mob-menu__circle').toggleClass('mob-menu__circle--transform');
			$('body').toggleClass('scroll');

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
});