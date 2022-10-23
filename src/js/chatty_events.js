//https://www.jsdelivr.com/package/npm/lodash
//https://lodash.com/



//              _.throttle()
const refs = {
    tasks: document.querySelector('.tasks'),
    partOne: document.querySelector('.part-1'),
    coordinates: document.querySelector('.part-1 .output'),
    count: document.querySelector('.part-1 .count'),

    partTwo: document.querySelector('.part-2'),
    input: document.querySelector('.input'),
    output: document.querySelector('.part-2 .output'),
    countTwo: document.querySelector('.part-2 .count'),
}

let countСallMouse = 0;   

const onMouseMove = (event) => {
    refs.coordinates.textContent = `Ось Х: ${event.clientX}; Ось У: ${event.clientY}`;
    
    
    refs.count.textContent = countСallMouse;
    countСallMouse += 1;
}

refs.partOne.addEventListener('mousemove',  _.throttle(onMouseMove, 500))




//           _.debounce()
let countСallInput = 0; 

const onChangeInput = (event) => {
    countСallInput += 1;

    refs.output.textContent = event.target.value;

    refs.countTwo.textContent = countСallInput;
}


refs.input.addEventListener('input', _.debounce(onChangeInput, 500))


// buttons - remove values

const onClickRemoveValues = (event) => {
    if (event.target.nodeName !== "BUTTON") {
        return;
    }

    document.querySelector(`.${event.target.parentNode.classList.value} .output`).textContent = ''
    document.querySelector(`.${event.target.parentNode.classList.value} .count`).textContent = '0'

    if (event.target.parentNode.classList.value === 'part-1') {
        countСallMouse = 0;
    }

    if (event.target.parentNode.classList.value === 'part-2') {
        countСallInput = 0;
        refs.input.value = '';
    }
    
}

refs.tasks.addEventListener('click', onClickRemoveValues)