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
				{ name: 'Dasboard', url: '/' },
				{ name: 'Library', url: '/library' },
				{ name: 'Users', url: '/user' },
				{ name: 'Reports', url: '/report' }
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