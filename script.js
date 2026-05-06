const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, observerOptions);

// Observa cards
document.querySelectorAll('.cert-card, .activity-card')
    .forEach(el => observer.observe(el));


const modal = document.getElementById('pdf-modal');
const iframe = document.getElementById('pdf-viewer');
const closeModal = document.querySelector('.close-modal');

document.querySelectorAll('.view-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.stopPropagation(); // evita conflito com o card

        const card = btn.closest('.cert-card');
        const pdfPath = card.getAttribute('data-pdf');

        if (pdfPath) {
            iframe.src = pdfPath;
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        }
    });
});

const handleCloseModal = () => {
    modal.style.display = 'none';
    iframe.src = '';
    document.body.style.overflow = 'auto';
};

closeModal.addEventListener('click', handleCloseModal);

window.addEventListener('click', (event) => {
    if (event.target === modal) {
        handleCloseModal();
    }
});


const navLinks = document.querySelectorAll('nav a');
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    let current = "";
    const scrollPos = window.scrollY + 150;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});

const track = document.querySelector('.carousel-track');
const items = document.querySelectorAll('.carousel-item');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

let index = 0;

function updateCarousel() {
    track.style.transform = `translateX(-${index * 100}%)`;
}

nextBtn.addEventListener('click', () => {
    index = (index + 1) % items.length;
    updateCarousel();
});

prevBtn.addEventListener('click', () => {
    index = (index - 1 + items.length) % items.length;
    updateCarousel();
});

// BOTÃO PROJETO (placeholder)
document.querySelectorAll('.project-btn').forEach((btn, index) => {
    btn.addEventListener('click', () => {
    });
});