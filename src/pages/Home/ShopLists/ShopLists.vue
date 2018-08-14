<template>
  <div>
    <!--首页·品牌制造商直供-->
    <div class="indexFloor">
      <header class="hd">
        <a class="more" href="javascript:;">
          <span>品牌制造商直供</span>
          <i class="icon icon-go"></i>
        </a>
      </header>
      <div class="supplying" v-show="homeData.tagList">
        <ul class="list">
          <li class="item" v-for="item in homeData.tagList">
            <a href="javascript:;">
              <div class="cnt">
                <h4 class="title">{{item.name}}</h4>
                <div>
                  <span class="price1">{{item.floorPrice}}</span>
                  <span class="price2">元起</span>
                </div>
                <i class="icon" :class="{'icon-new': item.newOnShelf}"></i>
              </div>
              <img
                :src="item.picUrl"
                alt="supply">
            </a>
          </li>
        </ul>
      </div>
    </div>
    <!--首页·新品首发-->
    <div class="indexFloor newItems">
      <header class="hd">
        <a class="more" href="javascript:;">
          <span>新品首发</span>
          <div class="all">
              <span class="wrap">
                <span>查看全部</span>
                <i class="arrow-right"></i>
              </span>
          </div>
        </a>
      </header>
      <div class="goodGrid goodGrid-newItem">
        <div class="inner swiper-container">
          <ul class="list swiper-wrapper">
            <li class="item swiper-slide" v-for="item in homeData.newItemList">
              <a class="good" href="javascript:;">
                <div class="hd">
                  <div class="wraper">
                    <img
                      :src="item.listPicUrl"
                      alt="img">
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
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!--首页·人气推荐-->
    <div class="indexFloor popularItemList">
      <header class="hd">
        <a class="more" href="javascript:;">
          <span>人气推荐 · 好物精选</span>
          <div class="all">
              <span class="wrap">
                <span>查看全部</span>
                <i class="arrow-right"></i>
              </span>
          </div>
        </a>
      </header>
      <div class="goodGrid goodGrid-popularItem">
        <div class="inner swiper-container">
          <ul class="list swiper-wrapper">
            <li class="item swiper-slide" v-for="(item, index) in homeData.newItemNewUserList" :key="index">
              <a class="good" href="javascript:;">
                <div class="hd">
                  <div class="wraper">
                    <img
                      :src='item.listPicUrl'
                      alt="img">
                  </div>
                  <div class="desc">{{item.name}}</div>
                </div>
                <div class="tagWrapper">
                  <p class="status anniversary">七夕推荐</p>
                  <p class="status gradientPrice">七夕礼物价</p>
                </div>
                <div class="name">
                  <span>{{item.name}}</span>
                </div>
                <div class="newItemDesc">{{item.simpleDesc}}</div>
                <div class="price">
                  <div>
                    <span>￥</span>
                    <span>{{item.retailPrice}}</span>
                  </div>
                </div>
                <span></span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!--定时器-->
    <Timer/>
    <!--福利社-->
    <Sale/>
    <!--专题精选-->
    <div class="indexFloor">
      <header class="hd">
        <a class="more" href="javascript:;">
          <span>专题精选</span>
          <i class="icon icon-go"></i>
        </a>
      </header>
      <div class="indexTopics-slide">
        <div class="inner swiper-container">
          <ul class="list swiper-wrapper">
            <li class="item swiper-slide" style="margin-right: 20.8333px;"
            v-for="(item, index) in zhuantiData">
              <a class="imgWrap" href="javascript:;">
                <img
                  :src="item.listPicUrl"
                  alt="">
              </a>
              <div class="line1">
                <h4 class="title">{{item.name}}</h4>
                <span class="price">{{item.retailPrice}}元起</span>
              </div>
              <div class="desc">{{item.simpleDesc}}</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!--居家好物-->
    <div class="indexFloor">
      <div class="titleGoodGrid">
        <h3 class="title">居家好物</h3>
        <div class="goodGrid">
          <ul class="list">
            <li class="item" style="z-index:6;padding:0rem 0.26666666666666666rem 0.44rem 0.13333333333333333rem ;"
            v-for="(item, index) in jujiaData">
              <a class="good" href="javascript:;">
                <div class="hd-jujia">
                  <div class="wraper">
                    <img
                      :src="item.appListPicUrl"
                      alt="">
                    <div class="desc">{{item.name}}</div>
                  </div>
                </div>
                <div class="tagWrapper">
                  <p class="status gradientPrice">居家特惠</p>
                </div>
                <div class="name">
                  <span>{{item.simpleDesc}}</span>
                </div>
                <div class="newItemDesc">{{item.name}}</div>
                <div class="price">
                  <span>￥{{item.floorPrice}}</span>
                </div>
                <span></span>
                <div class="specification">
                  <div>3</div>
                  <div>色</div>
                  <div>可</div>
                  <div>选</div>
                </div>
              </a>
            </li>
            <li class="item item-more">
              <a class="more moreH" href="javascript:;">
                <p class="txt">更多居家好物</p>
                <i class="icon icon-goodGridMore"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!--鞋包配饰好物-->
    <div class="indexFloor">
      <div class="titleGoodGrid">
        <h3 class="title">鞋包配饰好物</h3>
        <div class="goodGrid">
          <ul class="list">
            <li class="item" style="z-index:6;padding:0rem 0.26666666666666666rem 0.44rem 0.13333333333333333rem ;"
                v-for="(item, index) in jujiaData">
              <a class="good" href="javascript:;">
                <div class="hd-jujia">
                  <div class="wraper">
                    <img
                      :src="item.appListPicUrl"
                      alt="">
                    <div class="desc">{{item.name}}</div>
                  </div>
                </div>
                <div class="tagWrapper">
                  <p class="status gradientPrice">居家特惠</p>
                </div>
                <div class="name">
                  <span>{{item.simpleDesc}}</span>
                </div>
                <div class="newItemDesc">{{item.name}}</div>
                <div class="price">
                  <span>￥{{item.floorPrice}}</span>
                </div>
                <span></span>
                <div class="specification">
                  <div>3</div>
                  <div>色</div>
                  <div>可</div>
                  <div>选</div>
                </div>
              </a>
            </li>
            <li class="item item-more">
              <a class="more moreH" href="javascript:;">
                <p class="txt">更多鞋包配饰好物</p>
                <i class="icon icon-goodGridMore"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState, mapGetters} from 'vuex'
  import Swiper from 'swiper'
  import Timer from './Timer/Timer'
  import Sale from './Sale/Sale'
  export default {
    name: "ShopLists",
    data() {
      return {
        zhuantiData: [],
        jujiaData: []
      }
    },
    computed: {
      ...mapState(['homeData']),
      ...mapGetters(['getJujiaData', 'getZhuantiData']),
      getJujia () {
        this.jujiaData = this.getJujiaData
      },
      getZhuanti(){
        this.zhuantiData = this.getZhuantiData
      }
    },
    watch: {
      homeData () {
        this.$nextTick(() => {
          new Swiper('.swiper-container', {
            loop: false
          })
        })
      }
    },
    components: {
      Timer,
      Sale,
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../../../assets/stylus/mixins.styl'
  .indexFloor
    margin-bottom: 0.26667rem
    background-color: #fff
    .hd
      display: flex
      flex-flow: row nowrap
      align-items: center
      justify-content: center
      height: 1.46667rem
      font-size: .42667rem
      .more
        align-items: center
        display: flex
        flex-flow: row nowrap
        color: #333
        .icon
          margin-left: .13333rem
        .icon-go
          display: inline-block;
          vertical-align: middle;
          background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/go2-3e511991d6.png);
          background-repeat: no-repeat;
          background-size: 100% 100%;
          width: .4rem;
          height: .4rem
    /*首页·品牌制造商直供*/
    .supplying
      padding-bottom: .10667rem
      .list
        position: relative
        margin: 0 .21333rem
        height: 6.24rem
        overflow: hidden
        .item:nth-child(1), .item:nth-child(3)
          margin-right: .10667rem
        .item
          display: inline-block;
          position: relative;
          margin-bottom: .10667rem;
          width: 4.73333rem;
          height: 3.14667rem;
          overflow: hidden;
          background-color: #f4f4f4
          float left
          a
            width: 100%
            height: 100%
            .cnt
              position: absolute
              left: 0
              top: 0
              padding: .26667rem 0 0 .26667rem
              width: 100%
              z-index: 4
              .title
                text-overflow: ellipsis
                white-space: nowrap
                overflow: hidden
                color: #333
                font-size: .37333rem
                line-height: .45333rem
                margin-bottom: .08rem
              .price1
                color: #333
                font-size: .37333rem
                line-height: .45333rem
              .price2
                color: #333
                font-size: .32rem
                line-height: .45333rem
              .icon-new
                background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/new-5e42f2db1f.png)
                height: .42667rem
                width: .85333rem;
                display: inline-block;
                vertical-align: middle;
                background-repeat: no-repeat;
                background-size: 100% 100%
              .icon
                display: block;
                margin-top: .13333rem
          img
            width: 100%
            height: 100%
    .indexTopics-slide
      padding: 0 .4rem .48rem;
      overflow: hidden
      .inner
        overflow: visible
        .list
          width: 7.6667rem
          .item
            width: 100%
            .imgWrap
              display: block
              width: 7.66667rem
              height: 4.29333rem
              margin-bottom: .21333rem
              border-radius: 8px;
              overflow: hidden
              img
                width: 575px
                height: 321px
            .line1
              width: 575px
              height: .54667rem;
              margin-bottom: .02667rem;
              zoom: 1
              .title
                white-space: nowrap
                overflow: hidden
                text-overflow: ellipsis
                width: 5.46667rem
                float: left
                font-size: .37333rem
              .price
                float: right
                font-size: .37333rem
                color: #b4282d

            .desc
              white-space: nowrap
              overflow: hidden
              text-overflow: ellipsis
              width: 7.66667rem
              font-size: .32rem
              color: #7F7F7F
  .newItems
    .hd
      background: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/bitmap-d4f7b37e32.png)
      background-size: 10rem 3.46667rem
      height: 3.46667rem
      margin-bottom: .42667rem
      position: relative
      .more
        display: block
        text-align: center
        font-size: .48rem
        color: #8BA0B6
        .all
          position: relative
          margin: .21333rem auto 0
          width: 3.2rem
          height: .74667rem
          font-size: .37333rem
          line-height: .74667rem
          background: #D8E5F1
          .wrap
            width: 1.70667rem
            display: inline-block
            text-align: left
            .arrow-right
              position: absolute
              top: .22667rem
              background: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexNewArrow-f3b56d449b.png)
              background-size: .13333rem .29333rem
              display: inline-block
              height: .29333rem
              width: .13333rem
              margin-left: .08rem
  .popularItemList
    .hd
      background: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/bitmap2-d626e0b52a.png)
      background-size: 10rem 3.46667rem
      height: 3.46667rem
      margin-bottom: .42667rem
      position: relative
      .more
        display: block
        text-align: center
        font-size: .48rem
        color: #B4A078
        .all
          position: relative
          margin: .21333rem auto 0
          width: 3.2rem
          height: .74667rem
          font-size: .37333rem
          line-height: .74667rem
          background: #F4E9CB
          .wrap
            width: 1.70667rem
            display: inline-block
            text-align: left
          .arrow-right
            position: absolute
            top: .22667rem
            background: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexPopularArrow-fb701819de.png)
            background-size: .13333rem .29333rem
            display: inline-block
            height: .29333rem
            width: .13333rem
            margin-left: .08rem
  .titleGoodGrid
    background-color: #f4f4f4
    .title
      line-height: 1.6rem
      text-align: center
      font-size: .37333rem
      color: #333
      background-color: #fff
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
  .goodGrid-newItem, .goodGrid-newItem .swiper-container, .goodGrid-popularItem, .goodGrid-popularItem .swiper-container
    height: 6.4rem
    .list
      overflow: visible
      height: 460px
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
        .staus
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
</style>
