<template>
	<div>
		<b>编辑库</b>
		<div class='listadd'>
			<el-form status-icon label-width="90px" class="demo-ruleForm" >
				<el-form-item label="库ID : " prop="number">
					<el-input type="text" autocomplete="off" placeholder="1" v-model='value3' readonly unselectable="on" ></el-input>
				</el-form-item>
				<el-form-item label="库类型 : " prop="number" value='库类型'>
					<el-select v-model="value1" filterable placeholder="库类型">
						<el-option
							v-for="item in options"
							:key="item.value"
							:label="item.label"
							:value="item.value">
						</el-option>
					</el-select>
				</el-form-item>
				<el-form-item label="分组标题 : " prop="number">
					<el-input type="text" v-model="value2" autocomplete="off" placeholder="线索模式"></el-input>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" @click="submitForm()">确认编辑</el-button>
					<el-button @click="resetForm()">取消</el-button>
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
				value1:'',
				value2:'',
				value3:''
			}
		},
		mounted(){
			this.loadData();
		},
		methods:{
			loadData(){
				let merGroName = this.$route.query.merGroName
				let merGroId = this.$route.query.merGroId
				this.value2 = merGroName 
				this.value3 = merGroId
			},
			submitForm(){
				let params = {"jsfType" :"marqueMerchantResource_editMerGroInfoService",
					"valueJsonStr":[{
						"appCode": "cfbizbaseservice.jr.jd.com",
						"merGroName": this.value2,
						"merGroId": this.value3,
						"marDbName": this.value1,
						"marDbType": "1"
					}]
				}
				this.$http.post('/gateway/invokeJsf',params)
				.then( function ( res ) {
					//console.log( res )
					if( res.data.object.code == "SUCCESS" ){
						alert('编辑页面成功')
						this.$router.push({path:'/list'})
					}else{
						alert('数据已存在')
						this.$router.push({path:'/list'})
					}
				}.bind(this))
				.catch( function( error ) {
					alert('编辑页面失败')
				}.bind(this))
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