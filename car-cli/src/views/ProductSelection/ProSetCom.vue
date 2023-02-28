<template>
  <div>
    <nav-menu></nav-menu>
    <div>
      <car-head
        :avatar="require('../../assets/productselection/productselection.jpg')"
      >
        <div slot="bream">
          <el-breadcrumb-item>{{ bream }}</el-breadcrumb-item>
        </div>
        <div class="header-right" slot="right">
          <el-menu
            active-text-color="#38b549"
            class="el-menu-demo"
            mode="horizontal"
          >
            <el-menu-item @click="typeChange(8)" type="this.type" index="1"
              >8米营地房车</el-menu-item
            >
            <el-menu-item @click="typeChange(10)" index="2"
              >10米营地房车</el-menu-item
            >
            <el-menu-item @click="typeChange(13)" index="3"
              >13米营地房车</el-menu-item
            >
            <el-menu-item @click="typeChange(1)" index="4"
              >免维护木屋房车</el-menu-item
            >
          </el-menu>
        </div>
      </car-head>
    </div>

    <!-- 内容 -->
    <router-view></router-view>
    <go-top></go-top>
    <foot></foot>
  </div>
</template>

<script>
import CarHead from '../../components/CarHead.vue'
import pubsub from 'pubsub-js'
import Foot from '../../components/Foot.vue'
import NavMenu from '../../components/NavMenu'
import GoTop from '../../components/GoTop.vue'

export default {
  components: {
    CarHead,
    Foot,
    NavMenu,
    GoTop,
    NavMenu,
  },

  data() {
    return {
      bream: '',
    }
  },
  methods: {
    typeChange(a) {
      pubsub.publish('typeChange', a)
      this.bream = a + '米'
      if (a == 1) {
        this.bream = '免维护'
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.header-right {
  display: flex;
  width: 685px;
  justify-content: space-around;
  margin-left: 496px;
  height: 50px;

  li {
    &:hover {
      border-bottom: 2px solid pink;
      color: pink;
    }
  }
}

.el-menu--horizontal > .el-menu-item {
  height: 50px;
  line-height: 49px;

  &:hover {
    color: #5cb95f !important;
  }
}
.el-dropdown-menu__item,
.el-menu-item {
  padding: 0 10px;
}
.el-dropdown-menu__item,
.el-menu-item {
  font-size: 13px;
}

.bream {
  display: inline;
}
</style>
