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
    <div class="item">
      <h1>房车营地成功案例</h1>
      <div class="item-lists">
        <div
          class="item-list"
          v-for="(item, i) in list.data"
          :key="i"
          @click="$router.push(`success-deta/${item.sid}`)"
        >
          <img :src="require('@/assets/success/' + item.pic1)" alt="" />
          <div>{{ item.title }}</div>
          <button>查看详情</button>
        </div>
      </div>
    </div>
    <!-- 分页器 -->
    <div class="page">
      <el-pagination
        background
        layout="->,prev, pager, next"
        :total="list.total"
        :page-size="list.pagesize"
        :current-page="list.pno"
        @current-change="pageChange"
      >
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
import httpApi from "../../http";
import Foot from "../../components/Foot.vue";
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
      list: {},
    };
  },
  methods: {
    pageChange(pno) {
      console.log(pno);
      httpApi.successApi.list({ pno: pno, count: 6 }).then((res) => {
        console.log(res);
        this.list = res.data;
      });
    },
  },
  mounted() {
    httpApi.successApi.list({ pno: 1, count: 6 }).then((res) => {
      console.log(res);
      this.list = res.data;
    });
  },
};
</script>

<style lang="scss" scoped>
.item {
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;

  h1 {
    text-align: center;
    margin: 40px 0;
    font-weight: 400;
    color: #38b549;
  }

  .item-lists {
    margin-bottom: 20px;
    display: grid;
    justify-content: space-around;
    grid-gap: 40px 24px;
    grid-template-columns: repeat(3, 1fr);
    // transition: all 0.4s;

    .item-list {
      background-color: #f5f5f5;
      overflow: hidden;
      transition: all 0.4s linear;
      &:hover {
        background: #969696;
        transition: all 0.4s linear;
      }
      img {
        transform: scale(1);
        width: 100%;
        height: 200px;
        transition: all 0.4s linear;
      }
      &:hover img {
        transform: scale(1.1);
        width: 100%;
        transition: all 0.4s linear;
      }
      button {
        border: 1px solid #ccc;
        width: 100px;
        display: block;
        margin: auto;
        margin-bottom: 20px;
        color: #5f5f5f;
        cursor: pointer;

        img {
          display: block;
          width: 100%;
          // transition: all 0.4s;
        }
      }
      div {
        padding: 20px 0;
        width: 220px;
        margin: auto;
        color: #5f5f5f;
        text-align: center;
        /*第一步： 溢出隐藏 */
        overflow: hidden;
        /* 第二步：让文本不会换行， 在同一行继续 */
        white-space: nowrap;
        /* 第三步：用省略号来代表未显示完的文本 */
        text-overflow: ellipsis;
      }
    }
  }
}
.page {
  width: 1200px;
  margin: 0 auto;
  padding: 40px 0;
}
</style>
