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
	});
	$(window).resize(function(){
		var height = $(".carousel").outerHeight(true);
		buttons.css({'bottom' : height/2, 'transform' : 'translatey(50%)'});
	});

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
		play.not(this).parent().parent('.song').find('.song_state').css('width', 0);
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

/*   Плавный переход   */
$(function(){
	$('.music_link').on('click', function(e){
		$('html,body').stop().animate({ scrollTop: $('#music').offset().top - 50 }, 1000);
		e.preventDefault();
	});
	$('.photo_link').on('click', function(e){
		$('html,body').stop().animate({ scrollTop: $('#photo').offset().top - 50 }, 1000);
		e.preventDefault();
	});
	$('.video_link').on('click', function(e){
		$('html,body').stop().animate({ scrollTop: $('#video').offset().top - 50 }, 1000);
		e.preventDefault();
	});
	$('.contacts_link').on('click', function(e){
		$('html,body').stop().animate({ scrollTop: $('#contacts').offset().top - 50 }, 1000);
		e.preventDefault();
	});
});

/*   Мобильное меню  */

$(function(){
	var button = $('.hamb');
	var wrapper = $('#wrapper');
	var menu = $('#slide_menu');
	var link = $('#slide_menu').find('a');
	button.click(function(){
		$(this).toggleClass('open');
		menu.toggleClass('open');
		if($(this).hasClass('open')) {
			wrapper.show();
		}
		else {
			wrapper.hide();
		}
	})
	wrapper.click(function(){
		$(this).hide();
		menu.removeClass('open');
		button.removeClass('open');
	})
	link.click(function(){
		wrapper.hide();
		menu.removeClass('open');
		button.removeClass('open');
	})
});

/*   Анкорные ссылки на артистов    */
$(function(){
	var person = $('#slide_menu').find('.artists').find('a');
	var tablist = $('#tablist');
	var links = tablist.find('li');
	var tabs = $('#tab-content');
	person.click(function(){
		tablist.css('display', 'block');
		var index = $(this).index();
		links.removeClass('active');
		$('#tablist').find('li:eq(' + index + ')').addClass('active');
		tabs.children().removeClass('active in');
		tabs.children('div:eq(' + index + ')').addClass('active in');
	})
});


/*   Переключение языка (флаги)   */

$(function(){
	var flag = $('.lang_flags').find('span');
	flag.click(function(){
		flag.removeClass('changed');
		$(this).addClass('changed');
	})
});

