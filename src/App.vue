<template>
  <div>   
    <Home />
  </div>
</template>
<script>
import Home from "./views/Home.vue"
export default {
  components: {
    Home
  } 
}
</script>
<style>
@import '../node_modules/@fortawesome/fontawesome-free/css/all.css';
*,
*:before,
*:after {
  margin: 0;
  padding: 0;
}
body {
  background-color: #eeeeee;
}
</style>
