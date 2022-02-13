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
import './js/components/notice-component';

import api from './js/components/api';
import * as utils from './utils';



document.getElementById('cityInput').addEventListener('change', (e) => {
    utils.checkForm();
    utils.hideNotice();
})


document.getElementById('cityForm').addEventListener('submit', (event)=>{    
    event.preventDefault();
    if(utils.checkForm()) {
        //try {
            api(utils.getValue('cityInput'));
        //}
        //catch(e){
            //console.log("eeeeee", e);
        //}
    }
    else{
        console.log("XXXXXXX check form false")
    }
    
});