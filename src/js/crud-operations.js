//        сервер для практики запросов
// https://github.com/typicode/json-server
// npm install -g json-server

//        запуск сервера
// npm run server - потому что сделал скрипт запуска сервера
//        или базовая команда от пакета
// json-server --watch db.json --port 1986

//  http://localhost:1986/posts/1,

// class formData
//https://www.youtube.com/watch?v=iJq-NwbZL84

// POST + 
// GET
// PUT и PATCH
// DELETE

const refs = {
    autorForm: document.querySelector('.autor-form'),
    sendBtn: document.querySelector('.autor-form button'),
    autorBase: document.querySelector('.autor-base'),
    getAutor: document.querySelector('.get-autor'),
    inputAutor: document.querySelectorAll('.get-autor input'),
    resultGetAutor: document.querySelector('.result'),
    patchForm: document.querySelector('.patch-autor'),
    patchBtn: document.querySelector('.patch-autor button'),
    getBtn: document.querySelector('.get-autor button'),
    sortBtns: document.querySelector('.sort-buttons'),
}

refs.autorForm.addEventListener('input', onInputChanges)
refs.autorForm.addEventListener('submit', onClickSendBtn)

refs.getAutor.addEventListener('input', onInputChangesGet)
refs.getAutor.addEventListener('submit', onClickGetBtn)

refs.patchForm.addEventListener('input', onInputChangesPatch)
refs.patchForm.addEventListener('submit', onClickPatchBtn)

function onClickSendBtn(event) {
    event.preventDefault();

    const autorData = {}
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

function onClickGetBtn(event) {
    event.preventDefault()

    let value
    const formData = new FormData(event.currentTarget)
    formData.forEach(item => {
        if (item) {
            value = item
        }
    })

    //data for GET method
    console.log(value)

    GETAutor(value)

    event.target.reset()
    // refs.inputAutor.forEach(input => input.removeAttribute('disabled'))
    refs.getBtn.setAttribute('disabled', true)
}

function onClickPatchBtn(event) {
    event.preventDefault()

    let valueForPatch = {}
    let skills = [] 
    const formData = new FormData(event.currentTarget)

    formData.forEach((value, name) => {
        if (value) {
            valueForPatch[name] = value.trim()
        }
        
        if (name === 'skills') {
            skills = [...skills, value]
            valueForPatch[name] = skills
        }   
    })

    // data for PATCH
    console.log(valueForPatch)

    PATCHAutor(valueForPatch)
    
    event.target.reset()
    refs.patchBtn.setAttribute('disabled', true)
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

function onInputChangesGet(event) {
    let length = null
    const formData = new FormData(event.currentTarget)

    formData.forEach((value, name) => {
        if (value !== '') {
            length += 1
            console.log(name)
        }
    })

    if (length === 1) {
        refs.getBtn.removeAttribute('disabled')
    }

    //close inputs for change
    refs.inputAutor.forEach(input => {
        if (!input.value) {
            input.setAttribute('disabled', true)
        }
    })
    
}

function onInputChangesPatch(event){
    let length = null
    const formData = new FormData(event.currentTarget)

    formData.forEach((value, name) => {
        if (value !== '') {
            length += 1
        }
    })

    if (length === 2) {
        refs.patchBtn.removeAttribute('disabled')
    }

}

function fetchWriters(value, options) {
    const BASE_URL = 'http://localhost:1986/autor/'
    let url
    if (value) {
        url = BASE_URL + value
    }

    if (!value) {
        url = BASE_URL
    }    

    return fetch(url, options)
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

    return fetchWriters("", options)
}

function GETAutor(value) {
    console.log(value)

    fetchWriters(value, {})
        .then((value) => {
            refs.resultGetAutor.innerHTML = '<p>result</p>'
            const markup = markupCardOfWriter(value)
            refs.resultGetAutor.insertAdjacentHTML('beforeend', markup)
        })
}

function PATCHAutor(valueForPatch) {
    const options = {
        method: "PATCH",
        body: JSON.stringify(valueForPatch),
        headers: {
            "Content-Type": "application/json; charset=UTF-8",
        },
    }

    fetchWriters(valueForPatch.id, options)
        .then((promice) => {
                refs.autorBase.innerHTML = ''
                drawDb()
            })
}