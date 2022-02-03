
let form = document.createElement("form");
let div = document.createElement("div");
div.className = "mb-3";
let label = document.createElement("label");
label.className = "form-label"
label.setAttribute('for', 'cityInput');

let cityInput = document.createElement("input");
cityInput.className = "form-control form-control-lg";
cityInput.setAttribute('name', 'cityInput');
cityInput.setAttribute('id', 'cityInput');
cityInput.setAttribute('required', 'true');
cityInput.setAttribute('type', 'text');
cityInput.setAttribute('placeholder', 'City name ...');

let button = document.createElement("button");
button.className = "btn btn-primary btn-lg";

let iconButton = document.createElement("i");
iconButton.className = "bi bi-send";
button.innerText = "Send ";
button.appendChild(iconButton);

div.appendChild(label);
div.appendChild(cityInput);
form.appendChild(div);
form.appendChild(button);


let formRow = document.createElement("div");
formRow.className = "row";

let col_0 = document.createElement("div")
col_0.className = "col"
let col_1 = document.createElement("div")
col_1.className = "col"
let col_2 = document.createElement("div")
col_2.className = "col"

formRow.appendChild(col_0);
col_1.appendChild(form);
formRow.appendChild(col_1)
formRow.appendChild(col_2)  

document.getElementById('container').appendChild(formRow);