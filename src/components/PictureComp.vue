<script>
import { proxyRefs } from '@vue/reactivity'
export default {
    data() {
    return {
     imageUrl: "src/assets/images/image-product-1.jpg",
     image: ["src/assets/images/image-product-1.jpg","src/assets/images/image-product-2.jpg","src/assets/images/image-product-3.jpg","src/assets/images/image-product-4.jpg"]
    }
    },
    methods: {
        changeImage(urlLink){
          this.imageUrl = urlLink
          
        }
    }
    
}
</script>

<template>
    <div class="col-6">
        <div class="row">
            <div class="col-10 mx-auto">
                <Transition name="slide-fade">
                    <img :src="imageUrl"  class="img-fluid productPic" alt="...">
                </Transition>
                
            </div>
            <div class="col-10 mx-auto mt-4" >
                <div class="row">
                    <div class="col-3"  @click="changeImage(image[0])">
                        <img src="../assets/images/image-product-1-thumbnail.jpg"  class="img-fluid productPicThumb" alt="..." >
                    </div>
                    <div class="col-3" @click="changeImage(image[1])">
                        <img src="../assets/images/image-product-2-thumbnail.jpg"   class="img-fluid productPicThumb" alt="...">
                    </div>
                    <div class="col-3" @click="changeImage(image[2])">
                        <img src="../assets/images/image-product-3-thumbnail.jpg"   class="img-fluid productPicThumb" alt="...">
                    </div>
                    <div class="col-3" @click="changeImage(image[3])">
                        <img src="../assets/images/image-product-4-thumbnail.jpg"   class="img-fluid productPicThumb" alt="...">
                    </div>
                </div>
            

                    
    </div>
           
        </div>
    </div>
</template>

<style scoped>
 .productPic{
     border-radius: 20px;
 }
 .productPicThumb{
     border-radius: 10px;
 }
</style>