<template>
  <div class="page-home">
    <!-- 首页头部 begin -->
    <index-header></index-header>
    <!-- 首页头部 end -->
    <div class="index-main">
      <!-- 轮播图 begin -->
      <Swiper @change="onChange" class="my-swiper" v-if="bannerList.length > 0">
        <SwiperItem v-for="item in bannerList" :key="item.id">
          <img :src="item.imageurl" alt />
        </SwiperItem>
      </Swiper>
      <!-- 轮播图 end -->
      <indexNav />
      <index-recommend v-for = "item in recommendList" :key = "item.specialid" :info = "item"></index-recommend>
    </div>
  </div>
</template>

<script>
// 使用../的相对路径时，如果当前文件位置发生变化的时候，相对路径也需要修改。
// 如果使用 @ 别名的方式，就不需要去修改这个路径了
// import Swiper from '@/components/Swiper/Swiper.vue'
// import SwiperItem from '@/components/Swiper/SwiperItem.vue'
import { Swiper, SwiperItem } from '@/components/Swiper'
import indexNav from './components/indexNav'
import indexRecommend from './components/indexRecommend'
import indexHeader from './components/indexHeader'
import { getBanner, getIndexRecommend } from '@/api/cartoon'

export default {
  name: 'Home',
  components: {
    Swiper,
    SwiperItem,
    indexNav,
    indexRecommend,
    indexHeader
  },
  data () {
    return {
      // 需要一个数据，考虑哪些点？
      // 1. 数据放在哪里，data? props? computed? state? getter?
      // 2. 数据格式 string? object? number? array?
      bannerList: [],
      recommendList: []
    }
  },
  methods: {
    onChange (index) {
      // console.log('swiper', index)
    },
    getBanner () {
      getBanner()
        .then(res => {
          // 漫画岛项目的每个接口都有 code 字段
          // 这个字段如何是 200.这个接口才是ok的
          if (res.code === 200) {
            // ok
            this.bannerList = res.info
          } else {
            // 不ok，就报错
            // TODO，目前先使用丑陋的 alert，后面可以去用一下 vant 组件库中的组件。
            alert(res.code_msg)
          }
        })
        .catch(err => {
          alert('网络异常，请稍后', err)
        })
    },
    getIndexRecommend () {
      getIndexRecommend()
        .then(res => {
          if (res.code === 200) {
            this.recommendList = res.info
          } else {
            alert(res.code_msg)
          }
        })
        .catch(err => {
          alert('网络异常，请稍后', err)
        })
    }
  },
  created () {
    // 下载轮播图数据
    this.getBanner()

    // 下载首页推荐的数据
    this.getIndexRecommend()
  }
}
</script>

<style lang="scss" scoped>
.page-home {
  display: flex;
  flex-direction: column;
  height: 100%;
  .my-swiper img {
    width: 100%;
  }
  .index-main {
    flex: 1;
    overflow-y: auto;
  }
}
</style>
