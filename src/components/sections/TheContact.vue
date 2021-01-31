<template>
  <div id="contact" class="contact">
    <the-map :zoomVal="12"></the-map>
    <div>
      <button
        @click="toogleShowAddress()"
        :class="{ active: showAddress }"
        class="contact__map contact__map--adress"
      >
        <!--<img :src="iconAdressSrc" alt="img" class="contact__map-img" />-->
      </button>
      <transition name="fade">
        <div
          v-if="showAddress"
          class="contact__map-text contact__map-text--adress"
        >
          <p>Ikan Piranha Atas 220C</p>
          <p>Malang - East Java</p>
          <p>Indonesia</p>
        </div>
      </transition>
    </div>
    <div>
      <button
        @click="toogleShowPhone()"
        :class="{ active: showPhone }"
        class="contact__map contact__map--phone"
      >
        <!--<img :src="iconPhoneSrc" alt="img" class="contact__map-img" />-->
      </button>
      <transition name="fade">
        <div
          v-if="showPhone"
          class="contact__map-text contact__map-text--phone"
        >
          <p>Phone number</p>
          <p>+456 454 254 52</p>
          <p>Index: 235012</p>
        </div>
      </transition>
    </div>
    <div class="contact__box container">
      <!--<img class="contact__img" :src="iconSrc" alt="img" />-->
      <p class="contact__title title">{{ title }}</p>
      <div id="contact-form" class="contact__form-box">
        <div class="separator"></div>
        <div v-if="isSending" class="loading">Sending...</div>
        <form class="contact__form" @submit.prevent="onSubmit(this)">
          <input
            required
            name="name"
            v-model="contact.name"
            placeholder="Name"
            type="text"
            autocomplete="off"
            class="contact__name"
          />
          <input
            required
            name="email"
            v-model="contact.email"
            placeholder="E-mail"
            type="email"
            autocomplete="off"
            class="contact__email"
          />
          <textarea
            name="message"
            v-model="contact.message"
            rows="10"
            placeholder="Message"
            class="contact__message"
          ></textarea>
          <button type="submit" class="contact__btn">SEND MESSAGE</button>
        </form>
      </div>
      <div
        class="scroll-top"
        v-scroll-to="{
          el: path,
          duration: 500,
          easing: 'linear',
          force: true,
          x: false,
          y: true,
        }"
      >
        <!--<img :src="iconTopSrc" alt="toTop" class="scroll-top__img" />-->
      </div>
    </div>
  </div>
</template>
<script>
import TheMap from "../sections/TheMap";
export default {
  components: {
    TheMap,
  },
  name: "TheContact",
  data() {
    return {
      path: "#header",
      showAddress: false,
      showPhone: false,
      visible: false,
      title: "GET IN TOUCH",
      //iconSrc: require("@/assets/map_icon.svg"),
      //iconTopSrc: require("@/assets/arrow_top.svg"),
      //iconAdressSrc: require("@/assets/adress.svg"),
      //iconPhoneSrc: require("@/assets/phone.svg"),
      btnLink: "https://google.com",
      btnName: "Learn More",
      contact: {
        name: "",
        email: "",
        message: "",
      },
      isSending: false,
    };
  },
  methods: {
    toogleShowAddress() {
      this.showAddress = !this.showAddress;
      if (this.showPhone) {
        this.showPhone = !this.showPhone;
      }
    },
    toogleShowPhone() {
      this.showPhone = !this.showPhone;
      if (this.showAddress) {
        this.showAddress = !this.showAddress;
      }
    },
    clearForm() {
      for (let field in this.contact) {
        this.contact[field] = "";
      }
    },
    onSubmit() {
      this.isSending = true;
      setTimeout(() => {
        let form = new FormData();
        for (let field in this.contact) {
          form.append(field, this.contact[field]);
        }
        this.clearForm();
        this.isSending = false;
        /*
        this.$http
          .post("/app.php", form)
          .then((response) => {
            console.log(response);
            this.clearForm();
            this.isSending = false;
          })
          .catch((e) => {
            console.log(e);
          });*/
      }, 1000);
    },
  },
};
</script>
<style lang="scss">
.contact {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 901px;
  max-height: 100%;
  position: relative;
  &__img {
    margin-bottom: 25px;
  }
  &__title {
    margin-bottom: 170px;
  }
  &__form {
    display: flex;
    flex-wrap: wrap;
    color: white;
  }
  textarea:focus,
  input:focus {
    outline: none;
    background: rgba(94, 85, 175, 0.3);
    color: white;
  }
  textarea::placeholder,
  input::placeholder {
    color: white;
  }
  &__name {
    width: 47%;
    margin-right: 6%;
    margin-bottom: 26px;
    background: rgba($color: #ebebeb, $alpha: 0.6);
    border: none;
    padding: 23px;
  }
  &__email {
    width: 47%;
    margin-bottom: 26px;
    background: rgba($color: #ebebeb, $alpha: 0.6);
    border: none;
    padding: 23px;
  }
  &__message {
    width: 100%;
    margin-bottom: 54px;
    background: rgba($color: #ebebeb, $alpha: 0.6);
    border: none;
    padding: 23px;
  }
  &__btn {
    cursor: pointer;
    width: 43%;
    background: #9f9acf;
    border: none;
    color: #ffffff;
    font-size: 15px;
    font-family: ProximaNova;
    text-transform: uppercase;
    margin: 0 auto;
    padding: 25px 69px;
    border-radius: 10px;
    box-shadow: 0px 5px rgba(94, 85, 175, 0.5);
    outline: none;
  }
  &__btn:hover {
    background: rgba(94, 85, 175, 0.5);
  }
  &__box {
    z-index: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-self: center;
  }
  &__form-box {
    @include media-max-width($screen-desktop) {
      width: 90%;
    }
  }
  &__map {
    background: #9f9acf;
    width: 92px;
    height: 92px;
    border: none;
    position: absolute;
    right: 0;
    outline: none;
    transition: 0.3s ease-in;
    z-index: 2;
  }
  &__map:hover {
    background: rgba(94, 85, 175, 0.7);
  }
  &__map--adress.active {
    right: 265px;
  }
  &__map--adress {
    top: 230px;
    @include media-max-width($screen-fullhd) {
      top: 160px;
    }
  }
  &__map--phone.active {
    right: 219px;
  }
  &__map--adress.active:hover {
    background: rgba(94, 85, 175, 0.7);
  }
  &__map--phone.active:hover {
    background: rgba(94, 85, 175, 0.7);
  }
  &__map--phone {
    top: 321px;
    @include media-max-width($screen-fullhd) {
      top: 251px;
    }
  }
  &__map-text {
    background: rgba(235, 235, 235, 0.51);
    color: #665f60;
    font-size: 18px;
    font-family: "PT Sans";
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 5px 44px;
    text-align: center;
    position: absolute;
    right: 0;
    height: 92px;
    p {
      margin: 0;
    }
  }
  &__map-text--adress {
    top: 230px;
    @include media-max-width($screen-fullhd) {
      top: 160px;
    }
  }
  &__map-text--phone {
    top: 321px;
    @include media-max-width($screen-fullhd) {
      top: 251px;
    }
  }
  .scroll-top {
    background: rgba(94, 85, 175, 0.3);
    padding: 32px 24px;
    position: absolute;
    right: 130px;
    bottom: 45px;
    cursor: pointer;
  }
  .scroll-top:hover {
    background: rgba(94, 85, 175, 0.7);
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}
@include media-max-width($screen-netbook) {
  .contact {
    max-height: 600px;
    &__title {
      margin-bottom: 20px;
    }
    .vue-map-container {
      max-height: 600px;
    }
    &__form {
      flex-direction: column;
    }
    &__name,
    &__email {
      width: 100%;
      margin-right: 0;
      margin-bottom: 15px;
      padding: 10px;
    }
    &__message {
      width: 100%;
      margin-bottom: 20px;
      background: rgba(235, 235, 235, 0.6);
      border: none;
      padding: 10px;
      max-height: 100px;
    }
    &__btn {
      width: 100%;
      font-size: 15px;
      padding: 10px 15px;
    }
    &__form {
      width: 100%;
      padding: 10px 0;
    }
    .contact__form-box {
      width: 80%;
    }
    .scroll-top {
      padding: 10px;
      bottom: 0;
    }
    &__map {
      width: 45px;
      height: 45px;
      &--phone {
        top: 0;
      }
      &--adress {
        top: 45px;
      }
      &-text--phone {
        top: 0;
      }
      &-text {
        font-size: 10px;
        padding: 5px 5px;
        height: 45px;
        top: 0;
      }
      &-text--adress {
        top: 45px;
      }
      &--phone.active {
        right: 84px !important;
        right: 0;
      }
      &--adress.active {
        top: 45px;
        right: 110px;
      }
    }
  }
}
</style>
