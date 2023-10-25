<template>
<div class="custom-control-inline change-rtl" >
     <a href="#" class="switch-rtl" @click="rtl = !rtl" data-active="true" for="rtl-mode" data-mode="rtl" >{{ rtl ? 'LTR' : 'RTL'}}</a>
</div>
</template>
<script>
import { mapGetters,mapActions } from 'vuex'
export default {
  name: 'RtlButton',
  data(){
    return{
     rtl:false
    }
  },
  computed : {
      ...mapGetters({
          stateRTL: 'rtl'
      })
  },
  mounted(){
        this.rtl = this.stateRTL
        if (this.$route.query.rtl !== undefined) {
          this.rtl = this.$route.query.rtl === 'false' ? false : true
        }
        this.changeMode(this.rtl)
  },
  watch:{
    rtl:function(){
      this.changeMode(this.rtl)
    }
  },
  methods:{
    ...mapActions({
      modeChange: 'layoutModeAction'
    }),
    changeMode(value){
        this.modeChange({ rtl: value })
    }
  }
}
</script>