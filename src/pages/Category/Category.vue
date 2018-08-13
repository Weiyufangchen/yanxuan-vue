<template>
  <div>
    <!--category头部搜索框-->
    <CartgoryHeader/>
    <!--左侧导航栏-->
    <CategoryNavLeft/>
    <!--右侧菜单列表栏-->
    <CategoryNavRight/>
  </div>
</template>

<script>
  import CartgoryHeader from './CartgoryHeader/CartgoryHeader'
  import CategoryNavLeft from './CategoryNavLeft/CategoryNavLeft'
  import CategoryNavRight from './CategoryNavRight/CategoryNavRight'
  export default {
    name: "Category",
    components: {
      CartgoryHeader,
      CategoryNavLeft,
      CategoryNavRight
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>
