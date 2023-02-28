<template>
  <div>
    <!-- 内容 -->
    <div class="item">
      <h1>{{ title }}</h1>
      <div class="item-lists">
        <div class="item-list" v-for="(item, i) in list.result" :key="i">
          <a @click="$router.push('/com/detail')">
            <img
              @click="
                $router.push({
                  path: '/com/detail',
                  query: { id: item.sid, title: item.title },
                })
              "
              :src="require('../../assets/productselection/' + item.pic)"
              alt=""
            />
          </a>
          <div>{{ item.title }}</div>
          <button
            @click="
              $router.push({
                path: '/com/detail',
                query: { id: item.sid, title: item.title },
              })
            "
          >
            查看详情
          </button>
        </div>
      </div>
    </div>
    <!-- 页码 -->
    <div class="pagination">
      <el-pagination
        layout="prev, pager, next"
        background
        :total="list.total"
        :current-size="list.pno"
        :page-size="list.count"
        @current-change="pageChange"
        :current-page="cpage"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
import httpApi from '../../http'
import pubsub from 'pubsub-js'
export default {
  data() {
    return {
      title: '露营地房车产品选购',
      cpage: 1,
      list: {
        pno: 1,
        count: 6,
        total: 10,
        result: [],
      },
      type: 0,
    }
  },
  methods: {
    sendId(params) {
      pubsub.publish('sendId', params)
      this.$router.push('/com/detail')
    },
    // 当前页码
    pageChange(pno) {
      this.cpage = pno
      console.log('==', pno)
      this.list.pno = pno
      // 查询全部是0
      if (this.type == 0) {
        this.typeList(0)
      } else {
        // 模糊查询
        this.typeList(this.type)
      }
    },
    // 查询所有
    typeList(type) {
      console.log(type)
      if (type == 0) {
        let params = { pno: this.list.pno, count: this.list.count }
        httpApi.prosetApi.prosetlist(params).then(res => {
          this.list = res.data.data
          console.log(res.data)
        })
      } else {
        let params = {
          pno: this.list.pno,
          count: 6,
          type: type,
        }
        this.cpage = 1
        // 模糊查询
        httpApi.prosetApi.prosettype(params).then(res => {
          console.log(res)
          this.list = res.data.data
          console.log(this.list.pno)
          // this.pageChange(this.list.pno)
        })
      }
    },

    // mohuList(type) {
    //   let params = {
    //     pno: this.list.pno,
    //     count: 6,
    //     type: type,
    //   }
    //   httpApi.prosetApi.prosettype(params).then(res => {
    //     console.log(res)
    //     this.list = res.data.data
    //     console.log(this.list.pno)
    //     this.pageChange(this.list.pno)
    //   })
    // },
  },
  mounted() {
    // 页面加载时加载所有列表
    this.typeList(this.type)
    pubsub.subscribe('typeChange', (_, b) => {
      // 消息订阅-类型
      this.type = parseInt(b)
      console.log('有人发布了消息', this.type)
      this.list.pno = 1
      this.typeList(this.type)
    })
  },
}
</script>

<style lang="scss" scoped>
.item {
  max-width: 1230px;
  min-width: 1200px;
  margin: 0 auto;
  width: 100%;

  h1 {
    text-align: center;
    margin: 40px 0;
    font-weight: 400;
    color: #38b549;
  }

  .item-lists {
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
        transition: all 0.4s linear;
      }
      &:hover img {
        transform: scale(1.1);
        width: 100%;
        transition: all 0.4s linear;
        cursor: pointer;
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
        width: 200px;
        margin: auto;
        color: #5f5f5f;
      }
    }
  }
}

.pagination {
  width: 100px;
  padding: 100px 0 30px 0;
  margin: 0 auto;
  display: flex;
  justify-content: center;
}
</style>
