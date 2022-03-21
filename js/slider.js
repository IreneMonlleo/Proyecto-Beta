function init(){
    fetch("muebles.json")
  .then(response => response.json())
  .then(json => console.log(json));

}



window.onload=init();