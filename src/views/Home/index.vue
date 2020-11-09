<template>
  <div class="page-home">
    <!-- 首页头部 begin -->
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
    <br>
    <!-- 首页头部 end -->
    <!-- 轮播图 begin -->
    <Swiper  @change = 'onChange' class = 'my-swiper'>
      <SwiperItem>
        <img
          src="https://img.manhuadao.cn/upload/AdGroup201906/9315f7dd68b346928219f29bd9c89e60.jpg"
          alt
        />
      </SwiperItem>
      <SwiperItem>
        <img
          src="https://img.manhuadao.cn/upload/AdGroup201903/22b43c03a0f943cda001c5338fe0ddd9.jpg"
          alt
        />
      </SwiperItem>
      <SwiperItem>
        <img
          src="https://img.manhuadao.cn/upload/AdGroup202003/dda50e4233e34186910fd490aea1cd91.jpg"
          alt
        />
      </SwiperItem>
    </Swiper>
    <!-- 轮播图 end -->
  </div>
</template>

<script>
// 使用../的相对路径时，如果当前文件位置发生变化的时候，相对路径也需要修改。
// 如果使用 @ 别名的方式，就不需要去修改这个路径了
// import Swiper from '@/components/Swiper/Swiper.vue'
// import SwiperItem from '@/components/Swiper/SwiperItem.vue'
import { Swiper, SwiperItem } from '@/components/Swiper'

export default {
  name: 'Home',
  components: {
    Swiper,
    SwiperItem
  },
  methods: {
    onChange (index) {
      console.log('swiper', index)
    }
  }
}
</script>

<style lang="scss" scoped>
// 引入共用的mixins.scss
@import '~@/assets/styles/mixins.scss';
.page-home {
  display: flex;
  flex-direction: column;
  height: 100%;
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
  .my-swiper img {
    width: 100%;
  }
}
</style>
