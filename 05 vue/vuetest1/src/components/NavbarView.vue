<template>
   <div class="conWrap mb10">
      <div class="container menu">
         <!-- a.on:after 때문에 밑줄 있음 -->
         <a href="#" class="on">영화</a>
         <a href="#">방송</a>
         <a href="#">랭킹</a>
         <a href="#">무료</a>
         <a href="#">이벤트</a>
         <a href="#">멤버십</a>
      </div>

      <div class="container search">
         <a href="#">MY</a>
         <span>|</span>
         <a href="#">카테고리</a>
         <input type="text" placeholder="작품,배우,감독명을 입력하세요." />
      </div>
   </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.conWrap {
   width: 1050px;
   margin: 0 auto;

   @media screen and (max-width: 790px) {
      width: 100%;
      padding: 0 16px;
   }
   //    background-color: skyblue;
   border-bottom: 1px solid #ddd;
   padding: 0px 32px;
   display: flex;
   justify-content: space-between;

   .menu {
      display: flex;
      a {
         display: block;
         margin-right: 5px;
         font-weight: bold;
         position: relative;
         padding: 16px 0;
         padding-right: 40px;
      }
      @media screen and (max-width: 560px) {
         a {
            padding-right: 15px;
         }
      }

      a.on:after,
      a:hover:after {
         content: '';
         //  display: block;
         position: absolute;
         width: 50px;
         height: 5px;
         bottom: -3px;
         left: 0;
         background-color: rgb(45, 73, 3);
      }
   }
   .search {
      display: flex;
      align-items: center;
      font-size: 13px;
      a {
         display: block;
         margin: 0 10px;
         padding: 16px 0;
      }
      input {
         width: 250px;
         height: 30px;
         margin-left: 5px;
         font-size: 13px;
      }
   }
}
</style>
