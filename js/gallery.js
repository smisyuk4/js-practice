// import * as basicLightbox from 'basiclightbox'



const refs = {
    gallery: document.querySelector('.gallery'),
}

let instance = {};

const onClickEsc = (event) => {
    if (event.code === 'Escape') {
        instance.close();
        window.removeEventListener('keyup', onClickEsc)
    }
}

const onClickImage = (event) => {
    event.preventDefault();

    if (event.target.nodeName !== 'IMG') {
        return;
    }

    const largeImage = event.target.getAttribute('data-link');

    instance = basicLightbox.create(`
        <img id="large-img" src="${largeImage}">
    `)
    
    instance.show()

    window.addEventListener('keyup', onClickEsc)
}

refs.gallery.addEventListener('click', onClickImage);