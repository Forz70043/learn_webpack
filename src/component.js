export default (text = "Hello, Webpack!") => {
    const element = document.createElement("h1");
    element.className = 'text-monospace'
    element.innerHTML = text;


    var button = document.createElement("button")
    button.className = "btn btn-danger btn-lg";

    var icon = document.createElement("i")
    icon.className = "bi-alarm"
    button.appendChild(icon);

    return button;
  };
  