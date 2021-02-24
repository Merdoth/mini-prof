<template>
 <div class="home">
    <SearchUser />
  <UserList />
 </div>
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
*,
*:before,
*:after {
  margin: 0;
  padding: 0;
}
body {
  background-color: #eeeeee;
}
.home {
  font-family: sans-serif;
  width: 564px;
  height: 643px;
  margin: 40px auto;
  left: 0;
  right: 0;
  padding: 20px;
  background-color: white;
  position: fixed;
  overflow-y: scroll;
}
.home::-webkit-scrollbar {
  width: 4px;
}
/* Track */
.home::-webkit-scrollbar-track {
  background: #f1f1f1;
}
/* Handle */
.home::-webkit-scrollbar-thumb {
  background: #4d4d4d;
  border-radius: 5px;
  height: 40px;
}
/* Handle on hover */
.home::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>
