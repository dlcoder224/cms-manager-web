<template>
  <div :class="['nav-total', isCollapse ? 'nav-total' : 'unfold']">
    <!-- 系统logo -->
    <div :class="['logo', isCollapse ? 'logo' : 'unfold']">
      <!-- <img src="" alt="" />
      <span>Manager</span> -->
    </div>
    <!-- menu菜单 -->
    <el-menu
      :collapse="!isCollapse"
      :default-active="activeMenu"
      background-color="#001529"
      text-color="#ffffff"
      unique-opened
      class="nav-menu"
      @open="handleOpen"
      @close="handleClose"
    >
      <template v-for="menu of menuList" :key="menu.id">
        <el-sub-menu
          v-if="
            menu.children &&
            menu.children.length &&
            menu.children[0].menuType == 1
          "
        >
          <template #title>
            <i :class="menu.cion"></i>
            <span>{{ menu.menuName }}</span>
          </template>
        </el-sub-menu>
        <el-menu-item v-else-if="menu.menuType == 1" :index="menu.path">
          {{ menu.menuName }}
        </el-menu-item>
      </template>
    </el-menu>
  </div>
</template>

<script setup>
import {
  computed,
  getCurrentInstance,
  onMounted,
  reactive,
  ref,
} from "@vue/runtime-core";
import { useStore } from "vuex";

const store = useStore();
const {
  proxy: { $api },
} = getCurrentInstance();

const isCollapse = computed(() => {
  return store.state.isCollapse;
});
const menuList = reactive([]);
const activeMenu = ref("");

onMounted(() => {
  // getMenuList();
});

const getMenuList = async () => {
  const list = await $api.getMenuList();
  menuList = list.value;
};
</script>

<style lang="scss" scoped>
.nav-total {
  width: 200px;
  height: 100%;
  color: #ffffff;
  overflow: auto;
  transition: width 0.25s;
  -webkit-transition: width 0.25s;
  -moz-transition: width 0.25s;
  -webkit-transition: width 0.25s;
  -o-transition: width 0.25s;
  background-color: #001529;

  display: flex;
  flex-direction: column;

  .logo {
    width: 100%;
    height: 50px;
    font-size: 18px;

    display: flex;
    align-items: center;

    // img {
    //   margin: 0 16px;
    //   width: 32px;
    //   height: 32px;
    // }
  }
  .nav-menu {
    width: 100%;
    height: 100%;
    border: none;
  }
}
.unfold {
  width: 64px;
}
</style>