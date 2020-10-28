<template>
  <div>
    <sidebar></sidebar>
    <div>
      <search></search>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import sidebar from "@/components/Sidebar"
import search from "@/components/Dashboard/Search"
export default {
  name: "Dashboard",
  components: {
    sidebar,
    search
  }
}
</script>

<style scoped lang=scss>

</style>