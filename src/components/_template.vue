<template>
  <div>
  </div>
</template>

<script>
export default {
  name: 'ComponentName',
  mixins: [],
  extends: {},
  components: {},
  props: {
  /*
    // type: String, Number, Boolean, Array, Object, Date, Function or Symbol
    prop: String,
  or 
    prop: [String, Number],
  or
    prop: {
      type: String,
    or
      type: [String, Number],
      required: true, // default false
      default: literal, // default undefined, if type Boolean: false 
    or 
      default() { 
        return 'literal'; // will be called before create
      },
      validator(value) { 
        return true; // will be validated before create
      },
    },
  //*/
  },
  data() {
    return {
      // state: initialValue,
    }
  },
  computed: {
  /*
    value() {
      return computedValue;
    },
  or
    value: {
      get() { return computedValue; },
      set(newValue) { this.state = newValue; }
    },
  //*/
  },
  watch: {
  /*
    prop(newValue, oldValue) {},
  or 
    prop: {
      handler(newValue, oldValue) {},
      deep: true, // called on update with same value, too
      immediate: true, // called after create
      flush: 'post', // called after update
    },
  //*/
  },
  methods: {},
  setup() {}, // v3 CompositionAPI
  beforeCreate() {},
  created() {},
  // render() {},
  beforeMount() {},
  mounted() {},
  beforeUpdate() {},
  updated() {},
  beforeUnmount() {},
  unmounted() {},
}
</script>