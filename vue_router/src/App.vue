<template>
<div id="app">
  <div class="header-area">
    <header>
      <h1 class="logo"><router-link to="/">COMPANY</router-link></h1>
      <nav>
        <ul>
          <li><router-link to="/about" v-bind:class="$route.path === '/about' ? 'active':''">ABOUT</router-link></li>
          <li><router-link to="/product" v-bind:class="$route.path === '/product' ? 'active':''">PRODUCT</router-link></li>
          <li><router-link to="/recruit" v-bind:class="$route.path === '/recruit' ? 'active':''">RECRUIT</router-link></li>
          <li><router-link to="/contact" v-bind:class="$route.path === '/contact' ? 'active':''">CONTACT</router-link></li>
        </ul>
        <!-- named router -->
        <!--
        <ul>
          <li><router-link v-bind:to="{name:'home'}">ABOUT</router-link></li>
          <li><router-link v-bind:to="{name:'product'}">PRODUCT</router-link></li>
          <li><router-link v-bind:to="{name:'recruit'}">RECRUIT</router-link></li>
          <li><router-link v-bind:to="{name:'contact'}">CONTACT</router-link></li>
        </ul>
         -->
      </nav>
    </header>
  </div>
  <div class="container">
    <router-view></router-view>
  </div>
  <div class="footer-area">
    <footer>
      &copy; 2018 COMPANY
    </footer>
  </div>
</div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="scss">
$color-point: #f3008f;
$color-basic: #222;

* {
  margin: 0;
  padding: 0;
  color: #444;
  font-size: 14px;
  font-family:'Malgun Gothic', '맑은 고딕', Arial, sans-serif;
}
html, body, #app {
  height: 100%;
}
ul, li, ol {
  list-style: none;
}
a {
  text-decoration: none;
}
.header-area {
  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  background-color: rgba(255,255,255,0.5);
  border-bottom: 1px solid #cfcfcf;

  > header {
    position: relative;
    height: 100%;

    .logo {
      float: left;
      height: 100%;
      > a {
        display: block;
        height: 100%;
        padding: 17px 30px;
        box-sizing: border-box;
        font-size: 20px;
        color: $color-point;
        font-family: Verdana;
      }
    }
    nav {
      float: right;
      overflow: hidden;
      ul  > li {
        float: left;
        margin: 0 10px;
        > a {
          display: block;
          min-width: 100px;
          box-sizing: border-box;
          padding: 20px;
          font-size: 16px;
          color: $color-basic;
          &:hover,
          &:focus,
          &.active{
            color: $color-point;
          }
        }
      }
    }
  }
}
.container {
  box-sizing: border-box;
  display: table;
  width: 100%;
  height: auto;
  min-height: 100%;
  padding: 60px 0 100px;

  > section {
    display: table-cell;
    vertical-align: middle;
    text-align: center;
    font-size: 70px;
    color: #fff;
    font-weight: bold;
    background-repeat: no-repeat;
    background-position: top right;
    background-size: cover;
    > * {
      color: #fff;
    }
    &.section-home {
      background-image: url(./assets/home.jpg);
    }
    &.section-about {
      background-image: url(./assets/about.jpg);
    }
    &.section-product {
      background-image: url(./assets/product.jpg);
    }
    &.section-recruit {
      background-image: url(./assets/recruit.png);
    }
    &.section-contact {
      background-image: url(./assets/contact.jpg);
    }
  }
  .section-child {
    height: 100px;
    line-height: 100px;
    vertical-align: middle;
    background: #fff;
  }

}

.footer-area {
  position: fixed;
  bottom: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  height: 100px;
  padding: 0 20px;
  line-height: 100px;
  vertical-align: middle;
  background-color: #252525;
  text-align: center;
  * {
    color: #fff;
  }
}
</style>
