<template>
  <div>
    <div class="mb-3">
      <input
        type="text"
        id="userid"
        class="form-control"
        placeholder="userid"
        v-model="userData.userid"
      />
    </div>
    <div class="mb-3">
      <input
        type="text"
        id="userpassword"
        class="form-control"
        placeholder="userpassword"
        v-model="userData.password"
      />
    </div>
    <div class="mb-3">
      <input
        type="text"
        id="username"
        class="form-control"
        placeholder="username"
        v-model="userData.username"
      />
    </div>
    <div class="mb-3">
      <input
        type="text"
        id="addr"
        class="form-control"
        placeholder="addr"
        v-model="userData.addr"
      />
    </div>
    <div class="input-group mb-3">
      <input
        type="file"
        class="form-control"
        id="fileform"
        @change="handleImage"
        accept="image/*"
      />
      <label class="input-group-text" for="fileform">Upload</label>
    </div>

    <div v-if="editData === true">
      <div class="btn btn-primary me-2">수정완료</div>
      <div
        class="btn btn-primary"
        @click="
          editEnd();
          $emit('editdone');
        "
      >
        수정취소
      </div>
    </div>
    <div v-else class="btn btn-primary me-2" @click="addUser">회원가입</div>
    {{ userData }}
    {{ editData }}
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import { useStore } from "vuex";

const store = useStore();
const props = defineProps({
  editData: Boolean,
});
// watch(
//   () => {
//     return editData;
//   },
//   () => {
//     fillForm();
//   }
// );

const userData = ref({
  userid: null,
  password: null,
  username: null,
  addr: null,
  image: null,
});

// const fillForm = () => {
//   document.getElementById("userid").value(store.state.editData.userid);
//   document.getElementById("userpassword").value(store.state.editData.password);
//   document.getElementById("username").value(store.state.editData.username);
//   document.getElementById("addr").value(store.state.editData.addr);
//   document.getElementById("fileform").value(store.state.editData.image);
// };

const clearform = () => {
  userData.value.userid = null;
  userData.value.password = null;
  userData.value.username = null;
  userData.value.addr = null;
  userData.value.image = null;
};

const addUser = () => {
  let uData = {
    userid: userData.value.userid,
    password: userData.value.password,
    username: userData.value.username,
    addr: userData.value.addr,
    image: userData.value.image,
  };
  store.commit("addUser", uData);
  clearform();
};

const handleImage = (e) => {
  const file = e.target.files[0];
  console.log(file);
  if (file) {
    userData.value.image = URL.createObjectURL(file);
  }
};

const editEnd = () => {
  alert("수정이 취소 됐습니다.");
};
</script>

<style lang="scss" scoped></style>
