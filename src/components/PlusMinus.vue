<script>
import { store } from '../store.js'
export default {
 
    data() {
    return {
      store
    }
    },
  methods: {
      plusButton(){
          this.store.count++
      },
      minusButton(){
          if (this.store.count > 0){
              this.store.count--
          }
          
      }
  }
}
</script>

<template>

<button  class="btn btn-secondary btn-lg plusMinusBtn" >
   <img src="../assets/images/icon-minus.svg" @click="minusButton" class="img-fluid cartStyle my-auto " width="25" alt="...">
   {{store.count}}
   <img src="../assets/images/icon-plus.svg" @click="plusButton" class="img-fluid cartStyle my-auto" width="25" alt="...">
</button>
</template>

<style scoped>
.plusMinusBtn{
    width: 150px;
    display: flex;
    justify-content: space-between;
    background-color: #f5f5f5;
    border-color: #f5f5f5;
    color: black;
    font-weight: bold;
}
.plusMinusBtn:hover{
    background-color: #f5f5f5;
    border-color: #f5f5f5;
    color: black;
}
</style>