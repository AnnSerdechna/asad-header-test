/* eslint-disable func-names */
/* eslint-disable no-param-reassign */
const navLinks = document.querySelectorAll('.nav__link');
const dropdowns = document.querySelectorAll('.dropdown');

const close = () => {
  dropdowns.forEach((dropdown) => {
    dropdown.style.display = 'none';
  });
};

navLinks.forEach((navLink) => {
  navLink.addEventListener('click', function (e) {
    const dropdownMenu = this.nextElementSibling;
    let { display } = dropdownMenu.style;

    if (display === 'block') {
      display = 'none';
    } else {
      close();
      display = 'block';
      e.stopPropagation();
    }
  });
});

window.addEventListener('click', () => {
  close();
});
