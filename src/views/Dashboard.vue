<template>
  <div class="dashboard">
    <sidebar></sidebar>
    <div>
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
  }
}
</script>

<style scoped lang=scss>
.dashboard{
  display: flex;
}
</style>