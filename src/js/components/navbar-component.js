
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

var button = document.createElement("button");
button.className = "navbar-toggler";
button.setAttribute('type', 'button');

var span = document.createElement("span");
span.className = "navbar-item-icon";

button.appendChild(span);
container_fluid.appendChild(button)


nav.appendChild(container_fluid);

document.body.appendChild(nav);


/*
export default () => {
    
    var widget = ""
    var nav = document.createElement("nav");
    nav.className = "navbar navbar-expand-lg navbar-light bg-light"

    var container_fluid = document.createElement("div");
    container_fluid.className = "container-fluid";


    var linkBrand = document.createElement("a");
    linkBrand.className = "navbar-brand";
    linkBrand.setAttribute('href', '#');
    linkBrand.innerText = 'Navbar';

    container_fluid.appendChild(linkBrand);

    var button = document.createElement("button");
    button.className = "navbar-toggler";
    button.setAttribute('type', 'button');

    var span = document.createElement("span");
    span.className = "navbar-item-icon";

    button.appendChild(span);
    container_fluid.appendChild(button)


    nav.appendChild(container_fluid);

    return nav;


<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled">Disabled</a>
        </li>
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>

};
*/