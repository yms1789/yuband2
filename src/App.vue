<template>
  <div v-if="step == 0">메인</div>

  <router-view></router-view>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      step: 1,
    };
  },
};
</script>

<style>
#app {
  margin: 5px;
}

.login_input {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
</style>
