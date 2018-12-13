<template>
	<div id="autumn">
		<div class="header">
			<span class="line1"></span>
			<h3>🌟初秋上 新🌟</h3>
			<span class="line2"></span>
		</div>
		<ul class="ul8">
			<li v-for="v in list">
				<router-link to='/'>
					<img :src="v.img" />
				</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
	export default{
        data(){
			return {
				list:{}
			}
		},
		mounted(){
			this.$http.get('./data/autumn.json')
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
		}
    }
</script>

<style>
	#autumn{
		z-index: 3;
		position: absolute;
		width: 100%;
		height: 100%;
		margin-bottom: 57px;
	}
	#autumn .header{
		width: 100%;
		padding: 30px 0 10px;
	}
	#autumn span{
		display: inline-block;
		width: 20%;
		height: 2px;
		background: url('../../assets/images/idid_ifqtimlgmy4dmmbrmqzdambqgyyde_290x20.png') no-repeat;
    	background-size: cover;
    	vertical-align: middle;
	}
	#autumn h3{
		display: inline-block;
		height: 24px;
		line-height: 24px;
		margin: 0 2%;
		font-size: 16px;
		color: #333;
	}
	#autumn ul{
		width: 100%;
	}
	#autumn ul li{
		width: 100%;
		position: relative;
	}
	#autumn ul li img{
		width: 100%;
	}
</style>