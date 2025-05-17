// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function () {
    const mobileMenu = document.querySelector('.mobile-menu');
    const nav = document.querySelector('nav ul');

    if (mobileMenu)
    {
        mobileMenu.addEventListener('click', function () {
            this.classList.toggle('active');
            nav.classList.toggle('active');
        });
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement)
            {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });

                // Close mobile menu if open
                if (nav.classList.contains('active'))
                {
                    mobileMenu.classList.remove('active');
                    nav.classList.remove('active');
                }
            }
        });
    });

    // Simple testimonial slider
    const testimonials = document.querySelectorAll('.testimonial');
    if (testimonials.length > 1)
    {
        let currentTestimonial = 0;

        function showTestimonial(index) {
            testimonials.forEach((testimonial, i) => {
                testimonial.style.display = i === index ? 'block' : 'none';
            });
        }

        showTestimonial(0);

        setInterval(() => {
            currentTestimonial = (currentTestimonial + 1) % testimonials.length;
            showTestimonial(currentTestimonial);
        }, 5000);
    }
});

// FAQ Toggle Functionality
document.addEventListener('DOMContentLoaded', function () {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');

            // Close all FAQ items
            faqItems.forEach(faqItem => {
                faqItem.classList.remove('active');
            });

            // Open clicked item if it wasn't active
            if (!isActive)
            {
                item.classList.add('active');
            }
        });
    });
});

// Enhanced Form Validation
function validateForm() {
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    const service = document.getElementById('service');
    const message = document.getElementById('message');

    let isValid = true;

    // Name validation
    if (!name.value.trim())
    {
        showError(name, 'Please enter your name');
        isValid = false;
    } else
    {
        removeError(name);
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.value.trim())
    {
        showError(email, 'Please enter your email');
        isValid = false;
    } else if (!emailRegex.test(email.value))
    {
        showError(email, 'Please enter a valid email address');
        isValid = false;
    } else
    {
        removeError(email);
    }

    // Phone validation
    const phoneRegex = /^[\d\s-+()]{10,}$/;
    if (!phone.value.trim())
    {
        showError(phone, 'Please enter your phone number');
        isValid = false;
    } else if (!phoneRegex.test(phone.value))
    {
        showError(phone, 'Please enter a valid phone number');
        isValid = false;
    } else
    {
        removeError(phone);
    }

    // Service validation
    if (!service.value)
    {
        showError(service, 'Please select a service');
        isValid = false;
    } else
    {
        removeError(service);
    }

    // Message validation
    if (!message.value.trim())
    {
        showError(message, 'Please enter your message');
        isValid = false;
    } else if (message.value.trim().length < 10)
    {
        showError(message, 'Message must be at least 10 characters long');
        isValid = false;
    } else
    {
        removeError(message);
    }

    if (isValid)
    {
        // Show success message
        const form = document.getElementById('contactForm');
        form.innerHTML = `
            <div class="success-message">
                <i class="fas fa-check-circle"></i>
                <h3>Thank You!</h3>
                <p>Your message has been sent successfully. We'll get back to you soon.</p>
            </div>
        `;
    }

    return isValid;
}

function showError(input, message) {
    const formGroup = input.parentElement;
    const errorDiv = formGroup.querySelector('.error-message') || document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.textContent = message;

    if (!formGroup.querySelector('.error-message'))
    {
        formGroup.appendChild(errorDiv);
    }

    input.classList.add('error');
}

function removeError(input) {
    const formGroup = input.parentElement;
    const errorDiv = formGroup.querySelector('.error-message');

    if (errorDiv)
    {
        formGroup.removeChild(errorDiv);
    }

    input.classList.remove('error');
}

// Mobile Menu Functionality
document.addEventListener('DOMContentLoaded', function () {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (!mobileMenuBtn || !navLinks) return;

    mobileMenuBtn.addEventListener('click', function () {
        this.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', function (event) {
        if (!event.target.closest('.main-nav') && navLinks.classList.contains('active'))
        {
            mobileMenuBtn.classList.remove('active');
            navLinks.classList.remove('active');
        }
    });

    // Close mobile menu when clicking on a link
    const navItems = document.querySelectorAll('.nav-links a');
    navItems.forEach(item => {
        item.addEventListener('click', function () {
            if (window.innerWidth <= 768)
            {
                mobileMenuBtn.classList.remove('active');
                navLinks.classList.remove('active');
            }
        });
    });

    // Header scroll effect
    const header = document.querySelector('.main-header');
    if (!header) return;

    let lastScroll = 0;

    window.addEventListener('scroll', function () {
        const currentScroll = window.pageYOffset;

        if (currentScroll <= 0)
        {
            header.classList.remove('scroll-up');
            return;
        }

        if (currentScroll > lastScroll && !header.classList.contains('scroll-down'))
        {
            // Scroll Down
            header.classList.remove('scroll-up');
            header.classList.add('scroll-down');
        } else if (currentScroll < lastScroll && header.classList.contains('scroll-down'))
        {
            // Scroll Up
            header.classList.remove('scroll-down');
            header.classList.add('scroll-up');
        }
        lastScroll = currentScroll;
    });
});