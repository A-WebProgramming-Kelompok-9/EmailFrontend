<template>
  <div class="Land">
    <h1>What Is S'Mail?</h1>
    <button class="btn btn-dark my-3">
      <BIcon icon="info-circle" class="mr-1"></BIcon>
      About Us
    </button>
    <p class="mb-5">
      S’Mail is some sort email client application that enable configuring
      one or more email addresses to receive, read, compose and send emails
      from one user to another.
    </p>
  </div>
</template>

<script>
export default {
  name: "Land",
  components:{

  }
}
</script>

<style scoped lang="scss">
.Land{
  width: 60%;
  margin-top: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    text-align: center;
  }
  img {
    width: 300px;
  }
}
</style>