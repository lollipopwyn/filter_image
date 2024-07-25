// Create button element
const btnChars = ['all', 'bag', 'shoe', 'watch', 'camera', 'headphone'];
const btnsWrapper = document.querySelector('.filter-btns');

btnChars.map(function (btnChar) {
  const modifiedChar = btnChar.charAt(0).toUpperCase() + btnChar.slice(1);
  // charAt(): 파라미터 인덱스에 해당하는 문자 선택
  // toUpperCase(): 대문자로 변환
  // toLowerCase(): 소문자로 변환
  // slice(): 문자열을 추출 - 파라미터 인덱스부터 추출

  const btnElement = `<button class="filter-btn" data-filter="${btnChar}">${modifiedChar}</button>`;

  btnsWrapper.insertAdjacentHTML('beforeend', btnElement);
});

// first button add active class
const btns = document.querySelectorAll('.filter-btn');
btns[0].classList.add('active');

// Create images element
const images = [
  'bag-1.jpg',
  'camera-1.jpg',
  'camera-2.jpg',
  'headphone-1.jpg',
  'headphone-2.jpg',
  'shoe-1.jpg',
  'shoe-2.jpg',
  'watch-1.jpg',
];

// btnElement 실험용
// headerContents.map((btns) => {
//   const headerWrapper = document.querySelector('.fliter-btn');
//   const headerList = <li>${btns}</li>;

//   headerWrapper.insertAdjacentHTML('beforeend', headList);
// });

const imagesWrapper = document.querySelector('.filter-images');

images.map(function (image) {
  const imageElement = ` <div class="filter-image" data-filter="${
    image.split('-')[0]
  }">
      <span>
        <img src="images/${image}" alt="" />
      </span>
    </div>`;
  imagesWrapper.insertAdjacentHTML('beforeend', imageElement);
});

const imageElements = document.querySelectorAll('.filter-image'); //btns가 아니라 이미지 선언하는 것
console.log(imageElements);

// filter imagesfunction activateFilter{

//fiter images
function activateFilter() {
  btns.forEach((btn) => {
    btn.classList.remove('active');
  });

  this.classList.add('active');

  const selectedBtn = this.getAttribute('data-filter');

  // map, filter, reduce 함수는 DOM 요소에 사용할 수 없음, 그러므로 Array.from()을 사용하여 배열로 변환한다.
  Array.from(imageElements).filter((imageElement) => {
    imageElement.classList.add('hide');
    setTimeout(() => {
      if (
        imageElement.getAttribute('data-filter') === selectedBtn ||
        selectedBtn === 'all'
      ) {
        imageElement.classList.remove('hide');
        imageElement.classList.add('show');
      } else {
        imageElement.classList.remove('show');
        imageElement.classList.add('hide');
      }
    });
  }, 100); //시간 지연 함수(promise):첫번째 파라미터 = callback function, 두번째 파라미터 = 시간(밀리초)
}

btns.forEach(function (btn) {
  btn.addEventListener('click', activateFilter);
});
