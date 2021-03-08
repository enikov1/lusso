$(document).ready(function () {
   

	$('#carousel-article, #carousel-article2').owlCarousel({
		items: 2,
		mouseDrag: false,
		nav: true,
		navText: [
			'<i class="far fa-angle-left"></i>',
			'<i class="far fa-angle-right"></i>'
		],
		margin: 30,
        autoHeight : true,
		responsive : {
			320: {
				items: 1,
				margin: 15,
			},
			540: {
				items: 2,
			}
		}
	});
	

	$('#carousel-cart, #carousel-cart2').owlCarousel({
		items: 4,
		mouseDrag: false,
		nav: true,
		navText: [
			'<i class="far fa-angle-left"></i>',
			'<i class="far fa-angle-right"></i>'
		],
		margin: 30,
        autoHeight : true,
		responsive : {
			320: {
				items: 2,
				margin: 15,
			},
			540: {
				items: 3,
			},
			768: {
				items: 4,
			}
		}
	});

	$('#reviews-cart, #reviews-cart2').owlCarousel({
		items: 1,
		mouseDrag: false,
		nav: true,
		navText: [
			'<i class="far fa-angle-left"></i>',
			'<i class="far fa-angle-right"></i>'
		],
		margin: 30,
        autoHeight : true,
	});

	$('.select-field').customSelect();

	$('.image-nav img').on('click', function() {

		let src = $(this).attr('src');
		
		$('.image-wrap img').attr('src', src);
		
	});

	let header_content = $('.header-block .tab'),
		header_bottom = $('.header-bottom .line'),
		header = $('.header');

	$('#diva').on('click', function() {

		let _this = $(this);

		_this.removeClass('white').addClass('green').find('img').attr('src', './img/diva-logo-white.png');
		_this.siblings().removeClass('green').addClass('white').find('img').attr('src', './img/lusso-logo-black.png');

		header.removeClass('first').addClass('last');
		header_bottom.eq(1).addClass('active').siblings().removeClass('active');
		header_content.eq(1).addClass('active').siblings().removeClass('active');

		$('#carousel-article_2').fadeIn().siblings().fadeOut();
		$('#carousel-cart_2').fadeIn().siblings().fadeOut();
		$('#carousel-review_2').fadeIn().siblings().fadeOut();

		$('#nav-diva').addClass('active').siblings().removeClass('active');
	});

	$('#lusso').on('click', function() {

		let _this = $(this);

		_this.removeClass('white').addClass('green').find('img').attr('src', './img/lusso-logo-white.png');
		_this.siblings().removeClass('green').addClass('white').find('img').attr('src', './img/diva-logo-black.png');

		header.removeClass('last').addClass('first');
		header_bottom.eq(0).addClass('active').siblings().removeClass('active');
		header_content.eq(0).addClass('active').siblings().removeClass('active');
		
		$('#carousel-article_1').fadeIn().siblings().fadeOut();
		$('#carousel-cart_1').fadeIn().siblings().fadeOut();
		$('#carousel-review_1').fadeIn().siblings().fadeOut();

		$('#nav-lusso').addClass('active').siblings().removeClass('active');
	});
	

	$('.subs-form').on('submit', function(e) {
		e.preventDefault();

		$.ajax({
			url: '/send.php',
			method: 'post',
			dataType: 'html',
			data: $(this).serialize(),
			success: function(data){
				$('.subs-form').append('<div class="message">Вы успешно подписались на рассылку!</div>');

				setTimeout(function() {
					$('.subs-form').find('.message').remove();
				}, 5000);
			}
		});
	});

});
