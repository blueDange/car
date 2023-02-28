<template>
  <div>
    <div style="background-color: #525252">
      <div class="cont">
        <div class="item">
          <i
            class="text"
            style="
              color: #fff;
              font-size: 16px;
              border-left: 1px solid #38b549;
              padding-left: 8px;
            "
          >
            环球营地房车</i
          >
          <i class="el-icon-s-home text">上海市闵行区吴中路1858号 </i>
          <i class="el-icon-phone text">18916771830</i>
          <i class="el-icon-chat-round text">690071750@qq.com</i>
        </div>
        <div class="about" style="color: #fff; font-size: 16px">关于我们</div>
        <div class="xuan text">
          <p style="color: #fff; font-size: 16px; text-align: center;">产品选购</p>
          <div style="display: flex;flex-direction: column;">
            <el-link type="info" :underline="false">8米营地房车</el-link
            ><el-link type="info" :underline="false">10米营地房车</el-link
            ><el-link type="info" :underline="false">13米营地房车</el-link
            ><el-link type="info" :underline="false">免维护木屋房车</el-link>
          </div>
        </div>
        <div class="clla" style="color: #fff; font-size: 16px">联系我们</div>
      </div>
    </div>

    <div class="foot">
      <div>
        Copyright © 2021
        营地房车|营地拖挂房车|环球营地房车|营地房车价格|营地房车报价|营地房车品牌|官方网站
        版权所有 技术支持：梦拓科技
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.cont {
 
  display: flex;
  justify-content: space-between;
  width: 1296px;
  height: 200px;

  margin: 0 auto;
  padding: 39px 0 0;
}
.item {
  width: 610px;
  height: 131px;
  display: flex;
  flex-direction: column;
  //   line-height: 16px;
  margin: 0 0 40px;
  padding: 0 40px;
}
.text {
  // display: block;
  height: 33px;
  color: #b9b9b9;
  font-size: 13px;
  line-height: 33px;
}
.about {
  width: 109px;
  height: 175px;
  padding: 0 45px 0 0;
}
.xuan {
  width: 175px;
  height: 175px;
  padding: 0 45px;
  border-right: 1px solid wheat;
  border-left: 1px solid wheat;
}
.clla {
  width: 110px;
  height: 175px;
  padding: 0 0 0 45px;
}

.foot {
  width: 100%;
  background-color: #393939;
  > div {
    width: 1200px;
    margin: 0 auto;
    color: #fff;
    height: 60px;
    line-height: 60px;
    font-size: 14px;
  }
}
</style>
