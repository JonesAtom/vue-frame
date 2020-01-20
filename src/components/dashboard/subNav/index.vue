<template>
	<div class="sub-card" ref="wrapper">
		<!-- 二级菜单 -->
		<el-card class="card-box">
			<div v-for="item in list" class="card-item" :key="item.name">
				<template v-if="item.meta.menuShow">
					<span v-if="item.path=='/'" class="main_nav">{{item.meta.menuName}}</span>
					<router-link
						v-else
						:to="item.path"
						:class="item.path == activeSub ?'active':''"
					>{{ item.meta.menuName }}</router-link>
				</template>
			</div>
		</el-card>
	</div>
</template>

<script>
// 引入滚动条插件
import PerfectScrollbar from 'perfect-scrollbar'
export default {
    name: 'subNav',
    props: {
        list: {
            type: Array,
            default: () => []
        }
    }, // 传入的子路由数据
    data() {
        return {
            index: 1
        }
    },

    computed: {
        // 当前子路由
        activeSub() {
            return this.$store.getters.activeSubMenu
        }
    },
    
    mounted() {
        // 初始化滚动条
        let wrapper = this.$refs.wrapper
        new PerfectScrollbar(wrapper, {
            suppressScrollX: false
        })
    }
}
</script>