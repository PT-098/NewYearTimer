function countdown() {
 
    const newYear = new Date('January 1, 2026 00:00:00').getTime();
    const now = new Date().getTime();
    const distance = newYear - now;


    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);


    document.getElementById("days").innerText = String(days).padStart(2, '0');
    document.getElementById("hours").innerText = String(hours).padStart(2, '0');
    document.getElementById("minutes").innerText = String(minutes).padStart(2, '0');
    document.getElementById("seconds").innerText = String(seconds).padStart(2, '0');

   
    if (distance < 0) {
        clearInterval(interval);
        document.getElementById("countdown").innerHTML = "<h1>С НОВЫМ ГОДОМ!</h1>";
    }
}


const interval = setInterval(countdown, 1000);
const giftIdeas = [
    "Ароматический диффузор с маслами",
    "Стильная сумка",
    "Набор инструментов",
    "Конструктор",
    "Настольная игра",
    "Подарочная карта в любимый магазин",
    "Книга от любимого автора",
    "Гаджет (беспроводные наушники)",
    "Набор для творчества",
    "Уютный плед",
    "Премиум алкоголь",
    "Кулинарная книга",
    "Интерактивная игрушка",
    "Растение в горшке",
    "Оригинальная кружка",
    "Сертификат на спа-процедуры",
    "Набор косметики",
    "Набор для пикника"
];

document.getElementById("generate-btn").addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * giftIdeas.length);
    document.getElementById("gift-idea").textContent = giftIdeas[randomIndex];
});
