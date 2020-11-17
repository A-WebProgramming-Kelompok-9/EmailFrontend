<template>
  <div class="navibar">
    <router-link class="navbar-brand" to="/">
      <img src="@/assets/SPW LOGO.png" alt="">
      Speedwagon Mail</router-link>
    <div class="content">
      <router-link to="/home" :class="'btn '+navbar_class(0)" @click.native="active_page = 0">Home</router-link>
      <router-link to="/features" :class="'btn '+navbar_class(1)" @click.native="active_page = 1">Features</router-link>
      <router-link to="/reviews" :class="'btn '+navbar_class(2)" @click.native="active_page = 2">Reviews</router-link>
    </div>
    <div class="content login">
      <router-link to="/user/login/" class="btn btn-dark">Login</router-link>
      <router-link to="/user/register" class="btn btn-outline-light">Register</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      active_page: 0
    }
  },
  methods: {
    navbar_class(val) {
      if(this.active_page == val){
        return "active";
      }
      else{
        return "";
      }
    }
  },
  created() {
    switch (this.$route.path) {
      case '/home':
        this.active_page = 0
            break;
      case '/features':
        this.active_page = 1
        break;
      case '/reviews':
        this.active_page = 2
        break;
    }
  }
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
    &:hover{
      color: rgba(black,0.6);
    }
    img{
      width: 3rem;
    }
  }

  .content {
    margin: auto 0;
    .btn {
      margin: 0 10px;
      box-shadow: none;
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