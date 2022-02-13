import * as utils from '../../utils';
import * as dash from './charts.component';

const axios = require('axios');

let result ;


export default (city) =>{
    console.log("sto dentro ");
    console.log("city: ",city);
    if(city = utils.formatInput(city)){
        console.log("XXXXXXXX city ?");
        axios.get(process.env.API_URL + '/urban_areas/slug:'+ city + '/scores')
        .then((response) => {
            if(response.status == 200 && response.statusText == 'OK'){
                result = {'status':response.status, 'text': response.statusText, 'data': {'categories':response.data.categories, 'summary':response.data.summary} };
                return result; //utils.call('chartInit', result);
            }
        })
        .then((res)=>{
            console.log("result ",res.data);
        })
        .catch(e => {
            result = {'data': false };
            utils.setInvalid();
            utils.showHideNotice();
            //console.log(result, e);
            return result;
        });
    }
    else return false;

}