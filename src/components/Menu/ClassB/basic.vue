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
					<!-- <el-form-item label="厂商:">
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
					</el-form-item>	 -->
					<el-form-item label="厂商 : " prop="vendor">
						<el-select v-model="vendor" filterable allow-create ><!-- @change="currentVendor" -->
							<el-option
								ref='elOption'
								v-for="item in opVendor"
								:key="item.vehicleId"
								:label="item.label"
								:value="item"
								>
							</el-option>
						</el-select>
					</el-form-item>
					<el-form-item label="品牌 : " prop="brand">
						<el-select v-model="brand" filterable no-data-text='请先选择厂商' allow-create><!-- @change="currentBrand" -->
							<el-option
								v-for="item in opBrand"
								:key="item.vehicleId"
								:label="item.label"
								:value="item">
							</el-option>
						</el-select>
					</el-form-item>
					<el-form-item label="车系 : " prop="carSeries">
						<el-select v-model="carSeries" filterable no-data-text='请先选择厂商' allow-create><!-- @change="currentCarSeries" -->
							<el-option
								v-for="item in opCarSeries"
								:key="item.vehicleId"
								:label="item.label"
								:value="item">
							</el-option>
						</el-select>
					</el-form-item>
					<el-form-item label="年款 : " prop="yearStyle">
						<el-select v-model="yearStyle" filterable no-data-text='请先选择车系'  allow-create ><!-- @change="currentYear" -->
							<el-option
								v-for="item in opYearStyle"
								:key="item.vehicleId"
								:label="item.label"
								:value="item">
							</el-option>
						</el-select>
					</el-form-item>
					
					<el-form-item label="车型 : " prop="carType">
						<el-select v-model="carType" filterable  no-data-text='请先选择年款' allow-create><!-- // @change="currentCar" -->
							<el-option
								v-for="item in opCarType"
								:key="item.vehicleId"
								:label="item.label"
								:value="item"
								>
							</el-option>
						</el-select>
					</el-form-item>
				</el-form>
				<el-button type="primary" @click="Submit" style='display:block'>搜索</el-button>
			</div>
			<div class="btndiv">
				<el-row  style='float:right'>
					<el-button type="primary" @click='newAdd'>新增</el-button>
					<!-- <el-button plain class='pln' @click="importData">导入</el-button> -->
					<el-button plain class='pln' @click="outportData">导出</el-button>
				</el-row>
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
					<el-table-column fixed="right" label="操作" width="">
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
					:current-page.sync="currentPage"
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
	var FileSaver = require('file-saver') 
	import XLSX from 'xlsx'
	import $ from 'jquery'
	export default{
		inject: ["reload"],
		data(){
			return{
				input1:'',
				tableHeight:window.innerHeight- 300,
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
				opBrand:[],
				opVendor:[],
				opCarType:[],
				opYearStyle:[],
				opCarSeries:[],
				paginationShow:true
			}
		},
		created() {
			this.$nextTick(function () {
				this.getData()
			})
		},
		mounted(){
			//this.loadData();
			$('.el-input__inner').css({"height":"30px"}),
			$('.el-button').css({"height":"30px","line-height":"0px"})
		},
		methods:{
// 			loadData(){
// 				let params = {
// 					"jsfType": "vehicleInfoResource_queryVehicleInfoList",
// 					"valueJsonStr": [{
// 						"pageInfoVo": {
// 							"pageNum": 1,
// 							"pageSize": 10000000
// 						},
// 						"appCode": "cfbizsupport.jr.jd.com"
// 					}]
// 				}
// 				this.$http.post('/gateway/invokeJsf',params)
// 				.then( (res)=>{
// 					//console.log( res )
// 					let arrList = res.data.object.pageInfoVo.list
// 					$.each(arrList, (idx, obj)=>{
// 						//console.log( idx )
// 						let vendorArr = [];
// 						vendorArr.push( obj.vendor )
// 						for( var i=0; i<vendorArr.length ; i++){
// 							this.opVendor.push( vendorArr[i]  )
// 						}
// 						
// 						let brandArr = [];
// 						brandArr.push( obj.brand )
// 						for( var i=0; i<brandArr.length ; i++){
// 							this.opBrand.push( brandArr[i]  )
// 						}
// 						
// 						
// 						let carSeriesArr = [];
// 						carSeriesArr.push( obj.carSeries )
// 						for( var i=0; i<carSeriesArr.length ; i++){
// 							this.opCarSeries.push( carSeriesArr[i]  )
// 						}
// 						
// 						let yearStyleArr = [];
// 						yearStyleArr.push( obj.yearStyle )
// 						for( var i=0; i<yearStyleArr.length ; i++){
// 							this.opYearStyle.push( yearStyleArr[i]  )
// 						}
// 						
// 						let carTypeArr = [];
// 						carTypeArr.push( obj.carType )
// 						for( var i=0; i<carTypeArr.length ; i++){
// 							this.opCarType.push( carTypeArr[i]  )
// 						}
						/* let brandA = obj.brand
						let carSeries = obj.carSeries
						let yearStyle = obj.yearStyle
						let carType = obj.carType */
						/* this.vendor = obj.carType
						this.brand = obj.vendor
						this.carSeries = obj.yearStyle
						this.yearStyle = obj.carSeries
						this.carType = obj.brand */
					//});
					
					
					
					/* for( var i=0; i<this.opBrand.length ; i++){
						console.log( this.opBrand[i] )
					}
					this.opBrand = brand
					this.opVendor = vendor
					this.opCarSeries = carSeries
					this.opYearStyle = yearStyle
					this.opCarType = carType */
// 				})
// 				.catch( (res)=>{
// 					console.log( res )
// 				})
// 			},
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
						
						let arrList = res.data.object.pageInfoVo.list
						$.each(arrList, (idx, obj)=>{
							//console.log( idx )
							let vendorArr = [];
							vendorArr.push( obj.vendor )
							for( var i=0; i<vendorArr.length ; i++){
								this.opVendor.push( vendorArr[i]  )
							}
							
							let brandArr = [];
							brandArr.push( obj.brand )
							for( var i=0; i<brandArr.length ; i++){
								this.opBrand.push( brandArr[i]  )
							}
							
							
							let carSeriesArr = [];
							carSeriesArr.push( obj.carSeries )
							for( var i=0; i<carSeriesArr.length ; i++){
								this.opCarSeries.push( carSeriesArr[i]  )
							}
							
							let yearStyleArr = [];
							yearStyleArr.push( obj.yearStyle )
							for( var i=0; i<yearStyleArr.length ; i++){
								this.opYearStyle.push( yearStyleArr[i]  )
							}
							
							let carTypeArr = [];
							carTypeArr.push( obj.carType )
							for( var i=0; i<carTypeArr.length ; i++){
								this.opCarType.push( carTypeArr[i]  )
							}

						});
						
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
							
							let arrList = res.data.object.pageInfoVo.list
							$.each(arrList, (idx, obj)=>{
								//console.log( idx )
								let vendorArr = [];
								vendorArr.push( obj.vendor )
								for( var i=0; i<vendorArr.length ; i++){
									this.opVendor.push( vendorArr[i]  )
								}
								
								let brandArr = [];
								brandArr.push( obj.brand )
								for( var i=0; i<brandArr.length ; i++){
									this.opBrand.push( brandArr[i]  )
								}
								
								
								let carSeriesArr = [];
								carSeriesArr.push( obj.carSeries )
								for( var i=0; i<carSeriesArr.length ; i++){
									this.opCarSeries.push( carSeriesArr[i]  )
								}
								
								let yearStyleArr = [];
								yearStyleArr.push( obj.yearStyle )
								for( var i=0; i<yearStyleArr.length ; i++){
									this.opYearStyle.push( yearStyleArr[i]  )
								}
								
								let carTypeArr = [];
								carTypeArr.push( obj.carType )
								for( var i=0; i<carTypeArr.length ; i++){
									this.opCarType.push( carTypeArr[i]  )
								}

							});
								
						})
						.catch( (res)=>{
							console.log( res )
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
			outportData() {
				var dataArr = [];
				let mulObj = this.multipleSelection;
				for( let i in mulObj ){
					dataArr.push( mulObj[i] )
				}
				//console.log( dataArr)
				if( dataArr == null || dataArr.length == 0){
					alert('请勾选你要导入的数据!')
					return false;
				}
				for(var i = 0; i < dataArr.length; i++) {
					dataArr[i]["车型编码"] = dataArr[i]["vehicleInfoId"]; 
					dataArr[i]["品牌"] = dataArr[i]["brand"];   //'text'是需要的字段
					dataArr[i]["车系"] = dataArr[i]["carSeries"]; 
					dataArr[i]["年款"] = dataArr[i]["yearStyle"]; 
					dataArr[i]["厂商"] = dataArr[i]["vendor"]; 
					dataArr[i]["车型"] = dataArr[i]["carType"]; 
					dataArr[i]["参考价"] = dataArr[i]["guidePrice"]; 
					dataArr[i]["车辆颜色"] = dataArr[i]["vehicleColor"]; 
					dataArr[i]["创建时间"] = dataArr[i]["createTime"]; 
					dataArr[i]["车辆参数"] = dataArr[i]["vehicleCfgInfo"]; 
					dataArr[i]["创建人"] = dataArr[i]["creator"]; 
					dataArr[i]["updateTime"] = dataArr[i]["createTime"]; 
					dataArr[i]["updater"] = dataArr[i]["creator"]; 
					delete dataArr[i]["brand"];  //key是要替换为'text'的字段
					delete dataArr[i]["carSeries"];
					delete dataArr[i]["yearStyle"];
					delete dataArr[i]["vendor"];
					delete dataArr[i]["vehicleBaseId"];
					delete dataArr[i]["carType"];
					delete dataArr[i]["guidePrice"];
					delete dataArr[i]["vehicleColor"];
					delete dataArr[i]["createTime"];
					delete dataArr[i]["vehicleCfgInfo"];
					delete dataArr[i]["creator"];
					delete dataArr[i]["validFlag"];
					delete dataArr[i]["vehicleInfoId"];
					delete dataArr[i]["class"];
					delete dataArr[i]["displayImg"];
				}
				//console.log(  dataArr)
			
				const defaultCellStyle =  { 
					font: { name: "Verdana", sz: 11, color: "FFFF00FF"},
					fill:{bgColor:"ff00ff00"},
				};
				const wopts = { 
					bookType:'xlsx', 
					bookSST:false, 
					type:'binary',
					defaultCellStyle: defaultCellStyle, 
					showGridLines: false,
				};
				const wb = { SheetNames: ['Sheet1'], Sheets: {}, Props: {} };
				// let data = exportList.list
				
				wb.Sheets['Sheet1'] = XLSX.utils.json_to_sheet( dataArr )

				// 创建二进制对象写入转换好的字节流
				var fileName = 'ExportVehicleInfo_' + Date.parse(new Date()) + '.xlsx';
				let tmpDown =  new Blob([this.s2ab(XLSX.write(wb, wopts))], { type: "application/octet-stream" })
				FileSaver.saveAs(tmpDown, fileName);
				this.addVisible = false;
				this.reload();
				
				

			},
			//字符串转字符流
			s2ab (s) {
				if (typeof ArrayBuffer !== 'undefined') {
					var buf = new ArrayBuffer(s.length);
					var view = new Uint8Array(buf);
					for (var i = 0; i != s.length; ++i) view[i] = s.charCodeAt(i) & 0xFF;
					return buf;
				} else {
					var buf = new Array(s.length);
					for (var i = 0; i != s.length; ++i) buf[i] = s.charCodeAt(i) & 0xFF;
					return buf;
				}
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
						
						let arrList = res.data.object.pageInfoVo.list
						$.each(arrList, (idx, obj)=>{
							//console.log( idx )
							let vendorArr = [];
							vendorArr.push( obj.vendor )
							for( var i=0; i<vendorArr.length ; i++){
								this.opVendor.push( vendorArr[i]  )
							}
							
							let brandArr = [];
							brandArr.push( obj.brand )
							for( var i=0; i<brandArr.length ; i++){
								this.opBrand.push( brandArr[i]  )
							}
							
							
							let carSeriesArr = [];
							carSeriesArr.push( obj.carSeries )
							for( var i=0; i<carSeriesArr.length ; i++){
								this.opCarSeries.push( carSeriesArr[i]  )
							}
							
							let yearStyleArr = [];
							yearStyleArr.push( obj.yearStyle )
							for( var i=0; i<yearStyleArr.length ; i++){
								this.opYearStyle.push( yearStyleArr[i]  )
							}
							
							let carTypeArr = [];
							carTypeArr.push( obj.carType )
							for( var i=0; i<carTypeArr.length ; i++){
								this.opCarType.push( carTypeArr[i]  )
							}

						});
						
					}
				})
				.catch( (res)=>{
					console.log( res )
				})
				//console.log( this.pagesize )
				//this.getData(  );
				
			},
			//显示编辑界面
			editClick( index ){
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
			newAdd(){
				this.$router.push( { path: '/newmodel'})
			},
			
			
			
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
	.btndiv{
		width:100%;
		height:30px;
		top:105px;
		position:absolute;
		.el-button{
			font-size:12px;
			border:1px solid #1890ff;
			margin-left:10px;
			height:40px;
			position:relative;
			
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