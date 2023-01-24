"use strict";
const inputTextEl = document.querySelector("#validation-input");
const validLength = Number(inputTextEl.dataset.length);
inputTextEl.addEventListener("blur", onInputValid);

function onInputValid(event) {
    if (inputTextEl.value.length === validLength) {
        inputTextEl.classList.remove("invalid");
        inputTextEl.classList.add("valid");
    } else {
        inputTextEl.classList.remove("valid")
        inputTextEl.classList.add("invalid");
    };
};

