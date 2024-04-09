<template>
  <div>
    <div class="container">
      <img
        id="imgcss"
        src="https://pic.mac89.com/pic/202101/29161257_cffefbadd6.jpeg"
      />
      <hr />
      <div class="animated" @click="onSwitch">
        <h1 ref="animated" class="animate__animated animate__bounce">
          An animated element
        </h1>
      </div>
      <hr />
      <img
        id="imgjs"
        src="https://pic.mac89.com/pic/202101/29161257_cffefbadd6.jpeg"
        ref="imgjs"
        @mouseover="onMouseover"
        @mouseout="onMouseout"
      />
      <hr />
      <button @click="show = !show">switch</button>
      <transition name="fade">
        <img
          v-show="show"
          src="https://pic.mac89.com/pic/202101/29161257_cffefbadd6.jpeg"
          width="300"
        />
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: "Vue2Index",

  data() {
    return {
      animatedFlag: true,
      show: false,
    };
  },

  mounted() {
    this.$refs.animated.addEventListener("animationend", () => {
      // alert("animate.css"); // 每次动画结束完都会执行callback
    });
  },

  methods: {
    onSwitch() {
      if (this.animatedFlag) {
        this.$refs.animated.className = "";
        this.$refs.animated.classList.add(
          "animate__animated",
          "animate__bounceOutLeft"
        );
      } else {
        this.$refs.animated.className = "";
        this.$refs.animated.classList.add(
          "animate__animated",
          "animate__bounceInRight"
        );
      }
      this.animatedFlag = !this.animatedFlag;
    },
    onMouseover() {
      this.$refs.imgjs.className = "animate";
    },
    onMouseout() {
      this.$refs.imgjs.className = "";
    },
  },
};
</script>

<style scoped>
.container {
  width: 300px;
  border: 2px sloid #f80;
  overflow: hidden;

  #imgcss {
    width: 100%;
    transition: transform 0.6s ease-in;
  }

  #imgcss:hover {
    transform: scale(1.1);
  }

  .animated {
    cursor: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewport="0 0 48 48" style="fill:black;font-size:24px"><text y="50%">🚀</text></svg>')
        16 0,
      auto;
  }

  #imgjs {
    width: 100%;
    border-radius: 50%;
    transition: transform 0.6s ease-in;
  }

  .animate {
    transform: rotate(15deg);
  }

  .fade-leave,
  .fade-enter-to {
    opacity: 1;
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 2s ease-in;
  }

  .fade-leave-to,
  .fade-enter {
    opacity: 0;
  }
}
</style>
