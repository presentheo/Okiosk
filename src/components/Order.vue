<template>
  <div class="order-window">
    <div v-if="this.$store.state.isRunning">
      <p>주문내용 : {{this.$store.state.order.default}}</p>
      <p>총 금액 : {{this.$store.state.order.totalPrice}}</p>
    </div>
    <div v-else>
      <p>주문을 기다리고 있습니다</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Order',
  props: {
    msg: String
  },
  methods: {
    toggleRunning: function(){
      this.$store.commit('toggle')
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .order-window {
    border: 1px solid #ddd;
    padding: 20px;
  }

</style>
