<template>
  <div class="nav__container">
    <ul class="nav" id="nav" ref="nav">
        <li
            class="nav__item"
            v-for="route in routes"
            :key="route.name"
        >
            <a
              href="#"
              class="nav__item-link"
              active-class="_active"
              v-scroll-to="{
                el: route.path,
                duration: 500,
                easing: 'linear',
                force: true,
                x: false,
                y: true,
              }"
              >{{ route.name }}</a
            >
          </li>
        </ul>
  </div>
</template>
<script>
export default {
  name: "TheNav",
  data() {
    return {
        routes: [
            {
                name: "Contact",
                path: "#",
            },
            {
                name: "Privacy",
                path: "#",
            },
            {
                name: "Terms",
                path: "#",
            },
        ],
    };
  },
};
</script>
<style lang="scss">
    .nav {
        @include flex;
        font-size: $lg_text;
        color: $grey_text;
        margin-bottom: 15px;
        font-family: $font;
        font-weight: 600;
        @include media-max-width($screen-tablet-large) {
          font-size: $md_text;
        };
        &__item {
            margin-right: 25px;
        }
        &__item:last-child {
            margin-right: 0;
        }
        a:hover {
            color: $black_primary;
        }
    }
</style>
