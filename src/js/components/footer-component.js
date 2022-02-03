var container = document.createElement("div")
container.className="container";
container.setAttribute('id','footer');

var footer = document.createElement("footer");
footer.className = "d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top";

var div = document.createElement("div");
div.className = "col-md-4 d-flex align-items-center";

var link = document.createElement("a");
link.className = "mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1";
link.setAttribute('href','/');

div.appendChild(link);

var span = document.createElement("span");
span.className = "text-muted";
span.innerText = "© 2022 City Air Quality ";

div.appendChild(span);

footer.appendChild(div);

// --- Social
let ul = document.createElement("ul");
ul.className = "nav col-md-4 justify-content-end list-unstyled d-flex";

//Linkedin
let liSocialLinkedin = document.createElement("li");
liSocialLinkedin.className = "ms-3";

let anchorLinkedin = document.createElement("a");
anchorLinkedin.className = "text-muted";
anchorLinkedin.setAttribute('href','https://www.linkedin.com/in/alfonsopisicchio/');

let iconLinkedin = document.createElement("i");
iconLinkedin.className = "bi bi-linkedin";

//GitHub
let liSocialGithub = document.createElement("li");
liSocialGithub.className = "ms-3";

let anchorGithub = document.createElement("a");
anchorGithub.className = "text-muted";
anchorGithub.setAttribute('href','https://github.com/Forz70043');

let iconGithub = document.createElement("i");
iconGithub.className = "bi bi-github";




anchorGithub.appendChild(iconGithub)
liSocialGithub.appendChild(anchorGithub)

anchorLinkedin.appendChild(iconLinkedin);
liSocialLinkedin.appendChild(anchorLinkedin);

ul.appendChild(liSocialLinkedin);
ul.appendChild(liSocialGithub);

container.appendChild(footer);
container.appendChild(ul);

document.body.appendChild(container);
