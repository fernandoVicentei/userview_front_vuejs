<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-lg-12 mb-3">
                <div class="d-flex align-items-center justify-content-between welcome-content">
                    <div class="navbar-breadcrumb">
                        <h4 class="mb-0">Editar mis Datos</h4>
                    </div>
                                         
                </div>
            </div>
            <div class="col-lg-12">
                <div class="row  pt-1">                         
                    <div class="col-md-7 col-12">                             
                        <div class="card p-1 pt-3 pb-3 border border-1 border-secondary">
                            <div class="card-body p-2">
                                <h5 class="card-title">Informacion Personal</h5>
                                <div class="container-fluid p-2" >                                        
                                    <form  @submit.prevent="enviarFormularioRegistro">
                                        <div class="form-group">
                                            <label for="exampleInputEmail1">Nombre Completo*</label>
                                            <input type="text" class="form-control" maxlength="30"  v-model="nombre" id=""   placeholder="Ingrese su nombre completo">
                                            <small id="" v-if="errorNombre"  class=" text-danger">Debe de llenar este campo para actualizar </small>
                                        </div>
                                        <div class="form-group">
                                            <label for="exampleInputPassword1">Cargo (Ocupacion)*</label>
                                            <input type="text"  v-model="cargo" maxlength="50" class="form-control" id="" placeholder="Ingrese su cargo actual">
                                            <small id="" v-if="errorCargo"  class="  text-danger">Debe de llenar este campo para actualizar </small>
                                        </div>    
                                        <div class="form-group">
                                            <label for="exampleInputPassword1">Descripcion (Personal o profesional)*</label>
                                            <textarea class="form-control" rows="1" v-model="descripcion" >
                                            </textarea>
                                            <small id="" v-if="errorDescripcion"  class="  text-danger">Debe de llenar este campo para actualizar </small>
                                        </div> 
                                        <div class="form-group">
                                            <label for="exampleInputPassword1">Color (Thema para tu perfil)</label>
                                            <input type="color" 
                                                    v-model="color"
                                                    class="form-control" 
                                                    id="colorPicker" name="colorPicker">
                                        </div>                    
                                        <PulseLoader :loading="loading" color="white" :size="size" v-if="isLoading" />                     
                                        <button type="submit" class="btn btn-success float-left">Actualizar</button>                                       
                                        <b-toast visible static no-auto-hide no-close-button>
                                        </b-toast>                                    
                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-7 col-12" > 
                        <div class="card p-1 pt-3 pb-3 border border-1 border-secondary">
                            <div class="card-body p-2">
                                <h5 class="card-title">Representacion</h5>
                                <div class="container-fluid p-2" >       
                                    <div class="row justify-content-center pt-4">  
                                        <div class="col-md-5 col-6 text-center" >
                                            <h6>Retrato</h6>
                                            <input type="file" class="d-none"  ref="fileInput" accept="image/x-png,image/jpeg" @change="cargarImagen"  >
                                            <img :src="icono" alt=""   class="border-50 border "  width="80%" height="200px" @click="openFileInput" >                                            
                                        </div>
                                        <div class="col-md-5 col-6 text-center" >
                                            <h6>Portada</h6>
                                            <input type="file" class="d-none"  ref="fileInputPortada" accept="image/x-png,image/jpeg" @change="cargarImagenPortada"  >
                                            <img :src="fondo" alt="" width="100%" height="200px" @click="openFileInputPortada"  >                                            
                                        </div>
                                    </div>   
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-7 col-12" > 
                        <div class="card p-1 pt-3 pb-3 border border-1 border-secondary">
                            <div class="card-body p-2">
                                <h5 class="card-title">Mis Redes Sociales</h5>
                                <div class="container-fluid p-2" >       
                                    <div class="row  p-3"> 

                                        <div class="col-md-3 col-4 text-center fondo-card  " 
                                            v-for="red in listaMisRedes" :key="red.id"
                                        >
                                            <div class=" row p-2" >
                                                <div class="col-12 col-md-12" >
                                                    <img :src="rutaIcono+''+red.icono" alt="" width="70%"    class="img-thumbnail">    
                                                </div>
                                                <div class="col-12 col-md-12 text-center" >
                                                    <strong>{{ red.nombre }}</strong>    
                                                </div>
                                                <div class="col-4  p-0" > 
                                                    <button type="button"  @click="verEditarRedSocial(red.id)" class="btn bg-warning m-0">
                                                        <i class="fas fa-edit "></i>
                                                    </button>
                                                </div>
                                                <div class="col-4   p-0" > 
                                                    <button type="button" @click="verRedSocial(red.id)" class="btn bg-primary m-0">
                                                        <i class="fas fa-eye"></i>
                                                    </button>
                                                </div>
                                                <div class="col-4   p-0" > 
                                                    <button type="button"  @click="eliminarRedSocial(red.id)" class="btn bg-danger m-0">                                                       
                                                        <i class="fas fa-trash"></i>
                                                    </button>
                                                </div>                                                
                                            </div>                                            
                                        </div>                                                                               
                                    </div>   
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-7 col-12" > 
                        <div class="card p-1 pt-3 pb-3 border border-1 border-secondary">
                            <div class="card-body p-2">
                                <h5 class="card-title">Mas Redes</h5>
                                <div class="container-fluid p-2" >       
                                    <div class="row  p-3">     
                                        <div  v-for="(redes, categoria) in listaRedesSociales" :key="categoria" class="col-12 row" >                                       
                                            <div class="col-12 col-md-12 mb-1 p-0"> 
                                                <strong>{{ categoria }}</strong>
                                            </div>                                        
                                            <div class="col-md-3 col-4 text-center  " 
                                                v-for="redSocial in redes" :key="redSocial.id"   @click="nuevaRedSocial(redSocial.nombre,redSocial.id)" >
                                                <div class=" row p-2 fondo-card  " >
                                                    <div class="col-12 col-md-12" >
                                                        <img :src="rutaIcono+''+redSocial.icono" alt="" width="70%"    class="img-thumbnail">    
                                                    </div>
                                                    <div class="col-12 col-md-12 text-center"  @copy.prevent>
                                                        <strong>{{ redSocial.nombre }}</strong>    
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
        </div>

        <div>
            <b-modal v-model="verModal" :title="tituloModal" hide-footer >
                <form  @submit.prevent="enviarFormulario">
                    <div class="form-group">
                        <label for="exampleInputEmail1">Red Social</label>
                        <input type="text" class="form-control"  v-model="nombreRed" disabled    >                         
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Enlace de Perfil </label>
                        <input type="text"  v-model="enlace"   class="form-control"  placeholder="http://mi-red-social-/123">
                        <small id="" v-if="errorEnlace"  class="  text-danger">Debe de llenar este campo para finalizar el proceso </small>
                    </div>                             
                    <button type="submit" class="btn btn-success float-left">Guardar</button>
                    <button  type="button" class="btn btn-secondary float-right" @click="cerrarModal" >Cancelar</button>
                </form>                 
            </b-modal>
        </div>

        <div>
           <!--  <b-button v-b-modal.modal-1>Launch demo modal</b-button> -->
            <b-modal v-model="verModalEliminar" title="Informacion" hide-footer >
                <div class="" > 
                    <strong>¿ Esta seguro de quitar esta red social ? </strong><br><br>
                    <button type="submit" class="btn btn-success float-left" @click="eliminarRed" >Confirmar</button>
                    <button  type="button" class="btn btn-secondary float-right" @click="cerrarModalEliminar" >Cancelar</button>    
                </div>           
            </b-modal>
        </div>

        <div>
           <!--  <b-button v-b-modal.modal-1>Launch demo modal</b-button> -->
            <b-modal v-model="verModalFoto" title="Informacion" hide-footer >
                <div class="" > 
                    <strong>Desea guardar establecer como perfil la siguiente fotografia ? </strong><br><br>
                    <div class="text-center" >
                        <img :src="iconoPerfil"  class="img-thumbnail" width="50%"  >
                    </div>
                    <button type="submit" class="btn btn-success float-left" @click="guardarFotoPerfil" >Guardar</button>
                    <button  type="button" class="btn btn-secondary float-right" @click="cerrarModalFoto" >Cancelar</button>    
                </div>           
            </b-modal>
        </div>

        <div>
           <!--  <b-button v-b-modal.modal-1>Launch demo modal</b-button> -->
            <b-modal v-model="verModalPortada" title="Informacion" hide-footer >
                <div class="" > 
                    <strong>Desea guardar establecer como portada la siguiente fotografia ? </strong><br><br>
                    <div class="text-center" >
                        <img :src="iconoPerfil"  class="" width="80%" height="300px" >
                    </div>
                    <button type="submit" class="btn btn-success float-left" @click="guardarFotoPortada" >Guardar</button>
                    <button  type="button" class="btn btn-secondary float-right" @click="cerrarModalFotoPortada" >Cancelar</button>    
                </div>           
            </b-modal>
        </div>

    </div>
    
</template>
<script>

import RedService from '../../config/servicios';
import { urlLocalImages } from '../../config/rutas';

import { BToast } from 'bootstrap-vue';
export default {
    name: 'Editar',     
    components: {
      'b-toast': BToast,
   },
    data() {
        return {           
            errorNombre:false,
            errorCargo:false,
            errorDescripcion:false,
            nombre:'',
            descripcion:'',
            prueba:'',
            cargo:'',
            isLoading:false, 
            icono:'',
            fondo:'',
            verModal:false,
            tituloModal:'Mi Red Social',
            enlace:'',
            errorEnlace:false,
            verModalEliminar:false,
            listaRedesSociales:[],
            carpetaImg:'fotos_redsocial',
            rutaIcono:'',
            nombreRed:'',
            idRed:0,
            listaMisRedes:[],
            idUsuario:1,
            color:'#000000',
            dataPerfil:'',
            verModalFoto:false,
            verModalPortada: false,
            iconoPerfil:''
        }
    },
    mounted(){
        this.icono = require('@/img/user.png'); 
        this.fondo = require('@/img/fondo.png'); 
        this.obtenerRedesSociales()
        this.obtenerInformacionCliente()
        this.rutaIcono = urlLocalImages+'fotos_redsocial/'
    },
    methods:{
        openFileInput() {
            // Activar el input de tipo file al hacer clic en la imagen 
            this.$refs.fileInput.click();
        },
        openFileInputPortada() {
            // Activar el input de tipo file al hacer clic en la imagen 
            this.$refs.fileInputPortada.click();
        },
        cargarImagen(event) {
            const fileInput = this.$refs.fileInput;
            const file = event.target.files[0];
            this.dataPerfil = file
            if (file) {
                const reader = new FileReader();
                reader.onload = () => {
                //this.icono = reader.result;
                this.iconoPerfil = reader.result
                };
                reader.readAsDataURL(file);
                fileInput.value = '';
                this.verModalFoto = true
            }
        },
        cargarImagenPortada(event) {
            const fileInput = this.$refs.fileInputPortada;
            const file = event.target.files[0];
            this.dataPerfil = file
            if (file) {
                const reader = new FileReader();
                reader.onload = () => {
                    this.iconoPerfil = reader.result
                };
                reader.readAsDataURL(file);
                fileInput.value = '';
                this.verModalPortada = true
            }
        },
        verRedSocial(){            
            //this.$refs['modal'].hide()
            //this.$refs['my-modal'].show()
        },
        cerrarModalFoto(){
            this.verModalFoto= false
        },
        cerrarModalFotoPortada(){
            this.verModalPortada= false
        },
        async guardarFotoPerfil(){
            try {                
                let profileData = await RedService.updatePhotoProfileCliente(this.idUsuario, this.dataPerfil); 
                let profileParser = JSON.parse(profileData)             
                if(profileParser.cliente != null){
                    this.verPopUpOok('Imagen de perfil actualizada correctamente')
                    this.icono = urlLocalImages+''+profileParser.cliente.fondo_perfil_path;
                    this.verModalFoto=false;
                }else{
                    this.verPopUpError('Error al actualizar la informacion. Intentelo nuevamente')
                }
            } catch (error) {              
                this.verPopUpError(error.message)
            } 
        },
        async guardarFotoPortada(){
            try {                
                let profileData = await RedService.updatePhotoPortadaCliente(this.idUsuario, this.dataPerfil); 
                let profileParser = JSON.parse(profileData)             
                if(profileParser.cliente != null)
                {
                    this.verPopUpOok('Imagen de portada actualizada correctamente')
                    this.fondo = urlLocalImages+''+profileParser.cliente.fondo_tarjeta_path;
                    this.verModalPortada=false;
                }else
                {
                    this.verPopUpError('Error al actualizar la informacion. Intentelo nuevamente')
                }
            } catch (error) {              
                this.verPopUpError(error.message)
            } 
        },
        verEditarRedSocial(idRedSocial){
            this.idRed= idRedSocial; 
            let obj =  this.listaMisRedes.find(i => i.id == this.idRed)
            this.nombreRed = obj.nombre
            this.enlace = obj.pivot.url_tarjeta_red_social
            this.verModal = true            
        },
        eliminarRedSocial(idRedSocial){
            this.verModalEliminar = true
            this.idRed = idRedSocial
        },
        cerrarModal(){
            this.verModal= false
            this.errorEnlace= false
            this.idRed = 0
        },
        cerrarModalEliminar(){
            this.verModalEliminar= false
            this.idRed = 0
        },
        enviarFormularioRegistro(){
            if(  this.verificarCampos() ){
                this.guardarFormulario()
            }
        },
        async guardarFormulario(){
            try {                
                let profileData = await RedService.updateDataProfileAdvance(this.idUsuario,this.nombre,this.cargo,this.descripcion,this.color);              
                if(profileData.success){
                    this.verPopUpOok(profileData.descripcion)
                }else{
                    this.verPopUpError('Error al actualizar la informacion. Intentelo nuevamente')
                }
            } catch (error) {              
                this.verPopUpError(error.message)
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
        verificarCampos(){
            this.errorNombre = false
            this.errorDescripcion= false;
            this.errorCargo =false;
            if( this.nombre.trim().length<3 || this.cargo.trim().length<3 || this.descripcion.trim().length<3 ){
                if( this.nombre.trim().length<3 ){
                    this.errorNombre= true
                }
                if(this.cargo.trim().length<3){
                    this.errorCargo = true
                }
                if(this.descripcion.trim().length<3){
                    this.errorDescripcion = true
                }
                return false;
            }else{
                return true // campos completos
            }
        },
        async enviarFormulario(){
            if (this.enlace.trim().length >= 5) {
                    let nombreRed = ''
                    if( this.listaRedesSociales.length>0 ){
                        nombreRed = this.listaRedesSociales.find(e => e.id == this.idRed)
                    }                    
                  if( this.listaMisRedes.filter(e => e.id == this.idRed).length<=0  ){ // ADD                    
                    let resultado = await RedService.addRedSocialUser(this.idUsuario,this.idRed, this.enlace,nombreRed.nombre);
                    if(resultado.success){
                        this.listaMisRedes =  resultado.content;
                        this.cerrarModal()
                        this.obtenerInformacionCliente()
                        this.obtenerRedesSociales()
                        this.idRed = 0;
                        this.verPopUpOok('Red Social añadidda correctamente')
                    }else{
                        this.verPopUpError('Hubo un problema al añadir la red social. Intentelo nuevamente')
                    }
                  }else{ // UPDATE
                     let update = await RedService.updateNetworkUser(this.idUsuario, this.enlace,this.idRed,nombreRed.nombre);
                     if( update.success ){
                        this.verPopUpOok('Red Social actualizada correctamente')
                        this.idRed =0 
                        this.cerrarModal()
                        this.obtenerInformacionCliente()
                     }else{
                        this.verPopUpError('No se puedo actualizar el usuario para la red. Intentelo nuevamente')
                     }
                  }                  
            }else{                
                this.errorEnlace=true;                 
            }
        },
        nuevaRedSocial(nombre,idRed){
            this.tituloModal = 'Nueva Red Social'    
            this.nombreRed = nombre
            this.idRed  = idRed
            this.verModal= true
        },
        async obtenerRedesSociales(){
            try {                
                let socialMediaData = await RedService.getAllSocialMedia(this.idUsuario);              
                this.listaRedesSociales = socialMediaData.redes_sociales;
                console.log(this.listaRedesSociales)
                 
            } catch (error) {              
                console.error('Error fetching social media data:', error);
            } 
        },
        async eliminarRed(){
            await RedService.deleteNetworkRedSocialUser(this.idUsuario,this.idRed);  
            this.verPopUpOok('Red Social eliminada del perfil correctamente.')
            this.obtenerInformacionCliente()
            this.verModalEliminar = false;
            this.idRed = 0
            this.obtenerRedesSociales()
        },
        async obtenerInformacionCliente(){
            try {                
                let profileData = await RedService.getAllDataProfileAdvance(this.idUsuario);              
                this.nombre = profileData.datos_personales.nombres;
                this.cargo = profileData.datos_personales.cargo;
                this.descripcion = profileData.datos_personales.descripcion;
                this.icono = profileData.datos_personales.fondo_perfil_path== null? this.icono:urlLocalImages +''+ profileData.datos_personales.fondo_perfil_path;
                this.fondo = profileData.datos_personales.fondo_tarjeta_path== null? this.fondo:urlLocalImages +''+ profileData.datos_personales.fondo_tarjeta_path;
                this.color = profileData.datos_personales.fondo_color== null? '#000000' : profileData.datos_personales.fondo_color;      
                this.listaMisRedes = profileData.datos_personales.redes_sociales;
            } catch (error) {              
                console.error('Error fetching social media data:', error);
            } 
        }
    }
}
</script>

<style>

.sombra-card{
    box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
}

.sombre-contenedor{
    box-shadow: rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px;
}

.border-50{
    border-radius: 50%;
}

.fondo-card{
    background-color: #e8e8e8;
   
}

</style>