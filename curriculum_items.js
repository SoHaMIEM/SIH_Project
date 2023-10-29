const foodItems = document.querySelector('.food-items');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const itemWidth = 320; // Adjust this value based on your food item width
const visibleItems = 4;
let currentIndex = 0;

nextButton.addEventListener('click', () => {
    if (currentIndex < 6 - visibleItems) {
        currentIndex++;
        const translateValue = -currentIndex * itemWidth;
        foodItems.style.transform = `translateX(${translateValue}px)`;
    }
});

prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        const translateValue = -currentIndex * itemWidth;
        foodItems.style.transform = `translateX(${translateValue}px)`;
    }
});
