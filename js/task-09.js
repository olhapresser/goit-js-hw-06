function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const buttonEl = document.querySelector(`.change-color`);
const bodyEl = document.querySelector(`body`);
const spanTex = document.querySelector(`.color`);

buttonEl.addEventListener(`click`, onChangeColorBtnClick);
function onChangeColorBtnClick(evt) {
  let backgrColor = getRandomHexColor();
  bodyEl.classList.add(`background-color`);
  bodyEl.style.backgroundColor = backgrColor;
  spanTex.textContent = backgrColor;

}