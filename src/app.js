//Depends
import '@popperjs/core/dist/cjs/popper.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './css/style.css';
import 'bootstrap';
//Componenti
import './navbar-component';
import './container-component';
import './footer-component';

const axios = require('axios');

import component from './component';
//import './image-component';
import widget from './widget-component';


document.getElementById('container').appendChild(component());
