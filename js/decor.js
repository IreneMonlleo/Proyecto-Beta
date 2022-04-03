


const params = new URLSearchParams(window.location.search);
        const section = params.get('section');
        const productId = params.get('product');

        getJSON(function(products) {
          const category = products[params.get('section')];
          const product = category.elements.find(function(product) { return product.id === productId; });
          console.log(product);
          document.querySelector('.products--name').textContent = product.name;
          document.querySelector('.products--description').textContent = product.description;
          document.querySelector('.products--image').src = product.image;
          document.querySelector('.products--price').textContent = product.price;
        })



        function paintElements(elements) {
          let container = document.querySelector('.container__slide');
          elements.forEach(function (element) {
             // console.log(element.image);
              container.innerHTML = container.innerHTML + `
                <a class="swiper-slide slider__about" style="width: 200px; margin-right: 12px;" href="${element.href}">
                  <img class="about__slider__img" src="${element.image}" alt="${element.alt}">
                </a>`
          })
        }
        
        
          getJSON(function(products) {
            const list = getProductByCategory(products, section);
            paintElements(list);
            initSwiper();
          })
        
        const initSwiper = function() {
          //ABOUT US//
          var swiper = new Swiper(".swiper", {
            slidesPerView: 3,
            spaceBetween: 15,
            slidesPerGroup: 4,
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