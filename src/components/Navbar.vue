<script setup>


</script>

<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light myNav pl-0 pr-0">
  <div class="container-fluid paddingContainer">
    <a class="navbar-brand headerBrand" href="#">sneakers</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ms-4">
        <li class="nav-item ">
          <a class="nav-link navText navTextMarg" aria-current="page" href="#">Collections</a>
        </li>
        <li class="nav-item">
          <a class="nav-link navText navTextMarg" href="#">Men</a>
        </li>
        <li class="nav-item">
          <a class="nav-link navText navTextMarg" href="#">Women</a>
        </li>
         <li class="nav-item">
          <a class="nav-link navText navTextMarg" href="#">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link navText navTextMarg" href="#">Contact</a>
        </li>
      </ul>
    </div>
     <!-- <font-awesome-icon icon="fa-solid fa-cart-shopping" /> -->
     <img src="../assets/images/icon-cart.svg" class="img-fluid ms-4" width="25" alt="...">
      <img src="../assets/images/image-avatar.png" class="img-fluid ms-5" width="50" alt="...">
  </div>
</nav>
</template>

<style scoped>
 .myNav{
     background-color: white !important;
     border-bottom: solid 1px hsl(220, 14%, 75%);
     width: 100%;
 }
 .headerBrand{
     font-family: 'Kumbh Sans', sans-serif !important;
     font-size: 36px;
     font-weight: 800;
 }

 .navText{
     font-family: 'Kumbh Sans', sans-serif !important;
     font-weight: 500;
 }
 
 .navTextMarg{
     margin-right: 15px;
 }
 .paddingContainer{
     padding-left: 0px;
     padding-right: 0px;
 }
</style>