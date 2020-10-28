<template>
  <div class="features">
    <h1 class="mx-auto">Features</h1>
    <h4 class="mx-auto">Here are the reasons why you should use Smail</h4>
    <featureitem :key="item.title" v-for="item in items" :content="item"></featureitem>
  </div>
</template>

<script>
import featureitem from "@/components/Home/Feature-Items"
import {content } from "@/data/features.json"
export default {
  name: "Features",
  components: {
    featureitem
  },
  data() {
    return {
      items: content
    }
  },
}
</script>

<style scoped lang=scss>
.features {
  display: flex;
  flex-direction: column;
  margin: 0 200px;
}
</style>