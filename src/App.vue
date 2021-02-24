<template>
  <SearchUser />
  <UserList />
</template>

<script>
import SearchUser from './components/SearchUser.vue'
import UserList from './components/UserList.vue'

export default {
  name: 'App',
  components: {
    UserList,
    SearchUser
  }
}
</script>

<style>
@import '../node_modules/@fortawesome/fontawesome-free/css/all.css';
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
