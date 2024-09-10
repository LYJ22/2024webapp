<template>
   <div class="container">
      <!-- event.target.value 해당 태그에 데이터 가져옴 -->
      <!-- <input type="search" @input="inputText = $event.target.value" placeholder="검색어를 입력하세요"> -->

      <!-- <input type="search" v-model="inputText" placeholder="검색어를 입력하세요" /> -->
      <!-- change를 많이 사용한다. -->
      <!-- <input
         type="search"
         @change="
            $emit('searchMovie', $event.target.value);
            inputText = $event.target.value;
            $event.target.value = '';
         "
      /> -->
      <input type="search" @change="handelSearch" placeholder="검색어를 입력하세요" />
      <button>검색</button>
   </div>
   <div class="searchBtn">
      <button @click="$emit('showAllView')">전체보기</button>
   </div>
</template>

<script>
export default {
   name: 'searchComp   ',
   props: {
      data: Object,
   },
   data() {
      return {
         inputText: 'test',
      };
   },
   methods: {
      handelSearch(event) {
         this.$emit('searchMoive', event.target.value);
         this.inputText = event.target.value;
         event.target.value = '';
      },
   },
   watch: {
      //콘솔로 실시간 입력을 체크할 수 있다.
      inputText(name) {
         console.log('watch' + name);
         const findName = this.data.filter(movie => {
            return movie.title.includes(name);
         });
         console.log(findName.length);
         if (findName.length == 0) {
            alert('영화자료가 없습니다!!!');
         }
      },
   },
};
</script>

<style lang="scss" scoped></style>
