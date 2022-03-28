
//Home//
const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },
});


//ABOUT US//
var swiperAbout = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  slidesPerGroup: 3,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


function paintElements(elements) {
  let container = document.querySelector('.container__slider');
  elements.forEach(function (element) {
      console.log(element.image);
      container.innerHTML = container.innerHTML + `
      <div class="about-slider">
          <img class="product-img" src="${element.image}" alt="${element.alt}">
      </div>`
  })
}
