<template>
    <div id="our-team" class="our-team container">
        <!--<img class="our-team__icon" alt="icon" :src=iconSrc>-->
        <p class="our-team__title title">{{title}}</p>
        <div class="our-team__slider">
           <VueSlickCarousel v-bind="settings">
              <div class="our-team__slide" v-for="slide in slides" :key="slide.name">
                <!--<img class="our-team__img" alt="icon" :src=slide.imgSrc>-->
                <div class="our-team__box">
                  <div class="our-team__name">{{slide.name}}</div>
                  <div class="our-team__position">{{slide.title}}</div>
                  <div class="our-team__links">
                    <a class="our-team__link" v-for="(link, index) in slide.links" :key="index" :href=link.link>
                      <!--<img :src=link.iconSrc alt="img" class="link__icon">-->
                    </a>
                  </div>
                </div>
              </div>
            </VueSlickCarousel>
        </div>
    </div>
</template>
<script>
  import VueSlickCarousel from 'vue-slick-carousel'
  import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
export default {
  name: "TheOurTeam",
  components: { VueSlickCarousel },
  data() {
    return {
        visible: false,
        title: "MEET OUR TEAM",
        //iconSrc: require("@/assets/Icon-Team.svg"),
        settings: {
          "arrows": true,
          "edgeFriction": 0.35,
          "dots": true,
          "infinite": false,
          "speed": 500,
          "slidesToShow": 3,
          "slidesToScroll": 3,
          "initialSlide": 0,
          "responsive": [
            {
              "breakpoint": 1024,
              "settings": {
                "slidesToShow": 3,
                "slidesToScroll": 3,
                "infinite": true,
                "dots": false,
                "arrows": true,
              },
            },
            {
              "breakpoint": 1023,
              "settings": {
                "slidesToShow": 2,
                "slidesToScroll": 2,
                "initialSlide": 2,
                "dots": true,
                "arrows": false,
              },
            },
            {
              "breakpoint": 480,
              "settings": {
                "slidesToShow": 1,
                "slidesToScroll": 1,
                 "arrows": false,
                  "dots": true,
              },
            }
          ],
        },
        slides: [
        {
          //Src: require("@/assets/member1.png"),
          name: "Miguel Obrien",
          title: "CEO & Founder",
          links: [
            { 
              link: "https://google.com",
              //iconSrc: require("@/assets/linked-in.svg")
            },
            {
              link: "https://google.com",
              //iconSrc: require("@/assets/google.svg")
            },
            {
              link: "https://google.com",
              //iconSrc: require("@/assets/facebook.svg")
            },
            {
              link: "https://google.com",
              //iconSrc: require("@/assets/twitter.svg")
            }
          ],
        },
        {
          //imgSrc: require("@/assets/member2.png"),
          name: "Jackie Carroll",
          title: "Art Director",
          links: [
            { 
              link: "https://google.com",
              iconSrc: require("@/assets/behance.svg")
            },
            { 
              link: "https://google.com",
              iconSrc: require("@/assets/linked-in.svg")
            },
            {
              link: "https://google.com",
              iconSrc: require("@/assets/google.svg")
            },
            {
              link: "https://google.com",
              iconSrc: require("@/assets/facebook.svg")
            },
            {
              link: "https://google.com",
              iconSrc: require("@/assets/twitter.svg")
            },
          ],
        },
        
      ],
    };
  },
}
</script>
<style lang="scss">
  .our-team {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 55px 0 80px;
    margin-bottom: 97px;
    &__slider {
      width: 100%;
      margin-bottom: 48px;
    }
    & .slick-active {
      height: 100% !important;
      background-color: transparent !important;
    }
    &__box {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      text-align: center;
      background-color: white;
      min-height: 372px;
      height: 100%;
    }
    &__position {
      font-size: 24px;
      color: #665F60;
      font-family: 'PT Sans', sans-serif;
      font-style: italic;
      margin-bottom: 50px;
    }
    &__name {
      font-size: 24px;
      color: #9F9ACF;
      font-family: 'ProximaNova', sans-serif;
      font-style: italic;
      margin-bottom: 34px;
      font-weight: bold;
      text-transform: uppercase;
    }
    &__slide {
      padding: 0 15px;
      min-height: 485px;
      height: 100%;
      position: relative;
      padding-top: 120px;
    }
    &__links {
      background-color: #9F9ACF;
      display: flex;
      justify-content: center;
      padding: 19px 44px;
    }
    &__link {
      display: flex;
      margin-right: 12px;
    }
    &__link:last-child {
      margin-right: 0;
    }
    &__img {
      max-width: 240px;
      width: 100%;
      margin: 0 auto;
      border-radius: 50%;
      border: 15px solid $bg;
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
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
      color: #665F60;
    }
    .slick-next:before {
      content: url(../../assets/team_arrright.svg);
    }
    .slick-next {
      right: -30px;
      fill: #665F60;
    }
    .slick-prev:before {
      content: url(../../assets/team_arrleft.svg);
    }
    .slick-prev {
      left: -30px;
      fill: #665F60;
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
      background: #9F9ACF;
    }
  }
  @include media-max-width($screen-tablet) {
      .our-team  {
        margin-bottom: 0;
        &__img {
          max-width: 150px;
        }
        .slick-dots {
          bottom: -50px;
        }
        .slick-dots li button:before {
          border: 3px solid #9F9ACF;
        }
        &__box {
          min-height: 200px;
        }
        &__name {
          font-size: 23px;
          margin-bottom: 20px;
        }
        &__position {
          font-size: 15px;
          margin-bottom: 20px;
        }
        &__links {
          padding: 5px 0;
        }
        .link__icon {
          width: 25px;
        }
        &__slide {
          min-height: fit-content;
        }
        &__icon {
          margin-bottom: 20px;
        }
        &__title {
          margin-bottom: 20px;
        }
      }
  }
  @include media-max-width($screen-desktop) {
    .our-team  {
      &__slide {
        width: 80%;
      }
      .slick-dots {
        bottom: -50px;
      }
      .slick-dots li button:before {
        border: 3px solid #9F9ACF;
      }
    }
  }
  @include media-max-width($screen-desktop-large) {
    .our-team  {
      &__slider {
        max-width: 950px;
      }
    }
  }
</style>
