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

    // Перевіряємо, чи знаходимося на головній сторінці
    const appointmentForm = document.getElementById('appointment-form');
    if (appointmentForm) {
        // Валідація форми запису (тільки на головній сторінці)
        appointmentForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value.trim();
            const phone = document.getElementById('phone').value.trim();
            const date = document.getElementById('date').value;
            
            // Валідація телефону
            const phonePattern = /^\+38\(\d{3}\) \d{3}-\d{2}-\d{2}$/;
            if (!phonePattern.test(phone)) {
                alert('Будь ласка, введіть коректний номер телефону у форматі +38(099) 123-45-67');
                return;
            }

            if (name === '' || date === '') {
                alert('Будь ласка, заповніть всі обов\'язкові поля');
                return;
            }

            // Відправка форми
            this.reset();
            alert('Ваша заявка успішно відправлена!');
        });
    }

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
