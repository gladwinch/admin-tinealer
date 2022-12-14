<template>
	<div class="wrapper">
		<Appbar />
		<Nuxt />
	</div>
</template>

<script>
	import Appbar from '@/components/Appbar.vue'
	import Sidebar from '@/components/Sidebar.vue'

	export default {
		components: {
			Appbar,
			Sidebar
		}
	}
</script>

<style scoped>
	.wrapper {
		position: relative;
	}
</style>