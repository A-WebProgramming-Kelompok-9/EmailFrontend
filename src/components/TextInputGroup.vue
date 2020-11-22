<template>
  <div class="inputarea">
    <input :type="type" :name="name" :id="name+'inp'" class="input" placeholder=" " />
    <label :for="name+'inp'" class="label">{{ placeholder }}</label>
  </div>
</template>`

<script>
export default {
  name: "TextInputGroup",
  props: ["name","placeholder","type"],
  components: {},
}
</script>

<style scoped lang=scss>

.inputarea{
  *{
    color: white;
  }
  position: relative; // biar label bisa pake absolute
  margin: 3rem auto 1rem; //pastiin atasnya ada 1 rem kosong buat tulisannya naek
  width: 100%;
  border-bottom: dashed 1px white;

  //garis bawahnya
  &:after{
    content: "";
    position: relative;
    display: block;
    height: 2px;
    width: 100%;
    background: $brown-100;
    transform: scaleX(0);
    transform-origin: 0;
    transition: all 500ms ease;
    top: 2px;
  }

  //bagian animasinya
  &:focus-within{
    .label{
      transform: translateY(-100%);
      font-size: 1rem;
    }
    &:after{
      transform: scaleX(1);
    }
  }
}

//ngosongin style input box
.input{
  width: 100%;
  background: none;
  border: none;
  outline: none;
  overflow: hidden;
}

.label{
  position: absolute;
  z-index: 1;
  left: 0;
  bottom: 2px;
  font-size: 1.2rem;
  transition: all .5s;
}

//biar textnya ga turun lagi kalo ada tulisan
.inputarea:focus-within .label,
.input:not(:placeholder-shown) + .label {
  transform: translateY(-100%) ;
  font-size: 1rem;
  opacity: 1;
}
</style>