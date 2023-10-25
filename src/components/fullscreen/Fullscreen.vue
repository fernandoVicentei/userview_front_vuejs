<template>
     <li class="nav-item iq-full-screen" @click="change()">
         <a href="#" class="" id="btnFullscreen"  >
         <i v-if="data" class="ri-fullscreen-line"></i>
         <i v-else class="ri-fullscreen-exit-line"></i>
         </a>  
    </li>
</template>
<script>
export default {
    name:'Fullscreen',
     data () {
        return{
    data:true
        }
    },
       methods:{
       change(){
this.data = !this.data
       }
   }
    
}
</script>