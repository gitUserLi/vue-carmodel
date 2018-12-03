<template>
  <div id="app">
		<Model>
			
		</Model>
    <Content></Content>
		
  </div>
</template>

<script>
	
	import Model from '@/components/Menu/ClassA/model'
	import Content from '@/components/Content/content'
	export default {
		name: 'App',
		data (){
			return {
				
			}
		},
		methods: {
			
		},
		components: {
			Model,
			Content
		}
	}
</script>

<style lang='scss'>
	@import './lib/reset.scss'
	
	
</style>