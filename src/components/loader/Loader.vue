<template>
<div id="loading" style="display: flex; justify-content: center; align-items: center;">
  <!-- <div id="loading-center">

  </div> -->
  <div class="text-center">
    <SquareLoader :loading="loading" :color="color" :size="size"></SquareLoader>
    <p class="mt-3">Cargando...</p>
  </div>
</div>


</template>
<script>
import {animation} from "@/config/pluginInit";
import SquareLoader from 'vue-spinner/src/SquareLoader.vue';

export default {
  name: 'Loader',
  watch: {
    $route: function () {
      this.init()
    }
  },
  components: {
    SquareLoader,
  },
  data() {
    return {
      loading: true, // Cambia el valor de loading según tus necesidades
      color: '#05BBC9', // Cambia el color del spinner según tus necesidades
      size: '70px', // Cambia el tamaño del spinner según tus necesidades
    };
  },
  computed: {
  },
  mounted () {
    this.init()
  },
  methods: {
    init() {
      const load = document.getElementById('loading')
      load.classList.remove('d-none')
      window.scrollTo({ top: 0, behavior: 'smooth' });
      animation.fadeIn(load, { duration: 20 })
      setTimeout (() => {
        animation.fadeOut(load, { duration: 20 })
        load.classList.add('d-none')
      }, 1000)
    }
  }
}
</script>
