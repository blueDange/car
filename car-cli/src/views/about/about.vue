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
      <h1>关于我们</h1>
      <div>
        <p>
          环球营地房车隶属于上海超翼汽车销售服务有限公司，是专业的房车露营基地设计咨询运营一站式服务平台。提供的业务包括：房车营地规划设计、营地房车销售租赁、露营基地运营管理。
        </p>
        <p>
          环球营地房车立足于设计之都上海，由专业露营地建设团队一手打造，专注于露营地的解决方案，从选址开始至项目策划、规划设计、房车购买和后期运营管理为一体的专业房车营地平台。
        </p>
        <p>
          环球营地房车结合国内外营地发展的研究，团队专注于户外休闲产品设计、场地设计，建筑景观设计等与郊野休闲度假产业相关的研究，积累了大量成熟的案例作品。
          房车部落坚持从场地出发，集合并提升优势要素，打造高品质的户外营地产品，从而真正实现了营地与中国旅游休闲度假发展的完美契合。
        </p>
      </div>
      <img src="../../assets/about/02.jpg" alt="" />
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
