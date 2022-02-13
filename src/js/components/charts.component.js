import Chart from 'chart.js/auto';

let chart ;


let borderColors = [
    'rgb(255, 99, 132)',
    'rgb(255, 159, 64)',
    'rgb(255, 205, 86)',
    'rgb(75, 192, 192)',
    'rgb(54, 162, 235)',
    'rgb(153, 102, 255)',
    'rgb(201, 203, 207)'
];

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

function defaultBarChart(data, title){
    
    return config = 
    {
        type: 'bar',
        data: {
            label: ' ',
            datasets: [{
                label: (title) ? title+' '+'Life Quality' : 'Life Quality',
                data: (data) ? data : [65, 59, 80, 81, 56, 55, 40],
                backgroundColor: barColors,
                borderColor: borderColors,
                borderWidth: 1
            }]
        },
        options: {
            indexAxis: 'y',
            title: {
                display: true,
                text: 'City Life Quality'
            },
        }
    }
}

function initConfig(def, type, data, options){

    if(def) return defaultBarChart();
    else return {
        "type": type,
        "data": data 
        /*{
            "labels": [],
            "datasets": []
        }*/,
        "options": options/*{
            //indexAxis: 'y',
            plugins: {
                legend: {
                    display: true,
                    labels: {
                        color: 'rgb(255, 99, 132)'
                    }
                },
                title: {
                    display: true,
                    text: title
                },
            }
        }*/
    };
}

function chartInit(elem, config){
    if(!config) config = initConfig(true);
    chart = new Chart(elem, config);
    return chart;
}

function destroy(){
    if(chart) chart.destroy();
}

function update(el, label, data){
    if(chart){
        chart.data.labels.push(label);
        chart.data.datasets.forEach((dataset) => {
            dataset.data.push(data);
        });
        chart.update();
    }
    else{

    }
    el.data.labels.push(label);
    el.data.datasets.forEach((dataset) => {
        dataset.data.push(data);
    });
    el.update();

    
}

function call(params, options){ 
    console.log(' chart '+new Date().getTime()); 
    if((params == 'init' || params=='chartInit') && options){
        return chartInit(params, options);
    }
    else if(params == 'checkValidity'){
        //return checkValidity();
    }
    else if(params == 'catch'){
        //return _catch();
    }
}


export { chartInit, destroy, update } 