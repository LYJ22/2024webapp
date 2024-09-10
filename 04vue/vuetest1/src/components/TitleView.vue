<template>
   <div class="title">
      <div class="iconWrap">
         <a href="#!" class="naverIcon">NAVER</a>
         <a href="#!" class="seriesonIcon">시리즈온</a>
      </div>
      <div class="titleRight">
         <div class="series">
            <a href="#!">웹소설.만화 <span>></span></a>
         </div>
         <div class="loginBtn">
            <button class="login">로그인</button>
         </div>
      </div>
   </div>
</template>

<script>
export default {
   title: 'titleView',
};
</script>

<style lang="scss" scoped>
.title {
   display: flex;
   justify-content: space-between;
   border-bottom: 1px solid #ddd;
   padding: 0 32px 16px;
   width: 1050px;
   margin: 0 auto;

   @media screen and (max-width: 790px) {
      width: 100%;
      padding: 0 16px;
   }

   .iconWrap {
      position: relative;
      top: 5px;
      margin: 8px 0;

      a {
         vertical-align: middle;
         font-weight: 900;
         margin-right: 10px;
         color: rgba(0, 0, 0, 0.8);

         &.seriesonIcon {
            font-size: 23px;
         }
      }
   }
   .titleRight {
      position: relative;
      top: 5px;
      margin: 8px 0;
      display: flex;

      .series {
         margin-right: 10px;

         a {
            font-size: 13px;
            font-weight: 500;
         }
      }
      .loginBtn {
         position: relative;
         top: 5px;

         .login {
            font-size: 12px;
            background-color: white;
            padding: 1px 5px;
            text-align: center;
            border: 1px solid #ccc;
            cursor: pointer;
            display: block;
            width: 100%;
         }
      }
   }
}
</style>
