// Initialize Swiper
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    centeredSlides: true,
    grabCursor: true,
    rewind: true,
    preventClicks: true,
    autoplay: {
        delay: 1500,
        pauseOnMouseEnter: true,
    }
});


// Preloader 
var loader = document.getElementById('preloader')

window.addEventListener('load', function(){
    loader.style.display = 'none';
})

$('document').ready(function(){

    $('.active').on('mouseenter', function(){
        $('.hover-content').css('display', 'flex')
        $('.hover-content').removeClass('flip-out-hor-top')
    }).on('mouseleave', function(){
        $('.hover-content').addClass('flip-out-hor-top')
    })
})