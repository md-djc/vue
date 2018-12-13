<template>
	<div id="hot">
		<mt-header title="十元抢券">
  			<span slot="left" @click="back()">
    			<mt-button icon="back"></mt-button>
  			</span>
  			<router-link to="/page" slot="right">
  				<mt-button>首页</mt-button>
  			</router-link>
		</mt-header>
		<div class="buy1">
			<p>亲，你还没有登录美丽说哦~</p>
			<p>只有登录才能抢券哦~</p>
			<router-link to="/my">
				<mt-button type="danger">去登录</mt-button>
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
	#hot{
		z-index: 3;
		margin-bottom: 57px;
	}
	#hot .mint-header{
		width: 100%;
		height: 60px;
		background-color: #fff;
		color: #333;
		border-bottom: 1px solid rgba(51,51,51,0.15);
		font-size: 18px;
		color: #666;
	}
	#hot .mint-header a{
		color: #666;
	}
	#hot .mint-button--danger{
		background: #f66;
	}
	#hot .buy1{
		width: 100%;
		padding-top: 70px;
		font-size: 12px;
		line-height: 20px;
	}
	#hot .buy1 a{
		display: block;
		margin-top: 30px;
	}
	#hot .buy1 a .mint-button--normal{
		padding: 0 25px;
		font-size: 14px;
		height: 33px;
	}
</style>