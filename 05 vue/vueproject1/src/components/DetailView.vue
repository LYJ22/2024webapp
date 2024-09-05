<template>
  <div class="container mt-5">
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime quaerat hic
    rerum ea iure neque doloribus? Corporis obcaecati totam laudantium?
    <h3>{{ $route }}</h3>
    {{ $route.params }} / {{ $route.name }}
    <p>{{ props.data[0] }}</p>
    <div class="btn btn-primary" @click="$router.push('/')">home</div>
  </div>
</template>

<script setup>
const props = defineProps({
  data: Array,
});
</script>

<style lang="scss" scoped></style>
