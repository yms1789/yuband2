<template>
  <Nav />
  <tbody class="wrapper">
    <tr class="cafe_name">
      <th scope="row">
        <div class="input_title">
          <span class="blind">* 카페이름</span>
        </div>
      </th>
      <td>
        <div class="input_area">
          <div class="FormInputText" byte="0">
            <input
              type="text"
              placeholder=""
              id="카페이름"
              class="input_text input_txt"
            />
          </div>
        </div>
        <!---->
      </td>
    </tr>

    <tr class="cafe_name">
      <th scope="row">
        <div class="input_title">
          <span class="blind">* 그룹 주소</span>
        </div>
      </th>
      <td>
        <div class="input_area">
          <div class="FormInputText" byte="0">
            <input
              type="text"
              placeholder=""
              id="그룹주소"
              class="input_text input_txt"
            />
          </div>
        </div>
        <!---->
      </td>
    </tr>

    <tr class="cafe_name">
      <th scope="row">
        <div class="input_title">
          <span class="blind">* 그룹 소개</span>
        </div>
      </th>
      <td>
        <div class="input_area">
          <div class="FormInputText" byte="0">
            <input
              type="text"
              placeholder=""
              id="그룹소개"
              class="input_text input_txt"
            />
          </div>
        </div>
        <!---->
      </td>
    </tr>

    <tr class="cafe_icon">
      <th scope="row">
        <div class="input_title off"></div>
      </th>
      <td>
        <div class="SectionCreateCafeIcon">
          <div class="major_img">
            <div class="thmb">
              <img
                src="https://ssl.pstatic.net/static/cafe/thumb/make_cafe_thumb_default.png"
                width="114"
                height="114"
                alt="이미지를 등록하세요"
              />
            </div>
            <div class="detail">
              <div class="ly_btn">
                <button class="btn btn-outline-primary ml-2 mt-2 mr-2 btn-sm">
                  등록</button
                ><button class="btn btn-outline-secondary mt-2 mr-2 btn-sm">
                  삭제
                </button>
                <div
                  id="btnDelLayer"
                  class="cont_layer layer_type"
                  style="display: none"
                ></div>
              </div>
            </div>
          </div>
        </div>
        <!----><!---->
      </td>
    </tr>
  </tbody>
  <div class="createButton">
    <a
      class="btn btn-primary mr-3"
      :style="{ width: 100 + 'px' }"
      @click="create"
    >
      확인
    </a>
    <router-link to="/home">
      <button class="btn btn-secondary mr-2" :style="{ width: 100 + 'px' }">
        취소
      </button></router-link
    >
  </div>
</template>

<script>
import Nav from "./Nav.vue";
export default {
  components: {
    Nav: Nav,
  },
  methods: {
    create() {
      var cafeName = document.getElementById("카페이름").value;
      var groupAddr = document.getElementById("그룹주소").value;
      var groupIntroduce = document.getElementById("그룹소개").value;
      if (cafeName == "" || groupAddr == "" || groupIntroduce == "") {
        alert("빈 칸을 모두 채워 주세요");
      } else {
        location.href = "/home";
      }
    },
  },
};
</script>

<style>
.input_area {
  width: 500px;
}
tr {
  margin-bottom: 20px;
}
.createButton {
  display: flex;
  justify-content: flex-end;
  /* width: 100px; */
}
</style>