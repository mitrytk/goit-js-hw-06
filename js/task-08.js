"use strict";

const loginFormEl = document.querySelector("form.login-form");
// const loginFormSubmitEl = document.querySelector('form.login-form > button');

loginFormEl.addEventListener("submit", onSubmitForm);

function onSubmitForm (event) {
    event.preventDefault();
    const {elements: { email, password }} = event.currentTarget;
    if (email.value === "" || password.value === "") {
        alert("Все поля должны быть заполнены.")
    } else {
        console.log(email.value);
        console.log(password.value);
        const submitForm = {
            email: email.value,
            password: password.value,
        };
        event.currentTarget.reset();
        return submitForm;
    }
    
}
console.log(submitForm);