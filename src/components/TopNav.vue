<template>
  <div class="top-nav">
    <div class="log" @click="toggleMenu">LOGO</div>
    <ul class="menu">
      <li>菜单1</li>
      <li>菜单2</li>
    </ul>
    <span class="toggleAside"></span>
  </div>
</template>

<script lang="ts">
import {inject, Ref} from 'vue';

export default {
  name: 'TopNav',
  setup() {
    const menuVisible = inject<Ref<boolean>>('menuVisible');
    const toggleMenu = () => {
      menuVisible.value = !menuVisible.value;
    };
    return {toggleMenu};
  }
};
</script>

<style lang="scss" scoped>
.top-nav {
  background: pink;
  display: flex;
  padding: 16px;
  position: relative;
  z-index: 10;
  justify-content: space-between;
  align-items: center;

  > .logo {
    max-width: 6em;
    margin-right: auto;
  }

  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;

    > li {
      margin: 0 1em;
    }
  }
  > .toggleAside{

  }

  @media (max-width: 500px) {
    & {
      justify-content: center;
    }
    > .menu {
      display: none;
    }
    > .logo {
      margin: 0 auto;
    }
  }
}
</style>