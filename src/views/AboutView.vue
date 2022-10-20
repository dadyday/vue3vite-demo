<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div>
      this is your <button @click="count++">{{ countWord }}</button> visit!
    </div>
    <hr />
  </div>
</template>

<script setup>
import {
  ref, computed,
  onMounted,
  onUpdated, // should not change a state
  onActivated, // only in KeepAlive
  onDeactivated, // only in KeepAlive
  onUnmounted,
} from "vue";

const count = ref(0);
const countWord = computed(() => {
  let digit = count.value % (count.value < 20 ? 20 : 10);
  switch (digit) {
    case 1: return count.value+'st';
    case 2: return count.value+'nd';
    case 3: return count.value+'rd';
    default: return count.value+'th';
  }
});

onActivated(() => {
  count.value++;
});

</script>

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
