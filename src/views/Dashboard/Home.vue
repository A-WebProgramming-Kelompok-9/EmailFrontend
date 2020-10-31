<template>
  <div class="home">
    <searchbar></searchbar>
    Home
  </div>
</template>

<script>
import searchbar from "@/components/Dashboard/Search"

export default {
  name: "Home",
  components: {
    searchbar
  },

}
</script>

<style scoped lang=scss>
.home {
  background-color: $brown-100;
  display: flex;
  flex-direction: column;
}
</style>