<template>
  <div class="example">
    Total Counter Test: {{ msg }}
    <button @click="increase">Increase</button>
  </div>
</template>

<script>
export default {
  name: 'counter',
  data () {
    return {
      msg: 2
    }
  },
  methods: {
      increase() {
          this.msg++
      }
  }
}
</script>

<style lang="scss" scoped>
.example {
  color: green;
}
</style>