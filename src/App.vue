<template>
  <div id="app">
    <Main></Main>
    <Order></Order>
  </div>
</template>

<script>
import { store } from './store'
import Main from './components/Main.vue'
import Order from './components/Order.vue'

export default {
  name: 'app',
  store,
  components: {
    Main: Main,
    Order: Order
  }
}
</script>
<style>
#app{
  display: flex;
}
</style>
