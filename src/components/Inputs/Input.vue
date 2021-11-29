<script setup>
defineProps({
  task: {
    type: String,
  },
  placeholder: {
    type: String,
  },
});
</script>
<template>
  <input
    class="leading-none text-black p-3 w-full bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
    :placeholder="placeholder"
    type="text"
    :value="task"
    @input="$emit('update:task', $event.target.value)"
    required
  />
</template>
<style></style>
