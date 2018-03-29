<template>
<div id="app">
  <TodoHeader></TodoHeader>
  <TodoInput></TodoInput>
  <TodoList></TodoList>
  <TodoFooter></TodoFooter>
</div>
</template>
<script>
import TodoHeader from './components/TodoHeader.vue';
import TodoInput from './components/TodoInput.vue';
import TodoList from './components/TodoList.vue';
import TodoFooter from './components/TodoFooter.vue';

export default {
  components: {
    TodoHeader: TodoHeader,
    TodoInput: TodoInput,
    TodoList: TodoList,
    TodoFooter: TodoFooter
  }
}
</script>
<style lang="scss">
*{
  margin: 0;
  padding: 0;
}
html,body {
  height: 100%;
  font-family: 'Ubuntu', sans-serif;
  font-size: 13px;
  color: #444;
}
body{
  background-color: #f6f6f8;
}
#app {
  padding: 0 20px;
}
</style>
