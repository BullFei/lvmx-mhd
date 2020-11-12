<template>
  <div class="page-search-result">
    <normarl-header :title = "$route.query.name" :rightShow = "false"></normarl-header>
    <div class="search-result-main">
      <section class="cartoon-list search-result-list">
        <div class="list-item" v-for = "item in cartoonlist" :key = "item.id">
          <div
            class="item-pic"
            :style='`background-image: url("${item.coverurl}");`'
          ></div>
          <div class="item-info">
            <div class="info-book font-30">{{ item.name }}</div>
            <div class="info-author font-26">作者：{{ item.author }}</div>
            <div class="info-fans font-26">更新：{{ item.lastpartname }}</div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import NormarlHeader from '@/components/NormalHeader'
import { searchSearchResult } from '@/api/cartoon'
export default {
  name: 'SearchResult',
  data () {
    return {
      cartoonlist: []
    }
  },
  components: {
    NormarlHeader
  },
  methods: {
    searchSearchResult () {
      searchSearchResult(this.$route.query.name)
        .then(res => {
          if (res.code === 200) {
            this.cartoonlist = res.info
          } else {
            console.log(res.code_msg)
          }
        })
    }
  },
  created () {
    this.searchSearchResult()
  }
}
</script>

<style lang="scss" scoped>
.page-search-result {
  display: flex;
  flex-direction: column;
  height: 100%;

  .search-result-main {
    flex: 1;
    overflow-y: auto;
    .cartoon-list {
      .list-item {
        box-sizing: border-box;
        display: flex;
        align-items: center;
        height: 124px;
        padding-left: 10px;
        border-bottom: 1px solid #dbd9dc;
        position: relative;
        .item-pic {
          flex-shrink: 0;
          width: 80px;
          height: 106px;
          border-radius: 3px;
          background-repeat: no-repeat;
          background-size: cover;
          background-position: top;
        }
        .item-info {
          flex: 1;
          margin-left: 10px;
          color: #999;
          overflow: hidden;
          .info-book,
          .info-author,
          .info-fans {
            font-weight: 500;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
          }
          .info-book {
            color: #333;
          }
          .info-book,
          .info-author {
            margin-bottom: 10px;
          }
        }
      }
    }
  }
}
</style>
