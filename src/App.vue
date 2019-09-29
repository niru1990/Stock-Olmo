<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Hola Grupo!!!! Bienvenidos a Stock Olmo!"/>
    <ingresoMP/>
    <ingresoPT/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import ingresoMP from './components/ingresoMP.vue'
import ingresoPT from './components/ingresoPT.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    ingresoMP,
    ingresoPT

  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
