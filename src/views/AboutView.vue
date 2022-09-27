<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div>
      this is your <button @click="count++">{{ count }}.</button> visit!
    </div>
  </div>
</template>

<script setup>
import {
  ref,
  onMounted,
  onUpdated, // should not change a state
  onActivated, // only in KeepAlive
  onDeactivated, // only in KeepAlive
  onUnmounted,
} from "vue";
let count = ref(0);

onActivated(() => {
  count.value++;
});
</script>

<!--script>
import { ref, toRefs } from 'vue'

export default {
  props: {
    title: String
  },
  setup(props) {
    const { title } = toRefs(props);
    const count = ref(0);
    return {
      count,
    };
  },
  activated() {
    this.count++;
  }
}
</script-->

<!--script>
export default {
  data() {
    return { count: 0 };
  },
  activated() {
    this.count++;
  }
}
</script-->

<style lang="scss">
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    flex-flow: column wrap;
    justify-content: center;
    align-items: stretch;
    align-content: center;
    gap: 0.1rem;
  }
}
</style>
