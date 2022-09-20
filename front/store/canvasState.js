export const state = () => ({
  canvas: null,
  undoList: [],
  redoList: [],
  username: ''
})

export const getters = {
  canvas (state) {
    return state.canvas
  },

  username (state) {
    return state.username
  }
}

export const mutations = {
  setCanvas (state, canvas) {
    state.canvas = canvas
  },

  setUsername (state, username) {
    state.username = username
  },

  pushToUndo (state, action) {
    state.undoList.push(action)
  },

  pushToRedo (state, action) {
    state.redoList.push(action)
  },

  undo (state) {
    const ctx = state.canvas.getContext('2d')
    if (state.undoList.length > 0) {
      const dataUrl = state.undoList.pop()
      state.redoList.push(state.canvas.toDataURL())
      const Img = new Image()
      Img.src = dataUrl
      Img.onload = () => {
        ctx.clearRect(0, 0, state.canvas.width, state.canvas.height)
        ctx.drawImage(Img, 0, 0, state.canvas.width, state.canvas.height)
      }
    } else {
      ctx.clearRect(0, 0, state.canvas.width, state.canvas.heigth)
    }
  },

  redo (state) {
    const ctx = state.canvas.getContext('2d')
    if (state.redoList.length > 0) {
      const dataUrl = state.redoList.pop()
      state.undoList.push(state.canvas.toDataURL())
      const Img = new Image()
      Img.src = dataUrl
      Img.onload = () => {
        ctx.clearRect(0, 0, state.canvas.width, state.canvas.height)
        ctx.drawImage(Img, 0, 0, state.canvas.width, state.canvas.height)
      }
    }
  }
}

export const actions = {

}
