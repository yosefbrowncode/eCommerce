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
             <div class="row">
            <div class="col-12">
                <p>SNEAKER COMPANY</p>
            </div>
            <div class="col-12">
                <h1>Fall Limited Edition Sneakers</h1>
            </div>
            <div class="col-12">
                <p>Can't wait for you to tap into the sounds, go through the course & level up on your road to getting placements
                    Keep in mind along with the full production suite you will also get these exclusive unreleased bonuses</p>
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

</style>