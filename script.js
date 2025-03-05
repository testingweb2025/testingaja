$(document).ready(function(){
    $('.image-slider').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        adaptiveHeight: true,
        arrows: true,
        prevArrow: "<button type='button' class='slick-prev'>❮</button>",
        nextArrow: "<button type='button' class='slick-next'>❯</button>",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
});
$(document).ready(function(){
    console.log('Slick slider script loaded');

    $('.betawi-slider').on('init', function(event, slick){
        console.log('Slick slider initialized');
    });

    $('.betawi-slider').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        prevArrow: "<button type='button' class='slick-prev'>&#10094;</button>",
        nextArrow: "<button type='button' class='slick-next'>&#10095;</button>",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    // Cek apakah tombol panah ada di DOM
    setTimeout(function(){
        if ($('.slick-prev').length) {
            console.log('Tombol prev ditemukan');
        } else {
            console.log('Tombol prev TIDAK ditemukan');
        }

        if ($('.slick-next').length) {
            console.log('Tombol next ditemukan');
        } else {
            console.log('Tombol next TIDAK ditemukan');
        }
    }, 1000);
});
$(document).ready(function(){
    $('.jawa-slider').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        prevArrow: "<button type='button' class='slick-prev'>&#10094;</button>",
        nextArrow: "<button type='button' class='slick-next'>&#10095;</button>",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
});
$(document).ready(function(){
    $('.bali-slider').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        prevArrow: "<button type='button' class='slick-prev'>&#10094;</button>",
        nextArrow: "<button type='button' class='slick-next'>&#10095;</button>",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
});
$(document).ready(function(){
    $('.banjar-slider').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        prevArrow: "<button type='button' class='slick-prev'>&#10094;</button>",
        nextArrow: "<button type='button' class='slick-next'>&#10095;</button>",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
});
$(document).ready(function(){
    $('.paesageng-slider').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        prevArrow: "<button type='button' class='slick-prev'>&#10094;</button>",
        nextArrow: "<button type='button' class='slick-next'>&#10095;</button>",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
});
$(document).ready(function(){
    $('.minang-slider').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        prevArrow: "<button type='button' class='slick-prev'>&#10094;</button>",
        nextArrow: "<button type='button' class='slick-next'>&#10095;</button>",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
});
$(document).ready(function(){
    $('.jogja-slider').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        prevArrow: "<button type='button' class='slick-prev'>&#10094;</button>",
        nextArrow: "<button type='button' class='slick-next'>&#10095;</button>"
    });
});
$(document).ready(function(){
    $('.preweding-slider').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        prevArrow: "<button type='button' class='slick-prev'>&#10094;</button>",
        nextArrow: "<button type='button' class='slick-next'>&#10095;</button>"
    });
});
$(document).ready(function(){
    $('.paesagengjangan-slider').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        prevArrow: "<button type='button' class='slick-prev'>&#10094;</button>",
        nextArrow: "<button type='button' class='slick-next'>&#10095;</button>",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
});
$(document).ready(function(){
    $('.soloputri-slider').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        prevArrow: "<button type='button' class='slick-prev'>&#10094;</button>",
        nextArrow: "<button type='button' class='slick-next'>&#10095;</button>",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
});
$(document).ready(function(){
    $('.modern2-slider').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        prevArrow: "<button type='button' class='slick-prev'>&#10094;</button>",
        nextArrow: "<button type='button' class='slick-next'>&#10095;</button>",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
});
$(document).ready(function(){
    $('.sundasiger-slider').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        prevArrow: "<button type='button' class='slick-prev'>&#10094;</button>",
        nextArrow: "<button type='button' class='slick-next'>&#10095;</button>",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
});