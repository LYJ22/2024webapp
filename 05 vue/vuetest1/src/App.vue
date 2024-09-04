<template>
   <TitleView />
   <NavbarView />
   <SearchBarView :data="data_temp" @searchMoive="searchMovie" @showAllView="showAllView" />
   <!-- 좋아요 주석처리 @increaseL="increaseLike"  -->
   <ContainerView :data="data_temp" @openM="modalOpen" />
   <!-- @closeModal은 자식에서 발생한 이벤트, closeM 함수 트리거 -->
   <!-- @closeModal="isModal = false" 도 가능 -->
   <ModalView :data="data" :isModal="isModal" :num="selectedNum" @closeModal="closeM" />
</template>

<script>
import mdata from './assets/mdata'; // @/assets/...도 가능
import NavbarView from './components/NavbarView.vue';
import ModalView from './components/ModalView.vue';
import ContainerView from './components/ContainerView.vue';
import TitleView from './components/TitleView.vue';
import SearchBarView from './components/SearchBarView.vue';

export default {
   name: 'appView',
   data() {
      return {
         // ModalView의 bind되는 data 위치
         data: mdata,
         isModal: false,
         selectedNum: 0,
         data_temp: [...mdata],
      };
   },
   methods: {
      increaseLike(i) {
         //  console.log(i);
         this.data[i].like = this.data[i].like + 1;
      },
      modalOpen(num) {
         this.isModal = true;
         this.selectedNum = this.data_temp[num].id;
      },
      closeM() {
         this.isModal = false;
      },
      searchMovie(title) {
         console.log('영화이름은' + title);
         this.data_temp = this.data.filter(movie => {
            return movie.title.includes(title);
         });
      },
      showAllView() {
         this.data_temp = [...this.data];
      },
   },
   components: {
      NavbarView: NavbarView,
      ModalView: ModalView,
      ContainerView: ContainerView,
      TitleView: TitleView,
      SearchBarView: SearchBarView,
   },
};
</script>

<style lang="scss">
$radius: 5px;

.mb10 {
   margin-bottom: 10px !important;
}

.btn {
   background: pink;
   border-radius: $radius;
   padding: 5px 16px;
   text-align: center;
   cursor: pointer;
   color: white;
   border: none;
   display: block;
   width: 100%;

   &.btn-primary {
      background-color: skyblue;
   }
   &.btn-info {
      background-color: greenyellow;
   }
}
</style>
