// Отримуємо доступ до елемента ul#categories
const categoriesList = document.querySelector('#categories');

// Отримуємо всі елементи li.item зі списку ul#categories
const categoryItems = categoriesList.querySelectorAll('li.item');

// Виводимо у консоль кількість категорій
console.log(`Number of categories: ${categoryItems.length}`);


// Циклом проходимо по кожному елементу li.item
categoryItems.forEach(category => {
  // Отримуємо текст заголовку (тег h2) для кожної категорії
  const categoryName = category.firstElementChild.textContent;

  // Отримуємо всі підкатегорії (елементи li) у даній категорії
  const subcategories = category.lastElementChild.children;

  console.log('');
  // Виводимо назву категорії та кількість елементів у ній
  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${subcategories.length}`);
});