<template>
  <div class="boxing">
    <div class="main">
      <div class="mx-3">
        <textInp name="Title" placeholder="Title" type="text"></textInp>
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
              From : Jonathan Joestar &lt;<router-link to="#" class="btn-link"
                >Dio@swagon.com</router-link
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
              />
            </div>
          </div>
        </div>
        <!--Triple Button-->
        <div class="tri-btn">
          <router-link class="btn btn-outline-light btn-sm align-top" to="#"
            ><BIcon icon="skip-forward-fill"></BIcon>
            Send
          </router-link>
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
        <textarea class="text" rows=""> </textarea>
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