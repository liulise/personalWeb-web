<style>

</style>

<template>
	<transition name="activeElementRight" appear>
		<div>{{mess}}</div>
	</transition>
</template>

<script>
	export default {
		data() {
			return {
				mess: 'homePage'
			}
		}
	}
</script>