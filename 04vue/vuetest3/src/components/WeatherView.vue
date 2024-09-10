<template>
  <div class="weather-info flex">
    <div class="icon lg:w-1/2 flex justify-center items-center">
      <img
        :src="`https://openweathermap.org/img/wn/${props.data.icon}@4x.png`"
        alt=""
      />
    </div>
    <div
      class="words lg:w-1/2 relative flex flex-wrap flex-col-reverse justify-center"
    >
      <div class="temp">
        tempurature: {{ (props.data.temp - 273.15).toFixed(2) }}&deg
      </div>
      <div class="text my-2">description: {{ props.data.text }}</div>
      <div class="location absolute font-bold">
        {{ props.data.location }} / {{ props.data.city }}
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  data: Array,
});
</script>

<style lang="scss" scoped>
.weather-info {
  background-color: pink;
  padding: 16px 32px;

  .icon {
    background-color: skyblue;
    height: 350px;
    width: 350px;
  }

  .words {
    height: 350px;
    width: 350px;
    margin: 0 16px;
    padding: 2em;
    background-color: white;

    .temp {
      font-size: 30px;
    }
    .text {
      font-size: 30px;
    }
    .location {
      top: 1em;
      font-size: 40px;
    }
  }
}
</style>
