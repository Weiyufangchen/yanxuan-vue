<!--
新品首发，人气推荐模板
-->
<template>
  <div>
    <div class="goodGrid goodGrid-goodsList">
      <div class="inner swiper-container-newItem">
        <swiper :options="swiperOption" class="list swiper-wrapper">
          <swiper-slide class="item swiper-slide" v-for="(item, index) in newGoodsData" :key="index">
            <a class="good" href="javascript:;">
              <div class="hd">
                <div class="wraper">
                  <img :src="item.listPicUrl">
                </div>
                <div class="desc">{{item.name}}</div>
              </div>
              <div class="tagWrapper">
                <p class="status anniversary">七夕推荐</p>
              </div>
              <div class="name">
                <span>{{item.name}}</span>
              </div>
              <div class="newItemDesc">{{item.simpleDesc}}</div>
              <div class="price">
                <div>
                  <span>￥{{item.retailPrice}}</span>
                </div>
              </div>
              <span></span>
            </a>
          </swiper-slide>
          <swiper-slide class="item swiper-slide more">
            <a href="javascript:;" style="display:block; width:100%; height:100%;">
              <span class="text">查看全部</span>
            </a>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "GoodsList",
    props: {
      newGoodsData: Array,
    },
    data() {
      return {
        headerType: 2,
        swiperOption: {
          slidesPerView: 'auto',
          centeredSlides: false,
        }
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../assets/stylus/mixins.styl"

  .goodGrid
    background-color: #fff
    .list
      position relative
      z-index: 0
      overflow: hidden
      .item:nth-child(2n+1)
        padding: 0 .13333rem .44rem .26667rem
      .item
        float: left
        position: relative
        width: 50%
        padding: 0 .26667rem .44rem
        overflow: hidden
        background-color: #fff
        .good
          width: 100%
          .wraper
            width: 100%
            position: relative
            padding-bottom: 120%
          .newItemDesc
            display: none
        .hd
          border-radius: .05333rem
          position: relative
          z-index: 0
          background-color: #f4f4f4
        .hd-jujia
          height: 414px
          border-radius: .05333rem
          position: relative
          z-index: 0
          background-color: #f4f4f4
          img
            position: absolute
            display: block
            width: 100%
            height: 4.6rem
            border-radius: .05333rem .05333rem 0 0
            background-color: #f4f4f4
          .desc
            position: absolute
            bottom: 0
            width: 100%
            background: #F1ECE2
            border-radius: 0 0 .05333rem .05333rem
            font-size: .32rem
            color: #9F8A60
            letter-spacing: 0
            line-height: .38667rem
            padding: .26667rem .13333rem
            white-space: nowrap
            text-overflow: ellipsis
            overflow: hidden
        .tagWrapper
          width: 100%
          z-index: 1
          padding-left: .13333rem
          margin: .26667rem 0 0 .05333rem
          height: .4rem
          overflow: hidden
          .status
            margin-left: .16rem
        .status
          margin-bottom: .01333rem;
          height: .4rem;
          padding: .06667rem .21333rem;
          line-height: .26667rem;
          text-align: center;
          color: #fff;
          font-size: .26667rem;
          border-radius: .02667rem;
          display: inline-block;
          vertical-align: middle
        .status:nth-child(1)
          margin-left: 0
        .status.anniversary
          background-color: #e5686d
        .status.gradientPrice, .status.presell
          background-color: #f48f18
        .name
          margin-top: .13333rem
          padding: 0 .13333rem
          line-height: .64rem
          text-align: left
          font-size: .37333rem
          text-overflow: ellipsis
          overflow: hidden
          white-space: nowrap
          color: #333
        .price
          line-height: 1
          font-size: .42667rem
          text-align: left
          color: #b4282d
          padding: 0 .13333rem
        .specification
          position: absolute
          border-width: .5px
          border-radius: .02667rem
          border-style: solid
          border-color: #b4a078
          width: .42667rem
          top: 0
          margin-top: .13333rem
          margin-left: .13333rem
          padding: .16rem 0
          color: #b4a078
          display: flex
          flex-direction: column
          justify-content: center
          div
            font-size: .26667rem
            text-align: center
            line-height: 1
      .item-more
        position: absolute
        right: 0
        bottom: 172px
        z-index: 1
        padding-bottom: 0
        padding-right: .26667rem
        padding-left: .13333rem
        height: 5.52rem
        .more
          border-radius: .05333rem
          background-color: #f4f4f4
          padding-top: 1.70667rem
          padding-bottom: 1.72rem
          width: 100%
          display: -moz-flex
          display: flex
          flex-direction: column
          align-items: center
          justify-content: center
          .txt
            color: #333
            font-size: .42667rem
            line-height: 1
            margin-bottom: .8rem
          .icon-goodGridMore
            display: inline-block
            vertical-align: middle
            background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/goodGridMore-233aaf669a.png)
            background-repeat: no-repeat
            background-size: 100% 100%
            width: .89333rem
            height: .89333rem
  .goodGrid-goodsList, .goodGrid-goodsList .swiper-container-newItem
    height: 6.4rem
    .list
      overflow: visible
      height: 480px
      .item
        padding: 0!important
        margin-left: .4rem
        width: 3.73333rem!important
        .good
          display: block
          .name
            margin-bottom: .13333rem
            padding: 0 .13333rem
            font-size: .37333rem
            line-height: .45333rem
          .newItemDesc
            display: block
            margin-bottom: .18667rem
            font-size: .32rem
            color: #7f7f7f
            line-height: .4rem
            white-space: nowrap
            text-overflow: ellipsis
            overflow: hidden
            padding: 0 .13333rem
          .price
            padding: 0 .13333rem
            font-size: .37333rem
        .hd
          background-color: #f4f4f4
          .wraper
            background-color: #f4f4f4
            border-radius: 4
            padding-bottom: 0
            margin-bottom: .26667rem
          img
            background-color: #f4f4f4
            top: 0
            left: 0
            width: 100%
            height: 100%
          .desc
            display: none
        .tagWrapper
          width: 100%
          z-index: 1
          margin: 0 0 .21333rem
          height: .4rem
          overflow: hidden
          .status
            margin-left: .16rem
        .status
          height: .4rem
          padding: .06667rem .21333rem
          line-height: .26667rem
          text-align: center
          color: #fff
          font-size: .26667rem
          border-radius: .02667rem
          display: inline-block
          vertical-align: middle
        .status.anniversary
          background-color: #e5686d
        .status.gradientPrice, .status.presell
          background-color: #f48f18
          float: left
      .more
        display: block;
        border: .10667rem solid #F4F4F4;
        width: 3.73333rem;
        height: 3.86667rem;
        margin: 0 .4rem;
        line-height: 3.73333rem;
        text-align: center
</style>
