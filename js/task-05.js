const inputEl = document.querySelector(`#name-input`);
let spanEl = document.querySelector(`#name-output`);

inputEl.addEventListener(`input`, onSpanElChangeName);


function onSpanElChangeName(evt) {
    
    const inputValue = evt.currentTarget.value;
    
    if (inputValue) {
        spanEl.textContent = inputValue;
    } else {
        spanEl.textContent = 'Anonymous';
    }
     
}