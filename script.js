// Initialize GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// DOM Elements
const navbar = document.querySelector('.navbar');
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const skillItems = document.querySelectorAll('.skill-item');

// Navbar scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu toggle
hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close mobile menu when clicking on links
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const offsetTop = targetSection.offsetTop - 70;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Hero animations
gsap.timeline()
    .from('.hero-title .line:nth-child(1)', {
        duration: 1,
        y: 100,
        opacity: 0,
        ease: 'power3.out'
    })
    .from('.hero-title .line:nth-child(2)', {
        duration: 1,
        y: 100,
        opacity: 0,
        ease: 'power3.out'
    }, '-=0.7')
    .from('.hero-title .line:nth-child(3)', {
        duration: 1,
        y: 100,
        opacity: 0,
        ease: 'power3.out'
    }, '-=0.7')
    .from('.hero-description', {
        duration: 1,
        y: 50,
        opacity: 0,
        ease: 'power3.out'
    }, '-=0.5')
    .from('.hero-buttons', {
        duration: 1,
        y: 50,
        opacity: 0,
        ease: 'power3.out'
    }, '-=0.5');

// Section animations
const sections = document.querySelectorAll('section:not(.hero)');

sections.forEach(section => {
    gsap.from(section.querySelector('.section-title'), {
        scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            end: 'bottom 20%'
        },
        duration: 1,
        y: 50,
        opacity: 0,
        ease: 'power3.out'
    });

    gsap.from(section.querySelector('.title-underline'), {
        scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            end: 'bottom 20%'
        },
        duration: 1,
        width: 0,
        ease: 'power3.out',
        delay: 0.3
    });
});

// About section animations
gsap.from('.about-text', {
    scrollTrigger: {
        trigger: '.about',
        start: 'top 70%'
    },
    duration: 1,
    x: -100,
    opacity: 0,
    ease: 'power3.out'
});

gsap.from('.about-image', {
    scrollTrigger: {
        trigger: '.about',
        start: 'top 70%'
    },
    duration: 1,
    x: 100,
    opacity: 0,
    ease: 'power3.out',
    delay: 0.3
});

gsap.from('.detail-item', {
    scrollTrigger: {
        trigger: '.about-details',
        start: 'top 80%'
    },
    duration: 0.8,
    y: 50,
    stagger: 0.2,
    ease: 'power3.out'
});

// Skills section animations
// Ensure elements are visible first, then animate
gsap.set('.skill-category', { opacity: 1, y: 0 });

gsap.from('.skill-category', {
    scrollTrigger: {
        trigger: '.skills',
        start: 'top 70%'
    },
    duration: 1,
    y: 50,
    scale: 0.9,
    stagger: 0.3,
    ease: 'power3.out'
});

// Timeline animations
gsap.from('.timeline-item', {
    scrollTrigger: {
        trigger: '.timeline',
        start: 'top 70%'
    },
    duration: 1,
    y: 100,
    opacity: 0,
    stagger: 0.3,
    ease: 'power3.out'
});

// Projects animations
gsap.from('.project-card', {
    scrollTrigger: {
        trigger: '.projects',
        start: 'top 70%'
    },
    duration: 1,
    y: 100,
    opacity: 0,
    stagger: 0.2,
    ease: 'power3.out'
});

// Contact section animations
gsap.from('.contact-info', {
    scrollTrigger: {
        trigger: '.contact',
        start: 'top 70%'
    },
    duration: 1,
    x: -100,
    opacity: 0,
    ease: 'power3.out'
});

gsap.from('.contact-form', {
    scrollTrigger: {
        trigger: '.contact',
        start: 'top 70%'
    },
    duration: 1,
    x: 100,
    opacity: 0,
    ease: 'power3.out',
    delay: 0.3
});

// Interactive hover effects
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        gsap.to(card, {
            duration: 0.3,
            scale: 1.05,
            rotationY: 5,
            rotationX: 5,
            ease: 'power2.out'
        });
    });

    card.addEventListener('mouseleave', () => {
        gsap.to(card, {
            duration: 0.3,
            scale: 1,
            rotationY: 0,
            rotationX: 0,
            ease: 'power2.out'
        });
    });
});

// Button hover effects
const buttons = document.querySelectorAll('.btn-primary, .btn-secondary');
buttons.forEach(button => {
    button.addEventListener('mouseenter', () => {
        gsap.to(button, {
            duration: 0.3,
            scale: 1.05,
            ease: 'power2.out'
        });
    });

    button.addEventListener('mouseleave', () => {
        gsap.to(button, {
            duration: 0.3,
            scale: 1,
            ease: 'power2.out'
        });
    });
});

// Form animations
const formGroups = document.querySelectorAll('.form-group');
formGroups.forEach(group => {
    const input = group.querySelector('input, textarea');
    const label = group.querySelector('label');

    input.addEventListener('focus', () => {
        gsap.to(group, {
            duration: 0.3,
            scale: 1.02,
            ease: 'power2.out'
        });
    });

    input.addEventListener('blur', () => {
        gsap.to(group, {
            duration: 0.3,
            scale: 1,
            ease: 'power2.out'
        });
    });
});

// Notification system
function showNotification(message, type) {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}"></i>
        <span>${message}</span>
    `;
    
    // Add notification styles
    Object.assign(notification.style, {
        position: 'fixed',
        top: '20px',
        right: '20px',
        padding: '1rem 2rem',
        borderRadius: '8px',
        color: 'white',
        backgroundColor: type === 'success' ? '#059669' : '#dc2626',
        zIndex: '10000',
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
        transform: 'translateX(100%)',
        transition: 'transform 0.3s ease'
    });

    document.body.appendChild(notification);

    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);

    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Typing effect for hero
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

// Scroll indicator
function updateScrollIndicator() {
    const scrollTop = window.pageYOffset;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    
    // Create progress bar if it doesn't exist
    let progressBar = document.querySelector('.scroll-progress');
    if (!progressBar) {
        progressBar = document.createElement('div');
        progressBar.className = 'scroll-progress';
        progressBar.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 0%;
            height: 3px;
            background: #0ea5e9;
            z-index: 10000;
            transition: width 0.1s ease;
            box-shadow: 0 0 10px rgba(14, 165, 233, 0.4);
        `;
        document.body.appendChild(progressBar);
    }
    
    progressBar.style.width = `${scrollPercent}%`;
}

window.addEventListener('scroll', updateScrollIndicator);

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    // Add loading animation
    gsap.from('body', {
        duration: 1,
        opacity: 0,
        ease: 'power2.out'
    });
    
    // Preload animations
    gsap.set('.fade-in', { opacity: 0, y: 50 });
    gsap.set('.slide-in-left', { opacity: 0, x: -50 });
    gsap.set('.slide-in-right', { opacity: 0, x: 50 });
    gsap.set('.scale-in', { opacity: 0, scale: 0.8 });
});

// Performance optimization
let ticking = false;

function updateAnimations() {
    // Update any frame-based animations here
    ticking = false;
}

function requestTick() {
    if (!ticking) {
        requestAnimationFrame(updateAnimations);
        ticking = true;
    }
}

// Add scroll performance optimization
window.addEventListener('scroll', requestTick);

// Service worker registration for PWA capabilities
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}

// Modal functionality
const modal = document.getElementById('contact-form-modal');
const contactBtn = document.getElementById('contact-btn');
const closeBtn = document.querySelector('.close');

if (contactBtn && modal && closeBtn) {
    // Open modal
    contactBtn.addEventListener('click', () => {
        modal.style.display = 'block';
        modal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
        gsap.fromTo(modal, 
            { opacity: 0 },
            { opacity: 1, duration: 0.3 }
        );
        gsap.fromTo('.modal-content', 
            { scale: 0.7, y: -50 },
            { scale: 1, y: 0, duration: 0.3, ease: "back.out(1.7)" }
        );
    });

    function closeModal() {
        gsap.to('.modal-content', {
            scale: 0.7,
            y: -50,
            duration: 0.2,
            onComplete: () => {
                modal.style.display = 'none';
                modal.setAttribute('aria-hidden', 'true');
                document.body.style.overflow = '';
            }
        });
    }

    closeBtn.addEventListener('click', closeModal);

    window.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });

    modal.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeModal();
    });

    // Handle modal form submission
    const modalForm = modal.querySelector('form');
    if (modalForm) {
        modalForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Submit to Formspree
            fetch(modalForm.action, {
                method: 'POST',
                body: new FormData(modalForm),
                headers: {
                    'Accept': 'application/json'
                }
            }).then(response => {
                if (response.ok) {
                    gsap.to('.modal-content', {
                        scale: 0.7,
                        y: -50,
                        duration: 0.2,
                        onComplete: () => {
                            modal.style.display = 'none';
                            modal.setAttribute('aria-hidden', 'true');
                            document.body.style.overflow = '';
                            modalForm.reset();
                            showNotification('Message sent successfully! I\'ll get back to you soon.', 'success');
                        }
                    });
                } else {
                    showNotification('Oops! There was a problem sending your message. Please try again.', 'error');
                }
            }).catch(error => {
                showNotification('Oops! There was a problem sending your message. Please try again.', 'error');
            });
        });
    }
} 