<template>
  <Nav class="mb-4" />

  <div class="vertical-nav bg-white left" id="sidebar">
    <p class="text-gray font-weight-bold text-uppercase px-3 small pb-4 mb-0">
      기능
    </p>

    <ul class="nav flex-column bg-white mb-0">
      <li @click="state = 'GroupIntro'" class="nav-item">
        <a href="#" class="nav-link text-dark bg-light">
          <i class="fa fa-th-large mr-3 text-primary fa-fw"></i>
          그룹 홈
        </a>
      </li>
      <li @click="state = 'WritePost'" class="nav-item">
        <a href="#" class="nav-link text-dark bg-light">
          <i class="fa fa-th-large mr-3 text-primary fa-fw"></i>
          글쓰기
        </a>
      </li>
      <li class="nav-item">
        <a href="#" class="nav-link text-dark bg-light">
          <i class="fa fa-address-card mr-3 text-primary fa-fw"></i>
          그룹 탈퇴
        </a>
      </li>

      <li
        class="nav-item"
        v-if="isAdmin == true"
        @click="state = 'ManageGroup'"
      >
        <a href="#" class="nav-link text-dark bg-light">
          <i class="fa fa-address-card mr-3 text-primary fa-fw"></i>
          관리
        </a>
      </li>
    </ul>

    <p class="text-gray font-weight-bold text-uppercase px-3 small py-4 mb-0">
      게시글 목록
    </p>

    <ul class="nav flex-column bg-white mb-0">
      <li class="nav-item" @click="state = 'Post'">
        <a href="#" class="nav-link text-dark bg-light">
          <i class="fa fa-area-chart mr-3 text-primary fa-fw"></i>
          Area charts
        </a>
      </li>
    </ul>
  </div>

  <WritePost v-if="state == 'WritePost'" />
  <Post v-else-if="state == 'Post'" />
  <ManageGroup v-else-if="state == 'ManageGroup'" />
  <GroupIntro v-else />
</template>

<script>
import Nav from "./Nav.vue";
import GroupIntro from "./GroupIntro.vue";
import WritePost from "./WritePost.vue";
import Post from "./Post.vue";
import ManageGroup from "./ManageGroup.vue";
export default {
  data() {
    return {
      state: "",
      isAdmin: true,
    };
  },
  components: {
    Nav: Nav,
    GroupIntro: GroupIntro,
    WritePost: WritePost,
    Post: Post,
    ManageGroup: ManageGroup,
  },
  methods: {},
};
</script>

<style>
.content {
  border: 1px solid black;
  display: flex;
  justify-content: center;
}

.vertical-nav {
  width: 17rem;
  height: 100vh;

  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.4s;
}

.page-content {
  width: calc(100% - 17rem);
  margin-left: 17rem;
  transition: all 0.4s;
}

/* for toggle behavior */

#sidebar.active {
  margin-left: -17rem;
}

#content.active {
  width: 100%;
  margin: 0;
}

.left {
  float: left;
}

.right {
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
}

@media (max-width: 768px) {
  #sidebar {
    margin-left: -17rem;
  }
  #sidebar.active {
    margin-left: 0;
  }
  #content {
    width: 100%;
    margin: 0;
  }
  #content.active {
    margin-left: 17rem;
    width: calc(100% - 17rem);
  }
}

/*
*
* ==========================================
* FOR DEMO PURPOSE
* ==========================================
*
*/

.separator {
  margin: 3rem 0;
  border-bottom: 1px dashed #fff;
}

.text-uppercase {
  letter-spacing: 0.1em;
}

.text-gray {
  color: #aaa;
}
</style>