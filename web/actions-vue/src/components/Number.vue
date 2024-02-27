<template>
  <div>
    <ul>
      <li v-for="number in numbers" :key="number" @click="handleClick(number)">
        {{ number }} - {{ clickedNumber === number ? 'Clicado' : 'No clicado' }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      clickedNumber: null
    };
  },
  methods: {
    handleClick(number) {
      this.clickedNumber = number;
    }
  }
};
</script>

<style scoped>
/* Estilos específicos del componente si es necesario */
</style>