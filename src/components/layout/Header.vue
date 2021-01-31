<template>
  <div class="container">
    <section class="slider">
      <the-slider></the-slider>
    </section>
    <aside class="form"></aside>
  </div>
</template>
<script>
import TheSlider from '../sections/TheSlider.vue';
export default {
  components: {
    TheSlider
  },
  name: "Header",
  data() {
    return {
    };
  },
};
</script>
<style lang="scss">
  .slider {
    background: $primary_blue;
    max-width: 798px;
    padding: 186px 142px 122px;
  }
  .form {
    background: $black_primary;
    width: 420px;
    height: 500px;
  }
</style>
