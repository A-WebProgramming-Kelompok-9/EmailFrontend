<template>
  <div class="home">
    <button @click="toggleside">Toggle sidebar: {{this.$store.state.sided}}</button>
    Home
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  methods: {
    toggleside() {
      this.$store.commit("toggleside")
      console.log(this.$store.state.sided)
    }
  },
}
</script>

<style scoped lang=scss>
.home{
background-color: $brown-100;
}
</style>