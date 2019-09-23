$(document).ready(function(){
    $("#about-buttons").on("click","a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();
        var id  = $(this).attr('href');
        console.log(id);
        //узнаем высоту от начала страницы до блока на который ссылается якорь
        var top = $(id).offset().top;
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1500);
    });

});

$(document).ready(function(){
    $('.testimonials-section-block').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false
  });
});