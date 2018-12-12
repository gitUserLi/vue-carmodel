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
			<el-form :model="ruleForm2" :rules="rules" status-icon ref="ruleForm2" label-width="120px" class="demo-ruleForm" >
				<div class='htitle'><h2 style='font-size:16px;'>车型信息</h2><span @click='modelzd1'>折叠</span></div>
				<div style="border-bottom:1px dashed #f2f2f2;overflow:auto;" class='hcontent' v-show='showDate1'>
					
					<el-form-item label="厂商 : " prop="value">
						<el-select v-model="ruleForm2.value" filterable placeholder="请选择厂商" @change="currentSel" allow-create >
							<el-option
								ref='elOption'
								v-for="item in options"
								:key="item.vehicleId"
								:label="item.label"
								:value="item.vehicleName"
								>
							</el-option>
						</el-select>
					</el-form-item>
					<el-form-item label="年款 : " prop="value2">
						<el-select v-model="ruleForm2.value2" filterable placeholder="请选择年款" no-data-text='请先选择车系' @change="currentSel2" allow-create >
							<el-option
								v-for="item in options2"
								:key="item.vehicleId"
								:label="item.label"
								:value="item.vehicleName">
							</el-option>
						</el-select>
					</el-form-item>
					<el-form-item label="品牌 : " prop="value1">
						<el-select v-model="ruleForm2.value1" filterable placeholder="请选择品牌" no-data-text='请先选择厂商' @change="currentSel1" allow-create>
							<el-option
								v-for="item in this.options1"
								:key="item.vehicleId"
								:label="item.label"
								:value="item.vehicleName">
							</el-option>
						</el-select>
					</el-form-item>
					<el-form-item label="车型 : " prop="value3">
						<el-select v-model="ruleForm2.value3" filterable placeholder="请输入车系" no-data-text='请先选择年款' @change="currentSel3" allow-create>
							<el-option
								v-for="item in this.options3"
								:key="item.vehicleId"
								:label="item.label"
								:value="item.vehicleName"
								>
							</el-option>
						</el-select>
					</el-form-item>
					
					<el-form-item label="车系 : " prop="value4">
						<el-select v-model="ruleForm2.value4" filterable placeholder="请输入车型"  no-data-text='请先选择品牌' @change="currentSel4" allow-create>
							<el-option
								v-for="item in this.options4"
								:key="item.vehicleId"
								:label="item.label"
								:value="item.vehicleName">
							</el-option>
						</el-select>
					</el-form-item>
				</div>
				<div class='htitle'><h2 style='font-size:16px;'>车辆参数</h2></div>
				<div class='onediv'>
					<el-form-item :label="'排量:'" prop="displace">
						<el-input type="text" v-model="ruleForm2.displace" auto-complete="off" placeholder="请输入" ></el-input>
					</el-form-item> 
					<el-form-item :label="'座椅数:'" prop="seat">
						<el-input type="text"  v-model="ruleForm2.seat" auto-complete="off" placeholder="请输入" ></el-input>
					</el-form-item>
					<el-form-item :label="'车辆类型:'" prop="carType">
						<el-input type="text"  v-model="ruleForm2.carType" auto-complete="off" placeholder="请输入" ></el-input>
					</el-form-item>
					<el-form-item :label="'生产方式:'" prop="produce">
						<el-input type="text"  v-model="ruleForm2.produce" auto-complete="off" placeholder="请输入" ></el-input>
					</el-form-item>
					<el-form-item :label="'是否定制/改装:'" prop="refit">
						<el-input type="text"  v-model="ruleForm2.refit" auto-complete="off" placeholder="请输入" ></el-input>
					</el-form-item>
					<el-form-item :label="'销售状态:'" prop="salesStatus">
						<el-input type="text"  v-model="ruleForm2.salesStatus" auto-complete="off" placeholder="请输入" ></el-input>
					</el-form-item>
					<el-form-item :label="'发动机位置:'" prop="engineP">
						<el-input type="text"  v-model="ruleForm2.engineP" auto-complete="off" placeholder="请输入" ></el-input>
					</el-form-item>
					<el-form-item :label="'气缸数:'" prop="cylinderNum">
						<el-input type="text"  v-model="ruleForm2.cylinderNum" auto-complete="off" placeholder="请输入" ></el-input>
					</el-form-item>
					<el-form-item :label="'最大马力:'" prop="moxHorsepower">
						<el-input type="text"  v-model="ruleForm2.moxHorsepower" auto-complete="off" placeholder="请输入" ></el-input>
					</el-form-item>
					<el-form-item :label="'最大功率-转速:'" prop="moxSpeed">
						<el-input type="text"  v-model="ruleForm2.moxSpeed" auto-complete="off" placeholder="请输入" ></el-input>
					</el-form-item>
					<el-form-item :label="'最大功率-扭矩:'" prop="moxTorque">
						<el-input type="text"  v-model="ruleForm2.moxTorque" auto-complete="off" placeholder="请输入" ></el-input>
					</el-form-item>
					<el-form-item :label="'燃油类型:'" prop="fuelType">
						<el-input type="text"  v-model="ruleForm2.fuelType" auto-complete="off" placeholder="请输入" ></el-input>
					</el-form-item>
					<el-form-item :label="'然后标号:'" prop="grade">
						<el-input type="text"  v-model="ruleForm2.grade" auto-complete="off" placeholder="请输入" ></el-input>
					</el-form-item>
					<el-form-item :label="'供油方式:'" prop="oilSupply">
						<el-input type="text"  v-model="ruleForm2.oilSupply" auto-complete="off" placeholder="请输入" ></el-input>
					</el-form-item>
					<el-form-item :label="'长宽高:'" prop="lenWidHei">
						<el-input type="text"  v-model="ruleForm2.lenWidHei" auto-complete="off" placeholder="请输入" ></el-input>
					</el-form-item>
					<el-form-item :label="'轴距:'" prop="wheelbase">
						<el-input type="text"  v-model="ruleForm2.wheelbase" auto-complete="off" placeholder="请输入" ></el-input>
					</el-form-item>
					<el-form-item :label="'前轮距:'" prop="upTread">
						<el-input type="text"  v-model="ruleForm2.upTread" auto-complete="off" placeholder="请输入" ></el-input>
					</el-form-item>
					<el-form-item :label="'前后驻车雷达:'" prop="parkingRadar">
						<el-input type="text"  v-model="ruleForm2.parkingRadar" auto-complete="off" placeholder="请输入" ></el-input>
					</el-form-item>
					<el-form-item :label="'行李箱容器:'" prop="cargoVolume">
						<el-input type="text"  v-model="ruleForm2.cargoVolume" auto-complete="off" placeholder="请输入" ></el-input>
					</el-form-item>
					<div v-for="(item,i) of items" :key="i" class='inputDiv' >
							<el-input class='inputX' type="text" v-model="ruleForm2.bindName[i]" auto-complete="off" placeholder="请输入参数名称"></el-input>
							<el-input class='inputY' type="text" v-model="ruleForm2.bindParms[i]" auto-complete="off" placeholder="请输入参数值"></el-input>
							<el-button class='inputZ' type="primary"  @click='deleteName(i)'>删除</el-button>
					</div>
					<div class="button" @click='xzcs'>新增参数</div>					
				</div>
				<div class='htitle'><h2 style='font-size:16px;'>价格信息</h2></div>
				<div class='onediv'>
					<el-form-item label="厂商指导价 : " prop="guidePrice">
						<el-input type="text" v-model="ruleForm2.guidePrice" auto-complete="off" placeholder="请输入指导价格" @keyup.enter.native="doLogin($event)"></el-input>
					</el-form-item>
				</div>				
				<div class='htitle'><h2 style='font-size:16px;'>车型信息</h2><span @click='modelzd2'>折叠</span></div>
				<div style="border-bottom:1px dashed #f2f2f2;" class='hcontent' v-show='showDate2'>
					<div id='elupload' class="filesC">
						<el-upload
							 ref="files"
							 name="imgFile"
							 :limit=1
							 class="avatar-uploader"
							 :with-credentials="true"
							 action="http://172.25.35.204:8304/img/upload"
							 :show-file-list="false"
							 :on-exceed = "handleAvatarExceed"
							 :on-success="handleAvatarSuccess"
							 :on-error="handleAvatarError"
							 >
							 <img v-if="imageUrl" :src="imageUrl" class="avatar">
							 <i v-else class="el-icon-plus avatar-uploader-icon"></i>
						 </el-upload>
						 <span>头屏商品图：250*250</span>
					</div>
					<div id='elupload2' class='filesD'>
						<el-upload
							ref="files"
							name="imgFile"
							:limit=1
							class="avatar-uploader"
							:with-credentials="true"
							action="http://172.25.35.204:8304/img/upload"
							:show-file-list="false"
							:on-exceed = "handleHeaderExceed"
							:on-success="handleHeaderSuccess"
							:on-error="handleHeaderError"
							>
							<img v-if="imageHeaderUrl" :src="imageHeaderUrl" class="avatar">
							<i v-else class="el-icon-plus avatar-uploader-icon"></i>
						</el-upload>
						<span>头屏商品图：320*200</span>
					</div>
					<div id='elupload3' class='filesE'>
						<el-upload
							ref="files"
							name="imgFile"
							:limit=1
							class="avatar-uploader"
							:with-credentials="true"
							:on-exceed = "handlePropExceed"
							action="http://172.25.35.204:8304/img/upload"
							:show-file-list="false"
							:on-success="handlePropSuccess"
							:on-error="handlePropError"
							>
							<img v-if="imagePropUrl" :src="imagePropUrl" class="avatar">
							<i v-else class="el-icon-plus avatar-uploader-icon"></i>
						</el-upload>
						<span>宣传图：320*200</span>
					</div>
				</div>
				<div class='onediv' style='margin-top:10px;margin-bottom:20px'>
					<h2 style='font-size:16px;'>车型颜色</h2>
					<div v-for="(item,i) of items2" :key="i" id='newcolor'>
						<el-form-item :label="'颜色 '+(i+1)+':'" prop="vehicleColor" >
							<el-input class='inputX' type="text" v-model="vehicleColor[i]" auto-complete="off" placeholder="请输入颜色" style='width:100%'></el-input>
							<el-button class='closeX' type="primary" icon="el-icon-delete" @click='deleteColor(i)'></el-button>
						</el-form-item>			
					</div>
					<el-button id="btn" type="primary" @click='addColor'>新增颜色</el-button>
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
		inject: ["reload"],
		data(){		
			return{
				items: [],
				items2: [''],
				showDate1: true,
				showDate2: true,
				dialogImageUrl: '',
        dialogVisible: false,
        productImgs: [],
        isMultiple: true,
				veFlag:true,
				count: 0 ,
				facMer:'',
				modelYear:'',
				brand:'',
				carType:'',
				yearType:'',
				options: [],
				options1:[],
				options2:[],
				options3:[],
				options4:[],
				vehicleColor:[''],
				ruleForm2: {
					value1: '',
					value:'',
					value2:'',
					value3:'',
					value4:'',
					vehicleId0:'',
					vehicleId1:'',
					vehicleId4:'',
					vehicleId2:'',
					vehicleId3:'',
					parentId0:'',
					parentId1:'',
					parentId4:'',
					parentId2:'',
					parentId3:'',
					guidePrice:'',
					bindName: [''],
					bindParms: [''],
					vehicleColor:[''],
					displace:'',
					seat:'',
					carType:'',
					produce:'',
					refit:'',
					salesStatus:'',
					engineP:'',
					cylinderNum:'',
					moxHorsepower:'',
					moxSpeed:'',
					moxTorque:'',
					fuelType:'',
					grade:'',
					oilSupply:'',
					lenWidHei:'',
					wheelbase:'',
					upTread:'',
					parkingRadar:'',
					cargoVolume:''
				},
				imageUrl:'',
				imageHeaderUrl:'',
				imagePropUrl:'',
				dialogVisible: false,
				rules: {
					value: [
						{ required: true,  trigger: 'change' }//validator: validatePass,
					],
					value1: [
						{ required: true, trigger: 'change' }//validator: validatePass1,  
					],
					value2: [
						{ required: true, trigger: 'change' }
					],
					value3: [
						{ required: true, trigger: 'change' }
					],
					value4: [
						{ required: true,  trigger: 'change' }// validator: validatePass4, 
					],
	
					price:[
						{ trigger: 'blur' }
					],
					color:[
						{  trigger: 'blur' }
					]	
				},
				"baseCascadeList": [
									{
										"vehicleName": "华晨",
										"vehicleId": "base18112510007134", //选择——传其vehicleId与parentId
										"parentId":  "0",
										"baseType": 1
									}, 
									{
										"vehicleName": "宝马",
										"vehicleId": "base18112510007135",  //选择——传其vehicleId与parentId
										"parentId":  "base18112510007134",
										"baseType": 2
									}, 
									{
										"vehicleName": "宝马三系",
										"vehicleId": null,
										"parentId": "base18112510007135", //输入——若开始输入需要传其父id,剩下几级id可传空
										"baseType": 3
									}, 
									{
										"vehicleName": "2018年款", //id可传空
										"vehicleId": null,
										"parentId": null,
										"baseType": 4
									}, 
									{
										"vehicleName": "320i运动套餐", //id可传空
										"vehicleId": null,
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
			
			handleAvatarExceed(files, fileList) {//图片上传超过数量限制
				this.$message.error('只能上传图片1张!')
				//console.log(files, fileList);
			},
			handleHeaderExceed(files, fileList) {//图片上传超过数量限制
				this.$message.error('只能上传图片1张!')
				//console.log(files, fileList);
			},
			handlePropExceed(files, fileList) {//图片上传超过数量限制
				this.$message.error('只能上传图片1张!')
				//console.log(files, fileList);
			},
			handlePropError( err, file, fileList ){
				//console.log(err)
				this.$message.error('上传图片失败!');
			},
			handleHeaderError( err, file, fileList ){
				//console.log(err)
				this.$message.error('上传图片失败!');
			},
			handleAvatarError( err, file, fileList ){
				console.log(err)
				this.$message.error('上传图片失败!');
			},
			handleAvatarSuccess (res, file) {
				//console.log( res )
				//console.log( file )
				if (res.code== "SUCCESS") {
					//console.log('上传成功')
					this.$message(res.msg)
					this.imageUrl = URL.createObjectURL(file.raw);
					this.imageUrl = res.imgUrl;
				}else{
					this.$alert({message: '上传失败', btn: false})
				}
			},
			handleHeaderSuccess (res, file) {
				//console.log( res )
				//console.log( file )
				if (res.code== "SUCCESS") {
					
					//console.log('上传成功')
					this.$message(res.msg)
					this.imageHeaderUrl = URL.createObjectURL(file.raw);
					this.imageHeaderUrl = res.imgUrl;
				}else{
					this.$alert({message: '上传失败', btn: false})
				}
			},
			handlePropSuccess (res, file) {
				//console.log( res )
				//console.log( file )
				if (res.code== "SUCCESS") {
					//console.log('上传成功')
					this.$message(res.msg)
					this.imagePropUrl = URL.createObjectURL(file.raw);
					this.imagePropUrl = res.imgUrl;
				}else{
					this.$alert({message: '上传失败', btn: false})
				}
			},
/* 
					handleAvatarError (res, file) {
						alert('handleAvatarError')
						this.$alert({message: '选择图片失败', btn: false})
					this.imageUrl = URL.createObjectURL(file.raw);
					},
					handleRemove2(file, fileList) {//移除图片
					this.$message.error('图片移除成功!')
					$('.headerSpan2').css({'display':'block'})
						console.log(file, fileList);
					},
					handlePictureCardPreview2(file) {//预览图片时调用
						console.log(file);
						this.dialogImageUrl2 = file.url;
						this.dialogVisible = true;
					},
					beforeAvatarUpload2(file) {//文件上传之前调用做一些拦截限制
						console.log(file);
						const isJPG = true;
						// const isJPG = file.type === 'image/jpeg';
						const isLt2M = file.size / 1024 / 1024 < 2;
			
						// if (!isJPG) {
						//   this.$message.error('上传头像图片只能是 JPG 格式!');
						// }
						if (!isLt2M) {
							this.$message.error('上传图片大小不能超过 2MB!');
						}
						return isJPG && isLt2M;
					},
					handleAvatarSuccess2(res, file) {//图片上传成功
						console.log(res);
						console.log(file);
						this.$message(res.msg)
						this.imageUrl = URL.createObjectURL(file.raw);
						this.image2 = res.imgUrl;
					
						$('.headerSpan2').css({'display':'none'})

					},
					handleExceed2(files, fileList) {//图片上传超过数量限制
						this.$message.error('只能上传图片1张!')
						console.log(file, fileList);
					},
					imgUploadError2(err, file, fileList){//图片上传失败调用
						console.log(err)
						this.$message.error('上传图片失败!');
					},
							handleRemove3(file, fileList) {//移除图片
							this.$message.error('图片移除成功!')
							$('.spreadSpan').css({'display':'block'})
								console.log(file, fileList);
							},
							handlePictureCardPreview3(file) {//预览图片时调用
								console.log(file);
								this.dialogImageUrl3 = file.url;
								this.dialogVisible = true;
							},
							beforeAvatarUpload3(file) {//文件上传之前调用做一些拦截限制
								console.log(file);
								const isJPG = true;
								// const isJPG = file.type === 'image/jpeg';
								const isLt2M = file.size / 1024 / 1024 < 2;
					
								// if (!isJPG) {
								//   this.$message.error('上传头像图片只能是 JPG 格式!');
								// }
								if (!isLt2M) {
									this.$message.error('上传图片大小不能超过 2MB!');
								}
								return isJPG && isLt2M;
							},
							handleAvatarSuccess3(res, file) {//图片上传成功
								console.log(res);
								console.log(file);
								this.$message(res.msg)
								this.image3 = res.imgUrl
								this.imageUrl = URL.createObjectURL(file.raw);
								$('.spreadSpan').css({'display':'none'})
							},
							handleExceed3(files, fileList) {//图片上传超过数量限制
								this.$message.error('只能上传图片1张!');
								console.log(files, fileList);
							},
							imgUploadError3(err, file, fileList){//图片上传失败调用
								console.log(err)
								this.$message.error('上传图片失败!');
							}, */

			xzcs(){
				this.items.push('');
			},
			addColor(){
				this.items2.push('');
			},
			deleteColor(i){
				//console.log( i )
				this.ruleForm2.vehicleColor.splice(i,1)
				this.items2.splice( i, 1);
			},
			deleteName(i){
				this.ruleForm2.bindName.splice(i,1);
				this.ruleForm2.bindParms.splice(i,1);
				this.items.splice(i,1);
			}, 
			watchInput(){
				if(this.ruleForm2.value1=="" || this.ruleForm2.value2=="" || this.ruleForm2.value=="" || this.ruleForm2.value3=="" || this.ruleForm2.value4==""){
					alert('车型信息为必填项')
				}
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
			doLogin(e){
				if( isNaN( this.ruleForm2.guidePrice) ){
					this.ruleForm2.guidePrice = null;
					alert('请输入数字类型')
				}
			},
			currentSel(selVal){   //点击厂商列表 , 品牌列表有值	
				
				this.options1 = [];
				//console.log( this.ruleForm2.value1 )
				this.ruleForm2.value1 = "";
				this.ruleForm2.value2 = "";
				this.ruleForm2.value3 = "";
				this.ruleForm2.value4 = "";
				this.selVal = selVal;  // 当前所选的值
				//console.log( this.selVal )
				var obj = {};
				obj = this.options.find(function(item){
				  return item.vehicleName === selVal 
				});
				//console.log( obj.vehicleId )
				this.facMer = obj.vehicleId ;
				let veStr = obj.vehicleId
				if( typeof veStr == 'string' ){
					this.veFlag = false;
				}else{
					alert(1)
				}
				//obj 就是被选中的那个对象，
				let parentId = obj.vehicleId;   
				this.ruleForm2.vehicleId0 = obj.vehicleId ;  // 点击那个显示那个 mqrqueId
				this.ruleForm2.parentId0 = obj.parentId ;
				let params = {"jsfType": "vehicleBaseResource_queryVehicleBaseListByPId",
					"valueJsonStr":[{
						"parentId": parentId, 
						"vehicleType": 1,
						"appCode": "cfbizbaseservice.jr.jd.com"
					}]
				}
				this.$http.post('/gateway/invokeJsf',params)
				.then( ( res )=>{
				//	console.log( res )
					let obj1 = res.data.object.vehicleBaseVoList ;
					let len1 = obj1.length;
					for( var i=0; i<len1; i++){
						this.options1.push( obj1[i] )	
					}
				//	console.log( this.options1 )
					this.options1 = this.options1
				})
				.catch( ( error )=>{
					console.log( error )
				})
					
			},
			currentSel1(selVal){  //点击品牌列表 , 车系有值
				this.options4 = [];
				this.ruleForm2.value2 = "";
				this.ruleForm2.value3 = "";
				this.ruleForm2.value4 = "";
				this.selVal = selVal;  // 当前所选的值
				//console.log( this.selVal )
				let obj = {};
				obj = this.options1.find(function(item){
					return item.vehicleName === selVal 
				});
				//obj 就是被选中的那个对象，
				let parentId = obj.vehicleId;  
			//	console.log( parentId )
				this.modelYear = obj.vehicleId; 
				this.ruleForm2.vehicleId1 = obj.vehicleId ;  // 点击那个显示那个 mqrqueId
				this.ruleForm2.parentId1 = obj.parentId ;
				let params = {"jsfType":"vehicleBaseResource_queryVehicleBaseListByPId",
					"valueJsonStr":[{
						"parentId": parentId, 
						"vehicleType": 1,
						"appCode": "cfbizbaseservice.jr.jd.com"
					}]
				}
				this.$http.post('/gateway/invokeJsf',params)
				.then( ( res )=>{
			//		console.log( res )
					var obj1 = res.data.object.vehicleBaseVoList ;
					var len1 = obj1.length;
					for( var i=0; i<len1; i++){
						this.options4.push( obj1[i] )	
					}
				//	console.log(this.options4)
					this.options4 = this.options4
				})
				.catch( ( error )=>{
					console.log( error )
				}) 
				
			},
			currentSel4(selVal){  //点击车系列表 , 年款有值
				//alert('车系')
				this.ruleForm2.value2 = "";
				this.ruleForm2.value3 = "";
				this.options2 = [];
				this.selVal = selVal;  // 当前所选的值
				//console.log( this.selVal )
				var obj = {};
				obj = this.options4.find(function(item){
					return item.vehicleName === selVal 
				});
				//obj 就是被选中的那个对象，
				let parentId = obj.vehicleId;
			//	console.log( parentId )
				this.brand = obj.vehicleId; 
				this.ruleForm2.vehicleId4 = obj.vehicleId ;  // 点击那个显示那个 mqrqueId
				this.ruleForm2.parentId4 = obj.parentId ;
				let params = {"jsfType":"vehicleBaseResource_queryVehicleBaseListByPId",
					"valueJsonStr":[{
						"parentId": parentId, 
						"vehicleType": 1,
						"appCode": "cfbizbaseservice.jr.jd.com"
					}]
				}
				this.$http.post('/gateway/invokeJsf',params)
				.then( ( res )=>{
			//		console.log( res )
					var obj1 = res.data.object.vehicleBaseVoList ;
					var len1 = obj1.length;
					for( var i=0; i<len1; i++){
						this.options2.push( obj1[i] )	
					}
			//		console.log( this.options2 )
					this.options2 = this.options2
				})
				.catch( ( error )=>{
					console.log( error )
				}) 
				
			},
			currentSel2(selVal){
				//alert('年款')
				this.ruleForm2.value3 = "";
				this.options3 = [];
				this.selVal = selVal ;
				//console.log( this.selVal )
				var obj = {};
				obj = this.options2.find(function(item){
					return item.vehicleName === selVal 
				});
				//obj 就是被选中的那个对象，
				let parentId = obj.vehicleId;
			//	console.log( parentId )
				this.yearType = obj.vehicleId; 
				this.ruleForm2.vehicleId2 = obj.vehicleId ;  // 点击那个显示那个 mqrqueId
				this.ruleForm2.parentId2 = obj.parentId ;
				let params = {"jsfType":"vehicleBaseResource_queryVehicleBaseListByPId",
					"valueJsonStr":[{
						"parentId": parentId, 
						"vehicleType": 1,
						"appCode": "cfbizbaseservice.jr.jd.com"
					}]
				}
				this.$http.post('/gateway/invokeJsf',params)
				.then( ( res )=>{
			//		console.log( res )
					var obj1 = res.data.object.vehicleBaseVoList ;
					var len1 = obj1.length;
					for( var i=0; i<len1; i++){
						this.options3.push( obj1[i] )	
					}
			//		console.log( this.options3 )
					this.options3 = this.options3
				})
				.catch( ( error )=>{
					console.log( error )
				}) 
			},
			currentSel3( selVal ){
				//alert('车型')
				this.selVal = selVal ;
				//console.log( this.selVal )
				var obj = {};
				obj = this.options3.find(function(item){
					return item.vehicleName === selVal 
				});
				//obj 就是被选中的那个对象，
				let parentId = obj.vehicleId;
		//		console.log( parentId )
				this.carType = obj.vehicleId; 
				this.ruleForm2.vehicleId3 = obj.vehicleId ;  // 点击那个显示那个 mqrqueId
				this.ruleForm2.parentId3 = obj.parentId ;
				//console.log( this.facMer, this.modelYear, this.brand , this.carType, this.yearType )
				if( this.facMer.length>0 && this.modelYear.length>0 && this.brand.length>0 && this.carType.length>0 && this.yearType.length>0 ){
					setTimeout( go , 1000);
					function go(){
						alert('车型库存在,请编辑车型信息');
						return false;
					}
					
				}
				
			},

			submitForm(event){
				/* if( this.facMer.length>0 && this.modelYear.length>0 && this.brand.length>0 && this.carType.length>0 && this.yearType.length>0 ){
					alert('车型库存在,请编辑车型信息');
					return false;
				} */
				//颜色
				let carColor = this.vehicleColor;
				for(var i=0; i<carColor.length; i++){
					console.log( carColor[i] )
					if( carColor[i] == "" ||carColor[i]==undefined || carColor[i] ==null ){
						alert('车辆颜色不能添加空值')
						return false;
					}
				}
				
				let carC = carColor.join(",");
				if( !carC ){
					alert('车辆颜色必须填写一项')
					return false ;
					
				}
				if( this.ruleForm2.guidePrice =="" || this.ruleForm2.guidePrice==null || this.ruleForm2.guidePrice ==undefined ){
					alert('厂商指导价必须填写');
					return false;
				}
				// 厂商指导价
				if( isNaN( this.ruleForm2.guidePrice ) ){
					alert('厂商指导价必须填写数字类型')
					return false;
				}
				if( confirm('您确定要新增数据吗')){
				//console.log( this.facMer, this.modelYear, this.brand , this.carType, this.yearType )
					
					let sult = [{
						"vehicleName": this.ruleForm2.value,
						"vehicleId": this.ruleForm2.vehicleId0,
						"parentId": this.ruleForm2.parentId0,
						"baseType": 1,
					},
					{
						"vehicleName": this.ruleForm2.value1,
						"vehicleId": this.ruleForm2.vehicleId1,
						"parentId": this.ruleForm2.parentId1,
						"baseType": 2,
					},
					{
						"vehicleName": this.ruleForm2.value4,
						"vehicleId": this.ruleForm2.vehicleId4,
						"parentId": this.ruleForm2.parentId4,
						"baseType": 3,
					},
					{
						"vehicleName": this.ruleForm2.value2,
						"vehicleId": this.ruleForm2.vehicleId2,
						"parentId": this.ruleForm2.parentId2,
						"baseType": 4,
					},
					{
						"vehicleName": this.ruleForm2.value3,
						"vehicleId": this.ruleForm2.vehicleId3,
						"parentId": this.ruleForm2.parentId3,
						"baseType": 5,
					}] 
					
					let len = sult.length;
					let num = 0;
					for( var i = 0; i<len ; i++){
						for( var key in sult[i] ){
							//console.log( sult[i]["vehicleId"])
							if( key == "vehicleName"){
								num++;
								if( this.facMer.length==0 && this.modelYear.length==0 && this.brand.length==0 && this.carType.length==0 && this.yearType.length==0 ){
									//console.log( sult[ sult[i].baseType-1 ].parentId )
									//console.log( sult[ sult[i].baseType - 2 ].vehicleId )
									sult[i] = sult[i] ;		
								}else	if( sult[i].vehicleId == "" ){
									//console.log( sult[i].baseType )
									sult[ sult[i].baseType-1 ].parentId = sult[ sult[i].baseType - 2 ].vehicleId
								}
							}		
						}
					}
					//console.log( sult )
					var dataList = new Array();
					var sublistData = {}; 
					sublistData["baseCascadeList"] = sult;
					// "vehicleCfgInfo": "{"排量":"2000X","轮距":"100X","燃油类型":"乙醇汽油","行李箱容积":"2立方米","座椅数":"5"}",
					// 车辆参数
					var carParms = {};
					carParms["displace"] =  this.ruleForm2.displace
					carParms["seat"] =  this.ruleForm2.seat
					carParms["carType"] =  this.ruleForm2.carType
					carParms["produce"] =  this.ruleForm2.produce
					carParms["refit"] =  this.ruleForm2.refit
					carParms["salesStatus"] =  this.ruleForm2.salesStatus
					carParms["engineP"] =  this.ruleForm2.engineP
					carParms["cylinderNum"] =  this.ruleForm2.cylinderNum
					carParms["moxHorsepower"] =  this.ruleForm2.moxHorsepower
					carParms["moxSpeed"] =  this.ruleForm2.moxSpeed
					carParms["moxTorque"] =  this.ruleForm2.moxTorque
					carParms["fuelType"] =  this.ruleForm2.fuelType
					carParms["grade"] =  this.ruleForm2.grade
					carParms["oilSupply"] =  this.ruleForm2.oilSupply
					carParms["lenWidHei"] =  this.ruleForm2.lenWidHei
					carParms["wheelbase"] =  this.ruleForm2.wheelbase
					carParms["upTread"] =  this.ruleForm2.upTread
					carParms["parkingRadar"] =  this.ruleForm2.parkingRadar
					carParms["cargoVolume"] =  this.ruleForm2.cargoVolume

					var leng = this.ruleForm2.bindName.length;
					for(var i=0; i<leng; i++ ){
						carParms[ this.ruleForm2.bindName[i] ] =  this.ruleForm2.bindParms[i]
					}
					sublistData["vehicleCfgInfo"] = carParms;
					//console.log( JSON.stringify( carParms ) )
					
					// 厂商指导价
					sublistData["guidePrice"] = this.ruleForm2.guidePrice ;
					
					sublistData["vehicleType"] = 1 ;
					
					sublistData["appCode"] = "cfbizbaseservice.jr.jd.com";
					
					
					sublistData["vehicleColor"] = carC ;

					//图片
					//  "displayImg": "{"screenImg1":"//imgUrl","screenImg2":"//imgUrl","propagandaImg":"//imgUrl"}",
					//console.log( this.image1, this.image2, this.image3 )
					var carImg = {};
					carImg["screenImg1"] = this.imageUrl;
					carImg["screenImg2"] = this.imageHeaderUrl;
					carImg["propagandaImg"] = this.imagePropUrl;
					console.log( this.imageUrl,this.imageHeaderUrl, this.imagePropUrl)
					
					sublistData["displayImg"] = carImg ;
					//console.log( carImg )
					
					let params = {"jsfType":"vehicleBaseResource_saveVehicleBaseAndInfo",
						"valueJsonStr": [sublistData]
					}
					//console.log( JSON.stringify( params ))
					this.$http.post('/gateway/invokeJsf',params)
					.then( ( res )=>{
						//console.log(res)	
						
						if( res.data.code == "200" ){
							if( res.data.object.code == "FAILED"){
								alert('新增数据失败,')
								alert(res.data.object.info);
								
							}else{
								alert('新增数据成功')
								this.$router.push({path:'/basic'})
							}
						}else{
							alert('请求失败')
						}
					})
					.catch( ( error )=>{
						console.log( error )
					})
				}else{
					alert('您取消了新增数据')
				}
						
			},
			resetForm(){
				this.$refs.ruleForm2.resetFields()
				this.ruleForm2.bindName.length = 0;
				this.ruleForm2.bindParms.length = 0;
				this.vehicleColor.length = 0;
				this.imageUrl="";
				this.imageHeaderUrl="";
				this.imagePropUrl="";
			},

			loadData(){
				let params = {
					"jsfType": "vehicleBaseResource_queryVehicleBaseListByPId",
						"valueJsonStr": [{
						 "parentId": "0",
											 "vehicleType": 1,
											 "appCode": "cfbizbaseservice.jr.jd.com"
					}]
				}
				this.$http.post('/gateway/invokeJsf',params)
				.then( ( res )=>{
					//this.tableData1 = res.data.object.vehicleInfoVoList ;
					//this.options = res.data.object.vehicleBaseVoList
					console.log( res )
					var obj = res.data.object.vehicleBaseVoList ;
					var len = obj.length;
					
					for( var i=0; i<len; i++){
						this.options.push( obj[i] )
					}
					//console.log(this.options)
					this.options = this.options
					
				})
				.catch( ( error )=>{
					console.log( error )
				})
			}
		},
		components:{
			
		}
	}
</script>

<style lang='scss' scoped>
	.crumbs{
		width:100%;
		height:8%;
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
		height:85%;
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
			width:65%;
			margin-left:5%;
			background:#fdfdfd;
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
			float:left;
			margin-left:10%; 
		}
	}
	.inputDiv{
		width:65%;
		float:left;
		margin-left:5%;
		margin-bottom:2%;
	}
	.inputX{
		position:relative;
		width:20%;
		float:left;
	}
	.inputY{
		position:relative;
		width:40%;
		float:left;
	}
	.inputZ{
		position:relative;
		width:15%;
		float:left;
	}
	.closeX{
		position:absolute;
		right:-45px;
		top:0px;
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
		.spreadSpan{
			left:1px;
			bottom:-120px;
		}
		.headerSpan2{
			left:1px;
			bottom:-120px;
		}
		.headerSpan{
			left:1px;
			bottom:-120px;
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
	.router-link-exact-active, .router-link-active{
		background-color:red;
		
	} 
	.filesC .avatar-uploader .el-upload {
		display:inline-block;
		border: 1px solid #000;
		background:red;
		border-radius: 6px;
		cursor: pointer;
		position: relative;
		overflow: hidden;
	}
	.filesC span{
		position:absolute;
		top:-110px;
		color:#1890ff;
		left:50px;
	}

	.filesC .avatar-uploader .el-upload:hover {
		border-color: #409EFF;
	}
	.filesC .avatar-uploader-icon {
		font-size: 20px;
		color: #8c939d;
		width: 250px;
		height: 250px;
		line-height: 250px;
		text-align: center;
		background: #fafafa;
	}
	.filesC .avatar {
		width: 250px;
		height: 250px;
		display: block;
	}
	
	.filesD .avatar-uploader .el-upload {
		display:inline-block;
	  border: 1px solid #000;
		background:red;
	  border-radius: 6px;
	  cursor: pointer;
	  position: relative;
	  overflow: hidden;
		}
		.filesD span{
			position:absolute;
			top:-80px;
			color:#1890ff;
			left:50px;
		}
	
		.filesD .avatar-uploader .el-upload:hover {
			border-color: #409EFF;
		}
		.filesD .avatar-uploader-icon {
			font-size: 20px;
			color: #8c939d;
			width: 320px;
			height: 200px;
			line-height: 200px;
			text-align: center;
			background: #fafafa;
		}
		.filesD .avatar {
			width: 320px;
			height: 200px;
			display: block;
		}
		
		.filesE .avatar-uploader .el-upload {
			display:inline-block;
			border: 1px solid #000;
			background:red;
			border-radius: 6px;
			cursor: pointer;
			position: relative;
			overflow: hidden;
			}
			.filesE span{
				position:absolute;
				top:-80px;
				color:#1890ff;
				left:50px;
			}
		
			.filesE .avatar-uploader .el-upload:hover {
				border-color: #409EFF;
			}
			.filesE .avatar-uploader-icon {
				font-size: 20px;
				color: #8c939d;
				width: 320px;
				height: 200px;
				line-height: 200px;
				text-align: center;
				background: #fafafa;
			}
			.filesE .avatar {
				width: 320px;
				height: 200px;
				display: block;
			}
		
	
</style>