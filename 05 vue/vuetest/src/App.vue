<template>
   <!-- html 문서가 들어가는 부분-->
   <div class="container secWrap">
      <img src="./assets/images/handsome.jpg" alt="" />
      <div class="card">
         <h3>{{ title }}</h3>
         <p>⭐{{ num }}</p>
         <p>대여 {{ won }}원</p>
      </div>

      <ul>
         <!-- v-for="item in array" -->
         <!-- foreach문 처럼 파라미터가 item, index 순서다. -->
         <li v-for="(item, index) in todos" v-bind:key="index">{{ item }}</li>
      </ul>

      <!-- div여도 ul li여도 상관x
      <div v-for="(item,index) in todos" v-bind:key="index">{{ item }}</div> -->
   </div>
</template>

<script>
// html에서 export를 하기 위해선 type이 module이여야 한다.
// 반면 vue는 아래처럼 쓸 수 있다.
// 단독 export면 default 작성, 여러개인 경우 export {}
export default {
   name: 'App',
   data() {
      return {
         title: '핸섬가이즈',
         num: '8.6',
         won: '11,000',
         todos: ['서울', '부산', '대구'],
      };
   },
};
</script>

<!-- css, 여기서 화면에 뿌려준다? -->
<!-- scss를 sass형태로 바꿔서 사용한다?? -->
<style lang="scss" scoped>
//@는 src를 가르킨다.
@import './assets/css/style.scss';
.secWrap {
   padding: 5px 16px;
}
</style>
