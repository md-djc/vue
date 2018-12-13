<template>
	<div id="login">
		<mt-header title="个人中心">
  			<span slot="left" @click="back()">
    			<mt-button icon="back"></mt-button>
  			</span>
  			<router-link to="/my" slot="right">
  				<mt-button>退出</mt-button>
  			</router-link>
		</mt-header>
		<section>
			<div class="warp">
				<div class="userInfo">
					<div class="img_wrap">
						<img src="../../assets/images/181010_25692hkl507726g17437i6gii798d_270x270.png" />
					</div>
					<p>mls_1g5dikyk6uwpi</p>
				</div>
				<ul class="stow">
					<li>
						<router-link to='/'>
							<b>0</b>
							<p>收藏的宝贝</p>
						</router-link>
					</li>
					<li>
						<router-link to='/'>
							<b>0</b>
							<p>收藏的店铺</p>
						</router-link>
					</li>
					<li>
						<router-link to='/'>
							<span class="discount"></span>
							<p>优惠券</p>
						</router-link>
					</li>
					<li>
						<router-link to='/'>
							<span class="address"></span>
							<p>收货地址</p>
						</router-link>
					</li>
				</ul>
			</div>
			<ul class="orderTab">
				<li>
					<router-link to='/'>
						<span class="add"></span>
						<p>全部订单</p>
					</router-link>
				</li>
				<li>
					<router-link to='/'>
						<span class="pay"></span>
						<p>代付款</p>
					</router-link>
				</li>
				<li>
					<router-link to='/'>
						<span class="goods"></span>
						<p>待收货</p>
					</router-link>
				</li>
				<li>
					<router-link to='/'>
						<span class="judge"></span>
						<p>待评价</p>
					</router-link>
				</li>
				<li>
					<router-link to='/'>
						<span class="sell"></span>
						<p>售后</p>
					</router-link>
				</li>
			</ul>
			<div class="recommend">
				<div class="top">
					<span class="fashion">流行单品</span>
					<span class="new">每日10点、18点上新</span>
				</div>
				<ul class="like">
					<li v-for="v in list">
						<router-link to='/'>
							<img :src="v.img" />
							<div class="goods-props">  
								<span>{{v.span1}}</span>  
								<span>{{v.span2}}</span>  
								<span>{{v.span3}}</span>  
								<span>{{v.span4}}</span>  
								<span>{{v.span5}}</span>  
								<span>{{v.span6}}</span>  
							</div>
							<p>{{v.price}}</p>
						</router-link>
					</li>
				</ul>
			</div>
			<div class="goTop" v-show="goTopShow" @click="goTop">
				<i class="goTopIcon"></i>
			</div>
		</section>
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
			back(){
				this.$router.go(-1)
			},
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
		mounted(){
			window.addEventListener('scroll', this.handleScroll);
			
			this.$http.get('./data/login.json')
			/*.then(function (response) {
			    // handle success
			  	this.list = response.data.list;
			    console.log(response.data.list);
			})*/
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
	#login{
		margin-bottom: 57px;
	}
	#login .mint-header{
		width: 100%;
		height: 60px;
		background: #fff;
		color: #333;
		border-bottom: 1px solid rgba(51,51,51,0.15);
		font-size: 18px;
		color: #666;
	}
	#login .mint-header a{
		color: #666;
	}
	#login section{
		width: 100%;
	}
	#login .warp{
		background: url('../../assets/images/beab178c0b1515abdbbb9fbe6159_640_290.cf.jpg') no-repeat;
		background-size: cover;
		width: 100%;
	    padding-top: 20px;
	    font-size: 14px;
	    text-align: center;
	    color: #fff;
	}
	#login .img_wrap{
		width: 15%;
    	margin-left: auto;
    	margin-right: auto;
    	border-radius: 50%;
	}
	#login .img_wrap img{
		width: 100%;
		border-radius: 50%;
	}
	#login .userInfo p{
		margin: 10px 0;
		font-size: 16px;
		font-weight: bold;
	}
	#login .stow{
		width: 100%;
		margin-top: 5px;
    	border-top: 0.5px solid rgba(255,255,255,.5);
    	box-sizing: border-box;
    	display: flex;
	}
	#login .stow li{
		flex: 1;
		color: #fff;
    	padding: 10px 0;
	}
	#login .stow li a{
		display: block;
		color: #fff;
	}
	#login .stow li p{
		color: #fff;
		margin-top: 5px;
	}
	#login .stow li span,#login .orderTab li span{
		display: block;
		margin: 0 auto;
		width: 0.9rem;
    	height: 1.2rem;
    	background: url('../../assets/images/170807_7bgbadh4il5k8f3gl3ij3igg70d1b_580x678.png') no-repeat;
    	background-size: 7.9rem 7.99rem;
	}
	#login .stow li span.discount{
		background-position: 0.05rem -2rem;
	}
	#login .stow li span.address{
		background-position: -0.02rem -4.45rem;
	}
	#login .orderTab{
		display: flex;
		margin: 10px 0;
		padding: 10px 0;
		background: #fff;
	}
	#login .orderTab li{
		flex: 1;
	}
	#login .orderTab li a{
		display: block;
	}
	#login .orderTab li a p{
		color: #666;
		font-size: 14px;
	}
	#login .orderTab li span.add{
		background-position: 0.05rem -7.09rem;
	}
	#login .orderTab li span.pay{
		background-position: -2.25rem -7.09rem;
	}
	#login .orderTab li span.goods{
		background-position: -4.6rem -7.09rem;
	}
	#login .orderTab li span.judge{
		background-position: -7.04rem -7.09rem;
	}
	#login .orderTab li span.sell{
		background-position: -6.9rem -4.58rem;
	}
	#login .recommend{
		background: #fff;
	}
	#login .recommend .top{
		padding: 0 4%;
		overflow: hidden;
	}
	#login .recommend .fashion{
		display: block;
		float: left;
		font-size: 16px;
		color: #666;
		line-height: 2;
	}
	#login .recommend .new{
		float: right;
		font-size: 14px;
		color: #999;
		line-height: 2.3;
	}
	#login .like{
		width: 100%;
		overflow: hidden;
	}
	#login .like li{
		width: 46%;
		float: left;
		padding: 0 2%;
		text-align: left;
	}
	#login .like li a{
		display: block;
	}
	#login .like li img{
		width: 100%;
	}
	#login .goods-props{
		margin-top: 5px;
    	overflow: hidden;
    	height: 40px;
	}
	#login .goods-props span{
	    line-height: 1px;
	    font-size: 12px;
	    margin: 1% 2%;
	    background: #f2f5f8;
	    color: #9394a6;
	}
	#login .like p{
		margin-top: 5px;
	    color: #333;
	    font-size: 14px;
	}
	#login .goTop{
	    position: fixed;
	    right: 2%;
	    bottom: 70px;
	    width: 10%;
	    height: 40px;
	}
	#login .goTopIcon{
	    display: block;
	    width: 100%;
	    height: 100%;
	    border-radius: 50%;
	    background: url('../../assets/images/idid_ifrwmmrrmyywinjqmmzdambqhayde_90x90.png') no-repeat;
	    background-size: 100% 100%;
	}
</style>