<!--首页品牌制造商模块-->
<template>
  <div>
    <ModelHeader :showIcon="showIcon" :headerType="1"/>
    <div class="supplying">
      <ul class="list">
        <li class="item" v-for="(item, index) in supplyData" :key="index">
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
</template>

<script>
  import ModelHeader from '../../../components/ModelHeader/ModelHeader'
  export default {
    name: "Supply",
    props: {
      supplyData: Array  // 接收一个数组
    },
    data() {
      return {
        headerType: 1,  // 显示头部的类型（两种）
        showIcon: true  // 是否显示头部的箭头图标
      }
    },
    components: {
      ModelHeader
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../assets/stylus/mixins.styl"
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
</style>
