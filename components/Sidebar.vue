<template>
    <div class="sidebar p-4">
		<NuxtLink 
			class="bg-blue-100 p-2 rounded-sm"
			v-for="tab in tabs" :key="tab.name" :to="tab.url"
		>
			{{ tab.name }}
		</NuxtLink>
	</div>
</template>

<script>
	export default {
		data: () => ({
			tabs: [
				{ name: 'Dashboard', url: '/dashboard' },
				{ name: 'Relief sound', url: '/library' },
				{ name: 'TRT training', url: '/training' },
				{ name: 'Cure research', url: '/research' },
				{ name: 'Account', url: '/account' },
				{ name: 'Support', url: '/support' }
			]
		})
	}
</script>

<style scoped>
	.sidebar {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}
</style>