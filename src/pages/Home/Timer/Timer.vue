<template>
  <div>
    <a href="javascript:;">
      <div class="indexFlash">
        <div class="left-item">
          <div class="title">严选限时购</div>
          <div class="countdown">
            <span class="hours">00</span>
            <span class="colon">:</span>
            <span class="mins">00</span>
            <span class="colon">:</span>
            <span class="secs">00</span>
          </div>
          <div class="next-title">
            <span>
              <span>下一场</span>
              <span>10:00</span>
              <span>开始</span>
            </span>
          </div>
        </div>
        <div class="right-item" v-if="homeData.flashSaleIndexVO">
          <img :src="homeData.flashSaleIndexVO.primaryPicUrl">
          <div class="price">
            <div class="price-now">
              <span>￥{{homeData.flashSaleIndexVO.originPrice}}</span>
            </div>
            <div class="price-origin">
              <!--添加伪类做删除线-->
              <span class="t">￥{{homeData.flashSaleIndexVO.activityPrice}}</span>
            </div>
          </div>
        </div>
      </div>
    </a>
  </div>
</template>

<script>
  import {mapState,mapGetters} from 'vuex'
  export default {
    name: "Timer",
    data() {
      return {

      }
    },
    computed: {
      // 取出homeData数据
      ...mapState(['homeData']),
    },
    methods: {
      // 倒计时功能
      countDown () {
        if (this.homeData.flashSaleIndexVO) {
          const STARTTIME = this.homeData.flashSaleIndexVO.nextStartTime;
        }
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../../../assets/stylus/mixins.styl'
  .indexFlash
    padding: .4rem .53333rem .4rem .74667rem
    height: 5.06667rem
    background: #fff
    display: flex
    .left-item
      flex: 1
      display: flex
      flex-direction: column
      padding-top: 1.06667rem
      .title
        font-size: .48rem
        line-height: .48rem
        margin-bottom: .32rem
        color: #333
        letter-spacing: .16rem
      .countdown
        display: inline-block
      .next-title
        margin-top: .53333rem
        color: #333
        font-size: .32rem
        line-height: .32rem
        height: .32rem
      .hours, .mins, .secs
        display: inline-block
        line-height: .74667rem
        text-align: center
        width: .82667rem
        height: .74667rem
        font-size: .42667rem
        color: #fff
        border-radius: .05333rem
        background: #444
    .right-item
      background: #fff
      width: 4.26667rem
      height: 4.26667rem
      position: relative
      img
        width: 100%
        height: 100%
      .price
        height: 1.28rem
        width: 1.28rem
        position: absolute
        right: .26667rem
        bottom: .48rem
        background-color: rgba(244,143,24,.95)
        border-radius: 100%
        color: #fff
        text-align: center
        display: flex
        flex-direction: column
        justify-content: center
</style>
