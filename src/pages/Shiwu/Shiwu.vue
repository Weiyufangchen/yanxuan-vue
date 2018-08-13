<template>
  <div>
    <ShiwuHeader/>
    <div class="explore">
      <ShiwuBanner/>
      <ShiwuNavBanner/>
      <ShiwuRecommend/>
    </div>
  </div>
</template>

<script>
  import ShiwuHeader from './ShiwuHeader/ShiwuHeader'
  import ShiwuBanner from './ShiwuBanner/ShiwuBanner'
  import ShiwuNavBanner from './ShiwuNavBanner/ShiwuNavBanner'
  import ShiwuRecommend from './ShiwuRecommend/ShiwuRecommend'
  export default {
    name: "Shiwu",
    components: {
      ShiwuHeader,
      ShiwuBanner,
      ShiwuNavBanner,
      ShiwuRecommend
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../../assets/stylus/mixins.styl'
  .explore
    background-color: #f4f4f4
    padding-bottom: 1.29333rem
    line-height: 1.2
    width: 10rem
    margin: auto

</style>
