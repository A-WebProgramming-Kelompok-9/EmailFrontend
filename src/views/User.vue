<template>
<<<<<<< HEAD
  <div class="UserConteiner">
    <router-view class="Userview"></router-view>
=======
  <div>
    <router-view></router-view>
>>>>>>> 4edd5e1... master
  </div>
</template>

<script>
export default {
  name: "User",
  components: {}
}
</script>

<style scoped lang=scss>
.UserConteiner{
  display: flex;
  flex-direction: column;
  height: 100vh;
  align-items: center;
  justify-content: center;
  background-color: $brown-200;
  .Userview{
    display: flex;
    flex-direction: column;
    width: 500px;
    padding: 20px;
    background-color: $brown-400;
    border-radius: 10px;
    color: white;
  }
}
</style>