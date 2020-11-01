<template>
   <div id="maincontent">
        <searchbar></searchbar>
      <div class="side">
        <sidebar></sidebar>
      </div>
    <div id="settings" class="p-3">
          <h1>Settings</h1>
          <hr />
          <div id="Myaccount-area">
            <h5>my Account:</h5>
            <img
              src="@/assets/Dio_Yeah.jpg"
              alt="Profile Image"
              class="rounded-circle my-auto"
              style="width: 100px; height: 100px"
            />
            <div id="accinfo">
              <p>Dio@swagon.com</p>
              <p>Jonathan Joestar</p>
              <a href="#Picture" class="btn-link">Change your Picture</a>
              <a href="#Background" class="btn-link"
                >Change your Dashboard Background</a
              >
            </div>
          </div>
          <hr />
          <div id="changepass">
            <h5>Change your Password</h5>
            <div class="inputarea mt-3">
              <input
                class="form-control"
                type="password"
                placeholder="Old Password"
              />
              <input
                class="form-control"
                type="password"
                placeholder="New Password"
              />
              <input
                class="form-control"
                type="password"
                placeholder="Confirm New Password"
              />
              <a type="button" class="btn btn-dark" href="..">
                Change Password
              </a>
            </div>
          </div>
          <hr />
          <div id="changeusername">
            <h5>Change Username</h5>
            <div class="input-group my-3">
              <input
                class="form-control"
                type="text"
                placeholder="New Username"
              />
              <a
                type="button"
                class="btn btn-dark input-group-append"
                href=".."
              >
                Change Username
              </a>
            </div>
          </div>
          <hr />
      </div>
    </div>
</template>

<script>
import searchbar from "@/components/Dashboard/Search"
export default {
  name: "Settings",
  components: {
    searchbar
  },
}
</script>

<style scoped lang=scss>
#maincontent {
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: $brown-200;

  .btn-link {
    color: $brown-100;
  }
#settings {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    height: 700px;
    border: solid 1px gray;
    border-radius: 15px;
    width: 800px;
    margin: 0 auto;
    color: white;
    background-color: $brown-400;
    .form-control {
      background-color: rgba($color: white, $alpha: 0.6);
      color: black;
      &::placeholder {
        color: $gray-200;
      }
    }
    #Myaccount-area {
      display: flex;
      #profile-pic {
        height: 100px;
        width: 100px;
        border-radius: 100%;
        background-color: black;
      }
      #accinfo {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        padding-left: 20px;
        p {
          margin: 0;
        }
      }
    }
    #changepass {
      .inputarea {
        height: 200px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-end;
        input {
          width: 700px;
        }
        button {
          width: 180px;
        }
      }
    }
    #changeusername {
      input {
        width: 540px;
      }
      .btn {
        width: 160px;
      }
    }
  }
}
</style>