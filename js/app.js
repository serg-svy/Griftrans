
var $slider = $('.slider');

if ($slider.length) {
    var currentSlide;
    var slidesCount;
    var sliderCounter = document.createElement('div');
    sliderCounter.classList.add('slider__counter');

    var updateSliderCounter = function(slick, currentIndex) {
        currentSlide = slick.slickCurrentSlide() + 1;
        slidesCount = slick.slideCount;
        $(sliderCounter).text(currentSlide + '/' +slidesCount)
    };

    $slider.on('init', function(event, slick) {
        $slider.append(sliderCounter);
        updateSliderCounter(slick);
    });

    $slider.on('afterChange', function(event, slick, currentSlide) {
        updateSliderCounter(slick, currentSlide);
    });

    $slider.slick({
        prevArrow: $('.js-gallery-prev'),
        nextArrow: $('.js-gallery-next'),
    });
}


$('.product_small_slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    adaptiveHeight: true,
    speed: 300,
    dots: false,
    arrows: true,
    initialSlide: 0,
    responsive: [
        {
            breakpoint: 860,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 440,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
})

$('.product_equipment_slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll:1,
    speed: 300,
    dots: false,
    arrows: true,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
            }
        },
        {
            breakpoint: 440,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
})


$(document).on('click', '.product_small_slider img', function(){
    let newimg = $(this).attr('src');
    $('#big_image').addClass('hidden');
    $('#big_image').attr('src',newimg);
    $('#big_image').removeClass('hidden');
})



