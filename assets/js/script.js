$.noConflict();
jQuery( document ).ready(function( $ ) {
    $('.single-item').slick();
    $('.slick-next').hide();
    $('.slick-prev').hide();
    $('.menu__btn').click(function(){
        $('.header-menu').toggleClass('menu_open');
    })

$(function() {
        $(".fancybox").fancybox();
       });
});
    // function initMap() {
    //     map = new google.maps.Map(document.getElementById('map'), {
    //         center: {lat: 49.588442, lng: 34.558054},
    //         zoom: 16
            
    //     });
    //     image = './img/map.png',
    //     marker = new google.maps.Marker({
    //         position: {lat: 49.588442, lng: 34.558054},
    //         map: map,
    //         icon: image
    //     });
    // }
    var more = document.querySelector('.more');
    var overlay = document.querySelector('.overlay');
    var popupClose = document.querySelector('.popup-close');
    
    more.addEventListener('click',function(){
        overlay.style.display='block';
        document.body.style.overflow="hidden";
    });
    popupClose.addEventListener('click',function(){
        overlay.style.display='none';
        document.body.style.overflow="";
    })
