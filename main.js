document.addEventListener('DOMContentLoaded', () => {
    // Елементи секцій
    const heroSection = document.getElementById('hero-section');
    const videoSection = document.getElementById('video-section');
    const videoTitle = document.getElementById('video-title');
    const videoIframe = document.getElementById('video-iframe');
    
    // Кнопки навігації
    const homeBtn = document.getElementById('home-btn');
    const backBtn = document.getElementById('back-btn');

    // Елементи акордеона
    const courseBtns = document.querySelectorAll('.course-title-btn');
    const topicItems = document.querySelectorAll('.topic-item');

    // 1. Логіка розгортання/згортання розділів (Accordion)
    courseBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const topicList = btn.nextElementSibling;
            
            // Перемикаємо клас active для кнопки (повертає стрілочку)
            btn.classList.toggle('active');
            
            // Перемикаємо видимість списку тем
            topicList.classList.toggle('hidden');
        });
    });

    // 2. Відкриття сторінки з відео
    function openTopic(title, videoUrl) {
        videoTitle.textContent = title;
        videoIframe.src = videoUrl;

        heroSection.classList.add('hidden');
        videoSection.classList.remove('hidden');
        
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // 3. Повернення на головну
    function showHome() {
        videoIframe.src = ''; // Зупиняємо відтворення відео

        videoSection.classList.add('hidden');
        heroSection.classList.remove('hidden');
    }

    // Події для тем
    topicItems.forEach(item => {
        item.addEventListener('click', () => {
            const title = item.getAttribute('data-title');
            const videoUrl = item.getAttribute('data-video-url');
            openTopic(title, videoUrl);
        });
    });

    // Події для кнопок повернення
    homeBtn.addEventListener('click', showHome);
    backBtn.addEventListener('click', showHome);
});


