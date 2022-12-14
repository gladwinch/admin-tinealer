<template>
	<div class="input-container">
		<!-- label -->
    	<label v-if="label" class="input-info">{{ label }}</label>

		<!-- input -->
		<div 
			class="input-text-wrapper border-1 border-gray focus:border-black" 
			:class="{ 'border-black': inputFocused, 'border-red': error, }"
			tabIndex="0"
		>
			<input
				:value="value"
				@input="$emit('input', $event.target.value)"
				class="outline-none border-none flex-1"
				@blur="inputFocused=false"
        		@focus="inputFocused=true"
			/>

			<Icon
				v-if="icon"
				icon="search"
				:color="iconColor"
				size="16"
			/>
		</div>
	</div>
</template>

<script>
	import Icon from './Icon.vue'

	export default {
		name: 'AutoInput',
		components: {
			Icon
		},
		props: {
			value: {
				type: String,
				default: ''
			},
			label: {
				type: String,
				default: null
			},
			icon: {
				type: Boolean,
				default: false
			},
			type: {
				default: null,
				type: String
			}
		},
		data: () => ({
			inputFocused: false,
			error: false
		}),
		computed: {
			iconColor() {
				return this.inputFocused ? 'black' : 'grey'
			},
			errObj() {
				
			}
		}
	}
</script>

<style scoped>
	.input-text-wrapper {
		border-radius: 10rem;
		/* border: solid 2px red; */
		display: flex;
		gap: 8px;
		padding: 2px 10px 3px 10px;
		align-items: center;
	}
</style>