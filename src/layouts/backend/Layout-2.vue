<template>
  <div>
    <Loader/>
    <div class="wrapper">
      <HeaderStyle2/>
      <div class="content-page c-payment-block rtl-pages">
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
import Loader from '@/components/loader/Loader'
import HeaderStyle2 from "@/components/partials/backend/HeaderStyle/HeaderStyle2";
import FooterStyle from "@/components/partials/backend/FooterStyle/FooterStyle";
import RtlButton from "../../components/mode/RtlButton"
export default {
  name: 'Layout-1',
  components: {
    HeaderStyle2,
    FooterStyle,
    Loader,
    RtlButton
  },
 mounted () {
    document.body.classList='dahboard-2'
  },
  destroyed () {
    document.body.classList='dahboard-2'
  }
}
</script>
<style>
</style>
