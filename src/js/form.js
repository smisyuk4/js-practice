import throttle from 'lodash.throttle';

const refs = {
    form: document.querySelector('.feedback-form'),
};

const STORAGE_KEY = 'feedback-form-state';
const savedText = localStorage.getItem(STORAGE_KEY);
let formData = JSON.parse(savedText) || {};

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onFormInput, 500));

function onFormInput(e) {
    formData[e.target.name] = e.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData))
};

populateTextarea();

function onFormSubmit(evn) {
    evn.preventDefault();
    
    evn.target.reset();
    formData = {}
    
    console.log(formData);
    localStorage.removeItem(STORAGE_KEY);
};

function populateTextarea() {
    const saveMessage = JSON.parse(localStorage.getItem(STORAGE_KEY));
    console.log(saveMessage);
    if (saveMessage?.hasOwnProperty('email')) {
        refs.form.email.value = saveMessage.email;
    };

    if (saveMessage?.hasOwnProperty('message')) {
        refs.form.message.value = saveMessage.message;
    };
};