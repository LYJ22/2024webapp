import { createStore } from "vuex";

export default createStore({
  state: {
    userData: [
      {
        userid: "lyj22",
        password: "123",
        username: "홍길동",
        addr: "서울",
        image: "https://picsum.photos/100",
      },
      {
        userid: "who",
        password: "123",
        username: "김유신",
        addr: "수원",
        image: "https://picsum.photos/100",
      },
      {
        userid: "asfd",
        password: "123",
        username: "이순신",
        addr: "파주",
        image: "https://picsum.photos/100",
      },
    ],
    editData: {
      userid: null,
      password: null,
      username: null,
      addr: null,
      image: null,
    },
  },
  mutations: {
    addUser(state, payload) {
      state.userData.push(payload);
    },
    deleteUser(state, payload) {
      state.userData = state.userData.filter((data, index) => {
        return index != payload;
      });
    },
    addEditUser(state, payload) {
      state.editData.userid = state.userData[payload].userid;
      state.editData.password = state.userData[payload].password;
      state.editData.username = state.userData[payload].username;
      state.editData.addr = state.userData[payload].addr;
      state.editData.image = state.userData[payload].image;
    },
  },
});
