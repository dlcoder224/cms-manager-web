<template>
  <div class="basic-layout">
    <div class="nav-side">123</div>
    <div class="content-right">
      <div class="nav-top">123</div>
      <div class="wapper">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script setup>
import req from '@/config'
import { getCurrentInstance } from "@vue/runtime-core";

const {proxy: $http} = getCurrentInstance()


</script>

<style lang="scss" scoped>
.basic-layout {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  .nav-side {
    width: 200px;
    height: 100%;
    background-color: #001529;
    color: #ffffff;
    overflow-y: auto;
    transition: width .5s;
  }
      .content-right {
      flex: 1;
      .nav-top {
        height: 50px;
        line-height: 50px;
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #ddd;
        padding: 0 20px;
        box-sizing: border-box;
      }
      .wapper {
        background: #eef0f3;
        margin: 20px;
        height: calc(100% - 90px);
      }
    }
}
</style>