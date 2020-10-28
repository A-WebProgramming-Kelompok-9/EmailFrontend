<template>
  <div class="p-2 navibar">
    <router-link class="navbar-brand" to="/"> Speedwagon Mail</router-link>
    <div class="ml-auto">
      <router-link to="/user/login/" class="btn btn-dark mr-2">Login</router-link>
      <router-link to="/user/register" class="btn btn-outline-light mr-2">Register</router-link>
    </div>
  </div>
</template>

<script>
export default {
name: "Navbar"
}
</script>

<style scoped lang="scss">
.navibar{
  display: flex;
  color: white;
  width: 100vw;
  z-index: 99;
  position: absolute;
  top: 0;
  left: 0;
}
*{
  color: inherit;
}
</style>