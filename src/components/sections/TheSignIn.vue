<template>
  <the-transition name="bounce">
    <template v-if="showForm">
      <div id="sign-in" class="sign-in">
        <h1 class="sign-in__title">{{ title }}</h1>
        <div class="sign-in__box">
          <p class="sign-in__text">Don’t have an account?</p>
          <a href="#" class="sign-in__link">Sign up now</a>
        </div>
        <a-form
          id="components-form-demo-normal-login"
          :form="form"
          class="login-form"
          @submit="handleSubmit"
        >
          <a-form-item label="E-mail">
            <a-input
              v-decorator="[
                'email',
                {
                  rules: [
                    {
                      type: 'email',
                      message: 'Invalid email',
                    },
                    {
                      required: true,
                      message: 'Please input your E-mail!',
                    },
                  ],
                },
              ]"
            />
          </a-form-item>
          <a-form-item label="Password">
            <a-input
              v-decorator="[
                'password',
                {
                  rules: [
                    {
                      required: true,
                      message: 'Please input your password!',
                    },
                    {
                      min: 5,
                      message: 'Invalid format too short',
                    },
                  ],
                },
              ]"
              type="password"
            />
            <a class="login-form-forgot" href="">
              Forgot your password?</a>
          </a-form-item>
          <a-form-item>
            <a-button type="primary" html-type="submit" class="login-form-button" :disabled="hasErrors(form.getFieldsError())">
              Log in
            </a-button>
          </a-form-item>
        </a-form>
      </div>
    </template>
  </the-transition>
</template>
<script>
function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}
export default {
  name: "TheSignIn",
  data() {
    return {
      showForm: false,
      path: "#header",
      visible: false,
      title: "Sign in",
      btnLink: "https://google.com",
      btnName: "Learn More",
      hasErrors,
      contact: {
        email: "",
        password: "",
      },
      isSending: false,
    };
  },
  created() {
    let v = this;
    setTimeout(function () {
      v.showForm = true;
    }, 1000);
  },
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: 'normal_login' });
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
        }
      });
    },
    validateToNextPassword(rule, value, callback) {
      const form = this.form;
      if (value && this.confirmDirty) {
        form.validateFields(['confirm'], { force: true });
      }
      callback();
    },
  },
};
</script>
<style lang="scss">
  .sign-in {
    width: 100%;
    &__title {
      font-size: $lg_subTitle;
      color: #22252C;
      margin-bottom: 15px;
      font-family: $font;
      font-weight: 700;
      @include media-max-width($screen-tablet-large) {
        font-size: $md_subTitle;
        margin-bottom: 10px;
      }
    }
    &__box {
      margin-bottom: 61px;
      @include flex;
      font-weight: 600;
      @include media-max-width($screen-fullhd) {
        margin-bottom: 30px;
      }
      @include media-max-width($screen-tablet-large) {
        @include flex(flex-start, flex-start, column);
        margin-bottom: 15px;
      }
      @include media-max-width($screen-tablet-small) {
        @include flex(space-between, center, row);
      }
    }
    &__text {
      font-size: $lg_text;
      color: $text-color;
      margin-right: 9px;
      margin-bottom: 0;
      font-family: $font;
      @include media-max-width($screen-tablet-large) {
        font-size: $md_text;
      }
    }
    &__link {
      font-size: $lg_text;
      color: $primary_blue;
      font-family: $font;
      @include media-max-width($screen-tablet-large) {
        font-size: $md_text;
      }
      &:hover {
        color: $link_hover;
      }
    }
    .ant-input {
      height: 54px;
      border-radius: 8px;
      border: 1px solid $primary_blue;
      @include media-max-width($screen-fullhd) {
        height: 45px;
      };
      @include media-max-width($screen-tablet-large) {
        height: 40px;
      };
    }
    .login-form-forgot{
      position: absolute;
      bottom: -10px;
      right: 20px;
      width: max-content;
      font-size: $lg_text;
      color: $grey_text;
      font-family: $font;
      font-weight: 600;
      @include media-max-width($screen-tablet-large) {
        font-size: $xs_text;
      };
      &:hover {
        color: $black_primary;
      }
    }
    .ant-form-item {
      margin-bottom: 30px;
      &:last-child {
        margin-bottom: 0;
      }
      @include media-max-width($screen-fullhd) {
        margin-bottom: 20px;
      }
    }
    .ant-form-item label {
      font-size: $lg_text;
      color: $text-color;
      font-family: $font;
      font-weight: 600;
      @include media-max-width($screen-tablet-large) {
        font-size: $md_text;
      };
    }
    .ant-form-item-label {
      display: inline-block;
      overflow: hidden;
      line-height: 39.9999px;
      white-space: nowrap;
      vertical-align: middle;
      @include media-max-width($screen-tablet-large) {
        line-height: 20px;
      };
    }
    .ant-btn-primary {
      width: 100%;
      height: 54px;
      background: $primary_blue;
      border-radius: 8px;
      border: none;
      box-shadow: 0px 15px 40px -15px rgba(6,91,234,0.83);
      @include media-max-width($screen-fullhd) {
        height: 45px;
      };
      @include media-max-width($screen-tablet-large) {
        height: 40px;
      };
      span {
        font-size: $lg_formText;
        color: $white;
        font-family: $font;
        @include media-max-width($screen-tablet-large) {
          font-size: $md_formText;
        };
      }
      &:hover {
        background: $btn_hover;
      }
      &:focus {
        background: $primary_blue;
      }
      &[disabled] {
        background: $primary_grey;
        box-shadow: none;
      }
    }
    .has-error .ant-input,
    .has-error .ant-input:not([disabled]):hover{
      border: 1px solid $error;
    }
    .has-success .ant-input,
    .has-success .ant-input:not([disabled]){
      border: 1px solid $complete;
    }
    .has-error .ant-form-explain {
      color: $error;
    }
    .ant-form-explain {
      position: absolute;
      top: -27px;
      right: 0;
      font-family: $font;
      font-size: 12px;
    }
    .ant-form-item-required::before {
      display: none;
    }
    .ant-input:focus {
      box-shadow: none;
    }
    .ant-form {
      margin-bottom: 200px;
      @include media-max-width($screen-fullhd) {
        margin-bottom: 70px;
      }
    }
  }
</style>
