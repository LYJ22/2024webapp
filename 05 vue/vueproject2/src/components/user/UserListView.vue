<template>
  <div
    v-for="(item, i) in $store.state.userData"
    v-bind:key="i"
    class="d-flex justify-content-between align-items-center border rounded mb-3 p-3"
  >
    <div class="d-flex gap-2">
      <div class="avata">
        <img :src="item.image" alt="" />
      </div>
      <div>
        <h5 class="mb-0">{{ item.userid }}</h5>
        <p class="mb-0">{{ item.username }}</p>
      </div>
      <div>
        <p class="mb-0">경도: {{ item.latitude }}</p>
        <p class="mb-0">위도: {{ item.longitude }}</p>
      </div>
    </div>
    <div class="d-flex flex-column gap-2">
      <div
        class="btn btn-primary"
        @click="
          editUser(i);
          $emit('editUser', i);
        "
      >
        수정
      </div>
      <!-- <div class="btn btn-primary mx-3" @click="$emit('editUser', i)">수정</div> -->
      <div class="btn btn-primary" @click="deleteUser(i)">삭제</div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useStore } from "vuex";

const store = useStore();

const deleteUser = (i) => {
  store.commit("deleteUser", i);
};

const editUser = function (i) {
  store.commit("addEditUser", i);
};
</script>

<style lang="scss" scoped>
.avata {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
}
</style>
