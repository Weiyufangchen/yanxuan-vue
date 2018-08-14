<template>
  <!--category页面左侧导航栏-->
  <div class="cateNavLeft" style="left:0;">
    <div style="position:relative;height:100%;width:100%;overflow:hidden;">
      <ul class="cateNav">
        <li class="item active">
          <a class="txt" href="javascript:;">推荐专区</a>
        </li>
        <li class="item">
          <a class="txt" href="javascript:;">七夕专区</a>
        </li>
        <li class="item">
          <a class="txt" href="javascript:;">推荐专区</a>
        </li>
        <li class="item">
          <a class="txt" href="javascript:;">推荐专区</a>
        </li>
        <li class="item">
          <a class="txt" href="javascript:;">推荐专区</a>
        </li>
        <li class="item">
          <a class="txt" href="javascript:;">推荐专区</a>
        </li>
        <li class="item">
          <a class="txt" href="javascript:;">推荐专区</a>
        </li>
        <li class="item">
          <a class="txt" href="javascript:;">推荐专区</a>
        </li>
        <li class="item">
          <a class="txt" href="javascript:;">推荐专区</a>
        </li>
        <li class="item">
          <a class="txt" href="javascript:;">推荐专区</a>
        </li>
        <li class="item">
          <a class="txt" href="javascript:;">推荐专区</a>
        </li>
        <li class="item">
          <a class="txt" href="javascript:;">推荐专区</a>
        </li>
        <li class="item">
          <a class="txt" href="javascript:;">推荐专区</a>
        </li>
        <li class="item">
          <a class="txt" href="javascript:;">推荐专区</a>
        </li>
        <li class="item">
          <a class="txt" href="javascript:;">推荐专区</a>
        </li>
        <li class="item">
          <a class="txt" href="javascript:;">推荐专区</a>
        </li>
        <li class="item">
          <a class="txt" href="javascript:;">推荐专区</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "CategoryNavLeft"
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../../../assets/stylus/mixins.styl'
  .cateNavLeft
    position: fixed
    top: 1.17333rem
    left: 0
    bottom: 0
    z-index: 4
    width: 2.16rem
    background-color: #fff
    &::after
      content: ''
      position: absolute
      background-color: rgba(0,0,0,.15)
      top: 0
      bottom: 0
      width: 1px
      transform-origin: 100% 50% 0
      right: 0
  .cateNav
    padding: .53333rem 0
    .item
      width: 100%
      height: .66667rem
      text-align: center
      border: none
      /*加号选择器，相邻兄弟选择器*/
      +.item
        margin-top .5333rem
      .txt
        display: block
        color: #333
        font-size: .37333rem
        line-height: .66667rem
        text-overflow: ellipsis
        white-space: nowrap
        overflow: hidden
      &.active
        position: relative
        &::before
          content: ' '
          position: absolute
          top: 0
          left: 0
          bottom: 0
          width: .08rem
          background-color: #ab2b2b
        .txt
          font-size: .48rem
          color: #ab2b2b
</style>
<!--
1. + 选择器
　如果需要选择紧接在另一个元素后的元素，而且二者有相同的父元素，可以使用相邻兄弟选择器。
２. ~ 选择器
　　作用是查找某一个指定元素的后面的所有兄弟结点。
-->
