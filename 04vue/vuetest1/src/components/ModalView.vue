<template>
   <div class="modal" v-if="isModal">
      <div class="inner">
         <h2 class="mb10">{{ data[num - 1].title }}</h2>
         <hr />
         <p class="mb10">
            {{ data[num - 1].detail }}
         </p>
         <!-- 자식에서 부모의 값을 변경하는 것은 좋지 않다. emit으로 신호만 전달 -->
         <!-- 컴포넌트 전 <button class="btn btn-primary" v-on:click="isModal = false">닫기</button> -->
         <button class="btn btn-primary" v-on:click="$emit('closeModal')">닫기</button>
      </div>
   </div>
</template>

<script>
export default {
   name: 'modalView',
   props: {
      data: Array,
      isModal: Boolean,
      num: Number,
   },
};
</script>

<style lang="scss" scoped>
.modal {
   //  width: 100%;
   //  height: 100%;
   position: fixed;
   background-color: rgba(0, 0, 0, 0.3);
   //  opacity: 0.3; 자식 요소에 영향을 준다. rgba를 사용하는 이유
   top: 0;
   left: 0;
   right: 0;
   bottom: 0;

   display: flex;
   justify-content: center;
   align-items: center;

   .inner {
      background: #fff;
      width: 500px;
      padding: 16px 16px;
      border-radius: 5px;
      @media screen and (max-width: 570px) {
         width: 90%;
      }
   }
}
</style>
