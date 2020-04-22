<template>
  <header>
    <div>
      <app-logo
        alt="StaffCircle"
        width="240px"
      />
    </div>
  </header>
</template>

<script>
import AppLogo from './AppLogo'

export default {
  components: {
    AppLogo
  }
}
</script>

<style lang="postcss" scoped>
  header {
    @apply flex flex-col items-center justify-between max-w-6xl mx-auto pt-4 w-full;
  }
  .role {
    @apply hidden;
  }
  .role .title {
    @apply text-gray-300 text-xl;
  }
  .role .location {
    @apply text-gray-600;
  }
  @screen md {
    header {
      @apply flex-row;
    }
    .role {
      @apply flex flex-col;
    }
  }
</style>
