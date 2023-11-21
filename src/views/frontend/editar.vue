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
                        <div class="card p-0 sombre-contenedor">
                            <div class="card-body p-2">
                                <h5 class="card-title">Informacion Personal</h5>
                                <div class="container-fluid p-2" >                                        
                                    <form  @submit.prevent="enviarFormulario">
                                        <div class="form-group">
                                            <label for="exampleInputEmail1">Nombre Completo</label>
                                            <input type="text" class="form-control" maxlength="30"  v-model="nombre" id=""   placeholder="Ingrese su nombre completo">
                                            <small id="" v-if="errorNombre"  class=" text-danger">Debe de llenar este campo para actualizar </small>
                                        </div>
                                        <div class="form-group">
                                            <label for="exampleInputPassword1">Cargo (Ocupacion)</label>
                                            <input type="text"  v-model="cargo" maxlength="50" class="form-control" id="" placeholder="Ingrese su cargo actual">
                                            <small id="" v-if="errorCargo"  class="  text-danger">Debe de llenar este campo para actualizar </small>
                                        </div>    
                                        <div class="form-group">
                                            <label for="exampleInputPassword1">Descripcion (Personal o profesional)</label>
                                            <textarea class="form-control" rows="1" v-model="descripcion" >
                                            </textarea>
                                            <small id="" v-if="errorDescripcion"  class="  text-danger">Debe de llenar este campo para actualizar </small>
                                        </div> 
                                        <div class="form-group">
                                            <label for="exampleInputPassword1">Color (Thema para tu perfil)</label>
                                            <input type="color" class="form-control" id="colorPicker" name="colorPicker">
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
                        <div class="card p-0 sombre-contenedor">
                            <div class="card-body p-2">
                                <h5 class="card-title">Representacion</h5>
                                <div class="container-fluid p-2" >       
                                    <div class="row justify-content-center pt-4">  
                                        <div class="col-md-5 col-6 text-center" >
                                            <h6>Retrato</h6>
                                            <img :src="icono" alt="" width="80%"    class="img-thumbnail">
                                        </div>
                                        <div class="col-md-5 col-6 text-center" >
                                            <h6>Portada</h6>
                                            <img :src="fondo" alt="" width="80%" height="100%"  class="img-thumbnail">
                                        </div>
                                    </div>   
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-7 col-12" > 
                        <div class="card p-0 sombre-contenedor">
                            <div class="card-body p-2">
                                <h5 class="card-title">Mis Redes Sociales</h5>
                                <div class="container-fluid p-2" >       
                                    <div class="row  p-3">  
                                         

                                        <div class="col-md-3 col-4 text-center  sombra-card " >
                                            <div class=" row p-2" >
                                                <div class="col-12 col-md-12" >
                                                    <img :src="icono" alt="" width="70%"    class="img-thumbnail">    
                                                </div>
                                                <div class="col-12 col-md-12 text-center" >
                                                    <p>Facebook</p>    
                                                </div>
                                                <div class="col-4  p-0" > 
                                                    <button type="button"  @click="verEditarRedSocial" class="btn bg-warning m-0">
                                                        <i class="fas fa-edit "></i>
                                                    </button>
                                                </div>
                                                <div class="col-4   p-0" > 
                                                    <button type="button" @click="verRedSocial" class="btn bg-primary m-0">
                                                        <i class="fas fa-eye"></i>
                                                    </button>
                                                </div>
                                                <div class="col-4   p-0" > 
                                                    <button type="button"  @click="eliminarRedSocial" class="btn bg-danger m-0">                                                       
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
                        <div class="card p-0 sombre-contenedor">
                            <div class="card-body p-2">
                                <h5 class="card-title">Mas Redes</h5>
                                <div class="container-fluid p-2" >       
                                    <div class="row  p-3">                                           
                                        <div class="col-12 col-md-12 mb-1 p-0" > 
                                            <strong>General</strong>
                                        </div>                                        
                                        <div class="col-md-3 col-4 text-center border-dark border "  @click="nuevaRedSocial" >
                                            <div class=" row p-2" >
                                                <div class="col-12 col-md-12" >
                                                    <img :src="icono" alt="" width="70%"    class="img-thumbnail">    
                                                </div>
                                                <div class="col-12 col-md-12 text-center"  @copy.prevent>
                                                    <p>Instagram</p>    
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
           <!--  <b-button v-b-modal.modal-1>Launch demo modal</b-button> -->
            <b-modal v-model="verModal" :title="tituloModal" hide-footer >
                <form  @submit.prevent="enviarFormulario">
                    <div class="form-group">
                        <label for="exampleInputEmail1">Red Social</label>
                        <input type="text" class="form-control" disabled   >                         
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
                    <button type="submit" class="btn btn-success float-left">Confirmar</button>
                    <button  type="button" class="btn btn-secondary float-right" @click="cerrarModalEliminar" >Cancelar</button>    
                </div>           
            </b-modal>
        </div>

    </div>

    
</template>
<script>

export default {
    name: 'Editar',
    components: {
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
        }
    },
    mounted(){
        this.icono = require('@/img/user.png'); 
        this.fondo = require('@/img/fondo.png'); 
    },
    methods:{
        verRedSocial(){            
            //this.$refs['modal'].hide()
            //this.$refs['my-modal'].show()
        },
        verEditarRedSocial(){
            this.verModal = true
            
        },
        eliminarRedSocial(){
            this.verModalEliminar = true
        },
        cerrarModal(){
            this.verModal= false
            this.errorEnlace= false
        },
        cerrarModalEliminar(){
            this.verModalEliminar= false
        },
        enviarFormulario(){
            if (this.enlace.trim().length >= 5) {
                  console.log('hola')
            }else{                
                this.errorEnlace=true;                 
            }
        },
        nuevaRedSocial(){
            this.tituloModal = 'Nueva Red Social'            
            this.verModal= true
        },

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

</style>