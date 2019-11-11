<template>
  <div class="hello">
    <div style="float:left">
        <img alt="Vue logo" src="../assets/logo.png">
    </div>
    <div style="float:left; margin-top:50px; width:70%; ">
      <h1>{{ msg }}</h1>
      <h2>{{msg2}}</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
    msg2: String,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
