"use strict";

//За допомогою JavaScript для кожного повідомлення
// додайте у верхній правий кут кнопку закриття.

//1. зробити копіювання елементів з шаблона в конкретне місце.
//2. додати до нового елементу класс.
//3. назначити новому елементу слухача та функцію закриття блоку
//4. кнопок багато, контейнерів які закривати також багато.

const refs = {
    btnPattern: document.querySelector('.btn-pattern'),
    pane: document.querySelectorAll('.pane'),
}

refs.pane.forEach(item => {
    const btnClone = refs.btnPattern.cloneNode(true);
    btnClone.classList.replace('btn-pattern', 'js-btn-close');
    item.prepend(btnClone);
})

refs.btnPattern.remove();

const onClickBtnClose = (event) => {
    if (event.target.classList.contains('js-btn-close')) {
        event.target.parentNode.remove()
    }
    
}

window.addEventListener('click', onClickBtnClose)