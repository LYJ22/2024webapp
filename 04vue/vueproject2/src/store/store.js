import { createStore } from "vuex";

export default createStore({
  state: {
    userData: [
      {
        userid: "lyj22",
        password: "123",
        username: "홍길동",
        addr: "서울",
        latitude: 37.4,
        longitude: 126.82,
        image: "https://picsum.photos/100",
      },
      {
        userid: "who",
        password: "123",
        username: "김유신",
        addr: "수원",
        latitude: 37.45,
        longitude: 126.88,
        image: "https://picsum.photos/100",
      },
      {
        userid: "asfd",
        password: "123",
        username: "이순신",
        addr: "파주",
        latitude: 37.42,
        longitude: 126.85,
        image: "https://picsum.photos/100",
      },
    ],
    editData: {
      userid: null,
      password: null,
      username: null,
      addr: null,
      latitude: null,
      longitude: null,
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
      state.editData.latitude = state.userData[payload].latitude;
      state.editData.longitude = state.userData[payload].longitude;
      state.editData.image = state.userData[payload].image;
    },
    editUser(state, payload) {
      state.userData[payload.index].userid = payload.userid;
      state.userData[payload.index].password = payload.password;
      state.userData[payload.index].username = payload.username;
      state.userData[payload.index].addr = payload.addr;
      state.userData[payload.index].latitude = payload.latitude;
      state.userData[payload.index].longitude = payload.longitude;
      state.userData[payload.index].image = payload.image;
    },
  },
});
