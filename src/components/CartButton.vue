<script>
import { store } from '../store.js'
import { cart } from '../store.js'
export default {
    data() {
    return {
      store,
      cart
    }
  },
  methods: {
      addToCart(){
          let productNum = this.store.count
          let cartCurrent =this.cart.count
          this.cart.count = productNum + cartCurrent
          this.store.count = 0
      }
  },
  

  
}
</script>

<template>

    <button type="button" class="btn btn-primary cartButton  " :class="{ cartButtonDisabled: store.count < 1 }" @click="addToCart">
        <img src="../assets/images/icon-cartBTN.svg" class="img-fluid imageFilter my-auto mx-auto" width="20" alt="...">
        <Span class="ms-3 ">Add to cart</Span>
        </button>

</template>

<style scoped>
 .cartButton{
    
     width:90%;
     height: 55px;
     background-color: hsl(26, 100%, 55%) ;
     border-color: hsl(26, 100%, 55%);
     border-radius: 12px;
    
 }
 .cartButton:hover{
     background-color: hsl(26, 89%, 58%) ;
     border-color: hsl(26, 100%, 55%);
 }
  .cartButton:focus{
    outline: none !important;
  box-shadow: none !important;
     
 }
 .cartButtonDisabled{
     background-color: hsla(26, 100%, 63%, 0.685) !important;
     border-color: hsla(26, 100%, 63%, 0.685) !important;
     pointer-events: none;
 }
 
 span{
 font-weight: 700;
     font-size: 16px;
      font-family: 'Kumbh Sans', sans-serif !important;
 }

 @media screen  and (max-width: 1200px){
     .cartButton{
         width: 100% !important;
     }
 }

 @media  screen and (max-width: 992) {
     .cartButton{
         margin-top: 15px;
     }
 }

</style>
    
