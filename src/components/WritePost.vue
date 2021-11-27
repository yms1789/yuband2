<template>
  <div class="center">
    <div class="card" style="width: 60rem">
      <h3 style="text-align: center">글쓰기</h3>
      <div class="form-group">
        <textarea
          type="text"
          name="title"
          class="form-control"
          id="title"
          cols="20"
          rows="1"
          placeholder="제목을 입력해주세요"
        />
      </div>
      <div class="form-group">
        <textarea
          contenteditable="true"
          cols="20"
          rows="20"
          height="300vh"
          type="text"
          name="content"
          class="form-control"
          id="content"
          placeholder="내용을 입력해주세요"
        />
        <div :style="{ height: 10 + 'vh' }">
          <button type="button" class="btn btn-outline-dark rightButton mt-2">
            사진 추가
          </button>
        </div>
      </div>

      <a type="submit" class="btn btn-primary" id="submit" @click="submit"
        >제출</a
      >
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    submit() {
      var title = document.getElementById("title").value;
      var content = document.getElementById("content").value;
      if (title == "" && content == "") {
        alert("제목과 내용을 입력해주세요");
      } else {
        location.reload();
      }
    },
  },
};
</script>

<style>
.center {
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
}
h3 {
  display: block;
  font-size: 1.5em;
  margin-block-start: 0.83em;
  margin-block-end: 0.83em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
}
.rightButton {
  float: right;
}
</style>