$(document).ready(function() {
    $('.slick-slider').each(function() {
        let slider = $(this);

        let options = {
            prevArrow: slider.parent().find('.slider-prev'),
            nextArrow: slider.parent().find('.slider-next'),
            infinite: true,
            autoplay: true,
            dots: false
        };

        let extraOptions = {};

        if (slider.hasClass('standarts')) {
            extraOptions = {
                slidesToShow: 6.3,
                slidesToScroll: 1,
                centerMode: false,
                arrows: true,
                dots: false,
                autoplay: true,
                responsive: [{
                        breakpoint: 1200,
                        settings: {
                            slidesToShow: 4.5,
                            slidesToScroll: 1,
                        }
                    },
                    {
                        breakpoint: 992,
                        settings: {
                            slidesToShow: 4.3,
                            slidesToScroll: 1,
                        }
                    },
                    {
                        breakpoint: 576,
                        settings: {
                            slidesToShow: 1.7,
                            slidesToScroll: 1,
                        }
                    },
                ]
            };
        }

        slider.slick($.extend({}, options, extraOptions));
    });
});