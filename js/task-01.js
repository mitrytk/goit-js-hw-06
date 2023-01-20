"use strict";
const ref = {
    categoriesList: document.querySelector(`#categories`).children,
    items: [...document.querySelectorAll(`.item`)],
    categoryTitle: document.querySelectorAll(`.item > h2`),
    elements: document.querySelectorAll(`.item > ul`),
}
console.log(`Number of categories: ${ref.categoriesList.length}`);
console.log(' ');

ref.items.map( (item, index) => {
    console.log(`Category: ${item.children[0].textContent}`);
    console.log(`Elements: ${item.querySelectorAll(`ul > li`).length}`);
    console.log(' ');
});

console.log(ref.items)

