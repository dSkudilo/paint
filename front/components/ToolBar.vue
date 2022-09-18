<template>
  <div class="toolbar">
    <div class="toolbar__actions">
      <button class="toolbar__button brush"></button>
      <button class="toolbar__button circle"></button>
      <button class="toolbar__button eraser"></button>
      <button class="toolbar__button rect"></button>
      <button class="toolbar__button line"></button>
      <input type="color" class="toolbar__button">
    </div>
    <div class="toolbar__navigation">
      <button class="toolbar__button undo"></button>
      <button class="toolbar__button redo"></button>
      <button class="toolbar__button save"></button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ToolBar'
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
