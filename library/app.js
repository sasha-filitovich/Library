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
const profileLetters = document.querySelector('.profile-letters');
const dropMenuLogged = document.querySelector('.drop-menu_logged');
profileIcon.addEventListener('click', () => {
  burgerClose();
  dropMenu.classList.toggle('active');
});
profileLetters.addEventListener('click', () => {
  burgerClose();
  dropMenuLogged.classList.toggle('active');
});
document.body.addEventListener('click', (e) => {
  if (e.target !== dropMenu && e.target !== profileIcon && e.target !== profileLetters) {
    dropMenu.classList.remove('active');
    dropMenuLogged.classList.remove('active');
  }
});
// open and close modal register and login, profile
const login = document.querySelectorAll('.login');
const register = document.querySelectorAll('.register');
const dropMenuProfile = document.querySelector('.drop-menu__profile');
const modalLogin = document.querySelector('.modal_login');
const modalRegister = document.querySelector('.modal_register');
const modalProfile = document.querySelector('.modal_profile');
const modalBuy = document.querySelector('.modal_buy');
const modalClose = document.querySelectorAll('.modal__close');
const modals = [modalLogin, modalRegister, modalProfile, modalBuy];
login.forEach((el) =>
  el.addEventListener('click', () => {
    modalLogin.classList.add('active');
    modalRegister.classList.remove('active');
  })
);
register.forEach((el) =>
  el.addEventListener('click', () => {
    modalLogin.classList.remove('active');
    modalRegister.classList.add('active');
  })
);
dropMenuProfile.addEventListener('click', () => {
  modalProfile.classList.add('active');
});
modalClose.forEach((el) =>
  el.addEventListener('click', () => {
    modalLogin.classList.remove('active');
    modalRegister.classList.remove('active');
    modalProfile.classList.remove('active');
    modalBuy.classList.remove('active');
  })
);
modals.forEach((el) =>
  el.addEventListener('click', (e) => {
    if (
      e.target === modalLogin ||
      e.target === modalRegister ||
      e.target === modalProfile ||
      e.target === modalBuy
    ) {
      modalLogin.classList.remove('active');
      modalRegister.classList.remove('active');
      modalProfile.classList.remove('active');
      modalBuy.classList.remove('active');
    }
  })
);
// registration
//const registerSubmit = modalRegister.querySelector('input[type="submit"]');
const registerForm = modalRegister.querySelector('form');
const registerName = document.querySelector('.register__name');
const registerSurname = document.querySelector('.register__surname');
const registerEmail = modalRegister.querySelector('input[type="email"]');
const registerPassword = modalRegister.querySelector('input[type="password"]');
const profileAvatar = document.querySelector('.profile__avatar');
const profileName = document.querySelector('.profile__name');
const arr16 = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
const cardNumberCss = document.querySelector('.card-number');
const libraryCardsName = document.querySelector('.cards_name');
const libraryCardsNumber = document.querySelector('.cards_number');
const libraryCardsBtn = document.querySelector('.cards__find').querySelector('button');
const libraryCardsLogin = document.querySelector('.cards__login');
let ifLogin = false;
registerForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const nameUpperCase = registerName.value[0].toUpperCase() + registerName.value.slice(1);
  const surnameUpperCase = registerSurname.value[0].toUpperCase() + registerSurname.value.slice(1);
  // create card number
  let cardNumber = '';
  for (let i = 0; i < 9; i++) {
    const randomNum = Math.floor(Math.random() * 15);
    cardNumber += arr16[randomNum];
  }
  localStorage.setItem('library', [
    nameUpperCase,
    surnameUpperCase,
    registerEmail.value,
    registerPassword.value,
    cardNumber,
  ]);
  modalRegister.classList.remove('active');
  profileIcon.style.display = 'none';
  profileLetters.style.display = 'block';
  profileLetters.textContent = nameUpperCase[0] + surnameUpperCase[0];
  profileLetters.setAttribute('title', `${nameUpperCase} ${surnameUpperCase}`);
  profileAvatar.textContent = nameUpperCase[0] + surnameUpperCase[0];
  profileName.textContent = nameUpperCase + ' ' + surnameUpperCase;
  cardNumberCss.textContent = cardNumber;
  libraryCardsName.value = nameUpperCase + ' ' + surnameUpperCase;
  libraryCardsNumber.value = cardNumber;
  libraryCardsBtn.style.display = 'none';
  libraryCardsLogin.style.display = 'grid';
  ifLogin = true;
});
// log in
const loginForm = modalLogin.querySelector('form');
const loginEmail = modalLogin.querySelector('input[type="text"]');
const loginPassword = modalLogin.querySelector('input[type="password"]');
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  if (
    localStorage.getItem('library').split(',')[2] === loginEmail.value &&
    localStorage.getItem('library').split(',')[3] === loginPassword.value
  ) {
    const name = localStorage.getItem('library').split(',')[0];
    const surname = localStorage.getItem('library').split(',')[1];
    modalLogin.classList.remove('active');
    profileIcon.style.display = 'none';
    profileLetters.style.display = 'block';
    profileLetters.textContent = name[0] + surname[0];
    profileLetters.setAttribute('title', `${name} ${surname}`);
    profileAvatar.textContent = name[0] + surname[0];
    profileName.textContent = name + ' ' + surname;
    cardNumberCss.textContent = localStorage.getItem('library').split(',')[4];
    libraryCardsName.value = name + ' ' + surname;
    libraryCardsNumber.value = localStorage.getItem('library').split(',')[4];
    libraryCardsBtn.style.display = 'none';
    libraryCardsLogin.style.display = 'grid';
    ifLogin = true;
  }
});
// logout
const logout = document.querySelector('.logout');
logout.addEventListener('click', () => {
  profileIcon.style.display = 'block';
  profileLetters.style.display = 'none';
  libraryCardsName.value = '';
  libraryCardsNumber.value = '';
  libraryCardsBtn.style.display = 'block';
  libraryCardsLogin.style.display = 'none';
  ifLogin = false;
});
// button Buy in favorites section
const buyBtns = document.querySelector('.favorites__book').querySelectorAll('button');
let cardPaid = localStorage.getItem('cardPaid') || false;
const profileBooks = document.querySelectorAll('.profile_books');
const booksList = document.querySelector('.profile__books-list');
let booksOwn = [];
buyBtns.forEach((el, ind) =>
  el.addEventListener('click', (e) => {
    if (ifLogin === false) {
      modalLogin.classList.add('active');
    } else if (cardPaid === false) {
      modalBuy.classList.add('active');
    } else {
      e.target.textContent = 'Own';
      e.target.setAttribute('disabled', '');
      booksOwn.push(ind);
      const bookTitle = e.target.parentNode.querySelector('.book__title').textContent;
      const li = document.createElement('li');
      li.innerHTML = bookTitle.replace('By', ',');
      booksList.append(li);
      profileBooks.forEach((item) => (item.textContent = booksOwn.length));
      localStorage.setItem('books', booksOwn);
    }
  })
);
// modal_buy
const modalBuyForm = modalBuy.querySelector('form');
modalBuyForm.addEventListener('submit', (e) => {
  e.preventDefault();
  localStorage.setItem('cardPaid', true);
  modalBuy.classList.remove('active');
});
