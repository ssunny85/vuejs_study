<template>
  <section class="todo-list">
    <transition-group name="list" tag="ul">
      <li v-for="(todoItem, index) in propsdata" v-bind:key="todoItem">
        <span><i class="fa fa-check"></i>{{todoItem}}</span>
        <button type="button" class="fa fa-remove" v-on:click="removeTodo(todoItem, index)"><span>삭제</span></button>
      </li>
    </transition-group>
  </section>
</template>
<script>
export default {
  props: ['propsdata'],
  // data() {
  //   return {
  //     todoItems: []
  //   }
  // },
  methods: {
    removeTodo(todoItem, index) {
      this.$emit('removeTodo', todoItem, index);
      //console.log(todoItem + ', ' + index); //확인용
    }
  }
}
</script>
<style lang="scss" scoped>
.todo-list {
  ul {
    > li {
      position: relative;
      height: 40px;
      margin-bottom: 7px;
      padding: 0 50px 0 10px;
      line-height: 40px;
      border-radius: 6px;
      background-color: #fff;

      > span {
        display: inline-block;
        width: 100%;
        height: 100%;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;

        > i {
          margin-right: 10px;
          font-size: 15px;
          color: #146eff;
        }
      }

      button {
        overflow: hidden;
        position: absolute;
        top: 0;
        right: 0;
        width: 50px;
        height: 100%;
        border: 0 none;
        background: 0 none;
        color: #f00;
        cursor: pointer;

        > span {
          position: absolute;
          width: 1px;
          height: 1px;
          clip: rect(1px,1px,1px,1px);
        }
      }
    }
  }
}
.list-item {
  display: inline-block;
  margin-right: 10px;
}
.list-move {
  transition: transform 1s;
}
.list-enter-active, .list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave {
  opacity: 0;
  transform: translateY(30px);
}
</style>
