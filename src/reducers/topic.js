const topic = (state = {}, action) => {
  switch (action.type) {
    case 'TOGGLE_TOPIC':
      if (state.id !== action.id) {
        return state;
      }

      return {
        ...state,
        checked: !state.checked
      };
    default:
      return state;
  }
};

export default topic;
