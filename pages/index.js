let readMoreBtn = document.querySelector(".read-more");
let readMoreIcon = readMoreBtn.querySelector(".read-more__icon");
let readMoreText = readMoreBtn.querySelector(".read-more__text");

let pagination = document.querySelector(".swiper-pagination");
let brandsContainer = document.querySelector(".brands-container");
let brandsContainerList = document.querySelector(".brands-container__list");

// Выбираем ВСЕ элементы в массив, чтобы пройтись по нему методом forEach
let brandsContainerElements = document.querySelectorAll(".brands-container__element"); 

// Измеряем размер экрана
const screenWidth = window.screen.width

const checkScreen = (screen) => {
  if (screen < 520) { // Условия для мобильной версии
    pagination.style = "visibility: visible";
    readMoreBtn.style = "display: none";
    brandsContainer.classList.add("swiper-container");
    brandsContainerList.classList.add("swiper-wrapper");
    brandsContainerElements.forEach((e) => e.classList.add("swiper-slide")); 
    const swiper = new Swiper('.swiper-container', {
      slidesPerView: 1,
      spaceBetween: 16,
      width: 240,
      pagination: {
        el: '.swiper-pagination',
      },
    });
  }
}

checkScreen(screenWidth)

const readMore = () => {
  if (readMoreText.textContent === 'Показать все') {
    brandsContainerList.style = "height: 100%"
    readMoreIcon.style = 'transform: rotate(180deg)'
    readMoreText.textContent = 'Скрыть';
  } else {
    brandsContainerList.style = "height: 160px"
    readMoreIcon.style = 'transform: rotate(0)'
    readMoreText.textContent = 'Показать все';
  }
}


readMoreBtn.addEventListener('click', readMore)


// const swiper = new Swiper('.swiper-container', {
//   slidesPerView: 1,
//   spaceBetween: 16,
//   width: 240,

//   pagination: {
//     el: '.swiper-pagination',
//   },

// });