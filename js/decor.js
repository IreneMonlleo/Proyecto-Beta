function loadSection(section) {
  getJSON(function(products) {
    const list = getProductByCategory(products, section);
    console.log(list);
  })
}