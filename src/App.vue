<template>
  <div id="app">
    <div style="height:288px; background-color:#00FFFF	">
      <div style="float:left">
        <img alt="Vue logo" src="./assets/logo.png">
      </div>
      <div style="float:left; margin-top:50px; width:1000px; ">
        <HelloWorld msg="Bienvendio a Stock - Olmo!"/>
        <HelloWorld msg2="El mejor sistema para manejar tu stock."/>
      </div>
    </div>
    <div style="float:left">
      <dropdown/>
    </div>
    <div id="formularios">
    </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import dropdown from './components/dropdown.vue';

export default {
  name: 'app',
  components: {
    HelloWorld,
    dropdown
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
