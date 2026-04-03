/* 
    Portfolio Interactivity 
    Smooth Scroll, Reveal Animations, and Contact Form Handling
*/

document.addEventListener('DOMContentLoaded', () => {

    // 1. Smooth Scroll Highlight in Navigation
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');

    window.onscroll = () => {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.pageYOffset >= sectionTop - sectionHeight / 3) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    };

    // 2. Reveal Animations on Scroll
    const reveal = () => {
        const reveals = document.querySelectorAll('.reveal');
        for (let i = 0; i < reveals.length; i++) {
            const windowHeight = window.innerHeight;
            const revealTop = reveals[i].getBoundingClientRect().top;
            const revealPoint = 150;

            if (revealTop < windowHeight - revealPoint) {
                reveals[i].classList.add('active');
            }
        }
    };

    window.addEventListener('scroll', reveal);
    reveal(); // Run once on load

    // 3. Contact Form Submission Handling
    const contactForm = document.getElementById('contactForm');
    const formStatus = document.getElementById('formStatus');
    const submitBtn = document.getElementById('submitBtn');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Simulation of form processing
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;

            setTimeout(() => {
                formStatus.textContent = 'Thank you, Umme Kalsoom! Your message has been sent successfully.';
                formStatus.style.display = 'block';
                contactForm.reset();
                submitBtn.textContent = 'Send Message';
                submitBtn.disabled = false;
                
                // Hide success message after 5 seconds
                setTimeout(() => {
                    formStatus.style.display = 'none';
                }, 5000);
            }, 1500);
        });
    }

    // 4. Smooth Scrolling for Navigation
    navLinks.forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });

            // For Mobile: Add logic to close mobile menu if implemented
        });
    });
});
