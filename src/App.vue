<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import Navbar from './components/Navbar.vue'
import CartButton from './components/CartButton.vue'
import PlusMinus from './components/PlusMinus.vue'
import Description from './components/Description.vue'
</script>

<template>
  <header>
  <Navbar/>
   
  </header>

  <main>
    <div class="container-fluid">
      <div class="row appRowMargin">
        <div class="col-6">

        </div>
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
  margin-top: 70px;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
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
</style>
