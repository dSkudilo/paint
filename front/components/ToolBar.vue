<template>
  <div class="toolbar">
    <div class="toolbar__actions">
      <button
        class="toolbar__button brush"
        @click="setTool(new Brush(canvas))"
      ></button>
      <button
        class="toolbar__button circle"
        @click="setTool(new Circle(canvas))"
      ></button>
      <button
        class="toolbar__button eraser"
        @click="setTool(new Eraser(canvas))"
      ></button>
      <button
        class="toolbar__button rect"
        @click="setTool(new Rect(canvas))"
      ></button>
      <button
        class="toolbar__button line"
        @click="setTool(new Line(canvas))"
      ></button>
      <input
        type="color"
        class="toolbar__button"
        v-model="color"
      >
    </div>
    <div class="toolbar__navigation">
      <button
        class="toolbar__button undo"></button>
      <button
        class="toolbar__button redo"></button>
      <button
        class="toolbar__button save"></button>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import { mapGetters } from 'vuex'
import Brush from '~/use/Brush'
import Rect from '~/use/Rect'
import Circle from '~/use/Circle'
import Line from '~/use/Line'
import Eraser from '~/use/Eraser'
export default {
  name: 'ToolBar',
  data () {
    return {
      color: null,
      Brush,
      Rect,
      Circle,
      Line,
      Eraser
    }
  },
  watch: {
    color (val) {
      console.log(val)
      this.setStrokeColor(val)
      this.setFillColor(val)
    }
  },
  computed: {
    ...mapGetters({
      canvas: 'canvasState/canvas'
    })
  },
  methods: {
    ...mapMutations({
      setCanvas: 'canvasState/setCanvas',
      setTool: 'toolState/setTool',
      setStrokeColor: 'toolState/setStrokeColor',
      setFillColor: 'toolState/setFillColor'
    })
  }
}
</script>

<style scoped>
  .toolbar {
    height: 40px;
    width: 100%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
    widows: 100%;
    box-shadow: 0 4px 5px gray;
    position: absolute;
    z-index: 100;
  }
  .toolbar__actions {
    display: flex;
    align-items: center;
  }
  .toolbar__navigation {
    display: flex;
    align-items: center;
    margin-right: 10px;
  }
  .toolbar__button {
    height: 25px;
    width: 25px;
    border: none;
    outline: none;
    cursor: pointer;
    margin-left: 10px;
    background-size: cover;
  }
  .brush {
    background: url('../static/toolbar/brush.svg') no-repeat center center;
  }
  .circle {
    background: url('../static/toolbar/circle.svg') no-repeat center center;
  }
  .eraser {
    background: url('../static/toolbar/eraser.svg') no-repeat center center;
  }
  .color {
    background: url('../static/toolbar/color.svg') no-repeat center center;
  }
  .line {
    background: url('../static/toolbar/line.svg') no-repeat center center;
  }
  .rect {
    background: url('../static/toolbar/rect.svg') no-repeat center center;
  }
  .undo {
    background: url('../static/toolbar/undo.svg') no-repeat center center;
  }
  .redo {
    background: url('../static/toolbar/redo.svg') no-repeat center center;
  }
  .save {
    background: url('../static/toolbar/save.svg') no-repeat center center;
  }
</style>
