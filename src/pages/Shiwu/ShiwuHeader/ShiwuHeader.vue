<template>
  <div class="hdWraper" style="height: 87px;">
    <div class="hd">
      <div class="topBar">
        <div class="bd">
          <div class="row">
            <a class="icon icon-home" href="/home"></a>
            <a href="javascript:;">
              <i class="logo icon icon-logo"></i>
            </a>
            <div class="right">
              <a class="search" href="javasricpt:;">
                <i class="icon icon-search1"></i>
              </a>
              <a class="cart" href="/cart">
                <i class="icon icon-cart"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ShiwuHeader"
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../../../assets/stylus/mixins.styl'
  .icon-cart, .icon-home, .icon-logo, .icon-openAppClose, .icon-openAppLogo, .icon-search1
    display: inline-block
    vertical-align: middle
    background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/hd-s342878591a-9af1a97852.png)
    background-repeat: no-repeat
    background-size: 2.29333rem 5.30667rem
  .icon-home
    width: .64rem
    height: .58667rem
    background-position: 0 -.98667rem
  .icon-logo
    width: 2.29333rem;
    height: .72rem;
    background-position: 0 -1.70667rem
  .icon-search1
    width: .85333rem
    height: .85333rem
    background-position: 0 -4.45333rem
  .icon-cart
    width: .85333rem;
    height: .85333rem;
    background-position: 0 0
  .hd
    position: fixed
    left: 0
    top: 0
    z-index: 5
    width: 100%
  .topBar
    position: relative
    .bd
      position: relative
      height: 1.16rem
      background-color: #fafafa
      .row
        z-index: 1
        width: 10rem
        margin: auto
        overflow: hidden
        position: relative
        padding: 0 .21333rem 0 .32rem
        height: 1.17333rem
        display: flex
        align-items: center
        justify-content: space-between
        .logo
          position: absolute
          top: 0
          right: 0
          bottom: 0
          left: 0
          margin: auto
        .right
          margin-left: auto
          margin-right: .06667rem
        .search
          margin-right: .26667rem
</style>
