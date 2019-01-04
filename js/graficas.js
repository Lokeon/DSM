var ctx = document.getElementById("salsa").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Europa", "América", "Asia", "África", "Oceanía"],
        datasets: [{
            label: 'Nº de grupos',
            data: [20, 55, 6, 0, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)'
            ],
            borderWidth: 2
        }]
    },
    options: {
        responsive: false,
        maintainAspectRatio: false,
        legend: { display: false },
        title: {
        display: true,
        text: 'Número de grupos músicales de Salsa'
        }, 
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});
var ctx = document.getElementById("bachata").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Europa", "América", "Asia", "África", "Oceanía"],
        datasets: [{
            label: 'Nº de grupos',
            data: [25, 66, 7, 2, 8],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)'
            ],
            borderWidth: 2
        }]
    },
    options: {
        responsive: false,
        maintainAspectRatio: false,
        legend: { display: false },
        title: {
        display: true,
        text: 'Número de grupos músicales de Bachata'
        }, 
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});
var ctx = document.getElementById("merengue").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    endPoint: 200,
    data: {
        labels: ["Europa", "América", "Asia", "África", "Oceanía"],
        datasets: [{
            label: 'Nº de grupos',
            data: [8, 23, 1, 0, 1],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)'
            ],
            borderWidth: 2
        }]
    },
    options: {
        responsive: false,
        maintainAspectRatio: false, 
        legend: { display: false },
        title: {
        display: true,
        text: 'Número de grupos músicales de Merengue'
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});
var ctx = document.getElementById("premios").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Salsa", "Bachata", "Merengue"],
        datasets: [{
            label: 'Nº de grupos',
            data: [1, 2, 2,],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)'
            ],
            borderWidth: 2
        }]
    },
    options: {
        responsive: false,
        maintainAspectRatio: false,
        legend: { display: false },
        title: {
        display: true,
        text: 'Número de premios a bailarines/parejas de baile españoles'
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});