<template>
  <div class="page-classify">
    <normarl-header title = '分类'></normarl-header>
    <div class="classify-main">
      <header-type :types = "types" @click = "onTypeChange"></header-type>
      <cartoon-list :list = "list"></cartoon-list>
    </div>
  </div>
</template>

<script>
import NormarlHeader from '@/components/NormalHeader'
import HeaderType from '@/components/HeaderType'
import CartoonList from '@/components/CartoonList'
import { getTypes, getTypesList } from '@/api/cartoon'
import { unformat } from '@/utils/apiHeader'

export default {
  name: 'Classify',
  components: {
    NormarlHeader,
    HeaderType,
    CartoonList
  },
  data () {
    return {
      types: [],
      list: []
    }
  },
  methods: {
    getTypes () {
      return getTypes().then(res => {
        if (res.code === 200) {
          this.types = res.info
        } else {
          alert(res.code_msg)
        }
      }).catch(err => {
        alert('网络异常，请稍后重试' + err)
      })
    },
    getTypesList (subject) {
      getTypesList(subject).then(res => {
        if (res.code === 200) {
          // 对 res.info 解码出来的数据，进行解析
          const info = JSON.parse(unformat(res.info))
          this.list = info.comicsList
        } else {
          alert(res.code_msg)
        }
      }).catch(err => {
        console.log(err)
        alert('网络异常，请稍后重试')
      })
    },
    /*
      切换分类类型时，触发
    */
    onTypeChange (payload) {
      this.getTypesList(payload.data.targetargument)
    }
  },
  async created () {
    // A B 两个接口，B接口的参数需要从 A 接口的返回值中去获取，要如何办？
    await this.getTypes()
    this.getTypesList(this.types[0].targetargument)
  }
}
</script>

<style lang="scss" scoped>
.page-classify {
  display: flex;
  flex-direction: column;
  height: 100%;

  .classify-main {
    flex: 1;
    overflow-y: auto;
  }
}
</style>
