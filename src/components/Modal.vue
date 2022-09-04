<script>
export default {
     props: {
    show: Boolean
  },
  data(){
      return{
           isActive: 1,
        imageNum: 0,
        numForClass: 5,
        clickedBtn: null,
        showModal: false,
          imageUrl: "src/assets/images/image-product-1.jpg",
          image: ["src/assets/images/image-product-1.jpg","src/assets/images/image-product-2.jpg","src/assets/images/image-product-3.jpg","src/assets/images/image-product-4.jpg"]
      }
  },
    methods: {
        changeImage(urlLink){
          this.imageNum = urlLink
        },
        changeClass(e){
            this.isActive = e
        },
        arrayNumUp(){
            if(this.imageNum < 3){
                this.imageNum++
                this.numForClass = this.imageNum
                this.isActive++
            
            }
            
        },
        arrayNumDown(){
            if(this.imageNum > 0){
                this.imageNum--
                this.numForClass = this.imageNum
                this.isActive--

            }
        },
    }
}
</script>

<template>
  <Transition name="modal">
    <div v-if="show" class="modal-mask" @click="$emit('close')" >
      <div class="modal-wrapper" >
        <div class="modal-container" @click.stop>
          <div class="modal-header justify-content-end">
            <slot class="slotHeader" name="header">
           
                  <button
                class="modal-default-button float-end buttonStyle"
                 @click="$emit('close')"
              ><i class="fa-solid fa-x"></i></button>
            </slot>
          </div>

          <div class="modal-body">
            <slot name="body">
                <div class="col-12 col-lg-10 mx-auto d-none d-lg-block">
                    <img  :src="image[imageNum]"  class="img-fluid productPic" alt="...">
                    
                <button class="ms-2 ms-sm-3 ms-md-4  my-auto btnStatus btnStatus1" :disabled="imageNum == 0" @click="arrayNumDown(); clickedBtn = true" :class="{btnStatusClicked: clickedBtn & numForClass > 0 }"><img src="../assets/images/icon-previous.svg"  class="img-fluid my-auto " alt="..."></button>
                <button class="me-2 me-sm-3 me-md-4  my-auto btnStatus btnStatus2" :disabled="imageNum == 3" @click="arrayNumUp(); clickedBtn = false" :class="{btnStatusClicked: !clickedBtn & numForClass < 3}"><img src="../assets/images/icon-next.svg"  class="img-fluid my-auto" alt="..."> </button>
                </div>
                <div class="col-10 mx-auto mt-4 d-none d-lg-block" >
                <div class="row">
                    <div class="col-3">
                        <div class="borderMorderTransparent"  :class="{borderMorder: isActive == 1}">
                        <img src="../assets/images/image-product-1-thumbnail.jpg" @click="changeImage(0), changeClass(1)" :class="{active: isActive == 1}"  class="img-fluid productPicThumb " alt="...">
                        </div>
                    </div>
                    <div class="col-3">
                        <div class="borderMorderTransparent"  :class="{borderMorder: isActive == 2}">
                        <img src="../assets/images/image-product-2-thumbnail.jpg" @click="changeImage(1), changeClass(2)" :class="{ active: isActive == 2}"  class="img-fluid productPicThumb" alt="...">
                        </div>
                    </div>
                    <div class="col-3" >
                        <div class="borderMorderTransparent"  :class="{borderMorder: isActive == 3}">
                        <img src="../assets/images/image-product-3-thumbnail.jpg" @click="changeImage(2), changeClass(3)" :class="{ active: isActive == 3}"  class="img-fluid productPicThumb" alt="...">
                        </div>
                    </div>
                    <div class="col-3" >
                        <div class="borderMorderTransparent"  :class="{borderMorder: isActive == 4}">
                        <img src="../assets/images/image-product-4-thumbnail.jpg" @click="changeImage(3),changeClass(4)" :class="{ active: isActive == 4}"  class="img-fluid productPicThumb" alt="...">
                        </div>
                    </div>
                </div>       
           </div>


            </slot>
          </div>

          <div class="modal-footer">
            <slot name="footer">
            
            </slot>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.btnStatus1{
 position: absolute;
 left: -40px;
 top: 50%;

}
.btnStatus2{
position: absolute;
right: -40px;
top: 50%;
}
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.705);
  
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 650px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: rgba(255, 255, 255, 0);
 
  border-radius: 2px;
  transition: all 0.3s ease;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}

.modal-enter-from {
  opacity: 0;
}

.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1), 0.3s;
}

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

.buttonStyle{
    font-size: 26px;
    font-weight: bold;
    border: none;
    background: #faebd700;
}

.buttonStyle:hover{
    color: hsl(26, 89%, 58%, 1)
}


</style>