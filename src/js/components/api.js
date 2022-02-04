import utils from '../../utils';
const axios = require('axios');

var result ;


export default (city=false) =>{
    if(city){
        axios.get(process.env.API_URL + 'urban_areas/slug:'+city+'/scores')
        .then((response) => {
            if(response.status == 200 && response.statusText == 'OK'){
                result = {'status':response.status, 'text': response.statusText, 'data': response.data.categories };
                return utils('chartInit', result);
            }
        })
        .catch(e => {
            return result = {'status':e.status, 'text': e.statusText, 'data': false };;
        });
    }
    else{
        //console.log("city != true", city);
        return false;
    }

}