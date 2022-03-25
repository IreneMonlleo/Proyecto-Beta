fetch('/resources/products.json')
  .then(function(resources) { return resources.json() })
  .then(function(products) {
    console.log(products);   
   })

   products.forEach(function(product){
       document.querySelector('.father-grid').innerHTML += `<img>${products.img}</img>`
   })

   document.querySelectorAll('.filter').forEach(function(button) {
       button.addEventListener('click', function() {
           alert("hola");

       })
   })