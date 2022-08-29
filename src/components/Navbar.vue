<script>
import { cart } from '../store.js'
export default {
    data() {
    return {
      cart,
    }
    }
}
  

</script>

<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light myNav pl-0 pr-0">
  <div class="container-fluid paddingContainer">
      <div class="container brandBurgerBtn">
           <a class="navbar-brand headerBrand" href="#">sneakers</a>
    <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <div class="hamburgerBtn"></div>
      <div class="hamburgerBtn"></div>
      <div class="hamburgerBtn"></div>
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
     <img src="../assets/images/icon-cart.svg" class="img-fluid cartStyle" width="25" alt="...">
  <span v-show="cart.count > 0" class="  badge rounded-pill bg-danger cartBadge pt-0 pb-0">
   {{cart.count}}
  </span>

     
      <img src="../assets/images/image-avatar.png" class="img-fluid  avatarStyle" width="50" alt="...">
  </div>
</nav>
</template>

<style scoped>
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
     top: -15px;
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
    top: -15px;
    margin-left: 1.5rem;
}

.hamburgerBtn {
  width: 26px;
  height: 4px;
  background-color: rgb(128, 128, 128);
  margin: 4px 0;
}

.cartBadge{
  background-color:   hsl(26, 100%, 55%) !important;
  margin-top: -51px;
    margin-left: -14px;
    padding-top: 1.5px !important;
    padding-bottom: 2px !important;
    font-size: 10px;
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
     top: -20px;
 }
  .avatarStyle{
     width: 30px;
     margin-left: 1.5rem;
 }

}

@media screen and (max-width:376px) {

  .avatarStyle{
     width: 25px;
     margin-left: 1rem;
 }
 
}


</style>