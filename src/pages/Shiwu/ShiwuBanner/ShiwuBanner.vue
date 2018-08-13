<template>
  <div class="banner-wrapper">
    <div class="carousel banner">
      <div class="swiper-container-banner1">
        <div class="swiper-wrapper">
          <div class="swiper-slide" style="width: 690px"
               v-for="item in homeData.focusList" :key="item.id">
            <a href="javascript:;">
              <img :src="item.picUrl" alt="image">
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
