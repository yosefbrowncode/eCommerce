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
    <button type="button" class="btn btn-primary cartButton" @click="addToCart">Add to cart</button>

</template>

<style scoped>
 .cartButton{
     width: 250px;
     height: 50px;
     background-color: hsl(26, 100%, 55%) ;
     border-color: hsl(26, 100%, 55%);
 }
</style>
    
