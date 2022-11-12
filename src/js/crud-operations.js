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

// POST
// GET
// PUT и PATCH
// DELETE

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
    refs.sendBtn.setAttribute('disabled', true)
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

function fetchWriters(options) {
    return fetch('http://localhost:3004/user', options)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.status);
            }
            return response.json()
        })
}

function drawDb() {
    fetchWriters()
        .then(response => {
            return response;
        })
        .then(resultArr => {
            console.log(resultArr)

            const markup = resultArr.map(autor => {
                return markupCardOfWriter(autor)
            })

            refs.userBase.insertAdjacentHTML('beforeend', markup.join(''))
        })
        .catch(error => console.log(error))

}

drawDb()

function markupCardOfWriter(autor) {
    const {id, name, surname, email, number, skills} = autor

    if (!skills) {
        return `<ul class="user">
                <li><span>Id:</span>${id}</li>
                <li><span>Name:</span>${name}</li>
                <li><span>Surname:</span>${surname}</li>
                <li><span>Email:</span>${email}</li>
                <li><span>Number:</span>${number}</li>
            </ul>`
    }

    if (skills) {
        return `<ul class="user">
                <li><span>Id:</span>${id}</li>
                <li><span>Name:</span>${name}</li>
                <li><span>Surname:</span>${surname}</li>
                <li><span>Email:</span>${email}</li>
                <li><span>Number:</span>${number}</li>
                <li><span>Skills:</span>${skills.join(', ')}</li>
            </ul>`
    }    
}