// 1. Напиши скрипт в якому є три радіобатони зі значенями кольрів. При обиранніна будь якого колір фону боді змінюється відповідно

const colorInput = document.querySelectorAll("input[name='color']");

colorInput.forEach(radio => {
    radio.addEventListener('click', (event) => {
        // console.log(event);
        document.body.style.backgroundColor = event.target.value;     
    });
});



// 2.Напиши скрипт який, при наборі тексту в інпут 
// input#name-input (подія input), підставляє його поточне значення в span#name-output. 
// якщо інпут порожній, в спані повинен відображатися рядок 'незнайомець'.

const input = document.querySelector("#name-input");
const userName = document.querySelector("#name-output");

input.addEventListener("input", (event) => {
    userName.textContent = event.currentTarget.value;
    console.log(event.currentTarget.value);
    if (event.currentTarget.value === "") {
        userName.textContent = "незнайомець"
    }
})


// Напиши скрипт, який би при втраті фокуса на інпут, перевіряв його вміст на правильну кількість символів.
// Скільки символів має бути в інпут, вказується в його атрибуті data-length.
// Якщо введена відповідна кількість, то border інпут стає зеленим,   якщо неправильне - червоним.
// Для додавання стилів, використовуй CSS-класи valid і invalid.

const validationInput = document.querySelector('#validation-input');

validationInput.addEventListener('blur', (event) => {
    const requiredLength = Number(validationInput.dataset.length);
    if (event.target.value.length === requiredLength) {
        validationInput.classList.add('valid');
        validationInput.classList.remove('invalid');
    } else {
        validationInput.classList.add('invalid');
        validationInput.classList.remove('valid');
    }
});





// 3. Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input) 
// і змінює інлайн-стиль span#text оновлюючи властивість font-size. 
// В результаті при перетягуванні повзунка змінюватиметься розмір тексту.

const inputEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");
inputEl.addEventListener("input", () => {
    const size = inputEl.value + "px";
    textEl.style.fontSize = size;
})





