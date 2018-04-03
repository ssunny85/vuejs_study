<template>
  <div class="section-title">
    <h2 class="title">{{heading.title}}</h2>
    <p class="sub-copy">{{heading.subcopy}}</p>
  </div>
</template>
<script>
export default {
  props: ['heading']
}
</script>
