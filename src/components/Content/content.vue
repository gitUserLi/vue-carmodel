<template>
	<div class='container' id="content">
		<router-view v-if='isRouterAlive'></router-view>
	</div>
</template>

<script>

	export default {
		provide(){
			return{
				reload:this.reload
			}
		},
		data (){
			return {
				isRouterAlive: true 
			}
		},
		methods: {
			reload(){
				this.isRouterAlive = false;
				this.$nextTick(function(){
					this.isRouterAlive = true ;
				})
			}
		},
		components: {
			
		}
	}
</script>

<style lang='scss'>
	.container{
		background:#f0f2f5;
		position:absolute;
		left:14%;
		top:65px;
		width:86%;
		height:100%;	
	}
</style>