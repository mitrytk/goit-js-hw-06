"use strict";

const loginFormEl = document.querySelector("form.login-form");

loginFormEl.addEventListener("submit", onSubmitForm);

function onSubmitForm (event) {
    event.preventDefault();
    const {elements: { email, password }} = event.currentTarget;
    if (email.value === "" || password.value === "") {
        alert("Все поля должны быть заполнены.")
    } else {
        
        const submitForm = {
            email: email.value,
            password: password.value,
        };
        console.log(submitForm);
        event.currentTarget.reset();
        return submitForm;
    }
}