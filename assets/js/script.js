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


// const observeTooltips = () => {
//     // Target the container section that needs to be in view
//     const section = document.querySelector('.takleRoots');

//     // Get all the tooltips within the section
//     const tooltips = document.querySelectorAll('.circle-tooltip');

//     // Options for the Intersection Observer
//     const options = {
//         root: null, // null means the viewport
//         rootMargin: '0px',
//         threshold: 0.5 // trigger when 50% of the section is visible
//     };

//     // Track if the user is actively scrolling
//     let isScrolling = false;

//     // When user is scrolling, mark it
//     window.addEventListener('scroll', () => {
//         isScrolling = true;
//         // Reset the scroll activity status after a delay (let's say 100ms)
//         clearTimeout(isScrolling);
//         setTimeout(() => {
//             isScrolling = false;
//         }, 100);
//     });

//     // Callback function to be executed when the section is in view
//     const callback = (entries, observer) => {
//         entries.forEach(entry => {
//             // If the section is in view
//             if (entry.isIntersecting) {
//                 // Loop through each tooltip and apply animation for showing
//                 tooltips.forEach((tooltip, index) => {
//                     const tooltipContent = tooltip.querySelector('.tooltipCont');

//                     // Only show tooltips when user is actively scrolling
//                     if (isScrolling) {
//                         setTimeout(() => {
//                             tooltipContent.style.visibility = 'visible';
//                             tooltipContent.style.opacity = '1';
//                             tooltipContent.style.transition = `opacity 0.5s ease ${index * 0.2}s`; // Delay based on index
//                         }, index * 300); // Delay in milliseconds between each tooltip
//                     }
//                 });
//             } else {
//                 // When the section is out of view (scroll away), hide the tooltips
//                 tooltips.forEach((tooltip, index) => {
//                     const tooltipContent = tooltip.querySelector('.tooltipCont');

//                     // Apply staggered hiding with a delay to create the "line-by-line" effect
//                     setTimeout(() => {
//                         tooltipContent.style.visibility = 'hidden';
//                         tooltipContent.style.opacity = '0';
//                         tooltipContent.style.transition = `opacity 0.5s ease ${index * 0.2}s`; // Delay based on index
//                     }, index * 300); // Delay in milliseconds between each tooltip
//                 });
//             }
//         });
//     };

//     // Initialize the Intersection Observer
//     const observer = new IntersectionObserver(callback, options);

//     // Start observing the section
//     observer.observe(section);
// };

// // Run the function to observe tooltips
// observeTooltips();


gsap.registerPlugin(ScrollTrigger);

const tooltips = document.querySelectorAll('.circle-tooltip');


const animateTooltips = () => {
    tooltips.forEach((tooltip, index) => {
        const tooltipContent = tooltip.querySelector('.tooltipCont');

        gsap.fromTo(tooltipContent, {
            opacity: 0,

            visibility: 'hidden',
        }, {
            opacity: 1,
            visibility: 'visible',
            duration: 0.3,
            delay: index * 0.1,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: tooltip,
                start: "top 90%",
                end: "bottom top",
                scrub: true,
                markers: false,
                toggleActions: "play none none reverse",
            }
        });
    });
};

animateTooltips();

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