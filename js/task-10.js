function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const inputEl = document.querySelector(`#controls > input`);
const createBtn = document.querySelector(`[data-create]`);
const destroyBtn = document.querySelector(`[data-destroy]`);
const divEl = document.querySelector(`#boxes`);

createBtn.addEventListener(`click`, createBoxes);
destroyBtn.addEventListener(`click`, onDestroyBtnClick);


function createBoxes(amount) {
  amount = Number(inputEl.value);
  const divCountity = divEl.childElementCount;
  let markup = ``;

  if (!divCountity){
    for (let i = 0; i < amount; i += 1){
      markup += `<div style = "background-color: ${getRandomHexColor()}; width: ${
        30 + i * 10 + 'px'}; height: ${30 + i * 10 + 'px'}"></div>`
    }
  } else {
    for (let i = divCountity; i < amount + divCountity; i += 1){
      markup += `<div style = "background-color: ${getRandomHexColor()}, width: ${30 + i * 10 + 'px'}, height: ${30 + i * 10 + 'px'}"></div>`
    }
  }

  divEl.insertAdjacentHTML('beforeend', markup);
  inputEl.value = ``;

}

function onDestroyBtnClick(evt) {
  inputEl.value = ``;
  divEl.innerHTML = ``;
}