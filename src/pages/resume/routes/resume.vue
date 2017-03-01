<style lang="sass">
	@import "../../../common/scss/box.scss";
	@import "../../../common/scss/fontReset.scss";
	@import "../../../common/scss/font.scss";
	%boxLay {
		position: absolute;
		left: 20px;
		right: 20px;
		top: 20px;
		bottom: 20px;
	}
	
	.Rcover_resume {
		@include boxCss(rgba(255, 255, 255, 0.8), 15px);
		$val: 20px;
		opacity: 0.8;
		@extend %boxLay;
		.main {
			@extend %boxLay;
			overflow-y: scroll;
		}
		header {
			@include toRem(margin-bottom, 10);
			@extend %fontHeader;
			border-left: 10px solid;
			margin-left: -14px;
			padding-left: 4px;
		}
		article {
			@include toRem(margin-bottom, 20);
			background: #ffffff;
			padding: 20px;
			p {
				@extend %fontContent;
			}
			figure {
				float: left;
				width: 150px;
				margin-right: 10px;
				img {
					width: 100%;
					max-height: 140px;
					transition: all 0.5s;
					&:hover {
						box-shadow: -2px 0 9px 5px #78B9A4;
					}
					cursor:pointer;
					
					@at-root {
						img.active{
						    width: 85% !important;
						    height: auto !important;
						    left: 0 !important;
						    top: 50px !important;
						    right: 0;
						    margin: auto;
						    max-width: 1024px;
					    }
					}
				}
			}
		}
		.sub {
			@include toRem(margin-left, 60);
		}
	}
</style>

<template>
	<transition name="activeElementRight" appear>
		<div>
			<section class="Rcover_resume">
				<div class="main">
					<article>
						<header>教育背景</header>
						<p>
							2012.06-2016.06 重庆三峡学院 信息与计算机科学
						</p>
					</article>

					<article class="clear">
						<header>项目经验</header>

						<figure>
							<img src="../../../common/images/museum1.png" alt="" @click.stop="biggerImg($event)" />
						</figure>

						<p><time>2016.01-2016.11</time> 智慧博物馆管理平台</p>
						<p>1. 根据UI制作符合预期的页面，并根据产品的需求制作相应逻辑，并连通后台 </p>
						<p>2. 引进vue(1.x),webpack(1.x)</p>
						<p>3. 攻克多个问题，例如：制作table，其表头浮动并具有多种功能，表格内部可以伸缩隐藏，自 适应；瀑布流图片懒加载；svg与图标关联，各个形状各异的svg图标中间放置不同设备图标；</p>
					</article>

					<article class="sub clear">
						<figure>
							<img src="../../../common/images/country1.png" alt="" @click.stop="biggerImg($event)" />
						</figure>

						<p><time>2016.07-2016.07</time> 预防性保护国家平台 </p>
						<p>1. 单页面，全屏滚动 </p>
						<p>2. echarts地图与其他自定义组件联动 </p>
						<p>3. 第二屏含有大量数据和echarts渲染，按需加载</p>
					</article>

					<article class="sub clear">
						<figure>
							<img src="../../../common/images/bbs1.png" alt="" @click.stop="biggerImg($event)" />
						</figure>
						<p><time>2016.11-2017.01</time> bbs博客系统</p>
						<p>1. 使用webpack构建脚手架 </p>
						<p>2. 引入vue2.0,elementUi，制定开发规范 </p>
					</article>

					<article>
						<header>技能树 </header>
						<p>1. html,css,js,html5,css3 </p>
						<p>2. jquery,echarts,elementUi </p>
						<p>3. vue（1.x--2.x）,vue-router,vuex，vue-resource </p>
						<p>4. gulp,webpack(1.x--2.x) </p>
						<p>5. es6 </p>
						<p>6. node.js,express,mongodb(正在使用这个做个人网站后台) </p>
						<p>7. 部分js设计模式 </p>
						<p>8. git版本控制</p>
						<p>9. sass预处理</p>
					</article>

					<article>
						<header>自我评价 </header>
						<p>
							开始自学前端是2015年8月份，相比于大多数同学大一大二开始学习，我进入圈子的时间 较之稍晚，也由于学校没有相应课程，以致于我走了不少弯路.
						</p>
						<p>
							但由于对前端，不，应该是全栈抱有极其浓烈的学习欲望， 我于2015年11月2日进入公司 实习，迄今工作16个月并掌握以上技能（现龄22岁） 。也许在北上广等一线城市掌握以上技术 只是基础，但是相对于前沿城市的技术氛围来说，我所处的环境并没有什么优势。因为我是公司 唯一的前端，所以我只能在没有人带领的情况下，不断专研各个前端技术，并不断改善公司代 码，并深入模块化，工程化，独自完成一整个大型项目的前端开发，引入webpack等构建工 具，目前已完成大概25个页面左右（单页，多页都有）。由于公司业务是做监控系统，因此每 一个页面都包含着大量数据交互，逻辑控制。
						</p>
					</article>
				</div>
			</section>
		</div>
	</transition>
</template>

<script>
	export default {
		data() {
			return {
				cloneImg:null
			}
		},
		mounted(){
			document.onclick=()=>{
				if(!this.cloneImg)return;
				document.body.removeChild(this.cloneImg);
				this.cloneImg=null;
			}
		},
		methods: {
			biggerImg(e) {
				if(this.cloneImg)return;
				
				var e = window.event || e;
				var element = e.target || e.srcElement;
				var {x,y}=offset(element);

				var cloneImg = element.cloneNode();
				cloneImg.style.cssText=`transition:all,0.5s;z-index:5;position:absolute;left:${x}px;top:${y}px;width:${element.offsetWidth}px;height:${element.offsetHeight}px;`;
				
				this.cloneImg=cloneImg;
				document.body.appendChild(cloneImg);
				
				setTimeout(()=>{
					cloneImg.className="active";
				},0)
			}
		}
	}

	function offset(dom) {
		var x = 0,
			y = 0;

		while(dom.offsetParent) {
			x += dom.offsetLeft;
			y += dom.offsetTop;
			dom = dom.offsetParent;
		}
		return {
			x,
			y
		}
	}
</script>