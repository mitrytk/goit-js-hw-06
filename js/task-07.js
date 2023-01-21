"use strict";
const inputFontSizeControlEl = document.querySelector("input#font-size-control");
const spanTextEl = document.querySelector("span#text");

inputFontSizeControlEl.addEventListener("input", onChangeValue);

function onChangeValue () {
    spanTextEl.style.fontSize = inputFontSizeControlEl.value + "px";
};