<template>
<div id="body">
  <div id="main">
    <h4>Start Using Smail</h4>
      <p style="font-size: 15px">
        Join Smail, to write your own mail, send your mail and many more
      </p>
      <h5>Register With</h5>
      <div class="registerwith">
        <router-link to="/Dashboard/0" class="btn btn-link">
          <FacebookIcon></FacebookIcon>
          Facebook
          </router-link>
        <router-link to="/Dashboard/0" class="btn btn-link">
          <TwitterIcon></TwitterIcon>
          Twitter
          </router-link>
        <router-link to="/Dashboard/0" class="btn btn-link">
          <GoogleIcon></GoogleIcon>
          Google
          </router-link>
      </div>
      <div class="spacer"><br><br></div>
      <form class="register-form">
        <div class="form-group">
          <textinp name="alt-email" type="email" placeholder="Alternate Email"></textinp>
        </div>
        <div class="form-group">
          <textinp name="username" type="text" placeholder="Username"></textinp>
        </div>
        <div class="form-group">
          <textinp name="password" type="password" placeholder="Password"></textinp>
        </div>
        <div class="form-group" style="margin-left: 6px">
          <textinp name="confirm-password" type="password" placeholder="Confirm Password"></textinp>
        </div>
        <div class="form-group" style="margin-left: 12px; margin-top: 20px">
          <input type="checkbox" class="form-check-input" id="ConfirmPolicy">
          <small class="form-check-label" for="ConfirmPolicy">
            I have read and agree to the terms of service and privacy
            policy</small>
        </div>
        <router-link to="/Dashboard/0" type="button" class="btn btn-outline-light">
          <BIcon icon="plus" aria-hidden="true"></BIcon>
          Create Account
          </router-link>
      </form>
      <div class="alternate">
        <p class="norm">
          Already have a SpeedMail Account ?
          <router-link to="/user/login" >
          Sign In
          </router-link>
        </p>
      </div>
    </div>
</div>
</template>

<script>
import textinp from "@/components/TextInputGroup"
import { FacebookIcon, TwitterIcon, GoogleIcon } from 'vue-simple-icons'
export default {
  name: "Register",
  components: {
    textinp,
    FacebookIcon,
    TwitterIcon,
    GoogleIcon
  }
}
</script>

<style scoped lang=scss>
html {
  background-color: $brown-200;
}
#body {
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: $brown-200 !important;
}
#main {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 500px;
  height: 780px;
  background-color: $brown-400;
  color: white;
  margin: auto;
  padding: 10px;
  border: solid 1px rgba($color: gray, $alpha: 0.7);
  border-radius: 20px;
  text-align: center;
  input {
    background-color: rgba($color: white, $alpha: 0.8);
  }
  .btn-link {
    color: $gray-100;
  }
  h5 {
    font-size: 97%;
  }
  .spacer {
    margin: 1rem auto 2rem auto;
    background-color: rgba($color: gray, $alpha: 0.7);
    width: 90%;
    height: 1px;
  }
  .registerwith {
    display: flex;
    justify-content: space-evenly;
    margin-right: 50px;
    margin-top: 20px;
  
  }

  .register-form {
    display: flex;
    padding: 20px;
    flex-direction: column;
    text-align: start;
    .form-check {
      display: flex;
      align-items: center;
    }
    .btn {
      margin-top: 10px;
      width: 200px;
      align-self: center;
    }
  }
  .alternate {
    //margin-top: 20px;
    margin-top: auto;
    margin-bottom: 0;
    display: flex;
    flex-direction: column;
    .norm {
      font-size: medium;
    }
  }
}
</style>