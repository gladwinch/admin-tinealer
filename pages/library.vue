<template>
	<div class="bg-purple-300 p-4">
		<h1>Relief sound library</h1>

		<audio-card></audio-card>
	</div>
</template>

<script>
	import AudioCard from '@/components/AudioCard.vue'

	export default {
		name: 'Library',
		layout: 'dashboard',
		components: {
			AudioCard
		},
		data: () => ({
			library: []
		})
	}
</script>

<style>

</style>