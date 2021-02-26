<template>
  <div class="not-found">
    <Loader
      msg1="404"
      msg2="Oops! Seems you're lost"
      msg3="This particular page doesn't exist"
      msg4="Go ahead and to where it all started"
    />
  </div>
</template>
<script>
import Loader from "../components/common/Loader.vue";
export default {
  name: "NotFound",
  components: {
    Loader,
  }
};
</script>
<style lang="css" scoped>
.not-found {
  width: 640px;
  height: 80vh;
  margin: auto;
  margin-top: 80px;
}
@media only screen and (max-width: 768px) {
  .not-found {
    width: 100%;
  }
}
</style>