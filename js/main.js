// ОВЛ карусель
$(function() {
	$("#owl-demo").owlCarousel({
		autoPlay: 7000,
		navigation : true, // Show next and prev buttons
		navigationText: ["",""],
		slideSpeed : 300,
		paginationSpeed : 400,
		singleItem:true	
	});
});

// Автоматическое выравнивание кнопок назад/вперед 
// при ресайзе и загрузке страницы
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

// Базовый функционал плеера в шапке
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

// Плееры в блоке "Музыка"
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

// Галлерея
$(function() {
	$(".photo_item > div").click(function(){
		var img = $(this).find('img');
		var src = img.attr('src');
		$("body").append("<div class='popup'>"+
						 "<div class='popup_bg'></div>"+
						 "<img src='"+src+"' class='popup_img' />"+
						 "<div class='close_popup'>╳</div>"+
						 "</div>"); 
		$(".popup").fadeIn(200);
		$(".popup_bg, .close_popup").click(function(){
			$(".popup").fadeOut(200);
			setTimeout(function() {
			  $(".popup").remove();
			}, 200);
		});
	});
});
// Кнопка вверх 
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

// Плавный переход
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

// Мобильное меню

$(function(){
	var button = $('.hamb');
	var wrapper = $('#wrapper');
	var menu = $('#slide_menu');
	var link = $('#slide_menu').find('a');
	var facebook = $('#facebook');
	var facebookLinks =$('#facebook_links');
	var reset = $('#slide_menu').find('a.close_artists');

	// Положение меню-слайдера
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
	// Затемнение
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
	// Развертывание блока с ссылками на фейсбук
	facebook.click(function(){
		facebook.toggleClass('open');
	})
	// Скрытие табов по клику 
	reset.click(function(){

	})
});

// Анкорные ссылки на артистов
$(function(){
	var person = $('#slide_menu').find('.artists').find('a');
	var tablist = $('#tablist');
	var links = tablist.find('li');
	var tabs = $('#tab-content');
	var reset = $('.action_name');
	var about = $('#slide_menu').find('.about_link');
	person.click(function(){
		tablist.css('display', 'block');
		var index = $(this).index();
		links.removeClass('active');
		tablist.find('li:eq(' + index + ')').addClass('active');
		tabs.children().removeClass('active in');
		tabs.children('div:eq(' + index + ')').addClass('active in');
	})
	// скрытие табов по клику на название шоу
	reset.click(function(){
		links.removeClass('active');
		tabs.children().removeClass('active in');
	})
	// скрытие табов по клику на пункт мобильного меню
	about.click(function(){
		links.removeClass('active');
		tabs.children().removeClass('active in');
		tablist.css('display', 'none');
	})
});

// Переключение языка (флаги)
$(function(){
	var flag = $('.lang_flags').find('span');
	flag.click(function(){
		flag.removeClass('changed');
		$(this).addClass('changed');
	})
});
