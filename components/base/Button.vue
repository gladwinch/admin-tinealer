<template>
    <button 
        :class="[
            variation+'-button', 
            'bg-'+style.background, 
            'dark:bg-'+style.darkbackground
        ]"
    >
        <t-text 
            variation="text-short" 
            :color="style.color" 
            :darkColor="style.darkcolor"
        >
            <slot />
        </t-text>
    </button>
</template>

<script>
    import Text from '@/components/base/Text.vue'
    export default {
        components: {
            't-text': Text
        },
        props: {
            variation: {
                type: String,
                default: 'filled'
            },
            custom: {
                type: Object,
                default: {}
            },
            orientation: {
                type: String,
                default: 'left'
            }
        },
        computed: {
            style() {
                let style = { darkbackground: 'purple', darkcolor: 'red' }

                switch(this.variation) {
                    case 'filled':
                        style.background = 'purple'
                        style.color = 'white'
                        break
                    case 'outlined':
                        style.background = 'white'
                        style.color = 'black'
                        break
                    case 'text':
                        style.background = 'transparent'
                        style.color = 'purple'
                        break
                    case 'filled-transculent':
                        style.background = 'purple-transculent'
                        style.color = 'purple'
                        break
                    case 'only-icon':
                        style.background = 'transparent'
                        style.color = 'purple'
                        break
                }

                if(this.custom.background) style.background = this.custom.background
                if(this.custom.color) style.color = this.custom.color
                if(this.custom.darkbackground) style.darkbackground = this.custom.darkbackground
                if(this.custom.darkcolor) style.darkcolor = this.custom.darkcolor

                return style
            }
        }
    }
</script>

<style scoped>
    button {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 12px 16px;
        gap: 8px;
        width: initial;
        border-radius: 50px;
    }

    .outlined-button {
        border: solid 1px black;
    }
</style>