<demo>常规用法</demo>

<template>
  <Switch v-model:value="bool"></Switch>
</template>

<script lang="ts">
import {Switch} from '../lib/index';
import {ref} from 'vue';

export default {
  name: 'Switch1.demo',
  components: {Switch},
  setup() {
    const bool = ref(false);
    return {bool};
  }
};
</script>

<style lang="scss" scoped>

</style>