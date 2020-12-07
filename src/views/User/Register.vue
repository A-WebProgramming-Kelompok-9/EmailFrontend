<template>
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
    <div class="register-form">
      <textinp name="alt-email" type="email" v-model="Alt_Email" placeholder="Alternate Email"></textinp>
      <textinp name="username" type="text" v-model="Username"  placeholder="Username"></textinp>
      <textinp name="password" type="password" v-model="Password"  placeholder="Password"></textinp>
      <textinp name="confirm-password" type="password" v-model="Password" placeholder="Confirm Password"></textinp>
      <div class="checkinput">
        <input type="checkbox" id="ConfirmPolicy">
        <small for="ConfirmPolicy">
          I have read and agree to the terms of service and privacy
          policy</small>
      </div>
      <button type="button" class="btn btn-outline-light" v-on:click="insertcontent">
        <BIcon icon="plus" aria-hidden="true"></BIcon>
        Create Account
      </button>
    </div>
    <div class="alternate">
      <p class="norm">
        Already have a SpeedMail Account ?
        <router-link to="/user/login">
          Sign In
        </router-link>
      </p>
    </div>
  </div>
</template>

<script>
import textinp from "@/components/TextInputGroup"
import {FacebookIcon, TwitterIcon, GoogleIcon} from 'vue-simple-icons'

export default {
  name: "Register",
  data() {
    return {
      Username: "",
      Password:"",
      Alt_Email:""
    }
  },
  components: {
    textinp,
    FacebookIcon,
    TwitterIcon,
    GoogleIcon,
     methods: {
    insertcontent() {
      fetch("http://localhost:3000/User/Register", {
        method: "POST",
        body: JSON.stringify({
          username:this.Username,
          password:this.Password,
          alt_email:this.Alt_Email
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
  }
}
</script>

<style scoped lang=scss>
#main {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
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
    display: flex;
    flex-direction: column;
    font-size: medium;
  }
}
</style>