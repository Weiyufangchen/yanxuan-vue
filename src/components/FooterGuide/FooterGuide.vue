<template>
  <footer class="footer_guide border-1px">
    <a href="javascript:;" class="guide_item"
       :class="{active: isCurrent('/home')}"
       @click="goto('/home')">
      <i class="iconfont icon-shouye"></i>
      <span>首页</span>
    </a>
    <a href="javascript:;" class="guide_item"
       :class="{active: isCurrent('/shiwu')}"
       @click="goto('/shiwu')">
      <i class="iconfont icon-fangkuaidagou-weixuanzhong"></i>
      <span>识物</span>
    </a>
    <a href="javascript:;" class="guide_item"
       :class="{active: isCurrent('/category')}"
       @click="goto('/category')">
      <i class="iconfont icon-chouti"></i>
      <span>分类</span>
    </a>
    <a href="javascript:;" class="guide_item"
       :class="{active: isCurrent('/cart')}"
       @click="goto('/cart')">
      <i class="iconfont icon-gouwuche"></i>
      <span>购物车</span>
    </a>
    <a href="javascript:;" class="guide_item"
       :class="{active: isCurrent('/profile')}"
       @click="goto('/profile')">
      <i class="iconfont icon-renwu"></i>
      <span>个人</span>
    </a>
  </footer>
</template>

<script>
  export default {
    name: "FooterGuide",
    methods: {
      // 跳转路由
      goto(path) {
        this.$router.replace(path)
      },
    //  动态显示当前路由图标
      isCurrent (path) {
        return this.$route.path === path
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../../assets/stylus/mixins.styl'
  .footer_guide
    display: flex
    flex-flow: row nowrap
    align-items: center
    justify-content: space-around
    position fixed
    z-index: 5
    left: 0
    bottom: 0
    width: 100%
    height: 1.30667rem
    background-color: #fafafa
    border-top: 1px solid #d9d9d9
    .guide_item
      positiactive: relative
      text-align center
      display: flex
      flex: 1
      flex-direction column
      i
        vertical-align: middle
        font-size 35px
      &.active
        color: #b4282d
</style>
