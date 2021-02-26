<template>
  <div class="item" :class="{ 'item--marked': marked }">
    <img :src="user.avatar" alt="avatar" />
    <div class="item-details">
      <div class="item-details-user">
        <div class="item-user-name">
          <h3 v-html="user.name"></h3>
          <span v-html="user.email"></span>
        </div>
        <p v-html="user.title"></p>
        <p v-html="user.address + '' + user.city"></p>
      </div>
      <div class="item-details-btn" :class="{ 'border-clear': marked }">
        <button @click="handleClick">
          {{ marked ? "Skip Selection" : "Mark as Suitable" }}
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "User",
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      marked: false,
    };
  },
  methods: {
    handleClick() {
      this.marked = !this.marked;
    },
  },
};
</script>

<style lang="css">
.item {
  display: flex;
  background-color: #fafafa;
  margin-bottom: 16px;
  border: 2px solid transparent;
  border-radius: 5px;
}

.item--marked {
  border-color: #aeb9f4;
}

.item img {
  width: 140px;
  background-color: #bbbbbb;
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
}
.item-details {
  flex: 1;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 2px rgba(155, 154, 154, 0.24),
    0px 2px 2px rgba(155, 154, 154, 0.24);
}

.item-details-user {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: auto;
  padding: 12px;
  margin-left: 18px;
  margin-top: 10px;
}
.item-user-name {
  display: flex;
  justify-content: space-between;
  margin-top: -8px;
  margin-bottom: 4px;
}
.item-detail-user .item-user-name h3 {
  font-size: 23px;
  font-weight: 400;
  line-height: 32px;
  color: rgb(0, 0, 0, 0.87);
}

.item-details-user .item-user-name span {
  font-size: 13px;
  font-weight: 400;
  line-height: 16px;
}

.item-details-user p,
.item-details-user .item-user-name span {
  line-height: 18px;
  color: rgb(0, 0, 0, 0.54);
}
.item-details-user p {
  font-size: 14px;
}
.item-details-user p:first-of-type {
  font-weight: 900;
  margin-bottom: 4px;
}
.item-details-user p:last-of-type {
  font-weight: 400;
}

.item-details-btn {
  padding: 18px;
  border-top: 1px solid rgb(0, 0, 0, 0.12);
}
.border-clear {
  border-top: none;
}
.item-details-btn button {
  outline: none;
  border: none;
  background-color: transparent;
  color: rgba(0, 150, 136, 1);
  text-transform: uppercase;
  text-align: center;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  cursor: pointer;
  margin-left: 40px;
}
.highlight {
  background-color: #fff73b;
  font-size: inherit !important;
  font-weight: inherit !important;
}
@media only screen and (max-width: 768px) {
  .item {
    overflow: hidden;
  }
  .item img {
    width: 120px;
    object-fit: contain;
  }
  .item-details-user {
    padding: 8px;
    margin-left: 10px;
  }
  .item-detail-user .item-user-name h3 {
    font-size: 10px;
  }
  .item-details-user .item-user-name span {
    font-size: 8px;
  }
  .item-details-user p {
    font-size: 10px;
  }
  .item-details-btn {
    padding: 9px;
  }
  .item-details-btn button {
    margin-left: 30px;
  }
}
</style>
