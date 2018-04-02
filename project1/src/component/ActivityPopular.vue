<template>
  <section class="section-popular">
    <PopularHeader v-bind:heading="headData"></PopularHeader>
    <PopularList v-bind:list="listData"></PopularList>
  </section>
</template>
<script>
import PopularHeader from './ActivitySectionHeader.vue';
import PopularList from './ActivitySectionList.vue';

export default {
  data() {
    return {
      headData: {
        title: '인기 여행지',
        subcopy: '언제라도 떠나고 싶은, 아시아의 매력적인 도시'
      },
      listData: ['오사카', '홍콩', '마카오', '도쿄', '상하이', '싱가포르', '타이페이', '방콕']
    }
  },
  components: {
    PopularHeader: PopularHeader,
    PopularList: PopularList
  }
}
</script>
<style lang="scss">
.section-popular {
  width: 100%;
}
</style>
