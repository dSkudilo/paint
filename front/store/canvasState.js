export const state = () => ({
  canvas: null
})

export const getters = {

}

export const mutations = {
  setCanvas (state, canvas) {
    console.log('dadada', canvas)
    state.canvas = canvas
  }
}

export const actions = {

}
