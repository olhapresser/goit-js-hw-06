const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
let counterValueText = document.querySelector(`#value`);


function changeCounterValue() {
  counterValueText.textContent = currentValue;
};
let currentValue = 0;

decrementBtn.addEventListener(`click`, onDecrementBtnClick);
incrementBtn.addEventListener(`click`, onIncrementBtnClick);


function onDecrementBtnClick(evt) {
    currentValue -= 1;
    changeCounterValue();
};

function onIncrementBtnClick(evt) {
    currentValue += 1;
    changeCounterValue();
};

    changeCounterValue();
