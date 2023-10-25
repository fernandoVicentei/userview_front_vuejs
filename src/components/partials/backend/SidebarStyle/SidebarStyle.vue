<template>
  <div class="iq-sidebar rtl-iq-sidebar sidebar-default ">
    <div class="iq-sidebar-logo d-flex align-items-center justify-content-between">
      <router-link :to="homeurl" class="header-logo">
        <img :src="logo" class="img-fluid rounded-normal" alt="logo">
      </router-link>
      <div class="iq-menu-bt-sidebar">
        <i class="las la-bars wrapper-menu" @click="chnagesidebar"></i>
      </div>
    </div>
    <!-- <div class="data-scrollbar" data-scroll="1" id="sidebar-scrollbar"> -->
    <nav class="iq-sidebar-menu mt-2">
      <CollapseMenu :items="items" :open="true" />
    </nav>
    <!--  </div> -->
    <div id="sidebar-bottom" class="position-relative sidebar-bottom">
      <!-- <div class="card  rounded">
                <div class="card-body"> -->
      <div class="sidebarbottom-content"><br>
        <div class="image"><img src="@/assets/images/layouts/side-bkg.png" class="img-fluid" alt="side-bkg"></div>
        <!--  <h5 class="mb-3 text-white mt-3">Did you Know ?</h5>
                        <p class="mb-0 text-white">You can add additional user in your Account's Settings</p> -->
        <button type="button" class="btn bg-danger  mt-3" @click="logout"><i class="fas fa-power-off"></i> Cerrar Sesión</button>
      </div>
      <!--    </div>
            </div>
             -->
    </div>
  </div>
</template>
<script>
import CollapseMenu from "@/components/menustyle/CollapseMenu";
import { mapGetters } from 'vuex'
import { core } from '@/config/pluginInit'
export default {
  name: "SidebarStyle",
  props: {
    items: Array,
  },
  data() {
    return {
      homeurl: '',

    }
  },
  mounted() {
    core.SmoothScrollbar()
    core.fullscreen()
  },
  destroyed() {
    core.SmoothScrollbar()
    core.fullscreen()
  },
  components: {
    CollapseMenu
  },
  computed: {
    ...mapGetters({
      appName: 'appName',
      logo: 'logo'
    })
  },
  methods: {
    chnagesidebar() {
      core.triggerSet()
    },
    logout() {
      // Limpia el token y el estado de autenticación en el store
      this.$store.commit('resetState');
      localStorage.removeItem('token');
      // Redirecciona a la página de inicio de sesión
      this.$router.push({ name: 'login' });
    }
  }

}
</script>

