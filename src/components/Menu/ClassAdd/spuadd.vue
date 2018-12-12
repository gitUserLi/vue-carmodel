<template>
	<div class='skuadd'>
		<div class='crumbs'>
			<el-breadcrumb separator="/">
				<el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
				<el-breadcrumb-item><a href="/">SKU页</a></el-breadcrumb-item>
				<el-breadcrumb-item>新增SKU</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		<div class='contDiv'>
			<b>新增SPU信息</b>
			<el-form :model="ruleForm2" status-icon ref="ruleForm2" label-width="100px" class="demo-ruleForm" >
				<div class='htitle'><h2 style='font-size:16px;'>车型信息</h2><span @click="spuzd1($event)">折叠</span></div>
				<div style="border-bottom:1px dashed #f2f2f2;overflow:auto;" class='hcontent' v-show='spuzda'>
					<el-form-item label="商户名称: " prop="number" required='required' style='width:60%;'>
						<el-select v-model="value1" filterable placeholder="第一车贷">
							<el-option
								v-for="item in options"
								:key="item.value"
								:label="item.label"
								:value="item.value">
							</el-option>
						</el-select>
					</el-form-item>
					<el-form-item label="车型: " prop="number" required='required' style='width:100%'>
						<el-select v-model="value1" filterable placeholder="华晨" style='width:15%;margin-right:1%'>
							<el-option
								v-for="item in options"
								:key="item.value"
								:label="item.label"
								:value="item.value">
							</el-option>
						</el-select>
						<el-select v-model="value1" filterable placeholder="宝马" style='width:15%;margin-right:1%'>
							<el-option
								v-for="item in options"
								:key="item.value"
								:label="item.label"
								:value="item.value">
							</el-option>
						</el-select>
						<el-select v-model="value1" filterable placeholder="宝马3系" style='width:15%;margin-right:1%'>
							<el-option
								v-for="item in options"
								:key="item.value"
								:label="item.label"
								:value="item.value">
							</el-option>
						</el-select>
						<el-select v-model="value1" filterable placeholder="2018款" style='width:15%;margin-right:1%'>
							<el-option
								v-for="item in options"
								:key="item.value"
								:label="item.label"
								:value="item.value">
							</el-option>
						</el-select>
						<el-select v-model="value1" filterable placeholder="320i M运动套装" style='width:15%;margin-right:1%'>
							<el-option
								v-for="item in options"
								:key="item.value"
								:label="item.label"
								:value="item.value">
							</el-option>
						</el-select>
					</el-form-item>
					<el-form-item label="车辆信息 : " prop="type" style='width:100%;'>	
						<!-- <el-checkbox label="蓝色" name="type"></el-checkbox>
						<el-checkbox label="白色" name="type2"></el-checkbox> 
						<el-checkbox label="不区别颜色" name="type3" checked></el-checkbox> -->
						<el-radio-group v-model="value2">
							<el-radio label="蓝色"></el-radio>
							<el-radio label="白色"></el-radio>
							<el-radio label="不区别颜色" checked></el-radio>
						</el-radio-group>
					</el-form-item>
				</div>
				
				
				<div class='htitle'><h2 style='font-size:16px;'>价格信息</h2></div>
				<div class='hcontent' style="border-bottom:1px dashed #f2f2f2;overflow:auto;">
					<el-form-item label="销售指导价: " prop="number" required='required'>
						<el-input type="text" v-model="ruleForm2.pass" autocomplete="off" placeholder="请输入品牌参数"></el-input>
					</el-form-item>
					<el-form-item label="购置税: " prop="number">
						<el-input type="text" v-model="ruleForm2.pass" autocomplete="off" placeholder="请输入品牌参数"></el-input>
					</el-form-item>
					<el-form-item label="必要花费: " prop="number">
						<el-input type="text" v-model="ruleForm2.pass" autocomplete="off" placeholder="请输入品牌参数"></el-input>
					</el-form-item>
					<el-form-item label="交强险: " prop="number">
						<el-input type="text" v-model="ruleForm2.pass" autocomplete="off" placeholder="请输入品牌参数"></el-input>
					</el-form-item>
					<el-form-item label="商业险: " prop="number">
						<el-input type="text" v-model="ruleForm2.pass" autocomplete="off" placeholder="请输入品牌参数"></el-input>
					</el-form-item>
					<el-form-item label="上牌费: " prop="number">
						<el-input type="text" v-model="ruleForm2.pass" autocomplete="off" placeholder="请输入品牌参数"></el-input>
					</el-form-item>
					<el-form-item label="定金要求: " prop="number">
						<el-input type="text" v-model="ruleForm2.pass" autocomplete="off" placeholder="请输入品牌参数"></el-input>
					</el-form-item>
					<el-form-item label="车船使用税: " prop="number">
						<el-input type="text" v-model="ruleForm2.pass" autocomplete="off" placeholder="请输入品牌参数"></el-input>
					</el-form-item>
					<el-form-item label="门店贴息优惠: " prop="number">
						<el-input type="text" v-model="ruleForm2.pass" autocomplete="off" placeholder="请输入品牌参数"></el-input>
					</el-form-item>
					<el-form-item label="门店服务费: " prop="number">
						<el-input type="text" v-model="ruleForm2.pass" autocomplete="off" placeholder="请输入品牌参数"></el-input>
					</el-form-item>
					<el-form-item label="加价: " prop="number">
						<el-input type="text" v-model="ruleForm2.pass" autocomplete="off" placeholder="请输入品牌参数"></el-input>
					</el-form-item>
					<el-form-item label="加装费用: " prop="number">
						<el-input type="text" v-model="ruleForm2.pass" autocomplete="off" placeholder="请输入品牌参数"></el-input>
					</el-form-item>
				</div>
				
				<div class='htitle'><h2 style='font-size:16px;'>车型信息</h2><span @click="spuzd2($event)">折叠</span></div>
				<div style="border-bottom:1px dashed #f2f2f2;overflow:auto;" class='hcontent' v-show='spuzdb'>
					<el-form-item label="商品长名称: " prop="number">
						<el-input type="text" v-model="ruleForm2.pass" autocomplete="off" placeholder="华晨宝马3系 2018款 320i M运动套装"></el-input>
					</el-form-item>
					<el-form-item label="商品短名称: " prop="number">
						<el-input type="text" v-model="ruleForm2.pass" autocomplete="off" placeholder="华晨宝马3系"></el-input>
					</el-form-item>
					
					<div v-for="(item,i) of items3" v-model="items3[i]" :key="i" id='newcolor'>
						<el-form-item label="商品标签: " prop="number">
							<el-input type="text" v-model="ruleForm2.pass" autocomplete="off" placeholder="双十一"></el-input>
							
						</el-form-item>
					</div>
					<div class="button" @click='xzbq' style='width:10%;'>新增标签</div>
				</div>
	
				<div class='htitle'><h2 style='font-size:16px;'>车型信息</h2><span @click="spuzd3($event)">折叠</span></div>
				<div style="border-bottom:1px dashed #f2f2f2;overflow:auto;padding-bottom:20px;" class='hcontent' v-show='spuzdc'>
					<span>展示图片:</span>
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
				
				<div class='htitle'><h2 style='font-size:16px;'>描述展示:</h2><span @click="spuzd4($event)">折叠</span></div>
				<div style="border-bottom:1px dashed #f2f2f2;overflow:auto;padding-bottom:20px;" class='hcontent' v-show='spuzdd'>
					<div>
						<div id='elupload2' >
							<el-upload
								action="https://jsonplaceholder.typicode.com/posts/"
								list-type="picture-card"
								:limit=1
								:auto-upload=false
								:on-preview="handlePictureCardPreview"  
								:on-remove="handleRemove">  <!-- 点击文件列表中已上传的文件时的钩子 --><!-- 文件列表移除文件时的钩子 -->
								<i class="el-icon-plus"></i>
							</el-upload>
							<span class='span2' style='bottom:-50px;'>车辆外观</span>
							<el-dialog :visible.sync="dialogVisible">
								<img width="100%" :src="dialogImageUrl" alt="">
							</el-dialog>
						</div>
						<input style='border:1px solid #000;display:inline-block;width:200px;height:148px;' placeholder='请输入内容描述'>
					</div>
					<div style='margin-top:10px;'> 
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
							<span class='span2' style='bottom:-120px;'>车辆内饰</span>
							<el-dialog :visible.sync="dialogVisible">
								<img width="100%" :src="dialogImageUrl" alt="">
							</el-dialog>
						</div>
						<input style='border:1px solid #000;display:inline-block;width:200px;height:148px;' placeholder='请输入内容描述'>
					</div>
				</div>
				
				<div class='htitle'><h2 style='font-size:16px;'>金融信息</h2><span @click="spuzd5($event)">折叠</span></div>
				<div style="border-bottom:1px dashed #f2f2f2;overflow:auto;" class='hcontent' v-for="(item,i) of items4" v-model="items4[i]" :key="i" id='newcolor' v-show='spuzde'>
					<el-form-item label="商品长名称: " prop="number" style='width:100%;'>
						<el-input type="text" v-model="ruleForm2.pass" placeholder='首付10%' autocomplete="off" style='width:20%'></el-input>
						<el-input type="text" v-model="ruleForm2.pass" placeholder='36期' autocomplete="off" style='width:15%'></el-input>
						<el-input type="text" v-model="ruleForm2.pass" placeholder='等额本息%' autocomplete="off" style='width:20%'></el-input>
						<el-input type="text" v-model="ruleForm2.pass" placeholder='费率5.0%' autocomplete="off" style='width:15%'></el-input>
						<el-input type="text" v-model="ruleForm2.pass" placeholder='尾款67000.00' autocomplete="off" style='width:25%'></el-input>
					</el-form-item>
					<el-form-item label="是否使用定金: " prop="type" style='width:100%;'>	
						<el-checkbox label="是" name="type" checked></el-checkbox>
						<el-checkbox label="否" name="type2"></el-checkbox> 
					</el-form-item>
					<el-form-item label="定金金额: " prop="number">
						<el-input type="text" v-model="ruleForm2.pass" autocomplete="off" placeholder="2000元"></el-input>
					</el-form-item>
					
				</div>
				<div class="button" @click='xzjrfa' style='width:20%;margin-bottom:20px;' v-show='spuzde'>+新增金融方案</div>
				
				<div class='htitle'><h2 style='font-size:16px;'>价格信息</h2><span @click="spuzd6($event)">折叠</span></div>
				<div style="border-bottom:1px dashed #f2f2f2;overflow:auto;" class='hcontent' v-show='spuzdf'>
					<el-form-item label="销售价1: " prop="number">
						<el-input type="text" v-model="ruleForm2.pass" autocomplete="off" placeholder="华晨宝马3系 2018款 320i M运动套装"></el-input>
					</el-form-item>
					<el-form-item label="库存: " prop="number">
						<el-input type="text" v-model="ruleForm2.pass" autocomplete="off" placeholder="华晨宝马3系"></el-input>
					</el-form-item>
					
					<el-form-item label="销售价2: " prop="number">
						<el-input type="text" v-model="ruleForm2.pass" autocomplete="off" placeholder="华晨宝马3系 2018款 320i M运动套装"></el-input>
					</el-form-item>
					<el-form-item label="库存: " prop="number">
						<el-input type="text" v-model="ruleForm2.pass" autocomplete="off" placeholder="华晨宝马3系"></el-input>
					</el-form-item>				
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
				items3: [''],
				items4: [''],
				spuzda: true,
				spuzdb: true,
				spuzdc: true,
				spuzdd: true,
				spuzde: true,
				spuzdf: true,
				count: 0 ,
				options: [{
					value: 'Option1',
					label: 'Option1'
				}, {
					value: 'Option2',
					label: 'Option2'
				}, {
					value: 'Option3',
					label: 'Option3'
				}, {
					value: 'Option4',
					label: 'Option4'
				}, {
					value: 'Option5',
					label: 'Option5'
				}],
				value1: '',
				value2:'',
				ruleForm2: {
					pass: '',
					checkPass: '',
					age: '',
					type:''
				},
				dialogImageUrl: '',
				dialogVisible: false
			}
		},
		methods:{
			xzcs(){
				this.items.push('');
			},
			xzys(){
				this.items2.push('');
			},
			xzbq(){
				this.items3.push('');
			},
			xzjrfa(){
				//alert(0)
				this.items4.push('');
			},
			/* zhedie5(e){
				this.count ++ ;
				
				if( this.count % 2 == 0){
					e.target.innerHTML = "折叠";
					e.target.parentNode.nextElementSibling.style='none';
					e.target.parentNode.nextElementSibling.style.overflow='auto';
					e.target.parentNode.nextElementSibling.style.borderBottom='1px dashed #f2f2f2';
				}else{ 
					e.target.parentNode.nextElementSibling.style='none';
					e.target.parentNode.nextElementSibling.style.height='0px';
					e.target.parentNode.nextElementSibling.style.overflow='auto';
					e.target.innerHTML = "打开";
				}
			}, */
			spuzd1(e){
				this.count++;
				this.spuzda = !this.spuzda;
				if( this.count % 2 == 0){
					e.target.innerHTML = "折叠";
				}else{ 
					e.target.innerHTML = "打开";
				} 
			},
			spuzd2(e){
				this.count++;
				this.spuzdb = !this.spuzdb;
				if( this.count % 2 == 0){
					e.target.innerHTML = "折叠";
				}else{ 
					e.target.innerHTML = "打开";
				} 
			},
			spuzd3(e){
				this.count++;
				this.spuzdc = !this.spuzdc;
				if( this.count % 2 == 0){
					e.target.innerHTML = "折叠";
				}else{ 
					e.target.innerHTML = "打开";
				} 
			},
			spuzd4(e){
				this.count++;
				this.spuzdd = !this.spuzdd;
				if( this.count % 2 == 0){
					e.target.innerHTML = "折叠";
				}else{ 
					e.target.innerHTML = "打开";
				} 
			},
			spuzd5(e){
				this.count++;
				this.spuzde = !this.spuzde;
				if( this.count % 2 == 0){
					e.target.innerHTML = "折叠";
				}else{ 
					e.target.innerHTML = "打开";
				} 
			},
			spuzd6(e){
				this.count++;
				this.spuzdf = !this.spuzdf;
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
				/* this.dialogImageUrl = file.url;
				this.dialogVisible = true; */
			},
			submitForm(event){
				console.log(event)
			},
			resetForm(event){
				console.log(event)
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
		margin:8% 5%;
		width:90%;
		height:50px;
		line-height:50px;
		h2{
			display:inline;
		}
		span{
			display:inline;
			margin-top:2%;
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
	.el-select{
		display:inline;
		float:left;
	}

		
	
</style>