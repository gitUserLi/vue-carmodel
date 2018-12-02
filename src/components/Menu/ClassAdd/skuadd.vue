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
			<b>新增SKU信息</b>
			<el-form :model="ruleForm2" status-icon ref="ruleForm2" label-width="100px" class="demo-ruleForm" >
				<div class='htitle'><h2 style='font-size:16px;'>车型信息</h2><span @click='skuzd1'>折叠</span></div>
				<div style="border-bottom:1px dashed #f2f2f2;overflow:auto;" class='hcontent' v-show='skuzda'>
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
						<el-select v-model="value1" filterable placeholder="宝马3系" style='width:25%;margin-right:1%'>
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
						<el-select v-model="value1" filterable placeholder="320i M运动套装" style='width:25%;margin-right:1%'>
							<el-option
								v-for="item in options"
								:key="item.value"
								:label="item.label"
								:value="item.value">
							</el-option>
						</el-select>
					</el-form-item>
					<el-form-item label="车辆颜色: " prop="type" style='width:100%;'>	
						<el-select v-model="value1" filterable placeholder="埃斯托蓝" style='width:30%;margin-right:1%'>
							<el-option
								v-for="item in options"
								:key="item.value"
								:label="item.label"
								:value="item.value">
							</el-option>
						</el-select>
					</el-form-item>
				</div>
				
				<div class='htitle'><h2 style='font-size:16px;'>商品信息</h2><span @click='skuzd2'>折叠</span></div>
				<div style="border-bottom:1px dashed #f2f2f2;overflow:auto;" class='hcontent' v-show='skuzdb'>
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
				
				<div class='htitle'><h2 style='font-size:16px;'>金融方案</h2><span @click='skuzd3'>折叠</span></div>
				<div style="border-bottom:1px dashed #f2f2f2;overflow:auto;" class='hcontent' v-for="(item,i) of items4" v-model="items4[i]" :key="i" id='newcolor' v-show='skuzdc'>
					<el-form-item label="金融方案1: " prop="number" style='width:100%;'>
						<el-input type="text" v-model="ruleForm2.pass" placeholder='首付10%' autocomplete="off" style='width:20%'></el-input>
						<el-input type="text" v-model="ruleForm2.pass" placeholder='36期' autocomplete="off" style='width:15%'></el-input>
						<el-input type="text" v-model="ruleForm2.pass" placeholder='等额本息%' autocomplete="off" style='width:20%'></el-input>
						<el-input type="text" v-model="ruleForm2.pass" placeholder='费率5.0%' autocomplete="off" style='width:15%'></el-input>
						<el-input type="text" v-model="ruleForm2.pass" placeholder='尾款67000.00' autocomplete="off" style='width:25%'></el-input>
					</el-form-item>
				</div>

				<div class='htitle'><h2 style='font-size:16px;'>价格信息</h2><span  @click='skuzd4'>折叠</span></div>
				<div style="border-bottom:1px dashed #f2f2f2;overflow:auto;" class='hcontent' v-show='skuzdd'>
					<el-form-item label="销售价: ">
						<el-input type="text" v-model="ruleForm2.pass" autocomplete="off" placeholder="12000.00"></el-input>
					</el-form-item>
					<el-form-item label="库存: ">
						<el-input type="text" v-model="ruleForm2.pass" autocomplete="off" placeholder="100"></el-input>
					</el-form-item>
					<el-form-item label="上下架状态: " style='width:40%;'>
						<el-select v-model="value1" filterable>
							<el-option v-model="ruleForm2.pass">
								上架
							</el-option>
							<el-option v-model="ruleForm2.pass">
								下架
							</el-option>
						</el-select>
					</el-form-item>
					<el-form-item label="是否可见: " style='width:40%;'>
						<el-select v-model="value1" filterable >
							<el-option v-model="ruleForm2.pass">
								可见
							</el-option>
							<el-option v-model="ruleForm2.pass">
								不可见
							</el-option>
						</el-select>
					</el-form-item>
					<el-form-item label="是否可申请: " style='width:40%;'>
						<el-select v-model="value1" filterable>
							<el-option v-model="ruleForm2.pass">
								可申请
							</el-option>
							<el-option v-model="ruleForm2.pass">
								不可申请
							</el-option>
						</el-select>
					</el-form-item>
								
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
				skuzda: true,
				skuzdb: true,
				skuzdc: true,
				skuzdd: true,
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
			/* zhedie(e){
				this.count ++ ;
				alert(0)
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
			},
			 */
			skuzd1(){
				this.count++;
				this.skuzda = !this.skuzda;
				if( this.count % 2 == 0){
					e.target.innerHTML = "折叠";
				}else{ 
					e.target.innerHTML = "打开";
				} 
			},
			skuzd2(){
				this.count++;
				this.skuzdb = !this.skuzdb;
				if( this.count % 2 == 0){
					e.target.innerHTML = "折叠";
				}else{ 
					e.target.innerHTML = "打开";
				} 
			},
			skuzd3(){
				this.count++;
				this.skuzdc = !this.skuzdc;
				if( this.count % 2 == 0){
					e.target.innerHTML = "折叠";
				}else{ 
					e.target.innerHTML = "打开";
				} 
			},
			skuzd4(){
				this.count++;
				this.skuzdd = !this.skuzdd;
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
	.el-select{
		display:inline;
		float:left;
	}

		
	
</style>