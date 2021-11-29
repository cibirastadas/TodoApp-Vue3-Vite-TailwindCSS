<script setup>
defineProps({
  task: {
    type: String,
  },
});
</script>
<template>
  <form @submit.prevent="$emit('action')" class="flex">
    <input
      class="leading-none text-black p-3 border-0 outline-none w-full"
      placeholder="Add New Todo..."
      id="task"
      type="text"
      :value="task"
      @input="$emit('update:task', $event.target.value)"
      required
    />
    <button
      class="inline-flex items-center justify-center transition-colors duration-150 bg-yellow-200 focus:shadow-outline hover:bg-yellow-300"
    >
      <slot></slot>
    </button>
  </form>
</template>
<style></style>
