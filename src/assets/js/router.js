import vueRouter from 'vue-router'
import page from '../../components/index/page.vue'
import classify from '../../components/index/classify.vue'
import cart from '../../components/index/cart.vue'
import my from '../../components/index/my.vue'
import hot from '../../components/page/hot.vue'
import robbing from '../../components/page/robbing.vue'
import autumn from '../../components/page/autumn.vue'
import welfare from '../../components/page/welfare.vue'
import clone from '../../components/page/clone.vue'
import item from '../../components/classify/item.vue'
import login from '../../components/login/login.vue'

export default new vueRouter({
	routes:[
		{
			path:'/page',component:page,
			/*children:[
				{path:'/hot/:id',component:hot},
				{path:'/robbing/:id',component:robbing},
				{path:'/welfare/:id',component:welfare},
				{path:'/autumn/:id',component:autumn}
			]*/
		},
		{
			path:'/classify',component:classify
		},
		{
			path:'/cart',component:cart
		},
		{
			path:'/my',component:my
		},
		{
			path:'/robbing',component:robbing
		},
		{
			path:'/hot',component:hot
		},
		{
			path:'/autumn',component:autumn
		},
		{
			path:'/welfare',component:welfare
		},
		{
			path:'/clone',component:clone
		},
		{
			path:'/item',component:item
		},
		{
			path:'/login',component:login
		},
		{
			path:'/',component:page
		}
	]
})