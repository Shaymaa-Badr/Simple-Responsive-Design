$(function () {
    'use strict';
    $('.info-list li').click(function (){
        $(this).addClass('selected').siblings('li').removeClass('selected');
        $('.info-content > div').hide();
        $($(this).data('class')).fadeIn();

    });
    $('.main-nav li').click(function (){
        $(this).addClass('selected').siblings('li').removeClass('selected');
    });

    $('.nav-icon').click(function (){
        var nav = $('.main-nav');
        var icon = $('.nav-icon i')
        nav.slideToggle(200);
        if (icon.hasClass('fas fa-bars')){
            icon.removeClass('fas fa-bars')
            icon.addClass('far fa-window-close')
            
        } else {

            icon.addClass('fas fa-bars')
            
        }
    });
   
});
