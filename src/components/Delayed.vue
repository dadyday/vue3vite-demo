<template>
  <slot :pending="pending" :remaining="delay - time"></slot>
</template>

<script>
export default {
props: {
    seconds: {
      type: Number,
      default: 0,
      validator: (value) => value >= 0,
    },
    milliseconds: {
      type: Number,
      default: 500,
      validator: (value) => value >= 0,
    },
  },
  data() {
    return {
      pending: true,
      startTime: null,
      time: 0,
    }
  },
  computed: {
    delay() {
      return Math.round(this.seconds ? (this.seconds ?? 0) * 1000 : this.milliseconds);
    },
  },
  watch: {
    seconds: {
      handler(newState, oldState) { this.start(); },
      deep: true,
    },
    milliseconds: {
      handler(newState, oldState) { this.start(); },
      deep: true,
    },
  },
  methods: {
    start() {
      this.pending = true;
      this.startTime = Date.now();
      this.time = this.getElapsedTime();
      const counter = setInterval(() => {
        this.time = this.getElapsedTime();
      }, 100);
      this.wait(this.delay)
        .then(() => {
          console.log('done');
        })
        .finally(() => {
          clearInterval(counter);
          this.pending = false;
          this.startTime = null;
          this.time = this.getElapsedTime();
        })
      ;
    },
    getElapsedTime() {
      if (!this.startTime) return null;
      return Math.round(Date.now() - this.startTime);
    },
    wait(delay) {
      console.log(`wait for ${delay} ms`);
      return new Promise((resolve) => setTimeout(resolve, delay));
    },
  },
  /*render() {
    return this.$scopedSlots.default({
      pending: this.pending,
    });
  },*/
  mounted() {
    this.start();
  },
  activated() {
    this.start();
  }
}
</script>