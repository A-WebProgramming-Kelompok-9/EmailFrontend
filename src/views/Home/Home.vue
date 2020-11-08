<template>
  <div class="home">
    <div class="text-item">
      <div class="item-title">
        <h1> What Is Smail</h1>
      </div>
      <p>Lorem Ipsum sit dolor amet Lorem Ipsum sit dolor amet Lorem Ipsum sit dolor amet Lorem Ipsum sit dolor amet</p>
      <div class="btnlist">
        <router-link to="/user/login/" class="btn btn-outline-light">About Us</router-link>
        <router-link to="/user/register" class="btn btn-dark">Join Us</router-link>
      </div>
    </div>
    <div class="image-item">
      <img src="@/assets/Speedwagon_sepia.jpg" alt="" class="image">
    </div>
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
  .item-title{
    h1:before{
      content: "What Is Smail";
      left: -180px;
    }
  }
}
.image-item{
  grid-area: image;
}
.btnlist{
  display: flex;
  justify-content: space-between;
  .btn{
    font-family: Roboto;
    padding: .8rem 50px;
  }
}

</style>