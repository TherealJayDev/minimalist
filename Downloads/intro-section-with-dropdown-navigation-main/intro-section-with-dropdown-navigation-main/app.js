// // need to set the links on the side-bar
// // when i toggle the menu, the background goes white

const downBtn = document.querySelector('#down-btn');
const upBtn = document.querySelector('#up-btn');
const downsBtn = document.querySelector('#downs-btn');
const upsBtn = document.querySelector('#ups-btn');
const subMenu = document.querySelector('.sub-menu');
const subMenus = document.querySelector('.sub-menus');
const openBtn = document.querySelector('.open-btn');
const closeBtn = document.querySelector('.close-btn');
const sideBar = document.querySelector('.side-bar');

downBtn.addEventListener('click', function () {
    subMenu.style.display = 'flex';
    subMenu.style.flexDirection = 'column';
  upBtn.style.display = 'inline';
    downBtn.style.display = 'none';
});
upBtn.addEventListener('click', function () {
    subMenu.style.display = 'none';
  upBtn.style.display = 'none';
    downBtn.style.display = 'inline';
});

downsBtn.addEventListener('click', function () {
    subMenus.style.display = 'flex';
    subMenus.style.flexDirection = 'column';
  upsBtn.style.display = 'inline';
    downsBtn.style.display = 'none';
});
upsBtn.addEventListener('click', function () {
    subMenus.style.display = 'none';
  upsBtn.style.display = 'none';
    downsBtn.style.display = 'inline';
});

openBtn.addEventListener('click', function () {
  sideBar.style.display = 'block';
  document.body.style.backgroundColor = 'grey';
});

closeBtn.addEventListener('click', function () {
  sideBar.style.display = 'none';
    document.body.style.backgroundColor = 'whitesmoke';
});
// console.log(sideBar);
