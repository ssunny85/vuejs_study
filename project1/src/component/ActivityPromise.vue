<template>
  <section class="section-promise">
    <ul>
      <li v-for="item in promise">{{item}}</li>
    </ul>
  </section>
</template>
<script>
export default {
  data() {
    return {
      promise: ['특별하고, 반짝이는 여행', '최저가 보장', '쉽고, 빠른 예약 시스템']
    }
  }
}
</script>
<style lang="scss">
.section-promise {
  height: 120px;
  border: 1px solid #ccc;
  border-top: 0 none;
  background-color: #fff;
  ul {
    overflow: hidden;
    height: 100%;
    > li {
      float: left;

      width: 33.3333%;
      height: 100%;
      padding: 10px;
      box-sizing: border-box;
      &:nth-child(2) {
        border-left: 1px solid #ccc;
        border-right: 1px solid #ccc;
      }
    }
  }
}
</style>
