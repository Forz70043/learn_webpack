
import * as dash from './js/components/charts.component';

let chart; 

/**
 * Replace space with -
 * return lowercase string
 */
export function formatInput(input){
    return input.toLowerCase().replace(' ','-');
}

function showNotice(){
    document.getElementById('alertNotice').classList.add('show');
    //document.getElementById('alertNotice').classList.remove('d-none');
}

export function hideNotice(){
    //document.getElementById('alertNotice').classList.add('d-none');
    document.getElementById('alertNotice').classList.remove('show');
}

export function showHideNotice(){
    (document.getElementById('alertNotice').classList.contains('d-none') || !document.getElementById('alertNotice').classList.contains('show')) 
    ?  showNotice() : hideNotice();
    //document.getElementById('alertNotice').classList.add('show');
}

export function _catch(params){
    console.log("catch", params);
    //notice(params);
    //return showHideNotice();

}


/**
 * 
 * @param {*} id element
 * @returns true or flase if elem contains class 'is-invalid'
 */
function isInvalid(id){
    if(!id) return false;
    if(document.getElementById(id).contains('is-invalid')) return true;
    else return false;
}

export function setInvalid(){
    document.getElementById('cityInput').classList.add('is-invalid'); 
    document.getElementById('cityInput').classList.remove('is-valid');    
    //document.getElementById('cityForm').classList.remove('was-validated');
}

function setValid(){
    //document.getElementById('cityForm').classList.add('was-validated');
    document.getElementById('cityInput').classList.remove('is-invalid');
    document.getElementById('cityInput').classList.add('is-valid');
}

function isEmpty(val){
    if(val === '' || val == '' || val === undefined || val === null) return true;
    else return false;
}

export function get(id){
    if(!id) return false;
    return document.getElementById(id);
}

export function getValue(id){
    let val = document.getElementById(id).value;

    if(!isEmpty(val)) return val;
    else return false;
    
}

function checkValidity(){
    console.log("XXXXXXXXXXXXXXXXXXXXXX")
    if(!get('cityForm').checkValidity()){
        setInvalid();
        return false;
    }
    else{
        //if(notice)
        setValid();
        //add('was-validated');
        return true;
    }
}

function chartInit(params){
    console.log('chartInit');
    console.log("XXXX init: ",params);

    chart = dash.chartInit('chart_1')

    var x = [];
    var y = [];
    document.getElementById('chart_1').classList.remove('d-none');

    params.data.categories.forEach(row => {
        x.push(row.name);
        y.push(row.score_out_of_10);    
    });
    
    console.log(
        x,
        y
    );

    let barColors = [
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 205, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(201, 203, 207, 0.2)',
        //'rgba(5, 247, 5, 0.2)'
    ];
    
    chart = new Chart("chart_1", {
        type: "bar",
        data: {
            labels: x,
            datasets: [{
              label: ' ',
              data: y,
              backgroundColor: barColors,
              borderColor: [
                'rgb(255, 99, 132)',
                'rgb(255, 159, 64)',
                'rgb(255, 205, 86)',
                'rgb(75, 192, 192)',
                'rgb(54, 162, 235)',
                'rgb(153, 102, 255)',
                'rgb(201, 203, 207)'
              ],
              borderWidth: 1
            }]
        },
        options: {
            indexAxis: 'y',
            plugins: {
                /*legend: {
                    display: true,
                    labels: {
                        color: 'rgb(255, 99, 132)'
                    }
                },*/
                title: {
                    display: true,
                    text: "World City Life Quality"
                },
            }
        }
    });

    return chart;
}


function addData(chart, label, data) {
    chart.data.labels.push(label);
    chart.data.datasets.forEach((dataset) => {
        dataset.data.push(data);
    });
    chart.update();
}

function call(params, options) {

    console.log('in utils '+new Date().getTime()); 
    if(params == 'chartInit' && options){
        return chartInit(options);
    }
    else if(params =='checkValidity'){
        return checkValidity();
    }
    else if(params =='catch'){
        return _catch();
    }
}

export function checkForm(){
    console.log("check form ", document.getElementById('cityForm').checkValidity());

    if(document.getElementById('cityForm').checkValidity()){
        setValid();
        return true;
    }
    else{
        setInvalid();
        return false;
    }
}


export default { formatInput, checkForm, get, getValue, _catch, setInvalid, showHideNotice, hideNotice };

