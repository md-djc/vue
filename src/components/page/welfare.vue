<template>
	<div id="welfare">
		<ul v-for="v in list3" class="ul7">
			<li><img :src="v.img" /></li>
		</ul>
	</div>
</template>

<script>
	export default{
        data(){
			return {
				list3:{}
			}
		},
		mounted() { //给window添加一个滚动滚动监听事件
			this.$http.get('./data/welfare.json')
			/*.then(function (response) {
			    // handle success
			  	this.list = response.data.list;
			    console.log(response.data.list);
			})*/
			.then((response)=>{
				this.list3 = response.data.list3;
			})
			.catch(function (error) {
			    // handle error
		    console.log(error);
			})
			.then(function () {
				//always executed
			 });
		},
    }
</script>

<style>
	#welfare{
		z-index: 3;
		position: absolute;
		width: 100%;
		height: 100%;
		margin-bottom: 57px;
	}
	#welfare .ul7{
		width: 100%;
	}
	#welfare .ul7 li{
		width: 100%;
		margin-top: -5px;
	}
	#welfare .ul7 li img{
		width: 100%;
	}
</style>
