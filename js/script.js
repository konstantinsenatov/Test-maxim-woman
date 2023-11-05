var test__swiper = new Swiper(".test__swiper", {
	navigation: {
		nextEl: ".test__btn-next",
		prevEl: ".test__btn-prev",
	},
	spaceBetween: 50,
	effect: 'fade',
	autoHeight: true,
});



$(document).ready(function() {
	$( ".test__radiobuttons .test__radiobuttons-item" ).on( "click", function() {
		if ($(this).children().first().prop('checked', true)) {
			$(this).parent().next().addClass('js-active');
			$(this).parent().children('.test__radiobuttons-item').addClass('js-disable');
		}
		if ($(this).hasClass('active')) {
			$(this).addClass('js-true');
		} else if (!$(this).hasClass('active')) {
			$(this).parent().children('.test__radiobuttons-item.active').addClass('js-true-result');
			$(this).addClass('js-false');
		}


	});
	$(document).on('click', '.show-result', function(event) {
		$('.result').addClass('show');
		$('.test__card').addClass('hide');
		$('.test__swiper').slideUp();


		const js_true_result = ( $( ".test__radiobuttons-item.js-true" ).length);
		if (js_true_result >= 0 && js_true_result <= 4) {
			$('.result1').addClass('active');
			$('.result2').removeClass('active');
		} else if (js_true_result >= 5 && js_true_result <= 8){
			$('.result2').addClass('active');
			$('.result1').removeClass('active');
		}
	});
	$(document).on('click', '.result__btn', function(event) {
		$('.test__radiobuttons .test__radiobuttons-item').parent().next().removeClass('js-active');
		$('.test__radiobuttons .test__radiobuttons-item input').prop('checked', false);;
		$('.test__radiobuttons-item.active').removeClass('js-true-result');
		$('.test__radiobuttons-item').removeClass('js-true');
		$('.test__radiobuttons-item').removeClass('js-false');
		$('.test__radiobuttons-item').removeClass('js-disable');
		$('.result').removeClass('show');
		$('.test__card').removeClass('hide');
		$('.test__swiper').slideDown();
		test__swiper.slideTo(0);
	});
});


