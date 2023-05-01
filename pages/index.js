const likeButton = document.querySelector('.like-button');

const likeButtonHandler = function () {
  likeButton.classList.toggle('like-button_active');
}

likeButton.addEventListener('click', likeButtonHandler);

const likeButtonSmall = document.querySelector('.product-card__like-button');

const likeButtonSmallHandler = function () {
  likeButtonSmall.classList.toggle('product-card__like-button_active');
}

likeButtonSmall.addEventListener('click', likeButtonSmallHandler);