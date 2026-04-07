document.addEventListener("DOMContentLoaded", function () {
    // Navbar Scroll Effect
    const navbar = document.getElementById("navbar");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });

    // Intersection Observer for Reveal Animations
    const reveals = document.querySelectorAll(".reveal");
    const revealObserver = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("active");
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.1 }
    );

    reveals.forEach(reveal => {
        revealObserver.observe(reveal);
    });

    // Smooth Scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                
                // Close mobile menu if open
                const menuToggle = document.getElementById('menu-toggle');
                if (menuToggle && menuToggle.checked) {
                    menuToggle.checked = false;
                }

                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Basic Form validation/submission feedback (mock)
    const signupForm = document.querySelector('.signup-container form');
    if (signupForm) {
        signupForm.addEventListener('submit', (e) => {
            // e.preventDefault(); // Uncomment this if you want to use AJAX instead of true POST
            console.log('Form submission initiated');
        });
    }
});
