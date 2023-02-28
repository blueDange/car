<template>
  <div>
    <div class="box">
      <nav-menu></nav-menu>
      <div class="content">
        <h2>选购意向</h2>
        <el-form ref="form" :model="form" :rules="rules">
          <el-form-item prop="uname">
            <el-input v-model="form.uname" placeholder="您的称呼"></el-input>
          </el-form-item>
          <el-form-item prop="phone">
            <el-input v-model="form.phone" placeholder="联系方式"></el-input>
          </el-form-item>
          <el-form-item prop="uadd">
            <div class="block">
              <el-cascader
                v-model="form.uadd"
                :options="options"
                collapse-tags
                clearable
                :value="options.label"
              ></el-cascader>
            </div>
          </el-form-item>
          <el-form-item prop="type">
            <el-select
              v-model="form.type"
              placeholder="请选择类型"
              class="select"
            >
              <el-option
                v-for="(item, i) in titles"
                :key="i"
                :value="item.title"
              >
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item prop="code">
            <el-input
              type="textarea"
              :rows="2"
              placeholder="请尽量写出您的需求，例如外观，地点要求 "
              v-model="form.code"
            >
            </el-input>
          </el-form-item>
          <el-form-item>
            <el-button class="btn" @click="onSubmit">立即创建</el-button>
          </el-form-item>
        </el-form>
      </div>
      <!-- <foot></foot> -->
    </div>
  </div>
</template>

<script>
import NavMenu from "../../components/NavMenu";
import Foot from "../../components/Foot.vue";
import GoTop from "../../components/GoTop.vue";
import httpApi from "../../http";
export default {
  components: {
    NavMenu,
    Foot,
    GoTop,
  },
  computed: {
    // mapState将开放vue中保存的user对象到当前组件的计算属性
    // ...mapState(['userInfo'])
    // 计算属性 user 返回vuex中保存的user对象
    userInfor() {
      return this.$store.state.userInfor;
    },
  },
  data() {
    return {
      titles: [],
      form: {
        uname: this.$store.state.userInfo
          ? this.$store.state.userInfo.uname
          : "",
        phone: this.$store.state.userInfo
          ? this.$store.state.userInfo.phone
          : "",
        type: "",
        uadd: "",
        code: "",
      },
      rules: {
        uname: [{required:true, message:'必填',trigger:'blur'}],
        phone: [{required:true, message:'必填',trigger:'blur'}],
        type: [{required:true, message:'必填',trigger:'blur'}],
        uadd: [{required:true, message:'必填',trigger:'blur'}],
      },
      options: [
        {
          value: "上海",
          label: "上海",
          children: [
            { value: "普陀", label: "普陀" },
            { value: "黄埔", label: "黄埔" },
            { value: "徐汇", label: "徐汇" },
          ],
        },
        {
          value: "江苏",
          label: "江苏",
          children: [
            { value: "南京", label: "南京" },
            { value: "苏州", label: "苏州" },
            { value: "无锡", label: "无锡" },
          ],
        },
        {
          value: "浙江",
          label: "浙江",
          children: [
            { value: "杭州", label: "杭州" },
            { value: "宁波", label: "宁波" },
            { value: "嘉兴", label: "嘉兴" },
          ],
        },
      ],
    };
  },
  methods: {
    onSubmit() {
      let params = {
            uname: this.form.uname,
            phone: this.form.phone,
            type: this.form.type,
            uadd: this.form.uadd[0] + "/" + this.form.uadd[1],
            code: this.form.code,
          };
      // console.log(this.form);
      this.$refs["form"].validate((valid) => {
        if (valid) {
          
          httpApi.userApi.intention(params).then((res) => {
            this.$message({
              message: `提交成功`,
              type: "success",
            });
            this.$refs.form.resetFields();
          });
        }
      });
    },
  },
  mounted() {
    //
    httpApi.prosetApi.title().then((res) => {
      console.log(res);
      this.titles = res.data.data;
    });
  },
};
</script>

<style lang="scss" scoped>
.box {
  height: 100vh;
  background: url(../../assets/home/ban2.jpg) no-repeat;
  background-size: cover;
}
.content {
  //   background-color: #fff;
  width: 500px;
  //   height: 400px;
  border: 3px solid #5cb95f;
  border-radius: 0.9375rem;
  box-shadow: 0.3125rem 0.3125rem 0.3125rem #5cb95f;
  padding: 0.625rem 2.25rem;
  position: absolute;
  top: 20%;
  left: 50%;
  h2 {
    text-align: center;
    padding: 0.625rem 0;
    border-bottom: 1px solid #5cb95f;
    margin-bottom: 1.25rem;
    color: #5cb95f;
  }

  .btn {
    border: none;
    padding: 0.9375rem 0.625rem;
    margin-top: 0.225rem;
    width: 100%;
    color: #fff;
    background: #5cb95f;
    border-radius: 0.625rem;
  }
}
.select {
  width: 100%;
}
</style>
