// import lodash.throttle

const refs = {    
    tbody: document.querySelector('tbody'),
    inputName: document.querySelector('.name'),
    inputPopulation: document.querySelector('.population'),
    inputPersent: document.querySelector('.persent'),
    buttonRemove: document.querySelector('.button-remove'),
    buttonAdd: document.querySelector('.button-add'),
}

const onClickButtonAdd = (event) => {
    if (refs.inputName.value === '' ||
        refs.inputPopulation.value === '' ||
        refs.inputPersent.value === '') {
        return;
    }

    const markup = `<tr>
                        <td>${refs.inputName.value}</td>
                        <td>${refs.inputPopulation.value}</td>
                        <td>${refs.inputPersent.value}</td>
                    </tr>`;

    refs.tbody.insertAdjacentHTML('beforeend', markup)

    refs.inputName.value = '';
    refs.inputPopulation.value = '';
    refs.inputPersent.value = '';
}


const onClickButtonRemove = () => {
    refs.rows = document.querySelectorAll('tbody tr');

    if (refs.rows.length === 0) {
        return;
    }

    refs.rows[refs.rows.length-1].remove();
}

refs.buttonAdd.addEventListener('click', onClickButtonAdd)

refs.buttonRemove.addEventListener('click', onClickButtonRemove)