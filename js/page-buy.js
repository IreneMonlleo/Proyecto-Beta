function initialFunction(products) {

    document.querySelectorAll('#data').forEach(function (button) {
        button.addEventListener('click', (ev) => {
            showCategorie(products, ev.target);
        })
    })


function paintElements(elements) {
    let father = document.querySelector('data');
    father.innerHTML = ``;
    elements.forEach(function (element) {
        console.log(element, element.href);
        father.innerHTML = father.innerHTML + `
        <img class="page-buy__product" width="100%" src="${element.image}" alt="${element.alt}">
        <div class="page-buy__detail>
            <h2 class="page-buy">${element.name}</h2>
            <p class="page-buy">${element.price}</p>
        </div>    
        <form class="discounts">
            <label class="discounts__text" for="text"></label>
            <input class="discounts__text" type="text" id="text" placeholder="discount">
            <input class="discounts__button button--main" type="submit" value="Aplicar">
        </form>
        <hr>
        <p class=" total">Total</p>
        <p class="page-buy">${element.price}</p>
        `
    })