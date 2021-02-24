<template>
  <div v-if="users.length > 0">
    <User v-for="(user, index) in users" :key="index" :user="user" />
  </div>
  <div v-else>
    <p>Sorry User isn't available!!!</p>
  </div>
</template>
<script>
import User from "./User.vue";
export default {
  name: "UserList",
  props: ["users"],
  components: {
    User,
  },
  data() {
    return {};
  },
};
</script>
<style lang="css">
.item {
  display: flex;
  background: #fafafa;
  margin-bottom: 16px;
  border: 3px solid transparent;
}

.item--marked {
  border-color: green;
}

.item img {
  width: 120px;
}
</style>
