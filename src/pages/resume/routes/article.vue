<style>

</style>

<template>
	<transition name="activeElementRight" appear>
		<div>
			<!--<section>
				<article class="article">
					123
				</article>
				<article class="article">
					123
				</article>
				<article class="article">
					123
				</article>
			</section>-->
			<img class="delete" src="../../../common/images/Wait.jpg" alt="" />
		</div>
	</transition>
</template>

<script>
	export default {
		data() {
			return {
				mess: 'article'
			}
		}
	}
</script>