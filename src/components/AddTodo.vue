<script setup>
import Input from "./Inputs/Input.vue";
import ToggleButton from "./Buttons/ToggleButton.vue";
defineProps({
  task: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <form @submit.prevent="$emit('action')" class="w-full">
    <Input
      placeholder="My task..."
      class="mb-7"
      :task="task"
      @update:task="$emit('update:task', $event)"
    />
    <ToggleButton
      class="w-full tracking-wide text-lg"
      yeallow
      @action="$emit('add')"
      >Add</ToggleButton
    >
  </form>
</template>

<style scoped></style>
