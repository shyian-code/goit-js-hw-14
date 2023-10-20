const decrementButton = document.querySelector('[data-action="decrement"]');
const incrementButton = document.querySelector('[data-action="increment"]');
const valueSpan = document.getElementById('value');

// Стилі для кнопок
decrementButton.style.backgroundColor = 'yellow';
decrementButton.style.fontSize = '18px';

incrementButton.style.backgroundColor = 'orange';
incrementButton.style.fontSize = '18px';

// Ініціалізація лічильника
let counterValue = 0;

const updateCounterValue = () => {
  valueSpan.textContent = counterValue;
};

// Додаємо слухачів кліків
decrementButton.addEventListener('click', () => {
  counterValue -= 1;
  updateCounterValue();
});

incrementButton.addEventListener('click', () => {
  counterValue += 1;
  updateCounterValue();
});

// Ініціалізуємо значення в інтерфейсі
updateCounterValue();