<template>
     <section class="login-content">
         <div class="container h-100">
            <div class="row align-items-center justify-content-center h-100">
               <div class="col-12">
                  <div class="row align-items-center">
                     <div class="col-lg-6">
                        <h2 class="mb-2">Reset Password</h2>
                        <p>Enter your email address and we'll send you an email with instructions to reset your password.</p>
                        <form>
                           <div class="row">
                              <div class="col-lg-12">
                                 <div class="floating-label form-group">
                                    <input class="floating-input form-control" type="email" placeholder=" ">
                                    <label>Email</label>
                                 </div>
                              </div>
                           </div>
                           <button type="submit" class="btn btn-primary">Reset</button>
                        </form>
                     </div>
                     <div class="col-lg-6 rmb-30">
                        <img src="@/assets/images/login/01.png" class="img-fluid w-80" alt="">
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
</template>
<script>
export default {
    name:'RecoverPassword'
}
</script>