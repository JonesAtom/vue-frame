<template>
	<div class="aside-content">
		<div ref="wrapper" class="aside-menu">
			<div class="aside-logo">
				<!-- <img class="logo-img" :src="shopInfo.logo" alt /> -->
                <img class="logo-img" src="/static/img/logo.png" alt />
			</div>
			<el-menu
				:default-active="activeMenu"
				text-color="#7f7f7f"
				active-text-color="#fff"
				background-color="#2a2b34"
				:router="true"
			>
				<template v-for="(item, index) in navData">
					<el-menu-item v-if="item.meta && item.meta.menuShow" :key="index" :index="item.path">
						<!-- <img :src="item.meta.icon" alt class="aside-icon" /> -->
						<i class="iconfont aside-icon" :class="item.meta.icon"></i>
						<span>{{item.meta.menuName}}</span>
					</el-menu-item>
				</template>
			</el-menu>
		</div>
	</div>
</template>

<script>
// 引入滚动条插件
import PerfectScrollbar from 'perfect-scrollbar'
export default {
    name: 'leftNav',
    data() {
        return {
            navData: this.$router.options.routes // 获取路由数据
            // shopInfo: this.$store.getters.shopInfo
        }
    },
    
    computed: {
        // 当前一级路由
        activeMenu() {
            return this.$store.getters.activeMenu
        }
    },
    
    mounted() {
        // 初始化滚动条
        let wrapper = this.$refs.wrapper
        new PerfectScrollbar(wrapper, {
            wheelPropagation: false
        })
    }
}
</script>