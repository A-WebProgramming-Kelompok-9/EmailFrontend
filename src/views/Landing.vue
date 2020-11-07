<template>
  <div class="index">
    <div class="body-container">
      <navbar></navbar>
      <router-view class="item-conteiner"></router-view>
    </div>
  </div>
</template>

<script>
import navbar from "@/components/Navbar"
import land from "@/components/Home/Land"
import features from "@/components/Home/Features"

export default {
  name: "Temp",
  components: {
    navbar,
    land,
    features
  },
}
</script>

<style lang="scss">
.index {
  background-color: $brown-200;

  .body-container {
    &:after {
      content: "";
      position: absolute;
      opacity: 0.5;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      background-image: url("../assets/Speed.png");
      background-repeat: no-repeat;
      background-position: center;
      background-size: 70vw;
    }
    position: relative;
    margin: 0 auto;
    width: 100vw;
    height: 100vh;
    .item-conteiner{
      padding-top: 90px;
      display: grid;
      grid-template-columns: 40% 60%;
      grid-template-areas: "text image";
      align-items: center;
      height: 100%;
      .text-item{
        padding: 0 25% 0 50px;
        h1{
          font-family: Anton;
          margin-bottom: 50px;
          font-size: 4rem;
        }
        p{
          font-family: Roboto;
          margin-bottom: 50px;
          font-size: 1.2rem;
        }
      }
    }
  }
}
</style>
