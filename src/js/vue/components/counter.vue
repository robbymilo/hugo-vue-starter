<template>
  <div class="counter">
    Counter: {{ counter }}
    <button @click="counter++">+1</button>
  </div>
</template>

<script>
export default {
  name: "counter",
  data() {
    return {
      counter: 1
    };
  }
};
</script>

<style lang="scss" scoped>
$green: green;

.counter {
  color: $green;
}
</style>
