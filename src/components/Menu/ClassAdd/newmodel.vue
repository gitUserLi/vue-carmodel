<template>
	<div>
		<div class='crumbs'>
			<el-breadcrumb separator="/">
				<el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
				<el-breadcrumb-item><a href="/">车型库</a></el-breadcrumb-item>
				<el-breadcrumb-item>基础页</el-breadcrumb-item>
				<el-breadcrumb-item>新增车型</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		<div class='contDiv'>
			<b>新增车型</b>
			<el-form :model="ruleForm2" :rules="rules" status-icon ref="ruleForm2" label-width="100px" class="demo-ruleForm" >
				<div class='htitle'><h2 style='font-size:16px;'>车型信息</h2><span @click='modelzd1'>折叠</span></div>
				<div style="border-bottom:1px dashed #f2f2f2;overflow:auto;" class='hcontent' v-show='showDate1'>
					<el-form-item label="厂商 : " prop="value">
						<el-select v-model="ruleForm2.value" filterable placeholder="请选择厂商" @change="currentSel" allow-create>
							<el-option
								v-for="item in options"
								:key="item.marqueId"
								:label="item.label"
								:value="item.marqueName"
								>
							</el-option>
						</el-select>
					</el-form-item>
					<el-form-item label="年款 : " prop="value2">
						<el-select v-model="ruleForm2.value2" filterable placeholder="请选择年款" no-data-text='请先选择车系' @change="currentSel2" allow-create>
							<el-option
								v-for="item in options2"
								:key="item.marqueId"
								:label="item.label"
								:value="item.marqueName">
							</el-option>
						</el-select>
					</el-form-item>
					<el-form-item label="品牌 : " prop="value1">
						<el-select v-model="ruleForm2.value1" filterable placeholder="请选择品牌" no-data-text='请先选择厂商' @change="currentSel1" allow-create>
							<el-option
								v-for="item in this.options1"
								:key="item.marqueId"
								:label="item.label"
								:value="item.marqueName">
							</el-option>
						</el-select>
					</el-form-item>
					<el-form-item label="车型 : " prop="value3">
						<el-select v-model="ruleForm2.value3" filterable placeholder="请输入车系" no-data-text='请先选择年款' @change="currentSel3" allow-create>
							<el-option
								v-for="item in this.options3"
								:key="item.value"
								:label="item.label"
								:value="item.marqueName"
								>
							</el-option>
						</el-select>
					</el-form-item>
					<el-form-item label="车系 : " prop="value4" >
						<el-select v-model="ruleForm2.value4" filterable placeholder="请输入车型"  no-data-text='请先选择品牌' @change="currentSel4" allow-create>
							<el-option
								v-for="item in this.options4"
								:key="item.marqueId"
								:label="item.label"
								:value="item.marqueName">
							</el-option>
						</el-select>
					</el-form-item>
	
				</div>
				
				<div class='htitle'><h2 style='font-size:16px;'>车辆参数</h2></div>
				<div class='onediv'>
					<div v-for="(item,i) of items" :key="i" >
						<el-form-item :label="'参数名称 '+(i+1)+':'" prop="bindName" >
							<el-input type="text"  v-model="ruleForm2.bindName[i]" auto-complete="off" placeholder="请输入名称"></el-input>
						</el-form-item>
						<el-form-item :label="'参数值 '+(i+1)+':'" prop="bindParms" >
							<el-input type="text"  v-model="ruleForm2.bindParms[i]" auto-complete="off" placeholder="请输入参数"></el-input>
						</el-form-item>
					</div>
					<div class="button" @click='xzcs'>新增参数</div>
				</div>
				
				<div class='htitle'><h2 style='font-size:16px;'>价格信息</h2></div>
				<div class='onediv'>
					<el-form-item label="厂商指导价 : " prop="guidePrice">
						<el-input type="text" v-model="ruleForm2.guidePrice" auto-complete="off" placeholder="请输入品牌名称"></el-input>
					</el-form-item>
				</div>
				
				<div class='htitle'><h2 style='font-size:16px;'>车型信息</h2><span @click='modelzd2'>折叠</span></div>
				<div style="border-bottom:1px dashed #f2f2f2;padding-bottom:150px;" class='hcontent' v-show='showDate2'>
					<div id='elupload' style='display:inline-block'>
						<el-upload
							action="http://172.25.35.204:8304/img/upload"
							ref="upload"
							list-type="picture-card"
							:limit=1
							:auto-upload="true"
							:on-error="uploadFail"
							:on-exceed="handleExceed"
							:on-progress="uploadProgress"
							:on-success="uploadSuccess"
							:on-preview="handlePictureCardPreview"  
							:on-remove="handleRemove">  <!-- 点击文件列表中已上传的文件时的钩子 --><!-- 文件列表移除文件时的钩子 -->
							<i class="el-icon-plus"></i>
							
						</el-upload>
						<span class='span2'>头屏商品页</span>
						<span class='span1'>250X250</span>
						<el-dialog :visible.sync="dialogVisible">
							<img width="100%" :src="dialogImageUrl" alt="">
						</el-dialog>
					</div>
					<div id='elupload2' style='display:inline-block'>
						<el-upload
							action="http://172.25.35.204:8304/img/upload"
							list-type="picture-card"
							:limit=1
							:auto-upload="false"
							:on-error="uploadFail"
							:on-success ="uploadSuccess"
							:on-preview="handlePictureCardPreview"  
							:on-remove="handleRemove">  <!-- 点击文件列表中已上传的文件时的钩子 --><!-- 文件列表移除文件时的钩子 -->
							<i class="el-icon-plus"></i>
						</el-upload>
						<span class='span2'>头屏商品页</span>
						<span class='span1'>320X200</span>
						<el-dialog :visible.sync="dialogVisible">
							<img width="100%" :src="dialogImageUrl" alt="">
						</el-dialog>
					</div>
					<div id='elupload3' style='display:inline-block'>
						<el-upload
							action="http://172.25.35.204:8304/img/upload"
							list-type="picture-card"
							:limit=1
							:on-error="uploadFail"
							:auto-upload="false"
							:on-success ="uploadSuccess"
							:on-preview="handlePictureCardPreview"  
							:on-remove="handleRemove">  <!-- 点击文件列表中已上传的文件时的钩子 --><!-- 文件列表移除文件时的钩子 -->
							<i class="el-icon-plus"></i>
							
						</el-upload>
						<span class='span2'>宣传图</span>
						<span class='span1'>320X200</span>
						<el-dialog :visible.sync="dialogVisible">
							<img width="100%" :src="dialogImageUrl" alt="">
						</el-dialog>
					</div>
				</div>
			
				<div class='onediv' style='margin-top:10px;margin-bottom:20px'>
					<h2 style='font-size:16px;'>车型颜色</h2>
					<div v-for="(item,i) of items2" v-model="items2[i]" :key="i" id='newcolor'>
						<el-form-item :label="'颜色 '+(i+1)+':'" prop="marqueColor[i]" >
							<el-input type="text" v-model="ruleForm2.marqueColor[i]" auto-complete="off" placeholder="请输入颜色"></el-input>
						</el-form-item>			
					</div>
					<div id="btn" @click='xzys'>新增颜色</div>
				</div>
				<el-form-item>
					<el-button type="primary" @click="submitForm(ruleForm2)">保存</el-button>
					<el-button @click="resetForm()">取消</el-button>
				</el-form-item>
			</el-form>
		</div>
	</div>
</template>
<script>
	import $ from 'jquery'
	export default{
		data(){
			/* let validatePass = (rule, value, callback) => {
				if (value === '') {
					callback(new Error('Please input the password'));
				} else {
				if (this.ruleForm2.value !== '') {
					this.$refs.ruleForm2.validateField('value');
				}
					callback();
				}
			};
			let validatePass1 = (rule, value, callback) => {
				if (value === '') {
					callback(new Error('Please input the password'));
				} else {
				if (this.ruleForm2.value1 !== '') {
					this.$refs.ruleForm2.validateField('value1');
				}
					callback();
				}
			};
			let validatePass4 = (rule, value, callback) => {
				if (value === '') {
					callback(new Error('Please input the password'));
				} else {
				if (this.ruleForm2.value4 !== '') {
					this.$refs.ruleForm2.validateField('value4');
				}
					callback();
				}
			};
			let validateName = (rule, value, callback) => {
				if (value === '') {
					callback(new Error('Please input the password'));
				} else {
				if (this.ruleForm2.bindName !== '') {
					this.$refs.ruleForm2.validateField('bindName');
				}
					callback();
				}
			};
			let validateParms = (rule, value, callback) => {
				if (value === '') {
					callback(new Error('Please input the password'));
				} else {
				if (this.ruleForm2.bindParms !== '') {
					this.$refs.ruleForm2.validateField('bindParms');
				}
					callback();
				}
			}; */
			
			return{
				items: [''],
				items2: [''],
				showDate1: true,
				showDate2: true,
				count: 0 ,
				options: [],
				options1:[],
				options2:[],
				options3:[],
				options4:[],
				ruleForm2: {
					value1: '',
					value:'',
					value2:'',
					value3:'',
					value4:'',
					marqueId0:'',
					marqueId1:'',
					marqueId4:'',
					marqueId2:'',
					marqueId3:'',
					parentId0:'',
					parentId1:'',
					parentId4:'',
					parentId2:'',
					parentId3:'',
					guidePrice:'',
					bindName: ['',''],
					bindParms: ['',''],
					marqueColor:['','']
				},
				dialogImageUrl: '',
				dialogVisible: false,
				rules: {
					value: [
						{ required: true,  trigger: 'change' }//validator: validatePass,
					],
					value1: [
						{ required: true, trigger: 'change' }//validator: validatePass1,  
					],
					value2: [
						{  trigger: 'change' }
					],
					value3: [
						{  trigger: 'change' }
					],
					value4: [
						{ required: true,  trigger: 'change' }// validator: validatePass4, 
					],
					bindName: [
						{ type: 'array', trigger: 'change' }// validator: validateName, 
					],
					bindParms: [
						{ type: 'array',  trigger: 'blur' }// validator: validateParms,
					],
					price:[
						{ trigger: 'blur' }
					],
					color:[
						{  trigger: 'blur' }
					]	
				},
// 				"marqueCfgInfo": {
// 						/* "排量": "200XX ",
// 						"胎距": "100XX",
// 						"燃油类型": "XXXX" */
// 						"this.ruleForm2.bindName[i]":"this.ruleForm2.bindParms[i]"
// 				}
				"baseCascadeList": [
									{
										"marqueName": "华晨",
										"marqueId": "base18112510007134", //选择——传其marqueId与parentId
										"parentId":  "0",
										"baseType": 1
									}, 
									{
										"marqueName": "宝马",
										"marqueId": "base18112510007135",  //选择——传其marqueId与parentId
										"parentId":  "base18112510007134",
										"baseType": 2
									}, 
									{
										"marqueName": "宝马三系",
										"marqueId": null,
										"parentId": "base18112510007135", //输入——若开始输入需要传其父id,剩下几级id可传空
										"baseType": 3
									}, 
									{
										"marqueName": "2018年款", //id可传空
										"marqueId": null,
										"parentId": null,
										"baseType": 4
									}, 
									{
										"marqueName": "320i运动套餐", //id可传空
										"marqueId": null,
										"parentId": null,
										"baseType": 5
									}
									]
			}
		},
		mounted(){
			this.loadData();
		},
		methods:{
			xzcs(){
				this.items.push('');
			},
			xzys(){
				this.items2.push('');
			},
			modelzd1(e){
				this.count ++ ;
				this.showDate1 = !this.showDate1
				if( this.count % 2 == 0){
					e.target.innerHTML = "折叠";
				}else{ 
					e.target.innerHTML = "打开";
				} 
			},
			modelzd2(e){
				this.count ++ ;
				this.showDate2 = !this.showDate2;
				if( this.count % 2 == 0){
					e.target.innerHTML = "折叠";
				}else{ 
					e.target.innerHTML = "打开";
				} 
			},
			handleRemove(file, fileList) {
				console.log(file, fileList);
			},
			uploadSuccess( response,file,fileList ){
				
				console.log( response,file,fileList)
				//this.$refs.upload.clearFiles()
			},
			uploadFail( response,file,fileList ){
				console.log(response)
			},
			uploadProgress( event,file,fileList ){
				console.log(event)
			},
			handleExceed( ){
				alert('只能上传一张图片')
			},
			currentSel(selVal){   //点击厂商列表 , 品牌列表有值	
				this.selVal = selVal;  // 当前所选的值
				//this.nav = nav ;
				var obj = {};
				obj = this.options.find(function(item){
				  return item.marqueName === selVal 
				});
				//obj 就是被选中的那个对象，
				let parentId = obj.marqueId;   
				this.ruleForm2.marqueId0 = obj.marqueId ;  // 点击那个显示那个 mqrqueId
				this.ruleForm2.parentId0 = obj.parentId ;
				let params = {"jsfType":"marqueBaseResource_queryMarqueBaseListByPId",
					"valueJsonStr":[{
						"parentId": parentId, 
						"marqueType": 1,
						"appCode": "cfbizbaseservice.jr.jd.com"
					}]
				}
				this.$http.post('/gateway/invokeJsf',params)
				.then( function ( res ) {
					let obj1 = res.data.object.marqueBaseVoList ;
					let len1 = obj1.length;
					for( var i=0; i<len1; i++){
						this.options1.push( obj1[i] )	
					}
					//console.log(this.options)
					this.options1 = this.options1
				}.bind(this))
				.catch( function( error ) {
					console.log( error )
				}.bind(this))
					
			},
			currentSel1(selVal){  //点击品牌列表 , 车系有值
				this.selVal = selVal;  // 当前所选的值
				//console.log( this.selVal )
				let obj = {};
				obj = this.options1.find(function(item){
					return item.marqueName === selVal 
				});
				//obj 就是被选中的那个对象，
				let parentId = obj.marqueId;  
				this.ruleForm2.marqueId1 = obj.marqueId ;  // 点击那个显示那个 mqrqueId
				this.ruleForm2.parentId1 = obj.parentId ;
				let params = {"jsfType":"marqueBaseResource_queryMarqueBaseListByPId",
					"valueJsonStr":[{
						"parentId": parentId, 
						"marqueType": 1,
						"appCode": "cfbizbaseservice.jr.jd.com"
					}]
				}
				this.$http.post('/gateway/invokeJsf',params)
				.then( function ( res ) {
					var obj1 = res.data.object.marqueBaseVoList ;
					var len1 = obj1.length;
					for( var i=0; i<len1; i++){
						this.options4.push( obj1[i] )	
					}
					//console.log(this.options4)
					this.options4 = this.options4
				}.bind(this))
				.catch( function( error ) {
					console.log( error )
				}.bind(this)) 
				
			},
			currentSel4(selVal){  //点击车系列表 , 年款有值
				this.selVal = selVal;  // 当前所选的值
				//console.log( this.selVal )
				var obj = {};
				obj = this.options4.find(function(item){
					return item.marqueName === selVal 
				});
				//obj 就是被选中的那个对象，
				let parentId = obj.marqueId;
				this.ruleForm2.marqueId4 = obj.marqueId ;  // 点击那个显示那个 mqrqueId
				this.ruleForm2.parentId4 = obj.parentId ;
				let params = {"jsfType":"marqueBaseResource_queryMarqueBaseListByPId",
					"valueJsonStr":[{
						"parentId": parentId, 
						"marqueType": 1,
						"appCode": "cfbizbaseservice.jr.jd.com"
					}]
				}
				this.$http.post('/gateway/invokeJsf',params)
				.then( function ( res ) {
					var obj1 = res.data.object.marqueBaseVoList ;
					var len1 = obj1.length;
					for( var i=0; i<len1; i++){
						this.options2.push( obj1[i] )	
					}
					//console.log(this.options2)
					this.options2 = this.options2
				}.bind(this))
				.catch( function( error ) {
					console.log( error )
				}.bind(this)) 
				
			},
			currentSel2(selVal){
				this.selVal = selVal ;
				//console.log( this.selVal )
				var obj = {};
				obj = this.options2.find(function(item){
					return item.marqueName === selVal 
				});
				//obj 就是被选中的那个对象，
				let parentId = obj.marqueId;
				this.ruleForm2.marqueId2 = obj.marqueId ;  // 点击那个显示那个 mqrqueId
				this.ruleForm2.parentId2 = obj.parentId ;
				let params = {"jsfType":"marqueBaseResource_queryMarqueBaseListByPId",
					"valueJsonStr":[{
						"parentId": parentId, 
						"marqueType": 1,
						"appCode": "cfbizbaseservice.jr.jd.com"
					}]
				}
				this.$http.post('/gateway/invokeJsf',params)
				.then( function ( res ) {
					var obj1 = res.data.object.marqueBaseVoList ;
					var len1 = obj1.length;
					for( var i=0; i<len1; i++){
						this.options3.push( obj1[i] )	
					}
					//console.log(this.options3)
					this.options3 = this.options3
				}.bind(this))
				.catch( function( error ) {
					console.log( error )
				}.bind(this)) 
			},
			currentSel3( selVal ){
				this.selVal = selVal ;
				//console.log( this.selVal )
				var obj = {};
				obj = this.options3.find(function(item){
					return item.marqueName === selVal 
				});
				//obj 就是被选中的那个对象，
				let parentId = obj.marqueId;
				this.ruleForm2.marqueId3 = obj.marqueId ;  // 点击那个显示那个 mqrqueId
				this.ruleForm2.parentId3 = obj.parentId ;
			},
			handlePictureCardPreview(file) {
				this.dialogImageUrl = file.url;
				this.dialogVisible = true;
			},
			submitForm(event){
				/* this.$refs[event].validate((valid) => {
					if (valid) {
						alert('submit!');
					} else {
						console.log('error submit!!');
						return false;
					}
				}); */
				let sult = [{
								"marqueName": this.ruleForm2.value,
								"marqueId": this.ruleForm2.marqueId0,
								"parentId": this.ruleForm2.parentId0,
								"baseType": 1,
							},
							{
								"marqueName": this.ruleForm2.value1,
								"marqueId": this.ruleForm2.marqueId1,
								"parentId": this.ruleForm2.parentId1,
								"baseType": 2,
							},
							{
								"marqueName": this.ruleForm2.value4,
								"marqueId": this.ruleForm2.marqueId4,
								"parentId": this.ruleForm2.parentId4,
								"baseType": 3,
							},
							{
								"marqueName": this.ruleForm2.value2,
								"marqueId": this.ruleForm2.marqueId2,
								"parentId": this.ruleForm2.parentId2,
								"baseType": 4,
							},
							{
								"marqueName": this.ruleForm2.value3,
								"marqueId": this.ruleForm2.marqueId3,
								"parentId": this.ruleForm2.parentId3,
								"baseType": 5,
							}] 
				let len = sult.length;
				for( var i = 0; i<len ; i++){
					
					for( var key in sult[i] ){
						//console.log( key+ ':'+ sult[i][key])
						if( key == "marqueName"){
							if( sult[i].marqueId == "" ){
								sult[ sult[i].baseType-1 ].parentId = sult[ sult[i].baseType - 2 ].marqueId
							}
						}
						
					}
				}
				var dataList = new Array();
				var sublistData = {}; 
				sublistData["baseCascadeList"] = sult;
				
				// 车辆参数
				var carParms = {};
				var leng = this.ruleForm2.bindName.length;
				for(var i=0; i<leng; i++ ){
					carParms[ this.ruleForm2.bindName[i] ] =  this.ruleForm2.bindParms[i]
				}
				sublistData["marqueCfgInfo"] = JSON.stringify( carParms );
				//console.log( JSON.stringify( carParms ) )
				
				//颜色
				sublistData["marqueColor"] = JSON.stringify( this.ruleForm2.marqueColor) ;
				
				sublistData["marqueType"] = 1 ;
				
				sublistData["appCode"] = "cfbizbaseservice.jr.jd.com";
				
				//console.log( JSON.stringify( sublistData ) )
				let SaveMarqueReqVo = JSON.stringify( sublistData ) ;
				//console.log(sublistData)
				let params = {"jsfType":"marqueBaseResource_saveMarqueBaseAndInfo",
					"valueJsonStr": [SaveMarqueReqVo]
				}
				this.$http.post('/gateway/invokeJsf',params)
				.then( function ( res ) {
					console.log( res )
				}.bind(this))
				.catch( function( error ) {
					console.log( error )
				}.bind(this))
					
			},
			resetForm(){
				this.$refs.ruleForm2.resetFields()
			},

			loadData(){
				let params = {"jsfType":"marqueBaseResource_queryMarqueBaseListByPId",
					"valueJsonStr":[{
						"parentId": "0",
						"marqueType": 1,
						"appCode": "cfbizbaseservice.jr.jd.com"
					}]
				}
				this.$http.post('/gateway/invokeJsf',params)
				.then( function ( res ) {
					//this.tableData1 = res.data.object.marqueInfoVoList ;
					//this.options = res.data.object.marqueBaseVoList
					//console.log( res )
					var obj = res.data.object.marqueBaseVoList ;
					var len = obj.length;
					
					for( var i=0; i<len; i++){
						this.options.push( obj[i] )
					}
					//console.log(this.options)
					this.options = this.options
					
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
	.crumbs{
		width:100%;
		height:12%;
		background:#fff;
		padding-left:2%;
		overflow:hidden;
		.el-breadcrumb{
			margin:0.5% 0;
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
		overflow-y:scroll;
	}
	.htitle{
		margin:1% 5%;
		width:90%;
		height:50px;
		line-height:50px;
		h2{
			display:inline;
		}
		span{
			display:inline;
			border:1px solid #000;
			float:right;
			width:80px;
			height:30px;
			text-align:center;
			line-height:30px;
			background:#fff;
		}
	}
	.hcontent,.onediv{
		padding:0 5%;
		overflow:hidden;
		.el-form-item{
			width:40%;
			float:left;
			.el-select{
				width:100%;
			}
		}
		.button{
			width:60%;
			margin-left:10%;
			background:#828282;
			color:#0298fd;
			float:left;
			height:36px;
			text-align:center;
			line-height:36px;
		}
		#newcolor{
			.el-form-item{
				width:25%;
			}
		}
		#btn{
			width:15%;
			height:36px;
			background:#828282;
			color:#0298fd;
			text-align:center;
			line-height:36px;
			float:left;
			margin-left:5%;
		}
	}
	
	#elupload,#elupload2,#elupload3{
		position:relative;
		width:148px;
		height:148px;
		margin-right:1%;
		span{
			position:absolute;
			display:inline;
			text-align:center;
			line-height:25px;
			height:25px;
			width:146px;
			border-radius:5px 5px 0 0;
			
		}
		.span1{
			left:1px;
			top:-1px;
			background:#717171;
		}
		.span2{
			left:1px;
			bottom:5px;
			
		}
	}
	#elupload>div{
		display:inline;
	}
	#elupload2>div{
		display:inline;
	}
	#elupload3>div{
		display:inline;
	}
	#elupload,#elupload2,#elupload3{
		display:inline;
	}


		
	
</style>