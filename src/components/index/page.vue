<template>
	<div id="page">
		<header>
			<router-link to="/page">
				<img src="../../assets/images/back.png" />
			</router-link>
			<router-link to="/text">
				<input type="text" value="套装"/>
			</router-link>
			<router-link to="/my">
				<img src="../../assets/images/login.png" />
			</router-link>
		</header>

		<mt-swipe :auto="4000">
			<mt-swipe-item>
			  <img src="../../assets/images/181101.jpg" />
			</mt-swipe-item>
			<mt-swipe-item>
			  <img src="../../assets/images/181102.jpg" />
			</mt-swipe-item>
			<mt-swipe-item>
			  <img src="../../assets/images/181103.jpg" />
			</mt-swipe-item>
			<mt-swipe-item>
			  <img src="../../assets/images/181114.v1c7E.70.jpg" />
			</mt-swipe-item>
		</mt-swipe>
		
		<ul class="ul1">
			<li>
				<router-link to="/hot">
					<img src="../../assets/images/180913.png" />
					<p class="des">十点抢券</p>
				</router-link>
			</li>
			<li>
				<router-link to="/robbing">
					<img src="../../assets/images/180914.png" />
					<p class="des">好物特卖</p>
				</router-link>
			</li>
			<li>
				<router-link to="/welfare">
					<img src="../../assets/images/180915.png" />
					<p class="des">内购福利</p>
				</router-link>
			</li>
			<li>
				<router-link to="/autumn">
					<img src="../../assets/images/180916.png" />
					<p class="des">初秋上新</p>
				</router-link>
			</li>
		</ul>
		
		<div class="pic">
			<img src="../../assets/images/181112.jpg" />
		</div>
		<div class="pic">
			<img src="../../assets/images/171030.jpg" />
		</div>

		<div class="more">
			<div class="wrap">
				<p>查看更多<i></i></p>
				<!--<div class="curtain">
					<div class="hide">
						<p>亲，请先下载美丽说客户端~</p>
						<b>取消</b>
						<s>确认</s>
					</div>
				</div>-->
			</div>
		</div>

		<div class="cur">
			<ul class="ul2">
				<li>流行</li>
				<li>新款</li>
				<li>精选</li>
			</ul>
			<ul class="ul3">
				<li v-for="v in list">
					<router-link to="/clone">
						<img :src="v.img" />
						<p class="title">{{v.title}}</p>
						<div class="goods_info">
							<span class="price">{{v.price}}</span>
							<span class="num"><em></em>{{v.num}}</span>
						</div>
					</router-link>
					<div class="clear"></div>
				</li>
			</ul>
		</div>
		<div class="goTop" v-show="goTopShow" @click="goTop">
			<i class="goTopIcon"></i>
		</div>
	</div>
</template>
	
<script>
	export default{
        name: "goTop",
        data(){
			return {
				scrollTop: '',
            	goTopShow:false,
				list:{}
			}
		},
      	methods:{
        	handleScroll () {
          		this.scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
         	 	if(this.scrollTop>500){
            		this.goTopShow=true
          		}
        	},
        	goTop(){
          		let timer=null,_that=this;
          		cancelAnimationFrame(timer)
          		timer=requestAnimationFrame(function fn(){
            		if(_that.scrollTop>0){
              			_that.scrollTop-=50;
              			document.body.scrollTop = document.documentElement.scrollTop = _that.scrollTop;
              			timer=requestAnimationFrame(fn)
            		}else {
              			cancelAnimationFrame(timer);
              			_that.goTopShow=false;
            		}
          		})
        	}
      	},
      	mounted() {
        	window.addEventListener('scroll', this.handleScroll);
        	
			this.$http.get('./data/page.json')
			.then((response)=>{
				this.list = response.data.list;
			    console.log(response.data.list);
			})
			.catch(function (error) {
			    // handle error
		    console.log(error);
			})
			.then(function () {
				//always executed
			});
		},
     	destroyed(){
        	window.removeEventListener('scroll', this.handleScroll)
      	}

    }  
</script>

<style>
	#page{
		color: #666;
		margin-bottom: 57px;
	}
	#page header{
		width: 100%;
		background: #fff;
	}
	#page header a{
		display: inline-block;
		width: 68%;
	}
	#page header a:nth-of-type(1){
		float: left;
		width: 19%;
		margin-top: 5px;
	}
	#page header a:nth-of-type(3){
		float: right;
		width: 13%;
		margin-top: 8px;
	}
	#page header img{
		vertical-align: middle;
		width: 40%;
	}
	#page input{
		padding: 0.5rem 15% 0.5rem 15%;
		margin: 2% 0;
        border: none;
        outline: none;
        background: #f4f4f4 url('../../assets/images/find.png') no-repeat 3% center; 
        background-size: 6%;
    	border-radius: 2%;
    	color: #9d9d9d;
	}
	#page .mint-swipe{
		width: 100%;
	}
	#page .mint-swipe-items-wrap{
		padding-bottom: 52%;
		height: 0;
	}
	#page .mint-swipe img{
		width: 100%;
	}
	#page .mint-swipe-indicators .mint-swipe-indicator{
		background: #fff;
	} 
	#page .mint-swipe-indicators .is-active{
		background: #d43e2e;
	}
	#page .mint-swipe-indicator{
		opacity: 1;
	}
	#page .ul1,#page .ul2{
		display: flex;
		width: 100%;
	}
	#page .ul1{
		padding: 10px 0;
		background: #fff;
	}
	#page .ul2{
		height: 40px;
		line-height: 40px;
		border-bottom: 1px solid #eee;
	}
	#page .ul1 li,#page .ul2 li{
		flex: 1;
	}
	#page .ul1 li img{
		width: 80%;
	}
	#page .ul1 li p{
		margin-top: 4%;
		font-size: 14px;
		color: #666;
	}
	#page .pic{
		width: 100%;
	}
	#page .pic:nth-of-type(3){
		margin-top: -4px;
	}
	#page .pic img{
		width: 100%;
	}
	#page .more{
		width: 100%;
		margin: 0 auto;
		position: relative;
	}
	#page .more .wrap{
		background: #eee;
		width: 100%;
		/*overflow: hidden;*/
	}
	#page .more .wrap>p{
	    color: #f36;
	    padding: 10px 0;
	    font-size: 12px;
	    text-align: center;
	    margin-bottom: 15px;
	    margin-top: -10px;
	    background: white;
	}
	#page .more i{
		position: absolute;
		border-top: 1px solid #f36;
    	border-left: 1px solid #f36;
    	width: 7px;
    	height: 7px;
    	background-color: transparent;
    	transform: rotate(135deg);
    	display: inline-block;
    	margin-left: 1%;
    	margin-top: 3px;
	}
	#page .more .curtain{
		display: none;
		position: fixed;
		top: 0px;
		left: 0px;
		width: 100%;
		height: 100%;
		background: rgba(0,0,0,0.5);
		z-index: 99;
		text-align: center;
	}
	#page .more .hide{
    	margin-top: 190px;
    	display: inline-block;
    	width: 70%;
    	background: #fff;
    	border-radius: 15px;
	}
	#page .more .hide p{
		font-size: 12px;
		color: #000000;
		padding: 18px 0;
		border-bottom: 1px solid #ddd;
	}
	#page .more .hide b,#page .more .hide s{
		font-size: 14px;
		color: #f69;
		width: 49.8%;
		text-align: center;
		line-height: 2.7;
		float: left;
	}
	#page .more .hide b{
		font-weight: 100;
		float: left;
		border-right: 1px solid #ddd;
	}
	#page .cur{
		background: #fff;
	}
	#page .cur .ul3{
		width: 100%;
		overflow: hidden;
	}
	.cur2{
		position: fixed;
		top: 0;
		left: 0;
		background: #fff;
	}
	#page .cur .ul3 li{
		width: 50%;
		float: left;
	}
	#page .cur a{
		display: inline-block;
		width: 95%;
    	margin: 0 1% 4% 1%;
    	overflow: hidden;
	}
	#page .cur a img{
		width: 100%;
	}
	#page .cur .title{
		display: block;
    	width: 100%;
	    margin-top: 10px;
	    font-size: 12px;
	    white-space: nowrap;
	    text-overflow: ellipsis;
	    text-align: center;
	    overflow: hidden;
	    height: 17px;
	    color: #666;
	}
	#page .cur .goods_info{
		text-align: center;
	    height: 12px;
	    overflow: hidden;
	    font-size: 0;
	}
	#page .cur .price{
		color: #FF3366;
	    text-align: center;
	    font-size: 12px;
	    margin-right: 10px;
	    line-height: 1;
	}
	#page .cur .num{
		color: #999999;
	    font-size: 12px;
	    line-height: 1;
	}
	#page .cur .num em{
		display: inline-block;
	    background: url('../../assets/images/xx.png') no-repeat;
	    background-size: contain;
	    width: 11px;
	    height: 11px;
	    margin-right: 5px;
	    vertical-align: -1px;
	}
	#page .goTop{
	    position: fixed;
	    right: 2%;
	    bottom: 70px;
	    width: 10%;
	    height: 40px;
	}
	#page .goTopIcon{
	    display: block;
	    width: 100%;
	    height: 100%;
	    border-radius: 50%;
	    background: url('../../assets/images/top.png') no-repeat;
	    background-size: 100% 100%;
	}

	
	#page .clear{
		display: block;
	    content: '';
	    clear: both;
	}
</style>