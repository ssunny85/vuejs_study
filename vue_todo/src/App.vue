<template>
<div id="app">
  <TodoHeader></TodoHeader>
  <TodoInput v-on:addTodo="addTodo"></TodoInput>
  <TodoList v-bind:propsdata="todoItems" v-on:removeTodo="removeTodo"></TodoList>
  <TodoFooter v-on:removeAll="clearAll"></TodoFooter>
</div>
</template>
<script>
import TodoHeader from './components/TodoHeader.vue';
import TodoInput from './components/TodoInput.vue';
import TodoList from './components/TodoList.vue';
import TodoFooter from './components/TodoFooter.vue';

export default {
  data() {
    return {
      todoItems: []
    }
  },
  created: function() {
    if(localStorage.length !== 0) {
      for(var i = 0; i < localStorage.length; i++) {
        this.todoItems.push(localStorage.key(i));
      }
      console.log(this.todoItems); //확인용
    }
  },
  methods: {
    addTodo(todoItem) {
      localStorage.setItem(todoItem, todoItem); //로컬스토리지에 저장
      this.todoItems.push(todoItem);
    },
    removeTodo(todoItem, index) {
      localStorage.removeItem(todoItem);
      this.todoItems.splice(index,1);
    },
    clearAll() {
      localStorage.clear(); //로컬스토리지 데이터 모두 삭제
      this.todoItems = [];
    }
  },
  components: {
    TodoHeader: TodoHeader,
    TodoInput: TodoInput,
    TodoList: TodoList,
    TodoFooter: TodoFooter
  }
}
</script>
<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
html,body {
  height: 100%;
  font-family: 'Ubuntu', sans-serif;
  font-size: 13px;
  color: #444;
}
body {
  background-color: #f6f6f8;
}
ul, li {
  list-style: none;
}
#app {
  padding: 0 20px;
}
</style>
