<template>
  <div class="page-vip">
    <normarl-header title = 'vip'></normarl-header>
    <div class="vip-main">
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
  name: 'Vip',
  components: {
    NormarlHeader,
    HeaderType,
    CartoonList
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
