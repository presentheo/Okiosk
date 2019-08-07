import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    isRunning: false,
    selectedItem: null,
    order: {
      totalPrice: 0,
      itemList: []
    }
  },
  mutations: {
    startOrder(state) {
      state.isRunning = true
    },
    addToOrder(state, payload) {
      state.order.itemList = [
        ...state.order.itemList, payload.orderItem
      ]
      state.order.totalPrice += payload.orderItem.price;
    }
  }
})
