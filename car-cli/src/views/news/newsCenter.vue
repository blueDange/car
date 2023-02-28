<template>
  <div>
    <nav-menu></nav-menu>
    <car-head :avatar="require('../../assets/news/news-banner.jpg')">
      <div slot="bream" class="bream">
        <el-breadcrumb-item></el-breadcrumb-item>
      </div>
    </car-head>
    <!-- 主体内容 -->
    <div class="content">
      <h1>搜索页</h1>
      <div class="cont1">
        <div class="c-left">
            <div class="l-time">
              <p>14</p>
              
              <span>2020-01-14</span>
            </div>
            <img src="http://www.maichelive.com/uploads/litimg/news/220113.jpg" alt="">
        </div>
        <div class="c-right">
          <div>
            <a href="">8大类型房车营地，总有一款适合你！</a>
            <span>浏览：167次</span>
            <p>如果说房车是移动的家，那么，房车营地就是移动之家的停靠港湾。 什么是房车营地？ 房车营地是指为房车旅游提供车辆停泊、住宿、餐饮以及休闲娱乐等服务的场所。房车营地内除...</p>
          </div>
          <div>
            <a href="">查看详情</a>
          </div>
        </div>
      </div>
      <div class="c-line"></div>
      <el-pagination
  background
  small
  layout="prev, pager, next"
  :total="50">
</el-pagination>
    </div>
    <!-- 页脚 -->
    <foot></foot>
    <!-- 回到顶部 -->
    <go-top></go-top>
  </div>
</template>

<script>
import CarHead from "../../components/CarHead.vue";
import NavMenu from "../../components/NavMenu";
import Foot from "../../components/Foot.vue";
import GoTop from "../../components/GoTop.vue";
export default {
  components: {
    CarHead,
    NavMenu,
    Foot,
    GoTop,
  },
  mounted () {
    console.log(this.$route.query.keyword);;
  },
};
</script>

<style lang="scss" scoped>
.content {
  width: 1200px;
  margin: 0 auto 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  > h1 {
    font-weight: normal;
    margin: 60px 0;
  }
  >.cont1{
    display: flex;
    border-bottom: 1px dashed #545454;
    padding-bottom: 30px;
    >.c-left{
      display: flex;
     
      >.l-time{
        margin: 50px 50px;
        display: flex;
        flex-direction: column;
        width: 120px;
        height: 31px;
        
        p{
        padding-bottom: 10px;
        font-weight: bold;
        text-align: center;
        font-size: 31px;
        color: black;
        border-bottom: 1px solid #838383;
       
      }
      
      span{
        padding-top: 20px;
        font-size: 12px;
        text-align: center;
      }
      }
      
      img{
        width: 300px;
        height: 180px;
      }
    }
    >.c-right{
      padding-left: 50px;
      width: 680px;
      height: 180px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

     div:first-child{
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 100px;
      a{
        color: #545454;
        font-size: 16px;
         &:hover{
        color: lightgreen;
      }
      }
     
     }
     div:last-child{
      width: 146px;
      height: 40px;
      border: 1px solid #545454;
      display: flex;
      justify-content: center;     
      align-items: center;
      &:hover{
        background-color: #777;
        a{
          color: white;
        }
        
      }
      
      a{
        color: #545454;
       
      }
     }
    }
  }
  >.c-line{
    padding-bottom: 50px;
  }
  > div {
    color: #777;
    font-size: 14px;
    >p{
        margin-bottom: 15px;
        line-height: 23px;
        text-indent: 2em;
    }
  }
}
</style>
