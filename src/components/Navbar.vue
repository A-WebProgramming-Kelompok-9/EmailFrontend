<template>
  <div class="navibar">
    <router-link class="navbar-brand" to="/"> Speedwagon Mail</router-link>
    <div class="content">
      <router-link to="/home" class="btn active">Home</router-link>
      <router-link to="/home" class="btn">Features</router-link>
      <router-link to="/home" class="btn">Reviews</router-link>
    </div>
    <div class="content login">
      <router-link to="/user/login/" class="btn btn-dark">Login</router-link>
      <router-link to="/user/register" class="btn btn-outline-light">Register</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar"
}
</script>

<style scoped lang="scss">
.navibar {
  display: flex;
  justify-content: space-between;
  padding: 20px 50px;
  color: black;
  width: 100vw;
  z-index: 99;
  position: absolute;
  top: 0;
  left: 0;
  font-family: "Bree Serif";
  font-size: 1.2rem;

  .navbar-brand{
    font-size: 1.5rem;
  }

  .content {
    margin: auto 0;
    .btn {
      margin: 0 10px;

      &.active {
        color: white;

        &::after {
          content: "";
          background: white;
          display: block;
          top: 0;
          width: 100%;
          height: 2px;
        }
      }
    }

    &.login {
      color: white;
      font-family: Roboto;
      .btn {
        padding: .5rem 40px;
        margin: 0 20px;
      }
    }
  }
}

* {
  color: inherit;
}

</style>