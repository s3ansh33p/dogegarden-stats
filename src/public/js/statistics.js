$(document).ready(function(){
    // User Activity

    var labels = [];
    var config = {
        type: 'line',
        data: {
            
            labels: labels,
            datasets: [{
                label: 'Users',
                backgroundColor: 'rgba(244, 5, 95, 0.55)',
                borderColor: '#f4055f',
                data: [],
                fill: true,
                lineTension: 0,
            }]
        },
        options: {
            responsive: true,
            bezierCurve: false,
            tooltips: {
                mode: 'index',
                intersect: false,
            },
            elements: {
                point: {
                    radius: 0
                }
            },
            animation: {
                duration: 0  
            },
            legend: {
                display: false
            },
            hover: {
                mode: 'nearest',
                intersect: true
            },
            tooltips: {
                callbacks: {
                   title: function(t, d) {
                      return "Time: "+d.labels[t[0].index]+" seconds";
                   }
                }
             },
             
            scales: {
                xAxes: [{
                    display: true,
                    scaleLabel: {
                        display: true,
                        labelString: 'Seconds',
                        fontColor: '#cacaca'
                    },
                    ticks: {
                        fontColor: '#cacaca'
                    }
                }],
                yAxes: [{
                    display: true,
                    scaleLabel: {
                        display: true,
                        labelString: 'Online Users',
                        fontColor: '#cacaca'
                    },
                    ticks: {
                        suggestedMin: 0,
                        suggestedMax: 30,
                        fontColor: '#cacaca'
                    }
                }]
            }
        }
    };

        var ctx = document.getElementById('statsChart').getContext('2d');
        window.chart = new Chart(ctx, config);

        // Rooms
        var labelsRooms = [];
    var config = {
        type: 'line',
        data: {
            labels: labelsRooms,
            datasets: [{
                label: 'Rooms',
                backgroundColor: 'rgba(244, 5, 95, 0.55)',
                borderColor: '#f4055f',
                data: [],
                fill: true,
                lineTension: 0,
            }]
        },
        options: {
            responsive: true,
            bezierCurve: false,
            tooltips: {
                mode: 'index',
                intersect: false,
            },
            elements: {
                point: {
                    radius: 0
                }
            },
            animation: {
                duration: 0  
            },
            legend: {
                display: false
            },
            hover: {
                mode: 'nearest',
                intersect: true
            },
            tooltips: {
                callbacks: {
                   title: function(t, d) {
                      return "Time: "+d.labels[t[0].index]+" seconds";
                   }
                }
             },
            scales: {
                xAxes: [{
                    display: true,
                    scaleLabel: {
                        display: true,
                        labelString: 'Seconds',
                        fontColor: '#cacaca'
                    },
                    ticks: {
                        fontColor: '#cacaca'
                    }
                }],
                yAxes: [{
                    display: true,
                    scaleLabel: {
                        display: true,
                        labelString: 'Public Rooms',
                        fontColor: '#cacaca'
                    },
                    ticks: {
                        suggestedMin: 0,
                        suggestedMax: 10,
                        fontColor: '#cacaca'
                    }
                }]
            }
        }
    };

        var ctxRooms = document.getElementById('roomsChart').getContext('2d');
        window.chartRooms = new Chart(ctxRooms, config);




        
    //     // Outages
    //     var labelsOutages = [];
    // var config = {
    //     type: 'line',
    //     data: {
    //         labels: labelsOutages,
    //         datasets: [{
    //             label: 'Outages',
    //             backgroundColor: 'rgba(244, 5, 95, 0.55)',
    //             borderColor: '#f4055f',
    //             data: [],
    //             fill: true,
    //             lineTension: 0,
    //         }]
    //     },
    //     options: {
    //         responsive: true,
    //         bezierCurve: false,
    //         tooltips: {
    //             mode: 'index',
    //             intersect: false,
    //         },
    //         animation: {
    //             duration: 0  
    //         },
    //         legend: {
    //             display: false
    //         },
    //         hover: {
    //             mode: 'nearest',
    //             intersect: true
    //         },
    //         tooltips: {
    //             callbacks: {
    //                title: function(t, d) {
    //                   return "Time: "+d.labels[t[0].index]+" hours";
    //                }
    //             }
    //          },
    //         scales: {
    //             xAxes: [{
    //                 display: true,
    //                 scaleLabel: {
    //                     display: true,
    //                     labelString: 'Hours',
    //                     fontColor: '#cacaca'
    //                 },
    //                 ticks: {
    //                     fontColor: '#cacaca'
    //                 }
    //             }],
    //             yAxes: [{
    //                 display: true,
    //                 scaleLabel: {
    //                     display: true,
    //                     labelString: 'Outages',
    //                     fontColor: '#cacaca'
    //                 },
    //                 ticks: {
    //                     suggestedMin: 0,
    //                     suggestedMax: 10,
    //                     fontColor: '#cacaca'
    //                 }
    //             }]
    //         }
    //     }
    // };

    //     var ctxOutages = document.getElementById('outageChart').getContext('2d');
    //     window.chartOutages = new Chart(ctxOutages, config);


  });
  