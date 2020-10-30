<template>
  <div class="UserConteiner">
    <router-view class="Userview"></router-view>
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
  .Userview{
    width: 600px;
    padding: 20px;
  }
}
</style>