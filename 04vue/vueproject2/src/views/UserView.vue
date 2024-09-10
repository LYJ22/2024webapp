<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6">
        <h3>User List</h3>
        <UserListView @editUser="editUser" />
      </div>
      <div class="col-md-6">
        <h3>User sign</h3>
        <UserSignView />
      </div>
    </div>

    <div class="row">
      <div class="col-md-6">
        <MapView />
      </div>
    </div>

    <ModalView :editData="editData" @editdone="editdone" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useStore } from "vuex";
import MapView from "../components/user/MapView.vue";
import UserListView from "../components/user/UserListView.vue";
import UserSignView from "../components/user/UserSignView.vue";
import ModalView from "../components/user/ModalView.vue";

const store = useStore();

const editData = ref(-1);

const editUser = (i) => {
  editData.value = i;
};
const editdone = () => {
  editData.value = -1;
};
</script>

<style lang="scss" scoped></style>
