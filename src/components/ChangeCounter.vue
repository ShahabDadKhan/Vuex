<template>
  <button @click="addOne">Add 2</button>
</template>

<script>
export default {
  methods: {
    addOne() {
      //   this.$store.state.counter++;
      this.$store.dispatch('increment');
    }
  }
};
</script>
