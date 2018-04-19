<template>
  <section class="section-product">
    Product
    <router-link to="/product/child">자식링크</router-link>
    <!--<router-link v-bind:to="{name: 'productchild'}">자식링크</router-link>-->
    <div>
      <router-view></router-view>
    </div>
  </section>
</template>
