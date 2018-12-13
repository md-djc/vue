<template>
	<div id="clone">
		<mt-swipe :auto="0">
  			<mt-swipe-item>
  				<img src="../../assets/images/a_073dd6g9g1ii6af9l33918024e7ij_640x960.jpg" />
  			</mt-swipe-item>
  			<mt-swipe-item>
  				<img src="../../assets/images/a_488ee4idcgj1e0b9k4jdkb3gdc207_640x960.jpg_640x960.v1cOK.81.jpg" />
  			</mt-swipe-item>
  			<mt-swipe-item>
  				<img src="../../assets/images/a_11ella0b9ccj3ccfdd60fcilfhb30_640x960.jpg_640x960.v1cOK.81.jpg" />
  			</mt-swipe-item>
  			<mt-swipe-item>
  				<img src="../../assets/images/a_362223hikjjdg5ib9a3dcdh45ag7k_640x960.jpg_640x960.v1cOK.81.jpg" />
  			</mt-swipe-item>
  			<mt-swipe-item>
  				<img src="../../assets/images/a_788k5cia2l08akf0d3b7fc412lkik_640x960.jpg_640x960.v1cOK.81.jpg" />
  			</mt-swipe-item>
		</mt-swipe>
		<ul class="ul9">
			<li>
				<router-link to="/clone">
					<span></span>
					<p>客服</p>
				</router-link>
				<router-link to="/clone">
					<span></span>
					<p>店铺</p>
				</router-link>
				<router-link to="/clone">
					<span></span>
					<p>收藏</p>
				</router-link>
			</li>
			<li class="effect">
				<span>加入购物车</span>
				<span>购买</span>
			</li>
		</ul>		
		<div class="detail-plus"> 
			<router-link to='/cart'>
				<b>0</b> 
			</router-link> 
			<p class="gotop"></p>
		</div>		
		<div class="primary-info" v-for="v in item">
			<div class="info-title">    
				<span class="info">{{v.info}}</span>
			</div>
			<p class="newprice">{{v.newprice}}</p>
			<div class="info-price">  
				<span class="now">{{v.now}}</span>  
				<span class="market">{{v.market}}</span>    
				<span class="discount">{{v.discount}}</span> 
			</div>   
			<div class="service-list">  
				<div class="service-item">
					<span class="list" v-for="v in clone">
						<img :src="v.img" />
						<span class="service-name">{{v.service}}</span> 
					</span>
					<img src="../../assets/images/170711_701e7hcfi1j9fe76hgd560bj28d87_14x22.png" />
				</div>
			</div> 
		</div>
		<div class="detail-shop" v-for="v in shop">
			<div class="shop_info">
				<div class="shop_top">
					<router-link to='/'>
						<img :src="v.img" />
					</router-link>
					<router-link to='/'>
						<span class="store">{{v.store}}</span>
						<span class="title">
							<span class="plus">+</span>{{v.title}}
						</span>
					</router-link>
				</div>
				<div class="shop_content">
					<div class="count"> 
						<div class="sale">
							<span>{{v.sale}}</span><br>
							总销量
						</div> 
						<div class="all">
							<span>{{v.all}}</span><br>
							全部宝贝
						</div> 
					</div>					
					<div class="evaluate">
						<ul>
							<li> 
								<span>描述相符</span>  
								<b class="low">4.51</b> 
								<i class="low">低</i>  
							</li>
							<li> 
								<span>价格合理</span>  
								<b>5</b> 
								<i>高</i>  
							</li>  
							<li> 
								<span>质量满意</span>  
								<b class="low">4.51</b> 
								<i class="low">低</i>  
							</li>  
						</ul>
					</div>
				</div>
				<div class="goshop"> 
					<router-link to='/'>进店逛逛</router-link>
				</div>
			</div>
		</div>
		<div class="recommend-shop">
			<div class="rec_top">
				<p>为你推荐</p>
				<mt-swipe :auto="0">
				  	<mt-swipe-item>
				  		<ul>
				  			<li v-for="v in rec">
				  				<img :src="v.img" />
				  				<p class="rec_pic">{{v.rec_pic}}</p>
				  			</li>
				  		</ul>
				  	</mt-swipe-item>
				  	<mt-swipe-item>
				  		<ul>
				  			<li v-for="v in rec">
				  				<img :src="v.img" />
				  				<p class="rec_pic">{{v.rec_pic}}</p>
				  			</li>
				  		</ul>
				  	</mt-swipe-item>
				  	<mt-swipe-item>
				  		<ul>
				  			<li v-for="v in rec">
				  				<img :src="v.img" />
				  				<p class="rec_pic">{{v.rec_pic}}</p>
				  			</li>
				  		</ul>
				  	</mt-swipe-item>
				</mt-swipe>
			</div>
		</div>

	</div>
</template>
<script>
	export default{
		data(){
			return {
				rec:{},
				shop:{},
				item:{},
				clone:{}
			}
		},
		mounted(){
			this.$http.get('./data/clone.json')
			.then((response)=>{
				this.rec = response.data.rec;
				this.shop = response.data.shop;
				this.item = response.data.item;
				this.clone = response.data.clone;
			    console.log(response.data.list);
			})
			.catch(function (error) {
			    // handle error
		    console.log(error);
			})
			.then(function () {
				//always executed
			  });
		}
	}
</script>
<style>
	#clone{
		margin-bottom: 57px;
	}
	#clone .mint-swipe{
		width: 100%;
		height: 460px;
		overflow: hidden;
	}
	#clone .mint-swipe-item{
		width: 100%;
	}
	#clone .mint-swipe-item img{
		width: 93%;
	}
	#clone .ul9{
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 56px;
		display: flex;
		background: #fff;
		z-index: 2;
	}
	#clone .ul9 li{
		flex: 1;
		width: 50%;
	}
	#clone .ul9 li a{
		display: block;
		width: 33.3333%;
		float: left;
		vertical-align: middle;
	}
	#clone .ul9 li a span{
		display: block;
		width: 45px;
		height: 42px;
		margin-right: auto;
		margin-left: auto;
		transform: scale(0.5);
		margin-bottom: -7px;
		background: url('../../assets/images/upload_ifqtoztggfqtsyjzhazdambqgyyde_44x300.png') no-repeat;
	}
	#clone .ul9 li a:nth-of-type(1) span{
		background-position: -2px -105px;
	}  
	#clone .ul9 li a:nth-of-type(2) span{
		background-position: -2px -200px;
	} 
	#clone .ul9 li a:nth-of-type(3) span{
		background-position: -2px -2px;
	} 
	#clone .ul9 li a p{
		font-size: 14px;
		color: #999;
	}  
	#clone .detail-plus{
		width: 11%;
		height: 80px;
		position: fixed;
		right: 0;
		bottom: 60px;
		z-index: 10;
	}
	#clone .detail-plus a{
		width: 100%;
		height: 80px;
		display: inline-block;
		background: url('../../assets/images/upload_ie4tkodege4dkzrzhazdambqgqyde_80x180.png') no-repeat;
		background-position: 0 0;
		background-size: 34px;
		z-index: 2;
	}
	#clone .detail-plus a b{
		width: 15px;
		height: 15px;
		line-height: 15px;
		display: block;
		font-size: 12px;
		background: #f36;
		color: #fff;
		border-radius: 50%;
		margin-left: 34%;
		font-weight: 100;
	}
	#clone .effect span{
		display: block;
		line-height: 56px;
		width: 50%;
		float: left;
	}
	#clone .effect span:nth-of-type(1){
		background: #ffe817;
	}
	#clone .effect span:nth-of-type(2){
		color: #fff;
		background: #f69;
	}
	#clone .primary-info{
		width: 100%;
		text-align: left;
	}
	#clone .info-title{
		height: 72px;
	}
	#clone .info-title span{
		display: block;
		padding: 4%;
	}
	#clone .primary-info p{
		width: 100%;
		height: 25px;
		line-height: 25px;
		color: #f69;
		font-size: 20px;
		padding: 0 4%;
		box-sizing: border-box;
	}
	#clone .info-price{
		width: 100%;
		font-size: 12px;
		padding:  15px 4%;
		box-sizing: border-box;
		text-align: center;
		color: #999;
	}
	#clone .info-price .now{
		float: left;
	}
	#clone .info-price .discount{
		float: right;
	}
	#clone .service-list{
		width: 100%;
		height: 68px;
	}
	#clone .service-list .service-item{
		margin: 0 4%;
		border-top: 1px solid #eee;
		padding:  23px 0;
		overflow: hidden;
	}
	#clone .service-list .service-item .list{
		float: left;
		margin-right: 4%;
	}
	#clone .service-list .service-item img{
		width: 14px;
		height: 14px;
		vertical-align: middle;
	}
	#clone .service-list .service-item>img{
		width: 7px;
		height: 11px;
		float: right;
		margin-top: 4px;
	}
	#clone .service-list .service-item span{
		font-size: 14px;
		color: #666;
	}
	#clone .detail-shop{
		width: 100%;
		padding-bottom: 20px;
		margin-top: 5px;
		background: #fff;
	}
	#clone .shop_info{
		margin-top: 10px;
		padding: 0 4%;
	}
	#clone .shop_top{
		overflow: hidden;
	}
	#clone .shop_top a{
		overflow: hidden;
		display: block;
	}
	#clone .shop_top a:nth-of-type(1){
		float: left;
		border: 1px solid #ddd;
	 	border-radius: 50%;
	}
	#clone .shop_top a img{
		width: 45px;
		height: 45px;
	}
	#clone .shop_top span{
		display: inline-block;
	}
	#clone .shop_top .store{
		font-size: 16px;
		line-height: 51px;
		float: left;
		margin-left: 2%;
		color: #5e5e5e;
	}
	#clone .shop_top .title{
		width: 65px;
		height: 25px;
		line-height: 25px;
		margin-top: 14px;
		font-size: 14px;
		float: right;
		background: #f69;
		color: #fff;
		border-radius: 30px;
	}
	#clone .shop_content{
		margin: 10px 0;
		font-size: 12px;
		color: #333;
		width: 100%;
		overflow: hidden;
		display: flex;
	}
	#clone .count{
		width: 50%;
		border-right: 1px solid #eee;
		text-align: right;
	}
	#clone .sale,#clone .all{
		display: inline-block;
		font-size: 12px;
		margin-right: 14%;
		line-height: 2;
	}
	#clone .count span{
		font-size: 18px;
	}
	#clone .evaluate{
		width: 50%;
		padding-left: 13%;
		text-align: left;
		line-height: 1.7;
	}
	#clone .evaluate ul li span{
		font-size: 14px;
		color: #666;
	}
	#clone .evaluate b{
		color: #f13e3a;
	    font-size: 12px;
	    margin-left: 5px;
	    display: inline-block;
	    font-weight: 100;
	    min-width: 26px;
	}
	#clone .evaluate b.low{
		color: #5ea732;
	}
	#clone .evaluate i{
		display: inline-block;
		width: 14px;
		height: 14px;
		line-height: 14px;
		color: #fff;
		background: #f13e3a;
		font-style: normal;
	}  
	#clone .evaluate i.low{
		background: #5ea732;
	}  
	#clone .goshop a{
		display: inline-block;
		width: 43%;
		height: 30px;
		line-height: 30px;
		color: #666;
		font-size: 14px;
		border-radius: 20px;
	    background: #f2f5f8;
	
	}
	#clone .recommend-shop{
		width: 100%;
		background: #fff;
		margin-top: 5px;
	}
	#clone .rec_top{
		padding: 0 4%;
	}
	#clone .rec_top>p{
		color: #5e5e5e;
		font-size: 14px;
		text-align: left;
	}
	#clone .rec_top .mint-swipe{
		width: 100%;
		height: 300px;
	}
	#clone .rec_top .mint-swipe ul{
		width: 100%;
		overflow: hidden;
	}
	#clone .rec_top .mint-swipe ul li{
		width: 25%;
		float: left;
	}
	#clone .rec_top .mint-swipe ul li img{
		width: 100%;
	}
	#clone .rec_top .mint-swipe ul li p{
		font-size: 12px;
		color: #5e5e5e;
	}
</style>