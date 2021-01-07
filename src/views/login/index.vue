<template>
  <div class="d-flex j-center a-center h-100">
    <div class="login-box bg-light box">
      <p class="font-md font-weight text-center">vue通用框架登录</p>
      <el-form :model="loginForm" ref="loginForm">
        <el-form-item prop="addForm">
          <el-input
            v-model="loginForm.username"
            clearable
            placeholder="用户名"
            :class="{ 'border-bottom': showBorder.username }"
            @focus="onFocus('username', 'password')"
            @blur="onBlur('username')"
          ></el-input>
        </el-form-item>
        <el-form-item prop="addForm" style="margin-top: 25px">
          <el-input
            v-model="loginForm.password"
            clearable
            placeholder="密码"
            :class="{ 'border-bottom': showBorder.password }"
            @focus="onFocus('password', 'username')"
            @blur="onBlur('password')"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button
            style="width: 100%; height: 40px; margin-top: 20px"
            type="primary"
            @click="submit"
            :loading="loading"
            >登 录</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginForm: {
        username: "jerry",
        password: "123"
      },
      showBorder: {
        username: false,
        password: false
      },
      loading: false
    };
  },
  methods: {
    // 获得焦点
    onFocus(addName, removeName) {
      this.showBorder[addName] = true;
      this.showBorder[removeName] = false;
    },
    // 失去焦点
    onBlur(addName) {
      this.showBorder[addName] = false;
    },
    submit() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = true;
          this.$store.dispatch("user/asyncLogin", this.loginForm).then(() => {
            setTimeout(() => {
              this.$message.success("登录成功");
              this.$router.push({
                name: "Home"
              });
              this.loading = false;
            }, 2000);
          });
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.login-box {
  width: 40%;
  // height: 50%;
  padding: 100px 260px;
}
.mute-border {
  border: 1px solid #dcdfe6;
}
::v-deep {
  .el-input__inner {
    height: 60px;
    border: none;
  }
}
</style>
