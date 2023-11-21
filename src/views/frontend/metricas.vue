<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-lg-12 mb-3 text-center">
                <div class="d-flex align-items-center justify-content-between welcome-content text-center">
                    <div class="navbar-breadcrumb text-center">
                        <h4 class="mb-0 text-center">Mis Datos</h4>
                    </div>                   
                </div>
            </div>

            <div class="col-lg-12">
                <div class="row justify-content-center pt-4">                         
                    <div class="col-md-7 col-12">                             
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">Datos Personales</h5>
                                <div class="container-fluid" > 
                                       
                                    <form  @submit.prevent="enviarFormulario">
                                        <div class="form-group">
                                            <label for="exampleInputEmail1">Nombre de enlace de la tarjeta</label>
                                            <input type="text" class="form-control" maxlength="30"  v-model="nombreEnlace" id=""   placeholder="usuarioMaximo">
                                            <small id="" v-if="errorNombre"  class=" text-danger">Debe de llenar este campo para actualizar </small>
                                        </div>
                                        <div class="form-group">
                                            <label for="exampleInputPassword1">Telefono</label>
                                            <input type="number"  v-model="telefono"   class="form-control" id="" placeholder="Ingrese un numero valido">
                                            <small id="" v-if="errorTelefono"  class="  text-danger">Debe de llenar este campo para actualizar </small>
                                        </div>                    
                                        <PulseLoader :loading="loading" color="white" :size="size" v-if="isLoading" />                     
                                        <button type="submit" class="btn btn-success float-left">Actualizar</button>
                                        <button  type="button" class="btn btn-secondary float-right">Cancelar</button>
                                        <b-toast visible static no-auto-hide no-close-button>
                                        </b-toast>
                                    
                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-7 col-12">                             
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">Comparte tu Tarjeta</h5>
                                <div class="container-fluid row" > 
                                    <div class="col-md-4 col-6" > 
                                        <div class="row">
                                            <div class="col-md-12 d-flex mx-auto justify-content-center align-items-center">
                                                <img  :src="imagen" alt="Imagen centrada" class="img-fluid mx-auto">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-8 col-12  mb-3 justify-content-center align-items-center">
                                        <label for="validationCustomUsername">  Encale de la tarjeta </label>
                                        <div class="input-group">                                            
                                            <input type="text" v-model="enlace"  class="form-control" id="validationCustomUsername"  aria-describedby="inputGroupPrepend" required>
                                            <div class="input-group-prepend">
                                            <span class="input-group-text" id="inputGroupPrepend">COPY</span>
                                            </div>
                                        </div>
                                    </div>                                   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>                 
            </div>         


        </div>

    </div>
</template>
<script>


import RedService from '../../config/servicios';
import { BToast } from 'bootstrap-vue';

export default {
    name: 'Dashbord1',
    props:[''],
    components: {     
        'b-toast': BToast,
   },
    data() {
        return {           
            nombreEnlace:'',
            telefono:'',
            errorNombre:false,
            errorTelefono:false,
            isLoading: false,
            enlace:'',
            imagen:'',
            idUsuario:1,
        }
    },
    mounted(){
      this.imagen = require('@/img/qr.jpg') 
      this.obtenerInformacionCliente()
    },
    methods:{
        enviarFormulario(){
            this.errorNombre=false;
            this.errorTelefono = false
            if (this.formularioValido()) {
                 this.enviarPeticion()
            }else{                
                if(this.nombreEnlace.trim().length <= 0) {
                    this.errorNombre=true;
                } 
                if(this.telefono.trim().length <= 0) {
                    this.errorTelefono = true
                } 
            }
        },
        formularioValido(){
            return this.nombreEnlace.trim() !== '' && this.telefono.toString().trim() !== '';
        },
        async enviarPeticion()
        {
            try {                
                let profileData = await RedService.updateDataProfileBasic(this.idUsuario,this.nombreEnlace,this.telefono ) ;              
                if(profileData.success){
                    this.nombreEnlace = profileData.content.enlace_tarjeta_cliente;
                    this.telefono = profileData.content.telefono;
                    this.verPopUpOok('Datos actualizados correctamente.')
                }else{
                    this.verPopUpError('Error al actualizar los datos')
                }               
            } catch (error) {              
                this.verPopUpError('Error fetching social media data:', error);
            } 
        },
        verPopUpOok(mensaje){
            this.$bvToast.toast( mensaje, {
                     title: 'Informacion',
                     autoHideDelay: 500,
                     variant: 'primary',
                     toastClass: 'my-toast',
                     toaster: 'b-toaster-bottom-left',
                     headerClass: 'bg-success text-white',
                     bodyClass: 'bg-white text-dark',
                  })
        },
        verPopUpError(mensaje){
            this.$bvToast.toast(mensaje, {
                     title: 'ERROR',
                     autoHideDelay: 500,
                     variant: 'primary',
                     toastClass: 'my-toast',
                     toaster: 'b-toaster-bottom-left',
                     headerClass: 'bg-danger text-white',
                     bodyClass: 'bg-white text-dark',
                  })
        },
        async obtenerInformacionCliente(){
            try {                
                let profileData = await RedService.getAllDataProfileAdvance(this.idUsuario);              
                this.nombreEnlace = profileData.datos_personales.enlace_tarjeta_cliente;
                this.telefono = profileData.datos_personales.telefono;
                 
            } catch (error) {              
                console.error('Error fetching social media data:', error);
            } 
        }
    }
}
</script>