import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    isRunning: false,
    order: {
      totalPrice: 0,
      default: '',
      option: '휘핑크림'
    }
  },
  mutations: {
    startOrder(state) {
      state.isRunning = true
    },
    addToOrder(state, payload) {
      state.order.default += payload.item;
      state.order.totalPrice += payload.price;
    }
  }
})
