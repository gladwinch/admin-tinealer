<template>
  <span
    v-if="icon === 'google'"
    :class="`icon-${iconName} ${color}`"
    :style="`font-size: ${iconSize}`"
  >
    <span class="path1"></span><span class="path2"></span
    ><span class="path3"></span><span class="path4"></span>
  </span>
  <span
    v-else-if="icon === 'linkedin'"
    :class="`icon-${iconName} ${color}`"
    :style="`font-size: ${iconSize}`"
    ><span class="path1"></span><span class="path2"></span
  ></span>
  <span
    v-else-if="icon === 'slack'"
    :class="`icon-${iconName} ${color}`"
    :style="`font-size: ${iconSize}`"
    ><span class="path1"></span><span class="path2"></span
    ><span class="path3"></span><span class="path4"></span
  ></span>
  <span
    v-else
    :class="`icon-${iconName} ${color}`"
    :style="`font-size: ${iconSize}`"
  ></span>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      required: true
    },
    color: {
      type: String,
      default: 'black'
    },
    size: {
      type: String,
      default: 'medium'
    }
  },
  computed: {
    iconName() {
      return this.icon.charAt(0).toUpperCase() + this.icon.slice(1)
    },
    iconSize() {
      switch (this.size) {
        case 'medium':
          return '16px'
        case 'large':
          return '2.8rem'
        case 'mid-large':
          return '24px'
        case 'small':
          return '1rem'
        default:
          return this.size + 'px'
      }
    }
  }
}
</script>