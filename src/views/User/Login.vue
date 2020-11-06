<template>
  <div>
    <div id="main">
        <div class="loginwith">
            <h4>Login</h4>
            <div class="loginopt my-4">
                <router-link to="/Dashboard/0/" class="btn btn-link">
                  <span class="fa fa-facebook"></span>
                  Facebook
                </router-link>

                <router-link to="/Dashboard/0/" class="btn btn-link">
                  <span class="fa fa-twitter"></span>
                  Twitter
                </router-link>

                <router-link to="/Dashboard/0/" class="btn btn-link">
                  <span class="fa fa-google"></span>
                  Google
                </router-link>
            </div>
        </div>
        <div class="spacer"></div>
        <form class="login-form">
            <div class="form-group">
                <textinp name="username" type="text" placeholder="Username"></textinp>
            </div>
            <div class="form-group">
                <textinp name="password" type="password" placeholder="Password"></textinp>
            </div>
            <div class="form-group form-check">
                <input type="checkbox" class="form-check-input" id="KeepSignedIn" />
                <label class="form-check-label" for="KeepSignedIn">Remember me</label>
            </div>
            <router-link to="/Dashboard/0/" class="btn btn-outline-light flex-end">Login</router-link>
        </form>
        <div class="alternate">
            <div class="forgot">
                <router-link to="/User/Forget/" class="btn btn-link">Forgot Username?</router-link>
                <router-link to="/User/Forget/" class="btn btn-link">Forgot password?</router-link>
            </div>
            <router-link to="/User/Register/" class="btn btn-link" style="width:100px; margin:auto">Sign Up</router-link>
        </div>
    </div>
  </div>
</template>

<script>
import textinp from "@/components/TextInputGroup"
export default {
  name: "Login",
  components: {
    textinp
  }
}
</script>

<style scoped lang=scss>
html
{
  background-color: $brown-200;
}
.flex-end
{
  align-self: center;
}
body
{
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: $brown-200 !important;
}
#main
{
  display: flex;
  flex-direction: column;
  width: 420px;
  height: 580px;
  margin: auto;
  padding: 10px;
  border: solid 1px rgba($color: gray, $alpha: 0.7);
  border-radius: 10px;
  background-color: $brown-400;
  color: white;
  input
  {
    background-color: rgba($color: white, $alpha: 0.8);
  }
  .btn-link
  {
    color: $gray-100;
  }
  .loginwith
  {
    margin-top: 10px;
    text-align: center;
    .loginopt
    {
      display: flex;
      width: 100%;
      justify-content: space-around;
    }
  }

  .loginform
  {
    display: flex;
    flex-direction: column;
  }
  .alternate
  {
    /*margin-top: 20px;*/
    margin-top: auto;
    display: flex;
    flex-direction: column;

    .forgot
    {
      display: flex;
      align-self: center;
      justify-content: center;
      width: 100%;
    }
    .btn
    {
      font-size: small;
    }
  }
}

</style>