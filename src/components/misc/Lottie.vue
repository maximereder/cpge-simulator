<script>
import lottie from 'lottie-web';

export default {
  name: 'Lottie',
  props: {
    url: {
      type: String,
      required: true,
    },
  },
  data: () => ({
    anim: undefined,
    loaded: false,
  }),
  async mounted() {
    const animData = await fetch(this.url).then((r) => r.json());

    this.anim = lottie.loadAnimation({
      container: this.$refs.container,
      animationData: animData,
    });

    this.loaded = true;
  },
  beforeDestroy() {
    this.anim.destroy();
  },
};
</script>
<template>
  <div class="lottie" :class="{ loaded: loaded }" ref="container"></div>
</template>
<style lang="scss">
.lottie {
  opacity: 0;
  transition: opacity 0.5s;

  &.loaded {
    opacity: 1;
  }
}
</style>
