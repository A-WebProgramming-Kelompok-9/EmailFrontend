<template>
  <div class="home">
    <div class="EmailContainer">
      <div v-for="i in data" :key="i._id" class="Items" v-on:click="getmail(i._id)">
        <b-icon icon="star"></b-icon>
        <h5>{{i.Sender_Username}}</h5>
        <h5>{{i.Title}}</h5>
        <h5>{{i.Send_Date.split("T")[0].split("-").reverse().join("-")}}</h5>
      </div>
      <button v-on:click="addmail">AddEmail</button>
      <infinite-loading @infinite="loadMail">
        <div slot="no-more">Loaded All Messages</div>
        <div slot="no-results">There are no Email</div>
      </infinite-loading>
    </div>


  </div>
</template>

<script>
import InfiniteLoading from 'vue-infinite-loading';

export default {
  name: "Home",
  components: {
    InfiniteLoading
  },
  data() {
    return {
      data: [],
      busy: false,
      count: 0
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
    loadMail($state) {
      fetch("https://speedwagonmailback.herokuapp.com/email", {
        method: "POST",
        body: JSON.stringify({
          username: this.$store.getters.getUser.Username,
          page: this.count
        }),
        headers: {
          "content-type": "application/json"
        }
      }).then(response => response.json()
      ).then(result => {
        if(result.status == "OK"){
          for(let x of result.content){
            this.data.push(x)
          }
          this.count+=1;
          $state.loaded()
          if(result.content.length<20){
            $state.complete()
          }
        }else{
          console.log(result)
        }
      })
    },
    getmail(id){
      fetch("https://speedwagonmailback.herokuapp.com/email/find", {
        method: "POST",
        body: JSON.stringify({
          id: id
        }),
        headers: {
          "content-type": "application/json"
        }
      }).then(response => response.json()
      ).then(result => {
        localStorage.openedmail =JSON.stringify(result.content[0])
        this.$router.push("/dashboard/view")
      })
    },

  },

}
</script>

<style scoped lang=scss>
.home {
  background-color: $brown-100;
  display: flex;
  flex-direction: column;
  .EmailContainer {
    height: calc(100vh - 75px);
    overflow-y: auto;
    overflow-x:hidden;
    .Items{
      display: grid;
      grid-template-columns: 50px 248px calc(100% - 448px) 150px;
      *{
        margin: 10px 15px;
      }
    }
  }
}
</style>