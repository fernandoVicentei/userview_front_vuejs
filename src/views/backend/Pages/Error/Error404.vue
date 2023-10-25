<template>
   <div class="container">
      <b-row class=" no-gutters height-self-center">
         <b-col sm="12" class=" text-center align-self-center">
            <div class="iq-error position-relative">
               <img src="../../../../assets/images/error/404.png" class="img-fluid iq-error-img" alt="">
               <h2 class="mb-0 mt-4">Oops! Esta página no existe.</h2>

               <router-link to="/" class="btn btn-primary d-inline-flex align-items-center mt-3">
                  <i class="ri-home-4-line"></i> Volver a la página de inicio
               </router-link>
            </div>
         </b-col>
      </b-row>
   </div>
</template>
<script>
export default {
   name: 'Error404'
}
</script>