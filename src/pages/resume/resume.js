require("../../common/templates/left_aside.js");

import './resume.scss';

import VueRouter from "vue-router";
vue.use(VueRouter);

import article from "./components/article.vue";
import homePage from "./components/homePage.vue";
import resume from "./components/resume.vue";

const router = new VueRouter({
	routes: [
		{ path: '/homePage', component: homePage },
		{ path: '/article', component: article },
		{ path: '/resume', component: resume },
		{ path: '*', redirect: '/homePage' }
	]
})

var user = new Vue({
	el: '#mainApp',
	router
});

(function() {
	var Snow = (function() {
		function Snow(count, size, speed) {
			this.count = count;
			this.size = size;
			this.speed = speed;
			this.canvas = {
				elm: document.getElementById('snow')
			};
			this.setSize();
			this.draw();
		}
		Snow.prototype.setSize = function() {
			this.canvas.width = window.innerWidth;
			this.canvas.height = window.innerHeight;
		};
		Snow.prototype.draw = function() {
			this.p = [];
			this.context = this.canvas.elm.getContext('2d');
			this.canvas.elm.width = this.canvas.width;
			this.canvas.elm.height = this.canvas.height;
			this.play();
		};
		Snow.prototype.tick = function() {
			var i, len, par, ref, results;
			this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
			while(this.p.length < this.count) {
				this.makeParticle();
			}
			ref = this.p;
			results = [];
			for(i = 0, len = ref.length; i < len; i++) {
				par = ref[i];
				par.x += Math.cos(par.sway += 0.1);
				par.y += par.yVelocity;
				if(par.yVelocity > 0 && par.y > this.canvas.height + par.size) {
					par.y = -par.size;
					par.x = Math.random() * this.canvas.width;
				} else if(par.yVelocity < 0 && par.y < -par.size) {
					par.y = this.canvas.height + par.size;
					par.x = Math.random() * this.canvas.width;
				}
				this.context.fillStyle = 'rgba(255,255,255,' + par.opacity + ')';
				this.context.beginPath();
				this.context.arc(par.x, par.y, par.size, 0, Math.PI * 2, true);
				this.context.closePath();
				results.push(this.context.fill());
			}
			return results;
		};
		Snow.prototype.makeParticle = function() {
			return this.p.push({
				x: Math.random() * this.canvas.width,
				y: Math.random() * this.canvas.height,
				yVelocity: this.randomNum(2, 6) * this.speed,
				size: this.randomNum(2, 5) * this.size,
				opacity: this.randomNum(0.5, 1),
				sway: Math.random() * 20
			});
		};
		Snow.prototype.play = function() {
			this.ticker = setInterval((function(_this) {
				return function() {
					return _this.tick();
				};
			})(this), 30);
		};
		Snow.prototype.randomNum = function(min, max) {
			return Math.random() * (max - min) + min;
		};
		return Snow;
	})();
	new Snow(300, 0.5, 0.5);
})();