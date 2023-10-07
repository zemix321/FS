 // Обработчик события для якорных ссылок
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1); // Получаем идентификатор якоря
        const targetElement = document.getElementById(targetId); // Находим элемент с этим идентификатором

        if (targetElement) {
            // Используем метод scrollIntoView для плавного скролла к элементу
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});