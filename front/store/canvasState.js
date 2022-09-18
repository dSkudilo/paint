export const state = () => ({
  canvas: null
})

export const getters = {
  canvas (state) {
    return state.canvas
  }
}

export const mutations = {
  setCanvas (state, canvas) {
    state.canvas = canvas
  }
}

export const actions = {

}
