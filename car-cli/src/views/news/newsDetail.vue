<template>
  <div>
    <router-view></router-view>
    <nav-menu></nav-menu>
    <car-head :avatar="require('../../assets/news/01.jpg')">
      <div slot="bream" class="bream">
        <el-breadcrumb-item></el-breadcrumb-item>
      </div>
    </car-head>

    <!-- 内容部分 -->
    <div>
      <div class="content">
        <div class="content-title"><h1>8种房车营地，总有一款适合你</h1></div>
        <div class="content-top">
          <div class="time">
             <span>发表时间，2022</span>
          <span>浏览量：133</span>
          </div>
         
        </div>
        <!-- 内容部分 -->
        <div class="detail">
          <p>如果说移动的家，那么房车营地就是移动之家的停靠港湾</p>
          <p>房车营地是指为房车旅行提供车辆停泊，住宿，餐饮及休闲娱乐的场所</p>
          <p>根据营地的地理位置，自然风光，配套设施等，大致有如下区分</p>
        </div>
        <!-- 详情图片 -->
        <div class="pic">
          <img src="../../assets/news/detail01.jpg" alt="" />
        </div>
            <!-- 假数据 -->
          <div class="detail">
          <p>如果说移动的家，那么房车营地就是移动之家的停靠港湾</p>
          <p>房车营地是指为房车旅行提供车辆停泊，住宿，餐饮及休闲娱乐的场所</p>
          <p>根据营地的地理位置，自然风光，配套设施等，大致有如下区分</p>
        </div>
        <!-- 详情图片 -->
        <div class="pic">
          <img src="../../assets/news/detail01.jpg" alt="" />
        </div>

          <!-- 假数据 -->
          <div class="detail">
          <p>如果说移动的家，那么房车营地就是移动之家的停靠港湾</p>
          <p>房车营地是指为房车旅行提供车辆停泊，住宿，餐饮及休闲娱乐的场所</p>
          <p>根据营地的地理位置，自然风光，配套设施等，大致有如下区分</p>
        </div>
        <!-- 详情图片 -->
        <div class="pic">
          <img src="../../assets/news/detail01.jpg" alt="" />
        </div>

            <div class="detail">
          <p>如果说移动的家，那么房车营地就是移动之家的停靠港湾</p>
          <p>房车营地是指为房车旅行提供车辆停泊，住宿，餐饮及休闲娱乐的场所</p>
          <p>根据营地的地理位置，自然风光，配套设施等，大致有如下区分</p>
        </div>
       
        
      </div>
      
    </div>

    <!-- 页脚 -->
    <foot></foot>
    <!-- 回到顶部 -->
    <go-top></go-top>
  </div>
</template>

<script>
import CarHead from '../../components/CarHead.vue'
import NavMenu from '../../components/NavMenu'
import Foot from '../../components/Foot.vue'
import GoTop from '../../components/GoTop.vue'
export default {
  components: {
    CarHead,
    NavMenu,
    Foot,
    GoTop,
  },
}
</script>

<style lang="scss" scoped>
p,h1,ul,ol{
  margin: 0;
  padding: 0;
}
.content {
  width: 1200px;
  margin: 0 auto;
  /* background-color:olivedrab; */
  > .content-title {
    margin: 54px 0 36px;
    > h1 {
      display: block;
      font-size: 18px;
      color: #545454;
      font-weight: normal;
      text-align: center;
    }
  
  }
  >.content-top{
    width: 1200px;
  margin: 0 auto;
     
    background-color: #e9e9e9;
    height: 32px;
    line-height: 32px;
  >.time{
    display: flex;

    justify-content: space-between;

    width: 250px;
    margin: 0 auto;
    >span{
       color: #777;
    font-size: 12px;
    }
  }
  }
  >.detail{
    >p{
      text-indent: 2em;
          display: block;
    margin-bottom: 1.2em;
    font-size: 14px;
    color: #777;
    line-height: 1.7;
    }
  }
  >.pic{
     width: 1200px;
 
      text-align: center;
    margin: 6px auto;
      padding: 3px;
    >img{
 
      width: 356px;
    height: 650px;
    }
  }
}
</style>
