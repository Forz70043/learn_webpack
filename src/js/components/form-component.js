
let form = document.createElement("form");
form.setAttribute('id', 'cityForm');
form.className = 'needs-validation';
form.setAttribute('novalidate', 'true');

let div = document.createElement("div");
div.className = "mb-3 mt-5";
let label = document.createElement("label");
label.className = "form-label"
label.setAttribute('for', 'cityInput');
label.innerText = "City name must be in english";

let cityInput = document.createElement("input");
cityInput.className = "form-control form-control-lg ";
cityInput.setAttribute('name', 'cityInput');
cityInput.setAttribute('id', 'cityInput');
cityInput.setAttribute('required', 'true');
cityInput.setAttribute('type', 'text');
cityInput.setAttribute('minlength', '4');
cityInput.setAttribute('placeholder', 'City ');
cityInput.setAttribute('aria-describedby', 'invalid-feedback');

let invalidFeedback = document.createElement("div");
invalidFeedback.className = "invalid-feedback";
invalidFeedback.setAttribute('id', 'invalid-feedback');
invalidFeedback.innerHTML = "Please provide a valid city.";

let button = document.createElement("button");
button.className = "btn btn-primary btn-lg";
button.setAttribute('id', 'buttonSubmit');

let iconButton = document.createElement("i");
iconButton.className = "bi bi-send";
button.innerText = "Send ";
button.appendChild(iconButton);

div.appendChild(label);
div.appendChild(cityInput);
div.appendChild(invalidFeedback);
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