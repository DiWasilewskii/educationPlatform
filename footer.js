document.addEventListener('DOMContentLoaded', () => {
    // 1. Динамічне встановлення поточного року
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // 2. Обробка події відправки форми підписки
    const subscribeForm = document.getElementById('subscribe-form');
    const subscribeEmail = document.getElementById('subscribe-email');
    const subscribeMessage = document.getElementById('subscribe-message');

    if (subscribeForm) {
        subscribeForm.addEventListener('submit', (event) => {
            event.preventDefault();

            const email = subscribeEmail.value.trim();

            if (email) {
                // Показуємо повідомлення про успіх
                subscribeMessage.textContent = ' Дякуємо за підписку!';
                subscribeMessage.classList.remove('hidden');

                // Очищаємо поле вводу
                subscribeEmail.value = '';

                // Приховуємо повідомлення через 4 секунди
                setTimeout(() => {
                    subscribeMessage.classList.add('hidden');
                }, 4000);
            }
        });
    }
});