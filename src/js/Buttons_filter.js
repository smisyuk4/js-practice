const refs = {
    container: document.querySelector('.container'),
    filterButton: document.querySelectorAll('.filter-button'),
}

let selectedBtn = null;

const onClickButton = (event) => {
    if (event.target.nodeName !== 'BUTTON'){
        return;
    }
    
    const currentActiveBtn = document.querySelector('.check');

    // option #1
    if (currentActiveBtn !== null) {
        currentActiveBtn.classList.remove('check')
    }

    // option #2 (если currentActiveBtn-объект, то возьми .classList; 
    //            если нет объекта то справа от ? не работает)
    // currentActiveBtn?.classList.remove('check')

    const nextActiveBtn = event.target;        
    nextActiveBtn.classList.add('check');
    selectedBtn = nextActiveBtn.dataset.value
    
    console.log(selectedBtn)
}

let selectedBtns = new Set();

const onClickButton2 = (event) => {
    if (event.target.nodeName !== 'BUTTON'){
        return;
    }

    const btn = event.target;
    const value = btn.dataset.value;
    const isActive = btn.classList.contains('check2');

    if (isActive) {
        selectedBtns.delete(value);
    }
    
    if (!isActive) {
        selectedBtns.add(value);
    }
    
    btn.classList.toggle('check2');    

    console.log(selectedBtns)
}


refs.filterButton[0].addEventListener('click', onClickButton);

refs.filterButton[1].addEventListener('click', onClickButton2)


