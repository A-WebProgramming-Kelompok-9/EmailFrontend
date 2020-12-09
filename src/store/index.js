import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sided: true,
    user:{},
    log:{}
  },
  getters:{
  },
  mutations: {
    toggleside(state){
      state.sided = !state.sided
    }
  },
  actions: {
  },
  modules: {
  }
})
