<template>
  <div class="canvas">
    <canvas
      @mousedown="mouseDownHandler"
      ref="canvas"
      width="600"
      height="600"
      class="canvas__window"
    />
  </div>
</template>
<script>
import { mapMutations } from 'vuex'
import Brush from '~/use/Brush'
export default {
  name: 'MainCanvas',
  mounted () {
    this.setCanvas(this.$refs.canvas)
    this.setTool(new Brush(this.$refs.canvas))
  },
  methods: {
    mouseDownHandler () {
      this.pushToUndo(this.$refs.canvas.toDataURL())
    },
    ...mapMutations({
      setCanvas: 'canvasState/setCanvas',
      setTool: 'toolState/setTool',
      pushToUndo: 'canvasState/pushToUndo'
    })
  }
}
</script>

<style scoped>
  .canvas{
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .canvas__window {
    border: 1px solid black;
    background-color: white;
    margin-top: 60px;

  }
</style>
