<script setup lang="ts">
// Temporary brand mark: a rounded tile with one slanted side. Replace with the real logo when it arrives.
// The same outline is used for the topic token and the favicon (public/favicon.svg).
</script>

<template>
  <svg class="mark" viewBox="0 0 84 84" aria-hidden="true">
    <path class="tile" d="M16 0H48Q64 0 67.7 15.6L80.3 68.4Q84 84 68 84H16Q0 84 0 68V16Q0 0 16 0Z" />
    <path class="inner" d="M24 22H44Q51 22 52.6 28.8L57.4 49.2Q60 60 50 60H24Q18 60 18 54V28Q18 22 24 22Z" />
  </svg>
</template>

<style scoped>
.mark { display: block; width: 2.25rem; height: 2.25rem; }
.tile { fill: var(--on-dark); }
.inner { fill: var(--accent-deep); }
</style>
