<template>
  <!--category头部-->
  <div class="hdWraper" style="height: 88px;">
    <div class="hd">
      <div class="itemCateListHd">
        <div class="topSearchIpt ipt">
          <i class="icon"></i>
          <span class="placeholder">搜索商品, 共11991款好物</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "CartgoryHeader"
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../../../assets/stylus/mixins.styl'
  .hd
    position: fixed!important
    left: 0
    top: 0
    z-index: 5
    width: 100%
  .itemCateListHd
    display: flex
    align-items: center
    height: 1.17333rem
    padding: 0 .4rem
    background-color: #fff
    position: relative
    .ipt
      width: 100%
    &::after
      content: ''
      position: absolute
      background-color: #d9d9d9
      left: 0
      width: 100%
      height: 1px
      transform-origin: 50% 100% 0
      bottom: 0
  .topSearchIpt
    display: flex
    flex-flow: row nowrap
    align-items: center
    justify-content: center
    height: .74667rem
    font-size: .37333rem
    background-color: #ededed
    border-radius: .10667rem
    .icon
      display: inline-block
      vertical-align: middle
      background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-2fb94833aa.png)
      background-repeat: no-repeat
      background-size: 100% 100%
      width: .37333rem
      height: .37333rem
      margin-right: .13333rem
    .placeholder
      color: #666
</style>
