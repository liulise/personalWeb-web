<style lang="sass">
	.Cpicturebox {
		position: relative;
		img {
			position: absolute;
			transition: all 0.3s;
			cursor: pointer;
		}
		
		img:hover{
			z-index: 5 !important;
			box-shadow: -2px 0 9px 5px #78B9A4;
		}
	}
</style>

<template>
	<figure class="Cpicturebox" @mouseenter="on_picture(true)" @mouseleave="on_picture(false)"  @click="touch_picture">
		<slot></slot>
	</figure>
</template>

<script>
	import {pxToRem} from "../../../common/remReset.js";
	
	export default {
		props: ['width'],
		data() {
			return {
				imgList: []
			}
		},
		mounted() {
			this.imgList = [].slice.call(this.$el.querySelectorAll('img'));

			this.init();
		},
		methods: {
			init() {
				this.$el.style.width=pxToRem(this.width*(1+(this.imgList.length-1)/10))+'rem';
				this.imgList.forEach((img, i) => {
					img.style['width'] = pxToRem(this.width)+'rem';
					img.style['z-index'] = this.imgList.length-i;
					if(!i)return;
					img.style['left'] = pxToRem(this.width/10 * i )+ 'rem';
				},this);
			},
			on_picture(key){
				this.imgList.forEach((img,i)=>{
					if(!i)return;
					img.style['margin-left']=key?60*i+'%':0;
				});
			},
			touch_picture(){
				console.log(123)
			}
		}
	}
</script>