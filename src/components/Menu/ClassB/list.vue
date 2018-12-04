<template>
	<div class='listdiv'>
		<div class='crumbs'>
			<el-breadcrumb separator="/">
				<el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
				<el-breadcrumb-item><a href="/">库表设置</a></el-breadcrumb-item>
			</el-breadcrumb>
			<el-breadcrumb separator="/">
				<el-breadcrumb-item :to="{ path: '/' }"><b>库表设置</b></el-breadcrumb-item>
			</el-breadcrumb>
			<el-breadcrumb separator="/">
				<el-breadcrumb-item :to="{ path: '/' }">高级表单常见于一次性输入和提交大批量数据的场景</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		<div class='contDiv'>
			<div class="btndiv">
				<el-row>
					<el-button type="primary" @click='newAdd'>新增</el-button>
					<div class='subdiv'>
						<el-input
							placeholder="请输入内容"
							prefix-icon="el-icon-search"
							v-model="input1">
						</el-input>
						<el-button type="primary" @click="onSubmit()">查询</el-button>
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
						prop="merGroId"
						label="库ID"
						width="150">
					</el-table-column>
					<el-table-column
						prop="marDbType"
						label="库类型"
						width="120">
					</el-table-column>
					<el-table-column
						prop="merGroName"
						label="分组标签"
						width="250">
					</el-table-column>
					<el-table-column
						prop="modifyUser"
						label="修改人"
						width="250">
					</el-table-column>
					<el-table-column
						prop="modifyTime"
						label="修改时间"
						width="300">
					</el-table-column>
					<el-table-column
						fixed="right"
						label="操作"
						width="120">
						<template slot-scope="scope">
							<el-button @click="editClick( scope.$index )" type="text" size="small">编辑</el-button>
							<el-button type="text" size="small" @click="delteClick( scope.$index ) ">删除</el-button>
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
		inject: ["reload"],
		data(){		
			return{
				input1:'',
				tableData1: [],
				currentPage:1,
				pagesize:15
			}
		},
		mounted(){
			this.loadData();
		},
		methods:{
			onSubmit() {
				//alert('submit!');
				let params = {"jsfType" :"marqueMerchantResource_queryMerGroListService",
					"valueJsonStr":[{
						"appCode": "cfbizbaseservice.jr.jd.com",
						"merchantCode": "123",
						"merGroName": this.input1,   
						"merGroId": this.input1
					}]
				}
				this.$http.post('/gateway/invokeJsf',params)
				.then( function ( res ) {
					//console.log(res)
					if( res.data.code == '200'){
						this.tableData1 = res.data.object.merGroInfos
						/* console.log( {
						"appCode": "cfbizbaseservice.jr.jd.com",
						"merchantCode": "123",
						"merGroName": this.input1,   
						"merGroId": this.input1
					} ) */
						console.log( this.tableData1, res.data.object.merGroInfos)
						this.addVisible = false;
						this.reload();
					}else{
						return false;
					}
					
				}.bind(this))
				.catch( function( error ) {
					console.log(error)
				}.bind(this))
				
			},
			handleSizeChange(val) {
				this.pagesize = val;
			},
			handleCurrentChange(val) {
				this.currentPage = val;
			},
			editClick( index ){
				//console.log( this.tableData1[ index ].merGroName ,this.tableData1[ index ].merGroId)
				this.$router.push({
					path:'/listedit',
					query:{
						"merGroName":this.tableData1[ index ].merGroName,
						"merGroId":this.tableData1[ index ].merGroId
					}
					
				});
			},
			delteClick( index ){
				//alert('删除页面')
				let merGroId = this.tableData1[ index ].merGroId;
				let params = {"jsfType" :"marqueMerchantResource_delMerGroInfoService",
					"valueJsonStr":[{
						"appCode": "cfbizbaseservice.jr.jd.com",
						"merGroName": "商户的分组名称",
						"merGroId": merGroId,
						"marDbName": "库类型名称",
						"marDbType": "1",
						"merchantCode": "商户号"
					}]
				}
				this.$http.post('/gateway/invokeJsf',params)
				.then( function ( res ) {
					//console.log(res)
					if( res.data.code == '200'){
						
						this.addVisible = false;
						this.reload();
						alert('删除成功')
					}else{
						return false;
					}
				}.bind(this))
				.catch( function( error ) {
					alert('查询失败')
				}.bind(this))
				
			},// 点击新增按钮
			newAdd(){
				this.$router.push({path:'/listadd'});
				
			},
			loadData(){
				let params = {"jsfType" :"marqueMerchantResource_queryMerGroListService",
					"valueJsonStr":[{
						"appCode": "cfbizbaseservice.jr.jd.com",
						"merchantCode": "123"
					}]
				}
				this.$http.post('/gateway/invokeJsf',params)
				.then( function ( res ) {
					//console.log( res.data.object.merGroInfos )
					if( res.data.object.code == "SUCCESS" ){
						this.tableData1 = res.data.object.merGroInfos
					}else{
						alert('请求失败')
					}
					
				}.bind(this))
				.catch( function( error ) {
					console.log( error )
				}.bind(this))
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
	.listdiv{
		width:100%;
		height:100%;
	}
</style>