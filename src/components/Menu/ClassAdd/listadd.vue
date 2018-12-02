<template>
	<div>
		<b>新增库</b>
		<div class='listadd'>
			<el-form :model="ruleForm" status-icon label-width="90px" ref="ruleForm" class="demo-ruleForm" >
				<el-form-item label="库类型 : " prop="value1" value='库类型'>
					<el-select v-model="ruleForm.value1" placeholder="库类型">
						<el-option
							v-for="item in options"
							:key="item.value"
							:label="item.label"
							:value="item.value">
						</el-option>
					</el-select>
				</el-form-item>
				<el-form-item label="分组标题 : " prop="value2">
					<el-input type="text" v-model="ruleForm.value2" auto-complete="off" placeholder="线索模式"></el-input>
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
				options: [{
					value: '车型库',
					label: '车型库'
				}],
				ruleForm: {
				  value1:'',
				  value2:''
				}
				
			}
		},
		mounted(){
			//this.loadData();
		},
		methods:{
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
		height:70%;
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