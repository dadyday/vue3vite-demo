<template>
  <div>
    <Delayed :seconds="sec" v-slot="{ pending, remaining }">
      <span v-if="pending">wait for {{ remaining }} milliseconds ...</span>
      <span v-else>
        bin da!
      </span>
      <button @click="sec = 1">1</button>
      <button @click="sec = 3">3</button>
      <button @click="sec = $_.random(1, 5, true);">random</button>
    </Delayed>
  </div>
</template>

<script>
import Delayed from '@/components/Delayed.vue';
export default {
  components: {
    Delayed,
  },
  data() {
    return {
      sec: 2,
    }
  },
};
</script>