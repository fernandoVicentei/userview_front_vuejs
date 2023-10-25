<template>
  <div>
    <div class="wrapper">
      <router-view/>
    </div>
    <RtlButton />
  </div>
</template>
<script>
import { core } from '../config/pluginInit'
import RtlButton from "../components/mode/RtlButton"
export default {
  name: 'BlankLayout',
  components: {
    RtlButton
  },
  mounted () {
    core.index()
  }
}
</script>
<style>
  @import url("../assets/css/custom.css");
  .modal-backdrop {
    opacity: .5;
  }
</style>
