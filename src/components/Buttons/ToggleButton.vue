<script setup>
defineProps({
  payload: {
    type: Object,
    required: false,
  },
  active: {
    type: Boolean,
    required: false,
  },
  indigo: {
    type: Boolean,
    required: false,
  },
  yeallow: {
    type: Boolean,
    required: false,
  },
});
</script>
<template>
  <button
    @click="$emit('action', payload)"
    class="uppercase text-black font-medium text-base py-3 px-2 sm:px-3 items-center transition-colors duration-75"
    :class="{
      'bg-indigo-200 hover:bg-indigo-300': indigo,
      'bg-indigo-400': indigo && active,
      'bg-yellow-200 hover:bg-yellow-300': yeallow,
    }"
  >
    <slot></slot>
  </button>
</template>
<style></style>
