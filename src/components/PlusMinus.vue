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

<button  class="btn btn-secondary btn-lg plusMinusBtn row"  >
   
        <img src="../assets/images/icon-minus.svg" @click="minusButton" class="img-fluid cartStyle my-auto col-4 pl-0" width="12" alt="...">
  
   
   <span class="plusMinusNum my-auto col-4">{{store.count}}</span>
   <img src="../assets/images/icon-plus.svg" @click="plusButton" class="img-fluid cartStyle my-auto col-4 pr-0" width="12" alt="...">



    
</button>
</template>

<style scoped>
.plusMinusBtn{
    
    width: 150px;
    height: 55px;
    display: flex;
    justify-content: space-between;
    background-color: #f5f5f5;
    border-color: #f5f5f5;
  
}
.plusMinusBtn:hover{
    background-color: #f5f5f5;
    border-color: #f5f5f5;
    color: black;
}
.plusMinusBtn:focus{
    background-color: #f5f5f5;
    border-color: #f5f5f5;
    color: black;
}
.plusMinusNum{
    font-family: 'Kumbh Sans', sans-serif !important;
  color: black;
    font-weight: 600;
}

</style>