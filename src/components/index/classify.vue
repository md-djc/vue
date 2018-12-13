<template>
	<div id="classify">
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
		<div class="data">
			<div class="list">
				<h3>本周流行</h3>
			</div>
			<div class="item">
				<ul class="ul4">
					<li v-for="v in list1">
						<router-link to="/item">
							<img :src="v.pic" />
							<p class="account">{{v.account}}</p>
						</router-link>
					</li>
				</ul>
			</div>
		</div>	
	</div>
</template>

<script>
	export default{
		data(){
			return {
				list1:{}
			}
		},
		mounted(){
			this.$http.get('./data/classify.json')
			/*.then(function (response) {
			    // handle success
			  	this.list = response.data.list;
			    console.log(response.data.list);
			})*/
			.then((response)=>{
				this.list1 = response.data.list1;
			    console.log(response.data.list1);
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
	#classify{
		z-index: 3;
		color: #666;
		margin-bottom: 57px;
	}
	#classify header{
		width: 100%;
		background: #fff;
	}
	#classify header a{
		display: inline-block;
		width: 68%;
	}
	#classify header a:nth-of-type(1){
		float: left;
		width: 19%;
		margin-top: 5px;
	}
	#classify header a:nth-of-type(3){
		float: right;
		width: 13%;
		margin-top: 8px;
	}
	#classify header img{
		vertical-align: middle;
		width: 40%;
	}
	#classify input{
		padding: 0.5rem 15% 0.5rem 15%;
		margin: 2% 0;
        border: none;
        outline: none;
        background: #f4f4f4 url('../../assets/images/find.png') no-repeat 3% center; 
        background-size: 6%;
    	border-radius: 2%;
    	color: #9d9d9d;
	}
	#classify .data{
		width: 100%;
		background: #f2f5f8;
	}
	#classify .data .list{
		padding: 3%;
		overflow: hidden;
		background: #fff;
	}
	#classify .data .list h3{
		color: #333;
		font-size: 16px;
		font-weight: normal;
		float: left;
	}
	#classify .item{
		width: 100%;
	}
	#classify .item .ul4{
		border-top: 1px solid #eee;
		overflow: hidden;
		background: #fff;
	}
	#classify .item .ul4 li{
		border-right: 1px solid #eee;
		border-bottom: 1px solid #eee;
		width: 25%;
		float: left;
		margin-bottom: 0;
		box-sizing: border-box;
	}
	#classify .item .ul4 li a{
		width: 100%;
	}
	#classify .item .ul4 li img{
		width: 70%;
	}
	#classify .item .ul4 li .account{
		font-size: 12px;
		color: #666;
		line-height: 2;
		padding: 3px 0;
	}
	
	#classify .clear{
		display: block;
	    content: '';
	    clear: both;
	}
</style>