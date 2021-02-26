<template>
  <div>
    <div v-if="!loader && users.length > 0" class="user-list-cont">
      <User v-for="(user, index) in users" :key="index" :user="user" />
      <div class="loader-dots" v-if="!loading">
        <div class="dots dot-1"></div>
        <div class="dots dot-2"></div>
        <div class="dots dot-3"></div>
        <div class="dots dot-4"></div>
      </div>
    </div>
    <Loader
      v-else
      msg1="Loading"
      msg2="Searching for it, Please wait"
      msg3="Still looking for user, hold on"
      msg4="Go ahead and try another search input"
    />
  </div>
</template>
<script>
import User from "./User.vue";
import Loader from "./common/Loader.vue";
export default {
  name: "UserList",
  props: ["users", "loading", "loader"],
  components: {
    User,
    Loader,
  },
  data() {
    return {};
  },
};
</script>
<style lang="css" scoped>
.user-list-cont {
  margin-top: 80px;
}
.loader-dots {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  margin-top: 20px;
  width: 80px;
}
.dots {
  height: 13px;
  width: 13px;
  border-radius: 50%;
  background-color: #7a7979;
  color: #7a7979;
  animation: dotFlashing 1s infinite linear alternate;
}
.dot-1 {
  animation-delay: 0.7s;
}
.dot-2 {
  animation-delay: 0.5s;
}
.dot-3 {
  animation-delay: 0.3s;
}
.dot-4 {
  animation-delay: 1s;
}
@keyframes dotFlashing {
  0% {
    background-color: #7a7979;
  }
  50%,
  100% {
    background-color: #bbbbbb;
  }
}
</style>
