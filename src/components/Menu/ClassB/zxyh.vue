<template>
	<div class='zxyhdiv'>
		<div class='crumbs'>
			<el-breadcrumb separator="/">
				<el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
				<el-breadcrumb-item><a href="/">合作商分组</a></el-breadcrumb-item>
				<el-breadcrumb-item><a href="/">线索引导分组库</a></el-breadcrumb-item>
			</el-breadcrumb>
			<el-breadcrumb separator="/">
				<el-breadcrumb-item :to="{ path: '/' }"><b>中信银行-线索模式</b></el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		<div class='contDiv'>
			<div class="btndiv">
				<el-row>
					<el-button type="primary" @click='newAdd'>新增</el-button>
					<el-button plain class='pln' @click='Import'>导入</el-button>
					<el-button plain class='pln' @click='Export'>导出</el-button>
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
						prop="marqueInfoId"
						label="代码"
						width="200">
					</el-table-column>
					<el-table-column
						prop="vendor"
						label="厂商"
						width="120">
					</el-table-column>
					<el-table-column
						prop="brand"
						label="品牌"
						width="120">
					</el-table-column>
					<el-table-column
						prop="carSeries"
						label="车系"
						width="120">
					</el-table-column>
					<el-table-column
						prop="yearStyle"
						label="年款"
						width="150">
					</el-table-column>
					<el-table-column
						prop="carType"
						label="车型"
						width="300">
					</el-table-column>
					
					<el-table-column
						fixed="right"
						label="操作"
						width="120">
						<template slot-scope="scope">
							<el-button @click="editClick( scope.$index )" type="text" size="small">编辑</el-button>
							<el-button type="text" size="small" @click="delteClick( scope.$index )">删除</el-button>
						</template>
					</el-table-column>
				</el-table>
				<el-pagination
					style="text-align:right"
					@size-change="handleSizeChange"
					@current-change="handleCurrentChange"
					:current-page="currentPage"
					:page-sizes="[10,30,100]"
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
					"carType": "320i运动套餐",
					"vendor": "华晨",
					"yearStyle": "2018年款",
					"class": null,
					"brand": "宝马",
					"carSeries": "宝马三系",
					"marqueInfoId": "info18112510007139"
				},
				{
					"carType": "家庭套餐",
					"vendor": "华晨",
					"yearStyle": "2017年款",
					"class": null,
					"brand": "宝马",
					"carSeries": "宝马X系",
					"marqueInfoId": "info18112510007158"
				}],
				currentPage:1,
				pagesize:15
			}
		},
		mounted(){
			this.loadData();
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
			loadData(){
				let params = {"jsfType" :"marqueMerchantResource_queryMerGroMarListService",
					"valueJsonStr":[{
						"appCode": "cfbizbaseservice.jr.jd.com",
						"merGroId": "0003"
					}]
				}
				this.$http.post('/gateway/invokeJsf',params)
				.then( function ( res ) {
					console.log( res )
					console.log( {
						"appCode": "cfbizbaseservice.jr.jd.com",
						"merGroId": "0003"
					})
					/* if( res.data.object.code == "SUCCESS"){
						alert('添加成功')
					}else{
						alert('数据存在')
					} */
				}.bind(this))
				.catch( function( res ) {
					console.log( res )
				}.bind(this))
			},
			delteClick( index ){
				//alert('删除页面')
				let merGroId = this.tableData1[ index ].merGroId;
				let params = {"jsfType" :"marqueMerchantResource_cancelMerGroRelatedMarService",
					"valueJsonStr":[{
						"appCode": "cfbizbaseservice.jr.jd.com",
						"merGroId": "0003",
						"marqueInfoIds": [{
								"marqueInfoId": "123"
							},
							{
								"marqueInfoId": "345"
							}
						]
					}]
				}
				this.$http.post('/gateway/invokeJsf',params)
				.then( function ( res ) {
					
					this.addVisible = false;
					this.reload();
					alert('删除成功');
					
					
				}.bind(this))
				.catch( function( error ) {
					alert('删除失败')
				}.bind(this))
			},// 点击新增按钮
			newAdd(){
				this.$router.push({path:'/zxyhadd'})
			},
			Import(){
				this.$router.push( {path:'/import'} )
			},
			Export(){
				this.$router.push( {path:'/export'} )
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
	.zxyhdiv{
		width:100%;
		height:100%;
	}
</style>