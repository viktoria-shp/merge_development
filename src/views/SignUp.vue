<template>
  <main class="sign-up">
    <the-slider></the-slider>
    <the-sign-up-form></the-sign-up-form>
  </main>
</template>
<script>
import TheSlider from "../components/sections/TheSlider.vue";
import TheSignUpForm from "../components/sections/TheSignUp.vue";
export default {
  components: {
    TheSlider,
    TheSignUpForm,
  },
  name: "SingUp",
};
</script>
<style lang="scss">
/*.sign-up {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}*/
</style>
