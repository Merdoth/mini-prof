<template>
  <div class="home">
    <div class="search-wrapper">
      <SearchUser @searchValue="setSearchValue" />
    </div>
    <UserList :users="users" />
  </div>
</template>

<script>
import UserList from "@/components/UserList.vue";
import SearchUser from "@/components/SearchUser.vue";
import axios from "axios";

export default {
  name: "Home",
  components: {
    UserList,
    SearchUser,
  },
  data() {
    return {
      users: [],
      DATA: [],
    };
  },
  methods: {
    setSearchValue(value) {
      this.handleFilter(value);
    },
    handleFilter(query) {
      const regex = new RegExp(query, "gi");
      let filteredUsers = this.DATA.filter(
        (user) =>
          user.name.match(regex) ||
          user.email.match(regex) ||
          user.title.match(regex) ||
          user.address.match(regex) ||
          user.city.match(regex)
      );
      const decorateQuery = (user) => {
        const regex = new RegExp(query, "gi");
        const userName = user.replace(regex, function (match) {
          return `<span class='highlight'>${match}</span>`;
        });
        return userName;
      };
      const formattedFilteredUsers = filteredUsers.map((user) => ({
        ...user,
        name: decorateQuery(user.name, query),
        email: decorateQuery(user.email, query),
        title: decorateQuery(user.title, query),
        address: decorateQuery(user.address, query),
        city: decorateQuery(user.city, query),
      }));
      this.users = formattedFilteredUsers;
    },
  },
  mounted() {
    axios
      .get("https://api.mocki.io/v1/568c9df9")
      .then((res) => {
        this.DATA = res.data.slice(0, 110);
        this.users = res.data.slice(0, 110);
      })
      .catch((error) => {
        console.log("something went wrong", error);
      });
  },
};
</script>

<style lang="css">
@import "../../node_modules/@fortawesome/fontawesome-free/css/all.css";
*,
*:before,
*:after {
  margin: 0;
  padding: 0;
}
body {
  background-color: #eeeeee;
  font-family: "Roboto", sans-serif;
}
.home {
  width: 640px;
  height: 80vh;
  margin: auto;
  margin-top: 60px;
  padding: 20px;
  background-color: white;
  overflow-y: scroll;
}
.home::-webkit-scrollbar {
  width: 5px;
}
/* Track */
.home::-webkit-scrollbar-track {
  background: #f1f1f1;
}
/* Handle */
.home::-webkit-scrollbar-thumb {
  background: #4d4d4d;
  border-radius: 10px;
  height: 40px;
}
/* Handle on hover */
.home::-webkit-scrollbar-thumb:hover {
  background: #555;
}
.search-wrapper {
  width: 640px;
  padding: 15px;
  padding-bottom: 20px;
  position: fixed;
  left: 0;
  right: 0;
  margin: auto;
  margin-top: -20px;
  background-color: white;
  overflow: hidden;
}
</style>