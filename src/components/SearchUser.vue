<template>
  <div class="search-box">
    <input type="text"
     class="search-bar"
     v-model="query"
    />
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
}
</script>
<style lang="css">
.search {
  margin-bottom: 40px;
}
.search input {
}
</style>