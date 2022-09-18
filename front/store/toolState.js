export const state = () => ({
  tool: null
})

export const getters = {

}

export const mutations = {
  setTool (state, tool) {
    state.tool = tool
  },

  setFillColor (state, color) {
    state.tool.fillColor = color
  },

  setStrokeColor (state, color) {
    state.tool.strokeColor = color
  },

  setLineWidth (state, width) {
    state.tool.lineWidth = width
  }
}

export const actions = {

}
