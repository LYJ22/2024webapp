<template>
  <div>
    <NavbarView />
    <!-- MainView로 이동 -->
    <MainView />
    <!-- <div>
      {{ $store.state.weatherData }}
      <button @click="$store.dispatch('getWeather')">자료읽기</button>
    </div> -->
  </div>
</template>

<script setup>
//node_modules에서 가져오는 것은 경로로 표현되지 않음
import { onMounted, ref } from "vue";
import NavbarView from "./components/NavbarView.vue";
import MainView from "./components/MainView.vue";

import { useStore } from "vuex";

const store = useStore();

// 화면이 실행되면 때 자동 실행하는 함수
onMounted(() => {
  store.dispatch("getWeather");
});
</script>

<style lang="scss" scoped></style>
