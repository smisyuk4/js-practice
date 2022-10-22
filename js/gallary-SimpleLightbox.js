import { gallery } from './gallery-obj.js';
// import SimpleLightbox from 'simplelightbox';
// import 'simplelightbox/dist/simple-lightbox.min.css';

// console.log(gallery)

const refs = {
    gallery: document.querySelector('.gallery')
}

const markup = gallery.map(item => {   
    return `<a class="gallery__item" href="${item.link}">
                <img class="gallery__image" src="${item.link}" alt="${item.alt}" title="${item.alt}"/>
            </a>`;
}).join('');

refs.gallery.insertAdjacentHTML('beforeend', markup)

const lightbox = new SimpleLightbox('.gallery a', { captionDelay: 250});

const onClickImage = (event) => {
    event.preventDefault();

    if (event.target.nodeName !== 'IMG') {
        return;
    }   
}

refs.gallery.addEventListener('click', onClickImage)


