<template>
  <div>
    <!-- head -->
    <div id="login">
      <!-- main -->
      <div class="txt">
        <h2>用户登录</h2>
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm">
          <el-form-item prop="name"
            ><el-input
              type="userName"
              v-model="ruleForm.name"
              autocomplete="off"
              placeholder="请输入6-10位用户名"
            ></el-input
          ></el-form-item>
          <el-form-item prop="pass">
            <el-input
              maxlength="8"
              minlength="6"
              type="password"
              v-model="ruleForm.pass"
              autocomplete="off"
              placeholder="请输入密码"
            ></el-input>
          </el-form-item>
          <el-form-item prop="checkPass"
            ><el-input
              type="password"
              v-model="ruleForm.checkPass"
              autocomplete="off"
              placeholder="请输入确定密码"
            ></el-input
          ></el-form-item>
          <el-form-item>
            <el-button class="login" @click="submitForm('ruleForm')"
              >登录</el-button
            >
            <el-button class="reg" @click="goReg">注册</el-button>
          </el-form-item>
          <!-- <button class="login" @click="submitForm('ruleForm')">
              用户登录
            </button>
            <button  @click="goReg">用户注册</button> -->
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    var validateName = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入6-10位用户名"));
      } else if (value.length >= 6 && value.length <= 10) {
        callback();
      } else {
        callback(new Error("用户名长度不正确"));
      }
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入6-8位密码"));
      } else if (value.length >= 6 && value.length <= 8) {
        callback();
      } else {
        callback(new Error("密码长度不正确"));
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        name: "",
        pass: "",
        radio: false,
      },
      rules: {
        name: [{ validator: validateName, trigger: "blur" }],
        pass: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
      },
    };
  },
  methods: {
    // 登录接口调用
    async login() {
      const url = "/user/login";
      const res = await this.$http.post(url, { params: this.ruleForm });
      console.log(res);
      if (res.code == 200) {
        // 这里使用dispatch改变数据
        this.$store.dispatch("login", res.userInfo).then(() => {
          this.$message({
            message: `恭喜你，登录成功,3 秒后跳转到首页`,
            type: "success",
          });
        });
        setTimeout(() => {
          this.$router.push("/");
        }, 3000);
        sessionStorage.setItem("store", JSON.stringify(this.$store.state));
	  }else{
		this.$message({
          message: `登录失败，重新登录`,
          type: "error",
        });
      }
    },
    submitForm(formName) {
      console.log(1);
      console.log(formName);
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.login();
        }
      });
    },
    goReg() {
      this.$router.push("/register");
    },
  },
};
</script>


<style lang="scss" scoped>
#login {
  margin: 0 auto;
  width: 100%;
  height: 100vh;
    background: url(../../assets/home/ban2.jpg) no-repeat;
  background-size: cover;
  position: relative;
  .txt {
    border: 3px solid #5cb95f;
    border-radius: 0.9375rem;
    box-shadow: 0.3125rem 0.3125rem 0.3125rem #5cb95f;
    width: 30rem;
    padding: 0.625rem 2.25rem;
    position: absolute;
    top: 20%;
    left: 50%;
    img {
      width: 100%;
      border-radius: 0.9375rem;
    }

    h2 {
      text-align: center;
      padding: 0.625rem 0;
      border-bottom: 1px solid #5cb95f;
      margin-bottom: 1.25rem;
      color: #5cb95f;
    }
    button {
      border: none;
      padding: 0.9375rem 0.625rem;
      margin-top: 0.225rem;
    }
    .login {
      width: 100%;
      color: #fff;
      background: #5cb95f;
      border-radius: 0.625rem;
    }
    .reg {
      color: #999;
      float: right;
      background: #fadc48;
    }
  }
}
</style>

