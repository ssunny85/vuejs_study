<template>
  <section class="section-recommendation">
    <RecommendHeader v-bind:heading="headData"></RecommendHeader>
    <RecommendList v-bind:list="listData"></RecommendList>
  </section>
</template>
<script>
import RecommendHeader from './ActivitySectionHeader.vue';
import RecommendList from './ActivitySectionList.vue';

export default {
  data() {
    return {
      headData: {
        title: '추천 여행지',
        subcopy: '여행 큐레이터가 뽑은 액티비티'
      },
      listData: ['오사카', '홍콩', '마카오', '도쿄', '상하이', '싱가포르', '타이페이', '방콕']
    }
  },
  components: {
    RecommendHeader: RecommendHeader,
    RecommendList: RecommendList
  }
}
</script>
