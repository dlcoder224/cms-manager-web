<template>
  <div class="basic-layout">
    <div class="nav-side">
      <Menu />
    </div>
    <div class="content-right">
      <div class="nav-top">
        <Header />
      </div>
      <div class="wapper">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.basic-layout {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;

  .nav-side {
    width: auto;
  }

  .content-right {
    flex: 1;

    .nav-top {
      height: 50px;
    }

    .wapper {
      background: #eef0f3;
      margin: 20px;
      height: calc(100% - 90px);
    }
  }
}
</style>