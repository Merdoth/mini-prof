<template>
  <div>
    <div v-if="users.length > 0" class="user-list-cont">
      <User v-for="(user, index) in users" :key="index" :user="user" />
    </div>
    <Loader
      v-else
      msg1="Loading!!!"
      msg2="Searching for it, Please wait"
      msg3="Still looking for user, hold on"
      msg4="Go ahead and try another user"
    />
  </div>
</template>
<script>
import User from "./User.vue";
import Loader from "./Loader.vue";
export default {
  name: "UserList",
  props: ["users"],
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
</style>
