<template>
  <div :class="'feature '+ content.rev">
    <img :src="content.image" alt="">
    <div class="mx-5 my-auto">
      <h4>{{content.title}}</h4>
      s'Mail can be access via browser from your smartphone, <br />
      you just need to have an account then login by using it.
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
</style>