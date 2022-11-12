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
    autorForm: document.querySelector('.autor-form'),
    sendBtn: document.querySelector('.autor-form button'),
    sortBtns: document.querySelector('.sort-buttons'),
    autorBase: document.querySelector('.autor-base'),
}

refs.autorForm.addEventListener('input', onInputChanges)

refs.autorForm.addEventListener('submit', onClickSendBtn)

const autorData = {}

function onClickSendBtn(event) {
    event.preventDefault();

    let skills = []    
    const formData = new FormData(event.currentTarget)

    formData.forEach((value, name) => {
        if (name !== 'skills') {
            autorData[name] = value.trim()
        } else {
            skills = [...skills, value]
            autorData[name] = skills
        }        
    })

    //send userData to storage
    console.log(autorData)

    POSTAutor(autorData)
        .then((promice) => {
            refs.autorBase.innerHTML = ''
            drawDb()
        })

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
            }).join('')

            refs.autorBase.insertAdjacentHTML('beforeend', markup)
        })
        .catch(error => {
            console.log(error)
            const markup = "<p class='error'>Sorry! Connection with database is failed 👀</p>"
            refs.autorBase.insertAdjacentHTML('beforeend', markup)
        })
}

drawDb()

function markupCardOfWriter(autor) {
    const {id, name, surname, email, number, skills} = autor

    if (!skills) {
        return `<ul class="autor">
                <li><span>Id:</span>${id}</li>
                <li><span>Name:</span>${name}</li>
                <li><span>Surname:</span>${surname}</li>
                <li><span>Email:</span>${email}</li>
                <li><span>Number:</span>${number}</li>
            </ul>`
    }

    if (skills) {
        return `<ul class="autor">
                <li><span>Id:</span>${id}</li>
                <li><span>Name:</span>${name}</li>
                <li><span>Surname:</span>${surname}</li>
                <li><span>Email:</span>${email}</li>
                <li><span>Number:</span>${number}</li>
                <li><span>Skills:</span>${skills.join(', ')}</li>
            </ul>`
    }    
}

function POSTAutor(autorData) {
    const options = {
        method: "POST",
        body: JSON.stringify(autorData),
        headers: {
            "Content-Type": "application/json; charset=UTF-8",
        },
    }

    return fetchWriters(options)
}