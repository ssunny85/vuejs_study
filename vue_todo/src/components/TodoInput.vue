<template>
  <div class="todo-input">
    <input type="text" placeholder="Type what you have to do" />
    <button type="button" class="fa fa-plus"><span>추가</span></button>
  </div>
</template>
<script>
export default {
}
</script>
<style lang="scss" scoped>
.todo-input {
  position: relative;
  width: 100%;
  height: 45px;
  margin-bottom: 20px;
  padding-right: 60px;
  background-color: #fff;
  box-sizing: border-box;

  input[type="text"] {
    width: 100%;
    height: 100%;
    padding: 10px;
    line-height: 45px;
    box-sizing: border-box;
    border: 0 none;
    background: 0 none;
    border-radius: 6px 0 0 6px;
    font-size: 15px;
  }

  button {
    overflow: hidden;
    position: absolute;
    top: 0;
    right: 0;
    width: 60px;
    height: 100%;
    background-color: #146eff;
    border: 0 none;
    color: #fff;
    font-size: 18px;
    text-align: center;
    border-radius: 0 6px 6px 0;
    cursor: pointer;

    > span {
      position: absolute;
      width: 1px;
      height: 1px;
      clip: rect(1px, 1px, 1px, 1px);
    }
  }
}
</style>
