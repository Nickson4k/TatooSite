document.addEventListener('DOMContentLoaded', function() {
    // Перемикач теми - додаємо на всі сторінки
    const themeToggle = document.createElement('button');
    themeToggle.textContent = '🌓';
    themeToggle.className = 'theme-toggle';
    document.body.prepend(themeToggle);

    function toggleTheme() {
        document.body.classList.toggle('light-theme');
        localStorage.setItem('theme', document.body.classList.contains('light-theme') ? 'light' : 'dark');
    }
    
    themeToggle.addEventListener('click', toggleTheme);
    
    // Відновлення теми
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        document.body.classList.add('light-theme');
    }

    // Плавний скролінг для навігації
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

  

    // Перевіряємо, чи є галерея на сторінці
    const gallery = document.querySelector('.gallery');
    if (gallery && window.location.pathname.includes('index.html')) {
        // Динамічне завантаження галереї для головної сторінки
        const galleryData = [
            {img: 'tattoo3.jpg', alt: 'Геометричний дизайн', desc: 'Nowoczesny ornament plemienny'},
            {img: 'tattoo4.jpg', alt: 'Акварельна татуіровка', desc: 'Delikatny motyw kwiatowy'}
        ];

        function generateGalleryItems(items) {
            items.forEach(item => {
                const div = document.createElement('div');
                div.className = 'gallery-item';
                div.innerHTML = `
                    <img src="${item.img}" alt="${item.alt}">
                    <p>${item.desc}</p>
                `;
                gallery.appendChild(div);
            });
        }
        generateGalleryItems(galleryData);
    }
});
