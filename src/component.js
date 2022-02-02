export default (text = "Hello, Webpack!") => {
    const element = document.createElement("h1");
    element.className = 'text-monospace'
    element.innerHTML = text;
  
    return element;
  };
  