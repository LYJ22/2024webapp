<template>
  <div
    v-if="editData >= 0"
    class="modal position-fixed w-100 h-100 top-0 left-0 right-0 bottom-0 d-flex justify-content-center align-items-center"
  >
    <div class="inner bg-white col-md-6 rounded">
      <h4 class="py-1 mb-3">유저정보 수정하기</h4>
      <div class="mb-3">
        <input
          type="text"
          id="edituserid"
          class="form-control"
          placeholder="userid"
          value=""
          v-model="editUserInfo.userid"
        />
      </div>
      <div class="mb-3">
        <input
          type="text"
          id="edituserpassword"
          class="form-control"
          placeholder="userpassword"
          value=""
          v-model="editUserInfo.password"
        />
      </div>
      <div class="mb-3">
        <input
          type="text"
          id="editusername"
          class="form-control"
          placeholder="username"
          value=""
          v-model="editUserInfo.username"
        />
      </div>
      <div class="mb-3">
        <input
          type="text"
          id="edituseraddr"
          class="form-control"
          placeholder="addr"
          value=""
          v-model="editUserInfo.useraddr"
        />
      </div>
      <div class="mb-3 d-flex gap-3">
        <input
          type="text"
          id="editlatitude"
          class="form-control"
          placeholder="latitude"
          v-model="editUserInfo.userlatitude"
        />
        <input
          type="text"
          id="editlongitude"
          class="form-control"
          placeholder="longitude"
          v-model="editUserInfo.userlongitude"
        />
      </div>
      <div class="input-group mb-4">
        <input
          type="file"
          class="form-control"
          id="editfileform"
          @change="handleImage"
          accept="image/*"
        />
        <label class="input-group-text" for="fileform">Upload</label>
      </div>

      <div class="my-2">
        <div
          class="btn btn-primary me-2"
          @click="[editUser(), $emit('editdone')]"
        >
          수정완료
        </div>
        <div class="btn btn-primary" @click="[clearform(), $emit('editdone')]">
          수정취소
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import { useStore } from "vuex";

const store = useStore();
const props = defineProps({
  editData: Number,
});

const editUserInfo = ref({
  userid: null,
  password: null,
  username: null,
  useraddr: null,
  userlatitude: null,
  userlongitude: null,
  image: null,
});

const clearform = () => {
  editUserInfo.value.userid = null;
  editUserInfo.value.password = null;
  editUserInfo.value.username = null;
  editUserInfo.value.useraddr = null;
  editUserInfo.value.userlatitude = null;
  editUserInfo.value.userlongitude = null;
  editUserInfo.value.image = null;
};

const handleImage = (e) => {
  const file = e.target.files[0];
  console.log(file);
  if (file) {
    editUserInfo.value.image = URL.createObjectURL(file);
  }
};

const editUser = () => {
  let uData = {
    userid: editUserInfo.value.userid,
    password: editUserInfo.value.password,
    username: editUserInfo.value.username,
    addr: editUserInfo.value.useraddr,
    latitude: editUserInfo.value.userlatitude,
    longitude: editUserInfo.value.userlongitude,
    image: editUserInfo.value.image,
    index: props.editData,
  };
  store.commit("editUser", uData);
  clearform();
};

watch(
  () => {
    return props.editData;
  },
  (newval) => {
    if (newval >= 0) {
      editUserInfo.value.userid = store.state.editData.userid;
      editUserInfo.value.password = store.state.editData.password;
      editUserInfo.value.username = store.state.editData.username;
      editUserInfo.value.useraddr = store.state.editData.addr;
      editUserInfo.value.userlatitude = store.state.editData.latitude;
      editUserInfo.value.userlongitude = store.state.editData.longitude;
      editUserInfo.value.image = store.state.editData.image;
    }
  }
);
</script>

<style lang="scss" scoped>
.modal {
  background-color: rgba(0, 0, 0, 0.3);
}
.inner {
  padding: 20px;
}
</style>
