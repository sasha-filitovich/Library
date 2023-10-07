const html = document.querySelector('html');
const burger = document.querySelector('.burger');
const headerNav = document.querySelector('.header__nav');
const navLinks = headerNav.querySelectorAll('li');
const overlay = document.querySelector('.overlay');
const dropMenu = document.querySelector('.drop-menu');
//burger
burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  headerNav.classList.toggle('active');
  html.classList.toggle('lock');
  document.body.classList.toggle('lock');
  overlay.classList.toggle('active');
  dropMenu.classList.remove('active');
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
const inputImg = document.querySelectorAll('input[name="img"]');
arrowRight.addEventListener('click', () => {
  const inputCheckedNum = document.querySelector('input[name="img"]:checked').id[3];
  if (inputCheckedNum < 5) {
    inputImg[inputCheckedNum].checked = true;
  }
});
arrowLeft.addEventListener('click', () => {
  const inputCheckedNum = document.querySelector('input[name="img"]:checked').id[3];
  if (inputCheckedNum > 1) {
    inputImg[inputCheckedNum - 2].checked = true;
  }
});
// fade-in fade-out in favorites section
const labelSeason = document.querySelectorAll('.label__season');
const book = document.querySelectorAll('.book');
labelSeason.forEach((el) =>
  el.addEventListener('click', () => {
    const labelFor = el.htmlFor;
    const season = document.querySelectorAll(`.${labelFor}`);
    book.forEach((item) => item.classList.add('hidden'));
    setTimeout(function () {
      book.forEach((item) => {
        item.classList.remove('show');
        item.classList.remove('hidden');
        item.style.display = 'none';
      });
      season.forEach((item) => {
        item.classList.add('show');
        item.style.display = 'block';
      });
    }, 1000);
  })
);
// drop-menu in header
const profileIcon = document.querySelector('.profile-icon');
profileIcon.addEventListener('click', () => {
  burgerClose();
  dropMenu.classList.toggle('active');
});
document.body.addEventListener('click', (e) => {
  if (e.target !== dropMenu && e.target.parentNode !== dropMenu && e.target !== profileIcon) {
    dropMenu.classList.remove('active');
  }
});
