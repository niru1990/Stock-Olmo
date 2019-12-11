<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <ingresoMP />
    <ingresoPT />
  </div>
</template>

<script>
import ingresoMP from "./components/ingresoMP.vue";
import ingresoPT from "./components/ingresoPT.vue";

export default {
  name: "app",
  components: {
    ingresoMP,
    ingresoPT
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
