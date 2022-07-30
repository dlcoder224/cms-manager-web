<template>
  <el-row class="user-manage">
    <el-row class="query-form">
      <el-form :inline="true" :model="userForm">
        <el-form-item>
          <el-input
            v-model="userForm.userID"
            placeholder="请输入用户ID"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-input
            v-model="userForm.userName"
            placeholder="请输入用户名称"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-select>
            <el-option :value="0" label="所有"></el-option>
            <el-option :value="1" label="在职"></el-option>
            <el-option :value="2" label="离职"></el-option>
            <el-option :value="3" label="试用期"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary">查询</el-button>
          <el-button>重置</el-button>
        </el-form-item>
      </el-form>
    </el-row>
    <el-row class="base-table">
      <el-row class="action"></el-row>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="date" label="Date" width="180" />
        <el-table-column prop="name" label="Name" width="180" />
        <el-table-column prop="address" label="Address" />
      </el-table>
    </el-row>
  </el-row>
</template>

<script setup>
const userForm = reactive({
  userID: "",
  userName: "",
  region: "",
});
const tableData = ref([]);
</script>

<style lang="scss" scoped>
.user-manage {
  display: flex;
  flex-direction: column;
  .query-form {
  }
  .base-table {
  }
}
</style>