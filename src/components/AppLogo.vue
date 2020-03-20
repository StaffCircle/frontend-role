<template>
  <img
    :alt="alt"
    src="../assets/logo.svg"
    :style="`width:${width}`"
  />
</template>

<script>
export default {
  props: {
    alt: {
      default: null,
      type: String
    },
    width: {
      default: '120px',
      type: String
    }
  }
}
</script>
