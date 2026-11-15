/* Скрипт использует фиксированные классы из задания. */
const likeHeartArray = document.querySelectorAll('.like-icon');
const likeButtonArray = document.querySelectorAll('.card__like-button');
const iconButtonArray = document.querySelectorAll('.card__icon-button');

iconButtonArray.forEach((iconButton, index) => {
  iconButton.addEventListener('click', () => toggleIsLiked(likeHeartArray[index], likeButtonArray[index]));
});

likeButtonArray.forEach((button, index) => {
  button.addEventListener('click', () => toggleIsLiked(likeHeartArray[index], button));
});

function toggleIsLiked(heart, button) {
  heart.classList.toggle('is-liked');
  const isLiked = heart.classList.contains('is-liked');
  button.querySelector('.button__text').textContent = isLiked ? 'Unlike' : 'Like';
  const iconButton = button.closest('.card').querySelector('.card__icon-button');
  iconButton.setAttribute('aria-pressed', String(isLiked));
}
