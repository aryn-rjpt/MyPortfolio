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

 

window.addEventListener('load', function(){
    $("#proceed").css("display", "block");
})


$('document').ready(function(){
    
    $('.carousel-item').on('mouseenter', function(){
        $('.hover-content').css('display', 'flex')
        $('.hover-content').removeClass('flip-out-hor-top')
    }).on('mouseleave', function(){
        $('.hover-content').addClass('flip-out-hor-top')
    })
    
    $("#proceed").on('click', function(){
        let preloader = $("#preloader");
        preloader.addClass("puff-out-center");
        $("section").css("display", 'block');
        $("nav").css("display", 'block');
        $(".my-info").css("display", "flex");
        $(".connect").css("display", "flex");
        setTimeout(function(){
            preloader.css("display", 'none');
            
        }, 1000);
        
    })
})