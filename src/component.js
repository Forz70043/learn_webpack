export default (text = "Hello, Webpack!") => {
    const element = document.createElement("h1");
    element.className = 'text-monospace'
    element.innerHTML = text;

    var container = document.createElement("div");
    container.className="container mt-3"
    container.setAttribute('id','containerDn');

    var row = document.createElement("div");
    row.className="row"
    row.setAttribute('id','row');
    
    var column = document.createElement("div");
    column.className = "col";

    var column_0 = document.createElement("div");
    column_0.className = "col";
    
    var column_1 = document.createElement("div");
    column_1.className = "col";
    

    //<button type="button" class="btn btn-lg btn-danger" data-bs-toggle="popover" title="Popover title" data-bs-content="And here's some amazing content. It's very engaging. Right?">Click to toggle popover</button>
    var button = document.createElement("button")
    button.className = "btn btn-danger btn-lg";
    button.type="button";
    button.title = "Popover title";
    button.setAttribute('data-bs-toggle', 'popover');
    button.setAttribute('data-bs-content', "And here's some amazing content. It's very engaging. Right?")
    
    var icon = document.createElement("i")
    icon.className = "bi-alarm";



    button.appendChild(icon);
    column.appendChild(button)
    row.appendChild(column_0);
    row.appendChild(column);
    row.appendChild(column_1);
    container.appendChild(row);

    return container;
};
  