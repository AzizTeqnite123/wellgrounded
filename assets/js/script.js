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


const observeTooltips = () => {
    // Target the container section that needs to be in view
    const section = document.querySelector('.takleRootsRow');

    // Get all the tooltips within the section
    const tooltips = document.querySelectorAll('.circle-tooltip');

    // Options for the Intersection Observer
    const options = {
        root: null, // null means the viewport
        rootMargin: '0px',
        threshold: 0.5 // trigger when 50% of the section is visible
    };

    // Callback function to be executed when the section is in view
    const callback = (entries, observer) => {
        entries.forEach(entry => {
            // If the section is in view
            if (entry.isIntersecting) {
                // Loop through each tooltip and apply animation
                tooltips.forEach((tooltip, index) => {
                    const tooltipContent = tooltip.querySelector('.tooltipCont');

                    // Set a delay for each tooltip based on its index in the loop
                    setTimeout(() => {
                        tooltipContent.style.visibility = 'visible';
                        tooltipContent.style.opacity = '1';
                        tooltipContent.style.transition = `opacity 0.5s ease ${index * 0.2}s`; // Delay based on index
                    }, index * 300); // Delay in milliseconds between each tooltip (adjust for desired effect)
                });
            }
        });
    };

    // Initialize the Intersection Observer
    const observer = new IntersectionObserver(callback, options);

    // Start observing the section
    observer.observe(section);
};

// Run the function to observe tooltips
observeTooltips();
