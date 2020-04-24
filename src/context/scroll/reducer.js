import actions from './enum/actions'

const reducer = (state, action) => {
  const { type } = action

  switch (type) {
    case actions.SCROLL_TO_ABOUT:
      return {
        ...state,
        content: {
          currentIndex: 0,
        },
      }
    case actions.SCROLL_TO_SKILLS:
      return {
        ...state,
        content: {
          currentIndex: 1,
        },
      }
    default:
      return state
  }
}

export default reducer