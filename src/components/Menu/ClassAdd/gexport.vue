<template>
	<div class='basicdiv'>
		<div class='crumbs'>
			<el-breadcrumb separator="/">
				<el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
				<el-breadcrumb-item><a href="/">车型库</a></el-breadcrumb-item>
				<el-breadcrumb-item><a href="/">基础库</a></el-breadcrumb-item>
			</el-breadcrumb>
			<el-breadcrumb separator="/">
				<el-breadcrumb-item :to="{ path: '/' }"><b>车型库</b></el-breadcrumb-item>
				<el-breadcrumb-item :to="{ path: '/' }"><b>基础库</b></el-breadcrumb-item>
			</el-breadcrumb>

		</div>
		<div class='contDiv'>
			<div class='subdiv'>
				<b>查询条件</b>
				<el-form  label-width="60px">
					<el-form-item label="编号:">
						<el-input v-model="vehicleInfoId" style="height:30px;" ref="www"></el-input>
					</el-form-item>
					<el-form-item label="厂商:">
						<el-input v-model="vendor"></el-input>
					</el-form-item>
					<el-form-item label="品牌:">
						<el-input v-model="brand"></el-input>
					</el-form-item>
					<el-form-item label="车系:">
						<el-input v-model="carSeries"></el-input>
					</el-form-item>
					<el-form-item label="年款:">
						<el-input v-model="yearStyle"></el-input>
					</el-form-item>
					<el-form-item label="车型:">
						<el-input v-model="carType"></el-input>
					</el-form-item>	
				</el-form>
				<el-button type="primary" @click="Submit" style='display:block'>搜索</el-button>
				<el-button type="primary" @click="qImport" style='display:block'>确认导入</el-button>
			</div>
			<div class="formdiv">
				<el-table
					ref='multipleTable'
					:data="tableData1"
					tooltip-effect="dark"
					style="width: 100%"
					:height="tableHeight"
					@selection-change="handleSelectionChange">
					<el-table-column type="selection" width=""></el-table-column>
					<el-table-column fixed prop="vehicleInfoId" label="代码" width=""></el-table-column>
					<el-table-column prop="vendor" label="厂商" width=""></el-table-column>
					<el-table-column prop="brand" label="品牌" width=""></el-table-column>
					<el-table-column prop="carSeries" label="车系" width=""></el-table-column>
					<el-table-column prop="yearStyle" label="年款" width=""></el-table-column>		
					<el-table-column prop="carType" label="车型" width=""></el-table-column>	
					<!-- <el-table-column fixed="right" label="操作" width="">
						<template slot-scope="scope">
							<el-button @click="editClick( scope.$index )" type="text" size="small">编辑</el-button>
							<el-button type="text" size="small" @click="delteClick( scope.$index )">删除</el-button>
						</template>
					</el-table-column> -->
				</el-table>
				<el-pagination
			
					style="text-align:right"
					@size-change="handleSizeChange"
					@current-change="handleCurrentChange"
					:current-page.sync="currentPage"
					:page-sizes="[10, 20, 30]"
					:total="total"
					layout="total, sizes, prev, pager, next, jumper"
					>
				</el-pagination>

				
			</div>
		</div>
	</div>
</template>

<script>
	var FileSaver = require('file-saver') 
	import XLSX from 'xlsx'
	import $ from 'jquery'
	export default{
		inject: ["reload"],
		data(){
			return{
				input1:'',
				tableHeight:window.innerHeight- 290,
				strid: '',
				tableData1: [],
				currentPage:1,
				pagesize:10,
				total: 0,
				vehicleInfoId: '',
				vendor: '',
				brand: '',
				carSeries: '',
				yearStyle: '',
				carType: '',
				paginationShow:true
			}
		},
		created() {
			this.$nextTick(function () {
				this.getData()
			})
		},
		mounted(){
			$('.el-input__inner').css({"height":"30px"}),
			$('.el-button').css({"height":"30px","line-height":"0px"})
		},
		methods:{
			qImport(){
				var mulObj = this.multipleSelection;
				//console.log( mulObj )
				let queryId = this.$route.query.id;
				var mulObjArr = [];
				$.each(mulObj, function(idx, obj) {
					//console.log(obj.vehicleInfoId);
					let objStr = obj.vehicleInfoId.toString()
					mulObjArr.push( obj.vehicleInfoId ) 
				});
				if( mulObjArr.length ==0 ){
					alert('请勾选你要导出的数据');
					return false;
				}
				console.log( mulObjArr )
				let params = {
					"jsfType": "vehicleMerchantResource_merGroRelatedMar",
					"valueJsonStr": [{
						"appCode": "cfbizsupport.jr.jd.com",
						"groupId": this.$route.query.id,
						"vehicleInfoIds": mulObjArr
					}]
				}
				/* console.log( JSON.stringify( params ) )
				console.log( this.$route.query.idx )
				console.log( this.$route.query.id ) */
				console.log( JSON.stringify( params ) )
				this.$http.post('/gateway/invokeJsf',params)
				.then( ( res )=>{
					console.log( res )
					
					if( confirm('确认导入车型库吗?') ){
						
						if( res.data.code == "200" ){
							
							/* this.addVisible = false;
							this.reload(); */
							alert( this.$route.query.idx +'导入车型库成功,即将跳转到'+ this.$route.query.idx + '页面' );
							this.$router.push({path:'/grouplabel',query: {id:this.$route.query.id}})
							
							
						}else{
							alert('关联失败');
							return false;
						}	
					}
					
				})
				.catch( ( error )=>{
					console.log( error )
				})	
			},
			handleCurrentChange(val) {  // 当前显示的页数
				let _this = this ;
				_this.currentPage = val;
				//console.log( this.currentPage )
				let params = {"jsfType" : "vehicleInfoResource_queryVehicleInfoList",
					"valueJsonStr": [ {
						"vehicleInfoId": this.vehicleInfoId,               
						"vendor": this.vendor,
						"brand": this.brand,
						"carSeries": this.carSeries,
						"yearStyle": this.yearStyle,
						"carType": this.carType,                
						"pageInfoVo": {
							"pageNum": _this.currentPage,    //当前页码
							"pageSize": this.pagesize,   //每页显示多少条
						},    
						"appCode": "cfbizbaseservice.jr.jd.com"
					}]
				}
				this.$http.post('/gateway/invokeJsf',params)
				.then( (res)=>{
					//console.log( res )
					if( res.data.code == '200'){
						//console.log(  res.data.object.pageInfoVo.list )
						this.pagesize = res.data.object.pageInfoVo.pageSize ;
						this.total = res.data.object.pageInfoVo.total ;
						this.tableData1 = res.data.object.pageInfoVo.list ;
						//console.log( this.tableData1 )
					}
				})
				.catch( (res)=>{
					console.log( res )
				})
				//console.log( val )
			},
			getData(){
				let params = {"jsfType": "vehicleInfoResource_queryVehicleInfoList",
					"valueJsonStr": [{
						"pageInfoVo": {
							"pageNum": this.currentPage,
							"pageSize": this.pagesize
						},
						"appCode": "cfbizsupport.jr.jd.com"
					}],
				}
				this.$http.post('/gateway/invokeJsf',params)
				.then( ( res )=>{
					console.log( res )
					//console.log( res.data.object.pageInfoVo.list )
					if( res.data.code == '200'){	
						this.$nextTick(function () {		
							this.currentPage = res.data.object.pageInfoVo.pageNum ;
							this.pagesize = res.data.object.pageInfoVo.pageSize ;
							this.total = res.data.object.pageInfoVo.total ;
							this.tableData1 = res.data.object.pageInfoVo.list ;
						})
						//console.log( res.data.object.marqueInfoVoList )
					}else{
						return false
					}
				})
				.catch( ( error )=>{
					console.log( error )
				})
			},
			handleSelectionChange(val) {
				//复选框选择回填函数,val返回一整行的数据
				this.multipleSelection = val;
				
			},
			Submit() {   // 搜索功能
				let params = {"jsfType" : "vehicleInfoResource_queryVehicleInfoList",
					"valueJsonStr": [ {
						"vehicleInfoId": this.vehicleInfoId,               
						"vendor": this.vendor,
						"brand": this.brand,
						"carSeries": this.carSeries,
						"yearStyle": this.yearStyle,
						"carType": this.carType,                
						"pageInfoVo": {
							"pageNum": this.currentPage,    //当前页码
							"pageSize": this.pagesize,   //每页显示多少条
						},    
						"appCode": "cfbizbaseservice.jr.jd.com"
					}]
				}
				this.$http.post('/gateway/invokeJsf',params)
				.then( (res)=>{
					console.log(res)
					if( res.data.code == '200'){
						//
						this.tableData1 = res.data.object.pageInfoVo.list ;
						this.pagesize = res.data.object.pageInfoVo.pageSize ;
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
			handleSizeChange(val) {//当前页显示多少条
				this.pagesize = val;
				//console.log( this.currentPage )
				let params = {"jsfType" : "vehicleInfoResource_queryVehicleInfoList",
					"valueJsonStr": [ {
						"vehicleInfoId": this.vehicleInfoId,               
						"vendor": this.vendor,
						"brand": this.brand,
						"carSeries": this.carSeries,
						"yearStyle": this.yearStyle,
						"carType": this.carType,                
						"pageInfoVo": {
							"pageNum": this.currentPage,    //当前页码
							"pageSize": this.pagesize,   //每页显示多少条
						},    
						"appCode": "cfbizbaseservice.jr.jd.com"
					}]
				}
				this.$http.post('/gateway/invokeJsf',params)
				.then( (res)=>{
					console.log( res )
					if( res.data.code == '200'){
						//console.log(  res.data.object.pageInfoVo.list )
						this.pagesize = res.data.object.pageInfoVo.pageSize ;
						this.total = res.data.object.pageInfoVo.total ;
						this.tableData1 = res.data.object.pageInfoVo.list ;
						console.log( this.tableData1 )
					}
				})
				.catch( (res)=>{
					console.log( res )
				})
				//console.log( this.pagesize )
				//this.getData(  );
				
			},
			//显示编辑界面
			
			/* editClick( index ){
				//console.log( this.tableData1[index] )
				this.$router.push({
					path:'/basicedit',
					query:{
						"vehicleInfoId":this.tableData1[ index ].vehicleInfoId
					}
				});
			},
			delteClick( index){
				let vehicleInfoId = this.tableData1[ index ].vehicleInfoId;
				console.log( vehicleInfoId )
				let params = {"jsfType" : "vehicleInfoResource_deleteVehicleInfoByInfoId",
					"valueJsonStr":[{
						"vehicleInfoId": vehicleInfoId,
						"appCode": "cfbizbaseservice.jr.jd.com"
					}]
				}
				this.$http.post('/gateway/invokeJsf',params)
				.then( ( res )=>{
					if(confirm("确定要删除吗？")){
						//console.log( res )
						if( res.data.code == '200'){
							
							this.addVisible = false;
							this.reload();
							alert('删除成功')
							//console.log( res.data.object.marqueInfoVoList )
						}else{
							return false;
						}
					}
						
				})
				.catch( ( error )=>{
					console.log( error )
				})
			},// 点击新增按钮
 */
			
			
		},
		components:{
		
		}
	}
	
</script>
<style lang='scss' scoped>
	.hide-dialog{
		display:none;
	}
	.el-row {
		width:330px;
	}
	.pln{
		color:#1890ff;
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
		overflow:hidden;
		margin:1% 2%;
		width:96%;
		height:85%;
		background:#fff;
		padding:10px 20px 0 20px;
		position:absolute;
		.el-pagination{
			position:absolute;
			right:5%;
			bottom:5%;
		}
	}

	.subdiv{
		width:100%;
		display:block;
		.el-form-item{
			
			width:22%;
			margin-bottom:10px;
			float:left;
			.el-input{
				width:100%;
			}
		}
		.el-button{
			margin-left:5%;
			float:left;
		}
		
	}
	.basicdiv{
		width:100%;
		height:100%;	
	}
	
</style>