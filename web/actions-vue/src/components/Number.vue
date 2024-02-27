<!-- Number.vue -->

<template>
  <div>
    <button v-for="number in numbers" :key="number" @click="handleClick(number)" :class="{ 'clicked': clickedNumbers.includes(number) }">
      {{ number }}
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const clickedNumbers = ref([]);

const handleClick = (number) => {
  if (!clickedNumbers.value.includes(number)) {
    clickedNumbers.value.push(number);
  } else {
    // Si el número ya está clicado, no hacemos nada
  }

  // Mostrar los números clicados en la consola
  console.log('Números clicados:', clickedNumbers.value);
};
</script>

<style scoped>
button {
  margin: 0.5rem;
  padding: 0.5rem 1rem;
}
</style>
