const spanEl = document.querySelector(`#text`);
const inputEl = document.querySelector(`#font-size-control`);

inputEl.addEventListener(`input`, onFontSizeGhange);

function onFontSizeGhange(evt) {
    const fontSize = inputEl.value;

    spanEl.style.fontSize = `${fontSize}px`;
};