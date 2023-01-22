"use strict";

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const bodyEl = document.querySelector('body');
const changeColorBtEl = document.querySelector('button.change-color');

changeColorBtEl.addEventListener("click", onClickChangeColorBt);

function onClickChangeColorBt() {
  bodyEl.style.backgroundColor = getRandomHexColor();
};