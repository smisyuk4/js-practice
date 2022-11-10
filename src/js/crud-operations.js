//        сервер для практики запросов
// https://github.com/typicode/json-server
// npm install -g json-server

//        запуск сервера
// npm run server (потому что сделал скрипт запуска сервера)
//        или базовая команда от пакета
// json-server --watch db.json --port 3004

//  http://localhost:3000/posts/1,

// class formData
//https://www.youtube.com/watch?v=iJq-NwbZL84

const refs = {
    userForm: document.querySelector('.user-form'),
    sendBtn: document.querySelector('.user-form button'),
    sortBtns: document.querySelector('.sort-buttons'),
    userBase: document.querySelector('.user-base'),
}

refs.userForm.addEventListener('input', onInputChanges)

refs.userForm.addEventListener('submit', onClickSendBtn)

const userData = {}

function onClickSendBtn(event) {
    event.preventDefault();

    let skills = []    
    const formData = new FormData(event.currentTarget)

    formData.forEach((value, name) => {
        if (name !== 'skills') {
            userData[name] = value
        } else {
            skills = [...skills, value]
            userData[name] = skills
        }        
    })

    //send userData to storage
    console.log(userData)
    event.target.reset()
}

function onInputChanges(event) {
    let length = null
    const formData = new FormData(event.currentTarget)

    formData.forEach((value, name) => {
        if (value !== '') {
            length += 1
        }
    })

    if (length === 4) {
        refs.sendBtn.removeAttribute('disabled')
    }
}