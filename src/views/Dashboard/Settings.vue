<template>
   <div id="maincontent">
    <div id="settings" class="p-3">
          <h1>Settings</h1>
          <hr />
          <div id="Myaccount-area">
            <h5>my Account:</h5>
            <img
                src="@/assets/Dio_Yeah.jpg"
                alt="logo"
                class="rounded-circle my-auto"
                style="width: 100px; height: 100px"
          />
            <div id="accinfo">
              <p>xxxxxxxxxxxxx@speedwagon.com</p>
              <p>Jonathan Joestar</p>
              <a href="#Picture">Change your Picture</a>
              <a href="#Background">Change your Dashboard Background</a>
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
              <a type="button" class="btn btn-primary" href="..">
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
                class="btn btn-primary input-group-append"
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
import sidebar from "@/components/Sidebar"
export default {
  name: "Settings",
  components: {
    sidebar,
  }
}
</script>

<style scoped lang=scss>
#maincontent {
  display: flex;
  flex-direction: column;
  width: calc(100% + 500px);
  height: 100%;
  background-color: whitesmoke;
}
#settings {
    display: flex;
    position: relative;
    right: 200px;
    flex-direction: column;
    align-items: flex-start;
    height: 700px;
    border: solid 1px gray;
    width: 800px;
    margin: 0 auto;
    #Myaccount-area {
      display: flex;
      #accinfo {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        padding-left: 15px;
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
</style>