<template>
  <main class="sign-in">
    <div class="container">
      <div class="authorization">
        <the-transition name="slide-from-left">
          <template v-if="showLeft">
            <div class="authorization__col authorization__col--bg">
              <the-slider></the-slider>
            </div>
          </template>
        </the-transition>
        <the-transition name="slide-from-right">
          <template v-if="showRight">
            <div class="authorization__col">
              <div class="authorization__title-box">
                <img class="authorization__icon" :src="iconSrc" alt="">
                <h1 class="authorization__title" >{{title}}</h1>
              </div>
              <the-sign-in-form :mode=key :key=key></the-sign-in-form>
              <the-nav></the-nav>
            </div>
          </template>
        </the-transition>
      </div>
    </div>
  </main>
</template>
<script>
import TheSlider from "../components/sections/TheSlider.vue";
import TheSignInForm from "../components/sections/TheSignIn";
import TheNav from "../components/sections/TheNav"
export default {
  data() {
    return {
      key: this.$route.path.replace(/\//g, ''),
      title: "Merge development",
      iconSrc: require("@/assets/merge.svg"),
      showLeft: false,
      showRight: false,
    };
  },
  components: {
    TheSlider,
    TheSignInForm,    
    TheNav,
  },
  name: "SingIn",
  created(){
    let v = this;
    setTimeout(function () {
      v.toggleShowLeft();
      v.toggleShowRight();
    }, 500);
  },
  watch: {
    '$route': 'reInitialize'
  },
  methods: {
    reInitialize: function() {
      this.key = this.$route.path.replace(/\//g, '');
    },
    toggleShowLeft() {
      this.showLeft = !this.showLeft;
    },
    toggleShowRight() {
      this.showRight = !this.showRight;
    }
  }
};
</script>
<style lang="scss">
  .authorization {
    max-width: 100%;
    @include flex(space-between, stretch);
    background: $white;
    @include media-max-width($screen-tablet-small) {
      @include flex(center, center, column)
    }
    &__col {
      @include flex(flex-start, flex-start, column);
      max-width: 100%;
      padding: 186px 0 122px;
      background: $primary_blue;
      border-radius: 15px;
      position: relative;
      @include media-max-width($screen-fullhd) {
        padding: 70px 0;
      };
      @include media-max-width($screen-tablet-large) {
        padding: 40px 0;
      };
      @include media-max-width($screen-iphone-plus) {
        padding: 10px;
      };
      @include media-max-width($screen-tablet-small) {
        margin-bottom: 20px;
      }
      &:last-child {
        min-width: 620px;
        background: $white;
        padding: 40px 100px 30px 80px;
        @include media-max-width($screen-fullhd) {
          min-width: 420px;
          padding: 40px 20px;
        }
        @include media-max-width($screen-desktop) {
          min-width: 320px;
          padding: 40px 20px;
        }
        @include media-max-width($screen-tablet-large) {
          min-width: 250px;
          padding: 20px;
        }
        @include media-max-width($screen-tablet-small) {
          @include flex(center, center, column);
          width: 100%;
          padding: 0;
        }
        @include media-max-width($screen-iphone-plus) {
          padding: 0;
        };
      }
      &--bg {
        overflow: hidden;
        &::before {
          content: "";
          position: absolute;
          height: 750px;
          -webkit-clip-path: polygon(64% 0, 59% 39%, 48% 53%, 0 76%, 0 0);
          clip-path: polygon(64% 0, 58% 32%, 41% 54%, 0 77%, 0 0);
          left: 0;
          right: -14.02%;
          top: -2%;
          background: #0656DC;
          @include media-max-width($screen-fullhd) {
            height: 500px;
            -webkit-clip-path: polygon(64% 0, 59% 39%, 48% 53%, 0 76%, 0 0);
            clip-path: polygon(17% 0, 58% 0, 69% 54%, 0 77%, 0 0);
            left: 0;
            right: 0;
            top: -10%;
          };
          @include media-max-width($screen-tablet-large) {
            height: 350px;
          };
          @include media-max-width($screen-iphone-plus) {
            height: 250px;
          };
        }
        &::after {
          content: "";
          position: absolute;
          height: 750px;
          clip-path: polygon(141% 0, 100% 100%, 10% 100%, 24% 47%);
          left: 33%;
          right: -28%;
          top: 33%;
          background: #0656DC;
          @include media-max-width($screen-desktop) {
            height: 500px;
          };
          @include media-max-width($screen-tablet-large) {
            height: 350px;
          };
          @include media-max-width($screen-iphone-plus) {
            height: 300px;
          };
        }
      }
    }
    &__title {
      text-transform: uppercase;
      font-size: $lg_subTitle;
      color: #22252C;
      margin: 0;
      font-weight: 700;
      @include media-max-width($screen-tablet-large) {
        font-size: $md_subTitle;
      };
      @include media-max-width($screen-iphone-plus) {
        font-size: $xs_subTitle;
      };
    }
    &__icon {
      max-width: 22px;
      margin-right: 18px;
      @include media-max-width($screen-tablet-large) {
        max-width: 14px;
        max-height: 14px;
        margin-right: 5px;
      }
    }
    &__title-box {
      @include flex;
      width: 100%;
      margin-bottom: 119px;
      @include media-max-width($screen-fullhd) {
        margin-bottom: 50px;
      };
      @include media-max-width($screen-tablet-large) {
        margin-bottom: 30px;
      };
      @include media-max-width($screen-iphone-plus) {
        @include flex(center, center)
      };
    }
  }
</style>
