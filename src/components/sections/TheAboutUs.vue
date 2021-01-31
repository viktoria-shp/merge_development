<template>
    <div id="about" class="about-us container">
      <a-row>
        <a-col :md="8" :xs="24" :sm="24">
          <div class="about-us__img">
            <!--<img class="about-us__icon" :src=iconSrc alt="">-->
            <p class="about-us__title">{{title}}</p>
          </div>
        </a-col>
        <a-col :md="16" :xs="24" :sm="24" class="about-us__col">
          <p class="about-us__description">{{description_par1}}</p>
          <p class="about-us__description">{{description_par2}}</p>
          <a class="about-us__btn btn" :href=btnLink target="_blank">{{btnName}}</a>
        </a-col>
      </a-row>        
    </div>
</template>
<script>
export default {
  name: "TheAboutUs",
  data() {
    return {
        visible: false,
        title: "About Us",
        description_par1: "Nullam quis risus eget urna mollis ornarevel eu leo. Donec id elit non mi porta gravida at eget metus. Donec ullamcorper nulla non metus auctor fringilla. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.",
        description_par2: "Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Maecenas faucibus mollis interdum. Cras mattis consectetur purus sit amet fermentum. Sed posuere consectetur est at lobortis.",
        //imgSrc: require("@/assets/aboutUs_img.png"),
        //iconSrc: require("@/assets/aboutUs_icon.svg"),
        btnLink: "https://google.com",
        btnName: "Learn More"
    };
  }
};
</script>
<style lang="scss">
  .about-us {
    padding: 124px 0 121px;
    &__img {
      background-image: linear-gradient(rgba(#9F9ACF,.6), rgba(#9F9ACF,.6)), url(../../assets/aboutUs_img.png);
      background-repeat: no-repeat;
      background-size: cover;
      display: flex;
      flex-direction: column;
      align-items: center;
      position: relative;
      justify-content: center;
      background-position: center;
      min-width: 381px;
      min-height: 556px;
      width: 100%;
      height: 100%;
    }
    &__btn {
      font-family: 'PT Sans', sans-serif;
      color: #7D7A7C;
      font-size: 20px;
      padding: 20px 52px 19px 53px;
      border: 1px solid #7D7A7C;
    }
    &__col {
      padding: 79px 34px 101px 122px;
    }
    &__icon {
      margin-bottom: 44px;
    }
    &__description {
      font-family: 'PT Sans', sans-serif;
      color: #665F60;
      font-size: 20px;
    }
    &__description:nth-child(2) {
      margin-bottom: 91px;
    }
    &__title {
      font-size: 46px;
      color: #FEFBFC;
      font-family: 'ProximaNova', sans-serif;
      text-transform: uppercase;
    }
  }
  @include media-max-width($screen-netbook) {
    .about-us {
      padding: 20px 0;
      &__img {
        min-width: auto;
        min-height: 300px;
      }
      &__title {
        font-size: 30px;
        margin: 0;
      }
      &__col {
        padding: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      &__description {
        font-size: 15px;
        text-align: justify;
      }
      &__description:nth-child(2) {
        margin-bottom: 20px;
      }
      &__btn {
        font-size: 15px;
        padding: 10px 15px;
      }
    }
  }
</style>
