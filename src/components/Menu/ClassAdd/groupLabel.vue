<template>
	<div class='modeldiv'>
		<div class='crumbs'>
			<el-breadcrumb separator="/">
				<el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
				<el-breadcrumb-item><a href="/">合作商分组</a></el-breadcrumb-item>
				<el-breadcrumb-item><a href="/">{{this.$route.query.idx}}</a></el-breadcrumb-item>
			</el-breadcrumb>
			<el-breadcrumb separator="/">
				<el-breadcrumb-item :to="{ path: '/' }"><b>{{this.$route.query.idx}}</b></el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		<div class='contDiv'>
			<div class="btndiv">
				<el-row>
					<el-button plain class='pln' @click="importData">导入</el-button>
					<el-button plain class='pln' @click="outportData">导出</el-button>
					<!-- <input type="text" v-model='tipsa'> -->
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
					ref='multipleTable'
					:data="tableData1"
					tooltip-effect="dark"
					style="width:100%"
					:height="tableHeight"
					@selection-change="handleSelectionChange">
					<el-table-column type="selection" width="100%"></el-table-column>
					<el-table-column fixed prop="vehicleInfoId" label="代码" width=""></el-table-column>
					<el-table-column prop="vendor" label="厂商" width=""></el-table-column>
					<el-table-column prop="brand" label="品牌" width=""></el-table-column>
					<el-table-column prop="carSeries" label="车系" width=""></el-table-column>
					<el-table-column prop="yearStyle" label="年款" width=""></el-table-column>		
					<el-table-column prop="carType" label="车型" width=""></el-table-column>	
				</el-table>
				<el-pagination
					style="text-align:right"
					@size-change="handleSizeChange"
					@current-change="handleCurrentChange"
					:current-page="currentPage"
					:page-sizes="[10, 30,100]"
					:page-size="pagesize"
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
	import axios from 'axios'
	export default{
		inject: ["reload"],
		data(){
			return{
				input1:'',
				tableHeight:window.innerHeight - 220,
				tableData1: [],
				currentPage:1,
				pagesize:10,
				total: 0,
				msgId:'',
				msgIdx:'',
				tipsa:''
			}
		},
		beforeRouteEnter(to, from, next) {	
			next()
		}, 
		beforeRouteUpdate(to,from,next){
// 			console.log(to.matched[0])
			//console.log( to.query.id )
			this.msg = to.query.id
			console.log( to.query.id )
			let params = {  
					"jsfType":"vehicleMerchantResource_queryMerGroMarList",
                        "valueJsonStr":[{
                            "pageInfoVo": {
								"pageNum": this.currentPage,
								"pageSize":  this.pagesize
                            },
                        "appCode": "cfbizbaseservice.jr.jd.com",
                        "groupId": this.msg
                    }]
				}
			this.$http.post('/gateway/invokeJsf',params)
			.then( ( res )=>{
				if( res.data.code == "200" ){
					console.log( res.data.object.pageInfoVo.list)
					this.tableData1 = res.data.object.pageInfoVo.list
					this.pagesize = res.data.object.pageInfoVo.pageSize ;
					this.total = res.data.object.pageInfoVo.total ;
					this.currentPage = res.data.object.pageInfoVo.pageNum; // 当前多少页
				}else{
					//alert('网络异常')
					return false;
				}
			})
			.catch( ( error )=>{
				console.log( error )
			})
			next() 

		},
		mounted(){
			//alert('mounted')
			this.loadData();
			$('.el-input__inner').css({"height":"30px"}),
			$('.el-input__prefix').css({'height':'30px'})
			$('.el-input__icon').css({"line-height":"30px"})
			$('.el-button').css({"height":"30px","line-height":"0px"})
		}, 
		methods:{
			onSubmit() {
				let params = {  
					"jsfType":"vehicleMerchantResource_queryMerGroMarList",
                        "valueJsonStr":[{
                            "pageInfoVo": {
								"pageNum": this.currentPage ,
								"pageSize": this.pagesize
                            },
                        "appCode": "cfbizbaseservice.jr.jd.com",
                        "groupId": this.$route.query.id,
						"searchName": this.input1,
						"merchantCode": "1234"
                    }]
				}
				console.log( JSON.stringify( params ))
				this.$http.post('/gateway/invokeJsf',params)
				.then( ( res )=>{
					console.log(res)
					if( res.data.code == '200'){
						this.tableData1 = res.data.object.pageInfoVo.list ;
						this.pagesize = res.data.object.pageInfoVo.pageSize ;
						this.total = res.data.object.pageInfoVo.total ;
						this.currentPage = res.data.object.pageInfoVo.pageNum; // 当前多少页
						//console.log( this.tableData1, res.data.object.merGroInfos)
						this.addVisible = false;
						this.reload();
					}else{
						return false;
					}
					
				})
				.catch( ( error )=>{
					console.log(error)
				})
			},
			importData(){
				this.$router.push({path:'/gexport', query: {id:this.msgId ,idx:this.msgIdx}})
			},
			handleSizeChange(val) {
				this.pagesize = val;
				let params = {  
					"jsfType":"vehicleMerchantResource_queryMerGroMarList",
						"valueJsonStr":[{
							"pageInfoVo": {
								"pageNum": this.currentPage,
								"pageSize":  this.pagesize
							},
						"appCode": "cfbizbaseservice.jr.jd.com",
						"groupId": this.$route.query.id
					}]
				}
				this.$http.post('/gateway/invokeJsf',params)
				.then( ( res )=>{
					if( res.data.code == "200" ){
						console.log( res.data)
						this.tableData1 = res.data.object.pageInfoVo.list;   // 当前列表的数据
						this.currentPage = res.data.object.pageInfoVo.pageNum; // 当前多少页
						//this.pagesize = res.data.object.pageInfoVo.pageSize ;  // 当前页多少数据
						this.total = res.data.object.pageInfoVo.total ; //总共多少页
					}else{
						//alert('网络异常')
						return false;
					}
				})
				.catch( ( error )=>{
					console.log( error )
				})
			},
			handleCurrentChange(val) {
				this.currentPage = val;
				let params = {  
					"jsfType":"vehicleMerchantResource_queryMerGroMarList",
						"valueJsonStr":[{
							"pageInfoVo": {
								"pageNum": this.currentPage,
								"pageSize":  this.pagesize
							},
						"appCode": "cfbizbaseservice.jr.jd.com",
						"groupId": this.$route.query.id
					}]
				}
				this.$http.post('/gateway/invokeJsf',params)
				.then( ( res )=>{
					if( res.data.code == "200" ){
						console.log( res.data)
						this.tableData1 = res.data.object.pageInfoVo.list;   // 当前列表的数据
						//this.currentPage = res.data.object.pageInfoVo.pageNum; // 当前多少页
						this.pagesize = res.data.object.pageInfoVo.pageSize ;  // 当前页多少数据
						this.total = res.data.object.pageInfoVo.total ; //总共多少页
					}else{
						//alert('网络异常')
						return false;
					}
				})
				.catch( ( error )=>{
					console.log( error )
				})
			},
			editClick(){
				alert('编辑页面')
			},
			handleSelectionChange(val) {
				//复选框选择回填函数,val返回一整行的数据
				this.multipleSelection = val;
				//console.log( this.multipleSelection )
			},
			
			/* newRelation(){
				//alert('关联数据')
				this.tipsa = "关联操作"
				var mulObj = this.multipleSelection;
				//console.log( mulObj )
				var mulObjArr = [];
				$.each(mulObj, function(idx, obj) {
					//console.log(obj.vehicleInfoId);
					let objStr = obj.vehicleInfoId.toString()
					mulObjArr.push( obj.vehicleInfoId ) 
				});
				console.log( mulObjArr )
				//console.log( this.msg )
				let params = {
					"jsfType": "vehicleMerchantResource_merGroRelatedMar",
					"valueJsonStr": [{
						"appCode": "cfbizsupport.jr.jd.com",
						"groupId": this.msg,
						"vehicleInfoIds": mulObjArr
					}]
				}
				//console.log( JSON.stringify( params ) )
				console.log( this.msg )
				this.$http.post('/gateway/invokeJsf',params)
				.then( ( res )=>{
					console.log( res )
					if( res.data.code == "200" ){
						
						this.addVisible = false;
						this.reload();
						alert('关联成功');
					}else{
						alert('关联失败');
						return false;
					}	
				})
				.catch( ( error )=>{
					console.log( error )
				})	
			}, */
			delteClick(){
				alert('删除页面')
			},// 点击新增按钮
			/* 
			newAdd(){
				//点击新增
				console.log( this.$route.query.id )
				//return false
				//this.tipsa = "新增操作"
				let params = {
					"jsfType": "vehicleMerchantResource_queryMerGroNotMarList",
					"valueJsonStr": [{
						"appCode": "cfbizbaseservice.jr.jd.com",
						"merGroId": this.$route.query.id,
						"pageInfoVo": {
							"pageNum": this.currentPage,
							"pageSize": this.pagesize
						}
					}]
				}
				//console.log( params )
				this.$http.post('/gateway/invokeJsf',params)
				.then( ( res )=>{
					if( res.data.code == "200" ){
						console.log( res )
						this.tableData1 = res.data.object.pageInfoVo.list
						this.pagesize = res.data.object.pageInfoVo.pageSize ;
						this.total = res.data.object.pageInfoVo.total ;
						this.currentPage = res.data.object.pageInfoVo.pageNum; // 当前多少页
					}else{
						alert('网络异常');
						return false;
					}	
				})
				.catch( ( error )=>{
					console.log( error )
				})	
			}, */
			
			loadData(){
				console.log(this.$route.query.id )
				//this.msg = this.$route.query.id
				this.msgId = this.$route.query.id ;
				this.msgIdx = this.$route.query.idx ;
				let params = {  
					"jsfType":"vehicleMerchantResource_queryMerGroMarList",
                        "valueJsonStr":[{
                            "pageInfoVo": {
								"pageNum": this.currentPage,
								"pageSize":  this.pagesize
                            },
                        "appCode": "cfbizbaseservice.jr.jd.com",
                        "groupId": this.$route.query.id
                    }]
				}
				this.$http.post('/gateway/invokeJsf',params)
				.then( ( res )=>{
					if( res.data.code == "200" ){
						console.log( res.data)
						this.tableData1 = res.data.object.pageInfoVo.list;   // 当前列表的数据
						this.currentPage = res.data.object.pageInfoVo.pageNum; // 当前多少页
						this.pagesize = res.data.object.pageInfoVo.pageSize ;  // 当前页多少数据
						this.total = res.data.object.pageInfoVo.total ; //总共多少页
					}else{
						//alert('网络异常')
						return false;
					}
				})
				.catch( ( error )=>{
					console.log( error )
				}) 
			},
			outportData() {
				
				var dataArr = [];
				let mulObj = this.multipleSelection;
				for( let i in mulObj ){
					dataArr.push( mulObj[i] )
				}
				if( dataArr == null || dataArr.length == 0){
					alert('请勾选你要导入的数据!')
					return false;
				}
				console.log( dataArr)
				
				for(var i = 0; i < dataArr.length; i++) {
					dataArr[i]["车型编码"] = dataArr[i]["vehicleInfoId"];    //
					dataArr[i]["品牌"] = dataArr[i]["brand"];   //'text'是需要的字段   //
					dataArr[i]["车系"] = dataArr[i]["carSeries"];   //
					dataArr[i]["年款"] = dataArr[i]["yearStyle"];   //
					dataArr[i]["厂商"] = dataArr[i]["vendor"];    //
					dataArr[i]["车型"] = dataArr[i]["carType"];    //
					delete dataArr[i]["brand"];  //key是要替换为'text'的字段
					delete dataArr[i]["carSeries"];
					delete dataArr[i]["yearStyle"];
					delete dataArr[i]["vendor"];
				//	delete dataArr[i]["vehicleBaseId"];
					delete dataArr[i]["carType"];
				//	delete dataArr[i]["guidePrice"];
				//	delete dataArr[i]["vehicleColor"];
				//	delete dataArr[i]["createTime"];
				//	delete dataArr[i]["vehicleCfgInfo"];
				//	delete dataArr[i]["creator"];
				//	delete dataArr[i]["validFlag"];
					delete dataArr[i]["vehicleInfoId"];
					delete dataArr[i]["class"];
				//	delete dataArr[i]["displayImg"];
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
			}
		},
		components:{
			
		}
	}
</script>
<style lang='scss' scoped>
	.el-row {
		width:540px;
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
	.pln{
		color:#1890ff;
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
	.modeldiv{
		width:100%;
		height:100%;
	}
	
</style>