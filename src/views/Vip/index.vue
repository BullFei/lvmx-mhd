<template>
  <div class="page-vip">
    <normarl-header title = 'vip'></normarl-header>
    <div class="vip-main">
      <cartoon-list :list = "list"></cartoon-list>
    </div>
  </div>
</template>

<script>
import NormarlHeader from '@/components/NormalHeader'
import CartoonList from '@/components/CartoonList'
import { getVipList } from '@/api/cartoon'
import { unformat } from '@/utils/apiHeader.js'
export default {
  name: 'Vip',
  components: {
    NormarlHeader,
    CartoonList
  },
  data () {
    return {
      VIPList: []
    }
  },
  // 在这里进行格式化的操作
  computed: {
    list () {
      return this.VIPList.map(item => {
        return {
          id: item.bookstore_id,
          coverurl: item.coverurl,
          name: item.bigbook_name,
          author: item.bigbook_author,
          view: item.bigbookview
        }
      })
    }
  },
  methods: {
    getVipList () {
      getVipList().then(res => {
        if (res.code === 200) {
          // 解码并解析
          const info = JSON.parse(unformat(res.info))
          this.VIPList = info.comicsList
        } else {
          alert(res.code_msg)
        }
      }).catch(err => {
        console.log(err)
        alert('网络异常，请稍后重试')
      })
    }
  },
  created () {
    this.getVipList()
  }
}
</script>

<style lang="scss" scoped>
.page-vip {
  display: flex;
  flex-direction: column;
  height: 100%;

  .vip-main {
    flex: 1;
    overflow-y: auto;
  }
}
</style>
