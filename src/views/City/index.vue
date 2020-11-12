<template>
  <div class="page-city">
    <normal-header :title="`城市：${curCityName}`" :rightShow="false"></normal-header>
    <div class="city-main">
      <div class="left" ref = 'scrollLeft'>
        <div class="city-index-section"
          :ref = "`section-${item.py}`"
          v-for="item in cityList"
          :key="item.py">
          <p>{{ item.py }}</p>
          <ul>
            <li v-for='city in item.list' :key = 'city.cityId' @click = "handleClick(city)">{{ city.name }}</li>
          </ul>
        </div>
      </div>
      <div class="right">
        <ul>
          <li v-for="item in indexs" :key="item" @click = "handleIndex(item)">{{ item }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import NormalHeader from '@/components/NormalHeader'
import { getCityList } from '@/api/city'
import { mapMutations, mapGetters } from 'vuex'

export default {
  name: 'City',
  data () {
    return {
      cities: []
    }
  },
  computed: {
    ...mapGetters('city', ['curCityName']),
    cityList () {
      // 最终结果的收集
      const result = []
      this.cities.forEach(item => {
        // 获取当前城市的首字母
        const py = item.pinyin.substr(0, 1).toUpperCase()

        // 判断 当前 py 是否已经在 result 中存在，如果存在这个 py 在 result 中的下标是多少呢？

        const index = result.findIndex(item => item.py === py)
        if (index > -1) {
          // 存在
          result[index].list.push(item)
        } else {
          // 不存在
          result.push({
            py,
            list: [item]
          })
        }
      })
      // 将生成的数组，按照字母大小排序
      result.sort((a, b) => a.py.charCodeAt() - b.py.charCodeAt())
      return result
    },
    indexs () {
      return this.cityList.map(item => item.py)
    }
  },
  components: {
    NormalHeader
  },
  methods: {
    ...mapMutations('city', ['SET_CURCITY']),
    /*
      思考什么样的数据格式会是我这个页面想要的
      [
        {
          py: "A",
          list: [
            {name: '阿拉善盟},
            {name: '鞍山}
          ]
        },
        {
          py: 'B',
          list: [
            {name: '北京},
            {name: '保定}
          ]
        }
      ]
    */
    getCityList () {
      getCityList()
        .then(res => {
          const data = res.data
          if (data.status === 0) {
            this.cities = data.data.cities
          } else {
            console.log(data.msg)
          }
        })
        .catch(err => {
          console.log(err)
          alert('网络异常，请稍后重试')
        })
    },
    handleIndex (py) {
      /*
        ref 标记时，如果是标记在 v-for 上，那么得到的是一个数组
        根据py获取左侧对应的元素的 DOM 对象
      */
      // console.log(py)
      // console.log(this.$refs['section-' + py][0])
      // 计算这个元素距离左侧顶部的距离
      const targetEl = this.$refs['section-' + py][0]
      // 修改左侧滚动元素的scrollTop值
      this.$refs.scrollLeft.scrollTop = targetEl.offsetTop
    },
    handleClick (city) {
      // 1. 改变仓库中的数据
      this.SET_CURCITY(city)
      // 2. 回到之前要去的页面
      const redirect = this.$route.query.redirect || '/'
      this.$router.replace(redirect)
    }
  },
  created () {
    this.getCityList()
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/mixins.scss";
.page-city {
  display: flex;
  flex-direction: column;
  height: 100%;
  .city-main {
    flex: 1;
    overflow: hidden;
    display: flex;
  }
  .left {
    flex: 1;
    overflow-y: auto;
    position: relative;
    .city-index-section {
      @include border-bottom;
      padding-left: 15px;
      p {
        @include border-bottom;
        height: 36px;
        line-height: 36px;
        font-size: 16px;
      }
      li {
        @include border-bottom;
        height: 30px;
        line-height: 30px;
        padding-left: 20px;
        font-size: 16px;
      }
    }
  }
  .right {
    width: 20px;
    height: 100%;
    display: flex;
    align-items: center;
    li {
      width: 20px;
      height: 20px;
      line-height: 20px;
      text-align: center;
      font-size: 14px;
    }
  }
}
</style>
