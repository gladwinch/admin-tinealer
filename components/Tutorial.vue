<!-- Please remove this file from your project -->
<template>
	<div class="relative flex items-top justify-center min-h-screen bg-gray-100 sm:items-center sm:pt-0 dark">
		<div class="p-4 bg-primary-light dark:bg-primary-dark"></div>

		<button class="btn border border-white capitalize" @click="changeMode">
			{{ btnLabel }}
		</button>
	</div>
</template>

<script>
  export default {
    name: 'NuxtTutorial',
    computed: {
        btnLabel() {
            return this.$colorMode.preference === 'light' ? 'dark' : 'light'
        }
    },
    methods: {
        changeMode() {
            this.$colorMode.preference = 
                this.$colorMode.preference === 'light' ? 'dark' : 'light'
        }
    }
  }
</script>
