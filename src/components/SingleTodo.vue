<script setup>
import DeleteIcon from "../assets/delete.svg";
import CheckIcon from "../assets/check.svg";
import IconButton from "./Buttons/IconButton.vue";
defineProps({
  task: {
    type: Object,
    required: true,
  },
});
</script>
<template>
  <div class="p-2">
    <div
      class="flex items-center leading-none rounded-full p-2 text-base text-gray-900 bg-white shadow w-full"
      :class="{ 'line-through text-gray-500 bg-gray-200': task.completed }"
    >
      <span class="flex px-2">{{ task.title }}</span>
      <div class="ml-auto flex">
        <IconButton
          @action="$emit('completed', $event)"
          :payload="task.id"
          green
          :active="task.completed"
        >
          <CheckIcon class="fill-current h-4 mw-4 stroke-2" />
        </IconButton>
        <IconButton @action="$emit('delete', $event)" :payload="task.id" red>
          <DeleteIcon class="fill-current h-6 mw-6 stroke-2" />
        </IconButton>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
