<template>
  <div class="main-container">
    <div class="left-box">
      <el-row>
        <el-col :span="1">
          <el-icon v-if="isCollapse" @click="handleCollapse"><Fold /></el-icon>
          <el-icon v-else @click="handleCollapse"><Expand /></el-icon>
        </el-col>
        <el-col :span="23">
          <bread-crumb />
        </el-col>
      </el-row>
    </div>
    <div class="right-box">
      <el-badge :is-dot="noticeCount" class="notice" type="danger">
        <el-icon><Bell /></el-icon>
      </el-badge>
      <el-dropdown @command="handleLogout">
        <span class="el-dropdown-link">
          {{ userInfo.userName }}
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item command="email">邮箱：</el-dropdown-item>
            <el-dropdown-item command="logout">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from "@vue/reactivity";
import { computed, getCurrentInstance, onMounted } from "@vue/runtime-core";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

const store = useStore();
const router = useRouter();
const userInfo = store.state.userInfo;

const isCollapse = computed(() => {
  return store.state.isCollapse;
});
const noticeCount = ref(0);
const {
  proxy: { $api },
} = getCurrentInstance();

onMounted(() => {
  getNoticeCount();
});

const getNoticeCount = async () => {
  const count = await $api.noticeCount();
  noticeCount = count.value;
};

const handleLogout = (key) => {
  if (key === "email") return;
  store.commit("saveUserInfo", "");
  userInfo.values = {};
  router.push("/login");
};

const handleCollapse = () => {
  store.commit("handleCollapse", !isCollapse.value);
};
</script>

<style lang="scss" scoped>
.main-container {
  width: 100%;
  height: 50px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ddd;
  .left-box {
    margin-left: 20px;
    flex: 1;
    .el-icon {
      cursor: pointer;
    }
  }
  .right-box {
    flex: 1;
    margin-right: 30px;

    display: flex;
    flex-direction: row;
    justify-content: end;
    .el-badge {
      cursor: pointer;
    }

    .notice {
      height: 30px;
      line-height: 20px;
      margin-top: 20px;
    }
    .el-dropdown {
      margin-left: 10px;
      margin-top: 5px;
      cursor: pointer;
      color: #409eff;
    }
  }
}
</style>