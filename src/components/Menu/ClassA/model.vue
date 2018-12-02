<template>
  <div>
		<div id='container'>
			<div class='title' id='title'><i class='iconfont icon-erji-caidanguanli' style='font-size:25px;margin-right:20%'></i><b>车型库</b></div>
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
			<router-link to='/'>
				<div class='title yiji' @click.self='yiji($event)'>
					<i class='iconfont icon-erji-caidanguanli ileft'></i>
					<b>车型库</b>
					<i class='iconfont icon-tubiaozhizuo- iright'  @click='erji1()' :style="show1 ? 'display:inline;' : 'display:none'"></i>
					<i class='iconfont icon-xiangxiajiantou iright'  @click='erji1()' :style="show1 ? 'display:none;' : 'display:inline'"></i>
				</div>
			</router-link>
			<ul>
				<router-link to='basic'>
					<li class='erji'>
						基础库
					</li>
				</router-link>
			</ul>
		</li>
		<li>
			<router-link to='/spu'>
				<div class='title'>
					<i class='iconfont icon-duihao ileft'></i>
					<b>SPU库</b>
					<i class='iconfont icon-tubiaozhizuo- iright'  @click='erji2()' :style="show2 ? 'display:inline;' : 'display:none'"></i>
					<i class='iconfont icon-xiangxiajiantou iright'  @click='erji2()' :style="show2 ? 'display:none;' : 'display:inline'"></i>
				</div>
			</router-link>
		</li>
		<li>
			<router-link to='/sku'>
				<div class='title'>
					<i class='iconfont icon-guanliyuan_guanliyuanrizhi ileft'></i>
					<b>SKU库</b>
					<i class='iconfont icon-tubiaozhizuo- iright'  @click='erji3()' :style="show3 ? 'display:inline;' : 'display:none'"></i>
					<i class='iconfont icon-xiangxiajiantou iright'  @click='erji3()' :style="show3 ? 'display:none;' : 'display:inline'"></i>
				</div>
			</router-link>
		</li>
		<li>
			<router-link to='/list'>
				<div class='title'>
					<i class='iconfont icon-jinggao ileft'></i>
					<b>库表设置</b>
					<i class='iconfont icon-tubiaozhizuo- iright'  @click='erji4()' :style="show4 ? 'display:inline;' : 'display:none'"></i>
					<i class='iconfont icon-xiangxiajiantou iright'  @click='erji4()' :style="show4 ? 'display:none;' : 'display:inline'"></i>
				</div>
			</router-link>
		</li>
		<li>
			<router-link to='/work'>
				<div class='title yiji' @click.self='yiji($event)'>
					<i class='iconfont icon-icon-edit ileft'></i>
					<b>合作商分组</b>
					<i class='iconfont icon-tubiaozhizuo- iright'  @click='erji5()' :style="show5 ? 'display:inline;' : 'display:none'"></i>
					<i class='iconfont icon-xiangxiajiantou iright'  @click='erji5()' :style="show5 ? 'display:none;' : 'display:inline'"></i>
				</div>
			</router-link>
			<ul>
				<router-link to='/zxyh'>
					<li class='erji'>
						中信银行-线索模式
					</li>
				</router-link>
			</ul>
		</li>
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
export default {
	data(){
		return{
			count:0,
			showNav: true,
			show1:true,
			show2:true,
			show3:true,
			show4:true,
			show5:true
		}
	},
	methods:{
		yiji(e) {
			this.count++;
			if( this.count % 2 ){
				e.target.parentNode.nextElementSibling.style.display='block';
				
			}else{
				e.target.parentNode.nextElementSibling.style.display='none';
			}	
		},
		erji1(){
			this.show1 = !this.show1
		},
		erji2(){
			this.show2 = !this.show2
		},
		erji3(){
			this.show3 = !this.show3
		},
		erji4(){
			this.show4 = !this.show4
		},
		erji5(){
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
		chooseBytb () {
			
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
	ul,li{
		list-style:none;
	}
	ul>li>a>div{
		overflow:hidden;
	}
	.list>li>a>.title:hover{
		background:#0086ff;
	}
	.erji:hover{
		background:#0086ff;
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