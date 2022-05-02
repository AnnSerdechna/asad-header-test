/* eslint-disable no-param-reassign */
const searchTopBtn = document.querySelector('.navTop__searchBtn');
const searchFormBtn = document.querySelector('.searchForm__button');
const searchFormInput = document.querySelector('.searchForm__input');
const searchForm = document.querySelector('.searchForm');
const navLinks = document.querySelectorAll('.nav__link');
const dropdowns = document.querySelectorAll('.dropdown');

searchFormInput.addEventListener('change', (event) => {
  searchFormInput.value = event.target.value;
});

searchFormBtn.addEventListener('click', (event) => {
  event.preventDefault();

  searchForm.style.display = 'none';
});

searchForm.addEventListener('submit', (event) => {
  event.preventDefault();

  searchForm.style.display = 'none';
});

searchTopBtn.addEventListener('click', (event) => {
  if (searchForm.style.display === 'flex') {
    searchForm.style.display = 'none';
  } else {
    searchForm.style.display = 'flex';

    event.stopPropagation();
  }
});

function liftDropdown() {
  dropdowns.forEach((dropdown) => {
    dropdown.style.display = 'none';
  });
}

navLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    const dropMenu = event.target.nextElementSibling;

    if (dropMenu.style.display === 'block') {
      dropMenu.style.display = 'none';
    } else {
      liftDropdown();

      dropMenu.style.display = 'block';

      event.stopPropagation();
    }
  });
});

document.body.addEventListener('click', (event) => {
  if (event.target !== searchFormInput) {
    searchForm.style.display = 'none';

    searchFormInput.value = '';
  }

  liftDropdown();
});
