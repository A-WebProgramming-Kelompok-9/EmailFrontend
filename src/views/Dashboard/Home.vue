<template>
  <div class="home">
    <searchbar></searchbar>
    <div v-for="i in data" :key="i._id">
      {{i}}
      {{i.Sender_Username}}
      {{i.Title}}
      {{i.Send_Date.split("T")[0].split("-").reverse().join("-")}}
    </div>
    <button v-on:click="addmail">AddEmail</button>
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
      count:100
    }
  },
  methods: {
    addmail(){
      fetch("https://speedwagonmailback.herokuapp.com/email/add", {
        method: "POST",
        body: JSON.stringify({
          title: "Test Email",
          username: this.$store.getters.getUser.Username,
          receiver: this.$store.getters.getUser.Username,
          content: "TEST 12345",
          attachment: ""
        }),
        headers: {
          "content-type": "application/json"
        }
      }).then(response => response.json()
      ).then(result => {
        console.log(result)
      })
    },
    /*loadMail($state) {
      fetch("https://speedwagonmailback.herokuapp.com/email", {
        method: "POST",
        body: JSON.stringify({
        }),
        headers: {
          "content-type": "application/json"
        }
      }).then(response => response.json()
      ).then(result => {
        if(result.status == "OK"){
          for(let x in result.content){
            data.push(x)
          }
          $state.loaded()
          if(this.count>100){
            $state.complete()
          }
        }else{
          console.log(result)
        }
      })
    }*/
  },
  mounted() {
    fetch("http://speedwagonmailback.herokuapp.com/email", {
      method: "POST",
      body: JSON.stringify({
        username: this.$store.getters.getUser.Username
      }),
      headers: {
        "content-type": "application/json"
      }
    }).then(response => response.json()
    ).then(result => {
      this.data = result.content
      console.log(result)
      console.log(this.$store.getters.getUser)
    })
  }


}
</script>

<style scoped lang=scss>
.home {
  background-color: $brown-100;
  display: flex;
  flex-direction: column;
}
</style>