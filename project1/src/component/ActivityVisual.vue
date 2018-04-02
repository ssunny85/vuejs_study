<template>
  <section class="section-visual" style="background-image:url('https://res.klook.com/image/upload/fl_lossy.progressive,q_85,f_auto/c_fill,,/v1520840743/banner/r1jgt7z7v5tiowwdwow3.webp')">
    <div class="visual-content">
      <div class="visual-heading">
        <h1 class="title">YOURS TO EXPLORE</h1>
        <p class="sub-copy">더 넓은 세상을 경험하고, 잊지 못할 순간을 예약하세요.</p>
      </div>
      <span class="visual-search">
        <input type="text" placeholder="액티비티 또는 지역명으로 검색하세요" />
        <button type="button" class="fa fa-search"><span>검색</span></button>
      </span>
    </div>
  </section>
</template>
<script>
export default {

}
</script>
<style lang="scss">
.section-visual {
  height: 600px;
  padding-top: 64px;
  text-align: center;
  background-repeat: no-repeat;
  background-position: top center;
  background-size: cover;
  box-sizing: border-box;
}
.visual-content {
  width: 800px;
  margin: 0 auto;
  position: relative;
  top: 140px;

  .visual-heading {
    margin-bottom: 30px;
    color: #fff;
    font-size: 20px;
    .title {
      margin-bottom: 10px;
      font-size: 50px;
      letter-spacing: 3px;
    }
  }

  .visual-search {
    position: relative;
    display: inline-block;
    width: 100%;
    height: 50px;
    &:after {
      content: '';
      display: block;
      height: 0;
      clear: both;
    }
    > input {
      float: left;
      width: calc(100% - 120px);
      border: 0 none;
      border-radius: 3px 0 0 3px;
      font-size: 16px;
    }
    > button {
      width: 120px;
      height: 100%;
      border-radius: 0 3px 3px 0;
      background-color: #ff5722;
      color: #fff;
      font-size: 20px;
      > span {
        display: inline-block;
        overflow: hidden;
        width: 1px;
        height: 1px;
        clip: rect(1px, 1px, 1px, 1px);
      }
    }
  }
}
</style>
