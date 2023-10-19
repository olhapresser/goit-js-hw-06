const form = document.querySelector(`.login-form`);


form.addEventListener(`submit`, onFormSubmit);


// --------------------Variant 1 --------------
// function onFormSubmit(evt) {
//     evt.preventDefault();

//     const formEl = evt.currentTarget.elements;

//     const email = formEl.email.value;
//     const password = formEl.password.value;

//     const formData = {
//         email,
//         password
//     }; 

// }


// --------------------Variant 2 --------------

function onFormSubmit(evt) {
 evt.preventDefault();
    const formData = new FormData(evt.currentTarget);

    const formValues = {};
    formData.forEach((value, name) => {
       
        if (value === ``) {
            alert (`Дозаповни форму, будь ласка!`)
        } else {
            formValues[name] = value;
        }
    });

    console.log(formValues);
    form.reset();
}

// Тут в мене питання, чи правильно я розумію, що навіть коли прилітає alert (наприклад, ми заповнили поле email і не заповнили пароль), то все одно данні йдуть на бекенд => тільки email?
// Якщо так, то як це виправити? Нашо нам відправляти дані окремо email без паролю. Дякую!

