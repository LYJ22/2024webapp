<template>
  <div class="container mt-5">
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime quaerat hic
    rerum ea iure neque doloribus? Corporis obcaecati totam laudantium?
    <h3>{{ $route }}</h3>
    {{ $route.params }} / {{ $route.name }}
    <p>{{ props.data[0] }}</p>
    <div class="btn btn-primary" @click="$router.push('/')">home</div>
    <div v-if="item">
      <h1>{{ item.title }}</h1>
    </div>
    <div v-else>해당 자료는 존재하지 않습니다.</div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useRoute, useRouter } from "vue-router";

const props = defineProps({
  data: Array,
});

const route = useRoute();
const router = useRouter();
const item = computed(() => {
  const id = parseInt(route.params.id);
  return props.data.find((item) => item.id == id);
});

console.log(route);
console.log(router);
</script>

<style lang="scss" scoped></style>
