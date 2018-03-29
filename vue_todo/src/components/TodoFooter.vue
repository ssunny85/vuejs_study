<template>
  <div class="todo-footer">
    <button type="button" v-on:click="removeAll">Clear All</button>
  </div>
</template>
<script>
export default {
  methods: {
    removeAll() {
      this.$emit('removeAll');
      //console.log('clear all click');
    }
  }
}
</script>
<style lang="scss" scoped>
.todo-footer {
  margin-top: 20px;
  text-align: center;

  button {
    display: inline-block;
    min-width: 120px;
    height: 50px;
    line-height: 50px;
    border: 1px solid #ff7f8c;
    background: #fff;
    border-radius: 4px;
    box-sizing: border-box;
    text-align: center;
    color: #f00;
    cursor: pointer;
  }
}
</style>
