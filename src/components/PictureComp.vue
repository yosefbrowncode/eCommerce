<script>
import Modal from './Modal.vue'
 import image1 from "@/assets/images/image-product-1.jpg"
 import image2 from "@/assets/images/image-product-2.jpg"
 import image3 from "@/assets/images/image-product-3.jpg"
 import image4 from "@/assets/images/image-product-4.jpg"
export default {
    components: {
        Modal
  },
    data() {
    return {
        isActive: 1,
        imageNum: 0,
        numForClass: 5,
        clickedBtn: null,
        showModal: false,
        imageUrl: image1,
        image: [image1, image2, image3, image4]
    }
    },
    methods: {
        changeImage(urlLink){
          this.imageUrl = urlLink
        },
        changeClass(e){
            this.isActive = e
        },
        arrayNumUp(){
            if(this.imageNum < 3){
                this.imageNum++
                this.numForClass = this.imageNum
            }
            
        },
        arrayNumDown(){
            if(this.imageNum > 0){
                this.imageNum--
                this.numForClass = this.imageNum
            }
        },
    }
    
}
</script>

<template>
    <div class="col-12 col-lg-6 col-xxl-6">
          <!-- <button id="show-modal" @click="showModal = true">Show Modal</button> -->
        <div class="row">
            <div class="col-12 col-lg-10 mx-auto changePicPadding d-flex justify-content-between d-lg-none" :style="{ backgroundImage: 'url(  '+ image[imageNum]  +'  )' }" >
                <button class="ms-2 ms-sm-3 ms-md-4  my-auto btnStatus" :disabled="imageNum == 0" @click="arrayNumDown(); clickedBtn = true" :class="{btnStatusClicked: clickedBtn & numForClass > 0 }"><img src="../assets/images/icon-previous.svg"  class="img-fluid my-auto " alt="..."></button>
                <button class="me-2 me-sm-3 me-md-4  my-auto btnStatus" :disabled="imageNum == 3" @click="arrayNumUp(); clickedBtn = false" :class="{btnStatusClicked: !clickedBtn & numForClass < 3}"><img src="../assets/images/icon-next.svg"  class="img-fluid my-auto" alt="..."> </button>
           
            </div>
            <div class="col-12 col-lg-10 mx-auto d-none d-lg-block">
         <a id="show-modal" @click="showModal = true"><img v-show="isActive" :src="imageUrl"  class="img-fluid productPic" alt="..."></a>
            </div>
            <div class="col-10 mx-auto mt-4 d-none d-lg-block" >
                <div class="row">
                    <div class="col-3">
                        <div class="borderMorderTransparent"  :class="{borderMorder: isActive == 1}">
                        <img src="../assets/images/image-product-1-thumbnail.jpg" @click="changeImage(image[0]), changeClass(1)" :class="{active: isActive == 1}"  class="img-fluid productPicThumb " alt="...">
                        </div>
                    </div>
                    <div class="col-3">
                        <div class="borderMorderTransparent"  :class="{borderMorder: isActive == 2}">
                        <img src="../assets/images/image-product-2-thumbnail.jpg" @click="changeImage(image[1]), changeClass(2)" :class="{ active: isActive == 2}"  class="img-fluid productPicThumb" alt="...">
                        </div>
                    </div>
                    <div class="col-3" >
                        <div class="borderMorderTransparent"  :class="{borderMorder: isActive == 3}">
                        <img src="../assets/images/image-product-3-thumbnail.jpg" @click="changeImage(image[2]), changeClass(3)" :class="{ active: isActive == 3}"  class="img-fluid productPicThumb" alt="...">
                        </div>
                    </div>
                    <div class="col-3" >
                        <div class="borderMorderTransparent"  :class="{borderMorder: isActive == 4}">
                        <img src="../assets/images/image-product-4-thumbnail.jpg" @click="changeImage(image[3]),changeClass(4)" :class="{ active: isActive == 4}"  class="img-fluid productPicThumb" alt="...">
                        </div>
                    </div>
                </div>       
           </div>
        </div>
    </div>
    <!-- Not The best Idea but I am going for it -->

      <Teleport to="body">
     <!-- use the modal component, pass in the prop -->
    <modal :show="showModal" @close="showModal = false"  >
        
        
     
    </modal>
  </Teleport>
   
</template>

<style scoped>

.btnStatus{
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 3px rgba(235, 144, 74, 0) solid;
   display: flex;
   justify-content: center;
}

.btnStatusClicked{
    border: 3px rgb(235, 144, 74) solid;
}
 .productPic{
     border-radius: 20px;
     cursor: pointer;
 }
 .productPicThumb{
     border-radius: 6px;
   
 }
 .productPicThumb:hover{
     cursor: pointer;
     opacity: 0.6;
 }
 .active{
     opacity: 0.6;
 }
 .borderMorderTransparent{
     border: solid 3px rgba(243, 135, 53, 0); 
     
 }
 .borderMorder{
     border: solid 3px hsl(26, 89%, 58%, 1) !important; 
     width: 100%; 
     border-radius: 10px;
 }

 @media  screen and (max-width: 992px) {
     .changePicPadding{
         padding-left: 0px;
         padding-right: 0px;
         background-size:cover;
         background-repeat: no-repeat;
         height: 500px;
     }
     .productPic{
         border-radius: 0px;
     }
 }

 @media screen and (max-width: 768px) {
     .changePicPadding{
         height: 400px;
     }
 }
  @media screen and (max-width: 576px) {
     .changePicPadding{
         height: 350px;
     }
 }
   @media screen and (max-width: 475px) {
     .changePicPadding{
         height: 300px;
     }
 }
 @media screen and (max-width: 375px) {
     .btnStatus{
        width: 45px;
    height: 45px;
     }
 }
</style>