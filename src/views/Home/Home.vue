<template>
  <div class="home">
    <div class="text-item">
      <h1> What Is Smail</h1>
      <p>Lorem Ipsum sit dolor amet Lorem Ipsum sit dolor amet Lorem Ipsum sit dolor amet Lorem Ipsum sit dolor amet</p>
      <div class="btnlist"></div>
    </div>
    <div class="image-item">Image 2</div>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {}
}
</script>

<style scoped lang=scss>
.text-item{
grid-area: text;

}
.image-item{
  grid-area: image;
}
</style>