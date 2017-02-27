require("../../common/templates/left_aside.js");

import './resume.scss';

import VueRouter from "vue-router";
vue.use(VueRouter);

import article from "./components/article.vue";
import homePage from "./components/homePage.vue";
import resume from "./components/resume.vue";


const router = new VueRouter({
  routes: [
    {path:'/homePage',component:homePage},
    {path:'/article',component:article},
    {path:'/resume',component:resume},
    {path:'*',redirect:'/homePage'}
  ]
})

var user=new Vue({
	el:'#mainApp',
	router
})
