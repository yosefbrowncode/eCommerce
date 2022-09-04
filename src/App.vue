<script setup>
import Navbar from './components/Navbar.vue'
import CartButton from './components/CartButton.vue'
import PlusMinus from './components/PlusMinus.vue'
import Description from './components/Description.vue'
import PictureComp from './components/PictureComp.vue'

</script>

<template>
  <header>
  <Navbar/>
  </header>

  <main>
    <div class="container-fluid">
      <div class="row appRowMargin">
        <picture-comp/>
      <description/>
      </div>
    </div>
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}
.appRowMargin{
  margin-top: 90px;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}

@media screen and (max-width: 992px){
  .appRowMargin{
    margin-top: 0px;
    justify-content: center;
  }
  
}

</style>
