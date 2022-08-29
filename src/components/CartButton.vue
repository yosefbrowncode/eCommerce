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

    <button type="button" class="btn btn-primary cartButton " @click="addToCart">
        <img src="../assets/images/icon-cartBTN.svg" class="img-fluid imageFilter my-auto mx-auto" width="20" alt="...">
        <Span class="ms-3 ">Add to cart</Span>
        </button>

</template>

<style scoped>
 .cartButton{
    
     width: 275px;
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
     background-color: hsl(26, 89%, 58%) ;
     border-color: hsl(26, 100%, 55%);
     
 }
 span{
 font-weight: 700;
     font-size: 16px;
      font-family: 'Kumbh Sans', sans-serif !important;
 }

</style>
    
