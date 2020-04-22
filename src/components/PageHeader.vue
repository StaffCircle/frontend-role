<template>
  <header>
    <h1>
      Frontend Engineer
      <span>(<span class="vue">Vue.js</span>) - Remote, UK</span>
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
