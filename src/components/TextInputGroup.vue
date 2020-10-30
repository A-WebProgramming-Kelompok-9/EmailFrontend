<template>
  <div class="inputarea">
    <input :type="type" :name="name" :id="name+'inp'" class="input" placeholder=" " />
    <label :for="name+'inp'" class="label">{{ placeholder }}</label>
  </div>
</template>

<script>
export default {
  name: "TextInputGroup",
  props: ["name","placeholder","type"],
  components: {}
}
</script>

<style scoped lang=scss>
.inputarea{
  margin: 2rem auto 1rem;
  width: 100%;
  &:after{
    content: "";
    position: relative;
    display: block;
    height: 2px;
    width: 100%;
    background: black;
    transform: scaleX(0);
    transform-origin: 0;
    transition: all 500ms ease;
    top: -25px;
  }
  &:focus-within{
    .label{
      transform: translateY(-200%) scale(1);
    }
    &:after{
      transform: scaleX(1);
    }
  }

}
.input{
  width: 100%;
  background: none;
  border: none;
  outline: none;
  overflow: hidden;
}
.label{
  transform: translateY(-100%) scale(1.2);
  transition: all .5s;
}

.inputarea:focus-within .label,
.input:not(:placeholder-shown) + .label {
  transform: translateY(-200%) scale(1);
  opacity: 1;
}
</style>