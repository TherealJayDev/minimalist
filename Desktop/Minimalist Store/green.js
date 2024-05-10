const green = document.querySelector('.green');
const zoomBtn = document.querySelector('.zoom');

zoomBtn.addEventListener('click', function () {
  green.classList.toggle('large');
    document.querySelector('header').style.display = 'none'
  if (green.classList.contains('large')) {
      zoomBtn.textContent = 'x';
    zoomBtn.style.zIndex = 100;
  } else {
      zoomBtn.textContent = '+'
      zoomBtn.style.marginTop = 0;
    document.querySelector('header').style.display = 'flex';
  }
});
