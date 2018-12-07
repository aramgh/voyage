$('.sl-responsive').slick({
    arrows: false,
    autoplay: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1620,
            settings: {
                slidesToShow: 5
            }
        },
        {
            breakpoint: 1367,
            settings: {
                slidesToShow: 5
            }
        },
        {
            breakpoint: 1300,
            settings: {
                slidesToShow: 4
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 3
            }
        },
        {
            breakpoint: 848,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1
            }
        }
    ]
});


/* Testimonials slick carousel parameters */
$('.center').slick({
    centerMode: true,
    centerPadding: '60px',
    autoplay: true,
    arrows: false,
    slidesToShow: 3,
    responsive: [
        {
            breakpoint: 1080,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 1040,
            settings: {
                slidesToShow: 3
            }
        },
        {
            breakpoint: 992,
            settings: {
                centerMode: true,
                slidesToShow: 1
            }
        }
    ]
});
/* Scroll to top animation function  */
$(function () {
    $("#top-anchor").on('click', function () {
        $("HTML, BODY").animate({scrollTop: 0}, 1000);
    });
});

/* This function allows to click on testimonials passive slides and make them centerd */
$('.slick-slider').on('click', '.slick-slide', function (e) {
    e.stopPropagation();
    var index = $(this).data("slick-index");
    if ($('.slick-slider').slick('slickCurrentSlide') !== index) {
        $('.slick-slider').slick('slickGoTo', index);
    }
});