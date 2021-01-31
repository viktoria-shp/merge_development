<template>
  <div class="slider">
    <VueSlickCarousel v-bind="settings">
      <div class="slider__item" v-for="slide in slides" :key="slide.name">
        <img class="slider__img" alt="icon" :src="slide.imgSrc" />
        <div class="slider__description">
          <div class="slider__title">{{ slide.title }}</div>
          <div class="slider__text">{{ slide.text }}</div>
        </div>
      </div>
    </VueSlickCarousel>
  </div>
</template>
<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
export default {
  name: "Slider",
  components: { VueSlickCarousel },
  data() {
    return {
      visible: false,
      title: "MEET OUR TEAM",
      settings: {
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        edgeFriction: 0.35,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
      },
      slides: [
        {
          imgSrc: require("@/assets/slide_img11.png"),
          title: "Tokenplace",
          text: "Multi-exchange Trading Terminal",
        },
        {
          imgSrc: require("@/assets/slide_img22.png"),
          title: "Fund Platform",
          text: "Hedge funds wealth management",
        },
        {
          imgSrc: require("@/assets/slide_img3.png"),
          title: "Merge Data Review",
          text: "It gives data managers the power to efficiently manage quality data to ensure database lock readiness.",
        },
      ],
    };
  },
};
</script>
<style lang="scss">
  .slider {
    max-width: 100%;
    text-align: center;
    z-index: 10;
    
    &__img {   
      margin: 0 auto;   
      margin-bottom: 63px;
      box-shadow: 2px 70px 50px 0px rgba(0,46,123,0.7);
      -webkit-box-shadow: 2px 70px 50px -20px rgba(0,46,123,0.7);
      -moz-box-shadow: 2px 70px 50px -20px rgba(0,46,123,0.7);
      @include media-max-width($screen-fullhd) {
        max-width: 400px;
      };
      @include media-max-width($screen-tablet-large) {
        margin-bottom: 30px;
        max-width: 300px;
      };
      @include media-max-width($screen-iphone-plus) {
        max-width: 250px;
      };
    };
    &__title {
      margin-bottom: 15px;
      font-size: $lg_title;
      font-family: $font;
      color: $white;
      @include media-max-width($screen-tablet-large) {
        margin-bottom: 10px;
        font-size: $md_title;
      };
      @include media-max-width($screen-iphone-plus) {
        font-size: $xs_title;
      };
    };
    &__text {
      margin-bottom: 84px;
      font-size: $lg_subTitle;
      font-family: $font;
      color: $white;
      @include media-max-width($screen-fullhd) {
        margin-bottom: 0;
      };
      @include media-max-width($screen-tablet-large) {
        margin-bottom: 10px;
        font-size: $md_subTitle;
      };
      @include media-max-width($screen-iphone-plus) {
        font-size: $xs_text;
      };
    };
    .slick-dots li button:before {
      font-size: 8px;
      color: $white;
      @include media-max-width($screen-iphone-plus) {
        font-size: 6px;
      };
    }
  }
</style>
