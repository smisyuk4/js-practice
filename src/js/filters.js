const refs = {
    form: document.querySelector('form'),
}

const LOCALSTORAGE_KEY = 'form-values';

const initForm = () => {
    let storageValues = localStorage.getItem(LOCALSTORAGE_KEY);

    if (storageValues) {
        storageValues = JSON.parse(storageValues)

        Object.entries(storageValues).forEach(([name, value]) => {
            refs.form.elements[name].value = value;
        })
    }
}

initForm();

const onClickSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(refs.form);

    formData.forEach((value, name) => {
        console.log(value, name);
    })
}

const onClickReset = () => {
    localStorage.removeItem(LOCALSTORAGE_KEY);
}

const onChangeInput = (event) => {   
    let storageValues = localStorage.getItem(LOCALSTORAGE_KEY);

    storageValues = storageValues ? JSON.parse(storageValues) : {};

    storageValues[event.target.name] = event.target.value;

    localStorage.setItem('form-values', JSON.stringify(storageValues));
}

refs.form.addEventListener('submit', onClickSubmit)

refs.form.addEventListener('reset', onClickReset)

refs.form.addEventListener('change', onChangeInput)

