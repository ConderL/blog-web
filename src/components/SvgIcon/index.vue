<template>
  <svg aria-hidden="true" class="svg-icon" :width="size" :height="size">
    <use :xlink:href="symbolId" :fill="color" />
  </svg>
</template>

<script setup lang="ts">

const props = defineProps({
  prefix: {
    type: String,
    default: 'icon'
  },
  iconClass: {
    type: String,
    required: false
  },
  color: {
    type: String,
  },
  size: {
    type: String,
    default: '1rem'
  }
});

const symbolId = computed(() => `#${props.prefix}-${props.iconClass}`);
</script>

<style scoped>
.svg-icon {
  vertical-align: -0.15em;
  overflow: hidden;
  fill: currentColor;
}
</style>