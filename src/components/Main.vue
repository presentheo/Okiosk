<template>
  <div>
    <div class="hello">
    </div>
    <div class="item-wrap">
      <!-- 아이템 리스트 반복 구간 -->
      <div class="item-cell" v-for="item in itemList" :key="item.id">
        <div class="item-content">
          <div class="item-image">
            <img src="https://placehold.it/200x200" alt="상품 이미지">
          </div>
          <div class="item-title">
            <h3>{{item.name}}</h3>
          </div>
          <div class="item-price">
            <p>{{item.price}}원</p>
          </div>
          <button @click="onAddToOrder(item)">주문하기</button>
        </div>
      </div>
      <!-- 아이템 리스트 반복 구간 끝 -->
    </div>
  </div>
</template>

<script>

import { itemList } from '../items'

export default {
  name: 'Main',
  props: {
    msg: String
  },
  data() {
    return {
      itemList: itemList
    }
  },
  methods: {
    onAddToOrder: function(item) {
      this.$store.commit('startOrder');
      this.$store.commit('addToOrder', {orderItem: item})
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.item-wrap{
  display: flex;
  width: 70vw;
  border: 1px solid #ddd;  
}

</style>
