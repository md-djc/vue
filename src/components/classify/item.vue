<template>
	<div id="item">
		<ul class="sale">
			<li class="cur">流行</li>
			<li>销量</li>
			<li>价格</li>
		</ul>
		<ul class="ul3">
			<li v-for="v in list">
				<router-link to="/">
					<img :src="v.img" />
					<p class="title">{{v.title}}</p>
					<div class="goods_info">
						<span class="price">{{v.price}}</span>
						<span class="num">{{v.num}}</span>
					</div>
					<p class="buy">{{v.buy}}</p>
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
			this.$http.get('./data/item.json')
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
	#item{
		position: absolute;
		width: 100%;
		height: 100%;
		background: #fff;
		z-index: 5;
	}
	#item .sale{
		position: fixed;
		top: 0;
		left: 0;
		display: flex;
		width: 100%;
		height: 40px;
		background: #fff;
		line-height: 40px;
		font-size: 15px;
	}
	#item .sale .cur{
		color: #ef4562;
	}
	#item .sale li{
		flex: 1;
		color: #666;
	}
	#item .ul3{
		margin-top: 40px;
		width: 100%;
		overflow: hidden;
		background: #fff;
	}
	#item .ul3 li{
		width: 50%;
		float: left;
	}
	#item a{
		display: inline-block;
		width: 95%;
    	margin: 0 1% 4% 1%;
    	overflow: hidden;
	}
	#item a img{
		width: 100%;
	}
	#item .title{
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
	#item .goods_info{
		text-align: center;
	    height: 12px;
	    overflow: hidden;
	    font-size: 0;
	}
	#item .price{
		color: #FF3366;
	    text-align: center;
	    font-size: 12px;
	    margin-right: 10px;
	    line-height: 1;
	}
	#item .num{
		color: #999999;
	    font-size: 12px;
	    line-height: 1;
	    text-decoration: line-through;
	}
	#item .num em{
		display: inline-block;
	    background: url('../../assets/images/xx.png') no-repeat;
	    background-size: contain;
	    width: 11px;
	    height: 11px;
	    margin-right: 5px;
	    vertical-align: -1px;
	}
	#item .buy{
		color: #999;
		font-size: 12px;
		margin-top: 5px;
	}
</style>