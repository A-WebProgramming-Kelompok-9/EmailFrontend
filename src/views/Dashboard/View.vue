<template>
  <div class="maincontainer">
    <div class="main">
      <h2 id="mailTitle" class="px-5">{{mail.Title}}</h2>
      <div class="mail-header">
        <!--Back Button-->
        <router-link
          class="btn btn-outline-light my-1"
          id="backbtn"
          to="/dashboard"
        >
          <BIcon icon="arrow-left"></BIcon>
        </router-link>
        <!-- Profile-picture, From, and To-->
        <div class="media m-1">
          <img
            id="profilepic"
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fassets.change.org%2Fphotos%2F3%2Fvi%2Fnt%2FIPvinTvkGIZxmOt-1600x900-noPad.jpg%3F1539485029&f=1&nofb=1"
            alt="Avatar"
            class="rounded-circle"
            style="width: 100px; height: 100px"
          />
          <div class="media-body mx-3">
            <h4 id="sender">
              From : {{mail.Sender_Username}} &lt;<router-link to="#" class="btn-link"
                >{{mail.Sender_Username}}@swagon.com</router-link
              >&gt;
              <!--Block Button-->
              <router-link class="btn btn-red btn-sm" to="/Dashboard/10/#Block">
                <BIcon icon="slash-circle"></BIcon> Block
              </router-link>
            </h4>
            <h4 id="receiver">
              To: {{user}}&lt;<router-link to="#" class="btn-link"
                >{{user}}@swagon.com</router-link
              >&gt;
            </h4>
          </div>
        </div>
        <!--Triple Button-->
        <div class="tri-btn ml-auto">
          <button class="btn btn-outline-light btn-sm align-top" to="#" v-on:click="delmail"
            ><BIcon icon="trash-fill"></BIcon>
            Delete
          </button>
          <router-link class="btn btn-outline-light btn-sm align-top" to="#"
            ><BIcon icon="skip-forward-fill"></BIcon>
            Forward
          </router-link>
          <router-link class="btn btn-outline-light btn-sm align-top" to="#"
            ><BIcon icon="skip-backward-fill"></BIcon>
            Reply
          </router-link>
        </div>
      </div>
      <div class="mail-content">
        <textarea class="text" rows="" readonly v-model="mail.Content">
        </textarea>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "View",
  components: {},
  data() {
    return {
      mail: JSON.parse(localStorage.openedmail),
      user: this.$store.getters.getUser.Username
    }
  },
  methods:{
    delmail() {
      this.isLoading = true;
      fetch("https://speedwagonmailback.herokuapp.com/email/del", {
        method: "POST",
        body: JSON.stringify({
          id: this.mail._id
        }),
        headers: {
          "content-type": "application/json"
        }
      }).then(response => response.json()
      ).then(result => {
        delete localStorage.openedmail
        this.$router.push("/dashboard")
        console.log(result)
      })
    }
  }
};
</script>

<style scoped lang=scss>
html {
  background-color: $brown-200;
}

.maincontainer {
  display: flex;

  .main {
    display: flex;
    flex-direction: column;
    padding: 5px;
    width: calc(100%);
    background-color: $brown-400;
    color: white;
    .btn-outline-light {
      border: none;
    }
    .btn-link {
      color: $brown-100;
    }
    .btn-red {
      background-color: transparent;
      color: #ff7b7b;
      font-weight: bold;
      &:hover {
        background-color: rgba($color: #ff5252, $alpha: 0.9);
        color: $gray-100;
      }
    }
    textarea {
      background-color: rgba($color: white, $alpha: 0.1);
      color: white;
    }

    h2 {
      align-items: center;
    }

    .mail-header {
      display: flex;
      align-content: flex-start;

      #backbtn {
        display: flex;
        align-items: center;
      }
      .media {
        h4 {
          font-size: large;
        }
      }
      .tri-btn {
        display: flex;
        flex-direction: column;
        a {
          width: 90px;
          display: flex;
          justify-content: space-between;
        }
      }
    }

    .mail-content {
      textarea {
        width: 100%;
        overflow-y: auto;
        height: calc(100vh - 170px);
        &::-webkit-scrollbar {
          width: 10px;
        }

        &::-webkit-scrollbar-track {
          box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
        }

        &::-webkit-scrollbar-thumb {
          background-color: rgba(0, 0, 0, 0.288);
          outline: 1px solid slategrey;
          border-radius: 100px;
        }
      }
    }
  }
}
</style>