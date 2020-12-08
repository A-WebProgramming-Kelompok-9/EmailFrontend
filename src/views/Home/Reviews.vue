<template>
  <div class="reviews">
    <div class="text-item">
      <div class="item-title">
        <h1>Customer Reviews</h1>
      </div>
      <p>{{ reviews_list[reviews_item_index].content }}</p>
      <h2>{{ reviews_list[reviews_item_index].title }}</h2>
    </div>
    <div class="image-item">
      <img src="@/assets/Giorno.jpg" alt="" class="image" @click="reviews_item_index = 0">
      <img src="@/assets/Menacing.jpeg" alt="" class="image" @click="reviews_item_index = 1">
      <img src="@/assets/Dio Wryyyy.jpg" alt="" class="image" @click="reviews_item_index = 2">
      <img src="https://i.kym-cdn.com/photos/images/newsfeed/001/499/826/2f0.png" alt="" class="image"
           @click="reviews_item_index = 3">
    </div>
  </div>
</template>

<script>
import {reviews} from '@/data/reviews.json'
export default {
  name: "Reviews",
  components: {},
  data() {
    return {
      reviews_list: reviews,
      reviews_item_index:0
    }
  },
}
</script>

<style scoped lang=scss>
.text-item {
  .item-title {
    h1:before {
      content: "Customer Reviews";
      left: -180px;
    }
  }
  p{
    height: 6rem;
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
    filter: brightness(.85) sepia(1) hue-rotate(-10deg);
    box-shadow: 8px 8px 6px -6px black;
    transition: all .2s;
    &:hover{
      box-shadow: 0 0 0 0 black;
    }
  }
}
h2{
  font-family: Anton;
  text-align: right;
}
</style>