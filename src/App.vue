<template>
  <div id="app">
    <app-header />
    <app-content>
      <router-view></router-view>
    </app-content>
  </div>
</template>

<script>
import AppContent from './components/AppContent.vue'
import AppHeader from './components/AppHeader.vue'

export default {
  name: 'App',
  components: {
    AppContent,
    AppHeader
  }
}
</script>

<style lang="postcss">
  body,
  html {
    @apply bg-gray-900 h-screen;
  }
  #app {
    @apply flex flex-col justify-center leading-normal px-6 text-white tracking-normal;
  }
  @screen xl {
    #app {
      @apply px-0;
    }
  }
</style>
