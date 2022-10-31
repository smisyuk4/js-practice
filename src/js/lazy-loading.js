// https://afarkas.github.io/lazysizes/index.html
// https://github.com/aFarkas/lazysizes/blob/gh-pages/README.md
// npm install lazysizes --save

// once: Boolean указывает, что обработчик должен быть вызван не более одного раза 
// после добавления. Если true, обработчик автоматически удаляется при вызове.

import 'lazysizes';
// import a plugin
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const refs = {
    images: document.querySelectorAll('.feed-img'),
}

refs.images.forEach(image => {
    image.addEventListener('load', onLoadImage, {once: true})
})

function onLoadImage(event) {
    event.target.classList.add('appear')
}