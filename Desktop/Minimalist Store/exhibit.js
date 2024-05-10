const leftBtn = document.querySelector('#left-btn')
const rightBtn = document.querySelector('#right-btn')
const left1Btn = document.querySelector('#left1-btn')
const right1Btn = document.querySelector('#right1-btn')
const left2Btn = document.querySelector('#left2-btn')
const right2Btn = document.querySelector('#right2-btn')
const left3Btn = document.querySelector('#left3-btn')
const right3Btn = document.querySelector('#right3-btn')
const left4Btn = document.querySelector('#left4-btn')
const right4Btn = document.querySelector('#right4-btn')
const firstImg = document.querySelector('.first-img')
const secondImg = document.querySelector('.second-img')
const thirdImg = document.querySelector('.third-img')
const fourthImg = document.querySelector('.fourth-img')
const fifthImg = document.querySelector('.fifth-img')
const containerExhibit = document.querySelector('.exhibits')

const dress = [
  {
    id: 1,
    title: 'Green Gown',
    category: 'left',
    price: 155.99,
    img: 'dresses/dress1.jpg',
  },
  {
    id: 2,
    title: 'Dyed Gown',
    category: 'left',
    price: 134.99,
    img: 'dresses/dress2.jpg',
  },
  {
    id: 3,
    title: 'White Off Shoulder Gown',
    category: 'left',
    price: 167.99,
    img: 'dresses/dress3.jpg',
  },
  {
    id: 4,
    title: 'Buttoned Gown',
    category: 'left',
    price: 120.99,
    img: 'dresses/dress4.jpg',
  },
  {
    id: 5,
    title: 'Full Length Gown',
    category: 'left',
    price: 122.99,
    img: 'dresses/dress5.jpg',
  },
];
const bags = [
  1,2,3,4,5,
];

function getRandomBag() {
    return Math.floor(Math.random() * bags.length +1)
}
let currentImg = 1;




// const dislayImg = function (bags) {
//     bags.forEach(function (img, i) {
//         const type = img > 5 ? 'bag' : 'dress'
//         const html = `<div class="first-exhibit">
//                 <a href="#">
//                     <img src="dresses/${type}${i + 1}.jpg" loading="lazy" class="first-img">
//                 </a>
//                 <div class="ex-btn">
//                     <i class="fa-solid fa-chevron-left" id="left-btn"></i>
//                     <i class="fa-solid fa-chevron-right" id="right-btn"></i>
//                 </div>
//                 <div class="details">
//                 <p>Body Hug Gown</p>
//                 <span>$135.00</span>
//                 </div>
//             </div>`;
//         containerExhibit.insertAdjacentHTML('afterbegin', html)
//     });
// };
// dislayImg(bags)




leftBtn.forEach((btn) => {
    btn.addEventListener('click', function () {
      currentImg--;
      if (currentImg < 1) {
        currentImg = 1;
      }
      firstImg.src = `dresses/dress1.jpg`;
    //   secondImg.src = `dresses/dress2.jpg`;
    //   thirdImg.src = `dresses/dress3.jpg`;
    //   fourthImg.src = `dresses/dress4.jpg`;
    //   fifthImg.src = `dresses/dress5.jpg`;
        })
  });

rightBtn.forEach((btn) => {
    btn.addEventListener('click', function () {
        const randomBag = getRandomBag();
        
        firstImg.src = `bags/bag${randomBag}.jpg`;
        // secondImg.src = `bags/bag${randomBag}.jpg`;
        // thirdImg.src = `bags/bag${randomBag}.jpg`;
        // fourthImg.src = `bags/bag${randomBag}.jpg`;
        // fifthImg.src = `bags/bag${randomBag}.jpg`;
    })
})

left1Btn.forEach((btn) => {
    btn.addEventListener('click', function () {
      currentImg--;
      if (currentImg < 1) {
        currentImg = 1;
      }
      secondImg.src = `dresses/dress1.jpg`;
    //   secondImg.src = `dresses/dress2.jpg`;
    //   thirdImg.src = `dresses/dress3.jpg`;
    //   fourthImg.src = `dresses/dress4.jpg`;
    //   fifthImg.src = `dresses/dress5.jpg`;
        })
  });

right1Btn.forEach((btn) => {
    btn.addEventListener('click', function () {
        const randomBag = getRandomBag();
        
        secondImg.src = `bags/bag${randomBag}.jpg`;
        // secondImg.src = `bags/bag${randomBag}.jpg`;
        // thirdImg.src = `bags/bag${randomBag}.jpg`;
        // fourthImg.src = `bags/bag${randomBag}.jpg`;
        // fifthImg.src = `bags/bag${randomBag}.jpg`;
    })
})

left2Btn.forEach((btn) => {
    btn.addEventListener('click', function () {
      currentImg--;
      if (currentImg < 1) {
        currentImg = 1;
      }
      thirdImg.src = `dresses/dress1.jpg`;
    //   secondImg.src = `dresses/dress2.jpg`;
    //   thirdImg.src = `dresses/dress3.jpg`;
    //   fourthImg.src = `dresses/dress4.jpg`;
    //   fifthImg.src = `dresses/dress5.jpg`;
        })
  });

right2Btn.forEach((btn) => {
    btn.addEventListener('click', function () {
        const randomBag = getRandomBag();
        
        thirdImg.src = `bags/bag${randomBag}.jpg`;
        // secondImg.src = `bags/bag${randomBag}.jpg`;
        // thirdImg.src = `bags/bag${randomBag}.jpg`;
        // fourthImg.src = `bags/bag${randomBag}.jpg`;
        // fifthImg.src = `bags/bag${randomBag}.jpg`;
    })
})

left3Btn.forEach((btn) => {
    btn.addEventListener('click', function () {
      currentImg--;
      if (currentImg < 1) {
        currentImg = 1;
      }
      fourthImg.src = `dresses/dress1.jpg`;
    //   secondImg.src = `dresses/dress2.jpg`;
    //   thirdImg.src = `dresses/dress3.jpg`;
    //   fourthImg.src = `dresses/dress4.jpg`;
    //   fifthImg.src = `dresses/dress5.jpg`;
        })
  });

right3Btn.forEach((btn) => {
    btn.addEventListener('click', function () {
        const randomBag = getRandomBag();
        
        fourthImg.src = `bags/bag${randomBag}.jpg`;
        // secondImg.src = `bags/bag${randomBag}.jpg`;
        // thirdImg.src = `bags/bag${randomBag}.jpg`;
        // fourthImg.src = `bags/bag${randomBag}.jpg`;
        // fifthImg.src = `bags/bag${randomBag}.jpg`;
    })
})

left4Btn.forEach((btn) => {
    btn.addEventListener('click', function () {
      currentImg--;
      if (currentImg < 1) {
        currentImg = 1;
      }
      fifthImg.src = `dresses/dress1.jpg`;
    //   secondImg.src = `dresses/dress2.jpg`;
    //   thirdImg.src = `dresses/dress3.jpg`;
    //   fourthImg.src = `dresses/dress4.jpg`;
    //   fifthImg.src = `dresses/dress5.jpg`;
        })
  });

right4Btn.forEach((btn) => {
    btn.addEventListener('click', function () {
        const randomBag = getRandomBag();
        
        fifthImg.src = `bags/bag${randomBag}.jpg`;
        // secondImg.src = `bags/bag${randomBag}.jpg`;
        // thirdImg.src = `bags/bag${randomBag}.jpg`;
        // fourthImg.src = `bags/bag${randomBag}.jpg`;
        // fifthImg.src = `bags/bag${randomBag}.jpg`;
    })
})



// firstImg.forEach((first) => {
//   first.src = `dresses/dress${currentImg}.jpg`;
// });

// firstImg.forEach((first) => {
//   first.src = `bags/bag${randomBag}.jpg`;
// });