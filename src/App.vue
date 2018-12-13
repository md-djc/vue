<template>
  <div id="app">
    <ul class="ul">
			<li>
				<router-link to="/page">
					<span class="home"></span>
					<p>首页</p>
				</router-link>
			</li>
			<li>
				<router-link to="/classify">
					<span class="type"></span>
					<p>分类</p>
				</router-link>
			</li>
			<li>
				<router-link to="/cart">
					<span class="buy"></span>
					<p>购物车</p>
				</router-link>
			</li>
			<li>
				<router-link to="/my">
					<span class="My"></span>
					<p>我的</p>
				</router-link>
			</li>
		</ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style >
	body{
		background: #f4f4f4;
		width: 100%;
		height: 100%;
	}
	#app {
	  text-align: center;
	  color: #2c3e50;
	}
	#app .ul {
		z-index: 2;
	  position: fixed;
	  bottom: 0;
	  left: 0;
	  display: flex;
	  width: 100%;
	  height: 57px;
	  background: white;
	  border-top: 0.1px solid #9D9D9D;
	}
	#app .ul li {
	  flex: 1;
	}
	#app .ul a {
	  color: #999;
	  font-size: 14px;
	  display: block;
	}
	.router-link-active p{
		color: #ff3366;
	}
	#app .ul li span{
		width: 38px;
	  height: 38px;
		margin-right: auto;
		margin-left: auto;
		display: block;
		transform: scale(0.6);
	}
	#app span.home{
		background: url('assets/images/up_36x39.png') no-repeat center;
	}
	#app span.type{
		background: url('assets/images/upload_34x34.png') no-repeat center;
	}
	#app span.buy{
		background: url('assets/images/upload_40x38.png') no-repeat center;
	}
	#app span.My{
		background: url('assets/images/upload__38x38.png') no-repeat center;
	}
	#app .router-link-active span.home{
		background: url('assets/images/upload_36x39.png') no-repeat center;
	}
	#app .router-link-active span.type{
		background: url('assets/images/up_34x34.png') no-repeat center;
	}
	#app .router-link-active span.buy{
		background: url('assets/images/up_40x38.png') no-repeat center;
	}
	#app .router-link-active span.My{
		background: url('assets/images/idid_ifqtkztcgjstazrumezdambqgyyde_38x38.png') no-repeat center;
	}
</style>

