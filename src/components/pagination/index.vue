<template>
	<div class="pagination">
		<el-pagination background @current-change="pageChange" layout="total, slot, prev, pager, next, jumper" :current-page="pageIndex" :page-count="pages" :page-size="pageSize">
			<span class="total">共 {{total}} 条</span>
			<span class="per">每页 {{pageSize}} 条</span>
		</el-pagination>
		<p v-if="showTips" class="page-tips"><i class="el-icon-warning page-icon"></i>最多展示10000页，请缩小范围查看数据</p>
	</div>
</template>

<script>
export default {
    props: {
        pageIndex: { // 当前页码
            type: Number,
            default: 1
        },
        total: { // 总条目数
            type: Number,
            default: 0
        },
        pageSize: { // 分页大小
            type: Number,
            default: 10
        }
    },
    
    computed: {
        // 总页数
        pages() {
            let num = Math.ceil(this.total / this.pageSize)
            if (num > 10000) {
                return 10000
            } else {
                return num
            }
        },
        
        // 是否显示提示
        showTips() {
            if (this.total > 100000) {
                return true
            } else {
                return false
            }
        }
    },
    
    methods: {
        // 选中页码
        pageChange(val) {
            this.$emit('goSpecifiedPage', val)
        }
    }
}
</script>

<style lang="scss" scoped="" type="text/css">
.pagination /deep/ {
	margin-top: 40px;
	text-align: right;
	.el-input__inner {
		width: 48px !important;
		text-align: center;
	}
}
.pagination {
	.total {
		font-weight: 400;
		color: #606266;
		padding-right: 5px;
	}
	.el-pagination {
		display: inline-block;
		vertical-align: top;
	}
	.per {
		font-weight: 400;
		color: #606266;
		padding-right: 20px;
	}
	.page-tips {
		color: #999;
        padding-top: 10px;
        padding-right: 5px;
		.page-icon {
			margin-right: 5px;
		}
	}
}
</style>