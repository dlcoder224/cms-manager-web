<template>
  <h1>
    <el-button type="primary">nihao</el-button>
    首页
  </h1>
</template>

<script setup>
import req from '@/config'
import { getCurrentInstance } from "@vue/runtime-core";

const {proxy: $http} = getCurrentInstance()

console.log($http,'http')
console.log(req.baseApi,'req')
// $http({})
</script>

<style lang="scss" scoped>
</style>