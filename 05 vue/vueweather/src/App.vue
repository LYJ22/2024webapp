<template>
  <div>
    <NavbarView />
    <MainView />
  </div>
</template>

<script setup>
//node_modules에서 가져오는 것은 경로로 표현되지 않음
import { onMounted, ref } from "vue";
import NavbarView from "./components/NavbarView.vue";
import MainView from "./components/MainView.vue";

import { useStore } from "vuex";

const store = useStore();

onMounted(() => {
  store.dispatch("getWeather");
});
</script>

<style lang="scss" scoped></style>
