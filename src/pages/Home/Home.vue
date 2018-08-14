<template>
  <div class="home">
    <!--首页header-->
    <HomeHeader/>

    <!--首页轮播图-->
    <Carousel/>

    <!--首页商品制造商直供-->
    <div class="template">
      <Supply :supplyData="homeData.tagList"/>
    </div>

    <!--新品首发-->   <!-- 使用了两次 -->
    <div class="template">
      <GoodsList :newGoodsData="homeData.newItemNewUserList" :goodsType="true"/>
    </div>

    <!--人气推荐-->
    <div class="template">
      <GoodsList :popularGoodsData="homeData.popularItemList" :goodsType="false"/>
    </div>

  </div>
</template>

<script>
  import BScorll from 'better-scroll'
  import {mapState} from 'vuex'
  import HomeHeader from './HomeHeader/HomeHeader'
  import Carousel from './Carousel/Carousel'
  import Supply from './Supply/Supply'
  import GoodsList from '../../components/GoodsList/GoodsList'

  export default {
    name: "Home",
    data() {
      return {
        goodsType: true  // 传递的商品类型（新品true/人气商品false）
      }
    },
    mounted() {
      // 通知store对象请求homeData数据
      this.$store.dispatch('getHomeData')
    },
    computed: {
      ...mapState(['homeData'])
    },
    components: {
      HomeHeader,
      Carousel,
      Supply,
      GoodsList
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../../assets/stylus/mixins.styl'
  .home
    width: 10rem
    padding-bottom: 1.30667rem
    margin-right: auto
    margin-left: auto
    overflow: hidden
  .template
    margin-bottom: 0.26667rem
    background-color: #fff
</style>
