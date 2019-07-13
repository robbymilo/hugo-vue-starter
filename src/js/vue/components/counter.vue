<template>
  <div class="counter">
    Counter: {{ counter }}
    <button @click="counter++">
      <img
        svg-inline
        class="icon"
        src="../../../assets/images/plus.svg"
        alt="example"
        width="20"
      />
    </button>
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
button {
  border: none;
  cursor: pointer;
}
path {
  transition: all 1s;
  &:hover {
    fill: rgba(56, 69, 79, 0.8);
  }
}
</style>
