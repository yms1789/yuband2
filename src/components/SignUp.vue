<template>
  <div class="wrapper fadeInDown">
    <div id="formContent">
      <!-- Tabs Titles -->

      <!-- Login Form -->
      <form>
        <h2>회원가입</h2>
        <input
          type="text"
          id="login"
          class="fadeIn second"
          name="회원가입"
          placeholder="id"
        />
        <input
          type="text"
          id="password"
          class="fadeIn second"
          name="회원가입"
          placeholder="password"
        />
        <input
          type="text"
          id="이름"
          class="fadeIn second"
          name="회원가입"
          placeholder="이름"
        />
        <input
          type="text"
          id="전화번호"
          class="fadeIn second"
          name="회원가입"
          placeholder="전화번호"
        />

        <select class="fadeIn second" name="count" data-title="본인 확인 질문">
          <option value="0">본인 확인 질문</option>
          <option value="1">엄마 이름</option>
          <option value="2">아빠 이름</option>
          <option value="3">자신이 태어난 출생지는?</option>
        </select>

        <input
          type="text"
          class="fadeIn second"
          name="회원가입"
          placeholder="답변"
        />
      </form>

      <!-- Remind Passowrd -->
      <div id="formFooter">
        <router-link to="/"
          ><button class="btn btn-primary">완료</button></router-link
        >
        <router-link to="/"
          ><button class="btn btn-primary">취소</button></router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'SignUp',
  data(){
    return{
      userId:"",
      userPassword:"",
      name:"",
      phoneNumber:"",
      answer:"",
    }
  },
  methods:{
    join() {
      const params = {
        "email": this.userId,               // 아이디
        "password": this.userPassword,      // 비밀번호
        "name": this.name,              // 이름
        "mobile": this.phoneNumber,          // 연락처
        "answer": this.answer,
      }
      this.axios.post("http://localhost:8080/signup", JSON.stringify(params), {
        headers: {'content-type': 'application/json'}
      }).then(() => {
        alert("회원가입이 정상적으로 완료되었습니다.")
        // 회원가입이 정상적으로 이루어진 시점에서 해당 아이디와 비밀번호를 가지고 바로 로그인 요청
        let loginId = this.id
        let loginPw = this.password
        // 로그인 API 통신요청
        this.store.dispatch('login', {loginId, loginPw})
            .then(() => {
              this.router.push(this.$routePath + "/posts")
            })
            .catch(e => {
              alert("로그인 요청에 문제가 발생했습니다.\nmsg:" + e.response.data)
            })
      }).catch(e => {
        switch (e.response.status) {
          case 400:
            alert("잘못된 요청방식입니다.\nmsg: " + e.response.data['msg'])
            break
          case 409:
            alert("중복된 정보가 확인됩니다.\nmsg: " + e.response.data['msg'])
            break
          case 500:
            alert("서버에 문제가 발생했습니다.\nmsg: " + e.response.data['msg'])
            break
        }
      })
    }
  }
};
</script>

<style>
</style>