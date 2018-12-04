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
			<el-breadcrumb separator="/">
				<el-breadcrumb-item :to="{ path: '/' }">高级表单常见于一次性输入和提交大批量数据的场景</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		<div class='contDiv'>
			<div class='subdiv'>
				<b>查询条件</b>
				<el-form  label-width="60px">
					<el-form-item label="编号:">
						<el-input v-model="marqueInfoId"></el-input>
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
						<el-input v-model="carType" style='width:200%;'></el-input>
					</el-form-item>
					<el-form-item style='margin-left:200px;'>
						<el-button type="primary" @click="Submit">搜索</el-button>
					</el-form-item>
				</el-form>
			</div>
			<div class="btndiv">
				<el-row  style='float:left'>
					<el-button type="primary" @click='newAdd'>新增</el-button>
					<el-button plain class='pln' @click="importData">导入</el-button>
					<el-button plain class='pln' @click="outportData">导出</el-button>
					
				</el-row>
			</div>
			<div class="formdiv">
				<el-table
					ref='multipleTable'
					:data="tableData1.slice((currentPage-1)*pagesize,currentPage*pagesize)"
					tooltip-effect="dark"
					style="width: 100%"
					max-height="200"
					@selection-change="handleSelectionChange">
					<el-table-column type="selection" width="55"></el-table-column>
					<el-table-column fixed prop="marqueInfoId" label="代码" width="200"></el-table-column>
					<el-table-column prop="vendor" label="厂商" width="120"></el-table-column>
					<el-table-column prop="brand" label="品牌" width="120"></el-table-column>
					<el-table-column prop="carSeries" label="车系" width="120"></el-table-column>
					<el-table-column prop="yearStyle" label="年款" width="300"></el-table-column>		
					<el-table-column prop="carType" label="车型" width="300"></el-table-column>	
					<el-table-column fixed="right" label="操作" width="120">
						<template slot-scope="scope">
							<el-button @click="editClick( scope.$index )" type="text" size="small">编辑</el-button>
							<el-button type="text" size="small" @click="delteClick( scope.$index )">删除</el-button>
						</template>
					</el-table-column>
				</el-table>
				
				<!-- 导入 -->
  <el-dialog title="导入" :visible.sync="dialogImportVisible" :modal-append-to-body="false" :close-on-click-modal="false" class="dialog-import">
      <div :class="{'import-content': importFlag === 1, 'hide-dialog': importFlag !== 1}">
        <el-upload class="upload-demo"
        :action="importUrl"
        :name ="name"
        :headers="importHeaders"
        :on-preview="handlePreview"
        :on-remove="handleRemove"
        :before-upload="beforeUpload"
        :on-error="uploadFail"
        :on-success="uploadSuccess"
        :file-list="fileList"
        :with-credentials="withCredentials">
        <!-- 是否支持发送cookie信息 -->
          <el-button size="small" type="primary" :disabled="processing">{{uploadTip}}</el-button>
          <div slot="tip" class="el-upload__tip">只能上传excel文件</div>
        </el-upload>
        <div class="download-template">
          <a class="btn-download" @click="download">
            <i class="icon-download"></i>下载模板</a>
        </div>
      </div>
      <div :class="{'import-failure': importFlag === 2, 'hide-dialog': importFlag !== 2}" >
        <div class="failure-tips">
          <i class="el-icon-warning"></i>导入失败</div>
        <div class="failure-reason">
          <h4>失败原因</h4>
          <ul>
            <li v-for="(error,index) in errorResults" :key="index">第{{error.rowIdx + 1}}行，错误：{{error.column}},{{error.value}},{{error.errorInfo}}</li>
          </ul>
        </div>
      </div>
    </el-dialog>
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
	import FileSaver from 'file-saver'
	import XLSX from 'xlsx'
	export default{
		inject: ["reload"],
		data(){
			return{
				input1:'',
				strid: '',
				tableData1: [],
				currentPage:1,
				pagesize:15,
				multipleSelection:[],
				importUrl:'www.baidu.com',
				importHeaders:{
					enctype:'multipart/form-data',
					cityCode:''
				},
				name:'import',
				fileList:[],
				withCredentials:true,
				processing:false,
				uploadTip:'点击上传',
				importFlag:1,
				dialogImportVisible:false,
				errorResults:[],
				marqueInfoId: '',
				vendor: '',
				brand: '',
				carSeries: '',
				yearStyle: '',
				carType: ''
			}
		},
		mounted(){
			this.loadDate()
		},
		methods:{
			handleSelectionChange(val) {
				//复选框选择回填函数,val返回一整行的数据
				this.multipleSelection = val;
				//console.log( val )
				　/* val.forEach((val, index) => {
　　　　　this.tableData1.forEach((v, i) => {
　　　　　　　// id 是每一行的数据id
            if(val.id == v.id){
              console.log(i);
            }
						
						
          }) 
					})*/
					this.strid = val[0].marqueInfoId.toString() 
			},
			importData() {
				return false;
				this.importFlag = 1
				this.fileList = []
				this.uploadTip = '点击上传'
				this.processing = false
				this.dialogImportVisible = true
			},
			outportData() {
				let params = {
         	"exportType": "marque_info",
         	"ids": this.strid,
					"appCode": "cfbizbaseservice.jr.jd.com"
				}
				//console.log( params )
				this.$http.post('/gateway/exportCSV',params)
				.then( function ( res ) {
					
					
					console.log( res.data )
				})
				.catch( function( error ) {
					console.log( error )
				})
				

			},
			handlePreview(file) {
				//可以通过 file.response 拿到服务端返回数据
			},
			handleRemove(file, fileList) {
				//文件移除
			},
			beforeUpload(file){
				//上传前配置
				this.importHeaders.cityCode='上海'//可以配置请求头
				let excelfileExtend = ".xls,.xlsx"//设置文件格式
				let fileExtend = file.name.substring(file.name.lastIndexOf('.')).toLowerCase();
				if (excelfileExtend.indexOf(fileExtend) <= -1) {
					this.$message.error('文件格式错误')
					return false
				}
				this.uploadTip = '正在处理中...'
				this.processing = true
			},
			//上传错误
			uploadFail(err, file, fileList) {
				this.uploadTip = '点击上传'
				this.processing = false
				this.$message.error(err)
			},
			//上传成功
			uploadSuccess(response, file, fileList) {
				this.uploadTip = '点击上传'
				this.processing = false
				if (response.status === -1) {
					this.errorResults = response.data
				if (this.errorResults) {
					this.importFlag = 2
				} else {
					this.dialogImportVisible = false
					this.$message.error(response.errorMsg)
					}
				} else {
					this.importFlag = 3
					this.dialogImportVisible = false
					this.$message.info('导入成功')
					this.doSearch()
				}
			},
			//下载模板
			download() {
				//调用后台模板方法,和导出类似
				scheduleApi.downloadTemplate()
			}, 
			Submit() {
				//alert('submit!');
				let params = {"jsfType" : "marqueInfoResource_queryMarqueInfoList",
					"valueJsonStr":[{          
						"currentPageNum": this.currentPage,
						"rowSize": this.pagesize,
						"appCode": "cfbizbaseservice.jr.jd.com",
						"vendor": this.vendor,
						"brand":this.brand,
						"carSeries":this.carSeries,
						"yearStyle":this.yearStyle,
						"carType":this.carType,
						"marqueInfoId":this.marqueInfoId
					}],
				}
				this.$http.post('/gateway/invokeJsf',params)
				.then( function ( res ) {
					//console.log(res)
					//this.tableData1 = [];
					if( res.data.code == '200'){
						console.log( res.data.object.marqueInfoVoList  )
						//this.tableData1 = res.data.object.marqueInfoVoList ;
						
					}else{
						return false
					}
				})
				.catch( function( error ) {
					console.log( error )
				})
				
			},
			handleSizeChange(val) {//当前页显示多少条
				this.pagesize = val;
				//console.log( this.pagesize )
			},
			handleCurrentChange(val) {  // 当前显示的页数
				this.currentPage = val;
				//console.log( this.currentPage )
			},
			//显示编辑界面
			editClick( index ){
				//console.log( this.tableData1[index].marqueInfoId, this.tableData1[index].appCode )
				this.$router.push({
					path:'/basicedit',
					query:{
						"marqueInfoId":this.tableData1[ index ].marqueInfoId
					}
				}); 
			},
			delteClick( index){
				//alert( index )
				let marqueInfoId = this.tableData1[ index ].marqueInfoId;
				let params = {"jsfType" : "marqueInfoResource_deleteMarqueInfoByInfoId",
					"valueJsonStr":[{
						 "marqueInfoId": marqueInfoId,
						 "appCode": "cfbizbaseservice.jr.jd.com"
					}]
				}
				this.$http.post('/gateway/invokeJsf',params)
				.then( function ( res ) {
					//console.log( res )
					if( res.data.code == '200'){
						this.tableData1 = [] ;
						//console.log( res.data.object.marqueInfoVoList )
					}else{
						return false;
					}	
				}.bind(this))
				.catch( function( error ) {
					console.log( error )
				}.bind(this))
			},// 点击新增按钮
			newAdd(){
				this.$router.push( { path: '/newmodel'})
			},
			loadDate(){/* 其他接口改变这里面的值 */
				let params = {"jsfType":"marqueInfoResource_queryMarqueInfoList",
					"valueJsonStr":[{          
						"currentPageNum": this.currentPage,
						"rowSize": this.pagesize,
						"appCode": "cfbizbaseservice.jr.jd.com"
					}]
				}
				this.$http.post('/gateway/invokeJsf',params)
				.then( function ( res ) {
					//console.log( res )
					if( res.data.code == '200'){
						this.tableData1 = res.data.object.marqueInfoVoList ;
						//console.log( res.data.object.marqueInfoVoList )
					}else{
						return false;
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
<style lang='scss' scoped>
	.hide-dialog{
		display:none;
	}
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
		padding:10px 20px 0 20px;
		position:absolute;
		
	}
	.btndiv{
		
		.el-button{
			font-size:12px;
			border:1px solid #1890ff;
			margin-left:10px;
			
			height:40px;
			position:relative;
			z-index:10;
		}
	}
	
	.subdiv{
		position:relative;
		.el-form-item{
			margin-bottom:10px;
			float:left;
			.el-input{
				width:70%;
			}
		}
		z-index:10;	
		
	}
	.basicdiv{
		width:100%;
		height:100%;
		
	}
</style>