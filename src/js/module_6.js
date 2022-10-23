"use strict";

const refs = {
    input: document.querySelector('.js-input'),
    checkbox: document.querySelector('.js-checkbox'),
    checkboxOutput: document.querySelector('.js-checkbox-output'),
    btn: document.querySelector('.js-btn'),
}

const writeName = (event) => {
    refs.checkboxOutput.textContent = event.currentTarget.value;
}

const isAccept = (event) => {
    refs.btn.disabled = !event.currentTarget.checked;
}

refs.input.addEventListener('input', writeName);
refs.checkbox.addEventListener('change', isAccept)