<template>
  <div :class="'feature '+ content.rev">
    <img :src="content.image" alt="">
    <div class="mx-5 my-auto formatted">
      <h4>{{content.title}}</h4>
      {{content.content}}
    </div>
  </div>
</template>

<script>
export default {
  name: "Feature-Items",
  props : ["content"]
}
</script>

<style scoped lang=scss>
.feature{
  display: flex;
  margin: 50px 0;
  img{
    border-radius: 10px;
    width: 300px;
    height: 200px;
  }
}
.rev{
  flex-direction: row-reverse;
}
.formatted{
  white-space: pre;
}
</style>