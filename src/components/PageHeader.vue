<template>
  <header>
    <h1>
      Frontend Engineer
      <span>(<span class="vue">Vue.js</span>) - Remote, UK - up to</span>
      £50,000
    </h1>
    <button
      v-if="$route.name !== 'Apply'"
      class="apply"
      @click="$router.push({ name: 'Apply' })"
    >
      Apply
    </button>
  </header>
</template>

<script>
export default {}
</script>
