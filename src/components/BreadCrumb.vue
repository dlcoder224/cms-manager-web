<template>
  <el-breadcrumb :separator-icon="ArrowRight">
    <el-breadcrumb-item v-for="(item, index) of breadList" :key="item.path">
      <router-link to="/homeIndex" v-if="index === 0">{{
        item.meta.title
      }}</router-link>
      <span v-else>{{ item.meta.title }}</span>
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script setup>
import { computed, onMounted, ref } from "@vue/runtime-core";
import { useRoute } from "vue-router";
import { ArrowRight } from "@element-plus/icons-vue";

const route = useRoute();
const breadList = computed(() => {
  return route.matched;
});

onMounted(() => {
  console.log(route.matched, "route");
});
</script>

<style lang="scss" scoped>
</style>