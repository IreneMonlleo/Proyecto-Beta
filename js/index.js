//llama al json//
function getJSON() {

    fetch('/resources/products.json')
        .then(function (resources) {
            return resources.json();
        }).then(function (products) {
            //por defecto al iniciar muestra todo//
            identifyCategory("all", products);
            initialFunction(products);
        })
}

//recoje los elementos del Json segun la categoria//
function identifyCategory(category, products) {

    let elements = [];
    if (category == "all") {
        products.furniture.elements.forEach(function (product) {
            elements.push(product);
        });
        products.illumination.elements.forEach(function (product) {
            elements.push(product);
        });
        products.decor.elements.forEach(function (product) {
            elements.push(product);
        });
    } else {
        products[category].elements.forEach(function (product) {
            elements.push(product);
        });
    }
    paintElements(elements);
    console.log(elements);
}
//pintamos en el html las imagenes//
function paintElements(elements) {
    let father = document.querySelector('#father--grid');
    father.innerHTML = ``;
    elements.forEach(function (element) {
        console.log(element.image);
        father.innerHTML = father.innerHTML + `
        <img src="${element.image}" alt="">`
    })
}

//dar funcionalidad a los botones//
function initialFunction(products) {

    document.querySelectorAll('.filter').forEach(function (button) {
        button.addEventListener('click', (ev) => {
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
    getJSON();
}

window.onload = init();