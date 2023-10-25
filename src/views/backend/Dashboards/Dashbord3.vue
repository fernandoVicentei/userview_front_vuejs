<template>
     <div class="container">
        <div class="row">
            <div class="col-lg-12 mb-3">
                <div class="d-flex align-items-center justify-content-between welcome-content">
                    <div class="navbar-breadcrumb">
                        <h4 class="mb-1">Welcome To Dashboard</h4>
                    </div>
                    <div class="">
                        <a class="button btn btn-danger" href="#">Google ads<i
                                class="ml-2 ri-arrow-down-s-fill"></i></a>
                        <a class="button btn btn-primary ml-2 rounded-small rtl-mr-1 rtl-ml-0" href="#"><i
                                class="ri-add-line m-0"></i></a>
                    </div>
                </div>
            </div>
            <div class="col-lg-8">
                <div class="row">
                    <div class="col-md-4 col-sm-6">
                        <div class="card card-block card-stretch card-height">
                            <div class="card-body">
                                <div class="top-block-one d-flex align-items-center justify-content-between">
                                    <div class="bg-danger icon iq-icon-box-2 mr-2 rounded">
                                        <i class="las la-funnel-dollar"></i>
                                    </div>
                                    <span class="text-primary"><i class="ri-arrow-up-fill mr-1"></i> +12.12%</span>
                                </div>
                                <div class="mt-4">
                                    <h3>76.64k</h3>
                                    <span class="mb-0">Google ads Conversions</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 col-sm-6">
                        <div class="card card-block card-stretch card-height bg-primary">
                            <div class="card-body">
                                <div class="top-block-one d-flex align-items-center justify-content-between">
                                    <div class="bg-white icon iq-icon-box-2 mr-2 rounded">
                                        <i class="las la-money-check-alt text-primary"></i>
                                    </div>
                                    <span class="text-white"><i class="ri-arrow-down-line mr-1"></i> -42.72% </span>
                                </div>

                                <div class="mt-4">
                                    <h3 class="text-white">$7,323.34</h3>
                                    <span class="mb-0  text-white">Google Ads Cost</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 col-sm-6">
                        <div class="card card-block card-stretch card-height">
                            <div class="card-body">
                                <div class="top-block-one d-flex align-items-center justify-content-between">
                                    <div class="bg-success icon iq-icon-box-2 mr-2 rounded">
                                        <i class="lar la-hand-pointer"></i>
                                    </div>
                                    <span class="text-primary"> <i class="ri-arrow-up-fill mr-1"></i> +42.72%</span>
                                </div>

                                <div class="mt-4">
                                    <h3>4,043</h3>
                                    <span class="mb-0">Google Ads Clicks</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 col-sm-6">
                        <div class="card card-block card-stretch card-height">
                            <div class="card-body">
                                <div class="top-block-one d-flex align-items-center justify-content-between">
                                    <div class="bg-info icon iq-icon-box-2 mr-2 rounded">
                                        <i class="las la-file-invoice-dollar"></i>
                                    </div>
                                    <span class="text-danger"><i class="ri-arrow-down-line mr-1"></i> -42.72%
                                        </span>
                                </div>

                                <div class="mt-4">
                                    <h3>76.56.23%</h3>
                                    <span class="mb-0">Google Ads Conversions Rate</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 col-sm-6">
                        <div class="card card-block card-stretch card-height">
                            <div class="card-body">
                                <div class="top-block-one d-flex align-items-center justify-content-between">
                                    <div class="bg-orange icon iq-icon-box-2 mr-2 rounded">
                                        <i class="las la-signal"></i>
                                    </div>
                                    <span class="text-primary"><i class="ri-arrow-up-fill mr-1"></i> +42.72%</span>
                                </div>

                                <div class="mt-4">
                                    <h3>76.64k</h3>
                                    <span class="mb-0">Google ads cost Conversions</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 col-sm-6">
                        <div class="card card-block card-stretch card-height">
                            <div class="card-body">
                                <div class="top-block-one d-flex align-items-center justify-content-between">
                                    <div class="bg-skyblue icon iq-icon-box-2 mr-2 rounded">
                                        <i class="las la-mouse-pointer"></i>
                                    </div>
                                    <span class="text-danger"><i class="ri-arrow-down-line mr-1"></i> -42.72%
                                        </span>
                                </div>

                                <div class="mt-4">
                                    <h3>53.6k</h3>
                                    <span class="mb-0">Google ads Impressions Rate</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-4">
                <div class="card card-block card-stretch card-height">
                    <div class="card-header border-none">
                        <div class="header-title">
                            <h4 class="card-title">Top Keywords (Conversions)</h4>
                        </div>
                    </div>
                    <div class="card-body">
                        <div class="iq-details">
                            <h5 class="title">Agency Analytics</h5>
                             <Progressbar :value="67" color="primary" colorName="primary" class="mt-2" midclass="iq-progress progress-1" >
                              <template v-slot:text>
                           <span class="progress-text-one bg-primary">67%</span>
                              </template>
                           </Progressbar>
                           
                        </div>
                        <div class="iq-details mt-4">
                            <h5 class="title">Seo Report</h5>
                            <Progressbar :value="49" color="orange" colorName="orange" class="mt-2" midclass="iq-progress progress-1" >
                              <template v-slot:text>
                           <span class="progress-text-one bg-orange">49%</span>
                              </template>
                           </Progressbar>
                           
                        </div>
                        <div class="iq-details mt-4">
                            <h5 class="title">Social Media reporting</h5>
                            <Progressbar :value="86" color="info" colorName="info" class="mt-2" midclass="iq-progress progress-1" >
                              <template v-slot:text>
                           <span class="progress-text-one bg-info">86%</span>
                              </template>
                           </Progressbar>
                           
                        </div>
                        <div class="iq-details mt-4">
                            <h5 class="title">Web Ads</h5>
                             <Progressbar :value="47" color="success" colorName="success" class="mt-2" midclass="iq-progress progress-1" >
                              <template v-slot:text>
                           <span class="progress-text-one bg-success">47%</span>
                              </template>
                           </Progressbar>
                           
                        </div>
                        <div class="iq-details mt-4">
                            <h5 class="title">YouTube Ads</h5>
                             <Progressbar :value="79" color="danger" colorName="danger" class="mt-2" midclass="iq-progress progress-1" >
                              <template v-slot:text>
                           <span class="progress-text-one bg-danger">79%</span>
                              </template>
                           </Progressbar>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-8 col-md-6">
                <div class="card card-block card-stretch card-height">
                    <div class="card-header border-none">
                        <div class="header-title">
                            <h4 class="card-title mb-1">Demographic Audience</h4>
                            <span class="mb-0">See insights on how you profile has grown and changed over time</span>
                        </div>
                    </div>
                    <div class="card-body">
                        <AmChart element="school-chart-05" type="dashboard-map2" class="layout-3-chart-01" />
                        <!-- <AmChart element="layout-3-chart-01" type="dashboard-map2"  class="layout-3-chart-01" /> -->
                                 <!-- <AmChart element="layout-3-chart-01" type="dashboard-map2"  /> -->
                        <!-- <div id="layout-3-chart-01" class="layout-3-chart-01"></div> -->
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-6">
                <div class="card card-block card-stretch card-height">
                    <div class="card-header border-none">
                        <div class="header-title">
                            <h4 class="card-title mb-1">Statistic by gender</h4>
                            <span class="mb-0">Mar 17 - Apr 03</span>
                        </div>
                    </div>
                    <div class="card-body">
                         <HighChart element="layout-3-chart-02" :option=" chart3" />
                        <!-- <div id="layout-3-chart-02"></div> -->
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-6">
                <div class="card card-block card-stretch card-height rule-box">
                    <div class="card-header d-flex justify-content-between border-none">
                        <div class="header-title">
                            <h4 class="card-title">IP Exclusions by Rule ( Today )</h4>
                        </div>
                    </div>
                    <div class="card-body">
                        <ul class="perfomer-lists m-0 p-0">
                            <li class="d-flex mb-4 align-items-center">
                                <div class="top-block-one d-flex align-items-center justify-content-between">
                                    <div class="bg-primary icon iq-icon-box mr-2 rounded">
                                        <i class="las la-globe"></i>
                                    </div>
                                </div>
                                <div class="media-support-info ml-3">
                                    <h5>Anonymous</h5>
                                    <p class="mb-0 font-size-14">Creative Performance</p>
                                </div>
                                <div class="iq-card-header-toolbar d-flex align-items-center">
                                    <h4>268</h4>
                                </div>
                            </li>
                            <li class="d-flex mb-4 align-items-center">
                                <div class="top-block-one d-flex align-items-center justify-content-between">
                                    <div class="bg-info icon iq-icon-box mr-2 rounded">
                                        <i class="lar la-hand-pointer"></i>
                                    </div>
                                </div>
                                <div class="media-support-info ml-3">
                                    <h5>Excessive Clicking</h5>
                                    <p class="mb-0 font-size-14">Media Performance</p>
                                </div>
                                <div class="iq-card-header-toolbar d-flex align-items-center">
                                    <h4>4342</h4>
                                </div>
                            </li>
                            <li class="d-flex mb-4 align-items-center">
                                <div class="top-block-one d-flex align-items-center justify-content-between">
                                    <div class="bg-skyblue icon iq-icon-box mr-2 rounded">
                                        <i class="las la-signal"></i>
                                    </div>
                                </div>
                                <div class="media-support-info ml-3">
                                    <h5>Premium Impressions</h5>
                                    <p class="mb-0 font-size-14">Reach Performance</p>
                                </div>
                                <div class="iq-card-header-toolbar d-flex align-items-center">
                                    <h4>6565</h4>
                                </div>
                            </li>
                            <li class="d-flex  align-items-center">
                                <div class="top-block-one d-flex align-items-center justify-content-between">
                                    <div class="bg-success icon iq-icon-box mr-2 rounded">
                                        <i class="las la-desktop"></i>
                                    </div>
                                </div>
                                <div class="media-support-info ml-3">
                                    <h5>Google Ads</h5>
                                    <p class="mb-0 font-size-14">Premium Performance</p>
                                </div>
                                <div class="iq-card-header-toolbar d-flex align-items-center">
                                    <h4>32423</h4>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="col-lg-8 col-md-6">
                <div class="card card-block card-stretch card-height">
                    <div class="card-header border-none">
                        <div class="header-title">
                            <h4 class="card-title">Statistics ( Last 7 days)</h4>
                        </div>
                    </div>
                    <div class="card-body">
                        <ApexChart element="layout-3-chart-03" :chartOption="chart1" />
                        <!-- <div id="layout-3-chart-03">
                        </div> -->
                    </div>
                </div>
            </div>
            <div class="col-lg-8">
                <div class="card card-block card-stretch card-height">
                    <div class="card-header border-none">
                        <div class="header-title">
                            <h4 class="card-title">Target Population for you brand</h4>
                        </div>
                    </div>
                    <div class="card-body">
                        <div class="table-responsive">
                            <table class="table mb-0 table-borderless">
                                <thead>
                                    <tr>
                                        <th scope="col">Target Population</th>
                                        <th scope="col">Visitor</th>
                                        <th scope="col">Potential</th>
                                        <th scope="col">Actual</th>
                                        <th scope="col">Reached%</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><span>Man aged between<b> 18-24</b></span></td>
                                        <td>45,332</td>
                                        <td>25,500-32,000</td>
                                        <td>36,070</td>
                                        <td>
                                            <div class="btn btn-primary">42.12% <i class="ri-arrow-up-fill"></i></div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><span>Man aged between<b> 25-34</b></span> </td>
                                        <td>13,830</td>
                                        <td>32,500-37,000</td>
                                        <td>39,970</td>
                                        <td>
                                            <div class="btn btn-danger">12.93% <i class="ri-arrow-down-line"></i></div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><span>Man aged between<b>35-44</b></span></td>
                                        <td>95,98</td>
                                        <td>37,500-43,000</td>
                                        <td>46,990</td>
                                        <td>
                                            <div class="btn btn-danger">02.76% <i class="ri-arrow-down-line"></i></div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><span>Man aged between<b> 44-60</b></span></td>
                                        <td>58,732</td>
                                        <td>44,500-49,000</td>
                                        <td>50,555</td>
                                        <td>
                                            <div class="btn btn-primary">82.12% <i class="ri-arrow-up-fill"></i></div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><span>Man aged between<b> 60+</b></span></td>
                                        <td>95,332</td>
                                        <td>51,500-59,790</td>
                                        <td>61,786</td>
                                        <td>
                                            <div class="btn btn-primary">92.41% <i class="ri-arrow-up-fill"></i></div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-4">
                <div class="card card-block card-stretch card-height">
                    <div class="card-header border-none">
                        <div class="header-title">
                            <h4 class="card-title">Media Values</h4>
                        </div>
                    </div>
                    <div class="card-body">
                          <ApexChart element="layout-3-chart-04" :chartOption="chart2" />
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import ApexChart from '../../../components/charts/ApexChart'
import AmChart from '../../../components/charts/AmChart'
import HighChart from '../../../components/charts/HighChart'
export default {
    name:'Dashbord2',
    components:{
        ApexChart,
        HighChart,
        AmChart
    },
    data(){
        return{
            chart1:{
                series: [{
        name: 'Frauds',
        data: [53, 55, 45, 40, 40, 28, 35, 25, 2]
      }, {
          name: 'Paid Clicks',
        data: [63, 62, 52, 72, 55, 80, 70, 50, 60]
      }, {
          name: 'Total Clicks',
        data: [150, 135, 144, 115, 120, 114, 133, 124, 100]
      }],
      colors: ['#05bbc9', '#ffca44', '#876cfe'],
      labels: ['20 Feb', '21 Feb', '22 Feb', '23 Feb', '24 Feb', '25 Feb', '25 Feb', '26 Feb', '27 Feb', '28 Feb' ],
      chart: {
        type: 'bar',
        height: 330,
        stacked: true,
        zoom: {
          enabled: true
        }
      },
      responsive: [{
        breakpoint: 480,
        options: {
          legend: {
            position: 'bottom',
            offsetX: -10,
            offsetY: 0
          }
        }
      }],
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '12%',
          endingShape: 'rounded'
        },
      },
      xaxis: {
        show: true
        
      },
      yaxis: {
        show: true,
        labels: {
          minWidth: 20,
          maxWidth: 20
        }
      },
      legend: {
        position: 'bottom',
        offsetX: 0,
        offsetY: -10

      },
      fill: {
        opacity: 1
      },
      dataLabels: {
        enabled: false
      }
            },
            chart2:{
      series: [86, 40, 53, 63],
      chart: {
        height: 350,
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
                // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
                return 249
              }
            }
          }
        }
      },
      colors: ['#876cfe', '#4788ff', '#ffca44', '#fe721c'],
      labels: ['Picture view', 'Comments', 'Video plays', 'Impressions'],
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
      colors: ["#876cfe", "#05bbc9"],
      series: [{
        name: 'Brands',
        colorByPoint: true,
        data: [{
          name: 'Man : 3,272978',
          y: 80,
          sliced: true,
          selected: true
        }, {
            name: 'Woman : 83,272978',
          y: 30
        }]
      }] 
            }
        }
    }
}
</script>