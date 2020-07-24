$(document).ready(function () {
	$('.hamburger').on('click', function () {
		$('.hamburger').toggleClass('is-active');
		$('.mob-menu').toggleClass('menu-active');
		$('.mob-menu__circle').toggleClass('mob-menu__circle--transform');
		/* $('html, body').toggleClass('scroll'); */
	});

	

	// SLICK-SLIDER

	$(".specialties-slider").slick({
		arrows:false,
		dots:true,
		slidesToShow:1,
		appendDots:$('.specialties-slider_dots')
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
	/* $(function(){
		$('.header-block__nav, .nav__list--footer-column').on("click","a", function (event) {
			event.preventDefault();
			//забираем идентификатор с атрибута href
			var id  = $(this).attr('href'),
			//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).position().top;
			//анимируем переход на расстояние
			$('body,html').animate({scrollTop: top}, 1000);
		}); */

	// МАСКА ДЛЯ ТЕЛЕФОНА
	/* $(function () {
		$("#phone").mask('+7 (999) 999-9999', {
			autoclear: false
		});
	}); */

	// СТИЛИЗАЦИЯ СКРОЛА
	/* $(".inner-block__order-list").mCustomScrollbar({}); */
});