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
});/*
$(function() {
	var link = $(".social_links").find('div');
	link.mouseenter(function(){
		$(this).find('.drop').css('display', 'block');
	})
	link.find('div').mouseleave(function(){
		$(this).find('.drop').css('display', 'none');
	});
});
*/
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



