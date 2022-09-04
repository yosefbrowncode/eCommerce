<script>
import { cart } from '../store.js'
import CartCard from './CartCard.vue'
export default {
  components: { CartCard },
    data() {
    return {
      showing: false,
      cart,
    }
    },
    methods:{
    
      onClickAway() {
      this.showing = false
      
    }  
    
    }
    
    
}
  

</script>

<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light myNav pl-0 pr-0">
  <div class="container-fluid paddingContainer">
      <div class="container brandBurgerBtn">
           <a class="navbar-brand headerBrand" href="#">
            <img src="../assets/images/logo.svg" class="img-fluid" alt="...">
               </a>
    <button class="navbar-toggler border-0" style="color: white" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample"  aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <div  class="hamburgerBtn"></div>
      <div  class="hamburgerBtn"></div>
      <div  class="hamburgerBtn"></div>
    </button>

      </div>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ms-4">
        <li class="nav-item ">
          <a class="nav-link navText navTextMarg" aria-current="page" href="#">Collections</a>
        </li>
        <li class="nav-item">
          <a class="nav-link navText navTextMarg" href="#">Men</a>
        </li>
        <li class="nav-item">
          <a class="nav-link navText navTextMarg" href="#">Women</a>
        </li>
         <li class="nav-item">
          <a class="nav-link navText navTextMarg" href="#">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link navText navTextMarg" href="#">Contact</a>
        </li>
      </ul>
    </div>
     <!-- <font-awesome-icon icon="fa-solid fa-cart-shopping" /> -->
    <div>
      <img @click.prevent="showing = !showing"  src="../assets/images/icon-cart.svg" class="img-fluid cartStyle" width="25" alt="...">
     <span v-show="cart.count > 0" class="position-absolute start-90 translate-middle badge rounded-pill bg-danger cartBadge">
       <span  @click.prevent="showing = !showing" class="fw-bold">{{cart.count}}</span>
    </span>
    </div>
     
     <!-- <sup v-show="cart.count > 0"  class="badge rounded-pill bg-danger cartBadge">{{cart.count}}</sup>  -->
     
 
    



     
      <img  src="../assets/images/image-avatar.png" class="img-fluid  avatarStyle" width="50" alt="...">
    
  </div>

</nav>

<Transition>
  <cart-card v-if="showing == true" v-click-away="onClickAway"  />
</Transition>

<!-- SIDEBAR -->
<div class="offcanvas offcanvas-start sideBar" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
  <div class="offcanvas-header">
    <button type="button" class="btn-close mt-2 sidebarClose" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <ul class="sideBarList">
      <li>Collections</li>
      <li>Men</li>
      <li>Women</li>
      <li>About</li>
      <li>Contact</li>
    </ul>
  </div>
</div>
    


</template>

<style scoped>

.v-enter-active,
.v-leave-active {
  transition: opacity 0.6s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
 .myNav{
     background-color: white !important;
     border-bottom: solid 1px hsl(0, 0%, 86%);
     width: 100%;
     padding-top: 0px;
     padding-bottom: 0px;
 }
 .headerBrand{
     font-family: 'Kumbh Sans', sans-serif !important;
     font-size: 36px;
     font-weight: 800;
     top: -24px;
 }
 .brandBurgerBtn{
     width: fit-content;
     padding-left: 0px;
     margin-left: 0px;
     display: flex;
     flex-direction: row-reverse;
 }
 .headerBrand:hover{
     color: hsl(26, 100%, 55%);
 }
 .navbar-toggler{
     margin-right: 10px;
     padding: 0px;
     height: fit-content;
 }


 .navText{
     font-family: 'Kumbh Sans', sans-serif !important;
     font-weight: 500;
     height: 64px;
 }
 .navText:hover{
     border-bottom: solid 3px hsl(26, 100%, 55%);
 }
 
 .navTextMarg{
     margin-right: 15px;
     padding-top: 0px;
 }
 .paddingContainer{
     padding-left: 0px;
     padding-right: 0px;
 }
 .avatarStyle{
     top: -17px;
     margin-left: 3rem;
     border: 3px solid hsla(26, 100%, 55%, 0) ;
     border-radius: 100%
 }
 .avatarStyle:hover{
     border: 3px solid hsl(26, 100%, 55%) ;
     border-radius: 100%;
     cursor: pointer;
 }
.cartStyle{
    top: -19px;
    margin-left: 1.5rem;
    cursor: pointer;
}

.hamburgerBtn {
  width: 26px;
  height: 4px;
  background-color: rgb(128, 128, 128);
  margin: 4px 0;
}
.hamburgerBtnFocus {
 
  background-color: hsl(26, 100%, 55%) !important;
  
}

.hamburgerBtn:active{
  border: none !important;
     outline: none !important;
  box-shadow: none !important;
}

.cartBadge{
  background-color:   hsl(26, 100%, 55%) !important;
  font-family: 'Kumbh Sans', sans-serif !important;
  padding: 2px 6px 2px 6px;
  text-align: center;
  top: -12px;
   color: white;
    font-size: 10px;
    font-weight: bold;
    cursor: pointer;
}
.sideBar{
width: 275px !important;
}
.sideBarList{
 list-style: none;
 padding-left: 10px;
}

.sideBarList li{
 font-family: 'Kumbh Sans', sans-serif !important;
 font-size: 18px;
 font-weight: 700;
 line-height: 45px;
}

.sidebarClose{
  padding-left: 14px !important;
}
@media screen and (max-width:992px) {
 .headerBrand{
     font-family: 'Kumbh Sans', sans-serif !important;
     font-size: 36px;
     font-weight: 800;
     top: -24px;
 }
  .cartStyle{
     margin-left: 0px;
 }
 .paddingContainer{
   padding-left: 2rem;
   padding-right: 2rem;
 }
}


@media screen and (max-width:576px) {
 .hamburgerBtn {
  width: 16px;
  height: 3px;
  background-color: rgb(128, 128, 128);
  margin: 3px 0;
}
.headerBrand{
     font-family: 'Kumbh Sans', sans-serif !important;
     font-size: 30px;
     font-weight: 800;
     top: -22.5px;
 }
  .avatarStyle{
     width: 40px;
     margin-left: 1.5rem;
 }

}

@media screen and (max-width:376px) {

  .avatarStyle{
     margin-left: 1rem;
 }
  .paddingContainer{
   padding-left: 1rem;
   padding-right: 1rem;
 }
 .avatarStyle{
     width: 35px;
     margin-left: 1rem;
 }

 
}


</style>