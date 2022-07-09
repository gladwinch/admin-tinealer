<template>
	<div class="bg-green-400 p-4">
		Dashboards

		<div class="bg-yellow-300 p-4">
			<span v-if="message">{{ message }}</span>
			<span v-else>loading...</span>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Dashboard',
		layout: 'dashboard',
		data: () => ({
			message: null
		}),
		async mounted() {
			const { data } = await this.$axios('/api/hello')
			this.message = data.message
		}
	}
</script>
