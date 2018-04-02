<template>
  <header class="header-wrap">
    <a href="/" class="logo">SSUNNY</a>
    <nav class="nav-wrap">
      <ul>
        <li><a href="#">KRW 대한민국 원</a></li>
        <li><a href="#">앱 다운로드</a></li>
        <li><a href="#">FAQ</a></li>
        <li><a href="#">장바구니</a></li>
        <li><a href="#">로그인</a></li>
        <li><a href="#">회원가입</a></li>
      </ul>
    </nav>
  </header>
</template>
<script>
export default{

}
</script>
<style lang="scss">
.header-wrap {
  position: absolute;
  width: 100%;
  height: 64px;
  padding: 0 20px;
  background-color: transparent;
  box-sizing: border-box;

  .logo {
    display: inline-block;
    padding: 20px;
    color: #fff;
    font-size: 25px;
    font-weight: bold;
  }
}
.nav-wrap {
  position: absolute;
  top: 0;
  right: 0;

  ul > li {
    float: left;
    > a {
      display: block;
      padding: 27px 20px;
      color: #fff;
      font-weight: bold;
    }
  }
}
</style>
