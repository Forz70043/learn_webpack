import utils from '../../utils';
const axios = require('axios');

var result ;


export default (city=false) =>{
    if(city){
        city = city.toLowerCase().replace(' ','-');
        axios.get(process.env.API_URL + 'urban_areas/slug:'+city+'/scores')
        .then((response) => {
            if(response.status == 200 && response.statusText == 'OK'){
                result = {'status':response.status, 'text': response.statusText, 'data': {'categories':response.data.categories, 'summary':response.data.summary} };
                return utils('chartInit', result);
            }
        })
        .catch(e => {
            result = {'data': false };
            console.log(result, e);
            return utils('catch', result);
        });
    }
    else{
        //console.log("city != true", city);
        return false;
    }

}