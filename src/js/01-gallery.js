// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line

console.log(SimpleLightbox);
// console.log(galleSimpleLightboxryItems);

function createImageGallery(galleryItems) {

    return galleryItems.map(({ preview, original, description }) => {

        return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
    }).join('')

}

const galleryElList = document.querySelector('.gallery');

galleryElList.insertAdjacentHTML('afterbegin', createImageGallery(galleryItems));

let gallery = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250 });