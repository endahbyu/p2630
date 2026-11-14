<script setup lang="ts">
// Line icon for a topic. One simple drawing per shape (lib/icons.ts), in the current text colour.
import type { ShapeName } from '~/lib/shapes';
import { ICONS } from '~/lib/icons';
defineProps<{ name: ShapeName }>();
</script>

<template>
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path v-for="d in ICONS[name]" :key="d" :d="d" />
  </svg>
</template>
