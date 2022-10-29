<template>
    <component
        :is="type"
        data-testid="text"
        :style="{ textAlign }"
        :class="[variation+'-text', 'text-'+color,'dark:text-'+darkColor]"
    >
        <slot />
    </component>
</template>

<script>
    export default {
        name: 'Text',
        props: {
            type: {
                type: String,
                default: 'span',
                validator: (value) => {
                    return value.match(/(span|em|i|strong|h1)/)
                }
            },
            textAlign: {
                type: String,
                default: 'left'
            },
            color: {
                type: String,
                default: 'black'
            },
            darkColor: {
                type: String,
                default: 'white'
            },
            variation: {
                type: String,
                default: 'text-bold',
                validator: (value) => {
                    return value.match(
                        /(mega-header|header-1|header-2|header-3|header-4|large-label|text-bold|label|text-semibold|text-short|small-label|text)/
                    )
                }
            }
        }
    }
</script>

<style scoped>
    * {
        font-family: 'Montserrat', sans-serif;
        letter-spacing: -0.01em;
        word-spacing: 0;
    }

    .mega-header-text {
        font-style: normal;
        font-weight: 600;
        font-size: 160px;
        line-height: 184px;
    }

    .header-1-text {
        font-style: normal;
        font-weight: 800;
        font-size: 96px;
        line-height: 120px;
    }

    .header-2-text {
        font-style: normal;
        font-weight: 800;
        font-size: 40px;
        line-height: 56px;
    }

    .header-3-text {
        font-style: normal;
        font-weight: 800;
        font-size: 24px;
        line-height: 32px;
    }

    .header-4-text {
        font-style: normal;
        font-weight: 600;
        font-size: 20px;
        line-height: 28px;
        letter-spacing: -0.04em;
    }

    .large-label-text {
        font-weight: 500;
        font-size: 16px;
        line-height: 20px;
        letter-spacing: -0.04em;
    }

    .text-bold-text {
        font-style: normal;
        font-weight: 700;
        font-size: 14px;
        line-height: 24px;
    }

    .label-text {
        font-style: normal;
        font-weight: 500;
        font-size: 13px;
        line-height: 20px;
        letter-spacing: -0.01em;
    }

    .text-semibold-text {
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 20px;
        letter-spacing: -0.01em;
    }

    .text-short-text {
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 16px;
        letter-spacing: -0.01em;
    }

    .label-small-text {
        font-style: normal;
        font-weight: 500;
        font-size: 11px;
        line-height: 16px;
        letter-spacing: -0.01em;
    }

    .text-text {
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 20px;
        letter-spacing: -0.01em;
    }
</style>