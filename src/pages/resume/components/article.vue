<style>

</style>

<template>
	<transition name="activeElementRight" appear>
		<div>
			<section>
				<article class="article">
					123
				</article>
				<article class="article">
					123
				</article>
				<article class="article">
					123
				</article>
			</section>
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