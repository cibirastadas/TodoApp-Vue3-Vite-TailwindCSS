<script setup>
import { todos } from "../api/todos";
import { ref, computed } from "vue";
import PlusIcon from "../assets/plus.svg";
import SingleTask from "./SingleTodo.vue";
import AddTodo from "./AddTodo.vue";
import Modal from "./Modal.vue";
import IconButton from "./Buttons/IconButton.vue";
import InputButton from "./Inputs/InputButton.vue";
import ToggleButton from "./Buttons/ToggleButton.vue";
const task = ref("");
const isCloseModal = ref(false);
const tasks = ref([]);
const loading = ref(false);

const handleButtonList = (button) => {
  todoButtons.value = todoButtons.value.map((btn) => {
    if (btn.id === button.id) {
      return { ...btn, active: !btn.active };
    }
    return { ...btn, active: false };
  });
};
const filterCompleted = () => {
  return tasks.value.filter((task) => task.completed);
};
const filterUnCompleted = () => {
  return tasks.value.filter((task) => !task.completed);
};
const filterAllTasks = () => {
  return tasks.value;
};
const todoButtons = ref([
  {
    id: 1,
    name: "Completed",
    active: false,
  },
  {
    id: 2,
    name: "UnCompleted",
    active: false,
  },
  {
    id: 3,
    name: "All",
    active: false,
  },
]);
const getAllTodo = async () => {
  loading.value = true;
  await todos
    .get()
    .then((resp) => (tasks.value = resp.data))
    .catch((err) => console.log(err));
  loading.value = false;
};
getAllTodo();

const handleDelete = (id) => {
  todos
    .delete(id)
    .then((resp) => {
      tasks.value = tasks.value.filter((task) => task.id !== id);
      alert(resp);
    })
    .catch((err) => console.log(err));
};
const handleAddTodo = () => {
  const newTask = {
    userId: 1,
    id: tasks.value.length + 1,
    title: task.value,
    completed: false,
  };
  todos
    .add(task.value)
    .then((resp) => {
      tasks.value.unshift(newTask);
      alert(resp);
    })
    .catch((err) => console.log(err));
  task.value = "";
};
const handleCompleted = (id) => {
  const todo = tasks.value.find((task) => task.id === id);
  if (!todo) {
    return;
  }
  let updateTodo = {
    ...todo,
    completed: !todo.completed,
  };
  const todoIndex = tasks.value.indexOf(todo);
  todos
    .update(id, updateTodo)
    .then((resp) => {
      tasks.value[todoIndex] = updateTodo;
      alert(resp);
    })
    .catch((err) => console.log(err));
};
const handleCloseModal = () => {
  isCloseModal.value = !isCloseModal.value;
};
const selectedFilter = computed(() => {
  const selected = todoButtons.value.find((button) => button.active === true);
  if (!selected) {
    return tasks.value;
  }
  if (selected.name === "Completed") {
    return filterCompleted();
  }
  if (selected.name === "UnCompleted") {
    return filterUnCompleted();
  }
  if (selected.name === "All") {
    return filterAllTasks();
  }
  return tasks.value;
});
</script>
<template>
  <div class="flex justify-center">
    <p v-if="loading" class="text-green-500 text-3xl">loading...</p>
    <div v-else style="width: 800px">
      <div>
        <h1
          class="text-white text-center text-3xl py-8 uppercase tracking-widest font-medium"
        >
          Todo list
        </h1>
        <div class="m-2 flex sm:justify-between mb-6">
          <div class="w-1/2 hidden sm:block">
            <InputButton
              @action="handleAddTodo"
              v-model:task="task"
              class="h-full"
            >
              <PlusIcon class="w-10 h-7" />
            </InputButton>
          </div>
          <div class="bg-white flex w-full sm:w-auto">
            <ToggleButton
              v-for="(button, index) in todoButtons"
              :key="button.id"
              :payload="button"
              @action="handleButtonList"
              :active="button.active"
              indigo
              :class="{ 'border-r-2 ': index < todoButtons.length - 1 }"
              class="h-full w-full"
              >{{ button.name }}</ToggleButton
            >
          </div>
        </div>
      </div>
      <div class="mb-24">
        <SingleTask
          v-for="task in selectedFilter"
          :key="task"
          :task="task"
          @delete="handleDelete"
          @completed="handleCompleted"
        />
      </div>
    </div>
    <IconButton
      blue
      class="w-16 h-16 block sm:hidden fixed bottom-5"
      @action="handleCloseModal"
    >
      <PlusIcon class="w-14 h-14" />
    </IconButton>
    <Modal @close="handleCloseModal" v-if="isCloseModal" class="w-full">
      <template v-slot:header> Add New Todo </template>
      <template v-slot:content>
        <AddTodo v-model:task="task" @add="handleAddTodo" />
      </template>
    </Modal>
  </div>
</template>
<style scoped></style>
