<template>
   <section class="login-content">
         <div class="container h-100">
            <div class="row align-items-center justify-content-center h-100">
               <div class="col-12">
                  <div class="row align-items-center">
                     <div class="col-lg-6">
                        <h2 class="mb-2">Sign Up</h2>
                        <p>Enter your personal details and start journey with us.</p>
                        <form>
                           <div class="row">
                              <div class="col-lg-6">
                                 <div class="floating-label form-group">
                                    <input class="floating-input form-control" type="text" placeholder=" ">
                                    <label>Full Name</label>
                                 </div>
                              </div>
                              <div class="col-lg-6">
                                 <div class="floating-label form-group">
                                    <input class="floating-input form-control" type="text" placeholder=" ">
                                    <label>Last Name</label>
                                 </div>
                              </div>
                              <div class="col-lg-6">
                                 <div class="floating-label form-group">
                                    <input class="floating-input form-control" type="email" placeholder=" ">
                                    <label>Email</label>
                                 </div>
                              </div>
                              <div class="col-lg-6">
                                 <div class="floating-label form-group">
                                    <input class="floating-input form-control" type="text" placeholder=" ">
                                    <label>Phone No.</label>
                                 </div>
                              </div>
                              <div class="col-lg-6">
                                 <div class="floating-label form-group">
                                    <input class="floating-input form-control" type="password" placeholder=" ">
                                    <label>Password</label>
                                 </div>
                              </div>
                              <div class="col-lg-6">
                                 <div class="floating-label form-group">
                                    <input class="floating-input form-control" type="password" placeholder=" ">
                                    <label>Confirm Password</label>
                                 </div>
                              </div>
                              <div class="col-lg-12">
                                 <div class="custom-control custom-checkbox mb-3">
                                    <input type="checkbox" class="custom-control-input" id="customCheck1">
                                    <label class="custom-control-label" for="customCheck1">I agree with the terms of use</label>
                                 </div>
                              </div>
                           </div>
                           <button type="submit" class="btn btn-primary">Sign Up</button>
                           <p class="mt-3">
                              Already have an Account <a href="auth-sign-in.html" class="text-primary">Sign In</a>
                           </p>
                        </form>
                     </div>
                     <div class="col-lg-6 mb-lg-0 mb-4 mt-lg-0 mt-4">
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
    name:'SignUp'
}
</script>