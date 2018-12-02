<template>
	<div class='spudiv'>
		<div class='crumbs'>
			<el-breadcrumb separator="/">
				<el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
				<el-breadcrumb-item><a href="/">车型库</a></el-breadcrumb-item>
				<el-breadcrumb-item>基础库</el-breadcrumb-item>
			</el-breadcrumb>
			<el-breadcrumb separator="/">
				<el-breadcrumb-item :to="{ path: '/' }"><b>SPU库</b></el-breadcrumb-item>
			</el-breadcrumb>
			<el-breadcrumb separator="/">
				<el-breadcrumb-item :to="{ path: '/' }">高级表单常见于一次性输入和提交大批量数据的场景</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		<div class='contDiv'>
			<div class="btndiv">
				<el-row>
					<el-button type="primary" @click='newAdd'>新增</el-button>
					<el-button plain class='pln'>导入</el-button>
					<el-button plain class='pln'>导出</el-button>
					<div class='subdiv'>
						<el-input
							placeholder="请输入内容"
							prefix-icon="el-icon-search"
							v-model="input1">
						</el-input>
						<el-button type="primary" @click="onSubmit">查询</el-button>
					</div>
				</el-row>
			</div>
			<div class="formdiv">
				<el-table
					:data="tableData1.slice((currentPage-1)*pagesize,currentPage*pagesize)"
					style="width: 100%"
					max-height="300">
					<el-table-column
						type="selection"
						width="55">
					</el-table-column>
					<el-table-column
						fixed
						prop="date"
						label="Date"
						width="150">
					</el-table-column>
					<el-table-column
						prop="name"
						label="Name"
						width="120">
					</el-table-column>
					<el-table-column
						prop="state"
						label="State"
						width="120">
					</el-table-column>
					<el-table-column
						prop="city"
						label="City"
						width="120">
					</el-table-column>
					<el-table-column
						prop="address"
						label="Address"
						width="300">
					</el-table-column>
					
					<el-table-column
						fixed="right"
						label="操作"
						width="120">
						<template slot-scope="scope">
							<el-button @click="editClick" type="text" size="small">编辑</el-button>
							<el-button type="text" size="small" @click="delteClick">删除</el-button>
						</template>
					</el-table-column>
				</el-table>
				<el-pagination
					style="text-align:right"
					@size-change="handleSizeChange"
					@current-change="handleCurrentChange"
					:current-page="currentPage"
					:page-sizes="[10, 20, 30]"
					:page-size="pagesize"
					layout="total, sizes, prev, pager, next, jumper"
					>
				</el-pagination>
			</div>
		</div>
		
	</div>
</template>

<script>
	export default{
		data(){
			
			return{
				input1:'',
				tableData1: [{
					date: '2016-05-03',
					name: 'Tom',
					state: 'California',
					city: 'Los Angeles',
					address: 'No. 189, Grove St, Los Angeles'
				}, {
					date: '2016-05-02',
					name: 'Tom',
					state: 'California',
					city: 'Los Angeles',
					address: 'No. 189, Grove St, Los Angeles'
				}, {
					date: '2016-05-04',
					name: 'Tom',
					state: 'California',
					city: 'Los Angeles',
					address: 'No. 189, Grove St, Los Angeles'
				}, {
					date: '2016-05-01',
					name: 'Tom',
					state: 'California',
					city: 'Los Angeles',
					address: 'No. 189, Grove St, Los Angeles',
					zip: 'CA 90036'
				}, {
					date: '2016-05-08',
					name: 'Tom',
					state: 'California',
					city: 'Los Angeles',
					address: 'No. 189, Grove St, Los Angeles'
				}, {
					date: '2016-05-06',
					name: 'Tom',
					state: 'California',
					city: 'Los Angeles',
					address: 'No. 189, Grove St, Los Angeles'
				}, {
					date: '2016-05-07',
					name: 'Tom',
					state: 'California',
					city: 'Los Angeles',
					address: 'No. 189, Grove St, Los Angeles',
					zip: 'CA 90036'
				}, {
					date: '2016-05-07',
					name: 'Tom',
					state: 'California',
					city: 'Los Angeles',
					address: 'No. 189, Grove St, Los Angeles'
				}, {
					date: '2016-05-07',
					name: 'Tom',
					state: 'California',
					city: 'Los Angeles',
					address: 'No. 189, Grove St, Los Angeles'
				}, {
					date: '2016-05-07',
					name: 'Tom',
					state: 'California',
					city: 'Los Angeles',
					address: 'No. 189, Grove St, Los Angeles'
				}, {
					date: '2016-05-07',
					name: 'Tom',
					state: 'California',
					city: 'Los Angeles',
					address: 'No. 189, Grove St, Los Angeles'
				}, {
					date: '2016-05-07',
					name: 'Tom',
					state: 'California',
					city: 'Los Angeles',
					address: 'No. 189, Grove St, Los Angeles'
				}, {
					date: '2016-05-07',
					name: 'Tom',
					state: 'California',
					city: 'Los Angeles',
					address: 'No. 189, Grove St, Los Angeles'
				}, {
					date: '2016-05-07',
					name: 'Tom',
					state: 'California',
					city: 'Los Angeles',
					address: 'No. 189, Grove St, Los Angeles'
				}, {
					date: '2016-05-07',
					name: 'Tom',
					state: 'California',
					city: 'Los Angeles',
					address: 'No. 189, Grove St, Los Angeles'
				}, {
					date: '2016-05-07',
					name: 'Tom',
					state: 'California',
					city: 'Los Angeles',
					address: 'No. 189, Grove St, Los Angeles'
				}, {
					date: '2016-05-07',
					name: 'Tom',
					state: 'California',
					city: 'Los Angeles',
					address: 'No. 189, Grove St, Los Angeles'
				}, {
					date: '2016-05-07',
					name: 'Tom',
					state: 'California',
					city: 'Los Angeles',
					address: 'No. 189, Grove St, Los Angeles'
				}, {
					date: '2016-05-07',
					name: 'Tom',
					state: 'California',
					city: 'Los Angeles',
					address: 'No. 189, Grove St, Los Angeles'
				}, {
					date: '2016-05-07',
					name: 'Tom',
					state: 'California',
					city: 'Los Angeles',
					address: 'No. 189, Grove St, Los Angeles'
				}],
				currentPage:2,
				pagesize:15
			}
		},
		methods:{
			onSubmit() {
				console.log('submit!');
			},
			handleSizeChange(val) {
				this.pagesize = val;
			},
			handleCurrentChange(val) {
				this.currentPage = val;
			},
			editClick(){
				alert('编辑页面')
			},
			delteClick(){
				alert('删除页面')
			},// 点击新增按钮
			newAdd(){
				this.$router.push({path:'/spuadd'});
				
			}
		},
		components:{
			
		}
	}
</script>

<style lang="scss" scoped>
	.el-row {
		width:540px;
		display:inline;
	}
	.pln{
		color:#1890ff;
	}
	.crumbs{
		width:100%;
		height:12%;
		background:#fff;
		padding-left:2%;
		overflow:hidden;
		.el-breadcrumb{
			margin-top:0.5%;
		}
	}
	b{
		font-size:18px;
		font-weight:600;
	}
	.contDiv{
		margin:1% 2%;
		width:96%;
		height:70%;
		background:#fff;
		padding:20px 20px 0 20px;
		position:absolute;
		.btndiv{
			height:60px;
			.el-button{
				font-size:12px;
				border:1px solid #1890ff;
				float:left;
				height:40px;
				position:relative;
				z-index:10;
			}
		}
		.el-pagination{
			position:absolute;
			right:5%;
			bottom:2%;
		}
	}
	.subdiv{
		display:inline;
		position:relative;
		float:right;
		z-index:10;	
		.el-input{
			width:250px;
			height:40px;
		}
		.el-button{
			position:absolute;
			z-index:10;
			top:0px;
			left:250px;
			height:40px;
		}
	}
	.spudiv{
		width:100%;
		height:100%;
	}
</style>