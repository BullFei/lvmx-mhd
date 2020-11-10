<template>
  <header class="index-header">
    <a href="">
      <div class="header-user">
        <div class="user-btn"></div>
      </div>
    </a>
    <div class="header-logo"></div>
    <a href="">
      <div class="header-search"></div>
    </a>
  </header>
</template>

<script>
export default {
  name: 'indexHeader'
}
</script>

<style lang="scss" scoped>
// 引入共用的mixins.scss
@import "~@/assets/styles/mixins.scss";
.index-header {
  position: relative;
  display: flex;
  height: 44px;
  // 三者等分平铺
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  box-sizing: border-box;
  // border-bottom: 1px solid #e9e9e9;
  // &::after{
  //   content: '';
  //   position: absolute;
  //   width: 100%;
  //   left: 0px;
  //   bottom: 0px;
  //   height: 1px;
  //   background: #e9e9e9;
  //   transform: scaleY(0.5);
  // }
  @include border-bottom;
  .user-btn {
    width: 25px;
    height: 25px;
    background: url(~@/assets/icon/user-btn.png) no-repeat;
    background-size: 100%;
  }
  .header-logo {
    width: 92px;
    height: 28px;
    background: url(~@/assets/logo.png) no-repeat;
    background-size: 100%;
  }
  .header-search {
    width: 25px;
    height: 25px;
    background: url(~@/assets/icon/header-search.png) no-repeat;
    background-size: 100%;
  }
}
</style>
