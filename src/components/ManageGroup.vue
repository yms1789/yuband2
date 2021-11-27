<template>
  <div class="center">
    <div>
      <div class="card rightObject" style="width: 60rem">
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
                <button class="btn btn-outline-primary mr-1 btn-sm">등록</button
                ><button class="btn btn-outline-secondary btn-sm">삭제</button>
                <div
                  id="btnDelLayer"
                  class="cont_layer layer_type"
                  style="display: none"
                ></div>
              </div>
            </div>
          </div>
        </div>
        <textarea
          class="mr-2 mt-2 mb-2"
          placeholder="소개글을 입력하세요"
          cols="100"
          rows="3"
        ></textarea>
      </div>

      <div class="card" style="width: 60rem">
        <p class="mt-1">그룹 신청 목록</p>
        <hr style="margin-top: 0px" />
        <!-- <div
          v-for="(댓글, i) in 댓글"
          :key="i"
          class="card"
          style="width: 58.5rem"
        >
          <div>
            <b class="">{{ 댓글.name }}</b>
          </div>

          <div class="buttonPosition">
            <button class="btn btn-outline-primary mr-1 btn-sm">승인</button
            ><button class="btn btn-outline-secondary btn-sm">삭제</button>
          </div>
        </div> -->
        <div>
          <section
            class="py-5"
            style="overflow: scroll; width: 58.5rem; height: 20rem"
          >
            <div class="container" style="margin-top: 0px">
              <div class="row row-cols-2 row-cols-md-3 row-cols-xl-4">
                <div class="col mb-5" v-for="a in 10" :key="a">
                  <div class="card">
                    <div class="card-body p-4">
                      <div class="text-center">
                        <h5 class="fw-bolder">{{ 댓글[0].name }}</h5>
                      </div>
                    </div>
                    <div
                      class="card-footer p-4 pt-0 border-top-0 bg-transparent"
                    >
                      <div class="text-center">
                        <a
                          class="btn btn-outline-dark mt-auto btn-sm floatright"
                          href="#"
                          >승인</a
                        >
                        <a
                          class="
                            btn btn-outline-danger
                            mt-auto
                            btn-sm
                            floatright
                          "
                          href="#"
                          >삭제</a
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <hr style="margin-top: 0px" />
        <p class="mt-1">그룹 멤버 목록</p>
        <hr style="margin-top: 0px" />
        <section
          class="py-5"
          style="overflow: scroll; width: 58.5rem; height: 20rem"
        >
          <div class="container" style="margin-top: 0px">
            <div class="row row-cols-2 row-cols-md-3 row-cols-xl-4">
              <div class="col mb-5" v-for="a in 10" :key="a">
                <div class="card">
                  <div class="card-body p-4">
                    <div class="text-center">
                      <h5 class="fw-bolder">{{ 댓글[0].name }}</h5>
                    </div>
                  </div>
                  <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div class="text-center">
                      <a
                        class="btn btn-outline-dark mt-auto btn-sm floatright"
                        href="#"
                        >승인</a
                      >
                      <a
                        class="btn btn-outline-danger mt-auto btn-sm floatright"
                        href="#"
                        >삭제</a
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div>
          <a class="btn btn-outline-dark mt-auto btn rightfloat" href="/main"
            >취소</a
          >
          <a
            class="btn btn-outline-dark mt-auto btn rightfloat mr-2"
            href="/main"
            >저장</a
          >
          <a class="btn btn-outline-danger mt-auto btn leftfloat" href="#"
            >그룹 삭제</a
          >
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import 댓글 from "../assets/comments.js";
export default {
  data() {
    return {
      댓글: 댓글,
    };
  },
};
</script>

<style>
.rightObject {
  display: flex;
  flex-direction: row;
}
div {
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 10px;
  margin-bottom: 5px;
}
.buttonPosition {
  display: flex;
  justify-content: flex-end;
}
.rightfloat {
  float: right;
}
.leftfloat {
  float: left;
}
</style>