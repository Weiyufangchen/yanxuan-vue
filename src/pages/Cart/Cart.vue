<template>
  <div>
    <!--cart头部-->
    <div class="cartHeader" style="height: 88px;">
      <div class="hd">
        <div class="headWrapper">
          <span class="logo">购物车</span>
          <div class="right">
            <a class="cartCoupon" href="javascript:;">领券</a>
          </div>
        </div>
      </div>
    </div>
    <!--服务：30天无忧退货-->
    <div class="service">
      <ul class="serviceList">
        <li class="item">
          <i class="icon icon-servicePolicy"></i>
          <span>30天无忧退货</span>
        </li>
        <li class="item">
          <i class="icon icon-servicePolicy"></i>
          <span>48小时快速退款</span>
        </li>
        <li class="item">
          <i class="icon icon-servicePolicy"></i>
          <span>满88元免邮费</span>
        </li>
      </ul>
    </div>
    <!--购物车空状态的默认页面-->
    <div class="defaultPage noCart-defaultPage">
      <div class="container">
        <div class="noCart-img"></div>
        <div class="txt noCart-login">
          <div class="noCart-title">去添加点什么吧</div>
          <div class="noCart-btn">登录</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Cart"
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../assets/stylus/mixins.styl"
  /*小图标*/
  .icon-servicePolicy
    display: inline-block
    vertical-align middle
    background-image url(http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/servicePolicy-1d7541974f.png)
    background-repeat no-repeat
    background-size 98%
    width: .1333rem
    height: .1333rem
  /*头部样式*/
  .hd
    position fixed!important
    left: 0
    top: 0
    z-index: 5
    width: 100%
    .headWrapper
      height: 88px
      padding 0 .4rem
      line-height: 88px
      text-align center
      background-color: #fff
      position: relative
      .logo
        font-size .48rem
      .right
        position: absolute
        top: 0
        right: .4rem
        font-size .4rem
        .cartCoupon
          margin-right .37333rem
          color: #b4282d
  /*服务栏*/
  .serviceList
    position: relative
    z-index: 1
    height: .9333rem
    padding: 0 .4rem
    background-color: #f4f4f4
    display: flex
    flex-flow row nowrap
    align-items: center
    justify-content: space-between
    item
      font-size .32rem
      color: #666
      .icon-servicePolicy
        margin-right .08rem
        position: relative
        top: -1px
  /*默认页面空购物车*/
  .defaultPage
    position: fixed
    top: 88px
    left: 0
    bottom: 0
    z-index: 0
    width: 100%
    background-color: #f4f4f4
    text-align center
    .container
      position: absolute
      top: -.66667rem
      right: 0
      bottom: 0
      left: 0
      height: 4rem
      margin: auto
    .noCart-img
      display: inline-block
      vertical-align middle
      width: 3.30667rem
      height: 3.30667rem
      margin-bottom: .10667rem
      background-size 3.30667rem 3.30667rem
      background-position center center
      background-repeat: no-repeat
    .noCart-login
      margin-top -.26667rem
      .noCart-title
        margin-bottom: .66667rem
        line-height: 1
        font-size .37333rem
        color: #999
      .noCart-btn
        margin auto
        width: 6.4rem
        height: 1.22667rem
        font-size: .4rem
        line-height: 1.22667rem
        color: #fff
        background-color: #b4282d
        border-radius: .04rem
    .txt
      font-size .37333rem
      line-height: 1
      color: #7f7f7f
  .noCart-defaultPage
    .noCart-img
      background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-a8fe3f12e5.png)
</style>
