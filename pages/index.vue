<template>
	<div class="bg-green-400 p-4">
		Dashboards

		<div class="bg-yellow-300 p-4">
			<span v-if="message">{{ message }} <span class="icon-Subtitles"></span></span>
			<span v-else>loading...</span>
		</div>
		<PlainText variation="mega-header" color="white" darkColor="red">mega-header</PlainText>
		<PlainText variation="header-1">header-1</PlainText>
		<PlainText variation="header-2">header-2</PlainText>
		<PlainText variation="header-3">header-3</PlainText>
		<PlainText variation="header-4">header-4</PlainText>
		<PlainText variation="large-label">large-label</PlainText>
		<PlainText variation="text-bold">text-bold</PlainText>
		<PlainText variation="label">label</PlainText>
		<PlainText variation="text-semibold">text-semibold</PlainText>
		<PlainText variation="small-label">small-label</PlainText>
		<PlainText variation="text">text</PlainText>
		<Button variation="filled" icon="heart">Filled</Button>
		<Button variation="outlined">Outlined</Button>
		<Button variation="text">Text</Button>
		<Button variation="filled-transculent">Filled Transculent</Button>
		<Button variation="icon-only" icon="heart"></Button>
		<AutoInput v-model="mytext" :icon="true" />
	</div>
</template>

<script>
	import PlainText from '~/components/base/PlainText.vue'
	import Button from '@/components/base/Button.vue'
	import AutoInput from '@/components/base/AutoInput.vue'

	export default {
		name: 'Dashboard',
		layout: 'dashboard',
		components: {
			PlainText,
			Button,
			AutoInput
		},
		data: () => ({
			message: null,
			mytext: "test value"
		}),
		async mounted() {
			const { data } = await this.$axios('/api/admin')
			this.message = data.name
		}
	}
</script>
