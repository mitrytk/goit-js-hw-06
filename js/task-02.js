"use strict";
const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const listArray = [];


ingredients.map((ingredient, index) => {
  const liElement = document.createElement('li');
  liElement.classList.add(`item`);
  liElement.textContent = ingredient;
  listArray.push(liElement);
  console.log(listArray);
})

document.querySelector(`#ingredients`).append(...listArray);