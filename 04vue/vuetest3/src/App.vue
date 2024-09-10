<template>
  <div>
    <NavbarView />
    <SearchbarView @searchCity="searchCity" />
    <WeatherView :data="weatherData" />
  </div>
</template>

<script setup>
//node_modules에서 가져오는 것은 경로로 표현되지 않음
import { onMounted, ref } from "vue";
import NavbarView from "./components/NavbarView.vue";
import SearchbarView from "./components/SearchbarView.vue";
import WeatherView from "./components/WeatherView.vue";
import axios from "axios";

// initial data
const weatherData = ref({
  icon: "icon",
  temp: 0,
  text: "text",
  location: "location",
  city: "seoul",
});

//async await로 대기 상태에 있다가 데이터를 가지고 온다.
//async 데이터가 없으면 성공 데이터만 가져온다. 그래서 try catch사용
// const getWeather = async () => {...} 도 가능.
async function getWeather() {
  // try {
  //   //axios 설치 필요 npm i axios. await없이 실행하면 Promise{pending} 상태로 출력된다.
  //   // pending: 대기 중(로딩), fullfill: 완료, reject: 실패
  //   //중간에 들어가는 데이터 때문에 ` 를 사용한다. ' 또는 " 안된다.
  //   const res = await axios.get(
  //     `https://api.openweathermap.org/data/2.5/weather?q=${weatherData.value.city}&appid=4eedfeb184dc7cb08af6c0bd529c48b9`
  //   );
  //   console.log(res.data); //데이터 들어오는 지 확인
  // } catch (error) {
  //   console.log(error);
  // }
  //}
  //  const getWeather = async () => {

  const res = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${weatherData.value.city}&appid=4eedfeb184dc7cb08af6c0bd529c48b9`
  );
  console.log(res.data); //데이터 들어오는 지 확인

  weatherData.value.icon = res.data.weather[0].icon;
  weatherData.value.temp = res.data.main.temp;
  weatherData.value.text = res.data.weather[0].description;
  weatherData.value.location = res.data.sys.country;
}

// 화면이 실행되면 때 자동 실행하는 함수
onMounted(() => {
  getWeather();
});

const searchCity = (city) => {
  console.log(city);
  weatherData.value.city = city;
  getWeather();
};
</script>

<style lang="scss" scoped></style>
