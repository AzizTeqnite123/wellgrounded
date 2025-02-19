AOS.init();

// FANCY-BOX

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

// FANCY-BOX

// TOOL-TIPS PROD

document.addEventListener('DOMContentLoaded', function () {
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
});

// TOOL-TIPS PROD


// SCRIPT FOR ACCORDIANS FAQS

document.addEventListener('DOMContentLoaded', function () {
    function faqsAccordion() {
        var accordionSections = document.querySelectorAll(".faq__accordion");

        accordionSections.forEach(section => {
            var accordionItemHeaders = section.querySelectorAll(".accordion-item-header");

            if (accordionItemHeaders.length > 0) {
                var firstAccordionItemHeader = accordionItemHeaders[0];
                var firstAccordionItemBody = firstAccordionItemHeader.nextElementSibling;

                firstAccordionItemHeader.classList.add("active");
                firstAccordionItemBody.style.maxHeight = firstAccordionItemBody.scrollHeight + "px";
            }

            accordionItemHeaders.forEach(accordionItemHeader => {
                accordionItemHeader.addEventListener("click", event => {
                    var accordionItemBody = accordionItemHeader.nextElementSibling;

                    accordionItemHeaders.forEach(item => {
                        if (item !== accordionItemHeader) {
                            item.classList.remove("active");
                            item.nextElementSibling.style.maxHeight = 0;
                        }
                    });

                    accordionItemHeader.classList.toggle("active");

                    if (accordionItemHeader.classList.contains("active")) {
                        accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
                    } else {
                        accordionItemBody.style.maxHeight = 0;
                    }
                });
            });
        });
    }

    faqsAccordion();
});

// SCRIPT FOR ACCORDIANS FAQS



