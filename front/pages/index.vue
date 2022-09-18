<template>
  <main class="app">
    <ToolBar />
    <SettingBar />
    <MainCanvas />
  </main>
</template>

<script>
import ToolBar from '~/components/ToolBar.vue'
import MainCanvas from '~/components/MainCanvas.vue'
import SettingBar from '~/components/SettingBar.vue'
export default {
  name: 'IndexPage',
  components: {
    ToolBar,
    MainCanvas,
    SettingBar
  }
}
</script>

<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
</style>

<style scoped>
  .app {
    background-color: #f6f6f6;
    width: 100vw;
    height: 100vh;
    max-height: 100vh;
    position: relative;
  }
</style>
