<template>
    <section class="login-content">
         <div class="container-fluid h-100">
            <div class="row align-items-center justify-content-center h-100">
               <div class="col-12">
                  <div class="row align-items-center">
                     <div class="col-lg-6 rmb-30">
                        <img src="@/assets/images/login/01.png" class="img-fluid w-80" alt="">
                     </div>
                     <div class="col-lg-6">
                        <img src="@/assets/images/login/mail.png" class="img-fluid" width="80" alt="">
                        <h2 class="mt-3 mb-0">Success !</h2>
                        <p class="cnf-mail mb-1">A email has been send to youremail@domain.com. Please check for an
                           email from company and click
                           on the included link to reset your password.</p>
                        <div class="d-inline-block w-100">
                           <button type="submit" class="btn btn-primary mt-3">Back to Home</button>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
</template>
<script>
export default {
    name:'ConfirmMail'
}
</script>