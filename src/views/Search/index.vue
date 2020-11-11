<template>
  <div class="page-search">
    <header class="search-header">
      <div class="header-back" @click = 'goback'></div>
      <div class="header-search">
        <span class="icon-search"></span>
        <input class="search-input font-24" type="search" placeholder="漫画名丨作者 ^_^" v-model = 'searchVal'/>
      </div>
      <div class="header-btn font-30" @click = "handleClick(searchVal)">搜索</div>
    </header>

    <div class="search-main">
      <!-- 热门搜索 begin -->
      <template v-if = "!searchVal">
        <section class="search-recommend">
          <div class="title font-26">
            <span class="title-title">大家都在搜</span>
            <span class="title-btn" @click = "getHotSearch">
              <span class="icon-refresh"></span>刷新
            </span>
          </div>

          <div class="recommend-content font-28">
            <span
              class="recommend-item"
              v-for = "item in hotWordsList"
              :key = "item.id"
              @click = "handleClick(item.keyword)"
              >{{ item.keyword }}</span>
          </div>
        </section>
        <!-- 热门搜索 end -->

        <!-- 最近搜索 begin -->
        <section class="search-history" v-show = "historySearchList.length > 0">
          <div class="title font-26">
            <span class="title-title">最近搜索</span>
            <span class="title-btn" @click = 'delelteHistory'>
              <span class="icon-del"></span>
            </span>
          </div>
          <div class="history-content font-28">
            <span class="history-item" v-for = "item in historySearchList" :key = "item" @click = "handleClick(item)">
              <span class="icon-time"></span>
              {{item}}
            </span>
          </div>
        </section>
      <!-- 最近搜索 end -->
      </template>

      <!-- 搜索结果面板 begin -->
      <template v-else>
        <section class="search-content">
          <p class="item font-28" v-for = "item in searchIndexList" :key = 'item' @click = "handleClick(item)">{{ item }}</p>
        </section>
      </template>
      <!-- 搜索结果面板 end -->
    </div>
  </div>
</template>

<script>
import { getHotSearch, searchIndex } from '@/api/cartoon'
export default {
  name: 'Search',
  data () {
    return {
      searchVal: '',
      // 热门搜索关键字列表
      hotWordsList: [],
      // 历史搜索记录列表
      historySearchList: this.getSearch(),
      // 搜索面板的数据
      searchIndexList: []
    }
  },
  methods: {
    goback () {
      this.$router.back()
    },
    getHotSearch () {
      getHotSearch().then(res => {
        if (res.code === 200) {
          this.hotWordsList = res.info.hotWordsList
        } else {
          console.log(res.code_msg)
        }
      }).catch(err => {
        console.log(err)
        alert('网路异常，请稍后重试')
      })
    },
    searchIndex (name) {
      searchIndex(name)
        .then(res => {
          if (res.code === 200) {
            this.searchIndexList = res.info
          } else {
            alert(res.code_msg)
          }
        })
        .catch(err => {
          console.log(err)
          alert('网络异常，请稍后重试')
        })
    },
    /**
     * 保存最近搜索
    */
    saveSearch (keyword) {
      // 1. 取出之前存储的内容
      const tmp = window.localStorage.getItem('search') ? JSON.parse(window.localStorage.getItem('search')) : []

      // 判断 keyword 是否已经在 tmp 中存在
      if (tmp.includes(keyword)) {
        return
      }
      // 2. 将 keyword 追加到 数组中
      tmp.push(keyword)
      // 3. 再将 tmp 存储回去
      window.localStorage.setItem('search', JSON.stringify(tmp))
    },
    /**
     * 取出最近搜索
    */
    getSearch () {
      const tmp = window.localStorage.getItem('search')
      if (!tmp) {
        return []
      } else {
        return JSON.parse(tmp)
      }
    },
    handleClick (keyword) {
      // 1. 保存
      this.saveSearch(keyword)
      // 2. 跳转到搜索结果页面
      this.$router.push('/search-result')
    },
    delelteHistory () {
      this.historySearchList = []
      window.localStorage.removeItem('search')
    }
  },
  watch: {
    searchVal (newVal, oldVaL) {
      /*
        思考 只要searchVal 发生变化，就发生ajax请求
        那么会有一个问题 先输入z，再输入zh
        但是最后在页面上显示的是 z 的结果
      */
      if (newVal) {
        // 清除计时器
        clearInterval(this.timer)
        this.timer = setTimeout(() => {
          this.searchIndex(newVal)
        }, 500)
      }
    }
  },
  created () {
    this.getHotSearch()
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/styles/mixins.scss";

.page-search {
  display: flex;
  flex-direction: column;
  height: 100%;

  .search-header {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 44px;
    background: #e7370c;
    position: relative;
    border-bottom: 1px solid #dbd9dc;
    .header-back {
      position: absolute;
      top: 50%;
      left: 12px;
      margin-top: -7px;
      width: 24px;
      height: 14px;
      background: url("~@/assets/icon/header-back-white.png") no-repeat;
      background-size: 100%;
    }
    .header-btn {
      color: #fff;
      font-weight: 500;
      position: absolute;
      top: 50%;
      right: 12px;
      transform: translateY(-50%);
    }
    .header-search {
      display: flex;
      align-items: center;
      width: 70%;
      border-radius: 3px;
      position: relative;
      .icon-search {
        width: 14px;
        height: 14px;
        background: url("~@/assets/icon/icon-search.png") no-repeat;
        background-size: 100%;
        position: absolute;
        top: 50%;
        left: 10px;
        transform: translateY(-50%);
      }
      .search-input {
        box-sizing: border-box;
        display: flex;
        align-items: center;
        width: 100%;
        height: 30px;
        padding-right: 10px;
        padding-left: 30px;
        border-radius: 3px;
        outline: none;
        border: none;
      }
    }
  }

  .search-main {
    flex: 1;
    overflow-y: auto;
  }

  .search-recommend,
  .search-history {
    box-sizing: border-box;
    padding: 15px 0;
    .title {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 10px 10px;
      border-bottom: 1px solid #e9e9e9;
      .title-title {
        color: #8b8b8b;
      }
      .title-btn {
        display: flex;
        align-items: center;
        color: #8b8b8b;
        .icon-refresh {
          width: 13px;
          height: 12px;
          margin-right: 4px;
          background: url("~@/assets/icon/icon-refresh.png") no-repeat;
          background-size: 100%;
        }
        .icon-del {
          width: 13px;
          height: 14px;
          background: url("~@/assets/icon/icon-del.png") no-repeat;
          background-size: 100%;
        }
      }
    }
    .recommend-content {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      padding: 0 10px;
      margin-top: 15px;
      .recommend-item {
        @include border(#ddd, 20px);
        display: flex;
        box-sizing: border-box;
        justify-content: center;
        align-items: center;
        height: 32px;
        padding: 0 10px;
        margin-right: 10px;
        margin-bottom: 10px;
        font-weight: 500;
      }
    }
    .history-content {
      padding: 0 10px;
      .history-item {
        box-sizing: border-box;
        display: flex;
        align-items: center;
        width: 100%;
        height: 40px;
        border-bottom: 1px solid #e9e9e9;
        .icon-time {
          width: 13px;
          height: 13px;
          margin-right: 6px;
          background: url("~@/assets/icon/icon-time.png") no-repeat;
          background-size: 100%;
        }
      }
    }
  }

  .search-content {
    box-sizing: border-box;
    margin: 0 auto;
    padding: 0 10px;
    .item {
      box-sizing: border-box;
      display: flex;
      align-items: center;
      height: 40px;
      padding-left: 10px;
      font-weight: 600;
      border-bottom: 1px solid #ddd;
    }
  }
}
</style>
