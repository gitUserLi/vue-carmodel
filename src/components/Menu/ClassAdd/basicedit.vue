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
			<el-form :model="ruleForm2" status-icon ref="ruleForm2" label-width="100px" class="demo-ruleForm" >
				<div class='htitle'><h2 style='font-size:16px;'>车型信息</h2><span @click='modelzd1'>折叠</span></div>
				<div style="border-bottom:1px dashed #f2f2f2;overflow:auto;" class='hcontent' v-show='showDate1'>
					<el-form-item label="厂商 : ">
						<el-input type="text" placeholder='请输入' readonly="readonly" ></el-input>
					</el-form-item>
					<el-form-item label="年款 : " >
						<el-input type="text" placeholder='请输入' readonly="readonly" ></el-input>
					</el-form-item>
					<el-form-item label="品牌 : " >
						<el-input type="text" placeholder='请输入' readonly="readonly" ></el-input>
					</el-form-item>
					<el-form-item label="车型: " prop="number">
						<el-input type="text"  placeholder="请输入" readonly="readonly" ></el-input>
					</el-form-item>
					<el-form-item label="车系 : " prop="number" >
						<el-input type="text" placeholder="请输入" readonly="readonly" ></el-input>
					</el-form-item>
				</div>
				<div class='htitle'><h2 style='font-size:16px;'>车辆参数</h2></div>
				<div class='onediv'>
					<div v-for="(item,i) of items" v-model="items[i]" :key="i" >
						<el-form-item :label="'参数名称 '+(i+1)+':'" prop="number" >
							<el-input type="text" v-model="ruleForm2.pass" autocomplete="off" placeholder="请输入品牌名称"></el-input>
						</el-form-item>
						<el-form-item :label="'参数值 '+(i+1)+':'" prop="number" >
							<el-input type="text" v-model="ruleForm2.pass" autocomplete="off" placeholder="请输入品牌名称"></el-input>
						</el-form-item>
					</div>
					<div class="button" @click='xzcs'>新增参数</div>
				</div>
				
				<div class='htitle'><h2 style='font-size:16px;'>价格信息</h2></div>
				<div class='onediv'>
					<el-form-item label="厂商指导价 : " prop="number">
						<el-input type="text" v-model="ruleForm2.pass" autocomplete="off" placeholder="请输入品牌名称"></el-input>
					</el-form-item>
				</div>
				
				<div class='htitle'><h2 style='font-size:16px;'>车型信息</h2><span @click='modelzd2'>折叠</span></div>
				<div style="border-bottom:1px dashed #f2f2f2;overflow:auto;padding-bottom:20px;" class='hcontent' v-show='showDate2'>
					<div id='elupload'>
						<el-upload
							action="https://jsonplaceholder.typicode.com/posts/"
							list-type="picture-card"
							:limit=1
							:auto-upload=false
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
					<div id='elupload2'>
						<el-upload
							action="https://jsonplaceholder.typicode.com/posts/"
							list-type="picture-card"
							:limit=1
							:auto-upload=false
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
					<div id='elupload3'>
						<el-upload
							action="https://jsonplaceholder.typicode.com/posts/"
							list-type="picture-card"
							:limit=1
							:auto-upload=false
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
						<el-form-item :label="'颜色 '+(i+1)+':'" prop="number" >
							<el-input type="text" v-model="ruleForm2.pass" autocomplete="off" placeholder="请输入品牌名称"></el-input>
						</el-form-item>
						
					</div>
					<div id="btn" @click='xzys'>新增颜色</div>
				</div>
				
				<el-form-item>
					<el-button type="primary" @click="submitForm('ruleForm')">保存</el-button>
					<el-button @click="resetForm('ruleForm')">取消</el-button>
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
				count: 0 ,
				options: [],
				value1: '',
				value:'',
				ruleForm2: {
					pass: '',
					checkPass: '',
					age: ''
				},
				dialogImageUrl: '',
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
			handlePictureCardPreview(file) {
				this.dialogImageUrl = file.url;
				this.dialogVisible = true;
			},
			submitForm(event){
				console.log(event)
			},
			resetForm(event){
				console.log(event)
			},
			loadData(){
				let params = {"jsfType":"marqueInfoResource_queryMarqueInfoList",
					"valueJsonStr":[{
						"marqueInfoId": "info18112510007139",
					   "appCode": "cfbizbaseservice.jr.jd.com"
					}]
				}
				this.$http.post('/gateway/invokeJsf',params)
				.then( function ( res ) {
					var titleList = res.data.object.marqueInfoVoList[0].marqueCfgInfo;
					console.log( res.data.object.marqueInfoVoList[0].marqueCfgInfo )
					console.log( Object.keys( res.data.object.marqueInfoVoList[0].marqueCfgInfo ).size )
					var num = 0;
					for(var i in titleList){
						num++
					}
					console.log(num);
					
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


		
	
</style>