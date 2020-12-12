import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sided: true,
    log:{},
    user: null,
  },
  getters:{
    getUser: state=>{
      if(state.user==null && localStorage.user){
        state.user= JSON.parse(localStorage.user);
      }
      return state.user;
    }
  },
  mutations: {
    toggleside(state){
      state.sided = !state.sided
    },
    changeuser(state){
      state.user= JSON.parse(localStorage.user);
    },
    deleteUser(state){
      state.user=null;
    }
  },
  actions: {
  },
  modules: {
  }
})
