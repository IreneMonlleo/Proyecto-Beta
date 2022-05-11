//recoje los elementos del Json segun la categoria//
function identifyCategory(category, products) {
    let elements = [];
    if (category == "all") {
        elements = getAllProducts(products);
    } else {
        elements = getProductByCategory(products, category);
    }
    paintElements(elements);
}

//pintamos en el html las imagenes//
function paintElements(elements) {
    let father = document.querySelector('#father--grid');
    father.innerHTML = ``;
    elements.forEach(function (element) {
        console.log(element, element.href);
        father.innerHTML = father.innerHTML + `
        <a class="product-img" href="${element.href}">
            <img class="table__img" width="100%" src="${element.image}" alt="${element.alt}">
        </a>`
    })
}

//dar funcionalidad a los botones//
function initialFunction(products) {

    document.querySelectorAll('.filter').forEach(function (button) {
        button.addEventListener('click', (ev) => {
            document.querySelector('.active').classList.remove('active');
            ev.target.classList.add('active');
            showCategorie(products, ev.target);
        })
    })
}

//identifica la classe del boton//
function showCategorie(products, button) {
    let category = button.classList[1];
    identifyCategory(category, products);
}

// iniciar el navegador//
function init() {
    //función de la promesa y sacar el Json//
    getJSON(function(products) {
    
        //por defecto al iniciar muestra todo//
        identifyCategory("all", products);
        initialFunction(products);
    });
}
const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  });

window.onload = init();

