<template>
  <div>
    <div id="main">
        <div class="loginwith">
            <h4>Login</h4>
            <div class="loginopt my-4">
                <a type="button" class="btn btn-link" href="/Dashboard/">
                    <span class="fa fa-facebook"></span>
                    Facebook
                </a>
                <a type="button" class="btn btn-link" href="/DashBoard/">
                    <span class="fa fa-twitter"></span>
                    Twitter
                </a>
                <a type="button" class="btn btn-link" href="/DashBoard/">
                    <span class="fa fa-google"></span>
                    Google
                </a>
            </div>
        </div>
        <div class="spacer"></div>
        <form class="login-form">
            <div class="form-group">
                <label for="UsernameBox">Username</label>
                <input type="text" class="form-control" id="UsernameBox" placeholder="Username">
            </div>
            <div class="form-group">
                <label for="PasswordBox">Password</label>
                <input type="password" class="form-control" id="PasswordBox" placeholder="Password">
            </div>
            <div class="form-group form-check">
                <input type="checkbox" class="form-check-input" id="KeepSignedIn" />
                <label class="form-check-label" for="KeepSignedIn">Remember me</label>
            </div>
            <a type="button" class="btn btn-outline-light flex-end" href="/Dashboard/">Login</a>
        </form>
        <div class="alternate">
            <div class="forgot">
                <a type="submit" class="btn btn-link" href="/User/Forgot/#Username">Forgot Username?</a>
                <a type="submit" class="btn btn-link" href="/User/Forgot/#Password">Forgot Password?</a>
            </div>
            <a type="button" class="btn btn-link" href="/User/Register/" style="width: 100px; margin:auto">Sign Up</a>
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