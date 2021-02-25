 <template>
  <div class="user-list-err">
    <div class="user-list-err-text-1">
      <p>{{ msg1 }}!!!</p>
      <span>{{ msg2 }}</span>
    </div>
    <div class="effect">
      <div class="effect-1"></div>
      <div class="effect-2"></div>
      <div class="effect-3"></div>
    </div>
    <div class="user-list-err-text-2">
      <p>{{ msg3 }}!!</p>
      <span>{{ msg4 }}</span>
    </div>
  </div>
</template>
 <script>
export default {
  name: "Loader",
  props: ["msg1", "msg2", "msg3", "msg4"],
};
</script>
 <style lang="css" scoped>
.user-list-err {
  background-color: #fafafa;
  width: 640px;
  height: 80vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}
.user-list-err .effect {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  animation: leftRight 7s ease infinite;
}
.user-list-err .effect-1 {
  width: 70px;
  height: 70px;
  border: 10px solid #010f19;
  border-radius: 50%;
  background: linear-gradient(
    135deg,
    #ebf1f6 0%,
    #abd3ee 50%,
    #89c3eb 51%,
    #d5ebfb 100%
  );
}
.user-list-err .effect-2 {
  width: 14px;
  height: 60px;
  background-color: #010f19;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  margin-top: -5px;
  z-index: -2;
}
.user-list-err .effect-3 {
  width: 270px;
  height: 270px;
  background-color: transparent;
  margin: auto;
  margin-top: -210px;
  border-radius: 50%;
  border: none;
  box-shadow: 0 10px 6px -6px #777;
}
@keyframes leftRight {
  0%,
  100% {
    transform: rotate(-45deg);
  }
  50% {
    transform: rotate(45deg);
  }
}
.user-list-err-text-1 p {
  font-size: 44px;
  font-weight: 900;
  text-align: center;
  margin-top: 30px;
}
.user-list-err-text-1 span,
.user-list-err-text-2 p {
  font-weight: 700;
  text-align: center;
}
.user-list-err-text-1 span {
  font-size: 24px;
}
.user-list-err-text-2 p,
.user-list-err-text-2 span {
  font-size: 20px;
  margin-bottom: 8px;
}
.user-list-err-text-2 span {
  color: rgba(0, 150, 136, 1);
  text-align: center;
  margin: 0 auto;
}
</style>