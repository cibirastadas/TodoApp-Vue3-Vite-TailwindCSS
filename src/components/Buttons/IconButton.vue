<script setup>
defineProps({
  payload: {
    required: false,
  },
  red: {
    type: Boolean,
    required: false,
  },
  green: {
    type: Boolean,
    required: false,
  },
  blue: {
    type: Boolean,
    required: false,
  },
  active: {
    type: Boolean,
    required: false,
  },
});
</script>
<template>
  <button
    @click="$emit('action', payload)"
    class="inline-flex items-center justify-center shadow-lg w-8 h-8 mx-1 text-white transition-colors duration-150 rounded-full"
    :class="{
      'hover:bg-red-500 bg-red-300': red,
      'bg-red-500': active && red,
      'hover:bg-green-500 bg-green-300': green,
      'bg-green-500': active && green,
      'bg-blue-500': blue,
    }"
  >
    <slot></slot>
  </button>
</template>
<style></style>
