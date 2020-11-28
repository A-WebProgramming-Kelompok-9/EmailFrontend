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
  background-color: $brown-200;
  .Userview{
    display: flex;
    flex-direction: column;
    width: 480px;
    padding: 20px;
    background-color: $brown-400;
    border-radius: 10px;
    color: white;
    z-index: 1;
  }
  &:after {
    content: "";
    position: absolute;
    opacity: 0.5;
    z-index: 0;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-image: url("../assets/Speed.png");
    background-repeat: no-repeat;
    background-position: center;
    background-size: 70vw;
  }
}
</style>