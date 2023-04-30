const likeButton = document.querySelector('.like-button');

const likeButtonHandler = function () {
  likeButton.classList.toggle('like-button_active');
}

likeButton.addEventListener('click', likeButtonHandler);