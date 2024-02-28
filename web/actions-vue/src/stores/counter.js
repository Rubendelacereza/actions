/**
 * Counter Store for managing count state.
 * @returns {Object} - Object containing count, doubleCount, and increment.
 */
export const useCounterStore = defineStore('counter', () => {
  /**
   * Counter value.
   * @type {Ref<number>}
   */
  const count = ref(0);

  /**
   * Computed property representing double the count value.
   * @type {Ref<number>}
   */
  const doubleCount = computed(() => count.value * 2);

  /**
   * Increment the counter value.
   */
  function increment() {
    count.value++;
  }

  return {count, doubleCount, increment};
});
