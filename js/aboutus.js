function paintElements(elements) {
  let container = document.querySelector('.container__slide');
  elements.forEach(function (element) {
      console.log(element.image);
      container.innerHTML = container.innerHTML + `
      <a class="swiper-slide slider__about" href="${element.href}">
          <img class="about__slider__img" src="${element.image}" alt="${element.alt}">
      </a>`
  })
}

getJSON(function(products) {
  const list = getAllProducts(products);
  paintElements(list);
  initSwiper();
})

const initSwiper = function() {
  //ABOUT US//
  var swiper = new Swiper(".swiper", {
    slidesPerView: 3,
    spaceBetween: 15,
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
    breakpoints: {
    280: {
        slidesPerView: 1,
        spaceBetween: 15,
    },
    500: {
        slidesPerView: 2,
        spaceBetween: 15,
    },
    1081: {
        slidesPerView: 3,
        spaceBetween: 15,
    },
    },
  })
}