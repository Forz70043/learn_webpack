
var nav = document.createElement("nav");
nav.className = "navbar navbar-expand-lg navbar-light bg-light"

var container_fluid = document.createElement("div");
container_fluid.className = "container-fluid";


var linkBrand = document.createElement("a");
linkBrand.className = "navbar-brand";
linkBrand.setAttribute('href', '#');
iconNavBar = document.createElement("i")
iconNavBar.className = "bi bi-activity";
linkBrand.textContent = 'Life City Quality  ';
linkBrand.appendChild(iconNavBar);

container_fluid.appendChild(linkBrand);

nav.appendChild(container_fluid);

document.body.appendChild(nav);