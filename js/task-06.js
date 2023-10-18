const inputEl = document.querySelector(`#validation-input`);
const mustLength = inputEl.getAttribute('data-length');

inputEl.addEventListener(`blur`, onCheckLength);
    
function onCheckLength(evt) {
    const evtValue = evt.currentTarget.value;

    if (parseInt(mustLength) === evtValue.length) {
        inputEl.classList.remove('invalid');
    inputEl.classList.add('valid');
    } else {
            inputEl.classList.remove('valid');
    inputEl.classList.add('invalid');
     };
}
