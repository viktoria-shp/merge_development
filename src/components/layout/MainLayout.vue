<template>
  <div class="main-layout">
    <slot />
  </div>
</template>
<script>

export default {
  name: "MainLayout",
  components: {
  },
};
</script>
<style lang="scss">
.main-layout {
  @include flex(center);
  max-width: 100%;
}
</style>
