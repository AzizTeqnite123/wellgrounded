const qualitySlider = new Swiper(".qualitySlide", {
    slidesPerView: "auto",
    spaceBetween: 100,
    loop: true,
    autoplay: {
        delay: 0,
        disableOnInteraction: false,
    },
    speed: 3000,
});

Fancybox.bind("[data-fancybox]", {
    Thumbs: {
        autoStart: true,
    },
    Toolbar: {
        display: {
            left: ["infobar"],
            middle: ["zoomIn", "zoomOut", "toggle1to1", "rotateCCW", "rotateCW", "flipX", "flipY"],
            right: ["slideshow", "thumbs", "close"],
        },
    },
});

var swiper = new Swiper(".testiSlider", {
    slidesPerView: "auto",
    spaceBetween: 20,
    centeredSlides: true,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});