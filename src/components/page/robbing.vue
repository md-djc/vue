<template>
	<div id="robbing">
		<div class="pic">
			<ul class="ul5">
				<li>热销榜单</li>
				<li>服饰鞋包</li>
				<li>美妆个护</li>
				<li>生活用品</li>
			</ul>
		</div>
		<div class="jpg">
			<img src="../../assets/images/181102.jpg" />
		</div>
		<ul class="ul6" v-for="v in tab">
			<h3>{{v.name}}</h3>
			<li v-for="v in list2">
				<router-link to="/">
					<div class="pic1"><img :src="v.img1" /></div>
					<p class="title">{{v.title}}</p>
					<div class="good_info">
						<span class="deadline">{{v.deadline}}</span>
						<span class="price">{{v.price}}</span>
						<span class="del">{{v.del}}</span>
					</div>
					<p class="btn">立即购买</p>
				</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				tab:{},
				list2:{}
			}
		},
		mounted() { //给window添加一个滚动滚动监听事件
			window.addEventListener('scroll', this.handleScroll)
			
			this.$http.get('./data/robbing.json')
			/*.then(function (response) {
			    // handle success
			  	this.list = response.data.list;
			    console.log(response.data.list);
			})*/
			.then((response)=>{
				this.tab = response.data.tab;
				this.list2 = response.data.list2;
			})
			.catch(function (error) {
			    // handle error
		    console.log(error);
			})
			.then(function () {
				//always executed
			 });
		},
		methods: {
			handleScroll() {
				var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
				var offsetTop = document.querySelector('.ul6').offsetTop;
				var ul5=document.querySelector('.ul5 li').innerText;
				if(scrollTop >= 200) {
					document.querySelector('.pic').style.display = 'block'
				} else {
					document.querySelector('.pic').style.display = 'none'
				}
				/*if(scrollTop  >= document.querySelector('.ul6 li').offsetTop) {
					console.log(document.querySelector('.ul5 li').innerText);
					document.querySelector('.ul5 li')[i].setAttribute('class', 'cur1');
				} else {
					document.querySelector('.ul5 li')[i].removeAttribute('class', 'cur1');
				}*/
				
				if(scrollTop >= document.querySelector('.ul6 li').offsetTop) {
					console.log('ok')
					document.querySelector('.ul5 li').setAttribute('class', 'cur1');
				} else {
					document.querySelector('.ul5 li').removeAttribute('class', 'cur1');
				}
				
				
				
				
			}
		},
		destroyed() { //离开该页面需要移除这个监听的事件
			window.removeEventListener('scroll', this.handleScroll)
		}
		
	}
</script>

<style>
	#robbing {
		z-index: 3;
		position: absolute;
		width: 100%;
		height: 100%;
		margin-bottom: 57px;
	}
	.cur1 {
		color: #FF5577;
	}
	#robbing>.pic {
		width: 100%;
		position: fixed;
		top: 0;
		left: 0;
		background: #fff;
		font-size: 14px;
		height: 45px;
		line-height: 45px;
		display: none;
	}
	
	#robbing .pic .ul5 li {
		float: left;
		width: 25%;
	}
	
	#robbing .jpg {
		width: 100%;
		height: 200px;
	}
	
	#robbing .jpg>img {
		width: 100%;
	}
	
	#robbing .ul6 {
		width: 100%;
		background: #f83131;
		margin-top: -4px;
		color: #fff;
		overflow: hidden;
	}
	
	#robbing .ul6 h3 {
		padding: 13px 0;
	}
	
	#robbing .ul6 li {
		width: 50%;
		float: left;
	}
	
	#robbing .ul6 li a {
		display: inline-block;
		width: 95%;
		margin: 0 1% 4% 1%;
		overflow: hidden;
		background: #fff;
	}
	
	#robbing .ul6 a .pic1 {
		height: 0;
		width: 100%;
		overflow: hidden;
		padding-bottom: 133.34%;
	}
	
	#robbing .ul6 a .pic1 img {
		width: 100%;
	}
	
	#robbing .ul6 a>p.title {
		color: #333;
		width: 100%;
		font-size: 0.24rem;
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
		padding: 5px 5%;
		box-sizing: border-box;
	}
	
	#robbing .good_info {
		width: 100%;
		font-size: 12px;
		padding: 5px 5%;
		box-sizing: border-box;
		overflow: hidden;
		line-height: 1;
	}
	
	#robbing .ul6 a span {
		float: left;
	}
	
	#robbing .ul6 a .deadline {
		color: #FF5777;
		border: 1px solid #FF5777;
	}
	
	#robbing .ul6 a .price {
		font-size: 14px;
		color: #333;
	}
	
	#robbing .ul6 a .del {
		float: right;
		text-decoration: line-through;
		color: #a1a09e;
	}
	
	#robbing p.btn {
		color: #fff;
		font-size: 14px;
		background: #FF5777;
		border-radius: 3px;
		margin: 9px 3%;
		padding: 2%;
	}
</style>