<template>
  <div class="p-2 navibar">
    <a class="navbar-brand" href="#"> Speedwagon Mail</a>
    <div class="ml-auto">
      <a href="" class="btn btn-dark mr-2">Login</a>
      <a href="" class="btn btn-outline-light mr-2">Register</a>
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