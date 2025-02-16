document.addEventListener('DOMContentLoaded', function() {
    // Move all DOM selections inside the event listener
    const toggleBtn = document.querySelector(".aae-mobile-close");
    const offcanvas_toggle_btn = document.querySelector("#offcanvas_toggle");
    const offcanvas_wrapper = document.querySelector(".aae-mobile-menu-area");
    const accordionItems = document.querySelectorAll('.aae-faq-accordion-item');

    // Mobile menu toggle
    if (toggleBtn && offcanvas_wrapper) {
        toggleBtn.addEventListener("click", () => {
            offcanvas_wrapper.classList.toggle("offcanvasToggle");
        });
    }

    if (offcanvas_toggle_btn && offcanvas_wrapper) {
        offcanvas_toggle_btn.addEventListener("click", () => {
            offcanvas_wrapper.classList.toggle("offcanvasToggle");
        });
    }

    // Accordion functionality
    if (accordionItems) {
        accordionItems.forEach(item => {
            const title = item.querySelector('.aae-faq-accordion-title');
            if (title) {
                title.addEventListener('click', () => {
                    const isActive = item.classList.contains('active');
                    
                    // Close all items
                    accordionItems.forEach(innerItem => {
                        innerItem.classList.remove('active');
                    });

                    // Toggle clicked item
                    if (!isActive) {
                        item.classList.add('active');
                    }
                });
            }
        });
    }
});