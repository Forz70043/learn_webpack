
import '@popperjs/core/dist/cjs/popper.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './css/style.css';
import 'bootstrap';

const axios = require('axios');

console.log("Hello, Webpack! XXX");
import header from './header-component';
import component from './component';
//import './image-component';
import widget from './widget-component';

//component.appendChild(widget())
document.body.appendChild(header());

document.body.appendChild(component());
