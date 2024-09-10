<template>
   <div class="container">
      <h2 class="mb10">HOT & NEW</h2>
      <p class="more">더보기</p>
      <div class="cardWrap">
         <div class="card" v-for="(item, i) in data" v-bind:key="i">
            <div class="imgWrap">
               <img :src="`./images/${item.img}`" :alt="`${item.img}`" />
               <div class="hot" v-if="item.hoticon">HOT</div>
            </div>
            <div class="cardBody">
               <h4>{{ item.title }}</h4>
               <p>❤️{{ item.num }}</p>
               <p>대여 {{ item.won }}</p>
               <!-- @:click == v-on:click -->
               <!-- 컴포넌트 전 <p>👍{{ item.like }} <button @:click="increaseLike(i)">클릭</button></p> -->
               <!-- emit처리 <p>👍{{ item.like }} <button @:click="$emit('increaseL', i)">클릭</button></p> -->
            </div>
            <!-- <div class="btn btn-primary" v-on:click="modalOpen(i)">상세보기</div> -->
            <div class="btn btn-primary" v-on:click="$emit('openM', i)">상세보기</div>
         </div>
      </div>
   </div>
</template>

<script>
export default {
   title: 'containerView',
   props: {
      data: Array,
   },
};
</script>

<style lang="scss" scoped>
.container {
   width: 1000px;
   position: relative;
   margin: 0 auto;
   @media screen and (max-width: 790px) {
      width: 100%;
      padding: 0 16px;
   }

   .more {
      position: absolute;
      top: 10px;
      right: 0;
   }

   img {
      display: block;
   }
}

.cardWrap {
   display: flex;
   flex-wrap: wrap;
   gap: 10px;
   .card {
      width: calc((100% - 30px) / 4);
      @media screen and (max-width: 790px) {
         width: calc((100% - 10px) / 2);
      }
      @media screen and (max-width: 560px) {
         width: 100%;
      }
      .imgWrap {
         width: 100%;
         position: relative;
         overflow: hidden;
         cursor: pointer;
         border-radius: 5px;

         img {
            width: 100%;
            transition: 0.3s;
         }

         &:hover img {
            transform: scale(1.1);
         }

         .hot {
            position: absolute;
            top: 10px;
            left: 10px;
            background-color: skyblue;
            padding: 2px 10px;
            border-radius: 5px;
            font-weight: bold;
            color: white;
         }
      }
   }
}
</style>
