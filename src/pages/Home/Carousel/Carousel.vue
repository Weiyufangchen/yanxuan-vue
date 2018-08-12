<template>
  <div>
    <div class="home-container">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" style="width: 750px">
            <a href="javascript:;">
              <img src="https://yanxuan.nosdn.127.net/e8404dffe57eff5100feb721f9380386.jpg?imageView&amp;thumbnail=750x0&amp;quality=75">
            </a>
          </div>
          <div class="swiper-slide" style="width: 750px">
            <a href="javascript:;">
              <img src="https://yanxuan.nosdn.127.net/e8404dffe57eff5100feb721f9380386.jpg?imageView&amp;thumbnail=750x0&amp;quality=75">
            </a>
          </div>
          <div class="swiper-slide" style="width: 750px">
            <a href="javascript:;">
              <img src="https://yanxuan.nosdn.127.net/e8404dffe57eff5100feb721f9380386.jpg?imageView&amp;thumbnail=750x0&amp;quality=75">
            </a>
          </div>
          <div class="swiper-slide" style="width: 750px">
            <a href="javascript:;">
              <img src="https://yanxuan.nosdn.127.net/e8404dffe57eff5100feb721f9380386.jpg?imageView&amp;thumbnail=750x0&amp;quality=75">
            </a>
          </div>
          <div class="swiper-slide" style="width: 750px">
            <a href="javascript:;">
              <img src="https://yanxuan.nosdn.127.net/e8404dffe57eff5100feb721f9380386.jpg?imageView&amp;thumbnail=750x0&amp;quality=75">
            </a>
          </div>
        </div>
      </div>
      <div class="service-policy">
        <ul class="grow">
          <li class="item">
            <a href="javascript:;">
              <i></i>
              <span>网易自营品牌</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Carousel"
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../../../assets/stylus/mixins.styl'
  .home-container
    height: 4rem
    margin-top 148px
    margin-bottom .27rem
    background-color: #fff
    .swiper-container
      width: 100%
      height: 100%
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


</style>
