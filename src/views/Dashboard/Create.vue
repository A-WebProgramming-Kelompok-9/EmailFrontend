<template>
  <div class="boxing">
    <div class="main">
      <div class="mx-3">
        <textInp name="Title" placeholder="Title" type="text" v-model="Title"></textInp>
      </div>
      <div class="mail-header">
        <!--Back Button-->
        <router-link
          class="btn btn-outline-light my-1"
          id="backbtn"
          to="/dashboard/10"
        >
          <BIcon icon="arrow-left" class="mt-4" ></BIcon>
        </router-link>
        <!-- Profile-picture and To-->
        <div class="media m-1">
          <div class="media-body mx-3">
            <h4>
              From : {{users.Sender_Username}} &lt;<router-link to="#" class="btn-link"
                >{{users.Sender_Username}}@swagon.com</router-link
              >&gt;
            </h4>
            <div class="input-group">
              <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1">To: </span>
              </div>
              <input
                type="text"
                class="form-control"
                placeholder="Recipient"
                aria-label="Recipient"
                aria-describedby="basic-addon1"
                v-model="Receiver_List"
              />
            </div>
          </div>
        </div>
        <!--Triple Button-->
        <div class="tri-btn">
          <Button class="btn btn-outline-light btn-sm align-top" to="#" v-on:click="sendEmail"
            ><BIcon icon="skip-forward-fill"></BIcon>
            Send
          </Button>
          <router-link class="btn btn-outline-light btn-sm align-top" to="#"
            ><BIcon icon="Archive-fill"></BIcon>
            Save
          </router-link>
          <router-link class="btn btn-outline-light btn-sm align-top" to="#"
            ><BIcon icon="trash-fill"></BIcon>
            Delete
          </router-link>
        </div>
      </div>
      <div class="mail-content">
        <textarea class="text" rows="" v-model="Content"> </textarea>
      </div>
    </div>
  </div>
</template>

<script>
import textInp from "@/components/TextInputGroup.vue";
export default {
  name: "Create",
  components: {
    textInp,
  },
  data() {
    return {
      users: {},
      Title: "",
      Receiver_List: "",
      Content: ""
    }
  },
  methods: {
    sendEmail() {
      fetch("https://localhost:3000/Email/Create", {
        method: "POST",
        body: JSON.stringify({
          Title: this.Title,
          Receiver_List: this.Receiver_List,
          Content: this.Content
        }),
        headers: {
          "content-type": "application/json"
        }
      }).then(response => response.json()
      ).then(result => {
        console.log(result)
      })
    }
  },
  mounted() {
    if (localStorage.content) {
      delete localStorage.content
      console.log(localStorage.content)
    } else {
      fetch("http://localhost:3000/:id/View/:id")
          .then(response => response.json())
          .then(result => {
            console.log(this.users)
            this.users = result
            console.log(this.users)
            localStorage.content = result
          });
    }
  }
};
</script>

<style scoped lang=scss>
html {
  background-color: $brown-200;
}
.boxing {
  display: flex;
  margin-top: -27px;

  .main {
    display: flex;
    flex-direction: column;
    background-color: $brown-400;
    padding: 5px ;
    width: 100%;
    color: white;
    .btn-outline-light {
      border: none;
    }
    .btn-link {
      color: $brown-100;
    }
    .input-group-text {
      background-color: rgba($color: white, $alpha: 0.7);
      color: $brown-300;
    }
    textarea {
      background-color: rgba($color: white, $alpha: 0.1);
      color: white;
    }

    input {
      align-items: center;
      height: 38px;
      background-color: rgba($color: white, $alpha: 0.7);
    }

    .mail-header {
      display: flex;
      align-content: flex-start;

      .media {
        align-items: center;
        h4 {
          font-size: large;
        }
        input {
          width: 50vw;
        }
      }

      .tri-btn {
        display: flex;
        flex-direction: column;
        margin-left: auto;
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
        height: calc(100vh - 169px);

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