<template>
  <div>
    <el-backtop>
      <div class="backtop">
        <i class="el-icon-top"></i>
        <p>top</p>
      </div>
    </el-backtop>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.el-backtop {
  background-color: #5cb95f;
  width: 50px;
  height: 50px;
  &:hover {
    background-color: #5cb95f;
  }
  .backtop {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    i {
      color: #fff;
      font-size: 25px !important;
    }
    p {
      color: #fff;
      font-size: 12px;
    }
  }
}
</style>
