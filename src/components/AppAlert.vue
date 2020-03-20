<template>
  <div
    class="alert"
    :class="{ 'light': light }"
    role="alert"
  >
    <h4>{{ title }}</h4>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    light: {
      default: false,
      type: Boolean
    },
    title: {
      default: 'Title is missing',
      type: String
    }
  }
}
</script>

<style lang="postcss" scoped>
  .alert {
    @apply border-l-4 border-burnt-500 my-8 px-4 text-gray-300 text-sm;
  }
  .alert.light {
    @apply bg-red-100 border-l-4 border-red-500 p-4 text-red-700 text-sm;
  }
  .alert h4 {
    @apply font-bold mb-2 text-base;
  }
</style>
