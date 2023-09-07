const toggler = document.querySelector('.mode_switch');
const backToTop = document.querySelector('.back_to_top');
const htmlEl = document.querySelector('html');

const toggleMode = () => {
  if (htmlEl.classList.contains('dark')) {
    htmlEl.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  } else {
    htmlEl.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  }
};

function addThemeToStorage() {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    htmlEl.classList.add(`${savedTheme}`);
  }
}

const hamburgerBtn = document.querySelector('.hamBtn');
const menu = document.querySelector('.menu');
const header = document.querySelector('header');

hamburgerBtn.addEventListener('click', (e) => {
  hamburgerBtn.classList.toggle('open');
  menu.classList.toggle('open');
});

window.onscroll = () => {
  header.classList.add('active');
  backToTop.classList.add('active');
};

window.addEventListener('scroll', function () {
  if (document.documentElement.scrollTop === 0) {
    header.classList.remove('active');
    backToTop.classList.remove('active');
  }
});

function init() {
  addThemeToStorage();
  toggler.addEventListener('click', toggleMode);
}

document.addEventListener('DOMContentLoaded', init);
