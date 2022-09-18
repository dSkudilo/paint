<template>
  <div class="canvas">
    <!-- стили тут тк канванс плохо высчитывает из css -->
    <canvas class="canvas__window" />
  </div>
</template>
<script>
export default {
  name: 'MainCanvas'
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
    width: 90%;
    height: calc(90% - 80px);
  }
</style>
