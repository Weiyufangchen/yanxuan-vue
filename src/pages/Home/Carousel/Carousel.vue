<template>
    <div class="indexFloor">
      <div class="swiper-container-banner">
        <div class="swiper-wrapper">
          <div class="swiper-slide" style="width: 750px"
          v-for="item in homeData.cateList" :key="item.id">
            <a href="javascript:;">
              <img :src="item.bannerUrl" alt="image">
            </a>
          </div>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
      </div>
      <div class="service-policy">
        <ul class="grow">
          <li class="item">
            <a href="javascript:;">
              <i></i>
              <span>网易自营品牌</span>
            </a>
          </li>
          <li class="item">
            <a href="javascript:;">
              <i></i>
              <span>30天无忧退货</span>
            </a>
          </li>
          <li class="item">
            <a href="javascript:;">
              <i></i>
              <span>48小时快速退款</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  import {mapState} from 'vuex'
  export default {
    name: "Carousel",
    data () {
      return {

      }
    },
    computed: {
      ...mapState(['homeData'])
    },
    watch: {
      homeData(val){
        this.$nextTick(() => {
          new Swiper('.swiper-container-banner',{
            loop: true,
            // 如果需要分页器
            pagination: '.swiper-pagination',
          //  是否自动轮播
            autoplay : 2000,
            // autoplayDisableOnInteraction : false
          })
        })
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../../../assets/stylus/mixins.styl'
  .indexFloor
    margin-top 148px
    margin-bottom .2667rem
    background-color: #fff
    .swiper-container-banner
      width: 100%
      height: 5.333rem
      position: relative
      overflow: hidden
      z-index: 1
      .swiper-slide
        display: flex
        justify-content: center
        align-items flex-start
        flex-wrap: wrap
        a
          width: 100%
          height: 100%
          img
            width: 100%
            height: 100%
            background-color: #f9f9f9
      .swiper-pagination
        bottom: .4rem
        width: 100%
        .swiper-pagination-bullet
          width: .53333rem
          height: .05333rem
          display: inline-block
          background: #fff
          opacity: .4
          border-radius: 0
    .service-policy
      background-color: #fff
      .grow
        width: 100%
        height: .96rem
        padding: 0 .4rem
        display: flex
        flex-flow: row nowrap
        align-items: center
        zoom 1
        .item
          flex: 1
          float: left
          a
            display: inline-block
            vertical-align middle
            height: .42667rem
            i
              display: inline-block
              vertical-align middle
              background-repeat no-repeat
              background-size 100% 100%
              width: .42667rem
              height: .42667rem
              font-style: normal
              background-image: url(http://yanxuan.nosdn.127.net/cae45612b8aae577d8bd73338e2fc02c.png)
            span
              font-size: .32rem
              color #333333
              margin-left .10667rem
              line-height: 0.42667rem
              display: inline-block
              vertical-align middle
</style>
