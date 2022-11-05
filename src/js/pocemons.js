// https://pokeapi.co/docs/v2

import iconPower from '../images/icons/icon-power.svg'

const refs = {
    pocemon: document.querySelector('.pocemon'),
    buttonNewPoce: document.querySelector('.make-btn')
}

refs.buttonNewPoce.addEventListener('click', generateCard)

function generateCard() {
    refs.pocemon.innerHTML = ''
    const id = generateId()
    
    getFetch(id)
    .then(response => {
    if (!response.ok) {
        throw new Error(response.status);
    }
        return response.json();
    })
    .then(data => {
        console.log(data)

        const pocemon = {
            img: data.sprites.front_default,
            id: data.id,
            name: data.name,
            abilities: data.abilities,
            species: data.species.name,
            weight: data.weight,
        }

        
        

        const markup = pocemonCadrdTemplate(pocemon)
        refs.pocemon.insertAdjacentHTML('beforeend', markup)
    })
    .catch(error => {
        console.log(error)
    })
}

function generateId(min = 0, max = 500) {
    return Math.floor(Math.random() * (max - min) + min)
}

function getFetch(id) {
    return fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
}

function pocemonCadrdTemplate(pocemon) {
    const {img, id, name, abilities, species, weight} = pocemon

    const abilitiList = abilities.map(item => {
        return `<li>
                    <svg class="icon-power" width="20" height="20">
                        <use href="${iconPower}"></use>
                    </svg>                    
                    ${item.ability.name}
                </li>`
    }).join('')

    return `<div class="pocemon-card">
                <div class="pocemon-avatar">                
                    <img class="pocemon-pic"
                        src="${img}" alt="">
                </div>
                <div class="pocemon-desc">
                    <p class="pocemon-id"><span>id:</span> ${id}</p>
                    <p class="pocemon-name"><span>name:</span> ${name}</p>
                    <ul class="pocemon-abilitys"><span>abilities:</span>
                        ${abilitiList}
                    </ul>
                    <p class="pocemon-species"><span>species:</span> ${species}</p>
                    <p class="pocemon-weight"><span>weight:</span> ${weight}</p>
                </div>           
            </div>`
}







