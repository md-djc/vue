<template>
	<div id="cart">
		<mt-header title="购物车">
  			<span slot="left" @click="back()">
    			<mt-button icon="back"></mt-button>
  			</span>
  			<router-link to="/page" slot="right">
  				<mt-button>首页</mt-button>
  			</router-link>
		</mt-header>
		<div class="buy1">
			<p>您的购物车还空着呢，</p>
			<p>美物这么多，快去看看吧～</p>
			<router-link to="/page">
				<mt-button type="danger">去逛逛</mt-button>
			</router-link>
		</div>
	</div>
</template>

<script>
	export default{
		methods:{
			back(){
				this.$router.go(-1)
			}
		}
	}
</script>

<style>
	#cart{
		z-index: 3;
		margin-bottom: 57px;
	}
	#cart .mint-header{
		width: 100%;
		height: 60px;
		background: #fff;
		color: #333;
		border-bottom: 1px solid rgba(51,51,51,0.15);
		font-size: 18px;
		color: #666;
	}
	#cart .mint-header a{
		color: #666;
	}
	#cart .mint-button--danger{
		background: #f66;
	}
	#cart .buy1{
		width: 100%;
		padding-top: 70px;
		font-size: 12px;
		line-height: 20px;
	}
	#cart .buy1 a{
		display: block;
		margin-top: 30px;
	}
	#cart .buy1 a .mint-button--normal{
		padding: 0 25px;
		font-size: 14px;
		height: 33px;
	}
</style>