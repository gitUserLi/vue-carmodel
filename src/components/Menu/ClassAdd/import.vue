<template>
	<div style='width:100%;height:100%;background:#fff'>
		<b>请选择输入方式</b>
		<div class='imp'>
			<div class='exc hov' :class='showBor?"showB":""' @click='triger'>EXCEL导入</div>
			<div class='bas hov' :class='showBor?"":"showB"' @click='triger'>基础库导入</div>
			<button @click='submit'>确认</button>
		</div>
		
	</div>
</template>

<script>
	export default{
		data(){
			return{
				showBor:true,
			}
		},
		methods:{
			triger(){
				this.showBor = !this.showBor;
				
			},
			submit(){
				if( this.showBor ){
					this.$router.push( { path: '/gimport'} )
				}else{
					this.$router.push( { path: '/gexport'} )
				}
			}
		},
		component:{
			
		}
	}
</script>

<style lang='scss' scoped>
	b{
		display:block;
		height:60px;
		width:100%;
		background:#f2f2f2;
		line-height:60px;
		padding-left:20px;
	}
	.imp{
		padding:5% 5%;
		width:100%;
		height:100%;
		button{
			display:block;
			background:#1890ff;
			border:0;
			width:15%;
			height:40px;
			margin-top:5%;
			border-radius:5px;
			margin-left:25%;
			text-align:center;
			line-height:40px;
			color:#fff;
		}
	}
	.exc,.bas{
		border:5px solid #001529;
		width:30%;
		height:20%;
		margin-right:5%;
		display:inline-block;
		background:#001529;
		color:#fff;
		text-align:center;
		padding-top:30px;
	}
	.bas{
		
	}
	.hov:hover{
		border:5px solid #0099ff;
	}
	.showB{
		border:5px solid #0099ff;
	}
	
	
</style>