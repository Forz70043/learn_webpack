

var container = document.createElement("div");
container.className = "container";
container.setAttribute('id', 'container');

var rowNotice = document.createElement("div")
rowNotice.classList.add("row");
rowNotice.setAttribute('id', 'rowNotice');

container.appendChild(rowNotice);

document.body.appendChild(container);