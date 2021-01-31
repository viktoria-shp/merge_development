<template>
  <main class="home">
    2 links for sing in and sing up
    <ul>
      <li class="side-bar__item" v-for="route in routes" :key="route.name">
        <router-link
          active-class="_active"
          exact
          class="side-bar__item-link"
          :to="route.path"
          >{{ route.name }}</router-link
        >
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
</style>
