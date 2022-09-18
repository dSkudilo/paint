<template>
  <div class="settingbar">
    <label
      for="line-width"
      class="settingbar__tool"
    >Толщина линии</label>
    <input
      class="settingbar__tool"
      id="line-width"
      type="number"
      min="1"
      max="50"
      v-model="width"
    >
    <label
      for="line-color"
      class="settingbar__tool"
    >Цвет обводки</label>
    <input
      class="settingbar__tool"
      id="line-color"
      type="color"
      min="1"
      max="50"
      v-model="lineColor"
    >
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'SettingBar',
  data () {
    return {
      width: 1,
      lineColor: null
    }
  },
  watch: {
    width (val) {
      this.setLineWidth(val)
    },
    lineColor (val) {
      this.setStrokeColor(val)
    }
  },
  methods: {
    ...mapMutations({
      setLineWidth: 'toolState/setLineWidth',
      setStrokeColor: 'toolState/setStrokeColor'
    })
  }
}
</script>

<style scoped>
  .settingbar {
    height: 40px;
    width: 100%;
    background-color: white;
    display: flex;
    align-items: center;
    widows: 100%;
    box-shadow: 0 4px 5px gray;
    position: absolute;
    top: 40px;
  }
  .settingbar__tool {
    margin-left: 10px;
  }
</style>
