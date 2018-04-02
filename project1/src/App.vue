<template>
<div id="app">
  <ActivityHeader></ActivityHeader>
  <ActivityVisual></ActivityVisual>
  <ActivityPromise></ActivityPromise>
  <ActivityPopular></ActivityPopular>
  <ActivityRecommendation></ActivityRecommendation>
</div>
</template>
<script>
import ActivityHeader from './component/ActivityHeader.vue';
import ActivityVisual from './component/ActivityVisual.vue';
import ActivityPromise from './component/ActivityPromise.vue';
import ActivityPopular from './component/ActivityPopular.vue';
import ActivityRecommendation from './component/ActivityRecommendation.vue';

export default {
  components: {
    ActivityHeader: ActivityHeader,
    ActivityVisual: ActivityVisual,
    ActivityPromise: ActivityPromise,
    ActivityPopular: ActivityPopular,
    ActivityRecommendation: ActivityRecommendation
  }
}
</script>
<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
html,body {
  height: 100%;
  font-family: 'Helvetica Neue', 'Helvetica', 'Arial', 'Apple SD Gothic Neo', '나눔 고딕', 'Nanum Gothic', '맑은 고딕', 'Malgun Gothic', 'dotum', sans-serif;
  font-size: 14px;
  color: #333;
  line-height: 1;
  background-color: #f5f5f5;
}
ul, ol, li {
  list-style: none;
}
a {
  color: #333;
  text-decoration: none;
}
input[type="text"] {
  display: inline-block;
  width: 100%;
  height: 100%;
  padding: 10px;
  box-sizing: border-box;
  border: #e0e0e0;
  background: #fff;
}
button {
  display: inline-block;
  margin: 0;
  padding: 0;
  text-align: center;
  border: 0 none;
  background: 0 none;
  cursor: pointer;
}
</style>
