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
    <div class="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-6 col-xxl-6 colChange">
             <div class="row mt-3 mt-sm-4 mt-md-5 mt-lg-0 mt-xl-5  mt-xxl-5  descriptionDiv me-0 ms-0 ">
            <div class="col-12 col-md-11 col-lg-11 col-xl-11 col-xxl-11  ">
                <p class="subHeader">SNEAKER COMPANY</p>
            </div>
            <div class="col-12 col-md-11 col-lg-11 col-xl-11 col-xxl-11  ">
                <h1 class="header">Fall Limited Edition Sneakers</h1>
            </div>
            <div class="col-12 col-md-11 col-lg-11 col-xl-11 col-xxl-11 addParagraphMarg  ">
                <p class="paragraphText">These low-profile sneakers are perfect casual wear companion. 
                    Featuring a durable rubber sole, they'll withstand everything the weather can offer</p>
            </div>
            <div class="col-12 col-sm-12 col-md-11 col-lg-11 col-xl-11 col-xxl-11   mt-3 d-flex justify-content-between">
                <h3 class="priceTag">$125.00 <span class="badge bg-secondary ms-2 sellBadge">50%</span></h3>
                <span class="text-decoration-line-through lineText d-block d-sm-none">$250.00</span>
                
            </div>
            <div class=" col-12 col-md-11 col-lg-11 col-xl-11 col-xxl-11 d-none d-xs-block d-sm-block d-md-block d-lg-block   d-flex m-0 mb-5">
                <span class="text-decoration-line-through lineText">$250.00</span>
            </div>
            <div class="col-12 col-lg-12 col-xl-12 col-xxl-12  ms-xl-2 ms-xxl-2  row takewayPadding  ">
              
                     <div class="col-12 col-md-5 col-lg-5 col-xl-5 col-xxl-5">
                <plus-minus/>
            </div>
            <div class="col-12 col-md-7 col-lg-7 col-xl-7 col-xxl-7 giveMarginMobile">
                <cart-button/>
            </div>

           
               

            </div>
            
        </div>
    </div>
</template>

<style scoped>
.header{
    font-family: 'Kumbh Sans', sans-serif !important;
    color: hsl(220, 13%, 13%);
    font-weight: 750;
    letter-spacing: 1px;
    /* width: 450px; */
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
    line-height: 26px;
    letter-spacing: 1px;
    /* width: 470px; */
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
.addParagraphMarg{
    margin-top: 1.5rem;
}

@media screen and (min-width: 1200px){
    .descriptionDiv{
    justify-content: center;
}
}
@media screen and (max-width: 992px){
    .descriptionDiv{
    justify-content: center;
}
.takewayPadding{
    padding-left: 0px;
    padding-right: 0px;
}
}
@media screen and (max-width: 768px){
    .giveMarginMobile{
        margin-top: 18px;
    }
}
@media screen and (max-width: 576px){
    .takewayPadding{
        margin-top: 24px ;
    }
    .addParagraphMarg{
        margin-top: 0.5rem;
    }
}
</style>