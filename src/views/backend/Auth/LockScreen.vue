<template>
   <section class="login-content">
         <div class="container h-100">
            <div class="row align-items-center justify-content-center h-100">
               <div class="col-12">
                  <div class="row align-items-center">
                     <div class="col-lg-6">
                        <img src="@/assets/images/user/1.jpg" class="rounded avatar-80 mb-3" alt="">
                        <h2 class="mb-2">Hi ! Barry Tech</h2>
                        <p>Enter your password to access the admin.</p>
                        <form>
                           <div class="row">
                              <div class="col-lg-12">
                                 <div class="floating-label form-group">
                                    <input class="floating-input form-control" type="password" placeholder=" ">
                                    <label>Password</label>
                                 </div>
                              </div>
                           </div>
                           <button type="submit" class="btn btn-primary">Login</button>
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
    name:'LockScreen'
}
</script>