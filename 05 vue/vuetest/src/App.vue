<template>
   <!-- html 문서가 들어가는 부분-->
   <div class="container secWrap">
      <h3>HOT & NEW</h3>
      <div class="cardWrap">
         <div class="card" v-for="(item, i) in data" v-bind:key="i">
            <!-- 속성에 넣을 때는 bind를 사용해야 한다. -->
            <div class="imgWrap">
               <img v-bind:src="`./images/${item.img}`" alt="" />
            </div>
            <div class="cardText">
               <h3>{{ item.title }}</h3>
               <p>⭐{{ item.num }}</p>
               <p>대여 {{ item.won }}원</p>
            </div>
         </div>
      </div>

      <!-- v-for="item in array" -->
      <!-- foreach문 처럼 파라미터가 item, index 순서다. -->
      <!-- <ul>
         <li v-for="(item, index) in todos" v-bind:key="index">{{ item }}</li>
      </ul> -->

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
         data: [
            { title: '핸섬가이즈', num: '8.6', won: '11,000', img: 'handsome.jpg' },
            { title: '탈주', num: '8.1', won: '11,000', img: 'movie.jpg' },
            { title: '하이재킹', num: '8.7', won: '19,000', img: 'plane.jpg' },
         ],
      };
   },
};
</script>

<!-- css, 여기서 화면에 뿌려준다? -->
<!-- scss형태로 바꿔서 사용한다?? -->
<style lang="scss" scoped>
//@는 src를 가르킨다.
@import './assets/css/style.scss';
.secWrap {
   padding: 5px 16px;
}
//sass 네스팅 문법
.cardWrap {
   display: flex;
   gap: 10px;
   .card {
      width: 212px;

      .imgWrap {
         width: 100%;
         overflow: hidden;
         border-radius: 5px;

         img {
            width: 100%;
            display: block;
            transition: 0.3s;
         }
         &:hover img {
            transform: scale(1.05);
         }
      }
      .cardText {
         padding: 5px;
      }
   }
}
</style>
