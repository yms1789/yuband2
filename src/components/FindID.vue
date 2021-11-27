<template>
  <div class="black-bg wrapper" v-if="modalState == true">
    <div class="white-bg">
      <h2>사용자 ID</h2>
      <div id="formFooter">
        <p>찾은 아이디</p>
      </div>

      <!-- <button @click="modalState = true" class="btn btn-primary">완료</button> -->
      <router-link to="/"
        ><button class="btn btn-primary">완료</button></router-link
      >
      <button @click="modalState = false" class="btn btn-primary">취소</button>
    </div>
  </div>

  <div class="wrapper fadeInDown" v-if="modalState == false">
    <div id="formContent">
      <!-- Tabs Titles -->

      <!-- Login Form -->
      <form>
        <h2>아이디찾기</h2>
        <input
          type="text"
          id="name"
          class="fadeIn second"
          name="아이디찾기"
          placeholder="이름"
        />
        <input
          type="text"
          id="phoneNum"
          class="fadeIn second"
          name="아이디찾기"
          placeholder="전화번호"
        />
      </form>

      <!-- Remind Passowrd -->
      <div id="formFooter">
        <button @click="modalState = true" class="btn btn-primary fadeIn third">
          완료
        </button>
        <router-link to="/"
          ><button class="btn btn-primary fadeIn third">
            취소
          </button></router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      modalState: false,
    };
  },
  methods: {},
};
</script>

<style>
.black-bg {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  padding: 20px;
}

.white-bg {
  width: 100%;
  background: white;
  border-radius: 8px;
  padding: 20px;
  text-align: center;
}
</style>