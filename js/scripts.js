$(document).ready(function(){

	var nowDate = Date.now(),
		finishDate = 1538065768106;
    
        //alert(nowDate);
    
	var c_delta = Math.abs(finishDate - nowDate)/1000;

	var c_days = Math.floor(c_delta/86400);
	c_delta -= c_days*86400;

	var c_hours = Math.floor(c_delta / 3600) % 24;


	$('.c_days').text(c_days);
	$('.c_hours').text(c_hours);
		
	
	$(document).on('click touchend', '.nav-resize', function(e){
		if($('.mobile-nav').is('.active')) {
			$('.mobile-nav, .fade').removeClass('active');
		} else {
			$('.mobile-nav, .fade').addClass('active');
		}
		return false;
	});
	
	
	$(document).on('click touchend', '.mobile-nav .close', function(e){
		$('.mobile-nav, .fade').removeClass('active');
		return false;
	});
	
	$(document).on('click touchend', '.calc .tarif .current', function(e){
		if($('.calc .tarif').is('.active')) {
			$('.calc .tarif').removeClass('active');
		} else {
			$('.calc .tarif').addClass('active');
		}
		return false;
	});
	
	
	$(document).on('click touchend', function(e){
        var target = e.srcElement || e.target;
		if($('.nav').is('.active')) {
			$('.nav').removeClass('active');
		}
		if($('.calc .tarif').is('.active')) {
			$('.calc .tarif').removeClass('active');
		}
	});
	
	$(document).keyup(function(e) {
        if(e.keyCode === 27) {
			if($('.popup').is('.active')) {
                $('.popup, .overlay, body').removeClass('active');
            }
			if($('.calc .tarif').is('.active')) {
				$('.calc .tarif').removeClass('active');
			}
			if($('.mobile-nav').is('.active')) {
				$('.mobile-nav, .fade').removeClass('active');
			}
        }
    });
	
	$('.fade').click(function(e) {
        var target = e.srcElement || e.target;
		if(!target.className.search('fade')) {
			$('.mobile-nav, .fade').removeClass('active');
		}
    });
	
	$('.popup .close').click(function(e) {
		$('body, .overlay, .popup').removeClass('active');        
    });
	
	
	$(document).on('click touchend', '.calc .tarif .item', function(e){
		if(!$(this).is('.active')) {
			$('.calc .tarif .item').removeClass('active');
			$(this).addClass('active');
			$('.calc .tarif .current').removeClass('none').removeClass('error');
			$('.calc .tarif .current').html($(this).text());
			$('.calc .tarif').removeClass('active');
		} else {
			$('.calc .tarif').removeClass('active');
		}
		return false;
	});
	
	$('.overlay').click(function(e) {
        var target = e.srcElement || e.target;
		if(!target.className.search('overlay')) {
			$('body, .overlay, .popup').removeClass('active');
		}
    });
	
	var tarifs = {
		'oneday': {
			'heading': 'Подписка на 1 дней',
			'price': 499,
			'id': 1
		},
		'sevendays': {
			'heading': 'Подписка на 7 дней',
			'price': 999,
			'id': 2
		},
		'fifteendays': {
			'heading': 'Подписка на 14 дней',
			'price': 1499,
			'id': 3
		},
        'thirtydays': {
			'heading': 'Подписка на 30 дней',
			'price': 1999,
			'id': 4
		}
        
		
	}
	
	$(document).on('click touchend', '.tarifs .btn-border', function(e){
		$('.popup .heading').html(tarifs[$(this).data('type')]['heading']);
		$('.popup .price').html(tarifs[$(this).data('type')]['price'] + ' руб.');
		$('input[name="item_id"]').val(tarifs[$(this).data('type')]['id']);
		
		$('.overlay, .popup, body').addClass('active');
		
		return false;
	});
	
	$(document).on('click touchend', '.nav li a, .fnav li a, [rel=go], .mobile-nav ul a', function(e){
		$('html, body').animate({scrollTop: ($($(this).attr('href')).offset().top - 10)},600);	
		$('.mobile-nav, .fade').removeClass('active');	
		return false;
	});
	
	$('[rel=number]').keyup(function(){
		$(this).val($(this).val().replace(/^\.|[^\d\.]|\.(?=.*\.)|^0+(?=\d)/g, ''));
	});
	
	$(document).on('click touchend', '.btn-calc', function(e){
		$('.calc .error').removeClass('error');
		
		if($('.tarif .current').is('.none')) {
			$('.tarif .current').addClass('error');
		} 
		if($('.calc .input').val().length < 1) {
			$('.calc .input').addClass('error');
		}
		
		if(!$('.calc .error').length) {
			var amount = $('.calc .input').val()*$('.tarif .item.active').data('coefficient');
			$('.win-sum .num').text(amount.toFixed(2));			
			$('.win-sum').addClass('show');
		}
		
		return false;
	});

	$(document).on('click touchend', '.btn-send', function(e){
		const vk = $('input[name="i_vk"]').val();
		//const tg = $('input[name="i_tg"]').val();
		const em = $('input[name="i_em"]').val();

		if(!vk) {
			alert('Введите ваш аккаунт VK');
			return;
		}

		if( !(/(https?:\/\/)?vk\.com\/+/i).test(vk) ) {
			alert('Введите корректную ссылку на профиль VK');
			return;
		}

		//if(!tg) {
			//alert('Введите ваш аккаунт Telegram');
			//return;
		//}

		if(!em) {
			alert('Введите ваш Email');
			return;
		}

		if( !(/.+@.+\..+/i).test(em) ) {
			alert('Введите корректный EMAIL');
			return;
		}

		window.location.href = "http://framemuse.info/CashPUP/order.php?id=" + $('input[name="item_id"]').val() + "&vk=" + encodeURIComponent(vk) + "&email=" + encodeURIComponent(em);	
	});
	
	$(window).on('scroll',function(){
		if($(window).width() > 1100) {
			if($(document).scrollTop() < 350) {
				$('.player').css({
					'transform': 'translateY(-'+(parseInt($(document).scrollTop())/2)+'px)'
				})
			}
		}		
	});
	
	if($('.wow').length) {
		var wow = new WOW({ mobile: false });
		wow.init();
	}
	
	$(window).on('resize',function(){
		if($(window).width() > 752) {
			if(!$('.js-box .section').length) {
				$('.js-box').html($('.js-box2').html());
				$('.js-box2').remove();
			}
		} else {
			if(!$('.js-box2').length) {
				$('.team').before('<div class="js-box2"></div>');
				$('.js-box2').html($('.js-box').html());
				$('.js-box').html('');
			}
		}
	}).resize();

});
