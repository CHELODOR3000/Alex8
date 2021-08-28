$(document).ready(function(){
    $('.about-slider').slick({
        arrows: false,
        dots: true,
        appendDots:$('.about-dots')
    });
});

$(document).ready(function(){
    $('.specialists-slider').slick({
        arrows: true,
        dots: true,
        adaptiveHeight: true,
        appendDots:$('.specialists-dots')
    });
});

$(document).ready(function() {
    $('.header__burger').click(function(event) {
        $('.header__burger, .header__menu').toggleClass('active');
    });
});

$(document).ready(function() {
    $('.map-bg').click(function(event) {
        $('.map-bg, #yandex-map, .map .container, .map-button').toggleClass('active');
    });
});

$(document).ready(function() {
    $('.map-button').click(function(event) {
        $('.map-bg, #yandex-map, .map .container, .map-button').removeClass('active');
    });
});

var k = 360/330
$(window).resize(function(){
    $('.advantages-body__clear').height($('.advantages-body__clear').width() / k);
    $('.advantages-body__colored').height($('.advantages-body__colored').width() / k);
    
});

$(window).ready(function(){
    $('.advantages-body__clear').height($('.advantages-body__clear').width() / k);
    $('.advantages-body__colored').height($('.advantages-body__colored').width() / k);
    
});

ymaps.ready(init);
function init(){
    // Создание карты.
    var myMap = new ymaps.Map("yandex-map", {
        
        center: [55.990881, 43.275944],
        zoom: 18,
        
        behaviours: ['drag']
    });
    myMap.behaviors.disable('scrollZoom');
    myMap.behaviors.disable('multiTouch');
    myPlacemark = new ymaps.Placemark([55.990881, 43.275944], {
        hasHint: true,
        hintContent: 'Собственный значок метки',
        balloonContent: 'Это красивая метка'
    }, {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: 'default#image',
        // Своё изображение иконки метки.
        
        // Размеры метки.
        iconImageSize: [61, 71],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        iconImageOffset: [-25, -100]
        
    });
    myMap.geoObjects
        .add(myPlacemark);
}