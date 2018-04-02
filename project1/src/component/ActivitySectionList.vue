<template>
  <div class="section-list">
    <ul>
      <li v-for="city in list"><a href="#"><span>{{city}}</span></a></li>
    </ul>
  </div>
</template>
<script>
export default {
  props: ['list'],
  // data() {
  //   return {
  //     cityes: ['오사카', '홍콩', '마카오', '도쿄', '상하이', '싱가포르', '타이페이', '방콕']
  //   }
  // }
}
</script>
<style lang="scss">
.section-list {
  &:after {
    content: '';
    display: block;
    height: 0;
    clear: both;
  }
  ul {
    > li {
      position: relative;
      float: left;
      width: calc(25% - 20px);
      padding-top: calc(25% - 20px);
      margin: 10px;
      border: 1px solid #ccc;
      box-sizing: border-box;

      > a {
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        text-align: center;
      }

      span {
        display: inline-block;
        width: 100%;
        position: absolute;
        top: 50%;
        left: 0;
        transform: translateY(-50%);
        font-size: 20px;
        font-weight: bold;
      }
    }
  }
}
</style>
