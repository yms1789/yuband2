import { createWebHistory, createRouter } from "vue-router";
import Login from "./components/Login.vue";
import SignUp from "./components/SignUp.vue";
import FindID from "./components/FindID.vue";
import ResetPW from "./components/ResetPW.vue";
import Home from "./components/Home";
import MakeGroup from "./components/MakeGroup.vue"
import GroupMain from "./components/GroupMain.vue"
import GroupIntro from "./components/GroupIntro.vue"
const routes = [
  {
    path: "/",
    component: Login,
  },
  {
    path: "/SignUp",
    component: SignUp,
  },
  {
    path: "/FindID",
    component: FindID,
  },
  {
    path: "/ResetPW",
    component: ResetPW,
  },
  {
    path: "/home",
    component: Home
  },

  {
    path: "/makeGroup",
    component: MakeGroup
  },
  {
    path: "/main",
    component: GroupMain,
  },
  {
    path: "/intro",
    component: GroupIntro,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;