document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const navList = document.querySelector('.nav-list');

    if (mobileBtn) {
        mobileBtn.addEventListener('click', () => {
            navList.style.display = navList.style.display === 'flex' ? 'none' : 'flex';

            // Simple mobile menu styling injection for toggle
            if (navList.style.display === 'flex') {
                navList.style.flexDirection = 'column';
                navList.style.position = 'absolute';
                navList.style.top = '80px';
                navList.style.left = '0';
                navList.style.width = '100%';
                navList.style.background = '#0a0a0a';
                navList.style.padding = '20px';
                navList.style.borderBottom = '1px solid rgba(255,255,255,0.1)';
            }
        });
    }

    // Custom Smooth Scroll Function
    const smoothScroll = (target, duration) => {
        const targetElement = document.querySelector(target);
        if (!targetElement) return;

        const headerOffset = 85;
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerOffset;
        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition;
        let startTime = null;

        const animation = (currentTime) => {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = ease(timeElapsed, startPosition, distance, duration);
            window.scrollTo(0, run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        };

        // Easing function (easeInOutCubic)
        const ease = (t, b, c, d) => {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t * t + b;
            t -= 2;
            return c / 2 * (t * t * t + 2) + b;
        };

        requestAnimationFrame(animation);
    };

    // Smooth Scrolling for Nav Links with Custom Speed
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            // Close mobile menu if open
            if (window.innerWidth <= 768) {
                if (navList) navList.style.display = 'none';
            }

            smoothScroll(targetId, 1000); // 1000ms duration for slower scroll
        });
    });

    // Contact Form Handling (Netlify AJAX)
    const contactForm = document.querySelector('.contact-form');
    const submitBtn = document.querySelector('.submit-btn');
    const formMessage = document.querySelector('#form-message');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Loading State
            submitBtn.classList.add('loading');
            submitBtn.querySelector('span').textContent = 'Sending...';

            const myForm = e.target;
            const formData = new FormData(myForm);

            fetch(myForm.action, {
                method: 'POST',
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: new URLSearchParams(formData).toString()
            })
                .then(() => {
                    // Success State
                    formMessage.className = 'form-message success';
                    formMessage.textContent = 'Message sent successfully! I will get back to you soon.';
                    contactForm.reset();
                })
                .catch((error) => {
                    // Error State
                    formMessage.className = 'form-message error';
                    formMessage.textContent = 'Oops! Something went wrong. Please try again.';
                    console.error('Form Submit Error:', error);
                })
                .finally(() => {
                    // Reset Button
                    submitBtn.classList.remove('loading');
                    submitBtn.querySelector('span').textContent = 'Send Message';

                    // Hide message after 5 seconds
                    setTimeout(() => {
                        formMessage.style.display = 'none';
                    }, 5000);
                });
        });
    }

    // Scroll Animation (Intersection Observer)
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Elements to animate
    const animateElements = document.querySelectorAll('.project-card, .skill-item, .section-title, .about-text, .contact-wrapper, .profile-card, .achievement-item');

    // Add initial styles for animation
    const style = document.createElement('style');
    style.textContent = `
        .project-card, .skill-item, .section-title, .about-text, .contact-wrapper, .profile-card, .achievement-item {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
        .animate-in {
            opacity: 1;
            transform: translateY(0);
        }
    `;
    document.head.appendChild(style);

    animateElements.forEach(el => observer.observe(el));

    // Navbar Scroll Effect
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 10px 30px rgba(0,0,0,0.5)';
            header.style.background = 'rgba(10, 10, 10, 0.95)';
        } else {
            header.style.boxShadow = 'none';
            header.style.background = 'rgba(10, 10, 10, 0.8)';
        }
    });
});
