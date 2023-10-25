<template>
   <section class="login-content">
      <div class="container h-100">
         <div class="row align-items-center justify-content-center h-100">
            <div class="col-12">
               <div class="row align-items-center">
                  <div class="col-lg-6">
                     <h2 class="mb-2">Iniciar Sesión</h2>
                     <!-- <p>To Keep connected with us please login with your personal info.</p> -->
                     <form class="needs-validation">
                        <div class="row">
                           <div class="col-lg-12">
                              <div class="floating-label form-group">
                                 <input v-model="email" @input="$v.email.$touch()" @blur="$v.email.$touch()"
                                    :class="`floating-input form-control ${$v.email.$error ? 'is-invalid' : ''}`"
                                    type="email" placeholder=" ">
                                 <label>Email</label>
                                 <div class="invalid-feedback">
                                    Porfavor ingrese un email válido.
                                 </div>
                              </div>
                           </div>
                           <div class="col-lg-12">
                              <div class="floating-label form-group">
                                 <input v-model="password" @input="$v.password.$touch()" @blur="$v.password.$touch()"
                                    :class="`floating-input form-control ${$v.password.$error ? 'is-invalid' : ''}`"
                                    type="password" placeholder=" ">
                                 <label>Password</label>
                                 <div class="invalid-feedback">
                                    El password no puede estar vacío.
                                 </div>
                              </div>
                           </div>
                           <div class="col-lg-6">
                              <div class="custom-control custom-checkbox mb-3">
                                 <input type="checkbox" class="custom-control-input" id="customCheck1">
                                 <label class="custom-control-label" for="customCheck1">Remember Me</label>
                              </div>
                           </div>
                           <div class="col-lg-6">
                              <a href="auth-recoverpw.html" class="text-primary float-right">Olvidaste tu contraseña?</a>
                           </div>
                        </div>

                        <button type="button" class="btn btn-primary" @click="handleLogin" :disabled="isLoading">
                           <PulseLoader :loading="loading" color="white" :size="size" v-if="isLoading" />
                           <span v-else>Ingresar</span>
                        </button>
                        <b-toast visible static no-auto-hide no-close-button>
                        </b-toast>

                        <p class="mt-3">
                           Create an Account <a href="auth-sign-up.html" class="text-primary">Sign Up</a>
                        </p>
                     </form>
                  </div>
                  <div class="col-lg-6 mb-lg-0 mb-4 mt-lg-0 mt-4 bg-primary" style="height: 100%;">
                     <img src="@/assets/images/login/01.png" class="img-fluid w-80" alt="">
                  </div>
               </div>
            </div>
         </div>
      </div>
   </section>
</template>
<script>
import { validationMixin } from 'vuelidate'
import { required, email } from 'vuelidate/lib/validators'
import { urlLocal } from '../../../config/rutas';
import { mapActions } from 'vuex';
import { BToast } from 'bootstrap-vue';
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'




export default {
   name: 'SignIn',
   mixins: [validationMixin],
   validations: {
      email: { required, email },
      password: { required }
   },
   components: {
      'b-toast': BToast,
      PulseLoader,
   },
   data() {
      return {
         email: '',
         password: '',
         url: urlLocal,
         isLoading: false,
      }
   },
   methods: {
      ...mapActions(['saveToken']),
      handleLogin() {
         this.isLoading = true;
         this.fetchData();
      },
      fetchData() {
         this.$v.$touch();
         if (this.$v.$invalid) {
            this.isLoading = false;
            return;
         }
         const url = urlLocal + '/login';
         const requestBody = {
            email: this.email,
            password: this.password,
         };
         const requestOptions = {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestBody),
         };
         fetch(url, requestOptions)
            .then(response => response.json())
            .then(data => {
               this.isLoading = false;
               if (data.login == true) {
                  const token = data.token;
                  this.saveToken(token);
                  this.$bvToast.toast(`Accesso correcto`, {
                     title: 'Bienvenido!',
                     autoHideDelay: 500,
                     variant: 'primary',
                     toastClass: 'my-toast',
                     toaster: 'b-toaster-bottom-left',
                     headerClass: 'bg-success text-white',
                     bodyClass: 'bg-white text-dark',
                  })
                  this.$store.commit('auth/setToken', token);
                  this.$router.push({ name: 'metricas', meta: { requiresAuth: true } });
                  /* this.$router.push({ name: 'Dashboard' }); */


               } else {
                  this.$bvToast.toast(`No se reconocen los credenciales`, {
                     title: 'ERROR',
                     autoHideDelay: 500,
                     variant: 'primary',
                     toastClass: 'my-toast',
                     toaster: 'b-toaster-bottom-left',
                     headerClass: 'bg-danger text-white',
                     bodyClass: 'bg-white text-dark',
                  })

               }
               // Aquí puedes realizar acciones con la respuesta del servidor
            })
            .catch(error => {
               this.isLoading = false;
               console.error(error);
               this.$bvToast.toast(`Reintente nuevamente`, {
                  title: 'ERROR',
                  autoHideDelay: 500,
                  variant: 'primary',
                  toastClass: 'my-toast',
                  toaster: 'b-toaster-bottom-left',
                  headerClass: 'bg-danger text-white',
                  bodyClass: 'bg-white text-dark',
               })

            });
      },
      checkForm(event) {
         event.preventDefault();
         event.target.classList.add('was-validated');
      }
      
   },
};
</script>
<style>
.my-toast {
   max-width: 350px;
   border-radius: 8px;
   box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.15);
}

.my-toast .toast-header {
   padding: 8px;
   border-bottom: none;
}

.my-toast .toast-header .mr-auto {
   font-weight: bold;
}

.my-toast .toast-body {
   padding: 10px;
}
</style>