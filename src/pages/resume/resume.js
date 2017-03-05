import "../../common/templates/left_aside.js";
import Snow from "../../common/modules/Snow.js";
import VueRouter from "vue-router";

vue.use(VueRouter);

import './resume.scss';

import article from "./routes/article.vue";
import homePage from "./routes/homePage.vue";
import resume from "./routes/resume.vue";

const router = new VueRouter({
	routes: [
		{ path: '/homePage', component: homePage },
		{ path: '/article', component: article },
		{ path: '/resume', component: resume },
		{ path: '*', redirect: '/resume' }
	]
})

var user = new Vue({
	el: '#mainApp',
	router,
	created(){
//		this.$http.get('http://localhost:3000/content').then((data)=>{
//			console.log(data.data);
//		});
	},
	mounted(){
		new Snow({container:document.getElementById('snow'),count:300, size:0.5, speed:1});
	}
});
