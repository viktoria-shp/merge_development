<template>
    <div id="works" class="work">
        <div class="works container">
            <!--<img :src=iconSrc alt="img" class="works__icon">-->
            <p class="works__title title">{{title}}</p>
            <div class="works__slider">
              <VueSlickCarousel :arrows="true" 
                                :dots="true" 
                                :edgeFriction = "0.35"
                                :infinite = "false"
                                :speed = "500"
                                :slidesToShow = "1"
                                :slidesToScroll = "1">
                <div class="works__slide" v-for="slide in slides" :key="slide.imgSrc">
                  <!--<img class="works__img" alt="icon" :src=slide.imgSrc>-->
                </div>
              </VueSlickCarousel>
            </div>
            <a class="works__btn btn" :href=btnLink target="_blank">{{btnName}}</a>
        </div>
    </div>
</template>
<script>
  import VueSlickCarousel from 'vue-slick-carousel'
  import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
export default {
  name: "TheWorks",
  components: { VueSlickCarousel },
  data() {
    return {
        visible: false,
        title: "RECENT WORKS",
        //iconSrc: require("@/assets/Icon-Works.svg"),
        btnLink: "https://google.com",
        btnName: "View Gallery",
        /*slides: [
          {
            imgSrc: require("@/assets/slide1.png"),
          },
          {
            imgSrc: require("@/assets/slide3.png"),
          },
          {
            imgSrc: require("@/assets/slide1.png"),
          },
          {
            imgSrc: require("@/assets/slide3.png"),
          }
        ],*/
    };
  }
};
</script>
<style lang="scss">
  .work {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-image: linear-gradient(rgba(#9F9ACF,.8), rgba(#9F9ACF,.8)), url(../../assets/work_bg.png);
    background-repeat: no-repeat;
    background-size: cover;
    background-size: cover;
    background-position: center;
    width: 100%;
  }
  .works {
    padding: 50px 0 75px;
    display: flex;
    flex-direction: column;
    align-items: center;
    &__slider {
      width: 71%;
      margin-bottom: 48px;
    }
    &__img {
      width: 100%;
      margin-bottom: 40px;
    }
    &__icon {
      margin-bottom: 36px;
    }
    &__btn {
      border: 1px solid white;
      color: white;
    }
    &__title {
      margin-bottom: 67px;
    }
    .slick-next:before {
      content: url(../../assets/arrow_right.svg);
    }
    .slick-next {
      right: -243px;
    }
    .slick-prev:before {
      content: url(../../assets/arrow_left.svg);
    }
    .slick-prev {
      left: -243px;
    }
    .slick-dots li button:before {
      font-family: 'slick';
      border-radius: 50%;
      border: 3px solid $bg;
      position: absolute;
      top: 0;
      left: 0;
      width: 12px;
      height: 12px;
      content: '';
      text-align: center;
      -webkit-font-smoothing: antialiased;
    }
    .slick-dots li.slick-active button:before {
      background: $bg;
    }
  }
  @include media-max-width($screen-tablet) {
    .works {
      &__title {
        margin-bottom: 20px;
      }
      &__icon {
        margin-bottom: 20px;
      }
      &__img {
        margin-bottom: 20px;
      }
      .slick-next {
        right: -40px !important;
      }
      .slick-prev {
        left: -40px !important;
      }
      .btn {
        font-size: 15px;
        padding: 10px 15px;
      }
    }
  }
  @include media-max-width($screen-desktop-large) {
    .works {
      .slick-next {
        right: -100px;
      }
      .slick-prev {
        left: -100px;
      }
    }
  }
</style>
