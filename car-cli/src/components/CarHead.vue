<template>
  <div>
    <div class="img">
      <img :src="avatar" alt="" />
    </div>
    <div class="content">
      <div class="head">
        <p class="house"></p>
        <!-- 面包屑导航 -->
        <el-breadcrumb
          class="header-left"
          separator-class="el-icon-arrow-right"
        >
          <el-breadcrumb-item v-for="(item, i) in $route.meta.nav" :key="i"
            ><router-link :to="item.path">
              {{ item.name }}</router-link
            ></el-breadcrumb-item
          >

          <slot name="bream"></slot>
        </el-breadcrumb>
        <slot name="right"></slot>
      </div>
    </div>

    <hr />
  </div>
</template>

<script>
export default {
  props: {
    avatar: {
      type: String,
    },
  },
}
</script>

<style lang="scss" scoped>
.content {
  max-width: 1230px;
  min-width: 1200px;
  margin: 0 auto;
}
.head {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 50px;
  line-height: 50px;

  .house {
    background-image: url('../assets/home.svg');
    width: 21px;
    height: 21px;
    background-size: cover;
    margin-right: 6px;
    // padding-right: 7px;
    display: inline-block;
    flex-shrink: 0;
  }
}
.img {
  img {
    display: block;
    width: 100%;
    margin-bottom: 10px;
  }
}
hr {
  margin-top: -1px;
  border: 0.3px solid #ccc;
  height: 0px;
}
.header-left {
  width: 510px;
  text-align: left;
}
</style>
