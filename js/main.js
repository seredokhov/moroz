$(function() {
	$("#owl-demo").owlCarousel({	
		navigation : true, // Show next and prev buttons
		navigationText: ["",""],
		slideSpeed : 300,
		paginationSpeed : 400,
		singleItem:true	
	});
});
$(function() {
	var height = $(".carousel").outerHeight(true);
	var buttons = $('.owl-prev, .owl-next' );
	buttons.css({'bottom' : height/2, 'transform' : 'translatey(50%)'});
	buttons.click(function(){
		var height = $(".carousel").outerHeight(true);
		buttons.css({'bottom' : height/2, 'transform' : 'translatey(50%)'});
	})
});
$(function() {
	var lang = $('.lang_block').find('span');
	lang.click(function(){
		lang.removeClass('change');
		$(this).toggleClass('change');
	})
});

$(function() {
	var play = $('.play_button');
	var song = play.parent().parent('.song');
	var line = song.find('.song_state');
	play.click(function(){
		song.removeClass('changed');
		line.css('width', 0);
		$(this).parent().parent('.song').toggleClass('changed');
	})
});



$(function() {
	var player = $('.header_media');
	var tumbler = player.find('.tumbler');
	var prev = player.find('.prev');
	var next = player.find('.next');
	var line = player.find('.line');

	tumbler.click(function(){
		$(this).toggleClass('play').toggleClass('stop');
	})
	prev.click(function(){
		player.find('.line').css('width', 0);
	});
	next.click(function(){
		player.find('.line').css('width', 0);
	});
});


$(function() { // Ждём загрузки страницы

	$(".photo_item > div").click(function(){	// Событие клика на маленькое изображение
	  	var img = $(this).find('img');	// Получаем изображение, на которое кликнули
		var src = img.attr('src'); // Достаем из этого изображения путь до картинки
		$("body").append("<div class='popup'>"+ //Добавляем в тело документа разметку всплывающего окна
						 "<div class='popup_bg'></div>"+ // Блок, который будет служить фоном затемненным
						 "<img src='"+src+"' class='popup_img' />"+
						 "<div class='close_popup'>╳</div>"+ // Само увеличенное фото
						 "</div>"); 
		$(".popup").fadeIn(200); // Медленно выводим изображение
		$(".popup_bg, .close_popup").click(function(){	// Событие клика на затемненный фон	   
			$(".popup").fadeOut(200);	// Медленно убираем всплывающее окно
			setTimeout(function() {	// Выставляем таймер
			  $(".popup").remove(); // Удаляем разметку всплывающего окна
			}, 200);
		});
		
	});
	
});
/*  Кнопка вверх  */
$(function() {
	$(window).scroll(function() {
		if($(this).scrollTop() != 0) {
			$('#totop').fadeIn();
		} else {
			$('#totop').fadeOut();
		}
	});
	$('#totop').click(function() {
		$('body,html').animate({scrollTop:0},800);
	});
});


