"use strict";

const refs = {
    btnOpen: document.querySelector('.btn-open-modal'),
    btnClose: document.querySelector('.btn-close-modal'),
    backdrop: document.querySelector('.backdrop-modal'),
}

const onClickBtnOpen = (event) => {
    window.addEventListener('keydown', onPressEscBtn)
    refs.backdrop.classList.toggle('hide')
}

const onClickBtnClose = () => {
    window.removeEventListener('keydown', onPressEscBtn)
    refs.backdrop.classList.toggle('hide')
}

const onPressEscBtn = (event) => {
    if (event.code === 'Escape') {
        onClickBtnClose();
    }
}

const onClickBackdrop = (event) => {
    if (event.currentTarget === event.target) {
        onClickBtnClose();
    }
}

refs.btnOpen.addEventListener('click', onClickBtnOpen);
refs.btnClose.addEventListener('click', onClickBtnClose);
refs.backdrop.addEventListener('click', onClickBackdrop);