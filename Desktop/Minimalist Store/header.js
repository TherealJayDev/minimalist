// buttons
const openBtn = document.querySelector('#open-btn');
const closeBtn = document.querySelector('#close-btn');
const searchBtn = document.querySelector('#search-btn');
const endBtn = document.querySelector('#end-btn');
const navMenu = document.querySelector('.nav-menu');
// const subMenu = document.querySelectorAll('.sub-menu');
const dropDown = document.querySelector('#drop-down');
const dropsDown = document.querySelector('#drops-down');
const dropssDown = document.querySelector('#dropss-down');
const dropsssDown = document.querySelector('#dropsss-down');
const dropUp = document.querySelector('#drop-up');
const dropsUp = document.querySelector('#drops-up');
const dropssUp = document.querySelector('#dropss-up');
const dropsssUp = document.querySelector('#dropsss-up');

// event handlers
// sidebar open and close
openBtn.addEventListener('click', function () {
  navMenu.style.left = '0';
  // document.body.style.opacity = 0.3
  navMenu.style.opacity = 1;
});

closeBtn.addEventListener('click', function () {
  navMenu.style.left = '-100%';
  document.querySelector('.shop.sub-menu').style.maxHeight = 0;
  document.querySelector('.journal.sub-menu').style.maxHeight = 0;
  document.querySelector('.collections.sub-menu').style.maxHeight = 0;
  document.querySelector('.about.sub-menu').style.maxHeight = 0;
  document.body.style.opacity = 1;
});

// search bar
searchBtn.addEventListener('click', function () {
  document.querySelector('.search-bar').style.top = '4.7rem';
});

endBtn.addEventListener('click', function () {
  document.querySelector('.search-bar').style.top = '-100%';
});

// sub-menu
// open sub menu

dropDown.addEventListener('click', function (e) {
  document.querySelector('.shop.sub-menu').style.maxHeight = '300px';
  dropDown.style.display = 'none';
  dropUp.style.display = 'block';
  navMenu.style.overflow = 'scroll';
});
dropsDown.addEventListener('click', function () {
  document.querySelector('.journal.sub-menu').style.maxHeight = '300px';
  dropsDown.style.display = 'none';
  dropsUp.style.display = 'block';
  navMenu.style.overflow = 'scroll';
});
dropssDown.addEventListener('click', function () {
  document.querySelector('.collections.sub-menu').style.maxHeight = '300px';
  dropssDown.style.display = 'none';
  dropssUp.style.display = 'block';
  navMenu.style.overflow = 'scroll';
});
dropsssDown.addEventListener('click', function () {
  document.querySelector('.about.sub-menu').style.maxHeight = '300px';
  dropsssDown.style.display = 'none';
  dropsssUp.style.display = 'block';
  navMenu.style.overflow = 'scroll';
});

// close drop menu
dropUp.addEventListener('click', function (e) {
  document.querySelector('.shop.sub-menu').style.maxHeight = 0;
  dropDown.style.display = 'block';
  dropUp.style.display = 'none';
});
dropsUp.addEventListener('click', function () {
  document.querySelector('.journal.sub-menu').style.maxHeight = 0;
  dropsDown.style.display = 'block';
  dropsUp.style.display = 'none';
});
dropssUp.addEventListener('click', function () {
  document.querySelector('.collections.sub-menu').style.maxHeight = 0;
  dropssDown.style.display = 'block';
  dropssUp.style.display = 'none';
});
dropsssUp.addEventListener('click', function () {
  document.querySelector('.about.sub-menu').style.maxHeight = 0;
  dropsssDown.style.display = 'block';
  dropsssUp.style.display = 'none';
});

// timer for the slides
let counter = 1;
setInterval(function () {
  document.querySelector('#radio' + counter).checked = true;
  counter++;
  if (counter > 4) {
    counter = 1;
  }
}, 3000);
