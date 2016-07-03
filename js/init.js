$(function(){

	$('.slider1').mobilyslider();

	$('.slider2').mobilyslider({
		transition: 'fade',
		animationSpeed: 500,
		autoplay: true,
		autoplaySpeed: 2500,
		pauseOnHover: true,
		bullets: false
	});

	$('.slider3').mobilyslider({
		transition: 'fade',
		animationSpeed: 800,
		bullets: true,
		arrowsHide: false
	});

});
