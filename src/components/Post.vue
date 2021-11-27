<template>
  <div class="center">
    <div class="card" style="width: 60rem; height: 100%">
      <h3>제목</h3>
      <p>작성자:</p>
      <p>날짜</p>

      <div class="card" style="overflow: auto; height: 40%">글내용</div>

      <div class="card" style="width: 56.8rem; height: 60%">
        <h3>댓글</h3>
        <textarea
          class="ml-2 mr-2 mt-2"
          name=""
          id=""
          cols="30"
          rows="4"
          style="overflow: auto"
        ></textarea>
        <button
          type="button"
          class="btn btn-outline-dark rightButton mt-2 ml-2 mr-2"
        >
          작성
        </button>
        <hr />
        <div style="overflow:auto; width:58.5rem height:10px">
          <section class="a" v-for="(item, i) in items" :key="i">
            <span>댓글 작성자</span>
            <br />
            <div>
              댓글내용
              <button
                type="button"
                class="btn btn-outline-dark rightButton btn-sm"
              >
                댓글 삭제
                <!-- 댓글작성자가 본인이면 삭제 버튼 활성화 -->
              </button>
            </div>
            <hr />
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: 10,
    };
  },
};
</script>

<style>
h3 {
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 10px;
  margin-bottom: 5px;
}
p {
  margin-left: 5px;
  margin-right: 5px;
  margin-top: 5px;
  margin-bottom: 5px;
}
.card {
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
}
.rightButton {
  float: right;
}
</style>