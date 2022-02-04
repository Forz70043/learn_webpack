
import Chart from 'chart.js/auto';
console.log(" in utils")
import notice from './js/components/notice-component';

function xxx(){
    console.log("xxx");
}

function _catch(params){
    console.log("catch");
    notice(params);
}


function checkValidity(){
    if(!document.getElementById('cityForm').checkValidity()){
        document.getElementById('cityInput').classList.add('is-invalid');

        document.getElementById('chart_1').classList.add('d-none');
        return false;
    }
    else{
        document.getElementById('cityForm').classList.add('was-validated');
        document.getElementById('cityInput').classList.remove('is-invalid');
        //add('was-validated');

        //api(document.getElementById('cityInput').value);
        return true;
    }
}

function chartInit(params){
    console.log('chartInit');
    console.log("XXXX init: ",params);

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

    var barColors = [
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 205, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(201, 203, 207, 0.2)',
        //'rgba(5, 247, 5, 0.2)'
    ];

    var chart = new Chart("chart_1", {
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
            title: {
                display: true,
                text: "World Wide Wine Production"
            },
            indexAxis: 'y'
        }
    });


    return chart;
}


export default (params, options)=>{ 
    console.log(' ci sono '+new Date().getTime()); 
    if(params == 'chartInit' && options){
        chartInit(options);
    }
    else if(params =='checkValidity'){
        return checkValidity();
    }
    else if(params =='catch'){
        return _catch();
    }
}
