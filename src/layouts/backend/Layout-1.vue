<template>
  <div>
    <Loader/>
    <div class="wrapper">
         
      <SidebarStyle :items="sidebarItems" />
      <HeaderStyle1/>
      <div class="content-page rtl-page">
        <transition name="router-anim">
          <router-view/>
        </transition>
      </div>
    </div>
    <RtlButton />
    <FooterStyle />
  </div>
</template>
<script>
import sideBarItem from "@/JsonData/sidebar.json"
import Loader from '@/components/loader/Loader'
import SidebarStyle from "@/components/partials/backend/SidebarStyle/SidebarStyle";
import HeaderStyle1 from "@/components/partials/backend/HeaderStyle/HeaderStyle1";
import FooterStyle from "@/components/partials/backend/FooterStyle/FooterStyle";
/* import RtlButton from "../../components/mode/RtlButton" */
export default {
  name: 'Layout-2',
  components: {
    HeaderStyle1,
    FooterStyle,
    SidebarStyle,
    Loader,
   /*  RtlButton */
  },data(){
    return{
       sidebarItems:sideBarItem
    }
  },
   mounted(){
    document.body.classList=''
  },
  destroyed () {
    document.body.classList=''
  }
  
}
</script>
<style>
</style>
