<template>
  <div class="black-bg wrapper" v-if="modalState == 1">
    <div class="white-bg">
      <select name="count" data-title="본인 확인 질문">
        <option value="0">본인 확인 질문</option>
        <option value="1">엄마 이름</option>
        <option value="2">아빠 이름</option>
        <option value="3">자신이 태어난 출생지는?</option>
      </select>

      <input type="text" id="전화번호" name="회원가입" placeholder="답변" />
      <br />
      <button class="btn btn-primary" @click="modalState = 2">완료</button>
      <button class="btn btn-primary" @click="modalState = 0">취소</button>
    </div>
  </div>

  <div class="black-bg wrapper" v-if="modalState == 2">
    <div class="white-bg">
      <h2>PW 재설정</h2>
      <input
        type="text"
        id="새비밀번호"
        name="새비밀번호"
        placeholder="비밀번호를 입력하세요."
      />
      <br />
      <router-link to="/"
        ><button class="btn btn-primary">완료</button></router-link
      >
      <button class="btn btn-primary" @click="modalState = 1">취소</button>
    </div>
  </div>

  <div class="wrapper fadeInDown" v-if="modalState == 0">
    <div id="formContent">
      <!-- Tabs Titles -->

      <!-- Login Form -->
      <form>
        <h2>Reset PW</h2>
        <input
          type="text"
          id="login"
          class="fadeIn second"
          name="login"
          placeholder="id"
        />
        <button @click="modalState = 1" class="btn btn-primary fadeIn fiveth">
          완료
        </button>
        <router-link to="/"
          ><button class="btn btn-primary fadeIn fiveth">
            취소
          </button></router-link
        >
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      modalState: 0,
    };
  },
};
</script>

<style>
</style>