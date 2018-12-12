<template>
	<div>
		<b>新增页面</b>
		<div class='listadd'>
			<el-form :model="ruleForm" status-icon label-width="90px" ref="ruleForm" class="demo-ruleForm" >
				<el-form-item label="代码 : " prop="value1">
					<el-input type="text" v-model="ruleForm.value1" autocomplete="off" placeholder="请输入代码"></el-input>
				</el-form-item>
				<el-form-item label="厂商 : " prop="value2" value='华晨'>
					<el-select v-model="ruleForm.value2" filterable placeholder="华晨">
						<el-option
							v-for="item in tableData1.vendor"
							:key="item.value"
							:label="item.label"
							:value="item.value">
						</el-option>
					</el-select>
				</el-form-item>
				<el-form-item label="品牌 : " prop="value3" value='宝马'>
					<el-select v-model="ruleForm.value3" filterable placeholder="宝马">
						<el-option
							v-for="item in options3"
							:key="item.value"
							:label="item.label"
							:value="item.value">
						</el-option>
					</el-select>
				</el-form-item>
				<el-form-item label="车系 : " prop="value4" value='宝马3系'>
					<el-select v-model="ruleForm.value4" filterable placeholder="宝马3系">
						<el-option
							v-for="item in options4"
							:key="item.value"
							:label="item.label"
							:value="item.value">
						</el-option>
					</el-select>
				</el-form-item>
				<el-form-item label="年款 : " prop="value5">
					<el-input type="text" v-model="ruleForm.value5" autocomplete="off" placeholder="2019款"></el-input>
				</el-form-item>
				<el-form-item label="车型 : " prop="value6">
					<el-input type="text" v-model="ruleForm.value6" autocomplete="off" placeholder="320i M运动套装"></el-input>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" @click="submitForm()">确认新增</el-button>
					<el-button type='reset' @click="resetForm()">取消</el-button>
				</el-form-item>
			</el-form>
		</div>
	</div>
	
</template>

<script>
	export default{
		data(){
			return{
				options2: [],
				options3: [],
				options4: [],
				ruleForm: {
				  value1:'',
				  value2:'',
				  value3:'',
				  value4:'',
				  value5:'',
				  value6:'',
				},
				tableData1: [{
					"carType": "320i运动套餐",
					"vendor": "华晨",
					"yearStyle": "2018年款",
					"class": null,
					"brand": "宝马",
					"carSeries": "宝马三系",
					"marqueInfoId": "info18112510007139"
				},
				{
					"carType": "家庭套餐",
					"vendor": "华晨",
					"yearStyle": "2017年款",
					"class": null,
					"brand": "宝马",
					"carSeries": "宝马X系",
					"marqueInfoId": "info18112510007158"
				}],
				
			}
		},
		mounted(){
			this.loadData();
		},
		methods:{
			loadData(){
				console.log( this.tableData1[0].vendor )
				let params = {"jsfType" :"marqueMerchantResource_merGroRelatedMarService",
					"valueJsonStr":[{
							"appCode": "cfbizbaseservice.jr.jd.com",
							"merGroId": "0003",
							"marqueInfoIds": [{
											"marqueInfoId": "123"
									},
									{
											"marqueInfoId": "345"
									}
							]
					}]
				}
				this.$http.post('/gateway/invokeJsf',params)
				.then( function ( res ) {
					console.log( res )
					
				}.bind(this))
				.catch( function( error ) {
					console.log( error )
					
				}.bind(this))
			},
			submitForm(){
				let params = {"jsfType" :"marqueMerchantResource_addMerGroInfoService",
					"valueJsonStr":[{
						"merGroName": this.ruleForm.value2,
						"marDbName": this.ruleForm.value1,
						"marDbType": "1",
						"merchantCode": "123"
					}]
				}
				this.$http.post('/gateway/invokeJsf',params)
				.then( function ( res ) {
					//console.log( res )
					if( res.data.object.code == "SUCCESS"){
						alert('添加成功');
						this.$router.push({path:'/list'})
					}else{
						alert('数据存在')
						this.$router.push({path:'/list'})
					}
				}.bind(this))
				.catch( function( error ) {
					alert('添加失败')
					this.$router.push({path:'/list'})
				}.bind(this))
			},
			resetForm(){
				//alert(0)
				this.$refs.ruleForm.resetFields()
			}
		},
		components:{
			
		}
	}
</script>

<style lang='scss' scoped>
	b{
		padding:20px 20px 20px 20px;
		font-size:18px;
		font-weight:600;
		display:block;
		background:#f2f2f2;
	}
	.listadd{
		width:100%;
		height:85%;
		background:#fff;
		padding:20px 20px 0 20px;
		position:absolute;
		.el-form{
			width:50%;
			.el-form-item{
				.el-select{
					width:100%;
				}
				
			}
		}
	}
</style>