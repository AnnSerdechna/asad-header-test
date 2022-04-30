/* eslint-disable no-param-reassign */
/* eslint-disable func-names */

const navLinks = document.querySelectorAll('.nav__link');
const dropdowns = document.querySelectorAll('.dropdown');

function close() {
  dropdowns.forEach((dropdown) => {
    dropdown.style.display = 'none';
  });
}

navLinks.forEach((link) => {
  link.addEventListener('click', function (e) {
    const dropMenu = this.nextElementSibling;

    if (dropMenu.style.display === 'block') {
      dropMenu.style.display = 'none';
    } else {
      close();
      dropMenu.style.display = 'block';
      e.stopPropagation();
    }
  });
});

window.addEventListener('click', () => {
  close();
});
