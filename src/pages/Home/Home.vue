<template>
  <div class="home">
    <!--首页header-->
    <HomeHeader/>
    <!--首页轮播图-->
    <Carousel/>
    <!--首页购物分类-->
    <ShopLists/>
  </div>
</template>

<script>
  import BScorll from 'better-scroll'
  import {mapState} from 'vuex'
  import HomeHeader from './HomeHeader/HomeHeader'
  import Carousel from './Carousel/Carousel'
  import ShopLists from './ShopLists/ShopLists'
  export default {
    name: "Home",
    mounted() {
      this.$store.dispatch('getHomeData')
    },
    components: {
      HomeHeader,
      Carousel,
      ShopLists
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../../assets/stylus/mixins.styl'
  .home
    width: 10rem
    padding-bottom: 1.30667rem
    margin-right: auto
    margin-left: auto
    overflow: hidden
</style>
