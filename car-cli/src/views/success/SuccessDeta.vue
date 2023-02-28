<template>
  <div>
    <nav-menu></nav-menu>
    <car-head
      :avatar="require('../../assets/productselection/productselection.jpg')"
    >
      <div slot="bream" class="bream">
        <el-breadcrumb-item></el-breadcrumb-item>
      </div>
    </car-head>
    <div class="content" v-for="(item ,i) in deta" :key="i">
      <p>{{item.title}}</p>
      <div class="pic">
        <img :src="require(`@/assets/success/` + item.pic1)" alt="" />
      </div>
      <div class="pic">
        <img :src="require(`@/assets/success/` + item.pic2)" alt="" />
      </div>
      <div class="pic">
        <img :src="require(`@/assets/success/` + item.pic3)" alt="" />
      </div>
    </div>
    <div class="der"></div>
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
import httpApi from '../../http';
import GoTop from '../../components/GoTop.vue';
export default {
  components: {
    CarHead,
    NavMenu,
    Foot,
    GoTop,
  },
  data() {
    return {
        deta:{}
    }
  },
  mounted () {
    let params = { sid: this.$route.params.id };
    httpApi.successApi.deta(params).then(res=>{
        console.log(res);
        this.deta=res.data.data
        
    });
  },
};
</script>

<style lang="scss" scoped>
.content {
  width: 1200px;
  margin: 0 auto;
  p {
    width: 100%;
    text-align: center;
    margin: 50px 0;
  }
  > .pic {
    width: 100%;
    border: 1px solid #d5d5d5;
    margin-bottom: 10px;
    padding: 5px;
    > img {
      width: 100%;
    }
  }
}
.der{
    margin: 30px auto;
    width: 1200px;
    height: 50px;
    border-top: 1px solid #717171;
}
</style>
