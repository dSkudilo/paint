<template>
  <main class="app">
    <ModalWindow
      @input="inputHandler"
    />
    <ToolBar />
    <SettingBar />
    <MainCanvas />
  </main>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'
import ToolBar from '~/components/ToolBar.vue'
import MainCanvas from '~/components/MainCanvas.vue'
import SettingBar from '~/components/SettingBar.vue'
import ModalWindow from '~/components/ModalWindow.vue'
export default {
  name: 'IndexPageId',
  components: {
    ToolBar,
    MainCanvas,
    SettingBar,
    ModalWindow
  },
  computed: {
    ...mapGetters({
      username: 'canvasState/username'
    })
  },
  methods: {
    inputHandler (val) {
      this.setUsername(val)
      this.connectionHandler()
    },
    connectionHandler () {
      const socket = new WebSocket('ws://localhost:5000/')
      if (!this.username) {
        console.log('нету имени!')
        return
      }
      socket.onopen = () => {
        console.log('11111')
        socket.send(JSON.stringify({
          id: this.$route.params.id,
          username: this.username,
          method: 'connection'
        }))
      }

      socket.onmessage = (event) => {
        console.log('ddddddd')
        console.log(event.data)
      }
    },
    ...mapMutations({
      setUsername: 'canvasState/setUsername'
    })
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
