

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
    
   