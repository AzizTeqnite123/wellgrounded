// PROD-SLIDER

document.addEventListener('DOMContentLoaded', function () {
    const prodSlides = new Swiper(".prodSlides", {
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        }, breakpoints: {
            300: {
                spaceBetween: 10,
                slidesPerView: 1.2,
            },
            576: {
                spaceBetween: 15,
                slidesPerView: 2,
            },
            769: {
                spaceBetween: 20,
                slidesPerView: 3,
            },
            1025: {
                spaceBetween: 20,
                slidesPerView: 4,
            },
        }
    });
});

// PROD-SLIDER

// TESTI-SLIDER

document.addEventListener('DOMContentLoaded', function () {
    const testiSlider = new Swiper(".testiSlider", {
        slidesPerView: "auto",
        spaceBetween: 20,
        centeredSlides: true,
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            300: {
                spaceBetween: 10,
            },
            576: {
                spaceBetween: 20,
            },
        }
    });
});

// TESTI-SLIDER

// QUALITY-SLIDER

document.addEventListener('DOMContentLoaded', function () {
    const qualitySlider = new Swiper(".qualitySlide", {
        slidesPerView: "auto",
        spaceBetween: 100,
        loop: true,
        autoplay: {
            delay: 0,
            disableOnInteraction: false,
        },
        speed: 3000,
        breakpoints: {
            300: {
                spaceBetween: 20,
            },
            576: {
                spaceBetween: 40,
            },
            769: {
                spaceBetween: 60,
            },
            1024: {
                spaceBetween: 80,
            },
            1200: {
                spaceBetween: 100,
            }
        }
    });
});

// QUALITY-SLIDER