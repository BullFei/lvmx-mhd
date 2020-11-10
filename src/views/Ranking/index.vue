<template>
  <div class="page-ranking">
    <normarl-header title = '排行榜'></normarl-header>
    <div class="ranking-main">
      <header-type></header-type>
      <cartoon-list></cartoon-list>
    </div>
  </div>
</template>

<script>
import NormarlHeader from '@/components/NormalHeader'
import HeaderType from '@/components/HeaderType'
import CartoonList from '@/components/CartoonList'
export default {
  name: 'Ranking',
  components: {
    NormarlHeader,
    HeaderType,
    CartoonList
  }
}
</script>

<style lang="scss" scoped>
.page-ranking {
  display: flex;
  flex-direction: column;
  height: 100%;

  .ranking-main {
    flex: 1;
    overflow-y: auto;
  }
}
</style>
