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
