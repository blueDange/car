<template>
  <div>
    <!-- 头部导航 -->
    <nav-menu></nav-menu>
    <div class="block">
      <el-carousel trigger="click">
        <el-carousel-item v-for="(item, i) in pic" :key="i">
          <img :src="item" alt="" />
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="about">
      <el-divider content-position="center"><h1 style="color:#5cb95f">关于我们</h1></el-divider>
      <div class="container">
        <div class="box1" @click="$router.push('/about')">
          <h3>环球营地房车</h3>
          <p>
            环球营地房车隶属于上海超翼汽车销售服务有限公司，是专业的房车露营基地设计咨询运营一站式服务平台。提供的业务包括：房车营地规划设计、营地房车销售租赁、露营基地运营管理。
            环球营地房车立足于设计之都上海，由专业露营地建设团队一手打造，专注于露营地的解决方案，从选址开始至项目策划、规划设计、房车购买和后期运营管理为一体的专业房车营地平台。
          </p>
          <div class="btn">查看详情</div>
        </div>
        <div class="box2" @click="$router.push('/initialPlan')">
          <img src="@/assets/home/about1.jpg" alt="" />
          <p>前期规划</p>
        </div>
        <div class="box2" @click="$router.push('/com/list')">
          <img src="@/assets/home/about2.jpg" alt="" />
          <p>产品选购</p>
        </div>
        <div class="box2" style="margin-right: 0px" @click="$router.push('/latePromotion')">
          <img src="@/assets/home/about3.jpg" alt="" />
          <p>后期推广</p>
        </div>
      </div>
    </div>
    <div class="product">
      <el-divider content-position="center"
        ><h1 style="color:#5cb95f">营地房车产品选购</h1></el-divider
      >
      <div class="btnbox">
        <div class="btn" @click="$router.push(`com/list`)">8米营地车房</div>
        <div class="btn" @click="$router.push(`com/list`)">10米营地车房</div>
        <div class="btn" @click="$router.push(`com/list`)">13米营地车房</div>
        <div class="btn" @click="$router.push(`com/list`)">免维护木屋房车</div>
      </div>
      <div class="pic">
        <div  @click="$router.push(`com/detail`)">
          <img src="@/assets/home/pro1.jpg" alt="" />
          <div class="text">
            <p>8米超观景版营地房车</p>
            <div>查看更多+</div>
          </div>
        </div>
        <div  @click="$router.push(`com/detail`)">
          <img src="@/assets/home/pro2.jpg" alt="" />
          <div class="text">
            <p>10米超观景营地房车麻将款</p>
            <div>查看更多+</div>
          </div>
        </div>
        <div @click="$router.push(`com/detail`)">
          <img src="@/assets/home/pro3.jpg" alt="" />
          <div class="text">
            <p>13米超观景五行级版营地房</p>
            <div>查看更多+</div>
          </div>
        </div>
        <div @click="$router.push(`com/detail`)">
          <img src="@/assets/home/pro4.jpg" alt="" />
          <div class="text">
            <p>10米超观景VIP版营地房</p>
            <div>查看更多+</div>
          </div>
        </div>
      </div>
    </div>
    <!-- 成功案例 -->
    <div class="br">
      <el-divider content-position="center"
        ><h1 style="color: #5cb95f">营地房车成功案例</h1></el-divider
      >
    </div>
    <div class="success">
      <div class="box">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div
              class="swiper-slide"
              v-for="(item, i) in card"
              :key="i"
              @click="$router.push(`success-deta/${item.sid}`)"
            >
              <div class="pic">
                <img :src="require('@/assets/success/' + item.pic1)" alt="" />
              </div>
              <p>{{ item.title }}</p>
            </div>
          </div>
          <div class="swiper-button-prev swiper-button-white"></div>
          <div class="swiper-button-next swiper-button-white"></div>
        </div>
      </div>
    </div>
    <!-- 营地房车新闻资讯 -->
    <div class="new">
      <el-divider content-position="center"
        ><h1 style="color: #5cb95f">营地房车新闻资讯</h1></el-divider
      >
      <div class="center">
        <div class="pic">
          <img src="@/assets/home/new1.jpg" alt="" />
          <p>8大类型房车营地，总有一款适合你！</p>
        </div>
        <div class="right">
          <div class="item" v-for="(item, i) in news" :key="i">
            <div class="time">{{ item.time.split("-")[0] }}</div>
            <div class="text">
              <h4>{{ item.text }}</h4>
              <p>{{ item.content }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="btn" @click="$router.push('/newsList')">查看更多</div>
    </div>
    <!-- 营地房车合作伙伴 -->
    <div class="partner">
      <el-divider content-position="center"
        ><h1 style="color: #5cb95f">营地房车合作伙伴</h1></el-divider
      >
      <div class="pic">
        <div v-for="(item, i) in partner" :key="i">
          <img :src="item" alt="" />
        </div>
      </div>
    </div>
    <!-- 脚部 -->
    <Foot></Foot>
    <GoTop></GoTop>
  </div>
</template>

<script>
import NavMenu from "@/components/NavMenu";
import Foot from "../components/Foot.vue";
import "swiper/dist/css/swiper.min.css";
import Swiper from "swiper";
import GoTop from "../components/GoTop.vue";
import httpApi from "../http/index";
export default {
  data() {
    return {
      keyword: "",
      pic: [
        require("@/assets/home/ban1.jpg"),
        require("@/assets/home/ban2.jpg"),
        require("@/assets/home/ban3.jpg"),
        require("@/assets/home/ban4.jpg"),
      ],
      card: [],
      news: [
        {
          time: "11-2022-01",
          text: "第二批5C、4C级自驾车旅居车营地名单公示",
          content:
            "依据《自驾车旅居车营地质量等级划分》行业标准及认定细则，中国旅游车船协会2021年在全国范围内开展了自驾车旅居车营地质量等级认定工作。现将第二..",
        },
      ],
      partner: [
        require("@/assets/home/par1.jpg"),
        require("@/assets/home/par2.jpg"),
        require("@/assets/home/par3.jpg"),
        require("@/assets/home/par4.jpg"),
        require("@/assets/home/par5.jpg"),
        require("@/assets/home/par6.jpg"),
      ],
    };
  },

  updated() {
    // 轮播图
    new Swiper(".swiper-container", {
      loop: true, // 循环模式选项
      slidesPerView: 4,
      slidesPerGroup: 1,
      // spaceBetween: 15,
      autoplay: {
        delay: 2500,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  },
  mounted() {
    // 首页成功案例
    httpApi.successApi.homepic().then((res) => {
      // console.log(res);
      this.card = res.data.data;
      console.log(this.card);
    });
  },
  created() {},
  components: {
    NavMenu,
    Foot,
    GoTop,
  },

  methods: {},
};
</script>

<style lang="scss" scoped>
.block {
  margin-bottom: 80px;
  img {
    object-fit: cover;
  }
}
.el-carousel__item {
  width: 100%;
  // height: 400px;
  margin: bottom 20px;
}
.el-carousel__item img {
  width: 100%;
  height: 100%;
}
.about {
  width: 1200px;
  margin: 60px auto;
  .container {
    margin-top: 60px;
    display: flex;
    .box1 {
      width: 50%;
      background-color: #f2f2f2;
      margin-right: 10px;
      padding: 30px;
      h3 {
        color: #5cb95f;
        font-weight: 400;
      }
      p {
        text-indent: 2em;
        letter-spacing: 5px;
        color: #828282;
        font-size: 12px;
        margin-top: 10px;
        line-height: 23px;
        padding: 5px;
      }
      .btn {
        width: 92px;
        height: 27px;
        margin-top: 10px;
        border: 1px solid black;
        color: #000;
        line-height: 27px;
        text-align: center;
      }
    }
    .box2 {
      background-color: #f2f2f2;
      margin-right: 10px;
      width: 186px;
      &:hover {
        background-color: #7a7a7a;
        color: #fff;
        transition: 0.5s;
      }
      p {
        text-align: center;
        line-height: 80px;
      }
    }
  }
}
.product {
  width: 1200px;
  margin: 0 auto 60px;
  .btnbox {
    display: flex;
    justify-content: center;
    margin-top: 60px;
    .btn {
      width: 170px;
      height: 48px;
      border-radius: 40px;
      background-color: #f2f2f2;
      color: #8d8d8d;
      margin-right: 30px;
      text-align: center;
      line-height: 48px;
    }
  }
  .pic {
    display: flex;
    div {
      width: 290px;
      margin-right: 10px;
      margin-top: 20px;
      position: relative;
      &:hover > div {
        display: block;
      }
      img {
        width: 100%;
      }
      .text {
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: -20px;
        background-color: rgba($color: black, $alpha: 0.4);
        display: none;
        p {
          border-top: 3px solid #fff;
          border-bottom: 3px solid #fff;
          width: 80%;
          margin: 50px auto;
          font-size: 18px;
          color: #fff;
          text-align: center;
          line-height: 25px;
        }
        div {
          width: 92px;
          height: 27px;
          border: 1px solid #fff;
          color: #fff;
          text-align: center;
          line-height: 27px;
          margin: 0 auto;
        }
      }
    }
  }
}
.br {
  width: 1200px;
  margin: 0 auto;
}
.success {
  background-color: #e9e9e9;
  margin: 60px 0;
  padding-top: 40px;
  > .box {
    width: 1200px;
    margin: 0 auto;
    .swiper-container {
      width: 100%;
      height: 260px;
      .swiper-slide {
        > div {
          width: 280px;
          height: 180px;
          border: 1px solid #d5d5d5;
          padding: 5px;
          img {
            width: 100%;
            height: 100%;
          }
        }
        p {
          text-align: center;
          padding: 15px 0;
        }
      }
    }
  }
}
.new {
  width: 1200px;
  margin: 60px auto;
  .center {
    display: flex;
    margin-top: 60px;
    .pic {
      width: 63%;
      margin-right: 50px;
      img {
        width: 100%;
      }
      p {
        color: #5c5c5c;
        font-size: 16px;
        margin-top: 10px;
      }
    }
    .right {
      .item {
        display: flex;
        border-bottom: 1px dotted #d1d1d1;
        margin-bottom: 20px;
        padding-bottom: 20px;
        .time {
          width: 65px;
          height: 65px;
          border: 1px solid #b2b2b2;
          text-align: center;
          line-height: 65px;
          margin-right: 20px;
          flex-shrink: 0;
        }
        .text {
          h4 {
            font-weight: 400;
            &:hover{
              color: #5cb95f;
            }
          }
          p {
            font-size: 12px;
            margin-top: 10px;
            color: #767676;
          }
        }
      }
    }
  }
  .btn {
    height: 36px;
    background-color: #dedede;
    text-align: center;
    line-height: 36px;
    margin-top: 10px;
  }
}
.partner {
  width: 1200px;
  margin: 60px auto;
  > .pic {
    margin-top: 60px;
    display: flex;
    justify-content: space-between;
    > div {
      width: 135px;
      border: 1px solid #b2b2b2;
      > img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
