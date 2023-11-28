<template>
    <div class="container-fluid">
        <div class="row mb-4">
            <div class="col-lg-12 col-md-12 d-flex justify-content-center"
                :style="{ backgroundColor: profile.fondo_color ?? '#000000' }">
                <img v-if="profile.fondo_tarjeta_path" :src="`${domainStorage}/${profile.fondo_tarjeta_path}`"
                    class="img-fondo-tarjeta" alt="Foto Fondo Tarjeta" style="max-width: 100%;" />
                <img v-else :src="`${domain}/img/fondo_default_perfil.jpg`" class="img-fondo-tarjeta"
                    alt="Foto Fondo Tarjeta" style="max-width: 100%;" />
            </div>
            <!-- Perfil del Usuario (Avatar) -->
            <div class="col-lg-12 col-md-12 d-flex justify-content-center">
                <img v-if="profile.fondo_perfil_path" :src="`${domainStorage}/${profile.fondo_perfil_path}`"
                    class="img-thumbnail rounded-circle" alt="User Avatar"
                    style="width: 20vh; height: 20vh; z-index: 1;margin-top: -5rem;">
                <img v-else :src="`${domain}/img/foto_default_perfil.png`" class="img-thumbnail rounded-circle"
                    alt="User Avatar Default" style="width: 20vh; height: 20vh; z-index: 1;margin-top: -5rem;">
            </div>
            <div class="col-lg-12 col-md-12 d-flex justify-content-center">
                <div class="text-center ">
                    <h3 class="my-2">{{ profile.nombres }}</h3>
                    <h4 class="my-2">{{ profile.cargo }}</h4>
                    <p class="my-2">{{ profile.descripcion }}</p>
                    <button class="btn btn-secondary my-3">Guardar Contacto</button>
                </div>
            </div>
            <div class="col-lg-12 col-md-12 d-flex justify-content-center">
                <div class="card border-primary ">
                    <div class="card-body">
                        <h6 class="card-title text-center">Redes Sociales</h6>
                        <!-- Lista de Redes Sociales -->
                        <div class="row justify-content-center align-items-center text-center ">
                            <div v-for="red_social in profile.redes_sociales" :key="red_social.nombre" class="col-md-3">
                                <img v-if="red_social.icono.includes('/')" :src="`${domainStorage}/${red_social.icono}`"
                                    class="" alt="Facebook Icon" style="width: 40px; height: 40px">
                                <img v-else :src="`${domain}/img/red_social_default.png`" class="rounded-circle "
                                    alt="Facebook Icon" style="width: 40px; height: 40px">
                                <span style="font-size: 13px;">{{ red_social.nombre }}</span>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
            <div class="col-lg-12 col-md-12 d-flex justify-content-center mb-4">
                <vue-qr :text="`${domain}/${profile.enlace_tarjeta_cliente}`" :size="300"></vue-qr>
            </div>
            <div class="col-lg-12 col-md-12 text-center fixed-bottom" :style="{ backgroundColor: '#000000' }">
                <h4 style="color: white;" class="yolohago_h3 m-1">Yo lo hago Bolivia</h4>
                <h6 style="color: white;" class="yolohago_h5">© 2023 Yo lo hago | Derechos reservados</h6>
            </div>
        </div>

    </div>
</template>
<script>
import { mapState } from 'vuex'
import { domainStorage, domain } from './../../../config/rutas';
import VueQr from 'vue-qr'
export default {
    components: {
        VueQr
    },
    data() {
        return {
            domainStorage: domainStorage,
            domain: domain
        }
    },
    computed: mapState({
        profile: state => state.profile.p
    }),
    created() {
        const idUser = this.$route.params.id;
        this.$store.dispatch('profile/getProfile', { userId: idUser })
    },
    mounted() {
        console.log(this.profile)
    }
}
</script>
<style scoped>
@media (max-width: 768px) {
    .img-fondo-tarjeta {
        width: 100%;

    }

    .yolohago_h3 {
        font-size: 18px;
    }

    .yolohago_h5 {
        font-size: 12px;
    }
}

@media (min-width: 769px) {
    .img-fondo-tarjeta {
        width: 35%;
    }
}
</style>