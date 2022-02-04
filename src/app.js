//Depends
import '@popperjs/core/dist/cjs/popper.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './css/style.css';
import 'bootstrap';
//Componenti
import './js/components/navbar-component';
import './js/components/container-component';
import './js/components/footer-component';
import './js/components/form-component';
import './js/components/dashboard-component'

import api from './js/components/api';
import utils from './utils';



//document.getElementById('cityInput').addEventListener('change', utils('checkValidity'))

document.getElementById('cityForm').addEventListener('submit', (event)=>{
    event.preventDefault();
    if(utils('checkValidity')){
        api(document.getElementById('cityInput').value)
    }
});