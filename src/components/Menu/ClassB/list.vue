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
		</div>
		<div class='contDiv'>
			<div class="btndiv">
				<el-row>
					<el-button type="primary" @click='newAdd'>新增</el-button>
					<div class='subdiv'>
						<el-input placeholder="请输入搜索内容" prefix-icon="el-icon-search" v-model="input1"></el-input>
						<el-button type="primary" @click="onSubmit()">查询</el-button>
					</div>
				</el-row>
			</div>
			<div class="formdiv">
				<el-table :data="tableData1" style="width: 100%" :height="tableHeight">
					<!-- <el-table-column type="selection" width=""></el-table-column> -->
					<el-table-column fixed prop="groupId" label="库ID" width=""></el-table-column>
					<el-table-column prop="groupCar" label="库类型" width=""></el-table-column>
					<el-table-column prop="groupName" label="分组标签" width=""></el-table-column>
					<el-table-column prop="modifyUser" label="修改人" width=""></el-table-column>
					<el-table-column prop="modifyTime"	label="修改时间" width=""></el-table-column>
					<el-table-column fixed="right" label="操作" width="">
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
					:page-sizes="[10,30,100]"
					:total="total"
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
				pagesize:10,
				total: 0,
				tableHeight: window.innerHeight - 220
			}
		},
		mounted(){
			$('.el-input__inner').css({"height":"30px"}),
			$('.el-input__prefix').css({'height':'30px'})
			$('.el-input__icon').css({"line-height":"30px"})
			$('.el-button').css({"height":"30px","line-height":"0px"})
			this.loadData();
		},
		methods:{
			onSubmit() {
				if(this.input1=="" || this.input1==null || this.input1==undefined ){
					alert('请输入您要搜索的内容');
					return false;
				}
				let params = {  
					"jsfType":"vehicleMerchantResource_queryMerGroList",
                        "valueJsonStr":[{
                            "pageInfoVo": {
								"pageNum": this.currentPage,
								"pageSize": this.pagesize
                            },
                        "appCode": "cfbizbaseservice.jr.jd.com",
                        "searchName": this.input1
                    }]
				}
				//console.log( this.input1 )
				this.$http.post('/gateway/invokeJsf',params)
				.then( (res)=>{
					console.log(res)
					if( res.data.code == '200'){	
						this.tableData1 = res.data.object.pageInfoVo.list ;
						this.currentPage = res.data.object.pageInfoVo.pageNum ;  //当前显示第几页
						this.pagesize = res.data.object.pageInfoVo.pageSize ;  // 一页显示多少条
						this.total = res.data.object.pageInfoVo.total ;  
					}else{
						alert('网络异常');
						return false;
					}
				})
				.catch( ( error)=>{
					alert('查询失败')
					console.log(error)
				})
			},
			handleSizeChange(val) {
				this.pagesize = val;  // 一页显示多少条
				console.log( this.pagesize)
				let params = {
					"jsfType": "vehicleMerchantResource_queryMerGroList",
					"valueJsonStr": [{
						"pageInfoVo": {
							"pageNum": this.currentPage,
							"pageSize": this.pagesize
						},
						"appCode": "cfbizbaseservice.jr.jd.com",
						"merchantCode": "1234"
					}]
				}
				this.$http.post('/gateway/invokeJsf',params)
				.then( (res)=>{
					//console.log(res.data)
					if( res.data.code == '200'){
						this.currentPage = res.data.object.pageInfoVo.pageNum ;  //当前显示第几页
						this.tableData1 = res.data.object.pageInfoVo.list ;   // 总共的列表数据
						//this.pagesize = res.data.object.pageInfoVo.pageSize ;  // 一页显示多少条
						this.total = res.data.object.pageInfoVo.total ;      // 总共多少条
					}else{
						alert('操作异常')
						return false;
					}
					
				})
				.catch( (error)=>{
					console.log(error)
				})
				
			},
			handleCurrentChange(val) {
				this.currentPage = val;  // 前往第几页
				console.log( this.currentPage)
				let params = {
					"jsfType": "vehicleMerchantResource_queryMerGroList",
					"valueJsonStr": [{
						"pageInfoVo": {
							"pageNum": this.currentPage,
							"pageSize": this.pagesize
						},
						"appCode": "cfbizbaseservice.jr.jd.com",
						"merchantCode": "1234"
					}]
				}
				this.$http.post('/gateway/invokeJsf',params)
				.then( (res)=>{
					console.log(res.data)
					if( res.data.code == '200'){
						//  this.currentPage = res.data.object.pageInfoVo.pageNum ;  //当前显示第几页,这一条在这里不能添加,不然会自动回到第一页
						this.tableData1 = res.data.object.pageInfoVo.list ;   // 总共的列表数据
						this.pagesize = res.data.object.pageInfoVo.pageSize ;  // 一页显示多少条
						this.total = res.data.object.pageInfoVo.total ;      // 总共多少条
					}else{
						alert('操作异常')
						return false;
					}
					
				})
				.catch( (error)=>{
					console.log(error)
				})
				
			},
			editClick( index ){
				/* console.log( this.tableData1[ index ].groupCar)
				console.log( this.tableData1[ index ].groupId)
				console.log( this.tableData1[ index ].groupName) */
				this.$router.push({
					path:'/listedit',
					query:{
						"groupId":this.tableData1[ index ].groupCar,
						"groupCar":this.tableData1[ index ].groupId,
						"groupName":this.tableData1[ index ].groupName
					}
				});
			},
			delteClick( index ){
				//alert('删除页面')
				let groupId = this.tableData1[ index ].groupId;
				//console.log( groupId )
				let params = {
					"jsfType": "vehicleMerchantResource_delMerGroInfo",
					"valueJsonStr": [{
						"appCode": "cfbizsupport.jr.jd.com",
						"groupId":groupId
					}]
				}
				this.$http.post('/gateway/invokeJsf',params)
				.then( ( res )=> {
					console.log(res)
					if( res.data.code == '200'){
						if( confirm('确定要删除该数据吗?') ){
							if( res.data.object.code == "EXISTS" ){
								alert('分组存在关联,不允许删除')
								this.addVisible = false;
								this.reload();
								
							}else if(  res.data.object.code == "SUCCESS" ){
								alert('删除成功')
								this.addVisible = false;
								this.reload();
							}
						}else{
							alert('您取消了删除');
						}
					}else{
						alert('网络异常')
						return false;
					}
				})
				.catch( ( error )=>{
					alert('删除失败')
				})
	
			},// 点击新增按钮
			newAdd(){
				this.$router.push({path:'/listadd'});
			},
			loadData(){
				let params = {
					"jsfType": "vehicleMerchantResource_queryMerGroList",
					"valueJsonStr": [{
						"pageInfoVo": {
							"pageNum": this.currentPage,
							"pageSize": this.pagesize
						},
						"appCode": "cfbizbaseservice.jr.jd.com",
						"merchantCode": "1234",
					}]
				}
				this.$http.post('/gateway/invokeJsf',params)
				.then( (res)=>{
					console.log(res.data)
					if( res.data.code == '200'){
						this.$nextTick(function () {
							this.currentPage = res.data.object.pageInfoVo.pageNum ;  //当前显示第几页
							this.tableData1 = res.data.object.pageInfoVo.list ;   // 总共的列表数据
							this.pagesize = res.data.object.pageInfoVo.pageSize ;  // 一页显示多少条
							this.total = res.data.object.pageInfoVo.total ;      // 总共多少条
						})
						
					}else{
						alert('操作异常')
						return false;
					}
					
				})
				.catch( (error)=>{
					console.log(error)
				})
			}
		},
		components:{
			
		}
	}
</script>

<style lang="scss" scoped>
	.el-row {
		display:inline;
	}
	.crumbs{
		width:100%;
		height:8%;
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
		height:85%;
		background:#fff;
		padding:20px 20px 0 20px;
		position:absolute;
		.btndiv{
			height:40px;
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
			bottom:5%;
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