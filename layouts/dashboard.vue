<template>
	<div class="wrapper">
		<Appbar />
		<div class="dashboard">
			<div class="bg-primary-light">
				<Sidebar />
			</div>
			<Nuxt />
		</div>
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

	.dashboard {
		min-height: calc(100vh - 69px);
		display: grid;
		position: relative;
		grid-template-columns: 240px auto;
	}
</style>