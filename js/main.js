// JavaScript Document
$(function (){
	'use strict';
	var windowHeight =$(window).height(),
		upperHeight=$('.upper-bar').innerHeight,
		headerHeight=$('.navbar').innerHeight;
	$('.slider .carousel-inner').height(windowHeight - ( upperHeight + headerHeight));

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: (target.offset().top - 90)
                }, 1000, "easeInOutExpo");
                $('nav .nav-item').removeClass('active');
                $(this).parent().addClass('active');
                return false;
            }
        }
    });
    $('body').scrollspy({
        target: '#mainNav',
        offset: 56
    });

	$('nav .nav-item').click(function () {
	    $('nav .nav-item').removeClass('active');
        $(this).addClass('active');
    });

    $('.section').mouseenter(function() {
        $('.popovers .links').css('z-index', '-1');
		$(this).parent().find('.popovers .links').css('z-index', '999');
    });
    $('.popovers .links').mouseleave(function() {
        $('.popovers .links').css('z-index', '-1')
    });

    $('.social-button button').mouseenter(function () {
        $(this).parent().find('ul').css('left','45px');
    });
    $('.social-button ').mouseleave(function () {
        $(this).parent().find('ul').css('left','-100px');
    });
});