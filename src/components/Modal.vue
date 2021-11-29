<script setup>
import CloseIcon from "../assets/close.svg";
defineProps({
  isCloseModal: {
    type: Boolean,
    required: false,
  },
});
</script>
<template>
  <div
    class="flex items-center justify-center fixed left-0 bottom-0 w-full h-full bg-gray-900 bg-opacity-40"
  >
    <div class="bg-white rounded-lg sm:w-1/2 w-full mx-2">
      <div class="flex flex-col items-start p-4">
        <div class="flex items-center w-full">
          <div class="text-gray-900 font-medium text-lg">
            <slot name="header"></slot>
          </div>
          <CloseIcon
            class="ml-auto fill-current text-gray-700 w-6 h-6 cursor-pointer"
            @click="$emit('close')"
          />
        </div>
        <hr />
        <div class="main-content mt-6"></div>
        <slot name="content"></slot>
      </div>
    </div>
  </div>
</template>
<style></style>
