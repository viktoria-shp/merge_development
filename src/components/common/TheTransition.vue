<template>
  <transition :name="name">
    <slot />
  </transition>
</template>
<script>
import "animate.css";
export default {
  name: "TheAnimation",
  props: {
    name: {
      type: String,
      default: "fade-in",
    },
  },
};
</script>
<style lang="scss">
.fade-in-enter-active {
  animation: fadeIn 1.5s;
}
.fade-in-leave-active {
  animation: fadeOut 0.5s;
}
.bounce-enter-active {
  animation: bounce 2s;
}
.bounce-leave-active {
  animation: bounce 2s;
}

.slide-from-left-enter-active {
  animation: slideInFromLeft 1.5s;
}
.slide-from-left-leave-active {
  animation: slideOutFromLeft 1.5s;
}

.slide-from-right-enter-active {
  animation: slideInFromRight 1.5s;
}
.slide-from-right-leave-active {
  animation: slideOutFromRight 1.5s;
}

@keyframes slideInFromLeft {
  from {
    transform: translateX(-100%);
    width: 100%;
  }

  to {
    transform: translateX(0%);
    width: 100%;
  }
}

@keyframes slideOutFromLeft {
  from {
    transform: translateX(0%);
    width: 100%;
  }

  to {
    transform: translateX(-100%);
    width: 100%;
  }
}

@keyframes slideInFromRight {
  from {
    transform: translateX(100%);
    width: 100%;
  }

  to {
    transform: translateX(0%);
    width: 100%;
  }
}

@keyframes slideOutFromRight {
  from {
    transform: translateX(0%);
    width: 100%;
  }

  to {
    transform: translateX(100%);
    width: 100%;
  }
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes fadeOut {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>