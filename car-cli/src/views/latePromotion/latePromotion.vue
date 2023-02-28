<template>
  <div>
    <nav-menu></nav-menu>
    <car-head :avatar="require('../../assets/about/01.jpg')">
      <div slot="bream" class="bream">
        <el-breadcrumb-item></el-breadcrumb-item>
      </div>
    </car-head>
    <!-- 主体内容 -->
    <div class="content">
      <h1>房车营地后期推广</h1>

      <el-table
        :data="tableData"
        :span-method="objectSpanMethod"
        border
        style="width: 100%; margin-top: 20px"
      >
        <el-table-column prop="id" label="营销分类" width="180"> </el-table-column>
        <el-table-column prop="name" label="明细"> </el-table-column>
        <el-table-column prop="amount1" label="主要形式和策略"> </el-table-column>
       
      </el-table>
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
  data() {
    return {
      tableData: [
        {
          id: "基础搭建类",
          name: "营销型官网（PC和WAP)。",
          amount1: "基于房车露营地官方平台（pc端、wap端）",
         
        },
        {
          id: "基础搭建类",
          name: "微信公共账号、博客、微博",
          amount1: "建立房车营地的粉丝集合/活动官方发布平台。",
         
        },
        {
          id: "口碑类",
          name: "百度等百科、问答、知道、文库。",
          amount1: "建立自己的品牌调性，可实时更新",
        },
        {
          id: "口碑类",
          name: "论坛、贴吧",
          amount1: "撰写原创论坛、贴吧",
        },
        {
          id: "VR全景",
          name: "拍摄制作",
          amount1: "航拍和制作，可以任何地方手机360度无死角观看营地任何角落",
        },
        {
          id: "自媒体",
          name: "今日头条、百家号、搜狐号、北京时间、大鱼号、一点资讯、企鹅号、凤凰号、东方号、新浪号、网易号、车家号...",
          amount1: "移动互联网的快速发展，目前信息流推广已经成为最大的流量入口。",
         
        },
        {
          id: "视频",
          name: "搜狐、腾讯、爱奇艺、优酷、土豆、火山小视频、抖音/快手、秒拍、美拍、好看...",
          amount1: "更直接的可以展现房车露营地的环境、项目、起到更好的直观的宣传作用。",
         
        },
        {
          id: "行业网站",
          name: "携程、美团、去哪儿、同程、途牛、驴妈妈、马蜂窝...",
          amount1: "入驻行业知名平台，分流游客流量",
         
        },
        {
          id: "SEM",
          name: "竞价推广",
          amount1: "根据游客搜索习惯投放",
         
        },
        {
          id: "SEO",
          name: "搜索引擎自然排名。",
          amount1: "百度、360、搜狗为首的搜索引擎优化精准旅游路线，长尾关键词优化，自发需求。",
         
        },
      ],
    };
  },
  components: {
    CarHead,
    NavMenu,
    Foot,
    GoTop,
  },
   methods: {
      arraySpanMethod({ row, column, rowIndex, columnIndex }) {
        if (rowIndex % 2 === 0) {
          if (columnIndex === 0) {
            return [1, 2];
          } else if (columnIndex === 1) {
            return [0, 0];
          }
        }
      },

      objectSpanMethod({ row, column, rowIndex, columnIndex }) {
        if (columnIndex === 0) {
          if (rowIndex % 2 === 0) {
            return {
              rowspan: 2,
              colspan: 1
            };
          } else {
            return {
              rowspan: 0,
              colspan: 0
            };
          }
        }
      }
    }
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
}
</style>
