<template>
  <div>
		<div id='container'>
			<div class='title' id='title' style='overflow:hidden'><i class='iconfont icon-erji-caidanguanli' style='font-size:25px;margin-right:20%'></i><b>车型库</b></div>
		</div>
	<div class='nav' id='nav'>
		<i class='iconfont icon-suohuicaidan- caidan' @click="chooseByta" :style="showNav ? 'display:inline;' : 'display:none'"></i>
		<i class='iconfont icon-zhanxiancaidan- caidan' @click="chooseByta" :style="showNav ? 'display:none;' : 'display:inline'"></i>
		<div>
			<i class='iconfont icon-guanliyuan'></i>
			<i class='iconfont icon-xiaoxitongzhitixinglingshenglingdang-xianxing'></i>
			<i class='iconfont icon-fangdajing'></i>
		</div>
	</div>
	<ul class='list' id='list'>
		<li>
		<!-- 	<router-link to='/'> -->
				<div class='title yiji' @click='yiji'>
					<i class='iconfont icon-erji-caidanguanli ileft'></i>
					<b>车型库</b>
					<i class='iconfont icon-tubiaozhizuo- iright' :style="show1 ? 'display:inline;' : 'display:none'"></i>
					<i class='iconfont icon-xiangxiajiantou iright' :style="show1 ? 'display:none;' : 'display:inline'"></i>
				</div>
			<!-- </router-link> -->
			
		</li>
		<ul v-show='erjiShow'>
			<router-link to='basic'>
				<li :class="['erji',hasSubStr($route.path, 'basic')?'active':'']">
					基础库
				</li>
			</router-link>
		</ul>
		<li>
			<!-- <router-link to='/spu'> -->
			<div @click='erji2'>
				<div :class="['title',hasSubStr($route.path, 'spu')?'active':'']">
					<i class='iconfont icon-duihao ileft'></i>
					<b>SPU库</b>
					<i class='iconfont icon-tubiaozhizuo- iright' :style="show2 ? 'display:inline;' : 'display:none'"></i>
					<i class='iconfont icon-xiangxiajiantou iright' :style="show2 ? 'display:none;' : 'display:inline'"></i>
				</div>
			</div>
			<!-- </router-link> -->
		</li>
		<li>
			<!-- <router-link to='/sku'> -->
			<div @click='erji3'>
				<div :class="['title',hasSubStr($route.path, 'sku')?'active':'']">
					<i class='iconfont icon-guanliyuan_guanliyuanrizhi ileft'></i>
					<b>SKU库</b>
					<i class='iconfont icon-tubiaozhizuo- iright'  :style="show3 ? 'display:inline;' : 'display:none'"></i>
					<i class='iconfont icon-xiangxiajiantou iright'  :style="show3 ? 'display:none;' : 'display:inline'"></i>
				</div>
			</div>	
			<!-- </router-link> -->
		</li>
		<li>
			<!-- <router-link to='/list'> -->
			<div @click='erji4'>
				<div :class="['title',hasSubStr($route.path, 'list')?'active':'']">
					<i class='iconfont icon-jinggao ileft'></i>
					<b>库表设置</b>
					<i class='iconfont icon-tubiaozhizuo- iright' :style="show4 ? 'display:inline;' : 'display:none'"></i>
					<i class='iconfont icon-xiangxiajiantou iright' :style="show4 ? 'display:none;' : 'display:inline'"></i>
				</div>
			</div>
			<!-- </router-link> -->
		</li>
		<li>
			<!-- <router-link to='/work'> -->
			<div @click='erji5'>
				<div :class="['title yiji',hasSubStr($route.path, 'work')?'active':'']" @click='cooper'>
					<i class='iconfont icon-icon-edit ileft'></i>
					<b>合作商分组</b>
					<i class='iconfont icon-tubiaozhizuo- iright' :style="show5 ? 'display:inline;' : 'display:none'"></i>
					<i class='iconfont icon-xiangxiajiantou iright' :style="show5 ? 'display:none;' : 'display:inline'"></i>
				</div>
			</div>
			<!-- </router-link> -->
		</li>
		<ul v-show='cooperShow' style='width:100%;height:350px;overflow-y:scroll'>
			<li class='erji' v-for='(item,index) in listPoint' :key='index'>
				<div @click='itemDiv(item,key)' >
					{{item.groupName}}
				</div>
			</li>
		</ul>
	</ul>
	<ul class='list2' id='list2'>
		<li style='background:#00284d;'><b>车型库</b></li>
		<li><i class='iconfont icon-erji-caidanguanli'></i></li>
		<li><i class='iconfont icon-duihao'></i></li>
		<li><i class='iconfont icon-guanliyuan_guanliyuanrizhi'></i></li>
		<li><i class='iconfont icon-jinggao'></i></li>
		<li><i class='iconfont icon-icon-edit'></i></li>
	</ul>
  </div>
</template>
<script>
import $ from 'jquery';
export default {
	data(){
		return{
			count:0,
			showNav: true,
			show1:true,
			show2:true,
			show3:true,
			show4:true,
			show5:true,
			listPoint:[],
			erjiShow:false,
			cooperShow:false,
			isActive:true,
			key:0
		}
	},
	methods:{
		hasSubStr: function (str, subStr) {
			if(str.indexOf(subStr) > -1){
				return true
			}
			return false
		},
		yiji(){
			// debugger
			if(this.erjiShow){
				this.$router.push({path:'/'})
			}else{
				var that=this
			setTimeout(function(){
				that.$router.push({path:'/basic'})
			},100)
			}
			this.erjiShow = !this.erjiShow
			this.show1 = !this.show1
		},
		cooper(){
			/* if( this.cooperShow ){
				this.$router.push({path:'/work'})
			}else{
				var that=this
				setTimeout(function(){
					that.$router.push({path:'/work'})
				},100)
				
			} */
			this.cooperShow = !this.cooperShow
			let params = {
					"jsfType": "vehicleMerchantResource_queryMerGroList",
					"valueJsonStr": [{
						"pageInfoVo": {
							"pageNum": 1,
							"pageSize": 100000
						},
						"appCode": "cfbizbaseservice.jr.jd.com",
						"merchantCode": "1234",
					}]
				}
			this.$http.post('/gateway/invokeJsf',params)
			.then( ( res )=>{
				console.log( res )
				this.listPoint = [];
				let listMer = res.data.object.pageInfoVo.list;
				let listLen = listMer.length;
				if( res.data.object.code == "SUCCESS" ){
					for(var i=0; i<listLen; i++ ){
						for( var key in listMer[i] ){
							if( key =="groupName"){
								//console.log( listMer[i]["groupName"] )
								this.listPoint.push( listMer[i]) 
								//console.log( listMer[i] )
							}
						}
					} 
				}else{
					alert('网络异常')
				}
			})
			.catch( ( error )=>{
				console.log( error )
			})
		},
		itemDiv( item, index ){

			this.$router.push({path:'/grouplabel', query: {id:item.groupId,idx:item.groupName}})
			
		},
		erji1(){
			this.$router.push({path:'/'})
			this.show1 = !this.show1
		},
		erji2(){
			this.$router.push({path:'/spu'})
			this.show2 = !this.show2
		},
		erji3(){
			this.$router.push({path:'/sku'})
			this.show3 = !this.show3
		},
		erji4(){
			this.$router.push({path:'/list'})
			this.show4 = !this.show4
		},
		erji5(){
			this.$router.push({path:'/work'})
			this.show5 = !this.show5
		},
		chooseByta () {
			this.showNav = !this.showNav
			if(this.showNav){
				document.getElementById('nav').style.width = "86%"
				document.getElementById('nav').style.left = "14%"
				document.getElementById('container').style.width = "14%"
				document.getElementById('content').style.left = "14%"
				document.getElementById('content').style.width = "86%"
				
				document.getElementById('list2').style.display = "none"
				document.getElementById('container').style.display = "block"
				document.getElementById('list').style.display = "block"
			}else{
				document.getElementById('nav').style.width = "96%"
				document.getElementById('nav').style.left = "4%"
				document.getElementById('list2').style.display = "block"
				document.getElementById('container').style.display = "none"
				document.getElementById('list').style.display = "none"
				document.getElementById('content').style.left = "4%"
				document.getElementById('content').style.width = "96%"
			}
		},
		fangdajing(){
			document.getElementById('fangdajing').style.width="200px"
		}
	},
	components:{
		
	}
}
</script>

<style lang='scss' scoped>
	.active{
		background: #1890ff;
	}
	ul,li{
		list-style:none;
	}
	.list>li>div>div{
		overflow:hidden;
	}
	ul>li>a>div>div{
		overflow:hidden;
	}
	.list>li>.title:hover{
		background:#1890ff;
	}
	.list>li>div>.title:hover{
		background:#1890ff;
	}
	.erji:hover{
		background:#1890ff;
	}
	.list{
		margin-top:48px;
		position:absolute;
		z-index:2;
		width:14%;
	}
	.list2{
		position:absolute;
		z-index:3;
		width:4%;
		height:100%;
		background:#001529;
		overflow:hidden;
		display:none;
		b{
			font-size:18px;
			font-weight:600;
			color:#fff;
			overflow:hidden;
		}
		i{
			font-size:20px;
			color:#fff;
		}
		li{
			overflow:hidden;
			height:48px;
			line-height:48px;
			text-align:center;
			background:#001529;
		}
	}
	
	.title{
		color:#fff;
		width:100%;
		height:48px;
		padding:0 10% 0 10%;
		line-height:48px;
		.ileft{
			float:left;
			margin-right:5%;
		}
		.iright{
			float:right;
		}
	}
	.list>li>ul{
		display:none;
	}
	.erji{
		width:100%;
		height:48px;
		color:#fff;
		line-height:48px;
		text-align:center;
	}
	.nav{
		height:55px;
		width:86%;
		background:#fff;
		position:absolute;
		top:0;
		left:14%;
		line-height:55px;
		border-bottom:5px solid #f0f2f5;
		div{
			display:inline;
			width:25%;
			float:right;
			i{
				font-size:25px;
				margin-right:10%;
				float:right;
			}
		}
	}
	.caidan{
		font-size:20px;
		padding:10px;
		color:#000;
	}
	#container{
		position:absolute;
		left:0;
		top:0;
		width:14%;
		height:100%;
		background:#001529;
		
		.title{
			width:100%;
			height:48px;
			position:absolute;
			left:0;
			top:0;
			line-height:48px;
			color:#fff;
			background:#00254f;
			font-size:18px;
			padding-left:10%;
			
		}
	}
	
</style>