document.addEventListener('DOMContentLoaded', function() {
    // Валідація форми запису
    const form = document.getElementById('appointment-form');
    form.addEventListener('submit', function(e) {
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

    // Динамічне завантаження галереї
    const galleryData = [
        {img: 'tattoo3.jpg', alt: 'Геометричний дизайн', desc: 'Сучасний трайбл орнамент'},
        {img: 'tattoo4.jpg', alt: 'Акварельна татуіровка', desc: 'Ніжний квітковий мотив'}
    ];

    function generateGalleryItems(items) {
        const gallery = document.querySelector('.gallery');
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

    // Плавна прокрутка
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });

    // Перемикач теми
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
});