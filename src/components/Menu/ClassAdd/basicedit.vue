<template>
	<div>
		<div class='crumbs'>
			<el-breadcrumb separator="/">
				<el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
				<el-breadcrumb-item><a href="/">车型库</a></el-breadcrumb-item>
				<el-breadcrumb-item>基础页</el-breadcrumb-item>
				<el-breadcrumb-item>编辑页面</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		<div class='contDiv'>
			<b>编辑页面</b>
			<el-form :model="ruleForm2" status-icon ref="ruleForm2" label-width="120px" class="demo-ruleForm" >
				<div class='htitle'><h2 style='font-size:16px;'>车型信息</h2><span @click='modelzd1'>折叠</span></div>
				<div style="border-bottom:1px dashed #f2f2f2;overflow:auto;" class='hcontent' v-show='showDate1'>
					<el-form-item label="厂商 : " prop="vendor">
						<el-input type="text" placeholder='请输入' readonly="readonly" v-model="vendor" ></el-input>
					</el-form-item>
					<el-form-item label="年款 : " prop="yearStyle" >
						<el-input type="text" placeholder='请输入' readonly="readonly" v-model="yearStyle" ></el-input>
					</el-form-item>
					<el-form-item label="品牌 : " prop="brand" >
						<el-input type="text" placeholder='请输入' readonly="readonly" v-model="brand" ></el-input>
					</el-form-item>
					<el-form-item label="车型: " prop="carType">
						<el-input type="text"  placeholder="请输入" readonly="readonly" v-model="carType" ></el-input>
					</el-form-item>
					<el-form-item label="车系 : " prop="carSeries" >
						<el-input type="text" placeholder="请输入" readonly="readonly" v-model="carSeries" ></el-input>
					</el-form-item>
				</div>
				<div class='htitle'><h2 style='font-size:16px;'>车辆参数</h2></div>
				<div class='onediv'>		
					<!-- <div v-for="(item,i) of items" :key="i" >
						<el-form-item :label="'参数名称 '+(i+1)+':'" prop="bindName" >
							
							<el-input class='inputX' type="text" v-model="bindName[i]" auto-complete="off" placeholder="请输入品牌名称"></el-input>
							<el-button class='closeX' type="primary"  @click='deleteName(i)'>删除名称</el-button>
						</el-form-item>
						<el-form-item :label="'参数值 '+(i+1)+':'" prop="bindParms" >
							<el-input class='inputX' type="text" v-model="bindParms[i]" auto-complete="off" placeholder="请输入品牌名称"></el-input>
							<el-button class='closeX' type="primary"  @click='deletParms(i)'>删除参数</el-button>
						</el-form-item>
					</div>
					<div class="button" @click='xzcs'>新增参数</div>
					<div class="button" @click='sccs(i)'>删除参数</div> -->
								<el-form-item :label="'排量:'" prop="displace">
									<el-input type="text"  v-model="ruleForm2.displace" auto-complete="off" placeholder="请输入" ></el-input>
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
										<el-input class='inputX' type="text" v-model="ruleForm2.bindName[i]" auto-complete="off" placeholder="请输入名称"></el-input>
										<el-input class='inputY' type="text" v-model="ruleForm2.bindParms[i]" auto-complete="off" placeholder="请输入名称"></el-input>
										<el-button class='inputZ' type="primary"  @click='deleteName(i)'>删除</el-button>
								</div>
								<div class="button" @click='xzcs'>新增参数</div>
				</div>
				
				<div class='htitle'><h2 style='font-size:16px;'>价格信息</h2></div>
				<div class='onediv'>
					<el-form-item label="厂商指导价 : " prop="guidePrice">
						<el-input type="text" v-model="guidePrice" auto-complete="off" placeholder="请输入品牌名称"></el-input>
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
				<!-- 
				<div class='htitle'><h2 style='font-size:16px;'>上传车辆图片</h2><span @click='modelzd2'>折叠</span></div>
				<div style="border-bottom:1px dashed #f2f2f2;padding-bottom:50px;" class='hcontent' v-show='showDate2'>
					<div id='elupload'>
						<el-upload
							action="http://172.25.35.204:8304/img/upload"
							list-type="picture-card"
							accept="image/*"
							:limit=1
							:file-list="productImgs"
							:multiple="isMultiple"
							:on-preview="handlePictureCardPreview1"
							:on-remove="handleRemove1"
							:on-success="handleAvatarSuccess1"
							:before-upload="beforeAvatarUpload1"
							:on-exceed="handleExceed1"
							:on-error="imgUploadError1">
							<i class="el-icon-plus"></i>
						</el-upload>
						<span class='headerSpan'>头屏商品页</span>
						<span class='span1'>250X250</span>
						<el-dialog :visible="dialogVisible">
							<img width="100%" :src="dialogImageUrl1" alt="">
						</el-dialog>
					</div>
					<div id='elupload2'>
						<el-upload
							action="http://172.25.35.204:8304/img/upload"
							list-type="picture-card"
							accept="image/*"
							:limit=1
							:file-list="productImgs"
							:multiple="isMultiple"
							:on-preview="handlePictureCardPreview2"
							:on-remove="handleRemove2"
							:on-success="handleAvatarSuccess2"
							:before-upload="beforeAvatarUpload2"
							:on-exceed="handleExceed2"
							:on-error="imgUploadError2">
							<i class="el-icon-plus"></i>
						</el-upload>
						<span class='headerSpan2'>头屏商品页</span>
						<span class='span1'>320X200</span>
						<el-dialog :visible.sync="dialogVisible">
							<img width="100%" :src="dialogImageUrl2" alt="">
						</el-dialog>
					</div>
					<div id='elupload3'>
						<el-upload
							action="http://172.25.35.204:8304/img/upload"
							list-type="picture-card"
							accept="image/*"
							:limit=1
							:file-list="productImgs"
							:multiple="isMultiple"
							:on-preview="handlePictureCardPreview3"
							:on-remove="handleRemove3"
							:on-success="handleAvatarSuccess3"
							:before-upload="beforeAvatarUpload3"
							:on-exceed="handleExceed3"
							:on-error="imgUploadError3">
							<i class="el-icon-plus"></i>
						</el-upload>
						<span class='spreadSpan'>宣传图</span>
						<span class='span1'>320X200</span>
						<el-dialog :visible.sync="dialogVisible">
							<img width="100%" :src="dialogImageUrl3" alt="">
						</el-dialog>
					</div>
				</div>
				
				 -->
				<div class='onediv' style='margin-top:10px;margin-bottom:20px'>
					<h2 style='font-size:16px;'>车型颜色</h2>
					<div v-for="(item,i) of items2" :key="i" id='newcolor'>
						<el-form-item :label="'颜色 '+(i+1)+':'" prop="number" >
							<el-input class='inputX' type="text" v-model="items2[i]" auto-complete="off" placeholder="请输入车辆颜色" style='width:100%'></el-input>
							<el-button class='closeX' type="primary" icon="el-icon-delete" @click='deleteColor(i)'></el-button>
						</el-form-item>
					</div>
					<div id="btn" @click='addColor'>新增颜色</div>	
				</div>
				<el-form-item>
					<el-button type="primary" @click="submitForm('ruleForm')">保存</el-button>
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
			return{
				items: [''],
				items2: [''],
				showDate1: true,
				showDate2: true,
				isMultiple: true,
				count: 0 ,
				vendor:'',
				yearStyle:'',
				brand:'',
				carType:'',
				carSeries:'',
				guidePrice:'',
				productImgs: [],
				nameParms:[],
				bindName:[],
				bindParms:[],
				bindName2:[],
				bindParms2:[],
				options: [],
				ruleForm2:{
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
				leftImgDiv:true,
				num:0,
				value1: '',
				value:'',
				ruleForm2: {
					pass: '',
					checkPass: '',
					age: ''
				},
				dialogImageUrl1: '',
				dialogImageUrl2: '',
				dialogImageUrl3: '',
				imageUrl:'',
				imageHeaderUrl:'',
				imagePropUrl:'',
				dialogVisible: false
			}
		},
		mounted(){
			this.loadData();
		},
		methods:{
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
			deleteColor(i){
				//console.log( i )
				this.items2.splice( i, 1);
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
			handleAvatarExceed(files, fileList) {//图片上传超过数量限制
				this.$message.error('只能上传图片1张!')
				console.log(files, fileList);
			},
			handleHeaderExceed(files, fileList) {//图片上传超过数量限制
				this.$message.error('只能上传图片1张!')
				console.log(files, fileList);
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
				//console.log(err)
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
			handleRemove1(file, fileList) {//移除图片
				this.$message.error('图片移除成功!')
				$('.headerSpan').css({'display':'block'})
				console.log(file, fileList);
			},
			handlePictureCardPreview1(file) {//预览图片时调用
				console.log(file);
		
				this.dialogImageUrl1 = file.url;
				this.dialogVisible = true;
			},
			beforeAvatarUpload1(file) {//文件上传之前调用做一些拦截限制
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
			handleAvatarSuccess1(res, file) {//图片上传成功
				//console.log(res.imgUrl);
				console.log(file);
				this.$message(res.msg)
				this.imageUrl = URL.createObjectURL(file.raw);
				this.image1 = res.imgUrl;
				$('.headerSpan').css({'display':'none'})
			},
			handleExceed1(files, fileList) {//图片上传超过数量限制
				this.$message.error('只能上传图片1张!')
				console.log(file, fileList);
			},
			imgUploadError1(err, file, fileList){//图片上传失败调用
				console.log(err)
				this.$message.error('上传图片失败!');
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
				this.image2 = res.imgUrl
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
			handlePictureCardPreview4(){
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
			},
			 */
			submitForm(){
				let carColor = this.items2;
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
				if( this.guidePrice =="" || this.guidePrice==null || this.guidePrice ==undefined ){
					alert('厂商指导价必须填写');
					return false;
				}
				// 厂商指导价
				if( isNaN( this.guidePrice ) ){
					alert('厂商指导价必须填写数字类型')
					return false;
				}
				var QueryMarqueInfoReqVo = {};
				QueryMarqueInfoReqVo["vehicleInfoId"] = this.$route.query.vehicleInfoId ;
				QueryMarqueInfoReqVo["guidePrice"] = this.guidePrice ;
				QueryMarqueInfoReqVo["vehicleColor"] = this.items2.join(",") ; 
				QueryMarqueInfoReqVo["updater"] = "liyanqiu1" ; 
				QueryMarqueInfoReqVo["appCode"] = "cfbizbaseservice.jr.jd.com" ; 
				//图片
				//  "displayImg": "{"screenImg1":"//imgUrl","screenImg2":"//imgUrl","propagandaImg":"//imgUrl"}",
				//console.log( this.image1, this.image2, this.image3 )
				var carImg = {};
				carImg["screenImg1"] = this.imageUrl;
				carImg["screenImg2"] = this.imageHeaderUrl;
				carImg["propagandaImg"] = this.imagePropUrl;
				QueryMarqueInfoReqVo["displayImg"] = carImg ;
				
				//判断车辆参数 和车辆颜色是否有空值
				let colorArr =  this.items2 ;
				
				for(var i = 0; i < colorArr.length; i++){
					//console.log(bindArr[i]);
					if(colorArr[i]=="" || colorArr[i]==null || colorArr[i]==undefined ){
						alert('车辆颜色不能添加空值');
						return false;
					}
				}
				
				//车辆参数
				//"vehicleCfgInfo": "{"排量":"2000X","轮距":"100X","燃油类型":"乙醇汽油","行李箱容积":"2立方米","座椅数":"5"}",
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
				QueryMarqueInfoReqVo["vehicleCfgInfo"] = carParms;
				
				
				// 数据组装结果
				let params = {"jsfType":"vehicleInfoResource_modifyVehicleInfo",
					"valueJsonStr": [QueryMarqueInfoReqVo]
				}
				//console.log( JSON.stringify( params ) )
				this.$http.post('/gateway/invokeJsf',params)
				.then( ( res )=>{
					console.log( res )
					if( res.data.code == "200" ){
						if( confirm('确认修改数据吗?')){
							alert("修改成功,即将跳转到基础页面")
							this.$router.push({path:'/basic'})
						}
					}else{
						alert('网络异常')
						return false;
					}
				})
				.catch( ( error )=>{
					alert('保存失败')
				})
			},
			resetForm(){
				//跳转到上一个页面
				if( confirm('确定要取消吗?')){
					alert('页面即将跳转到基础库页面');
					this.$router.push( {path:'/basic'} )
				}
				
			},
			loadData(){
				let vehicleInfoId = this.$route.query.vehicleInfoId
				//console.log( vehicleInfoId )
				//console.log( vehicleInfoId )
				//return false
				let params = {
						"jsfType":"vehicleInfoResource_queryVehicleListByIds",
                        "valueJsonStr":[{
							"vehicleInfoIds": [ vehicleInfoId ],
							"appCode": "cfbizsupport.jr.jd.com"
						}]
				}
				this.$http.post('/gateway/invokeJsf',params)
				.then( ( res )=>{
					console.log( res )
					if( res.data.code == "200"){
						this.brand = res.data.object.vehicleInfoVoList['0'].brand; //
						this.carSeries = res.data.object.vehicleInfoVoList['0'].carSeries;  // 
						this.carType = res.data.object.vehicleInfoVoList['0'].carType;   //
						this.imageUrl = JSON.parse( res.data.object.vehicleInfoVoList['0'].displayImg )["screenImg1"] ;
						this.imageHeaderUrl =  JSON.parse( res.data.object.vehicleInfoVoList['0'].displayImg )["screenImg2"] ;
						this.imagePropUrl = JSON.parse( res.data.object.vehicleInfoVoList['0'].displayImg )["propagandaImg"] ;
						//console.log( JSON.parse( res.data.object.vehicleInfoVoList[0].displayImg ) )
						//console.log(this.imageUrl,this.imageHeaderUrl ,	this.imagePropUrl )
						
						this.guidePrice = res.data.object.vehicleInfoVoList['0'].guidePrice;
						//console.log( res.data.object.vehicleInfoVoList[0].vehicleCfgInfo )
						//如果车辆参数放回的为空就不转做 json对象, 否则转做 json 对象
						var judgeEmpty = $.isEmptyObject( res.data.object.vehicleInfoVoList['0'].vehicleCfgInfo )
						if( !judgeEmpty ){
							var	nameP = JSON.parse( res.data.object.vehicleInfoVoList['0'].vehicleCfgInfo )
						}else{
							var	nameP = res.data.object.vehicleInfoVoList['0'].vehicleCfgInfo
						}
							//console.log( res.data.object.vehicleInfoVoList[0].vehicleCfgInfo )
							//console.log( nameP )
							this.ruleForm2.displace = nameP["displace"] 
							this.ruleForm2.seat = nameP["seat"]
							this.ruleForm2.carType = nameP["carType"]
							this.ruleForm2.produce =  nameP["produce"]
							this.ruleForm2.refit = nameP["refit"] 
							this.ruleForm2.salesStatus = nameP["salesStatus"] 
							this.ruleForm2.engineP = nameP["engineP"] 
							this.ruleForm2.cylinderNum =  nameP["cylinderNum"]
							this.ruleForm2.moxHorsepower = nameP["moxHorsepower"]  
							this.ruleForm2.moxSpeed = nameP["moxSpeed"] 
							this.ruleForm2.moxTorque = nameP["moxTorque"] 
							this.ruleForm2.fuelType = nameP["fuelType"] 
							this.ruleForm2.grade = nameP["grade"] 
							this.ruleForm2.oilSupply = nameP["oilSupply"] 
							this.ruleForm2.lenWidHei = nameP["lenWidHei"]  
							this.ruleForm2.wheelbase =  nameP["wheelbase"]
							this.ruleForm2.upTread = nameP["upTread"] 
							this.ruleForm2.parkingRadar = nameP["parkingRadar"] 
							this.ruleForm2.cargoVolume = nameP["cargoVolume"] 
							
							let bindName = [];
							let bindParams = [];
							let count = 0 ;
							
							delete nameP["displace"]; 
							//console.log( key )	
							delete nameP["seat"];
							delete nameP["carType"];
							delete nameP["produce"];
							delete nameP["refit"];
							delete nameP["salesStatus"];
							delete nameP["engineP"];
							delete nameP["cylinderNum"];
							delete nameP["moxHorsepower"];
							delete nameP["moxSpeed"];
							delete nameP["moxTorque"];
							delete nameP["fuelType"];
							delete nameP["grade"];
							delete nameP["oilSupply"];
							delete nameP["lenWidHei"];
							delete nameP["wheelbase"];
							delete nameP["upTread"];
							delete nameP["parkingRadar"];
							delete nameP["cargoVolume"];
							
						for(var key in nameP ){
							count++ ;
							bindName.push( key );
							bindParams.push( nameP[key] );
						}
						this.ruleForm2.bindName = bindName;
						this.ruleForm2.bindParms = bindParams;
						// 后端返回车辆参数的键值对个数 , 赋给上方数组遍历出来
						this.items.length = count ;
						//console.log( res.data.object.vehicleInfoVoList['0'] )
						// 车辆颜色
						var str = res.data.object.vehicleInfoVoList['0'].vehicleColor;
						this.items2 = str.split(",");
						//console.log( this.items2 )
						this.vendor = res.data.object.vehicleInfoVoList['0'].vendor;//
						this.yearStyle = res.data.object.vehicleInfoVoList['0'].yearStyle;//
					}
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
	.inputX{
		position:relative;
		
	}
	.closeX{
		position:absolute;
		right:-45px;
		top:0px;
	}
	.showImgDiv{
		div{
			width:200px;height:100%;
			margin-right:18%;
			display:inline-block;
			img{
				display:block;
				width:100%;
				height:100%;
			}
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
			display:inline-block;
			margin-left:10%;
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
			width:15%;
			height:36px;
			display:block;
			background:#fdfdfd;
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
		.headerSpan2{
			left:1px;
			bottom:-125px;
		}
		.headerSpan{
			left:1px;
			bottom:-125px;
		}
		.spreadSpan{
			left:1px;
			bottom:-125px;
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