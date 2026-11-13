<script setup lang="ts">
// Line icon for a topic. One simple drawing per shape, in the current text colour.
import type { ShapeName } from '~/lib/shapes';
defineProps<{ name: ShapeName }>();
</script>

<template>
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <template v-if="name === 'globe'"><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c3 3.2 3 14.8 0 18M12 3c-3 3.2-3 14.8 0 18" /></template>
    <template v-else-if="name === 'flask'"><path d="M10 3h4M10.5 3v5.2a6 6 0 1 0 3 0V3" /><path d="M7.2 15h9.6" /></template>
    <template v-else-if="name === 'bottle'"><path d="M10 2.5h4M10.5 2.5v3.2L8.5 9v10.5a1.5 1.5 0 0 0 1.5 1.5h4a1.5 1.5 0 0 0 1.5-1.5V9l-2-3.3V2.5" /><path d="M8.5 13h7" /></template>
    <template v-else-if="name === 'bulb'"><path d="M9 17.5h6M10 20.5h4" /><path d="M9 17.5c0-2.2-3-3.4-3-7.2a6 6 0 0 1 12 0c0 3.8-3 5-3 7.2" /></template>
    <template v-else-if="name === 'chain'"><path d="M10 14l4-4" /><path d="M8.5 11.2 6 13.7a3.1 3.1 0 0 0 4.3 4.3l2.5-2.5M15.5 12.8 18 10.3A3.1 3.1 0 0 0 13.7 6l-2.5 2.5" /></template>
    <template v-else><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1.2" /></template>
  </svg>
</template>
