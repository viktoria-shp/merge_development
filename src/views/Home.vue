<template>
  <main class="home">
    <ul class="btn">
      <li class="btn__item" v-for="route in routes" :key="route.name">
        <router-link
          active-class="_active"
          exact
          class="btn__item-link"
          :to="route.path"
        >
          <span>{{ route.name }}</span>
        </router-link>
      </li>
    </ul>
  </main>
</template>
<script>
export default {
  name: "Homepage",
  data() {
    return {
      routes: [
        {
          name: "Sing In",
          path: "/sign-in/",
        },
        {
          name: "Sign Up",
          path: "/sign-up/",
        },
      ],
    };
  },
};
</script>
<style lang="scss">
.home {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
.btn {
  @include flex(center, center, column)
  &__item {
    width: 100%;
    height: 54px;
    background: $primary_blue;
    border-radius: 8px;
    border: none;
    box-shadow: 0px 15px 40px -15px rgba(6,91,234,0.83);
    @include flex(center, center);
    margin-bottom: 30px;
    &:last-child {
      margin-bottom: 0px;
    }
    span {
      font-size: $lg_formText;
      color: $white;
      font-family: $font;
      padding: 20px 100px;
      @include media-max-width($screen-tablet-large) {
        font-size: $md_formText;
      };
    }
    &:hover {
      background: $btn_hover;
    }
  }
}
</style>
