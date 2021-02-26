<template>
  <div class="search-box">
    <i class="fas fa-search"></i>
    <input
      type="text"
      class="search-bar"
      v-model="query"
      @input="handleInput"
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
  methods: {
    handleInput(e) {
      let value = e.target.value;
      this.$emit("searchValue", value);
    },
  },
  watch: {
    query(value) {
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
.search-box {
  width: 631px;
  border: 1px solid transparent;
  margin: auto;
  background-color: rgba(250, 250, 250, 1);
  display: flex;
  justify-content: space-between;
  border-radius: 2px;
  margin-top: 10px;
  margin-left: 2px;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.12), 0px 2px 2px rgba(0, 0, 0, 0.24);
}
.search-box i {
  margin-right: -10px;
  font-size: 18px;
  color: rgb(0, 0, 0, 0.54);
  margin: auto;
  font-weight: 700;
}
.search-box input {
  width: 93%;
  padding: 7px 0;
  font-size: 24px;
  font-weight: 400;
  line-height: 28px;
  border: none;
  color: rgba(0, 0, 0, 0.75);
  outline: none;
  background-color: rgba(250, 250, 250, 1);
}
@media only screen and (max-width: 768px) {
  .search-box {
    width: 100%;
  }
  .search-box i {
    font-size: 15px;
  }
  .search-box input {
    font-size: 18px;
  }
}
</style>