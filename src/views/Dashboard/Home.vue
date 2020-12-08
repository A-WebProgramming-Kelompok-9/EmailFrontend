<template>
  <div class="home">
    <searchbar></searchbar>
    <div v-for="i in data" :key="i.name">
      {{i.name}}
    </div>
    <infinite-loading @infinite="loadMail">
      <div slot="no-more">Loaded All Messages</div>
      <div slot="no-results">There are no Email</div>
    </infinite-loading>
  </div>
</template>

<script>
import searchbar from "@/components/Dashboard/Search"
import InfiniteLoading from 'vue-infinite-loading';

export default {
  name: "Home",
  components: {
    searchbar,
    InfiniteLoading
  },
  data() {
    return {
      data: [],
      busy: false,
      count:0
    }
  },
  methods: {
    loadMail($state) {
      this.data.push({ name: this.count++ });
      $state.loaded()
      if(this.count>100){
        $state.complete()
      }
    }
  },

}
</script>

<style scoped lang=scss>
.home {
  background-color: $brown-100;
  display: flex;
  flex-direction: column;
}
</style>