<template>
  <div>
    Login
    <textinp name="email" type="email" placeholder="Email"></textinp>
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

</style>