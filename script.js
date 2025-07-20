// Initialize GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Cursor Trail Animation
let cursorTrails = [];
const maxTrails = 20;

function createCursorTrail(x, y) {
    const trail = document.createElement('div');
    trail.className = 'cursor-trail';
    trail.style.left = x + 'px';
    trail.style.top = y + 'px';
    document.body.appendChild(trail);
    
    cursorTrails.push(trail);
    
    // Remove trail after animation
    setTimeout(() => {
        if (trail.parentNode) {
            trail.parentNode.removeChild(trail);
        }
        cursorTrails = cursorTrails.filter(t => t !== trail);
    }, 1000);
    
    // Limit number of trails
    if (cursorTrails.length > maxTrails) {
        const oldTrail = cursorTrails.shift();
        if (oldTrail && oldTrail.parentNode) {
            oldTrail.parentNode.removeChild(oldTrail);
        }
    }
}

// Mouse move event for cursor trail
document.addEventListener('mousemove', (e) => {
    createCursorTrail(e.clientX - 3, e.clientY - 3);
});

// Snowflake Animation
function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.className = 'snowflake';
    snowflake.innerHTML = '❄';
    snowflake.style.left = Math.random() * window.innerWidth + 'px';
    snowflake.style.animationDuration = (Math.random() * 3 + 2) + 's';
    snowflake.style.opacity = Math.random();
    snowflake.style.fontSize = (Math.random() * 10 + 10) + 'px';
    
    document.body.appendChild(snowflake);
    
    // Remove snowflake after animation
    setTimeout(() => {
        if (snowflake.parentNode) {
            snowflake.parentNode.removeChild(snowflake);
        }
    }, 5000);
}

// Create snowflakes periodically
setInterval(createSnowflake, 300);

// Floating Particles
function createParticle() {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = Math.random() * window.innerWidth + 'px';
    particle.style.animationDuration = (Math.random() * 15 + 10) + 's';
    particle.style.animationDelay = Math.random() * 5 + 's';
    
    document.body.appendChild(particle);
    
    // Remove particle after animation
    setTimeout(() => {
        if (particle.parentNode) {
            particle.parentNode.removeChild(particle);
        }
    }, 25000);
}

// Create particles periodically
setInterval(createParticle, 2000);

// DOM Elements
const navbar = document.querySelector('.navbar');
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const skillItems = document.querySelectorAll('.skill-item');
const contactForm = document.getElementById('contactForm');

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
    }, '-=0.5')
    .from('.hologram-container', {
        duration: 1.5,
        scale: 0,
        rotation: 180,
        opacity: 0,
        ease: 'back.out(1.7)'
    }, '-=1');

// Floating elements animation
gsap.to('.element-1', {
    duration: 3,
    y: -20,
    x: 10,
    rotation: 360,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut'
});

gsap.to('.element-2', {
    duration: 4,
    y: -15,
    x: -15,
    rotation: -360,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut'
});

gsap.to('.element-3', {
    duration: 5,
    y: -25,
    x: 20,
    rotation: 360,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut'
});

// Parallax effect for hero visual
gsap.to('.hero-visual', {
    scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: 'bottom top',
        scrub: 1
    },
    y: 100,
    opacity: 0.5
});

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

// Skill bars animation
skillItems.forEach(item => {
    const skillLevel = item.dataset.skill;
    const progressBar = item.querySelector('.skill-progress');
    
    gsap.to(progressBar, {
        scrollTrigger: {
            trigger: item,
            start: 'top 80%'
        },
        duration: 2,
        width: `${skillLevel}%`,
        ease: 'power3.out',
        delay: 0.5
    });
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

// Contact form handling
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Simple form validation
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    if (name && email && subject && message) {
        // Show success animation
        gsap.to(contactForm, {
            duration: 0.5,
            scale: 0.95,
            ease: 'power2.out',
            onComplete: () => {
                gsap.to(contactForm, {
                    duration: 0.5,
                    scale: 1,
                    ease: 'power2.out'
                });
                
                // Show success message
                showNotification('Message sent successfully!', 'success');
                contactForm.reset();
            }
        });
    } else {
        showNotification('Please fill in all fields', 'error');
    }
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
        backgroundColor: type === 'success' ? '#00ff88' : '#ff0088',
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

// Cursor trail effect
let trail = [];
const trailLength = 5;

document.addEventListener('mousemove', (e) => {
    trail.push({ x: e.clientX, y: e.clientY });
    
    if (trail.length > trailLength) {
        trail.shift();
    }

    // Remove existing trail elements
    document.querySelectorAll('.cursor-trail').forEach(el => el.remove());

    // Create new trail elements
    trail.forEach((point, index) => {
        const trailElement = document.createElement('div');
        trailElement.className = 'cursor-trail';
        trailElement.style.cssText = `
            position: fixed;
            width: ${6 - index}px;
            height: ${6 - index}px;
            background: rgba(255, 64, 129, ${0.8 - index * 0.15});
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            left: ${point.x}px;
            top: ${point.y}px;
            transform: translate(-50%, -50%);
            transition: opacity 0.1s ease;
        `;
        
        document.body.appendChild(trailElement);
        
        // Fade out
        setTimeout(() => {
            trailElement.style.opacity = '0';
        }, 50);
    });
});

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

// Particle system for background
class Particle {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 2;
        this.vy = (Math.random() - 0.5) * 2;
        this.size = Math.random() * 3 + 1;
        this.opacity = Math.random();
    }

    update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > this.canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > this.canvas.height) this.vy *= -1;

        this.opacity += (Math.random() - 0.5) * 0.02;
        this.opacity = Math.max(0, Math.min(1, this.opacity));
    }

    draw() {
        this.ctx.save();
        this.ctx.globalAlpha = this.opacity;
        this.ctx.fillStyle = '#ff4081';
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.restore();
    }
}

// Initialize particle system
function initParticles() {
    const canvas = document.createElement('canvas');
    canvas.id = 'particles';
    canvas.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: -1;
        opacity: 0.3;
    `;
    
    document.body.appendChild(canvas);
    
    const ctx = canvas.getContext('2d');
    let particles = [];
    
    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        particles.forEach(particle => {
            particle.update();
            particle.draw();
        });
        
        requestAnimationFrame(animate);
    }
    
    function init() {
        particles = [];
        for (let i = 0; i < 50; i++) {
            particles.push(new Particle(canvas));
        }
    }
    
    resize();
    init();
    animate();
    
    window.addEventListener('resize', () => {
        resize();
        init();
    });
}

// Enhanced scroll indicator
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
            background: linear-gradient(45deg, #ff4081, #d4386b);
            z-index: 10000;
            transition: width 0.1s ease;
            box-shadow: 0 0 10px rgba(255, 64, 129, 0.5);
        `;
        document.body.appendChild(progressBar);
    }
    
    progressBar.style.width = `${scrollPercent}%`;
}

window.addEventListener('scroll', updateScrollIndicator);

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    // Initialize particle system
    initParticles();
    
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
        gsap.fromTo(modal, 
            { opacity: 0 },
            { opacity: 1, duration: 0.3 }
        );
        gsap.fromTo('.modal-content', 
            { scale: 0.7, y: -50 },
            { scale: 1, y: 0, duration: 0.3, ease: "back.out(1.7)" }
        );
    });

    // Close modal
    closeBtn.addEventListener('click', () => {
        gsap.to('.modal-content', {
            scale: 0.7,
            y: -50,
            duration: 0.2,
            onComplete: () => {
                modal.style.display = 'none';
            }
        });
    });

    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            gsap.to('.modal-content', {
                scale: 0.7,
                y: -50,
                duration: 0.2,
                onComplete: () => {
                    modal.style.display = 'none';
                }
            });
        }
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