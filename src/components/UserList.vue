<template>
  <div>
    <User />
  </div>
</template>
<script>
import User from "./User.vue"
export default {
  name: "UserList",
  components: {
    User
  },
data() {
    return {};
  }
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
