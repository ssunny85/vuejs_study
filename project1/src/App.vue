<template>
<div id="app">
  <ActivityHeader></ActivityHeader>
  <router-view></router-view>
  <ActivityFooter></ActivityFooter>
</div>
</template>
<script>
import ActivityHeader from './component/ActivityHeader.vue';
import ActivityFooter from './component/ActivityFooter.vue';

export default {
  components: {
    ActivityHeader: ActivityHeader,
    ActivityFooter: ActivityFooter
  }
}
</script>
