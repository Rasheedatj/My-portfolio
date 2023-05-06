const hello = document.querySelector('.mode_switch');
hello.addEventListener('click', () => {
  document.querySelector('html').classList.toggle('dark');

  if (document.querySelector('html').classList.contains('dark')) {
    hello.innerHTML = `<span class="material-symbols-outlined">
    light_mode
    </span>`;
  } else {
    hello.innerHTML = `<span class="material-symbols-outlined">
  dark_mode
  </span>`;
    console.log('light');
  }
});

const hamburgerBtn = document.querySelector('.hamBtn');
const menu = document.querySelector('.menu');
const header = document.querySelector('header');

hamburgerBtn.addEventListener('click', (e) => {
  hamburgerBtn.classList.toggle('open');
  menu.classList.toggle('open');
});

window.onscroll = () => {
  header.classList.add('active');
};

window.addEventListener('scroll', function () {
  if (document.documentElement.scrollTop === 0) {
    header.classList.remove('active');
  }
});
