/* ============================================
   Kaushal Jha — Portfolio JS
   ============================================ */

// ---------- Mobile menu ----------
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId);
    const nav = document.getElementById(navId);

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show');
                
                // Toggle icon
                const icon = toggle.querySelector('i');
                if (icon) {
                    icon.classList.toggle('bx-menu');
                    icon.classList.toggle('bx-x');
                }
        });
    }
};
showMenu('nav-toggle', 'nav-menu');

// Close mobile menu + mark active link on click
const navLinks = document.querySelectorAll('.nav-link');

function linkAction() {
    navLinks.forEach(n => n.classList.remove('active'));
    this.classList.add('active');

    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show');

        // Reset icon to menu when a link is clicked
        const toggleIcon = document.querySelector('#nav-toggle i');
        if (toggleIcon) {
            toggleIcon.classList.remove('bx-x');
            toggleIcon.classList.add('bx-menu');
        }
}
navLinks.forEach(n => n.addEventListener('click', linkAction));

// ---------- Scroll spy ----------
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 80;
        const sectionId = current.getAttribute('id');
        const link = document.querySelector('.nav-menu a[href*="' + sectionId + '"]');

        if (!link) return;

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}
window.addEventListener('scroll', scrollActive);

// ---------- Typewriter effect for hero roles ----------
const roles = [
    'Full Stack Web Developer',
    'MERN Stack Developer',
    'Frontend Developer @ FusionHive',
    'Research Intern @ DRDO'
];

const typedEl = document.getElementById('typed-text');

if (typedEl) {
    let roleIndex = 0;
    let charIndex = 0;
    let deleting = false;

    function typeLoop() {
        const current = roles[roleIndex];

        if (!deleting) {
            charIndex++;
            typedEl.textContent = current.slice(0, charIndex);

            if (charIndex === current.length) {
                deleting = true;
                setTimeout(typeLoop, 1800);
                return;
            }
        } else {
            charIndex--;
            typedEl.textContent = current.slice(0, charIndex);

            if (charIndex === 0) {
                deleting = false;
                roleIndex = (roleIndex + 1) % roles.length;
            }
        }

        const speed = deleting ? 35 : 65;
        setTimeout(typeLoop, speed);
    }

    typeLoop();
}

// ---------- Twinkling star field in hero ----------
const starField = document.getElementById('home-stars');

if (starField) {
    const STAR_COUNT = 60;

    for (let i = 0; i < STAR_COUNT; i++) {
        const star = document.createElement('span');
        const size = (Math.random() * 2 + 1).toFixed(1);

        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.width = size + 'px';
        star.style.height = size + 'px';
        star.style.animationDelay = (Math.random() * 4).toFixed(2) + 's';
        star.style.animationDuration = (3 + Math.random() * 4).toFixed(2) + 's';

        starField.appendChild(star);
    }
}

// ---------- Back to top ----------
const backToTop = document.getElementById('back-to-top');

if (backToTop) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 400) {
            backToTop.classList.add('show');
        } else {
            backToTop.classList.remove('show');
        }
    });
}

// ---------- Footer year ----------
const yearEl = document.getElementById('year');
if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
}

// ---------- Scroll Reveal ----------
const sr = ScrollReveal({
    origin: 'bottom',
    distance: '40px',
    duration: 800,
    easing: 'cubic-bezier(0.5, 0, 0, 1)',
    reset: false
});

sr.reveal('.home-greeting', { delay: 100 });
sr.reveal('.home-title', { delay: 200 });
sr.reveal('.home-terminal', { delay: 300 });
sr.reveal('.home-description', { delay: 400 });
sr.reveal('.home-cta', { delay: 500 });
sr.reveal('.home-meta', { delay: 600 });

sr.reveal('.about-img-wrap', { delay: 100 });
sr.reveal('.about-content', { delay: 200 });

sr.reveal('.section-head', {});
sr.reveal('.timeline-item', { interval: 150 });

sr.reveal('.skills-group', { interval: 120 });

sr.reveal('.portfolio-card', { interval: 120 });

sr.reveal('.contact-info', { delay: 100 });
sr.reveal('.contact-form', { delay: 200 });

// ---------- Tab attention message ----------
window.addEventListener('load', () => {
    const favicon = document.getElementById('favicon');
    const pageTitle = document.title;
    const attentionMessage = 'Come back! 👋';

    document.addEventListener('visibilitychange', () => {
        const isPageActive = !document.hidden;

        if (isPageActive) {
            document.title = pageTitle;
            if (favicon) favicon.href = 'image/dp_male.svg';
        } else {
            document.title = attentionMessage;
        }
    });
});