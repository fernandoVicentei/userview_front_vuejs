<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-lg-12 mb-3">
        <div class="d-flex align-items-center justify-content-between welcome-content">
          <div class="navbar-breadcrumb">
            <h4 class="mb-0">Métricas</h4>
          </div>
          <!-- <div class="">
                        <a class="button btn btn-skyblue button-icon" href="#">Facebook<i
                                class="ml-2 ri-arrow-down-s-fill"></i></a>
                        <a class="button btn btn-primary ml-2 button-icon rounded-small rtl-mr-2 rtl-ml-0"  href="#"><i
                                class="ri-add-line m-0"></i></a>
                       
                    </div> -->
        </div>
      </div>
      <div class="col-lg-12">
        <div class="card card-block card-stretch card-height">
          <div class="card-header border-none">
            <div class="header-title">
              <h4 class="card-title">Lead Breakdown (Today)</h4>
            </div>
          </div>
          <div class="card-body">
            <!-- <div id="layout-1-chart-01"></div> -->
            <ApexChart element="layout-1-chart-01" :chartOption="chart1" />
          </div>
        </div>
      </div>
    </div>
 
  
  <!-- Page end  -->
</div></template>
<script>
/* import AmChart from '../../../components/charts/AmChart' */
import ApexChart from '../../../components/charts/ApexChart'
export default {
  name: 'Dashbord1',
  components: {
    ApexChart,
    /* AmChart */
  },
  data() {
    return {
      
      chart1: {
        series: [70, 30],
        chart: {
          height: 300,
          type: 'radialBar',
        },
        plotOptions: {
          radialBar: {
            dataLabels: {
              name: {
                fontSize: '22px',
              },
              value: {
                fontSize: '16px',
              },
              total: {
                show: true,
                label: 'Total',
                formatter: function () {
                  return 249
                }
              }
            },
            track: {
              strokeWidth: '42%',
            },
          }
        },
        colors: ['#05bbc9', '#876cfe'],
        stroke: {
          lineCap: "round",
        }
      },
      chart2: {
        series: [{
          data: [18, 22, 28, 45, 34, 20]
        }],
        chart: {
          height: 200,
          type: 'bar',
          events: {
            click: function () {
            }
          },
          sparkline: {
            enabled: true,
          }
        },
        colors: ["#fe721c", "#4788ff", "#05bbc9", "#876cfe", "#00cc96", "#e72c30"],
        plotOptions: {
          bar: {
            columnWidth: '35%',
            distributed: true
          }
        },
        dataLabels: {
          enabled: false
        },
        legend: {
          show: false
        },
        xaxis: {
          categories: [
            ['India'],
            ['U.S.A'],
            ['Canada'],
            ['Africa'],
          ],
          labels: {
            style: {
              colors: ["#4788ff", "#37e6b0", "#fe721c", "#876cfe"],
              fontSize: '12px'
            }
          }
        }
      },
      chart3: {
        series: [{
          name: ' Clicks',
          type: 'column',
          data: [23, 11, 22, 27, 13, 22, 37, 21]
        }, {
          name: ' Sales',
          type: 'area',
          data: [44, 55, 41, 67, 22, 43, 21, 41]
        }, {
          name: 'Commission',
          type: 'line',
          data: [30, 25, 36, 30, 45, 35, 64, 52]
        }],
        chart: {
          height: 370,
          type: 'line',
          stacked: false,
        },
        stroke: {
          width: [0, 2, 5],
          curve: 'smooth'
        },
        plotOptions: {
          bar: {
            columnWidth: '50%'
          }
        },

        fill: {
          opacity: [0.85, 0.25, 1],
          gradient: {
            inverseColors: false,
            shade: 'light',
            type: "vertical",
            opacityFrom: 0.85,
            opacityTo: 0.55,
            stops: [0, 100, 100, 100]
          }
        },
        labels: ['01/01/2019', '02/01/2019', '03/01/2019', '04/01/2019', '05/01/2019', '06/01/2019', '07/01/2019',
          '08/01/2019'
        ],
        colors: ['#05bbc9', '#fe721c', '#00cc96'],
        markers: {
          size: 0
        },
        xaxis: {
          type: 'datetime',
        },
        yaxis: {
          show: true,
          labels: {
            minWidth: 20,
            maxWidth: 20
          }
        },
        tooltip: {
          shared: true,
          intersect: false,
          y: {
            formatter: function (y) {
              if (typeof y !== "undefined") {
                return y.toFixed(0) + " points";
              }
              return y;

            }
          }
        }
      },
      chart5: {
        series: [{
          name: 'Week',
          data: [80, 50, 30, 40, 100, 20],
        }, {
          name: 'Month',
          data: [20, 30, 40, 80, 20, 80],
        }, {
          name: 'Year',
          data: [44, 76, 78, 13, 43, 10],
        }],
        colors: ["#43d396", "#fe721c", "#876cfe"],
        chart: {
          height: 360,
          type: 'radar',
          dropShadow: {
            enabled: true,
            blur: 1,
            left: 1,
            top: 1
          }
        },

        stroke: {
          width: 2
        },
        fill: {
          opacity: 0.1
        },
        markers: {
          size: 0
        },
        xaxis: {
          categories: ['2011', '2012', '2013', '2014', '2015', '2016']
        }
      },
      chart6: {
        series: [{
          name: 'Total Likes',
          data: [86, 65, 96, 46, 30, 58, 97]
        }, {
          name: 'Total Share',
          data: [55, 95, 45, 98, 55, 99, 44]
        }],
        chart: {
          type: 'bar',
          height: 310
        },
        colors: ['#05bbc9', '#876cfe'],

        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: '25%',
            endingShape: 'rounded'
          },
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          show: true,
          width: 2,
          colors: ['transparent']
        },
        xaxis: {
          categories: ['2020 Q1', '2020 Q2', '2020 Q3', '2020 Q4', '2020 Q5', '2020 Q6', '2020 Q7'],
        },
        yaxis: {
          show: true,
          labels: {
            minWidth: 20,
            maxWidth: 20
          }
        },
        fill: {
          opacity: 1
        },
        tooltip: {
          y: {
            formatter: function (val) {
              return "$ " + val + " thousands"
            }
          }
        }
      },
      
    }
  }
}
</script>