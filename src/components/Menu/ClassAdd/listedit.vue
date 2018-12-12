<template>
	<div>
		<b>编辑库</b>
		<div class='listadd'>
			<el-form status-icon label-width="90px" class="demo-ruleForm" >
				<el-form-item label="库ID : " prop="number">
					<el-input type="text" auto-complete="off" placeholder="1" v-model='value3' readonly unselectable="on" ></el-input>
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
					<el-input type="text" v-model="value2" auto-complete="off" placeholder="线索模式"></el-input>
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
				let groupId = this.$route.query.groupId
				let groupCar = this.$route.query.groupCar
				let groupName = this.$route.query.groupName
				//console.log(groupId,groupCar,groupName)
				this.value3 = groupCar
				this.value1 = groupId 
				this.value2 = groupName
			},
			submitForm(){
				//console.log( this.value3, this.value1, this.value2)
				if( this.value3=='' ||this.value3==null || this.value3==undefined ){
					alert('库ID不能为空');
					return false;
				}
				if( this.value1=='' ||this.value1==null || this.value1==undefined ){
					alert('库类型不能为空');
					return false;
				}
				if( this.value2=='' ||this.value2==null || this.value2==undefined ){
					alert('分组标题不能为空');
					return false;
				}
				let params = {"jsfType" :"vehicleMerchantResource_editMerGroInfo",
					"valueJsonStr":[{
						"appCode": "cfbizsupport.jr.jd.com",
						"groupName": this.value2,
						"groupId": this.value3,
						"merchantCode": this.value1,
						"groupType": "1"
					}]
				}
				this.$http.post('/gateway/invokeJsf',params)
				.then( ( res )=>{
					//console.log( res )
					if( confirm('确定要编辑页面吗?') ){
						if( res.data.object.code == "SUCCESS" ){
							alert('编辑页面成功')
							this.$router.push({path:'/list'})
						}else{
							alert('数据已存在')
							this.$router.push({path:'/list'})
						}
					}else{
						alert('您取消了该页面的编辑');
					}
					
				})
				.catch( ( error )=>{
					alert('编辑页面失败')
				})
			},
			resetForm(){
				this.$router.push({path:'/list'})
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