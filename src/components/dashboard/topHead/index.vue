<template>
	<div class="flex-h flex-he tophead">
		<el-dropdown @command="topChange">
			<span class="el-dropdown-link">
				{{shopInfo && shopInfo.name}}
				<i class="el-icon-arrow-down el-icon--right"></i>
			</span>
			<el-dropdown-menu slot="dropdown">
				<el-dropdown-item command="1">切换店铺</el-dropdown-item>
				<el-dropdown-item command="0">帮助中心</el-dropdown-item>
				<el-dropdown-item command="2">退出登录</el-dropdown-item>
			</el-dropdown-menu>
		</el-dropdown>
	</div>
</template>

<script>
// 引入接口
import { userLogout, switchShop } from '@/api/shop'
export default {
    name: 'topHead',
    computed: {
        // 获取店铺信息
        shopInfo() {
            return this.$store.getters.shopInfo
        }
    },

    methods: {
        topChange(val) {
            if (val == 0) {
                // 帮助中心
                window.open('https://help.qmai.cn/')
            } else {
                this.$confirm('是否确认此操作?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    if (val == 1) {
                        // 切换店铺
                        switchShop().then(res => {
                            if (res.status) {
                                window.open(res.data.jump_to_shop_list, '_self')
                            }
                        })
                    } else if (val == 2) {
                        // 退出
                        userLogout().then(res => {
                            if (res.status) {
                                // location.href = this.shopInfo.select_store
                                window.open(res.data.redirect_url, '_self')
                            }
                        })
                    }
                }).catch(() => { })
            }
        }
    }
}
</script>