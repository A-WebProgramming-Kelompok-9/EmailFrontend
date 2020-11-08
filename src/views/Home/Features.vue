<template>
  <div class="features">
    <div class="text-item">
      <div class="item-title">
        <h1> Main Features</h1>
      </div>
      <p>s'Mail can be access via browser from your smartphone,
        you just need to have an account then login by using it.</p>
      <h2>No need to own a computer</h2>
    </div>
    <div class="image-item">
      <img src="@/assets/Rainbow_Yeah.jpg" alt="" class="image">
      <img src="@/assets/Speedwagon.jpg" alt="" class="image">
      <img src="@/assets/Speedwagon_2.jpg" alt="" class="image">
      <img src="https://i.kym-cdn.com/photos/images/newsfeed/001/499/826/2f0.png" alt="" class="image">
    </div>
  </div>
</template>

<script>
export default {
  name: "Features",
  components: {}
}
</script>

<style scoped lang=scss>
.text-item {
  .item-title {
    h1:before {
      content: "Main Features";
      left: -180px;
    }
  }
}

.image-item {
  display: grid;
  gap: 2rem;
  grid-template-columns: 1fr 1fr;
  margin-right: 50px;
  .image{
    width: 22vw;
    height: 25vh;
  }
}
h2{
  font-family: Anton;
  text-align: right;
}
</style>