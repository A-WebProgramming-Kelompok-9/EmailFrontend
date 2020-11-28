<template>
  <div id="main">
    <h4>Recover Account</h4>
    <div class="intro">
      <p>Please insert your username and alternate email address</p>
      <p>
        Our team will contact you shortly after to confirm your data validity.
        Please be sure to check your email's spam / junk folders
      </p>
    </div>
    <form class="recover-form">
      <textinp name="username" type="username" placeholder="Username"></textinp>
      <textinp name="alt-email" type="email" placeholder="Alternative Email"></textinp>
      <router-link to="/#Recover" type="button" class="btn btn-outline-light flex-end">Recover My Account</router-link>
    </form>
    <div class="alternate">
      <p>
        If you have any further problems, please contact our <br></br>
        <router-link to="#Contact" class="btn-link">Costumer Service Team</router-link>
      </p>
      <p class="norm">
        Dont have a SpeedMail Account ?<br></br>
        <router-link to="/User/Register/" type="button" class="btn btn-link">Sign Up</router-link>
      </p>
    </div>
  </div>
</template>

<script>
import textinp from "@/components/TextInputGroup"

export default {
  name: "Forget",
  components: {
    textinp
  }
}
</script>

<style scoped lang=scss>
.flex-end {
  align-self: center;
}
.norm {
  font-size: medium;
}

#main {
  display: flex;
  flex-direction: column;
  background-color: $brown-400;
  color: white;
  margin: auto;
  padding: 10px;
  border: solid 1px rgba($color: gray, $alpha: 0.7);
  border-radius: 10px;
  text-align: center;

  input {
    background-color: rgba($color: white, $alpha: 0.8);
  }

  .btn-link {
    color: $gray-100;
  }

  .intro {
    padding: 10px;
  }

  .spacer {
    margin: 1rem auto 2rem auto;
    background-color: rgba($color: gray, $alpha: 0.7);
    width: 90%;
    height: 1px;
  }

  .recover-form {
    text-align: start;
    display: flex;
    padding: 0 20px 20px 20px;
    flex-direction: column;
  }

  .alternate {
    margin-top: auto;
    display: flex;
    flex-direction: column;

    .forgot {
      display: flex;
      align-self: center;
      justify-content: center;
      width: 100%;
    }
  }
}
</style>