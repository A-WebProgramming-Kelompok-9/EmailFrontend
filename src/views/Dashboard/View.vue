<template>
  <div class="maincontainer">
    <div class="main">
      <h2 id="mailTitle" class="px-5">Title Mail</h2>
      <div class="mail-header">
        <!--Back Button-->
        <router-link
          class="btn btn-outline-light my-1"
          id="backbtn"
          to="/dashboard/10"
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
              From : Sans the Skeleton &lt;<router-link to="#" class="btn-link"
                >megalovania@under.tale</router-link
              >&gt;
              <!--Block Button-->
              <router-link class="btn btn-red btn-sm" to="/Dashboard/10/#Block">
                <BIcon icon="slash-circle"></BIcon> Block
              </router-link>
            </h4>
            <h4 id="receiver">
              To: Jonathan Joestar &lt;<router-link to="#" class="btn-link"
                >Dio@swagon.com</router-link
              >&gt;
            </h4>
          </div>
        </div>
        <!--Triple Button-->
        <div class="tri-btn ml-auto">
          <router-link class="btn btn-outline-light btn-sm align-top" to="#"
            ><BIcon icon="trash-fill"></BIcon>
            Delete
          </router-link>
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
        <textarea class="text" rows="" readonly>
Attn My Dear:

We wish to inform you that the diplomatic agent conveying the consignment box valued the sum of $8.8 Million United States Dollars misplaced your address and he is currently stranded at your International airport now. We required you reconfirm the following information below so that he can deliver your consignment box to you today.
            
NAME:================== COUNTRY:================ CITY:================== HOME ADDRESS: =============== MOBILE NO.:============= NAME OF YOUR NEAREST AIRPORT:======== A COPY OF YOUR IDENTIFICATION :===============
            
Please do contact the diplomatic agent with the email below with the information required. Contact Person : Mr. Beneth Nicolas EMAIL;( benethnicolas42@gmail.com) He is waiting to hear from you today with the information. NOTE : The Diplomatic agent does not know that the content of the consignment box is $8.8 Millions United States Dollars and on no circumstances should you let him know the content. The consignments was moved from here as family treasures, so never allow him to open the box.
            
Best Regards, Mrs. Sandra Ben
                </textarea
        >
      </div>
    </div>
  </div>
</template>

<script>
import Textinp from "@/components/TextInputGroup.vue";
export default {
  name: "View",
  components: {
    Textinp,
  },
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