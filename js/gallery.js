const basicLightbox = require('basiclightbox')

import * as basicLightbox from 'basiclightbox'

const refs = {
    gallery: document.querySelector('.gallery'),
}

const onClickImage = (event) => {
    event.preventDefault();

    if (event.target.nodeName !== 'IMG') {
        return;
    }

    const instance = basicLightbox.create(`
        <img src="assets/images/image.png" width="800" height="600">
    `)
    instance.show()
}

refs.gallery.addEventListener('click', onClickImage);