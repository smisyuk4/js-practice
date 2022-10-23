// import lodash.throttle

const refs = {    
    tbody: document.querySelector('tbody'),
    inputName: document.querySelector('.name'),
    inputPopulation: document.querySelector('.population'),
    inputPersent: document.querySelector('.persent'),
    buttonRemove: document.querySelector('.button-remove'),
    buttonAdd: document.querySelector('.button-add'),
}

let arrData = [];
const NAME = null;
const POPULATION = null;
const PERSENT = null;

const tableFromLocalStorage = localStorage.getItem('tableData');

if (tableFromLocalStorage !== null) {
    const arrFromLocalStorage = JSON.parse(tableFromLocalStorage);
    console.log(arrFromLocalStorage)

    const makeMarkup = arrFromLocalStorage.map(item => {
        return `<tr>
                    <td>${item.NAME}</td>
                    <td>${item.POPULATION}</td>
                    <td>${item.PERSENT}</td>
                </tr>`;
    })

    refs.tbody.insertAdjacentHTML('beforeend', makeMarkup.join(''))
}

const onClickButtonAdd = () => {
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

    const objData = {
        NAME: refs.inputName.value,
        POPULATION: refs.inputPopulation.value,
        PERSENT: refs.inputPersent.value,
    };  

    try {
        const tableFromLocalStorage = localStorage.getItem('tableData');

        if (tableFromLocalStorage === null) {
            arrData = [...arrData, objData]
            localStorage.setItem('tableData', JSON.stringify(arrData))
        }

        if (tableFromLocalStorage !== null) {
            const arrFromLocalStorage = JSON.parse(tableFromLocalStorage);
            arrData = [...arrFromLocalStorage, objData]
            localStorage.setItem('tableData', JSON.stringify(arrData))
        }  
    } catch (error) {
        console.log(error.message)
    }         

    refs.inputName.value = '';
    refs.inputPopulation.value = '';
    refs.inputPersent.value = '';
}

const onClickButtonRemove = () => {
    refs.rows = document.querySelectorAll('tbody tr');

    if (refs.rows.length === 0) {
        return;
    }

    try {
        const strFromLocalStorage = localStorage.getItem('tableData');

        if (strFromLocalStorage !== null) {
            const arrFromLocalStorage = JSON.parse(strFromLocalStorage);

            if (arrFromLocalStorage.length > 1) {
                arrFromLocalStorage.pop()
                localStorage.setItem('tableData', JSON.stringify(arrFromLocalStorage))
            } else {
                localStorage.removeItem('tableData');
            }             
        }        
    } catch (error){
        console.log(error.message)
    }    

    refs.rows[refs.rows.length-1].remove();
}

refs.buttonAdd.addEventListener('click', onClickButtonAdd)

refs.buttonRemove.addEventListener('click', onClickButtonRemove)