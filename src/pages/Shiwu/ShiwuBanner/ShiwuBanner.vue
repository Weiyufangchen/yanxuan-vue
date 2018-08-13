<template>
  <div class="banner-wrapper">
    <div class="carousel banner">
      <div class="swiper-container-banner1">
        <div class="swiper-wrapper">
          <div class="swiper-slide" style="width: 690px"
               v-for="item in homeData.focusList" :key="item.id">
            <a href="javascript:;">
              <img :src="item.picUrl" alt="image">
              <div class="content">
                <div class="subTitle">严选推荐</div>
                <div class="title">严选按摩神器大公开</div>
                <div class="desc">揭开每一款的秘技绝学</div>
              </div>
            </a>
          </div>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'

  export default {
    name: "ShiwuBanner",
    mounted() {
      this.$store.dispatch('getHomeData', () => {
        this.$nextTick(() => {
          new Swiper('.swiper-container-banner1', {
            loop: true
          })
        })
      })
    },
    computed: {
      ...mapState(['homeData'])
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../../../assets/stylus/mixins.styl'
  .banner
    padding: .32rem 0
    width: 9.2rem
    margin: auto
    .swiper-container-banner1
      overflow: visible !important
    .swiper-slide
      position: relative
      display: block
      padding: 0 .1333rem
      background-color: #fff
      .content
        position: absolute
        top: 0
        left: 0
        right: 0
        bottom: 0
        margin: auto
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        width: 6.21333rem;
        height: 2.64rem;
        background-color: rgba(255,255,255,.9)
        .subTitle
          position: relative
          font-size: .26667rem
          color: #7f7f7f
          line-height: .4rem
          padding: 0 .10667rem
          &::before, &::after
            content: ' '
            position: absolute
            top: 0
            bottom: 0
            margin: auto
            width: .32rem
            height: 1px
            background-color: #999
          &::before
            left: -.32rem
          &::after
            right: -.32rem
        .title
          font-size: .42667rem
          line-height: .64rem
          color: #333
          margin-top: .21333rem
          font-weight: 700
        .desc
          font-size: .32rem
          color: #333
          line-height: .48rem
          margin-top: .05333rem
  .carousel
    position: relative
    background-color: #fff
    .swiper-container
      margin-left: auto
      margin-right: auto
      position: relative
      overflow: hidden
      z-index: 1
  .banner-wrapper
    width: 100%
    background-color: #fff
    overflow: hidden
  .swiper-container-banner1
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
          border-radius: .10667rem
</style>
