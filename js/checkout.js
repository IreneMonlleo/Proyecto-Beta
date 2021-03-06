

const params = new URLSearchParams(window.location.search);
        const section = params.get('section');
        const productId = params.get('product');

        getJSON(function(products) {
          const category = products[params.get('section')];
          const product = category.elements.find(function(product) { return product.id === productId; });
          console.log(product);
          document.querySelector('.checkout--name').textContent = product.name;
          document.querySelector('.checkout--img').src = product.image;
          document.querySelector('.checkout--price').textContent = product.price;
          document.querySelector('.checkout--totalprice').textContent = product.price;
        })

        function initialFunction(check) {

          document.querySelectorAll('.open-modal').forEach(function (button) {
              button.addEventListener('click', (ev) => {
                  document.querySelector('.active').classList.remove('active');
                  ev.target.classList.add('active');
                  showCategorie(check, ev.target);
              })
          })
         
      }
      
        function selectOnlyThis(id) {
          for (var i = 1;i <= 3; i++)
          {
              document.getElementById("Check" + i).checked = false;
          }
          document.getElementById(id).checked = true;
        }


      