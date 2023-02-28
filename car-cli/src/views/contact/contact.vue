<template>
  <div>
    <nav-menu></nav-menu>
    <car-head :avatar="require('../../assets/contact/01.jpg')">
      <div slot="bream" class="bream">
        <el-breadcrumb-item></el-breadcrumb-item>
      </div>
    </car-head>
    <!-- 主体 -->
    <div class="content">
      <h1>上海房车露营地规划建设运营公司</h1>
      <h3>房车营地建设规划/营地房车车型选购/营地后期推广运营</h3>
      <div>
        <ul>
          <li>
            <i class="el-icon-phone-outline"></i
            ><span class="phone">加盟热线</span>
            <p>18916771830</p>
          </li>
          <li>
            <i class="el-icon-phone-outline"></i
            ><span class="phone">联系邮箱</span>
            <p>690071750@qq.com</p>
          </li>
          <li>
            <i class="el-icon-office-building"></i
            ><span class="addr">公司传真</span>
            <p>18916771830</p>
          </li>
          <li>
            <i class="el-icon-office-building"></i
            ><span class="addr">公司地址</span>
            <p>上海市闵行区吴中路1858号</p>
          </li>
        </ul>
      </div>
    </div>
    <!-- 地图 -->
    <div id="container"></div>
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
import AMapLoader from "@amap/amap-jsapi-loader";
export default {
  components: {
    CarHead,
    NavMenu,
    Foot,
    GoTop,
  },
  data() {
    return {
      map: null,
    };
  },
  methods: {
    initMap() {
      window._AMapSecurityConfig = {
        securityJsCode: "e3b7b9325cef55ea1421dbf98e5fa271",
      };
      AMapLoader.load({
        key: "a49a456580aa8538e7694414b0692d01", // 申请好的Web端开发者Key，首次调用 load 时必填
        version: "2.0", // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
        plugins: [], // 需要使用的的插件列表，如比例尺'AMap.Scale'等
      })
        .then((AMap) => {
          this.map = new AMap.Map("container");
          this.map.setCenter([121.37, 31.17]);
          this.map.setZoom(16);
          var marker = new AMap.Marker({
            position: new AMap.LngLat(121.37, 31.17), // 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
            title: "上海市闵行区吴中路1858号",
          });
          this.map.add(marker);
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  mounted() {
    this.initMap();
  },
};
</script>

<style lang="scss" scoped>
.content {
  width: 1200px;
  margin: 0 auto;
  > h1 {
    font-weight: normal;
    margin: 60px 0;
    width: 100%;
    text-align: center;
  }
  > h3 {
    color: #676767;
    border-left: 3px solid #5cb95f;
    padding-left: 10px;
  }
  > div {
    border-top: 1px solid #e1e1e1;
    border-bottom: 1px solid #e1e1e1;
    padding: 20px 0;
    margin: 20px 0 50px;
    ul,
    li {
      list-style: none;
    }
    ul {
      display: flex;
    }
    li {
      margin-right: 80px;
      i {
        color: #5cb95f;
        font-weight: 700;
        font-size: 20px;
        margin-right: 10px;
      }
      span {
        color: #65657e;
        font-size: 20px;
      }
      p {
        margin-top: 10px;
        color: #8f8f8f;
      }
    }
  }
}
#container {
  width: 1200px;
  height: 350px;
  border: 1px solid black;
  margin: 10px auto 30px;
}
</style>
