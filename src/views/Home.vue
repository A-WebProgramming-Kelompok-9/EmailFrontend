<template>
  <div class="index">
    <div class="body-container">
      <navbar></navbar>
      <land></land>
      <features></features>
    </div>
  </div>
</template>

<script>
import navbar from "@/components/Navbar"
import land from "@/components/Home/Land"
import features from "@/components/Home/Features"

export default {
  name: "Home",
  components: {
    navbar,
    land,
    features
  }
}
</script>

<style scoped lang="scss">
.index {
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, $brown-200 90%),
  url(../assets/Speedwagon_sepia.jpg) no-repeat $brown-200;
  background-position: 0px -130px;
  background-size: 100vw 100vh;

  .body-container {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>