const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ingredientsList = document.querySelector('#ingredients');

const ingredientElements = ingredients.map(ingredientName => {
  const listItem = document.createElement('li');
  listItem.textContent = ingredientName;
  listItem.classList.add('item');
  return listItem;
});

ingredientsList.append(...ingredientElements);