<template>
     <div class="dashboard2-header-style">
   <div class="iq-top-navbar analytic rtl-iq-top-navbars">
      <div class="container">            
         <div class="iq-navbar-custom d-flex align-items-center justify-content-between">
            <div class="iq-navbar-logo d-flex align-items-center justify-content-between">
               <i class="ri-menu-line wrapper-menu" @click="chnagesidebar"></i>
                <router-link to="/" class="header-logo">
                <img :src="logo" class="img-fluid rounded-normal" alt="logo">
                
                </router-link> 
            </div>
            <div class="iq-search-bar device-search">
               <form action="#" class="searchbox">
                  <input type="text" class="text search-input" placeholder="Type here to search...">
                  <a class="search-link" href="#"><i class="ri-search-line"></i></a>
               </form>
            </div>
            <nav class="navbar navbar-expand-lg navbar-light px-0">
               <ModeSwitch/>
               <b-navbar-toggle target="nav-collapse" class="mr-2 text-white">
                <i class="ri-menu-3-line"></i>
                </b-navbar-toggle>                      
               <b-collapse id="nav-collapse" is-nav>
                  <ul class="navbar-nav ml-auto navbar-list align-items-center">                     
                     <li class="nav-item nav-icon search-content" v-nav-toggle>
                        <a href="#" class="search-toggle rounded dropdown-toggle" id="dropdownSearch" data-toggle="dropdown"
                           aria-haspopup="true" aria-expanded="false">
                        <i class="ri-search-line"></i>
                        </a>
                        <div class="iq-search-bar iq-sub-dropdown dropdown-menu" aria-labelledby="dropdownSearch">
                           <form action="#" class="searchbox p-2">
                              <div class="form-group mb-0 position-relative">
                                 <input type="text" class="text search-input" placeholder="type here to search...">
                                 <a href="#" class="search-link"><i class="ri-search-line"></i></a>
                              </div>
                           </form>
                        </div>
                     </li>
                      <li class="nav-item nav-icon dropdown" v-nav-toggle>
                        <a href="#" class="search-toggle dropdown-toggle" id="dropdownMenuButton2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i class="ri-mail-line  bg-orange p-2 rounded-small"></i>
                        </a>
                        <div class="iq-sub-dropdown dropdown-menu" aria-labelledby="dropdownMenuButton2">
                            <div class="card shadow-none m-0">
                                <div class="card-body p-0 ">
                                <div class="cust-title p-3">
                                    <h5 class="mb-0">All Messages</h5>
                                </div>
                                <div class="p-3">
                                    <a href="#" class="iq-sub-card">
                                        <div class="media align-items-center">
                                            <div class="">
                                            <img class="avatar-40 rounded-small" src="@/assets/images/user/01.jpg" alt="01">
                                            </div>
                                            <div class="media-body ml-3">
                                            <h6 class="mb-0">Barry Emma Watson <small class="badge badge-success float-right">New</small></h6>
                                            <small class="float-left font-size-12">12:00 PM</small>
                                            </div>
                                        </div>
                                    </a>
                                    <a href="#" class="iq-sub-card">
                                        <div class="media align-items-center">
                                            <div class="">
                                            <img class="avatar-40 rounded-small" src="@/assets/images/user/02.jpg" alt="02">
                                            </div>
                                            <div class="media-body ml-3">
                                            <h6 class="mb-0 ">Lorem Ipsum Watson</h6>
                                            <small class="float-left font-size-12">20 Apr</small>
                                            </div>
                                        </div>
                                    </a>
                                    <a href="#" class="iq-sub-card">
                                        <div class="media align-items-center">
                                            <div class="">
                                            <img class="avatar-40 rounded-small" src="@/assets/images/user/03.jpg" alt="03">
                                            </div>
                                            <div class="media-body ml-3">
                                            <h6 class="mb-0 ">Why do we use it? <small class="badge badge-success float-right">New</small></h6>
                                            <small class="float-left font-size-12">1:24 PM</small>
                                            </div>
                                        </div>
                                    </a>
                                    <a href="#" class="iq-sub-card" >
                                        <div class="media align-items-center">
                                            <div class="">
                                            <img class="avatar-40 rounded-small" src="@/assets/images/user/04.jpg" alt="04">
                                            </div>
                                            <div class="media-body ml-3">
                                            <h6 class="mb-0">Variations Passages <small class="badge badge-success float-right">New</small></h6>
                                            <small class="float-left font-size-12">5:45 PM</small>
                                            </div>
                                        </div>
                                    </a>
                                    <a href="#" class="iq-sub-card" >
                                        <div class="media align-items-center">
                                            <div class="">
                                            <img class="avatar-40 rounded-small" src="@/assets/images/user/05.jpg" alt="05">
                                            </div>
                                            <div class="media-body ml-3">
                                            <h6 class="mb-0 ">Lorem Ipsum generators</h6>
                                            <small class="float-left font-size-12">1 day ago</small>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <a class="right-ic btn btn-primary btn-block position-relative p-2" href="#" role="button">
                                    <div class="dd-icon"><i class="las la-arrow-right mr-0"></i></div>
                                    View All
                                </a>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li class="nav-item nav-icon dropdown" v-nav-toggle> 
                        <a href="#" class="search-toggle dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
                        <i class="ri-notification-line bg-danger p-2 rounded-small"></i>
                        </a>
                        <div class="iq-sub-dropdown dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <div class="card shadow-none m-0">
                                <div class="card-body p-0 ">
                                <div class="cust-title p-3">
                                    <h5 class="mb-0">All Notifications</h5>
                                </div>
                                <div class="p-3">
                                    <a href="#" class="iq-sub-card" >
                                        <div class="media align-items-center">
                                            <div class="">
                                            <img class="avatar-40 rounded-small" src="@/assets/images/user/01.jpg" alt="01">
                                            </div>
                                            <div class="media-body ml-3">
                                            <h6 class="mb-0">Emma Watson Barry <small class="badge badge-success float-right">New</small></h6>                                             
                                            <p class="mb-0">95 MB</p>
                                            </div>
                                        </div>
                                    </a>
                                    <a href="#" class="iq-sub-card" >
                                        <div class="media align-items-center">
                                            <div class="">
                                            <img class="avatar-40 rounded-small" src="@/assets/images/user/02.jpg" alt="02">
                                            </div>
                                            <div class="media-body ml-3">
                                            <h6 class="mb-0 ">New customer is join</h6>
                                            <p class="mb-0">Cyst Barry</p>
                                            </div>
                                        </div>
                                    </a>
                                    <a href="#" class="iq-sub-card" >
                                        <div class="media align-items-center">
                                            <div class="">
                                            <img class="avatar-40 rounded-small" src="@/assets/images/user/03.jpg" alt="03">
                                            </div>
                                            <div class="media-body ml-3">
                                            <h6 class="mb-0 ">Two customer is left</h6>                                             
                                            <p class="mb-0">Cyst Barry</p>
                                            </div>
                                        </div>
                                    </a>
                                    <a href="#" class="iq-sub-card" >
                                        <div class="media align-items-center">
                                            <div class="">
                                            <img class="avatar-40 rounded-small" src="@/assets/images/user/04.jpg" alt="04">
                                            </div>
                                            <div class="media-body ml-3">
                                            <h6 class="mb-0 ">New Mail from Fenny <small class="badge badge-success float-right">New</small></h6>                                             
                                            <p class="mb-0">Cyst Barry</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <a class="right-ic btn btn-primary btn-block position-relative p-2" href="#" role="button">
                                    <div class="dd-icon"><i class="las la-arrow-right mr-0"></i></div>
                                    View All
                                </a>                                   
                                </div>
                            </div>
                        </div>
                    </li>
                    <Fullscreen />
                      <li class="caption-content" v-sidebar-toggle>
                            <a href="#" class="iq-user-toggle">
                                <img src="@/assets/images/user/1.jpg" class="img-fluid rounded" alt="user">
                            </a>
                            <div class="iq-user-dropdown rtl-iq-user-dropdown" >
                            <div class="card" id="right-sidebar-scrollbar">
                                <div class="card-header d-flex justify-content-between align-items-center mb-0">
                                <div class="header-title">
                                    <h4 class="card-title mb-0">Profile</h4>
                                </div>
                                <div class="close-data text-right badge badge-primary cursor-pointer"><i class="ri-close-fill"></i></div>
                                </div>
                                <div class="data-scrollbar" data-scroll="2">
                                <div class="card-body">
                                    <div class="profile-header">
                                        <div class="cover-container ">
                                            <div class="media align-items-center mb-4">
                                                <img src="@/assets/images/user/1.jpg" alt="profile-bg" class="rounded img-fluid avatar-80">
                                                <div class="media-body profile-detail ml-3 rtl-mr-3 rtl-ml-0">
                                                    <h3>Bill Yerds</h3>
                                                    <div class="d-flex flex-wrap">
                                                        <p class="mb-1">Web designer</p> <router-link :to="{name: 'auth.login'}" class="ml-3">Sign Out</router-link>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                        </div>
                                        <div class="row">
                                            <div class="col-lg-6 col-md-6  col-6 pr-0">
                                                <div class="profile-details text-center">

                                                     <router-link :to="{name: 'app.user-profile'}" class="iq-sub-card bg-primary-light rounded-small p-2">
    
                                                        <div class="rounded iq-card-icon-small">
                                                            <i class="ri-file-user-line"></i>
                                                        </div>
                                                        <h6 class="mb-0 ">My Profile</h6>
                                                    </router-link>
                                                </div>
                                            </div>
                                            <div class="col-lg-6  col-md-6 col-6">
                                                <div class="profile-details text-center">
                                                     <router-link :to="{ name: 'app.user-profile-edit'}" class="iq-sub-card bg-danger-light rounded-small p-2">
                                                        <div class="rounded iq-card-icon-small">
                                                            <i class="ri-profile-line"></i>
                                                        </div>
                                                        <h6 class="mb-0 ">Edit Profile</h6>
                                                     </router-link>
                                                </div>
                                            </div>
                                            <div class="col-lg-6 col-md-6  col-6 pr-0">
                                                <div class="profile-details text-center">
                                                     <router-link :to="{ name: 'app.user-Account-setting'}" class="iq-sub-card bg-success-light rounded-small p-2">
                                                
                                                        <div class="rounded iq-card-icon-small">
                                                            <i class="ri-account-box-line"></i>
                                                        </div>
                                                        <h6 class="mb-0 ">Account</h6>
                                                    </router-link>
                                                </div>
                                            </div>
                                            <div class="col-lg-6 col-md-6  col-6">
                                                <div class="profile-details text-center">
                                                     <router-link :to="{ name: 'app.user-privacy-setting'}" class="iq-sub-card bg-info-light rounded-small p-2">
                                                        <div class="rounded iq-card-icon-small">
                                                        <i class="ri-lock-line"></i>
                                                        </div>
                                                        <h6 class="mb-0 ">Settings</h6>
                                                    </router-link >
                                                </div>
                                            </div>
                                        </div>
                                        <div class="personal-details">
                                            <h5 class="card-title mb-3 mt-3">Personal Details</h5>
                                            <div class="row align-items-center mb-2">
                                            <div class="col-sm-6">
                                                <h6>Birthday</h6>
                                            </div>
                                            <div class="col-sm-6">
                                                <p class="mb-0">3rd March</p>
                                            </div>
                                            </div>
                                            <div class="row align-items-center mb-2">
                                            <div class="col-sm-6">
                                                <h6>Address</h6>
                                            </div>
                                            <div class="col-sm-6">
                                                <p class="mb-0">Landon</p>
                                            </div>
                                            </div>
                                            <div class="row align-items-center mb-2">
                                            <div class="col-sm-6">
                                                <h6>Phone</h6>
                                            </div>
                                            <div class="col-sm-6">
                                                <p class="mb-0">(010)987 543 201</p>
                                            </div>
                                            </div>
                                            <div class="row align-items-center mb-2">
                                            <div class="col-sm-6">
                                                <h6>Email</h6>
                                            </div>
                                            <div class="col-sm-6">
                                                <p class="mb-0">Barry@example.com</p>
                                            </div>
                                            </div>
                                            <div class="row align-items-center mb-2">
                                            <div class="col-sm-6">
                                                <h6>Twitter</h6>
                                            </div>
                                            <div class="col-sm-6">
                                                <p class="mb-0">@Barry</p>
                                            </div>
                                            </div>
                                            <div class="row align-items-center mb-2">
                                            <div class="col-sm-6">
                                                <h6>Facebook</h6>
                                            </div>
                                            <div class="col-sm-6">
                                                <p class="mb-0">@Barry_Tech</p>
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="p-3"></div>
                                </div>
                                </div>
                            </div>
                        </div>
                           
                        </li>
                  </ul>
               </b-collapse>
            </nav>
         </div>           
      </div>
   </div>
   <div class="bg-analytic-horizontal rtl-bg-analytic-horizontal">
      <div class="container">           
         <div class="white-bg-menu fixed">
            <div class="iq-menu-horizontal">
               <nav class="iq-sidebar-menu">
                  <div class="iq-sidebar-logo d-flex align-items-center justify-content-between">
                        <router-link to="/" class="header-logo">
                           <img :src="sidebarlogo" class="img-fluid rounded-normal" alt="logo">
                        </router-link> 
                        <div class="iq-menu-bt-sidebar">
                           <i class="las la-bars wrapper-menu" @click="chnagesidebar"></i>
                        </div>
                  </div>
                  <CollapseMenu :items="sidebarItems" :open="true" :horizontal="false"  className="iq-menu d-flex mn-center collapse-menu"/>
                  <HoverMenu :items="sidebarItems" className="iq-menu d-flex mn-center hover-menu" :enableCustomIcon="true" />
               </nav>
            </div>
         </div>
      </div>
   </div>
</div>
</template>
<script>

import sideBarItem from "@/JsonData/header.json"
import {core} from '@/config/pluginInit'
import { mapGetters } from 'vuex'
import Fullscreen from '../../../fullscreen/Fullscreen.vue'
import CollapseMenu from '../../../menustyle/CollapseMenu'
export default {
    name:"HeaderStyle10",
    components: {  Fullscreen,
    CollapseMenu
    },
    data () {
        return{
          sidebarItems:sideBarItem,
          
        }
    },
    computed : {
        ...mapGetters({
            appName: 'appName',
            logo:'darklogo',
            sidebarlogo:'logo',
            name:'name',
            image1:'image1'
        })
    },
    mounted(){
         
    },
 methods:{
     chnagesidebar(){
        core.triggerSet()
     }
 }   
}
</script>
<style scoped lang="scss">
  .iq-sidebar-menu .iq-menu.d-flex.mn-center.collapse-menu{
    @media (min-width:1300px) {
      display: none  !important;
    }
  }
.iq-sidebar-menu .iq-menu.d-flex.mn-center.hover-menu{
    display: flex;
    @media (max-width:1299px){
      display: none !important;
    }
  }
</style>