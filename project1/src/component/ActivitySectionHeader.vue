<template>
  <div class="section-title">
    <h2 class="title">{{heading.title}}</h2>
    <p class="sub-copy">{{heading.subcopy}}</p>
  </div>
</template>
<script>
export default {
  props: ['heading']
}
</script>
<style lang="scss">
.section-title {
  margin-top: 50px;
  margin-bottom: 30px;
  text-align: center;
  .title {
    margin-bottom:20px;
    font-size: 30px;
    font-weight: normal;
  }
  .sub-copy {
    color: #666;
    font-size: 15px;
  }
}
</style>
