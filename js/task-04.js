const counterStep = 1;
let counterValue = 0;

const counterValueEl = document.querySelector("#value");
const counterMinusBt = document.querySelector('[data-action="decrement"]');
const counterPlusBt = document.querySelector('[data-action="increment"]');

const onClickPlusBt = () => {
    counterValue += counterStep;
    counterValueEl.textContent = counterValue;
};
const onClickMinusBt = () => {
    counterValue -= counterStep;
    counterValueEl.textContent = counterValue;
};

counterPlusBt.addEventListener("click", onClickPlusBt);
counterMinusBt.addEventListener("click", onClickMinusBt);