const html = document.querySelector('html');
const burger = document.querySelector('.burger');
const headerNav = document.querySelector('.header__nav');
const navLinks = headerNav.querySelectorAll('li');
const overlay = document.querySelector('.overlay');
//burger
burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  headerNav.classList.toggle('active');
  html.classList.toggle('lock');
  document.body.classList.toggle('lock');
  overlay.classList.toggle('active');
});
function burgerClose() {
  headerNav.classList.remove('active');
  burger.classList.remove('active');
  html.classList.remove('lock');
  document.body.classList.remove('lock');
  overlay.classList.remove('active');
}
for (let navLink of navLinks) {
  navLink.addEventListener('click', burgerClose);
}
overlay.addEventListener('click', burgerClose);
//slider in about section
const arrowLeft = document.querySelector('.arrow-left');
const arrowRight = document.querySelector('.arrow-right');
