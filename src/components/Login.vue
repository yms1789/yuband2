<template>
  <div class="wrapper fadeInDown">
    <div id="formContent">
      <!-- Tabs Titles -->

      <!-- Login Form -->
      <form>
        <h2>Login</h2>
        <br />
        <input
          type="id"
          v-model="userId"
          class="fadeIn second"
          name="login"
          placeholder="id"
        />

        <br />
        <input
          type="password"
          v-model="userPassword"
          class="fadeIn third"
          name="login"
          placeholder="password"
        />
        <br />
        <!-- <input type="submit" class="fadeIn fourth" value="Log In"> -->
        <button
          class="btn btn-primary fadeIn fiveth mt-2 mb-2"
          @click="login"
        >
          로그인
        </button>
      </form>

      <!-- Remind Passowrd -->
      <div id="formFooter">
        <router-link to="/SignUp"
          ><button class="btn btn-primary fadeIn fiveth mr-2">
            회원가입
          </button></router-link
        >
        <router-link to="/FindID"
          ><button class="btn btn-primary fadeIn fiveth mr-2">
            아이디찾기
          </button></router-link
        >
        <router-link to="/ResetPW"
          ><button class="btn btn-primary fadeIn fiveth mr-2">
            비밀번호초기화
          </button></router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
import Nav from "./Nav.vue";

export default {
  data() {
    return {
      userId: null,
      userPassword: null,
      state: "/home",
    };
  },
  comments: {
    Nav: Nav,
  },
  methods: {
    login() {
      // 아이디와 패스워드 입력여부 확인
      if (this.userId && this.userPassword) {
        var id = this.userId              // 아이디
        var password = this.userPassword  // 비밀번호
        this.store.dispatch('login', {id, password}) // 로그인
      } else {
        alert("아이디 또는 비밀번호가 입력되지 않았습니다.")
        return false
      }
    }
  },
};
</script>

<style>
.logo {
  width: 200px;
  height: 200px;
}
</style>