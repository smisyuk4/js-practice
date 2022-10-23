"use strict";

// Напишіть такий JavaScript,
// щоб після натискання на кнопку button,
// елемент < div id = "text" > зникав.

const refs = {
    btnHide: document.querySelector('#hider'),
    btnShow: document.querySelector('#show'),
    btnRemove: document.querySelector('#remove'),
    elem: document.querySelector('#text'),
}

const onClickBtnHide = () => {
    refs.elem.setAttribute('hidden', 'true')
}

const onClickBtnShow = () => {
    refs.elem.removeAttribute('hidden')
}

const onClickBtnRemove = () => {
    refs.elem.remove();
}


refs.btnHide.addEventListener('click', onClickBtnHide)
refs.btnShow.addEventListener('click', onClickBtnShow)
refs.btnRemove.addEventListener('click', onClickBtnRemove)