<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6">
        <h3>User List</h3>
        <UserListView @editUser="editUser" />
      </div>
      <div class="col-md-6">
        <h3>User sign</h3>
        <UserSignView :editData="editData" @editdone="editdone" />
      </div>
    </div>

    <div class="row">
      <div class="col-md-6">
        <MapView />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useStore } from "vuex";
import MapView from "../components/user/MapView.vue";
import UserListView from "../components/user/UserListView.vue";
import UserSignView from "../components/user/UserSignView.vue";

const store = useStore();

// const editData = ref({
//   userid: null,
//   password: null,
//   username: null,
//   addr: null,
//   image: null,
// });
const editData = ref(false);

const editUser = () => {
  // editData.value.userid = store.state.userData[i].userid;
  // editData.value.password = store.state.userData[i].password;
  // editData.value.username = store.state.userData[i].username;
  // editData.value.addr = store.state.userData[i].addr;
  // editData.value.image = store.state.userData[i].image;
  editData.value = true;
};
const editdone = () => {
  editData.value = false;
};
</script>

<style lang="scss" scoped></style>
