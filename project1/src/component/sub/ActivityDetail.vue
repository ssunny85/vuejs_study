<template>
  <section class="section-detail">
    <DetailBanner></DetailBanner>
    <div class="detail-white">
      <div class="detail-inner">
        <DetailHeading></DetailHeading>
        <DetailInfo></DetailInfo>
        <DetailProdInfo></DetailProdInfo>
        <DetailReview></DetailReview>
      </div>
    </div>
    <div class="detail-grey">
      <div class="detail-inner">
        <DetailOptionList></DetailOptionList>
      </div>
    </div>
    <div class="detail-white">
      <div class="detail-inner">
        <DetailStory></DetailStory>
        <DetailDesc></DetailDesc>
      </div>
    </div>
  </section>
</template>
<script>
import DetailBanner from './DetailBanner.vue';
import DetailHeading from './DetailHeading.vue';
import DetailInfo from './DetailInfo.vue';
import DetailProdInfo from './DetailProdInfo.vue';
import DetailReview from './DetailReview.vue';
import DetailOptionList from './DetailOptionList.vue';
import DetailStory from './DetailStory.vue';
import DetailDesc from './DetailDesc.vue';

export default {
  components: {
    DetailBanner: DetailBanner,
    DetailHeading: DetailHeading,
    DetailInfo: DetailInfo,
    DetailProdInfo: DetailProdInfo,
    DetailReview: DetailReview,
    DetailOptionList: DetailOptionList,
    DetailStory: DetailStory,
    DetailDesc: DetailDesc
  }
}
</script>
<style lang="scss">
@import '../../assets/style/sub';
</style>
