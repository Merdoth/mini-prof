<template>
  <div class="home">
    <SearchUser @searchValue="setSearchValue" />
    <UserList :users="users" />
  </div>
</template>

<script>
import UserList from "@/components/UserList.vue";
import SearchUser from "@/components/SearchUser.vue";
import DATA from "@/utils/users.json";
export default {
  name: "Home",
  components: {
    UserList,
    SearchUser,
  },
  data() {
    return {
      users: DATA,
    };
  },
  methods: {
    setSearchValue(value) {
      this.handleFilter(value);
    },
    handleFilter(query) {
      const regex = new RegExp(query, "gi");
      let filteredUsers = DATA.filter(
        (user) =>
          user.name.match(regex) ||
          user.email.match(regex) ||
          user.title.match(regex) ||
          user.address.match(regex) ||
          user.city.match(regex)
      );
      const decorateQuery = (user, query) => {
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
};
</script>

<style>
*,
*:before,
*:after {
  margin: 0;
  padding: 0;
}
body {
  background-color: #eeeeee;
}
.home {
  font-family: sans-serif;
  width: 564px;
  height: 643px;
  margin: 40px auto;
  left: 0;
  right: 0;
  padding: 20px;
  background-color: white;
  position: fixed;
  overflow-y: scroll;
}
.home::-webkit-scrollbar {
  width: 4px;
}
/* Track */
.home::-webkit-scrollbar-track {
  background: #f1f1f1;
}
/* Handle */
.home::-webkit-scrollbar-thumb {
  background: #4d4d4d;
  border-radius: 5px;
  height: 40px;
}
/* Handle on hover */
.home::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>