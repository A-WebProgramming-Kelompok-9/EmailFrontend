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
    position: relative;
    margin: 0 auto;
    width: 100vw;
    height: 100vh;
    .item-conteiner{
      position: absolute;
      z-index: 99;
      margin-top: 90px;
      display: grid;
      grid-template-columns: 40% 60%;
      grid-template-areas: "text image";
      align-items: center;
      height: calc(100% - 90px);
      .text-item{
        grid-area: text;
        padding: 0 25% 0 50px;
        h1{
          position: relative;
          font-family: Anton;
          margin-bottom: 50px;
          font-size: 4rem;
          z-index: 1;
          &:before{
            z-index: -1;
            color: white;
            opacity: .3;
            white-space: nowrap;
            font-size: 6rem;
            position: absolute;
            bottom: 2rem;
          }
        }
        p{
          font-family: Roboto;
          margin-bottom: 50px;
          font-size: 1.2rem;
        }
      }
      .image-item{
        grid-area: image;
        margin-left: auto;
        margin-right: 0;
      }
    }
  }
}
</style>
