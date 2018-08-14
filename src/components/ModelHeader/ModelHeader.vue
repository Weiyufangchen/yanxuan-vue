<!--
首页以及识物页面，部分模块组件的头部
-->
<template>
  <div>
    <header class="hd-one" v-if="headerType===1">
      <a class="more" href="javascript:;">
        <span>品牌制造商直供</span>
        <i class="icon icon-go" v-show="showIcon"></i>
      </a>
    </header>
    <header class="hd-two" v-else>
      <a class="more" href="javascript:;">
        <span>新品首发</span>
        <div class="all">
          <span class="wrap">
            <span>查看全部</span>
            <i class="arrow-right"></i>
          </span>
        </div>
      </a>
    </header>
  </div>
</template>

<script>
  export default {
    name: "ModelHeader",
    props: {
      headerType: Number,  // 接收一个number来确认显示哪种header样式
      showIcon: Boolean  // 接收一个布尔值来确认是否显示箭头图标
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../assets/stylus/mixins.styl"
  .hd-one
    display: flex
    flex-flow: row nowrap
    align-items: center
    justify-content: center
    height: 1.46667rem
    font-size: .42667rem
    .more
      align-items: center
      display: flex
      flex-flow: row nowrap
      color: #333
      .icon
        margin-left: .13333rem
      .icon-go
        display: inline-block;
        vertical-align: middle;
        background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/go2-3e511991d6.png);
        background-repeat: no-repeat;
        background-size: 100% 100%;
        width: .4rem;
        height: .4rem
  .hd-two
    background: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/bitmap-d4f7b37e32.png)
    background-size: 10rem 3.46667rem
    height: 3.46667rem
    margin-bottom: .42667rem
    position: relative
    .more
      display: block
      text-align: center
      font-size: .48rem
      color: #8BA0B6
      transform: translateY(67px)
      .all
        position: relative
        margin: .21333rem auto 0
        width: 3.2rem
        height: .74667rem
        font-size: .37333rem
        line-height: .74667rem
        background: #D8E5F1
        .wrap
          width: 1.70667rem
          display: inline-block
          text-align: left
          .arrow-right
            position: absolute
            top: .22667rem
            background: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexNewArrow-f3b56d449b.png)
            background-size: .13333rem .29333rem
            display: inline-block
            height: .29333rem
            width: .13333rem
            margin-left: .08rem
</style>
