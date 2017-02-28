<style lang="sass">
	@import "../../../common/scss/box.scss";
	@import "../../../common/scss/fontReset.scss";
	.cover_resume {
		@include boxCss(rgba(255, 255, 255, 0.8), 15px);
		position: absolute;
		$val: 20px;
		@each $name in left,
		right,
		top,
		bottom {
			@if $name==right {
				#{$name}: $val+20px;
			}@else{
				#{$name}:$val;
			}
		}
	}
</style>

<template>
	<transition name="activeElementRight" appear>
		<div>
			<section class="cover_resume">

			</section>
		</div>
	</transition>
</template>

<script>
	export default {
		data() {
			return {
				mess: 'resume'
			}
		}
	}
</script>