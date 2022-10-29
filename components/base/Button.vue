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
            <span class="button-content">
                <Icon v-if="icon && orientation==='left'" :icon="icon" :color="style.color" />
                <slot />
                <Icon v-if="icon && orientation==='right'" :icon="icon" :color="style.color" />
            </span>
        </t-text>
    </button>
</template>

<script>
    import Text from '@/components/base/Text.vue'
    import Icon from '@/components/base/Icon.vue'

    export default {
        components: {
            't-text': Text,
            Icon
        },
        props: {
            variation: {
                type: String,
                default: 'filled'
            },
            custom: {
                type: Object,
                default: null
            },
            orientation: {
                type: String,
                default: 'left'
            },
            icon: {
                type: String,
                default: null
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
                    case 'icon-only':
                        style.background = 'purple'
                        style.color = 'white'
                        break
                }

                // if(this.custom.background) style.background = this.custom.background
                // if(this.custom.color) style.color = this.custom.color
                // if(this.custom.darkbackground) style.darkbackground = this.custom.darkbackground
                // if(this.custom.darkcolor) style.darkcolor = this.custom.darkcolor

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

    .icon-only-button {
        padding: 12px 12px !important;
    }

    .button-content {
        display: flex;
        align-items: center;
        gap: 5px;
    }
</style>