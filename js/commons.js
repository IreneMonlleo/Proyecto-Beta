//llama al json//
function getJSON(callback) {
  fetch('resources/products.json')
      .then(function (resources) {
          return resources.json();
      }).then(function (products) {
        callback(products)
      })
}

function getAllProducts(products) {
  const elements = [];
  products.furniture.elements.forEach(function (product) {
    elements.push(product);
  });
  products.illumination.elements.forEach(function (product) {
      elements.push(product);
  });
  products.decor.elements.forEach(function (product) {
      elements.push(product);
  });

  return elements;
}

function getProductByCategory(products, category) {
  const elements = [];
  products[category].elements.forEach(function (product) {
    elements.push(product);
  });
  return elements;
}