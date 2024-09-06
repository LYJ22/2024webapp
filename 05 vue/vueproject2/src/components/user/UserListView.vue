<template>
  {{ $store.state.userData }}
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
    </div>
    <div>
      <div
        class="btn btn-primary mx-3"
        @click="
          editUser(i);
          $emit('editUser');
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
// const editData = ref({
//   userid: null,
//   password: null,
//   username: null,
//   addr: null,
//   image: null,
// });

const deleteUser = (i) => {
  store.commit("deleteUser", i);
};

const editUser = function (i) {
  // editData.value.userid = store.state.userData[i].userid;
  // editData.value.password = store.state.userData[i].password;
  // editData.value.username = store.state.userData[i].username;
  // editData.value.addr = store.state.userData[i].addr;
  // editData.value.image = store.state.userData[i].image;
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
