<template>
  <div class="search-bar my-3 mr-3">
    <button @click="toggleside">Toggle sidebar: {{ this.$store.state.sided }}</button>
    <div class="search-area">
      <transition name="inputbox">
        <input v-if="clicked" type="text" class="searchinp h-full" id="dashboardsearchinp" @focusout="clicked=false">
      </transition>
      <transition name="inputicon">
        <label v-if="!clicked" for="dashboardsearchinp" @click="clicked=true" class="searchicon">
          <BIcon icon="search"></BIcon>
        </label>
      </transition>
    </div>
    <router-link class="btn btn-dark" to="/dashboard/Create">
      <BIcon icon="file-earmark-plus"></BIcon>
      Compose
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Search",
  components: {},
  data() {
    return {
      clicked: false
    }
  },
  methods: {
    toggleside() {
      this.$store.commit("toggleside")
    }
  },
}
</script>

<style scoped lang=scss>
.search-bar {
  display: flex;
  justify-content: space-between;
}

.search-area {
  width: calc(100% - 300px);
  position: relative;

  .searchinp {
    width: 100%;
    height: 100%;
    padding: 0 15px;
    background: white;
    border-radius: 2rem;
    outline: none;
    border: none;
  }

  .searchicon {
    margin: 0;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    height: 2rem;
    width: 2rem;
    border-radius: 2rem;
    background-color: white;
    padding-top: 4px;
    text-align: center;
  }

}
$animation-duration: 1s;
.inputicon-enter-active {
  animation: custom $animation-duration reverse;
}

.inputicon-leave-active {
  animation: custom $animation-duration;
}

@keyframes custom {
  25%{
    left: 20px;
    width: 2rem;
    border-radius: 2rem;
  }
  100% {
    left: 20px;
    width: 2rem;
    border-radius: 2rem;
  }
}

.inputbox-enter-active {
  animation: custom2 $animation-duration;
}

.inputbox-leave-active {
  animation: custom2 $animation-duration reverse;
}

@keyframes custom2 {
  from{
    opacity: 0;
  }
  25%{
    opacity: 0;
    width: 0;
  }
  100% {
    width: 100%;
    opacity: 1;

  }
}

</style>