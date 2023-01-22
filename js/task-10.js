"use strict";

const inputNumberEl = document.querySelector('#controls > input[type="number"]');
const createBtEl = document.querySelector('button[data-create]');
const destroyBtEl = document.querySelector('button[data-destroy]');
const boxesEl = document.querySelector('#boxes');

createBtEl.addEventListener("click", createBoxes);
destroyBtEl.addEventListener("click", destroyBoxes);

function destroyBoxes(){
  // const boxChildEl = boxesEl.children;
  // boxChildEl.remove();
  boxesEl.innerHTML = " ";
};
function createBoxes(amount) {
  const numberEl = Number(inputNumberEl.value);
  let divSize = 30;
  const listBlockArray = [];

  for (let i = 0; i < numberEl; i += 1) {
    const divEl = document.createElement('div');
    divEl.style.backgroundColor = getRandomHexColor();
    divEl.style.width = divSize + "px";
    divEl.style.height = divSize + "px";
    listBlockArray.push(divEl);
    divSize += 10;
  }
  boxesEl.append(...listBlockArray);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}