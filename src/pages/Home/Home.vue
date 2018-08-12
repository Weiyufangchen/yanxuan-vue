<template>
  <div class="home">
    <!--首页header-->
    <HomeHeader/>
    <!--首页轮播图-->
    <Carousel/>
    <!--首页list-->
  </div>
</template>

<script>
  import BScorll from 'better-scroll'
  import HomeHeader from './HomeHeader/HomeHeader'
  import Carousel from './Carousel/Carousel'
  export default {
    name: "Home",
    computed: {

    },
    methods: {

    },
    components: {
      HomeHeader,
      Carousel
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../../assets/stylus/mixins.styl'
  .home
    width: 100%


</style>
