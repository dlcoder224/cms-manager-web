<template>
  <div class="login-wapper">
    <div class="model">
      <el-form :model="user" status-icon :rules="userRules" ref="userFormRef">
        <div class="title">地球</div>
        <el-form-item prop="userName">
          <el-input type="text" placeholder="请输入用户名" prefix-icon="User" v-model="user.userName"></el-input>
        </el-form-item>
        <el-form-item prop="userPwd">
          <el-input type="password" placeholder="请输入密码" prefix-icon="View" v-model="user.userPwd"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" class="btn-login" @click="login(userFormRef)">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script setup>
import { getCurrentInstance, reactive, ref } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

const store = useStore();
const router = useRouter()
const {
  proxy: { $api },
} = getCurrentInstance();

const user = reactive({
  userName: 'admin',
  userPwd: 'admin'
});

const userRules = reactive({
  userName: [
    { required: true, message: "请输入用户名", trigger: "blur" },
    { min: 3, max: 15, message: "长度在3~15之间", trigger: "blur" },
  ],
  userPwd: [{ required: true.valueOf, message: "请输入密码", trigger: "blur" }],
});

const userFormRef = ref();

const login = async (formEl) => {
  if (!formEl) return;
  await formEl.validate((valid, fields) => {
    if (valid) {
      $api
        .login(user)
        .then((res) => {
          const { userName } = res
          store.commit("saveUserInfo", res);
          ElMessage.success(`${userName}登录成功`)
          router.push('/homeIndex')
        })
        .catch((err) => { });
    } else {
      console.log("error submit!", fields);
    }
  });
};
</script>

<style lang="scss" scoped>
.login-wapper {
  height: 100%;
  display: flex;
  background-color: #f9fcff;

  .model {
    margin: auto;
    margin-top: 10%;
    width: 25%;
    padding: 50px;
    background-color: #fff;
    box-shadow: 0px 0px 10px 3px #c7c9cb4d;

    .title {
      font-size: 50px;
      line-height: 1.5;
      text-align: center;
      margin-bottom: 30px;
    }

    .btn-login {
      width: 100%;
    }
  }
}
</style>