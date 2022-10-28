<template>
	<div class="bg-green-400 p-4">
		Dashboards

		<div class="bg-yellow-300 p-4">
			<span v-if="message">{{ message }} <span class="icon-Subtitles"></span></span>
			<span v-else>loading...</span>
		</div>
		<c-text variation="mega-header">mega-header</c-text>
		<c-text variation="header-1">header-1</c-text>
		<c-text variation="header-2">header-2</c-text>
		<c-text variation="header-3">header-3</c-text>
		<c-text variation="header-4">header-4</c-text>
		<c-text variation="large-label">large-label</c-text>
		<c-text variation="text-bold">text-bold</c-text>
		<c-text variation="label">label</c-text>
		<c-text variation="text-semibold">text-semibold</c-text>
		<c-text variation="small-label">small-label</c-text>
		<c-text variation="text">text</c-text>
	</div>
</template>

<script>
	import CText from '~/components/base/Text.vue'

	export default {
		name: 'Dashboard',
		layout: 'dashboard',
		components: {
			CText
		},
		data: () => ({
			message: null
		}),
		async mounted() {
			const { data } = await this.$axios('/api/admin')
			this.message = data.name
		}
	}
</script>
