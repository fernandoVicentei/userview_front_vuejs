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
                <div class="row pt-1">
                    <div class="col-md-7 col-12">
                        <div class="card p-0">
                            <div class="card-body p-2">
                                <h5 class="card-title">Informacion Personal</h5>
                                <div class="container-fluid p-2">
                                    <form @submit.prevent="enviarFormulario">
                                        <div class="form-group">
                                            <label for="exampleInputEmail1">Nombre Completo</label>
                                            <input type="text" class="form-control" maxlength="30" v-model="nombre" id=""
                                                placeholder="Ingrese su nombre completo">
                                            <small id="" v-if="errorNombre" class=" text-danger">Debe de llenar este campo
                                                para actualizar </small>
                                        </div>
                                        <div class="form-group">
                                            <label for="exampleInputPassword1">Cargo (Ocupacion)</label>
                                            <input type="text" v-model="cargo" maxlength="50" class="form-control" id=""
                                                placeholder="Ingrese su cargo actual">
                                            <small id="" v-if="errorCargo" class="  text-danger">Debe de llenar este campo
                                                para actualizar </small>
                                        </div>
                                        <div class="form-group">
                                            <label for="exampleInputPassword1">Descripcion (Personal o profesional)</label>
                                            <textarea class="form-control" rows="1" v-model="descripcion">
                                            </textarea>
                                            <small id="" v-if="errorDescripcion" class="  text-danger">Debe de llenar este
                                                campo para actualizar </small>
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
                    <div class="col-md-5 col-12">
                        <div class="card p-0">
                            <div class="card-header">
                                <h6 class="card-title mb-0">Enlace a la tarjeta</h6>
                            </div>
                            <div class="card-body">
                                <div class="container-fluid p-2 text-center">
                                    <button class="btn btn-primary" @click="handleOpenProfileCard">Abrir Tarjeta</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-7 col-12">
                        <div class="card p-0">
                            <div class="card-body p-2">
                                <h5 class="card-title">Representacion</h5>
                                <div class="container-fluid p-2">
                                    <div class="row justify-content-center pt-4">
                                        <div class="col-md-5 col-6 text-center">
                                            <h6>Retrato</h6>
                                            <img :src="icono" alt="" width="80%" class="img-thumbnail">
                                        </div>
                                        <div class="col-md-5 col-6 text-center">
                                            <h6>Portada</h6>
                                            <img :src="fondo" alt="" width="80%" height="100%" class="img-thumbnail">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-7 col-12">
                        <div class="card p-0">
                            <div class="card-body p-2">
                                <h5 class="card-title">Mis Redes Sociales</h5>
                                <div class="container-fluid p-2">
                                    <div class="row justify-content-center pt-4">
                                        <div class="col-md-12 col-12 text-center">

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

export default {
    name: 'Editar',
    components: {
    },
    data() {
        return {
            errorNombre: false,
            errorCargo: false,
            errorDescripcion: false,
            nombre: '',
            descripcion: '',
            cargo: '',
            isLoading: false,
            icono: '',
            fondo: ''
        }
    },
    mounted() {
        this.icono = require('@/img/user.png');
        this.fondo = require('@/img/fondo.png');
    },
    methods: {
        handleOpenProfileCard() {
            this.$router.push('/profileCard');
        }
    }
}
</script>