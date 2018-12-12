import Vue from 'vue'
import Router from 'vue-router'

import Model from '@/components/Menu/ClassB/model'
import Spu from '@/components/Menu/ClassB/spu'
import Sku from '@/components/Menu/ClassB/sku'
import List from '@/components/Menu/ClassB/list'
import Work from '@/components/Menu/ClassB/work'
import Basic from '@/components/Menu/ClassB/basic'
import Zxyh from '@/components/Menu/ClassB/zxyh'

import Skuadd from '@/components/Menu/ClassAdd/skuadd'
import Spuadd from '@/components/Menu/ClassAdd/spuadd'
import Newmodel from '@/components/Menu/ClassAdd/newmodel'
import Listadd from '@/components/Menu/ClassAdd/listadd'
import Import from '@/components/Menu/ClassAdd/import'
import Export from '@/components/Menu/ClassAdd/export'
import Gimport from '@/components/Menu/ClassAdd/gimport'
import Gexport from '@/components/Menu/ClassAdd/gexport'
import Listedit from '@/components/Menu/ClassAdd/listedit'
import Zxyhadd from '@/components/Menu/ClassAdd/zxyhadd'
import Basicedit from '@/components/Menu/ClassAdd/basicedit'
import Grouplabel from '@/components/Menu/ClassAdd/groupLabel'


Vue.use(Router)

export default new Router({
	mode:'history',
  routes: [
  	{
  		path:'/',
  		component:Model,
			
  	},
		{
			path:'/newmodel',
			component:Newmodel,
			
		},
		{
			path: '/basic',
			component: Basic
		},
		{
			path: '/basicedit',
			component: Basicedit
		},
  	{
  		path: '/spu',
  		component: Spu
  	},
		{
			path: '/spuadd',
			component: Spuadd
		},
  	{
  		path: '/sku',
  		component: Sku
  	},
		{
			path: '/skuadd',
			component: Skuadd
		},
  	{
  		path: '/list',
  		component: List
  	},
		{
			path:'/listadd',
			component: Listadd
		},
		{
			path:'/listedit',
			component: Listedit
		},
  	{
  		path: '/work', 
  		component: Work, 
			redirect: '/grouplabel'
  	},
		{
			path: '/grouplabel',
			name:'Grouplabel',
			component: Grouplabel
		},
		{
			path: '/zxyh',
			component: Zxyh
		},
		{
			path: '/zxyhadd',
			component: Zxyhadd
		},
		{
			path: '/import',
			component: Import
		},
		{
			path: '/gimport',
			component: Gimport
		},
		{
			path: '/gexport',
			component: Gexport
		},
		{
			path: '/export',
			component: Export
		}
  ]
})
