<script>

import { cart } from '../store.js'
export default {
    data() {
    return {
      cart,
    }
  },
methods:{
      emptyCart(){
          cart.count = 0
      },     
  },
  
}
</script>
 
 <template>
 <transition>
       <div  class="card shadow p-3 mb-5 bg-body rounded dropDown border-0"  >
  <div class="card-body p-0 ">
      <div class="pt-2 ps-1 pb-1">
          <h6 class="card-title cardTitle">Cart</h6>
      </div>
    
    <hr>
    <div class="container text-center ">
        <div class="p-5" v-if="cart.count < 1">
            <h6  class="card-subtitle mb-2 text-muted my-auto">Your cart is empty.</h6>
        </div>
         
         <div class="row pt-2 containerMargin" v-if="cart.count > 1">
             <div class="col-2 p-0"><img src="../assets/images/image-product-1-thumbnail.jpg" width="" class="img-fluid cartImage" alt="Responsive image"></div>
             <div class="col-9 pe-0">
                 <p class="cardText">Fall Limited Edition Speakers $125 x {{cart.count}} <span class="cartAmount ms-1">${{cart.count * 125}}.00</span></p>
                    
             </div>
             <div class="col-1 deleteDiv p-0 justify-content-end">
                 <img src="../assets/images/icon-delete.svg" width="15" @click="emptyCart()" class="img-fluid my-auto "  alt="Responsive image">
             </div>
                <button type="button" class="btn btn-primary checkoutButton mt-3 mb-3">
    
        <Span class="ms-3">Checkout</Span>
        </button>
         
         </div>
          

    </div>
   
    
    
  </div>
</div>
 
 </transition>
   
 </template>

 <style scoped>
         .v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
    .cardTitle{
        font-family: 'Kumbh Sans', sans-serif !important;
        font-weight: 700;
    }

.dropDown{
   width: 22rem !important;
  position: absolute;
  top: 60px;
  right: -26px;
  z-index: 2000;
  border-radius: 10px !important;
  height: auto;
}

hr{
    color: rgba(0, 0, 0, 0.363);
}
.cartImage{
    border-radius: 6px !important;
}
.deleteDiv{
    display: flex;
    cursor: pointer;
}
.cardText{
    font-family: 'Kumbh Sans', sans-serif !important;
      color: hsl(219, 9%, 45%);
      font-weight: 500;
      text-align: left;
}

.checkoutButton{
     width: 100%;
     height: 55px;
     background-color: hsl(26, 100%, 55%) !important;
     border-color: hsl(26, 100%, 55%) !important;
     border-radius: 12px;
    
 }
 .checkoutButton:hover{
     background-color: hsl(26, 89%, 58%) ;
     border-color: hsl(26, 100%, 55%);
 }
 .cartAmount{
     font-weight: bold;
     color: black;
 }
@media screen and (max-width: 1300px) {
    .dropDown{
      right: 2px;
    }
}
@media screen and (max-width: 768px) {
    .dropDown{
      right: 10px;
    }
}
@media screen and (max-width: 576px) {
    .dropDown{
        top: 45px;
    }
}
@media screen and (max-width: 576px) {
    .dropDown{
        left: 0; 
  right: 0; 
  margin-left: auto; 
  margin-right: auto; 
    }
}
@media screen and (max-width: 375px) {
    .dropDown{
        width: 19rem !important;
  
    }
    .cardText{
        font-size: 14px;
    }
}

 </style>

