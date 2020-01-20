<template>
	<el-breadcrumb separator="/" class="breadcrumb">
        <el-breadcrumb-item v-for="(item, index) in breadcrumbData" :key="index" :to="{ path: item.path }">{{item.name}}</el-breadcrumb-item>
    </el-breadcrumb>
</template>

<script>
export default {
    props: {
        breadcrumbData: {
            type: Array
        }
    }
}
</script>

<style lang='scss' scoped>
.breadcrumb{
    margin-bottom: 20px;
}
</style>