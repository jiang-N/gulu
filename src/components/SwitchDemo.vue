<template>
  <div>
    <h1>Switch 组件示例</h1>
    <Demo :component="Switch1Demo"/>
    <Demo :component="Switch2Demo"/>
  </div>
</template>

<script>
import {ref} from 'vue'
import Switch1Demo from './Switch1.demo.vue'
import Switch2Demo from './Switch2.demo.vue'
import Demo from './Demo.vue'

export default {
  name: 'SwitchDemo',
  components: {Demo},
  setup() {
    const bool = ref(false)
    return {bool, Switch1Demo, Switch2Demo}
  }
}
</script>