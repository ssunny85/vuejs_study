<template>
  <header class="header-wrap">
    <span class="logo"><router-link :to="{name: 'index'}">KLOOL</router-link></span>
    <nav class="nav-wrap">
      <ul>
        <li><router-link :to="{name:'ActivityDetail'}">KRW 대한민국 원</router-link></li>
        <li><router-link :to="{name:'ActivityDetail'}">앱 다운로드</router-link></li>
        <li><router-link :to="{name:'ActivityDetail'}">FAQ</router-link></li>
        <li><router-link :to="{name:'ActivityDetail'}">장바구니</router-link></li>
        <li><router-link :to="{name:'ActivityDetail'}">로그인</router-link></li>
        <li><router-link :to="{name:'ActivityDetail'}">회원가입</router-link></li>
      </ul>
    </nav>
  </header>
</template>
