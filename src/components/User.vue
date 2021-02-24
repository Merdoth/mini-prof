<template>
   <div class="item">
    <img src="" alt="avatar" />
    <div class="item-details">
      <div class="item-details__top">
        <div class="left">
          <h3>John Doga</h3>
          <p>Actor</p>
          <p>Kansas, Louisana </p>
        </div>
        <span class="right">john.doga@gmail.com</span>
      </div>
      <div class="item-details__bottom">
        <button>
          "Mark as Suitable" 
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "User",
};
</script>

<style lang="css">
.item-details {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.item-details__top {
  display: flex;
  justify-content: space-between;
  margin-bottom: auto;
  padding: 12px;
}

.item-details__top h3 {
  font-size: 18px;
  margin-bottom: 8px;
}

.item-details__top .left p:first-of-type {
  font-size: 12px;
  margin-bottom: 6px;
  font-weight: bold;
  opacity: 0.6;
}

.item-details__top .left p:last-of-type {
  font-size: 12px;
  opacity: 0.6;
}

.item-details__top .right {
  font-size: 12px;
  opacity: 0.6;
}

.item-details__bottom {
  padding: 12px;
  border-top: 1px solid #e3e3e3;
}

.item-details__bottom button {
  outline: none;
  border: none;
  background-color: transparent;
  color: green;
  text-transform: uppercase;
  font-weight: 500;
  cursor: pointer;
}
.highlight {
  background-color: yellow;
  font-size: inherit;

  /* color: black; */
}
</style>
