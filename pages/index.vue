<template>
	<div class="bg-green-400 p-4">
		Dashboards

		<div class="bg-yellow-300 p-4">
			<span v-if="message">{{ message }} <span class="icon-Subtitles"></span></span>
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
			const { data } = await this.$axios('/api/admin')
			this.message = data.name
		}
	}
</script>
