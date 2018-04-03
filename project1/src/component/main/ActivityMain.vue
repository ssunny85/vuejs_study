<template>
  <section class="main-body">
    <ActivityVisual></ActivityVisual>
    <ActivityPromise></ActivityPromise>
    <ActivityPopular></ActivityPopular>
    <ActivityRecommendation></ActivityRecommendation>
  </section>
</template>
<script>
import ActivityVisual from './ActivityVisual.vue';
import ActivityPromise from './ActivityPromise.vue';
import ActivityPopular from './ActivityPopular.vue';
import ActivityRecommendation from './ActivityRecommendation.vue';

export default {
  components: {
    ActivityVisual: ActivityVisual,
    ActivityPromise: ActivityPromise,
    ActivityPopular: ActivityPopular,
    ActivityRecommendation: ActivityRecommendation
  }
}

</script>
<style lang="scss">
@import '../../assets/style/main';
</style>
