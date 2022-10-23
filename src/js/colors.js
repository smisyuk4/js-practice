//https://htmlcolorcodes.com/
const colors = [
    { hex: '#FF5733', RGB: 'rgb(255, 87, 51)' },
    { hex: '#FFA533', RGB: 'rgb(255, 165, 51)' },
    { hex: '#FFE633', RGB: 'rgb(255, 230, 51)' },
    { hex: '#C1FF33', RGB: 'rgb(193, 255, 51)' },
    { hex: '#4FFF33', RGB: 'rgb(79, 255, 51)' },    
    { hex: '#33FFCE', RGB: 'rgb(51, 255, 206)' },   
    { hex: '#5833FF', RGB: 'rgb(88, 51, 255)' },
    { hex: '#33FF71', RGB: 'rgb(51, 255, 113)' },
    { hex: '#FF33E9', RGB: 'rgb(255, 51, 233)' },
    { hex: '#FF339F', RGB: 'rgb(255, 51, 159)' },
    { hex: '#FF3333', RGB: 'rgb(255, 51, 51)' },
    { hex: '#33BBFF', RGB: 'rgb(51, 187, 255)' },
    { hex: '#A833FF', RGB: 'rgb(168, 51, 255)' },
    { hex: '#3368FF', RGB: 'rgb(51, 104, 255)' },
    { hex: '#A6FC79', RGB: 'rgb(166, 252, 121)' },
    { hex: '#799EFC', RGB: 'rgb(121, 158, 252)' },
    { hex: '#FC79E0', RGB: 'rgb(252, 121, 224)' },
    { hex: '#428708', RGB: 'rgb(66, 135, 8)' },
    
]

const refs = {
    body: document. querySelector('body'),
    colorsContainer: document.querySelector('.colors-container'),
}

const markupCards = colors.map((color) => {
    const { hex, RGB } = color;

    return `<div class='js-card' data-value = '${hex}' style='background-color: ${RGB}'>
    <p>${hex}</p>
    </div>`;
})

refs.colorsContainer.insertAdjacentHTML('afterbegin', markupCards.join(''))

const onClickCheckCard = (event) => {
    if (event.target.nodeName !== 'DIV') {
        return;
    }

    const lastActiveBtn = document.querySelector('.check');
    
    if (!event.target.classList.contains('check')) {
        event.target.classList.toggle('check');
    }

    if (lastActiveBtn) {
        lastActiveBtn.classList.remove('check');        
        refs.body.style.backgroundColor = '';   
    }

    const newActiveBtn = document.querySelector('.check');

    refs.body.style.backgroundColor = newActiveBtn?.dataset.value;
}

refs.colorsContainer.addEventListener('click', onClickCheckCard)