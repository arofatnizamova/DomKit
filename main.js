// main.js

// Инициализация Swiper main + thumbs
function initSwiper() {
    if (document.querySelector('.swiper-main') && document.querySelector('.swiper-thumbs')) {
        const thumbsSwiper = new Swiper('.swiper-thumbs', {
            loop: true,
            spaceBetween: 10,
            slidesPerView: 3,
            freeMode: true,
            watchSlidesProgress: true,
            breakpoints: {
                0: {
                    slidesPerView: 3
                },
                769: {
                    slidesPerView: 3
                }
            }
        });

        new Swiper('.swiper-main', {
            loop: true,
            spaceBetween: 10,
            thumbs: {
                swiper: thumbsSwiper
            }
        });
    }
}


// Инициализация всех .slick-slider
function initSlick() {
    $('.slick-slider').each(function () {
        let slider = $(this);

        let options = {
            prevArrow: slider.parent().find('.slider-prev'),
            nextArrow: slider.parent().find('.slider-next'),
            infinite: true,
            autoplay: true,
            dots: false
        };

        let extraOptions = {};

        if (slider.hasClass('services')) {
            extraOptions = {
                slidesToShow: 3,
                slidesToScroll: 1,
                centerMode: false,
                arrows: true,
                dots: false,
                autoplay: true,
                responsive: [
                    {
                        breakpoint: 1200,
                        settings: {
                            slidesToShow: 2.5,
                            slidesToScroll: 1
                        }
                    },
                    {
                        breakpoint: 992,
                        settings: {
                            slidesToShow: 2.3,
                            slidesToScroll: 1
                        }
                    },
                    {
                        breakpoint: 576,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    }
                ]
            };
        }

        slider.slick($.extend({}, options, extraOptions));
    });
}


// Запуск после загрузки страницы
$(document).ready(function () {
    initSwiper();
    initSlick();
});