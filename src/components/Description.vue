<script>
import PlusMinus from './PlusMinus.vue'
import CartButton from './CartButton.vue'
export default {
    components: {
    PlusMinus,
    CartButton
  },
     data() {
    return {
     
    }
    },
}
</script>

<template>
    <div class="col-6">
             <div class="row mt-5">
            <div class="col-12">
                <p class="subHeader">SNEAKER COMPANY</p>
            </div>
            <div class="col-12 ">
                <h1 class="header">Fall Limited Edition Sneakers</h1>
            </div>
            <div class="col-12 mt-4">
                <p class="paragraphText">These low-profile sneakers are perfect casual wear companion. 
                    Featuring a durable rubber sole, they'll withstand everything the weather can offer</p>
            </div>
            <div class="col-12 mt-3 d-flex">
                <h3 class="priceTag">$125.00 <span class="badge bg-secondary ms-2 sellBadge">50%</span></h3>
                
            </div>
            <div class="col-12  d-flex m-0 mb-5">
                <span class="text-decoration-line-through lineText">$250.00</span>
            </div>
            <div class="col-4">
                <plus-minus/>
            </div>
            <div class="col-8">
                <cart-button/>
            </div>
        </div>
    </div>
</template>

<style scoped>
.header{
    font-family: 'Kumbh Sans', sans-serif !important;
    color: hsl(220, 13%, 13%);
    font-weight: 700;
    width: 450px;
}
.subHeader{
    font-family: 'Kumbh Sans', sans-serif !important;
    color: hsl(26, 100%, 55%);
    font-weight: 600;
    font-size: 16px;
}
.paragraphText{
    font-family: 'Kumbh Sans', sans-serif !important;
    color: hsl(219, 9%, 45%);
    width: 470px;
}
.priceTag{
    font-family: 'Kumbh Sans', sans-serif !important;
    color: hsl(220, 13%, 13%);
    font-weight: 700;
}
.sellBadge{
    background-color: hsl(25, 100%, 94%) !important;
    color: hsl(26, 100%, 55%) ;
    font-size: 16px;
}
.lineText{
     font-family: 'Kumbh Sans', sans-serif !important;
      color: hsl(220, 14%, 75%);
      font-weight: 700;
}
</style>