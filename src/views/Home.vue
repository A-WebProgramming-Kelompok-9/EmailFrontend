<template>
  <div class="index">
    <div class="body-container">
      <navbar></navbar>
      <land></land>
    </div>
  </div>
</template>

<script>
import navbar from "@/components/Navbar"
import land from "@/components/Home/Land"
export default {
  name: "Home",
  components: {
    navbar,
    land
  }
}
</script>

<style scoped lang="scss">
.index{
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, $brown-200 90%),
  url(../assets/Speedwagon_sepia.jpg) no-repeat $brown-200;
  background-position: 0px -130px;
  background-size: 100vw 100vh;
  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.288);
    outline: 1px solid slategrey;
    border-radius: 50px;
  }
  .body-container{
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>