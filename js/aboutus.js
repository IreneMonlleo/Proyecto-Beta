function paintElements(elements) {
  let container = document.querySelector('.container__slide');
  elements.forEach(function (element) {
      console.log(element.image);
      container.innerHTML = container.innerHTML + `
      <div class="swiper-slide">
          <img src="${element.image}" alt="${element.alt}">
      </div>`
  })
}

getJSON(function(products) {
  const list = getAllProducts(products);
  paintElements(list);
  initSwiper();
})

const initSwiper = function() {
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
}