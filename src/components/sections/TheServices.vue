<template>
    <div id="services" class="service container">
        <div class="cards">
            <div :class="{cards__item:true, 'cards__item--big': service.size == 'big'}" v-for="service in services" :key="service.title">
                <!--<img class="cards__icon" alt="icon" :src=service.iconSrc>-->
                <p :class="{cards__title:true, 'cards__title--big': service.size == 'big'}">{{service.title}}</p>
                <div class="cards__summary">{{service.summary}}</div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: "TheServices",
  data() {
    return {
        services: [
        {
          //iconSrc: require("@/assets/Icon-Graphic.svg"),
          title: "GRAPHIC DESIGN",
          summary: "Cras mattis consectetur purus sit amet fermentum."
        },
        {
          iconSrc: require("@/assets/Icon-Web.svg"),
          title: "WEB DEVELOPMENT",
          summary: "Cras mattis consectetur purus sit amet fermentum."
        },
        {
          iconSrc: require("@/assets/Icon-SEO.svg"),
          title: "SEO & MARKETING",
          summary: "Cras mattis consectetur purus sit amet fermentum."
        },
        {
          iconSrc: require("@/assets/Icon-Mobile.svg"),
          title: "MOBILE DEVELOPMENT",
          summary: "Cras mattis consectetur purus sit amet fermentum."
        },
        {
          iconSrc: require("@/assets/Icon-Services.svg"),
          title: "OUR SERVICES",
          summary: "“Nullam quis risus eget urna mollis ornare vel eu leo. Nulla vitae elit libero, a pharetra augue.”- Borat -",
          size: "big"
        },
      ],
    };
  }
};
</script>
<style lang="scss">
  .cards {
    display: grid;
    grid-template-rows: repeat(12, 1fr);
    grid-template-columns: repeat(3, 1fr);
    grid-auto-flow: column;
    &__item {
      grid-row: span 6;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 90px 20px 109px;
      background-color: $bg;
      text-align: center;
      color: #665F60;
    }
    &__item:nth-child(3n+1) {
      background-color: #DBDBDB;
    }
    
    &__item--big {
      grid-row: span 12;
      background-image: linear-gradient(rgba(#9F9ACF,.5), rgba(#9F9ACF,.5)), url(../../assets/our_services.svg);
      background-repeat: no-repeat;
      background-size: cover;
      display: flex;
      flex-direction: column;
      align-items: center;
      position: relative;
      background-size: cover;
      background-position: center;
      color: #FEFCFD;
    }
    &__icon {
      margin-bottom: 30px;
    }
    &__title {
      font-size: 24px;
      font-family: 'PT Sans', sans-serif;
      margin-bottom: 21px;
      font-weight: bold;
      &--big{
        font-size: 36px;
        color: #FEFCFD;
        margin-bottom: 118px;
      }
    }
    &__summary {
      font-size: 18px;
      font-family: 'PT Sans', sans-serif;
      font-style: italic;
    }
  }
  @include media-max-width($screen-tablet) {
    .cards {
      grid-template-columns: repeat(2, 1fr);
      grid-auto-flow: row;
      &__item {
        padding: 10px;
      }
      &__item--big {
        grid-column: span 2;
      }
      &__icon {
        margin-bottom: 10px;
      }
      &__title {
        font-size: 16px;
        margin-bottom: 10px;
        &--big {
          font-size: 20px;
          margin-bottom: 10px;
        }
      }
      &__summary {
        font-size: 12px;
      }
    }
  }
</style>
