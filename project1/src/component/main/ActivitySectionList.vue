<template>
  <div class="section-list">
    <ul>
      <li v-for="city in list"><router-link :to="{name: 'ActivityDetail'}"><span>{{city}}</span></router-link></li>
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
