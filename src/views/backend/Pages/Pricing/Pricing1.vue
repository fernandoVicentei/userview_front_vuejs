<template>
     <div class="container-fluid">
         <b-row >
            <b-col sm="12" >
               <card>
                  <template v-slot:body>
                     <div class="table-responsive pricing pt-2">
                        <table id="my-table" class="table">
                           <thead>
                              <tr>
                                 <th class="text-center prc-wrap"></th>
                                 <th class="text-center prc-wrap">
                                    <div :class="`prc-box ${pricingClass == 'Basic' ? 'active':''}`" @click="chnage('Basic')">
                                       <div class="h3 pt-4">$19<small> / Per month</small>
                                       </div> <span class="type">Basic</span>
                                    </div>
                                 </th>
                                 <th class="text-center prc-wrap">
                                    <div :class="`prc-box ${pricingClass == 'Standard' ? 'active':''}`" @click="chnage('Standard')" >
                                       <div class="h3 pt-4">$39<small> / Per month</small>
                                       </div> <span class="type">Standard</span>
                                    </div>
                                 </th>
                                 <th class="text-center prc-wrap">
                                    <div :class="`prc-box ${pricingClass == 'platinum' ? 'active':''}`" @click="chnage('platinum')">
                                       <div class="h3 pt-4">$119<small> / Per month</small>
                                       </div> <span class="type">Platinum</span>
                                    </div>
                                 </th>
                                 <th class="text-center prc-wrap">
                                    <div :class="`prc-box ${pricingClass == 'Premium' ? 'active':''}`" @click="chnage('Premium')">
                                       <div class="h3 pt-4">$219<small> / Per month</small>
                                       </div> <span class="type">Premium</span>
                                    </div>
                                 </th>
                              </tr>
                           </thead>
                           <tbody>
                              <tr v-for="(table ,index) in tables" :key="index">
                                 <th class="text-center" scope="row">{{table.name}}</th>
                                 <td :class="`text-center child-cell ${pricingClass == 'Basic' ? 'active':''}`" v-html="table.icon">
                                 </td>
                                 <td :class="`text-center child-cell ${pricingClass == 'Standard' ? 'active':''}`" v-html="table.icon1">
                                 </td>
                                 <td :class="`text-center child-cell ${pricingClass == 'platinum' ? 'active':''}`" v-html="table.icon2">
                                 </td>
                                 <td :class="`text-center child-cell ${pricingClass == 'Premium' ? 'active':''}`" v-html="table.icon3">
                                 </td>
                              </tr>
                              <!-- <tr>
                                 <th class="text-center" scope="row">Streamit Special</th>
                                 <td class="text-center child-cell"><i class="ri-close-line i_close"></i>
                                 </td>
                                 <td class="text-center child-cell active"><i class="ri-check-line ri-2x"></i>
                                 </td>
                                 <td class="text-center child-cell"><i class="ri-check-line ri-2x"></i>
                                 </td>
                                 <td class="text-center child-cell"><i class="ri-check-line ri-2x"></i>
                                 </td>
                              </tr> -->
                              <!-- <tr>
                                 <th class="text-center" scope="row">American Tv Shows</th>
                                 <td class="text-center child-cell"><i class="ri-close-line i_close"></i>
                                 </td>
                                 <td class="text-center child-cell active"><i class="ri-check-line ri-2x"></i>
                                 </td>
                                 <td class="text-center child-cell"><i class="ri-check-line ri-2x"></i>
                                 </td>
                                 <td class="text-center child-cell"><i class="ri-check-line ri-2x"></i>
                                 </td>
                              </tr> -->
                              <!-- <tr>
                                 <th class="text-center" scope="row">Hollywood Movies</th>
                                 <td class="text-center child-cell"><i class="ri-check-line ri-2x"></i>
                                 </td>
                                 <td class="text-center child-cell active"><i class="ri-check-line ri-2x"></i>
                                 </td>
                                 <td class="text-center child-cell"><i class="ri-check-line ri-2x"></i>
                                 </td>
                                 <td class="text-center child-cell"><i class="ri-check-line ri-2x"></i>
                                 </td>
                              </tr> -->
                              <!-- <tr>
                                 <th class="text-center" scope="row">Video Quality</th>
                                 <td class="text-center child-cell">SD (480p)</td>
                                 <td class="text-center child-cell active">HD (720p)</td>
                                 <td class="text-center child-cell">FHD (1080p)</td>
                                 <td class="text-center child-cell">FHD (1080p)</td>
                              </tr> -->
                              <!-- <tr>
                                 <th class="text-center" scope="row">Ad Free Entertainment</th>
                                 <td class="text-center child-cell"><i class="ri-close-line i_close"></i>
                                 </td>
                                 <td class="text-center child-cell active"><i class="ri-close-line i_close"></i>
                                 </td>
                                 <td class="text-center child-cell"><i class="ri-check-line ri-2x"></i>
                                 </td>
                                 <td class="text-center child-cell"><i class="ri-check-line ri-2x"></i>
                                 </td>
                              </tr> -->
                              <tr>
                                 <td class="text-center"><i class="ri-close-line i_close"></i>
                                 </td>
                                 <td class="text-center"> <a href="#" class="btn btn-primary mt-3">Purchase</a>
                                 </td>
                                 <td class="text-center"> <a href="#" class="btn btn-primary mt-3">Purchase</a>
                                 </td>
                                 <td class="text-center"> <a href="#" class="btn btn-primary mt-3">Purchase</a>
                                 </td>
                                 <td class="text-center"> <a href="#" class="btn btn-primary mt-3">Purchase</a>
                                 </td>
                              </tr>
                           </tbody>
                        </table>
                     </div>
                  </template>
               </card>
            </b-col>
         </b-row>
      </div>
</template>
<script>
export default {
    name:'Pricing1',
    data(){
       return{
           pricingClass:'standard',
          tables:[
             {
                name:'New Movies',
                icon:'<i class="ri-check-line ri-2x"></i>',
                icon1:'<i class="ri-check-line ri-2x"></i>',
                icon2:'<i class="ri-check-line ri-2x"></i>',
                icon3:'<i class="ri-check-line ri-2x"></i>',           
              },
              {
                name:'Streamit Special',
                icon:'<i class="ri-close-line i_close"></i>',
                icon1:'<i class="ri-check-line ri-2x"></i>',
                icon2:'<i class="ri-check-line ri-2x"></i>',
                icon3:'<i class="ri-check-line ri-2x"></i>',           
              },
               {
                name:'American Tv Shows',
                icon:'<i class="ri-close-line i_close"></i>',
                icon1:'<i class="ri-check-line ri-2x"></i>',
                icon2:'<i class="ri-check-line ri-2x"></i>',
                icon3:'<i class="ri-check-line ri-2x"></i>',           
              },
               {
                name:'Hollywood Movies',
                icon:'<i class="ri-check-line ri-2x"></i>',
                icon1:'<i class="ri-check-line ri-2x"></i>',
                icon2:'<i class="ri-check-line ri-2x"></i>',
                icon3:'<i class="ri-check-line ri-2x"></i>',           
              },
               {
                name:'Video Quality',
                icon:'SD (480p)',
                icon1:'HD (720p)',
                icon2:'FHD (1080p)',
                icon3:'FHD (1080p)',           
              },
              {
                name:'Hollywood Movies',
                icon:'<i class="ri-close-line i_close"></i>',
                icon1:'<i class="ri-close-line i_close"></i>',
                icon2:'<i class="ri-check-line ri-2x"></i>',
                icon3:'<i class="ri-check-line ri-2x"></i>',           
              }
          ]
       }
    },
    methods: {
    chnage (value) {
      this.pricingClass = value
    },
  }

}
</script>