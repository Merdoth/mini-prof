<template>
  <div class="not-found">
    <Loader
      msg1="404"
      msg2="Looks like your search is broken"
      msg3="Sorry this page doesn't exist"
      msg4="Go ahead and try the /search/{your name}"
    />
  </div>
</template>
<script>
import Loader from "../components/Loader.vue";
export default {
  name: "NotFound",
  components: {
    Loader,
  },
  data() {
    return {};
  },
};
</script>
<style lang="css" scoped>
.not-found {
  width: 640px;
  height: 80vh;
  margin: auto;
  margin-top: 80px;
}
</style>