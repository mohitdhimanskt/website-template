<template>
  <div class="site-Featured">
    <h2 class="head-stl">
      <span>Featured Trips</span>
    </h2>
    <p class="text">
      Lose yourself to the magnificence of nature and its captivating beauty
      with our assortment of featured treks. Book trekking tours as this would
      be your chance to explore untouched and unspoiled beauty of varied
      landscapes, arresting trails and exhilarating mountain peaks.
    </p>
  </div>
</template>
<script>
export default {
  name: 'SiteFeaturedTemplate'
}
</script>
<style scoped>
h2 span {
  display: block;
  color: black;
  text-align: center;
  font-size: 30px;
}
.title-line h2 span {
  font-weight: 300;
}
.head-stl {
  font-weight: 700 !important;
  font-size: 34px !important;
}

p {
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  text-align: center;
  color: black;
  margin: 15px 0;
  font-size: 23px;
}
</style>
