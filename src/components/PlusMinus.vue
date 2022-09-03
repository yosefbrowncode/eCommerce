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

<button  class="btn btn btn-lg plusMinusBtn"  >
   
     
  <span class="cartStyle col-4 pr-0" @click="minusButton">
         <img src="../assets/images/icon-minus.svg" class="img-fluid "  width="15" alt="...">
  
   </span>
   
   <span class="plusMinusNum my-auto col-4">{{store.count}}</span>
   <span class="cartStyle col-4 pr-0" @click="plusButton">
        <img src="../assets/images/icon-plus.svg"  class="img-fluid " width="15" alt="...">
   </span>
  



    
</button>
</template>

<style scoped>

.plusMinusBtn{
    width:100%;
    height: 55px;
    display: flex;
    justify-content: space-between;
    background-color: #f5f5f5 !important;
    border-color: #f5f5f5 !important;
}
.plusMinusBtn:focus{
    outline: none !important;
  box-shadow: none !important; 
}
.plusMinusBtn:active{
    outline: none !important;
  box-shadow: none !important; 
}
.plusMinusNum{
    font-family: 'Kumbh Sans', sans-serif !important;
    color: black;
    font-weight: 600;
}

</style>