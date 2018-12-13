<template>
	<div id="my">
		<mt-header title="登录">
  			<span slot="left" @click="back()">
    			<mt-button icon="back"></mt-button>
  			</span>
  			<router-link to="/" slot="right">
  				<mt-button>忘记密码</mt-button>
  			</router-link>
		</mt-header>	
		<div class="login">
			<div class="user">
				<span>美丽说账号</span>
				<mt-field placeholder="请输入用户名/邮箱/手机" maxlength="32"></mt-field>
			</div>
			<div class="pass">
				<span>密码</span>
				<mt-field placeholder="请输入密码" type="password"></mt-field>	
			</div>
			<router-link to="/login">
				<mt-button type="danger">登录</mt-button>
			</router-link>
			<div class="sign">
				<router-link to="/">免密登录</router-link>
				<router-link to="/">注册账号</router-link>
			</div>
			
				<router-link to="/">
					<img src="../../assets/images/upload_ieztmnzwmztdsoddgizdambqgyyde_210x210.png" />
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
	#my{
		z-index: 4;
		position: fixed;
		width: 100%;
		height: 100%;
		background: #fff;
	}
	#my .mint-header{
		width: 100%;
		height: 60px;
		background: #fff;
		color: #333;
		border-bottom: 1px solid rgba(51,51,51,0.15);
		font-size: 18px;
		color: #666;
	}
	#my .mint-header a{
		color: #666;
		font-size: 14px;
	}
	#my .login{
		padding: 50px 5% 0;
	}
	#my .login .user{
		width: 100%;
	}
	#my .login span{
		display: block;
		font-size: 14px;
		color: #666;
		margin-bottom: 10px;
	}
	#my .mint-cell-wrapper,#my .mint-cell:last-child{
		background-image:none;
	}
	#my .login div{
		margin-bottom: 5px;
	}
	#my .login a input{
		text-align: center;
		border-bottom: 1px solid #ededed;
		font-size: 20px;
		opacity: 0.3;
	}
	#my .login .mint-button--normal{
		padding: 0 150px;
		display: block;
	}
	#my .login .sign{
		width: 100%;
		margin-top: 15px;
		overflow: hidden;
		margin-bottom: 50px;
	}
	#my .sign a:nth-of-type(1){
		float: left;
		color: #999;
	}
	#my .sign a:nth-of-type(2){
		float: right;
		color: #ff4650;
	}
	#my .login>a{
		display: block;
		width: 100%;
	}
	#my .login>a img{
		width: 35%;
	}
</style>