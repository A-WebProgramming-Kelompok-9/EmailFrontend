<template>
  <div class="dashboard">
    <transition name="fade">
      <sidebar v-if="$store.state.sided" class="sidebar"></sidebar>
    </transition>
    <div class="content-container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import sidebar from "@/components/Sidebar"
export default {
  name: "Dashboard",
  components: {
    sidebar,
  },
}
</script>

<style scoped lang=scss>
.dashboard{
  display: flex;
}

.content-container{
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.fade-enter-active, .fade-leave-active {
  transition: transform .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  transform: translateX(-250px);
}
</style>