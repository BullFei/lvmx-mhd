<template>
  <div class="swiper-container" ref="swiper">
      <div class="swiper-wrapper">
        <slot/>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination swiper-pagination-bullets"></div>
    </div>
</template>

<script>
// 引入 Swiper 核心与 swiper 样式
import Swiper from 'swiper/swiper-bundle.min.js'
import 'swiper/swiper-bundle.css'

export default {
  name: 'Swiper',
  props: {
    autoplay: {
      type: Number,
      default: 0
    },
    loop: {
      type: Boolean,
      default: true
    }
  },
  mounted () {
    var that = this
    /* eslint-disable */
    var mySwiper = new Swiper(this.$refs.swiper, {
      loop: this.loop, // 循环模式选项
      autoplay: this.autoplay ? {
        delay: this.autoplay,
        stopOnLastSlide: false,
        disableOnInteraction: true
      } : false,
      pagination: {
        el: ".swiper-pagination"
      },
      on: {
        //这里不要使用箭头函数，否则里面的this指向的是当前的组件实例，而不是想要的swiper实例
        slideChangeTransitionEnd: function(){
          console.log(this.realIndex);
          // 触发一个自定义事件
          that.$emit('change', this.realIndex);
        }
      }
    });
    /* eslint-enable */
  }
}
</script>

<style lang='scss' scoped>
// 设置轮播图样式  修改第三方样式的时候，发现修改不了，原因是scoped引起的
  .swiper-container {
    width: 100%;
    height: 180px;
  }
</style>
<style lang='scss'>
.swiper-pagination-bullet {
    opacity: 1;
    vertical-align: middle;
    width: 6px;
    height: 6px;
    margin: 0 5px;
    border-radius: 50%;
    background-color: hsla(0, 0%, 100%, 0.7);
  }
  .swiper-pagination-bullet-active {
    width: 20px;
    height: 10px;
    background: url("../../assets/icon/dot.png") no-repeat;
    background-size: 100%;
  }
</style>
