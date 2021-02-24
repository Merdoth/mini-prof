<template>
  <div class="search-box">
    <input type="text" class="search-bar" v-model="query" />
  </div>
</template>
<script>
export default {
  name: "SearchUser",
  data() {
    return {
      query: "",
    };
  },
  watch: {
    query(value) {
      this.$emit("searchValue", value);
      if (value == "") {
        this.$router.push({ path: "/" });
      } else {
        this.$router.push({ name: "search", params: { param: value } });
      }
    },
  },
  mounted() {
    const queryValue = this.$route.params.param || "";
    this.query = queryValue;
  },
};
</script>
<style lang="css">
.search {
  margin-bottom: 40px;
}
.search input {
}
</style>