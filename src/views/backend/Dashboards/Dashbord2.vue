<template>
    <div class="container">
    <div class="row">
        <div class="col-lg-12 mb-3">
            <div class="d-flex align-items-center justify-content-between welcome-content">
                <div class="navbar-breadcrumb">
                    <h4 class="mb-1">Welcome To Dashboard</h4>
                </div>
                <div class="">
                    <a class="button btn btn-info " href="#">Keywords<i
                            class="ml-2 ri-arrow-down-s-fill"></i></a>
                    <a class="button btn btn-primary ml-2 rounded-small rtl-mr-2 rtl-ml-0" href="#"><i
                            class="ri-add-line m-0"></i></a>       
                </div>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-md-6 col-lg-3 col-sm-6">
            <div class="card card-block card-stretch card-height">
                <div class="card-body">
                    <div class="top-block-one text-center">
                        <div class="bg-info icon iq-icon-box-2 d-block mx-auto rounded">
                            <i class="ri-global-fill"></i>
                        </div>
                        <div class="mt-4">
                            <h3>76.64k</h3>
                            <p class="mb-1">Unique Visitors</p>
                            <span class="text-danger"><i class="ri-arrow-down-s-fill"></i> - 142.73%</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-6 col-lg-3 col-sm-6">
            <div class="card card-block card-stretch card-height bg-primary">
                <div class="card-body">
                    <div class="top-block-one text-center">
                        <div class="bg-white icon iq-icon-box-2 d-block mx-auto rounded">
                            <i class="lar la-hand-pointer text-primary"></i>
                        </div>
                        <div class="mt-4">
                            <h3 class="text-white">9.67k</h3>
                            <p class="mb-1">Impressions</p>
                            <span><i class="ri-arrow-up-s-fill"></i> +82.73%</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-6 col-lg-3 col-sm-6">
            <div class="card card-block card-stretch card-height">
                <div class="card-body">
                    <div class="top-block-one text-center">
                        <div class="bg-orange icon iq-icon-box-2 d-block mx-auto rounded">
                            <i class="ri-global-line"></i>
                        </div>
                        <div class="mt-4">
                            <h3>83.21k</h3>
                            <p class="mb-1">Reach</p>
                            <span class="text-danger"><i class="ri-arrow-down-s-fill"></i>-42.96%</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-6 col-lg-3 col-sm-6">
            <div class="card card-block card-stretch card-height">
                <div class="card-body">
                    <div class="top-block-one text-center">
                        <div class="bg-danger icon iq-icon-box-2 d-block mx-auto rounded">
                            <i class="las la-signal"></i>
                        </div>
                        <div class="mt-4">
                            <h3>18.5%</h3>
                            <p class="mb-1">Engagement rate</p>
                            <span class="text-primary"><i class="ri-arrow-up-s-fill"></i>+842.73%</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-lg-6">
            <div class="card card-block card-stretch card-height">
                <div class="card-header border-none d-flex justify-content-between">
                    <div class="header-title">
                        <h4 class="card-title mb-1">Sales Stastics</h4>
                        <span class="mb-0">03 Aug,2020 - 27 Aug, 2021</span>
                    </div>
                    <div class="card-header-toolbar d-flex align-items-center">
                        <div class="dropdown">
                            <span class="dropdown-toggle dropdown-bg  p-2 "
                                id="dropdownMenuButton3" data-toggle="dropdown"><img
                                        src="@/assets/images/small/flag-01.png" alt="img-flaf" class="img-fluid mr-1"
                                        style="height: 16px; width: 16px; min-width: 16px;">United States, Google<i class="ri-arrow-down-s-line"></i>
                            </span>
                            <div class="dropdown-menu dropdown-menu-right shadow-none" aria-labelledby="dropdownMenuButton3">
                                <a class="dropdown-item" href="#"><img src="@/assets/images/small/flag-02.png" alt="img-flaf" class="img-fluid mr-2">French</a>
                                <a class="dropdown-item" href="#"><img src="@/assets/images/small/flag-03.png" alt="img-flaf" class="img-fluid mr-2">Spanish</a>
                                <a class="dropdown-item" href="#"><img src="@/assets/images/small/flag-04.png" alt="img-flaf" class="img-fluid mr-2">Italian</a>
                                <a class="dropdown-item" href="#"><img src="@/assets/images/small/flag-05.png" alt="img-flaf" class="img-fluid mr-2">German</a>
                                <a class="dropdown-item" href="#"><img src="@/assets/images/small/flag-06.png" alt="img-flaf" class="img-fluid mr-2">Japanese</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card-body">
                    <!-- <div id="layout-2-chart-01"></div> -->
                     <ApexChart element="layout-2-chart-01" :chartOption="chart1" />
                    <div class="table-responsive">
                        <table class="table mb-0 table-borderless reporting-table">
                            <thead>
                                <tr>
                                    <th scope="col">Keyword</th>
                                    <th scope="col">Position</th>
                                    <th scope="col">Volume</th>
                                    <th scope="col">Trafice<i class="ri-arrow-down-s-fill"></i></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Snowboard</td>
                                    <td>6(5)</td>
                                    <td>172k</td>
                                    <td>5.87%</td>
                                </tr>
                                <tr>
                                    <td>Burton Snowboard</td>
                                    <td>6(5)</td>
                                    <td>172k</td>
                                    <td>5.87%</td>
                                </tr>
                                <tr>
                                    <td>Doc websites</td>
                                    <td>6(5)</td>
                                    <td>172k</td>
                                    <td>5.87%</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <a href="#" class="btn btn-primary rounded-small mt-2">View Full Report</a>
                </div>
            </div>
        </div>
        <div class="col-lg-6">
            <div class="card card-block card-stretch card-height">
                <div class="card-header border-none">
                    <div class="header-title">
                        <h4 class="card-title mb-1">Backlinks</h4>
                        <span class="mb-0">03 Aug,2020 - 27 Aug, 2021</span>
                    </div>
                </div>
                <div class="card-body">
                     <ApexChart element="layout-2-chart-02" :chartOption="chart2" />
                    <!-- <div id="layout-2-chart-02"> </div> -->
                    <div class="table-responsive">
                        <table class="table mb-1 table-borderless reporting-table">
                            <thead>
                                <tr>
                                    <th scope="col">Source Page</th>
                                    <th scope="col">Page score<i class="ri-arrow-down-s-fill"></i></th>
                                    <th scope="col">First seen</th>
                                    <th scope="col">Last seen</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>http://www.skatexuser.cz/bur...</td>
                                    <td>87</td>
                                    <td>03.02.2020</td>
                                    <td>09.11.220</td>
                                </tr>
                                <tr>
                                    <td>http://vote.youma.su/theme...</td>
                                    <td>87</td>
                                    <td>10.02.201</td>
                                    <td>28.10.2019</td>
                                </tr>
                                <tr>
                                    <td>http://poespoes.nl/linkdecap...</td>
                                    <td>69</td>
                                    <td>23.09.2018</td>
                                    <td>19.07.2020</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <a href="#" class="btn btn-primary rounded-small mt-2">View Full Report</a>
                </div>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-lg-4">
            <div class="card card-block card-stretch card-height">
                <div class="card-header d-flex justify-content-between border-none">
                    <div class="iq-header-title">
                        <h4 class="card-title">Browser Traffic</h4>
                    </div>
                </div>
                <div class="card-body">
                    <ul class="perfomer-lists m-0 p-0">
                        <li class="d-flex mb-4 align-items-center">
                            <div class="user-img img-fluid"><img src="@/assets/images/icon/14.png" alt="story-img"
                                    class="rounded"></div>
                            <div class="media-support-info ml-3">
                                <h6>Opera Mini</h6>
                            </div>
                            <div class="card-header-toolbar d-flex align-items-center">
                                <span><b>67.7%</b></span>
                            </div>
                        </li>
                        <li class="d-flex mb-4 align-items-center">
                            <div class="user-img img-fluid"><img src="@/assets/images/icon/15.png" alt="story-img"
                                    class="rounded"></div>
                            <div class="media-support-info ml-3">
                                <h6>Google Chrome</h6>
                            </div>
                            <div class="card-header-toolbar d-flex align-items-center">
                                <span><b>43.3%</b></span>
                            </div>
                        </li>
                        <li class="d-flex mb-4 align-items-center">
                            <div class="user-img img-fluid"><img src="@/assets/images/icon/16.png" alt="story-img"
                                    class="rounded"></div>
                            <div class="media-support-info ml-3">
                                <h6>Firefox</h6>
                            </div>
                            <div class="card-header-toolbar d-flex align-items-center">
                                <span><b>87.2%</b></span>
                            </div>
                        </li>
                        <li class="d-flex mb-4 align-items-center">
                            <div class="user-img img-fluid"><img src="@/assets/images/icon/17.png" alt="story-img"
                                    class="rounded"></div>
                            <div class="media-support-info ml-3">
                                <h6>UC Browser</h6>
                            </div>
                            <div class="card-header-toolbar d-flex align-items-center">
                                <span><b>91.3%</b></span>
                            </div>
                        </li>
                        <li class="d-flex  align-items-center">
                            <div class="user-img img-fluid"><img src="@/assets/images/icon/18.png" alt="story-img"
                                    class="rounded"></div>
                            <div class="media-support-info ml-3">
                                <h6>Safari</h6>
                            </div>
                            <div class="card-header-toolbar d-flex align-items-center">
                                <span><b>12.5%</b></span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="col-lg-4">
            <div class="card card-block card-stretch card-height">
                <div class="card-header d-flex justify-content-between border-none">
                    <div class="iq-header-title">
                        <h4 class="card-title">Device Clicks Breakdown</h4>
                    </div>
                </div>
                <div class="card-body pt-0">
                        <HighChart element="layout-2-chart-03" :option=" chart3" />
                    <!-- <div id="layout-2-chart-03"></div> -->
                </div>
            </div>
        </div>
        <div class="col-lg-4">
            
             <card class=" card-block card-stretch card-height" headerClass="border-none" bodyClass=" text-center inln-date fitness-datepickr">
                 <template v-slot:headerTitle>
                            <h4 class="card-title">SEO Set Calender</h4>
                   </template>
                     <template v-slot:body>
                        <flat-pickr :config="config" id="inline-date" value="" class="date-input basicFlatpickr d-none" readonly="readonly"/>
                    </template>
                </card>
        </div>
    </div>
    <div class="row">
        <div class="col-lg-8">
            <div class="card card-block card-stretch card-height">
                <div class="card-header border-none">
                    <div class="header-title">
                        <h4 class="card-title">Top 10 Keywords By Clicks</h4>
                    </div>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table mb-0 table-borderless reporting_table">
                            <thead>
                                <tr>
                                    <th scope="col">Keyword</th>
                                    <th scope="col">Clicks</th>
                                    <th scope="col">Imperssions</th>
                                    <th scope="col">CTR</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Keyword 1</td>
                                    <td>45332</td>
                                    <td>927937</td>
                                    <td>3.1</td>
                                    <td>9.43%</td>
                                </tr>
                                <tr>
                                    <td>Keyword 2</td>
                                    <td>3343</td>
                                    <td>465547</td>
                                    <td>5.3</td>
                                    <td>5.39%</td>
                                </tr>
                                <tr class="bg-primary">
                                    <td>Keyword 3</td>
                                    <td>5645</td>
                                    <td>465547</td>
                                    <td>2.6</td>
                                    <td>7.43%</td>
                                </tr>
                                <tr>
                                    <td>Keyword 4</td>
                                    <td>12124</td>
                                    <td>45646</td>
                                    <td>9.1</td>
                                    <td>9.99%</td>
                                </tr>
                                <tr>
                                    <td>Keyword 5</td>
                                    <td>6756</td>
                                    <td>243534</td>
                                    <td>2.4</td>
                                    <td>4.97%</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-lg-4">
            <div class="card bg-primary">
                <div class="card-header border-none">
                    <div class="header-title">
                        <h4 class="card-title text-white">Countrywise Impressions</h4>
                    </div>
                </div>
                <div class="card-body">
                     <AmChart element="layout-2-chart-04" type="dashboard-map"  />
                    <!-- <div id="layout-2-chart-04"></div> -->
                </div>
            </div>
            <div class="card ">
                <div class="card-header border-none">
                    <div class="header-title">
                        <h4 class="card-title">Goal history</h4>
                    </div>
                </div>
                <div class="card-body">
                    <div class="iq-details">
                       <Progressbar :value="67" color="primary" colorName="primary" class="mt-2" midclass="iq-progress progress-1" >
                              <template v-slot:text>
                           <span class="progress-text-one bg-primary">67%</span>
                              </template>
                           </Progressbar>
                        <h5 class="title mt-4">You have reached 70% towards your goal</h5>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>
<script>
import AmChart from '../../../components/charts/AmChart'
import { core } from '../../../config/pluginInit'
import ApexChart from '../../../components/charts/ApexChart'
import HighChart from '../../../components/charts/HighChart'
export default {
    name:'Dashbord2',
    components:{
ApexChart,
HighChart,
AmChart
    },
    mounted(){
core.index()
    },
    data(){
        return{
            config: {
        dateFormat: 'Y-m-d',
        inline: true,
        // locale: english
      },
            chart1:{
                 series: [{
        name: 'Successful deals',
        data: [30, 50, 35, 60, 40, 60, 60]
      }, {
        name: 'Failed deals',
        data: [40, 50, 55, 50, 30, 80, 30]
      }],
      chart: {
        type: 'bar',
        height: 330,
        stacked: true
      },
      colors: ["#05bbc9", "#dff6f8"],

      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '15%',
          endingShape: 'rounded'
        },
      },
      legend: {
        show: false
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 2,
        colors: ['transparent']
      },
    //   xaxis: {
    //     categories: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
    //     labels: {
    //       minHeight: 20,
    //       maxHeight: 20
    //     }
    //   },
      yaxis: {
        title: {
          text: ''
        },
        labels: {
          minWidth: 19,
          maxWidth: 19,
        }
      },
      xaxis: {
        labels: {
          maxHight: 50,
        },
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
            chart2:{
                series: [{
        name: 'Top',
        data: [20, 65, 10, 120, 30, 80, 40]

      }, {
        name: 'New',
        data: [40, 0, 100, 50, 90, 40, 20]

      }],
      colors: ["#05bbc9", "#ff4b4b"],
      chart: {
        height: 300,
        type: 'line',
        zoom: {
          enabled: false
        },
        sparkline: {
          enabled: false,
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'smooth',
        width: 3
      },
      title: {
        text: '',
        align: 'left'
      },
      fill: {
        opacity: 1
      },
      grid: {
        row: {
          colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
          opacity: 0.5,

        },

      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        labels: {
          minHeight: 22,
          maxHeight: 35,
        }
      },
      yaxis: {
        labels: {
          offsetY: 0,
          minWidth: 15,
          maxWidth: 15,
        }
      },
      legend: {
        position: 'top',
        offsetX: -20        
      },
            },
            chart3:{
                  chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        height: 300,
        type: 'pie'
      },
      title: {
        text: ''
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      accessibility: {
        point: {
          valueSuffix: '%'
        }
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: false
          },
          showInLegend: true
        }
      },
      colors: ["#fe721c", "#05bbc9", "#876cfe"],
      series: [{
        name: 'Brands',
        colorByPoint: true,
        data: [{
          name: 'Desktop',
          y: 30,
          sliced: true,
          selected: true
        }, {
            name: 'Mobile',
          y: 40
        },{
            name: 'Tablet',
          y: 30
        }]}]
            }
        }
        
    }
    
}
</script>